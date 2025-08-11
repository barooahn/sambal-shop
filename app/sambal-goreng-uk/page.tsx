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
	Zap,
} from "lucide-react";

export const metadata = {
	title: "Authentic Sambal Goreng UK | Traditional Fried Indonesian Chili Paste | Sweet & Spicy | Chef Yossie Recipe",
	description:
		"Discover authentic sambal goreng - traditional Indonesian fried chili paste with sweet & spicy complexity. Made by Chef Yossie using ancestral recipes from Java. Perfect for nasi goreng, grilled meats & authentic Indonesian dishes. Free UK delivery over £20.",
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
		<>
			{/* Breadcrumbs */}
			<nav
				aria-label='Breadcrumb'
				className='px-4 sm:px-6 lg:px-8 pt-4'
			>
				<ol className='flex items-center gap-2 text-sm text-neutral-600'>
					<li>
						<Link href='/shop' className='hover:underline'>
							Shop
						</Link>
					</li>
					<li aria-hidden>›</li>
					<li className='text-neutral-900 font-medium'>
						Sambal Goreng
					</li>
				</ol>
			</nav>
			<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100'>
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
							<p className='font-semibold text-amber-900'>
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

				<section className='py-16 sm:py-24 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 text-white relative overflow-hidden'>
					<div className='absolute top-0 left-0 w-96 h-96 bg-orange-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl'></div>
					<div className='absolute bottom-0 right-0 w-96 h-96 bg-amber-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

					<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='grid lg:grid-cols-2 gap-12 items-center'>
							{/* Left side - Content */}
							<div className='text-center lg:text-left'>
								<Badge className='bg-amber-800 text-orange-300 mb-6 px-6 py-3 text-lg font-semibold border border-orange-600/30'>
									<ChefHat className='w-5 h-5 mr-2' />
									Traditional Javanese Recipe
								</Badge>

								<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight font-brand'>
									<span className='text-white block mb-2'>
										Authentic Indonesian
									</span>
									<span className='text-orange-300 block mb-2'>
										Sambal Goreng UK
									</span>
									<span className='text-orange-200 text-2xl sm:text-3xl lg:text-4xl font-script italic'>
										Sweet & Spicy Fried Chili
										Paste
									</span>
								</h1>

								<div className='space-y-6 mb-8 max-w-2xl mx-auto lg:mx-0'>
									<p className='text-xl sm:text-2xl text-orange-200 leading-relaxed font-body'>
										Experience the{" "}
										<strong className='text-orange-100'>
											soul of Indonesian
											cooking
										</strong>{" "}
										with our traditional sambal
										goreng - slowly fried until
										caramelized perfection.
									</p>

									<p className='text-lg text-orange-300 leading-relaxed font-body'>
										Made with{" "}
										<em>
											real palm sugar,
											tamarind, and aromatic
											spices
										</em>{" "}
										using Chef Yossie&apos;s
										ancestral Javanese recipe.
										Sweet meets spicy in perfect
										harmony.
									</p>
								</div>

								{/* Customer Rating */}
								<div className='flex justify-center lg:justify-start mb-10'>
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
											className='text-orange-200'
										/>
									</div>
								</div>

								{/* Key Features */}
								<div className='grid sm:grid-cols-2 gap-4 mb-10'>
									<div className='flex items-center justify-center lg:justify-start space-x-3'>
										<div className='w-8 h-8 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center'>
											<Flame className='w-4 h-4 text-amber-900' />
										</div>
										<span className='text-orange-200 font-medium font-elegant'>
											Sweet & Spicy Balance
										</span>
									</div>
									<div className='flex items-center justify-center lg:justify-start space-x-3'>
										<div className='w-8 h-8 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center'>
											<Clock className='w-4 h-4 text-amber-900' />
										</div>
										<span className='text-orange-200 font-medium font-elegant'>
											Slow-Cooked Traditional
											Method
										</span>
									</div>
									<div className='flex items-center justify-center lg:justify-start space-x-3'>
										<div className='w-8 h-8 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center'>
											<MapPin className='w-4 h-4 text-amber-900' />
										</div>
										<span className='text-orange-200 font-medium font-elegant'>
											Ancestral Javanese Recipe
										</span>
									</div>
									<div className='flex items-center justify-center lg:justify-start space-x-3'>
										<div className='w-8 h-8 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center'>
											<Truck className='w-4 h-4 text-amber-900' />
										</div>
										<span className='text-orange-200 font-medium font-elegant'>
											UK Wide Delivery
										</span>
									</div>
								</div>

								{/* CTA Buttons */}
								<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
									<Link href='/shop'>
										<Button
											variant='primary'
											size='lg'
											className='font-elegant text-lg px-8 py-4 bg-orange-600 hover:bg-orange-500'
										>
											Order Sambal Goreng Now -
											£8.99
										</Button>
									</Link>
									<Link href='/shop'>
										<Button
											variant='outline'
											size='lg'
											className='font-elegant border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-amber-900 text-lg px-8 py-4'
										>
											Try Sample First - £3.49
										</Button>
									</Link>
								</div>
							</div>

							{/* Right side - Product Image */}
							<div className='relative'>
								<div className='relative max-w-lg mx-auto'>
									<div className='aspect-square rounded-sm overflow-hidden shadow-luxury bg-gradient-to-br from-amber-900/10 to-orange-600/10 p-8'>
										<div className='w-full h-full rounded-sm flex items-center justify-center'>
											<Image
												src='/images/optimized/sambal-goreng-lg.webp'
												alt='Authentic Indonesian Sambal Goreng - Sweet & Spicy Fried Chili Paste by Chef Yossie'
												width={400}
												height={400}
												className='w-full h-full object-contain drop-shadow-2xl'
												priority
												sizes='(max-width: 768px) 100vw, 50vw'
											/>
										</div>
									</div>

									{/* Floating badges */}
									<div className='absolute -top-4 -left-4 bg-orange-500 text-amber-900 rounded-full p-4 shadow-luxury animate-float border border-orange-300'>
										<Zap className='w-6 h-6' />
									</div>
									<div className='absolute -bottom-4 -right-4 bg-amber-800 text-orange-300 rounded-full p-4 shadow-luxury animate-float delay-1000 border border-amber-600'>
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
								<h3 className='text-2xl font-bold text-amber-900 mb-6 font-brand flex items-center'>
									<Leaf className='w-6 h-6 mr-3 text-orange-600' />
									Sweet-Spicy Ingredients
								</h3>
								<div className='space-y-4 font-body'>
									<div>
										<h4 className='font-semibold text-amber-800 mb-2'>
											Traditional Recipe
											Includes:
										</h4>
										<ul className='text-neutral-700 space-y-2'>
											<li>
												•{" "}
												<strong>
													Red Bird&apos;s
													Eye Chilies
												</strong>{" "}
												(60%) - Heat
												foundation
											</li>
											<li>
												•{" "}
												<strong>
													Palm Sugar
												</strong>{" "}
												(15%) - Natural
												sweetness
											</li>
											<li>
												•{" "}
												<strong>
													Tamarind
												</strong>{" "}
												(10%) - Tangy depth
											</li>
											<li>
												•{" "}
												<strong>
													Shallots &
													Garlic
												</strong>{" "}
												(8%) - Aromatic base
											</li>
											<li>
												•{" "}
												<strong>
													Galangal &
													Candlenuts
												</strong>{" "}
												(5%) - Spice
												complexity
											</li>
											<li>
												•{" "}
												<strong>
													Sea Salt
												</strong>{" "}
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
												<span>
													Sweetness:
												</span>
												<div className='w-16 h-2 bg-orange-200 rounded-full'>
													<div className='w-12 h-2 bg-orange-500 rounded-full'></div>
												</div>
											</div>
											<div className='flex justify-between'>
												<span>
													Heat Level:
												</span>
												<div className='w-16 h-2 bg-orange-200 rounded-full'>
													<div className='w-10 h-2 bg-orange-600 rounded-full'></div>
												</div>
											</div>
											<div className='flex justify-between'>
												<span>
													Umami Depth:
												</span>
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
								<h3 className='text-2xl font-bold text-amber-900 mb-6 font-brand flex items-center'>
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
													Grind fresh
													chilies and
													spices using
													traditional
													stone mortar
													(cobek)
												</p>
											</div>
											<div className='flex items-start space-x-3'>
												<span className='bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs'>
													2
												</span>
												<p>
													Slowly fry
													paste in
													coconut oil
													until fragrant
													(45+ minutes)
												</p>
											</div>
											<div className='flex items-start space-x-3'>
												<span className='bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs'>
													3
												</span>
												<p>
													Add palm sugar
													and tamarind,
													cook until
													caramelized
												</p>
											</div>
											<div className='flex items-start space-x-3'>
												<span className='bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs'>
													4
												</span>
												<p>
													Continue
													cooking until
													oils separate
													and paste
													darkens
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
											develops deep, complex
											flavors impossible to
											achieve with raw sambals.
											Palm sugar caramelizes,
											spices bloom, and chilies
											mellow into perfect
											balance.
										</p>
									</div>
								</div>
							</div>

							{/* Perfect Usage Guide */}
							<div className='bg-cream-50 rounded-sm p-8 border border-cream-200'>
								<h3 className='text-2xl font-bold text-amber-900 mb-6 font-brand flex items-center'>
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
												- Add depth &
												complexity
											</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold text-amber-800 mb-2'>
											Serving Suggestions:
										</h4>
										<div className='space-y-2 text-sm'>
											<div className='flex justify-between'>
												<span>
													Fried Rice:
												</span>
												<span className='font-semibold'>
													2-3 tsp per
													portion
												</span>
											</div>
											<div className='flex justify-between'>
												<span>
													Marinade:
												</span>
												<span className='font-semibold'>
													1 tbsp + oil &
													lime
												</span>
											</div>
											<div className='flex justify-between'>
												<span>
													Stir-fry:
												</span>
												<span className='font-semibold'>
													1-2 tsp with
													garlic
												</span>
											</div>
											<div className='flex justify-between'>
												<span>
													Condiment:
												</span>
												<span className='font-semibold'>
													1/2 tsp on side
												</span>
											</div>
										</div>
									</div>
									<div className='bg-white/70 rounded p-3'>
										<p className='text-xs text-neutral-600'>
											<strong>Storage:</strong>{" "}
											Refrigerate after
											opening. The oil may
											separate - simply stir
											before use. Lasts 8 weeks
											refrigerated.
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
							title='What Our Customers Say About Sambal Goreng'
						/>
					</div>
				</section>
			</div>
		</>
	);
}
