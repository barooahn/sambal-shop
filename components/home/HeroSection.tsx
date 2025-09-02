"use client";

import Image from "next/image";

import { ChefHat, Award, Star, Package, Heart } from "lucide-react";
import WaitlistButton from "./WaitlistButton";

// Removed skeleton to prevent layout shifts

export default function HeroSection() {
	// Remove image loading state to prevent layout shift
	// const [imageLoaded, setImageLoaded] = useState(false);

	return (
		<section
			className='relative flex items-center justify-center overflow-hidden'
			style={{ minHeight: "max(100vh, 700px)" }}
		>
			{/* Background Image - Optimized for LCP */}
			<div
				className='absolute inset-0 z-0 w-full h-full'
				style={{ backgroundColor: "#8B4513" }}
			>
				<Image
					src='/images/optimized/hero-image-lg.webp'
					alt='Authentic Sambal UK - Premium Indonesian Chili Paste Spices from Spice Islands'
					fill
					className='object-cover w-full h-full'
					fetchPriority='low'
					sizes='100vw'
					quality={60} // Reduced for faster load
					placeholder='blur'
					blurDataURL='data:image/webp;base64,UklGRlABAABXRUJQVlA4TD4BAAAvAQABACcQEf//72vv++9r7/vvAGwhOLb9AAQAAAAAAABjhwgJCQkJCQkJAJCQkJCQkJCQkABISEhISEhISEgAhISEhISEhISEAISEhISEhISEhAAQEBAQEBAQEBAAEBAQEBAQEBAQABAQEBAQEBAQEBAAICAiICAiICAiABAQEhIQEhIQEhIAEhIREhIREhIREgASEhIREhIREhIRABEhIREhIREhIREhABAQEBAQEBAQEBAQABAQEBAQEBAQEBAAEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAA'
					style={{ objectFit: "cover" }}
				/>
			</div>

			{/* Dark overlay for better text readability */}
			<div className='absolute inset-0 bg-black/30 z-5'></div>

			<div
				className='hero-content-container relative z-10 max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 py-4 sm:py-6 lg:py-8'
				style={{ minHeight: "max(80vh, 600px)", width: "100%" }}
			>
				<div
					className='flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center h-full'
					style={{ minHeight: "max(75vh, 550px)" }}
				>
					{/* Mobile/Tablet - Text content first */}
					<div className='text-center lg:text-left order-1 lg:order-2 pt-2 sm:pt-4 lg:pt-0'>
						{/* Chef badge - hidden on mobile, shown on tablet+ */}
						<div className='hidden sm:flex mb-2 sm:mb-3 lg:mb-6 justify-center lg:justify-start'>
							<div className='bg-gradient-to-r from-cream-50 via-white to-cream-50 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-gold-300/50 shadow-xl relative overflow-hidden'>
								{/* Subtle batik pattern background */}
								<div className='absolute inset-0 bg-gradient-to-r from-gold-100/30 to-burgundy-100/20 opacity-30'></div>
								<div className='relative flex items-center justify-center space-x-3'>
									<ChefHat className='w-5 h-5 text-burgundy-600' />
									<span className='text-burgundy-900 font-elegant font-semibold text-sm tracking-wide'>
										Chef Yossie's Traditional
										Bandung Recipes
									</span>
									<div className='flex space-x-1'>
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className='w-3 h-3 text-gold-600 fill-current'
											/>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Enhanced hero title treatment */}
						<h1 className='voice-hero-title mobile-text-shadow font-brand leading-tight tracking-tight mb-2 sm:mb-2 lg:mb-3'>
							<span className='block font-light text-cream-100/90 text-3xl sm:text-3xl lg:text-5xl'>
								Authentic Indonesian
							</span>
							<span className='sambal-title block font-bold text-gold-300 text-5xl sm:text-5xl lg:text-7xl drop-shadow-lg'>
								Sambal Goreng
							</span>
							<span className='block font-elegant italic text-cream-200/90 text-2xl sm:text-2xl lg:text-4xl'>
								Traditional West Java Recipe
							</span>
						</h1>

						{/* Subtitle - hidden on mobile */}
						<div className='hidden sm:block mb-2 sm:mb-3 lg:mb-4'>
							<p className='text-base sm:text-lg lg:text-xl text-white/80 font-light tracking-wide'>
								Sweet & Spicy Indonesian Chili Paste -
								Traditional Recipe
							</p>
						</div>

						{/* Description - shortened for mobile */}
						<p className='voice-product-description mobile-text-shadow text-base sm:text-base lg:text-lg text-white/90 mb-3 sm:mb-4 lg:mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light px-2 lg:px-0'>
							<span className='sm:hidden'>
								Traditional Indonesian sweet & spicy
								chili paste from West Java.
							</span>
							<span className='hidden sm:block'>
								Chef Yossie's signature{" "}
								<span className='text-amber-300 font-medium'>
									Sambal Goreng
								</span>{" "}
								combines sweet palm sugar with fiery
								chilies using the traditional{" "}
								<em>goreng</em> (fried) method from West
								Java.
							</span>
						</p>

						{/* Trust indicator - hidden on mobile */}
						<div className='hidden sm:block mb-4 lg:mb-6 px-2 lg:px-0'>
							<div className='inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'>
								<Star className='w-4 h-4 text-amber-300 fill-current' />
								<span className='text-white/90 text-sm font-medium'>
									Risk-free trial with sample pack
								</span>
							</div>
						</div>

						{/* Enhanced Indonesian-inspired feature cards */}
						<div className='hidden sm:grid sm:grid-cols-3 gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8'>
							{[
								{
									icon: Heart,
									label: "Sweet & Spicy",
									desc: "Perfect Balance",
									gradient:
										"from-gold-500/30 via-burgundy-500/20 to-gold-500/30",
									culturalElement:
										"Traditional palm sugar sweetness",
								},
								{
									icon: ChefHat,
									label: "Goreng Method",
									desc: "Fried Technique",
									gradient:
										"from-burgundy-500/30 via-gold-500/20 to-burgundy-500/30",
									culturalElement:
										"West Java cooking tradition",
								},
								{
									icon: Award,
									label: "Bandung Heritage",
									desc: "Family Recipe",
									gradient:
										"from-gold-600/30 via-burgundy-600/20 to-cream-300/30",
									culturalElement:
										"Generational knowledge",
								},
							].map(
								({
									icon: Icon,
									label,
									desc,
									gradient,
									culturalElement,
								}) => (
									<div
										key={label}
										className={`relative bg-gradient-to-br ${gradient} backdrop-blur-md rounded-xl p-4 border-2 border-gold-300/40 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group overflow-hidden`}
									>
										{/* Subtle Indonesian pattern overlay */}
										<div className='absolute inset-0 bg-gradient-to-r from-gold-100/10 to-burgundy-100/10 opacity-20 group-hover:opacity-30 transition-opacity'></div>
										<div className='relative flex flex-col items-center text-center'>
											<Icon className='w-6 h-6 text-gold-200 mb-2 group-hover:text-cream-100 group-hover:scale-110 transition-all duration-300 drop-shadow-sm' />
											<div className='text-cream-100'>
												<div className='font-elegant font-semibold text-sm tracking-wide mb-1'>
													{label}
												</div>
												<div className='font-body text-xs text-cream-200/90'>
													{desc}
												</div>
											</div>
										</div>
									</div>
								)
							)}
						</div>

						{/* Primary CTA - simplified for mobile */}
						<div className='flex flex-col gap-2 sm:gap-3 lg:gap-4 px-2 lg:px-0 max-w-sm sm:max-w-md mx-auto lg:mx-0'>
							{/* Single Primary CTA - Sample Pack */}
							<button
								aria-label='Try Sample Pack First - Primary CTA'
								onClick={async () => {
									try {
										const { trackEvent } =
											await import(
												"@/components/analytics/GoogleAnalytics"
											);
										trackEvent(
											"internal_cta_click",
											"sample_pack_cta",
											"hero_sample_pack"
										);
									} catch {}
									window.location.href =
										"/sample-pack-try-first";
								}}
								className='group relative overflow-hidden bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-burgundy-900 hover:from-burgundy-800 hover:via-burgundy-700 hover:to-burgundy-800 text-cream-50 font-bold text-xl py-5 px-10 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-gold-600/40 hover:border-gold-500/60 w-full min-h-[56px]'
							>
								<div className='absolute inset-0 bg-gold-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
								<div className='absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700'></div>
								<div className='relative flex items-center justify-center space-x-2'>
									<Package className='w-6 h-6 group-hover:scale-110 transition-transform duration-300' />
									<span className='font-elegant tracking-wide'>
										Try Sample Pack - £4.99
									</span>
								</div>
							</button>

							{/* Secondary CTA - Waitlist */}
							<WaitlistButton />
						</div>

						{/* Waitlist feedback handled inside client button */}
						{/*
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
						*/}
					</div>

					{/* Product showcase - mobile-first optimization */}
					<div className='relative order-2 lg:order-1 pb-4 sm:pb-6 lg:pb-0 flex items-center justify-center'>
						<div className='relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] mx-auto'>
							{/* Mobile-optimized container with proper aspect ratio */}
							<div
								className='relative z-20 group w-full'
								style={{
									aspectRatio: "1 / 1",
									minHeight: "280px",
								}}
							>
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

							{/* Subtle background glow - mobile optimized sizing */}
							<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-60 lg:w-96 h-48 sm:h-60 lg:h-96 bg-gradient-radial from-orange-600/10 via-red-600/5 to-transparent rounded-full blur-3xl'></div>
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
						padding-top: max(
							1rem,
							calc(env(safe-area-inset-top) + 0.5rem)
						) !important;
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
