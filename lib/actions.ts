// Client-side form actions for static export compatibility

// Newsletter subscription action
export async function subscribeToNewsletter(email: string) {
	try {
		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return {
				success: false,
				message: "Please enter a valid email address.",
			};
		}

		// For static export, we'll simulate success
		// In production, you would integrate with a service like Mailchimp, ConvertKit, etc.
		console.log("Newsletter subscription for:", email);

		// Simulate API delay
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

// Contact form submission action
export async function submitContactForm(data: {
	name: string;
	email: string;
	message: string;
}) {
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

		// For static export, we'll simulate success
		// In production, you would integrate with a service like Formspree, Netlify Forms, etc.
		console.log("Contact form submission:", data);

		// Simulate API delay
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

// Unsubscribe from newsletter action
export async function unsubscribeFromNewsletter(email: string) {
	try {
		// For static export, we'll simulate success
		console.log("Newsletter unsubscribe for:", email);

		// Simulate API delay
		await new Promise((resolve) => setTimeout(resolve, 1000));

		return {
			success: true,
			message: "You have been unsubscribed from our newsletter.",
		};
	} catch (error) {
		console.error("Newsletter unsubscribe error:", error);
		return {
			success: false,
			message: "Something went wrong. Please try again later.",
		};
	}
}

// Record interest/like action (Supabase insert)
export async function recordInterest({
	source = "hero_waitlist",
}: { source?: string } = {}) {
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

		const identifier = `anon_${Date.now()}`;
		const userAgent =
			typeof navigator !== "undefined"
				? navigator.userAgent
				: "server";

		const { error } = await supabase
			.from("product_interest")
			.insert([{ identifier, source, user_agent: userAgent }]);

		if (error) {
			console.error("Record interest error:", error);
			return {
				success: false,
				message: "Unable to record interest right now.",
			};
		}

		return {
			success: true,
			message: "Thanks for your interest! We'll notify you when we launch.",
		};
	} catch (error) {
		console.error("Record interest error:", error);
		return {
			success: false,
			message: "Something went wrong. Please try again later.",
		};
	}
}
