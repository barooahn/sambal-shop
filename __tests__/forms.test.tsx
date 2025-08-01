import React, { useState } from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { subscribeToNewsletter, submitContactForm } from "@/lib/actions";

// Mock the server actions
vi.mock("@/lib/actions", () => ({
	subscribeToNewsletter: vi.fn(),
	submitContactForm: vi.fn(),
}));

// Mock Next.js components
vi.mock("next/image", () => ({
	default: ({ src, alt, ...props }: any) => (
		<img src={src} alt={alt} {...props} />
	),
}));

// Create a simplified test component for the newsletter form
const NewsletterForm = () => {
	const [email, setEmail] = useState("");
	const [state, setState] = useState({
		isSubmitting: false,
		isSubmitted: false,
		message: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setState({ isSubmitting: true, isSubmitted: false, message: "" });

		try {
			const result = await subscribeToNewsletter(email);
			setState({
				isSubmitting: false,
				isSubmitted: true,
				message: result.message,
			});
			if (result.success) {
				setEmail("");
			}
		} catch (error) {
			setState({
				isSubmitting: false,
				isSubmitted: true,
				message: "Something went wrong. Please try again later.",
			});
		}
	};

	return (
		<form onSubmit={handleSubmit} data-testid='newsletter-form'>
			<input
				type='email'
				placeholder='Enter your email address'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
				data-testid='newsletter-email'
			/>
			<button
				type='submit'
				disabled={state.isSubmitting || state.isSubmitted}
				data-testid='newsletter-submit'
			>
				{state.isSubmitting
					? "Joining..."
					: state.isSubmitted
						? "Welcome to the family! 🌶️"
						: "Join the Spice Journey"}
			</button>
			{state.message && (
				<div data-testid='newsletter-message'>{state.message}</div>
			)}
		</form>
	);
};

// Create a simplified test component for the contact form
const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [state, setState] = useState({
		isSubmitting: false,
		isSubmitted: false,
		message: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setState({ isSubmitting: true, isSubmitted: false, message: "" });

		try {
			const result = await submitContactForm(formData);
			setState({
				isSubmitting: false,
				isSubmitted: true,
				message: result.message,
			});
			if (result.success) {
				setFormData({ name: "", email: "", message: "" });
			}
		} catch (error) {
			setState({
				isSubmitting: false,
				isSubmitted: true,
				message: "Something went wrong. Please try again later.",
			});
		}
	};

	return (
		<form onSubmit={handleSubmit} data-testid='contact-form'>
			<input
				type='text'
				placeholder='Your Name'
				value={formData.name}
				onChange={(e) =>
					setFormData({ ...formData, name: e.target.value })
				}
				required
				data-testid='contact-name'
			/>
			<input
				type='email'
				placeholder='Your Email'
				value={formData.email}
				onChange={(e) =>
					setFormData({ ...formData, email: e.target.value })
				}
				required
				data-testid='contact-email'
			/>
			<textarea
				placeholder='Your Message'
				value={formData.message}
				onChange={(e) =>
					setFormData({ ...formData, message: e.target.value })
				}
				required
				data-testid='contact-message'
			/>
			<button
				type='submit'
				disabled={state.isSubmitting || state.isSubmitted}
				data-testid='contact-submit'
			>
				{state.isSubmitting
					? "Sending your message..."
					: state.isSubmitted
						? "Message sent successfully! ✓"
						: "Send Message"}
			</button>
			{state.message && (
				<div data-testid='contact-response'>{state.message}</div>
			)}
		</form>
	);
};

describe("Newsletter Form", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("renders newsletter form correctly", () => {
		render(<NewsletterForm />);

		expect(screen.getByTestId("newsletter-email")).toBeInTheDocument();
		expect(screen.getByTestId("newsletter-submit")).toBeInTheDocument();
		expect(
			screen.getByText("Join the Spice Journey")
		).toBeInTheDocument();
	});

	it("handles successful newsletter subscription", async () => {
		const mockResponse = {
			success: true,
			message: "Thank you for subscribing! Check your email for a 10% discount code.",
		};

		vi.mocked(subscribeToNewsletter).mockResolvedValue(mockResponse);

		render(<NewsletterForm />);

		const emailInput = screen.getByTestId("newsletter-email");
		const submitButton = screen.getByTestId("newsletter-submit");

		fireEvent.change(emailInput, {
			target: { value: "test@example.com" },
		});
		fireEvent.click(submitButton);

		expect(screen.getByText("Joining...")).toBeInTheDocument();

		await waitFor(() => {
			expect(
				screen.getByTestId("newsletter-message")
			).toHaveTextContent(mockResponse.message);
		});

		expect(subscribeToNewsletter).toHaveBeenCalledWith(
			"test@example.com"
		);
		expect(emailInput).toHaveValue("");
	});

	it("handles newsletter subscription error", async () => {
		const mockResponse = {
			success: false,
			message: "You are already subscribed to our newsletter!",
		};

		vi.mocked(subscribeToNewsletter).mockResolvedValue(mockResponse);

		render(<NewsletterForm />);

		const emailInput = screen.getByTestId("newsletter-email");
		const submitButton = screen.getByTestId("newsletter-submit");

		fireEvent.change(emailInput, {
			target: { value: "existing@example.com" },
		});
		fireEvent.click(submitButton);

		await waitFor(() => {
			expect(
				screen.getByTestId("newsletter-message")
			).toHaveTextContent(mockResponse.message);
		});

		expect(emailInput).toHaveValue("existing@example.com"); // Email should not be cleared on error
	});
});

describe("Contact Form", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("renders contact form correctly", () => {
		render(<ContactForm />);

		expect(screen.getByTestId("contact-name")).toBeInTheDocument();
		expect(screen.getByTestId("contact-email")).toBeInTheDocument();
		expect(screen.getByTestId("contact-message")).toBeInTheDocument();
		expect(screen.getByTestId("contact-submit")).toBeInTheDocument();
		expect(screen.getByText("Send Message")).toBeInTheDocument();
	});

	it("handles successful contact form submission", async () => {
		const mockResponse = {
			success: true,
			message: "Thank you for your message! We'll get back to you within 24 hours.",
		};

		vi.mocked(submitContactForm).mockResolvedValue(mockResponse);

		render(<ContactForm />);

		const nameInput = screen.getByTestId("contact-name");
		const emailInput = screen.getByTestId("contact-email");
		const messageInput = screen.getByTestId("contact-message");
		const submitButton = screen.getByTestId("contact-submit");

		fireEvent.change(nameInput, { target: { value: "John Doe" } });
		fireEvent.change(emailInput, {
			target: { value: "john@example.com" },
		});
		fireEvent.change(messageInput, {
			target: { value: "Hello, I love sambal!" },
		});
		fireEvent.click(submitButton);

		expect(
			screen.getByText("Sending your message...")
		).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByTestId("contact-response")).toHaveTextContent(
				mockResponse.message
			);
		});

		expect(submitContactForm).toHaveBeenCalledWith({
			name: "John Doe",
			email: "john@example.com",
			message: "Hello, I love sambal!",
		});

		// Form should be cleared on success
		expect(nameInput).toHaveValue("");
		expect(emailInput).toHaveValue("");
		expect(messageInput).toHaveValue("");
	});

	it("handles contact form submission error", async () => {
		const mockResponse = {
			success: false,
			message: "Please fill in all fields.",
		};

		vi.mocked(submitContactForm).mockResolvedValue(mockResponse);

		render(<ContactForm />);

		const nameInput = screen.getByTestId("contact-name");
		const emailInput = screen.getByTestId("contact-email");
		const messageInput = screen.getByTestId("contact-message");
		const submitButton = screen.getByTestId("contact-submit");

		// Fill in some fields to trigger form submission
		fireEvent.change(nameInput, { target: { value: "Test" } });
		fireEvent.change(emailInput, {
			target: { value: "test@example.com" },
		});
		fireEvent.change(messageInput, { target: { value: "Test message" } });
		fireEvent.click(submitButton);

		await waitFor(() => {
			expect(screen.getByTestId("contact-response")).toHaveTextContent(
				mockResponse.message
			);
		});
	});
});
