import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email templates
const getWelcomeEmailHtml = (email: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Welcome to Sambal Shop!</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #dc2626, #ea580c); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #fff; padding: 30px; border: 1px solid #e5e7eb; }
        .footer { background: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 14px; color: #6b7280; }
        .discount-code { background: #fef3c7; border: 2px dashed #f59e0b; padding: 20px; margin: 20px 0; text-align: center; border-radius: 8px; }
        .code { font-size: 24px; font-weight: bold; color: #dc2626; letter-spacing: 2px; }
        .btn { display: inline-block; background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌶️ Welcome to Sambal Shop!</h1>
            <p>Thank you for subscribing to our newsletter</p>
        </div>
        <div class="content">
            <p>Hi there!</p>
            <p>Welcome to the Sambal Shop family! We're thrilled to have you on board.</p>
            
            <div class="discount-code">
                <h3>🎉 Your Early Bird Discount</h3>
                <p>Use this code for <strong>10% off</strong> your first order:</p>
                <div class="code">WELCOME10</div>
                <p><small>Valid for 30 days from signup</small></p>
            </div>
            
            <p>As a subscriber, you'll be the first to know about:</p>
            <ul>
                <li>🌶️ New sambal varieties and flavors</li>
                <li>🎯 Exclusive discounts and early access</li>
                <li>📚 Indonesian cooking tips and recipes</li>
                <li>🚀 Product launches and restocks</li>
            </ul>
            
            <p>We're currently putting the finishing touches on our authentic Indonesian sambal collection. Stay tuned for the launch!</p>
            
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/shop" class="btn">Browse Our Products</a>
        </div>
        <div class="footer">
            <p>Sambal Shop - Authentic Indonesian Flavors</p>
            <p>You can <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/unsubscribe?email=${encodeURIComponent(email)}">unsubscribe</a> at any time.</p>
        </div>
    </div>
</body>
</html>
`;

const getContactConfirmationHtml = (name: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Message Received - Sambal Shop</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #059669, #10b981); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #fff; padding: 30px; border: 1px solid #e5e7eb; }
        .footer { background: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 14px; color: #6b7280; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✅ Message Received!</h1>
        </div>
        <div class="content">
            <p>Hi ${name},</p>
            <p>Thank you for reaching out to Sambal Shop! We've received your message and will get back to you within 24 hours.</p>
            <p>In the meantime, feel free to browse our collection of authentic Indonesian sambals.</p>
            <p>Best regards,<br>The Sambal Shop Team</p>
        </div>
        <div class="footer">
            <p>Sambal Shop - Authentic Indonesian Flavors</p>
        </div>
    </div>
</body>
</html>
`;

const getAdminNotificationHtml = (data: { name: string; email: string; message: string }) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Message - Sambal Shop</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1f2937; color: white; padding: 20px; text-align: center; }
        .content { background: #fff; padding: 20px; border: 1px solid #e5e7eb; }
        .message-box { background: #f9fafb; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 New Contact Message</h1>
        </div>
        <div class="content">
            <p><strong>From:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            
            <div class="message-box">
                <h3>Message:</h3>
                <p>${data.message}</p>
            </div>
            
            <p><a href="mailto:${data.email}">Reply to ${data.name}</a></p>
        </div>
    </div>
</body>
</html>
`;

// Email sending functions
export async function sendWelcomeEmail(email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Sambal Shop <noreply@sambalshop.com>', // Replace with your domain
      to: [email],
      subject: '🌶️ Welcome to Sambal Shop - Your 10% Discount Inside!',
      html: getWelcomeEmailHtml(email),
    });

    if (error) {
      console.error('Error sending welcome email:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error };
  }
}

export async function sendContactConfirmationEmail(email: string, name: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Sambal Shop <noreply@sambalshop.com>', // Replace with your domain
      to: [email],
      subject: 'Message Received - We\'ll be in touch soon!',
      html: getContactConfirmationHtml(name),
    });

    if (error) {
      console.error('Error sending contact confirmation email:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending contact confirmation email:', error);
    return { success: false, error };
  }
}

export async function sendContactNotificationEmail(data: { name: string; email: string; message: string }) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: 'Sambal Shop <noreply@sambalshop.com>', // Replace with your domain
      to: ['barooahn@gmail.com'], // Replace with your admin email
      subject: `New Contact Message from ${data.name}`,
      html: getAdminNotificationHtml(data),
    });

    if (error) {
      console.error('Error sending admin notification email:', error);
      return { success: false, error };
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error('Error sending admin notification email:', error);
    return { success: false, error };
  }
}
