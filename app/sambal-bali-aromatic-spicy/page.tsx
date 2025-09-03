import Image from "next/image";
import Link from "next/link";
import { getInternalUrls } from "@/lib/url-utils";
import { Button } from "@/components/ui/simple-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import FAQSchema from "@/components/seo/FAQSchema";
import EntityMarkup from "@/components/seo/EntityMarkup";
import ComparisonTable from "@/components/seo/ComparisonTable";
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
} from "@/components/ui/icons";

export const metadata = {
	title: "Sambal Bali UK | Aromatic Indonesian Chili Paste",
	description:
		"Authentic sambal Bali with aromatic galangal, lemongrass & kaffir lime. Made by Chef Yossie using traditional Balinese recipes. Free UK delivery.",
	keywords:
		"authentic sambal bali UK, traditional Balinese chili paste, aromatic sambal galangal lemongrass, Chef Yossie sambal bali, Indonesian aromatic condiments UK, traditional Balinese cooking, sambal bali delivery UK, kaffir lime leaves sambal, sophisticated Indonesian spice paste, authentic Balinese flavors UK",
	openGraph: {
		title: "Authentic Sambal Bali UK | Aromatic Indonesian Chili Paste",
		description:
			"Traditional Balinese sambal with aromatic galangal, lemongrass & kaffir lime. Made by Chef Yossie using ancestral recipes.",
		type: "website",
		images: [
			{
				url: "https://www.spiceislandindonesia.com/images/sambal-bali.webp",
				width: 400,
				height: 400,
				alt: "Authentic Indonesian Sambal Bali 185g - Aromatic Chili Paste with Galangal & Lemongrass by Chef Yossie",
			},
		],
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/sambal-bali-aromatic-spicy",
	},
};

export default function SambalBaliAromaticSpicyPage() {
	const urls = getInternalUrls();

	// FAQ data for AI search optimization
	const faqData = [
		{
			question: "What is sambal bali?",
			answer: "Sambal Bali is an aromatic Indonesian chili paste from Bali that combines fresh chilies with traditional spices like galangal, lemongrass, and kaffir lime leaves. Unlike simple chili pastes, Sambal Bali offers complex layers of flavor - it's spicy, aromatic, and slightly sweet. This traditional recipe from Bali creates sophisticated heat that enhances rather than overwhelms dishes.",
		},
		{
			question: "What makes sambal bali different from other sambals?",
			answer: "Sambal Bali contains aromatic spices (galangal, lemongrass, kaffir lime) that create complex flavor layers, while sambal oelek is pure chili paste. Sambal Bali is more aromatic and sophisticated, perfect for grilled meats and marinades. It has restaurant-quality complexity with floral and citrus notes from traditional Balinese spices.",
		},
		{
			question:
				"What are the key ingredients in authentic sambal bali?",
			answer: "Authentic sambal bali contains red chilies, galangal (Indonesian ginger), lemongrass, kaffir lime leaves, shallots, garlic, candlenuts, palm sugar, tamarind, and salt. Each spice contributes unique aromatics - galangal adds warmth, lemongrass brings citrus notes, and kaffir lime provides floral complexity.",
		},
		{
			question: "How do I use sambal bali in cooking?",
			answer: "Sambal Bali excels as a marinade base (mix with oil and soy sauce), stir-fry ingredient, or finishing sauce. Use 1-2 tsp in recipes. It's perfect for satay marinades, grilled seafood, beef rendang, and roasted vegetables. The aromatic spices make it ideal for slow-cooked dishes where complex flavors can develop.",
		},
		{
			question: "Is sambal bali suitable for beginners?",
			answer: "Yes! Sambal Bali has moderate heat (10,000-18,000 SHU) with aromatic complexity that makes it more approachable than pure chili pastes. The galangal and lemongrass create sophisticated flavors that appeal to adventurous food lovers. Start with 1/2 tsp and adjust to taste.",
		},
		{
			question: "Where can I buy authentic sambal bali in the UK?",
			answer: "We deliver authentic Sambal Bali throughout the UK, made by Chef Yossie using traditional Balinese family recipes with real galangal, lemongrass, and kaffir lime leaves - not artificial flavors. Our sambal contains fresh aromatics ground using traditional methods. Free UK delivery on orders over £20.",
		},
	];

	// Product data for enhanced schema
	const productData = {
		name: "Authentic Indonesian Sambal Bali",
		description:
			"Aromatic Indonesian chili paste with galangal, lemongrass, and kaffir lime leaves. Made by Chef Yossie using traditional Balinese recipes for sophisticated heat and complex flavor.",
		brand: "Spice Island Indonesia",
		category: "Condiments & Sauces",
		image: "https://www.spiceislandindonesia.com/images/sambal-bali.webp",
		offers: [
			{
				name: "Sambal Bali 185g",
				description:
					"Aromatic chili paste with sophisticated spice complexity",
				price: "8.49",
				priceCurrency: "GBP",
				availability: "https://schema.org/InStock",
				sku: "SII-SB-185G",
				url: "https://www.spiceislandindonesia.com/sambal-bali-aromatic-spicy",
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
			ratingValue: 4.9,
			reviewCount: 94,
			bestRating: 5,
			worstRating: 1,
		},
		reviews: [
			{
				author: "Emma S.",
				rating: 5,
				reviewBody:
					"The aromatics in this sambal are incredible! Galangal and lemongrass create such depth. Perfect for marinades and adds restaurant-quality complexity to everything.",
				datePublished: "2024-01-25",
				location: "London",
			},
			{
				author: "James P.",
				rating: 5,
				reviewBody:
					"Finally found authentic sambal bali in the UK! The kaffir lime really makes it special. My Balinese wife approves - tastes just like home.",
				datePublished: "2024-01-18",
				location: "Edinburgh",
			},
			{
				author: "Rachel M.",
				rating: 4,
				reviewBody:
					"Beautiful balance of heat and aromatics. More sophisticated than other sambals I've tried. Perfect for grilled chicken and seafood dishes.",
				datePublished: "2024-01-12",
				location: "Manchester",
			},
		],
		additionalProperties: {
			spiceLevel: "Medium-Hot (10,000-18,000 SHU)",
			ingredients: [
				"Red Chilies",
				"Galangal",
				"Lemongrass",
				"Kaffir Lime Leaves",
				"Shallots",
				"Garlic",
				"Candlenuts",
				"Palm Sugar",
				"Tamarind",
				"Salt",
			],
			dietaryInfo: [
				"Gluten-Free",
				"Vegan",
				"No Artificial Preservatives",
				"Traditional Recipe",
			],
			origin: "Bali, Indonesia",
			aromaticProfile: "Citrus, Floral, Warm Spices",
			shelfLife:
				"2 years unopened, 8 weeks refrigerated after opening",
		},
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100'>
			<FAQSchema
				faqs={faqData}
				pageTitle='Sambal Bali Aromatic Spicy - Frequently Asked Questions'
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
			<section className='py-16 sm:py-20 lg:py-14 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-72 h-72 lg:w-80 lg:h-80 bg-amber-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-72 h-72 lg:w-80 lg:h-80 bg-amber-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 items-center'>
						{/* Left side - Content */}
						<div className='text-center lg:text-left'>
							<Badge className='bg-stone-800 text-amber-300 mb-6 px-6 py-3 text-lg font-semibold border border-amber-600/30'>
								<Sparkles className='w-5 h-5 mr-2' />
								Authentic Balinese Recipe
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight font-brand'>
								<span className='text-white block mb-2'>
									Authentic Indonesian
								</span>
								<span className='text-slate-300 block mb-2'>
									Sambal Bali UK
								</span>
								<span className='text-white text-2xl sm:text-3xl lg:text-3xl font-script italic'>
									Aromatic Spicy Chili Paste
								</span>
							</h1>

							<div className='space-y-4 mb-6 max-w-2xl mx-auto lg:mx-0'>
								<p className='text-lg sm:text-xl text-white leading-relaxed font-body'>
									Discover the{" "}
									<strong className='text-slate-100'>
										sophisticated aromatics
									</strong>{" "}
									of authentic sambal Bali - where
									galangal, lemongrass, and kaffir
									lime create complex layers of
									flavor.
								</p>

								<p className='text-lg text-slate-300 leading-relaxed font-body'>
									Made with{" "}
									<em>
										real{" "}
										<span className='text-amber-300 font-medium'>
											lengkuas
										</span>{" "}
										(galangal),{" "}
										<span className='text-green-300 font-medium'>
											serai
										</span>{" "}
										(lemongrass), and
										<span className='text-lime-300 font-medium'>
											{" "}
											daun jeruk
										</span>{" "}
										(kaffir lime leaves)
									</em>{" "}
									by Chef Yossie using ancestral
									Balinese techniques. This
									isn&apos;t just heat - it&apos;s
									culinary sophistication in every
									spoonful.
								</p>
							</div>

							{/* Customer Rating */}
							<div className='flex justify-center lg:justify-start mb-6'>
								<div className='bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-slate-600/30'>
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
										className='text-yellow-400'
									/>
								</div>
							</div>

							{/* Key Features */}
							<div className='grid sm:grid-cols-2 gap-2 mb-4'>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center'>
										<Sparkles className='w-4 h-4 text-white' />
									</div>
									<span className='text-white font-medium font-elegant'>
										Complex Aromatics
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center'>
										<Leaf className='w-4 h-4 text-white' />
									</div>
									<span className='text-white font-medium font-elegant'>
										Fresh Galangal & Lemongrass
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center'>
										<MapPin className='w-4 h-4 text-white' />
									</div>
									<span className='text-white font-medium font-elegant'>
										Traditional Balinese Recipe
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center'>
										<Truck className='w-4 h-4 text-white' />
									</div>
									<span className='text-white font-medium font-elegant'>
										UK Wide Delivery
									</span>
								</div>
							</div>

							{/* CTA Buttons */}
							<div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start'>
								<Link href={urls.shop}>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant text-lg px-6 py-3 bg-red-600 hover:bg-red-700 text-white'
									>
										Order Sambal Bali Now - £8.49
									</Button>
								</Link>
								<Link href={urls.shop}>
									<Button
										variant='outline'
										size='lg'
										className='font-elegant border-stone-300 text-stone-300 hover:bg-stone-300 hover:text-stone-900 text-lg px-6 py-3'
									>
										Try Sample First - £3.49
									</Button>
								</Link>
							</div>
						</div>

						{/* Right side - Product Image */}
						<div className='relative'>
							<div className='relative w-full lg:max-w-none mx-auto max-h-[60vh] flex items-center justify-center'>
								<div className='aspect-square rounded-sm overflow-hidden shadow-lg bg-neutral-100 p-6 h-96'>
									<div className='w-full h-full rounded-sm flex items-center justify-center'>
										<Image
											src='/images/optimized/sambal-bali-lg.webp'
											alt='Authentic Indonesian Sambal Bali 185g - Aromatic Chili Paste with Galangal & Lemongrass by Chef Yossie'
											width={500}
											height={500}
											className='w-full h-full object-contain drop-shadow-2xl'
											priority
											sizes='(max-width: 768px) 100vw, 50vw'
										/>
									</div>
								</div>

								{/* Floating badges */}
								<div className='absolute -top-4 -left-4 bg-green-600 text-white rounded-full p-4 shadow-luxury animate-float border border-green-500'>
									<Award className='w-6 h-6' />
								</div>
								<div className='absolute -bottom-4 -right-4 bg-green-800 text-white rounded-full p-4 shadow-luxury animate-float delay-1000 border border-green-700'>
									<Heart className='w-6 h-6' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Detailed Aromatic Profile */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-green-900 mb-6 font-brand'>
							The Art of
							<span className='text-teal-700 block'>
								Balinese Aromatics
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body leading-relaxed'>
							Each spice in our sambal Bali serves a
							purpose, creating layers of complexity that
							transform every dish into a sophisticated
							culinary experience.
						</p>
					</div>

					<div className='grid lg:grid-cols-3 gap-12'>
						{/* Aromatic Ingredients */}
						<div className='bg-teal-50 rounded-sm p-8 border border-teal-200'>
							<h3 className='text-2xl font-bold text-green-900 mb-6 font-brand flex items-center'>
								<Leaf className='w-6 h-6 mr-3 text-green-600' />
								Premium Aromatics
							</h3>
							<div className='space-y-6 font-body'>
								<div>
									<h4 className='font-semibold text-green-800 mb-3'>
										Core Aromatic Blend:
									</h4>
									<div className='space-y-3'>
										<div className='flex items-start space-x-3'>
											<span className='bg-slate-700 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5'>
												G
											</span>
											<div>
												<p className='font-semibold text-green-800'>
													Galangal (20%)
												</p>
												<p className='text-xs text-neutral-600'>
													Warm, citrusy
													Indonesian
													ginger -
													creates depth
												</p>
											</div>
										</div>
										<div className='flex items-start space-x-3'>
											<span className='bg-slate-700 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5'>
												L
											</span>
											<div>
												<p className='font-semibold text-green-800'>
													Lemongrass
													(15%)
												</p>
												<p className='text-xs text-neutral-600'>
													Fresh citrus
													fragrance -
													brightens
													complexity
												</p>
											</div>
										</div>
										<div className='flex items-start space-x-3'>
											<span className='bg-slate-700 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5'>
												K
											</span>
											<div>
												<p className='font-semibold text-green-800'>
													Kaffir Lime
													Leaves (10%)
												</p>
												<p className='text-xs text-neutral-600'>
													Floral citrus
													notes -
													signature
													Balinese touch
												</p>
											</div>
										</div>
										<div className='flex items-start space-x-3'>
											<span className='bg-slate-700 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5'>
												C
											</span>
											<div>
												<p className='font-semibold text-green-800'>
													Red Chilies
													(40%)
												</p>
												<p className='text-xs text-neutral-600'>
													Medium heat
													foundation -
													perfectly
													balanced
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className='border-t border-slate-600 pt-4'>
									<h4 className='font-semibold text-green-800 mb-2'>
										Aromatic Profile:
									</h4>
									<div className='space-y-2 text-sm'>
										<div className='flex justify-between items-center'>
											<span>
												Citrus Notes:
											</span>
											<div className='w-20 h-2 bg-teal-200 rounded-full'>
												<div className='w-16 h-2 bg-slate-700 rounded-full'></div>
											</div>
										</div>
										<div className='flex justify-between items-center'>
											<span>
												Floral Complexity:
											</span>
											<div className='w-20 h-2 bg-teal-200 rounded-full'>
												<div className='w-14 h-2 bg-slate-700 rounded-full'></div>
											</div>
										</div>
										<div className='flex justify-between items-center'>
											<span>Warm Spices:</span>
											<div className='w-20 h-2 bg-teal-200 rounded-full'>
												<div className='w-18 h-2 bg-teal-700 rounded-full'></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Heat & Complexity */}
						<div className='bg-emerald-50 rounded-sm p-8 border border-emerald-200'>
							<h3 className='text-2xl font-bold text-green-900 mb-6 font-brand flex items-center'>
								<Flame className='w-6 h-6 mr-3 text-green-700' />
								Sophisticated Heat
							</h3>
							<div className='space-y-6 font-body'>
								<div>
									<div className='flex justify-between items-center mb-3'>
										<span className='font-semibold text-green-800'>
											Scoville Rating
										</span>
										<span className='text-2xl font-bold text-green-900'>
											14,000
										</span>
									</div>
									<div className='w-full bg-cream-200 rounded-full h-3 mb-2'>
										<div
											className='bg-gradient-to-r from-emerald-600 to-emerald-800 h-3 rounded-full'
											style={{ width: "55%" }}
										></div>
									</div>
									<p className='text-sm text-neutral-600'>
										Medium-hot with aromatic
										complexity that balances the
										heat
									</p>
								</div>

								<div>
									<h4 className='font-semibold text-green-800 mb-3'>
										Heat Experience:
									</h4>
									<div className='space-y-3 text-sm text-neutral-700'>
										<div className='flex items-center space-x-3'>
											<span className='w-2 h-2 bg-emerald-600 rounded-full'></span>
											<p>
												<strong>
													Initial:
												</strong>{" "}
												Aromatic warmth with
												citrus brightness
											</p>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='w-2 h-2 bg-emerald-700 rounded-full'></span>
											<p>
												<strong>
													Build:
												</strong>{" "}
												Gentle heat develops
												with spice
												complexity
											</p>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='w-2 h-2 bg-emerald-800 rounded-full'></span>
											<p>
												<strong>
													Finish:
												</strong>{" "}
												Long, sophisticated
												warmth with floral
												notes
											</p>
										</div>
									</div>
								</div>

								<div className='bg-white/70 rounded p-3'>
									<p className='text-xs text-neutral-600'>
										<strong>Perfect For:</strong>{" "}
										Food lovers who want heat with
										sophistication. The aromatics
										make it more complex than
										simple chili pastes.
									</p>
								</div>
							</div>
						</div>

						{/* Usage & Pairing */}
						<div className='bg-cream-50 rounded-sm p-8 border border-cream-200'>
							<h3 className='text-2xl font-bold text-green-900 mb-6 font-brand flex items-center'>
								<Utensils className='w-6 h-6 mr-3 text-green-600' />
								Perfect Pairings
							</h3>
							<div className='space-y-6 font-body text-neutral-700'>
								<div>
									<h4 className='font-semibold text-green-800 mb-3'>
										Signature Dishes:
									</h4>
									<ul className='space-y-2 text-sm'>
										<li className='flex items-center space-x-2'>
											<span className='w-1.5 h-1.5 bg-slate-700 rounded-full'></span>
											<span>
												<strong>
													Satay Marinade
												</strong>{" "}
												- Traditional
												Indonesian skewers
											</span>
										</li>
										<li className='flex items-center space-x-2'>
											<span className='w-1.5 h-1.5 bg-slate-700 rounded-full'></span>
											<span>
												<strong>
													Grilled Seafood
												</strong>{" "}
												- Enhances natural
												flavors
											</span>
										</li>
										<li className='flex items-center space-x-2'>
											<span className='w-1.5 h-1.5 bg-slate-700 rounded-full'></span>
											<span>
												<strong>
													Beef Rendang
												</strong>{" "}
												- Authentic spice
												base
											</span>
										</li>
										<li className='flex items-center space-x-2'>
											<span className='w-1.5 h-1.5 bg-slate-700 rounded-full'></span>
											<span>
												<strong>
													Roasted
													Vegetables
												</strong>{" "}
												- Elevates simple
												sides
											</span>
										</li>
									</ul>
								</div>

								<div>
									<h4 className='font-semibold text-green-800 mb-3'>
										Usage Amounts:
									</h4>
									<div className='space-y-2 text-sm'>
										<div className='flex justify-between'>
											<span>
												Marinade base:
											</span>
											<span className='font-semibold'>
												1-2 tbsp + oil &
												lime
											</span>
										</div>
										<div className='flex justify-between'>
											<span>
												Stir-fry sauce:
											</span>
											<span className='font-semibold'>
												1 tsp per serving
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
										<strong>
											Chef&apos;s Tip:
										</strong>{" "}
										Mix with coconut milk and lime
										juice for an instant Balinese
										curry base that rivals
										restaurant quality.
									</p>
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
						title='What Our Customers Say About Sambal Bali'
					/>
				</div>
			</section>
		</div>
	);
}
