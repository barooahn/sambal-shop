import { NextRequest, NextResponse } from 'next/server';
import { startQuickAbandonedCartTest, exampleAbandonedCartData, trackAbandonedCart } from '@/lib/abandoned-cart';

export async function POST(request: NextRequest) {
  try {
    const { mode } = await request.json();
    
    console.log('🧪 Testing Abandoned Cart Recovery System...');

    if (mode === 'quick' || !mode) {
      // Quick test mode - sends all 3 emails with 10-second intervals
      console.log('🚀 Starting QUICK test sequence (10-second intervals)...');
      
      await startQuickAbandonedCartTest(exampleAbandonedCartData);
      
      return NextResponse.json({
        success: true,
        message: 'Quick abandoned cart test started!',
        mode: 'quick_test',
        schedule: {
          email1: '10 seconds',
          email2: '20 seconds',
          email3: '30 seconds'
        },
        cartData: {
          email: exampleAbandonedCartData.email,
          itemCount: exampleAbandonedCartData.cartItems.length,
          total: exampleAbandonedCartData.cartTotal,
          items: exampleAbandonedCartData.cartItems.map(item => `${item.name} (Qty: ${item.quantity})`)
        },
        emailFeatures: {
          email1: ['Gentle reminder', 'Cart items display', 'Why choose us benefits'],
          email2: ['Customer reviews', 'Limited stock urgency', 'Social proof'],
          email3: ['10% discount code: COMEBACK10', 'Final chance messaging', 'What they\'ll miss out on']
        }
      });
    }
    
    if (mode === 'production') {
      // Production mode - uses real timing (1 hour, 24 hours, 3 days)
      console.log('📊 Starting PRODUCTION sequence (real timing)...');
      
      await trackAbandonedCart(exampleAbandonedCartData);
      
      return NextResponse.json({
        success: true,
        message: 'Production abandoned cart recovery started!',
        mode: 'production',
        schedule: {
          email1: '1 hour',
          email2: '24 hours', 
          email3: '72 hours (3 days)'
        },
        cartData: {
          email: exampleAbandonedCartData.email,
          itemCount: exampleAbandonedCartData.cartItems.length,
          total: exampleAbandonedCartData.cartTotal
        }
      });
    }

  } catch (error) {
    console.error('💥 Error in abandoned cart test:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Abandoned cart test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Abandoned Cart Recovery Test Endpoint',
    usage: {
      quick_test: 'POST with {"mode": "quick"} - sends 3 emails with 10-second intervals',
      production_test: 'POST with {"mode": "production"} - uses real timing (1h, 24h, 72h)'
    },
    email_sequence: {
      email1: {
        timing: '1 hour after abandonment',
        subject: 'Don\'t Miss Out on Authentic Indonesian Flavors',
        features: ['Gentle reminder', 'Cart items display', 'Benefits of choosing us']
      },
      email2: {
        timing: '24 hours after abandonment', 
        subject: 'Your Sambals Are Almost Gone! Limited Stock',
        features: ['Customer reviews', 'Urgency/scarcity', 'Social proof']
      },
      email3: {
        timing: '72 hours after abandonment',
        subject: 'Final Call: 10% Off Your Sambal Collection',
        features: ['10% discount code', 'Final chance messaging', 'Unsubscribe option']
      }
    },
    integration_notes: {
      trigger: 'Call trackAbandonedCart() when user adds to cart but doesn\'t complete purchase',
      timing: 'System uses setTimeout - requires server uptime (recommend job queue for production)',
      discount_codes: 'COMEBACK10 code needs to be configured in your payment system'
    }
  });
}