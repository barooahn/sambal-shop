import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Heart } from "lucide-react";

export default function StorySection() {
	return (
		<section className='py-24 relative overflow-hidden'>
			{/* Background image with overlay */}
			<div 
				className='absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-30' 
				style={{backgroundImage: 'url(/images/sections-background.webp)'}}
			></div>
			{/* Subtle overlay for better text readability */}
			<div className='absolute inset-0 pointer-events-none bg-gradient-to-b from-white/20 via-transparent to-white/10'></div>

			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					<div className='relative'>
						<div className='relative aspect-[4/3] rounded-sm overflow-hidden shadow-luxury border border-gold-200'>
							<Image
								src='/images/indonesian_vista.png'
								alt='Indonesian spices and ingredients'
								fill
								className='object-cover'
								loading='lazy'
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
							/>
						</div>
						<div className='absolute inset-0 bg-gradient-to-t from-burgundy-900/20 to-transparent rounded-sm'></div>

						{/* Floating badges */}
						<div className='absolute -top-4 -left-4 bg-cream-50 rounded-full p-4 shadow-gold animate-float border border-gold-300'>
							<Star className='w-6 h-6 text-gold-600' />
						</div>
						<div className='absolute -bottom-4 -right-4 bg-cream-50 rounded-full p-4 shadow-burgundy animate-float delay-1000 border border-burgundy-300'>
							<Heart className='w-6 h-6 text-burgundy-600' />
						</div>
					</div>

					<div>
						<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-8 font-brand'>
							Meet Chef Yossie
							<span className='text-gold-700 block font-script italic text-4xl sm:text-5xl'>
								From Bandung to Britain
							</span>
						</h2>

						<div className='space-y-6 text-lg text-neutral-700 leading-relaxed mb-8 font-body'>
							<p>
								Chef Yossie&apos;s journey begins in{" "}
								<Link
									href='/chef'
									className='text-burgundy-700 hover:text-burgundy-900 font-semibold underline decoration-gold-600 hover:decoration-burgundy-900 transition-colors'
								>
									Bandung, West Java
								</Link>{" "}
								– Indonesia&apos;s culinary capital,
								where she trained in her mother&apos;s
								bustling catering kitchen. Here she
								learned to prepare{" "}
								<Link
									href='/recipes'
									className='text-burgundy-700 hover:text-burgundy-900 font-semibold underline decoration-gold-600 hover:decoration-burgundy-900 transition-colors'
								>
									traditional recipes
								</Link>{" "}
								for hundreds of guests daily, mastering
								the professional techniques that set her
								apart.
							</p>
							<p>
								Her signature{" "}
								<Link
									href='/sambal-oelek-uk'
									className='text-burgundy-700 hover:text-burgundy-900 font-semibold underline decoration-gold-600 hover:decoration-burgundy-900 transition-colors'
								>
									authentic sambal oelek
								</Link>{" "}
								follows the exact traditional methods
								she learned in that professional kitchen
								- pure chilies, salt, and vinegar, with
								no shortcuts or preservatives. Perfect
								for{" "}
								<Link
									href='/sambal-for-stir-fry'
									className='text-burgundy-700 hover:text-burgundy-900 font-semibold underline decoration-gold-600 hover:decoration-burgundy-900 transition-colors'
								>
									stir-frying
								</Link>{" "}
								and authentic Indonesian cooking.
							</p>

							<p>
								Today, Chef Yossie brings her
								professional expertise to the UK,
								crafting authentic Indonesian sambal
								with the precision learned in commercial
								kitchens.{" "}
								<Link
									href='/shop'
									className='text-burgundy-700 hover:text-burgundy-900 font-semibold underline decoration-gold-600 hover:decoration-burgundy-900 transition-colors'
								>
									Each jar is handcrafted
								</Link>{" "}
								using traditional methods and
								professional standards, ensuring
								consistent quality and authentic taste
								in every batch.
							</p>

							<p>
								We believe that great food brings people
								together, and our mission is to
								introduce the UK to the incredible
								diversity and depth of Indonesian
								flavors – one jar at a time.
							</p>
						</div>

						<div className='flex flex-wrap gap-4 mb-8'>
							<Link href='/recipes'>
								<Button
									variant='primary'
									size='lg'
									className='font-elegant'
								>
									Heritage Recipes
								</Button>
							</Link>
							<Link href='/about'>
								<Button
									variant='primary'
									size='lg'
									className='font-elegant'
								>
									Family Tradition
								</Button>
							</Link>
							<Button
								variant='primary'
								size='lg'
								className='font-elegant'
							>
								Small Batch
							</Button>
						</div>

						<Link href='/about'>
							<Button
								variant='primary'
								size='lg'
								className='font-elegant'
							>
								Learn More About Our Heritage
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
