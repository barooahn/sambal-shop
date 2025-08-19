import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChefHat, Award, Leaf, Truck, CheckCircle, Flame, Gift, Zap } from "lucide-react";
import TrustIndicators, { SecurityBadges } from "@/components/ui/TrustIndicators";

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
					{/* Sambal Goreng - Featured First */}
					<div className='group'>
						<div className='relative mb-6'>
							{/* Clean glass morphism product card - no borders */}
							<div className='aspect-square rounded-sm overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 bg-white/20 backdrop-blur-md group-hover:bg-white/30'>
								<div className='w-full h-full flex items-center justify-center p-2 relative'>
									{/* Subtle inner glass effect */}
									<div className='absolute inset-4 rounded-sm bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm'></div>
									<Image
										src='/images/optimized/sambal-goreng-md.webp'
										alt='Authentic Sambal Goreng UK - Traditional Indonesian Sweet & Spicy Chili Paste 185g - UK Delivery Chef Yossie Recipe'
										width={400}
										height={400}
										className='w-full h-full object-contain drop-shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500'
										loading='lazy'
										sizes='(max-width: 768px) 90vw, (max-width: 1024px) 45vw, (max-width: 1920px) 350px, 450px'
									/>
								</div>
							</div>
							{/* Featured badge */}
							<div className='absolute -top-3 -right-3 bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white px-4 py-2 rounded-full text-sm font-bold font-elegant shadow-lg'>
								COMING SOON
							</div>
						</div>
						<div className='text-center'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-2 font-brand'>
								Sambal Goreng
							</h3>
							<p className='text-neutral-600 mb-4 font-body'>
								Sweet & spicy with palm sugar - the perfect
								balance of heat and sweetness using traditional{" "}
								<em>goreng</em> (fried) method from West Java.
							</p>
							<div className='flex justify-center items-center space-x-2 mb-4'>
								<span className='text-burgundy-600'>
									🌶️🌶️🌶️
								</span>
								<span className='text-sm text-neutral-500 font-body'>
									Medium-Hot
								</span>
							</div>
							<div className='text-lg font-bold text-burgundy-900 font-brand mb-3'>
								£7.49
							</div>
							<Link
								href='/sambal-goreng-uk'
								className='text-sm text-burgundy-700 hover:text-burgundy-900 font-medium underline decoration-gold-600 hover:decoration-burgundy-900 transition-colors'
							>
								Learn about Sambal Goreng →
							</Link>
						</div>
					</div>

					{/* Sambal Oelek - Second */}
					<div className='group'>
						<div className='relative mb-6'>
							{/* Clean glass morphism product card - no borders */}
							<div className='aspect-square rounded-sm overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 bg-white/20 backdrop-blur-md group-hover:bg-white/30'>
								<div className='w-full h-full flex items-center justify-center p-2 relative'>
									{/* Subtle inner glass effect */}
									<div className='absolute inset-4 rounded-sm bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm'></div>
									<Image
										src='/images/optimized/sambal-oelek-md.webp'
										alt='Authentic Sambal UK - Indonesian Chili Paste Sambal Oelek 185g Artisanal Hot Sauce - UK Delivery Chef Yossie Recipe London Manchester'
										width={400}
										height={400}
										className='w-full h-full object-contain drop-shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500'
										loading='lazy'
										sizes='(max-width: 768px) 90vw, (max-width: 1024px) 45vw, (max-width: 1920px) 350px, 450px'
									/>
								</div>
							</div>
							{/* Clean glass morphism badge */}
							<div className='absolute -top-3 -right-3 bg-burgundy-600/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold font-elegant shadow-lg'>
								Coming Soon
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
										src='/images/optimized/Spice Island Indonesia Sambal Bali 185g Label-md.webp'
										alt='Authentic Sambal UK - Indonesian Chili Paste Sambal Bali 185g Artisanal Hot Sauce - UK Delivery Aromatic Spicy Birmingham Edinburgh Manchester'
										width={400}
										height={400}
										className='w-full h-full object-contain drop-shadow-lg'
										loading='lazy'
										sizes='(max-width: 768px) 90vw, (max-width: 1024px) 45vw, (max-width: 1920px) 350px, 450px'
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
							<div className='text-sm text-neutral-500 font-body'>
								Coming Soon - Join waitlist
							</div>
						</div>
					</div>

					{/* Gift Set */}
					<div className='group md:col-span-2 lg:col-span-1'>
						<div className='relative mb-6'>
							<div className='aspect-square rounded-sm overflow-hidden shadow-lg group-hover:shadow-luxury transition-all duration-300 bg-gradient-to-br from-cream-50 to-gold-50'>
								<div className='w-full h-full flex items-center justify-center p-2'>
									<Image
										src='/images/optimized/Spice Island Indonesia Complete Packaging System Mockup-md.webp'
										alt='Spice Island Indonesia Heritage Gift Set - Complete packaging with two authentic Indonesian sambal varieties'
										width={400}
										height={400}
										className='w-full h-full object-contain drop-shadow-lg'
										loading='lazy'
										sizes='(max-width: 768px) 90vw, (max-width: 1024px) 45vw, (max-width: 1920px) 350px, 450px'
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

				{/* Try Sample Section - Redesigned */}
				<div className='text-center mb-20 max-w-6xl mx-auto'>
					<div className='relative bg-gradient-to-br from-cream-50 via-white to-gold-50/30 rounded-2xl p-8 lg:p-12 shadow-xl border border-gold-200/50 overflow-hidden'>
						{/* Subtle background decoration */}
						<div className='absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-gold-100/20 to-burgundy-100/20 rounded-full -translate-y-24 translate-x-24 blur-3xl'></div>
						<div className='absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-burgundy-100/30 to-gold-100/30 rounded-full translate-y-16 -translate-x-16 blur-2xl'></div>
				  
						{/* Accent spice pattern */}
						<div className='absolute inset-0 opacity-5'>
							<div className='absolute bottom-12 left-8 text-gold-700 text-xl transform -rotate-12'>✨</div>
							<div className='absolute top-1/3 left-1/4 text-burgundy-700 text-3xl transform rotate-45'>🌿</div>
						</div>
						
						<div className='relative z-10'>
							<div className='text-center mb-8'>
								<div className='inline-flex items-center justify-center mb-6'>
									<Flame className='w-16 h-16 text-burgundy-600' />
								</div>
								<h3 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 font-brand'>
									Not Sure Which Heat Level Is Right?
								</h3>
								<p className='text-xl text-neutral-700 mb-8 max-w-3xl mx-auto font-body leading-relaxed'>
									Try our risk-free Sample Pack! Two 45g jars featuring our most popular varieties - 
									perfect for discovering authentic Indonesian sambal without commitment.
								</p>
							</div>

							<div className='grid lg:grid-cols-3 gap-8 items-center mb-8'>
								{/* Sample Pack Image */}
								<div className='lg:col-span-1'>
									<div className='relative max-w-xs mx-auto'>
										<div className='aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-cream-50 border border-gold-200/50'>
											<div className='w-full h-full flex items-center justify-center p-4'>
												<Image
													src='/images/optimized/sambal-sample-lg.webp'
													alt='Sambal Sample Pack - Try First - Two 45g jars of authentic Indonesian sambal'
													width={300}
													height={300}
													className='w-full h-full object-contain drop-shadow-2xl'
													loading='lazy'
													sizes='(max-width: 768px) 280px, 300px'
												/>
											</div>
										</div>
										<div className='absolute -top-4 -right-4 bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl border-2 border-white'>
											🎯 TRY FIRST
										</div>
									</div>
								</div>

								{/* Benefits */}
								<div className='lg:col-span-2'>
									<div className='grid sm:grid-cols-2 gap-6 text-left'>
										<div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gold-200/50 shadow-sm hover:shadow-md transition-shadow'>
											<div className='flex items-center mb-3'>
												<CheckCircle className='w-8 h-8 text-burgundy-600 mr-4' />
												<h4 className='font-bold text-burgundy-900 font-brand'>Risk-Free Trial</h4>
											</div>
											<p className='text-neutral-600 text-sm font-body'>Try both varieties before buying full-size jars</p>
										</div>
										
										<div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gold-200/50 shadow-sm hover:shadow-md transition-shadow'>
											<div className='flex items-center mb-3'>
												<Flame className='w-8 h-8 text-burgundy-600 mr-4' />
												<h4 className='font-bold text-burgundy-900 font-brand'>Two Heat Levels</h4>
											</div>
											<p className='text-neutral-600 text-sm font-body'>Compare mild Sambal Bali vs. fiery Sambal Oelek</p>
										</div>

										<div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gold-200/50 shadow-sm hover:shadow-md transition-shadow'>
											<div className='flex items-center mb-3'>
												<Gift className='w-8 h-8 text-burgundy-600 mr-4' />
												<h4 className='font-bold text-burgundy-900 font-brand'>Perfect Gift</h4>
											</div>
											<p className='text-neutral-600 text-sm font-body'>Introduce friends to authentic Indonesian flavors</p>
										</div>

										<div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gold-200/50 shadow-sm hover:shadow-md transition-shadow'>
											<div className='flex items-center mb-3'>
												<Zap className='w-8 h-8 text-burgundy-600 mr-4' />
												<h4 className='font-bold text-burgundy-900 font-brand'>Best Value</h4>
											</div>
											<p className='text-neutral-600 text-sm font-body'>Less than cost of single restaurant sambal dish</p>
										</div>
									</div>
								</div>
							</div>

							{/* CTA Section */}
							<div className='text-center'>
								<div className='mb-6'>
									<div className='inline-flex items-center space-x-4'>
										<div className='text-4xl font-bold text-burgundy-900 font-brand'>£4.99</div>
										<div className='text-neutral-600'>
											<span className='line-through text-lg'>£9.98</span>
											<span className='ml-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md'>
												SAVE 50%
											</span>
										</div>
									</div>
									<p className='text-neutral-600 text-sm mt-2 font-body'>Two 45g sample jars • Free UK delivery on orders £20+</p>
								</div>
								
								<div className='flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto'>
									<Link href='/sample-pack-try-first' className='w-full sm:w-auto'>
										<Button 
											size='lg' 
											className='w-full bg-gradient-to-r from-burgundy-600 via-burgundy-700 to-burgundy-800 hover:from-burgundy-700 hover:via-burgundy-800 hover:to-burgundy-900 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-burgundy-500/20'
										>
											🎯 Order Sample Pack - £4.99
										</Button>
									</Link>
									<Link href='/products' className='text-burgundy-700 hover:text-burgundy-900 transition-colors text-sm underline decoration-gold-600 hover:decoration-burgundy-900 font-medium'>
										Compare all products →
									</Link>
								</div>
								
								<div className='mt-8'>
									<TrustIndicators layout="compact" className="mb-6" />
									<SecurityBadges className="mt-4" />
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
