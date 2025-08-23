import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import TrustIndicators from "@/components/ui/TrustIndicators";

export const metadata = {
	title: "Authentic Sambal Oelek UK | Premium Indonesian Chili Paste",
	description:
		"Authentic sambal oelek by Chef Yossie using traditional Bandung recipes. Premium Indonesian chili paste with 25,000 Scoville heat. Free UK delivery.",
	keywords:
		"authentic sambal oelek UK, traditional Indonesian chili paste, Chef Yossie sambal, Bandung recipe sambal, premium Indonesian condiments UK, 25000 scoville sambal, pure chili paste UK, Indonesian cooking ingredients, sambal oelek delivery London Manchester Birmingham Edinburgh, authentic Indonesian food UK, traditional sambal recipe, volcanic chili Indonesia",
	openGraph: {
		title: "Buy Sambal Oelek UK | Authentic Indonesian Chili Paste Delivery",
		description:
			"UK's premier Indonesian sambal oelek delivery. Traditional recipe by Chef Yossie - pure chili paste made in UK, delivered London Manchester Birmingham.",
		type: "website",
		images: [
			{
				url: "https://spiceislandindonesia.com/images/sambal-oelek-lg.webp",
				width: 400,
				height: 400,
				alt: "Authentic Indonesian Sambal Oelek 185g - UK Delivery - Chef Yossie Traditional Recipe",
			},
		],
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/sambal-oelek-uk",
	},
};

export default function SambalOelekUKPage() {
	// FAQ data for AI search optimization
	const faqData = [
		{
			question: "What is sambal oelek?",
			answer: "Sambal oelek is a traditional Indonesian chili paste made from fresh red chilies, salt, and vinegar. It&apos;s the foundation of Indonesian cuisine - a pure, fiery condiment that delivers authentic heat without artificial flavors or preservatives. Unlike Western hot sauces, sambal oelek has a chunky texture and focuses on the natural flavor of chilies rather than masking it with sugar or additives.",
		},
		{
			question: "How spicy is sambal oelek?",
			answer: "Authentic sambal oelek is significantly hotter than most Western hot sauces - typically 3-5 times spicier than Tabasco or sriracha. It ranges from 15,000-30,000 Scoville Heat Units. The heat builds gradually and has a clean, pure chili flavor. Start with small amounts (1/4 teaspoon) and build up your tolerance.",
		},
		{
			question:
				"What&apos;s the difference between sambal oelek and sriracha?",
			answer: "Sambal oelek is pure chili paste with minimal ingredients (chilies, salt, vinegar), while sriracha contains sugar, garlic, and thickeners. Sambal oelek has a chunky, rustic texture versus sriracha&apos;s smooth consistency. Sambal oelek is hotter and more authentic to Indonesian cuisine, while sriracha is sweeter and milder.",
		},
		{
			question: "How do I use sambal oelek in cooking?",
			answer: "Sambal oelek is incredibly versatile. Use it as a condiment (mix with mayo for spicy dips), cooking ingredient (add to stir-fries, marinades, soups), or table sauce. Start with 1/2 teaspoon in recipes and adjust to taste. It&apos;s perfect for fried rice, scrambled eggs, marinades, and any dish needing authentic Indonesian heat.",
		},
		{
			question: "How long does sambal oelek last?",
			answer: "Unopened sambal oelek lasts 2-3 years in a cool, dry place. Once opened, refrigerate and use within 6-8 weeks for best quality. Authentic sambal oelek without preservatives has a shorter shelf life than mass-produced versions, but the flavor is incomparably better.",
		},
		{
			question: "Is sambal oelek gluten-free and vegan?",
			answer: "Yes! Authentic sambal oelek is naturally gluten-free and vegan. Our traditional recipe contains only chilies, salt, and vinegar - no wheat, dairy, or animal products. It&apos;s also free from artificial colors, preservatives, and MSG.",
		},
		{
			question: "Can I buy authentic sambal oelek in the UK?",
			answer: "Yes! We deliver authentic Indonesian sambal oelek throughout the UK. Our sambal is made by Chef Yossie using traditional Bandung family recipes - the same methods used in Indonesia for generations. We offer free UK delivery on orders over £20.",
		},
	];

	// Entity data for AI search optimization
	const entityData = [
		{
			name: "Sambal Oelek",
			type: "Product" as const,
			description:
				"Traditional Indonesian chili paste made from fresh red chilies, salt, and vinegar",
			properties: {
				category: "Condiment",
				brand: "Spice Island Indonesia",
				manufacturer: "Chef Yossie",
				origin: "Indonesia",
				spiceLevel: "Hot",
				scovilleRating: "15000-30000",
				ingredients: ["Red Chilies", "Salt", "Vinegar"],
				dietaryInfo: ["Gluten-Free", "Vegan", "No Preservatives"],
			},
		},
		{
			name: "Red Chilies",
			type: "Ingredient" as const,
			description:
				"Fresh red chilies from the Indonesian Spice Islands, known for their intense heat and pure flavor",
			properties: {
				origin: "Maluku Islands, Indonesia",
				heatLevel: "High",
				flavorProfile: "Pure chili heat with minimal sweetness",
			},
		},
		{
			name: "Maluku Islands",
			type: "Place" as const,
			description:
				"The Spice Islands of Indonesia, original source of the world&apos;s finest spices and chilies",
			properties: {
				country: "Indonesia",
				coordinates: { lat: -3.2385, lng: 130.1453 },
				knownFor:
					"Spice production, volcanic soil, traditional sambal making",
				climate: "Tropical volcanic",
			},
		},
		{
			name: "Chef Yossie",
			type: "Person" as const,
			description:
				"Indonesian chef from Bandung specializing in traditional sambal recipes",
			properties: {
				jobTitle: "Traditional Indonesian Chef",
				worksFor: "Spice Island Indonesia",
				expertise: "Traditional sambal making, Indonesian cuisine",
				origin: "Bandung, Indonesia",
			},
		},
		{
			name: "Spice Island Indonesia",
			type: "Organization" as const,
			description:
				"UK-based company specializing in authentic Indonesian condiments and spices",
			properties: {
				url: "https://spiceislandindonesia.com",
				specialty: "Authentic Indonesian sambal and spices",
				market: "United Kingdom",
				focus: "Traditional recipes, no preservatives",
			},
		},
	];

	// Product data for enhanced schema
	const productData = {
		name: "Authentic Indonesian Sambal Oelek",
		description:
			"Traditional Indonesian chili paste made from fresh red chilies, salt, and vinegar. Handcrafted by Chef Yossie using authentic Bandung family recipes.",
		brand: "Spice Island Indonesia",
		category: "Condiments & Sauces",
		image: "https://spiceislandindonesia.com/images/sambal-oelek-lg.webp",
		// Merchant-friendly additions
		shippingDetails: [
			{
				"@type": "OfferShippingDetails",
				// Free shipping on orders £20+
				shippingRate: {
					"@type": "MonetaryAmount",
					value: 0,
					currency: "GBP",
				},
				eligibleTransactionVolume: {
					"@type": "PriceSpecification",
					minPrice: 20,
					priceCurrency: "GBP",
				},
				shippingDestination: {
					"@type": "DefinedRegion",
					addressCountry: "GB",
				},
				deliveryTime: {
					"@type": "ShippingDeliveryTime",
					handlingTime: {
						"@type": "QuantitativeValue",
						minValue: 0,
						maxValue: 1,
						unitCode: "d",
					},
					transitTime: {
						"@type": "QuantitativeValue",
						minValue: 2,
						maxValue: 3,
						unitCode: "d",
					},
				},
			},
			{
				"@type": "OfferShippingDetails",
				// Standard Royal Mail 48 Tracked (under £20)
				shippingRate: {
					"@type": "MonetaryAmount",
					value: 3.45,
					currency: "GBP",
				},
				eligibleTransactionVolume: {
					"@type": "PriceSpecification",
					maxPrice: 19.99,
					priceCurrency: "GBP",
				},
				shippingDestination: {
					"@type": "DefinedRegion",
					addressCountry: "GB",
				},
				deliveryTime: {
					"@type": "ShippingDeliveryTime",
					handlingTime: {
						"@type": "QuantitativeValue",
						minValue: 0,
						maxValue: 1,
						unitCode: "d",
					},
					transitTime: {
						"@type": "QuantitativeValue",
						minValue: 2,
						maxValue: 3,
						unitCode: "d",
					},
				},
			},
		],
		hasMerchantReturnPolicy: {
			"@type": "MerchantReturnPolicy",
			applicableCountry: "GB",
			returnPolicyCategory:
				"https://schema.org/MerchantReturnFiniteReturnWindow",
			merchantReturnDays: 14,
			returnMethod: "https://schema.org/ReturnByMail",
			returnFees: "https://schema.org/ReturnShippingFees",
		},
		offers: [
			{
				name: "Sambal Oelek 185g",
				description:
					"Pure, fiery chili paste - the foundation of Indonesian cooking",
				price: "7.49",
				priceCurrency: "GBP",
				availability: "https://schema.org/InStock",
				sku: "SII-SO-185G",
				url: "https://spiceislandindonesia.com/sambal-oelek-uk",
				priceValidUntil: "2026-12-31",
				shippingDetails: [
					{
						"@type": "OfferShippingDetails",
						shippingRate: {
							"@type": "MonetaryAmount",
							value: 0,
							currency: "GBP",
						},
						eligibleTransactionVolume: {
							"@type": "PriceSpecification",
							minPrice: 20,
							priceCurrency: "GBP",
						},
						shippingDestination: {
							"@type": "DefinedRegion",
							addressCountry: "GB",
						},
					},
				],
				hasMerchantReturnPolicy: {
					"@type": "MerchantReturnPolicy",
					applicableCountry: "GB",
					returnPolicyCategory:
						"https://schema.org/MerchantReturnFiniteReturnWindow",
					merchantReturnDays: 14,
					returnMethod: "https://schema.org/ReturnByMail",
					returnFees: "https://schema.org/FreeReturn",
				},
			},
		],
		aggregateRating: {
			ratingValue: 4.9,
			reviewCount: 127,
			bestRating: 5,
			worstRating: 1,
		},
		reviews: [
			{
				author: "Sarah M.",
				rating: 5,
				reviewBody:
					"Finally found authentic Indonesian sambal in the UK! The Sambal Oelek is exactly like what I had in Jakarta. Perfect heat level and no artificial ingredients.",
				datePublished: "2024-01-15",
				location: "London",
			},
			{
				author: "James K.",
				rating: 5,
				reviewBody:
					"This is the real deal! I&apos;ve been looking for authentic sambal for years. Chef Yossie&apos;s recipe is incredible - pure chili flavor without any sweetness.",
				datePublished: "2024-01-08",
				location: "Manchester",
			},
			{
				author: "Priya S.",
				rating: 4,
				reviewBody:
					"Excellent quality and very spicy! Much better than supermarket versions. Great for authentic Indonesian cooking. Will definitely order again.",
				datePublished: "2024-01-03",
				location: "Birmingham",
			},
		],
		additionalProperties: {
			spiceLevel: "Hot (15,000-30,000 SHU)",
			ingredients: ["Red Chilies", "Salt", "Vinegar"],
			dietaryInfo: ["Gluten-Free", "Vegan", "No Preservatives"],
			origin: "Indonesia",
			shelfLife:
				"2-3 years unopened, 6-8 weeks refrigerated after opening",
		},
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100'>
			{/* Floating Try First Banner */}
			<div className='fixed top-20 right-4 z-50 hidden lg:block'>
				<div className='bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 text-white px-4 py-3 rounded-lg shadow-2xl border border-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 max-w-xs'>
					<Link href='/sample-pack-try-first' className='block'>
						<div className='flex items-center space-x-3'>
							<div className='text-2xl'>🎯</div>
							<div>
								<div className='font-bold text-sm'>Too Hot? Try First!</div>
								<div className='text-xs opacity-90'>Sample Pack £4.99</div>
								<div className='text-xs opacity-75'>Risk-free tasting</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
			
			<FAQSchema
				faqs={faqData}
				pageTitle='Sambal Oelek UK - Frequently Asked Questions'
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
			<EntityMarkup
				entities={entityData}
				pageTitle='Sambal Oelek UK - Entity Information'
			/>
			{/* Hero Section */}

			{/* Sticky purchase bar (mobile) */}
			<div className='fixed bottom-0 inset-x-0 z-40 md:hidden'>
				<div className='mx-4 mb-4 rounded-lg border border-gold-300 bg-white/90 backdrop-blur px-4 py-3 shadow-lg flex items-center justify-between'>
					<div className='text-sm'>
						<p className='font-semibold text-burgundy-900'>
							Sambal Oelek
						</p>
						<p className='text-neutral-600'>
							£7.49 • Free £20+ shipping
						</p>
					</div>
					<Link href='/shop'>
						<Button
							size='sm'
							className='bg-gold-600 text-burgundy-900 hover:bg-gold-500'
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
								Chef Yossie&apos;s Traditional Recipe
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight font-brand'>
								<span className='text-white block mb-2'>
									Authentic Indonesian
								</span>
								<span className='text-amber-300 block mb-2'>
									Sambal Oelek UK
								</span>
								<span className='text-amber-200 text-2xl sm:text-3xl lg:text-3xl font-script italic'>
									Traditional Recipe - UK Delivery
								</span>
							</h1>

							<div className='space-y-4 mb-6 max-w-2xl mx-auto lg:mx-0'>
								<p className='text-lg sm:text-xl text-amber-200 leading-relaxed font-body'>
									Finally,{" "}
									<strong className='text-gold-100'>
										real Indonesian sambal oelek
									</strong>{" "}
									made using traditional recipes from
									Chef Yossie&apos;s family catering
									kitchen in Bandung.
								</p>

								<p className='text-lg text-amber-300 leading-relaxed font-body'>
									No preservatives, no shortcuts, no
									artificial flavors - just{" "}
									<em>authentic Indonesian fire</em>{" "}
									that transforms every dish with
									pure chili intensity.
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
										className='text-amber-200'
									/>
								</div>
							</div>

							{/* Key Features */}
							<div className='grid sm:grid-cols-2 gap-2 mb-4'>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<ChefHat className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-amber-200 font-medium font-elegant'>
										Professional Chef Made
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Shield className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-amber-200 font-medium font-elegant'>
										No Preservatives
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<MapPin className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-amber-200 font-medium font-elegant'>
										Traditional Bandung Recipe
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Truck className='w-4 h-4 text-burgundy-900' />
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
										Order Sambal Oelek Now - £7.49
									</Button>
								</Link>
								<Link href='/shop'>
									<Button
										variant='outline'
										size='lg'
										className='font-elegant border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-stone-900 text-lg px-6 py-3'
									>
										Try Sample First - £2.99
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
											src='/images/optimized/sambal-oelek-lg.webp'
											alt='Authentic Indonesian Sambal Oelek 185g - Pure chili paste made by Chef Yossie'
											width={500}
											height={500}
											className='w-full h-full object-contain drop-shadow-2xl'
											priority
											sizes='(max-width: 768px) 100vw, 50vw'
										/>
									</div>
								</div>

								{/* Floating badges */}
								<div className='absolute -top-4 -left-4 bg-amber-600 text-stone-900 rounded-full p-4 shadow-luxury animate-float border border-amber-500'>
									<Award className='w-6 h-6' />
								</div>
								<div className='absolute -bottom-4 -right-4 bg-stone-800 text-amber-300 rounded-full p-4 shadow-luxury animate-float delay-1000 border border-stone-600'>
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
						{/* Ingredients & Nutrition */}
						<div className='bg-cream-50 rounded-sm p-8 border border-gold-200'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-brand flex items-center'>
								<Leaf className='w-6 h-6 mr-3 text-gold-600' />
								Pure Ingredients
							</h3>
							<div className='space-y-4 font-body'>
								<div>
									<h4 className='font-semibold text-burgundy-800 mb-2'>
										Complete Ingredient List:
									</h4>
									<ul className='text-neutral-700 space-y-2'>
										<li>
											•{" "}
											<strong>
												Red Bird&apos;s Eye
												Chilies
											</strong>{" "}
											(85%) - From Indonesian
											volcanic soil
										</li>
										<li>
											•{" "}
											<strong>Sea Salt</strong>{" "}
											(10%) - Natural
											preservation
										</li>
										<li>
											•{" "}
											<strong>
												Rice Vinegar
											</strong>{" "}
											(5%) - Traditional
											acidity
										</li>
									</ul>
								</div>
								<div className='border-t border-gold-300 pt-4'>
									<h4 className='font-semibold text-burgundy-800 mb-2'>
										Nutritional Highlights:
									</h4>
									<div className='grid grid-cols-2 gap-2 text-sm text-neutral-700'>
										<span>
											Calories: 5 per tsp
										</span>
										<span>Sodium: 180mg</span>
										<span>Carbs: 1g</span>
										<span>Fiber: 0.5g</span>
										<span>Vitamin C: 15% DV</span>
										<span>Capsaicin: High</span>
									</div>
								</div>
							</div>
						</div>

						{/* Heat Level & Usage */}
						<div className='bg-burgundy-50 rounded-sm p-8 border border-burgundy-200'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-brand flex items-center'>
								<Flame className='w-6 h-6 mr-3 text-burgundy-600' />
								Heat Profile
							</h3>
							<div className='space-y-6 font-body'>
								<div>
									<div className='flex justify-between items-center mb-2'>
										<span className='font-semibold text-burgundy-800'>
											Scoville Rating
										</span>
										<span className='text-2xl font-bold text-burgundy-900'>
											25,000
										</span>
									</div>
									<div className='w-full bg-cream-200 rounded-full h-3'>
										<div
											className='bg-gradient-to-r from-burgundy-600 to-burgundy-900 h-3 rounded-full'
											style={{ width: "75%" }}
										></div>
									</div>
									<p className='text-sm text-neutral-600 mt-2'>
										Significantly hotter than
										Tabasco or Sriracha
									</p>
								</div>

								<div>
									<h4 className='font-semibold text-burgundy-800 mb-3'>
										Perfect Usage Guide:
									</h4>
									<div className='space-y-2 text-sm text-neutral-700'>
										<div className='flex justify-between'>
											<span>Beginners:</span>
											<span className='font-semibold'>
												1/4 teaspoon
											</span>
										</div>
										<div className='flex justify-between'>
											<span>
												Regular users:
											</span>
											<span className='font-semibold'>
												1/2 teaspoon
											</span>
										</div>
										<div className='flex justify-between'>
											<span>Heat lovers:</span>
											<span className='font-semibold'>
												1+ teaspoon
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Authenticity & Origin */}
						<div className='bg-gold-50 rounded-sm p-8 border border-gold-200'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-brand flex items-center'>
								<MapPin className='w-6 h-6 mr-3 text-gold-600' />
								Authentic Origin
							</h3>
							<div className='space-y-4 font-body text-neutral-700'>
								<div>
									<h4 className='font-semibold text-burgundy-800 mb-2'>
										Traditional Method:
									</h4>
									<p className='text-sm leading-relaxed'>
										Ground using traditional stone
										mortar (cobek) technique from
										Chef Yossie&apos;s family
										kitchen in Bandung, West Java
										- Indonesia&apos;s culinary
										capital.
									</p>
								</div>
								<div>
									<h4 className='font-semibold text-burgundy-800 mb-2'>
										Chili Source:
									</h4>
									<p className='text-sm leading-relaxed'>
										Premium red bird&apos;s eye
										chilies grown in the
										mineral-rich volcanic soil of
										the Maluku Islands - the
										original Spice Islands.
									</p>
								</div>
								<div>
									<h4 className='font-semibold text-burgundy-800 mb-2'>
										Cultural Significance:
									</h4>
									<p className='text-sm leading-relaxed'>
										&quot;Sambal&quot; is the
										Indonesian word for chili
										paste, and &quot;oelek&quot;
										refers to the grinding method
										- making this the fundamental
										sauce of Indonesian cuisine.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Problem/Solution Section */}
			<section className='py-24 bg-gradient-to-br from-cream-100 to-cream-200'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							Why Most &quot;Indonesian&quot; Sambal
							<span className='text-gold-700 block'>
								Disappoints True Food Lovers
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-body'>
							You&apos;ve tried the mass-produced versions.
							You know they&apos;re missing something.
							Here&apos;s why our sambal oelek is
							different.
						</p>
					</div>

					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						{/* Problems */}
						<div>
							<h3 className='text-3xl font-bold text-burgundy-900 mb-8 font-brand'>
								The Problem with Store-Bought Sambal:
							</h3>
							<div className='space-y-6'>
								<div className='flex items-start space-x-4'>
									<div className='w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1'>
										<span className='text-red-600 font-bold'>
											✗
										</span>
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
											Mass-Produced & Generic
										</h4>
										<p className='text-neutral-700 font-body'>
											Made in factories for
											global markets, not
											authentic Indonesian
											taste
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-4'>
									<div className='w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1'>
										<span className='text-red-600 font-bold'>
											✗
										</span>
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
											Loaded with Preservatives
										</h4>
										<p className='text-neutral-700 font-body'>
											Artificial ingredients
											that mask the true chili
											flavor
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-4'>
									<div className='w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1'>
										<span className='text-red-600 font-bold'>
											✗
										</span>
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
											Wrong Texture & Heat
										</h4>
										<p className='text-neutral-700 font-body'>
											Either too smooth or too
											chunky, never the
											authentic consistency
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Solutions */}
						<div>
							<h3 className='text-3xl font-bold text-burgundy-900 mb-8 font-brand'>
								Chef Yossie&apos;s Authentic Solution:
							</h3>
							<div className='space-y-6'>
								<div className='flex items-start space-x-4'>
									<div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1'>
										<CheckCircle className='w-5 h-5 text-green-600' />
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
											Traditional Bandung
											Recipe
										</h4>
										<p className='text-neutral-700 font-body'>
											Learned in professional
											catering kitchen,
											perfected over 15+ years
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-4'>
									<div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1'>
										<CheckCircle className='w-5 h-5 text-green-600' />
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
											Pure Ingredients Only
										</h4>
										<p className='text-neutral-700 font-body'>
											Just chilies, salt, and
											vinegar - exactly as it
											should be
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-4'>
									<div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1'>
										<CheckCircle className='w-5 h-5 text-green-600' />
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
											Perfect Authentic Texture
										</h4>
										<p className='text-neutral-700 font-body'>
											Coarsely ground for the
											ideal balance of
											smoothness and texture
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Cooking Guide & Recipes */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h3 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							Master the Art of
							<span className='text-gold-700 block'>
								Sambal Oelek Cooking
							</span>
						</h3>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body leading-relaxed'>
							Transform your cooking with professional
							techniques from Chef Yossie&apos;s Indonesian
							kitchen. Learn how to unlock sambal
							oelek&apos;s full potential in every dish.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
						{/* Quick Stir-Fry */}
						<div className='bg-gradient-to-br from-burgundy-50 to-burgundy-100 rounded-sm p-8 border border-burgundy-200'>
							<div className='flex items-center mb-4'>
								<Utensils className='w-8 h-8 text-burgundy-600 mr-3' />
								<div>
									<h3 className='text-xl font-bold text-burgundy-900 font-brand'>
										Perfect Stir-Fry
									</h3>
									<p className='text-sm text-burgundy-700'>
										5-minute technique
									</p>
								</div>
							</div>
							<div className='space-y-3 text-sm font-body'>
								<p className='text-neutral-700 leading-relaxed'>
									<strong>The Secret:</strong> Add 1
									tsp sambal oelek to hot oil BEFORE
									vegetables. This releases the chili
									oils and creates restaurant-quality
									depth.
								</p>
								<div className='bg-white/70 rounded p-3'>
									<p className='text-xs text-neutral-600'>
										<strong>Pro Tip:</strong> Mix
										with soy sauce and sesame oil
										for the perfect Indonesian
										stir-fry base.
									</p>
								</div>
							</div>
						</div>

						{/* Marinade Master */}
						<div className='bg-gradient-to-br from-gold-50 to-gold-100 rounded-sm p-8 border border-gold-200'>
							<div className='flex items-center mb-4'>
								<Timer className='w-8 h-8 text-gold-600 mr-3' />
								<div>
									<h3 className='text-xl font-bold text-burgundy-900 font-brand'>
										Ultimate Marinade
									</h3>
									<p className='text-sm text-gold-700'>
										30-min magic
									</p>
								</div>
							</div>
							<div className='space-y-3 text-sm font-body'>
								<p className='text-neutral-700 leading-relaxed'>
									<strong>Recipe:</strong> 2 tsp
									sambal oelek + 2 tbsp oil + 1 tbsp
									lime juice + salt. Perfect for
									chicken, beef, or tofu.
								</p>
								<div className='bg-white/70 rounded p-3'>
									<p className='text-xs text-neutral-600'>
										<strong>Best For:</strong>{" "}
										Grilling, BBQ, or pan-searing
										proteins with authentic
										Indonesian heat.
									</p>
								</div>
							</div>
						</div>

						{/* Instant Flavor Boost */}
						<div className='bg-gradient-to-br from-cream-50 to-cream-100 rounded-sm p-8 border border-cream-200'>
							<div className='flex items-center mb-4'>
								<Heart className='w-8 h-8 text-burgundy-600 mr-3' />
								<div>
									<h3 className='text-xl font-bold text-burgundy-900 font-brand'>
										Instant Upgrade
									</h3>
									<p className='text-sm text-neutral-700'>
										Any dish, instantly
									</p>
								</div>
							</div>
							<div className='space-y-3 text-sm font-body'>
								<p className='text-neutral-700 leading-relaxed'>
									<strong>Transform:</strong> Add 1/4
									tsp to scrambled eggs, pasta sauce,
									soup, or even mayonnaise for
									instant Indonesian complexity.
								</p>
								<div className='bg-white/70 rounded p-3'>
									<p className='text-xs text-neutral-600'>
										<strong>Versatile:</strong>{" "}
										Works in Western dishes, Asian
										cuisines, and fusion cooking.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Featured Recipe Spotlight */}
					<div className='bg-gradient-to-r from-stone-900 to-stone-800 rounded-sm p-12 text-white'>
						<div className='grid lg:grid-cols-2 gap-8 items-center'>
							<div>
								<h3 className='text-3xl font-bold mb-6 font-brand text-amber-200'>
									Chef Yossie&apos;s Signature
									Recipe:
									<span className='block text-white text-2xl'>
										Sambal Fried Rice
									</span>
								</h3>
								<div className='space-y-4 font-body'>
									<p className='text-amber-200 leading-relaxed'>
										This is the dish that made
										Chef Yossie famous in her
										Bandung catering kitchen - a
										perfect balance of heat,
										umami, and comfort that feeds
										the soul.
									</p>
									<div className='grid grid-cols-2 gap-4 text-sm'>
										<div>
											<strong className='text-amber-300'>
												Prep Time:
											</strong>
											<p>10 minutes</p>
										</div>
										<div>
											<strong className='text-amber-300'>
												Cook Time:
											</strong>
											<p>15 minutes</p>
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
											2-3 tsp Sambal Oelek
										</strong>{" "}
										(adjust to taste)
									</li>
									<li>
										• 4 cups day-old jasmine rice
									</li>
									<li>• 2 eggs, beaten</li>
									<li>
										• 200g protein
										(chicken/shrimp/tofu)
									</li>
									<li>• 3 cloves garlic, minced</li>
									<li>• 2 tbsp vegetable oil</li>
									<li>• 2 tbsp dark soy sauce</li>
									<li>
										• Spring onions & cucumber to
										serve
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

			{/* Chef Credibility Section */}
			<section className='py-24 bg-gradient-to-br from-cream-100 to-cream-200'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div className='relative'>
							<div className='aspect-[4/3] rounded-sm overflow-hidden shadow-luxury border border-gold-200'>
								<Image
									src='/images/optimized/long-red-chili-lg.webp'
									alt='Premium red chilies used in authentic sambal oelek - the main ingredient'
									width={900}
									height={675}
									className='w-full h-full object-cover'
									loading='lazy'
									sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 600px'
								/>
							</div>

							{/* Floating badges */}
							<div className='absolute -top-4 -left-4 bg-cream-50 rounded-full p-4 shadow-gold animate-float border border-gold-300'>
								<Star className='w-6 h-6 text-gold-600' />
							</div>
							<div className='absolute -bottom-4 -right-4 bg-cream-50 rounded-full p-4 shadow-burgundy animate-float delay-1000 border border-burgundy-300'>
								<ChefHat className='w-6 h-6 text-burgundy-600' />
							</div>
						</div>

						<div>
							<h3 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-8 font-brand'>
								Meet Chef Yossie
								<span className='text-gold-700 block font-script italic text-4xl sm:text-5xl'>
									Your Sambal Expert
								</span>
							</h3>

							<div className='space-y-8 text-lg text-neutral-700 leading-relaxed mb-8 font-body'>
								<p>
									Born and raised in{" "}
									<strong className='text-burgundy-800'>
										Bandung, West Java
									</strong>{" "}
									- Indonesia&apos;s culinary capital
									- Chef Yossie learned the art of
									sambal making in her mother&apos;s
									bustling catering kitchen.
								</p>

								<p>
									For over{" "}
									<strong className='text-burgundy-800'>
										15 years
									</strong>
									, she prepared traditional
									Indonesian recipes for hundreds of
									guests daily, mastering the
									professional techniques that
									separate authentic sambal from
									home-made attempts.
								</p>

								<p>
									Missing the authentic flavors of
									home in the UK, Chef Yossie decided
									to bring her professional expertise
									and family recipes to British
									kitchens, one handcrafted jar at a
									time.
								</p>
							</div>

							<div className='grid sm:grid-cols-2 gap-6 mb-8'>
								<div className='flex items-center space-x-3'>
									<MapPin className='w-6 h-6 text-gold-600' />
									<div>
										<p className='font-semibold text-burgundy-900 font-brand'>
											Born in Bandung
										</p>
										<p className='text-sm text-neutral-600 font-body'>
											West Java, Indonesia
										</p>
									</div>
								</div>
								<div className='flex items-center space-x-3'>
									<Clock className='w-6 h-6 text-gold-600' />
									<div>
										<p className='font-semibold text-burgundy-900 font-brand'>
											15+ Years Experience
										</p>
										<p className='text-sm text-neutral-600 font-body'>
											Professional catering
											kitchen
										</p>
									</div>
								</div>
							</div>

							<Link href='/chef'>
								<Button
									variant='primary'
									size='lg'
									className='font-elegant'
								>
									Read Chef Yossie&apos;s Full Story
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className='py-24 bg-gradient-to-r from-stone-900 to-stone-800 text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h3 className='text-4xl sm:text-5xl font-bold mb-6 font-brand'>
						Taste Authentic Indonesia
						<span className='text-amber-300 block'>
							In Your Kitchen Today
						</span>
					</h3>
					<p className='text-xl text-amber-200 mb-8 font-body'>
						Join hundreds of UK customers who&apos;ve
						discovered the difference professional-made sambal
						makes
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
						<Link href='/shop'>
							<Button
								variant='primary'
								size='lg'
								className='font-elegant text-lg px-8 py-4 bg-red-600 hover:bg-red-700'
							>
								Order Sambal Oelek - £7.49
							</Button>
						</Link>
						<Link href='/shop'>
							<Button
								variant='outline'
								size='lg'
								className='font-elegant border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-stone-900 text-lg px-8 py-4'
							>
								Try Sample Pack - £2.99
							</Button>
						</Link>
					</div>

					<div className='flex items-center justify-center space-x-6 text-amber-200'>
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
					</div>
				</div>
			</section>

			{/* Comparison Section - AI Search Optimized */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto'>
						<h3 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 text-center font-heading'>
							Sambal Oelek vs Other Hot Sauces
						</h3>
						<p className='text-xl text-gray-600 text-center mb-12 font-body'>
							See how authentic Indonesian sambal compares
							to popular Western hot sauces
						</p>

						<ComparisonTable
							title='Sambal Oelek vs Sriracha - Complete Comparison'
							items={[
								{
									category: "Heat Level (Scoville)",
									sambal: "15,000-30,000 SHU",
									hpSauce: "1,000-2,500 SHU",
									winner: "sambal",
									explanation:
										"Sambal oelek provides significantly more heat",
								},
								{
									category: "Ingredients",
									sambal: "Chilies, salt, vinegar",
									hpSauce: "Chilies, sugar, garlic, vinegar, preservatives",
									winner: "sambal",
									explanation:
										"Sambal uses only natural ingredients",
								},
								{
									category: "Texture",
									sambal: "Chunky, rustic",
									hpSauce: "Smooth, processed",
									winner: "sambal",
									explanation:
										"Traditional texture shows authenticity",
								},
								{
									category: "Sweetness",
									sambal: "No added sugar",
									hpSauce: "Sweet (sugar added)",
									winner: "sambal",
									explanation:
										"Pure chili flavor without sweetness",
								},
								{
									category: "Authenticity",
									sambal: "Traditional Indonesian",
									hpSauce: "Thai-American fusion",
									winner: "sambal",
									explanation:
										"Authentic Indonesian tradition",
								},
								{
									category: "Cooking Versatility",
									sambal: "Excellent for cooking",
									hpSauce: "Better as condiment",
									winner: "sambal",
									explanation:
										"Works both as ingredient and condiment",
								},
								{
									category: "Availability",
									sambal: "Specialty/online",
									hpSauce: "Widely available",
									winner: "context",
									explanation:
										"Depends on location preference",
								},
								{
									category: "Price Point",
									sambal: "Premium",
									hpSauce: "Budget-friendly",
									winner: "context",
									explanation:
										"Depends on budget priorities",
								},
							]}
							summary='Sambal Oelek offers superior heat, authenticity, and cooking versatility with minimal ingredients, while Sriracha provides wider availability and lower cost. For authentic Indonesian cooking and pure chili flavor, sambal oelek is the clear winner.'
						/>

						<div className='mt-12'>
							<ComparisonTable
								title='Sambal Oelek vs Tabasco - Heat & Flavor Profile'
								items={[
									{
										category: "Heat Level",
										sambal: "15,000-30,000 SHU",
										hpSauce: "2,500-5,000 SHU",
										winner: "sambal",
										explanation:
											"Sambal oelek provides significantly more heat",
									},
									{
										category: "Flavor Base",
										sambal: "Pure chili",
										hpSauce: "Vinegar-forward",
										winner: "sambal",
										explanation:
											"Pure chili flavor without masking vinegar",
									},
									{
										category: "Texture",
										sambal: "Chunky paste",
										hpSauce: "Thin liquid",
										winner: "sambal",
										explanation:
											"Traditional paste texture better for cooking",
									},
									{
										category: "Usage in Cooking",
										sambal: "Excellent for stir-fries",
										hpSauce: "Better for seasoning",
										winner: "sambal",
										explanation:
											"Works as both ingredient and condiment",
									},
									{
										category: "Cultural Origin",
										sambal: "Indonesian traditional",
										hpSauce: "Louisiana Creole",
										winner: "context",
										explanation:
											"Both have authentic cultural heritage",
									},
									{
										category: "Shelf Stability",
										sambal: "6-8 weeks opened",
										hpSauce: "Years unopened/opened",
										winner: "context",
										explanation:
											"Depends on usage frequency",
									},
								]}
								summary='Sambal Oelek delivers significantly more heat and better cooking performance, while Tabasco offers longer shelf life and tangy vinegar notes. Choose sambal oelek for authentic Asian cooking and serious heat.'
							/>
						</div>

						<div className='mt-12 bg-white rounded-lg p-8 border border-gold-200'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
								Why Choose Authentic Sambal Oelek?
							</h3>
							<div className='grid md:grid-cols-2 gap-6'>
								<div>
									<h4 className='font-semibold text-burgundy-700 mb-2'>
										For Serious Cooks:
									</h4>
									<ul className='text-gray-700 space-y-1 text-sm'>
										<li>
											• Pure chili flavor
											without masking
											ingredients
										</li>
										<li>
											• Perfect for marinades
											and stir-fries
										</li>
										<li>
											• Traditional Indonesian
											authenticity
										</li>
										<li>
											• No artificial
											preservatives or colors
										</li>
									</ul>
								</div>
								<div>
									<h4 className='font-semibold text-burgundy-700 mb-2'>
										For Heat Lovers:
									</h4>
									<ul className='text-gray-700 space-y-1 text-sm'>
										<li>
											• 3-5x hotter than most
											Western hot sauces
										</li>
										<li>
											• Clean, building heat
											without sweetness
										</li>
										<li>
											• Chunky texture adds
											interest to dishes
										</li>
										<li>
											• Made from premium
											Indonesian chilies
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section - AI Search Optimized */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto'>
						<h3 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 text-center font-heading'>
							Frequently Asked Questions
						</h3>
						<p className='text-xl text-gray-600 text-center mb-12 font-body'>
							Everything you need to know about authentic
							Indonesian sambal oelek
						</p>

						<div className='space-y-6'>
							{/* FAQ Item 1 */}
							<div className='bg-cream-50 rounded-lg p-6 border border-gold-200'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									What is sambal oelek?
								</h3>
								<div className='text-gray-700 font-body leading-relaxed space-y-4'>
									<p>
										Sambal oelek is a traditional
										Indonesian chili paste made
										from fresh red chilies, salt,
										and vinegar. It&apos;s the
										foundation of Indonesian
										cuisine - a pure, fiery
										condiment that delivers
										authentic heat without
										artificial flavors or
										preservatives.
									</p>

									<p>
										Unlike Western hot sauces,
										sambal oelek has a chunky
										texture and focuses on the
										natural flavor of chilies
										rather than masking it with
										sugar or additives.
									</p>
								</div>
							</div>

							{/* FAQ Item 2 */}
							<div className='bg-cream-50 rounded-lg p-6 border border-gold-200'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									How spicy is sambal oelek?
								</h3>
								<p className='text-gray-700 font-body leading-relaxed'>
									Authentic sambal oelek is
									significantly hotter than most
									Western hot sauces - typically 3-5
									times spicier than Tabasco or
									sriracha. It ranges from
									15,000-30,000 Scoville Heat Units.
									The heat builds gradually and has a
									clean, pure chili flavor. Start
									with small amounts (1/4 teaspoon)
									and build up your tolerance. The
									intensity comes from using fresh,
									high-quality chilies without
									diluting ingredients.
								</p>
							</div>

							{/* FAQ Item 3 */}
							<div className='bg-cream-50 rounded-lg p-6 border border-gold-200'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									What&apos;s the difference between
									sambal oelek and sriracha?
								</h3>
								<p className='text-gray-700 font-body leading-relaxed'>
									Sambal oelek is pure chili paste
									with minimal ingredients (chilies,
									salt, vinegar), while sriracha
									contains sugar, garlic, and
									thickeners. Sambal oelek has a
									chunky, rustic texture versus
									sriracha&apos;s smooth consistency.
									Sambal oelek is hotter and more
									authentic to Indonesian cuisine,
									while sriracha is sweeter and
									milder. Think of sambal oelek as
									the &quot;raw&quot; chili
									experience - perfect for cooking
									and adding authentic Indonesian
									heat to any dish.
								</p>
							</div>

							{/* FAQ Item 4 */}
							<div className='bg-cream-50 rounded-lg p-6 border border-gold-200'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									How do I use sambal oelek in
									cooking?
								</h3>
								<p className='text-gray-700 font-body leading-relaxed'>
									Sambal oelek is incredibly
									versatile. Use it as a condiment
									(mix with mayo for spicy dips),
									cooking ingredient (add to
									stir-fries, marinades, soups), or
									table sauce. Start with 1/2
									teaspoon in recipes and adjust to
									taste. It&apos;s perfect for{" "}
									<Link
										href='/recipes/sambal-fried-rice'
										className='text-burgundy-600 hover:text-burgundy-800 underline'
									>
										fried rice
									</Link>
									,
									<Link
										href='/recipes/sambal-scrambled-eggs'
										className='text-burgundy-600 hover:text-burgundy-800 underline'
									>
										{" "}
										scrambled eggs
									</Link>
									, marinades, and any dish needing
									authentic Indonesian heat. Unlike
									other hot sauces, it won&apos;t add
									sweetness or change the dish&apos;s
									flavor profile.
								</p>
							</div>

							{/* FAQ Item 5 */}
							<div className='bg-cream-50 rounded-lg p-6 border border-gold-200'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									How long does sambal oelek last?
								</h3>
								<p className='text-gray-700 font-body leading-relaxed'>
									Unopened sambal oelek lasts 2-3
									years in a cool, dry place. Once
									opened, refrigerate and use within
									6-8 weeks for best quality.
									Authentic sambal oelek without
									preservatives has a shorter shelf
									life than mass-produced versions,
									but the flavor is incomparably
									better. Store in the refrigerator,
									keep the lid tightly closed, and
									use a clean spoon each time to
									prevent contamination.
								</p>
							</div>

							{/* FAQ Item 6 */}
							<div className='bg-cream-50 rounded-lg p-6 border border-gold-200'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									Is sambal oelek gluten-free and
									vegan?
								</h3>
								<p className='text-gray-700 font-body leading-relaxed'>
									Yes! Authentic sambal oelek is
									naturally gluten-free and vegan.
									Our traditional recipe contains
									only chilies, salt, and vinegar -
									no wheat, dairy, or animal
									products. It&apos;s also free from
									artificial colors, preservatives,
									and MSG. Perfect for those with
									dietary restrictions who want to
									enjoy authentic Indonesian flavors
									without compromise.
								</p>
							</div>

							{/* FAQ Item 7 */}
							<div className='bg-cream-50 rounded-lg p-6 border border-gold-200'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									Can I buy authentic sambal oelek in
									the UK?
								</h3>
								<p className='text-gray-700 font-body leading-relaxed'>
									Yes! We deliver authentic
									Indonesian sambal oelek throughout
									the UK. Our sambal is made by Chef
									Yossie using traditional Bandung
									family recipes - the same methods
									used in Indonesia for generations.
									We offer free UK delivery on orders
									over £20, and you can
									<Link
										href='/sample-pack-try-first'
										className='text-burgundy-600 hover:text-burgundy-800 underline'
									>
										{" "}
										try our sample pack
									</Link>
									to experience the difference
									authentic sambal makes.
								</p>
							</div>
						</div>

						{/* CTA after FAQ */}
						<div className='text-center mt-12'>
							<div className='bg-gradient-to-r from-stone-600 to-stone-800 text-white rounded-lg p-8'>
								<h3 className='text-2xl font-bold mb-4 font-heading'>
									Ready to Experience Authentic
									Sambal Oelek?
								</h3>
								<p className='text-lg mb-6 opacity-90 font-body'>
									Taste the difference that
									traditional Indonesian recipes make
								</p>
								<div className='flex flex-col sm:flex-row gap-4 justify-center'>
									<Button
										size='lg'
										className='bg-white text-stone-600 hover:bg-gray-100'
									>
										Order Sambal Oelek Now
									</Button>
									<Button
										variant='outline'
										size='lg'
										className='border-white text-white hover:bg-white hover:text-stone-600'
									>
										Try Sample Pack First
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Trust Indicators */}
			<section className='py-12 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-8'>
						<h3 className='text-2xl font-bold text-burgundy-900 mb-4 font-brand'>
							Shop with Confidence
						</h3>
						<p className='text-neutral-600 font-body'>
							Your satisfaction and security are our top priorities
						</p>
					</div>
					<TrustIndicators layout="compact" className="justify-center" />
				</div>
			</section>

			{/* Customer Reviews Section */}
			<section className='py-16 bg-cream-50'>
				<div className='container mx-auto px-4'>
					<CustomerReviews
						reviews={productData.reviews}
						title='What Our Customers Say About Sambal Oelek'
					/>
				</div>
			</section>
		</div>
	);
}
