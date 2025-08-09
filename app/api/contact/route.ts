import { NextRequest, NextResponse } from 'next/server';

// This API route handles contact form submissions
// Configure with your preferred email service (SendGrid, Resend, etc.)

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, timestamp, source, userAgent } = await request.json();

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all fields.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Rate limiting check (simple IP-based)
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';
    
    // TODO: Implement proper rate limiting with Redis/database
    // For now, we'll just log the IP for monitoring
    console.log('Contact form submission from IP:', clientIP);

    // Choose your email service integration
    const emailService = process.env.EMAIL_SERVICE || 'log'; // 'sendgrid', 'resend', 'log'

    switch (emailService) {
      case 'sendgrid':
        return await sendViaSendGrid({ name, email, message, timestamp, source, userAgent });
      case 'resend':
        return await sendViaResend({ name, email, message, timestamp, source, userAgent });
      default:
        return await logContactForm({ name, email, message, timestamp, source, userAgent, clientIP });
    }

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// SendGrid integration
async function sendViaSendGrid(data: any) {
  try {
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'contact@spiceislandindonesia.com';
    
    if (!SENDGRID_API_KEY) {
      throw new Error('SendGrid API key not configured');
    }

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: TO_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@spiceislandindonesia.com',
      replyTo: data.email,
      subject: `New Contact Form Submission - ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>
          <strong>Timestamp:</strong> ${data.timestamp}<br>
          <strong>Source:</strong> ${data.source}<br>
          <strong>User Agent:</strong> ${data.userAgent}
        </small></p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    });

  } catch (error) {
    console.error('SendGrid error:', error);
    throw error;
  }
}

// Resend integration
async function sendViaResend(data: any) {
  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'contact@spiceislandindonesia.com';
    
    if (!RESEND_API_KEY) {
      throw new Error('Resend API key not configured');
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'noreply@spiceislandindonesia.com',
        to: [TO_EMAIL],
        reply_to: data.email,
        subject: `New Contact Form Submission - ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>
            <strong>Timestamp:</strong> ${data.timestamp}<br>
            <strong>Source:</strong> ${data.source}<br>
            <strong>User Agent:</strong> ${data.userAgent}
          </small></p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Resend API error: ${error.message}`);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    });

  } catch (error) {
    console.error('Resend error:', error);
    throw error;
  }
}

// Fallback - log to console/file (for development or simple setups)
async function logContactForm(data: any) {
  console.log('=== NEW CONTACT FORM SUBMISSION ===');
  console.log('Name:', data.name);
  console.log('Email:', data.email);
  console.log('Message:', data.message);
  console.log('Timestamp:', data.timestamp);
  console.log('Source:', data.source);
  console.log('IP:', data.clientIP);
  console.log('User Agent:', data.userAgent);
  console.log('=====================================');

  // In production, you might want to save to a database or file
  // For now, we'll just log and return success

  return NextResponse.json({
    success: true,
    message: "Thank you for your message! We'll get back to you within 24 hours.",
  });
}