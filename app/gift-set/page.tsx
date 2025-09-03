import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/simple-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import FAQSchema from "@/components/seo/FAQSchema";
import ProductSchema from "@/components/seo/ProductSchema";
import StarRating from "@/components/ui/StarRating";
import CustomerReviews from "@/components/ui/CustomerReviews";
import {
	ChefHat,
	Award,
	Star,
	Truck,
	Shield,
	Clock,
	MapPin,
	Heart,
	CheckCircle,
	Flame,
	Leaf,
	Utensils,
	Timer,
	Sparkles,
	Gift,
	Package,
	Users,
} from "@/components/ui/icons";

export const metadata = {
	title: "Indonesian Sambal Gift Set UK | Premium Collection",
	description:
		"Perfect Indonesian sambal gift set with all three varieties: Oelek, Bali, and Goreng. Made by Chef Yossie using traditional recipes. Free UK delivery.",
	keywords:
		"Indonesian sambal gift set UK, chili paste gift box, Chef Yossie gift collection, authentic sambal gift UK, Indonesian condiment gift set, food lover gift UK, sambal collection gift box, premium Indonesian spices gift",
	openGraph: {
		title: "Indonesian Sambal Gift Set UK | Premium Chili Paste Collection",
		description:
			"Perfect gift for food lovers - complete collection of authentic Indonesian sambal with beautiful presentation and tasting guide.",
		type: "website",
		images: [
			{
				url: "https://www.spiceislandindonesia.com/images/Spice Island Indonesia Complete Packaging System Mockup.webp",
				width: 600,
				height: 600,
				alt: "Indonesian Sambal Gift Set - Complete Collection by Chef Yossie",
			},
		],
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/gift-set",
	},
};

export default function GiftSetPage() {
	// FAQ data for AI search optimization
	const faqData = [
		{
			question: "What's included in the Indonesian sambal gift set?",
			answer: "Our premium gift set includes all three authentic sambal varieties: Sambal Oelek (185g - pure heat), Sambal Bali (185g - aromatic complexity), and Sambal Goreng (185g - sweet & spicy). Plus a beautiful presentation box, detailed tasting guide, and recipe cards featuring traditional Indonesian dishes.",
		},
		{
			question: "Is the sambal gift set suitable for beginners?",
			answer: "Absolutely! The gift set is perfect for introducing someone to Indonesian cuisine. It includes three different heat levels and flavor profiles, from the mild Sambal Goreng to the intense Sambal Oelek. The included tasting guide explains each variety and suggests how to use them.",
		},
		{
			question: "How is the gift set packaged for gifting?",
			answer: "Each gift set comes in an elegant presentation box with protective packaging. We include a detailed tasting guide, recipe cards, and information about Chef Yossie's traditional methods. The packaging is designed to make a beautiful impression when opened.",
		},
		{
			question: "Can I add a personal message to the gift set?",
			answer: "Yes! During checkout, you can add a personal message that we'll include on a beautiful card inside the gift box. Perfect for birthdays, holidays, or introducing friends to authentic Indonesian flavors.",
		},
		{
			question: "What's the shelf life of the gift set products?",
			answer: "All sambals in the gift set have a 2-year shelf life when unopened. Once opened, they should be refrigerated and used within 8-10 weeks. The gift set is perfect for immediate giving or can be stored for future gift-giving occasions.",
		},
		{
			question: "Do you offer wholesale pricing for corporate gifts?",
			answer: "Yes! We offer special pricing for corporate gifts and bulk orders of 10+ gift sets. Contact us directly for wholesale pricing and custom corporate packaging options. Perfect for employee gifts, client appreciation, or food industry events.",
		},
	];

	// Product data for enhanced schema
	const productData = {
		name: "Indonesian Sambal Gift Set Collection",
		description:
			"Complete collection of authentic Indonesian sambal varieties in premium gift packaging. Includes Sambal Oelek, Sambal Bali, and Sambal Goreng with tasting guide and recipe cards.",
		brand: "Spice Island Indonesia",
		category: "Gift Sets",
		image: "https://www.spiceislandindonesia.com/images/Spice Island Indonesia Complete Packaging System Mockup.webp",
		offers: [
			{
				name: "Complete Sambal Gift Set",
				description:
					"Three 185g jars (Oelek, Bali, Goreng) in premium presentation box with tasting guide",
				price: "24.99",
				priceCurrency: "GBP",
				availability: "https://schema.org/InStock",
				sku: "SII-GIFT-SET-COMPLETE",
				url: "https://www.spiceislandindonesia.com/gift-set",
				priceValidUntil: "2026-12-31",
				shippingDetails: {
					"@type": "OfferShippingDetails",
					shippingRate: {
						"@type": "MonetaryAmount",
						currency: "GBP",
						value: "3.49",
					},
					shippingDestination: {
						"@type": "DefinedRegion",
						addressCountry: "GB",
					},
					deliveryTime: {
						"@type": "ShippingDeliveryTime",
						handlingTime: {
							"@type": "QuantitativeValue",
							minValue: 1,
							maxValue: 2,
							unitCode: "DAY",
						},
						transitTime: {
							"@type": "QuantitativeValue",
							minValue: 1,
							maxValue: 3,
							unitCode: "DAY",
						},
					},
				},
				hasMerchantReturnPolicy: {
					"@type": "MerchantReturnPolicy",
					returnPolicyCategory:
						"https://schema.org/MerchantReturnFiniteReturnWindow",
					merchandiseReturnDays: 30,
					returnMethod: "https://schema.org/ReturnByMail",
					returnFees: "https://schema.org/ReturnShippingFees",
					returnShippingFeesAmount: {
						"@type": "MonetaryAmount",
						currency: "GBP",
						value: "3.49",
					},
				},
			},
		],
		aggregateRating: {
			ratingValue: 4.9,
			reviewCount: 89,
			bestRating: 5,
			worstRating: 1,
		},
		reviews: [
			{
				author: "Helen K.",
				rating: 5,
				reviewBody:
					"Perfect gift for my Indonesian friend! She was amazed by the authenticity. The presentation box is beautiful and the tasting guide helped us try each one properly.",
				datePublished: "2024-01-30",
				location: "Birmingham",
			},
			{
				author: "David P.",
				rating: 5,
				reviewBody:
					"Bought this for my foodie brother. The variety is fantastic - from mild to very spicy. Really impressed with the quality and traditional recipes.",
				datePublished: "2024-01-25",
				location: "Leeds",
			},
			{
				author: "Amanda R.",
				rating: 5,
				reviewBody:
					"Excellent corporate gift! Ordered 15 sets for our team. Everyone loved discovering authentic Indonesian flavors. Professional packaging and great value.",
				datePublished: "2024-01-20",
				location: "London",
			},
		],
		additionalProperties: {
			contents: [
				"Sambal Oelek 185g",
				"Sambal Bali 185g",
				"Sambal Goreng 185g",
				"Tasting Guide",
				"Recipe Cards",
				"Premium Gift Box",
			],
			totalValue: "Individual jars worth £24.47",
			savings: "Save £2.48 vs buying separately",
			dietaryInfo: [
				"Gluten-Free",
				"Vegan",
				"No Artificial Preservatives",
			],
			giftOptions: [
				"Personal message card",
				"Gift wrapping available",
				"Corporate bulk pricing",
			],
		},
	};

	return (
		<div className='min-h-screen bg-coconut-50'>
			<FAQSchema
				faqs={faqData}
				pageTitle='Indonesian Sambal Gift Set - Frequently Asked Questions'
			/>
			<ProductSchema
				name={productData.name}
				description={productData.description}
				brand={productData.brand}
				category={productData.category}
				image={productData.image}
				offers={productData.offers}
				aggregateRating={productData.aggregateRating}
				reviews={productData.reviews}
				additionalProperties={productData.additionalProperties}
			/>

			{/* Hero Section */}
			<section className='py-16 sm:py-20 lg:py-14 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-72 h-72 lg:w-80 lg:h-80 bg-gold-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-72 h-72 lg:w-80 lg:h-80 bg-gold-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 items-center'>
						{/* Left side - Content */}
						<div className='text-center lg:text-left'>
							<Badge className='bg-burgundy-800 text-gold-300 mb-6 px-6 py-3 text-lg font-semibold border border-gold-600/30'>
								<Gift className='w-5 h-5 mr-2' />
								Perfect for Food Lovers
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight font-brand'>
								<span className='text-white block mb-2'>
									Indonesian Sambal
								</span>
								<span className='text-gold-300 block mb-2'>
									Gift Set Collection
								</span>
								<span className='text-gold-200 text-2xl sm:text-3xl lg:text-3xl font-script italic'>
									Complete Authentic Experience
								</span>
							</h1>

							<div className='space-y-4 mb-6 max-w-2xl mx-auto lg:mx-0'>
								<p className='text-lg sm:text-xl text-stone-200 leading-relaxed font-body'>
									The{" "}
									<strong className='text-gold-100'>
										perfect gift
									</strong>{" "}
									for food enthusiasts - all three
									authentic sambal varieties in
									beautiful presentation packaging.
								</p>

								<p className='text-lg text-gold-300 leading-relaxed font-body'>
									<em>
										Complete Indonesian experience
									</em>{" "}
									with tasting guide and recipe
									cards. Save £2.48 compared to
									buying separately.
								</p>
							</div>

							{/* Customer Rating */}
							<div className='flex justify-center lg:justify-start mb-6'>
								<div className='bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-gold-300/30'>
									<StarRating
										rating={
											productData
												.aggregateRating
												.ratingValue
										}
										reviewCount={
											productData
												.aggregateRating
												.reviewCount
										}
										size='lg'
										className='text-gold-400'
									/>
								</div>
							</div>

							{/* Key Features */}
							<div className='grid sm:grid-cols-2 gap-2 mb-6'>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center'>
										<Package className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-100 font-medium font-elegant'>
										Three Complete Varieties
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center'>
										<Gift className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-stone-200 font-medium font-elegant'>
										Premium Gift Packaging
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center'>
										<Users className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-stone-200 font-medium font-elegant'>
										Perfect for Sharing
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center'>
										<Award className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-stone-200 font-medium font-elegant'>
										Save £2.48
									</span>
								</div>
							</div>

							{/* CTA Buttons */}
							<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
								<Link href='/shop'>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant text-lg px-8 py-4 bg-burgundy-600 hover:bg-burgundy-700 text-white'
									>
										Order Gift Set - £24.99
									</Button>
								</Link>
								<Link href='/sample-pack-try-first'>
									<Button
										variant='outline'
										size='lg'
										className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 text-lg px-8 py-4'
									>
										Try Sample Pack First
									</Button>
								</Link>
							</div>
						</div>

						{/* Right side - Product Image */}
						<div className='relative'>
							<div className='relative w-full lg:max-w-none ml-auto max-h-[60vh] flex items-center justify-end'>
								<div className='aspect-square rounded-sm overflow-hidden shadow-lg bg-neutral-100 p-6 h-96'>
									<div className='w-full h-full rounded-sm flex items-center justify-center'>
										<Image
											src='/images/Spice Island Indonesia Complete Packaging System Mockup.webp'
											alt='Indonesian Sambal Gift Set - Complete Collection by Chef Yossie'
											width={500}
											height={500}
											className='w-full h-full object-contain drop-shadow-2xl'
											priority
											sizes='(max-width: 768px) 100vw, 50vw'
										/>
									</div>
								</div>

								{/* Floating badges */}
								<div className='absolute -top-4 -left-4 bg-gold-600 text-burgundy-900 rounded-full p-4 shadow-luxury animate-float border border-gold-300'>
									<Gift className='w-6 h-6' />
								</div>
								<div className='absolute -bottom-4 -right-4 bg-burgundy-800 text-gold-300 rounded-full p-4 shadow-luxury animate-float delay-1000 border border-gold-600'>
									<Heart className='w-6 h-6' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* What's Included Section */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							Complete Indonesian
							<span className='text-gold-700 block'>
								Sambal Experience
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body leading-relaxed'>
							Everything needed to explore authentic
							Indonesian chili paste varieties - from mild
							to fiery hot.
						</p>
					</div>

					<div className='grid lg:grid-cols-3 gap-8 mb-12'>
						{/* Sambal Oelek */}
						<div className='bg-burgundy-50 rounded-sm p-6 border border-burgundy-200'>
							<div className='aspect-square mb-4 bg-burgundy-100 rounded-sm p-4'>
								<Image
									src='/images/optimized/sambal-oelek-lg.webp'
									alt='Sambal Oelek - Pure Heat'
									width={200}
									height={200}
									className='w-full h-full object-contain'
									sizes='(max-width: 768px) 100vw, 33vw'
								/>
							</div>
							<h3 className='text-xl font-bold text-burgundy-900 mb-2 font-brand'>
								Sambal Oelek
							</h3>
							<p className='text-burgundy-700 text-sm mb-4 font-elegant'>
								Pure Indonesian Fire - 25,000 SHU
							</p>
							<ul className='space-y-1 text-xs text-neutral-700'>
								<li className='flex items-center space-x-2'>
									<CheckCircle className='w-3 h-3 text-gold-600' />
									<span>
										Perfect for cooking and
										marinades
									</span>
								</li>
								<li className='flex items-center space-x-2'>
									<CheckCircle className='w-3 h-3 text-gold-600' />
									<span>
										Traditional cobek-ground
										texture
									</span>
								</li>
								<li className='flex items-center space-x-2'>
									<CheckCircle className='w-3 h-3 text-gold-600' />
									<span>
										For serious heat lovers
									</span>
								</li>
							</ul>
						</div>

						{/* Sambal Bali */}
						<div className='bg-burgundy-50 rounded-sm p-6 border border-burgundy-200'>
							<div className='aspect-square mb-4 bg-burgundy-100 rounded-sm p-4'>
								<Image
									src='/images/optimized/sambal-bali-lg.webp'
									alt='Sambal Bali - Aromatic Complexity'
									width={200}
									height={200}
									className='w-full h-full object-contain'
									sizes='(max-width: 768px) 100vw, 33vw'
								/>
							</div>
							<h3 className='text-xl font-bold text-burgundy-900 mb-2 font-brand'>
								Sambal Bali
							</h3>
							<p className='text-burgundy-700 text-sm mb-4 font-elegant'>
								Aromatic Sophistication - 14,000 SHU
							</p>
							<ul className='space-y-1 text-xs text-neutral-700'>
								<li className='flex items-center space-x-2'>
									<CheckCircle className='w-3 h-3 text-gold-600' />
									<span>
										Galangal, lemongrass & kaffir
										lime
									</span>
								</li>
								<li className='flex items-center space-x-2'>
									<CheckCircle className='w-3 h-3 text-gold-600' />
									<span>
										Complex aromatic layers
									</span>
								</li>
								<li className='flex items-center space-x-2'>
									<CheckCircle className='w-3 h-3 text-gold-600' />
									<span>
										Perfect for grilled meats
									</span>
								</li>
							</ul>
						</div>

						{/* Sambal Goreng */}
						<div className='bg-gold-50 rounded-sm p-6 border border-gold-200'>
							<div className='aspect-square mb-4 bg-gold-100 rounded-sm p-4'>
								<Image
									src='/images/optimized/sambal-goreng-lg.webp'
									alt='Sambal Goreng - Sweet & Spicy Harmony'
									width={200}
									height={200}
									className='w-full h-full object-contain'
									sizes='(max-width: 768px) 100vw, 33vw'
								/>
							</div>
							<h3 className='text-xl font-bold text-gold-900 mb-2 font-brand'>
								Sambal Goreng
							</h3>
							<p className='text-gold-700 text-sm mb-4 font-elegant'>
								Sweet & Spicy Harmony - 12,000 SHU
							</p>
							<ul className='space-y-1 text-xs text-neutral-700'>
								<li className='flex items-center space-x-2'>
									<CheckCircle className='w-3 h-3 text-gold-600' />
									<span>Palm sugar sweetness</span>
								</li>
								<li className='flex items-center space-x-2'>
									<CheckCircle className='w-3 h-3 text-gold-600' />
									<span>
										Traditional fried method
									</span>
								</li>
								<li className='flex items-center space-x-2'>
									<CheckCircle className='w-3 h-3 text-gold-600' />
									<span>Perfect for beginners</span>
								</li>
							</ul>
						</div>
					</div>

					{/* Additional Items */}
					<div className='bg-cream-50 rounded-sm p-8 border border-gold-200'>
						<h3 className='text-2xl font-bold text-purple-900 mb-6 font-brand text-center'>
							Plus Premium Extras
						</h3>
						<div className='grid md:grid-cols-3 gap-6'>
							<div className='text-center'>
								<div className='w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Package className='w-6 h-6 text-white' />
								</div>
								<h4 className='font-semibold text-burgundy-900 mb-2'>
									Premium Gift Box
								</h4>
								<p className='text-sm text-neutral-700'>
									Beautiful presentation packaging
									perfect for gifting
								</p>
							</div>
							<div className='text-center'>
								<div className='w-12 h-12 bg-burgundy-600 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Utensils className='w-6 h-6 text-white' />
								</div>
								<h4 className='font-semibold text-burgundy-900 mb-2'>
									Tasting Guide
								</h4>
								<p className='text-sm text-neutral-700'>
									Detailed guide to each sambal
									variety and heat level
								</p>
							</div>
							<div className='text-center'>
								<div className='w-12 h-12 bg-burgundy-700 rounded-full flex items-center justify-center mx-auto mb-4'>
									<ChefHat className='w-6 h-6 text-white' />
								</div>
								<h4 className='font-semibold text-burgundy-900 mb-2'>
									Recipe Cards
								</h4>
								<p className='text-sm text-neutral-700'>
									Authentic Indonesian recipes from
									Chef Yossie
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Value Comparison */}
			<section className='py-16 bg-gradient-to-br from-cream-100 to-cream-200'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl font-bold text-burgundy-900 mb-4 font-brand'>
							Exceptional Value
						</h2>
						<p className='text-xl text-neutral-600 font-body'>
							Save money while giving the complete
							authentic experience
						</p>
					</div>

					<div className='bg-white rounded-sm shadow-luxury border border-gold-200 overflow-hidden'>
						<div className='grid md:grid-cols-2 divide-x divide-gold-200'>
							{/* Individual Purchase */}
							<div className='p-8'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-4 font-brand'>
									Individual Purchase
								</h3>
								<div className='space-y-2 text-neutral-700'>
									<div className='flex justify-between'>
										<span>Sambal Oelek 185g</span>
										<span>£7.49</span>
									</div>
									<div className='flex justify-between'>
										<span>Sambal Bali 185g</span>
										<span>£8.49</span>
									</div>
									<div className='flex justify-between'>
										<span>
											Sambal Goreng 185g
										</span>
										<span>£8.49</span>
									</div>
									<div className='border-t border-neutral-300 pt-2 mt-4'>
										<div className='flex justify-between font-bold text-lg'>
											<span>Total</span>
											<span>£24.47</span>
										</div>
									</div>
								</div>
							</div>

							{/* Gift Set */}
							<div className='p-8 bg-cream-50'>
								<h3 className='text-xl font-bold text-purple-900 mb-4 font-brand'>
									Gift Set Collection
								</h3>
								<div className='space-y-2 text-neutral-700'>
									<div className='flex justify-between'>
										<span>All three sambals</span>
										<span>£24.47</span>
									</div>
									<div className='flex justify-between'>
										<span>Premium gift box</span>
										<span>£2.00</span>
									</div>
									<div className='flex justify-between'>
										<span>
											Tasting guide & recipes
										</span>
										<span>£1.50</span>
									</div>
									<div className='flex justify-between text-green-600'>
										<span>Gift set discount</span>
										<span>-£3.98</span>
									</div>
									<div className='border-t border-gold-300 pt-2 mt-4'>
										<div className='flex justify-between font-bold text-lg text-burgundy-900'>
											<span>
												Gift Set Price
											</span>
											<span>£24.99</span>
										</div>
										<p className='text-sm text-green-600 mt-1'>
											Save £2.48 + extras worth
											£3.50
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Customer Reviews Section */}
			<section className='py-16 bg-cream-50'>
				<div className='container mx-auto px-4'>
					<CustomerReviews
						reviews={productData.reviews}
						title='What Customers Say About Our Gift Set'
					/>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto'>
						<h2 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 text-center font-brand'>
							Gift Set FAQ
						</h2>
						<p className='text-xl text-neutral-600 text-center mb-12 font-body'>
							Everything you need to know about our premium
							gift collection
						</p>

						<div className='space-y-6'>
							{faqData.map((faq, index) => (
								<div
									key={index}
									className='bg-cream-50 rounded-lg p-6 border border-gold-200'
								>
									<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
										{faq.question}
									</h3>
									<p className='text-neutral-700 font-body leading-relaxed'>
										{faq.answer}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className='py-24 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-4xl sm:text-5xl font-bold mb-6 font-brand'>
						Perfect Gift for
						<span className='text-gold-300 block'>
							Food Enthusiasts
						</span>
					</h2>
					<p className='text-xl text-stone-200 mb-8 font-body'>
						Complete authentic Indonesian sambal experience
						with beautiful presentation and recipe guidance
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
						<Link href='/shop'>
							<Button
								variant='primary'
								size='lg'
								className='font-elegant text-lg px-8 py-4'
							>
								<Gift className='w-5 h-5 mr-2' />
								Order Gift Set - £24.99
							</Button>
						</Link>
						<Link href='/sample-pack-try-first'>
							<Button
								variant='outline'
								size='lg'
								className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 text-lg px-8 py-4'
							>
								Try Sample Pack First
							</Button>
						</Link>
					</div>

					<div className='flex items-center justify-center space-x-6 text-burgundy-100'>
						<div className='flex items-center space-x-2'>
							<Truck className='w-5 h-5' />
							<span className='font-body'>
								Free UK delivery over £20
							</span>
						</div>
						<div className='flex items-center space-x-2'>
							<Shield className='w-5 h-5' />
							<span className='font-body'>
								30-day satisfaction guarantee
							</span>
						</div>
						<div className='flex items-center space-x-2'>
							<Gift className='w-5 h-5' />
							<span className='font-body'>
								Personal message cards
							</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
