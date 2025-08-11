"use client";

import { useState } from "react";
import Image from "next/image";

import { ChefHat, Award, Heart, Star, Flame } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

// Custom loading skeleton for Sambal Bali product
function SambalBaliSkeleton() {
	return (
		<div className='relative max-w-[280px] sm:max-w-sm lg:max-w-lg mx-auto lg:mx-0'>
			<div className='relative z-20 group'>
				{/* Main skeleton container */}
				<div className='w-full aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-lg shadow-2xl flex flex-col items-center justify-center p-8'>
					{/* Product skeleton */}
					<Skeleton className='w-3/4 h-3/4 rounded-lg bg-gradient-to-br from-orange-200 to-red-200 mb-4' />

					{/* Loading text */}
					<div className='text-center'>
						<div className='text-orange-600 font-semibold text-sm lg:text-base mb-2 animate-pulse'>
							Loading Sambal Bali...
						</div>
						<div className='flex justify-center space-x-1'>
							<div className='w-2 h-2 bg-orange-500 rounded-full animate-bounce'></div>
							<div
								className='w-2 h-2 bg-red-500 rounded-full animate-bounce'
								style={{ animationDelay: "0.1s" }}
							></div>
							<div
								className='w-2 h-2 bg-orange-500 rounded-full animate-bounce'
								style={{ animationDelay: "0.2s" }}
							></div>
						</div>
					</div>
				</div>

				{/* Price badge skeleton */}
				<div className='absolute -top-2 -right-2 lg:-top-4 lg:-right-4 z-30'>
					<Skeleton className='w-16 h-8 lg:w-20 lg:h-10 rounded-full bg-gradient-to-br from-orange-300 to-red-300' />
				</div>
			</div>

			{/* Background glow */}
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 lg:w-80 h-60 lg:h-80 bg-gradient-radial from-orange-600/10 via-red-600/5 to-transparent rounded-full blur-3xl'></div>
		</div>
	);
}

export default function HeroSection() {
	const [interestState, setInterestState] = useState({
		isSubmitting: false,
		isSubmitted: false,
		message: "",
	});
	const [imageLoaded, setImageLoaded] = useState(false);

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
		<section className='relative flex items-center justify-center overflow-hidden' style={{ minHeight: '100vh' }}>
			{/* Background Image - Optimized for LCP with fixed dimensions to prevent CLS */}
			<div className='absolute inset-0 z-0'>
				<Image
					src='/images/optimized/hero-image-sm.webp'
					alt='Premium Indonesian spices imported to UK - authentic Indonesian cooking ingredients available London Manchester Birmingham'
					width={768}
					height={1024}
					className='object-cover w-full h-full block sm:hidden'
					fetchPriority='high'
					sizes='(max-width: 640px) 100vw, 0px'
					quality={85}
				/>
				<Image
					src='/images/optimized/hero-image-md.webp'
					alt='Premium Indonesian spices imported to UK - authentic Indonesian cooking ingredients available London Manchester Birmingham'
					width={1024}
					height={768}
					className='object-cover w-full h-full hidden sm:block md:hidden'
					fetchPriority='high'
					sizes='(min-width: 640px) and (max-width: 768px) 100vw, 0px'
					quality={85}
				/>
				<Image
					src='/images/optimized/hero-image-lg.webp'
					alt='Premium Indonesian spices imported to UK - authentic Indonesian cooking ingredients available London Manchester Birmingham'
					width={1200}
					height={800}
					className='object-cover w-full h-full hidden md:block lg:hidden'
					fetchPriority='high'
					sizes='(min-width: 768px) and (max-width: 1024px) 100vw, 0px'
					quality={85}
				/>
				<Image
					src='/images/optimized/hero-image-xl.webp'
					alt='Premium Indonesian spices imported to UK - authentic Indonesian cooking ingredients available London Manchester Birmingham'
					width={1920}
					height={1080}
					className='object-cover w-full h-full hidden lg:block'
					fetchPriority='high'
					sizes='(min-width: 1024px) 100vw, 0px'
					quality={85}
				/>
			</div>

			{/* Subtle grain texture overlay */}
			<div
				className='absolute inset-0 opacity-20 mix-blend-multiply z-5'
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			></div>

			<div className='relative z-10 max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 py-6 sm:py-8 lg:py-12 translate-y-0 sm:-translate-y-4 lg:-translate-y-6'>
				<div className='flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-16 items-center'>
					{/* Mobile/Tablet - Text content first */}
					<div className='text-center lg:text-left order-1 lg:order-2 pt-2 sm:pt-0'>
						{/* Chef badge */}
						<div className='mb-4 lg:mb-6 inline-block'>
							<div className='bg-white/90 backdrop-blur-sm rounded-full px-3 lg:px-6 py-1.5 lg:py-3 border border-orange-200/50 shadow-xl'>
								<div className='flex items-center justify-center space-x-2 lg:space-x-3'>
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

						{/* Main headline with UK market optimization */}
						<h1 className='voice-hero-title mobile-text-shadow text-3xl sm:text-4xl lg:text-7xl font-light text-white mb-2 lg:mb-4 leading-tight tracking-tight'>
							<span className='block font-light text-white/90'>
								Professional
							</span>
							<span className='block font-light text-white/90'>
								Indonesian
							</span>
							<span className='block font-bold bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 bg-clip-text text-transparent'>
								Sambal UK
							</span>
						</h1>

						{/* Subtitle */}
						<div className='mb-4 lg:mb-6'>
							<p className='text-base sm:text-lg lg:text-2xl text-white/80 font-light tracking-wide'>
								From Bandung to Britain
							</p>
						</div>

						{/* Description */}
						<p className='voice-product-description mobile-text-shadow text-sm lg:text-lg text-white/90 mb-4 lg:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light px-2 lg:px-0'>
							Meet Chef Yossie - born in Bandung, trained
							in her mother&apos;s catering kitchen, now
							bringing{" "}
							<span className='text-amber-300 font-medium'>
								professional-grade Indonesian sambal
							</span>{" "}
							<span className='voice-location-info'>
								to British homes across London,
								Manchester, Birmingham, and nationwide.
							</span>
						</p>

						{/* Features with mobile-optimized design */}
						<div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 mb-4 lg:mb-8 px-2 lg:px-0'>
							{[
								{ icon: ChefHat, label: "Handcrafted" },
								{ icon: Award, label: "Authentic" },
								{
									icon: Flame,
									label: "Traditional Recipe",
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
								aria-label='Join UK waiting list'
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
												UK VIP List! 🇬🇧🌶️
											</span>
										</>
									) : (
										<>
											<Heart className='w-4 lg:w-5 h-4 lg:h-5 group-hover:animate-bounce' />
											<span className='text-sm lg:text-base'>
												Join UK waiting list
											</span>
										</>
									)}
								</div>
							</button>

							<button
								aria-label='Get UK Updates'
								onClick={() => {
									const newsletterSection =
										document.getElementById(
											"newsletter-signup"
										);
									newsletterSection?.scrollIntoView({
										behavior: "smooth",
									});
								}}
								className='group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-lg border border-white/30 hover:border-amber-300/50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
							>
								<span className='group-hover:text-amber-300 transition-colors duration-300 text-sm lg:text-base'>
									Get UK Updates
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

					{/* Product showcase - moved to bottom on mobile */}
					<div className='relative order-2 lg:order-1 pb-4 sm:pb-2 lg:pb-0'>
						<div className='relative max-w-[280px] sm:max-w-sm lg:max-w-lg mx-auto lg:mx-0'>
							{/* Main product image */}
							{/* Show skeleton until image loads */}
							{!imageLoaded && <SambalBaliSkeleton />}

							<div className='relative z-20 group'>
								<Image
									src='/images/optimized/sambal-bali-md.webp'
									alt='Spice Island Indonesia Sambal Bali - Authentic Indonesian Chili Paste'
									width={320}
									height={320}
									className={`w-full h-auto object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
									priority
									fetchPriority='high'
									quality={85}
									sizes='(max-width: 640px) 280px, (max-width: 768px) 320px, 400px'
									placeholder='blur'
									blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
									onLoad={() => setImageLoaded(true)}
								/>

								{/* Elegant price badge */}
								{imageLoaded && (
									<div className='absolute -top-2 -right-2 lg:-top-4 lg:-right-4 z-30'>
										<div className='bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full font-bold text-sm lg:text-lg shadow-2xl border-2 border-white/20 backdrop-blur-sm transform rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500'>
											£7.49
											{/* Removed: duplicate delivery badge now shown in micro header */}
											{/* Hide delivery badge; it's shown in micro header */}
											{false && (
												<div className='absolute -bottom-3 left-0'>
													<span className='hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] sm:text-xs lg:text-sm font-semibold shadow-md whitespace-nowrap'>
														Free UK
														delivery
														over £20
													</span>
												</div>
											)}
											{/* end removed badge */}
										</div>
									</div>
								)}
							</div>

							{/* Subtle background glow */}
							<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 lg:w-80 h-60 lg:h-80 bg-gradient-radial from-orange-600/10 via-red-600/5 to-transparent rounded-full blur-3xl'></div>
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
				}
			`}</style>
		</section>
	);
}
