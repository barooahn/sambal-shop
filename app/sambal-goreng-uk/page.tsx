import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FAQSchema from "@/components/seo/FAQSchema";
import ProductSchema from "@/components/seo/ProductSchema";
import ComparisonTable from "@/components/seo/ComparisonTable";
import StarRating from "@/components/ui/StarRating";
import CustomerReviews from "@/components/ui/CustomerReviews";
import {
	ChefHat,
	Truck,
	Clock,
	MapPin,
	Heart,
	Flame,
	Leaf,
	Utensils,
	Zap,
	Shield,
} from "lucide-react";
import TrustIndicators from "@/components/ui/TrustIndicators";

export const metadata = {
	title: "Sambal Goreng UK | Traditional Sweet & Spicy Chili",
	description:
		"Authentic sambal goreng - traditional Indonesian sweet & spicy chili paste. Made by Chef Yossie using ancestral Java recipes. Free UK delivery.",
	keywords:
		"authentic sambal goreng UK, traditional Indonesian fried chili paste, sweet spicy sambal, Chef Yossie recipe, Javanese sambal goreng, nasi goreng sauce, Indonesian fried chili, sambal goreng delivery UK, traditional Indonesian condiments, authentic Javanese cooking",
	openGraph: {
		title: "Authentic Sambal Goreng UK | Traditional Fried Indonesian Chili Paste",
		description:
			"Traditional Indonesian sambal goreng - sweet & spicy fried chili paste by Chef Yossie. Perfect for nasi goreng and authentic Indonesian cooking.",
		type: "website",
		images: [
			{
				url: "https://spiceislandindonesia.com/images/sambal-goreng.webp",
				width: 400,
				height: 400,
				alt: "Authentic Indonesian Sambal Goreng - Sweet & Spicy Fried Chili Paste by Chef Yossie",
			},
		],
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/sambal-goreng-uk",
	},
};

export default function SambalGorengUKPage() {
	// FAQ data for AI search optimization
	const faqData = [
		{
			question: "What is sambal goreng?",
			answer: "Sambal goreng is a traditional Indonesian fried chili paste that combines fresh chilies with aromatic spices, palm sugar, and tamarind. Unlike raw sambals, it's slowly cooked until caramelized, creating complex sweet-spicy flavors with deep umami notes. 'Goreng' means 'fried' in Indonesian, referring to the traditional cooking method that develops its signature taste.",
		},
		{
			question: "How is sambal goreng different from other sambals?",
			answer: "Sambal goreng is cooked/fried while sambal oelek is raw. It's sweeter than most sambals due to palm sugar, has deeper complexity from slow cooking, and contains more aromatic spices. The texture is thicker and more paste-like, making it perfect as a cooking ingredient rather than just a condiment.",
		},
		{
			question: "What dishes go best with sambal goreng?",
			answer: "Sambal goreng is essential for authentic nasi goreng (Indonesian fried rice), perfect with grilled meats, satay, and roasted vegetables. It's also excellent mixed into stir-fries, as a marinade base, or dolloped onto rice dishes. The sweet-spicy profile complements both Indonesian and fusion cooking.",
		},
		{
			question: "How spicy is sambal goreng?",
			answer: "Sambal goreng has moderate heat (8,000-15,000 SHU) - spicier than sriracha but milder than sambal oelek. The palm sugar and slow cooking mellow the heat while adding complexity. It provides warmth rather than intense burn, making it accessible to more palates while still delivering authentic Indonesian flavor.",
		},
		{
			question: "Can I cook with sambal goreng?",
			answer: "Absolutely! Sambal goreng is designed for cooking. Use it as a stir-fry base, marinade ingredient, or sauce component. Add 1-2 tsp to fried rice, mix with coconut milk for curries, or use as a glaze for grilled proteins. It won't burn as easily as raw sambals due to its pre-cooked nature.",
		},
		{
			question: "Where can I buy authentic sambal goreng in the UK?",
			answer: "We deliver authentic sambal goreng throughout the UK, made by Chef Yossie using traditional Javanese family recipes with real palm sugar and tamarind. Our sambal goreng is slowly cooked using ancestral methods - not mass-produced. Free UK delivery on orders over £20.",
		},
	];

	// Product data for enhanced schema
	const productData = {
		name: "Authentic Indonesian Sambal Goreng",
		description:
			"Traditional Indonesian fried chili paste made with palm sugar, tamarind, and aromatic spices. Slowly cooked by Chef Yossie using ancestral Javanese recipes.",
		brand: "Spice Island Indonesia",
		category: "Condiments & Sauces",
		image: "https://spiceislandindonesia.com/images/sambal-goreng.webp",
		offers: [
			{
				name: "Sambal Goreng 185g",
				description:
					"Sweet-spicy fried chili paste - the heart of Indonesian cooking",
				price: "8.99",
				priceCurrency: "GBP",
				availability: "https://schema.org/InStock",
				sku: "SII-SG-185G",
				url: "https://spiceislandindonesia.com/sambal-goreng-uk",
				priceValidUntil: "2026-12-31",
				shippingDetails: {
					"@type": "OfferShippingDetails",
					shippingRate: {
						"@type": "MonetaryAmount",
						currency: "GBP",
						value: "3.49"
					},
					shippingDestination: {
						"@type": "DefinedRegion",
						addressCountry: "GB"
					},
					deliveryTime: {
						"@type": "ShippingDeliveryTime",
						handlingTime: {
							"@type": "QuantitativeValue",
							minValue: 1,
							maxValue: 2,
							unitCode: "DAY"
						},
						transitTime: {
							"@type": "QuantitativeValue",
							minValue: 1,
							maxValue: 3,
							unitCode: "DAY"
						}
					}
				},
				hasMerchantReturnPolicy: {
					"@type": "MerchantReturnPolicy",
					returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
					merchandiseReturnDays: 30,
					returnMethod: "https://schema.org/ReturnByMail",
					returnFees: "https://schema.org/ReturnShippingFees",
					returnShippingFeesAmount: {
						"@type": "MonetaryAmount",
						currency: "GBP",
						value: "3.49"
					}
				},
			},
		],
		aggregateRating: {
			ratingValue: 4.8,
			reviewCount: 89,
			bestRating: 5,
			worstRating: 1,
		},
		reviews: [
			{
				author: "Michael R.",
				rating: 5,
				reviewBody:
					"Perfect for nasi goreng! The sweet-spicy balance is incredible - tastes exactly like what I had in Jakarta. Finally authentic Indonesian flavors in the UK.",
				datePublished: "2024-01-20",
				location: "London",
			},
			{
				author: "Lisa T.",
				rating: 5,
				reviewBody:
					"This sambal goreng is a game-changer. The complexity of flavors is amazing - sweet, spicy, umami all in perfect harmony. My Indonesian friends were impressed!",
				datePublished: "2024-01-15",
				location: "Manchester",
			},
			{
				author: "David K.",
				rating: 4,
				reviewBody:
					"Excellent quality and authentic taste. Less spicy than I expected but the flavor depth makes up for it. Great for cooking and as a condiment.",
				datePublished: "2024-01-10",
				location: "Birmingham",
			},
		],
		additionalProperties: {
			spiceLevel: "Medium (8,000-15,000 SHU)",
			ingredients: [
				"Red Chilies",
				"Palm Sugar",
				"Tamarind",
				"Shallots",
				"Garlic",
				"Galangal",
				"Candlenuts",
				"Salt",
			],
			dietaryInfo: [
				"Gluten-Free",
				"Vegan",
				"No Artificial Preservatives",
			],
			origin: "Java, Indonesia",
			cookingMethod: "Slow-fried traditional method",
			shelfLife:
				"2 years unopened, 8 weeks refrigerated after opening",
		},
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100'>
			{/* Floating Try First Banner */}
			<div className='fixed top-26 right-4 z-50 hidden lg:block'>
				<div className='bg-neutral-900 text-white px-4 py-3 rounded-lg shadow-2xl border border-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 max-w-xs'>
					<Link href='/sample-pack-try-first' className='block'>
						<div className='flex items-center space-x-3'>
							<div className='text-2xl'>🎯</div>
							<div>
								<div className='font-bold text-sm'>
									Try First!
								</div>
								<div className='text-xs opacity-90'>
									Sample Pack £4.99
								</div>
								<div className='text-xs opacity-75'>
									2 sample jars included
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>

			<FAQSchema
				faqs={faqData}
				pageTitle='Sambal Goreng UK - Frequently Asked Questions'
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

			{/* Sticky purchase bar (mobile) */}
			<div className='fixed bottom-0 inset-x-0 z-40 md:hidden'>
				<div className='mx-4 mb-4 rounded-lg border border-orange-300 bg-white/90 backdrop-blur px-4 py-3 shadow-lg flex items-center justify-between'>
					<div className='text-sm'>
						<p className='font-semibold text-stone-900'>
							Sambal Goreng
						</p>
						<p className='text-neutral-600'>
							£8.99 • Free £20+ shipping
						</p>
					</div>
					<Link href='/shop'>
						<Button
							size='sm'
							className='bg-orange-600 text-white hover:bg-orange-500'
						>
							Buy Now
						</Button>
					</Link>
				</div>
			</div>

			<section className='py-16 sm:py-20 lg:py-14 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-72 h-72 lg:w-80 lg:h-80 bg-amber-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-72 h-72 lg:w-80 lg:h-80 bg-amber-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 items-center'>
						{/* Left side - Content */}
						<div className='text-center lg:text-left'>
							<Badge className='bg-stone-800 text-amber-300 mb-6 px-6 py-3 text-lg font-semibold border border-amber-600/30'>
								<ChefHat className='w-5 h-5 mr-2' />
								Traditional Javanese Recipe
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight font-brand'>
								<span className='text-white block mb-2'>
									Authentic Indonesian
								</span>
								<span className='text-amber-300 block mb-2'>
									Sambal Goreng UK
								</span>
								<span className='text-amber-200 text-2xl sm:text-3xl lg:text-3xl font-script italic'>
									Sweet & Spicy Fried Chili Paste
								</span>
							</h1>

							<div className='space-y-4 mb-6 max-w-2xl mx-auto lg:mx-0'>
								<p className='text-lg sm:text-xl text-amber-200 leading-relaxed font-body'>
									Experience the{" "}
									<strong className='text-orange-100'>
										soul of Indonesian cooking
									</strong>{" "}
									with our traditional sambal goreng
									- slowly fried until caramelized
									perfection.
								</p>

								<p className='text-lg text-amber-300 leading-relaxed font-body'>
									Made with{" "}
									<em>
										real palm sugar, tamarind, and
										aromatic spices
									</em>{" "}
									using Chef Yossie&apos;s ancestral
									Javanese recipe. Sweet meets spicy
									in perfect harmony.
								</p>
							</div>

							{/* Customer Rating */}
							<div className='flex justify-center lg:justify-start mb-6'>
								<div className='bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-orange-300/30'>
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
										className='text-amber-200'
									/>
								</div>
							</div>

							{/* Key Features */}
							<div className='grid sm:grid-cols-2 gap-2 mb-4'>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center'>
										<Flame className='w-4 h-4 text-stone-900' />
									</div>
									<span className='text-amber-200 font-medium font-elegant'>
										Sweet & Spicy Balance
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center'>
										<Clock className='w-4 h-4 text-stone-900' />
									</div>
									<span className='text-amber-200 font-medium font-elegant'>
										Slow-Cooked Traditional Method
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center'>
										<MapPin className='w-4 h-4 text-stone-900' />
									</div>
									<span className='text-amber-200 font-medium font-elegant'>
										Ancestral Javanese Recipe
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center'>
										<Truck className='w-4 h-4 text-stone-900' />
									</div>
									<span className='text-amber-200 font-medium font-elegant'>
										UK Wide Delivery
									</span>
								</div>
							</div>

							{/* CTA Buttons */}
							<div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start'>
								<Link href='/shop'>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant text-lg px-6 py-3 bg-red-600 hover:bg-red-700'
									>
										Order Sambal Goreng Now -
										£8.99
									</Button>
								</Link>
								<Link href='/shop'>
									<Button
										variant='outline'
										size='lg'
										className='font-elegant border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-stone-900 text-lg px-6 py-3'
									>
										Try Sample First - £3.49
									</Button>
								</Link>
							</div>
						</div>

						{/* Right side - Product Image */}
						<div className='relative mt-8 lg:mt-0'>
							<div className='relative w-full lg:max-w-none mx-auto flex items-center justify-center'>
								<div className='aspect-square rounded-sm overflow-hidden shadow-lg bg-neutral-100 p-6 h-96'>
									<div className='w-full h-full rounded-sm flex items-center justify-center'>
										<Image
											src='/images/optimized/sambal-goreng-lg.webp'
											alt='Authentic Indonesian Sambal Goreng - Sweet & Spicy Fried Chili Paste by Chef Yossie'
											width={500}
											height={500}
											className='w-full h-full object-contain drop-shadow-2xl'
											priority
											sizes='(max-width: 768px) 100vw, 50vw'
										/>
									</div>
								</div>

								{/* Floating badges */}
								<div className='absolute -top-4 -left-4 bg-orange-500 text-stone-900 rounded-full p-4 shadow-luxury animate-float border border-orange-300'>
									<Zap className='w-6 h-6' />
								</div>
								<div className='absolute -bottom-4 -right-4 bg-amber-800 text-amber-300 rounded-full p-4 shadow-luxury animate-float delay-1000 border border-amber-600'>
									<Heart className='w-6 h-6' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Detailed Product Information */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-3 gap-12'>
						{/* Ingredients & Sweet-Spicy Profile */}
						<div className='bg-orange-50 rounded-sm p-8 border border-orange-200'>
							<h3 className='text-2xl font-bold text-stone-900 mb-6 font-brand flex items-center'>
								<Leaf className='w-6 h-6 mr-3 text-orange-600' />
								Sweet-Spicy Ingredients
							</h3>
							<div className='space-y-4 font-body'>
								<div>
									<h4 className='font-semibold text-amber-800 mb-2'>
										Traditional Recipe Includes:
									</h4>
									<ul className='text-neutral-700 space-y-2'>
										<li>
											•{" "}
											<strong>
												Red Bird&apos;s Eye
												Chilies
											</strong>{" "}
											(60%) - Heat foundation
										</li>
										<li>
											•{" "}
											<strong>
												Palm Sugar
											</strong>{" "}
											(15%) - Natural sweetness
										</li>
										<li>
											•{" "}
											<strong>Tamarind</strong>{" "}
											(10%) - Tangy depth
										</li>
										<li>
											•{" "}
											<strong>
												Shallots & Garlic
											</strong>{" "}
											(8%) - Aromatic base
										</li>
										<li>
											•{" "}
											<strong>
												Galangal &
												Candlenuts
											</strong>{" "}
											(5%) - Spice complexity
										</li>
										<li>
											•{" "}
											<strong>Sea Salt</strong>{" "}
											(2%) - Natural
											preservation
										</li>
									</ul>
								</div>
								<div className='border-t border-orange-300 pt-4'>
									<h4 className='font-semibold text-amber-800 mb-2'>
										Flavor Profile:
									</h4>
									<div className='space-y-2 text-sm text-neutral-700'>
										<div className='flex justify-between'>
											<span>Sweetness:</span>
											<div className='w-16 h-2 bg-orange-200 rounded-full'>
												<div className='w-12 h-2 bg-orange-500 rounded-full'></div>
											</div>
										</div>
										<div className='flex justify-between'>
											<span>Heat Level:</span>
											<div className='w-16 h-2 bg-orange-200 rounded-full'>
												<div className='w-10 h-2 bg-orange-600 rounded-full'></div>
											</div>
										</div>
										<div className='flex justify-between'>
											<span>Umami Depth:</span>
											<div className='w-16 h-2 bg-orange-200 rounded-full'>
												<div className='w-14 h-2 bg-orange-700 rounded-full'></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Traditional Cooking Method */}
						<div className='bg-amber-50 rounded-sm p-8 border border-amber-200'>
							<h3 className='text-2xl font-bold text-stone-900 mb-6 font-brand flex items-center'>
								<Clock className='w-6 h-6 mr-3 text-amber-600' />
								Traditional Method
							</h3>
							<div className='space-y-6 font-body'>
								<div>
									<h4 className='font-semibold text-amber-800 mb-3'>
										Slow-Cooking Process:
									</h4>
									<div className='space-y-3 text-sm text-neutral-700'>
										<div className='flex items-start space-x-3'>
											<span className='bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs'>
												1
											</span>
											<p>
												Grind fresh chilies
												and spices using
												traditional stone
												mortar (cobek)
											</p>
										</div>
										<div className='flex items-start space-x-3'>
											<span className='bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs'>
												2
											</span>
											<p>
												Slowly fry paste in
												coconut oil until
												fragrant (45+
												minutes)
											</p>
										</div>
										<div className='flex items-start space-x-3'>
											<span className='bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs'>
												3
											</span>
											<p>
												Add palm sugar and
												tamarind, cook until
												caramelized
											</p>
										</div>
										<div className='flex items-start space-x-3'>
											<span className='bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs'>
												4
											</span>
											<p>
												Continue cooking
												until oils separate
												and paste darkens
											</p>
										</div>
									</div>
								</div>

								<div className='bg-white/70 rounded p-4'>
									<h4 className='font-semibold text-amber-800 mb-2'>
										Why This Matters:
									</h4>
									<p className='text-xs text-neutral-600 leading-relaxed'>
										The slow-cooking process
										develops deep, complex flavors
										impossible to achieve with raw
										sambals. Palm sugar
										caramelizes, spices bloom, and
										chilies mellow into perfect
										balance.
									</p>
								</div>
							</div>
						</div>

						{/* Perfect Usage Guide */}
						<div className='bg-cream-50 rounded-sm p-8 border border-cream-200'>
							<h3 className='text-2xl font-bold text-stone-900 mb-6 font-brand flex items-center'>
								<Utensils className='w-6 h-6 mr-3 text-orange-600' />
								Usage Guide
							</h3>
							<div className='space-y-4 font-body text-neutral-700'>
								<div>
									<h4 className='font-semibold text-amber-800 mb-2'>
										Essential For:
									</h4>
									<ul className='text-sm space-y-1'>
										<li>
											•{" "}
											<strong>
												Nasi Goreng
											</strong>{" "}
											- The authentic base
										</li>
										<li>
											•{" "}
											<strong>
												Fried Rice
											</strong>{" "}
											- Indonesian-style
										</li>
										<li>
											•{" "}
											<strong>
												Grilled Meats
											</strong>{" "}
											- Perfect marinade
										</li>
										<li>
											•{" "}
											<strong>
												Stir-Fries
											</strong>{" "}
											- Add depth & complexity
										</li>
									</ul>
								</div>
								<div>
									<h4 className='font-semibold text-amber-800 mb-2'>
										Serving Suggestions:
									</h4>
									<div className='space-y-2 text-sm'>
										<div className='flex justify-between'>
											<span>Fried Rice:</span>
											<span className='font-semibold'>
												2-3 tsp per portion
											</span>
										</div>
										<div className='flex justify-between'>
											<span>Marinade:</span>
											<span className='font-semibold'>
												1 tbsp + oil & lime
											</span>
										</div>
										<div className='flex justify-between'>
											<span>Stir-fry:</span>
											<span className='font-semibold'>
												1-2 tsp with garlic
											</span>
										</div>
										<div className='flex justify-between'>
											<span>Condiment:</span>
											<span className='font-semibold'>
												1/2 tsp on side
											</span>
										</div>
									</div>
								</div>
								<div className='bg-white/70 rounded p-3'>
									<p className='text-xs text-neutral-600'>
										<strong>Storage:</strong>{" "}
										Refrigerate after opening. The
										oil may separate - simply stir
										before use. Lasts 8 weeks
										refrigerated.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Detailed Sweet-Spicy Profile */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-stone-900 mb-6 font-brand'>
							The Art of
							<span className='text-amber-700 block'>
								Javanese Sweet & Spicy
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body leading-relaxed'>
							Each spoonful of our sambal goreng tells the story of traditional Javanese cooking, where palm sugar balances fiery chilies in perfect harmony.
						</p>
					</div>

					<div className='grid lg:grid-cols-3 gap-12'>
						{/* Sweet-Spicy Balance */}
						<div className='bg-amber-50 rounded-sm p-8 border border-amber-200'>
							<h3 className='text-2xl font-bold text-stone-900 mb-6 font-brand flex items-center'>
								<Utensils className='w-6 h-6 mr-3 text-amber-600' />
								Sweet-Spicy Harmony
							</h3>
							<div className='space-y-6 font-body'>
								<div>
									<h4 className='font-semibold text-amber-800 mb-3'>
										Traditional <span className='text-amber-700 font-medium'>Gula Kelapa</span> (Palm Sugar) Blend:
									</h4>
									<div className='space-y-3'>
										<div className='flex items-start space-x-3'>
											<span className='bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5'>
												S
											</span>
											<div>
												<p className='font-semibold text-amber-800'>
													<span className='text-amber-700 font-medium'>Gula Kelapa</span> (35%)
												</p>
												<p className='text-xs text-neutral-600'>
													Traditional palm sugar - creates deep caramel sweetness
												</p>
											</div>
										</div>
										<div className='flex items-start space-x-3'>
											<span className='bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5'>
												C
											</span>
											<div>
												<p className='font-semibold text-amber-800'>
													<span className='text-red-700 font-medium'>Cabai Merah</span> (25%)
												</p>
												<p className='text-xs text-neutral-600'>
													Fresh red chilies - medium heat foundation
												</p>
											</div>
										</div>
										<div className='flex items-start space-x-3'>
											<span className='bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5'>
												A
											</span>
											<div>
												<p className='font-semibold text-amber-800'>
													Aromatic Spices (20%)
												</p>
												<p className='text-xs text-neutral-600'>
													<span className='text-green-700 font-medium'>Kemiri</span> (candlenuts), shallots, garlic
												</p>
											</div>
										</div>
										<div className='flex items-start space-x-3'>
											<span className='bg-amber-800 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5'>
												T
											</span>
											<div>
												<p className='font-semibold text-amber-800'>
													<span className='text-amber-800 font-medium'>Asam Jawa</span> (Tamarind) (20%)
												</p>
												<p className='text-xs text-neutral-600'>
													Tangy balance - traditional Javanese sourness
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className='border-t border-amber-600 pt-4'>
									<h4 className='font-semibold text-amber-800 mb-2'>
										Flavor Profile Balance:
									</h4>
									<div className='space-y-2 text-sm'>
										<div className='flex justify-between items-center'>
											<span>
												Sweet Notes:
											</span>
											<div className='w-20 h-2 bg-amber-200 rounded-full'>
												<div className='w-18 h-2 bg-amber-600 rounded-full'></div>
											</div>
										</div>
										<div className='flex justify-between items-center'>
											<span>
												Spicy Heat:
											</span>
											<div className='w-20 h-2 bg-amber-200 rounded-full'>
												<div className='w-14 h-2 bg-red-600 rounded-full'></div>
											</div>
										</div>
										<div className='flex justify-between items-center'>
											<span>Tangy Complexity:</span>
											<div className='w-20 h-2 bg-amber-200 rounded-full'>
												<div className='w-16 h-2 bg-amber-800 rounded-full'></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Heat & Cooking Method */}
						<div className='bg-orange-50 rounded-sm p-8 border border-orange-200'>
							<h3 className='text-2xl font-bold text-stone-900 mb-6 font-brand flex items-center'>
								<Clock className='w-6 h-6 mr-3 text-orange-600' />
								Traditional Slow-Cook Method
							</h3>
							<div className='space-y-6 font-body'>
								<div>
									<div className='flex justify-between items-center mb-3'>
										<span className='font-semibold text-orange-800'>
											Scoville Rating
										</span>
										<span className='text-2xl font-bold text-orange-900'>
											8,500
										</span>
									</div>
									<div className='w-full bg-cream-200 rounded-full h-3 mb-2'>
										<div
											className='bg-gradient-to-r from-orange-600 to-amber-600 h-3 rounded-full'
											style={{ width: "35%" }}
										></div>
									</div>
									<p className='text-sm text-neutral-600'>
										Mild-medium heat perfectly balanced with palm sugar sweetness
									</p>
								</div>

								<div>
									<h4 className='font-semibold text-orange-800 mb-3'>
										<span className='text-amber-700 font-medium'>Goreng</span> (Frying) Process:
									</h4>
									<div className='space-y-3 text-sm text-neutral-700'>
										<div className='flex items-center space-x-3'>
											<span className='w-2 h-2 bg-orange-600 rounded-full'></span>
											<p>
												<strong>
													Stage 1:
												</strong>{" "}
												Slow-fry aromatics until fragrant (10 mins)
											</p>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='w-2 h-2 bg-amber-600 rounded-full'></span>
											<p>
												<strong>
													Stage 2:
												</strong>{" "}
												Add chilies and fry until darkened (15 mins)
											</p>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='w-2 h-2 bg-amber-800 rounded-full'></span>
											<p>
												<strong>
													Stage 3:
												</strong>{" "}
												Incorporate palm sugar slowly (20 mins total)
											</p>
										</div>
									</div>
								</div>

								<div className='bg-white/70 rounded p-3'>
									<p className='text-xs text-neutral-600'>
										<strong>Chef's Secret:</strong>{" "}
										The slow-frying develops complex caramelized flavors that make this sambal perfect for rich, slow-cooked dishes.
									</p>
								</div>
							</div>
						</div>

						{/* Usage & Pairing */}
						<div className='bg-stone-50 rounded-sm p-8 border border-stone-200'>
							<h3 className='text-2xl font-bold text-stone-900 mb-6 font-brand flex items-center'>
								<Heart className='w-6 h-6 mr-3 text-stone-600' />
								Perfect Pairings
							</h3>
							<div className='space-y-6 font-body text-neutral-700'>
								<div>
									<h4 className='font-semibold text-stone-800 mb-3'>
										Signature Dishes:
									</h4>
									<ul className='space-y-2 text-sm'>
										<li className='flex items-center space-x-2'>
											<span className='w-1.5 h-1.5 bg-amber-600 rounded-full'></span>
											<span>
												<strong>
													<span className='text-amber-700 font-medium'>Nasi Goreng</span> (Fried Rice)
												</strong>{" "}
												- Traditional Indonesian favorite
											</span>
										</li>
										<li className='flex items-center space-x-2'>
											<span className='w-1.5 h-1.5 bg-amber-600 rounded-full'></span>
											<span>
												<strong>
													<span className='text-amber-700 font-medium'>Rendang</span> Beef Curry
												</strong>{" "}
												- Authentic spice base
											</span>
										</li>
										<li className='flex items-center space-x-2'>
											<span className='w-1.5 h-1.5 bg-amber-600 rounded-full'></span>
											<span>
												<strong>
													Grilled Satay
												</strong>{" "}
												- Sweet-spicy glaze
											</span>
										</li>
										<li className='flex items-center space-x-2'>
											<span className='w-1.5 h-1.5 bg-amber-600 rounded-full'></span>
											<span>
												<strong>
													<span className='text-amber-700 font-medium'>Ayam Bakar</span> (Grilled Chicken)
												</strong>{" "}
												- Caramelized coating
											</span>
										</li>
									</ul>
								</div>

								<div>
									<h4 className='font-semibold text-stone-800 mb-3'>
										Usage Amounts:
									</h4>
									<div className='space-y-2 text-sm'>
										<div className='flex justify-between'>
											<span>
												Fried rice base:
											</span>
											<span className='font-semibold'>
												2-3 tbsp per portion
											</span>
										</div>
										<div className='flex justify-between'>
											<span>
												Marinade blend:
											</span>
											<span className='font-semibold'>
												1 tbsp + soy sauce
											</span>
										</div>
										<div className='flex justify-between'>
											<span>Curry base:</span>
											<span className='font-semibold'>
												2 tbsp + coconut milk
											</span>
										</div>
									</div>
								</div>

								<div className='bg-white/70 rounded p-3'>
									<p className='text-xs text-neutral-600'>
										<strong>
											UK Kitchen Tip:
										</strong>{" "}
										Perfect with Sunday roast potatoes or as a glaze for BBQ chicken. The sweetness pairs beautifully with British comfort foods.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Recipe Spotlight */}
			<section className='py-24 bg-amber-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='bg-gradient-to-r from-stone-900 to-stone-800 rounded-sm p-12 text-white'>
						<div className='grid lg:grid-cols-2 gap-8 items-center'>
							<div>
								<h3 className='text-3xl font-bold mb-6 font-brand text-amber-200'>
									Chef Yossie&apos;s Family Recipe:
									<span className='block text-white text-2xl'>
										Traditional <span className='text-amber-300 font-medium'>Nasi Goreng</span> Fried Rice
									</span>
								</h3>
								<div className='space-y-4 font-body'>
									<p className='text-amber-200 leading-relaxed'>
										This recipe has been passed down through three generations in Chef Yossie&apos;s family. The secret is using day-old rice and letting the sambal goreng caramelize slowly.
									</p>
									<div className='grid grid-cols-2 gap-4 text-sm'>
										<div>
											<strong className='text-amber-300'>
												Prep Time:
											</strong>
											<p>15 minutes</p>
										</div>
										<div>
											<strong className='text-amber-300'>
												Cook Time:
											</strong>
											<p>12 minutes</p>
										</div>
										<div>
											<strong className='text-amber-300'>
												Serves:
											</strong>
											<p>4 people</p>
										</div>
										<div>
											<strong className='text-amber-300'>
												Difficulty:
											</strong>
											<p>Easy</p>
										</div>
									</div>
								</div>
							</div>
							<div className='bg-white/10 rounded-sm p-6'>
								<h4 className='font-bold text-amber-200 mb-4'>
									Key Ingredients:
								</h4>
								<ul className='space-y-2 text-sm font-body'>
									<li>
										•{" "}
										<strong>
											3-4 tbsp Sambal Goreng
										</strong>{" "}
										(the star ingredient!)
									</li>
									<li>
										• 4 cups day-old jasmine rice
									</li>
									<li>• 3 eggs, beaten</li>
									<li>
										• 200g chicken/prawns (optional)
									</li>
									<li>
										• 3 spring onions, chopped
									</li>
									<li>
										• 2 tbsp <span className='text-amber-300 font-medium'>kecap manis</span> (sweet soy sauce)
									</li>
									<li>
										• <span className='text-green-300 font-medium'>Kerupuk</span> (prawn crackers) to serve
									</li>
								</ul>
								<div className='mt-6'>
									<Link href='/recipes/sambal-fried-rice'>
										<Button
											variant='primary'
											size='sm'
											className='bg-red-600 text-white hover:bg-red-700 font-elegant'
										>
											Get Full Recipe →
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='py-24 bg-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h3 className='text-4xl font-bold text-stone-900 mb-6 font-brand'>
							Frequently Asked Questions
							<span className='text-amber-700 block text-2xl'>
								About Sambal Goreng
							</span>
						</h3>
						<p className='text-xl text-neutral-600 font-body'>
							Everything you need to know about this sweet & spicy Indonesian classic
						</p>
					</div>

					<div className='space-y-8'>
						<div className='border border-stone-200 rounded-lg p-6'>
							<h3 className='text-lg font-bold text-stone-900 mb-3 font-brand'>
								What makes sambal goreng different from other sambals?
							</h3>
							<p className='text-neutral-700 font-body leading-relaxed'>
								Sambal goreng is unique because it&apos;s slow-fried (<span className='text-amber-700 font-medium'>goreng</span>) with traditional <span className='text-amber-700 font-medium'>gula kelapa</span> (palm sugar), creating a perfect sweet-spicy balance. Unlike raw sambals, the frying process caramelizes the ingredients, developing deep, complex flavors that make it ideal for cooking rather than just as a condiment.
							</p>
						</div>

						<div className='border border-stone-200 rounded-lg p-6'>
							<h3 className='text-lg font-bold text-stone-900 mb-3 font-brand'>
								How spicy is sambal goreng compared to other sambals?
							</h3>
							<p className='text-neutral-700 font-body leading-relaxed'>
								At 8,500 SHU, sambal goreng is milder than sambal oelek but more complex. The palm sugar balances the heat, making it perfect for those who want authentic Indonesian flavors without overwhelming spice. It&apos;s ideal for building heat gradually in dishes like <span className='text-amber-700 font-medium'>nasi goreng</span> and curries.
							</p>
						</div>

						<div className='border border-stone-200 rounded-lg p-6'>
							<h3 className='text-lg font-bold text-stone-900 mb-3 font-brand'>
								What&apos;s the best way to use sambal goreng in cooking?
							</h3>
							<p className='text-neutral-700 font-body leading-relaxed'>
								Sambal goreng excels as a cooking base rather than a finishing sauce. Use 2-3 tablespoons to start your fried rice, add to marinades for grilled meats, or blend with coconut milk for instant curry bases. The caramelized flavors develop beautifully when cooked, making every dish taste authentically Indonesian.
							</p>
						</div>

						<div className='border border-stone-200 rounded-lg p-6'>
							<h3 className='text-lg font-bold text-stone-900 mb-3 font-brand'>
								How long does sambal goreng last and how should I store it?
							</h3>
							<p className='text-neutral-700 font-body leading-relaxed'>
								Unopened, sambal goreng lasts 2 years. Once opened, refrigerate and use within 8 weeks. The natural oils and palm sugar help preserve it, and the flavors actually develop over time. Always use a clean spoon to prevent contamination, and store in the original jar for best results.
							</p>
						</div>

						<div className='border border-stone-200 rounded-lg p-6'>
							<h3 className='text-lg font-bold text-stone-900 mb-3 font-brand'>
								Is your sambal goreng suitable for vegetarians and vegans?
							</h3>
							<p className='text-neutral-700 font-body leading-relaxed'>
								Yes! Our sambal goreng is completely plant-based, made with traditional ingredients: chilies, palm sugar, <span className='text-amber-700 font-medium'>kemiri</span> (candlenuts), shallots, garlic, tamarind, and salt. It&apos;s gluten-free, contains no artificial preservatives, and follows the authentic Javanese recipe that Chef Yossie&apos;s grandmother used.
							</p>
						</div>

						<div className='border border-stone-200 rounded-lg p-6'>
							<h3 className='text-lg font-bold text-stone-900 mb-3 font-brand'>
								Can I use sambal goreng in non-Indonesian dishes?
							</h3>
							<p className='text-neutral-700 font-body leading-relaxed'>
								Absolutely! The sweet-spicy profile works beautifully in fusion cooking. Try it as a glaze for BBQ chicken, mixed into burger patties, or as a base for pizza sauce. British customers love it with roast potatoes and as a marinade for Sunday roasts. The caramelized sweetness complements many Western dishes.
							</p>
						</div>
					</div>

				</div>
			</section>

			{/* Final CTA Section */}
			<section className='py-24 bg-gradient-to-r from-stone-900 to-stone-800 text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h3 className='text-4xl sm:text-5xl font-bold mb-6 font-brand'>
						Bring Authentic Indonesia
						<span className='text-amber-300 block'>
							To Your Kitchen Today
						</span>
					</h3>
					<p className='text-xl text-amber-200 mb-8 font-body'>
						Experience the traditional sweet-spicy harmony that has made Javanese cuisine beloved worldwide
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
						<Link href='/shop'>
							<Button
								variant='primary'
								size='lg'
								className='font-elegant text-lg px-8 py-4 bg-red-600 hover:bg-red-700'
							>
								Order Sambal Goreng - £8.99
							</Button>
						</Link>
						<Link href='/sample-pack-try-first'>
							<Button
								variant='outline'
								size='lg'
								className='font-elegant border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-stone-900 text-lg px-8 py-4'
							>
								Try Sample Pack - £3.49
							</Button>
						</Link>
					</div>

					<div className='flex items-center justify-center space-x-6 text-amber-200'>
						<div className='flex items-center space-x-2'>
							<Truck className='w-5 h-5' />
							<span className='text-sm'>Free UK Delivery £20+</span>
						</div>
						<div className='flex items-center space-x-2'>
							<Shield className='w-5 h-5' />
							<span className='text-sm'>Authentic Traditional Recipe</span>
						</div>
						<div className='flex items-center space-x-2'>
							<Heart className='w-5 h-5' />
							<span className='text-sm'>Made by Chef Yossie</span>
						</div>
					</div>
				</div>
			</section>

			{/* Trust Indicators */}
			<section className='py-12 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-8'>
						<h3 className='text-2xl font-bold text-stone-900 mb-4 font-brand'>
							Shop with Confidence
						</h3>
						<p className='text-neutral-600 font-body'>
							Your satisfaction and security are our top
							priorities
						</p>
					</div>
					<TrustIndicators
						layout='compact'
						className='justify-center'
					/>
				</div>
			</section>

			{/* Customer Reviews Section */}
			<section className='py-16 bg-cream-50'>
				<div className='container mx-auto px-4'>
					<CustomerReviews
						reviews={productData.reviews}
						title='What Our Customers Say About Sambal Goreng'
					/>
				</div>
			</section>
			{/* Comparison Section - AI Search Optimized */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto'>
						<h3 className='text-3xl lg:text-4xl font-bold text-stone-900 mb-4 text-center font-brand'>
							Sambal Goreng vs Sriracha - Complete Comparison
						</h3>
						<p className='text-xl text-gray-600 text-center mb-12 font-body'>
							See how traditional Indonesian sambal goreng compares to popular Western sweet chili sauces
						</p>

						<ComparisonTable
							title='Sambal Goreng vs Sriracha - Sweet Heat Comparison'
							items={[
								{
									category: "Heat Level (Scoville)",
									sambal: "8,000-15,000 SHU",
									hpSauce: "1,000-2,500 SHU",
									winner: "sambal",
									explanation:
										"Sambal goreng provides significantly more heat with complex sweetness",
								},
								{
									category: "Ingredients",
									sambal: "Chilies, palm sugar, tamarind, galangal, candlenuts",
									hpSauce: "Chilies, sugar, garlic, vinegar, preservatives",
									winner: "sambal",
									explanation:
										"Traditional Indonesian spices vs artificial additives",
								},
								{
									category: "Sweetness Type",
									sambal: "Natural palm sugar (caramelized)",
									hpSauce: "Regular sugar (processed)",
									winner: "sambal",
									explanation:
										"Palm sugar creates deeper, more complex sweetness",
								},
								{
									category: "Texture",
									sambal: "Thick paste, rich mouthfeel",
									hpSauce: "Smooth, thin consistency",
									winner: "sambal",
									explanation:
										"Better for cooking applications and marinades",
								},
								{
									category: "Cooking Method",
									sambal: "Slow-fried traditional method",
									hpSauce: "Cold-processed",
									winner: "sambal",
									explanation:
										"Slow-cooking develops complex caramelized flavors",
								},
								{
									category: "Cultural Authenticity",
									sambal: "Traditional Javanese recipe",
									hpSauce: "Thai-American fusion",
									winner: "sambal",
									explanation:
										"Authentic Indonesian culinary heritage",
								},
								{
									category: "Cooking Versatility",
									sambal: "Excellent base for curries, fried rice",
									hpSauce: "Better as condiment",
									winner: "sambal",
									explanation:
										"Perfect for nasi goreng and traditional Indonesian dishes",
								},
								{
									category: "Availability",
									sambal: "Specialty/authentic sources",
									hpSauce: "Widely available",
									winner: "context",
									explanation:
										"Depends on access to authentic Indonesian products",
								},
							]}
							summary='Sambal Goreng offers superior heat complexity, authentic palm sugar sweetness, and traditional cooking versatility, while Sriracha provides wider availability. For authentic Indonesian sweet-spicy cooking and deeper flavor complexity, sambal goreng is the clear winner.'
						/>

						<div className='mt-12 bg-white rounded-lg p-8 border border-amber-200'>
							<h3 className='text-2xl font-bold text-stone-900 mb-4 font-brand'>
								Why Choose Authentic Sambal Goreng?
							</h3>
							<div className='grid md:grid-cols-2 gap-6'>
								<div>
									<h4 className='font-semibold text-amber-800 mb-2'>
										For Indonesian Cooking:
									</h4>
									<ul className='text-gray-700 space-y-1 text-sm'>
										<li>• Essential for authentic nasi goreng (fried rice)</li>
										<li>• Perfect base for Indonesian curries and rendang</li>
										<li>• Traditional palm sugar creates authentic sweetness</li>
										<li>• Slow-cooked method develops complex umami</li>
									</ul>
								</div>
								<div>
									<h4 className='font-semibold text-amber-800 mb-2'>
										For Sweet-Heat Lovers:
									</h4>
									<ul className='text-gray-700 space-y-1 text-sm'>
										<li>• More heat than sriracha with natural sweetness</li>
										<li>• Caramelized palm sugar vs processed sugar</li>
										<li>• Rich paste texture perfect for marinades</li>
										<li>• Traditional spices add aromatic complexity</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}
