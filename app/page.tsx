"use client";

import { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import {
	Mail,
	MapPin,
	Phone,
	Instagram,
	Facebook,
	Twitter,
	Flame,
	Leaf,
	Star,
	ChefHat,
	Award,
	Heart,
	ShoppingCart,
	Truck,
} from "lucide-react";

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

		// Simulate API call
		setTimeout(() => {
			setNewsletterState({
				isSubmitting: false,
				isSubmitted: true,
				message: "Thank you! We'll notify you when we launch.",
			});
			setEmail("");
			
			setTimeout(() => {
				setNewsletterState((prev) => ({
					...prev,
					isSubmitted: false,
					message: "",
				}));
			}, 5000);
		}, 1000);
	};

	const handleContactSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setContactState({
			isSubmitting: true,
			isSubmitted: false,
			message: "",
		});

		// Simulate API call
		setTimeout(() => {
			setContactState({
				isSubmitting: false,
				isSubmitted: true,
				message: "Thank you! We'll get back to you soon.",
			});
			setContactForm({ name: "", email: "", message: "" });
			
			setTimeout(() => {
				setContactState((prev) => ({
					...prev,
					isSubmitted: false,
					message: "",
				}));
			}, 5000);
		}, 1000);
	};

	return (
		<div className='min-h-screen bg-gradient-to-b from-amber-50 to-orange-50'>
			{/* Hero Section */}
			<section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-br from-red-600/20 via-amber-500/15 to-emerald-600/20'></div>
				
				{/* Floating spice elements */}
				<div className='absolute top-20 left-10 w-16 h-16 bg-amber-400/30 rounded-full blur-xl animate-pulse'></div>
				<div className='absolute top-40 right-20 w-20 h-20 bg-red-500/30 rounded-full blur-xl animate-pulse delay-1000'></div>
				<div className='absolute bottom-40 left-20 w-12 h-12 bg-emerald-500/30 rounded-full blur-xl animate-pulse delay-2000'></div>

				<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						{/* Left side - Text content */}
						<div className='text-center lg:text-left'>
							<div className='mb-8'>
								<Badge className='bg-red-600 text-white mb-6 px-6 py-3 text-lg font-semibold shadow-lg'>
									<Flame className='w-5 h-5 mr-2' />
									Coming Soon to the UK
								</Badge>
							</div>

							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight'>
								<span className='text-red-600 block mb-2'>
									Authentic Indonesian
								</span>
								<span className='text-amber-600 block mb-2'>Sambal</span>
								<span className='text-emerald-700 text-3xl sm:text-4xl lg:text-5xl'>
									From the Original Spice Islands
								</span>
							</h1>

							<p className='text-xl sm:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
								Experience the bold, traditional flavors that have captivated taste buds for centuries. Handcrafted with heritage recipes, delivered fresh to British kitchens.
							</p>

							{/* Features grid */}
							<div className='grid sm:grid-cols-3 gap-4 mb-10'>
								<div className='flex items-center justify-center lg:justify-start space-x-2'>
									<div className='w-8 h-8 bg-red-100 rounded-full flex items-center justify-center'>
										<ChefHat className='w-4 h-4 text-red-600' />
									</div>
									<span className='text-gray-700 font-medium'>Handcrafted</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-2'>
									<div className='w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center'>
										<Award className='w-4 h-4 text-amber-600' />
									</div>
									<span className='text-gray-700 font-medium'>Authentic</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-2'>
									<div className='w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center'>
										<Leaf className='w-4 h-4 text-emerald-600' />
									</div>
									<span className='text-gray-700 font-medium'>All Natural</span>
								</div>
							</div>

							{/* CTA Buttons */}
							<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
								<Button 
									size="lg" 
									className='bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200'
								>
									<Heart className='w-5 h-5 mr-2' />
									Join the Waitlist
								</Button>
								<Button 
									variant="outline" 
									size="lg" 
									className='border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold'
								>
									Learn More
								</Button>
							</div>
						</div>

						{/* Right side - Product showcase */}
						<div className='relative'>
							<div className='relative max-w-lg mx-auto'>
								{/* Main product image */}
								<div className='relative z-20'>
									<div className='aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-500/20 to-orange-400/20 p-8'>
										<img
											src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNzMxRjJEIiByeD0iMjAiLz4KPHN2ZyB4PSI1MCIgeT0iNTAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiByeD0iMTAiIGZpbGw9IiM5NDFCMkQiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSIyNjAiIGhlaWdodD0iMjYwIiB2aWV3Qm94PSIwIDAgMjYwIDI2MCI+CjxyZWN0IHg9IjMwIiB5PSIzMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSIjRERCMzM3Ii8+Cjx0ZXh0IHg9IjEzMCIgeT0iNjAiIGZvbnQtZmFtaWx5PSJzZXJpZiIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM3MzFGMkQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNQSUNFIElTTEFORDwvdGV4dD4KPHR4dCB4PSIxMzAiIHk9IjgwIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM3MzFGMkQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklORE9ORVNJQTwvdGV4dD4KPHR4dCB4PSIxMzAiIHk9IjExMCIgZm9udC1mYW1pbHk9InNlcmlmIiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0RERDE3IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TQU1CQUwgT0VMRUM8L3RleHQ+Cjx0ZXh0IHg9IjEzMCIgeT0iMTMwIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNEREIzMzciIHRleHQtYW5jaG9yPSJtaWRkbGUiPkF1dGhlbnRpYyBJbmRvbmVzaWFuIENoaWxpIFBhc3RlPC90ZXh0Pgo8L3N2Zz4KPC9zdmc+Cjwvc3ZnPgo='
											alt='Sambal Oelek jar'
											className='w-full h-full object-contain drop-shadow-2xl'
										/>
									</div>
									<div className='absolute -top-6 -right-6 bg-amber-400 text-gray-900 px-4 py-2 rounded-full font-bold text-lg transform rotate-12 shadow-lg'>
										£7.49
									</div>
								</div>

								{/* Background decoration */}
								<div className='absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-red-400/30 to-orange-400/30 rounded-full blur-2xl'></div>
								<div className='absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-amber-400/30 to-yellow-400/30 rounded-full blur-2xl'></div>
							</div>
						</div>
					</div>

					{/* Newsletter signup */}
					<div className='mt-16 max-w-md mx-auto lg:max-w-lg'>
						<div className='bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-amber-200'>
							<div className='text-center mb-6'>
								<h3 className='text-2xl font-bold text-gray-900 mb-2'>
									Get Early Access
								</h3>
								<p className='text-gray-600'>
									Be first to taste authentic Indonesian flavors + get 15% off your first order
								</p>
							</div>

							<form onSubmit={handleEmailSignup} className='space-y-4'>
								<Input
									type='email'
									placeholder='Enter your email address'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className='text-lg py-4 border-2 border-gray-200 focus:border-red-500'
								/>
								<Button
									type='submit'
									className='w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl'
									disabled={newsletterState.isSubmitting || newsletterState.isSubmitted}
								>
									{newsletterState.isSubmitting
										? "Joining..."
										: newsletterState.isSubmitted
										? "Welcome to the family! 🌶️"
										: "Join the Spice Journey"}
								</Button>
							</form>

							{newsletterState.isSubmitted && newsletterState.message && (
								<p className='mt-4 font-medium text-green-600 text-center'>
									{newsletterState.message}
								</p>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* Product Showcase Section */}
			<section className='py-24 bg-white relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-red-50/50 via-transparent to-amber-50/50'></div>
				
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-20'>
						<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
							Our Signature
							<span className='text-red-600 block'>Sambal Collection</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
							Each variety brings centuries of Indonesian culinary heritage to your kitchen, 
							handcrafted using traditional recipes from the original Spice Islands.
						</p>
					</div>

					{/* Product Grid */}
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20'>
						{/* Sambal Oelek */}
						<div className='group'>
							<div className='relative mb-6'>
								<div className='aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300'>
									<div className='w-full h-full bg-gradient-to-br from-red-600/90 to-red-800/90 flex items-center justify-center'>
										<img
											src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjN0YxRDFEIiByeD0iMTIwIi8+CjxjaXJjbGUgY3g9IjEyMCIgY3k9IjEyMCIgcj0iODAiIGZpbGw9IiNEQzI2MjYiLz4KPHN2ZyB4PSI0MCIgeT0iNDAiIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIj4KPHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE2MCAxNjAiPgo8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwMCIgcng9IjgiIGZpbGw9IiM5MjI1MjUiLz4KPHN2ZyB4PSIxMCIgeT0iMTAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIj4KPHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCI+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI2MCIgcng9IjQiIGZpbGw9IiNGRUM5MDAiLz4KPHR4dCB4PSI3MCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJzZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM3RjFEMUQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNQSUNFIElTTEFORDwvdGV4dD4KPHR4dCB4PSI3MCIgeT0iNTUiIGZvbnQtZmFtaWx5PSJzZXJpZiIgZm9udC1zaXplPSI4IiBmaWxsPSIjN0YxRDFEIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JTkRPTkVTSUE8L3RleHQ+Cjx0ZXh0IHg9IjcwIiB5PSI3NSIgZm9udC1mYW1pbHk9InNlcmlmIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y1OTQ0NCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U0FNQkFMIE9FTEVLPC90ZXh0Pgo8L3N2Zz4KPC9zdmc+Cjwvc3ZnPgo8L3N2Zz4KPC9zdmc+'
											alt='Sambal Oelek'
											className='w-3/4 h-3/4 object-contain drop-shadow-xl'
										/>
									</div>
								</div>
								<div className='absolute -top-3 -right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
									Most Popular
								</div>
							</div>
							<div className='text-center'>
								<h3 className='text-2xl font-bold text-gray-900 mb-2'>Sambal Oelek</h3>
								<p className='text-gray-600 mb-4'>
									Pure, fiery chili paste - the foundation of Indonesian cooking. 
									Perfect for marinades and stir-fries.
								</p>
								<div className='flex justify-center items-center space-x-2 mb-4'>
									<span className='text-red-500'>🌶️🌶️🌶️🌶️</span>
									<span className='text-sm text-gray-500'>Very Hot</span>
								</div>
								<div className='text-lg font-bold text-gray-900'>£7.49</div>
							</div>
						</div>

						{/* Sambal Bali */}
						<div className='group'>
							<div className='relative mb-6'>
								<div className='aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300'>
									<div className='w-full h-full bg-gradient-to-br from-orange-500/90 to-red-600/90 flex items-center justify-center'>
										<img
											src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjN0YxRDFEIiByeD0iMTIwIi8+CjxjaXJjbGUgY3g9IjEyMCIgY3k9IjEyMCIgcj0iODAiIGZpbGw9IiNEQzI2MjYiLz4KPHN2ZyB4PSI0MCIgeT0iNDAiIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIj4KPHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE2MCAxNjAiPgo8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwMCIgcng9IjgiIGZpbGw9IiM5MjI1MjUiLz4KPHN2ZyB4PSIxMCIgeT0iMTAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIj4KPHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCI+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI2MCIgcng9IjQiIGZpbGw9IiNGRUM5MDAiLz4KPHR4dCB4PSI3MCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJzZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM3RjFEMUQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNQSUNFIElTTEFORDwvdGV4dD4KPHR4dCB4PSI3MCIgeT0iNTUiIGZvbnQtZmFtaWx5PSJzZXJpZiIgZm9udC1zaXplPSI4IiBmaWxsPSIjN0YxRDFEIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JTkRPTkVTSUE8L3RleHQ+Cjx0ZXh0IHg9IjcwIiB5PSI3NSIgZm9udC1mYW1pbHk9InNlcmlmIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y1OTQ0NCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U0FNQkFMIEJBTEk8L3RleHQ+Cjwvc3ZnPgo8L3N2Zz4KPC9zdmc+Cjwvc3ZnPgo8L3N2Zz4='
											alt='Sambal Bali'
											className='w-3/4 h-3/4 object-contain drop-shadow-xl'
										/>
									</div>
								</div>
							</div>
							<div className='text-center'>
								<h3 className='text-2xl font-bold text-gray-900 mb-2'>Sambal Bali</h3>
								<p className='text-gray-600 mb-4'>
									Sweet and spicy with aromatic spices. A perfect balance 
									that complements grilled meats beautifully.
								</p>
								<div className='flex justify-center items-center space-x-2 mb-4'>
									<span className='text-red-500'>🌶️🌶️🌶️</span>
									<span className='text-sm text-gray-500'>Hot</span>
								</div>
								<div className='text-lg font-bold text-gray-900'>£8.49</div>
							</div>
						</div>

						{/* Gift Set */}
						<div className='group md:col-span-2 lg:col-span-1'>
							<div className='relative mb-6'>
								<div className='aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300'>
									<div className='w-full h-full bg-gradient-to-br from-amber-600/90 to-red-700/90 flex items-center justify-center'>
										<img
											src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjN0YxRDFEIiByeD0iMjAiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KPHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEzMCIgcng9IjEwIiBmaWxsPSIjOTIyNTI1Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJzZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRUM5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNQSUNFIElTTEFORDwvdGV4dD4KPHR4dCB4PSIxMDAiIHk9IjYwIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNGRUM5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklORE9ORVNJQTwvdGV4dD4KPHR4dCB4PSIxMDAiIHk9IjkwIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkVDOTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HSUZUIFNFVDwvdGV4dD4KPC9zdmc+Cjwvc3ZnPgo8L3N2Zz4='