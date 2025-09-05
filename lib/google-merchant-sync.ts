import { google } from 'googleapis';
import { products as staticProducts } from '@/src/stripe-config';

// Configuration
const CONFIG = {
  merchantId: process.env.GOOGLE_MERCHANT_ID || '',
  keyFilePath: process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH || './google-service-account-key.json',
  targetCountry: 'GB',
  contentLanguage: 'en',
  channel: 'online',
  brand: 'Spice Island Indonesia',
  mpn_base: 'SII-',
};

interface GoogleMerchantProduct {
  offerId: string;
  title: string;
  description: string;
  link: string;
  imageLink: string;
  price: {
    value: string;
    currency: string;
  };
  availability: string;
  condition: string;
  brand: string;
  mpn: string;
  gtin?: string;
  googleProductCategory?: string;
  targetCountry: string;
  contentLanguage: string;
  channel: string;
}

export class GoogleMerchantPriceSync {
  private content: any;
  private auth: any;

  constructor() {
    this.initializeAuth();
  }

  private async initializeAuth() {
    try {
      // Use service account key from environment or file
      const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_KEY 
        ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)
        : require(CONFIG.keyFilePath);

      this.auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/content']
      });

      this.content = google.content({
        version: 'v2.1',
        auth: this.auth
      });

    } catch (error) {
      console.error('Failed to initialize Google Merchant auth:', error);
      throw error;
    }
  }

  /**
   * Update a single product price in Google Merchant Center
   */
  async updateProductPrice(productId: string, newPrice: number, currency: string = 'GBP'): Promise<void> {
    try {
      await this.initializeAuth();

      // Find the static product configuration
      const staticProduct = staticProducts.find(p => p.id === productId);
      if (!staticProduct) {
        console.error(`Product ${productId} not found in static configuration`);
        return;
      }

      // Format price for Google Merchant
      const formattedPrice = `${newPrice.toFixed(2)} ${currency}`;

      // Create the product update
      const merchantProduct: Partial<GoogleMerchantProduct> = {
        offerId: staticProduct.id,
        price: {
          value: newPrice.toFixed(2),
          currency: currency
        }
      };

      console.log(`🔄 Updating Google Merchant price for ${staticProduct.name}: ${formattedPrice}`);

      // Update the product in Google Merchant Center
      const response = await this.content.products.insert({
        merchantId: CONFIG.merchantId,
        requestBody: merchantProduct
      });

      console.log(`✅ Successfully updated Google Merchant price for product ${productId}`);
      return response.data;

    } catch (error) {
      console.error(`❌ Failed to update Google Merchant price for product ${productId}:`, error);
      throw error;
    }
  }

  /**
   * Sync all products to Google Merchant Center
   */
  async syncAllProducts(): Promise<void> {
    try {
      await this.initializeAuth();

      console.log('🔄 Starting full Google Merchant Center sync...');

      for (const product of staticProducts) {
        try {
          // Parse price from static config
          const priceValue = parseFloat(product.price.replace(/[£$€]/g, ''));
          await this.updateProductPrice(product.id, priceValue);
          
          // Add small delay to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 100));
          
        } catch (error) {
          console.error(`❌ Failed to sync product ${product.id}:`, error);
          // Continue with other products even if one fails
        }
      }

      console.log('✅ Google Merchant Center sync completed');

    } catch (error) {
      console.error('❌ Google Merchant Center sync failed:', error);
      throw error;
    }
  }

  /**
   * Batch update multiple product prices
   */
  async batchUpdatePrices(updates: Array<{productId: string, price: number, currency?: string}>): Promise<void> {
    console.log(`🔄 Starting batch price update for ${updates.length} products...`);

    for (const update of updates) {
      try {
        await this.updateProductPrice(update.productId, update.price, update.currency);
        
        // Small delay between updates
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        console.error(`❌ Failed to update price for ${update.productId}:`, error);
        // Continue with other updates
      }
    }

    console.log('✅ Batch price update completed');
  }
}

// Singleton instance for reuse
let syncInstance: GoogleMerchantPriceSync | null = null;

export function getGoogleMerchantSync(): GoogleMerchantPriceSync {
  if (!syncInstance) {
    syncInstance = new GoogleMerchantPriceSync();
  }
  return syncInstance;
}

// Utility function to sync a single product price
export async function syncProductPriceToGoogleMerchant(
  productId: string, 
  priceInCents: number, 
  currency: string = 'GBP'
): Promise<void> {
  const sync = getGoogleMerchantSync();
  const priceInUnits = priceInCents / 100; // Convert from cents
  await sync.updateProductPrice(productId, priceInUnits, currency);
}

// Utility function for webhook integration
export async function handleStripeProductPriceUpdate(stripeEvent: any): Promise<void> {
  try {
    const price = stripeEvent.data.object;
    const productId = price.product;
    const priceAmount = price.unit_amount;
    const currency = price.currency.toUpperCase();

    console.log(`🔔 Handling Stripe price update for product ${productId}: ${priceAmount/100} ${currency}`);

    await syncProductPriceToGoogleMerchant(productId, priceAmount, currency);
    
    console.log(`✅ Successfully synced price update to Google Merchant for product ${productId}`);

  } catch (error) {
    console.error('❌ Failed to handle Stripe price update:', error);
    // Don't throw - we don't want to fail the webhook
  }
}