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
	X,
	Factory,
	Home,
} from "lucide-react";

export const metadata = {
	title: "Authentic vs Store-Bought Sambal: Real Indonesian vs Mass-Produced | Spice Island Indonesia",
	description:
		"Discover the shocking difference between authentic Indonesian sambal and mass-produced store brands. Chef Yossie reveals why traditional methods create superior flavor and quality.",
	keywords:
		"authentic Indonesian sambal, real vs fake sambal, traditional sambal vs store bought, mass produced sambal comparison, Chef Yossie authentic sambal, handmade Indonesian condiments",
	openGraph: {
		title: "Authentic vs Store-Bought Sambal: Real Indonesian vs Mass-Produced",
		description:
			"The shocking truth about mass-produced sambal vs authentic Indonesian recipes. Discover what you&apos;re really buying.",
		type: "website",
		images: [
			{
				url: "https://sambal-shop.vercel.app/images/Spice Island Indonesia Sambal Oelek 185g Label.png",
				width: 400,
				height: 400,
				alt: "Authentic Indonesian Sambal vs Store-bought comparison",
			},
		],
	},
};

export default function AuthenticVsStoreBoughtPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100'>
			{/* Hero Section */}
			<section className='py-16 sm:py-24 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-96 h-96 bg-gold-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-96 h-96 bg-gold-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<div className='text-center lg:text-left'>
							<Badge className='bg-gold-600 text-burgundy-900 font-elegant mb-6 text-sm px-4 py-2'>
								<Home className='w-4 h-4 mr-2' />
								The Truth Revealed
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-brand leading-tight'>
								Authentic vs Store-Bought:
								<span className='text-gold-300'>
									{" "}
									The Shocking Truth
								</span>
							</h1>

							<p className='text-xl sm:text-2xl mb-8 text-cream-100 font-elegant leading-relaxed'>
								Most &quot;Indonesian&quot; sambal in UK
								stores isn&apos;t Indonesian at all.
								Discover why
								<strong className='text-gold-300'>
									{" "}
									Chef Yossie&apos;s traditional
									recipes
								</strong>
								create flavors that mass-produced brands
								simply can&apos;t match.
							</p>

							<div className='flex items-center justify-center lg:justify-start mb-8 space-x-4'>
								<div className='flex items-center space-x-2'>
									<ChefHat className='w-6 h-6 text-gold-300' />
									<span className='font-elegant'>
										Handcrafted Quality
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Award className='w-6 h-6 text-gold-300' />
									<span className='font-elegant'>
										Traditional Methods
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
										Try Authentic Sambal - £7.49
									</Button>
								</Link>
								<Link href='/sample-pack-try-first'>
									<Button
										variant='outline'
										size='lg'
										className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 text-lg px-8 py-4'
									>
										Sample Pack First
									</Button>
								</Link>
							</div>
						</div>

						<div className='relative'>
							<div className='aspect-square max-w-md mx-auto relative'>
								<div className='absolute inset-0 bg-gradient-to-br from-gold-400/30 to-gold-600/30 rounded-full blur-3xl'></div>
								<Image
									src='/images/Spice Island Indonesia Sambal Oelek 185g Label.png'
									alt='Authentic Indonesian Sambal vs Mass-produced Store Brands'
									fill
									className='object-contain relative z-10 drop-shadow-2xl'
									priority
									sizes='(max-width: 768px) 100vw, 50vw'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* The Problem Section */}
			<section className='py-16 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							What&apos;s Really in Store-Bought
							&quot;Sambal&quot;?
						</h2>
						<p className='text-xl text-gray-700 font-elegant max-w-3xl mx-auto'>
							The shocking truth about what passes for
							&quot;Indonesian sambal&quot; in UK
							supermarkets.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						<Card className='border-red-200 bg-red-50'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Factory className='w-8 h-8 text-red-600' />
								</div>
								<h3 className='text-xl font-bold text-red-800 mb-3 font-elegant'>
									Mass Production
								</h3>
								<p className='text-red-700'>
									Made in industrial facilities using
									shortcuts and artificial flavors to
									mimic authentic taste.
								</p>
							</CardContent>
						</Card>

						<Card className='border-orange-200 bg-orange-50'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🧪
									</span>
								</div>
								<h3 className='text-xl font-bold text-orange-800 mb-3 font-elegant'>
									Chemical Preservatives
								</h3>
								<p className='text-orange-700'>
									Loaded with sodium benzoate,
									potassium sorbate, and other
									chemicals for shelf stability.
								</p>
							</CardContent>
						</Card>

						<Card className='border-yellow-200 bg-yellow-50'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🎭
									</span>
								</div>
								<h3 className='text-xl font-bold text-yellow-800 mb-3 font-elegant'>
									Fake Indonesian
								</h3>
								<p className='text-yellow-700'>
									Often made in Europe or Asia with
									&quot;Indonesian-style&quot;
									recipes that bear no resemblance to
									authentic sambal.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Detailed Comparison Section */}
			<section className='py-16 bg-gradient-to-br from-cream-50 to-cream-100'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Authentic vs Store-Bought: The Complete
							Breakdown
						</h2>
					</div>

					<div className='grid lg:grid-cols-2 gap-8'>
						{/* Authentic Side */}
						<Card className='border-green-200 bg-green-50'>
							<CardContent className='p-8'>
								<div className='text-center mb-6'>
									<div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
										<CheckCircle className='w-8 h-8 text-green-600' />
									</div>
									<h3 className='text-2xl font-bold text-green-800 font-brand'>
										Authentic Indonesian Sambal
									</h3>
									<p className='text-green-700 font-elegant'>
										Chef Yossie&apos;s Traditional
										Method
									</p>
								</div>

								<div className='space-y-4'>
									<div className='flex items-start space-x-3'>
										<CheckCircle className='w-5 h-5 text-green-600 mt-1 flex-shrink-0' />
										<div>
											<h4 className='font-bold text-green-800'>
												Fresh Ingredients
												Daily
											</h4>
											<p className='text-green-700 text-sm'>
												Hand-selected
												chilies, garlic, and
												shallots
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<CheckCircle className='w-5 h-5 text-green-600 mt-1 flex-shrink-0' />
										<div>
											<h4 className='font-bold text-green-800'>
												Traditional Stone
												Grinding
											</h4>
											<p className='text-green-700 text-sm'>
												Preserves essential
												oils and natural
												textures
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<CheckCircle className='w-5 h-5 text-green-600 mt-1 flex-shrink-0' />
										<div>
											<h4 className='font-bold text-green-800'>
												Family Recipes
											</h4>
											<p className='text-green-700 text-sm'>
												Passed down through
												generations in
												Bandung
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<CheckCircle className='w-5 h-5 text-green-600 mt-1 flex-shrink-0' />
										<div>
											<h4 className='font-bold text-green-800'>
												No Preservatives
											</h4>
											<p className='text-green-700 text-sm'>
												Natural fermentation
												and traditional
												preservation
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<CheckCircle className='w-5 h-5 text-green-600 mt-1 flex-shrink-0' />
										<div>
											<h4 className='font-bold text-green-800'>
												Small Batch
												Production
											</h4>
											<p className='text-green-700 text-sm'>
												Quality control and
												attention to detail
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<CheckCircle className='w-5 h-5 text-green-600 mt-1 flex-shrink-0' />
										<div>
											<h4 className='font-bold text-green-800'>
												Complex Flavor
												Profile
											</h4>
											<p className='text-green-700 text-sm'>
												Layers of heat,
												sweetness, and
												aromatics
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Store-Bought Side */}
						<Card className='border-red-200 bg-red-50'>
							<CardContent className='p-8'>
								<div className='text-center mb-6'>
									<div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
										<X className='w-8 h-8 text-red-600' />
									</div>
									<h3 className='text-2xl font-bold text-red-800 font-brand'>
										Store-Bought
										&quot;Sambal&quot;
									</h3>
									<p className='text-red-700 font-elegant'>
										Mass-Produced Imitation
									</p>
								</div>

								<div className='space-y-4'>
									<div className='flex items-start space-x-3'>
										<X className='w-5 h-5 text-red-600 mt-1 flex-shrink-0' />
										<div>
											<h4 className='font-bold text-red-800'>
												Processed
												Ingredients
											</h4>
											<p className='text-red-700 text-sm'>
												Dried chilies,
												garlic powder,
												artificial flavors
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<X className='w-5 h-5 text-red-600 mt-1 flex-shrink-0' />
										<div>
											<h4 className='font-bold text-red-800'>
												Industrial Blending
											</h4>
											<p className='text-red-700 text-sm'>
												High-speed
												processing destroys
												natural compounds
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<X className='w-5 h-5 text-red-600 mt-1 flex-shrink-0' />
										<div>
											<h4 className='font-bold text-red-800'>
												Generic Formulas
											</h4>
											<p className='text-red-700 text-sm'>
												Designed for mass
												appeal, not
												authenticity
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<X className='w-5 h-5 text-red-600 mt-1 flex-shrink-0' />
										<div>
											<h4 className='font-bold text-red-800'>
												Chemical
												Preservatives
											</h4>
											<p className='text-red-700 text-sm'>
												Sodium benzoate,
												potassium sorbate,
												citric acid
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<X className='w-5 h-5 text-red-600 mt-1 flex-shrink-0' />
										<div>
											<h4 className='font-bold text-red-800'>
												Mass Production
											</h4>
											<p className='text-red-700 text-sm'>
												Thousands of jars
												per hour, no quality
												control
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<X className='w-5 h-5 text-red-600 mt-1 flex-shrink-0' />
										<div>
											<h4 className='font-bold text-red-800'>
												One-Dimensional
												Taste
											</h4>
											<p className='text-red-700 text-sm'>
												Just heat and salt,
												no complexity or
												depth
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Chef&apos;s Perspective Section */}
			<section className='py-16 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<div className='relative'>
							<div className='aspect-[4/3] max-w-md mx-auto relative rounded-sm overflow-hidden'>
								<Image
									src='/images/chef-yossie-cooking.jpg'
									alt='Chef Yossie preparing traditional Indonesian sambal'
									fill
									className='object-cover'
									loading='lazy'
									sizes='(max-width: 768px) 100vw, 50vw'
								/>
							</div>
						</div>

						<div>
							<Badge className='bg-burgundy-100 text-burgundy-800 font-elegant mb-6 text-sm px-4 py-2'>
								<ChefHat className='w-4 h-4 mr-2' />
								Professional Insight
							</Badge>

							<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
								"I Can Taste the Difference Immediately"
							</h2>

							<p className='text-xl text-gray-700 mb-6 font-elegant leading-relaxed'>
								Chef Yossie&apos;s 20+ years in
								professional catering taught her to
								recognize authentic Indonesian flavors
								instantly. She&apos;s shocked by what UK
								stores call "sambal."
							</p>

							<blockquote className='border-l-4 border-gold-600 pl-6 mb-8'>
								<p className='text-lg italic text-gray-700 mb-4'>
									"When I first tried store-bought
									'sambal' in the UK, I was
									heartbroken. It tasted nothing like
									the sambal my grandmother taught me
									to make. That&apos;s why I started
									making authentic sambal here - to
									preserve the real flavors of
									Indonesia for people who deserve
									better than mass-produced
									imitations."
								</p>
								<cite className='text-gold-600 font-brand text-lg'>
									— Chef Yossie, Bandung-born
									Indonesian Chef
								</cite>
							</blockquote>

							<div className='flex flex-col sm:flex-row gap-4'>
								<Link href='/chef'>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant'
									>
										Read Chef&apos;s Full Story
									</Button>
								</Link>
								<Link href='/shop'>
									<Button
										variant='outline'
										size='lg'
										className='font-elegant border-burgundy-600 text-burgundy-600 hover:bg-burgundy-600 hover:text-white'
									>
										Try Authentic Sambal
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Price Comparison Section */}
			<section className='py-16 bg-gradient-to-br from-cream-50 to-cream-100'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							The Real Value Comparison
						</h2>
						<p className='text-xl text-gray-700 font-elegant'>
							When you consider quality, authenticity, and
							flavor, authentic sambal offers incredible
							value.
						</p>
					</div>

					<div className='bg-white rounded-sm shadow-lg p-8'>
						<div className='grid md:grid-cols-3 gap-6 text-center'>
							<div>
								<h3 className='text-lg font-bold text-gray-900 mb-2'>
									Store-Bought "Sambal"
								</h3>
								<div className='text-3xl font-bold text-red-600 mb-2'>
									£3-5
								</div>
								<p className='text-sm text-gray-600'>
									Mass-produced imitation with
									artificial flavors and
									preservatives
								</p>
							</div>
							<div className='border-l border-r border-gray-200 px-6'>
								<h3 className='text-lg font-bold text-burgundy-900 mb-2'>
									Chef Yossie&apos;s Authentic
								</h3>
								<div className='text-3xl font-bold text-green-600 mb-2'>
									£7.49
								</div>
								<p className='text-sm text-gray-600'>
									Handcrafted traditional recipe with
									fresh ingredients and no
									preservatives
								</p>
							</div>
							<div>
								<h3 className='text-lg font-bold text-gray-900 mb-2'>
									Value Per Serving
								</h3>
								<div className='text-lg font-bold text-burgundy-900 mb-2'>
									Only £0.40
								</div>
								<p className='text-sm text-gray-600'>
									Premium authentic flavor for less
									than a cup of coffee
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className='py-16 sm:py-24 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-96 h-96 bg-gold-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-96 h-96 bg-gold-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-brand'>
						Taste the Authentic Difference
					</h2>

					<p className='text-xl sm:text-2xl mb-8 text-cream-100 font-elegant leading-relaxed max-w-3xl mx-auto'>
						Don&apos;t settle for mass-produced imitations.
						Experience what real Indonesian sambal tastes like
						with Chef Yossie&apos;s traditional recipes.
					</p>

					<div className='flex items-center justify-center space-x-8 mb-8'>
						<div className='flex items-center space-x-2'>
							<Truck className='w-6 h-6 text-gold-300' />
							<span className='font-elegant'>
								Free UK Delivery
							</span>
						</div>
						<div className='flex items-center space-x-2'>
							<Shield className='w-6 h-6 text-gold-300' />
							<span className='font-elegant'>
								Money-Back Guarantee
							</span>
						</div>
						<div className='flex items-center space-x-2'>
							<Clock className='w-6 h-6 text-gold-300' />
							<span className='font-elegant'>
								Ships Within 24h
							</span>
						</div>
					</div>

					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/shop'>
							<Button
								variant='primary'
								size='lg'
								className='font-elegant text-lg px-8 py-4'
							>
								Try Authentic Sambal - £7.49
							</Button>
						</Link>
						<Link href='/sample-pack-try-first'>
							<Button
								variant='outline'
								size='lg'
								className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 text-lg px-8 py-4'
							>
								Sample Pack First - £4.99
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
