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
} from "lucide-react";

export const metadata = {
	title: "Authentic Indonesian Sambal Oelek UK | Chef Yossie's Traditional Recipe | Spice Island Indonesia",
	description:
		"Buy authentic Indonesian sambal oelek made by Bandung-born Chef Yossie using traditional family recipes. Pure chili paste, no preservatives. UK delivery available.",
	keywords:
		"sambal oelek UK, authentic Indonesian sambal, buy sambal oelek, Indonesian chili paste, traditional sambal recipe, Chef Yossie sambal, Indonesian condiments UK, sambal oelek delivery",
	openGraph: {
		title: "Authentic Indonesian Sambal Oelek UK | Chef Yossie's Traditional Recipe",
		description:
			"Pure, fiery Indonesian chili paste made by professional chef using traditional Bandung recipes. No preservatives, authentic taste.",
		type: "website",
		images: [
			{
				url: "https://sambal-shop.vercel.app/images/Spice Island Indonesia Sambal Oelek 185g Label.png",
				width: 400,
				height: 400,
				alt: "Authentic Indonesian Sambal Oelek 185g jar",
			},
		],
	},
};

export default function SambalOelekUKPage() {
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
								<ChefHat className='w-5 h-5 mr-2' />
								Chef Yossie's Traditional Recipe
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight font-brand'>
								<span className='text-white block mb-2'>
									Authentic Indonesian
								</span>
								<span className='text-gold-300 block mb-2'>
									Sambal Oelek
								</span>
								<span className='text-gold-200 text-2xl sm:text-3xl lg:text-4xl font-script italic'>
									Made in UK by Bandung Chef
								</span>
							</h1>

							<p className='text-xl sm:text-2xl text-gold-200 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body'>
								Finally, real Indonesian sambal oelek
								made using traditional recipes from Chef
								Yossie's family catering kitchen in
								Bandung. No preservatives, no shortcuts
								- just authentic Indonesian fire.
							</p>

							{/* Key Features */}
							<div className='grid sm:grid-cols-2 gap-4 mb-10'>
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
										<Shield className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										No Preservatives
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<MapPin className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Traditional Bandung Recipe
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Truck className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
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
										className='font-elegant text-lg px-8 py-4'
									>
										Order Sambal Oelek Now - £7.49
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
						</div>

						{/* Right side - Product Image */}
						<div className='relative'>
							<div className='relative max-w-lg mx-auto'>
								<div className='aspect-square rounded-3xl overflow-hidden shadow-luxury bg-gradient-to-br from-burgundy-900/10 to-gold-600/10 p-8'>
									<div className='w-full h-full rounded-2xl flex items-center justify-center'>
										<Image
											src='/images/Spice Island Indonesia Sambal Oelek 185g Label.png'
											alt='Authentic Indonesian Sambal Oelek 185g - Pure chili paste made by Chef Yossie'
											width={400}
											height={400}
											className='w-full h-full object-contain drop-shadow-2xl'
											priority
										/>
									</div>
								</div>

								{/* Floating badges */}
								<div className='absolute -top-4 -left-4 bg-gold-500 text-burgundy-900 rounded-full p-4 shadow-luxury animate-float border border-gold-300'>
									<Award className='w-6 h-6' />
								</div>
								<div className='absolute -bottom-4 -right-4 bg-burgundy-800 text-gold-300 rounded-full p-4 shadow-luxury animate-float delay-1000 border border-burgundy-600'>
									<Heart className='w-6 h-6' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Problem/Solution Section */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							Why Most "Indonesian" Sambal
							<span className='text-gold-700 block'>
								Disappoints True Food Lovers
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-body'>
							You've tried the mass-produced versions. You
							know they're missing something. Here's why
							our sambal oelek is different.
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
								Chef Yossie's Authentic Solution:
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

			{/* Chef Credibility Section */}
			<section className='py-24 bg-gradient-to-br from-cream-100 to-cream-200'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div className='relative'>
							<div className='aspect-[4/3] rounded-4xl overflow-hidden shadow-luxury border border-gold-200'>
								<Image
									src='/images/indonesian_vista.png'
									alt='Indonesian spices and ingredients from Bandung'
									fill
									className='object-cover'
									loading='lazy'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
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
							<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-8 font-brand'>
								Meet Chef Yossie
								<span className='text-gold-700 block font-script italic text-4xl sm:text-5xl'>
									Your Sambal Expert
								</span>
							</h2>

							<div className='space-y-6 text-lg text-neutral-700 leading-relaxed mb-8 font-body'>
								<p>
									Born and raised in{" "}
									<strong>Bandung, West Java</strong>{" "}
									- Indonesia's culinary capital -
									Chef Yossie learned the art of
									sambal making in her mother's
									bustling catering kitchen.
								</p>
								<p>
									For over <strong>15 years</strong>,
									she prepared traditional Indonesian
									recipes for hundreds of guests
									daily, mastering the professional
									techniques that separate authentic
									sambal from home-made attempts.
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
									Read Chef Yossie's Full Story
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className='py-24 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-4xl sm:text-5xl font-bold mb-6 font-brand'>
						Taste Authentic Indonesia
						<span className='text-gold-300 block'>
							In Your Kitchen Today
						</span>
					</h2>
					<p className='text-xl text-gold-200 mb-8 font-body'>
						Join hundreds of UK customers who've discovered
						the difference professional-made sambal makes
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
						<Link href='/shop'>
							<Button
								variant='primary'
								size='lg'
								className='font-elegant text-lg px-8 py-4'
							>
								Order Sambal Oelek - £7.49
							</Button>
						</Link>
						<Link href='/shop'>
							<Button
								variant='outline'
								size='lg'
								className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 text-lg px-8 py-4'
							>
								Try Sample Pack - £2.99
							</Button>
						</Link>
					</div>

					<div className='flex items-center justify-center space-x-6 text-gold-200'>
						<div className='flex items-center space-x-2'>
							<Truck className='w-5 h-5' />
							<span className='font-body'>
								Free UK delivery over £25
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
		</div>
	);
}
