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
	Sunrise,
	Coffee,
} from "lucide-react";

export const metadata = {
	title: "Spicy Breakfast Condiment UK | Indonesian Sambal for Eggs & Morning Meals | Spice Island Indonesia",
	description:
		"Transform your breakfast with authentic Indonesian sambal! Perfect with eggs, avocado toast, and morning dishes. Chef Yossie's traditional recipes add complex heat to start your day right.",
	keywords:
		"spicy breakfast condiment UK, sambal for eggs, Indonesian breakfast sauce, spicy morning condiment, sambal with eggs, breakfast chili sauce, Chef Yossie breakfast sambal, spicy egg sauce UK",
	openGraph: {
		title: "Spicy Breakfast Condiment UK | Indonesian Sambal for Eggs & Morning Meals",
		description:
			"Start your day with authentic Indonesian heat! Perfect breakfast condiment for eggs, toast, and morning dishes.",
		type: "website",
		images: [
			{
				url: "https://sambal-shop.vercel.app/images/Spice Island Indonesia Sambal Oelek 185g Label.png",
				width: 400,
				height: 400,
				alt: "Indonesian Sambal for breakfast - perfect with eggs",
			},
		],
	},
};

export default function SambalEggsBreakfastPage() {
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
								<Sunrise className='w-4 h-4 mr-2' />
								Perfect Morning Heat
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-brand leading-tight'>
								Transform Your Breakfast with
								<span className='text-gold-300'>
									{" "}
									Authentic Indonesian Heat
								</span>
							</h1>

							<p className='text-xl sm:text-2xl mb-8 text-cream-100 font-elegant leading-relaxed'>
								Tired of boring breakfast? Add
								<strong className='text-gold-300'>
									{" "}
									Chef Yossie's authentic sambal
								</strong>
								to eggs, avocado toast, and morning
								dishes for complex flavors that wake up
								your taste buds.
							</p>

							<div className='flex items-center justify-center lg:justify-start mb-8 space-x-4'>
								<div className='flex items-center space-x-2'>
									<ChefHat className='w-6 h-6 text-gold-300' />
									<span className='font-elegant'>
										Traditional Recipe
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Award className='w-6 h-6 text-gold-300' />
									<span className='font-elegant'>
										Perfect Heat Level
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
										Spice Up Breakfast - £7.49
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

						<div className='relative'>
							<div className='aspect-square max-w-md mx-auto relative'>
								<div className='absolute inset-0 bg-gradient-to-br from-gold-400/30 to-gold-600/30 rounded-full blur-3xl'></div>
								<Image
									src='/images/Spice Island Indonesia Sambal Oelek 185g Label.png'
									alt='Indonesian Sambal perfect for breakfast and eggs'
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

			{/* Problem Section */}
			<section className='py-16 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Tired of Boring Breakfast?
						</h2>
						<p className='text-xl text-gray-700 font-elegant max-w-3xl mx-auto'>
							Most breakfast condiments are either too mild
							or one-dimensional. Indonesian sambal brings
							complex heat that transforms ordinary morning
							meals.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						<Card className='border-gray-200 bg-gray-50'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										😴
									</span>
								</div>
								<h3 className='text-xl font-bold text-gray-800 mb-3 font-elegant'>
									Same Old Routine
								</h3>
								<p className='text-gray-600'>
									Eggs, toast, repeat. Your breakfast
									needs excitement, not another bland
									morning.
								</p>
							</CardContent>
						</Card>

						<Card className='border-orange-200 bg-orange-50'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🌶️
									</span>
								</div>
								<h3 className='text-xl font-bold text-orange-800 mb-3 font-elegant'>
									Harsh Hot Sauces
								</h3>
								<p className='text-orange-700'>
									Regular hot sauce burns without
									flavor. You want heat with
									complexity, not just fire.
								</p>
							</CardContent>
						</Card>

						<Card className='border-yellow-200 bg-yellow-50'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										⏰
									</span>
								</div>
								<h3 className='text-xl font-bold text-yellow-800 mb-3 font-elegant'>
									No Time for Fancy
								</h3>
								<p className='text-yellow-700'>
									Busy mornings need simple solutions
									that add instant flavor without
									extra cooking.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Perfect Breakfast Pairings Section */}
			<section className='py-16 bg-gradient-to-br from-cream-50 to-cream-100'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Perfect Breakfast Pairings
						</h2>
						<p className='text-xl text-gray-700 font-elegant max-w-3xl mx-auto'>
							Discover how authentic Indonesian sambal
							transforms your favorite morning dishes.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🍳
									</span>
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-elegant'>
									Scrambled Eggs
								</h3>
								<p className='text-gray-600 text-sm'>
									Mix a teaspoon into scrambled eggs
									for Indonesian-style telur bumbu.
									Creamy eggs with complex heat and
									aromatic spices.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🥑
									</span>
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-elegant'>
									Avocado Toast
								</h3>
								<p className='text-gray-600 text-sm'>
									Drizzle over smashed avocado for an
									Indonesian twist on the classic.
									Creamy meets spicy with incredible
									depth.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🍞
									</span>
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-elegant'>
									Breakfast Sandwich
								</h3>
								<p className='text-gray-600 text-sm'>
									Spread on toast before adding eggs
									and bacon. Transforms ordinary
									breakfast sandwich into gourmet
									experience.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🥓
									</span>
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-elegant'>
									Full English
								</h3>
								<p className='text-gray-600 text-sm'>
									Add to beans, eggs, or use as a dip
									for sausages. Elevates traditional
									British breakfast with Indonesian
									flair.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🥞
									</span>
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-elegant'>
									Breakfast Hash
								</h3>
								<p className='text-gray-600 text-sm'>
									Stir into potato hash with peppers
									and onions. Creates authentic
									Indonesian-style breakfast hash.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🧀
									</span>
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-elegant'>
									Cheese Omelette
								</h3>
								<p className='text-gray-600 text-sm'>
									Fold into cheese omelette for
									Indonesian-French fusion. Rich
									cheese balanced by complex
									Indonesian heat.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Why Sambal for Breakfast Section */}
			<section className='py-16 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<div>
							<Badge className='bg-burgundy-100 text-burgundy-800 font-elegant mb-6 text-sm px-4 py-2'>
								<Coffee className='w-4 h-4 mr-2' />
								Morning Perfection
							</Badge>

							<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
								Why Indonesian Sambal is Perfect for
								Breakfast
							</h2>

							<p className='text-xl text-gray-700 mb-8 font-elegant leading-relaxed'>
								Unlike harsh hot sauces that assault
								your palate first thing in the morning,
								authentic Indonesian sambal offers
								complex, balanced heat that energizes
								without overwhelming.
							</p>

							<div className='space-y-4'>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-bold text-burgundy-900 font-elegant'>
											Gentle Wake-Up Heat
										</h4>
										<p className='text-gray-600'>
											Complex spices warm your
											palate gradually, perfect
											for morning sensitivity
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-bold text-burgundy-900 font-elegant'>
											Aromatic Appetite Boost
										</h4>
										<p className='text-gray-600'>
											Garlic and shallots
											stimulate appetite and
											enhance morning digestion
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-bold text-burgundy-900 font-elegant'>
											Instant Flavor Upgrade
										</h4>
										<p className='text-gray-600'>
											Transforms simple
											ingredients into exciting
											breakfast experiences
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-bold text-burgundy-900 font-elegant'>
											Metabolism Kickstart
										</h4>
										<p className='text-gray-600'>
											Natural capsaicin helps
											boost metabolism and
											energy levels
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className='relative'>
							<div className='aspect-square max-w-md mx-auto relative'>
								<Image
									src='/images/Spice Island Indonesia Sambal Oelek 185g Label.png'
									alt='Perfect breakfast condiment - Indonesian sambal'
									fill
									className='object-contain drop-shadow-xl'
									loading='lazy'
									sizes='(max-width: 768px) 100vw, 50vw'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Chef's Breakfast Tips Section */}
			<section className='py-16 bg-gradient-to-br from-cream-50 to-cream-100'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<div className='relative'>
							<div className='aspect-[4/3] max-w-md mx-auto relative rounded-sm overflow-hidden'>
								<Image
									src='/images/chef-yossie-cooking.jpg'
									alt='Chef Yossie preparing traditional Indonesian breakfast'
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
								Chef's Tips
							</Badge>

							<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
								Indonesian Breakfast Secrets from Chef
								Yossie
							</h2>

							<p className='text-xl text-gray-700 mb-6 font-elegant leading-relaxed'>
								In Indonesia, we start every day with
								sambal. Chef Yossie shares her family's
								traditional breakfast combinations that
								have energized generations.
							</p>

							<blockquote className='border-l-4 border-gold-600 pl-6 mb-8'>
								<p className='text-lg italic text-gray-700 mb-4'>
									"In my family's catering business,
									breakfast was never boring. We
									always had fresh sambal on the
									table. A little with eggs, a dab on
									toast - it transforms everything.
									Now I want to share this Indonesian
									breakfast tradition with the UK."
								</p>
								<cite className='text-gold-600 font-brand text-lg'>
									— Chef Yossie, Bandung-born
									Indonesian Chef
								</cite>
							</blockquote>

							<div className='bg-white rounded-lg p-6 border border-gold-200'>
								<h4 className='font-bold text-burgundy-900 mb-3 font-elegant'>
									Chef's Quick Breakfast Recipe:
								</h4>
								<p className='text-gray-700 text-sm leading-relaxed'>
									"Scramble 2 eggs with a teaspoon of
									sambal oelek, serve on buttered
									toast with sliced tomato. In
									Indonesia, we call this 'telur
									bumbu' - it's comfort food that
									gives you energy for the whole
									day."
								</p>
							</div>

							<div className='flex flex-col sm:flex-row gap-4 mt-8'>
								<Link href='/chef'>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant'
									>
										More Indonesian Recipes
									</Button>
								</Link>
								<Link href='/shop'>
									<Button
										variant='outline'
										size='lg'
										className='font-elegant border-burgundy-600 text-burgundy-600 hover:bg-burgundy-600 hover:text-white'
									>
										Order Breakfast Sambal
									</Button>
								</Link>
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
						Start Every Morning with Indonesian Fire
					</h2>

					<p className='text-xl sm:text-2xl mb-8 text-cream-100 font-elegant leading-relaxed max-w-3xl mx-auto'>
						Transform your breakfast routine with authentic
						Indonesian sambal. Complex heat that energizes
						your morning and excites your taste buds.
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
								Perfect for Mornings
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
								Spice Up Breakfast - £7.49
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
