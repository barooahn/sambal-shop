import { NextRequest, NextResponse } from 'next/server';
import { sendOrderConfirmationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    console.log('🧪 Testing Order Confirmation Email...');

    // Test order data
    const testOrderData = {
      email: 'barooahn@gmail.com',
      firstName: 'John',
      orderNumber: '#ORD-2025-0001',
      orderItems: [
        {
          name: 'Sambal Oelek - Authentic Indonesian Chili Paste',
          quantity: 2,
          price: '14.00',
          image: 'https://www.spiceislandindonesia.com/images/sambal-oelek.webp'
        },
        {
          name: 'Sambal Goreng - Premium Sweet & Spicy',
          quantity: 1,
          price: '8.50',
          image: 'https://www.spiceislandindonesia.com/images/sambal-goreng.webp'
        },
        {
          name: 'Sambal Bali - Aromatic Spicy Blend',
          quantity: 1,
          price: '9.50',
          image: 'https://www.spiceislandindonesia.com/images/sambal-bali.webp'
        }
      ],
      orderTotal: '£32.00',
      shippingAddress: {
        name: 'John Smith',
        line1: '123 Oak Street',
        line2: 'Apartment 4B',
        city: 'London',
        postal_code: 'SW1A 1AA',
        country: 'United Kingdom'
      }
    };

    console.log(`📧 Sending to: ${testOrderData.email}`);
    console.log(`📦 Order: ${testOrderData.orderNumber}`);
    console.log(`💰 Total: ${testOrderData.orderTotal}`);

    const result = await sendOrderConfirmationEmail(testOrderData);

    if (result.success) {
      console.log('✅ Order confirmation email sent successfully!');
      
      return NextResponse.json({
        success: true,
        message: 'Order confirmation email sent successfully!',
        details: {
          email: testOrderData.email,
          orderNumber: testOrderData.orderNumber,
          itemCount: testOrderData.orderItems.length,
          total: testOrderData.orderTotal,
          features: [
            'Order details with product images',
            'Shipping address information',
            'First recipe suggestion (Sambal Nasi Goreng)',
            'Storage tips and what to expect next',
            'Links to recipe ideas and support'
          ]
        }
      });
    } else {
      console.error('❌ Failed to send order confirmation email:', result.error);
      
      return NextResponse.json({
        success: false,
        message: 'Failed to send order confirmation email',
        error: result.error
      }, { status: 500 });
    }

  } catch (error) {
    console.error('💥 Error in test endpoint:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Test endpoint error',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Order Confirmation Email Test Endpoint',
    usage: 'Send a POST request to test the order confirmation email',
    webhook_setup: {
      endpoint: '/api/webhooks/stripe',
      events: ['checkout.session.completed'],
      description: 'Automatically sends order confirmation emails when Stripe checkout completes'
    }
  });
}