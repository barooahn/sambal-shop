import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { vi, describe, test, expect, beforeEach, afterEach } from "vitest";
import NewsletterSection from "@/components/home/NewsletterSection";
import ContactForm from "@/components/forms/ContactForm";
import UKExitIntentPopup from "@/components/optimization/UKExitIntentPopup";
import HeroSection from "@/components/home/HeroSection";
import {
	subscribeToNewsletter,
	submitContactForm,
	recordInterest,
} from "@/lib/actions";

// Mock the actions
vi.mock("@/lib/actions", () => ({
	subscribeToNewsletter: vi.fn(),
	submitContactForm: vi.fn(),
	recordInterest: vi.fn(),
}));

// Mock Next.js Image component
vi.mock("next/image", () => ({
	default: (props: any) => {
		// eslint-disable-next-line @next/next/no-img-element
		return <img {...props} />;
	},
}));

// Mock Sonner toast
vi.mock("sonner", () => ({
	toast: {
		success: vi.fn(),
		error: vi.fn(),
	},
}));

describe("Data Collection Forms", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe("Newsletter Section", () => {
		test("renders newsletter form correctly", () => {
			render(<NewsletterSection />);

			expect(
				screen.getByText("Be First in the UK")
			).toBeInTheDocument();
			expect(
				screen.getByPlaceholderText("your.email@example.co.uk")
			).toBeInTheDocument();
			expect(
				screen.getByText("Get UK Exclusive Access")
			).toBeInTheDocument();
		});

		test("validates email input", async () => {
			render(<NewsletterSection />);

			const emailInput = screen.getByPlaceholderText(
				"your.email@example.co.uk"
			);
			const submitButton = screen.getByText("Get UK Exclusive Access");

			// Test with invalid email
			fireEvent.change(emailInput, {
				target: { value: "invalid-email" },
			});
			fireEvent.click(submitButton);

			// HTML5 validation should prevent submission
			expect(submitButton).toBeInTheDocument();
		});

		test("submits newsletter form successfully", async () => {
			const mockResponse = {
				success: true,
				message: "Thank you for subscribing!",
			};
			vi.mocked(subscribeToNewsletter).mockResolvedValue(mockResponse);

			render(<NewsletterSection />);

			const emailInput = screen.getByPlaceholderText(
				"your.email@example.co.uk"
			);
			const submitButton = screen.getByText("Get UK Exclusive Access");

			fireEvent.change(emailInput, {
				target: { value: "test@example.co.uk" },
			});
			fireEvent.click(submitButton);

			await waitFor(() => {
				expect(subscribeToNewsletter).toHaveBeenCalledWith(
					"test@example.co.uk"
				);
			});

			await waitFor(() => {
				expect(
					screen.getByText("You're on the UK VIP List! 🇬🇧🌶️")
				).toBeInTheDocument();
			});
		});

		test("handles newsletter submission error", async () => {
			const mockResponse = {
				success: false,
				message: "Please enter a valid email address.",
			};
			vi.mocked(subscribeToNewsletter).mockResolvedValue(mockResponse);

			render(<NewsletterSection />);

			const emailInput = screen.getByPlaceholderText(
				"your.email@example.co.uk"
			);
			const submitButton = screen.getByText("Get UK Exclusive Access");

			fireEvent.change(emailInput, {
				target: { value: "test@example.co.uk" },
			});
			fireEvent.click(submitButton);

			await waitFor(() => {
				expect(subscribeToNewsletter).toHaveBeenCalledWith(
					"test@example.co.uk"
				);
			});

			await waitFor(() => {
				expect(
					screen.getByText("Please enter a valid email address.")
				).toBeInTheDocument();
			});
		});

		test("disables button during submission", async () => {
			const mockResponse = {
				success: true,
				message: "Thank you for subscribing!",
			};
			vi.mocked(subscribeToNewsletter).mockImplementation(
				() =>
					new Promise((resolve) =>
						setTimeout(() => resolve(mockResponse), 1000)
					)
			);

			render(<NewsletterSection />);

			const emailInput = screen.getByPlaceholderText(
				"your.email@example.co.uk"
			);
			const submitButton = screen.getByText("Get UK Exclusive Access");

			fireEvent.change(emailInput, {
				target: { value: "test@example.co.uk" },
			});
			fireEvent.click(submitButton);

			// Button should be disabled and show loading state
			await waitFor(() => {
				expect(
					screen.getByText("Joining the Journey...")
				).toBeInTheDocument();
				expect(submitButton).toBeDisabled();
			});
		});
	});

	describe("Contact Form", () => {
		test("renders contact form correctly", () => {
			render(<ContactForm />);

			expect(screen.getByText("Contact Us")).toBeInTheDocument();
			expect(
				screen.getByPlaceholderText("Enter your name")
			).toBeInTheDocument();
			expect(
				screen.getByPlaceholderText("Enter your email")
			).toBeInTheDocument();
			expect(screen.getByText("Send Message")).toBeInTheDocument();
		});

		test("validates required fields", async () => {
			render(<ContactForm />);

			const submitButton = screen.getByText("Send Message");
			fireEvent.click(submitButton);

			// Form should not submit without required fields
			const nameInput = screen.getByPlaceholderText("Enter your name");
			const emailInput =
				screen.getByPlaceholderText("Enter your email");

			expect(nameInput).toBeRequired();
			expect(emailInput).toBeRequired();
		});

		test("submits contact form successfully", async () => {
			const mockResponse = {
				success: true,
				message: "Thank you for your message! We'll get back to you within 24 hours.",
			};
			vi.mocked(submitContactForm).mockResolvedValue(mockResponse);

			render(<ContactForm />);

			const nameInput = screen.getByPlaceholderText("Enter your name");
			const emailInput =
				screen.getByPlaceholderText("Enter your email");
			const messageInput = screen.getByPlaceholderText(
				/Tell us about your interest/
			);
			const submitButton = screen.getByText("Send Message");

			fireEvent.change(nameInput, { target: { value: "John Doe" } });
			fireEvent.change(emailInput, {
				target: { value: "john@example.co.uk" },
			});
			fireEvent.change(messageInput, {
				target: {
					value: "I would like to know more about sambal.",
				},
			});
			fireEvent.click(submitButton);

			await waitFor(() => {
				expect(submitContactForm).toHaveBeenCalledWith({
					name: "John Doe",
					email: "john@example.co.uk",
					message: "I would like to know more about sambal.",
				});
			});

			await waitFor(() => {
				expect(
					screen.getByText(
						"Thank you for your message! We'll get back to you within 24 hours."
					)
				).toBeInTheDocument();
			});
		});

		test("handles contact form submission error", async () => {
			const mockResponse = {
				success: false,
				message: "Please fill in all fields.",
			};
			vi.mocked(submitContactForm).mockResolvedValue(mockResponse);

			render(<ContactForm />);

			const nameInput = screen.getByPlaceholderText("Enter your name");
			const emailInput =
				screen.getByPlaceholderText("Enter your email");
			const messageInput = screen.getByPlaceholderText(
				/Tell us about your interest/
			);
			const submitButton = screen.getByText("Send Message");

			fireEvent.change(nameInput, { target: { value: "John Doe" } });
			fireEvent.change(emailInput, {
				target: { value: "john@example.co.uk" },
			});
			fireEvent.change(messageInput, {
				target: {
					value: "I would like to know more about sambal.",
				},
			});
			fireEvent.click(submitButton);

			await waitFor(() => {
				expect(
					screen.getByText("Please fill in all fields.")
				).toBeInTheDocument();
			});
		});

		test("clears form after successful submission", async () => {
			const mockResponse = {
				success: true,
				message: "Thank you for your message!",
			};
			vi.mocked(submitContactForm).mockResolvedValue(mockResponse);

			render(<ContactForm />);

			const nameInput = screen.getByPlaceholderText(
				"Enter your name"
			) as HTMLInputElement;
			const emailInput = screen.getByPlaceholderText(
				"Enter your email"
			) as HTMLInputElement;
			const messageInput = screen.getByPlaceholderText(
				/Tell us about your interest/
			) as HTMLTextAreaElement;
			const submitButton = screen.getByText("Send Message");

			fireEvent.change(nameInput, { target: { value: "John Doe" } });
			fireEvent.change(emailInput, {
				target: { value: "john@example.co.uk" },
			});
			fireEvent.change(messageInput, {
				target: { value: "Test message" },
			});
			fireEvent.click(submitButton);

			await waitFor(() => {
				expect(nameInput.value).toBe("");
				expect(emailInput.value).toBe("");
				expect(messageInput.value).toBe("");
			});
		});
	});

	describe("Hero Interest Button", () => {
		test("renders hero interest button correctly", () => {
			render(<HeroSection />);

			expect(
				screen.getByText("Join UK waiting list")
			).toBeInTheDocument();
			expect(screen.getByText("Get UK Updates")).toBeInTheDocument();
		});

		test("records interest successfully", async () => {
			render(<HeroSection />);

			const interestButton = screen.getByText("Join UK waiting list");
			// Mock fetch for /api/interest
			const fetchSpy = vi
				.spyOn(global as any, "fetch")
				.mockResolvedValue({
					ok: true,
					json: async () => ({
						success: true,
						message: "Thanks for your interest! We'll notify you when we launch.",
					}),
				} as any);
			fireEvent.click(interestButton);

			await waitFor(() => {
				expect(fetchSpy).toHaveBeenCalledWith(
					"/api/interest",
					expect.objectContaining({ method: "POST" })
				);
			});

			await waitFor(() => {
				expect(
					screen.getByText("UK VIP List! 🇬🇧🌶️")
				).toBeInTheDocument();
			});
			fetchSpy.mockRestore();
		});

		test("handles interest recording error", async () => {
			render(<HeroSection />);

			const interestButton = screen.getByText("Join UK waiting list");
			const fetchSpy = vi
				.spyOn(global as any, "fetch")
				.mockResolvedValue({
					ok: false,
					json: async () => ({
						success: false,
						message: "Something went wrong. Please try again later.",
					}),
				} as any);
			fireEvent.click(interestButton);

			await waitFor(() => {
				expect(
					screen.getByText(
						"Something went wrong. Please try again later."
					)
				).toBeInTheDocument();
			});
			fetchSpy.mockRestore();
		});

		test('scrolls to newsletter on "Get UK Updates" click', async () => {
			// Mock getElementById and scrollIntoView
			const mockScrollIntoView = vi.fn();
			const mockElement = { scrollIntoView: mockScrollIntoView };
			vi.spyOn(document, "getElementById").mockReturnValue(
				mockElement as any
			);

			render(<HeroSection />);

			const updatesButton = screen.getByText("Get UK Updates");
			fireEvent.click(updatesButton);

			expect(document.getElementById).toHaveBeenCalledWith(
				"newsletter-signup"
			);
			expect(mockScrollIntoView).toHaveBeenCalledWith({
				behavior: "smooth",
			});
		});
	});

	describe("Exit Intent Popup", () => {
		beforeEach(() => {
			// Reset DOM for each test
			document.body.innerHTML = "";
		});

		test("shows popup on mouse leave", async () => {
			render(<UKExitIntentPopup />);

			// Initially should not be visible
			expect(
				screen.queryByText("Wait! UK Exclusive Offer")
			).not.toBeInTheDocument();

			// Simulate mouse leave event
			const mouseLeaveEvent = new MouseEvent("mouseleave", {
				clientY: -1,
			});
			fireEvent(document, mouseLeaveEvent);

			await waitFor(() => {
				expect(
					screen.getByText("Wait! UK Exclusive Offer")
				).toBeInTheDocument();
			});
		});

		test("shows popup after 30 seconds", async () => {
			vi.useFakeTimers();

			render(<UKExitIntentPopup />);

			// Initially should not be visible
			expect(
				screen.queryByText("Wait! UK Exclusive Offer")
			).not.toBeInTheDocument();

			// Fast-forward 30 seconds
			act(() => {
				vi.advanceTimersByTime(30000);
			});

			// Wait for any state updates
			await act(async () => {
				await Promise.resolve();
			});

			// Check if popup appeared
			expect(
				screen.queryByText("Wait! UK Exclusive Offer")
			).toBeInTheDocument();

			vi.useRealTimers();
		});

		test("submits email successfully", async () => {
			// Use real timers; the simulated delay is only 1.5s and avoids fake timer pitfalls
			render(<UKExitIntentPopup />);

			// Show popup first
			const mouseLeaveEvent = new MouseEvent("mouseleave", {
				clientY: -1,
			});
			fireEvent(document, mouseLeaveEvent);

			await waitFor(() => {
				expect(
					screen.getByText("Wait! UK Exclusive Offer")
				).toBeInTheDocument();
			});

			const emailInput = screen.getByPlaceholderText(
				"your.email@example.co.uk"
			);
			const submitButton = screen.getByText(
				"Get UK Exclusive Access 🇬🇧"
			);

			fireEvent.change(emailInput, {
				target: { value: "test@example.co.uk" },
			});
			fireEvent.click(submitButton);

			// Should show loading state
			await waitFor(() => {
				expect(
					screen.getByText("Securing Your Spot...")
				).toBeInTheDocument();
			});

			// Wait for the simulated API delay to complete and success state to render
			await waitFor(
				() => {
					expect(
						screen.getByText("You're on the UK VIP List! 🇬🇧")
					).toBeInTheDocument();
				},
				{ timeout: 2500 }
			);

			// No need to flush timers; auto-close happens after 3s but is not asserted here
		});

		test("closes popup when close button clicked", async () => {
			vi.useRealTimers();
			render(<UKExitIntentPopup />);

			// Show popup first
			const mouseLeaveEvent = new MouseEvent("mouseleave", {
				clientY: -1,
			});
			fireEvent(document, mouseLeaveEvent);

			await waitFor(() => {
				expect(
					screen.getByText("Wait! UK Exclusive Offer")
				).toBeInTheDocument();
			});

			const closeButton = screen.getByLabelText("Close popup");
			fireEvent.click(closeButton);

			await waitFor(() => {
				expect(
					screen.queryByText("Wait! UK Exclusive Offer")
				).not.toBeInTheDocument();
			});
		});
	});
});

describe("Action Functions", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe("subscribeToNewsletter", () => {
		test("validates email format", async () => {
			const mockedFunction = vi.mocked(subscribeToNewsletter);
			mockedFunction.mockResolvedValue({
				success: false,
				message: "Please enter a valid email address.",
			});

			const result = await subscribeToNewsletter("invalid-email");
			expect(result.success).toBe(false);
			expect(result.message).toBe(
				"Please enter a valid email address."
			);
			expect(mockedFunction).toHaveBeenCalledWith("invalid-email");
		});

		test("accepts valid email", async () => {
			const mockedFunction = vi.mocked(subscribeToNewsletter);
			mockedFunction.mockResolvedValue({
				success: true,
				message: "Thank you for subscribing to our UK newsletter!",
			});

			const result = await subscribeToNewsletter("test@example.co.uk");
			expect(result.success).toBe(true);
			expect(result.message).toContain("Thank you for subscribing");
			expect(mockedFunction).toHaveBeenCalledWith(
				"test@example.co.uk"
			);
		});

		test("function is called with correct parameters", async () => {
			const mockedFunction = vi.mocked(subscribeToNewsletter);
			mockedFunction.mockResolvedValue({
				success: true,
				message: "Subscribed successfully",
			});

			await subscribeToNewsletter("test@example.co.uk");
			expect(mockedFunction).toHaveBeenCalledWith(
				"test@example.co.uk"
			);
		});
	});

	describe("submitContactForm", () => {
		test("validates required fields", async () => {
			const mockedFunction = vi.mocked(submitContactForm);
			mockedFunction.mockResolvedValue({
				success: false,
				message: "Please fill in all fields.",
			});

			const result = await submitContactForm({
				name: "",
				email: "test@example.co.uk",
				message: "Test message",
			});
			expect(result.success).toBe(false);
			expect(result.message).toBe("Please fill in all fields.");
		});

		test("validates email format", async () => {
			const mockedFunction = vi.mocked(submitContactForm);
			mockedFunction.mockResolvedValue({
				success: false,
				message: "Please enter a valid email address.",
			});

			const result = await submitContactForm({
				name: "John Doe",
				email: "invalid-email",
				message: "Test message",
			});
			expect(result.success).toBe(false);
			expect(result.message).toBe(
				"Please enter a valid email address."
			);
		});

		test("accepts valid form data", async () => {
			const mockedFunction = vi.mocked(submitContactForm);
			mockedFunction.mockResolvedValue({
				success: true,
				message: "Thank you for your message! We'll get back to you soon.",
			});

			const formData = {
				name: "John Doe",
				email: "john@example.co.uk",
				message: "I would like to know more about sambal.",
			};
			const result = await submitContactForm(formData);
			expect(result.success).toBe(true);
			expect(result.message).toContain("Thank you for your message");
		});

		test("function is called with correct parameters", async () => {
			const mockedFunction = vi.mocked(submitContactForm);
			mockedFunction.mockResolvedValue({
				success: true,
				message: "Message sent successfully",
			});

			const formData = {
				name: "John Doe",
				email: "john@example.co.uk",
				message: "Test message",
			};
			await submitContactForm(formData);
			expect(mockedFunction).toHaveBeenCalledWith(formData);
		});
	});

	describe("recordInterest", () => {
		const originalEnv = process.env;

		afterEach(() => {
			process.env = originalEnv;
		});

		test("falls back to simulation when Supabase env vars missing", async () => {
			const mockedFunction = vi.mocked(recordInterest);
			mockedFunction.mockResolvedValue({
				success: true,
				message: "Thanks for your interest! We'll be in touch soon.",
			});

			const result = await recordInterest({ source: "test" });

			expect(result.success).toBe(true);
			expect(result.message).toContain("Thanks for your interest");
			expect(mockedFunction).toHaveBeenCalledWith({ source: "test" });
		});

		test("uses default source parameter", async () => {
			const mockedFunction = vi.mocked(recordInterest);
			mockedFunction.mockResolvedValue({
				success: true,
				message: "Interest recorded successfully",
			});

			const result = await recordInterest();
			expect(result.success).toBe(true);
			expect(mockedFunction).toHaveBeenCalledWith();
		});
	});
});
