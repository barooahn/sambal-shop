import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/simple-button";
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
	Globe,
	Users,
} from "@/components/ui/icons";

export const metadata = {
	title: "Sambal vs Sriracha | Indonesian vs Thai Hot Sauce Guide",
	description:
		"Discover the key differences between authentic Indonesian sambal and Thai sriracha. Learn about origins, ingredients, heat levels, and which one to choose for your cooking.",
	keywords:
		"sambal vs sriracha, Indonesian sambal, Thai sriracha, hot sauce comparison, authentic chili sauce, sambal oelek vs sriracha, Indonesian condiments, Asian hot sauces",
	openGraph: {
		title: "Sambal vs Sriracha: The Complete Guide to Asian Hot Sauces",
		description:
			"Professional chef explains the key differences between authentic Indonesian sambal and Thai sriracha. Which one should you choose?",
		type: "website",
		images: [
			{
				url: "https://www.spiceislandindonesia.com/images/sambal-oelek-lg.webp",
				width: 400,
				height: 400,
				alt: "Authentic Indonesian Sambal vs Sriracha comparison",
			},
		],
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/sambal-vs-sriracha",
	},
};

export default function SambalVsSrirachaPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100'>
			{/* Hero Section */}
			<section className='py-16 sm:py-24 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-96 h-96 bg-gold-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-96 h-96 bg-gold-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<Badge className='bg-burgundy-800 text-gold-300 mb-6 px-6 py-3 text-lg font-semibold border border-gold-600/30'>
							<ChefHat className='w-5 h-5 mr-2' />
							Professional Chef&apos;s Guide
						</Badge>

						<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight font-brand'>
							<span className='text-white block mb-2'>
								Sambal vs Sriracha
							</span>
							<span className='text-gold-300 block mb-2'>
								The Complete Guide
							</span>
							<span className='text-gold-200 text-2xl sm:text-3xl lg:text-4xl font-script italic'>
								By Chef Yossie from Bandung
							</span>
						</h1>

						<p className='text-xl sm:text-2xl text-gold-200 mb-10 max-w-4xl mx-auto leading-relaxed font-body'>
							As a professional Indonesian chef, I&apos;ll
							explain the key differences between authentic
							sambal and Thai sriracha - and why it matters
							for your cooking.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link href='#comparison'>
								<Button
									variant='primary'
									size='lg'
									className='font-elegant text-lg px-8 py-4'
								>
									See the Comparison
								</Button>
							</Link>
							<Link href='/shop'>
								<Button
									variant='outline'
									size='lg'
									className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 text-lg px-8 py-4'
								>
									Try Authentic Sambal
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Quick Answer Section */}
			<section className='py-16 bg-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='bg-gradient-to-r from-burgundy-50 to-gold-50 rounded-sm p-8 border border-gold-200'>
						<h2 className='text-3xl font-bold text-burgundy-900 mb-6 font-brand text-center'>
							The Quick Answer
						</h2>
						<div className='text-lg text-neutral-700 leading-relaxed font-body space-y-4'>
							<p>
								<strong>Sambal</strong> is a traditional
								Indonesian chili paste made from pure
								chilies, salt, and vinegar.
								<strong>Sriracha</strong> is a
								Thai-style hot sauce with added sugar,
								garlic, and thickeners.
							</p>
							<p>
								<strong>Key difference:</strong> Sambal
								focuses on pure chili flavor and heat,
								while sriracha is sweeter and more
								complex. Sambal is a cooking ingredient;
								sriracha is primarily a condiment.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Detailed Comparison Section */}
			<section
				id='comparison'
				className='py-24 bg-gradient-to-br from-cream-100 to-cream-200'
			>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h3 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							Sambal vs Sriracha
							<span className='text-gold-700 block'>
								Side-by-Side Comparison
							</span>
						</h3>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-body'>
							Understanding the differences helps you
							choose the right sauce for your cooking style
						</p>
					</div>

					<div className='grid lg:grid-cols-2 gap-8'>
						{/* Sambal Card */}
						<Card className='shadow-luxury border border-gold-200 bg-gradient-to-br from-cream-50 to-cream-100 overflow-hidden rounded-sm'>
							<CardContent className='p-8'>
								<div className='text-center mb-6'>
									<div className='w-32 h-32 mx-auto mb-4 relative'>
										<Image
											src='/images/sambal-oelek-lg.webp'
											alt='Authentic Indonesian Sambal Oelek'
											fill
											className='object-contain'
											loading='lazy'
										/>
									</div>
									<h3 className='text-3xl font-bold text-burgundy-900 mb-2 font-brand'>
										Indonesian Sambal
									</h3>
									<p className='text-gold-700 font-elegant'>
										Traditional Chili Paste
									</p>
								</div>

								<div className='space-y-4'>
									<div className='flex items-start space-x-3'>
										<MapPin className='w-5 h-5 text-burgundy-600 mt-1' />
										<div>
											<h4 className='font-bold text-burgundy-900 font-brand'>
												Origin
											</h4>
											<p className='text-neutral-700 font-body'>
												Indonesia (Spice
												Islands)
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<Clock className='w-5 h-5 text-burgundy-600 mt-1' />
										<div>
											<h4 className='font-bold text-burgundy-900 font-brand'>
												History
											</h4>
											<p className='text-neutral-700 font-body'>
												Centuries old,
												traditional recipe
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<Star className='w-5 h-5 text-burgundy-600 mt-1' />
										<div>
											<h4 className='font-bold text-burgundy-900 font-brand'>
												Ingredients
											</h4>
											<p className='text-neutral-700 font-body'>
												Pure chilies, salt,
												vinegar
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<Flame className='w-5 h-5 text-burgundy-600 mt-1' />
										<div>
											<h4 className='font-bold text-burgundy-900 font-brand'>
												Flavor Profile
											</h4>
											<p className='text-neutral-700 font-body'>
												Pure chili heat,
												tangy, no sweetness
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<ChefHat className='w-5 h-5 text-burgundy-600 mt-1' />
										<div>
											<h4 className='font-bold text-burgundy-900 font-brand'>
												Best Used For
											</h4>
											<p className='text-neutral-700 font-body'>
												Cooking ingredient,
												marinades,
												stir-fries
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<Award className='w-5 h-5 text-burgundy-600 mt-1' />
										<div>
											<h4 className='font-bold text-burgundy-900 font-brand'>
												Texture
											</h4>
											<p className='text-neutral-700 font-body'>
												Coarsely ground,
												chunky paste
											</p>
										</div>
									</div>
								</div>

								<div className='mt-8 pt-6 border-t border-gold-200'>
									<Link href='/shop'>
										<Button
											variant='primary'
											size='lg'
											className='w-full font-elegant'
										>
											Try Authentic Sambal -
											£7.49
										</Button>
									</Link>
								</div>
							</CardContent>
						</Card>

						{/* Sriracha Card */}
						<Card className='shadow-luxury border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden rounded-sm'>
							<CardContent className='p-8'>
								<div className='text-center mb-6'>
									<div className='w-32 h-32 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center'>
										<Flame className='w-16 h-16 text-red-600' />
									</div>
									<h3 className='text-3xl font-bold text-neutral-900 mb-2 font-brand'>
										Thai Sriracha
									</h3>
									<p className='text-neutral-600 font-elegant'>
										Sweet Hot Sauce
									</p>
								</div>

								<div className='space-y-4'>
									<div className='flex items-start space-x-3'>
										<MapPin className='w-5 h-5 text-neutral-600 mt-1' />
										<div>
											<h4 className='font-bold text-neutral-900 font-brand'>
												Origin
											</h4>
											<p className='text-neutral-700 font-body'>
												Thailand (Si Racha)
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<Clock className='w-5 h-5 text-neutral-600 mt-1' />
										<div>
											<h4 className='font-bold text-neutral-900 font-brand'>
												History
											</h4>
											<p className='text-neutral-700 font-body'>
												1930s, modern
												commercial sauce
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<Star className='w-5 h-5 text-neutral-600 mt-1' />
										<div>
											<h4 className='font-bold text-neutral-900 font-brand'>
												Ingredients
											</h4>
											<p className='text-neutral-700 font-body'>
												Chilies, sugar,
												garlic, vinegar,
												thickeners
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<Flame className='w-5 h-5 text-neutral-600 mt-1' />
										<div>
											<h4 className='font-bold text-neutral-900 font-brand'>
												Flavor Profile
											</h4>
											<p className='text-neutral-700 font-body'>
												Sweet, garlicky,
												mild heat
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<ChefHat className='w-5 h-5 text-neutral-600 mt-1' />
										<div>
											<h4 className='font-bold text-neutral-900 font-brand'>
												Best Used For
											</h4>
											<p className='text-neutral-700 font-body'>
												Table condiment,
												dipping sauce
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<Award className='w-5 h-5 text-neutral-600 mt-1' />
										<div>
											<h4 className='font-bold text-neutral-900 font-brand'>
												Texture
											</h4>
											<p className='text-neutral-700 font-body'>
												Smooth, pourable
												sauce
											</p>
										</div>
									</div>
								</div>

								<div className='mt-8 pt-6 border-t border-neutral-200'>
									<div className='text-center text-neutral-600 font-body'>
										Available at most supermarkets
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* When to Use Which Section */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h3 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							When to Use Which?
							<span className='text-gold-700 block'>
								Chef Yossie&apos;s Recommendations
							</span>
						</h3>
					</div>

					<div className='grid lg:grid-cols-2 gap-12'>
						{/* Use Sambal When */}
						<div className='bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-sm p-8 border border-gold-200'>
							<h3 className='text-3xl font-bold text-burgundy-900 mb-6 font-brand'>
								Choose Sambal When:
							</h3>
							<div className='space-y-4'>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1' />
									<p className='text-neutral-700 font-body'>
										<strong>
											Cooking
											Indonesian/Malaysian
											dishes
										</strong>{" "}
										- Essential for authentic
										flavor
									</p>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1' />
									<p className='text-neutral-700 font-body'>
										<strong>
											Making marinades
										</strong>{" "}
										- Pure chili flavor penetrates
										meat better
									</p>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1' />
									<p className='text-neutral-700 font-body'>
										<strong>Stir-frying</strong> -
										Doesn&apos;t burn like
										sugar-based sauces
									</p>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1' />
									<p className='text-neutral-700 font-body'>
										<strong>
											You want pure heat
										</strong>{" "}
										- No sweetness to mask the
										chili flavor
									</p>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1' />
									<p className='text-neutral-700 font-body'>
										<strong>
											Professional cooking
										</strong>{" "}
										- More versatile as a base
										ingredient
									</p>
								</div>
							</div>
						</div>

						{/* Use Sriracha When */}
						<div className='bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-sm p-8 border border-neutral-200'>
							<h3 className='text-3xl font-bold text-neutral-900 mb-6 font-brand'>
								Choose Sriracha When:
							</h3>
							<div className='space-y-4'>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1' />
									<p className='text-neutral-700 font-body'>
										<strong>
											Table condiment
										</strong>{" "}
										- Ready to use, no cooking
										needed
									</p>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1' />
									<p className='text-neutral-700 font-body'>
										<strong>
											You prefer sweet heat
										</strong>{" "}
										- Milder, more approachable
										flavor
									</p>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1' />
									<p className='text-neutral-700 font-body'>
										<strong>Dipping sauce</strong>{" "}
										- Perfect consistency for
										spring rolls, etc.
									</p>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1' />
									<p className='text-neutral-700 font-body'>
										<strong>Pizza/burgers</strong>{" "}
										- Familiar flavor for Western
										palates
									</p>
								</div>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-6 h-6 text-green-600 mt-1' />
									<p className='text-neutral-700 font-body'>
										<strong>Budget option</strong>{" "}
										- Widely available and
										inexpensive
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Chef&apos;s Recommendation CTA */}
			<section className='py-24 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h3 className='text-4xl sm:text-5xl font-bold mb-6 font-brand'>
						Chef Yossie&apos;s Recommendation
					</h3>
					<div className='bg-gradient-to-r from-burgundy-800/50 to-burgundy-700/50 rounded-sm p-8 mb-8 border border-gold-600/30'>
						<blockquote className='text-xl sm:text-2xl text-gold-200 font-body italic leading-relaxed mb-4'>
							&quot;Both have their place, but if
							you&apos;re serious about cooking authentic
							Asian food, start with real sambal. It&apos;s
							the foundation of Indonesian cuisine and will
							transform your cooking in ways sriracha
							simply can&apos;t.&quot;
						</blockquote>
						<cite className='text-gold-300 font-brand text-lg'>
							— Chef Yossie, Bandung-born Indonesian Chef
						</cite>
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
