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
} from "lucide-react";

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
				url: "https://sambal-shop.vercel.app/images/Spice Island Indonesia Sambal Oelek 185g Label.png",
				width: 400,
				height: 400,
				alt: "Authentic Indonesian Sambal Bali 185g jar - Sweet Spicy",
			},
		],
	},
};

export default function SambalBaliSweetSpicyPage() {
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
								<Heart className='w-5 h-5 mr-2' />
								Sweet Meets Spicy Perfection
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight font-brand'>
								<span className='text-white block mb-2'>
									Sweet Spicy
								</span>
								<span className='text-gold-300 block mb-2'>
									Sambal Bali
								</span>
								<span className='text-gold-200 text-2xl sm:text-3xl lg:text-4xl font-script italic'>
									Aromatic Indonesian Perfection
								</span>
							</h1>

							<p className='text-xl sm:text-2xl text-gold-200 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body'>
								Experience the perfect balance of sweet
								heat and aromatic spices in Chef
								Yossie&apos;s Sambal Bali. Traditional
								Balinese-style recipe with palm sugar,
								galangal, and secret spice blend.
							</p>

							{/* Key Features */}
							<div className='grid sm:grid-cols-2 gap-4 mb-10'>
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

							<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
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

						{/* Right side - Product Image */}
						<div className='relative'>
							<div className='relative w-full max-w-md mx-auto'>
								<div className='absolute inset-0 bg-gradient-to-r from-gold-600/30 to-gold-400/30 rounded-full blur-3xl'></div>
								<Image
									src='/images/optimized/Spice Island Indonesia Sambal Oelek 185g Label-responsive.webp'
									alt='Authentic Indonesian Sambal Bali 185g jar - Sweet Spicy'
									width={664}
									height={364}
									className='relative z-10 w-full h-auto drop-shadow-2xl'
									priority
								/>
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
