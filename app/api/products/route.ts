import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { products as staticProducts } from '@/src/stripe-config';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
});

// Enhanced product interface with Stripe data
export interface EnhancedProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
  price: string;
  priceAmount: number;
  currency: string;
  active: boolean;
  images: string[];
  metadata: Record<string, string>;
  stripeUpdatedAt?: number;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('id');
    const priceId = searchParams.get('priceId');

    // If requesting specific product by ID or price ID
    if (productId || priceId) {
      const staticProduct = productId 
        ? staticProducts.find(p => p.id === productId)
        : staticProducts.find(p => p.priceId === priceId);

      if (!staticProduct) {
        return NextResponse.json(
          { error: 'Product not found' },
          { status: 404 }
        );
      }

      const enhancedProduct = await fetchStripeProductData(staticProduct);
      return NextResponse.json(enhancedProduct);
    }

    // Fetch all products
    const enhancedProducts = await Promise.all(
      staticProducts.map(product => fetchStripeProductData(product))
    );

    return NextResponse.json({
      products: enhancedProducts,
      count: enhancedProducts.length,
      lastUpdated: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error fetching Stripe products:', error);
    
    // Fallback to static data if Stripe fails
    return NextResponse.json({
      products: staticProducts,
      count: staticProducts.length,
      lastUpdated: new Date().toISOString(),
      error: 'Using fallback data - Stripe unavailable'
    });
  }
}

async function fetchStripeProductData(staticProduct: typeof staticProducts[0]): Promise<EnhancedProduct> {
  try {
    // Fetch product and price data from Stripe in parallel
    const [stripeProduct, stripePrice] = await Promise.all([
      stripe.products.retrieve(staticProduct.id),
      stripe.prices.retrieve(staticProduct.priceId)
    ]);

    // Format price amount to display format
    const priceAmount = stripePrice.unit_amount || 0;
    const currency = stripePrice.currency.toUpperCase();
    const formattedPrice = formatPrice(priceAmount, currency);

    const enhancedProduct: EnhancedProduct = {
      id: staticProduct.id,
      priceId: staticProduct.priceId,
      name: stripeProduct.name || staticProduct.name,
      description: stripeProduct.description || staticProduct.description,
      mode: staticProduct.mode,
      price: formattedPrice,
      priceAmount: priceAmount / 100, // Convert from cents
      currency,
      active: stripeProduct.active && stripePrice.active,
      images: stripeProduct.images || [],
      metadata: stripeProduct.metadata || {},
      stripeUpdatedAt: stripeProduct.updated
    };

    return enhancedProduct;

  } catch (error) {
    console.error(`Error fetching Stripe data for product ${staticProduct.id}:`, error);
    
    // Return static data with enhanced structure if Stripe fails
    return {
      ...staticProduct,
      priceAmount: parseFloat(staticProduct.price.replace(/[£$€]/g, '')),
      currency: 'GBP',
      active: true,
      images: [],
      metadata: {},
      error: 'Stripe data unavailable'
    } as EnhancedProduct;
  }
}

function formatPrice(amountInCents: number, currency: string): string {
  const amount = amountInCents / 100;
  
  switch (currency) {
    case 'GBP':
      return `£${amount.toFixed(2)}`;
    case 'USD':
      return `$${amount.toFixed(2)}`;
    case 'EUR':
      return `€${amount.toFixed(2)}`;
    default:
      return `${currency} ${amount.toFixed(2)}`;
  }
}