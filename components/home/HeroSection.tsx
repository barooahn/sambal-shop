"use client";

import { useState } from "react";
import { recordInterest } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Flame, ChefHat, Award, Leaf, Heart } from "lucide-react";
import OptimizedImage from "@/components/optimization/OptimizedImage";
import GlassCard from "@/components/ui/GlassCard";

export default function HeroSection() {
	const [interestState, setInterestState] = useState({
		isSubmitting: false,
		isSubmitted: false,
		message: "",
	});

	const handleInterestClick = async () => {
		setInterestState({
			isSubmitting: true,
			isSubmitted: false,
			message: "",
		});

		try {
			const result = await recordInterest();
			setInterestState({
				isSubmitting: false,
				isSubmitted: true,
				message: result.message,
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
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Left side - Text content */}
					<div className='text-center lg:text-left'>
						<div className='mb-8'>
							<div className='inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2 border border-orange-200'>
								<ChefHat className='w-4 h-4 text-orange-600' />
								<span className='text-gray-700 font-medium text-sm'>
									Chef Yossie's Traditional Recipes
								</span>
							</div>
						</div>

						<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-8 leading-tight font-brand'>
							<span className='text-burgundy-900 block mb-2'>
								Professional Indonesian
							</span>
							<span className='text-gold-700 block mb-2'>
								Sambal
							</span>
							<span className='text-burgundy-800 text-3xl sm:text-4xl lg:text-5xl font-script italic'>
								From Bandung to Britain
							</span>
						</h1>

						<p className='text-xl sm:text-2xl text-neutral-700 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body'>
							Meet Chef Yossie - born in Bandung, trained
							in her mother's catering kitchen, now
							bringing professional-grade Indonesian sambal
							to British homes across London, Manchester,
							Birmingham, and nationwide.
						</p>

						{/* Features grid */}
						<div className='grid sm:grid-cols-2 gap-4 mb-10'>
							<div className='flex items-center justify-center lg:justify-start space-x-2'>
								<div className='w-8 h-8 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center border border-gold-600/30'>
									<ChefHat className='w-4 h-4 text-gold-200' />
								</div>
								<span className='text-neutral-700 font-medium font-elegant'>
									Handcrafted
								</span>
							</div>
							<div className='flex items-center justify-center lg:justify-start space-x-2'>
								<div className='w-8 h-8 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center border border-gold-600/30'>
									<Award className='w-4 h-4 text-gold-200' />
								</div>
								<span className='text-neutral-700 font-medium font-elegant'>
									Authentic
								</span>
							</div>
						</div>

						{/* CTA Buttons */}
						<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
							<Button
								variant='primary'
								size='lg'
								onClick={handleInterestClick}
								disabled={
									interestState.isSubmitting ||
									interestState.isSubmitted
								}
								className='font-elegant'
							>
								{interestState.isSubmitting ? (
									<>
										<Heart className='w-5 h-5 mr-2 animate-pulse' />
										Recording...
									</>
								) : interestState.isSubmitted ? (
									<>
										<Heart className='w-5 h-5 mr-2' />
										Thanks! 🌶️
									</>
								) : (
									<>
										<Heart className='w-5 h-5 mr-2' />
										Join the Waitlist
									</>
								)}
							</Button>
							<Button
								variant='primary'
								size='lg'
								onClick={() => {
									const newsletterSection =
										document.getElementById(
											"newsletter-signup"
										);
									newsletterSection?.scrollIntoView({
										behavior: "smooth",
									});
								}}
								className='font-elegant'
							>
								Get Updates
							</Button>
						</div>
						{interestState.message && (
							<div
								className={`mt-4 text-center p-3 rounded-xl max-w-md mx-auto lg:mx-0 ${interestState.message.includes("Thanks") || interestState.message.includes("notify") ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
							>
								{interestState.message}
							</div>
						)}
					</div>

					{/* Right side - Product showcase with glass morphism */}
					<div className='relative'>
						<div className='relative max-w-lg mx-auto'>
							{/* Clean product image with subtle glass effect */}
							<div className='relative z-20'>
								<div className='aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 bg-white/15 backdrop-blur-sm p-8'>
									<div className='w-full h-full rounded-2xl flex items-center justify-center'>
										<OptimizedImage
											src='/images/Spice Island Indonesia Sambal Oelek 185g Label.webp'
											alt='Spice Island Indonesia Sambal Oelek 185g - Authentic Indonesian Chili Paste'
											width={400}
											height={400}
											className='w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500'
											priority
											quality={90}
											sizes='(max-width: 768px) 100vw, 400px'
										/>
									</div>
								</div>
								{/* Clean price badge */}
								<div className='absolute -top-6 -right-6 bg-burgundy-600/90 backdrop-blur-md text-white px-4 py-2 rounded-full font-bold text-lg transform rotate-12 shadow-lg hover:scale-110 transition-transform duration-300'>
									£7.49
								</div>
							</div>

							{/* Background decoration */}
							<div className='absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-burgundy-600/20 to-gold-500/20 rounded-full blur-2xl animate-float'></div>
							<div className='absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-gold-600/20 to-burgundy-600/20 rounded-full blur-2xl animate-float delay-1000'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
