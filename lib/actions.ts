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

// Record interest/like action
export async function recordInterest() {
	try {
		// For static export, we'll simulate success
		console.log("Interest recorded from user");

		// Simulate API delay
		await new Promise((resolve) => setTimeout(resolve, 800));

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
