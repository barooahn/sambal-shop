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
	Utensils,
} from "@/components/ui/icons";

export const metadata = {
	title: "Indonesian BBQ Sauce & Marinade | Sambal for Grilling",
	description:
		"Transform your BBQ with authentic Indonesian sambal marinade. Chef Yossie&apos;s traditional recipes perfect for chicken, pork, beef, and vegetables. Elevate your grilling game.",
	keywords:
		"Indonesian BBQ sauce UK, sambal marinade, Indonesian grilling sauce, BBQ marinade UK, authentic Indonesian BBQ, sambal for grilling, Chef Yossie marinade, spicy BBQ sauce",
	openGraph: {
		title: "Indonesian BBQ Sauce & Marinade UK | Sambal for Grilling",
		description:
			"Authentic Indonesian sambal transforms ordinary BBQ into extraordinary Indonesian-style grilling. Professional chef recipes.",
		type: "website",
		images: [
			{
				url: "https://www.spiceislandindonesia.com/images/sambal-oelek-lg.webp",
				width: 400,
				height: 400,
				alt: "Indonesian Sambal BBQ Marinade - Authentic Grilling Sauce",
			},
		],
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/sambal-bbq-marinade",
	},
};

export default function SambalBBQMarinadePage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100'>
			{/* Hero Section */}
			<section className='py-16 sm:py-24 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-96 h-96 bg-gold-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-96 h-96 bg-gold-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 items-center'>
						{/* Left side - Content */}
						<div className='text-center lg:text-left'>
							<Badge className='bg-burgundy-800 text-gold-300 mb-6 px-6 py-3 text-lg font-semibold border border-gold-600/30'>
								<Flame className='w-5 h-5 mr-2' />
								Transform Your BBQ Game
							</Badge>

							<h1 className='text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight font-brand'>
								<span className='text-white block mb-2'>
									Indonesian BBQ
								</span>
								<span className='text-gold-300 block mb-2'>
									Marinade Magic
								</span>
								<span className='text-gold-200 text-2xl sm:text-3xl lg:text-3xl font-script italic'>
									Authentic Sambal for Grilling
								</span>
							</h1>

							<p className='text-xl sm:text-2xl text-gold-200 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body'>
								Discover the secret to Indonesian-style
								BBQ with Chef Yossie&apos;s authentic
								sambal marinades. Transform ordinary
								grilling into extraordinary Indonesian
								culinary experiences.
							</p>

							{/* Key Features */}
							<div className='grid sm:grid-cols-2 gap-4 mb-10'>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Flame className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Perfect Heat Balance
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Utensils className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Works with All Meats
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<ChefHat className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Professional Chef Recipe
									</span>
								</div>
								<div className='flex items-center justify-center lg:justify-start space-x-3'>
									<div className='w-8 h-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-full flex items-center justify-center'>
										<Clock className='w-4 h-4 text-burgundy-900' />
									</div>
									<span className='text-gold-200 font-medium font-elegant'>
										Quick 30-Min Marinade
									</span>
								</div>
							</div>

							<div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start'>
								<Link href='/shop'>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant text-lg px-6 py-3'
									>
										Get BBQ Sambal - £7.49
									</Button>
								</Link>
								<Link href='#recipes'>
									<Button
										variant='outline'
										size='lg'
										className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 text-lg px-6 py-3'
									>
										See BBQ Recipes
									</Button>
								</Link>
							</div>
						</div>

						{/* Right side - Product Image */}
						<div className='relative'>
							<div className='relative w-full lg:max-w-none ml-auto max-h-[60vh] flex items-center justify-end'>
								<div className='absolute inset-0 bg-gradient-to-r from-gold-600/30 to-gold-400/30 rounded-full blur-3xl'></div>
								<Image
									src='/images/sambal-oelek-lg.webp'
									alt='Indonesian Sambal BBQ Marinade - Authentic Grilling Sauce'
									width={400}
									height={400}
									className='relative z-10 w-auto h-auto max-h-[60vh] object-contain drop-shadow-2xl'
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Sambal for BBQ Section */}
			<section className='py-16 sm:py-20 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Why Indonesian Sambal Transforms BBQ
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							Unlike Western BBQ sauces, Indonesian sambal
							creates complex layers of flavor that
							penetrate deep into meats while adding
							authentic Southeast Asian character.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						<Card className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-6'>
									<Flame className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
									Complex Heat Profile
								</h3>
								<p className='text-neutral-600 font-body'>
									Natural chili heat builds
									gradually, creating depth without
									overwhelming. Perfect balance of
									fire and flavor that enhances
									rather than masks.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-6'>
									<Shield className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
									Natural Preservation
								</h3>
								<p className='text-neutral-600 font-body'>
									Traditional fermentation and
									natural acids help tenderize meat
									while adding umami depth. No
									artificial preservatives needed.
								</p>
							</CardContent>
						</Card>

						<Card className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'>
							<CardContent className='p-8 text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-6'>
									<Award className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
									Authentic Indonesian Style
								</h3>
								<p className='text-neutral-600 font-body'>
									Experience true Indonesian BBQ
									flavors. This is how street food
									vendors and professional chefs in
									Indonesia have grilled for
									generations.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* BBQ Recipes Section */}
			<section
				id='recipes'
				className='py-16 sm:py-20 bg-gradient-to-br from-cream-50 to-cream-100'
			>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h3 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Chef Yossie&apos;s BBQ Recipes
						</h3>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							Professional techniques from Indonesian
							catering kitchens, adapted for UK home
							grilling.
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-8'>
						<Card className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'>
							<CardContent className='p-8'>
								<div className='flex items-center mb-6'>
									<div className='w-12 h-12 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mr-4'>
										<Utensils className='w-6 h-6 text-white' />
									</div>
									<div>
										<h3 className='text-xl font-semibold text-burgundy-900 font-brand'>
											Indonesian Chicken Satay
										</h3>
										<Badge className='bg-burgundy-100 text-burgundy-800 px-2 py-1 text-sm'>
											30 min marinade
										</Badge>
									</div>
								</div>
								<div className='space-y-4 text-neutral-600 font-body'>
									<div>
										<h4 className='font-semibold text-burgundy-900 mb-2'>
											Marinade:
										</h4>
										<ul className='space-y-1 text-sm'>
											<li>
												• 3 tbsp Sambal
												Oelek
											</li>
											<li>
												• 2 tbsp soy sauce
											</li>
											<li>
												• 1 tbsp brown sugar
											</li>
											<li>
												• 2 cloves garlic,
												minced
											</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold text-burgundy-900 mb-2'>
											Method:
										</h4>
										<p className='text-sm'>
											Marinate chicken thighs
											for 30 minutes. Grill
											over medium-high heat,
											basting with remaining
											marinade. Serve with
											extra sambal.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className='border-gold-200 shadow-lg hover:shadow-xl transition-shadow'>
							<CardContent className='p-8'>
								<div className='flex items-center mb-6'>
									<div className='w-12 h-12 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mr-4'>
										<Heart className='w-6 h-6 text-white' />
									</div>
									<div>
										<h3 className='text-xl font-semibold text-burgundy-900 font-brand'>
											Sweet Spicy Pork Ribs
										</h3>
										<Badge className='bg-burgundy-100 text-burgundy-800 px-2 py-1 text-sm'>
											2 hour marinade
										</Badge>
									</div>
								</div>
								<div className='space-y-4 text-neutral-600 font-body'>
									<div>
										<h4 className='font-semibold text-burgundy-900 mb-2'>
											Marinade:
										</h4>
										<ul className='space-y-1 text-sm'>
											<li>
												• 4 tbsp Sambal Bali
											</li>
											<li>• 3 tbsp honey</li>
											<li>
												• 2 tbsp rice
												vinegar
											</li>
											<li>
												• 1 tbsp sesame oil
											</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold text-burgundy-900 mb-2'>
											Method:
										</h4>
										<p className='text-sm'>
											Marinate ribs for 2+
											hours. Slow grill over
											low heat, turning
											frequently. The sweet
											heat creates incredible
											caramelization.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Perfect For Section */}
			<section className='py-16 sm:py-20 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h3 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
							Perfect for All Your Grilling
						</h3>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							From quick weeknight dinners to impressive
							weekend BBQ parties, Indonesian sambal
							elevates every grilling occasion.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{[
							{
								title: "Chicken & Poultry",
								description:
									"Penetrates skin for incredible flavor",
								icon: Utensils,
							},
							{
								title: "Pork & Beef",
								description:
									"Tenderizes while adding complex heat",
								icon: Flame,
							},
							{
								title: "Seafood",
								description:
									"Quick marinades for delicate fish",
								icon: Heart,
							},
							{
								title: "Vegetables",
								description:
									"Transform grilled veggies into stars",
								icon: CheckCircle,
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

			{/* Chef&apos;s BBQ Tips Section */}
			<section className='py-16 sm:py-20 bg-gradient-to-br from-cream-50 to-cream-100'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<div>
							<Badge className='bg-burgundy-100 text-burgundy-800 mb-6 px-4 py-2 font-semibold'>
								<ChefHat className='w-4 h-4 mr-2' />
								Professional BBQ Tips
							</Badge>

							<h3 className='text-3xl sm:text-4xl font-bold text-burgundy-900 mb-6 font-brand'>
								Chef Yossie&apos;s Indonesian BBQ
								Secrets
							</h3>

							<p className='text-lg text-neutral-600 mb-6 font-body'>
								&quot;In my catering kitchen, we served
								Indonesian BBQ to hundreds of British
								clients. These techniques ensure perfect
								results every time.&quot;
							</p>

							<ul className='space-y-4 mb-8'>
								<li className='flex items-start'>
									<CheckCircle className='w-6 h-6 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
									<span className='text-neutral-600 font-body'>
										<strong>
											Marinade Time:
										</strong>{" "}
										Minimum 30 minutes for
										chicken, 2+ hours for tougher
										cuts
									</span>
								</li>
								<li className='flex items-start'>
									<CheckCircle className='w-6 h-6 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
									<span className='text-neutral-600 font-body'>
										<strong>Heat Control:</strong>{" "}
										Start high to sear, then
										reduce to medium for even
										cooking
									</span>
								</li>
								<li className='flex items-start'>
									<CheckCircle className='w-6 h-6 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
									<span className='text-neutral-600 font-body'>
										<strong>
											Basting Secret:
										</strong>{" "}
										Reserve some marinade for
										basting during cooking
									</span>
								</li>
								<li className='flex items-start'>
									<CheckCircle className='w-6 h-6 text-burgundy-600 mr-3 flex-shrink-0 mt-0.5' />
									<span className='text-neutral-600 font-body'>
										<strong>
											Serving Style:
										</strong>{" "}
										Always serve with extra sambal
										on the side
									</span>
								</li>
							</ul>

							<div className='flex flex-col sm:flex-row gap-4'>
								<Link href='/shop'>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant'
									>
										Get BBQ Sambal - £7.49
									</Button>
								</Link>
								<Link href='/chef'>
									<Button
										variant='outline'
										size='lg'
										className='font-elegant border-burgundy-600 text-burgundy-600 hover:bg-burgundy-600 hover:text-white'
									>
										Meet Chef Yossie
									</Button>
								</Link>
							</div>
						</div>

						<div className='relative'>
							<div className='bg-gradient-to-br from-burgundy-100 to-gold-100 rounded-sm p-8'>
								<div className='text-center'>
									<div className='w-24 h-24 bg-gradient-to-r from-burgundy-600 to-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-6'>
										<Flame className='w-12 h-12 text-white' />
									</div>
									<h3 className='text-xl font-semibold text-burgundy-900 mb-4 font-brand'>
										BBQ Success Guarantee
									</h3>
									<ul className='text-left text-neutral-600 space-y-2 font-body'>
										<li className='flex items-center'>
											<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0' />
											Professional chef-tested
											recipes
										</li>
										<li className='flex items-center'>
											<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0' />
											Works on gas, charcoal,
											or electric grills
										</li>
										<li className='flex items-center'>
											<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0' />
											Suitable for all skill
											levels
										</li>
										<li className='flex items-center'>
											<CheckCircle className='w-5 h-5 text-burgundy-600 mr-3 flex-shrink-0' />
											Impressive results every
											time
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className='py-16 sm:py-20 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h3 className='text-3xl sm:text-4xl font-bold mb-6 font-brand'>
						Transform Your BBQ Game Tonight
					</h3>

					<p className='text-xl text-gold-200 mb-10 max-w-2xl mx-auto font-body'>
						Join hundreds of UK grill masters who&apos;ve
						discovered the secret to Indonesian-style BBQ.
						Your guests will be asking for the recipe.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/shop'>
							<Button
								variant='primary'
								size='lg'
								className='font-elegant text-lg px-8 py-4'
							>
								Get BBQ Sambal - £7.49
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
