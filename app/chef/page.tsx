import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChefHat, Heart, Award, MapPin, Users, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
	title: "Meet Chef Yossie | Bandung-Born Indonesian Chef | Spice Island Indonesia",
	description:
		"Meet Chef Yossie, born in Bandung and trained in her mother's catering kitchen. Now bringing professional-grade Indonesian sambal and West Java recipes to British homes.",
	keywords:
		"Indonesian chef UK, Bandung chef, West Java cuisine, Sundanese cooking, professional sambal maker, Indonesian catering recipes, authentic Indonesian chef",
};

export default function ChefPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100'>
			{/* Hero Section */}
			<section className='py-24 bg-gradient-to-br from-burgundy-900 to-burgundy-800 text-white relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-burgundy-900/90 to-gold-900/20'></div>
				<div className='absolute top-0 left-0 w-72 h-72 bg-gold-500/10 rounded-full -translate-x-36 -translate-y-36 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-96 h-96 bg-burgundy-500/10 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div>
							<div className='mb-8'>
								<div className='flex items-center space-x-3 mb-6'>
									<ChefHat className='w-8 h-8 text-gold-300' />
									<span className='text-gold-300 text-lg font-elegant tracking-wider'>
										PROFESSIONAL INDONESIAN CHEF
									</span>
								</div>
								<h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-brand'>
									Meet Chef Yossie
								</h1>
								<p className='text-xl sm:text-2xl text-gold-200 mb-8 leading-relaxed font-body'>
									From Bandung's bustling catering
									kitchens to handcrafted artisan
									production in the UK
								</p>
							</div>

							<div className='grid sm:grid-cols-2 gap-6 mb-8'>
								<div className='flex items-center space-x-3'>
									<MapPin className='w-6 h-6 text-gold-300' />
									<div>
										<p className='font-semibold text-gold-200 font-brand'>
											Born in Bandung
										</p>
										<p className='text-sm text-gold-300 font-body'>
											West Java, Indonesia
										</p>
									</div>
								</div>
								<div className='flex items-center space-x-3'>
									<Users className='w-6 h-6 text-gold-300' />
									<div>
										<p className='font-semibold text-gold-200 font-brand'>
											Catering Experience
										</p>
										<p className='text-sm text-gold-300 font-body'>
											15+ years professional
										</p>
									</div>
								</div>
							</div>

							<Link href='/shop'>
								<Button
									variant='primary'
									size='lg'
									className='font-elegant'
								>
									Try Chef Yossie's Sambal
								</Button>
							</Link>
						</div>

						<div className='relative'>
							<div className='aspect-square rounded-3xl overflow-hidden shadow-luxury border border-gold-200 bg-gradient-to-br from-cream-50 to-gold-50'>
								<div className='w-full h-full flex items-center justify-center p-8'>
									{/* Placeholder for chef photo */}
									<div className='w-full h-full bg-gradient-to-br from-burgundy-100 to-gold-100 rounded-2xl flex items-center justify-center'>
										<ChefHat className='w-32 h-32 text-burgundy-600' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Chef's Journey */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							From Catering Kitchen to Your Kitchen
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							A journey of authentic flavors, professional
							expertise, and family tradition
						</p>
					</div>

					<div className='grid lg:grid-cols-3 gap-12'>
						{/* Bandung Roots */}
						<div className='text-center'>
							<div className='w-20 h-20 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-burgundy-200'>
								<MapPin className='w-10 h-10 text-burgundy-700' />
							</div>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-4 font-brand'>
								Bandung Born
							</h3>
							<p className='text-neutral-700 leading-relaxed font-body'>
								Born and raised in Bandung, West Java -
								Indonesia's culinary capital known for
								its incredible street food culture and
								traditional Sundanese cuisine. Chef
								Yossie grew up surrounded by the rich
								food heritage of the region.
							</p>
						</div>

						{/* Catering Training */}
						<div className='text-center'>
							<div className='w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold-200'>
								<Users className='w-10 h-10 text-gold-700' />
							</div>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-4 font-brand'>
								Professional Training
							</h3>
							<p className='text-neutral-700 leading-relaxed font-body'>
								Trained in her mother's busy catering
								kitchen, serving hundreds daily. Here
								she learned the art of scaling
								traditional recipes while maintaining
								authentic flavors - a skill that sets
								her apart from home cooks.
							</p>
						</div>

						{/* UK Journey */}
						<div className='text-center'>
							<div className='w-20 h-20 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-cream-200'>
								<Heart className='w-10 h-10 text-cream-700' />
							</div>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-4 font-brand'>
								British Mission
							</h3>
							<p className='text-neutral-700 leading-relaxed font-body'>
								Missing authentic Indonesian flavors in
								the UK, Chef Yossie decided to bring her
								professional expertise and family
								recipes to British kitchens, one
								handcrafted jar at a time.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Family Legacy */}
			<section className='py-24 bg-gradient-to-br from-cream-100 to-cream-200'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div>
							<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
								The Family
								<span className='text-gold-700 block'>
									Catering Legacy
								</span>
							</h2>
							<div className='space-y-6 text-lg text-neutral-700 leading-relaxed font-body'>
								<p>
									Chef Yossie's culinary journey
									began in her mother's bustling
									catering kitchen in Bandung, where
									traditional Indonesian recipes were
									prepared for hundreds of guests
									daily. This wasn't just home
									cooking - it was professional-grade
									Indonesian cuisine at scale.
								</p>
								<p>
									In that kitchen, consistency was
									everything. Every batch of sambal
									had to taste exactly the same,
									whether serving 50 or 500 people.
									This experience taught Chef Yossie
									the precision and technique that
									separates professional chefs from
									passionate home cooks.
								</p>
								<p>
									The family catering business
									specialized in traditional West
									Java (Sundanese) cuisine, known for
									its complex flavor profiles and
									sophisticated use of fresh herbs
									and spices. These recipes, passed
									down through generations, form the
									foundation of every product Chef
									Yossie creates today.
								</p>
							</div>
						</div>

						<div className='relative'>
							<div className='aspect-[4/3] rounded-4xl overflow-hidden shadow-luxury border border-gold-200'>
								{/* Placeholder for family catering photo */}
								<div className='w-full h-full bg-gradient-to-br from-burgundy-50 to-gold-50 flex items-center justify-center'>
									<div className='text-center'>
										<Users className='w-24 h-24 text-burgundy-400 mx-auto mb-4' />
										<p className='text-burgundy-600 font-body'>
											Family Catering Kitchen
										</p>
										<p className='text-burgundy-500 text-sm font-body'>
											Bandung, Indonesia
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Professional Philosophy */}
			<section className='py-24 bg-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-8 font-brand'>
						Professional Quality,
						<span className='text-gold-700 block'>
							Traditional Taste
						</span>
					</h2>

					<div className='bg-gradient-to-r from-burgundy-50 to-gold-50 rounded-3xl p-8 mb-12 border border-gold-200'>
						<blockquote className='text-xl sm:text-2xl text-burgundy-800 font-body italic leading-relaxed'>
							"In my mother's catering kitchen, I learned
							that authentic Indonesian flavors don't have
							to be compromised when cooking at scale.
							Every jar I make today carries that same
							commitment to professional consistency and
							traditional authenticity."
						</blockquote>
						<cite className='text-burgundy-600 font-brand text-lg mt-4 block'>
							— Chef Yossie
						</cite>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						<div className='text-center'>
							<Award className='w-12 h-12 text-gold-600 mx-auto mb-4' />
							<h3 className='text-xl font-bold text-burgundy-900 mb-2 font-brand'>
								Professional Standards
							</h3>
							<p className='text-neutral-600 font-body'>
								15+ years of commercial kitchen
								experience ensures every batch meets
								professional quality standards.
							</p>
						</div>
						<div className='text-center'>
							<ChefHat className='w-12 h-12 text-burgundy-600 mx-auto mb-4' />
							<h3 className='text-xl font-bold text-burgundy-900 mb-2 font-brand'>
								Traditional Recipes
							</h3>
							<p className='text-neutral-600 font-body'>
								Authentic family recipes from West Java,
								unchanged for generations but perfected
								through professional experience.
							</p>
						</div>
						<div className='text-center'>
							<Heart className='w-12 h-12 text-cream-600 mx-auto mb-4' />
							<h3 className='text-xl font-bold text-burgundy-900 mb-2 font-brand'>
								Cultural Bridge
							</h3>
							<p className='text-neutral-600 font-body'>
								Bringing authentic Indonesian flavors to
								British kitchens with the care and
								precision of a professional chef.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className='py-24 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-4xl sm:text-5xl font-bold mb-6 font-brand'>
						Taste the Difference
						<span className='text-gold-300 block'>
							Professional Experience Makes
						</span>
					</h2>
					<p className='text-xl text-gold-200 mb-8 font-body'>
						Experience authentic Indonesian sambal crafted
						with professional precision and traditional family
						recipes
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/shop'>
							<Button
								variant='primary'
								size='lg'
								className='font-elegant'
							>
								Shop Chef Yossie's Sambal
							</Button>
						</Link>
						<Link href='/recipes'>
							<Button
								variant='outline'
								size='lg'
								className='font-elegant border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900'
							>
								View Traditional Recipes
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
