"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
	name: string;
	location: string;
	rating: number;
	review: string;
	product: string;
}

const testimonials: Testimonial[] = [
	{
		name: "Sarah M.",
		location: "London",
		rating: 5,
		review: "Finally found authentic Indonesian sambal in the UK! The Sambal Oelek is exactly like what I had in Jakarta. Chef Yossie's recipes are the real deal - you can taste the traditional methods in every jar.",
		product: "Sambal Oelek",
	},
	{
		name: "James P.",
		location: "Manchester",
		rating: 5,
		review: "As someone who lived in Indonesia for 3 years, I can confirm this is authentic. The heat level is perfect and the flavour is complex. Best sambal I've found in the UK by far!",
		product: "Sambal Bali",
	},
	{
		name: "Priya K.",
		location: "Birmingham",
		rating: 5,
		review: "Ordered the Heritage Gift Set for my Indonesian friend's birthday. She was amazed by the quality and said it reminded her of home. The packaging is beautiful too!",
		product: "Heritage Gift Set",
	},
	{
		name: "David L.",
		location: "Edinburgh",
		rating: 5,
		review: "I'm not usually one for spicy food, but the Sambal Bali has converted me. The sweet-spicy balance is incredible. Fast delivery to Scotland too!",
		product: "Sambal Bali",
	},
	{
		name: "Emma T.",
		location: "Cardiff",
		rating: 5,
		review: "Chef Yossie's story drew me in, but the taste kept me coming back. This is restaurant-quality sambal that I can enjoy at home. The 75g sample was perfect to try first!",
		product: "Sample Size",
	},
	{
		name: "Michael R.",
		location: "Bristol",
		rating: 5,
		review: "Been searching for proper Indonesian sambal since my trip to Bali. This is it! The traditional recipes really show - you can taste the difference from mass-produced versions.",
		product: "Sambal Oelek",
	},
];

export default function TestimonialsSection() {
	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }, (_, i) => (
			<Star
				key={i}
				className={`w-4 h-4 ${
					i < rating
						? "text-gold-500 fill-current"
						: "text-gray-300"
				}`}
			/>
		));
	};

	return (
		<section className='py-24 bg-gradient-to-br from-burgundy-50 to-gold-50 relative overflow-hidden'>
			<div className='absolute top-0 left-0 w-72 h-72 bg-gold-200/20 rounded-full -translate-x-36 -translate-y-36 blur-3xl animate-luxury-spin'></div>
			<div className='absolute bottom-0 right-0 w-96 h-96 bg-burgundy-200/20 rounded-full translate-x-48 translate-y-48 blur-3xl animate-luxury-spin'></div>

			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
						What Our UK Customers
						<span className='text-gold-700 block'>
							Are Saying
						</span>
					</h2>
					<p className='text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-body'>
						From London to Edinburgh, Cardiff to Manchester -
						discover why customers across the UK are choosing
						our authentic Indonesian sambal
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{testimonials.map((testimonial, index) => (
						<Card
							key={index}
							className='shadow-lg border border-gold-200 bg-gradient-to-br from-cream-50 to-cream-100 overflow-hidden rounded-2xl hover:shadow-luxury transition-all duration-300 group'
						>
							<CardContent className='p-6'>
								<div className='flex items-start justify-between mb-4'>
									<div className='flex items-center space-x-1'>
										{renderStars(
											testimonial.rating
										)}
									</div>
									<Quote className='w-6 h-6 text-gold-600/30 group-hover:text-gold-600/50 transition-colors' />
								</div>

								<p className='text-neutral-700 leading-relaxed mb-6 font-body italic'>
									"{testimonial.review}"
								</p>

								<div className='border-t border-gold-200 pt-4'>
									<div className='flex justify-between items-end'>
										<div>
											<p className='font-bold text-burgundy-900 font-brand'>
												{testimonial.name}
											</p>
											<p className='text-sm text-gold-700 font-elegant'>
												{
													testimonial.location
												}
												, UK
											</p>
										</div>
										<div className='text-right'>
											<p className='text-xs text-neutral-500 font-body'>
												Verified Purchase
											</p>
											<p className='text-sm text-burgundy-700 font-medium'>
												{
													testimonial.product
												}
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className='text-center mt-16'>
					<div className='inline-flex items-center space-x-2 bg-gradient-to-r from-burgundy-900/10 to-gold-600/10 rounded-full px-6 py-3 border border-gold-300/50'>
						<div className='flex items-center space-x-1'>
							{renderStars(5)}
						</div>
						<span className='text-burgundy-900 font-bold font-brand'>
							4.9/5 Average Rating
						</span>
						<span className='text-neutral-600 font-body'>
							• 150+ UK Reviews
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
