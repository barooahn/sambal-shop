import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/simple-button";
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
	Package,
	Gift,
	Users,
} from "@/components/ui/icons";
import ProductSchema from "@/components/seo/ProductSchema";

export const metadata = {
	title: "Indonesian Food Gift Set UK | Authentic Sambal Gift Box",
	description:
		"Perfect Indonesian food gift set featuring Chef Yossie&apos;s authentic sambal collection. Beautifully packaged with recipe cards. Ideal for food lovers, birthdays, and special occasions.",
	keywords:
		"Indonesian food gifts UK, sambal gift set, Indonesian condiment gift box, Chef Yossie gift set, authentic Indonesian food gifts, spicy food lover gifts, unique food gifts UK",
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/gift-set-indonesian",
	},
	openGraph: {
		title: "Indonesian Food Gift Set UK | Authentic Sambal Gift Box",
		description:
			"Beautifully packaged authentic Indonesian sambal gift set. Perfect for food lovers who appreciate unique, artisanal condiments.",
		type: "website",
		images: [
			{
				url: "https://sambal-shop.vercel.app/images/sambal-oelek-lg.webp",
				width: 400,
				height: 400,
				alt: "Indonesian Food Gift Set - Authentic Sambal Collection",
			},
		],
	},
};

// Product schema for Gift Set
const productData = {
	name: "Indonesian Sambal Gift Set",
	description:
		"Beautifully packaged gift set with Sambal Oelek and Sambal Bali plus recipe cards. Authentic Indonesian flavors by Chef Yossie.",
	brand: "Spice Island Indonesia",
	category: "Gift Sets",
	image: "https://www.spiceislandindonesia.com/images/Spice Island Indonesia Complete Packaging System Mockup.webp",
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
					maxValue: 4,
					unitCode: "d",
				},
			},
		},
		{
			"@type": "OfferShippingDetails",
			shippingRate: {
				"@type": "MonetaryAmount",
				value: 3.49,
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
					maxValue: 4,
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
		returnShippingFeesAmount: {
			"@type": "MonetaryAmount",
			currency: "GBP",
			value: "3.49",
		},
	},
	offers: [
		{
			name: "Heritage Sambal Gift Set",
			description:
				"Two 185g sambals + recipe cards in premium gift box",
			price: "19.99",
			priceCurrency: "GBP",
			availability: "https://schema.org/InStock",
			sku: "SII-GIFT-SET",
			url: "https://www.spiceislandindonesia.com/gift-set-indonesian",
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
		reviewCount: 52,
		bestRating: 5,
		worstRating: 1,
	},
};

export default function GiftSetIndonesianPage() {
	return (
		<div className='min-h-screen bg-coconut-50'>
			{/* Hero Section */}
			<section className='py-16 sm:py-20 lg:py-14 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-72 h-72 lg:w-80 lg:h-80 bg-gold-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-72 h-72 lg:w-80 lg:h-80 bg-gold-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 lg:gap-8 items-center'>
						{/* Left side - Content */}
						<div className='text-center lg:text-left'>
							<Badge className='bg-burgundy-800 text-gold-300 mb-6 px-6 py-3 text-lg font-semibold border border-gold-600/30'>
								<Gift className='w-5 h-5 mr-2' />
								Perfect for Food Lovers
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-brand'>
								<span className='text-white block mb-2'>
									Indonesian Food
								</span>
								<span className='text-gold-300 block mb-2'>
									Gift Set
								</span>
								<span className='text-gold-200 text-2xl sm:text-3xl lg:text-4xl font-script italic'>
									Authentic Flavors, Beautifully
									Packaged
								</span>
							</h1>

							<p className='text-xl sm:text-2xl text-gold-200 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body'>
								{/* Product Schema for Merchant listings */}
								<ProductSchema
									name={productData.name}
									description={
										productData.description
									}
									brand={productData.brand}
									category={productData.category}
									image={productData.image}
									offers={productData.offers}
									aggregateRating={
										productData.aggregateRating
									}
									additionalProperties={{
										shippingDetails:
											productData.shippingDetails,
										hasMerchantReturnPolicy:
											productData.hasMerchantReturnPolicy,
									}}
								/>
								Give the gift of authentic Indonesian
								cuisine with Chef Yossie&apos;s
								beautifully curated sambal collection.
								Perfect for birthdays, holidays, or
								introducing someone special to
								Indonesian flavors.
							</p>

							{/* Key Features */}
							<div className='grid sm:grid-cols-2 gap-4 mb-10'>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Gift className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Beautifully Gift Wrapped
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<ChefHat className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Chef&apos;s Recipe Cards
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Award className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Premium Presentation
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Truck className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Free Gift Delivery
									</span>
								</div>
							</div>

							<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
								<Link href='/shop'>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant text-lg px-8 py-4'
									>
										Order Gift Set - £19.99
									</Button>
								</Link>
								<Link href='/sample-pack-try-first'>
									<Button
										variant='outline'
										size='lg'
										className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 text-lg px-8 py-4'
									>
										Try Samples First
									</Button>
								</Link>
							</div>
						</div>

						{/* Right side - Product Image */}
						<div className='relative'>
							<div className='relative w-full max-w-md mx-auto'>
								<div className='absolute inset-0 bg-gradient-to-r from-gold-600/30 to-gold-400/30 rounded-full blur-3xl'></div>
								<Image
									src='/images/sambal-oelek-lg.webp'
									alt='Indonesian Food Gift Set - Authentic Sambal Collection'
									width={400}
									height={400}
									className='relative z-10 w-full h-auto drop-shadow-2xl'
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* What&apos;s Included Section */}
			<section className='py-16 sm:py-20 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							What&apos;s in the Gift Set
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							A carefully curated collection of authentic
							Indonesian sambal, beautifully presented with
							everything needed to start their Indonesian
							culinary journey.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
						<Card className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Package className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-lg font-semibold text-burgundy-900 mb-3 font-brand'>
									Sambal Oelek 185g
								</h3>
								<p className='text-neutral-600 text-sm font-body'>
									Pure chili paste - the foundation
									of Indonesian cooking
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Heart className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-lg font-semibold text-burgundy-900 mb-3 font-brand'>
									Sambal Bali 185g
								</h3>
								<p className='text-neutral-600 text-sm font-body'>
									Sweet spicy blend with aromatic
									Balinese spices
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-4'>
									<ChefHat className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-lg font-semibold text-burgundy-900 mb-3 font-brand'>
									Recipe Cards
								</h3>
								<p className='text-neutral-600 text-sm font-body'>
									Chef Yossie&apos;s favorite recipes
									and serving suggestions
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Gift className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-lg font-semibold text-burgundy-900 mb-3 font-brand'>
									Premium Packaging
								</h3>
								<p className='text-neutral-600 text-sm font-body'>
									Beautiful gift box with
									Indonesian-inspired design
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Perfect Gift For Section */}
			<section className='py-16 sm:py-20 bg-gradient-to-br from-cream-50 to-cream-100'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Perfect Gift For
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							Whether they&apos;re culinary adventurers or
							Indonesian cuisine lovers, this gift set
							brings authentic flavors and cultural
							discovery.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						<Card className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-6'>
									<Users className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
									Food Enthusiasts
								</h3>
								<p className='text-neutral-600 font-body'>
									Perfect for friends who love trying
									new cuisines and appreciate
									authentic, artisanal condiments
									from around the world.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-6'>
									<ChefHat className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
									Home Cooks
								</h3>
								<p className='text-neutral-600 font-body'>
									Ideal for cooking enthusiasts who
									want to expand their spice cabinet
									with professional-grade Indonesian
									condiments.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-6'>
									<Heart className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
									Special Occasions
								</h3>
								<p className='text-neutral-600 font-body'>
									Thoughtful gift for birthdays,
									holidays, housewarmings, or anyone
									who appreciates unique, culturally
									authentic food experiences.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Gift Occasions Section */}
			<section className='py-16 sm:py-20 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Perfect for Every Occasion
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							A unique gift that shows thoughtfulness and
							introduces recipients to authentic Indonesian
							culinary culture.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{[
							{
								title: "Birthdays",
								description:
									"Unique alternative to wine or chocolates",
								icon: Gift,
							},
							{
								title: "Holidays",
								description:
									"Christmas, Easter, or special celebrations",
								icon: Star,
							},
							{
								title: "Housewarmings",
								description:
									"Help them spice up their new kitchen",
								icon: MapPin,
							},
							{
								title: "Thank You",
								description:
									"Memorable way to show appreciation",
								icon: Heart,
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

			{/* Why This Makes a Great Gift Section */}
			<section className='py-16 sm:py-20 bg-gradient-to-br from-cream-50 to-cream-100'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<div>
							<Badge className='bg-burgundy-100 text-burgundy-800 mb-6 px-4 py-2 font-semibold'>
								<Award className='w-4 h-4 mr-2' />
								Premium Gift Experience
							</Badge>

							<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
								More Than Just Condiments
							</h2>

							<p className='text-lg text-neutral-600 mb-6 font-body'>
								This isn&apos;t just a food gift -
								it&apos;s a cultural experience.
								Recipients discover authentic Indonesian
								flavors while learning about traditional
								recipes and cooking techniques from a
								professional chef.
							</p>

							<ul className='space-y-4 mb-8'>
								<li className='flex items-start'>
									<CheckCircle className='w-6 h-6 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
									<span className='text-neutral-600 font-body'>
										<strong>Educational:</strong>{" "}
										Recipe cards teach authentic
										Indonesian cooking techniques
									</span>
								</li>
								<li className='flex items-start'>
									<CheckCircle className='w-6 h-6 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
									<span className='text-neutral-600 font-body'>
										<strong>Memorable:</strong>{" "}
										Unique gift they&apos;ll
										remember and use for months
									</span>
								</li>
								<li className='flex items-start'>
									<CheckCircle className='w-6 h-6 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
									<span className='text-neutral-600 font-body'>
										<strong>Authentic:</strong>{" "}
										Made by professional
										Indonesian chef using
										traditional recipes
									</span>
								</li>
								<li className='flex items-start'>
									<CheckCircle className='w-6 h-6 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
									<span className='text-neutral-600 font-body'>
										<strong>Beautiful:</strong>{" "}
										Premium packaging worthy of
										special occasions
									</span>
								</li>
							</ul>

							<div className='flex flex-col sm:flex-row gap-4'>
								<Link href='/shop'>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant'
									>
										Order Gift Set - £19.99
									</Button>
								</Link>
								<Link href='/chef'>
									<Button
										variant='outline'
										size='lg'
										className='font-elegant border-burgundy-600 text-burgundy-600 hover:bg-burgundy-600 hover:text-white'
									>
										Meet Chef Yossie
									</Button>
								</Link>
							</div>
						</div>

						<div className='relative'>
							<div className='bg-gradient-to-br from-burgundy-100 to-gold-100 rounded-sm p-8'>
								<div className='text-center'>
									<div className='w-24 h-24 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-6'>
										<Gift className='w-12 h-12 text-white' />
									</div>
									<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
										Gift Set Value
									</h3>
									<div className='space-y-3 text-left text-neutral-600 font-body'>
										<div className='flex justify-between'>
											<span>
												Sambal Oelek 185g
											</span>
											<span>£7.49</span>
										</div>
										<div className='flex justify-between'>
											<span>
												Sambal Bali 185g
											</span>
											<span>£7.49</span>
										</div>
										<div className='flex justify-between'>
											<span>Recipe Cards</span>
											<span>£2.99</span>
										</div>
										<div className='flex justify-between'>
											<span>
												Premium Gift Box
											</span>
											<span>£4.99</span>
										</div>
										<div className='border-t border-burgundy-200 pt-3 flex justify-between font-semibold text-burgundy-900'>
											<span>Total Value</span>
											<span>£22.96</span>
										</div>
										<div className='text-center'>
											<Badge className='bg-burgundy-600 text-white px-4 py-2 text-lg'>
												Gift Set Price:
												£19.99
											</Badge>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className='py-16 sm:py-20 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl sm:text-4xl font-bold mb-6 font-brand'>
						Give the Gift of Indonesian Authenticity
					</h2>

					<p className='text-xl text-gold-200 mb-10 max-w-2xl mx-auto font-body'>
						Beautifully packaged, thoughtfully curated, and
						guaranteed to create memorable culinary
						experiences. Order today for free UK delivery.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/shop'>
							<Button
								variant='primary'
								size='lg'
								className='font-elegant text-lg px-8 py-4'
							>
								Order Gift Set - £19.99
							</Button>
						</Link>
						<Link href='/sample-pack-try-first'>
							<Button
								variant='outline'
								size='lg'
								className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 text-lg px-8 py-4'
							>
								Try Samples First
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
