import Link from "next/link";
import {
	Mail,
	MapPin,
	Phone,
	Instagram,
	Facebook,
	Twitter,
} from "lucide-react";

export default function Footer() {
	return (
		<footer className='bg-burgundy-900 text-gold-200 py-16 relative overflow-hidden border-t border-gold-600/30'>
			<div className='absolute inset-0 bg-gradient-to-r from-burgundy-950/50 via-transparent to-burgundy-950/50'></div>

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
								href='#'
								className='w-12 h-12 bg-burgundy-800 border border-gold-600/30 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-200 hover:bg-burgundy-700 transition-all duration-200'
							>
								<Instagram className='w-6 h-6' />
							</a>
							<a
								href='#'
								className='w-12 h-12 bg-burgundy-800 border border-gold-600/30 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-200 hover:bg-burgundy-700 transition-all duration-200'
							>
								<Facebook className='w-6 h-6' />
							</a>
							<a
								href='#'
								className='w-12 h-12 bg-burgundy-800 border border-gold-600/30 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-200 hover:bg-burgundy-700 transition-all duration-200'
							>
								<Twitter className='w-6 h-6' />
							</a>
						</div>
					</div>

					<div>
						<h4 className='text-xl font-semibold mb-6 text-gold-300 font-brand'>
							Products
						</h4>
						<ul className='space-y-3 font-body'>
							<li>
								<Link
									href='/shop#sambal-oelek'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Sambal Oelek
								</Link>
							</li>
							<li>
								<Link
									href='/shop#sambal-bali'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Sambal Bali
								</Link>
							</li>
							<li>
								<Link
									href='/shop#sample-pack'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Sample Pack
								</Link>
							</li>
							<li>
								<Link
									href='/shop#gift-set'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Gift Set
								</Link>
							</li>
							<li>
								<Link
									href='/shop'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									View All Products
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
							Cooking Guide
						</h4>
						<ul className='space-y-3 font-body'>
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
									href='/sambal-noodle-sauce'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Sambal Noodle Sauce
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
							<li>
								<Link
									href='/recipes'
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									All Recipes
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='text-xl font-semibold mb-6 text-gold-300 font-brand'>
							Contact Us
						</h4>
						<div className='space-y-4 font-body'>
							<div className='flex items-center space-x-3'>
								<Mail className='w-5 h-5 text-gold-400' />
								<span className='text-gold-200'>
									hello@spiceislandindonesia.co.uk
								</span>
							</div>
							<div className='flex items-center space-x-3'>
								<Phone className='w-5 h-5 text-gold-400' />
								<span className='text-gold-200'>
									+44 (0) 20 1234 5678
								</span>
							</div>
							<div className='flex items-start space-x-3'>
								<MapPin className='w-5 h-5 text-gold-400 mt-1' />
								<div className='text-gold-200'>
									<div>London, United Kingdom</div>
									<div className='text-sm text-gold-300 mt-1'>
										Mon-Fri: 9:00 AM - 6:00 PM GMT
									</div>
									<div className='text-sm text-gold-300'>
										Sat: 10:00 AM - 4:00 PM GMT
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='border-t border-gold-600/30 mt-12 pt-8'>
					<div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
						<p className='text-gold-300 font-body'>
							&copy; 2024 Spice Island Indonesia. All
							rights reserved.
						</p>
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
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
