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
	Zap,
} from "lucide-react";

export const metadata = {
	title: "Authentic Asian Noodle Sauce UK | Indonesian Sambal for Noodles | Spice Island Indonesia",
	description:
		"Transform your noodle dishes with authentic Indonesian sambal! Perfect sauce for ramen, stir-fry noodles, and Asian dishes. Chef Yossie&apos;s traditional recipes create restaurant-quality flavor at home.",
	keywords:
		"Asian noodle sauce UK, Indonesian sambal for noodles, authentic noodle sauce, sambal noodles, spicy noodle sauce, Chef Yossie noodle sauce, Indonesian noodle condiment, Asian cooking sauce UK",
	openGraph: {
		title: "Authentic Asian Noodle Sauce UK | Indonesian Sambal for Noodles",
		description:
			"Restaurant-quality noodle dishes at home! Authentic Indonesian sambal transforms any noodle recipe into a flavor sensation.",
		type: "website",
		images: [
			{
				url: "https://spiceislandindonesia.com/images/Spice Island Indonesia Sambal Oelek 185g Label.png",
				width: 400,
				height: 400,
				alt: "Indonesian Sambal - perfect sauce for noodles",
			},
		],
	},
};

export default function SambalNoodleSaucePage() {
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
								<Utensils className='w-4 h-4 mr-2' />
								Restaurant-Quality at Home
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-brand leading-tight'>
								Transform Any Noodle Dish with
								<span className='text-gold-300'>
									{" "}
									Authentic Indonesian Sambal
								</span>
							</h1>

							<p className='text-xl sm:text-2xl mb-8 text-cream-100 font-elegant leading-relaxed'>
								Stop settling for bland noodles!
								<strong className='text-gold-300'>
									{" "}
									Chef Yossie&apos;s traditional
									sambal
								</strong>
								creates restaurant-quality Asian noodle
								dishes in your own kitchen.
							</p>

							<div className='flex items-center justify-center lg:justify-start mb-8 space-x-4'>
								<div className='flex items-center space-x-2'>
									<ChefHat className='w-6 h-6 text-gold-300' />
									<span className='font-elegant'>
										Professional Recipe
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Zap className='w-6 h-6 text-gold-300' />
									<span className='font-elegant'>
										Instant Flavor
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
										Upgrade Your Noodles - £7.49
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
									alt='Indonesian Sambal - perfect sauce for noodle dishes'
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
							Tired of Boring Noodle Dishes?
						</h2>
						<p className='text-xl text-gray-700 font-elegant max-w-3xl mx-auto'>
							Most noodle sauces are either too sweet, too
							salty, or completely flavorless. Authentic
							Indonesian sambal brings the complex heat and
							depth your noodles deserve.
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
									Bland Instant Noodles
								</h3>
								<p className='text-gray-600'>
									Packet seasonings taste artificial
									and one-dimensional. Your noodles
									deserve real flavor.
								</p>
							</CardContent>
						</Card>

						<Card className='border-orange-200 bg-orange-50'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🍯
									</span>
								</div>
								<h3 className='text-xl font-bold text-orange-800 mb-3 font-elegant'>
									Overly Sweet Sauces
								</h3>
								<p className='text-orange-700'>
									Commercial Asian sauces are loaded
									with sugar, masking authentic
									flavors with artificial sweetness.
								</p>
							</CardContent>
						</Card>

						<Card className='border-red-200 bg-red-50'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										💸
									</span>
								</div>
								<h3 className='text-xl font-bold text-red-800 mb-3 font-elegant'>
									Expensive Takeaway
								</h3>
								<p className='text-red-700'>
									Restaurant noodles cost £8-12 and
									often disappoint. Make better at
									home for less.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Perfect Noodle Combinations Section */}
			<section className='py-16 bg-gradient-to-br from-cream-50 to-cream-100'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Perfect Noodle Combinations
						</h2>
						<p className='text-xl text-gray-700 font-elegant max-w-3xl mx-auto'>
							Discover how authentic Indonesian sambal
							transforms every type of noodle dish.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🍜
									</span>
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-elegant'>
									Instant Ramen Upgrade
								</h3>
								<p className='text-gray-600 text-sm'>
									Add 1-2 teaspoons to instant ramen
									for authentic Indonesian flavor.
									Transforms cheap noodles into
									gourmet experience.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🥢
									</span>
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-elegant'>
									Stir-Fry Noodles
								</h3>
								<p className='text-gray-600 text-sm'>
									Perfect base for mie goreng
									(Indonesian fried noodles).
									Stir-fry with vegetables and
									protein for authentic taste.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🍲
									</span>
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-elegant'>
									Soup Noodles
								</h3>
								<p className='text-gray-600 text-sm'>
									Stir into broth for
									Indonesian-style soup noodles.
									Creates complex, warming flavors
									perfect for cold days.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🥗
									</span>
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-elegant'>
									Cold Noodle Salad
								</h3>
								<p className='text-gray-600 text-sm'>
									Mix with sesame oil for spicy cold
									noodle salads. Perfect for summer
									meals and meal prep.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🍝
									</span>
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-elegant'>
									Fusion Pasta
								</h3>
								<p className='text-gray-600 text-sm'>
									Create Indonesian-Italian fusion
									with spaghetti or linguine. Unique
									flavor combination that surprises
									and delights.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🥡
									</span>
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-elegant'>
									Takeaway Style
								</h3>
								<p className='text-gray-600 text-sm'>
									Recreate restaurant-quality
									Chinese/Thai noodles at home.
									Better flavor than takeaway at
									fraction of the cost.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Why Sambal for Noodles Section */}
			<section className='py-16 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<div>
							<Badge className='bg-burgundy-100 text-burgundy-800 font-elegant mb-6 text-sm px-4 py-2'>
								<Flame className='w-4 h-4 mr-2' />
								Perfect Noodle Sauce
							</Badge>

							<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
								Why Indonesian Sambal is the Ultimate
								Noodle Sauce
							</h2>

							<p className='text-xl text-gray-700 mb-8 font-elegant leading-relaxed'>
								Unlike one-dimensional sauces, authentic
								Indonesian sambal brings layers of
								flavor that complement noodles perfectly
								- heat, aromatics, and umami in perfect
								balance.
							</p>

							<div className='space-y-4'>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-bold text-burgundy-900 font-elegant'>
											Complex Heat Profile
										</h4>
										<p className='text-gray-600'>
											Builds gradually,
											doesn&apos;t overpower
											delicate noodle flavors
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-bold text-burgundy-900 font-elegant'>
											Aromatic Foundation
										</h4>
										<p className='text-gray-600'>
											Garlic and shallots
											create savory base that
											enhances any noodle
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-bold text-burgundy-900 font-elegant'>
											Versatile Application
										</h4>
										<p className='text-gray-600'>
											Works as cooking
											ingredient, finishing
											sauce, or table condiment
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-bold text-burgundy-900 font-elegant'>
											Natural Umami
										</h4>
										<p className='text-gray-600'>
											Fermented elements add
											depth without artificial
											MSG
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className='relative'>
							<div className='aspect-square max-w-md mx-auto relative'>
								<Image
									src='/images/Spice Island Indonesia Sambal Oelek 185g Label.png'
									alt='Perfect noodle sauce - Indonesian sambal'
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

			{/* Chef&apos;s Noodle Recipe Section */}
			<section className='py-16 bg-gradient-to-br from-cream-50 to-cream-100'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<div className='relative'>
							<div className='aspect-[4/3] max-w-md mx-auto relative rounded-sm overflow-hidden'>
								<Image
									src='/images/chef-yossie-cooking.jpg'
									alt='Chef Yossie preparing Indonesian noodle dishes'
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
								Chef&apos;s Secret Recipe
							</Badge>

							<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
								Authentic Mie Goreng from Chef
								Yossie&apos;s Kitchen
							</h2>

							<p className='text-xl text-gray-700 mb-6 font-elegant leading-relaxed'>
								This is the exact recipe Chef Yossie
								used in her Bandung catering business.
								Simple ingredients, authentic technique,
								incredible flavor.
							</p>

							<div className='bg-white rounded-lg p-6 border border-gold-200 mb-8'>
								<h4 className='font-bold text-burgundy-900 mb-3 font-elegant'>
									Chef&apos;s 5-Minute Mie Goreng:
								</h4>
								<ol className='text-gray-700 text-sm leading-relaxed space-y-2'>
									<li>
										1. Cook 200g egg noodles,
										drain and set aside
									</li>
									<li>
										2. Heat 2 tbsp oil, add 2 tbsp
										sambal oelek
									</li>
									<li>
										3. Add noodles, toss for 2
										minutes
									</li>
									<li>
										4. Add soy sauce, vegetables,
										protein if desired
									</li>
									<li>
										5. Garnish with fried shallots
										and serve immediately
									</li>
								</ol>
							</div>

							<blockquote className='border-l-4 border-gold-600 pl-6 mb-8'>
								<p className='text-lg italic text-gray-700 mb-4'>
									&quot;This recipe fed hundreds of
									satisfied customers in my catering
									business. The secret is using real
									sambal - it creates layers of
									flavor that packet seasonings
									simply cannot match.&quot;
								</p>
								<cite className='text-gold-600 font-brand text-lg'>
									— Chef Yossie, Bandung-born
									Indonesian Chef
								</cite>
							</blockquote>

							<div className='flex flex-col sm:flex-row gap-4'>
								<Link href='/recipes'>
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
										Order Noodle Sambal
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
						Never Eat Boring Noodles Again
					</h2>

					<p className='text-xl sm:text-2xl mb-8 text-cream-100 font-elegant leading-relaxed max-w-3xl mx-auto'>
						Transform every noodle dish with authentic
						Indonesian sambal. Restaurant-quality flavor in
						your own kitchen, ready in minutes.
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
								Restaurant Quality
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
								Upgrade Your Noodles - £7.49
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
