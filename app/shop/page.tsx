// import { ProductCard } from "@/components/product-card";
import { products } from "@/src/stripe-config";
import {
	ShoppingBag,
	Star,
	Flame,
	Sparkles,
	Zap,
	// ArrowRight,
	Info,
	Bell,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NewsletterSection from "@/components/home/NewsletterSection";
import ProductSchema from "@/components/seo/ProductSchema";
import Image from "next/image";
import StarRating from "@/components/ui/StarRating";

export const metadata = {
	title: "Shop Authentic Indonesian Sambal UK | Chef Yossie Premium Collection | Buy Online",
	description:
		"Shop authentic Indonesian sambal online - Sambal Oelek (25,000 SHU), Sambal Bali (aromatic galangal & lemongrass), Sambal Goreng (sweet & spicy). Made by Chef Yossie using traditional recipes. Free UK delivery over £20. Secure checkout with Stripe.",
	keywords:
		"buy Indonesian sambal online UK, shop authentic sambal UK, Chef Yossie sambal collection, sambal oelek buy UK, sambal bali buy online, sambal goreng purchase UK, Indonesian chili paste shop, authentic sambal delivery UK, traditional Indonesian condiments buy online",
	openGraph: {
		title: "Shop Authentic Indonesian Sambal UK | Chef Yossie Premium Collection",
		description:
			"Buy authentic Indonesian sambal online. Three varieties: pure heat, aromatic complexity, sweet-spicy harmony. Free UK delivery over £20.",
		type: "website",
		images: [
			{
				url: "https://spiceislandindonesia.com/images/Spice Island Indonesia Complete Packaging System Mockup.webp",
				width: 600,
				height: 600,
				alt: "Shop Authentic Indonesian Sambal Collection by Chef Yossie",
			},
		],
	},
};

export default function ShopPage() {
	const SALES_ENABLED = process.env.NEXT_PUBLIC_SALES_ENABLED === "true";

	const samplePackSchema = {
		name: "Sambal Sample Pack (Try First)",
		description:
			"Try-before-you-buy tasting set: Sambal Oelek + Sambal Bali in small jars.",
		brand: "Spice Island Indonesia",
		category: "Condiments & Sauces",
		image: "https://spiceislandindonesia.com/images/optimized/sambal-sample-responsive.webp",
		offers: [
			{
				name: "Sample Pack",
				description:
					"Two 50ml tasting jars: Oelek (pure fire) + Bali (sweet heat)",
				price: "4.99",
				priceCurrency: "GBP",
				availability: "https://schema.org/PreOrder",
				url: "https://spiceislandindonesia.com/sample-pack-try-first",
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
			reviewCount: 24,
			bestRating: 5,
			worstRating: 1,
		},
	};

	// Sample product for try-before-you-buy
	const sampleProduct = {
		id: "sample-pack",
		priceId: "sample-price",
		name: "Sambal Sample Pack",
		description:
			"Try-before-you-buy tasting set: Sambal Oelek + Sambal Bali in small jars.",
		mode: "payment" as const,
		price: "£4.99",
		image: "/images/optimized/sambal-sample-lg.webp",
		detailedName: "Sambal Sample Pack",
		subtitle: "Try First",
		scoville: "Various",
		heatLevel: "Try All Levels",
		color: "slate",
		rating: 4.8,
		reviews: 24,
		url: "/sample-pack-try-first",
		keyFeatures: [
			"Two 45g sample jars",
			"Perfect introduction",
			"Risk-free tasting",
		],
		badge: "Try First",
		badgeIcon: <Star className='w-4 h-4' />,
	};

	// Enhanced product data with images and details
	const enhancedProducts = [
		sampleProduct,
		{
			...products.find((p) => p.name.includes("Oelek"))!,
			image: "/images/optimized/sambal-oelek-lg.webp",
			detailedName: "Sambal Oelek",
			subtitle: "Pure Indonesian Fire",
			scoville: "25,000 SHU",
			heatLevel: "Very Hot",
			color: "burgundy",
			rating: 4.9,
			reviews: 127,
			url: "/sambal-oelek-uk",
			keyFeatures: [
				"Pure chili intensity",
				"Perfect for cooking",
				"No preservatives",
			],
			badge: "Most Popular",
			badgeIcon: <Flame className='w-4 h-4' />,
		},
		{
			...products.find((p) => p.name.includes("Bali"))!,
			image: "/images/optimized/Spice Island Indonesia Sambal Bali 185g Label-lg.webp",
			detailedName: "Sambal Bali",
			subtitle: "Aromatic Sophistication",
			scoville: "14,000 SHU",
			heatLevel: "Medium-Hot",
			color: "emerald",
			rating: 4.9,
			reviews: 94,
			url: "/sambal-bali-aromatic-spicy",
			keyFeatures: [
				"Galangal & lemongrass",
				"Sophisticated complexity",
				"Restaurant-quality",
			],
			badge: "Chef's Choice",
			badgeIcon: <Sparkles className='w-4 h-4' />,
		},
		{
			...products.find((p) => p.name.includes("Goreng"))!,
			image: "/images/optimized/sambal-goreng-lg.webp",
			detailedName: "Sambal Goreng",
			subtitle: "Sweet & Spicy Harmony",
			scoville: "12,000 SHU",
			heatLevel: "Medium",
			color: "amber",
			rating: 4.8,
			reviews: 89,
			url: "/sambal-goreng-uk",
			keyFeatures: [
				"Palm sugar sweetness",
				"Traditional fried method",
				"Perfect for nasi goreng",
			],
			badge: "Traditional",
			badgeIcon: <Zap className='w-4 h-4' />,
		},
	];

	const getColorClasses = (color: string) => {
		const colors = {
			slate: {
				bg: "from-slate-900 to-slate-800",
				accent: "text-slate-300",
				border: "border-slate-200",
				cardBg: "bg-slate-50",
				button: "bg-slate-600 hover:bg-slate-700",
				badge: "bg-slate-600",
			},
			burgundy: {
				bg: "from-burgundy-900 to-burgundy-800",
				accent: "text-gold-300",
				border: "border-burgundy-200",
				cardBg: "bg-burgundy-50",
				button: "bg-burgundy-600 hover:bg-burgundy-700",
				badge: "bg-burgundy-600",
			},
			emerald: {
				bg: "from-emerald-900 to-emerald-800",
				accent: "text-teal-300",
				border: "border-emerald-200",
				cardBg: "bg-emerald-50",
				button: "bg-emerald-600 hover:bg-emerald-700",
				badge: "bg-emerald-600",
			},
			amber: {
				bg: "from-amber-900 to-amber-800",
				accent: "text-orange-300",
				border: "border-amber-200",
				cardBg: "bg-amber-50",
				button: "bg-amber-600 hover:bg-amber-700",
				badge: "bg-amber-600",
			},
		};
		return colors[color as keyof typeof colors] || colors.burgundy;
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100'>
			{/* Enhanced Hero Section */}
			<section className='py-16 sm:py-20 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-gold-900 text-white relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-96 h-96 bg-gold-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-96 h-96 bg-burgundy-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<ShoppingBag className='w-16 h-16 mx-auto mb-6 text-gold-300' />
					<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight font-brand'>
						<span className='text-white block mb-2'>
							Shop Authentic
						</span>
						<span className='text-gold-300 block'>
							Indonesian Sambal
						</span>
					</h1>
					<p className='text-xl sm:text-2xl text-gold-200 mb-8 max-w-4xl mx-auto leading-relaxed font-body'>
						Three distinctive sambal varieties made by Chef
						Yossie using traditional family recipes. From pure
						fire to aromatic sophistication.
					</p>

					{SALES_ENABLED ? (
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
							<Badge className='bg-emerald-600 text-white text-lg px-6 py-2'>
								✓ Free UK Delivery Over £20
							</Badge>
							<Badge className='bg-gold-600 text-burgundy-900 text-lg px-6 py-2'>
								⚡ Secure Stripe Checkout
							</Badge>
							<Badge className='bg-burgundy-700 text-gold-200 text-lg px-6 py-2'>
								🌶️ Authentic Recipes
							</Badge>
						</div>
					) : (
						<Badge className='bg-amber-600 text-white text-lg px-8 py-4 mb-12'>
							🔔 Coming Soon - Join the UK VIP List for
							Launch Updates
						</Badge>
					)}
				</div>
			</section>

			{/* Enhanced Products Section */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							Our Sambal Collection
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body leading-relaxed'>
							Each sambal offers a unique Indonesian
							experience - choose your perfect heat level
							and flavor complexity.
						</p>
					</div>

					<div className='grid md:grid-cols-2 xl:grid-cols-4 gap-12'>
						{enhancedProducts.map((product) => {
							const colorClasses = getColorClasses(
								product.color
							);
							return (
								<div
									key={product.id}
									className={`relative bg-white rounded-sm shadow-luxury border-2 ${colorClasses.border} overflow-hidden group hover:shadow-2xl transition-all duration-300`}
								>
									{/* Badge */}
									<div
										className={`absolute top-4 right-4 ${colorClasses.badge} text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 z-10`}
									>
										{product.badgeIcon}
										<span>{product.badge}</span>
									</div>

									{/* Product Image */}
									<div
										className={`${colorClasses.cardBg} p-8 group-hover:scale-105 transition-transform duration-300`}
									>
										<div className='aspect-square flex items-center justify-center'>
											<Image
												src={product.image}
												alt={`${product.detailedName} - ${product.subtitle}`}
												width={500}
												height={500}
												className='w-full h-full object-contain drop-shadow-xl'
												sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, (max-width: 1920px) 400px, 500px'
												priority={product.id === 'sample-pack'}
												loading={product.id === 'sample-pack' ? 'eager' : 'lazy'}
											/>
										</div>
									</div>

									{/* Product Details */}
									<div className='p-8'>
										<div className='flex items-center justify-between mb-4'>
											<h3 className='text-2xl font-bold text-burgundy-900 font-brand'>
												{
													product.detailedName
												}
											</h3>
											<span className='text-2xl font-bold text-burgundy-900'>
												{product.price}
											</span>
										</div>

										<p className='text-lg font-semibold text-gold-700 mb-4 font-brand'>
											{product.subtitle}
										</p>
										<p className='text-neutral-700 mb-6 leading-relaxed font-body'>
											{product.description}
										</p>

										{/* Heat Level & Rating */}
										<div className='space-y-3 mb-6'>
											<div className='flex items-center justify-between text-sm'>
												<span className='font-semibold text-neutral-600'>
													Heat Level:
												</span>
												<span className='font-bold'>
													{
														product.heatLevel
													}{" "}
													(
													{
														product.scoville
													}
													)
												</span>
											</div>
											<div className='flex items-center justify-between text-sm'>
												<span className='font-semibold text-neutral-600'>
													Customer
													Rating:
												</span>
												<div className='flex items-center space-x-2'>
													<StarRating
														rating={
															product.rating
														}
														size='sm'
													/>
													<span className='text-xs text-neutral-500'>
														(
														{
															product.reviews
														}
														)
													</span>
												</div>
											</div>
										</div>

										{/* Action Buttons */}
										<div className='space-y-3'>
											<Link
												href={product.url}
												className='block'
											>
												<Button
													variant='outline'
													size='sm'
													className='w-full font-elegant mb-2 border-neutral-300'
												>
													<Info className='w-4 h-4 mr-2' />
													Full Details &
													Reviews
												</Button>
											</Link>

											{/* Removed embedded ProductCard to avoid duplicate content. Purchase handled on product detail pages. */}

											{/* Sample pack custom button */}
											{product.id ===
												"sample-pack" &&
												SALES_ENABLED && (
													<Link href='/sample-pack-try-first'>
														<Button className='w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3'>
															<Star className='w-4 h-4 mr-2' />
															Try
															Sample
															Pack
															-{" "}
															{
																product.price
															}
														</Button>
													</Link>
												)}

											{/* Sample pack waitlist for when sales disabled */}
											{product.id ===
												"sample-pack" &&
												!SALES_ENABLED && (
													<Button className='w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3'>
														<Bell className='w-4 h-4 mr-2' />
														Join
														Waitlist
													</Button>
												)}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Enhanced CTA Section */}
			{SALES_ENABLED ? (
				<section className='py-24 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-white'>
					<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
						{/* Product Schema for Sample Pack */}
						<div className='hidden'>
							<ProductSchema
								name={samplePackSchema.name}
								description={
									samplePackSchema.description
								}
								brand={samplePackSchema.brand}
								category={samplePackSchema.category}
								image={samplePackSchema.image}
								offers={samplePackSchema.offers}
								aggregateRating={
									samplePackSchema.aggregateRating
								}
								additionalProperties={{}}
							/>
						</div>

						<h2 className='text-4xl sm:text-5xl font-bold mb-6 font-brand'>
							Ready to Experience
							<span className='text-gold-300 block'>
								Authentic Indonesian Heat?
							</span>
						</h2>
						<p className='text-xl text-gold-200 mb-8 font-body'>
							Join thousands of UK customers who've
							discovered the difference authentic sambal
							makes. Each product page has detailed
							information, cooking guides, and customer
							reviews.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
							<Link href='/sample-pack-try-first'>
								<Button
									variant='primary'
									size='lg'
									className='font-elegant text-lg px-8 py-4'
								>
									🌶️ Try Sample Pack First
								</Button>
							</Link>
							<Link href='/products'>
								<Button
									variant='outline'
									size='lg'
									className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 text-lg px-8 py-4'
								>
									📋 Compare All Products
								</Button>
							</Link>
						</div>

						<div className='flex items-center justify-center space-x-8 text-gold-200 text-sm'>
							<div className='flex items-center space-x-2'>
								<ShoppingBag className='w-4 h-4' />
								<span className='font-body'>
									Secure Stripe Checkout
								</span>
							</div>
							<div className='flex items-center space-x-2'>
								<span>🚚</span>
								<span className='font-body'>
									Free UK delivery over £20
								</span>
							</div>
							<div className='flex items-center space-x-2'>
								<span>🛡️</span>
								<span className='font-body'>
									30-day guarantee
								</span>
							</div>
						</div>
					</div>
				</section>
			) : (
				<div className='py-24'>
					<NewsletterSection />
				</div>
			)}
		</div>
	);
}
