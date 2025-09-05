import { NextRequest, NextResponse } from 'next/server';
import { getGoogleMerchantSync, syncProductPriceToGoogleMerchant } from '@/lib/google-merchant-sync';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, price, currency = 'GBP', action = 'updatePrice' } = body;

    console.log(`🧪 Testing Google Merchant sync - Action: ${action}`);

    if (action === 'updatePrice') {
      if (!productId || !price) {
        return NextResponse.json(
          { error: 'productId and price are required' },
          { status: 400 }
        );
      }

      // Convert price to cents if it's not already
      const priceInCents = typeof price === 'number' && price < 100 
        ? Math.round(price * 100) 
        : price;

      console.log(`🔄 Testing price update for product ${productId}: ${priceInCents/100} ${currency}`);

      await syncProductPriceToGoogleMerchant(productId, priceInCents, currency);

      return NextResponse.json({
        success: true,
        message: `Price updated for product ${productId}`,
        data: {
          productId,
          price: priceInCents / 100,
          currency
        }
      });
    }

    if (action === 'syncAll') {
      console.log('🔄 Testing full sync to Google Merchant Center');
      
      const sync = getGoogleMerchantSync();
      await sync.syncAllProducts();

      return NextResponse.json({
        success: true,
        message: 'Full sync completed successfully'
      });
    }

    return NextResponse.json(
      { error: 'Invalid action. Use "updatePrice" or "syncAll"' },
      { status: 400 }
    );

  } catch (error) {
    console.error('❌ Google Merchant sync test failed:', error);
    
    return NextResponse.json(
      { 
        error: 'Sync test failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Google Merchant Sync Test Endpoint',
    usage: {
      updatePrice: 'POST with { "productId": "prod_xxx", "price": 7.99, "currency": "GBP" }',
      syncAll: 'POST with { "action": "syncAll" }'
    }
  });
}