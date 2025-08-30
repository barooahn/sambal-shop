 import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const { email } = await request.json();

		// Validate email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ success: false, message: "Invalid email address" },
				{ status: 400 }
			);
		}

		// Store in Supabase (preferred)
		try {
			const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
			const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
			const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

			if (supabaseUrl && (serviceRoleKey || anonKey)) {
				const { createClient } = await import(
					"@supabase/supabase-js"
				);
				const supabase = createClient(
					supabaseUrl,
					serviceRoleKey || (anonKey as string)
				);

				const { error } = await supabase
					.from("newsletter_subscribers")
					.insert([
						{
							email,
							source: "website-newsletter",
							is_active: true,
							subscribed_at: new Date().toISOString(),
						},
					]);

				if (error) {
					const msg = (error.message || "").toLowerCase();
					if (
						(error as any).code === "23505" ||
						msg.includes("duplicate") ||
						msg.includes("unique")
					) {
						return NextResponse.json({
							success: true,
							message: "You're already subscribed. Thanks for being with us!",
						});
					}
					console.error(
						"Supabase insert error (newsletter):",
						error
					);
					return NextResponse.json(
						{
							success: false,
							message: "Unable to subscribe right now. Please try again later.",
						},
						{ status: 500 }
					);
				}

				// Send welcome email (non-blocking)
				try {
					if (process.env.ZEPTOMAIL_SMTP_HOST && process.env.ZEPTOMAIL_FROM_EMAIL) {
						// Import and send welcome email
						const emailLib = await import("@/lib/email");
						emailLib.sendWelcomeEmail(email).catch((error: any) => {
							console.error('Welcome email error:', error);
						});
					}
				} catch (error) {
					console.error('Email sending error:', error);
				}

				return NextResponse.json({
					success: true,
					message: "Thank you for subscribing! We'll be in touch soon with updates and a special discount code.",
				});
			}
		} catch (supabaseError) {
			console.error(
				"Supabase client error (newsletter):",
				supabaseError
			);
			// fall through to simulated success
		}

		// Fallback to simulation/logging
		console.log("Newsletter subscription for:", email);

		return NextResponse.json({
			success: true,
			message: "Thank you for subscribing! We'll be in touch soon with updates and a special discount code.",
		});
	} catch (error) {
		console.error("Newsletter subscription error:", error);
		return NextResponse.json(
			{ success: false, message: "Internal server error" },
			{ status: 500 }
		);
	}
}
