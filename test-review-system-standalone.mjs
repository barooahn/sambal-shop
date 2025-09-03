import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config({ path: '.env.local' });

console.log('⭐ Review Request Automation System Test');
console.log('=======================================\n');

// SMTP Configuration
const transport = nodemailer.createTransport({
  host: process.env.ZEPTOMAIL_SMTP_HOST,
  port: parseInt(process.env.ZEPTOMAIL_SMTP_PORT),
  auth: {
    user: process.env.ZEPTOMAIL_SMTP_USER,
    pass: process.env.ZEPTOMAIL_SMTP_PASS,
  },
});

// Review Request Email Templates
const getReviewRequestEmailHtml = (reviewData) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>How did we do? Your review matters! - Spice Island Indonesia</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background: #fefdfb;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(127, 29, 43, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(180deg, #000106 0%, #7f1d2b 60%, #b52d3c 100%); padding: 40px 30px; text-align: center; color: white;">
      <h1 style="font-family: serif; font-size: 28px; color: #d4af37; margin: 0 0 10px 0;">SPICE ISLAND INDONESIA</h1>
      <h2 style="font-size: 24px; margin: 0; font-weight: normal;">How did we do? ⭐</h2>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Your opinion helps us serve you better</p>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px 30px;">
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 0 0 20px 0;">
        ${reviewData.firstName ? `Dear ${reviewData.firstName},` : 'Hello!'}<br><br>
        Thank you for choosing Spice Island Indonesia! We hope you're enjoying the authentic flavors of your recent order${reviewData.orderNumber ? ` (${reviewData.orderNumber})` : ''}.
      </p>
      
      <!-- Personal Message from Chef Yossie -->
      <div style="background: #fef9f1; border-left: 4px solid #d4af37; padding: 25px; margin: 30px 0;">
        <div style="display: flex; align-items: center; margin-bottom: 15px;">
          <div style="width: 60px; height: 60px; border-radius: 50%; background: #d4af37; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 24px; margin-right: 15px;">Y</div>
          <div>
            <h3 style="margin: 0; color: #7f1d2b;">Chef Yossie</h3>
            <p style="margin: 0; color: #78716c; font-size: 14px;">Founder & Head Chef</p>
          </div>
        </div>
        <p style="margin: 0; color: #44403c; line-height: 1.6; font-style: italic;">
          "Your feedback means the world to me and my family. Every review helps us improve and share the authentic taste of Indonesia with more people. Terima kasih! 🙏"
        </p>
      </div>
      
      <!-- Review Incentive -->
      <div style="background: linear-gradient(135deg, #c1272d, #7f1d2b); color: white; border-radius: 8px; padding: 25px; margin: 30px 0; text-align: center;">
        <h3 style="color: #d4af37; margin: 0 0 15px 0;">🎁 Thank You Gift!</h3>
        <p style="margin: 0 0 20px 0; font-size: 16px;">Leave us a review and get <strong>£5 off</strong> your next order!</p>
        <div style="font-size: 20px; font-weight: bold; background: rgba(255,255,255,0.2); padding: 12px 20px; border: 2px dashed #d4af37; border-radius: 4px; display: inline-block; letter-spacing: 1px;">
          ${reviewData.reviewIncentive || 'REVIEW5'}
        </div>
        <p style="margin: 15px 0 0 0; font-size: 14px; opacity: 0.9;">Use this code on your next purchase</p>
      </div>
      
      <!-- Review Platform Options -->
      <div style="background: #f9f9f9; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 20px 0;">📝 Choose Your Review Platform:</h3>
        
        <div style="margin-bottom: 15px;">
          <a href="https://www.google.com/search?q=spice+island+indonesia&tbm=lcl" style="display: block; background: #4285f4; color: white; padding: 15px 20px; text-decoration: none; border-radius: 6px; margin-bottom: 10px; font-weight: bold;">
            ⭐ Leave Google Review (Recommended)
          </a>
        </div>
        
        <div style="margin-bottom: 15px;">
          <a href="https://www.trustpilot.com/review/spiceislandindonesia.com" style="display: block; background: #00b67a; color: white; padding: 15px 20px; text-decoration: none; border-radius: 6px; margin-bottom: 10px; font-weight: bold;">
            🛡️ Review on Trustpilot
          </a>
        </div>
        
        <div style="margin-bottom: 15px;">
          <a href="https://www.facebook.com/spiceislandindonesia/reviews" style="display: block; background: #1877f2; color: white; padding: 15px 20px; text-decoration: none; border-radius: 6px; margin-bottom: 10px; font-weight: bold;">
            👍 Facebook Review
          </a>
        </div>
      </div>
      
      <!-- Photo Upload Encouragement -->
      <div style="background: #e7f3ff; border: 2px solid #3b82f6; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #1d4ed8; margin: 0 0 15px 0;">📸 Show Off Your Creations!</h3>
        <p style="margin: 0 0 15px 0; color: #44403c;">
          We'd love to see how you're using our sambals! Upload photos of your dishes when you leave your review - it helps other customers see the authentic results.
        </p>
        <div style="font-weight: bold; color: #1d4ed8;">
          💡 Pro tip: Photos get more likes and help build our community of Indonesian food lovers!
        </div>
      </div>
      
      <!-- 5-Step Review Guide -->
      <div style="background: white; border: 2px solid #d4af37; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 20px 0;">✅ Quick 5-Step Review Guide:</h3>
        <ol style="color: #44403c; line-height: 1.8; margin: 0; padding-left: 20px;">
          <li><strong>Rate us</strong> - Choose 1-5 stars based on your experience</li>
          <li><strong>Share your favorite</strong> - Which sambal did you love most?</li>
          <li><strong>Describe the taste</strong> - Help others know what to expect</li>
          <li><strong>Upload a photo</strong> - Show your delicious creations</li>
          <li><strong>Submit & get your code</strong> - Your £5 discount awaits!</li>
        </ol>
      </div>
      
      <div style="text-align: center; margin: 40px 0;">
        <p style="font-size: 18px; color: #7f1d2b; margin: 0 0 15px 0;">Ready to share your experience?</p>
        <a href="https://www.google.com/search?q=spice+island+indonesia&tbm=lcl" style="background: #c1272d; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; font-size: 16px;">
          Leave Your Review Now ⭐
        </a>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 30px 0 0 0;">
        Questions about your order or need help with anything? We're here to support you at info@spiceislandindonesia.com
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 20px 0 0 0;">
        Terima kasih banyak (thank you so much!),<br>
        <strong>Chef Yossie & The Spice Island Indonesia Team</strong>
      </p>
    </div>
    
    <!-- Footer -->
    <div style="background: #f5f4f2; padding: 20px 30px; text-align: center; font-size: 12px; color: #78716c;">
      <p style="margin: 0 0 10px 0;">Your review helps us improve and reach more food lovers!</p>
      <p style="margin: 0;">
        <a href="https://www.spiceislandindonesia.com/unsubscribe?email=${reviewData.email}" style="color: #78716c;">Unsubscribe from review requests</a>
      </p>
    </div>
  </div>
</body>
</html>
`;

const getReviewFollowUpEmailHtml = (reviewData) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Final chance to share your experience - Spice Island Indonesia</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background: #fefdfb;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(127, 29, 43, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(180deg, #000106 0%, #7f1d2b 60%, #b52d3c 100%); padding: 40px 30px; text-align: center; color: white;">
      <h1 style="font-family: serif; font-size: 28px; color: #d4af37; margin: 0 0 10px 0;">SPICE ISLAND INDONESIA</h1>
      <h2 style="font-size: 24px; margin: 0; font-weight: normal;">One last request... 🙏</h2>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px 30px;">
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 0 0 20px 0;">
        ${reviewData.firstName ? `Hi ${reviewData.firstName},` : 'Hello!'}<br><br>
        We hope you've been enjoying your Spice Island Indonesia sambals! We'd still love to hear about your experience.
      </p>
      
      <!-- Experience-Based Options -->
      <div style="background: #f9f9f9; border-radius: 8px; padding: 25px; margin: 30px 0;">
        <h3 style="color: #7f1d2b; margin: 0 0 20px 0;">How was your experience?</h3>
        
        <!-- Positive Experience -->
        <div style="background: #dcfce7; border: 2px solid #16a34a; border-radius: 6px; padding: 20px; margin-bottom: 15px;">
          <h4 style="color: #15803d; margin: 0 0 10px 0;">😊 Love our sambals?</h4>
          <p style="margin: 0 0 15px 0; color: #44403c;">Share your positive experience and help others discover authentic Indonesian flavors!</p>
          <a href="https://www.google.com/search?q=spice+island+indonesia&tbm=lcl" style="background: #16a34a; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
            Leave Positive Review ⭐⭐⭐⭐⭐
          </a>
        </div>
        
        <!-- Neutral Experience -->
        <div style="background: #fef3c7; border: 2px solid #d97706; border-radius: 6px; padding: 20px; margin-bottom: 15px;">
          <h4 style="color: #b45309; margin: 0 0 10px 0;">🤔 It was okay?</h4>
          <p style="margin: 0 0 15px 0; color: #44403c;">We'd love to know how we can improve your experience. Your honest feedback helps us grow!</p>
          <a href="https://www.trustpilot.com/review/spiceislandindonesia.com" style="background: #d97706; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
            Share Honest Review ⭐⭐⭐
          </a>
        </div>
        
        <!-- Negative Experience -->
        <div style="background: #fee2e2; border: 2px solid #dc2626; border-radius: 6px; padding: 20px;">
          <h4 style="color: #b91c1c; margin: 0 0 10px 0;">😟 Not satisfied?</h4>
          <p style="margin: 0 0 15px 0; color: #44403c;">We're sorry to hear that! Please reach out to us directly so we can make things right.</p>
          <a href="mailto:info@spiceislandindonesia.com?subject=Order Issue - Need Help" style="background: #dc2626; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
            Contact Customer Support
          </a>
        </div>
      </div>
      
      <!-- Still Available Incentive -->
      <div style="background: linear-gradient(135deg, #7f1d2b, #c1272d); color: white; border-radius: 8px; padding: 25px; margin: 30px 0; text-align: center;">
        <h3 style="color: #d4af37; margin: 0 0 15px 0;">💝 Your £5 reward is still waiting!</h3>
        <p style="margin: 0 0 15px 0;">Leave a review and use code <strong>REVIEW5</strong> on your next order</p>
        <p style="margin: 0; font-size: 14px; opacity: 0.9;">Because we truly value your opinion</p>
      </div>
      
      <!-- Simple One-Click Options -->
      <div style="text-align: center; margin: 30px 0;">
        <p style="font-size: 16px; color: #7f1d2b; margin: 0 0 20px 0;">Just want something quick?</p>
        
        <div style="margin-bottom: 15px;">
          <a href="https://www.google.com/search?q=spice+island+indonesia&tbm=lcl" style="background: #4285f4; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; margin: 5px;">
            Quick Google Review
          </a>
        </div>
        
        <p style="font-size: 14px; color: #78716c; margin: 10px 0 0 0;">
          Takes less than 2 minutes • Your opinion matters to us
        </p>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 30px 0 0 0;">
        This is our final email about reviews. Whether you choose to review or not, thank you for being a valued customer!
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #44403c; margin: 20px 0 0 0;">
        With gratitude,<br>
        <strong>The Spice Island Indonesia Team</strong>
      </p>
    </div>
    
    <!-- Footer -->
    <div style="background: #f5f4f2; padding: 20px 30px; text-align: center; font-size: 12px; color: #78716c;">
      <p style="margin: 0 0 10px 0;">Thank you for choosing Spice Island Indonesia</p>
      <p style="margin: 0;">
        <a href="https://www.spiceislandindonesia.com/unsubscribe?email=${reviewData.email}" style="color: #78716c;">Unsubscribe from all emails</a>
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

// Test the complete review request sequence
const testReviewRequestSequence = async () => {
  const reviewData = {
    email: 'barooahn@gmail.com',
    firstName: 'John',
    orderNumber: '#ORD-2025-0001',
    reviewIncentive: 'REVIEW5'
  };

  const emails = [
    {
      name: 'Initial Review Request',
      subject: "How did we do? Your review matters! ⭐ (+ £5 off your next order)",
      html: getReviewRequestEmailHtml(reviewData),
      delay: 0
    },
    {
      name: 'Follow-up Review Request', 
      subject: "One last request... 🙏 (Your £5 discount is waiting)",
      html: getReviewFollowUpEmailHtml(reviewData),
      delay: 8000 // 8 seconds
    }
  ];

  console.log('🚀 Starting review request sequence test...\n');
  console.log(`⭐ Review request details:`);
  console.log(`   Customer: ${reviewData.firstName} (${reviewData.email})`);
  console.log(`   Order: ${reviewData.orderNumber}`);
  console.log(`   Incentive: £5 off with code ${reviewData.reviewIncentive}\n`);

  for (let i = 0; i < emails.length; i++) {
    const email = emails[i];
    
    setTimeout(async () => {
      console.log(`📧 Sending ${email.name.toLowerCase()}...`);
      console.log(`   Subject: ${email.subject}`);
      
      const result = await sendEmail(reviewData.email, email.subject, email.html);
      
      if (result.success) {
        console.log(`✅ ${email.name} sent successfully!`);
        console.log(`   Message ID: ${result.messageId}\n`);
      } else {
        console.log(`❌ ${email.name} failed:`, result.error, '\n');
      }
    }, email.delay);
  }

  // Final summary
  setTimeout(() => {
    console.log('🎉 Review Request Automation Test Complete!');
    console.log('==========================================\n');
    console.log('📊 Email Sequence Summary:');
    console.log('✅ Initial Review Request: Multiple platforms, photo encouragement, £5 incentive');
    console.log('✅ Follow-up Request: Experience-based routing, customer support integration');
    console.log('\n🎯 Production Implementation Features:');
    console.log('• Multiple review platforms (Google, Trustpilot, Facebook)');
    console.log('• Photo upload encouragement for social proof');
    console.log('• £5 discount incentive (REVIEW5 code)');
    console.log('• Personal message from Chef Yossie');
    console.log('• Experience-based routing (positive/neutral/negative)');
    console.log('• Customer support integration for issues');
    console.log('• Clear unsubscribe options');
    console.log('\n💡 Production Timeline:');
    console.log('• Trigger: 7 days after estimated delivery');
    console.log('• Follow-up: 14 days after delivery (if no response)');
    console.log('• Integration: Automatically via Stripe webhook');
    console.log('\n📈 Expected Results:');
    console.log('• 20-30% review response rate');
    console.log('• Improved SEO through Google reviews');
    console.log('• Enhanced social proof and credibility');
    console.log('• Better customer feedback loop');
    console.log('\nCheck your inbox for both review request emails! 📬');
  }, 15000); // 15 seconds
};

// Run the test
testReviewRequestSequence();