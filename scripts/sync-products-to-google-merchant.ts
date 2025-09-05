#!/usr/bin/env tsx

/**
 * Google Merchant Center Product Sync Script
 * Syncs Stripe products to Google Merchant Center using the Merchant API
 * 
 * Usage: yarn tsx scripts/sync-products-to-google-merchant.ts
 */

import { products } from '../src/stripe-config';
import { google } from 'googleapis';
import * as path from 'path';
import * as fs from 'fs';

// Configuration
const CONFIG = {
  merchantId: process.env.GOOGLE_MERCHANT_ID || '', // Your Merchant Center ID
  keyFilePath: process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH || './google-service-account-key.json',
  targetCountry: 'GB', // UK market
  contentLanguage: 'en',
  channel: 'online',
  brand: 'Spice Island Indonesia',
  mpn_base: 'SII-', // Manufacturer Part Number prefix
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

class GoogleMerchantSync {
  private content: any;
  private auth: any;

  constructor() {
    this.setupAuth();
  }

  private async setupAuth() {
    try {
      // Load service account key
      const keyPath = path.resolve(CONFIG.keyFilePath);
      
      if (!fs.existsSync(keyPath)) {
        throw new Error(`Service account key file not found: ${keyPath}`);
      }

      const key = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
      
      // Create JWT auth client
      this.auth = new google.auth.JWT({
        email: key.client_email,
        key: key.private_key,
        scopes: ['https://www.googleapis.com/auth/content'],
      });

      // Initialize Content API client
      this.content = google.content({
        version: 'v2.1',
        auth: this.auth,
      });

      console.log('✅ Google API authentication initialized');
    } catch (error) {
      console.error('❌ Failed to setup Google API authentication:', error);
      throw error;
    }
  }

  private mapStripeToGoogleProduct(stripeProduct: typeof products[0], index: number): GoogleMerchantProduct {
    // Extract numeric price from string like "£7.49"
    const numericPrice = stripeProduct.price.replace('£', '');
    
    // Map to actual product URLs on your website
    const productUrlMapping: Record<string, string> = {
      'prod_SqMc4jVjxfr7xF': 'https://www.spiceislandindonesia.com/sambal-oelek-uk',        // Sambal Oelek 185g
      'prod_SqMbub2ongdTXd': 'https://www.spiceislandindonesia.com/sambal-bali-aromatic-spicy', // Sambal Bali 200g
      'prod_SqMXLUlQlnvRCw': 'https://www.spiceislandindonesia.com/sambal-goreng-uk',       // Sambal Goreng 185g
    };
    
    const productUrl = productUrlMapping[stripeProduct.id] || `https://www.spiceislandindonesia.com/products/${stripeProduct.id}`;
    
    // Map to actual image file names (without size info)
    const imageMapping: Record<string, string> = {
      'prod_SqMc4jVjxfr7xF': 'sambal-oelek-main.jpg',      // Sambal Oelek 185g
      'prod_SqMbub2ongdTXd': 'sambal-bali-main.jpg',       // Sambal Bali 200g
      'prod_SqMXLUlQlnvRCw': 'sambal-goreng-main.jpg',     // Sambal Goreng 185g
    };
    
    const imageFileName = imageMapping[stripeProduct.id] || `${stripeProduct.id}-main.jpg`;
    const imageUrl = `https://www.spiceislandindonesia.com/images/${imageFileName}`;

    // Create Google-compatible offer ID based on product name
    const productSlug = stripeProduct.name.toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_]/g, '');
    const googleOfferId = `sii_${productSlug}`;

    return {
      offerId: googleOfferId,
      title: stripeProduct.name,
      description: stripeProduct.description,
      link: productUrl,
      imageLink: imageUrl,
      price: {
        value: numericPrice,
        currency: 'GBP',
      },
      availability: 'in stock',
      condition: 'new',
      brand: CONFIG.brand,
      mpn: `${CONFIG.mpn_base}${String(index + 1).padStart(3, '0')}`,
      googleProductCategory: '499676', // Condiments & Sauces category ID
      targetCountry: CONFIG.targetCountry,
      contentLanguage: CONFIG.contentLanguage,
      channel: CONFIG.channel,
    };
  }

  private async insertProduct(product: GoogleMerchantProduct): Promise<void> {
    try {
      const response = await this.content.products.insert({
        merchantId: CONFIG.merchantId,
        requestBody: product,
      });

      console.log(`✅ Successfully synced: ${product.title}`);
      console.log(`   Offer ID: ${product.offerId}`);
      console.log(`   Price: ${product.price.currency} ${product.price.value}`);
      
      return response.data;
    } catch (error: any) {
      console.error(`❌ Failed to sync ${product.title}:`, error.message);
      
      if (error.response?.data?.error?.errors) {
        error.response.data.error.errors.forEach((err: any) => {
          console.error(`   - ${err.reason}: ${err.message}`);
        });
      }
      
      throw error;
    }
  }

  private async updateProduct(product: GoogleMerchantProduct): Promise<void> {
    try {
      const response = await this.content.products.update({
        merchantId: CONFIG.merchantId,
        productId: product.offerId,
        requestBody: product,
      });

      console.log(`✅ Successfully updated: ${product.title}`);
      return response.data;
    } catch (error: any) {
      console.error(`❌ Failed to update ${product.title}:`, error.message);
      throw error;
    }
  }

  private async productExists(offerId: string): Promise<boolean> {
    try {
      await this.content.products.get({
        merchantId: CONFIG.merchantId,
        productId: offerId,
      });
      return true;
    } catch (error: any) {
      if (error.response?.status === 404) {
        return false;
      }
      throw error;
    }
  }

  public async syncAllProducts(): Promise<void> {
    console.log('🚀 Starting product sync to Google Merchant Center...');
    console.log(`📦 Found ${products.length} products in Stripe config`);
    console.log(`🎯 Target Merchant ID: ${CONFIG.merchantId}`);
    console.log('');

    if (!CONFIG.merchantId) {
      throw new Error('GOOGLE_MERCHANT_ID environment variable is required');
    }

    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < products.length; i++) {
      const stripeProduct = products[i];
      const googleProduct = this.mapStripeToGoogleProduct(stripeProduct, i);

      try {
        console.log(`➕ Creating new product: ${googleProduct.title}`);
        console.log(`   Offer ID: ${googleProduct.offerId}`);
        await this.insertProduct(googleProduct);
        successCount++;
      } catch (error: any) {
        // If product already exists, try updating it
        if (error.response?.status === 409 || error.message?.includes('already exists')) {
          try {
            console.log(`📝 Product exists, updating: ${googleProduct.title}`);
            await this.updateProduct(googleProduct);
            successCount++;
          } catch (updateError) {
            errorCount++;
            console.error(`💥 Error updating ${stripeProduct.name}:`, updateError);
          }
        } else {
          errorCount++;
          console.error(`💥 Error processing ${stripeProduct.name}:`, error);
        }
      }

      // Add delay between requests to avoid rate limiting
      if (i < products.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    console.log('');
    console.log('📊 Sync Results:');
    console.log(`   ✅ Successful: ${successCount}`);
    console.log(`   ❌ Failed: ${errorCount}`);
    console.log(`   📦 Total: ${products.length}`);
    
    if (errorCount === 0) {
      console.log('🎉 All products synced successfully!');
    } else {
      console.log('⚠️  Some products failed to sync. Check the errors above.');
    }
  }

  public async listCurrentProducts(): Promise<void> {
    try {
      console.log('📋 Current products in Google Merchant Center:');
      
      const response = await this.content.products.list({
        merchantId: CONFIG.merchantId,
      });

      const products = response.data.resources || [];
      
      if (products.length === 0) {
        console.log('   No products found');
        return;
      }

      products.forEach((product: any, index: number) => {
        console.log(`   ${index + 1}. ${product.title} (${product.offerId})`);
        console.log(`      Price: ${product.price?.currency} ${product.price?.value}`);
        console.log(`      Status: ${product.status || 'Unknown'}`);
      });
    } catch (error: any) {
      console.error('❌ Failed to list products:', error.message);
    }
  }
}

// CLI execution
async function main() {
  try {
    const sync = new GoogleMerchantSync();
    
    const args = process.argv.slice(2);
    const command = args[0] || 'sync';

    switch (command) {
      case 'sync':
        await sync.syncAllProducts();
        break;
      case 'list':
        await sync.listCurrentProducts();
        break;
      default:
        console.log('Usage:');
        console.log('  yarn tsx scripts/sync-products-to-google-merchant.ts [sync|list]');
        console.log('');
        console.log('Commands:');
        console.log('  sync  - Sync Stripe products to Google Merchant Center (default)');
        console.log('  list  - List current products in Google Merchant Center');
    }
  } catch (error) {
    console.error('💥 Script failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

export { GoogleMerchantSync };