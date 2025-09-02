"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Building2,
	Users,
	Truck,
	Award,
	Phone,
	Mail,
	MapPin,
} from "lucide-react";

export default function WholesalePage() {
	const [formData, setFormData] = useState({
		businessName: "",
		contactName: "",
		email: "",
		phone: "",
		businessType: "",
		location: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			setFormData({
				businessName: "",
				contactName: "",
				email: "",
				phone: "",
				businessType: "",
				location: "",
				message: "",
			});
		}, 1000);
	};

	const benefits = [
		{
			icon: Building2,
			title: "Competitive Wholesale Pricing",
			description:
				"Attractive margins for retailers, restaurants, and distributors",
		},
		{
			icon: Users,
			title: "Dedicated Account Management",
			description: "Personal support from our wholesale team",
		},
		{
			icon: Truck,
			title: "Reliable Supply Chain",
			description: "Consistent stock levels and on-time delivery",
		},
		{
			icon: Award,
			title: "Marketing Support",
			description: "Point-of-sale materials and product training",
		},
	];

	return (
		<div className='min-h-screen bg-coconut-50'>
			{/* Hero Section */}
			<section className='py-24 bg-gradient-to-br from-burgundy-900 to-burgundy-800 text-white relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-burgundy-900/90 to-gold-900/20'></div>
				<div className='absolute top-0 left-0 w-72 h-72 bg-gold-500/10 rounded-full -translate-x-36 -translate-y-36 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-96 h-96 bg-burgundy-500/10 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-brand'>
						Wholesale
						<span className='text-gold-300 block'>
							Partnership
						</span>
					</h1>
					<p className='text-xl sm:text-2xl text-gold-200 max-w-3xl mx-auto font-body'>
						Join our growing network of retailers,
						restaurants, and distributors bringing authentic
						Indonesian flavors to customers across the UK
					</p>
				</div>
			</section>

			{/* Benefits Section */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							Why Partner With Us?
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							We&apos;re committed to supporting our
							wholesale partners with premium products and
							exceptional service
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{benefits.map((benefit, index) => (
							<div
								key={index}
								className='text-center bg-cream-50 rounded-sm p-8 border border-gold-200'
							>
								<div className='w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-burgundy-200'>
									<benefit.icon className='w-8 h-8 text-burgundy-700' />
								</div>
								<h3 className='text-xl font-bold text-burgundy-900 mb-4 font-brand'>
									{benefit.title}
								</h3>
								<p className='text-neutral-600 font-body'>
									{benefit.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className='py-24 bg-gradient-to-br from-cream-100 to-cream-200'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-16'>
						<div>
							<h3 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
								Get Started
								<span className='text-gold-700 block'>
									Today
								</span>
							</h3>
							<p className='text-lg text-neutral-700 mb-8 font-body'>
								Ready to bring authentic Indonesian
								sambal to your customers? Fill out the
								form and our wholesale team will get
								back to you within 24 hours.
							</p>

							<div className='space-y-6'>
								<div className='flex items-center space-x-4'>
									<div className='w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center'>
										<Mail className='w-6 h-6 text-gold-700' />
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 font-brand'>
											Email
										</h4>
										<p className='text-neutral-600 font-body'>
											info@spiceislandindonesia.com
										</p>
									</div>
								</div>
								<div className='flex items-center space-x-4'>
									<div className='w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center'>
										<MapPin className='w-6 h-6 text-cream-700' />
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 font-brand'>
											Address
										</h4>
										<p className='text-neutral-600 font-body'>
											Ormskirk, United Kingdom
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className='bg-white rounded-sm p-8 shadow-luxury border border-gold-200'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-brand'>
								Wholesale Enquiry Form
							</h3>

							{isSubmitted ? (
								<div className='text-center py-8'>
									<div className='w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4'>
										<Award className='w-8 h-8 text-gold-600' />
									</div>
									<h4 className='text-xl font-bold text-burgundy-800 mb-2 font-brand'>
										Thank You!
									</h4>
									<p className='text-gold-700 font-body'>
										We&apos;ve received your
										wholesale enquiry and will get
										back to you within 24 hours.
									</p>
								</div>
							) : (
								<form
									onSubmit={handleSubmit}
									className='space-y-6'
								>
									<div className='grid md:grid-cols-2 gap-4'>
										<div>
											<label className='block text-sm font-medium text-burgundy-900 mb-2 font-elegant'>
												Business Name *
											</label>
											<Input
												type='text'
												required
												value={
													formData.businessName
												}
												onChange={(e) =>
													setFormData({
														...formData,
														businessName:
															e
																.target
																.value,
													})
												}
												className='border-gold-300 focus:border-burgundy-600 font-body'
											/>
										</div>
										<div>
											<label className='block text-sm font-medium text-burgundy-900 mb-2 font-elegant'>
												Contact Name *
											</label>
											<Input
												type='text'
												required
												value={
													formData.contactName
												}
												onChange={(e) =>
													setFormData({
														...formData,
														contactName:
															e
																.target
																.value,
													})
												}
												className='border-gold-300 focus:border-burgundy-600 font-body'
											/>
										</div>
									</div>

									<div className='grid md:grid-cols-2 gap-4'>
										<div>
											<label className='block text-sm font-medium text-burgundy-900 mb-2 font-elegant'>
												Email Address *
											</label>
											<Input
												type='email'
												required
												value={
													formData.email
												}
												onChange={(e) =>
													setFormData({
														...formData,
														email: e
															.target
															.value,
													})
												}
												className='border-gold-300 focus:border-burgundy-600 font-body'
											/>
										</div>
										<div>
											<label className='block text-sm font-medium text-burgundy-900 mb-2 font-elegant'>
												Phone Number
											</label>
											<Input
												type='tel'
												value={
													formData.phone
												}
												onChange={(e) =>
													setFormData({
														...formData,
														phone: e
															.target
															.value,
													})
												}
												className='border-gold-300 focus:border-burgundy-600 font-body'
											/>
										</div>
									</div>

									<div className='grid md:grid-cols-2 gap-4'>
										<div>
											<label className='block text-sm font-medium text-burgundy-900 mb-2 font-elegant'>
												Business Type *
											</label>
											<Input
												type='text'
												required
												placeholder='e.g., Restaurant, Retail Store, Distributor'
												value={
													formData.businessType
												}
												onChange={(e) =>
													setFormData({
														...formData,
														businessType:
															e
																.target
																.value,
													})
												}
												className='border-gold-300 focus:border-burgundy-600 font-body'
											/>
										</div>
										<div>
											<label className='block text-sm font-medium text-burgundy-900 mb-2 font-elegant'>
												Location
											</label>
											<Input
												type='text'
												placeholder='City, Region'
												value={
													formData.location
												}
												onChange={(e) =>
													setFormData({
														...formData,
														location:
															e
																.target
																.value,
													})
												}
												className='border-gold-300 focus:border-burgundy-600 font-body'
											/>
										</div>
									</div>

									<div>
										<label className='block text-sm font-medium text-burgundy-900 mb-2 font-elegant'>
											Message
										</label>
										<Textarea
											placeholder='Tell us about your business, expected volumes, and any specific requirements...'
											value={formData.message}
											onChange={(e) =>
												setFormData({
													...formData,
													message: e
														.target
														.value,
												})
											}
											className='border-gold-300 focus:border-burgundy-600 font-body'
											rows={4}
										/>
									</div>

									<Button
										type='submit'
										disabled={isSubmitting}
										className='w-full bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 py-3 font-elegant'
									>
										{isSubmitting
											? "Sending..."
											: "Send Enquiry"}
									</Button>
								</form>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
