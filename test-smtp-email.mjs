import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

console.log('Testing ZeptoMail SMTP configuration...');
console.log('ZEPTOMAIL_SMTP_HOST:', process.env.ZEPTOMAIL_SMTP_HOST || 'NOT SET');
console.log('ZEPTOMAIL_SMTP_PORT:', process.env.ZEPTOMAIL_SMTP_PORT || 'NOT SET');
console.log('ZEPTOMAIL_SMTP_USER:', process.env.ZEPTOMAIL_SMTP_USER || 'NOT SET');
console.log('ZEPTOMAIL_SMTP_PASS:', process.env.ZEPTOMAIL_SMTP_PASS ? '***' : 'NOT SET');
console.log('ZEPTOMAIL_FROM_EMAIL:', process.env.ZEPTOMAIL_FROM_EMAIL || 'NOT SET');

if (!process.env.ZEPTOMAIL_SMTP_HOST || !process.env.ZEPTOMAIL_SMTP_PASS) {
  console.log('\n❌ ZeptoMail SMTP configuration not complete!');
  console.log('Please ensure all SMTP environment variables are set.');
  process.exit(1);
}

// Create SMTP transport
const transport = nodemailer.createTransport({
  host: process.env.ZEPTOMAIL_SMTP_HOST,
  port: parseInt(process.env.ZEPTOMAIL_SMTP_PORT),
  auth: {
    user: process.env.ZEPTOMAIL_SMTP_USER,
    pass: process.env.ZEPTOMAIL_SMTP_PASS,
  },
});

console.log('\nTesting SMTP connection...');

try {
  // Verify SMTP connection
  await transport.verify();
  console.log('✅ SMTP connection successful!');

  // Send test email
  const testEmail = 'barooahn@gmail.com'; // Send to your admin email for testing
  console.log(`\nSending test welcome email to: ${testEmail}`);
  
  const mailOptions = {
    from: `"Spice Island Indonesia Test" <${process.env.ZEPTOMAIL_FROM_EMAIL}>`,
    to: testEmail,
    subject: '🧪 Test Email from ZeptoMail SMTP',
    html: `
      <h1>ZeptoMail SMTP Test Successful!</h1>
      <p>This is a test email to confirm that your ZeptoMail SMTP configuration is working correctly.</p>
      <p>Sent from: ${process.env.ZEPTOMAIL_FROM_EMAIL}</p>
      <p>Time: ${new Date().toISOString()}</p>
      <p>🎉 Your email integration is ready!</p>
    `,
  };
  
  const result = await transport.sendMail(mailOptions);
  console.log('✅ Email sent successfully via ZeptoMail SMTP!');
  console.log('Message ID:', result.messageId);
  
} catch (error) {
  console.log('❌ Error testing ZeptoMail SMTP:', error.message || 'Unknown error');
  if (error.code) {
    console.log('Error code:', error.code);
  }
  if (error.response) {
    console.log('SMTP response:', error.response);
  }
}