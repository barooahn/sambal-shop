import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
	host: process.env.ZEPTOMAIL_SMTP_HOST!,
	port: parseInt(process.env.ZEPTOMAIL_SMTP_PORT!),
	auth: {
		user: process.env.ZEPTOMAIL_SMTP_USER!,
		pass: process.env.ZEPTOMAIL_SMTP_PASS!,
	},
});

// Email templates
const getWelcomeEmailHtml = (email: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Spice Island Indonesia</title>
    <style>
        /* Import brand fonts */
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
        
        /* Reset and base styles */
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', Arial, sans-serif;
            line-height: 1.6;
            color: #1c1917;
            background-color: #fefdfb;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        
        table {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        /* Container */
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 4px 6px -1px rgba(127, 29, 43, 0.1);
        }
        
        /* Header with dark gradient and batik pattern */
        .header {
            background: linear-gradient(180deg, #000106 0%, #000106 30%, #7f1d2b 60%, #962838 85%, #b52d3c 100%);
            position: relative;
            overflow: hidden;
            padding: 40px 30px;
            text-align: center;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
                linear-gradient(135deg, transparent 30%, rgba(139, 69, 19, 0.03) 35%, rgba(139, 69, 19, 0.06) 40%, rgba(139, 69, 19, 0.03) 45%, transparent 50%),
                radial-gradient(ellipse 40px 80px at 20% 30%, transparent 60%, rgba(184, 134, 11, 0.015) 70%, rgba(184, 134, 11, 0.03) 80%, rgba(184, 134, 11, 0.015) 90%, transparent 100%);
            background-size: 200px 200px, 300px 400px;
        }
        
        .header-content {
            position: relative;
            z-index: 2;
        }
        
        .brand-logo {
            margin-bottom: 20px;
        }
        
        .brand-name {
            font-family: 'Cormorant Garamond', serif;
            font-size: 28px;
            font-weight: 700;
            color: #d4af37;
            margin: 0 0 5px 0;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        
        .brand-tagline {
            font-family: 'Inter', sans-serif;
            font-size: 11px;
            color: #fef9f1;
            margin: 0 0 20px 0;
            text-transform: uppercase;
            letter-spacing: 3px;
        }
        
        .welcome-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 32px;
            font-weight: 600;
            color: #fef9f1;
            margin: 20px 0 10px 0;
            line-height: 1.2;
        }
        
        .welcome-subtitle {
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            color: #fdf2e1;
            margin: 0;
            opacity: 0.9;
        }
        
        /* Main content */
        .content {
            padding: 40px 30px;
            background-color: #fefdfb;
            background-image: radial-gradient(circle at center, rgba(212, 175, 55, 0.02) 0%, transparent 50%);
        }
        
        .greeting {
            font-family: 'Cormorant Garamond', serif;
            font-size: 24px;
            font-weight: 600;
            color: #7f1d2b;
            margin: 0 0 20px 0;
        }
        
        .intro-text {
            font-size: 16px;
            color: #44403c;
            margin: 0 0 30px 0;
            line-height: 1.6;
        }
        
        /* Discount code section */
        .discount-section {
            background: linear-gradient(135deg, #fef9f1 0%, #fdf2e1 100%);
            border: 2px solid #d4af37;
            border-radius: 8px;
            padding: 30px;
            text-align: center;
            margin: 30px 0;
            position: relative;
            overflow: hidden;
        }
        
        .discount-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%);
        }
        
        .discount-content {
            position: relative;
            z-index: 2;
        }
        
        .discount-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 22px;
            font-weight: 600;
            color: #7f1d2b;
            margin: 0 0 15px 0;
        }
        
        .discount-description {
            font-size: 16px;
            color: #57534e;
            margin: 0 0 20px 0;
        }
        
        .discount-code {
            font-family: 'Cormorant Garamond', serif;
            font-size: 32px;
            font-weight: 700;
            color: #c1272d;
            letter-spacing: 4px;
            margin: 20px 0;
            padding: 15px;
            background-color: rgba(255, 255, 255, 0.8);
            border: 1px dashed #d4af37;
            border-radius: 4px;
            display: inline-block;
        }
        
        .discount-validity {
            font-size: 14px;
            color: #78716c;
            font-style: italic;
        }
        
        /* Benefits list */
        .benefits-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 20px;
            font-weight: 600;
            color: #7f1d2b;
            margin: 30px 0 20px 0;
        }
        
        .benefits-list {
            list-style: none;
            padding: 0;
            margin: 0 0 30px 0;
        }
        
        .benefits-list li {
            font-size: 16px;
            color: #44403c;
            padding: 8px 0;
            position: relative;
            padding-left: 30px;
        }
        
        .benefits-list li::before {
            content: '•';
            color: #d4af37;
            font-size: 20px;
            font-weight: bold;
            position: absolute;
            left: 0;
            top: 5px;
        }
        
        .closing-text {
            font-size: 16px;
            color: #44403c;
            margin: 30px 0;
            line-height: 1.6;
        }
        
        /* CTA Button */
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #7f1d2b 0%, #962838 100%);
            color: #fef9f1 !important;
            text-decoration: none;
            padding: 16px 32px;
            border-radius: 4px;
            font-family: 'Cormorant Garamond', serif;
            font-size: 18px;
            font-weight: 600;
            text-align: center;
            border: 1px solid #b52d3c;
            box-shadow: 0 4px 6px -1px rgba(127, 29, 43, 0.2);
            transition: all 0.3s ease;
        }
        
        .cta-button:hover {
            background: linear-gradient(135deg, #962838 0%, #b52d3c 100%);
            transform: translateY(-1px);
            box-shadow: 0 6px 8px -1px rgba(127, 29, 43, 0.3);
        }
        
        /* Footer */
        .footer {
            background-color: #44403c;
            padding: 30px;
            text-align: center;
            color: #d6d3d1;
        }
        
        .footer-brand {
            font-family: 'Cormorant Garamond', serif;
            font-size: 18px;
            font-weight: 600;
            color: #d4af37;
            margin: 0 0 10px 0;
        }
        
        .footer-tagline {
            font-size: 14px;
            margin: 0 0 20px 0;
            opacity: 0.8;
        }
        
        .footer-links {
            font-size: 14px;
            margin: 0;
        }
        
        .footer-links a {
            color: #d4af37;
            text-decoration: none;
        }
        
        .footer-links a:hover {
            color: #f59e0b;
        }
        
        /* Responsive */
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                max-width: 100% !important;
            }
            
            .header, .content, .footer {
                padding: 20px !important;
            }
            
            .brand-name {
                font-size: 24px !important;
            }
            
            .welcome-title {
                font-size: 26px !important;
            }
            
            .discount-code {
                font-size: 24px !important;
                letter-spacing: 2px !important;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="header-content">
                <div class="brand-logo">
                    <img src="https://www.spiceislandindonesia.com/images/logo.webp" alt="Spice Island Indonesia Logo" width="60" height="58" style="margin: 0 auto 15px auto; display: block;">
                    <div class="brand-name">Spice Island</div>
                    <div class="brand-tagline">Indonesia</div>
                </div>
                <h1 class="welcome-title">Selamat Datang!</h1>
                <p class="welcome-subtitle">Welcome to our authentic Indonesian sambal collection</p>
            </div>
        </div>
        
        <!-- Main Content -->
        <div class="content">
            <h2 class="greeting">Welcome to the family!</h2>
            
            <p class="intro-text">
                Thank you for joining our community of Indonesian cuisine enthusiasts. We're delighted to share our passion for authentic, chef-grade sambal with you.
            </p>
            
            <!-- Discount Code Section -->
            <div class="discount-section">
                <div class="discount-content">
                    <h3 class="discount-title">Your Exclusive Welcome Gift</h3>
                    <p class="discount-description">Enjoy <strong>10% off</strong> your first order with:</p>
                    <div class="discount-code">WELCOME10</div>
                    <p class="discount-validity">Valid for 30 days • Free UK delivery over £20</p>
                </div>
            </div>
            
            <h3 class="benefits-title">What awaits you as a valued member:</h3>
            <ul class="benefits-list">
                <li><strong>Exclusive access</strong> to new sambal varieties and limited editions</li>
                <li><strong>VIP discounts</strong> and early access to special offers</li>
                <li><strong>Authentic recipes</strong> and Indonesian cooking techniques</li>
                <li><strong>Priority notifications</strong> for product launches and restocks</li>
                <li><strong>Chef Yossie's insights</strong> into traditional Indonesian flavors</li>
            </ul>
            
            <p class="closing-text">
                Our small-batch, professional-grade sambal is crafted with the same dedication and authentic techniques used in Indonesian kitchens for generations. Each jar represents our commitment to bringing you the true taste of the Spice Islands.
            </p>
            
            <div style="text-align: center; margin: 40px 0;">
                <a href="https://www.spiceislandindonesia.com" class="cta-button">
                    Explore Our Sambal Collection
                </a>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <div class="footer-brand">Spice Island Indonesia</div>
            <p class="footer-tagline">Authentic Indonesian Flavors for the UK</p>
            <p class="footer-links">
                <a href="https://www.spiceislandindonesia.com">Visit our website</a> | 
                <a href="https://www.spiceislandindonesia.com/unsubscribe?email=${encodeURIComponent(email)}">Unsubscribe</a>
            </p>
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
            <h1>Thank You, ${name}!</h1>
            <p>We've received your message and will be in touch soon.</p>
        </div>
        <div class="content">
            <p>Hello ${name},</p>
            <p>Thank you for reaching out to Sambal Shop. We've successfully received your message and our team will review it shortly.</p>
            <p>We typically respond to inquiries within 24 hours during business days. If your message is urgent, please don't hesitate to call us directly.</p>
            <p>In the meantime, feel free to browse our authentic Indonesian sambal collection on our website.</p>
            <p>Best regards,<br>The Sambal Shop Team</p>
        </div>
        <div class="footer">
            <p>Sambal Shop | Authentic Indonesian Flavors</p>
            <p>This is an automated confirmation email.</p>
        </div>
    </div>
</body>
</html>
`;

const getContactNotificationHtml = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #dc2626, #ef4444); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #fff; padding: 30px; border: 1px solid #e5e7eb; }
        .footer { background: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 14px; color: #6b7280; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #dc2626; }
        .message-box { background: #f9fafb; padding: 20px; border-left: 4px solid #dc2626; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔥 New Contact Form Submission</h1>
            <p>Someone has reached out through your website</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name:</div>
                <div>${name}</div>
            </div>
            <div class="field">
                <div class="label">Email:</div>
                <div><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
                <div class="label">Message:</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="field">
                <div class="label">Received:</div>
                <div>${new Date().toLocaleString()}</div>
            </div>
        </div>
        <div class="footer">
            <p>Sambal Shop Contact Form</p>
            <p>Reply to this person at: <a href="mailto:${email}">${email}</a></p>
        </div>
    </div>
</body>
</html>
`;

// Email sending functions
export async function sendWelcomeEmail(email: string) {
	try {
		const mailOptions = {
			from: `"Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
			to: email,
			subject: "Selamat Datang! Your Welcome Gift from Spice Island Indonesia",
			html: getWelcomeEmailHtml(email),
		};

		const result = await transport.sendMail(mailOptions);
		return { success: true, data: result };
	} catch (error) {
		console.error("Error sending welcome email:", error);
		return { success: false, error };
	}
}

export async function sendContactConfirmationEmail(name: string, email: string) {
	try {
		const mailOptions = {
			from: `"Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
			to: email,
			subject: "Thank you for contacting Spice Island Indonesia",
			html: getContactConfirmationHtml(name),
		};

		const result = await transport.sendMail(mailOptions);
		return { success: true, data: result };
	} catch (error) {
		console.error("Error sending contact confirmation email:", error);
		return { success: false, error };
	}
}

export async function sendContactNotificationEmail(name: string, email: string, message: string) {
	try {
		const mailOptions = {
			from: `"Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
			to: "info@spiceislandindonesia.com",
			subject: `New Contact Form Submission from ${name}`,
			html: getContactNotificationHtml(name, email, message),
		};

		const result = await transport.sendMail(mailOptions);
		return { success: true, data: result };
	} catch (error) {
		console.error("Error sending contact notification email:", error);
		return { success: false, error };
	}
}

export async function sendOrderConfirmationEmail(orderData: {
	email: string;
	firstName?: string;
	orderNumber: string;
	orderItems: Array<{
		name: string;
		quantity: number;
		price: string;
		image: string;
	}>;
	orderTotal: string;
	shippingAddress?: {
		name?: string;
		line1?: string;
		line2?: string;
		city?: string;
		postal_code?: string;
		country?: string;
	};
}) {
	try {
		// Import the order confirmation template
		const { getOrderConfirmationEmailHtml } = await import('./email-templates');
		
		const mailOptions = {
			from: `"Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
			to: orderData.email,
			subject: `Order Confirmed: ${orderData.orderNumber} - Your Authentic Sambals Are On The Way!`,
			html: getOrderConfirmationEmailHtml(orderData),
		};

		const result = await transport.sendMail(mailOptions);
		console.log(`✅ Order confirmation email sent to ${orderData.email} for order ${orderData.orderNumber}`);
		return { success: true, data: result };
	} catch (error) {
		console.error("Error sending order confirmation email:", error);
		return { success: false, error };
	}
}

// Abandoned Cart Email Functions
export async function sendAbandonedCartEmail1(cartData: {
	email: string;
	firstName?: string;
	cartItems: Array<{
		name: string;
		quantity: number;
		price: string;
		image: string;
	}>;
	cartTotal: string;
}) {
	try {
		const { getAbandonedCartEmail1Html } = await import('./email-templates');
		
		const mailOptions = {
			from: `"Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
			to: cartData.email,
			subject: "Don't Miss Out on Authentic Indonesian Flavors - Your Sambals Are Waiting! 🌶️",
			html: getAbandonedCartEmail1Html(cartData),
		};

		const result = await transport.sendMail(mailOptions);
		console.log(`✅ Abandoned cart email 1 sent to ${cartData.email}`);
		return { success: true, data: result };
	} catch (error) {
		console.error("Error sending abandoned cart email 1:", error);
		return { success: false, error };
	}
}

export async function sendAbandonedCartEmail2(cartData: {
	email: string;
	firstName?: string;
	cartItems: Array<{
		name: string;
		quantity: number;
		price: string;
		image: string;
	}>;
	cartTotal: string;
}) {
	try {
		const { getAbandonedCartEmail2Html } = await import('./email-templates');
		
		const mailOptions = {
			from: `"Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
			to: cartData.email,
			subject: "Your Sambals Are Almost Gone! Limited Stock Remaining ⚠️",
			html: getAbandonedCartEmail2Html(cartData),
		};

		const result = await transport.sendMail(mailOptions);
		console.log(`✅ Abandoned cart email 2 sent to ${cartData.email}`);
		return { success: true, data: result };
	} catch (error) {
		console.error("Error sending abandoned cart email 2:", error);
		return { success: false, error };
	}
}

export async function sendAbandonedCartEmail3(cartData: {
	email: string;
	firstName?: string;
	cartTotal: string;
}) {
	try {
		const { getAbandonedCartEmail3Html } = await import('./email-templates');
		
		const mailOptions = {
			from: `"Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
			to: cartData.email,
			subject: "Final Call: 10% Off Your Sambal Collection - Last Chance! 🎁",
			html: getAbandonedCartEmail3Html(cartData),
		};

		const result = await transport.sendMail(mailOptions);
		console.log(`✅ Abandoned cart email 3 sent to ${cartData.email}`);
		return { success: true, data: result };
	} catch (error) {
		console.error("Error sending abandoned cart email 3:", error);
		return { success: false, error };
	}
}

// Monthly Recipe Newsletter Function
export async function sendMonthlyRecipeNewsletter(newsletterData: {
	email: string;
	firstName?: string;
	recipeName?: string;
	recipeImage?: string;
	featuredSambal?: string;
	monthYear?: string;
	culturalStory?: string;
}) {
	try {
		const { getMonthlyRecipeNewsletterHtml } = await import('./email-templates');
		
		const monthYear = newsletterData.monthYear || new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
		const recipeName = newsletterData.recipeName || 'Indonesian Sambal Fried Rice';
		
		const mailOptions = {
			from: `"Chef Yossie - Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
			to: newsletterData.email,
			subject: `🍛 ${monthYear} Recipe: ${recipeName} - Authentic Indonesian Cooking`,
			html: getMonthlyRecipeNewsletterHtml(newsletterData),
		};

		const result = await transport.sendMail(mailOptions);
		console.log(`✅ Monthly recipe newsletter sent to ${newsletterData.email}`);
		return { success: true, data: result };
	} catch (error) {
		console.error("Error sending monthly recipe newsletter:", error);
		return { success: false, error };
	}
}

// Bulk Newsletter Function for All Subscribers
export async function sendBulkMonthlyNewsletter(
	subscribers: Array<{ email: string; firstName?: string }>,
	newsletterData: {
		recipeName?: string;
		recipeImage?: string;
		featuredSambal?: string;
		monthYear?: string;
		culturalStory?: string;
	}
): Promise<{
	success: boolean;
	sent: number;
	failed: number;
	errors: any[];
}> {
	const results = {
		success: true,
		sent: 0,
		failed: 0,
		errors: [] as any[]
	};

	console.log(`📧 Sending monthly newsletter to ${subscribers.length} subscribers...`);

	for (const subscriber of subscribers) {
		try {
			await sendMonthlyRecipeNewsletter({
				...newsletterData,
				email: subscriber.email,
				firstName: subscriber.firstName
			});
			
			results.sent++;
			
			// Small delay to respect rate limits
			await new Promise(resolve => setTimeout(resolve, 100));
			
		} catch (error) {
			results.failed++;
			results.errors.push({
				email: subscriber.email,
				error: error instanceof Error ? error.message : 'Unknown error'
			});
			console.error(`❌ Failed to send newsletter to ${subscriber.email}:`, error);
		}
	}

	console.log(`✅ Newsletter campaign complete: ${results.sent} sent, ${results.failed} failed`);
	
	if (results.failed > 0) {
		results.success = false;
	}

	return results;
}

// Review Request Email Functions
export async function sendReviewRequestEmail(reviewData: {
	email: string;
	firstName?: string;
	orderNumber?: string;
	reviewIncentive?: string;
}) {
	try {
		const { getReviewRequestEmailHtml } = await import('./email-templates');
		
		const mailOptions = {
			from: `"Chef Yossie - Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
			to: reviewData.email,
			subject: "How Are Your Sambals? Share Your Experience & Get £5 Off! ⭐",
			html: getReviewRequestEmailHtml(reviewData),
		};

		const result = await transport.sendMail(mailOptions);
		console.log(`✅ Review request email sent to ${reviewData.email}`);
		return { success: true, data: result };
	} catch (error) {
		console.error("Error sending review request email:", error);
		return { success: false, error };
	}
}

export async function sendReviewFollowUpEmail(reviewData: {
	email: string;
	firstName?: string;
}) {
	try {
		const { getReviewFollowUpEmailHtml } = await import('./email-templates');
		
		const mailOptions = {
			from: `"Chef Yossie - Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
			to: reviewData.email,
			subject: "Final Call: 2-Minute Review = £5 Off Your Next Order ⭐",
			html: getReviewFollowUpEmailHtml(reviewData),
		};

		const result = await transport.sendMail(mailOptions);
		console.log(`✅ Review follow-up email sent to ${reviewData.email}`);
		return { success: true, data: result };
	} catch (error) {
		console.error("Error sending review follow-up email:", error);
		return { success: false, error };
	}
}