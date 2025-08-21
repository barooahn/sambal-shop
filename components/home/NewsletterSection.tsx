"use client";

import { useState } from "react";
import { subscribeToNewsletter } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift, Star, Sparkles } from "lucide-react";

export default function NewsletterSection() {
	const [email, setEmail] = useState("");
	const [newsletterState, setNewsletterState] = useState({
		isSubmitting: false,
		isSubmitted: false,
		message: "",
	});

	const handleEmailSignup = async (e: React.FormEvent) => {
		e.preventDefault();
		setNewsletterState({
			isSubmitting: true,
			isSubmitted: false,
			message: "",
		});

		try {
			const result = await subscribeToNewsletter(email);
			setNewsletterState({
				isSubmitting: false,
				isSubmitted: true,
				message: result.message,
			});

			if (result.success) {
				setEmail("");
			}

			setTimeout(() => {
				setNewsletterState((prev) => ({
					...prev,
					isSubmitted: false,
					message: "",
				}));
			}, 5000);
		} catch (error) {
			setNewsletterState({
				isSubmitting: false,
				isSubmitted: true,
				message: "Something went wrong. Please try again later.",
			});

			setTimeout(() => {
				setNewsletterState((prev) => ({
					...prev,
					isSubmitted: false,
					message: "",
				}));
			}, 5000);
		}
	};

	return (
		<section id='newsletter-signup' className='relative overflow-hidden'>
			<div className='pt-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<div className='flex items-center justify-center gap-2 mb-6'>
						<Sparkles className='w-8 h-8 text-gold-600' />
						<span className='text-sm font-bold text-burgundy-600 uppercase tracking-wider font-elegant'>
							Exclusive Access
						</span>
						<Sparkles className='w-8 h-8 text-gold-600' />
					</div>

					<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-6 font-brand'>
						Be First in the UK
					</h2>

					<p className='text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-body'>
						Join 500+ UK food lovers waiting for Chef Yossie's authentic Indonesian sambal. Be the first to experience professional-grade chili paste delivered to London, Manchester, Birmingham & nationwide.
					</p>
				</div>

				<div className='max-w-6xl mx-auto'>
					{/* Clean glass morphism container */}
					<div className='bg-white/20 backdrop-blur-md rounded-sm p-6 lg:p-12 shadow-xl relative overflow-hidden hover:bg-white/25 transition-all duration-500'>
						{/* Multi-layer glass effect */}
						<div className='absolute inset-0 bg-gradient-to-br from-white/10 via-blue-50/20 to-indigo-50/10 backdrop-blur-sm'></div>
						<div className='absolute inset-4 bg-gradient-to-br from-white/5 to-transparent rounded-sm backdrop-blur-xs'></div>

						<div className='relative'>
							<div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch'>
								{/* Left side - Benefits */}
								<div className='space-y-6'>
									<div className='text-center lg:text-left'>
										<h3 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 font-brand'>
											UK Exclusive Preview
										</h3>
										<p className='text-xl text-neutral-600 font-body'>
											Get VIP access to the UK's most authentic Indonesian sambal. Subscribe to our
											newsletter and unlock
											exclusive benefits
										</p>
									</div>

									<div className='space-y-4'>
										{/* Clean glass morphism benefit cards */}
										<div className='flex items-start gap-4 p-6 bg-white/25 backdrop-blur-md rounded-sm hover:bg-white/35 transition-all duration-300 shadow-lg'>
											<div className='w-14 h-14 bg-gradient-to-r from-burgundy-500/80 to-burgundy-600/80 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 shadow-lg'>
												<Gift className='w-7 h-7 text-white drop-shadow-sm' />
											</div>
											<div>
												<h4 className='text-xl font-bold text-burgundy-900 mb-2 font-heading'>
													UK Exclusive: 25% Off First Order
												</h4>
												<p className='text-neutral-600 font-body'>
													Special launch discount for UK customers only. Plus free delivery to London, Manchester, Birmingham & nationwide.
												</p>
											</div>
										</div>

										<div className='flex items-start gap-4 p-6 bg-white/25 backdrop-blur-md rounded-sm hover:bg-white/35 transition-all duration-300 shadow-lg'>
											<div className='w-14 h-14 bg-gradient-to-r from-burgundy-500/80 to-burgundy-600/80 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 shadow-lg'>
												<Star className='w-7 h-7 text-white drop-shadow-sm' />
											</div>
											<div>
												<h4 className='text-xl font-bold text-burgundy-900 mb-2 font-heading'>
													Priority Access - UK Launch
												</h4>
												<p className='text-neutral-600 font-body'>
													Be among the first 100 UK customers to taste Chef Yossie's professional-grade sambal. Skip the waiting list with VIP email access.
												</p>
											</div>
										</div>

										<div className='flex items-start gap-4 p-6 bg-white/25 backdrop-blur-md rounded-sm hover:bg-white/35 transition-all duration-300 shadow-lg'>
											<div className='w-14 h-14 bg-gradient-to-r from-burgundy-500/80 to-burgundy-600/80 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 shadow-lg'>
												<Mail className='w-7 h-7 text-white drop-shadow-sm' />
											</div>
											<div>
												<h4 className='text-xl font-bold text-burgundy-900 mb-2 font-heading'>
													British-Indonesian Recipe Guide
												</h4>
												<p className='text-neutral-600 font-body'>
													Free recipe collection adapting traditional Indonesian dishes for British kitchens. UK supermarket ingredients included.
												</p>
											</div>
										</div>
									</div>
								</div>

								{/* Right side - Form */}
								<div className='flex flex-col justify-center'>
									<div className='bg-gradient-to-br from-burgundy-900 to-burgundy-800 rounded-sm p-8 text-white shadow-xl h-full flex flex-col justify-center'>
										<div className='text-center mb-6'>
											<h4 className='text-2xl font-bold mb-2 font-brand text-gold-200'>
												Join the UK Preview List
											</h4>
											<p className='text-burgundy-100 font-body'>
												Join 500+ UK food lovers waiting for authentic Indonesian sambal
											</p>
										</div>

										<form
											onSubmit={
												handleEmailSignup
											}
											className='space-y-6'
										>
											<div>
												<label
													htmlFor='newsletter-email'
													className='block text-lg font-bold text-gold-200 mb-3 font-heading'
												>
													Email Address
												</label>
												<Input
													id='newsletter-email'
													type='email'
													placeholder='your.email@example.co.uk'
													value={email}
													onChange={(
														e
													) =>
														setEmail(
															e
																.target
																.value
														)
													}
													required
													className='text-lg py-4 px-6 border-2 border-gold-300/30 focus:border-gold-300 rounded-sm font-body bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 transition-colors duration-200 w-full'
												/>
											</div>

											<Button
												type='submit'
												size='lg'
												className='w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-burgundy-900 font-bold py-4 px-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 font-elegant'
												disabled={
													newsletterState.isSubmitting ||
													newsletterState.isSubmitted
												}
											>
												{newsletterState.isSubmitting ? (
													<>
														<Mail className='w-5 h-5 mr-2 animate-pulse' />
														Joining
														the
														Journey...
													</>
												) : newsletterState.isSubmitted ? (
													<>
														<Star className='w-5 h-5 mr-2' />
														You're on the UK VIP List! 🇬🇧🌶️
													</>
												) : (
													<>
														<Mail className='w-5 h-5 mr-2' />
														Get UK Exclusive Access
													</>
												)}
											</Button>

											{newsletterState.isSubmitted &&
												newsletterState.message && (
													<div className='p-4 bg-gold-100/20 border border-gold-300/30 rounded-lg backdrop-blur-sm'>
														<p className='text-gold-100 text-center font-medium font-body'>
															{
																newsletterState.message
															}
														</p>
													</div>
												)}
										</form>

										<div className='mt-6 text-center'>
											<p className='text-sm text-burgundy-200 font-body'>
												No spam, unsubscribe
												at any time. We
												respect your
												privacy.
											</p>
										</div>

										<div className='mt-6 flex items-center justify-center gap-4 text-sm text-burgundy-200'>
											<div className='flex items-center gap-1'>
												<Star className='w-4 h-4 text-gold-300' />
												<span>
													4.9/5 rating
												</span>
											</div>
											<div className='w-1 h-1 bg-burgundy-300 rounded-full'></div>
											<div>2,500+ members</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Trust indicators */}
				<div className='mt-16 text-center'>
					<div className='flex flex-wrap justify-center items-center gap-8 text-neutral-500'>
						<div className='flex items-center gap-2'>
							<Star className='w-5 h-5 text-gold-500 fill-gold-500' />
							<span className='text-sm font-medium'>
								4.9/5 Customer Rating
							</span>
						</div>
						<div className='flex items-center gap-2'>
							<Mail className='w-5 h-5 text-burgundy-500' />
							<span className='text-sm font-medium'>
								1000+ Happy Subscribers
							</span>
						</div>
						<div className='flex items-center gap-2'>
							<Gift className='w-5 h-5 text-gold-500' />
							<span className='text-sm font-medium'>
								Exclusive Member Benefits
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
