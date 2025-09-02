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
	X,
	Zap,
} from "@/components/ui/icons";

export const metadata = {
	title: "Sambal vs Hot Sauce | Why Indonesian Sambal Wins",
	description:
		"Discover why authentic Indonesian sambal beats regular hot sauce. Compare ingredients, flavor complexity, and culinary uses. Made by Chef Yossie from traditional Bandung recipes.",
	keywords:
		"sambal vs hot sauce, Indonesian sambal comparison, authentic chili sauce, sambal oelek vs hot sauce, Indonesian condiments vs western hot sauce, traditional sambal benefits, Chef Yossie sambal",
	openGraph: {
		title: "Sambal vs Hot Sauce: The Ultimate Comparison | Why Indonesian Sambal Wins",
		description:
			"Authentic Indonesian sambal vs regular hot sauce - discover the difference in flavor, ingredients, and culinary tradition.",
		type: "website",
		images: [
			{
				url: "https://spiceislandindonesia.com/images/sambal-oelek-lg.webp",
				width: 400,
				height: 400,
				alt: "Indonesian Sambal vs Hot Sauce comparison",
			},
		],
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/sambal-vs-hot-sauce",
	},
};

export default function SambalVsHotSaucePage() {
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
								<Zap className='w-4 h-4 mr-2' />
								The Ultimate Comparison
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-brand leading-tight'>
								Sambal vs Hot Sauce:
								<span className='text-gold-300'>
									{" "}
									Why Authentic Wins
								</span>
							</h1>

							<p className='text-xl sm:text-2xl mb-8 text-cream-100 font-elegant leading-relaxed'>
								Tired of one-dimensional hot sauces?
								Discover why
								<strong className='text-gold-300'>
									{" "}
									authentic Indonesian sambal
								</strong>
								offers complex flavors that transform
								your cooking. Made by Chef Yossie using
								traditional Bandung recipes.
							</p>

							<div className='flex items-center justify-center lg:justify-start mb-8 space-x-4'>
								<div className='flex items-center space-x-2'>
									<ChefHat className='w-6 h-6 text-gold-300' />
									<span className='font-elegant'>
										Traditional Recipes
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Award className='w-6 h-6 text-gold-300' />
									<span className='font-elegant'>
										No Preservatives
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
									src='/images/sambal-oelek-lg.webp'
									alt='Authentic Indonesian Sambal vs Regular Hot Sauce'
									fill
									className='object-contain relative z-10 drop-shadow-2xl'
									priority
									sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 600px'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Comparison Table Section */}
			<section className='py-16 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							The Real Difference: Side by Side
						</h2>
						<p className='text-xl text-gray-700 font-elegant max-w-3xl mx-auto'>
							Not all chili sauces are created equal.
							Here&apos;s why authentic Indonesian sambal
							stands apart.
						</p>
					</div>

					<div className='overflow-x-auto'>
						<table className='w-full border-collapse bg-white rounded-sm shadow-lg overflow-hidden'>
							<thead>
								<tr className='bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-white'>
									<th className='p-6 text-left font-brand text-xl'>
										Feature
									</th>
									<th className='p-6 text-center font-brand text-xl'>
										<div className='flex items-center justify-center space-x-2'>
											<CheckCircle className='w-6 h-6 text-gold-300' />
											<span>
												Indonesian Sambal
											</span>
										</div>
									</th>
									<th className='p-6 text-center font-brand text-xl'>
										<div className='flex items-center justify-center space-x-2'>
											<X className='w-6 h-6 text-red-300' />
											<span>
												Regular Hot Sauce
											</span>
										</div>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className='border-b border-gray-100'>
									<td className='p-6 font-bold text-burgundy-900'>
										Ingredients
									</td>
									<td className='p-6 text-center'>
										<div className='text-green-700 font-medium'>
											Fresh chilies, garlic,
											shallots, traditional
											spices
										</div>
									</td>
									<td className='p-6 text-center'>
										<div className='text-red-700 font-medium'>
											Vinegar, artificial
											flavors, preservatives,
											corn syrup
										</div>
									</td>
								</tr>
								<tr className='bg-cream-50 border-b border-gray-100'>
									<td className='p-6 font-bold text-burgundy-900'>
										Flavor Profile
									</td>
									<td className='p-6 text-center'>
										<div className='text-green-700 font-medium'>
											Complex, layered,
											aromatic, balanced heat
										</div>
									</td>
									<td className='p-6 text-center'>
										<div className='text-red-700 font-medium'>
											One-dimensional,
											vinegar-forward, harsh
											heat
										</div>
									</td>
								</tr>
								<tr className='border-b border-gray-100'>
									<td className='p-6 font-bold text-burgundy-900'>
										Culinary Use
									</td>
									<td className='p-6 text-center'>
										<div className='text-green-700 font-medium'>
											Cooking ingredient,
											marinade, condiment
										</div>
									</td>
									<td className='p-6 text-center'>
										<div className='text-red-700 font-medium'>
											Mainly condiment, limited
											cooking use
										</div>
									</td>
								</tr>
								<tr className='bg-cream-50 border-b border-gray-100'>
									<td className='p-6 font-bold text-burgundy-900'>
										Cultural Heritage
									</td>
									<td className='p-6 text-center'>
										<div className='text-green-700 font-medium'>
											Centuries-old traditional
											recipes
										</div>
									</td>
									<td className='p-6 text-center'>
										<div className='text-red-700 font-medium'>
											Modern commercial
											invention
										</div>
									</td>
								</tr>
								<tr className='border-b border-gray-100'>
									<td className='p-6 font-bold text-burgundy-900'>
										Nutritional Value
									</td>
									<td className='p-6 text-center'>
										<div className='text-green-700 font-medium'>
											Rich in vitamins,
											antioxidants, natural
											compounds
										</div>
									</td>
									<td className='p-6 text-center'>
										<div className='text-red-700 font-medium'>
											High sodium, artificial
											additives, minimal
											nutrition
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>

			{/* Why Sambal Wins Section */}
			<section className='py-16 bg-gradient-to-br from-cream-50 to-cream-100'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h3 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Why Indonesian Sambal Transforms Your Cooking
						</h3>
						<p className='text-xl text-gray-700 font-elegant max-w-3xl mx-auto'>
							It&apos;s not just about heat - it&apos;s
							about depth, complexity, and culinary
							tradition.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🌶️
									</span>
								</div>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-elegant'>
									Complex Heat
								</h3>
								<p className='text-gray-600'>
									Not just spicy - sambal offers
									layers of flavor that build and
									evolve on your palate, unlike the
									sharp, one-note burn of typical hot
									sauces.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🧄
									</span>
								</div>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-elegant'>
									Aromatic Foundation
								</h3>
								<p className='text-gray-600'>
									Fresh garlic, shallots, and
									traditional spices create an
									aromatic base that enhances every
									dish, not just adds heat.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										👨‍🍳
									</span>
								</div>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-elegant'>
									Cooking Versatility
								</h3>
								<p className='text-gray-600'>
									Use as a marinade, stir-fry base,
									or finishing sauce. Sambal
									integrates into cooking, while hot
									sauce just sits on top.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🌿
									</span>
								</div>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-elegant'>
									Natural Ingredients
								</h3>
								<p className='text-gray-600'>
									No artificial preservatives,
									colors, or flavors. Just fresh
									chilies, aromatics, and traditional
									spices.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										🏛️
									</span>
								</div>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-elegant'>
									Cultural Authenticity
								</h3>
								<p className='text-gray-600'>
									Centuries of culinary evolution
									from the Spice Islands, not a
									modern commercial invention
									designed for mass appeal.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 bg-white hover:shadow-lg transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<span className='text-2xl'>
										💎
									</span>
								</div>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-elegant'>
									Artisanal Quality
								</h3>
								<p className='text-gray-600'>
									Handcrafted in small batches by
									Chef Yossie using traditional
									methods, not mass-produced in
									industrial facilities.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Chef Credibility Section */}
			<section className='py-16 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<div className='relative'>
							<div className='aspect-[4/3] max-w-md mx-auto relative rounded-sm overflow-hidden'>
								<Image
									src='/images/chef-yossie.webp'
									alt='Chef Yossie preparing traditional Indonesian sambal'
									fill
									className='object-cover'
									loading='lazy'
									sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 600px'
								/>
							</div>
						</div>

						<div>
							<Badge className='bg-burgundy-100 text-burgundy-800 font-elegant mb-6 text-sm px-4 py-2'>
								<ChefHat className='w-4 h-4 mr-2' />
								Expert Opinion
							</Badge>

							<h3 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
								&quot;Hot Sauce vs Sambal? No
								Contest.&quot;
							</h3>

							<p className='text-xl text-gray-700 mb-6 font-elegant leading-relaxed'>
								Chef Yossie has spent over 20 years
								perfecting traditional Indonesian
								recipes. Her professional catering
								experience in Bandung taught her the
								difference between authentic flavor and
								commercial shortcuts.
							</p>

							<blockquote className='border-l-4 border-gold-600 pl-6 mb-8'>
								<p className='text-lg italic text-gray-700 mb-4'>
									&quot;When people taste real sambal
									for the first time, they understand
									immediately. Hot sauce is just heat
									and vinegar. Sambal is a symphony
									of flavors that tells the story of
									Indonesia&apos;s spice heritage.
									There&apos;s simply no
									comparison.&quot;
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
										Meet Chef Yossie
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

			{/* Final CTA Section */}
			<section className='py-16 sm:py-24 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-96 h-96 bg-gold-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-96 h-96 bg-gold-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-brand'>
						Ready to Upgrade from Hot Sauce?
					</h2>

					<p className='text-xl sm:text-2xl mb-8 text-cream-100 font-elegant leading-relaxed max-w-3xl mx-auto'>
						Join thousands who&apos;ve discovered the
						difference authentic Indonesian sambal makes. Your
						taste buds will thank you.
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
