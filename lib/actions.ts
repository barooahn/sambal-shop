"use server";

import { createClient } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import {
	sendWelcomeEmail,
	sendContactConfirmationEmail,
	sendContactNotificationEmail,
} from "@/lib/email";

// Newsletter subscription action
export async function subscribeToNewsletter(email: string) {
	try {
		const supabase = createClient();

		// Check if email already exists
		const { data: existing, error: checkError } = await supabase
			.from("newsletter_subscribers")
			.select("id, is_active")
			.eq("email", email)
			.single();

		if (checkError && checkError.code !== "PGRST116") {
			// PGRST116 is "not found" error, which is expected for new subscribers
			throw checkError;
		}

		if (existing) {
			if (existing.is_active) {
				return {
					success: false,
					message: "You are already subscribed to our newsletter!",
				};
			} else {
				// Reactivate subscription
				const { error: updateError } = await supabase
					.from("newsletter_subscribers")
					.update({
						is_active: true,
						subscribed_at: new Date().toISOString(),
					})
					.eq("email", email);

				if (updateError) throw updateError;

				return {
					success: true,
					message: "Welcome back! Your subscription has been reactivated.",
				};
			}
		}

		// Insert new subscriber
		const { error: insertError } = await supabase
			.from("newsletter_subscribers")
			.insert([
				{
					email,
					source: "homepage",
				},
			]);

		if (insertError) throw insertError;

		// Send welcome email
		const emailResult = await sendWelcomeEmail(email);
		if (!emailResult.success) {
			console.error(
				"Failed to send welcome email:",
				emailResult.error
			);
			// Don't fail the subscription if email fails
		}

		return {
			success: true,
			message: "Thank you for subscribing! Check your email for a 10% discount code.",
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
		const supabase = createClient();

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

		// Insert contact message
		const { error } = await supabase.from("contact_messages").insert([
			{
				name: data.name.trim(),
				email: data.email.trim(),
				message: data.message.trim(),
				status: "new",
			},
		]);

		if (error) throw error;

		// Send notification email to admin
		const adminEmailResult = await sendContactNotificationEmail(data);
		if (!adminEmailResult.success) {
			console.error(
				"Failed to send admin notification:",
				adminEmailResult.error
			);
		}

		// Send confirmation email to customer
		const confirmationEmailResult = await sendContactConfirmationEmail(
			data.email,
			data.name
		);
		if (!confirmationEmailResult.success) {
			console.error(
				"Failed to send confirmation email:",
				confirmationEmailResult.error
			);
		}

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
		const supabase = createClient();

		const { error } = await supabase
			.from("newsletter_subscribers")
			.update({ is_active: false })
			.eq("email", email);

		if (error) throw error;

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
		const supabase = createClient();

		// Get user's IP or create a simple identifier
		const userAgent =
			typeof window !== "undefined"
				? window.navigator.userAgent
				: "server";
		const timestamp = new Date().toISOString();

		// Create a simple identifier (in a real app, you might use IP or session)
		const identifier = `${userAgent.slice(0, 50)}_${Date.now()}`;

		// Insert interest record
		const { error } = await supabase.from("product_interest").insert([
			{
				identifier,
				source: "hero_waitlist",
				user_agent: userAgent.slice(0, 255),
				created_at: timestamp,
			},
		]);

		if (error) throw error;

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
