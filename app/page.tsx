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
import FloatingIngredients from "@/components/ui/FloatingIngredients";
import { Waves, Triangle } from "lucide-react";

// Ingredient configurations for different sections
const heroIngredients = [
	{
		src: "/images/optimized/long-red-chili-xl.webp",
		alt: "Fresh Red Chili",
		size: "md" as const,
		position: {
			mobile: { bottom: "-30px", right: "60px" },
			tablet: { bottom: "-50px", right: "60px" },
			desktop: { bottom: "-80px", right: "60px" },
		},
		rotation: 0,
		animationDelay: "0.5s",
		animationDuration: "6s",
	},
	{
		src: "/images/optimized/garlic-clove-xl.webp",
		alt: "Garlic Clove",
		size: "sm" as const,
		position: {
			mobile: { bottom: "-30px", left: "50px" },
			tablet: { bottom: "-30px", left: "40px" },
			desktop: { bottom: "-70px", left: "60px" },
		},
		rotation: 0,
	},
];

const productIngredients: {
	src: string;
	alt: string;
	size: "sm" | "md" | "lg";
	position: { top?: string; bottom?: string; left?: string; right?: string };
	rotation: number;
	animationDelay?: string;
	animationDuration?: string;
	opacity?: number;
}[] = [];

const storyIngredients = [
	{
		src: "/images/optimized/garlic-clove-xl.webp",
		alt: "Garlic Clove",
		size: "md" as const,
		position: {
			mobile: { bottom: "-30px", right: "60px" },
			tablet: { bottom: "-40px", right: "60px" },
			desktop: { bottom: "-50px", right: "60px" },
		},
		rotation: 0,
		animationDelay: "0.6s",
		animationDuration: "6s",
	},
	{
		src: "/images/optimized/mortar-pestle-xl.webp",
		alt: "Mortar & Pestle",
		size: "lg" as const,
		position: {
			mobile: { bottom: "-30px", left: "40px" },
			tablet: { bottom: "-40px", left: "50px" },
			desktop: { bottom: "-50px", left: "50px" },
		},
		rotation: 0,
	},
];

const newsletterIngredients = [
	{
		src: "/images/optimized/shallot-bulb-lg.webp",
		alt: "Shallot",
		size: "md" as const,
		position: { top: "-290px", left: "60px" },
		rotation: 0,
		animationDelay: "0.3s",
		animationDuration: "5s",
	},
	{
		src: "/images/optimized/long-red-chili-xl.webp",
		alt: "Red Chili",
		size: "md" as const,
		position: { top: "-290px", right: "60px" },
		rotation: 0,
	},
];

const transitionIngredients = [
	{
		src: "/images/optimized/turmeric-powder-xl.webp",
		alt: "Turmeric Powder",
		size: "md" as const,
		position: { bottom: "-100px", left: "60px" },
		rotation: 0,
		animationDelay: "0.2s",
		animationDuration: "8s",
	},
	{
		src: "/images/optimized/mortar-pestle-xl.webp",
		alt: "Mortar & Pestle",
		size: "md" as const,
		position: { bottom: "-100px", right: "60px" },
		rotation: 0,
		animationDelay: "0.7s",
		animationDuration: "6s",
	},
];

const shippingIngredients = [
	{
		src: "/images/optimized/garlic-clove-xl.webp",
		alt: "Garlic Clove",
		size: "md" as const,
		position: { bottom: "-50px", left: "60px" },
		rotation: 0,
	},
	{
		src: "/images/optimized/turmeric-powder-lg.webp",
		alt: "Turmeric Powder",
		size: "sm" as const,
		position: { bottom: "-50px", right: "60px" },
		rotation: 0,
	},
];

const cookingExperienceIngredients = [
	{
		src: "/images/optimized/long-red-chili-xl.webp",
		alt: "Red Chili",
		size: "md" as const,
		position: { top: "-100px", left: "60px" },
		rotation: 0,
		animationDelay: "0.4s",
		animationDuration: "7s",
	},
	{
		src: "/images/optimized/shallot-bulb-lg.webp",
		alt: "Shallot",
		size: "sm" as const,
		position: { top: "-100px", right: "60px" },
		rotation: 0,
		animationDelay: "0.9s",
		animationDuration: "5s",
	},
];

const problemSolutionIngredients = [
	{
		src: "/images/optimized/mortar-pestle-lg.webp",
		alt: "Mortar & Pestle",
		size: "sm" as const,
		position: { bottom: "-50px", left: "60px" },
		rotation: 0,
	},
	{
		src: "/images/optimized/tomatoes-floating-xl.webp",
		alt: "Fresh Tomatoes",
		size: "md" as const,
		position: { bottom: "-50px", right: "60px" },
		rotation: 0,
	},
];

const faqIngredients = [
	{
		src: "/images/optimized/tomatoes-floating-xl.webp",
		alt: "Fresh Tomatoes",
		size: "md" as const,
		position: { top: "-50px", right: "60px" },
		rotation: 0,
	},
	{
		src: "/images/optimized/garlic-clove-lg.webp",
		alt: "Garlic Clove",
		size: "sm" as const,
		position: { top: "-50px", left: "60px" },
		rotation: 0,
	},
];

const contactIngredients = [
	{
		src: "/images/optimized/turmeric-powder-xl.webp",
		alt: "Turmeric Powder",
		size: "lg" as const,
		position: { top: "-100px", right: "60px" },
		rotation: 0,
		animationDelay: "0.6s",
		animationDuration: "8s",
	},
	{
		src: "/images/optimized/mortar-pestle-xl.webp",
		alt: "Mortar & Pestle",
		size: "md" as const,
		position: { top: "-80px", left: "60px" },
		rotation: 0,
		animationDelay: "1.2s",
		animationDuration: "6s",
	},
];

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
			question: "Can I buy authentic Indonesian sambal in the UK?",
			answer: "Absolutely! We're the UK's premier Indonesian sambal supplier. Made by Chef Yossie using traditional Bandung family recipes, our sambal is crafted with the same techniques used in Indonesia for generations. We deliver throughout the UK including London, Manchester, Birmingham, Edinburgh with proper packaging to maintain freshness. Unlike mass-produced alternatives found in UK supermarkets, our sambal contains no artificial ingredients and captures the true taste of Indonesia.",
		},
		{
			question: "Do you deliver Indonesian sambal to London and Manchester?",
			answer: "Yes! We deliver authentic Indonesian sambal throughout the UK with next-day delivery available to London, Manchester, Birmingham, Edinburgh and all major cities. Free UK delivery on orders over £25. Our sambal is carefully packaged to maintain freshness during transport, ensuring you receive restaurant-quality Indonesian condiments at your door.",
		},
		{
			question: "Where can I find authentic Indonesian sambal near me in the UK?",
			answer: "Spice Island Indonesia is your best source for authentic Indonesian sambal in the UK. While UK supermarkets may stock mass-produced versions, our sambal is the only one made by a professional Indonesian chef using traditional Bandung recipes. We deliver nationwide, so whether you're in London, Manchester, Scotland, Wales or anywhere in the UK, you can order authentic sambal online with fast delivery.",
		},
	];

	return (
		<div className='font-body min-h-screen relative overflow-hidden'>
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

				{/* Hero Section */}
				<div className='relative'>
					<HeroSection />
					<FloatingIngredients ingredients={heroIngredients} />
				</div>

				{/* Product Showcase Section */}
				<div className='relative'>
					<div className='relative pt-8'>
						<ProductShowcase />
					</div>
					<FloatingIngredients
						ingredients={productIngredients}
					/>
				</div>

				{/* Newsletter Section */}
				<div className='relative'>
					<div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-red-300/20 to-transparent rounded-full blur-3xl'></div>
					<NewsletterSection />
					<FloatingIngredients
						ingredients={newsletterIngredients}
					/>
				</div>

				{/* Transition Ingredients between Newsletter and Shipping */}
				<div className='relative '>
					<FloatingIngredients
						ingredients={transitionIngredients}
					/>
				</div>

				{/* Shipping Section */}
				<div className='relative'>
					<div className='relative pt-12'>
						<ShippingSection />
					</div>
					<FloatingIngredients
						ingredients={shippingIngredients}
					/>
				</div>

				{/* Story Section */}
				<div className='relative'>
					<StorySection />
					<FloatingIngredients ingredients={storyIngredients} />
				</div>

				{/* Testimonials Section */}
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

					{/* Floating ingredients after header */}
					<FloatingIngredients
						ingredients={cookingExperienceIngredients}
					/>
					<div className='container mx-auto px-4 relative'>
						{/* Section header with visual enhancement */}
						<div className='text-center mb-16 relative'>
							<div className='inline-block p-8 bg-white/80 backdrop-blur-sm rounded-sm shadow-xl border border-white/20'>
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
					<FloatingIngredients
						ingredients={problemSolutionIngredients}
					/>
				</section>

				{/* General Sambal FAQ with enhanced design */}
				<section className='py-16 relative'>
					{/* Visual connecting elements with icons instead of SVG */}
					<div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
						<Waves className='w-24 h-6 text-white/10' />
					</div>

					<div className='container mx-auto px-4 relative pt-8'>
						<div className='max-w-4xl mx-auto'>
							{/* Enhanced section header */}
							<div className='text-center mb-16'>
								<div className='inline-block p-8 bg-white/90 backdrop-blur-sm rounded-sm shadow-2xl border border-white/30'>
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
										<div className='bg-white/80 backdrop-blur-sm rounded-sm p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
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

				{/* FAQ Section */}
				<div className='relative'>
					<div className='absolute top-0 right-0 w-48 h-48 bg-gradient-to-l from-purple-300/20 to-transparent rounded-full blur-3xl'></div>
					<FAQSection />
					<FloatingIngredients ingredients={faqIngredients} />
				</div>

				{/* Contact Section with final visual flourish */}
				<div className='relative'>
					{/* Final connecting elements with icons */}
					<div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
						<Triangle className='w-16 h-8 text-blue-100/10' />
					</div>

					{/* Background accent for contact section */}
					<div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900/5 to-transparent'></div>

					<div className='relative pt-12'>
						<ContactSection />
					</div>
					<FloatingIngredients
						ingredients={contactIngredients}
					/>
				</div>
			</div>
		</div>
	);
}
