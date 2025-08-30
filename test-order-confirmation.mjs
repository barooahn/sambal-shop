import { sendOrderConfirmationEmail } from './lib/email.js';

// Test order confirmation email
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

console.log('🧪 Testing Order Confirmation Email...');
console.log(`📧 Sending to: ${testOrderData.email}`);
console.log(`📦 Order: ${testOrderData.orderNumber}`);
console.log(`💰 Total: ${testOrderData.orderTotal}`);

try {
  const result = await sendOrderConfirmationEmail(testOrderData);
  
  if (result.success) {
    console.log('✅ Order confirmation email sent successfully!');
    console.log('📋 Email includes:');
    console.log(`   • Order details with ${testOrderData.orderItems.length} items`);
    console.log('   • Shipping address information');
    console.log('   • First recipe suggestion (Sambal Nasi Goreng)');
    console.log('   • Storage tips and what to expect next');
    console.log('   • Links to recipe ideas and support');
  } else {
    console.error('❌ Failed to send order confirmation email:', result.error);
  }
} catch (error) {
  console.error('💥 Error:', error);
}

console.log('\n🎯 Next Steps:');
console.log('1. Configure Stripe webhook endpoint in your Stripe dashboard');
console.log('2. Set the webhook URL to: https://your-domain.com/api/webhooks/stripe');
console.log('3. Enable the "checkout.session.completed" event');
console.log('4. Update STRIPE_WEBHOOK_SECRET in your .env.local file');