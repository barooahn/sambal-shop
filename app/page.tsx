import StructuredData from "@/components/seo/StructuredData";
import ProblemSolutionContent from "@/components/seo/ProblemSolutionContent";
import LocalSEOSchema from "@/components/seo/LocalSEOSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import ShippingSection from "@/components/home/ShippingSection";
import StorySection from "@/components/home/StorySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import SafeImage from "@/components/ui/SafeImage";

export default function Home() {
	// General Sambal FAQ data for AI search optimization
	const generalSambalFAQ = [
		{
			question: "What is Indonesian sambal?",
			answer: "Indonesian sambal is a traditional chili-based condiment that's the heart and soul of Indonesian cuisine. Unlike Western hot sauces, sambal is made with fresh ingredients using ancient techniques passed down through generations. It's not just about heat - it's about complex flavor layers that enhance every dish. From the volcanic soils of the Spice Islands comes this authentic taste that transforms ordinary meals into extraordinary culinary experiences.",
		},
		{
			question: "Where does sambal come from?",
			answer: "Sambal originates from the Indonesian archipelago, particularly the Maluku Islands (Spice Islands), where volcanic soil creates ideal conditions for growing the world's most flavorful chilies. The tradition dates back centuries, long before European traders arrived in 1512. Each region of Indonesia has developed its own unique sambal varieties, with techniques refined over generations using traditional stone mortars and time-honored recipes.",
		},
		{
			question: "Is sambal healthy?",
			answer: "Yes! Authentic sambal is incredibly healthy when made with traditional methods. Fresh chilies are rich in vitamin C, capsaicin (which boosts metabolism), and antioxidants. Our sambal contains no artificial preservatives, colors, or excessive sodium like many commercial hot sauces. The natural fermentation process and minimal ingredients create a condiment that supports digestive health and provides natural anti-inflammatory benefits.",
		},
		{
			question: "Can I buy authentic sambal in the UK?",
			answer: "Absolutely! We're proud to bring authentic Indonesian sambal to the UK market. Made by Chef Yossie using traditional Bandung family recipes, our sambal is crafted with the same techniques used in Indonesia for generations. We deliver throughout the UK with proper packaging to maintain freshness. Unlike mass-produced alternatives found in supermarkets, our sambal contains no artificial ingredients and captures the true taste of Indonesia.",
		},
	];

	return (
		<div className='font-body min-h-screen relative overflow-hidden'>
			{/* Enhanced Dynamic Background with Visual Flow */}
			<div className='fixed inset-0 z-0'>
				{/* Base gradient */}
				<div className='absolute inset-0 bg-gradient-to-br from-purple-200 via-orange-200 to-blue-200'></div>

				{/* Animated flowing elements */}
				<div className='absolute top-20 left-10 w-32 h-32 bg-red-300/30 rounded-full blur-xl animate-pulse'></div>
				<div
					className='absolute top-1/3 right-20 w-48 h-48 bg-amber-300/20 rounded-full blur-2xl animate-bounce'
					style={{ animationDuration: "8s" }}
				></div>
				<div
					className='absolute bottom-1/4 left-1/4 w-40 h-40 bg-emerald-300/25 rounded-full blur-xl animate-pulse'
					style={{ animationDelay: "2s" }}
				></div>
				<div
					className='absolute bottom-10 right-10 w-28 h-28 bg-rose-300/30 rounded-full blur-lg animate-bounce'
					style={{
						animationDuration: "6s",
						animationDelay: "1s",
					}}
				></div>

				{/* Subtle pattern overlay */}
				<div className='absolute inset-0 opacity-10'>
					<div
						className='w-full h-full'
						style={{
							backgroundImage: `radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
										radial-gradient(circle at 75% 75%, rgba(234, 88, 12, 0.1) 0%, transparent 50%),
										radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
						}}
					></div>
				</div>
			</div>

			{/* Content with proper z-index */}
			<div className='relative z-10'>
				{/* Structured Data */}
				<StructuredData type='organization' />
				<StructuredData type='localbusiness' />
				<StructuredData type='product' />
				<StructuredData type='faq' />
				<StructuredData type='reviews' />

				{/* Local SEO Schema for AI Search */}
				<LocalSEOSchema
					businessName='Spice Island Indonesia'
					description='Authentic Indonesian sambal and spices delivered throughout the UK. Traditional recipes by Chef Yossie from Bandung, Indonesia.'
					serviceAreas={[
						{ name: "United Kingdom", type: "Country" },
						{ name: "London", type: "City" },
						{ name: "Manchester", type: "City" },
						{ name: "Birmingham", type: "City" },
						{ name: "Edinburgh", type: "City" },
						{ name: "Cardiff", type: "City" },
						{ name: "Belfast", type: "City" },
						{ name: "England", type: "Region" },
						{ name: "Scotland", type: "Region" },
						{ name: "Wales", type: "Region" },
						{ name: "Northern Ireland", type: "Region" },
					]}
					deliveryRadius={500}
					deliveryUnit='km'
					specialties={[
						"Indonesian Sambal",
						"Traditional Chili Paste",
						"Authentic Indonesian Spices",
						"Sambal Oelek",
						"Sambal Bali",
						"Indonesian Condiments",
						"Southeast Asian Cuisine",
						"Traditional Indonesian Recipes",
					]}
					languages={["English", "Indonesian"]}
				/>

				{/* General Sambal FAQ Schema */}
				<FAQSchema
					faqs={generalSambalFAQ}
					pageTitle='Indonesian Sambal - Frequently Asked Questions'
				/>

				{/* Hero Section with ingredient connectors */}
				<div className='relative'>
					<HeroSection />
					{/* Fresh Tomatoes connecting to Product section */}
					<div className='absolute bottom-0 left-0 w-full h-32 overflow-hidden pointer-events-none'>
						<div className='absolute bottom-8 left-1/4 w-16 h-16 transform -rotate-12'>
							<SafeImage
								src='/images/tomatoes-floating.png'
								alt='Fresh Tomatoes'
								className='w-full h-full object-contain animate-bounce drop-shadow-lg'
								style={{
									animationDelay: "0.5s",
									animationDuration: "3s",
								}}
								fallbackSrc='https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop'
							/>
						</div>
						<div className='absolute bottom-4 right-1/3 w-12 h-12 transform rotate-45'>
							<SafeImage
								src='/images/single-tomato.png'
								alt='Tomato'
								className='w-full h-full object-contain animate-pulse drop-shadow-md'
								fallbackSrc='https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop'
							/>
						</div>
						<div className='absolute bottom-16 left-1/2 w-10 h-10 transform -rotate-6'>
							<SafeImage
								src='/images/cherry-tomato.png'
								alt='Cherry Tomato'
								className='w-full h-full object-contain animate-bounce drop-shadow-sm'
								style={{
									animationDelay: "1.2s",
									animationDuration: "4s",
								}}
								fallbackSrc='https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
							/>
						</div>
					</div>
				</div>

				{/* Product Showcase Section with spice integration */}
				<div className='relative'>
					{/* Floating spices as section connectors */}
					<div className='absolute top-0 left-0 w-full h-24 overflow-hidden pointer-events-none'>
						<div className='absolute top-4 left-1/5 w-14 h-14 transform rotate-12'>
							<SafeImage
								src='/images/turmeric-powder.png'
								alt='Turmeric Spice'
								className='w-full h-full object-contain animate-pulse drop-shadow-lg'
								fallbackSrc='https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=56&h=56&fit=crop'
							/>
						</div>
						<div className='absolute top-8 right-1/4 w-8 h-8 transform -rotate-45'>
							<SafeImage
								src='/images/small-spice.png'
								alt='Spice'
								className='w-full h-full object-contain animate-bounce drop-shadow-md'
								style={{ animationDelay: "0.8s" }}
								fallbackSrc='https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop'
							/>
						</div>
					</div>

					<div className='relative pt-8'>
						<ProductShowcase />
					</div>

					{/* Red chili peppers connecting to newsletter */}
					<div className='relative h-20 overflow-hidden pointer-events-none'>
						<div className='absolute left-1/6 top-2 w-20 h-6 transform rotate-12'>
							<SafeImage
								src='/images/long-red-chili.png'
								alt='Red Chili Pepper'
								className='w-full h-full object-contain animate-pulse drop-shadow-md'
								fallbackSrc='https://images.pexels.com/photos/6252418/pexels-photo-6252418.jpeg?auto=compress&cs=tinysrgb&w=80&h=24&fit=crop'
							/>
						</div>
						<div className='absolute right-1/5 top-8 w-16 h-4 transform -rotate-6'>
							<SafeImage
								src='/images/small-chili.png'
								alt='Small Chili'
								className='w-full h-full object-contain animate-bounce drop-shadow-sm'
								style={{ animationDelay: "1s" }}
								fallbackSrc='https://images.pexels.com/photos/6252418/pexels-photo-6252418.jpeg?auto=compress&cs=tinysrgb&w=64&h=16&fit=crop'
							/>
						</div>
						<div className='absolute left-1/2 top-4 w-12 h-3 transform rotate-45'>
							<SafeImage
								src='/images/tiny-chili.png'
								alt='Tiny Chili'
								className='w-full h-full object-contain animate-pulse drop-shadow-xs'
								style={{ animationDelay: "1.5s" }}
								fallbackSrc='https://images.pexels.com/photos/6252418/pexels-photo-6252418.jpeg?auto=compress&cs=tinysrgb&w=48&h=12&fit=crop'
							/>
						</div>
					</div>
				</div>

				{/* Newsletter Section with onion/shallot connectors */}
				<div className='relative'>
					<div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-red-300/20 to-transparent rounded-full blur-3xl'></div>

					{/* Shallots and onions floating around newsletter */}
					<div className='absolute top-4 left-1/6 w-12 h-16 transform -rotate-12 pointer-events-none'>
						<SafeImage
							src='/images/shallot-bulb.png'
							alt='Fresh Shallot'
							className='w-full h-full object-contain animate-bounce drop-shadow-md'
							style={{
								animationDelay: "0.3s",
								animationDuration: "4s",
							}}
							fallbackSrc='https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=48&h=64&fit=crop'
						/>
					</div>
					<div className='absolute bottom-8 right-1/5 w-14 h-18 transform rotate-6 pointer-events-none'>
						<SafeImage
							src='/images/red-onion.png'
							alt='Red Onion'
							className='w-full h-full object-contain animate-pulse drop-shadow-lg'
							style={{ animationDelay: "1.2s" }}
							fallbackSrc='https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=56&h=72&fit=crop'
						/>
					</div>

					<NewsletterSection />
				</div>

				{/* Shipping Section with garlic and ginger */}
				<div className='relative'>
					{/* Garlic cloves transitioning into section */}
					<div className='absolute top-0 left-0 w-full h-24 pointer-events-none'>
						<div className='absolute top-2 left-1/4 w-10 h-12 transform rotate-12'>
							<SafeImage
								src='/images/garlic-clove.png'
								alt='Garlic Clove'
								className='w-full h-full object-contain animate-bounce drop-shadow-md'
								style={{
									animationDelay: "0.8s",
									animationDuration: "3.5s",
								}}
								fallbackSrc='https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=40&h=48&fit=crop'
							/>
						</div>
						<div className='absolute top-8 right-1/3 w-16 h-10 transform -rotate-12'>
							<SafeImage
								src='/images/ginger-root.png'
								alt='Fresh Ginger'
								className='w-full h-full object-contain animate-pulse drop-shadow-lg'
								style={{ animationDelay: "0.4s" }}
								fallbackSrc='https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=64&h=40&fit=crop'
							/>
						</div>
					</div>

					<div className='relative pt-12'>
						<ShippingSection />
					</div>
				</div>

				{/* Story Section with enhanced imagery integration */}
				<div className='relative'>
					{/* Traditional mortar and pestle ingredients */}
					<div className='absolute top-1/4 left-4 w-16 h-16 pointer-events-none'>
						<SafeImage
							src='/images/mortar-pestle.png'
							alt='Traditional Mortar & Pestle'
							className='w-full h-full object-contain animate-pulse drop-shadow-xl'
							style={{ animationDelay: "0.6s" }}
							fallbackSrc='https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop'
						/>
					</div>
					<div className='absolute bottom-1/4 right-8 w-20 h-12 transform rotate-12 pointer-events-none'>
						<SafeImage
							src='/images/dried-chilies.png'
							alt='Dried Chilies'
							className='w-full h-full object-contain animate-bounce drop-shadow-lg'
							style={{
								animationDelay: "1.8s",
								animationDuration: "5s",
							}}
							fallbackSrc='https://images.pexels.com/photos/6252418/pexels-photo-6252418.jpeg?auto=compress&cs=tinysrgb&w=80&h=48&fit=crop'
						/>
					</div>

					<StorySection />

					{/* Palm oil and coconut transitioning to testimonials */}
					<div className='absolute bottom-0 left-0 w-full h-16 pointer-events-none'>
						<div className='absolute bottom-4 left-1/3 w-12 h-12 transform -rotate-6'>
							<SafeImage
								src='/images/coconut-half.png'
								alt='Fresh Coconut'
								className='w-full h-full object-contain animate-pulse drop-shadow-md'
								style={{ animationDelay: "0.9s" }}
								fallbackSrc='https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop'
							/>
						</div>
						<div className='absolute bottom-2 right-1/4 w-8 h-10 transform rotate-12'>
							<SafeImage
								src='/images/palm-oil-drop.png'
								alt='Palm Oil'
								className='w-full h-full object-contain animate-bounce drop-shadow-sm'
								style={{
									animationDelay: "1.4s",
									animationDuration: "3s",
								}}
								fallbackSrc='https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&w=32&h=40&fit=crop'
							/>
						</div>
					</div>
				</div>

				{/* Testimonials Section with final visual enhancement */}
				<div className='relative pt-8'>
					<TestimonialsSection />
				</div>

				{/* Problem-Solution Content with enhanced visual appeal */}
				<section className='py-16 relative'>
					{/* Background accent elements */}
					<div className='absolute top-10 left-10 w-24 h-24 bg-purple-300/20 rounded-full blur-xl animate-pulse'></div>
					<div
						className='absolute bottom-10 right-10 w-32 h-32 bg-blue-300/15 rounded-full blur-2xl animate-pulse'
						style={{ animationDelay: "3s" }}
					></div>

					<div className='container mx-auto px-4 relative'>
						{/* Section header with visual enhancement */}
						<div className='text-center mb-16'>
							<div className='inline-block p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20'>
								<h2 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 font-heading'>
									Transform Your Cooking Experience
								</h2>
								<p className='text-xl text-gray-600 font-body'>
									Discover how authentic Indonesian
									sambal solves your kitchen
									challenges
								</p>
							</div>
						</div>

						<ProblemSolutionContent
							title='Common Cooking Challenges Solved'
							subtitle='How authentic Indonesian sambal solves your kitchen problems'
							problems={[
								{
									problem: "I want to add heat to my cooking but don't like artificial flavors or excessive sweetness in Western hot sauces.",
									solution:
										"Authentic sambal oelek contains only chilies, salt, and vinegar - no artificial colors, preservatives, or added sugar. You get pure chili heat that enhances rather than masks your food's natural flavors.",
									benefits: [
										"No artificial ingredients or preservatives",
										"Pure chili flavor without sweetness",
										"Traditional Indonesian authenticity",
										"Perfect for serious home cooks",
									],
									actionLink: {
										text: "Try Authentic Sambal Oelek",
										href: "/sambal-oelek-uk",
									},
									category: "Flavor Enhancement",
								},
								{
									problem: "I'm new to spicy food but want to explore Indonesian flavors without overwhelming heat.",
									solution:
										"Sambal Bali offers complex aromatic spices (galangal, lemongrass, kaffir lime) that balance the heat beautifully. It's milder than pure chili pastes while delivering authentic Indonesian flavor complexity.",
									benefits: [
										"Aromatic spices balance the heat",
										"Perfect introduction to Indonesian cuisine",
										"Complex flavor layers, not just heat",
										"Ideal for gradual spice tolerance building",
									],
									actionLink: {
										text: "Start with Sambal Bali",
										href: "/sambal-bali-aromatic-spicy",
									},
									category: "Beginner-Friendly",
								},
								{
									problem: "I want to cook authentic Asian dishes but can't find quality Indonesian ingredients in UK stores.",
									solution:
										"We deliver authentic Indonesian sambal throughout the UK, made by Chef Yossie using traditional Bandung family recipes. No need to compromise with inferior substitutes or artificial products.",
									benefits: [
										"Authentic Indonesian recipes and techniques",
										"Made by traditional Indonesian chef",
										"UK-wide delivery with proper packaging",
										"Sample packs available to try first",
									],
									actionLink: {
										text: "Order Authentic Sambal",
										href: "/sample-pack-try-first",
									},
									category: "Authenticity",
								},
								{
									problem: "I love cooking but struggle with bland, boring meals that lack excitement and depth of flavor.",
									solution:
										"Indonesian sambal transforms ordinary dishes into restaurant-quality meals. Use it in marinades, stir-fries, or as a finishing sauce to add layers of complex heat and authentic Southeast Asian flavor.",
									benefits: [
										"Transforms simple ingredients into exciting dishes",
										"Versatile - works as condiment or cooking ingredient",
										"Restaurant-quality flavor at home",
										"Endless recipe possibilities",
									],
									actionLink: {
										text: "Explore Recipe Ideas",
										href: "/recipes",
									},
									category: "Cooking Enhancement",
								},
							]}
						/>
					</div>
				</section>

				{/* General Sambal FAQ with enhanced design */}
				<section className='py-16 relative'>
					{/* Visual connecting elements */}
					<div className='absolute top-0 left-0 w-full h-20'>
						<svg
							viewBox='0 0 1200 120'
							className='w-full h-full'
						>
							<path
								d='M0,0 L1200,0 L1200,60 C900,100 300,20 0,60 Z'
								fill='rgba(255,255,255,0.1)'
							/>
						</svg>
					</div>

					<div className='container mx-auto px-4 relative pt-8'>
						<div className='max-w-4xl mx-auto'>
							{/* Enhanced section header */}
							<div className='text-center mb-16'>
								<div className='inline-block p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30'>
									<h2 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 font-heading'>
										About Indonesian Sambal
									</h2>
									<p className='text-xl text-gray-600 font-body'>
										Everything you need to know
										about authentic Indonesian
										sambal culture and tradition
									</p>
								</div>
							</div>

							<div className='space-y-8'>
								{/* Enhanced FAQ items with better visual flow */}
								{generalSambalFAQ.map((faq, index) => (
									<div key={index} className='group'>
										<div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
											{/* Visual accent */}
											<div className='flex items-start space-x-4'>
												<div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg'>
													{index + 1}
												</div>
												<div className='flex-1'>
													<h3 className='text-xl font-bold text-burgundy-900 mb-4 font-brand group-hover:text-red-600 transition-colors'>
														{
															faq.question
														}
													</h3>
													<p className='text-gray-700 font-body leading-relaxed'>
														{
															faq.answer
														}
														{index ===
															3 && (
															<>
																{" "}
																Try
																our{" "}
																<Link
																	href='/sample-pack-try-first'
																	className='text-burgundy-600 hover:text-burgundy-800 underline font-semibold'
																>
																	sample
																	pack
																</Link>{" "}
																to
																experience
																the
																authentic
																difference.
															</>
														)}
													</p>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section with visual enhancement */}
				<div className='relative'>
					<div className='absolute top-0 right-0 w-48 h-48 bg-gradient-to-l from-purple-300/20 to-transparent rounded-full blur-3xl'></div>
					<FAQSection />
				</div>

				{/* Contact Section with final visual flourish */}
				<div className='relative'>
					{/* Final connecting wave */}
					<div className='absolute top-0 left-0 w-full h-24'>
						<svg
							viewBox='0 0 1200 120'
							className='w-full h-full'
						>
							<path
								d='M0,120 C300,20 900,80 1200,0 L1200,120 Z'
								fill='rgba(59, 130, 246, 0.1)'
							/>
						</svg>
					</div>

					{/* Background accent for contact section */}
					<div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900/5 to-transparent'></div>

					<div className='relative pt-12'>
						<ContactSection />
					</div>
				</div>
			</div>
		</div>
	);
}
