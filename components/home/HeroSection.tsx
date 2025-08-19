"use client";

import { useState } from "react";
import Image from "next/image";

import { ChefHat, Award, Heart, Star, Flame } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

// Removed skeleton to prevent layout shifts

export default function HeroSection() {
	const [interestState, setInterestState] = useState({
		isSubmitting: false,
		isSubmitted: false,
		message: "",
	});
	// Remove image loading state to prevent layout shift
	// const [imageLoaded, setImageLoaded] = useState(false);

	const handleInterestClick = async () => {
		setInterestState({
			isSubmitting: true,
			isSubmitted: false,
			message: "",
		});
		try {
			const res = await fetch("/api/interest", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ source: "hero_waitlist" }),
			});
			if (!res.ok) {
				throw new Error("Failed to record interest");
			}
			const result = await res.json();
			setInterestState({
				isSubmitting: false,
				isSubmitted: true,
				message:
					result.message ||
					"Thanks — we’ll notify you when we launch in the UK.",
			});
			// Track GA event (click/recorded)
			try {
				const { trackEvent } = await import(
					"@/components/analytics/GoogleAnalytics"
				);
				trackEvent(
					"hero_interest_click",
					"product_engagement",
					"hero_waitlist"
				);
			} catch {}
			// Toast confirmation
			toast.success(
				"Interest recorded — you’re on the UK VIP list! 🇬🇧🌶️"
			);
		} catch (error) {
			setInterestState({
				isSubmitting: false,
				isSubmitted: true,
				message: "Something went wrong. Please try again later.",
			});
			toast.error("Couldn’t record your interest. Please try again.");
		}

		setTimeout(() => {
			setInterestState((prev) => ({
				...prev,
				isSubmitted: false,
				message: "",
			}));
		}, 4000);
	};

	return (
		<section className='relative flex items-center justify-center overflow-hidden' style={{ minHeight: 'max(100vh, 700px)' }}>
			{/* Background Image - Optimized for LCP */}
			<div className='absolute inset-0 z-0 w-full h-full' style={{ backgroundColor: '#8B4513' }}>
				<Image
					src='/images/optimized/hero-image-lg.webp'
					alt='Authentic Sambal UK - Premium Indonesian Chili Paste Spices from Spice Islands'
					fill
					className='object-cover w-full h-full'
					priority
					fetchPriority='high'
					sizes='100vw'
					quality={60} // Reduced for faster load
					placeholder='blur'
					blurDataURL='data:image/webp;base64,UklGRlABAABXRUJQVlA4TD4BAAAvAQABACcQEf//72vv++9r7/vvAGwhOLb9AAQAAAAAAABjhwgJCQkJCQkJAJCQkJCQkJCQkABISEhISEhISEgAhISEhISEhISEAISEhISEhISEhAAQEBAQEBAQEBAAEBAQEBAQEBAQABAQEBAQEBAQEBAAICAiICAiICAiABAQEhIQEhIQEhIAEhIREhIREhIREgASEhIREhIREhIRABEhIREhIREhIREhABAQEBAQEBAQEBAQABAQEBAQEBAQEBAAEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAA'
					style={{ objectFit: 'cover' }}
				/>
			</div>

			{/* Subtle grain texture overlay */}
			<div
				className='absolute inset-0 opacity-20 mix-blend-multiply z-5'
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			></div>

			<div className='hero-content-container relative z-10 max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 py-4 sm:py-6 lg:py-8' style={{ minHeight: 'max(80vh, 600px)', width: '100%' }}>
				<div className='flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center h-full' style={{ minHeight: 'max(75vh, 550px)' }}>
					{/* Mobile/Tablet - Text content first */}
					<div className='text-center lg:text-left order-1 lg:order-2 pt-4 sm:pt-0'>
						{/* Chef badge - explicit dimensions to prevent layout shift */}
						<div className='mb-2 sm:mb-3 lg:mb-6 flex justify-center lg:justify-start'>
							<div className='bg-white/90 backdrop-blur-sm rounded-full px-3 lg:px-6 py-1.5 lg:py-3 border border-orange-200/50 shadow-xl' style={{ minHeight: '40px', width: '320px', maxWidth: '90vw' }}>
								<div className='flex items-center justify-center space-x-2 lg:space-x-3' style={{ height: '28px', minHeight: '28px' }}>
									<ChefHat className='w-3 lg:w-5 h-3 lg:h-5 text-orange-600' />
									<span className='text-gray-800 font-semibold text-xs lg:text-sm tracking-wide'>
										Chef Yossie&apos;s Traditional
										Recipes
									</span>
									<div className='hidden sm:flex space-x-1'>
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className='w-3 h-3 text-amber-500 fill-current'
											/>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Main headline with Sambal Goreng focus */}
						<h1 className='voice-hero-title mobile-text-shadow text-4xl sm:text-4xl lg:text-6xl font-light text-white mb-1 sm:mb-2 lg:mb-3 leading-tight tracking-tight'>
							<span className='block font-light text-white/90'>
								Authentic
							</span>
							<span className='sambal-title block font-bold'>
								Sambal Goreng
							</span>
							<span className='block font-light text-white/90'>
								Coming Soon to UK
							</span>
						</h1>

						{/* Subtitle */}
						<div className='mb-2 sm:mb-3 lg:mb-4'>
							<p className='text-base sm:text-lg lg:text-xl text-white/80 font-light tracking-wide'>
								Sweet & Spicy Indonesian Chili Paste - Traditional Recipe
							</p>
						</div>

						{/* Description */}
						<p className='voice-product-description mobile-text-shadow text-sm lg:text-base text-white/90 mb-3 sm:mb-4 lg:mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light px-2 lg:px-0'>
							Chef Yossie's signature{" "}
							<span className='text-amber-300 font-medium'>
								Sambal Goreng
							</span>{" "}
							combines sweet palm sugar with fiery chilies using the traditional{" "}
							<em>goreng</em> (fried) method from West Java.{" "}
							<span className='voice-location-info'>
								Perfect balance of sweet and heat - coming soon to the UK.
								Join our waitlist for early access.
							</span>
						</p>

						{/* Features with mobile-optimized design */}
						<div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6 px-2 lg:px-0'>
							{[
								{ icon: Heart, label: "Sweet & Spicy Balance" },
								{ icon: ChefHat, label: "Traditional Fried Method" },
								{
									icon: Award,
									label: "West Java Recipe",
								},
							].map(({ icon: Icon, label }) => (
								<div
									key={label}
									className='flex items-center justify-center space-x-2 lg:space-x-3 text-white/90'
								>
									<Icon className='w-4 lg:w-5 h-4 lg:h-5 text-amber-300' />
									<span className='font-light text-sm lg:text-base tracking-wide'>
										{label}
									</span>
								</div>
							))}
						</div>

						{/* CTA Buttons with mobile optimization */}
						<div className='flex flex-col gap-2.5 lg:gap-4 px-2 lg:px-0'>
							<button
								aria-label='Join Sambal Goreng waiting list'
								onClick={handleInterestClick}
								disabled={
									interestState.isSubmitting ||
									interestState.isSubmitted
								}
								className='group relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 hover:from-amber-400 hover:via-orange-500 hover:to-red-500 text-white font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 w-full min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
							>
								<div className='absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
								<div className='relative flex items-center justify-center space-x-2 lg:space-x-3'>
									{interestState.isSubmitting ? (
										<>
											<Heart className='w-4 lg:w-5 h-4 lg:h-5 animate-pulse' />
											<span className='text-sm lg:text-base'>
												Recording
												Interest...
											</span>
										</>
									) : interestState.isSubmitted ? (
										<>
											<Heart className='w-4 lg:w-5 h-4 lg:h-5' />
											<span className='text-sm lg:text-base'>
												Order Confirmed! 🌶️
											</span>
										</>
									) : (
										<>
											<Heart className='w-4 lg:w-5 h-4 lg:h-5 group-hover:animate-bounce' />
											<span className='text-sm lg:text-base'>
												Join Sambal Goreng Waitlist
											</span>
										</>
									)}
								</div>
							</button>

							<button
								aria-label='Learn About Sambal Goreng'
								onClick={() => {
									window.location.href = "/sambal-goreng-uk";
								}}
								className='group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-lg border border-white/30 hover:border-amber-300/50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
							>
								<span className='group-hover:text-amber-300 transition-colors duration-300 text-sm lg:text-base'>
									Learn More About Sambal Goreng
								</span>
							</button>
						</div>

						{interestState.message && (
							<div
								className={`mt-4 lg:mt-6 p-3 lg:p-4 rounded-lg backdrop-blur-md mx-4 lg:mx-0 lg:max-w-md border shadow-xl ${
									interestState.message.includes(
										"Thanks"
									) ||
									interestState.message.includes(
										"notify"
									)
										? "bg-green-600/20 text-green-100 border-green-400/30"
										: "bg-red-600/20 text-red-100 border-red-400/30"
								}`}
							>
								<span className='font-medium text-sm lg:text-base'>
									{interestState.message}
								</span>
							</div>
						)}
					</div>

					{/* Product showcase - optimized for performance */}
					<div className='relative order-2 lg:order-1 pb-8 sm:pb-12 lg:pb-0 flex items-center justify-center'>
						<div className='relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] mx-auto'>
							{/* Mobile-optimized container with proper aspect ratio */}
							<div className='relative z-20 group w-full' style={{ aspectRatio: '1 / 1', minHeight: '280px' }}>
								<Image
									src='/images/optimized/sambal-goreng-md.webp'
									alt='Authentic Sambal Goreng UK - Traditional Indonesian Sweet & Spicy Chili Paste from Spice Island Indonesia'
									fill
									className='object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out'
									priority
									fetchPriority='high'
									quality={75}
									sizes='(max-width: 640px) 280px, (max-width: 768px) 320px, 400px'
									placeholder='blur'
									blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
								/>

								{/* Price badge - positioned relative to container */}
								<div className='absolute -top-2 -right-2 lg:-top-4 lg:-right-4 z-30'>
									<div className='bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 text-white px-2 sm:px-3 lg:px-4 py-1 lg:py-2 rounded-full font-bold text-xs sm:text-sm lg:text-lg shadow-2xl border-2 border-white/20 backdrop-blur-sm transform rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500'>
										£7.49
									</div>
								</div>
							</div>

							{/* Subtle background glow - responsive sizing */}
							<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-72 lg:w-96 h-60 sm:h-72 lg:h-96 bg-gradient-radial from-orange-600/10 via-red-600/5 to-transparent rounded-full blur-3xl'></div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.bg-gradient-radial {
					background: radial-gradient(
						circle,
						var(--tw-gradient-stops)
					);
				}
				@media (max-width: 639px) {
					.mobile-text-shadow {
						text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
					}
					/* Ensure safe spacing from header on all mobile devices */
					.hero-content-container {
						padding-top: max(1rem, calc(env(safe-area-inset-top) + 0.5rem)) !important;
					}
				}
				/* Desktop optimization - ensure content fits above fold */
				@media (min-width: 1024px) {
					section {
						min-height: 90vh !important;
						max-height: 100vh !important;
					}
					.hero-content-container {
						min-height: 80vh !important;
						max-height: 90vh !important;
						padding-top: 2rem !important;
						padding-bottom: 2rem !important;
					}
				}
				/* Handle very short mobile screens (older devices, landscape) */
				@media (max-width: 639px) and (max-height: 600px) {
					section {
						min-height: 700px !important;
					}
					.hero-content-container {
						min-height: 560px !important;
						transform: translateY(0px) !important;
						padding-top: 1rem !important;
					}
				}
				@media (max-width: 639px) and (max-height: 500px) {
					section {
						min-height: 600px !important;
					}
					.hero-content-container {
						min-height: 480px !important;
						transform: translateY(0px) !important;
						padding-top: 1.5rem !important;
					}
				}
				/* Additional spacing for very old mobile devices */
				@media (max-width: 639px) and (max-height: 480px) {
					.hero-content-container {
						padding-top: 2rem !important;
					}
				}
			`}</style>
		</section>
	);
}
