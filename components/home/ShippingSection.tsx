import Image from "next/image";
import { Truck, Award } from "lucide-react";

export default function ShippingSection() {
	return (
		<section className='py-24 relative overflow-hidden'>
			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					<div className='relative'>
						<div className='aspect-square rounded-3xl overflow-hidden shadow-luxury bg-gradient-to-br from-cream-50 to-gold-50'>
							<div className='w-full h-full flex items-center justify-center p-8'>
								<Image
									src='/images/Spice Island Indonesia E-commerce Shipping Box.png'
									alt='Spice Island Indonesia Premium Shipping Box - Beautifully designed packaging for safe delivery of authentic Indonesian sambal'
									width={500}
									height={500}
									className='w-full h-full object-contain drop-shadow-2xl'
									loading='lazy'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
								/>
							</div>
						</div>
						<div className='absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-burgundy-600/20 to-gold-500/20 rounded-full blur-2xl animate-float'></div>
						<div className='absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-gold-600/20 to-burgundy-600/20 rounded-full blur-2xl animate-float delay-1000'></div>
					</div>

					<div>
						<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-6 font-brand'>
							Premium
							<span className='text-gold-700 block'>
								Packaging
							</span>
						</h2>
						<div className='space-y-6 text-lg text-neutral-700 leading-relaxed mb-8 font-body'>
							<p>
								Every order arrives in our beautifully
								designed shipping box, ensuring your
								authentic Indonesian sambals reach you
								in perfect condition. Our packaging
								reflects the premium quality and
								heritage of our products.
							</p>
							<p>
								From our kitchen to your door across the
								UK, we take pride in every detail of
								your unboxing experience. Whether you're
								in London, Edinburgh, Cardiff, or
								anywhere in between, each box is
								carefully packed with love and
								attention, making it perfect for gifting
								or treating yourself.
							</p>
						</div>
						<div className='grid grid-cols-2 gap-6'>
							<div className='flex items-center space-x-3'>
								<div className='w-12 h-12 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center border border-gold-600/30 shadow-lg'>
									<Truck className='w-6 h-6 text-gold-200' />
								</div>
								<div>
									<h4 className='font-bold text-burgundy-900 font-brand'>
										UK Delivery
									</h4>
									<p className='text-sm text-neutral-600 font-body'>
										2-3 business days nationwide
									</p>
								</div>
							</div>
							<div className='flex items-center space-x-3'>
								<div className='w-12 h-12 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center border border-gold-600/30 shadow-lg'>
									<Award className='w-6 h-6 text-gold-200' />
								</div>
								<div>
									<h4 className='font-bold text-burgundy-900 font-brand'>
										Premium Quality
									</h4>
									<p className='text-sm text-neutral-600 font-body'>
										Carefully protected
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
