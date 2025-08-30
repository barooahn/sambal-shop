import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sendOrderConfirmationEmail } from '@/lib/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error('⚠️ Webhook signature verification failed:', err.message);
      return new NextResponse('Invalid signature', { status: 400 });
    }

    console.log('🔔 Stripe webhook event received:', event.type);

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      
      console.log('💳 Processing completed checkout session:', session.id);
      
      try {
        // Get line items to include product details in the email
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
          expand: ['data.price.product']
        });

        // Get customer details
        const customer = session.customer_details;
        const shippingDetails = (session as any).shipping_details;
        
        if (!customer?.email) {
          console.error('❌ No customer email found in session');
          return new NextResponse('No customer email', { status: 400 });
        }

        // Format order items for email template
        const orderItems = lineItems.data.map((item) => {
          const product = item.price?.product as Stripe.Product;
          return {
            name: product?.name || 'Unknown Product',
            quantity: item.quantity || 1,
            price: ((item.amount_total || 0) / 100).toFixed(2),
            image: product?.images?.[0] || 'https://www.spiceislandindonesia.com/images/logo.webp'
          };
        });

        // Calculate total (convert from cents to pounds)
        const orderTotal = `£${((session.amount_total || 0) / 100).toFixed(2)}`;

        // Format shipping address if available
        const shippingAddress = shippingDetails?.address ? {
          name: shippingDetails.name || customer.name || '',
          line1: shippingDetails.address.line1 || '',
          line2: shippingDetails.address.line2 || '',
          city: shippingDetails.address.city || '',
          postal_code: shippingDetails.address.postal_code || '',
          country: shippingDetails.address.country || ''
        } : undefined;

        // Prepare order data
        const orderData = {
          email: customer.email,
          firstName: customer.name?.split(' ')[0] || '',
          orderNumber: session.id, // Use session ID as order number for now
          orderItems,
          orderTotal,
          shippingAddress
        };

        // Send order confirmation email (non-blocking)
        sendOrderConfirmationEmail(orderData).catch((error) => {
          console.error('❌ Failed to send order confirmation email:', error);
        });

        // Schedule review requests (non-blocking)
        try {
          const { scheduleReviewRequestFromOrder } = await import('@/lib/review-automation');
          scheduleReviewRequestFromOrder({
            customerEmail: customer.email,
            customerName: customer.name || '',
            orderNumber: session.id,
            estimatedDeliveryDays: 3
          }).catch((error) => {
            console.error('❌ Failed to schedule review requests:', error);
          });
          
          console.log(`⭐ Review requests scheduled for ${customer.email}`);
        } catch (error) {
          console.error('❌ Error importing review automation:', error);
        }

        console.log(`✅ Order confirmation email queued for ${customer.email}`);

      } catch (error) {
        console.error('❌ Error processing checkout session:', error);
      }
    }

    // Handle payment_intent.succeeded event
    else if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log('💰 Payment succeeded:', paymentIntent.id);
      
      // Additional logic for successful payments can be added here
      // e.g., updating order status in database, triggering fulfillment process
    }

    // Handle payment_intent.payment_failed event
    else if (event.type === 'payment_intent.payment_failed') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log('❌ Payment failed:', paymentIntent.id);
      
      // Handle failed payments - could send failure notification emails
    }

    // Log other events for debugging
    else {
      console.log(`ℹ️ Unhandled event type: ${event.type}`);
    }

    return new NextResponse('Webhook processed successfully', { status: 200 });

  } catch (error) {
    console.error('💥 Webhook error:', error);
    return new NextResponse('Webhook processing failed', { status: 500 });
  }
}

// Disable body parsing for raw stripe webhooks
export const config = {
  api: {
    bodyParser: false,
  },
};