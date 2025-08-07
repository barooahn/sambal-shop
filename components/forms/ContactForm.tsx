"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, User, Mail, MessageCircle, Check } from "lucide-react";

interface ContactFormProps {
	showHeader?: boolean;
	className?: string;
}

export default function ContactForm({
	showHeader = true,
	className = "",
}: ContactFormProps) {
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
		<div
			className={`bg-white/80 rounded-sm p-8 lg:p-12 shadow-xl relative overflow-hidden hover:bg-white/85 transition-all duration-500 border border-white/50 ${className}`}
		>
			{/* Subtle background gradient */}
			<div className='absolute inset-0 bg-gradient-to-br from-white/20 via-blue-50/10 to-indigo-50/5'></div>

			{/* Decorative top border */}
			<div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-burgundy-600/80 via-blue-500/60 to-burgundy-600/80'></div>

			{showHeader && (
				<div className='text-center mb-10 relative'>
					<div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-burgundy-500 to-burgundy-600 rounded-full mb-6 shadow-lg'>
						<Mail className='w-8 h-8 text-white drop-shadow-sm' />
					</div>
					<h3 className='text-3xl font-bold text-burgundy-900 font-brand mb-4'>
						Contact Us
					</h3>
					<p className='text-lg text-neutral-600 font-body'>
						Send us a message and we&apos;ll get back to you within
						24 hours
					</p>
				</div>
			)}

			<form
				onSubmit={handleContactSubmit}
				className='space-y-8 relative'
			>
				<div className='grid sm:grid-cols-2 gap-8'>
					<div className='space-y-3'>
						<label className='block text-lg font-bold text-burgundy-800 font-heading'>
							Your Name
						</label>
						<div className='relative'>
							<div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
								<User className='w-5 h-5 text-gold-500' />
							</div>
							<Input
								placeholder='Enter your name'
								value={contactForm.name}
								onChange={(e) =>
									setContactForm({
										...contactForm,
										name: e.target.value,
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
								<Mail className='w-5 h-5 text-gold-500' />
							</div>
							<Input
								type='email'
								placeholder='Enter your email'
								value={contactForm.email}
								onChange={(e) =>
									setContactForm({
										...contactForm,
										email: e.target.value,
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
							<MessageCircle className='w-5 h-5 text-gold-500' />
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
								<Loader2 className='animate-spin -ml-1 mr-3 h-5 w-5 text-gold-200' />
								Sending...
							</>
						) : (
							<>
								<Send className='w-5 h-5 mr-2' />
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
							<Check className='w-5 h-5 text-white' />
						</div>
						<p className='font-bold text-green-800 text-center font-body text-lg'>
							{contactState.message}
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
