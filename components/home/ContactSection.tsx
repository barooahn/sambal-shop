"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function ContactSection() {
	const [contactForm, setContactForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [contactState, setContactState] = useState({
		isSubmitting: false,
		isSubmitted: false,
		message: "",
	});

	const handleContactSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setContactState({
			isSubmitting: true,
			isSubmitted: false,
			message: "",
		});

		try {
			const result = await submitContactForm(contactForm);
			setContactState({
				isSubmitting: false,
				isSubmitted: true,
				message: result.message,
			});

			if (result.success) {
				setContactForm({ name: "", email: "", message: "" });
			}

			setTimeout(() => {
				setContactState((prev) => ({
					...prev,
					isSubmitted: false,
					message: "",
				}));
			}, 5000);
		} catch (error) {
			setContactState({
				isSubmitting: false,
				isSubmitted: true,
				message: "Something went wrong. Please try again later.",
			});

			setTimeout(() => {
				setContactState((prev) => ({
					...prev,
					isSubmitted: false,
					message: "",
				}));
			}, 5000);
		}
	};

	return (
		<section id='contact-section' className='py-24 bg-cream-50'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
						Get In Touch
					</h2>
					<p className='text-xl text-neutral-600 max-w-2xl mx-auto font-body'>
						Have questions about our sambals or want to
						learn more about Indonesian cuisine? We'd
						love to hear from you.
					</p>
				</div>

				<Card className='shadow-luxury border border-gold-200 bg-gradient-to-br from-cream-50 to-cream-100 overflow-hidden rounded-4xl'>
					<div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-burgundy-700 via-gold-600 to-burgundy-700'></div>
					<CardHeader className='pb-6'>
						<CardTitle className='text-3xl text-center font-bold text-burgundy-900 font-brand'>
							Contact Us
						</CardTitle>
						<CardDescription className='text-center text-lg text-neutral-600 font-body'>
							Send us a message and we'll get back to
							you within 24 hours
						</CardDescription>
					</CardHeader>
					<CardContent className='pt-0'>
						<form
							onSubmit={handleContactSubmit}
							className='space-y-6'
						>
							<div className='grid sm:grid-cols-2 gap-6'>
								<div>
									<label className='block text-sm font-medium text-burgundy-800 mb-2 font-elegant'>
										Your Name
									</label>
									<Input
										placeholder='Enter your name'
										value={contactForm.name}
										onChange={(e) =>
											setContactForm({
												...contactForm,
												name: e.target
													.value,
											})
										}
										required
										className='text-lg py-4 border-2 border-gold-300 focus:border-burgundy-600 rounded-2xl font-body bg-white'
									/>
								</div>
								<div>
									<label className='block text-sm font-medium text-burgundy-800 mb-2 font-elegant'>
										Your Email
									</label>
									<Input
										type='email'
										placeholder='Enter your email'
										value={contactForm.email}
										onChange={(e) =>
											setContactForm({
												...contactForm,
												email: e.target
													.value,
											})
										}
										required
										className='text-lg py-4 border-2 border-gold-300 focus:border-burgundy-600 rounded-2xl font-body bg-white'
									/>
								</div>
							</div>
							<div>
								<label className='block text-sm font-medium text-burgundy-800 mb-2 font-elegant'>
									Your Message
								</label>
								<Textarea
									placeholder='Tell us about your interest in Indonesian sambals, questions about our products, or anything else you would like to know...'
									value={contactForm.message}
									onChange={(e) =>
										setContactForm({
											...contactForm,
											message: e.target
												.value,
										})
									}
									required
									className='min-h-32 text-lg border-2 border-gold-300 focus:border-burgundy-600 rounded-2xl font-body bg-white'
								/>
							</div>
							<Button
								type='submit'
								variant='primary'
								size='lg'
								className='w-full font-elegant'
								disabled={
									contactState.isSubmitting ||
									contactState.isSubmitted
								}
							>
								{contactState.isSubmitting
									? "Sending your message..."
									: contactState.isSubmitted
										? "Message sent successfully! ✓"
										: "Send Message"}
							</Button>
						</form>

						{contactState.isSubmitted &&
							contactState.message && (
								<div className='mt-6 p-4 bg-burgundy-50 border border-burgundy-200 rounded-2xl'>
									<p className='font-medium text-burgundy-800 text-center font-body'>
										{contactState.message}
									</p>
								</div>
							)}
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
