"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChefHat, Award, Heart, Star, Flame, MapPin } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

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

	// Simulate loading delay for demonstration
	useEffect(() => {
		const timer = setTimeout(() => {
			setImageLoaded(true);
		}, 2000); // Show skeleton for 2 seconds

		return () => clearTimeout(timer);
	}, []);

	const handleInterestClick = async () => {
		setInterestState({
			isSubmitting: true,
			isSubmitted: false,
			message: "",
		});

		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1500));
			setInterestState({
				isSubmitting: false,
				isSubmitted: true,
				message: "Thanks! We&apos;ll notify you when Chef Yossie&apos;s sambal is ready! 🌶️",
			});

			setTimeout(() => {
				setInterestState((prev) => ({
					...prev,
					isSubmitted: false,
					message: "",
				}));
			}, 5000);
		} catch (error) {
			setInterestState({
				isSubmitting: false,
				isSubmitted: true,
				message: "Something went wrong. Please try again later.",
			});

			setTimeout(() => {
				setInterestState((prev) => ({
					...prev,
					isSubmitted: false,
					message: "",
				}));
			}, 5000);
		}
	};

	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
			{/* Background Image - Optimized for LCP */}
			<div className='absolute inset-0 z-0'>
				<Image
					src='/images/optimized/hero-image-xl.webp'
					alt='Fresh Indonesian ingredients including chilies, shallots, and spices'
					fill
					className='object-cover'
					priority
					fetchPriority='high'
					quality={75}
					sizes='100vw'
					placeholder='blur'
					blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
				/>
				{/* Dark overlay for text readability */}
				<div className='absolute inset-0 bg-black/50'></div>
			</div>

			{/* Subtle grain texture overlay */}
			<div
				className='absolute inset-0 opacity-20 mix-blend-multiply z-5'
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			></div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20'>
				<div className='flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-16 items-center min-h-[calc(100vh-4rem)] lg:min-h-0'>
					{/* Mobile/Tablet - Text content first */}
					<div className='text-center lg:text-left order-1 lg:order-2 pt-4 lg:pt-0'>
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

						{/* Main headline with mobile-optimized typography */}
						<h1 className='text-3xl sm:text-4xl lg:text-7xl font-light text-white mb-2 lg:mb-4 leading-tight tracking-tight'>
							<span className='block font-light text-white/90'>
								Professional
							</span>
							<span className='block font-light text-white/90'>
								Indonesian
							</span>
							<span className='block font-bold bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 bg-clip-text text-transparent'>
								Sambal
							</span>
						</h1>

						{/* Subtitle */}
						<div className='mb-4 lg:mb-6'>
							<p className='text-base sm:text-lg lg:text-2xl text-white/80 font-light tracking-wide'>
								From Bandung to Britain
							</p>
						</div>

						{/* Description */}
						<p className='text-sm lg:text-lg text-white/90 mb-4 lg:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light px-2 lg:px-0'>
							Meet Chef Yossie - born in Bandung, trained
							in her mother&apos;s catering kitchen, now
							bringing{" "}
							<span className='text-amber-300 font-medium'>
								professional-grade Indonesian sambal
							</span>{" "}
							to British homes across London, Manchester,
							Birmingham, and nationwide.
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
								onClick={handleInterestClick}
								disabled={
									interestState.isSubmitting ||
									interestState.isSubmitted
								}
								className='group relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 hover:from-amber-400 hover:via-orange-500 hover:to-red-500 text-white font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 w-full'
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
												Thanks! 🌶️
											</span>
										</>
									) : (
										<>
											<Heart className='w-4 lg:w-5 h-4 lg:h-5 group-hover:animate-bounce' />
											<span className='text-sm lg:text-base'>
												Join the Waitlist
											</span>
										</>
									)}
								</div>
							</button>

							<button
								onClick={() => {
									const newsletterSection =
										document.getElementById(
											"newsletter-signup"
										);
									newsletterSection?.scrollIntoView({
										behavior: "smooth",
									});
								}}
								className='group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-lg border border-white/30 hover:border-amber-300/50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full'
							>
								<span className='group-hover:text-amber-300 transition-colors duration-300 text-sm lg:text-base'>
									Get Updates
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
					<div className='relative order-2 lg:order-1 pb-6 lg:pb-0'>
						{!imageLoaded ? (
							<SambalBaliSkeleton />
						) : (
							<div className='relative max-w-[280px] sm:max-w-sm lg:max-w-lg mx-auto lg:mx-0'>
								{/* Main product image */}
								<div className='relative z-20 group'>
									<Image
										src='/images/optimized/sambal-bali-md.webp'
										alt='Spice Island Indonesia Sambal Bali - Authentic Indonesian Chili Paste'
										width={320}
										height={320}
										className='w-full h-auto object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out'
										priority
										fetchPriority='high'
										quality={85}
										sizes='(max-width: 640px) 280px, (max-width: 768px) 320px, 400px'
										placeholder='blur'
										blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
									/>

									{/* Elegant price badge */}
									<div className='absolute -top-2 -right-2 lg:-top-4 lg:-right-4 z-30'>
										<div className='bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full font-bold text-sm lg:text-lg shadow-2xl border-2 border-white/20 backdrop-blur-sm transform rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500'>
											£7.49
										</div>
									</div>
								</div>

								{/* Subtle background glow */}
								<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 lg:w-80 h-60 lg:h-80 bg-gradient-radial from-orange-600/10 via-red-600/5 to-transparent rounded-full blur-3xl'></div>
							</div>
						)}
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
			`}</style>
		</section>
	);
}
