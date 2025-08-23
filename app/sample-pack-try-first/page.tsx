import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import GlassCard from "@/components/ui/GlassCard";
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
} from "lucide-react";

export const metadata = {
	title: "Indonesian Sambal Sample Pack UK | Taste Before Buy",
	description:
		"Try authentic Indonesian sambal before committing to full jars. Chef Yossie&apos;s sample pack includes Sambal Oelek and Sambal Bali. Perfect introduction to Indonesian flavors.",
	keywords:
		"Indonesian sambal samples UK, try sambal first, sambal sample pack, taste test Indonesian condiments, Chef Yossie samples, Indonesian food trial, sambal tasting set UK",
	openGraph: {
		title: "Try Indonesian Sambal Sample Pack UK | Taste Before You Buy",
		description:
			"Perfect introduction to authentic Indonesian sambal. Try both varieties before committing to full jars.",
		type: "website",
		images: [
			{
				url: "https://spiceislandindonesia.com/images/optimized/sambal-sample-responsive.webp",
				width: 400,
				height: 400,
				alt: "Indonesian Sambal Sample Pack - Sambal Goreng 45g jar",
			},
		],
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/sample-pack-try-first",
	},
};

export default function SamplePackTryFirstPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100'>
			{/* Hero Section */}
			<section className='py-16 sm:py-20 lg:py-14 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-72 h-72 lg:w-80 lg:h-80 bg-gold-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-72 h-72 lg:w-80 lg:h-80 bg-gold-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 lg:gap-8 items-center'>
						{/* Left side - Content */}
						<div className='text-center lg:text-left'>
							<Badge className='bg-burgundy-800 text-gold-300 mb-6 px-6 py-3 text-lg font-semibold border border-gold-600/30'>
								<Package className='w-5 h-5 mr-2' />
								Risk-Free Tasting Experience
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-brand'>
								<span className='text-white block mb-2'>
									Try Indonesian Sambal
								</span>
								<span className='text-gold-300 block mb-2'>
									Sample Pack
								</span>
								<span className='text-gold-200 text-2xl sm:text-3xl lg:text-3xl font-script italic'>
									Taste Before You Commit
								</span>
							</h1>

							<p className='text-xl sm:text-2xl text-gold-200 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body'>
								New to Indonesian sambal? Start your
								journey with Chef Yossie&apos;s sample
								pack. Try both Sambal Oelek and Sambal
								Bali in perfect tasting portions before
								choosing your favorites.
							</p>

							{/* Key Features */}
							<div className='grid sm:grid-cols-2 gap-3 mb-6'>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Package className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										2 Authentic Varieties
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Shield className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Perfect Tasting Size
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<ChefHat className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Chef Yossie&apos;s Recipes
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Truck className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Free UK Delivery
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
										Order Sample Pack - £4.99
									</Button>
								</Link>
								<Link href='/shop'>
									<Button
										variant='outline'
										size='lg'
										className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 text-lg px-8 py-4'
									>
										View Full Range
									</Button>
								</Link>
							</div>
						</div>

						{/* Right side - Product Image */}
						<div className='relative'>
							<div className='relative w-full max-w-md mx-auto max-h-[55vh] flex items-center justify-center'>
								<div className='aspect-square rounded-sm overflow-hidden shadow-lg bg-neutral-100 p-6 h-96'>
									<div className='w-full h-full rounded-sm flex items-center justify-center'>
										<Image
											src='/images/optimized/sambal-sample-lg.webp'
											alt='Indonesian Sambal Sample Pack - Sambal Goreng 45g jar'
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

			{/* What&apos;s Included Section */}
			<section className='py-16 sm:py-20 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							What&apos;s in Your Sample Pack
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							Two perfectly sized portions to discover your
							Indonesian sambal preference without waste or
							commitment.
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
						<GlassCard
							variant='subtle'
							className='hover:shadow-xl transition-shadow'
						>
							<div className='p-8'>
								<div className='text-center mb-6'>
									<div className='w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4'>
										<Package className='w-8 h-8 text-white' />
									</div>
									<h3 className='text-xl font-semibold text-burgundy-900 mb-2 font-brand'>
										Sambal Oelek Sample
									</h3>
									<Badge className='bg-burgundy-100 text-burgundy-800 px-3 py-1'>
										50ml Tasting Jar
									</Badge>
								</div>
								<ul className='space-y-3 text-neutral-600 font-body'>
									<li className='flex items-start'>
										<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
										Pure <span className='text-red-700 font-medium'>cabai rawit</span> (bird's eye chili) paste - the
										foundation of Indonesian
										cooking
									</li>
									<li className='flex items-start'>
										<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
										Perfect for those who love
										clean, fiery heat
									</li>
									<li className='flex items-start'>
										<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
										Ideal for stir-fries,
										marinades, and cooking
									</li>
									<li className='flex items-start'>
										<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
										Traditional Bandung recipe, no
										preservatives
									</li>
								</ul>
							</div>
						</GlassCard>

						<GlassCard
							variant='subtle'
							className='hover:shadow-xl transition-shadow'
						>
							<div className='p-8'>
								<div className='text-center mb-6'>
									<div className='w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4'>
										<Heart className='w-8 h-8 text-white' />
									</div>
									<h3 className='text-xl font-semibold text-burgundy-900 mb-2 font-brand'>
										Sambal Bali Sample
									</h3>
									<Badge className='bg-burgundy-100 text-burgundy-800 px-3 py-1'>
										50ml Tasting Jar
									</Badge>
								</div>
								<ul className='space-y-3 text-neutral-600 font-body'>
									<li className='flex items-start'>
										<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
										Sweet and spicy with aromatic
										spice blend
									</li>
									<li className='flex items-start'>
										<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
										Perfect introduction for
										newcomers to sambal
									</li>
									<li className='flex items-start'>
										<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
										Excellent as dipping sauce or
										condiment
									</li>
									<li className='flex items-start'>
										<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
										Balinese-style with palm sugar
										and galangal
									</li>
								</ul>
							</div>
						</GlassCard>
					</div>
				</div>
			</section>

			{/* Why Try First Section */}
			<section className='py-16 sm:py-20 bg-gradient-to-br from-cream-50 to-cream-100'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Why Smart Customers Try First
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							Indonesian sambal is unlike any condiment
							you&apos;ve tried. Our sample pack ensures
							you find your perfect match.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						<GlassCard
							variant='subtle'
							className='hover:shadow-xl transition-shadow'
						>
							<div className='p-8 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6'>
									<Shield className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
									Risk-Free Discovery
								</h3>
								<p className='text-neutral-600 font-body'>
									Discover authentic Indonesian
									flavors without committing to full
									jars. Perfect for cautious food
									explorers.
								</p>
							</div>
						</GlassCard>

						<GlassCard
							variant='subtle'
							className='hover:shadow-xl transition-shadow'
						>
							<div className='p-8 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6'>
									<Heart className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
									Find Your Preference
								</h3>
								<p className='text-neutral-600 font-body'>
									Some prefer pure fire (Oelek),
									others love sweet heat (Bali). Try
									both to discover your Indonesian
									sambal soulmate.
								</p>
							</div>
						</GlassCard>

						<GlassCard
							variant='subtle'
							className='hover:shadow-xl transition-shadow'
						>
							<div className='p-8 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6'>
									<Gift className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
									Perfect Gift Starter
								</h3>
								<p className='text-neutral-600 font-body'>
									Introducing friends to Indonesian
									cuisine? Start with samples -
									it&apos;s thoughtful and shows you
									care about their preferences.
								</p>
							</div>
						</GlassCard>
					</div>
				</div>
			</section>

			{/* Customer Journey Section */}
			<section className='py-16 sm:py-20 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Your Indonesian Sambal Journey
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							From curious beginner to Indonesian cuisine
							enthusiast in three simple steps.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						{[
							{
								step: "1",
								title: "Order Sample Pack",
								description:
									"Start with our risk-free sample pack. Two authentic varieties, perfect tasting portions.",
								icon: Package,
							},
							{
								step: "2",
								title: "Discover Your Favorite",
								description:
									"Try both varieties with different dishes. Notice how each transforms your cooking.",
								icon: Heart,
							},
							{
								step: "3",
								title: "Order Full Jars",
								description:
									"Once you know your preference, order full-sized jars with confidence.",
								icon: CheckCircle,
							},
						].map((item, index) => (
							<div key={index} className='text-center'>
								<div className='relative mb-8'>
									<div className='w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4'>
										<item.icon className='w-10 h-10 text-white' />
									</div>
									<div className='absolute -top-2 -right-2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center'>
										<span className='text-burgundy-900 font-bold text-sm'>
											{item.step}
										</span>
									</div>
								</div>
								<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
									{item.title}
								</h3>
								<p className='text-neutral-600 font-body'>
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className='py-16 sm:py-20 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl sm:text-4xl font-bold mb-6 font-brand'>
						Start Your Indonesian Sambal Journey Today
					</h2>

					<p className='text-xl text-gold-200 mb-10 max-w-2xl mx-auto font-body'>
						Join hundreds of UK customers who started with our
						sample pack and discovered their new favorite
						condiment. Risk-free, authentic, delicious.
					</p>

					<div className='bg-burgundy-800/50 rounded-sm p-8 mb-10 border border-gold-600/30'>
						<div className='flex items-center justify-center mb-4'>
							<Package className='w-8 h-8 text-gold-300 mr-3' />
							<span className='text-2xl font-bold text-gold-300 font-brand'>
								Sample Pack Includes:
							</span>
						</div>
						<div className='grid sm:grid-cols-2 gap-4 text-gold-200 font-body'>
							<div className='flex items-center justify-center'>
								<CheckCircle className='w-5 h-5 mr-2' />
								50ml Sambal Oelek (Pure Fire)
							</div>
							<div className='flex items-center justify-center'>
								<CheckCircle className='w-5 h-5 mr-2' />
								50ml Sambal Bali (Sweet Heat)
							</div>
							<div className='flex items-center justify-center'>
								<CheckCircle className='w-5 h-5 mr-2' />
								Recipe suggestions included
							</div>
							<div className='flex items-center justify-center'>
								<CheckCircle className='w-5 h-5 mr-2' />
								Free UK delivery
							</div>
						</div>
					</div>

					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/shop'>
							<Button
								variant='primary'
								size='lg'
								className='font-elegant text-lg px-8 py-4'
							>
								Order Sample Pack - £4.99
							</Button>
						</Link>
						<Link href='/chef'>
							<Button
								variant='outline'
								size='lg'
								className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 text-lg px-8 py-4'
							>
								Meet Chef Yossie
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
