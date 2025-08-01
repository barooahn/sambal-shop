"use client";

import { useState } from "react";
import {
	subscribeToNewsletter,
	submitContactForm,
	recordInterest,
} from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Leaf, Star, ChefHat, Award, Heart, Truck } from "lucide-react";

// Add Google Fonts
const fontImports = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
`;

if (typeof document !== "undefined") {
	const style = document.createElement("style");
	style.textContent = fontImports;
	document.head.appendChild(style);
}

export default function Home() {
	const [email, setEmail] = useState("");
	const [contactForm, setContactForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [newsletterState, setNewsletterState] = useState({
		isSubmitting: false,
		isSubmitted: false,
		message: "",
	});
	const [interestState, setInterestState] = useState({
		isSubmitting: false,
		isSubmitted: false,
		message: "",
	});
	const [contactState, setContactState] = useState({
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
		<div className='bg-gradient-to-b from-cream-50 to-cream-100 font-body'>
			{/* Hero Section */}
			<section className='py-12 relative min-h-screen flex items-center justify-center overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-br from-burgundy-900/20 via-gold-600/10 to-burgundy-800/15'></div>

				{/* Floating decorative elements */}
				<div className='absolute top-20 left-10 w-16 h-16 bg-gold-500/20 rounded-full blur-xl animate-glow'></div>
				<div className='absolute top-40 right-20 w-20 h-20 bg-burgundy-700/20 rounded-full blur-xl animate-glow delay-1000'></div>
				<div className='absolute bottom-40 left-20 w-12 h-12 bg-gold-600/20 rounded-full blur-xl animate-glow delay-2000'></div>

				<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						{/* Left side - Text content */}
						<div className='text-center lg:text-left'>
							<div className='mb-8'>
								<Badge className='bg-burgundy-900 text-gold-300 mb-6 px-6 py-3 text-lg font-semibold shadow-burgundy font-elegant border border-gold-600/30'>
									<Flame className='w-5 h-5 mr-2' />
									Coming Soon to the UK
								</Badge>
							</div>

							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-8 leading-tight font-brand'>
								<span className='text-burgundy-900 block mb-2'>
									Authentic Indonesian
								</span>
								<span className='text-gold-700 block mb-2'>
									Sambal
								</span>
								<span className='text-burgundy-800 text-3xl sm:text-4xl lg:text-5xl font-script italic'>
									From the Original Spice Islands
								</span>
							</h1>

							<p className='text-xl sm:text-2xl text-neutral-700 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body'>
								Experience the bold, traditional flavors
								that have captivated taste buds for
								centuries. Handcrafted with heritage
								recipes, delivered fresh to British
								kitchens.
							</p>

							{/* Features grid */}
							<div className='grid sm:grid-cols-3 gap-4 mb-10'>
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
								<div className='flex items-center justify-center lg:justify-start space-x-2'>
									<div className='w-8 h-8 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center border border-gold-600/30'>
										<Leaf className='w-4 h-4 text-gold-200' />
									</div>
									<span className='text-neutral-700 font-medium font-elegant'>
										All Natural
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
										newsletterSection?.scrollIntoView(
											{ behavior: "smooth" }
										);
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

						{/* Right side - Product showcase */}
						<div className='relative'>
							<div className='relative max-w-lg mx-auto'>
								{/* Main product image */}
								<div className='relative z-20'>
									<div className='aspect-square rounded-3xl overflow-hidden shadow-luxury bg-gradient-to-br from-burgundy-900/10 to-gold-600/10 p-8'>
										<div className='w-full h-full rounded-2xl flex items-center justify-center'>
											<Image
												src='/images/Spice Island Indonesia Sambal Oelek 185g Label.png'
												alt='Spice Island Indonesia Sambal Oelek 185g - Authentic Indonesian Chili Paste'
												width={400}
												height={400}
												className='w-full h-full object-contain drop-shadow-2xl'
												priority
											/>
										</div>
									</div>
									<div className='absolute -top-6 -right-6 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 px-4 py-2 rounded-full font-bold text-lg transform rotate-12 shadow-lg border border-gold-600/30'>
										£7.49
									</div>
								</div>

								{/* Background decoration */}
								<div className='absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-burgundy-600/20 to-gold-500/20 rounded-full blur-2xl animate-float'></div>
								<div className='absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-gold-600/20 to-burgundy-600/20 rounded-full blur-2xl animate-float delay-1000'></div>
							</div>
						</div>
					</div>

					{/* Newsletter signup */}
					<div
						id='newsletter-signup'
						className='mt-16 max-w-md mx-auto lg:max-w-lg'
					>
						<div className='bg-cream-50/95 backdrop-blur-sm rounded-3xl p-8 shadow-luxury border border-gold-200'>
							<div className='text-center mb-6'>
								<h3 className='text-2xl font-bold text-burgundy-900 mb-2 font-brand'>
									Get Early Access
								</h3>
								<p className='text-neutral-600 font-body'>
									Be first to taste authentic
									Indonesian flavors + get 15% off
									your first order
								</p>
							</div>

							<form
								onSubmit={handleEmailSignup}
								className='space-y-4'
							>
								<Input
									type='email'
									placeholder='Enter your email address'
									value={email}
									onChange={(e) =>
										setEmail(e.target.value)
									}
									required
									className='text-lg py-4 border-2 border-gold-300 focus:border-burgundy-600 rounded-2xl font-body bg-white'
								/>
								<Button
									type='submit'
									variant='primary'
									size='lg'
									className='w-full font-elegant'
									disabled={
										newsletterState.isSubmitting ||
										newsletterState.isSubmitted
									}
								>
									{newsletterState.isSubmitting
										? "Joining..."
										: newsletterState.isSubmitted
											? "Welcome to the family! 🌶️"
											: "Join the Spice Journey"}
								</Button>
							</form>

							{newsletterState.isSubmitted &&
								newsletterState.message && (
									<p className='mt-4 font-medium text-burgundy-700 text-center font-body'>
										{newsletterState.message}
									</p>
								)}
						</div>
					</div>
				</div>
			</section>

			{/* Product Showcase Section */}
			<section className='py-24 bg-cream-50 relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-burgundy-50/30 via-transparent to-gold-50/30'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-20'>
						<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-6 font-brand'>
							Our Signature
							<span className='text-gold-700 block'>
								Sambal Collection
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-body'>
							Each variety brings centuries of Indonesian
							culinary heritage to your kitchen,
							handcrafted using traditional recipes from
							the original Spice Islands.
						</p>
					</div>

					{/* Product Grid */}
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20'>
						{/* Sambal Oelek */}
						<div className='group'>
							<div className='relative mb-6'>
								<div className='aspect-square rounded-3xl overflow-hidden shadow-lg group-hover:shadow-luxury transition-all duration-300 bg-gradient-to-br from-cream-50 to-gold-50'>
									<div className='w-full h-full flex items-center justify-center p-6'>
										<Image
											src='/images/Spice Island Indonesia Sambal Oelek 185g Label.png'
											alt='Spice Island Indonesia Sambal Oelek 185g'
											width={300}
											height={300}
											className='w-full h-full object-contain drop-shadow-lg'
										/>
									</div>
								</div>
								<div className='absolute -top-3 -right-3 bg-burgundy-700 text-gold-300 px-3 py-1 rounded-full text-sm font-bold font-elegant border border-gold-600'>
									Most Popular
								</div>
							</div>
							<div className='text-center'>
								<h3 className='text-2xl font-bold text-burgundy-900 mb-2 font-brand'>
									Sambal Oelek
								</h3>
								<p className='text-neutral-600 mb-4 font-body'>
									Pure, fiery chili paste - the
									foundation of Indonesian cooking.
									Perfect for marinades and
									stir-fries.
								</p>
								<div className='flex justify-center items-center space-x-2 mb-4'>
									<span className='text-burgundy-600'>
										🌶️🌶️🌶️🌶️🌶️
									</span>
									<span className='text-sm text-neutral-500 font-body'>
										Very Hot
									</span>
								</div>
								<div className='text-lg font-bold text-burgundy-900 font-brand'>
									£7.49
								</div>
							</div>
						</div>

						{/* Sambal Bali */}
						<div className='group'>
							<div className='relative mb-6'>
								<div className='aspect-square rounded-3xl overflow-hidden shadow-lg group-hover:shadow-luxury transition-all duration-300 bg-gradient-to-br from-cream-50 to-gold-50'>
									<div className='w-full h-full flex items-center justify-center p-6'>
										<Image
											src='/images/Spice Island Indonesia Sambal Bali 185g Label.png'
											alt='Spice Island Indonesia Sambal Bali 185g'
											width={300}
											height={300}
											className='w-full h-full object-contain drop-shadow-lg'
										/>
									</div>
								</div>
							</div>
							<div className='text-center'>
								<h3 className='text-2xl font-bold text-burgundy-900 mb-2 font-brand'>
									Sambal Bali
								</h3>
								<p className='text-neutral-600 mb-4 font-body'>
									Sweet and spicy with aromatic
									spices. A perfect balance that
									complements grilled meats
									beautifully.
								</p>
								<div className='flex justify-center items-center space-x-2 mb-4'>
									<span className='text-burgundy-600'>
										🌶️🌶️🌶️
									</span>
									<span className='text-sm text-neutral-500 font-body'>
										Hot
									</span>
								</div>
								<div className='text-lg font-bold text-burgundy-900 font-brand'>
									£8.49
								</div>
							</div>
						</div>

						{/* Gift Set */}
						<div className='group md:col-span-2 lg:col-span-1'>
							<div className='relative mb-6'>
								<div className='aspect-square rounded-3xl overflow-hidden shadow-lg group-hover:shadow-luxury transition-all duration-300 bg-gradient-to-br from-cream-50 to-gold-50'>
									<div className='w-full h-full flex items-center justify-center p-6'>
										<Image
											src='/images/Spice Island Indonesia Complete Packaging System Mockup.png'
											alt='Spice Island Indonesia Complete Packaging System - Heritage Gift Set'
											width={300}
											height={300}
											className='w-full h-full object-contain drop-shadow-lg'
										/>
									</div>
								</div>
							</div>
							<div className='text-center'>
								<h3 className='text-2xl font-bold text-burgundy-900 mb-2 font-brand'>
									Heritage Gift Set
								</h3>
								<p className='text-neutral-600 mb-4 font-body'>
									Two signature sambals beautifully
									packaged - perfect for introducing
									friends to authentic Indonesian
									flavors.
								</p>
								<div className='flex justify-center items-center space-x-2 mb-4'>
									<span className='text-gold-600'>
										🎁
									</span>
									<span className='text-sm text-neutral-500 font-body'>
										Perfect Gift
									</span>
								</div>
								<div className='text-lg font-bold text-burgundy-900 font-brand'>
									£14.99
								</div>
							</div>
						</div>
					</div>

					{/* Try Sample Section */}
					<div className='text-center mb-20 max-w-4xl mx-auto'>
						<div className='bg-gradient-to-r from-burgundy-50 to-gold-50 rounded-4xl p-12 border border-gold-200'>
							<div className='grid md:grid-cols-2 gap-12 items-center'>
								<div className='text-left'>
									<h3 className='text-3xl font-bold text-burgundy-900 mb-4 font-brand'>
										Not Sure Which to Choose?
									</h3>
									<p className='text-lg text-neutral-700 mb-6 font-body'>
										Try our 75g sample size first!
										Perfect for discovering your
										favorite sambal before
										committing to the full-size
										jar.
									</p>
									<div className='flex items-center space-x-4 mb-6'>
										<div className='text-2xl font-bold text-burgundy-900 font-brand'>
											£3.99
										</div>
										<div className='text-sm text-neutral-600 font-body'>
											75g sample size
										</div>
									</div>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant'
									>
										Order Sample
									</Button>
								</div>
								<div className='relative'>
									<div className='aspect-square max-w-xs mx-auto rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-cream-50 to-gold-50'>
										<div className='w-full h-full flex items-center justify-center p-6'>
											<Image
												src='/images/Spice Island Indonesia Sambal Oelek 75g Sample Label.png'
												alt='Spice Island Indonesia Sambal Oelek 75g Sample'
												width={250}
												height={250}
												className='w-full h-full object-contain drop-shadow-lg'
											/>
										</div>
									</div>
									<div className='absolute -top-3 -right-3 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 px-3 py-1 rounded-full text-sm font-bold font-elegant border border-gold-600/30 shadow-lg'>
										Sample Size
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Why Choose Us */}
					<div className='grid md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
						<div className='text-center'>
							<div className='w-16 h-16 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-600/30 shadow-lg'>
								<ChefHat className='w-8 h-8 text-gold-200' />
							</div>
							<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
								Handcrafted
							</h4>
							<p className='text-neutral-600 text-sm font-body'>
								Made in small batches using traditional
								methods
							</p>
						</div>
						<div className='text-center'>
							<div className='w-16 h-16 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-600/30 shadow-lg'>
								<Award className='w-8 h-8 text-gold-200' />
							</div>
							<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
								Authentic
							</h4>
							<p className='text-neutral-600 text-sm font-body'>
								Original recipes from the Spice Islands
							</p>
						</div>
						<div className='text-center'>
							<div className='w-16 h-16 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-600/30 shadow-lg'>
								<Leaf className='w-8 h-8 text-gold-200' />
							</div>
							<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
								All Natural
							</h4>
							<p className='text-neutral-600 text-sm font-body'>
								No preservatives or artificial
								ingredients
							</p>
						</div>
						<div className='text-center'>
							<div className='w-16 h-16 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-600/30 shadow-lg'>
								<Truck className='w-8 h-8 text-gold-200' />
							</div>
							<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
								Fresh Delivery
							</h4>
							<p className='text-neutral-600 text-sm font-body'>
								Direct from kitchen to your door
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Shipping & Packaging Section */}
			<section className='py-24 bg-white relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-burgundy-50/30 via-transparent to-gold-50/30'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div className='relative'>
							<div className='aspect-square rounded-3xl overflow-hidden shadow-luxury bg-gradient-to-br from-cream-50 to-gold-50'>
								<div className='w-full h-full flex items-center justify-center p-8'>
									<Image
										src='/images/Spice Island Indonesia E-commerce Shipping Box.png'
										alt='Spice Island Indonesia Premium Shipping Box'
										width={500}
										height={500}
										className='w-full h-full object-contain drop-shadow-2xl'
									/>
								</div>
							</div>
							<div className='absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-burgundy-600/20 to-gold-500/20 rounded-full blur-2xl animate-float'></div>
							<div className='absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-gold-600/20 to-burgundy-600/20 rounded-full blur-2xl animate-float delay-1000'></div>
						</div>

						<div>
							<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-6 font-brand'>
								Premium
								<span className='text-gold-700 block'>
									Packaging
								</span>
							</h2>
							<div className='space-y-6 text-lg text-neutral-700 leading-relaxed mb-8 font-body'>
								<p>
									Every order arrives in our
									beautifully designed shipping box,
									ensuring your authentic Indonesian
									sambals reach you in perfect
									condition. Our packaging reflects
									the premium quality and heritage of
									our products.
								</p>
								<p>
									From our kitchen to your door, we
									take pride in every detail of your
									unboxing experience. Each box is
									carefully packed with love and
									attention, making it perfect for
									gifting or treating yourself.
								</p>
							</div>
							<div className='grid grid-cols-2 gap-6'>
								<div className='flex items-center space-x-3'>
									<div className='w-12 h-12 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center border border-gold-600/30 shadow-lg'>
										<Truck className='w-6 h-6 text-gold-200' />
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 font-brand'>
											Fast Shipping
										</h4>
										<p className='text-sm text-neutral-600 font-body'>
											2-3 business days
										</p>
									</div>
								</div>
								<div className='flex items-center space-x-3'>
									<div className='w-12 h-12 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center border border-gold-600/30 shadow-lg'>
										<Award className='w-6 h-6 text-gold-200' />
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 font-brand'>
											Premium Quality
										</h4>
										<p className='text-sm text-neutral-600 font-body'>
											Carefully protected
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Story Section */}
			<section className='py-24 bg-gradient-to-br from-cream-100 to-cream-200 relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-72 h-72 bg-burgundy-200/20 rounded-full -translate-x-36 -translate-y-36 blur-3xl animate-luxury-spin'></div>
				<div className='absolute bottom-0 right-0 w-96 h-96 bg-gold-200/20 rounded-full translate-x-48 translate-y-48 blur-3xl animate-luxury-spin'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div className='relative'>
							<div className='aspect-[4/3] rounded-4xl overflow-hidden shadow-luxury border border-gold-200'>
								<img
									src='/images/indonesian_vista.png'
									alt='Indonesian spices and ingredients'
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='absolute inset-0 bg-gradient-to-t from-burgundy-900/20 to-transparent rounded-4xl'></div>

							{/* Floating badges */}
							<div className='absolute -top-4 -left-4 bg-cream-50 rounded-full p-4 shadow-gold animate-float border border-gold-300'>
								<Star className='w-6 h-6 text-gold-600' />
							</div>
							<div className='absolute -bottom-4 -right-4 bg-cream-50 rounded-full p-4 shadow-burgundy animate-float delay-1000 border border-burgundy-300'>
								<Heart className='w-6 h-6 text-burgundy-600' />
							</div>
						</div>

						<div>
							<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-8 font-brand'>
								Our Story
								<span className='text-gold-700 block font-script italic text-4xl sm:text-5xl'>
									From the Original Spice Islands
								</span>
							</h2>

							<div className='space-y-6 text-lg text-neutral-700 leading-relaxed mb-8 font-body'>
								<p>
									Our journey begins in the Maluku
									Islands – the original "Spice
									Islands" that once drew traders
									from around the world in search of
									precious spices. For generations,
									our family has perfected the art of
									sambal making, preserving ancient
									recipes passed down through the
									centuries.
								</p>

								<p>
									Today, we bring these authentic
									flavors to the UK, sharing our
									passion for Indonesian cuisine with
									British food lovers who appreciate
									bold, complex flavors. Each jar is
									handcrafted using traditional
									methods, ensuring every spoonful
									delivers the genuine taste of
									Indonesia.
								</p>

								<p>
									We believe that great food brings
									people together, and our mission is
									to introduce the UK to the
									incredible diversity and depth of
									Indonesian flavors – one jar at a
									time.
								</p>
							</div>

							<div className='flex flex-wrap gap-4 mb-8'>
								<Link href='/recipes'>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant'
									>
										Heritage Recipes
									</Button>
								</Link>
								<Link href='/about'>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant'
									>
										Family Tradition
									</Button>
								</Link>
								<Button
									variant='primary'
									size='lg'
									className='font-elegant'
								>
									Small Batch
								</Button>
							</div>

							<Link href='/about'>
								<Button
									variant='primary'
									size='lg'
									className='font-elegant'
								>
									Learn More About Our Heritage
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className='py-24 bg-cream-50'>
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
		</div>
	);
}
