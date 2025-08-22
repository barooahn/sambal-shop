import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
	Gift,
} from "lucide-react";
import FAQSchema from "@/components/seo/FAQSchema";
import EntityMarkup from "@/components/seo/EntityMarkup";
import ComparisonTable from "@/components/seo/ComparisonTable";
import ProductSchema from "@/components/seo/ProductSchema";
import StarRating from "@/components/ui/StarRating";
import CustomerReviews from "@/components/ui/CustomerReviews";
import TrustIndicators from "@/components/ui/TrustIndicators";

export const metadata = {
	title: "Sweet Spicy Indonesian Sambal Bali UK | Chef Yossie&apos;s Aromatic Recipe | Spice Island Indonesia",
	description:
		"Buy authentic sweet spicy Indonesian Sambal Bali made by Bandung-born Chef Yossie. Perfect balance of heat and sweetness with aromatic spices. UK delivery available.",
	keywords:
		"sambal bali UK, sweet spicy Indonesian sambal, buy sambal bali, Indonesian sweet chili sauce, aromatic sambal recipe, Chef Yossie sambal bali, Indonesian condiments UK, sambal bali delivery",
	openGraph: {
		title: "Sweet Spicy Indonesian Sambal Bali UK | Chef Yossie&apos;s Aromatic Recipe",
		description:
			"Perfect balance of sweet heat and aromatic spices. Traditional Balinese-style sambal made by professional Indonesian chef.",
		type: "website",
		images: [
			{
				url: "https://spiceislandindonesia.com/images/sambal-oelek-lg.webp",
				width: 400,
				height: 400,
				alt: "Authentic Indonesian Sambal Bali 185g jar - Sweet Spicy",
			},
		],
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/sambal-bali-sweet-spicy",
	},
};

// Product schema data for Sambal Bali (Sweet & Spicy)
const productData = {
	name: "Sweet & Spicy Indonesian Sambal Bali",
	description:
		"Traditional Balinese-style sambal with perfect sweet-heat balance and aromatic spices. Handcrafted by Chef Yossie.",
	brand: "Spice Island Indonesia",
	category: "Condiments & Sauces",
	image: "https://spiceislandindonesia.com/images/sambal-bali.webp",
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
			name: "Sambal Bali 185g",
			description:
				"Sweet & spicy Balinese chili paste with aromatic spices",
			price: "7.49",
			priceCurrency: "GBP",
			availability: "https://schema.org/InStock",
			sku: "SII-SB-185G",
			url: "https://spiceislandindonesia.com/sambal-bali-sweet-spicy",
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
		ratingValue: 4.8,
		reviewCount: 112,
		bestRating: 5,
		worstRating: 1,
	},
};

export default function SambalBaliSweetSpicyPage() {
	// FAQ data for AI search optimization
	const faqData = [
		{
			question: "What is Sambal Bali?",
			answer: "Sambal Bali is a traditional Indonesian chili paste from Bali that combines heat with sweet and aromatic elements. Unlike pure fire sambal oelek, Sambal Bali includes palm sugar, galangal, lemongrass, and other fragrant spices that create a complex sweet-spicy flavor profile perfect for those new to Indonesian cuisine.",
		},
		{
			question: "How spicy is Sambal Bali compared to other hot sauces?",
			answer: "Sambal Bali has a moderate heat level of 8,000-12,000 Scoville Heat Units - hotter than Tabasco (2,500-5,000 SHU) but milder than pure sambal oelek. The palm sugar and aromatics balance the heat, making it approachable for UK palates while still delivering authentic Indonesian fire.",
		},
		{
			question: "What makes Sambal Bali different from sriracha or other sweet chili sauces?",
			answer: "Sambal Bali uses traditional Indonesian ingredients like palm sugar, galangal, candlenuts, and lemongrass that create deeper, more complex flavors than processed sweet chili sauces. It's made using traditional slow-cooking methods rather than cold processing, developing rich caramelized notes you won't find in mass-produced alternatives.",
		},
		{
			question: "How do I use Sambal Bali in cooking?",
			answer: "Sambal Bali is incredibly versatile - use it as a dipping sauce, marinade base, or cooking ingredient. It's perfect for satay marinades, nasi goreng (fried rice), grilled meats, or mixed into mayo for spicy dips. Start with 1 teaspoon and adjust to taste - a little goes a long way!",
		},
		{
			question: "Is Sambal Bali suitable for beginners to spicy food?",
			answer: "Yes! Sambal Bali is the perfect introduction to Indonesian sambal. The palm sugar and aromatics provide sweetness that balances the heat, making it much more approachable than pure chili pastes. It offers authentic Indonesian flavors without overwhelming heat.",
		},
		{
			question: "What ingredients are in authentic Sambal Bali?",
			answer: "Authentic Sambal Bali contains red chilies, palm sugar, galangal, lemongrass, shallots, garlic, candlenuts, tamarind, and salt. Our recipe uses no artificial preservatives or additives - just traditional ingredients slow-cooked using Chef Yossie's family methods.",
		},
		{
			question: "Can I buy authentic Sambal Bali in the UK?",
			answer: "Yes! We deliver Chef Yossie's authentic Sambal Bali throughout the UK. Made using traditional Balinese recipes and ingredients, it offers the real taste of Bali that you simply can't find in supermarket versions. Free UK delivery on orders over £20.",
		},
	];

	// Entity data for AI search optimization
	const entityData = [
		{
			name: "Sambal Bali",
			type: "Product" as const,
			description:
				"Traditional Balinese chili paste with palm sugar, galangal, and aromatic spices - the perfect balance of sweet and spicy",
			properties: {
				category: "Indonesian Condiment",
				brand: "Spice Island Indonesia",
				manufacturer: "Chef Yossie",
				origin: "Bali, Indonesia",
				spiceLevel: "Medium-Hot",
				scovilleRating: "8000-12000",
				ingredients: ["Red Chilies", "Palm Sugar", "Galangal", "Lemongrass", "Shallots", "Garlic", "Candlenuts"],
				dietaryInfo: ["Gluten-Free", "Vegan", "No Preservatives"],
			},
		},
		{
			name: "Palm Sugar",
			type: "Ingredient" as const,
			description:
				"Traditional Indonesian sweetener made from palm tree sap, providing complex caramelized sweetness",
			properties: {
				origin: "Indonesian Palm Trees",
				sweetness: "Complex, caramelized",
				flavorProfile: "Rich, molasses-like with fruity notes",
			},
		},
		{
			name: "Galangal",
			type: "Ingredient" as const,
			description:
				"Aromatic Indonesian spice similar to ginger but with citrusy, pine-like notes essential to Balinese cuisine",
			properties: {
				origin: "Indonesia",
				flavorProfile: "Citrusy, pine-like, aromatic",
				culinaryUse: "Essential spice in Indonesian cooking",
			},
		},
		{
			name: "Bali",
			type: "Place" as const,
			description:
				"Indonesian island known for its complex, aromatic cuisine that balances sweet, spicy, and fragrant elements",
			properties: {
				country: "Indonesia",
				coordinates: { lat: -8.3405, lng: 115.0920 },
				knownFor: "Aromatic spice blends, palm sugar, temple cuisine",
				climate: "Tropical island",
			},
		},
	];

	// Product data for enhanced schema
	const productData = {
		name: "Authentic Balinese Sambal Bali",
		description:
			"Traditional Indonesian sweet-spicy chili paste made with palm sugar, galangal, and aromatic spices. Handcrafted by Chef Yossie using authentic Balinese family recipes.",
		brand: "Spice Island Indonesia",
		category: "Condiments & Sauces",
		image: "https://spiceislandindonesia.com/images/sambal-bali.webp",
		offers: [
			{
				name: "Sambal Bali 185g",
				description:
					"Sweet-spicy Balinese chili paste - the perfect introduction to Indonesian cuisine",
				price: "7.49",
				priceCurrency: "GBP",
				availability: "https://schema.org/InStock",
				sku: "SII-SB-185G",
				url: "https://spiceislandindonesia.com/sambal-bali-sweet-spicy",
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
				author: "Emma L.",
				rating: 5,
				reviewBody:
					"Perfect introduction to Indonesian flavors! The sweetness balances the heat beautifully. I use it on everything now - eggs, stir-fries, even as a dip.",
				datePublished: "2024-01-12",
				location: "London",
			},
			{
				author: "David R.",
				rating: 5,
				reviewBody:
					"Finally found authentic Sambal Bali in the UK! Tastes exactly like what I had in Ubud. The aromatic complexity is incredible - you can taste the galangal and lemongrass.",
				datePublished: "2024-01-05",
				location: "Manchester",
			},
			{
				author: "Lisa M.",
				rating: 4,
				reviewBody:
					"Love the balance of sweet and spicy. Not too hot for my family but still has great flavor. Perfect for introducing kids to Indonesian food.",
				datePublished: "2023-12-28",
				location: "Birmingham",
			},
		],
		additionalProperties: {
			spiceLevel: "Medium-Hot (8,000-12,000 SHU)",
			ingredients: ["Red Chilies", "Palm Sugar", "Galangal", "Lemongrass", "Shallots", "Garlic", "Candlenuts"],
			dietaryInfo: ["Gluten-Free", "Vegan", "No Preservatives"],
			origin: "Bali, Indonesia",
			shelfLife: "2-3 years unopened, 6-8 weeks refrigerated after opening",
		},
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100'>
			<FAQSchema
				faqs={faqData}
				pageTitle='Sambal Bali UK - Frequently Asked Questions'
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
				pageTitle='Sambal Bali UK - Entity Information'
			/>
			{/* Hero Section */}
			<section className='py-16 sm:py-20 lg:py-14 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-96 h-96 bg-gold-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-96 h-96 bg-gold-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				{/* Product Schema for Merchant listings */}
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

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 items-center'>
						{/* Left side - Content */}
						<div className='text-center lg:text-left'>
							<Badge className='bg-burgundy-800 text-gold-300 mb-6 px-6 py-3 text-lg font-semibold border border-gold-600/30'>
								<Heart className='w-5 h-5 mr-2' />
								Sweet Meets Spicy Perfection
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight font-brand'>
								<span className='text-white block mb-2'>
									Sweet Spicy
								</span>
								<span className='text-gold-300 block mb-2'>
									Sambal Bali
								</span>
								<span className='text-gold-200 text-2xl sm:text-3xl lg:text-3xl font-script italic'>
									Aromatic Indonesian Perfection
								</span>
							</h1>

							<p className='text-lg sm:text-xl text-gold-200 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body'>
								Experience the perfect balance of sweet
								heat and aromatic spices in Chef
								Yossie&apos;s Sambal Bali. Traditional
								Balinese-style recipe with palm sugar,
								galangal, and secret spice blend.
							</p>

							{/* Key Features */}
							<div className='grid sm:grid-cols-2 gap-2 mb-4'>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Heart className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Sweet & Spicy Balance
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Flame className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Aromatic Spice Blend
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<ChefHat className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Traditional Balinese Style
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Truck className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										UK Delivery Available
									</span>
								</div>
							</div>

							<div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start'>
								<Link href='/shop'>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant text-lg px-6 py-3 bg-red-600 hover:bg-red-700'
									>
										Order Sambal Bali - £7.49
									</Button>
								</Link>
								<Link href='/sample-pack-try-first'>
									<Button
										variant='outline'
										size='lg'
										className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 text-lg px-6 py-3'
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
											src='/images/optimized/sambal-bali-lg.webp'
											alt='Authentic Indonesian Sambal Bali 185g jar - Sweet Spicy'
											width={500}
											height={500}
											className='w-full h-full object-contain drop-shadow-2xl'
											priority
											sizes='(max-width: 768px) 100vw, 50vw'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Sambal Bali is Different Section */}
			<section className='py-16 sm:py-20 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Why Sambal Bali is Perfect for UK Palates
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							Unlike pure fire sambal oelek, Sambal Bali
							offers the perfect introduction to Indonesian
							flavors with its balanced sweetness and
							complex aromatics.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						<Card className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-6'>
									<Heart className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
									Sweet Heat Balance
								</h3>
								<p className='text-neutral-600 font-body'>
									Palm sugar and aromatic spices
									create a complex flavor profile
									that&apos;s spicy but approachable,
									perfect for those new to Indonesian
									cuisine.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-6'>
									<Flame className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
									Aromatic Complexity
								</h3>
								<p className='text-neutral-600 font-body'>
									Galangal, lemongrass, and kaffir
									lime leaves create layers of flavor
									that develop on your palate, making
									every bite interesting.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-6'>
									<CheckCircle className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
									Versatile Application
								</h3>
								<p className='text-neutral-600 font-body'>
									Perfect as a dipping sauce,
									marinade, or cooking ingredient.
									Transforms everything from grilled
									meats to simple rice dishes.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Chef&apos;s Story Section */}
			<section className='py-16 sm:py-20 bg-gradient-to-br from-cream-50 to-cream-100'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<div>
							<Badge className='bg-burgundy-100 text-burgundy-800 mb-6 px-4 py-2 font-semibold'>
								<ChefHat className='w-4 h-4 mr-2' />
								Chef Yossie&apos;s Story
							</Badge>

							<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
								From Bandung Catering Kitchen to Your
								Table
							</h2>

							<p className='text-lg text-neutral-600 mb-6 font-body'>
								&quot;Growing up in Bandung, I learned
								this Sambal Bali recipe from my
								grandmother who ran a small warung. The
								secret is in the balance - enough
								sweetness to welcome new palates, enough
								heat to satisfy spice lovers.&quot;
							</p>

							<p className='text-lg text-neutral-600 mb-8 font-body'>
								&quot;In my professional catering
								kitchen, this became our most requested
								condiment. British clients loved how it
								added Indonesian authenticity without
								overwhelming heat. Now I&apos;m bringing
								that same recipe to UK homes.&quot;
							</p>

							<div className='flex flex-col sm:flex-row gap-4'>
								<Link href='/chef'>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant'
									>
										Meet Chef Yossie
									</Button>
								</Link>
								<Link href='/shop'>
									<Button
										variant='outline'
										size='lg'
										className='font-elegant border-burgundy-600 text-burgundy-600 hover:bg-burgundy-600 hover:text-white'
									>
										Order Now - £7.49
									</Button>
								</Link>
							</div>
						</div>

						<div className='relative'>
							<div className='bg-gradient-to-br from-burgundy-100 to-gold-100 rounded-sm p-8'>
								<div className='text-center'>
									<div className='w-24 h-24 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-6'>
										<ChefHat className='w-12 h-12 text-white' />
									</div>
									<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
										Professional Chef Credentials
									</h3>
									<ul className='text-left text-neutral-600 space-y-2 font-body'>
										<li className='flex items-center'>
											<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0' />
											Born and trained in
											Bandung, West Java
										</li>
										<li className='flex items-center'>
											<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0' />
											15+ years professional
											catering experience
										</li>
										<li className='flex items-center'>
											<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0' />
											Specializes in
											traditional Sundanese
											cuisine
										</li>
										<li className='flex items-center'>
											<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0' />
											Family recipes passed
											down 3 generations
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Perfect For Section */}
			<section className='py-16 sm:py-20 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Perfect For These Occasions
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							Sambal Bali&apos;s balanced flavor profile
							makes it incredibly versatile for British
							cooking and entertaining.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{[
							{
								title: "BBQ & Grilling",
								description:
									"Perfect marinade for chicken, pork, or vegetables",
								icon: Flame,
							},
							{
								title: "Asian Fusion",
								description:
									"Elevate stir-fries and noodle dishes instantly",
								icon: ChefHat,
							},
							{
								title: "Dinner Parties",
								description:
									"Impressive condiment that sparks conversation",
								icon: Heart,
							},
							{
								title: "Gift Giving",
								description:
									"Unique present for food-loving friends",
								icon: Award,
							},
						].map((item, index) => (
							<Card
								key={index}
								className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'
							>
								<CardContent className='p-6 text-center'>
									<div className='w-12 h-12 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-4'>
										<item.icon className='w-6 h-6 text-white' />
									</div>
									<h3 className='text-lg font-semibold text-burgundy-900 mb-3 font-brand'>
										{item.title}
									</h3>
									<p className='text-neutral-600 text-sm font-body'>
										{item.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Detailed Product Information */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-3 gap-12'>
						{/* Ingredients & Nutrition */}
						<div className='bg-amber-50 rounded-sm p-8 border border-amber-200'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-brand flex items-center'>
								<Leaf className='w-6 h-6 mr-3 text-amber-600' />
								Aromatic Ingredients
							</h3>
							<div className='space-y-4 font-body'>
								<div>
									<h4 className='font-semibold text-burgundy-800 mb-2'>
										Traditional Balinese Blend:
									</h4>
									<ul className='text-neutral-700 space-y-2'>
										<li>
											•{" "}
											<strong>
												Red Bird&apos;s Eye Chilies
											</strong>{" "}
											(60%) - Indonesian volcanic soil
										</li>
										<li>
											•{" "}
											<strong>Palm Sugar</strong>{" "}
											(15%) - Caramelized sweetness
										</li>
										<li>
											•{" "}
											<strong>Galangal</strong>{" "}
											(8%) - Aromatic, citrusy notes
										</li>
										<li>
											•{" "}
											<strong>Lemongrass</strong>{" "}
											(5%) - Fresh, lemony fragrance
										</li>
										<li>
											•{" "}
											<strong>Shallots & Garlic</strong>{" "}
											(8%) - Savory depth
										</li>
										<li>
											•{" "}
											<strong>Candlenuts & Tamarind</strong>{" "}
											(4%) - Richness & tang
										</li>
									</ul>
								</div>
								<div className='border-t border-amber-300 pt-4'>
									<h4 className='font-semibold text-burgundy-800 mb-2'>
										Nutritional Highlights:
									</h4>
									<div className='grid grid-cols-2 gap-2 text-sm text-neutral-700'>
										<span>Calories: 8 per tsp</span>
										<span>Sodium: 160mg</span>
										<span>Carbs: 2g</span>
										<span>Natural Sugars: 1g</span>
										<span>Vitamin C: 12% DV</span>
										<span>Antioxidants: High</span>
									</div>
								</div>
							</div>
						</div>

						{/* Heat Level & Usage */}
						<div className='bg-orange-50 rounded-sm p-8 border border-orange-200'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-brand flex items-center'>
								<Flame className='w-6 h-6 mr-3 text-orange-600' />
								Perfect Balance
							</h3>
							<div className='space-y-6 font-body'>
								<div>
									<div className='flex justify-between items-center mb-2'>
										<span className='font-semibold text-burgundy-800'>
											Scoville Rating
										</span>
										<span className='text-2xl font-bold text-burgundy-900'>
											10,000
										</span>
									</div>
									<div className='w-full bg-cream-200 rounded-full h-3'>
										<div
											className='bg-gradient-to-r from-orange-500 to-orange-700 h-3 rounded-full'
											style={{ width: "60%" }}
										></div>
									</div>
									<p className='text-sm text-neutral-600 mt-2'>
										Hotter than Tabasco, sweeter than pure sambal
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
												1/2 teaspoon
											</span>
										</div>
										<div className='flex justify-between'>
											<span>Regular users:</span>
											<span className='font-semibold'>
												1 teaspoon
											</span>
										</div>
										<div className='flex justify-between'>
											<span>Heat lovers:</span>
											<span className='font-semibold'>
												1+ tablespoon
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Authenticity & Origin */}
						<div className='bg-emerald-50 rounded-sm p-8 border border-emerald-200'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-brand flex items-center'>
								<MapPin className='w-6 h-6 mr-3 text-emerald-600' />
								Balinese Heritage
							</h3>
							<div className='space-y-4 font-body text-neutral-700'>
								<div>
									<h4 className='font-semibold text-burgundy-800 mb-2'>
										Temple Cuisine Tradition:
									</h4>
									<p className='text-sm leading-relaxed'>
										Sambal Bali originated in Balinese Hindu temple 
										cuisine, where the balance of sweet, spicy, 
										and aromatic represents spiritual harmony. 
										Chef Yossie learned this sacred recipe from 
										temple cooks in Ubud.
									</p>
								</div>
								<div>
									<h4 className='font-semibold text-burgundy-800 mb-2'>
										Island Spice Heritage:
									</h4>
									<p className='text-sm leading-relaxed'>
										Bali&apos;s volcanic soil and tropical climate 
										create the perfect environment for aromatic 
										spices. Our galangal, lemongrass, and chilies 
										are sourced from traditional Balinese spice 
										gardens.
									</p>
								</div>
								<div>
									<h4 className='font-semibold text-burgundy-800 mb-2'>
										Cultural Significance:
									</h4>
									<p className='text-sm leading-relaxed'>
										In Bali, sambal represents the island&apos;s 
										philosophy of balance - &quot;Tri Hita Karana&quot; 
										- harmony between spicy heat, sweet palm sugar, 
										and aromatic herbs.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Cooking Guide & Recipes */}
			<section className='py-24 bg-gradient-to-br from-cream-100 to-cream-200'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							Master the Art of
							<span className='text-amber-700 block'>
								Balinese Cooking
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body leading-relaxed'>
							Discover how to use Sambal Bali&apos;s sweet-spicy complexity 
							to transform everyday meals into aromatic Indonesian experiences.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
						{/* Satay Marinade */}
						<div className='bg-gradient-to-br from-amber-50 to-amber-100 rounded-sm p-8 border border-amber-200'>
							<div className='flex items-center mb-4'>
								<Utensils className='w-8 h-8 text-amber-600 mr-3' />
								<div>
									<h3 className='text-xl font-bold text-burgundy-900 font-brand'>
										Perfect Satay
									</h3>
									<p className='text-sm text-amber-700'>
										10-minute marinade
									</p>
								</div>
							</div>
							<div className='space-y-3 text-sm font-body'>
								<p className='text-neutral-700 leading-relaxed'>
									<strong>The Secret:</strong> Mix 2 tsp Sambal Bali 
									with coconut milk and soy sauce. The palm sugar 
									caramelizes beautifully when grilled, creating 
									restaurant-quality satay.
								</p>
								<div className='bg-white/70 rounded p-3'>
									<p className='text-xs text-neutral-600'>
										<strong>Pro Tip:</strong> Add a squeeze of 
										lime juice to brighten the sweetness and 
										enhance the aromatic spices.
									</p>
								</div>
							</div>
						</div>

						{/* Nasi Goreng */}
						<div className='bg-gradient-to-br from-orange-50 to-orange-100 rounded-sm p-8 border border-orange-200'>
							<div className='flex items-center mb-4'>
								<Timer className='w-8 h-8 text-orange-600 mr-3' />
								<div>
									<h3 className='text-xl font-bold text-burgundy-900 font-brand'>
										Authentic Nasi Goreng
									</h3>
									<p className='text-sm text-orange-700'>
										15-min fried rice
									</p>
								</div>
							</div>
							<div className='space-y-3 text-sm font-body'>
								<p className='text-neutral-700 leading-relaxed'>
									<strong>Recipe:</strong> Start with 1-2 tsp Sambal Bali 
									in hot oil, add cold rice, then soy sauce. The sweet 
									heat creates the perfect balance for Indonesia&apos;s 
									national dish.
								</p>
								<div className='bg-white/70 rounded p-3'>
									<p className='text-xs text-neutral-600'>
										<strong>Best For:</strong> Day-old jasmine rice, 
										fried egg on top, and cucumber slices to cool 
										the palate.
									</p>
								</div>
							</div>
						</div>

						{/* Dipping Sauce */}
						<div className='bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-sm p-8 border border-emerald-200'>
							<div className='flex items-center mb-4'>
								<Heart className='w-8 h-8 text-emerald-600 mr-3' />
								<div>
									<h3 className='text-xl font-bold text-burgundy-900 font-brand'>
										Ultimate Dip
									</h3>
									<p className='text-sm text-emerald-700'>
										Instant appetizer
									</p>
								</div>
							</div>
							<div className='space-y-3 text-sm font-body'>
								<p className='text-neutral-700 leading-relaxed'>
									<strong>Simple Mix:</strong> Combine Sambal Bali with 
									coconut cream or Greek yogurt for a cooling dip. 
									Perfect for vegetables, crackers, or grilled meats.
								</p>
								<div className='bg-white/70 rounded p-3'>
									<p className='text-xs text-neutral-600'>
										<strong>Versatile:</strong> Works with spring rolls, 
										roasted vegetables, or as a spread for 
										sandwiches and wraps.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Featured Recipe Spotlight */}
					<div className='bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-sm p-12 text-white'>
						<div className='grid lg:grid-cols-2 gap-8 items-center'>
							<div>
								<h3 className='text-3xl font-bold mb-6 font-brand text-amber-200'>
									Chef Yossie&apos;s Signature:
									<span className='block text-white text-2xl'>
										Balinese Chicken Satay
									</span>
								</h3>
								<div className='space-y-4 font-body'>
									<p className='text-amber-200 leading-relaxed'>
										This is the recipe that made Chef Yossie famous 
										in her Balinese cooking classes - authentic satay 
										with the perfect sweet-spicy balance that captures 
										the soul of Bali.
									</p>
									<div className='grid grid-cols-2 gap-4 text-sm'>
										<div>
											<strong className='text-amber-300'>
												Prep Time:
											</strong>
											<p>20 minutes (+ marinating)</p>
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
											<p>4-6 people</p>
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
											3 tbsp Sambal Bali
										</strong>{" "}
										(the star ingredient)
									</li>
									<li>• 500g chicken thigh, cubed</li>
									<li>• 200ml coconut milk</li>
									<li>• 2 tbsp dark soy sauce</li>
									<li>• 1 tbsp palm sugar (optional extra)</li>
									<li>• 2 tbsp peanut oil</li>
									<li>• Wooden skewers, soaked</li>
									<li>• Cucumber & red onion to serve</li>
								</ul>
								<div className='mt-6'>
									<Link href='/recipes/balinese-chicken-satay'>
										<Button
											variant='primary'
											size='sm'
											className='bg-amber-600 text-burgundy-900 hover:bg-amber-500 font-elegant'
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
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div className='relative'>
							<div className='aspect-[4/3] rounded-sm overflow-hidden shadow-luxury border border-amber-200'>
								<Image
									src='/images/optimized/long-red-chili-lg.webp'
									alt='Traditional Balinese spices used in authentic Sambal Bali - galangal, lemongrass, and chilies'
									width={900}
									height={675}
									className='w-full h-full object-cover'
									loading='lazy'
									sizes='(max-width: 768px) 100vw, 50vw'
								/>
							</div>

							{/* Floating badges */}
							<div className='absolute -top-4 -left-4 bg-amber-50 rounded-full p-4 shadow-gold animate-float border border-amber-300'>
								<Star className='w-6 h-6 text-amber-600' />
							</div>
							<div className='absolute -bottom-4 -right-4 bg-emerald-50 rounded-full p-4 shadow-emerald animate-float delay-1000 border border-emerald-300'>
								<ChefHat className='w-6 h-6 text-emerald-600' />
							</div>
						</div>

						<div>
							<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-8 font-brand'>
								Meet Chef Yossie
								<span className='text-amber-700 block font-script italic text-4xl sm:text-5xl'>
									Your Balinese Guide
								</span>
							</h2>

							<div className='space-y-8 text-lg text-neutral-700 leading-relaxed mb-8 font-body'>
								<p>
									Chef Yossie discovered the secrets of{" "}
									<strong className='text-burgundy-800'>
										authentic Sambal Bali
									</strong>{" "}
									during her culinary training in Ubud, learning from 
									traditional temple cooks who guard centuries-old 
									spice blending techniques.
								</p>

								<p>
									Spending months in Balinese spice gardens and temple 
									kitchens, she mastered the delicate balance of{" "}
									<strong className='text-burgundy-800'>
										sweet palm sugar, aromatic galangal, and fiery chilies
									</strong>{" "}
									that makes Sambal Bali so uniquely addictive.
								</p>

								<p>
									Now bringing these{" "}
									<strong className='text-burgundy-800'>
										sacred recipes
									</strong>{" "}
									to the UK, Chef Yossie ensures every jar captures 
									the spiritual harmony and complex flavors that make 
									Balinese cuisine so beloved worldwide.
								</p>
							</div>

							<div className='grid sm:grid-cols-2 gap-6 mb-8'>
								<div className='flex items-center space-x-3'>
									<MapPin className='w-6 h-6 text-amber-600' />
									<div>
										<p className='font-semibold text-burgundy-900 font-brand'>
											Trained in Ubud
										</p>
										<p className='text-sm text-neutral-600 font-body'>
											Bali, Indonesia
										</p>
									</div>
								</div>
								<div className='flex items-center space-x-3'>
									<Clock className='w-6 h-6 text-amber-600' />
									<div>
										<p className='font-semibold text-burgundy-900 font-brand'>
											Temple Kitchen Training
										</p>
										<p className='text-sm text-neutral-600 font-body'>
											Traditional methods
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
									Read Chef Yossie&apos;s Bali Story
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Comparison Section - AI Search Optimized */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto'>
						<h2 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 text-center font-brand'>
							Sambal Bali vs Tabasco - Sweet Heat Comparison
						</h2>
						<p className='text-xl text-gray-600 text-center mb-12 font-body'>
							See how traditional Indonesian sweet-spicy sambal compares 
							to America&apos;s classic hot sauce
						</p>

						<ComparisonTable
							title='Sambal Bali vs Tabasco - Complete Comparison'
							items={[
								{
									category: "Heat Level (Scoville)",
									sambal: "8,000-12,000 SHU",
									hpSauce: "2,500-5,000 SHU",
									winner: "sambal",
									explanation:
										"Sambal Bali provides 2-3x more heat with aromatic complexity",
								},
								{
									category: "Ingredients",
									sambal: "Chilies, palm sugar, galangal, lemongrass, candlenuts",
									hpSauce: "Peppers, vinegar, salt",
									winner: "sambal",
									explanation:
										"Traditional Indonesian spices vs simple Western ingredients",
								},
								{
									category: "Flavor Profile",
									sambal: "Sweet-spicy with aromatic complexity",
									hpSauce: "Tangy, vinegar-forward heat",
									winner: "sambal",
									explanation:
										"Complex layered flavors vs one-dimensional heat",
								},
								{
									category: "Sweetness",
									sambal: "Natural palm sugar (caramelized)",
									hpSauce: "No sweetness",
									winner: "sambal",
									explanation:
										"Palm sugar creates unique sweet-heat balance",
								},
								{
									category: "Texture",
									sambal: "Rich paste, chunky texture",
									hpSauce: "Thin liquid sauce",
									winner: "sambal",
									explanation:
										"Better for marinades and cooking applications",
								},
								{
									category: "Cooking Method",
									sambal: "Slow-cooked traditional method",
									hpSauce: "Fermented then filtered",
									winner: "sambal",
									explanation:
										"Traditional cooking develops complex flavors",
								},
								{
									category: "Cultural Heritage",
									sambal: "Balinese temple cuisine",
									hpSauce: "Louisiana Creole tradition",
									winner: "context",
									explanation:
										"Both have authentic cultural significance",
								},
								{
									category: "Versatility",
									sambal: "Condiment, marinade, cooking ingredient",
									hpSauce: "Primarily condiment",
									winner: "sambal",
									explanation:
										"Works across more cooking applications",
								},
								{
									category: "Availability",
									sambal: "Specialty Indonesian sources",
									hpSauce: "Widely available",
									winner: "context",
									explanation:
										"Depends on access to authentic products",
								},
							]}
							summary='Sambal Bali offers superior heat complexity, authentic palm sugar sweetness, and aromatic spice depth, while Tabasco provides tangy heat and wide availability. For sweet-spicy complexity and authentic Indonesian flavors, Sambal Bali is the clear winner.'
						/>

						<div className='mt-12 bg-white rounded-lg p-8 border border-amber-200'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-4 font-brand'>
								Why Choose Authentic Sambal Bali?
							</h3>
							<div className='grid md:grid-cols-2 gap-6'>
								<div>
									<h4 className='font-semibold text-amber-700 mb-2'>
										For Sweet-Heat Lovers:
									</h4>
									<ul className='text-gray-700 space-y-1 text-sm'>
										<li>• Perfect balance of sweet palm sugar and chili heat</li>
										<li>• Complex aromatic spices create layered flavors</li>
										<li>• Rich paste texture perfect for marinades</li>
										<li>• Traditional slow-cooking develops caramelized notes</li>
									</ul>
								</div>
								<div>
									<h4 className='font-semibold text-amber-700 mb-2'>
										For Indonesian Cooking:
									</h4>
									<ul className='text-gray-700 space-y-1 text-sm'>
										<li>• Essential for authentic satay marinades</li>
										<li>• Perfect base for nasi goreng (fried rice)</li>
										<li>• Ideal dipping sauce for Asian cuisines</li>
										<li>• Balinese temple recipe authenticity</li>
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
						<h2 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 text-center font-brand'>
							Frequently Asked Questions
						</h2>
						<p className='text-xl text-gray-600 text-center mb-12 font-body'>
							Everything you need to know about authentic 
							Balinese Sambal Bali
						</p>

						<div className='space-y-6'>
							{faqData.map((faq, index) => (
								<div key={index} className='bg-amber-50 rounded-lg p-6 border border-amber-200'>
									<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
										{faq.question}
									</h3>
									<p className='text-gray-700 font-body leading-relaxed'>
										{faq.answer}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Trust Indicators */}
			<section className='py-12 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-brand'>
							Shop with Confidence
						</h2>
						<p className='text-neutral-600 font-body'>
							Your satisfaction and security are our top priorities
						</p>
					</div>
					<TrustIndicators layout="compact" className="justify-center" />
				</div>
			</section>

			{/* Customer Reviews Section */}
			<section className='py-16 bg-amber-50'>
				<div className='container mx-auto px-4'>
					<CustomerReviews
						reviews={productData.reviews}
						title='What Our Customers Say About Sambal Bali'
					/>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className='py-16 sm:py-20 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl sm:text-4xl font-bold mb-6 font-brand'>
						Ready to Experience Sweet Spicy Perfection?
					</h2>

					<p className='text-xl text-gold-200 mb-10 max-w-2xl mx-auto font-body'>
						Join hundreds of UK customers who&apos;ve
						discovered the perfect balance of Indonesian heat
						and sweetness in Chef Yossie&apos;s Sambal Bali.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/shop'>
							<Button
								variant='primary'
								size='lg'
								className='font-elegant text-lg px-8 py-4'
							>
								Order Sambal Bali - £7.49
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
			</section>
		</div>
	);
}
