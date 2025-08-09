// Enhanced client-side form actions with real backend integrations
// This file provides the foundation for connecting to real backend services

type ActionResponse = {
	success: boolean;
	message: string;
};

// Configuration for different backend services
const BACKEND_CONFIG = {
	// For production, replace these with your actual service endpoints
	NEWSLETTER_ENDPOINT: process.env.NEXT_PUBLIC_NEWSLETTER_API || '/api/newsletter',
	CONTACT_ENDPOINT: process.env.NEXT_PUBLIC_CONTACT_API || '/api/contact',
	MAILCHIMP_API_KEY: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
	MAILCHIMP_LIST_ID: process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID,
	CONVERTKIT_API_KEY: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
	CONVERTKIT_FORM_ID: process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID,
	FORMSPREE_ENDPOINT: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT,
} as const;

// Newsletter subscription with multiple backend options
export async function subscribeToNewsletter(email: string): Promise<ActionResponse> {
	try {
		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return {
				success: false,
				message: "Please enter a valid email address.",
			};
		}

		// Try ConvertKit integration first (recommended for newsletters)
		if (BACKEND_CONFIG.CONVERTKIT_API_KEY && BACKEND_CONFIG.CONVERTKIT_FORM_ID) {
			return await subscribeViaConvertKit(email);
		}

		// Fallback to Mailchimp
		if (BACKEND_CONFIG.MAILCHIMP_API_KEY && BACKEND_CONFIG.MAILCHIMP_LIST_ID) {
			return await subscribeViaMailchimp(email);
		}

		// Fallback to custom API endpoint
		if (BACKEND_CONFIG.NEWSLETTER_ENDPOINT !== '/api/newsletter') {
			return await subscribeViaCustomAPI(email);
		}

		// Final fallback - simulate success for static sites
		console.log("Newsletter subscription for:", email);
		await new Promise((resolve) => setTimeout(resolve, 1000));

		return {
			success: true,
			message: "Thank you for subscribing! We'll be in touch soon with updates and a special discount code.",
		};
	} catch (error) {
		console.error("Newsletter subscription error:", error);
		return {
			success: false,
			message: "Something went wrong. Please try again later.",
		};
	}
}

// ConvertKit integration for newsletter
async function subscribeViaConvertKit(email: string): Promise<ActionResponse> {
	try {
		const response = await fetch('https://api.convertkit.com/v3/forms/' + BACKEND_CONFIG.CONVERTKIT_FORM_ID + '/subscribe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				api_key: BACKEND_CONFIG.CONVERTKIT_API_KEY,
				email: email,
				tags: ['uk-customer', 'website-signup']
			}),
		});

		if (!response.ok) {
			throw new Error('ConvertKit API error');
		}

		const data = await response.json();

		if (data.subscription) {
			return {
				success: true,
				message: "Welcome to our UK VIP list! Check your email for exclusive offers.",
			};
		} else {
			return {
				success: false,
				message: "Unable to subscribe at this time. Please try again.",
			};
		}
	} catch (error) {
		console.error('ConvertKit subscription error:', error);
		throw error;
	}
}

// Mailchimp integration for newsletter
async function subscribeViaMailchimp(email: string): Promise<ActionResponse> {
	try {
		const response = await fetch('/api/mailchimp-subscribe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				tags: ['uk-customer', 'website-signup']
			}),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || 'Mailchimp API error');
		}

		const data = await response.json();

		return {
			success: true,
			message: data.message || "Welcome to our UK VIP list! Check your email for exclusive offers.",
		};
	} catch (error) {
		console.error('Mailchimp subscription error:', error);
		throw error;
	}
}

// Custom API integration for newsletter
async function subscribeViaCustomAPI(email: string): Promise<ActionResponse> {
	try {
		const response = await fetch(BACKEND_CONFIG.NEWSLETTER_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				source: 'website-newsletter',
				timestamp: new Date().toISOString(),
				location: 'UK'
			}),
		});

		if (!response.ok) {
			const errorData = await response.json().catch(() => ({}));
			throw new Error(errorData.message || `HTTP ${response.status}`);
		}

		const data = await response.json();

		return {
			success: true,
			message: data.message || "Thank you for subscribing! We'll be in touch soon.",
		};
	} catch (error) {
		console.error('Custom API subscription error:', error);
		throw error;
	}
}

// Contact form submission with multiple backend options
export async function submitContactForm(data: {
	name: string;
	email: string;
	message: string;
}): Promise<ActionResponse> {
	try {
		// Validate input
		if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
			return {
				success: false,
				message: "Please fill in all fields.",
			};
		}

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(data.email)) {
			return {
				success: false,
				message: "Please enter a valid email address.",
			};
		}

		// Try Formspree integration first (recommended for contact forms)
		if (BACKEND_CONFIG.FORMSPREE_ENDPOINT) {
			return await submitViaFormspree(data);
		}

		// Fallback to custom API endpoint
		if (BACKEND_CONFIG.CONTACT_ENDPOINT !== '/api/contact') {
			return await submitViaCustomContactAPI(data);
		}

		// Final fallback - simulate success for static sites
		console.log("Contact form submission:", data);
		await new Promise((resolve) => setTimeout(resolve, 1500));

		return {
			success: true,
			message: "Thank you for your message! We'll get back to you within 24 hours.",
		};
	} catch (error) {
		console.error("Contact form submission error:", error);
		return {
			success: false,
			message: "Something went wrong. Please try again later.",
		};
	}
}

// Formspree integration for contact form
async function submitViaFormspree(data: {
	name: string;
	email: string;
	message: string;
}): Promise<ActionResponse> {
	try {
		const response = await fetch(BACKEND_CONFIG.FORMSPREE_ENDPOINT!, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: data.name,
				email: data.email,
				message: data.message,
				_subject: 'New Contact Form Submission - Spice Island Indonesia',
				_replyto: data.email,
			}),
		});

		if (!response.ok) {
			const errorData = await response.json().catch(() => ({}));
			throw new Error(errorData.message || 'Formspree submission error');
		}

		return {
			success: true,
			message: "Thank you for your message! We'll get back to you within 24 hours.",
		};
	} catch (error) {
		console.error('Formspree submission error:', error);
		throw error;
	}
}

// Custom API integration for contact form
async function submitViaCustomContactAPI(data: {
	name: string;
	email: string;
	message: string;
}): Promise<ActionResponse> {
	try {
		const response = await fetch(BACKEND_CONFIG.CONTACT_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...data,
				timestamp: new Date().toISOString(),
				source: 'website-contact',
				userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'server',
			}),
		});

		if (!response.ok) {
			const errorData = await response.json().catch(() => ({}));
			throw new Error(errorData.message || `HTTP ${response.status}`);
		}

		const result = await response.json();

		return {
			success: true,
			message: result.message || "Thank you for your message! We'll get back to you within 24 hours.",
		};
	} catch (error) {
		console.error('Custom contact API submission error:', error);
		throw error;
	}
}

// Enhanced interest recording with better error handling
export async function recordInterest({
	source = "hero_waitlist",
}: { source?: string } = {}): Promise<ActionResponse> {
	try {
		const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
		const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

		if (!supabaseUrl || !supabaseKey) {
			console.warn(
				"Supabase env vars missing; falling back to simulated success"
			);
			await new Promise((resolve) => setTimeout(resolve, 500));
			return {
				success: true,
				message: "Thanks for your interest! We'll notify you when we launch.",
			};
		}

		const { createClient } = await import("@supabase/supabase-js");
		const supabase = createClient(supabaseUrl, supabaseKey);

		// Generate better identifier with timestamp
		const identifier = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
		const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "server";
		const timestamp = new Date().toISOString();

		const { error } = await supabase
			.from("product_interest")
			.insert([{ 
				identifier, 
				source, 
				user_agent: userAgent,
				created_at: timestamp,
				metadata: {
					url: typeof window !== 'undefined' ? window.location.href : null,
					referrer: typeof document !== 'undefined' ? document.referrer : null,
				}
			}]);

		if (error) {
			console.error("Record interest error:", error);
			return {
				success: false,
				message: "Unable to record interest right now. Please try the newsletter signup instead.",
			};
		}

		return {
			success: true,
			message: "Thanks for your interest! We'll notify you when we launch in the UK.",
		};
	} catch (error) {
		console.error("Record interest error:", error);
		return {
			success: false,
			message: "Something went wrong. Please try the newsletter signup instead.",
		};
	}
}

// Unsubscribe functionality with backend integration
export async function unsubscribeFromNewsletter(email: string): Promise<ActionResponse> {
	try {
		// Try ConvertKit unsubscribe first
		if (BACKEND_CONFIG.CONVERTKIT_API_KEY) {
			return await unsubscribeViaConvertKit(email);
		}

		// Fallback to custom API
		if (BACKEND_CONFIG.NEWSLETTER_ENDPOINT !== '/api/newsletter') {
			return await unsubscribeViaCustomAPI(email);
		}

		// Final fallback - simulate success
		console.log("Newsletter unsubscribe for:", email);
		await new Promise((resolve) => setTimeout(resolve, 1000));

		return {
			success: true,
			message: "You have been unsubscribed from our newsletter.",
		};
	} catch (error) {
		console.error("Newsletter unsubscribe error:", error);
		return {
			success: false,
			message: "Something went wrong. Please contact us directly to unsubscribe.",
		};
	}
}

// ConvertKit unsubscribe
async function unsubscribeViaConvertKit(email: string): Promise<ActionResponse> {
	try {
		const response = await fetch(`https://api.convertkit.com/v3/unsubscribe`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				api_key: BACKEND_CONFIG.CONVERTKIT_API_KEY,
				email: email,
			}),
		});

		if (!response.ok) {
			throw new Error('ConvertKit unsubscribe error');
		}

		return {
			success: true,
			message: "You have been unsubscribed from our newsletter.",
		};
	} catch (error) {
		console.error('ConvertKit unsubscribe error:', error);
		throw error;
	}
}

// Custom API unsubscribe
async function unsubscribeViaCustomAPI(email: string): Promise<ActionResponse> {
	try {
		const response = await fetch(`${BACKEND_CONFIG.NEWSLETTER_ENDPOINT}/unsubscribe`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				timestamp: new Date().toISOString(),
			}),
		});

		if (!response.ok) {
			throw new Error('Custom API unsubscribe error');
		}

		const data = await response.json();

		return {
			success: true,
			message: data.message || "You have been unsubscribed from our newsletter.",
		};
	} catch (error) {
		console.error('Custom API unsubscribe error:', error);
		throw error;
	}
}

// Utility function to test backend connectivity
export async function testBackendConnections(): Promise<{
	newsletter: boolean;
	contact: boolean;
	supabase: boolean;
}> {
	const results = {
		newsletter: false,
		contact: false,
		supabase: false,
	};

	// Test newsletter backend
	try {
		if (BACKEND_CONFIG.CONVERTKIT_API_KEY) {
			const response = await fetch(`https://api.convertkit.com/v3/account?api_key=${BACKEND_CONFIG.CONVERTKIT_API_KEY}`);
			results.newsletter = response.ok;
		} else if (BACKEND_CONFIG.NEWSLETTER_ENDPOINT !== '/api/newsletter') {
			const response = await fetch(BACKEND_CONFIG.NEWSLETTER_ENDPOINT, { method: 'HEAD' });
			results.newsletter = response.ok;
		}
	} catch (error) {
		console.error('Newsletter backend test failed:', error);
	}

	// Test contact backend
	try {
		if (BACKEND_CONFIG.FORMSPREE_ENDPOINT) {
			const response = await fetch(BACKEND_CONFIG.FORMSPREE_ENDPOINT, { method: 'HEAD' });
			results.contact = response.ok;
		} else if (BACKEND_CONFIG.CONTACT_ENDPOINT !== '/api/contact') {
			const response = await fetch(BACKEND_CONFIG.CONTACT_ENDPOINT, { method: 'HEAD' });
			results.contact = response.ok;
		}
	} catch (error) {
		console.error('Contact backend test failed:', error);
	}

	// Test Supabase
	try {
		const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
		const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

		if (supabaseUrl && supabaseKey) {
			const { createClient } = await import("@supabase/supabase-js");
			const supabase = createClient(supabaseUrl, supabaseKey);
			
			const { error } = await supabase.from('product_interest').select('id').limit(1);
			results.supabase = !error;
		}
	} catch (error) {
		console.error('Supabase test failed:', error);
	}

	return results;
}