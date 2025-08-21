import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
	return (
		<footer className='bg-neutral-900 text-gold-100 py-16 relative overflow-hidden border-t border-gold-600/30'>
			{/* Batik-inspired overlay */}
			<div className='absolute inset-0 pointer-events-none opacity-20 batik-pattern-subtle'></div>

			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid md:grid-cols-5 gap-8'>
					<div className='md:col-span-2'>
						<h3 className='text-3xl font-bold mb-4 text-gold-300 font-brand tracking-wider'>
							Spice Island Indonesia
						</h3>
						<p className='text-gold-200 mb-6 text-lg leading-relaxed font-body'>
							Authentic Indonesian sambal from the original
							Spice Islands, bringing bold flavors and
							centuries of culinary tradition to British
							kitchens.
						</p>
						<div className='flex space-x-4'>
							<a
								href='https://www.instagram.com/spiceisland_indonesia/'
								target='_blank'
								rel='noopener noreferrer'
								className='w-12 h-12 bg-burgundy-800 border border-gold-600/30 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-200 hover:bg-burgundy-700 transition-all duration-200'
								aria-label='Follow Spice Island Indonesia on Instagram'
							>
								<Instagram className='w-6 h-6' />
							</a>
							<a
								href='https://www.facebook.com/profile.php?id=61579653961037'
								target='_blank'
								rel='noopener noreferrer'
								className='w-12 h-12 bg-burgundy-800 border border-gold-600/30 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-200 hover:bg-burgundy-700 transition-all duration-200'
								aria-label='Follow Spice Island Indonesia on Facebook'
							>
								<Facebook className='w-6 h-6' />
							</a>
						</div>
					</div>

					<div>
						<h4 className='text-xl font-semibold mb-6 text-gold-300 font-brand'>
							Indonesian Sambal UK
						</h4>
						<ul className='space-y-3 font-body'>
							<li>
								<Link
									href='/sambal-oelek-uk'
									className='text-gold-100 hover:underline underline-offset-4 transition-colors'
								>
									Sambal Oelek UK
								</Link>
							</li>
							<li>
								<Link
									href='/sambal-bali-aromatic-spicy'
									className='text-gold-100 hover:underline underline-offset-4 transition-colors'
								>
									Sambal Bali UK
								</Link>
							</li>
							<li>
								<Link
									href='/sample-pack-try-first'
									className='text-gold-100 hover:underline underline-offset-4 transition-colors'
								>
									Try Sample Pack UK
								</Link>
							</li>
							<li>
								<Link
									href='/shop#gift-set'
									className='text-gold-100 hover:underline underline-offset-4 transition-colors'
								>
									Gift Set
								</Link>
							</li>
							<li>
								<Link
									href='/shop'
									className='text-gold-100 hover:underline underline-offset-4 transition-colors'
								>
									Shop All Indonesian Sambal UK
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='text-xl font-semibold mb-6 text-gold-300 font-brand'>
							Our Story
						</h4>
						<ul className='space-y-3 font-body'>
							<li>
								<Link
									href='/chef'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Meet Chef Yossie
								</Link>
							</li>
							<li>
								<Link
									href='/about'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Our Story
								</Link>
							</li>
							<li>
								<Link
									href='/authentic-vs-store-bought'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Authentic vs Store-Bought
								</Link>
							</li>
							<li>
								<Link
									href='/indonesian-sambal-london'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Indonesian Sambal in London
								</Link>
							</li>
							<li>
								<Link
									href='/wholesale'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Wholesale
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='text-xl font-semibold mb-6 text-gold-300 font-brand'>
							UK Delivery & Recipes
						</h4>
						<ul className='space-y-3 font-body'>
							<li>
								<Link
									href='/indonesian-sambal-london'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									London Delivery
								</Link>
							</li>
							<li>
								<Link
									href='/sambal-delivery-manchester'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Manchester Delivery
								</Link>
							</li>
							<li>
								<Link
									href='/recipes'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Indonesian Recipes UK
								</Link>
							</li>
							<li>
								<Link
									href='/blog'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Blog & Guides
								</Link>
							</li>
							<li>
								<Link
									href='/sambal-for-stir-fry'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Sambal for Stir-Fry
								</Link>
							</li>
							<li>
								<Link
									href='/sambal-eggs-breakfast'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Sambal Eggs Breakfast
								</Link>
							</li>
							<li>
								<Link
									href='/sambal-vs-hot-sauce'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Sambal vs Hot Sauce
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='text-xl font-semibold mb-6 text-gold-300 font-brand'>
							Contact Us
						</h4>
						<ul className='space-y-3 font-body'>
							<li>
								<Link
									href='/contact'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Get In Touch
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Contact Form
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Trust strip */}
				<div className='mt-12 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center'>
					<div className='text-gold-400 font-body text-sm font-medium'>
						Small-batch • Made in the UK
					</div>
					<div className='text-gold-400 font-body text-sm font-medium'>
						No preservatives • Vegan
					</div>
					<div className='text-gold-400 font-body text-sm font-medium'>
						Free UK delivery over £20
					</div>
				</div>

				<div className='border-t border-gold-600/30 mt-12 pt-8'>
					<div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
						<div className='text-gold-300 font-body text-center md:text-left'>
							<p>&copy; 2025 Spice Island Indonesia Ltd. All rights reserved.</p>
							<p className='text-sm text-gold-400 mt-1'>
								Company Registration: 16650562 | Registered in England and Wales
							</p>
						</div>
						<div className='flex space-x-6 text-gold-300 text-sm font-body'>
							<Link
								href='/privacy'
								className='hover:text-gold-100 transition-colors'
							>
								Privacy Policy
							</Link>
							<Link
								href='/terms'
								className='hover:text-gold-100 transition-colors'
							>
								Terms of Service
							</Link>
							<Link
								href='/shipping'
								className='hover:text-gold-100 transition-colors'
							>
								Shipping Info
							</Link>
							<Link
								href='/returns'
								className='hover:text-gold-100 transition-colors'
							>
								Returns Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
