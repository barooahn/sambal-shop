import Link from "next/link";
import { Instagram, Facebook } from "@/components/ui/icons";
import TrackedExternalLink from "@/components/analytics/TrackedExternalLink";
import { getInternalUrls } from "@/lib/url-utils";
import CookieSettingsLink from "@/components/consent/CookieSettingsLink";

export default function Footer() {
	const urls = getInternalUrls();
	return (
		<footer
			role='contentinfo'
			className='bg-neutral-900 text-gold-100 py-16 relative overflow-hidden border-t border-gold-600/30'
		>
			{/* Background image with overlay */}
			<div
				className='absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat'
				style={{
					backgroundImage: "url(/images/footer-background.webp)",
				}}
			></div>
			{/* Dark overlay to reduce brightness */}
			<div className='absolute inset-0 pointer-events-none bg-black/60'></div>

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
							{/* Tracked external links for social icons */}
							<TrackedExternalLink
								href='https://www.instagram.com/spiceisland_indonesia/'
								linkText='Instagram'
								target='_blank'
								rel='noopener noreferrer'
								className='w-12 h-12 bg-burgundy-800 border border-gold-600/30 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-200 hover:bg-burgundy-700 transition-all duration-200'
								aria-label='Follow Spice Island Indonesia on Instagram'
							>
								<Instagram className='w-6 h-6' />
							</TrackedExternalLink>
							<TrackedExternalLink
								href='https://www.facebook.com/spiceislandindonesia'
								linkText='Facebook'
								target='_blank'
								rel='noopener noreferrer'
								className='w-12 h-12 bg-burgundy-800 border border-gold-600/30 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-200 hover:bg-burgundy-700 transition-all duration-200'
								aria-label='Follow Spice Island Indonesia on Facebook'
							>
								<Facebook className='w-6 h-6' />
							</TrackedExternalLink>
						</div>
					</div>

					<div>
						<h4 className='text-xl font-semibold mb-6 text-gold-300 font-brand'>
							Indonesian Sambal UK
						</h4>
						<ul className='space-y-3 font-body'>
							<li>
								<Link
									href={urls.sambalOelek}
									className='text-gold-100 hover:underline underline-offset-4 transition-colors'
								>
									Sambal Oelek UK
								</Link>
							</li>
							<li>
								<Link
									href={urls.sambalBali}
									className='text-gold-100 hover:underline underline-offset-4 transition-colors'
								>
									Sambal Bali UK
								</Link>
							</li>
							<li>
								<Link
									href={urls.samplePack}
									className='text-gold-100 hover:underline underline-offset-4 transition-colors'
								>
									Try Sample Pack UK
								</Link>
							</li>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/gift-set`}
									className='text-gold-100 hover:underline underline-offset-4 transition-colors'
								>
									Gift Set
								</Link>
							</li>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/gift-set-indonesian`}
									className='text-gold-100 hover:underline underline-offset-4 transition-colors'
								>
									Indonesian Gift Set
								</Link>
							</li>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/sambal-bali-sweet-spicy`}
									className='text-gold-100 hover:underline underline-offset-4 transition-colors'
								>
									Sambal Bali Sweet & Spicy
								</Link>
							</li>
							<li>
								<Link
									href={urls.shop}
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
									href={urls.chef}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Meet Chef Yossie
								</Link>
							</li>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/about`}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Our Story
								</Link>
							</li>
							<li>
								<Link
									href={urls.authenticVsStoreBought}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Authentic vs Store-Bought
								</Link>
							</li>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/sriracha-alternative`}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Sriracha Alternative
								</Link>
							</li>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/hot-sauce-vs-sambal`}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Hot Sauce vs Sambal
								</Link>
							</li>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/indonesian-sambal-london`}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Indonesian Sambal in London
								</Link>
							</li>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/wholesale`}
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
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/indonesian-sambal-london`}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									London Delivery
								</Link>
							</li>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/sambal-delivery-manchester`}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Manchester Delivery
								</Link>
							</li>
							<li>
								<Link
									href={urls.recipes}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Indonesian Recipes UK
								</Link>
							</li>
							<li>
								<Link
									href={urls.blog}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Blog & Guides
								</Link>
							</li>
							<li>
								<Link
									href={urls.sambalStirFry}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Sambal for Stir-Fry
								</Link>
							</li>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/sambal-eggs-breakfast`}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Sambal Eggs Breakfast
								</Link>
							</li>
							<li>
								<Link
									href={urls.sambalVsHotSauce}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Sambal vs Hot Sauce
								</Link>
							</li>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/sambal-noodle-sauce`}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Sambal Noodle Sauce
								</Link>
							</li>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/uk-indonesian-food-delivery`}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									UK Indonesian Food Delivery
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='text-xl font-semibold mb-6 text-gold-300 font-brand'>
							Contact & Support
						</h4>
						<ul className='space-y-3 font-body'>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/contact`}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Get In Touch
								</Link>
							</li>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/feedback`}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Leave Feedback
								</Link>
							</li>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/success`}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Order Success
								</Link>
							</li>
							<li>
								<Link
									href={`${
										process.env
											.NEXT_PUBLIC_SITE_URL ||
										"https://www.spiceislandindonesia.com"
									}/unsubscribe`}
									className='text-gold-200 hover:text-gold-100 transition-colors'
								>
									Unsubscribe
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
							<p>
								&copy; 2025 Spice Island Indonesia Ltd.
								All rights reserved.
							</p>
							<p className='text-sm text-gold-400 mt-1'>
								Company Registration: 16650562 |
								Registered in England and Wales
							</p>
						</div>
						<div className='flex space-x-6 text-gold-300 text-sm font-body'>
							<Link
								href={`${
									process.env.NEXT_PUBLIC_SITE_URL ||
									"https://www.spiceislandindonesia.com"
								}/privacy`}
								className='hover:text-gold-100 transition-colors'
							>
								Privacy Policy
							</Link>
							<Link
								href={`${
									process.env.NEXT_PUBLIC_SITE_URL ||
									"https://www.spiceislandindonesia.com"
								}/terms`}
								className='hover:text-gold-100 transition-colors'
							>
								Terms of Service
							</Link>
							<Link
								href={`${
									process.env.NEXT_PUBLIC_SITE_URL ||
									"https://www.spiceislandindonesia.com"
								}/shipping`}
								className='hover:text-gold-100 transition-colors'
							>
								Shipping Info
							</Link>
							<Link
								href={`${
									process.env.NEXT_PUBLIC_SITE_URL ||
									"https://www.spiceislandindonesia.com"
								}/returns`}
								className='hover:text-gold-100 transition-colors'
							>
								Returns Policy
							</Link>
							{/* Cookie settings opens the consent banner/modal */}
							<CookieSettingsLink className='hover:text-gold-100 transition-colors underline underline-offset-4'>
								Cookie settings
							</CookieSettingsLink>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
