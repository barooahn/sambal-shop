import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChefHat, Award, Leaf, Truck } from "lucide-react";

export default function ProductShowcase() {
	return (
		<section className='relative overflow-hidden'>
			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-20'>
					<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-6 font-brand'>
						Our Signature
						<span className='text-gold-700 block'>
							Sambal Collection
						</span>
					</h2>
					<p className='text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-body'>
						Each variety brings centuries of Indonesian
						culinary heritage to your kitchen, handcrafted
						using traditional recipes from the original Spice
						Islands.
					</p>
				</div>

				{/* Product Grid with Glass Morphism */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20'>
					{/* Sambal Oelek */}
					<div className='group'>
						<div className='relative mb-6'>
							{/* Clean glass morphism product card - no borders */}
							<div className='aspect-square rounded-sm overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 bg-white/20 backdrop-blur-md group-hover:bg-white/30'>
								<div className='w-full h-full flex items-center justify-center p-2 relative'>
									{/* Subtle inner glass effect */}
									<div className='absolute inset-4 rounded-sm bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm'></div>
									<Image
										src='/images/optimized/Spice Island Indonesia Sambal Oelek 185g Label-md.webp'
										alt='Authentic Indonesian Sambal Oelek 185g - UK Delivery - Chef Yossie Traditional Recipe - Buy Online London Manchester'
										width={400}
										height={400}
										className='w-full h-full object-contain drop-shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500'
										loading='lazy'
										sizes='(max-width: 768px) 300px, (max-width: 1200px) 350px, 400px'
									/>
								</div>
							</div>
							{/* Clean glass morphism badge */}
							<div className='absolute -top-3 -right-3 bg-burgundy-600/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold font-elegant shadow-lg'>
								Most Popular
							</div>
						</div>
						<div className='text-center'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-2 font-brand'>
								Sambal Oelek
							</h3>
							<p className='text-neutral-600 mb-4 font-body'>
								Pure, fiery chili paste - the foundation
								of Indonesian cooking. Perfect for{" "}
								<Link
									href='/sambal-for-stir-fry'
									className='text-burgundy-700 hover:text-burgundy-900 font-semibold underline decoration-gold-600 hover:decoration-burgundy-900 transition-colors'
								>
									stir-fries
								</Link>{" "}
								and marinades.
							</p>
							<div className='flex justify-center items-center space-x-2 mb-4'>
								<span className='text-burgundy-600'>
									🌶️🌶️🌶️🌶️🌶️
								</span>
								<span className='text-sm text-neutral-500 font-body'>
									Very Hot
								</span>
							</div>
							<div className='text-lg font-bold text-burgundy-900 font-brand mb-3'>
								£7.49
							</div>
							<Link
								href='/sambal-oelek-uk'
								className='text-sm text-burgundy-700 hover:text-burgundy-900 font-medium underline decoration-gold-600 hover:decoration-burgundy-900 transition-colors'
							>
								Learn about authentic sambal oelek →
							</Link>
						</div>
					</div>

					{/* Sambal Bali */}
					<div className='group'>
						<div className='relative mb-6'>
							<div className='aspect-square rounded-sm overflow-hidden shadow-lg group-hover:shadow-luxury transition-all duration-300 bg-gradient-to-br from-cream-50 to-gold-50'>
								<div className='w-full h-full flex items-center justify-center p-2'>
									<Image
										src='/images/Spice Island Indonesia Sambal Bali 185g Label.webp'
										alt='Authentic Indonesian Sambal Bali 185g - UK Delivery - Aromatic Spicy Chili Paste - Birmingham Edinburgh Manchester Delivery'
										width={300}
										height={300}
										className='w-full h-full object-contain drop-shadow-lg'
										loading='lazy'
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									/>
								</div>
							</div>
						</div>
						<div className='text-center'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-2 font-brand'>
								Sambal Bali
							</h3>
							<p className='text-neutral-600 mb-4 font-body'>
								Sweet and spicy with aromatic spices. A
								perfect balance that complements{" "}
								<Link
									href='/sambal-bbq-marinade'
									className='text-burgundy-700 hover:text-burgundy-900 font-semibold underline decoration-gold-600 hover:decoration-burgundy-900 transition-colors'
								>
									grilled meats
								</Link>{" "}
								beautifully.
							</p>
							<div className='flex justify-center items-center space-x-2 mb-4'>
								<span className='text-burgundy-600'>
									🌶️🌶️🌶️
								</span>
								<span className='text-sm text-neutral-500 font-body'>
									Hot
								</span>
							</div>
							<div className='text-lg font-bold text-burgundy-900 font-brand mb-3'>
								£8.49
							</div>
							<Link
								href='/sambal-bali-sweet-spicy'
								className='text-sm text-burgundy-700 hover:text-burgundy-900 font-medium underline decoration-gold-600 hover:decoration-burgundy-900 transition-colors'
							>
								Discover Sambal Bali&apos;s unique flavor →
							</Link>
						</div>
					</div>

					{/* Gift Set */}
					<div className='group md:col-span-2 lg:col-span-1'>
						<div className='relative mb-6'>
							<div className='aspect-square rounded-sm overflow-hidden shadow-lg group-hover:shadow-luxury transition-all duration-300 bg-gradient-to-br from-cream-50 to-gold-50'>
								<div className='w-full h-full flex items-center justify-center p-2'>
									<Image
										src='/images/optimized/Spice Island Indonesia Complete Packaging System Mockup-responsive.webp'
										alt='Spice Island Indonesia Heritage Gift Set - Complete packaging with two authentic Indonesian sambal varieties'
										width={664}
										height={364}
										className='w-full h-full object-contain drop-shadow-lg'
										loading='lazy'
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									/>
								</div>
							</div>
						</div>
						<div className='text-center'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-2 font-brand'>
								Heritage Gift Set
							</h3>
							<p className='text-neutral-600 mb-4 font-body'>
								Two signature sambals beautifully
								packaged - perfect for introducing
								friends to authentic Indonesian flavors.
							</p>
							<div className='flex justify-center items-center space-x-2 mb-4'>
								<span className='text-gold-600'>
									🎁
								</span>
								<span className='text-sm text-neutral-500 font-body'>
									Perfect Gift
								</span>
							</div>
							<div className='text-lg font-bold text-burgundy-900 font-brand'>
								£14.99
							</div>
						</div>
					</div>
				</div>

				{/* Try Sample Section */}
				<div className='text-center mb-20 max-w-4xl mx-auto'>
					<div className='bg-gradient-to-r from-burgundy-50 to-gold-50 rounded-sm p-12 border border-gold-200'>
						<div className='grid md:grid-cols-2 gap-12 items-center'>
							<div className='text-left'>
								<h3 className='text-3xl font-bold text-burgundy-900 mb-4 font-brand'>
									Not Sure Which to Choose?
								</h3>
								<p className='text-lg text-neutral-700 mb-6 font-body'>
									Try our 75g sample size first!
									Perfect for discovering your
									favorite sambal before committing
									to the full-size jar.
								</p>
								<div className='flex items-center space-x-4 mb-6'>
									<div className='text-2xl font-bold text-burgundy-900 font-brand'>
										£3.99
									</div>
									<div className='text-sm text-neutral-600 font-body'>
										75g sample size
									</div>
								</div>
								<Button
									variant='primary'
									size='lg'
									className='font-elegant'
								>
									Order Sample
								</Button>
							</div>
							<div className='relative'>
								<div className='aspect-square max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg bg-gradient-to-br from-cream-50 to-gold-50'>
									<div className='w-full h-full flex items-center justify-center p-2'>
										<Image
											src='/images/Spice Island Indonesia Sambal Oelek 75g Sample Label.webp'
											alt='Spice Island Indonesia Sambal Oelek 75g Sample - Try before you buy, perfect for discovering authentic Indonesian flavors'
											width={250}
											height={250}
											className='w-full h-full object-contain drop-shadow-lg'
											loading='lazy'
											sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										/>
									</div>
								</div>
								<div className='absolute -top-3 -right-3 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 px-3 py-1 rounded-full text-sm font-bold font-elegant border border-gold-600/30 shadow-lg'>
									Sample Size
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Why Choose Us */}
				<div className='grid md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
					<div className='text-center'>
						<div className='w-16 h-16 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-600/30 shadow-lg'>
							<ChefHat className='w-8 h-8 text-gold-200' />
						</div>
						<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
							Handcrafted
						</h4>
						<p className='text-neutral-600 text-sm font-body'>
							Made in small batches using traditional
							methods
						</p>
					</div>
					<div className='text-center'>
						<div className='w-16 h-16 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-600/30 shadow-lg'>
							<Award className='w-8 h-8 text-gold-200' />
						</div>
						<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
							Authentic
						</h4>
						<p className='text-neutral-600 text-sm font-body'>
							Original recipes from the Spice Islands
						</p>
					</div>
					<div className='text-center'>
						<div className='w-16 h-16 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-600/30 shadow-lg'>
							<Leaf className='w-8 h-8 text-gold-200' />
						</div>
						<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
							All Natural
						</h4>
						<p className='text-neutral-600 text-sm font-body'>
							No preservatives or artificial ingredients
						</p>
					</div>
					<div className='text-center'>
						<div className='w-16 h-16 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-600/30 shadow-lg'>
							<Truck className='w-8 h-8 text-gold-200' />
						</div>
						<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
							Fresh Delivery
						</h4>
						<p className='text-neutral-600 text-sm font-body'>
							Direct from kitchen to your door
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
