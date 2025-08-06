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
		<section
			id='contact-section'
			className='py-24 relative overflow-hidden'
		>
			<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
						Get In Touch
					</h2>
					<p className='text-xl text-neutral-600 max-w-2xl mx-auto font-body'>
						Have questions about our sambals or want to learn
						more about Indonesian cuisine? We'd love to hear
						from you.
					</p>
				</div>

				{/* Clean glass morphism contact form */}
				<div className='bg-white/80 rounded-sm p-8 lg:p-12 shadow-xl relative overflow-hidden hover:bg-white/85 transition-all duration-500 border border-white/50'>
					{/* Subtle background gradient */}
					<div className='absolute inset-0 bg-gradient-to-br from-white/20 via-blue-50/10 to-indigo-50/5'></div>

					{/* Decorative top border */}
					<div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-burgundy-600/80 via-blue-500/60 to-burgundy-600/80'></div>

					<div className='text-center mb-10 relative'>
						<div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-burgundy-500 to-burgundy-600 rounded-full mb-6 shadow-lg'>
							<svg
								className='w-8 h-8 text-white drop-shadow-sm'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
								/>
							</svg>
						</div>
						<h3 className='text-3xl font-bold text-burgundy-900 font-brand mb-4'>
							Contact Us
						</h3>
						<p className='text-lg text-neutral-600 font-body'>
							Send us a message and we'll get back to you
							within 24 hours
						</p>
					</div>
					<form
						onSubmit={handleContactSubmit}
						className='space-y-8'
					>
						<div className='grid sm:grid-cols-2 gap-8'>
							<div className='space-y-3'>
								<label className='block text-lg font-bold text-burgundy-800 font-heading'>
									Your Name
								</label>
								<div className='relative'>
									<div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
										<svg
											className='w-5 h-5 text-gold-500'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
											/>
										</svg>
									</div>
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
										className='text-lg py-4 pl-12 pr-4 border-2 border-gold-300/50 focus:border-burgundy-600 rounded-sm font-body bg-white/95 shadow-sm hover:shadow-md transition-all duration-200'
									/>
								</div>
							</div>
							<div className='space-y-3'>
								<label className='block text-lg font-bold text-burgundy-800 font-heading'>
									Your Email
								</label>
								<div className='relative'>
									<div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
										<svg
											className='w-5 h-5 text-gold-500'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
											/>
										</svg>
									</div>
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
										className='text-lg py-4 pl-12 pr-4 border-2 border-gold-300/50 focus:border-burgundy-600 rounded-sm font-body bg-white/95 shadow-sm hover:shadow-md transition-all duration-200'
									/>
								</div>
							</div>
						</div>
						<div className='space-y-3'>
							<label className='block text-lg font-bold text-burgundy-800 font-heading'>
								Your Message
							</label>
							<div className='relative'>
								<div className='absolute top-4 left-4 pointer-events-none'>
									<svg
										className='w-5 h-5 text-gold-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
										/>
									</svg>
								</div>
								<Textarea
									placeholder='Tell us about your interest in Indonesian sambals, questions about our products, or anything else you would like to know...'
									value={contactForm.message}
									onChange={(e) =>
										setContactForm({
											...contactForm,
											message: e.target.value,
										})
									}
									required
									className='min-h-40 text-lg pt-4 pl-12 pr-4 pb-4 border-2 border-gold-300/50 focus:border-burgundy-600 rounded-sm font-body bg-white/95 shadow-sm hover:shadow-md transition-all duration-200 resize-none'
								/>
							</div>
						</div>
						<div className='pt-4'>
							<Button
								type='submit'
								size='lg'
								className='w-full bg-gradient-to-r from-burgundy-900 to-burgundy-800 hover:from-burgundy-800 hover:to-burgundy-700 text-gold-200 font-bold py-4 px-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gold-600/30 font-elegant text-lg'
								disabled={
									contactState.isSubmitting ||
									contactState.isSubmitted
								}
							>
								{contactState.isSubmitting ? (
									<>
										<svg
											className='w-5 h-5 mr-2 animate-spin'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
											/>
										</svg>
										Sending your message...
									</>
								) : contactState.isSubmitted ? (
									<>
										<svg
											className='w-5 h-5 mr-2'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 13l4 4L19 7'
											/>
										</svg>
										Message sent successfully! ✓
									</>
								) : (
									<>
										<svg
											className='w-5 h-5 mr-2'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
											/>
										</svg>
										Send Message
									</>
								)}
							</Button>
						</div>
					</form>

					{contactState.isSubmitted && contactState.message && (
						<div className='mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-sm shadow-sm'>
							<div className='flex items-center justify-center'>
								<div className='bg-green-500 rounded-full p-2 mr-3'>
									<svg
										className='w-5 h-5 text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'
										/>
									</svg>
								</div>
								<p className='font-bold text-green-800 text-center font-body text-lg'>
									{contactState.message}
								</p>
							</div>
						</div>
					)}

					{/* Trust indicators */}
					<div className='mt-10 pt-8 border-t border-gold-200/50'>
						<div className='flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-500'>
							<div className='flex items-center gap-2'>
								<svg
									className='w-5 h-5 text-green-500'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path
										fillRule='evenodd'
										d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
										clipRule='evenodd'
									/>
								</svg>
								<span className='font-medium'>
									Secure & Private
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<svg
									className='w-5 h-5 text-blue-500'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
								<span className='font-medium'>
									24hr Response
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<svg
									className='w-5 h-5 text-gold-500'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
									/>
								</svg>
								<span className='font-medium'>
									Personal Touch
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
