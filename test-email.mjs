import { SendMailClient } from 'zeptomail';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

console.log('Testing ZeptoMail configuration...');
console.log('ZEPTOMAIL_TOKEN:', process.env.ZEPTOMAIL_TOKEN ? '***' : 'NOT SET');
console.log('ZEPTOMAIL_FROM_EMAIL:', process.env.ZEPTOMAIL_FROM_EMAIL);

if (!process.env.ZEPTOMAIL_TOKEN || process.env.ZEPTOMAIL_TOKEN === 'your_zeptomail_token_here') {
  console.log('\n❌ ZeptoMail token not set!');
  console.log('Please:');
  console.log('1. Sign up at https://www.zoho.com/zeptomail/');
  console.log('2. Verify your domain: spiceislandindonesia.com');
  console.log('3. Create a Mail Agent and get your Send Mail Token');
  console.log('4. Update ZEPTOMAIL_TOKEN in .env.local');
  process.exit(1);
}

// Create ZeptoMail client
const client = new SendMailClient({
  url: "api.zeptomail.com/",
  token: process.env.ZEPTOMAIL_TOKEN,
});

console.log('\nTesting ZeptoMail API...');

try {
  // Send test email
  const testEmail = 'barooahn@gmail.com'; // Send to your admin email for testing
  console.log(`\nSending test welcome email to: ${testEmail}`);
  
  const response = await client.sendMail({
    from: {
      address: process.env.ZEPTOMAIL_FROM_EMAIL,
      name: "Sambal Shop Test",
    },
    bounce_address: process.env.ZEPTOMAIL_FROM_EMAIL,
    to: [
      {
        email_address: {
          address: testEmail,
          name: "Test Recipient",
        },
      },
    ],
    subject: "🧪 Test Email from ZeptoMail API",
    htmlbody: `
      <h1>ZeptoMail Test Successful!</h1>
      <p>This is a test email to confirm that your ZeptoMail API configuration is working correctly.</p>
      <p>Sent from: ${process.env.ZEPTOMAIL_FROM_EMAIL}</p>
      <p>Time: ${new Date().toISOString()}</p>
      <p>🎉 Your email integration is ready!</p>
    `,
  });
  
  console.log('✅ Email sent successfully via ZeptoMail!');
  console.log('Response:', JSON.stringify(response, null, 2));
  
} catch (error) {
  console.log('❌ Error sending email via ZeptoMail:', error.message || 'Unknown error');
  console.log('Full error object:', error);
  if (error.details) {
    console.log('Error details:', error.details);
  }
  if (error.response) {
    console.log('Response status:', error.response.status);
    console.log('Response data:', error.response.data);
  }
}