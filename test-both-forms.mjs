import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
	console.error("Missing Supabase environment variables");
	process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testInterestTracking() {
	console.log("\n🔍 Testing Interest Tracking...");

	try {
		// Test inserting interest record
		const testIdentifier = `test_${Date.now()}`;
		const { data, error } = await supabase
			.from("product_interest")
			.insert([
				{
					identifier: testIdentifier,
					source: "hero_waitlist",
					user_agent: "test-agent",
				},
			])
			.select();

		if (error) {
			console.error("❌ Interest tracking failed:", error);
			return false;
		}

		console.log("✅ Interest record created:", data[0]);

		// Test reading interest records
		const { data: interests, error: readError } = await supabase
			.from("product_interest")
			.select("*")
			.limit(5);

		if (readError) {
			console.error("❌ Reading interests failed:", readError);
			return false;
		}

		console.log(`✅ Found ${interests.length} interest records`);
		return true;
	} catch (error) {
		console.error("❌ Interest tracking test failed:", error);
		return false;
	}
}

async function testNewsletterSignup() {
	console.log("\n📧 Testing Newsletter Signup...");

	try {
		// Test inserting newsletter subscriber
		const testEmail = `test_${Date.now()}@example.com`;
		const { data, error } = await supabase
			.from("newsletter_subscribers")
			.insert([
				{
					email: testEmail,
					source: "homepage",
				},
			])
			.select();

		if (error) {
			console.error("❌ Newsletter signup failed:", error);
			return false;
		}

		console.log("✅ Newsletter subscriber created:", data[0]);

		// Test reading newsletter subscribers
		const { data: subscribers, error: readError } = await supabase
			.from("newsletter_subscribers")
			.select("*")
			.limit(5);

		if (readError) {
			console.error("❌ Reading subscribers failed:", readError);
			return false;
		}

		console.log(`✅ Found ${subscribers.length} newsletter subscribers`);
		return true;
	} catch (error) {
		console.error("❌ Newsletter signup test failed:", error);
		return false;
	}
}

async function testContactForm() {
	console.log("\n💬 Testing Contact Form...");

	try {
		// Test inserting contact message
		const testMessage = {
			name: "Test User",
			email: `test_${Date.now()}@example.com`,
			message: "This is a test message from the automated test.",
		};

		const { data, error } = await supabase
			.from("contact_messages")
			.insert([testMessage])
			.select();

		if (error) {
			console.error("❌ Contact form failed:", error);
			return false;
		}

		console.log("✅ Contact message created:", data[0]);

		// Test reading contact messages
		const { data: messages, error: readError } = await supabase
			.from("contact_messages")
			.select("*")
			.limit(5);

		if (readError) {
			console.error("❌ Reading contact messages failed:", readError);
			return false;
		}

		console.log(`✅ Found ${messages.length} contact messages`);
		return true;
	} catch (error) {
		console.error("❌ Contact form test failed:", error);
		return false;
	}
}

async function runAllTests() {
	console.log("🚀 Testing all forms functionality...\n");

	const results = {
		interest: await testInterestTracking(),
		newsletter: await testNewsletterSignup(),
		contact: await testContactForm(),
	};

	console.log("\n📊 Test Results:");
	console.log(
		`Interest Tracking: ${results.interest ? "✅ PASS" : "❌ FAIL"}`
	);
	console.log(
		`Newsletter Signup: ${results.newsletter ? "✅ PASS" : "❌ FAIL"}`
	);
	console.log(`Contact Form: ${results.contact ? "✅ PASS" : "❌ FAIL"}`);

	const allPassed = Object.values(results).every((result) => result);
	console.log(
		`\n${allPassed ? "🎉 All tests passed!" : "⚠️  Some tests failed"}`
	);

	if (allPassed) {
		console.log("\n✨ Your forms are ready for production!");
		console.log("Users can now:");
		console.log("  • Join the waitlist (tracks interest without email)");
		console.log(
			"  • Subscribe to newsletter (collects email for updates)"
		);
		console.log("  • Send contact messages (full contact form)");
	}

	process.exit(allPassed ? 0 : 1);
}

runAllTests();
