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
	Building,
	Navigation,
} from "lucide-react";

export const metadata = {
	title: "Indonesian Sambal Delivery London | Authentic Chili Paste London UK | Spice Island Indonesia",
	description:
		"Get authentic Indonesian sambal delivered across London! Chef Yossie&apos;s traditional recipes available with fast London delivery. Perfect for Indonesian food lovers in the capital.",
	keywords:
		"Indonesian sambal London, sambal delivery London, authentic Indonesian food London, Indonesian condiments London, Chef Yossie London, sambal oelek London, Indonesian chili paste London delivery",
	openGraph: {
		title: "Indonesian Sambal Delivery London | Authentic Chili Paste London UK",
		description:
			"Authentic Indonesian sambal delivered across London. Traditional recipes from Chef Yossie, perfect for London&apos;s Indonesian food scene.",
		type: "website",
		images: [
			{
				url: "https://sambal-shop.vercel.app/images/Spice Island Indonesia Sambal Oelek 185g Label.png",
				width: 400,
				height: 400,
				alt: "Indonesian Sambal delivery London",
			},
		],
	},
};

export default function IndonesianSambalLondonPage() {
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
								<MapPin className='w-4 h-4 mr-2' />
								London Delivery Available
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-brand leading-tight'>
								Authentic Indonesian Sambal
								<span className='text-gold-300'>
									{" "}
									Delivered Across London
								</span>
							</h1>

							<p className='text-xl sm:text-2xl mb-8 text-cream-100 font-elegant leading-relaxed'>
								Finally, real Indonesian sambal in
								London!
								<strong className='text-gold-300'>
									{" "}
									Chef Yossie&apos;s traditional
									recipes
								</strong>
								delivered to your door across all London
								boroughs. No more settling for
								supermarket imitations.
							</p>

							<div className='flex items-center justify-center lg:justify-start mb-8 space-x-4'>
								<div className='flex items-center space-x-2'>
									<Truck className='w-6 h-6 text-gold-300' />
									<span className='font-elegant'>
										Fast London Delivery
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<ChefHat className='w-6 h-6 text-gold-300' />
									<span className='font-elegant'>
										Authentic Quality
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
										Order London Delivery - £7.49
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
									alt='Indonesian Sambal delivery across London'
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

			{/* London Delivery Coverage Section */}
			<section className='py-16 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							We Deliver Across All London Boroughs
						</h2>
						<p className='text-xl text-gray-700 font-elegant max-w-3xl mx-auto'>
							From Central London to the outer boroughs,
							authentic Indonesian sambal delivered to your
							door.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
						<Card className='border-gold-200 hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-3'>
									<Building className='w-6 h-6 text-burgundy-600' />
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-2 font-elegant'>
									Central London
								</h3>
								<p className='text-gray-600 text-sm'>
									Westminster, Camden, Islington,
									Hackney, Tower Hamlets
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-3'>
									<Navigation className='w-6 h-6 text-burgundy-600' />
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-2 font-elegant'>
									North London
								</h3>
								<p className='text-gray-600 text-sm'>
									Barnet, Enfield, Haringey, Waltham
									Forest
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-3'>
									<MapPin className='w-6 h-6 text-burgundy-600' />
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-2 font-elegant'>
									South London
								</h3>
								<p className='text-gray-600 text-sm'>
									Croydon, Bromley, Lambeth,
									Southwark, Greenwich
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 text-center'>
								<div className='w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-3'>
									<Star className='w-6 h-6 text-burgundy-600' />
								</div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-2 font-elegant'>
									West London
								</h3>
								<p className='text-gray-600 text-sm'>
									Ealing, Hounslow, Richmond,
									Hammersmith & Fulham
								</p>
							</CardContent>
						</Card>
					</div>

					<div className='text-center mt-8'>
						<p className='text-gray-600 font-elegant'>
							<strong>Free delivery</strong> on orders over
							£25 • <strong>Next-day delivery</strong>{" "}
							available •<strong>Same-day delivery</strong>{" "}
							in Central London zones
						</p>
					</div>
				</div>
			</section>

			{/* Why London Needs Authentic Sambal Section */}
			<section className='py-16 bg-gradient-to-br from-cream-50 to-cream-100'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Why London Deserves Authentic Indonesian
							Sambal
						</h2>
						<p className='text-xl text-gray-700 font-elegant max-w-3xl mx-auto'>
							London&apos;s diverse food scene demands
							authentic flavors, not mass-produced
							imitations.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🌍
									</span>
								</div>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-elegant'>
									Multicultural Capital
								</h3>
								<p className='text-gray-600'>
									London&apos;s Indonesian community
									and food lovers deserve access to
									authentic flavors, not watered-down
									supermarket versions.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🍽️
									</span>
								</div>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-elegant'>
									Foodie Culture
								</h3>
								<p className='text-gray-600'>
									London&apos;s sophisticated food
									scene appreciates quality and
									authenticity. Our sambal meets the
									high standards of discerning London
									palates.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🏠
									</span>
								</div>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-elegant'>
									Home Cooking Revolution
								</h3>
								<p className='text-gray-600'>
									More Londoners are cooking at home
									and seeking authentic ingredients
									to create restaurant-quality dishes
									in their own kitchens.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* London Indonesian Community Section */}
			<section className='py-16 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<div>
							<Badge className='bg-burgundy-100 text-burgundy-800 font-elegant mb-6 text-sm px-4 py-2'>
								<Heart className='w-4 h-4 mr-2' />
								For London&apos;s Indonesian Community
							</Badge>

							<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
								A Taste of Home in London
							</h2>

							<p className='text-xl text-gray-700 mb-8 font-elegant leading-relaxed'>
								Chef Yossie understands the longing for
								authentic Indonesian flavors. Having
								moved to the UK herself, she knows how
								hard it is to find real sambal that
								tastes like home.
							</p>

							<div className='space-y-4'>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-bold text-burgundy-900 font-elegant'>
											Traditional Bandung
											Recipes
										</h4>
										<p className='text-gray-600'>
											Authentic flavors from
											West Java, just like
											grandmother made
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-bold text-burgundy-900 font-elegant'>
											No Compromises
										</h4>
										<p className='text-gray-600'>
											Fresh ingredients,
											traditional methods,
											authentic taste
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-bold text-burgundy-900 font-elegant'>
											Made with Love
										</h4>
										<p className='text-gray-600'>
											Each jar crafted with the
											care of a family recipe
										</p>
									</div>
								</div>
							</div>

							<blockquote className='border-l-4 border-gold-600 pl-6 mt-8'>
								<p className='text-lg italic text-gray-700 mb-4'>
									&quot;When I first moved to London,
									I couldn&apos;t find sambal that
									tasted like home. That&apos;s why I
									started making my own - to bring
									authentic Indonesian flavors to
									London&apos;s Indonesian community
									and anyone who appreciates real
									taste.&quot;
								</p>
								<cite className='text-gold-600 font-brand text-lg'>
									— Chef Yossie, Bandung-born
									Indonesian Chef
								</cite>
							</blockquote>
						</div>

						<div className='relative'>
							<div className='aspect-[4/3] max-w-md mx-auto relative rounded-sm overflow-hidden'>
								<Image
									src='/images/chef-yossie-cooking.jpg'
									alt='Chef Yossie bringing Indonesian flavors to London'
									fill
									className='object-cover'
									loading='lazy'
									sizes='(max-width: 768px) 100vw, 50vw'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* London Delivery Details Section */}
			<section className='py-16 bg-gradient-to-br from-cream-50 to-cream-100'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Fast, Reliable London Delivery
						</h2>
						<p className='text-xl text-gray-700 font-elegant max-w-3xl mx-auto'>
							We understand London life is fast-paced.
							That&apos;s why we&apos;ve optimized our
							delivery to get authentic sambal to you
							quickly and safely.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						<Card className='border-green-200 bg-green-50'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Clock className='w-8 h-8 text-green-600' />
								</div>
								<h3 className='text-xl font-bold text-green-800 mb-3 font-elegant'>
									Same-Day Delivery
								</h3>
								<p className='text-green-700'>
									Order before 2 PM for same-day
									delivery in Central London zones.
									Perfect for last-minute dinner
									plans.
								</p>
							</CardContent>
						</Card>

						<Card className='border-blue-200 bg-blue-50'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Truck className='w-8 h-8 text-blue-600' />
								</div>
								<h3 className='text-xl font-bold text-blue-800 mb-3 font-elegant'>
									Next-Day Delivery
								</h3>
								<p className='text-blue-700'>
									Standard next-day delivery across
									all London boroughs. Free on orders
									over £25.
								</p>
							</CardContent>
						</Card>

						<Card className='border-purple-200 bg-purple-50'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Shield className='w-8 h-8 text-purple-600' />
								</div>
								<h3 className='text-xl font-bold text-purple-800 mb-3 font-elegant'>
									Safe Packaging
								</h3>
								<p className='text-purple-700'>
									Specially designed packaging
									ensures your sambal arrives in
									perfect condition, even in London
									traffic.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Popular London Areas Section */}
			<section className='py-16 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Popular Delivery Areas in London
						</h2>
						<p className='text-xl text-gray-700 font-elegant'>
							We&apos;re proud to serve Indonesian sambal
							lovers across London&apos;s most vibrant
							neighborhoods.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{[
							"Shoreditch & Hoxton",
							"Clapham & Brixton",
							"Notting Hill & Kensington",
							"Camden & King&apos;s Cross",
							"Greenwich & Blackheath",
							"Richmond & Twickenham",
							"Canary Wharf & Docklands",
							"Hampstead & Highgate",
							"Wimbledon & Putney",
						].map((area, index) => (
							<Card
								key={index}
								className='border-gold-200 hover:shadow-md transition-shadow'
							>
								<CardContent className='p-4 text-center'>
									<div className='w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-2'>
										<MapPin className='w-4 h-4 text-gold-600' />
									</div>
									<h4 className='font-bold text-burgundy-900 font-elegant text-sm'>
										{area}
									</h4>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className='py-16 sm:py-24 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-96 h-96 bg-gold-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-96 h-96 bg-gold-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-brand'>
						Authentic Indonesian Sambal, Delivered to Your
						London Door
					</h2>

					<p className='text-xl sm:text-2xl mb-8 text-cream-100 font-elegant leading-relaxed max-w-3xl mx-auto'>
						Join hundreds of satisfied London customers
						who&apos;ve discovered the difference authentic
						Indonesian sambal makes. Order today for fast
						London delivery.
					</p>

					<div className='flex items-center justify-center space-x-8 mb-8'>
						<div className='flex items-center space-x-2'>
							<Truck className='w-6 h-6 text-gold-300' />
							<span className='font-elegant'>
								Fast London Delivery
							</span>
						</div>
						<div className='flex items-center space-x-2'>
							<Shield className='w-6 h-6 text-gold-300' />
							<span className='font-elegant'>
								Authentic Quality
							</span>
						</div>
						<div className='flex items-center space-x-2'>
							<Clock className='w-6 h-6 text-gold-300' />
							<span className='font-elegant'>
								Same-Day Available
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
								Order London Delivery - £7.49
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
