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
	Utensils,
	Timer,
} from "lucide-react";

export const metadata = {
	title: "Best Chili Sauce for Stir Fry | Authentic Indonesian Sambal | Professional Chef Tips | Spice Island Indonesia",
	description:
		"Discover why Indonesian sambal is the secret to perfect stir-fries. Professional chef reveals why sambal beats other hot sauces for high-heat cooking. UK delivery available.",
	keywords:
		"sambal for stir fry, best chili sauce stir fry, Indonesian stir fry sauce, authentic Asian cooking, sambal oelek cooking, professional stir fry tips, Indonesian cooking UK",
	openGraph: {
		title: "The Secret to Perfect Stir-Fries: Why Chefs Use Sambal",
		description:
			"Professional Indonesian chef reveals why sambal is superior to other hot sauces for stir-frying. Transform your cooking today.",
		type: "website",
		images: [
			{
				url: "https://spiceislandindonesia.com/images/sambal-oelek-lg.webp",
				width: 400,
				height: 400,
				alt: "Authentic Indonesian Sambal for stir-frying",
			},
		],
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/sambal-for-stir-fry",
	},
};

export default function SambalForStirFryPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100'>
			{/* Hero Section */}
			<section className='py-16 sm:py-24 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-96 h-96 bg-gold-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-96 h-96 bg-gold-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						{/* Left side - Content */}
						<div className='text-center lg:text-left'>
							<Badge className='bg-burgundy-800 text-gold-300 mb-6 px-6 py-3 text-lg font-semibold border border-gold-600/30'>
								<Utensils className='w-5 h-5 mr-2' />
								Professional Cooking Secret
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight font-brand'>
								<span className='text-white block mb-2'>
									The Secret to Perfect
								</span>
								<span className='text-gold-300 block mb-2'>
									Stir-Fries
								</span>
								<span className='text-gold-200 text-2xl sm:text-3xl lg:text-4xl font-script italic'>
									Why Chefs Use Sambal
								</span>
							</h1>

							<p className='text-xl sm:text-2xl text-gold-200 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body'>
								Discover why professional chefs choose
								Indonesian sambal over other hot sauces
								for high-heat stir-frying. Transform
								your cooking with authentic technique.
							</p>

							{/* Key Benefits */}
							<div className='grid sm:grid-cols-2 gap-4 mb-10'>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Flame className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Won&apos;t Burn at High Heat
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<ChefHat className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Professional Chef Made
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Star className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Pure Chili Flavor
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Award className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Traditional Recipe
									</span>
								</div>
							</div>

							{/* CTA Buttons */}
							<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
								<Link href='/shop'>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant text-lg px-8 py-4'
									>
										Get Sambal for Stir-Frying -
										£7.49
									</Button>
								</Link>
								<Link href='#why-sambal'>
									<Button
										variant='outline'
										size='lg'
										className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 text-lg px-8 py-4'
									>
										Learn Why It Works
									</Button>
								</Link>
							</div>
						</div>

						{/* Right side - Product Image */}
						<div className='relative'>
							<div className='relative max-w-lg mx-auto'>
								<div className='aspect-square rounded-sm overflow-hidden shadow-luxury bg-gradient-to-br from-burgundy-900/10 to-gold-600/10 p-8'>
									<div className='w-full h-full rounded-sm flex items-center justify-center'>
										<Image
											src='/images/sambal-oelek-lg.webp'
											alt='Authentic Indonesian Sambal Oelek - Perfect for stir-frying'
											width={400}
											height={400}
											className='w-full h-full object-contain drop-shadow-2xl'
											priority
										/>
									</div>
								</div>

								{/* Floating badges */}
								<div className='absolute -top-4 -left-4 bg-gold-500 text-burgundy-900 rounded-full p-4 shadow-luxury animate-float border border-gold-300'>
									<Utensils className='w-6 h-6' />
								</div>
								<div className='absolute -bottom-4 -right-4 bg-burgundy-800 text-gold-300 rounded-full p-4 shadow-luxury animate-float delay-1000 border border-burgundy-600'>
									<Flame className='w-6 h-6' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Sambal for Stir-Fry Section */}
			<section id='why-sambal' className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							Why Sambal Beats Other
							<span className='text-gold-700 block'>
								Hot Sauces for Stir-Frying
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-body'>
							Professional chef explains the science behind
							perfect stir-fry seasoning
						</p>
					</div>

					<div className='grid lg:grid-cols-3 gap-8'>
						{/* High Heat Stability */}
						<Card className='shadow-luxury border border-gold-200 bg-gradient-to-br from-cream-50 to-cream-100 overflow-hidden rounded-sm'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center mx-auto mb-6'>
									<Flame className='w-8 h-8 text-gold-300' />
								</div>
								<h3 className='text-2xl font-bold text-burgundy-900 mb-4 font-brand'>
									High Heat Stability
								</h3>
								<p className='text-neutral-700 leading-relaxed font-body mb-6'>
									Unlike sugar-based sauces (like
									sriracha), sambal won&apos;t burn
									or turn bitter at the high
									temperatures needed for proper
									stir-frying.
								</p>
								<div className='bg-burgundy-50 rounded-lg p-4 border border-burgundy-200'>
									<p className='text-sm text-burgundy-800 font-body'>
										<strong>Chef Tip:</strong>{" "}
										Sambal&apos;s pure chili base
										maintains flavor integrity
										even at 200°C+
									</p>
								</div>
							</CardContent>
						</Card>

						{/* Pure Flavor */}
						<Card className='shadow-luxury border border-gold-200 bg-gradient-to-br from-cream-50 to-cream-100 overflow-hidden rounded-sm'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-6'>
									<Star className='w-8 h-8 text-burgundy-900' />
								</div>
								<h3 className='text-2xl font-bold text-burgundy-900 mb-4 font-brand'>
									Pure Chili Flavor
								</h3>
								<p className='text-neutral-700 leading-relaxed font-body mb-6'>
									No added sugar or thickeners means
									the chili flavor penetrates
									ingredients without masking their
									natural taste.
								</p>
								<div className='bg-gold-50 rounded-lg p-4 border border-gold-200'>
									<p className='text-sm text-gold-800 font-body'>
										<strong>Result:</strong> Each
										ingredient tastes like itself,
										just with perfect heat
									</p>
								</div>
							</CardContent>
						</Card>

						{/* Professional Consistency */}
						<Card className='shadow-luxury border border-gold-200 bg-gradient-to-br from-cream-50 to-cream-100 overflow-hidden rounded-sm'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-700 to-burgundy-600 rounded-full flex items-center justify-center mx-auto mb-6'>
									<ChefHat className='w-8 h-8 text-gold-300' />
								</div>
								<h3 className='text-2xl font-bold text-burgundy-900 mb-4 font-brand'>
									Professional Consistency
								</h3>
								<p className='text-neutral-700 leading-relaxed font-body mb-6'>
									Made in professional catering
									kitchen with precise techniques -
									every batch delivers the same
									reliable heat and flavor.
								</p>
								<div className='bg-cream-100 rounded-lg p-4 border border-cream-200'>
									<p className='text-sm text-burgundy-800 font-body'>
										<strong>Guarantee:</strong>{" "}
										Restaurant-quality results
										every time
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* How to Use Section */}
			<section className='py-24 bg-gradient-to-br from-cream-100 to-cream-200'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							How to Use Sambal
							<span className='text-gold-700 block'>
								in Your Stir-Fries
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-body'>
							Chef Yossie&apos;s professional technique for
							perfect results
						</p>
					</div>

					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div>
							<h3 className='text-3xl font-bold text-burgundy-900 mb-8 font-brand'>
								The Professional Method:
							</h3>
							<div className='space-y-6'>
								<div className='flex items-start space-x-4'>
									<div className='w-8 h-8 bg-burgundy-900 text-gold-300 rounded-full flex items-center justify-center mt-1 font-bold'>
										1
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
											Heat Your Wok/Pan First
										</h4>
										<p className='text-neutral-700 font-body'>
											Get your pan smoking hot
											before adding oil. This
											is crucial for proper
											stir-frying.
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-4'>
									<div className='w-8 h-8 bg-burgundy-900 text-gold-300 rounded-full flex items-center justify-center mt-1 font-bold'>
										2
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
											Add Sambal Early
										</h4>
										<p className='text-neutral-700 font-body'>
											Add 1-2 teaspoons of
											sambal right after your
											aromatics (garlic,
											ginger). Let it bloom for
											30 seconds.
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-4'>
									<div className='w-8 h-8 bg-burgundy-900 text-gold-300 rounded-full flex items-center justify-center mt-1 font-bold'>
										3
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
											Add Proteins & Vegetables
										</h4>
										<p className='text-neutral-700 font-body'>
											The sambal will coat
											everything evenly,
											creating a beautiful red
											color and even heat
											distribution.
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-4'>
									<div className='w-8 h-8 bg-burgundy-900 text-gold-300 rounded-full flex items-center justify-center mt-1 font-bold'>
										4
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
											Finish & Taste
										</h4>
										<p className='text-neutral-700 font-body'>
											Add a splash of soy sauce
											or oyster sauce. Taste
											and adjust - you can
											always add more sambal!
										</p>
									</div>
								</div>
							</div>

							<div className='mt-8 p-6 bg-gradient-to-r from-burgundy-50 to-gold-50 rounded-sm border border-gold-200'>
								<h4 className='font-bold text-burgundy-900 mb-3 font-brand'>
									Chef Yossie&apos;s Pro Tip:
								</h4>
								<p className='text-burgundy-800 font-body italic'>
									&quot;Start with less than you
									think you need. Sambal&apos;s heat
									builds as it cooks, and you can
									always add more. The goal is
									balanced heat that enhances, not
									overwhelms.&quot;
								</p>
							</div>
						</div>

						<div className='relative'>
							<div className='aspect-[4/3] rounded-sm overflow-hidden shadow-luxury border border-gold-200'>
								<Image
									src='/images/indonesian_vista.png'
									alt='Indonesian cooking ingredients and spices'
									fill
									className='object-cover'
									loading='lazy'
									sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 600px'
								/>
							</div>

							{/* Floating badges */}
							<div className='absolute -top-4 -left-4 bg-cream-50 rounded-full p-4 shadow-gold animate-float border border-gold-300'>
								<Timer className='w-6 h-6 text-gold-600' />
							</div>
							<div className='absolute -bottom-4 -right-4 bg-cream-50 rounded-full p-4 shadow-burgundy animate-float delay-1000 border border-burgundy-300'>
								<Utensils className='w-6 h-6 text-burgundy-600' />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Recipe Ideas Section */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							Perfect Stir-Fry Recipes
							<span className='text-gold-700 block'>
								Using Sambal
							</span>
						</h2>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						{/* Recipe 1 */}
						<Card className='shadow-luxury border border-gold-200 bg-gradient-to-br from-cream-50 to-cream-100 overflow-hidden rounded-sm'>
							<CardContent className='p-6'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									Sambal Chicken Stir-Fry
								</h3>
								<p className='text-neutral-700 font-body mb-4'>
									Classic Indonesian-style chicken
									with vegetables, perfectly balanced
									heat
								</p>
								<div className='flex items-center space-x-4 text-sm text-neutral-600'>
									<div className='flex items-center space-x-1'>
										<Clock className='w-4 h-4' />
										<span>15 mins</span>
									</div>
									<div className='flex items-center space-x-1'>
										<Flame className='w-4 h-4' />
										<span>Medium heat</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Recipe 2 */}
						<Card className='shadow-luxury border border-gold-200 bg-gradient-to-br from-cream-50 to-cream-100 overflow-hidden rounded-sm'>
							<CardContent className='p-6'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									Sambal Beef & Broccoli
								</h3>
								<p className='text-neutral-700 font-body mb-4'>
									Tender beef with crisp broccoli,
									elevated with authentic Indonesian
									heat
								</p>
								<div className='flex items-center space-x-4 text-sm text-neutral-600'>
									<div className='flex items-center space-x-1'>
										<Clock className='w-4 h-4' />
										<span>12 mins</span>
									</div>
									<div className='flex items-center space-x-1'>
										<Flame className='w-4 h-4' />
										<span>Medium heat</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Recipe 3 */}
						<Card className='shadow-luxury border border-gold-200 bg-gradient-to-br from-cream-50 to-cream-100 overflow-hidden rounded-sm'>
							<CardContent className='p-6'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									Vegetarian Sambal Noodles
								</h3>
								<p className='text-neutral-700 font-body mb-4'>
									Fresh vegetables and noodles with
									the pure heat of traditional sambal
								</p>
								<div className='flex items-center space-x-4 text-sm text-neutral-600'>
									<div className='flex items-center space-x-1'>
										<Clock className='w-4 h-4' />
										<span>10 mins</span>
									</div>
									<div className='flex items-center space-x-1'>
										<Flame className='w-4 h-4' />
										<span>Mild-Medium</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className='text-center mt-12'>
						<Link href='/recipes'>
							<Button
								variant='primary'
								size='lg'
								className='font-elegant'
							>
								Get Full Recipes & More Ideas
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className='py-24 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-4xl sm:text-5xl font-bold mb-6 font-brand'>
						Transform Your Stir-Fries
						<span className='text-gold-300 block'>
							Starting Tonight
						</span>
					</h2>
					<p className='text-xl text-gold-200 mb-8 font-body'>
						Join hundreds of home cooks who&apos;ve discovered
						the secret to restaurant-quality stir-fries
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
						<Link href='/shop'>
							<Button
								variant='primary'
								size='lg'
								className='font-elegant text-lg px-8 py-4'
							>
								Get Sambal for Stir-Frying - £7.49
							</Button>
						</Link>
						<Link href='/shop'>
							<Button
								variant='outline'
								size='lg'
								className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 text-lg px-8 py-4'
							>
								Try Sample First - £2.99
							</Button>
						</Link>
					</div>

					<div className='flex items-center justify-center space-x-6 text-gold-200'>
						<div className='flex items-center space-x-2'>
							<Truck className='w-5 h-5' />
							<span className='font-body'>
								Free UK delivery over £20
							</span>
						</div>
						<div className='flex items-center space-x-2'>
							<Shield className='w-5 h-5' />
							<span className='font-body'>
								Professional chef guarantee
							</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
