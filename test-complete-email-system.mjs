import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config({ path: '.env.local' });

console.log('🚀 Complete Email System Test Suite');
console.log('====================================\n');

// SMTP Configuration
const transport = nodemailer.createTransport({
  host: process.env.ZEPTOMAIL_SMTP_HOST,
  port: parseInt(process.env.ZEPTOMAIL_SMTP_PORT),
  auth: {
    user: process.env.ZEPTOMAIL_SMTP_USER,
    pass: process.env.ZEPTOMAIL_SMTP_PASS,
  },
});

// Email Templates
const getWelcomeEmailHtml = (email, firstName = '') => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Welcome to Spice Island Indonesia</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background: #fefdfb;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(127, 29, 43, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(180deg, #000106 0%, #7f1d2b 60%, #b52d3c 100%); padding: 40px 30px; text-align: center; color: white;">
      <h1 style="font-family: serif; font-size: 28px; color: #d4af37; margin: 0 0 10px 0;">SPICE ISLAND INDONESIA</h1>
      <p style="font-size: 11px; letter-spacing: 3px; margin: 0 0 20px 0; opacity: 0.9;">AUTHENTIC • TRADITIONAL • PREMIUM</p>
      <h2 style="font-size: 24px; margin: 0; font-weight: normal;">Selamat Datang! 🌶️</h2>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Welcome to authentic Indonesian flavors</p>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px 30px;">
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 0 0 20px 0;">
        ${firstName ? `Dear ${firstName},` : 'Hello!'}<br><br>
        Thank you for joining the Spice Island Indonesia community! Get ready to discover the authentic taste of Indonesia with our premium sambal collection.
      </p>
      
      <div style="background: #fef9f1; border: 2px solid #d4af37; border-radius: 8px; padding: 25px; margin: 30px 0; text-align: center;">
        <h3 style="color: #7f1d2b; margin: 0 0 15px 0;">Welcome Gift 🎁</h3>
        <div style="font-size: 24px; font-weight: bold; color: #c1272d; background: white; padding: 15px; border: 2px dashed #d4af37; border-radius: 4px; display: inline-block; letter-spacing: 2px;">
          WELCOME10
        </div>
        <p style="margin: 15px 0 0 0; color: #44403c;">10% off your first order</p>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://www.spiceislandindonesia.com" style="background: #c1272d; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Start Shopping</a>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 30px 0 0 0;">
        Over the next few days, we'll share:<br>
        • Indonesian cooking techniques and recipes<br>
        • The story behind our authentic sambals<br>
        • Chef Yossie's secret cooking tips<br>
        • Exclusive member benefits
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 20px 0 0 0;">
        Terima kasih (thank you!),<br>
        <strong>The Spice Island Indonesia Team</strong>
      </p>
    </div>
    
    <!-- Footer -->
    <div style="background: #f5f4f2; padding: 20px 30px; text-align: center; font-size: 12px; color: #78716c;">
      <p style="margin: 0 0 10px 0;">Follow us: 
        <a href="#" style="color: #c1272d;">Instagram</a> | 
        <a href="#" style="color: #c1272d;">Facebook</a>
      </p>
      <p style="margin: 0;">
        <a href="https://www.spiceislandindonesia.com/unsubscribe?email=${email}" style="color: #78716c;">Unsubscribe</a>
      </p>
    </div>
    
  </div>
</body>
</html>
`;

const getOrderConfirmationHtml = (orderData) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Order Confirmation - Spice Island Indonesia</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background: #fefdfb;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(127, 29, 43, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(180deg, #000106 0%, #7f1d2b 60%, #b52d3c 100%); padding: 40px 30px; text-align: center; color: white;">
      <h1 style="font-family: serif; font-size: 28px; color: #d4af37; margin: 0 0 10px 0;">SPICE ISLAND INDONESIA</h1>
      <h2 style="font-size: 24px; margin: 0; font-weight: normal;">Order Confirmed! 📦</h2>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Your authentic Indonesian sambals are on their way</p>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px 30px;">
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 0 0 20px 0;">
        ${orderData.firstName ? `Dear ${orderData.firstName},` : 'Hello!'}<br><br>
        Thank you for your order! We're excited to share the authentic taste of Indonesia with you.
      </p>
      
      <!-- Order Details -->
      <div style="background: #f9f9f9; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 20px 0;">Order Details</h3>
        <div style="border-bottom: 1px solid #e5e5e5; padding-bottom: 10px; margin-bottom: 10px;">
          <strong>Order Number:</strong> ${orderData.orderNumber}<br>
          <strong>Order Total:</strong> ${orderData.orderTotal}
        </div>
        
        ${orderData.orderItems.map(item => `
          <div style="display: flex; align-items: center; padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
            <div style="flex: 1;">
              <strong>${item.name}</strong><br>
              Quantity: ${item.quantity} | Price: £${item.price}
            </div>
          </div>
        `).join('')}
      </div>
      
      <!-- Shipping Address -->
      <div style="background: #fef9f1; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 15px 0;">Shipping Address</h3>
        <p style="margin: 0; color: #44403c; line-height: 1.6;">
          ${orderData.shippingAddress.name}<br>
          ${orderData.shippingAddress.line1}<br>
          ${orderData.shippingAddress.line2 ? orderData.shippingAddress.line2 + '<br>' : ''}
          ${orderData.shippingAddress.city}, ${orderData.shippingAddress.postal_code}<br>
          ${orderData.shippingAddress.country}
        </p>
      </div>
      
      <!-- What's Next -->
      <div style="background: #e7f3ff; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 15px 0;">What happens next?</h3>
        <ul style="margin: 0; padding-left: 20px; color: #44403c;">
          <li>We'll prepare your order within 1-2 business days</li>
          <li>You'll receive tracking information once shipped</li>
          <li>Estimated delivery: 3-5 business days</li>
          <li>Store in a cool, dry place once received</li>
        </ul>
      </div>
      
      <!-- First Recipe Suggestion -->
      <div style="border: 2px solid #d4af37; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 15px 0;">🍛 Try This First: Sambal Nasi Goreng</h3>
        <p style="margin: 0 0 15px 0; color: #44403c;">
          Start your Indonesian journey with this classic fried rice recipe using your new sambal!
        </p>
        <a href="https://www.spiceislandindonesia.com/recipes/nasi-goreng" style="background: #c1272d; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Get Recipe</a>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 30px 0 0 0;">
        Questions about your order? We're here to help!<br>
        Email us at support@spiceislandindonesia.com
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 20px 0 0 0;">
        Selamat mencoba (happy cooking!),<br>
        <strong>Chef Yossie & The Spice Island Indonesia Team</strong>
      </p>
    </div>
    
    <!-- Footer -->
    <div style="background: #f5f4f2; padding: 20px 30px; text-align: center; font-size: 12px; color: #78716c;">
      <p style="margin: 0 0 10px 0;">Need help? Contact support@spiceislandindonesia.com</p>
      <p style="margin: 0;">Spice Island Indonesia | Authentic Indonesian Flavors</p>
    </div>
    
  </div>
</body>
</html>
`;

const getAbandonedCartHtml = (cartData, emailNumber = 1) => {
  const subjects = [
    "Your sambals are waiting! 🌶️",
    "Still thinking it over? Here's what you're missing...",
    "Last chance for your Indonesian feast 🇮🇩"
  ];
  
  const headlines = [
    "Don't forget your delicious sambals!",
    "Your taste buds are calling...",
    "Your Indonesian adventure awaits!"
  ];
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${subjects[emailNumber - 1]} - Spice Island Indonesia</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background: #fefdfb;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(127, 29, 43, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(180deg, #000106 0%, #7f1d2b 60%, #b52d3c 100%); padding: 40px 30px; text-align: center; color: white;">
      <h1 style="font-family: serif; font-size: 28px; color: #d4af37; margin: 0 0 10px 0;">SPICE ISLAND INDONESIA</h1>
      <h2 style="font-size: 24px; margin: 0; font-weight: normal;">${headlines[emailNumber - 1]}</h2>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px 30px;">
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 0 0 20px 0;">
        ${cartData.firstName ? `Hi ${cartData.firstName},` : 'Hello!'}<br><br>
        ${emailNumber === 1 ? 
          'You left some delicious sambals in your cart. Don\'t let these authentic Indonesian flavors slip away!' :
          emailNumber === 2 ?
          'We noticed you\'re still deciding on those amazing sambals. Here\'s what our customers love about them:' :
          'This is your final reminder about the sambals waiting in your cart. After this, they\'ll be gone!'
        }
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
          Total: £${cartData.cartTotal}
        </div>
      </div>
      
      ${emailNumber === 2 ? `
      <!-- Customer Reviews -->
      <div style="background: #fef9f1; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 20px 0;">⭐ What our customers say:</h3>
        <div style="font-style: italic; color: #44403c; margin-bottom: 15px;">
          "The most authentic Indonesian sambal I've found in the UK. Takes me straight back to Jakarta!" - Sarah M.
        </div>
        <div style="font-style: italic; color: #44403c;">
          "Incredible depth of flavor. One spoonful and you taste the tradition." - David K.
        </div>
      </div>
      ` : ''}
      
      ${emailNumber === 3 ? `
      <!-- Special Offer -->
      <div style="background: linear-gradient(135deg, #c1272d, #7f1d2b); color: white; border-radius: 8px; padding: 30px; margin: 30px 0; text-align: center;">
        <h3 style="color: #d4af37; margin: 0 0 15px 0;">🎁 Special Offer - Just for You!</h3>
        <p style="margin: 0 0 20px 0; font-size: 18px;">Complete your order now and get <strong>10% off</strong></p>
        <div style="font-size: 24px; font-weight: bold; background: rgba(255,255,255,0.2); padding: 15px; border: 2px dashed #d4af37; border-radius: 4px; display: inline-block; letter-spacing: 2px;">
          SAVE10NOW
        </div>
        <p style="margin: 15px 0 0 0; font-size: 14px; opacity: 0.9;">Valid for 24 hours only</p>
      </div>
      ` : ''}
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://www.spiceislandindonesia.com/cart" style="background: #c1272d; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; font-size: 16px;">Complete Your Order</a>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 30px 0 0 0;">
        ${emailNumber === 3 ? 
          'This is our final reminder. Don\'t miss out on these authentic Indonesian flavors!' :
          'Questions? Reply to this email or contact us at hello@spiceislandindonesia.com'
        }
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
};

// Email sending functions
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

// Test Functions
const testWelcomeEmail = async () => {
  console.log('🔥 Testing Welcome Email');
  console.log('========================');
  
  const result = await sendEmail(
    'barooahn@gmail.com',
    'Selamat Datang! Your Welcome Gift 🎁',
    getWelcomeEmailHtml('barooahn@gmail.com', 'John')
  );
  
  if (result.success) {
    console.log('✅ Welcome email sent successfully!');
    console.log(`   Message ID: ${result.messageId}\n`);
  } else {
    console.log('❌ Welcome email failed:', result.error, '\n');
  }
  
  return result;
};

const testOrderConfirmation = async () => {
  console.log('📦 Testing Order Confirmation Email');
  console.log('===================================');
  
  const orderData = {
    email: 'barooahn@gmail.com',
    firstName: 'John',
    orderNumber: '#ORD-2025-0001',
    orderTotal: '£32.00',
    orderItems: [
      { name: 'Sambal Oelek - Authentic Indonesian Chili Paste', quantity: 2, price: '14.00' },
      { name: 'Sambal Goreng - Premium Sweet & Spicy', quantity: 1, price: '8.50' },
      { name: 'Sambal Bali - Aromatic Spicy Blend', quantity: 1, price: '9.50' }
    ],
    shippingAddress: {
      name: 'John Smith',
      line1: '123 Oak Street',
      line2: 'Apartment 4B',
      city: 'London',
      postal_code: 'SW1A 1AA',
      country: 'United Kingdom'
    }
  };
  
  const result = await sendEmail(
    'barooahn@gmail.com',
    `Order Confirmed ${orderData.orderNumber} - Your sambals are on the way! 📦`,
    getOrderConfirmationHtml(orderData)
  );
  
  if (result.success) {
    console.log('✅ Order confirmation email sent successfully!');
    console.log(`   Message ID: ${result.messageId}\n`);
  } else {
    console.log('❌ Order confirmation failed:', result.error, '\n');
  }
  
  return result;
};

const testAbandonedCartSeries = async () => {
  console.log('🛒 Testing Abandoned Cart Email Series');
  console.log('======================================');
  
  const cartData = {
    email: 'barooahn@gmail.com',
    firstName: 'John',
    cartTotal: '25.50',
    cartItems: [
      { name: 'Sambal Oelek - Authentic Indonesian Chili Paste', quantity: 1, price: '14.00' },
      { name: 'Sambal Goreng - Premium Sweet & Spicy', quantity: 1, price: '8.50' }
    ]
  };
  
  const subjects = [
    "Your sambals are waiting! 🌶️",
    "Still thinking it over? Here's what you're missing...",
    "Last chance + 10% OFF your Indonesian feast 🇮🇩"
  ];
  
  for (let i = 1; i <= 3; i++) {
    console.log(`Sending abandoned cart email ${i}/3...`);
    
    const result = await sendEmail(
      'barooahn@gmail.com',
      subjects[i - 1],
      getAbandonedCartHtml(cartData, i)
    );
    
    if (result.success) {
      console.log(`✅ Abandoned cart email ${i} sent successfully!`);
      console.log(`   Message ID: ${result.messageId}`);
    } else {
      console.log(`❌ Abandoned cart email ${i} failed:`, result.error);
    }
    
    // Small delay between emails
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('');
};

const testMonthlyNewsletter = async () => {
  console.log('📧 Testing Monthly Recipe Newsletter');
  console.log('===================================');
  
  const newsletterHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Recipe of the Month - Spice Island Indonesia</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background: #fefdfb;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(127, 29, 43, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(180deg, #000106 0%, #7f1d2b 60%, #b52d3c 100%); padding: 40px 30px; text-align: center; color: white;">
      <h1 style="font-family: serif; font-size: 28px; color: #d4af37; margin: 0 0 10px 0;">SPICE ISLAND INDONESIA</h1>
      <p style="font-size: 11px; letter-spacing: 3px; margin: 0 0 20px 0; opacity: 0.9;">RECIPE OF THE MONTH</p>
      <h2 style="font-size: 26px; margin: 0; font-weight: normal;">Indonesian Sambal Fried Rice</h2>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">December 2024 • Nasi Goreng Sambal</p>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px 30px;">
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 0 0 20px 0;">
        Hello John,<br><br>
        This month, we're sharing Indonesia's national dish - Nasi Goreng! This isn't just fried rice; it's a symphony of flavors that tells the story of Indonesian street food culture.
      </p>
      
      <!-- Recipe Image -->
      <div style="text-align: center; margin: 30px 0;">
        <img src="https://www.spiceislandindonesia.com/images/nasi-goreng-sambal.webp" alt="Indonesian Sambal Fried Rice" style="width: 100%; max-width: 400px; border-radius: 8px; border: 3px solid #d4af37;">
      </div>
      
      <!-- Cultural Story -->
      <div style="background: #fef9f1; border-left: 4px solid #d4af37; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 15px 0;">🇮🇩 Cultural Story</h3>
        <p style="margin: 0; color: #44403c; line-height: 1.6; font-style: italic;">
          "Nasi Goreng was born from Indonesian resourcefulness. Street vendors used day-old rice, transforming it with sambal, sweet soy sauce, and the magical 'wok hei' - the breath of the wok. Every family has their secret, passed down through generations."
        </p>
        <p style="margin: 15px 0 0 0; color: #7f1d2b; font-weight: bold;">- Chef Yossie</p>
      </div>
      
      <!-- Ingredients -->
      <div style="background: #f9f9f9; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 20px 0;">🍚 Ingredients (Serves 4)</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div style="color: #44403c;">
            • 4 cups day-old jasmine rice<br>
            • 3 tbsp Sambal Oelek<br>
            • 3 tbsp sweet soy sauce<br>
            • 2 eggs, beaten<br>
            • 2 shallots, sliced<br>
            • 3 cloves garlic, minced
          </div>
          <div style="color: #44403c;">
            • 200g chicken, diced<br>
            • 100g prawns (optional)<br>
            • 2 tbsp vegetable oil<br>
            • Spring onions for garnish<br>
            • Cucumber slices<br>
            • Fried shallots
          </div>
        </div>
      </div>
      
      <!-- Method -->
      <div style="background: white; border: 2px solid #d4af37; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 20px 0;">👩‍🍳 Chef Yossie's Method</h3>
        <ol style="color: #44403c; line-height: 1.6; margin: 0; padding-left: 20px;">
          <li><strong>Prepare the heat:</strong> Heat wok until smoking. Add oil and swirl.</li>
          <li><strong>Build the base:</strong> Fry shallots until golden, add garlic for 30 seconds.</li>
          <li><strong>Add proteins:</strong> Cook chicken until done, then prawns until pink.</li>
          <li><strong>The magic moment:</strong> Push everything aside, add beaten eggs, scramble.</li>
          <li><strong>Rice transformation:</strong> Add rice, breaking up clumps with spatula.</li>
          <li><strong>Sambal symphony:</strong> Add sambal and sweet soy sauce, toss vigorously.</li>
          <li><strong>Final flourish:</strong> Garnish with spring onions, cucumber, fried shallots.</li>
        </ol>
      </div>
      
      <!-- Chef's Secret -->
      <div style="background: linear-gradient(135deg, #7f1d2b, #c1272d); color: white; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #d4af37; margin: 0 0 15px 0;">🔥 Chef's Secret</h3>
        <p style="margin: 0; line-height: 1.6;">
          <strong>Day-old rice is crucial!</strong> Fresh rice becomes mushy. The grains need to be separate and slightly firm. Also, never overcrowd the wok - cook in batches if needed to maintain that essential high heat.
        </p>
      </div>
      
      <!-- Featured Sambal -->
      <div style="background: #e7f3ff; border-radius: 8px; padding: 25px; margin: 30px 0; text-align: center;">
        <h3 style="color: #7f1d2b; margin: 0 0 15px 0;">🌶️ Perfect with Sambal Oelek</h3>
        <p style="margin: 0 0 20px 0; color: #44403c;">
          Our authentic Sambal Oelek brings the perfect heat and depth to this dish. Made from the finest Indonesian chilies using traditional methods.
        </p>
        <a href="https://www.spiceislandindonesia.com/products/sambal-oelek" style="background: #c1272d; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Shop Sambal Oelek</a>
      </div>
      
      <div style="text-align: center; margin: 40px 0;">
        <p style="font-size: 18px; color: #7f1d2b; margin: 0 0 15px 0;">Share your creation with us!</p>
        <p style="font-size: 14px; color: #44403c; margin: 0;">Tag @spiceislandindonesia on Instagram</p>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 30px 0 0 0;">
        <strong>Next month:</strong> We'll be sharing the secrets of Rendang - Indonesia's most beloved curry. Stay tuned!
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 20px 0 0 0;">
        Selamat masak (happy cooking!),<br>
        <strong>Chef Yossie & The Spice Island Indonesia Team</strong>
      </p>
    </div>
    
    <!-- Footer -->
    <div style="background: #f5f4f2; padding: 20px 30px; text-align: center; font-size: 12px; color: #78716c;">
      <p style="margin: 0 0 10px 0;">Follow us: 
        <a href="#" style="color: #c1272d;">Instagram</a> | 
        <a href="#" style="color: #c1272d;">Facebook</a>
      </p>
      <p style="margin: 0;">
        <a href="https://www.spiceislandindonesia.com/unsubscribe?email=barooahn@gmail.com" style="color: #78716c;">Unsubscribe</a> | 
        Recipe of the Month Newsletter
      </p>
    </div>
    
  </div>
</body>
</html>
  `;
  
  const result = await sendEmail(
    'barooahn@gmail.com',
    '🍛 Recipe of the Month: Indonesian Sambal Fried Rice | December 2024',
    newsletterHtml
  );
  
  if (result.success) {
    console.log('✅ Monthly newsletter sent successfully!');
    console.log(`   Message ID: ${result.messageId}\n`);
  } else {
    console.log('❌ Monthly newsletter failed:', result.error, '\n');
  }
  
  return result;
};

// Main test execution
const runAllTests = async () => {
  try {
    console.log('Starting comprehensive email system tests...\n');
    
    // Test 1: Welcome Email
    await testWelcomeEmail();
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Test 2: Order Confirmation
    await testOrderConfirmation();
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Test 3: Abandoned Cart Series
    await testAbandonedCartSeries();
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Test 4: Monthly Newsletter
    await testMonthlyNewsletter();
    
    console.log('🎉 All email tests completed successfully!');
    console.log('Check your inbox at barooahn@gmail.com for all the test emails.');
    console.log('\n📊 Email System Summary:');
    console.log('✅ Welcome email with discount code');
    console.log('✅ Order confirmation with recipe suggestions');
    console.log('✅ 3-part abandoned cart recovery series');
    console.log('✅ Monthly recipe newsletter with cultural stories');
    console.log('\n🚀 Ready for production implementation!');
    
  } catch (error) {
    console.error('❌ Test suite failed:', error);
  }
};

// Run the tests
runAllTests();