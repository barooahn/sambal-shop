import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config({ path: '.env.local' });

console.log('🛒 Abandoned Cart Recovery System Test');
console.log('=====================================\n');

// SMTP Configuration
const transport = nodemailer.createTransport({
  host: process.env.ZEPTOMAIL_SMTP_HOST,
  port: parseInt(process.env.ZEPTOMAIL_SMTP_PORT),
  auth: {
    user: process.env.ZEPTOMAIL_SMTP_USER,
    pass: process.env.ZEPTOMAIL_SMTP_PASS,
  },
});

// Abandoned Cart Email Templates
const getAbandonedCartEmail1Html = (cartData) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Your sambals are waiting! - Spice Island Indonesia</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background: #fefdfb;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(127, 29, 43, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(180deg, #000106 0%, #7f1d2b 60%, #b52d3c 100%); padding: 40px 30px; text-align: center; color: white;">
      <h1 style="font-family: serif; font-size: 28px; color: #d4af37; margin: 0 0 10px 0;">SPICE ISLAND INDONESIA</h1>
      <h2 style="font-size: 24px; margin: 0; font-weight: normal;">Don't forget your delicious sambals! 🌶️</h2>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px 30px;">
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 0 0 20px 0;">
        ${cartData.firstName ? `Hi ${cartData.firstName},` : 'Hello!'}<br><br>
        You left some delicious sambals in your cart. Don't let these authentic Indonesian flavors slip away!
      </p>
      
      <!-- Cart Items -->
      <div style="background: #f9f9f9; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 20px 0;">In Your Cart:</h3>
        ${cartData.cartItems.map(item => `
          <div style="display: flex; align-items: center; padding: 15px 0; border-bottom: 1px solid #f0f0f0;">
            <div style="flex: 1;">
              <strong style="color: #7f1d2b;">${item.name}</strong><br>
              <span style="color: #44403c;">Quantity: ${item.quantity} | £${item.price} each</span>
            </div>
          </div>
        `).join('')}
        <div style="text-align: right; margin-top: 15px; font-size: 18px; font-weight: bold; color: #7f1d2b;">
          Total: ${cartData.cartTotal}
        </div>
      </div>
      
      <!-- Why Choose Us -->
      <div style="background: #fef9f1; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 20px 0;">Why Choose Spice Island Indonesia?</h3>
        <ul style="margin: 0; padding-left: 20px; color: #44403c;">
          <li>✨ Authentic recipes from Chef Yossie's Indonesian heritage</li>
          <li>🌿 Made with the finest Indonesian chilies and spices</li>
          <li>🚚 Fast UK delivery - your sambals arrive fresh</li>
          <li>⭐ Trusted by thousands of customers across the UK</li>
        </ul>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://www.spiceislandindonesia.com/cart" style="background: #c1272d; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; font-size: 16px;">Complete Your Order</a>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 30px 0 0 0;">
        Questions? Reply to this email or contact us at hello@spiceislandindonesia.com
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 20px 0 0 0;">
        Happy cooking!<br>
        <strong>The Spice Island Indonesia Team</strong>
      </p>
    </div>
    
    <!-- Footer -->
    <div style="background: #f5f4f2; padding: 20px 30px; text-align: center; font-size: 12px; color: #78716c;">
      <p style="margin: 0 0 10px 0;">Questions? Contact hello@spiceislandindonesia.com</p>
      <p style="margin: 0;">
        <a href="https://www.spiceislandindonesia.com/unsubscribe?email=${cartData.email}" style="color: #78716c;">Unsubscribe from cart reminders</a>
      </p>
    </div>
  </div>
</body>
</html>
`;

const getAbandonedCartEmail2Html = (cartData) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Still thinking it over? - Spice Island Indonesia</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background: #fefdfb;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(127, 29, 43, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(180deg, #000106 0%, #7f1d2b 60%, #b52d3c 100%); padding: 40px 30px; text-align: center; color: white;">
      <h1 style="font-family: serif; font-size: 28px; color: #d4af37; margin: 0 0 10px 0;">SPICE ISLAND INDONESIA</h1>
      <h2 style="font-size: 24px; margin: 0; font-weight: normal;">Your taste buds are calling... 🔥</h2>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px 30px;">
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 0 0 20px 0;">
        ${cartData.firstName ? `Hi ${cartData.firstName},` : 'Hello!'}<br><br>
        We noticed you're still deciding on those amazing sambals. Here's what our customers love about them:
      </p>
      
      <!-- Cart Items -->
      <div style="background: #f9f9f9; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 20px 0;">Still in Your Cart:</h3>
        ${cartData.cartItems.map(item => `
          <div style="display: flex; align-items: center; padding: 15px 0; border-bottom: 1px solid #f0f0f0;">
            <div style="flex: 1;">
              <strong style="color: #7f1d2b;">${item.name}</strong><br>
              <span style="color: #44403c;">Quantity: ${item.quantity} | £${item.price} each</span>
            </div>
          </div>
        `).join('')}
        <div style="text-align: right; margin-top: 15px; font-size: 18px; font-weight: bold; color: #7f1d2b;">
          Total: ${cartData.cartTotal}
        </div>
      </div>
      
      <!-- Customer Reviews -->
      <div style="background: #fef9f1; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 20px 0;">⭐ What our customers say:</h3>
        <div style="margin-bottom: 20px; padding: 15px; background: white; border-radius: 4px; border-left: 4px solid #d4af37;">
          <div style="font-style: italic; color: #44403c; margin-bottom: 10px;">
            "The most authentic Indonesian sambal I've found in the UK. Takes me straight back to Jakarta!"
          </div>
          <div style="font-weight: bold; color: #7f1d2b; font-size: 14px;">- Sarah M., verified customer</div>
        </div>
        <div style="padding: 15px; background: white; border-radius: 4px; border-left: 4px solid #d4af37;">
          <div style="font-style: italic; color: #44403c; margin-bottom: 10px;">
            "Incredible depth of flavor. One spoonful and you taste the tradition. Worth every penny!"
          </div>
          <div style="font-weight: bold; color: #7f1d2b; font-size: 14px;">- David K., verified customer</div>
        </div>
      </div>
      
      <!-- Limited Stock Alert -->
      <div style="background: linear-gradient(135deg, #dc2626, #991b1b); color: white; border-radius: 8px; padding: 25px; margin: 30px 0; text-align: center;">
        <h3 style="color: #fbbf24; margin: 0 0 15px 0;">⚠️ Limited Stock Alert</h3>
        <p style="margin: 0; font-size: 16px;">
          Some of our popular sambals are running low. Don't miss out on these authentic flavors!
        </p>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://www.spiceislandindonesia.com/cart" style="background: #c1272d; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; font-size: 16px;">Complete Your Order Now</a>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 30px 0 0 0;">
        Still have questions? Our team is here to help at hello@spiceislandindonesia.com
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 20px 0 0 0;">
        Selamat mencoba!<br>
        <strong>The Spice Island Indonesia Team</strong>
      </p>
    </div>
    
    <!-- Footer -->
    <div style="background: #f5f4f2; padding: 20px 30px; text-align: center; font-size: 12px; color: #78716c;">
      <p style="margin: 0 0 10px 0;">Questions? Contact hello@spiceislandindonesia.com</p>
      <p style="margin: 0;">
        <a href="https://www.spiceislandindonesia.com/unsubscribe?email=${cartData.email}" style="color: #78716c;">Unsubscribe from cart reminders</a>
      </p>
    </div>
  </div>
</body>
</html>
`;

const getAbandonedCartEmail3Html = (cartData) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Last chance + 10% OFF your Indonesian feast - Spice Island Indonesia</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background: #fefdfb;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(127, 29, 43, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(180deg, #000106 0%, #7f1d2b 60%, #b52d3c 100%); padding: 40px 30px; text-align: center; color: white;">
      <h1 style="font-family: serif; font-size: 28px; color: #d4af37; margin: 0 0 10px 0;">SPICE ISLAND INDONESIA</h1>
      <h2 style="font-size: 24px; margin: 0; font-weight: normal;">Your Indonesian adventure awaits! 🇮🇩</h2>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px 30px;">
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 0 0 20px 0;">
        ${cartData.firstName ? `Hi ${cartData.firstName},` : 'Hello!'}<br><br>
        This is our final reminder about the sambals waiting in your cart. After this, they'll be gone!
      </p>
      
      <!-- Special Offer -->
      <div style="background: linear-gradient(135deg, #c1272d, #7f1d2b); color: white; border-radius: 8px; padding: 30px; margin: 30px 0; text-align: center;">
        <h3 style="color: #d4af37; margin: 0 0 15px 0; font-size: 24px;">🎁 Special Offer - Just for You!</h3>
        <p style="margin: 0 0 20px 0; font-size: 18px;">Complete your order now and get <strong>10% off</strong></p>
        <div style="font-size: 24px; font-weight: bold; background: rgba(255,255,255,0.2); padding: 15px; border: 2px dashed #d4af37; border-radius: 4px; display: inline-block; letter-spacing: 2px;">
          SAVE10NOW
        </div>
        <p style="margin: 15px 0 0 0; font-size: 14px; opacity: 0.9;">Valid for 24 hours only</p>
      </div>
      
      <!-- Cart Items -->
      <div style="background: #f9f9f9; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 20px 0;">Your Cart Total:</h3>
        <div style="text-align: center;">
          <div style="font-size: 24px; font-weight: bold; color: #7f1d2b; text-decoration: line-through; opacity: 0.7;">
            ${cartData.cartTotal}
          </div>
          <div style="font-size: 28px; font-weight: bold; color: #c1272d; margin-top: 5px;">
            £${(parseFloat(cartData.cartTotal.replace('£', '')) * 0.9).toFixed(2)} with SAVE10NOW
          </div>
          <div style="background: #d4af37; color: white; padding: 8px 15px; border-radius: 20px; display: inline-block; margin-top: 10px; font-weight: bold;">
            You save £${(parseFloat(cartData.cartTotal.replace('£', '')) * 0.1).toFixed(2)}!
          </div>
        </div>
      </div>
      
      <!-- What You'll Miss -->
      <div style="background: #fef2f2; border: 2px solid #fca5a5; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #dc2626; margin: 0 0 15px 0;">⏰ Don't miss out on:</h3>
        <ul style="margin: 0; padding-left: 20px; color: #44403c;">
          <li>Authentic Indonesian flavors you can't find anywhere else in the UK</li>
          <li>Chef Yossie's family recipes passed down through generations</li>
          <li>Free recipe cards and cooking tips with every order</li>
          <li>The chance to experience true Indonesian cuisine at home</li>
        </ul>
      </div>
      
      <div style="text-align: center; margin: 40px 0;">
        <a href="https://www.spiceislandindonesia.com/cart" style="background: linear-gradient(135deg, #dc2626, #991b1b); color: white; padding: 20px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; font-size: 18px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 8px rgba(220, 38, 38, 0.3);">
          Complete Order & Save 10%
        </a>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <p style="font-size: 14px; color: #78716c;">
          Use code <strong>SAVE10NOW</strong> at checkout
        </p>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 30px 0 0 0;">
        This is our final reminder. Don't miss out on these authentic Indonesian flavors and your exclusive 10% discount!
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 20px 0 0 0;">
        Selamat mencoba (happy cooking!),<br>
        <strong>The Spice Island Indonesia Team</strong>
      </p>
    </div>
    
    <!-- Footer -->
    <div style="background: #f5f4f2; padding: 20px 30px; text-align: center; font-size: 12px; color: #78716c;">
      <p style="margin: 0 0 10px 0;">Questions? Contact hello@spiceislandindonesia.com</p>
      <p style="margin: 0;">
        <a href="https://www.spiceislandindonesia.com/unsubscribe?email=${cartData.email}" style="color: #78716c;">Unsubscribe from cart reminders</a>
      </p>
    </div>
  </div>
</body>
</html>
`;

// Email sending function
const sendEmail = async (to, subject, html) => {
  try {
    const result = await transport.sendMail({
      from: `"Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL}>`,
      to,
      subject,
      html
    });
    return { success: true, messageId: result.messageId };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Test the complete abandoned cart sequence
const testAbandonedCartSequence = async () => {
  const cartData = {
    email: 'barooahn@gmail.com',
    firstName: 'John',
    cartTotal: '£25.50',
    cartItems: [
      { name: 'Sambal Oelek - Authentic Indonesian Chili Paste', quantity: 1, price: '14.00' },
      { name: 'Sambal Goreng - Premium Sweet & Spicy', quantity: 1, price: '8.50' }
    ]
  };

  const emails = [
    {
      subject: "Your sambals are waiting! 🌶️",
      html: getAbandonedCartEmail1Html(cartData),
      delay: 0
    },
    {
      subject: "Still thinking it over? Here's what you're missing...",
      html: getAbandonedCartEmail2Html(cartData),
      delay: 5000 // 5 seconds
    },
    {
      subject: "Last chance + 10% OFF your Indonesian feast 🇮🇩",
      html: getAbandonedCartEmail3Html(cartData),
      delay: 10000 // 10 seconds
    }
  ];

  console.log('🚀 Starting abandoned cart recovery sequence test...\n');
  console.log(`📦 Cart details:`);
  console.log(`   Customer: ${cartData.firstName} (${cartData.email})`);
  console.log(`   Items: ${cartData.cartItems.length} products`);
  console.log(`   Total: ${cartData.cartTotal}\n`);

  for (let i = 0; i < emails.length; i++) {
    const email = emails[i];
    
    setTimeout(async () => {
      console.log(`📧 Sending abandoned cart email ${i + 1}/3...`);
      console.log(`   Subject: ${email.subject}`);
      
      const result = await sendEmail(cartData.email, email.subject, email.html);
      
      if (result.success) {
        console.log(`✅ Email ${i + 1} sent successfully!`);
        console.log(`   Message ID: ${result.messageId}\n`);
      } else {
        console.log(`❌ Email ${i + 1} failed:`, result.error, '\n');
      }
    }, email.delay);
  }

  // Final summary after all emails are scheduled
  setTimeout(() => {
    console.log('🎉 Abandoned Cart Recovery Sequence Test Complete!');
    console.log('=================================================\n');
    console.log('📊 Email Sequence Summary:');
    console.log('✅ Email 1: Gentle reminder with cart contents');
    console.log('✅ Email 2: Social proof and limited stock urgency');
    console.log('✅ Email 3: Final chance with 10% discount code');
    console.log('\n💡 Production Implementation Notes:');
    console.log('• Email 1 should be sent 1 hour after cart abandonment');
    console.log('• Email 2 should be sent 24 hours after abandonment');
    console.log('• Email 3 should be sent 72 hours after abandonment');
    console.log('• Discount code SAVE10NOW needs to be configured in Stripe');
    console.log('• Use a proper job queue system for production (Redis, database-based)');
    console.log('\nCheck your inbox for all three test emails! 📬');
  }, 15000); // 15 seconds to allow all emails to be sent
};

// Run the test
testAbandonedCartSequence();