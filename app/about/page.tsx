import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Award, Leaf, ChefHat } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Spice Island Indonesia | Authentic Sambal Makers | UK Delivery",
	description: "Learn about Spice Island Indonesia - authentic Indonesian sambal makers bringing traditional flavors from the Maluku Islands to the UK. Meet Chef Yossie and discover our story.",
	keywords: "about spice island indonesia, authentic sambal makers UK, Chef Yossie story, Maluku Islands sambal, traditional Indonesian condiments UK, authentic chili paste story",
	openGraph: {
		title: "About Spice Island Indonesia | Authentic Sambal Makers",
		description: "Learn about our journey bringing authentic Indonesian sambal from the Maluku Islands to the UK. Traditional recipes, authentic flavors.",
		images: ["/images/optimized/chili-farming-scene-lg.webp"],
	},
};

export default function AboutPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100'>
			{/* Hero Section */}
			<section className='py-24 bg-gradient-to-br from-burgundy-900 to-burgundy-800 text-white relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-burgundy-900/90 to-gold-900/20'></div>
				<div className='absolute top-0 left-0 w-72 h-72 bg-gold-500/10 rounded-full -translate-x-36 -translate-y-36 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-96 h-96 bg-burgundy-500/10 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-brand'>
						Our Story
					</h1>
					<p className='text-xl sm:text-2xl text-gold-200 max-w-3xl mx-auto font-body'>
						From the original Spice Islands to your kitchen -
						a journey of authentic flavors and family
						traditions
					</p>
				</div>
			</section>

			{/* Our Journey Section */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div>
							<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
								From the
								<span className='text-gold-700 block'>
									Maluku Islands
								</span>
							</h2>
							<div className='space-y-6 text-lg text-neutral-700 leading-relaxed font-body'>
								<p>
									Our journey begins in the Maluku
									Islands – the original &quot;Spice
									Islands&quot; that once drew
									traders from around the world in
									search of precious spices. For
									generations, our family has
									perfected the art of sambal making,
									preserving ancient recipes passed
									down through the centuries.
								</p>
								<p>
									Each jar of our sambal tells a
									story of volcanic soil, tropical
									sunshine, and the skilled hands of
									Indonesian artisans who understand
									that great flavor cannot be rushed.
									We use only the finest chilies,
									grown in the mineral-rich earth of
									these legendary islands.
								</p>
								<p>
									Today, we bring these authentic
									flavors to British kitchens,
									sharing the bold, complex tastes
									that have been treasured in
									Indonesian households for
									generations.
								</p>
							</div>
						</div>
						<div className='relative'>
							<div className='aspect-[4/3] rounded-sm overflow-hidden shadow-luxury border border-gold-200'>
								<Image
									src='/images/optimized/chili-farming-scene-xl.webp'
									alt='Crystal clear Indonesian chili farming in the volcanic Maluku Islands'
									className='w-full h-full object-cover'
									width={800}
									height={600}
									sizes='(max-width: 768px) 100vw, 50vw'
									priority
								/>
							</div>
							<div className='absolute inset-0 bg-gradient-to-t from-burgundy-900/20 to-transparent rounded-sm'></div>
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className='py-24 bg-gradient-to-br from-cream-100 to-cream-200'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							Our Values
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							Every jar reflects our commitment to
							authenticity, quality, and tradition
						</p>
					</div>

					{/* Traditional Process Image */}
					<div className='mb-16'>
						<div className='relative max-w-4xl mx-auto'>
							<div className='aspect-[16/9] rounded-sm overflow-hidden shadow-luxury border border-gold-200'>
								<Image
									src='/images/optimized/traditional-sambal-making-process-lg.webp'
									alt='Traditional Indonesian sambal preparation with mortar and pestle'
									className='w-full h-full object-cover'
									width={1200}
									height={675}
									sizes='(max-width: 768px) 100vw, 80vw'
								/>
							</div>
							<div className='absolute inset-0 bg-gradient-to-t from-burgundy-900/30 to-transparent rounded-sm'></div>
							<div className='absolute bottom-6 left-6 text-white'>
								<p className='text-lg font-semibold font-body'>
									Traditional sambal making with
									cobek (stone mortar)
								</p>
								<p className='text-sm text-gold-200 font-body'>
									Preserving centuries-old techniques
								</p>
							</div>
						</div>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
						<div className='text-center bg-white rounded-sm p-8 shadow-lg border border-gold-200'>
							<div className='w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-burgundy-200'>
								<ChefHat className='w-8 h-8 text-burgundy-700' />
							</div>
							<h3 className='text-xl font-bold text-burgundy-900 mb-4 font-brand'>
								Handcrafted
							</h3>
							<p className='text-neutral-600 font-body'>
								Made in small batches using traditional
								methods passed down through generations
							</p>
						</div>

						<div className='text-center bg-white rounded-sm p-8 shadow-lg border border-gold-200'>
							<div className='w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold-200'>
								<Award className='w-8 h-8 text-gold-700' />
							</div>
							<h3 className='text-xl font-bold text-burgundy-900 mb-4 font-brand'>
								Authentic
							</h3>
							<p className='text-neutral-600 font-body'>
								Original recipes from the Spice Islands,
								unchanged for centuries
							</p>
						</div>

						<div className='text-center bg-white rounded-sm p-8 shadow-lg border border-gold-200'>
							<div className='w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-cream-200'>
								<Leaf className='w-8 h-8 text-cream-700' />
							</div>
							<h3 className='text-xl font-bold text-burgundy-900 mb-4 font-brand'>
								All Natural
							</h3>
							<p className='text-neutral-600 font-body'>
								No preservatives, artificial colors, or
								flavor enhancers - just pure ingredients
							</p>
						</div>

						<div className='text-center bg-white rounded-sm p-8 shadow-lg border border-gold-200'>
							<div className='w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-burgundy-200'>
								<Heart className='w-8 h-8 text-burgundy-700' />
							</div>
							<h3 className='text-xl font-bold text-burgundy-900 mb-4 font-brand'>
								Family Recipe
							</h3>
							<p className='text-neutral-600 font-body'>
								Treasured family recipes shared with
								love and respect for tradition
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div className='relative'>
							<div className='aspect-[4/3] rounded-sm overflow-hidden shadow-luxury border border-gold-200'>
								<Image
									src='/images/optimized/traditional-indonesian-chili-farming-xl.webp'
									alt='Traditional Indonesian chili farming supporting local communities'
									className='w-full h-full object-cover'
									width={800}
									height={600}
									sizes='(max-width: 768px) 100vw, 50vw'
								/>
							</div>
							<div className='absolute inset-0 bg-gradient-to-t from-burgundy-900/20 to-transparent rounded-sm'></div>
						</div>
						<div>
							<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
								Our Mission
							</h2>
							<div className='space-y-6 text-lg text-neutral-700 leading-relaxed font-body'>
								<p>
									We believe that great food brings
									people together. Our mission is to
									introduce British food lovers to
									the incredible depth and complexity
									of authentic Indonesian flavors.
								</p>
								<p>
									Every jar we produce supports local
									farmers in the Maluku Islands,
									helping to preserve traditional
									farming methods and provide
									sustainable livelihoods for
									Indonesian communities.
								</p>
								<p>
									We&apos;re not just selling sambal
									– we&apos;re sharing a piece of
									Indonesian culture, one delicious
									spoonful at a time.
								</p>
							</div>
							<div className='mt-8'>
								<Link href="/sample-pack-try-first">
									<Button
										variant='primary'
										size='lg'
										className='font-elegant'
									>
										<Heart className='w-5 h-5 mr-2' />
										Try Our Sambal
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-24 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-4xl sm:text-5xl font-bold mb-6 font-brand'>
						Ready to Experience
						<span className='text-gold-300 block'>
							Authentic Indonesian Flavors?
						</span>
					</h2>
					<p className='text-xl text-gold-200 mb-8 font-body'>
						Join thousands of food lovers who have discovered
						the magic of authentic sambal
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href="/shop">
							<Button
								variant='primary'
								size='lg'
								className='font-elegant'
							>
								Shop Now
							</Button>
						</Link>
						<Link href="/contact">
							<Button
								variant='primary'
								size='lg'
								className='font-elegant'
							>
								Contact Us
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
