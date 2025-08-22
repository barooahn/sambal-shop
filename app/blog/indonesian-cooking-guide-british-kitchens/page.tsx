import { Metadata } from "next";
const excerpt =
	"Master authentic Indonesian cooking in your British kitchen. Complete guide with traditional recipes, UK ingredient substitutions, shopping tips & cultural insights from Chef Yossie.";

import Image from "next/image";
import Link from "next/link";
import {
	Clock,
	Users,
	Star,
	Flame,
	ChefHat,
	Utensils,
	BookOpen,
	Award,
} from "lucide-react";
import StructuredData from "@/components/seo/StructuredData";
import FAQSchema from "@/components/seo/FAQSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";

export const metadata: Metadata = {
	title: "Indonesian Cooking Guide for British Kitchens | Complete Beginner's Guide | Spice Island Indonesia",
	description: excerpt,
	keywords:
		"Indonesian cooking UK, Indonesian recipes British kitchen, sambal recipes UK, Indonesian spices UK, Asian cooking guide Britain, authentic Indonesian food UK, Indonesian cuisine London, traditional Indonesian cooking",
	openGraph: {
		title: "Indonesian Cooking Guide for British Kitchens | Complete Beginner's Guide",
		description:
			"Master authentic Indonesian cooking in your British kitchen with Chef Yossie's comprehensive guide",
		type: "article",
		images: [
			{
				url: "/images/blog/indonesian-cooking-guide-hero.webp",
				width: 1200,
				height: 630,
				alt: "Indonesian spices and ingredients arranged in British kitchen setting",
			},
		],
	},
	alternates: {
		canonical:
			"https://www.spiceislandindonesia.com/blog/indonesian-cooking-guide-british-kitchens",
	},
};

const faqData = [
	{
		question:
			"Can I cook authentic Indonesian food in a British kitchen?",
		answer: "Absolutely! You can create authentic Indonesian dishes using standard British kitchen equipment. A good wok or heavy-bottomed pan, mortar and pestle, and basic cooking tools are all you need. Chef Yossie's guide shows you exactly how to adapt traditional techniques for British kitchens.",
	},
	{
		question: "Where can I buy Indonesian ingredients in the UK?",
		answer: "Many Indonesian ingredients are available in UK Asian supermarkets, online retailers, and increasingly in mainstream supermarkets. We provide a comprehensive UK shopping guide with specific store recommendations and online sources, plus British substitutions for hard-to-find ingredients.",
	},
	{
		question: "Are Indonesian dishes too spicy for British palates?",
		answer: "Indonesian cuisine offers a wide range of heat levels. Many dishes are mild and aromatic, while others are fiery. Our guide teaches you how to adjust spice levels for British tastes while maintaining authentic flavors. Start mild and build your tolerance gradually.",
	},
	{
		question:
			"What basic Indonesian ingredients should I stock in my UK kitchen?",
		answer: "Essential ingredients include sambal oelek, coconut milk, palm sugar, tamarind paste, candlenuts (or macadamias), galangal, lemongrass, and kaffir lime leaves. Our UK shopping guide tells you exactly where to find these ingredients and British alternatives.",
	},
	{
		question:
			"How long does it take to learn Indonesian cooking techniques?",
		answer: "Basic techniques can be learned in a few cooking sessions. Our progressive guide starts with simple 15-minute dishes and builds to complex curries. Most beginners master fundamental techniques within a month of regular practice.",
	},
];

const guideChapters = [
	{
		id: 1,
		title: "Understanding Indonesian Spice Levels for British Palates",
		description:
			"Learn to navigate Indonesian heat levels, build spice tolerance, and adapt traditional recipes for British taste preferences while maintaining authenticity.",
		readTime: "8 min read",
		difficulty: "Beginner",
		slug: "indonesian-spice-levels-british-palates",
		image: "/images/blog/spice-levels-guide.webp",
		topics: [
			"Heat scale comparison",
			"Spice tolerance building",
			"Recipe modifications",
			"British-friendly alternatives",
		],
	},
	{
		id: 2,
		title: "Essential Indonesian Ingredients: UK Shopping Guide",
		description:
			"Complete shopping guide for Indonesian ingredients in the UK, including where to buy, British substitutions, and building your Indonesian pantry on a budget.",
		readTime: "12 min read",
		difficulty: "Beginner",
		slug: "indonesian-ingredients-uk-shopping-guide",
		image: "/images/blog/ingredients-shopping-guide.webp",
		topics: [
			"UK supermarket guide",
			"Online shopping sources",
			"Ingredient substitutions",
			"Budget-friendly options",
		],
	},
	{
		id: 3,
		title: "Adapting Indonesian Techniques for British Kitchens",
		description:
			"Master traditional Indonesian cooking methods using standard British kitchen equipment. Learn proper wok techniques, spice paste preparation, and timing.",
		readTime: "15 min read",
		difficulty: "Intermediate",
		slug: "indonesian-techniques-british-kitchens",
		image: "/images/blog/cooking-techniques-guide.webp",
		topics: [
			"Wok cooking tips",
			"Spice paste techniques",
			"British equipment adaptations",
			"Temperature control",
		],
	},
	{
		id: 4,
		title: "British-Indonesian Fusion: Easy Weeknight Recipes",
		description:
			"Quick Indonesian-inspired dishes perfect for busy British households. Each recipe takes 30 minutes or less and uses ingredients available in UK supermarkets.",
		readTime: "20 min read",
		difficulty: "Beginner",
		slug: "british-indonesian-fusion-weeknight-recipes",
		image: "/images/blog/fusion-recipes-guide.webp",
		topics: [
			"Quick curry recipes",
			"Sambal transformations",
			"British ingredient fusion",
			"Meal prep ideas",
		],
	},
	{
		id: 5,
		title: "Cultural Context: Understanding Indonesian Food Culture",
		description:
			"Learn the cultural significance behind Indonesian dishes, proper etiquette, meal structure, and how to show respect for Indonesian culinary traditions.",
		readTime: "10 min read",
		difficulty: "All levels",
		slug: "indonesian-food-culture-context",
		image: "/images/blog/food-culture-guide.webp",
		topics: [
			"Cultural significance",
			"Meal etiquette",
			"Regional differences",
			"Respectful appreciation",
		],
	},
];

export default function IndonesianCookingGuidePage() {
	return (
		<>
			{/* Structured Data */}
			<ArticleSchema
				headline="Indonesian Cooking Guide for British Kitchens | Complete Beginner's Guide"
				description="Master authentic Indonesian cooking in your British kitchen with Chef Yossie's comprehensive 5-part guide covering ingredients, techniques, and cultural context"
				author={{
					name: "Chef Yossie",
					type: "Person",
					jobTitle: "Indonesian Chef",
					worksFor: "Spice Island Indonesia",
				}}
				publisher={{
					name: "Spice Island Indonesia",
					type: "Organization",
					logo: {
						url: "https://spiceislandindonesia.com/images/logo.webp",
						width: 200,
						height: 100,
					},
				}}
				url='https://spiceislandindonesia.com/blog/indonesian-cooking-guide-british-kitchens'
				datePublished='2025-01-08'
				dateModified='2025-01-08'
				image='/images/blog/indonesian-cooking-guide-hero.webp'
				wordCount={3200}
				keywords={[
					"Indonesian cooking UK",
					"Indonesian recipes British kitchen",
					"Asian cooking guide",
					"Chef Yossie guide",
					"authentic Indonesian UK",
				]}
			/>
			<FAQSchema
				faqs={faqData}
				pageTitle='Indonesian Cooking Guide for British Kitchens - FAQ'
			/>

			<article className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Article Header */}
				<header className='text-center mb-16'>
					<div className='flex items-center justify-center gap-2 text-burgundy-600 mb-4'>
						<ChefHat className='w-6 h-6' />
						<span className='text-sm font-semibold tracking-wide uppercase'>
							Complete Cooking Guide
						</span>
					</div>

					<h1 className='text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
						Indonesian Cooking for
						<span className='text-burgundy-600 block'>
							British Kitchens
						</span>
					</h1>

					<p className='text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed'>
						Master the art of authentic Indonesian cooking
						using your British kitchen. Chef Yossie's
						comprehensive 5-part guide covers everything from
						ingredient sourcing to cultural context - perfect
						for beginners and experienced cooks alike.
					</p>

					<div className='flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8'>
						<div className='flex items-center gap-2'>
							<BookOpen className='w-4 h-4' />
							<span>5-Part Series</span>
						</div>
						<div className='flex items-center gap-2'>
							<Clock className='w-4 h-4' />
							<span>65 min total read</span>
						</div>
						<div className='flex items-center gap-2'>
							<Users className='w-4 h-4' />
							<span>By Chef Yossie</span>
						</div>
						<div className='flex items-center gap-2'>
							<Award className='w-4 h-4 text-amber-500' />
							<span>Professional Guide</span>
						</div>
					</div>
				</header>

				{/* Hero Image */}
				<div className='relative mb-16 rounded-lg overflow-hidden shadow-2xl'>
					<Image
						src='/images/blog/indonesian-cooking-guide-hero.webp'
						alt='Indonesian spices and ingredients beautifully arranged in British kitchen setting showing accessibility of authentic cooking'
						width={1200}
						height={600}
						className='w-full h-auto object-cover'
						priority
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
					<div className='absolute bottom-6 left-6 right-6 text-white'>
						<p className='text-lg font-medium'>
							Traditional Indonesian spices meeting British
							kitchens
						</p>
					</div>
				</div>

				{/* Introduction */}
				<section className='prose prose-lg max-w-none mb-16'>
					<div className='bg-burgundy-50 border-l-4 border-burgundy-400 p-8 mb-12 rounded-r-lg'>
						<div className='flex items-start gap-4'>
							<ChefHat className='w-8 h-8 text-burgundy-600 mt-1 flex-shrink-0' />
							<div>
								<h3 className='text-xl font-bold text-burgundy-900 mb-4'>
									From Chef Yossie's Kitchen
								</h3>
								<p className='text-burgundy-800 leading-relaxed mb-4'>
									"When I first moved to the UK, I
									was heartbroken by how difficult it
									seemed to create authentic
									Indonesian flavors in a British
									kitchen. The ingredients felt
									impossible to find, the equipment
									was different, and I worried about
									overwhelming British palates with
									traditional spice levels."
								</p>
								<p className='text-burgundy-800 leading-relaxed'>
									"But after years of
									experimentation, I've learned that
									not only is authentic Indonesian
									cooking possible in British
									kitchens - it can be absolutely
									incredible. This guide shares
									everything I've learned about
									bringing the soul of Indonesian
									cuisine to your British home."
								</p>
							</div>
						</div>
					</div>

					<p className='text-lg leading-relaxed text-gray-700 mb-6'>
						Indonesian cuisine is one of the world's most
						diverse and complex culinary traditions, with over
						5,000 traditional recipes spanning 17,508 islands.
						From the aromatic rendang of Padang to the complex
						gudeg of Yogyakarta, Indonesian food offers an
						incredible journey of flavors, textures, and
						cooking techniques.
					</p>

					<p className='text-lg leading-relaxed text-gray-700 mb-8'>
						The good news? You don't need to travel to Jakarta
						or invest in specialized equipment to experience
						authentic Indonesian cooking. With the right
						guidance, your British kitchen can become a
						gateway to this incredible culinary world.
					</p>
				</section>

				{/* Guide Overview */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
						Your Complete Learning Journey
					</h2>

					<div className='grid gap-8'>
						{guideChapters.map((chapter, index) => (
							<div
								key={chapter.id}
								className='bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300'
							>
								<div className='md:flex'>
									<div className='md:w-1/3 relative aspect-[4/3] md:aspect-auto'>
										<Image
											src={chapter.image}
											alt={`${chapter.title} - Indonesian cooking guide illustration`}
											fill
											className='object-cover'
											loading='lazy'
										/>
										<div className='absolute top-4 left-4'>
											<div className='bg-burgundy-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
												Part {chapter.id}
											</div>
										</div>
									</div>
									<div className='md:w-2/3 p-8 flex flex-col justify-between'>
										<div>
											<div className='flex items-center gap-4 mb-4'>
												<span className='bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium'>
													{
														chapter.difficulty
													}
												</span>
												<span className='text-gray-500 text-sm flex items-center gap-1'>
													<Clock className='w-4 h-4' />
													{
														chapter.readTime
													}
												</span>
											</div>
											<h3 className='text-2xl font-bold text-gray-900 mb-4'>
												{chapter.title}
											</h3>
											<p className='text-gray-700 leading-relaxed mb-6'>
												{
													chapter.description
												}
											</p>
											<div className='flex flex-wrap gap-2 mb-6'>
												{chapter.topics.map(
													(topic) => (
														<span
															key={
																topic
															}
															className='bg-burgundy-50 text-burgundy-700 px-3 py-1 rounded-full text-sm'
														>
															{
																topic
															}
														</span>
													)
												)}
											</div>
										</div>
										<div>
											<Link
												href={`/blog/${chapter.slug}`}
												className='inline-flex items-center gap-2 bg-burgundy-600 hover:bg-burgundy-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
											>
												<BookOpen className='w-5 h-5' />
												Read Part{" "}
												{chapter.id}
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* What You'll Learn */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
						What You'll Master
					</h2>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						<div className='text-center p-6 bg-white rounded-lg border border-gray-200 shadow-lg'>
							<div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Flame className='w-8 h-8 text-red-600' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900 mb-3'>
								Spice Level Control
							</h3>
							<p className='text-gray-600'>
								Learn to adjust Indonesian heat levels
								for British palates while maintaining
								authentic flavors
							</p>
						</div>

						<div className='text-center p-6 bg-white rounded-lg border border-gray-200 shadow-lg'>
							<div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Utensils className='w-8 h-8 text-green-600' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900 mb-3'>
								Traditional Techniques
							</h3>
							<p className='text-gray-600'>
								Master authentic Indonesian cooking
								methods using your existing British
								kitchen equipment
							</p>
						</div>

						<div className='text-center p-6 bg-white rounded-lg border border-gray-200 shadow-lg'>
							<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Star className='w-8 h-8 text-blue-600' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900 mb-3'>
								UK Ingredient Sourcing
							</h3>
							<p className='text-gray-600'>
								Complete guide to finding Indonesian
								ingredients in UK supermarkets and
								online
							</p>
						</div>

						<div className='text-center p-6 bg-white rounded-lg border border-gray-200 shadow-lg'>
							<div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<ChefHat className='w-8 h-8 text-purple-600' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900 mb-3'>
								Fusion Recipes
							</h3>
							<p className='text-gray-600'>
								Create Indonesian-British fusion dishes
								that bridge two culinary cultures
								beautifully
							</p>
						</div>

						<div className='text-center p-6 bg-white rounded-lg border border-gray-200 shadow-lg'>
							<div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Award className='w-8 h-8 text-amber-600' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900 mb-3'>
								Cultural Understanding
							</h3>
							<p className='text-gray-600'>
								Learn the cultural context and
								significance behind Indonesian dishes
								and cooking methods
							</p>
						</div>

						<div className='text-center p-6 bg-white rounded-lg border border-gray-200 shadow-lg'>
							<div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Users className='w-8 h-8 text-orange-600' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900 mb-3'>
								Family Cooking
							</h3>
							<p className='text-gray-600'>
								Adapt recipes for British family meals
								while introducing authentic Indonesian
								flavors
							</p>
						</div>
					</div>
				</section>

				{/* Start Your Journey CTA */}
				<section className='text-center mb-16'>
					<div className='bg-gradient-to-br from-burgundy-50 to-red-50 rounded-lg p-8 border border-burgundy-100'>
						<h3 className='text-2xl font-bold text-gray-900 mb-4'>
							Ready to Start Your Indonesian Cooking
							Journey?
						</h3>
						<p className='text-gray-700 mb-6 max-w-2xl mx-auto'>
							Begin with Part 1 of our comprehensive guide
							and discover how accessible authentic
							Indonesian cooking can be in your British
							kitchen.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link
								href='/blog/indonesian-spice-levels-british-palates'
								className='inline-flex items-center justify-center gap-2 bg-burgundy-600 hover:bg-burgundy-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
							>
								<BookOpen className='w-5 h-5' />
								Start with Part 1
							</Link>
							<Link
								href='/sample-pack-try-first'
								className='inline-flex items-center justify-center gap-2 border border-burgundy-600 text-burgundy-600 hover:bg-burgundy-50 px-6 py-3 rounded-lg font-semibold transition-colors'
							>
								<Flame className='w-5 h-5' />
								Try Authentic Sambal First
							</Link>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
						Frequently Asked Questions
					</h2>

					<div className='space-y-6'>
						{faqData.map((faq, index) => (
							<div
								key={index}
								className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'
							>
								<h3 className='text-lg font-semibold text-gray-900 mb-3'>
									{faq.question}
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									{faq.answer}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Newsletter CTA */}
				<section className='text-center'>
					<div className='bg-white border border-gray-200 rounded-lg p-8 shadow-lg'>
						<h3 className='text-2xl font-semibold text-gray-900 mb-4'>
							Get New Recipes & Cooking Tips
						</h3>
						<p className='text-gray-700 mb-6 max-w-2xl mx-auto'>
							Join our UK community of Indonesian food
							lovers. Get new recipes, cooking tips, and
							exclusive UK offers delivered to your inbox.
						</p>
						<Link
							href='/#newsletter-signup'
							className='inline-flex items-center justify-center gap-2 bg-burgundy-600 hover:bg-burgundy-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
						>
							<Users className='w-5 h-5' />
							Join UK Community
						</Link>
					</div>
				</section>

				{/* Continue Exploring */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
						Continue Exploring
					</h2>
					<ul className='grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto'>
						<li>
							<Link
								href='/blog/spice-islands-to-your-kitchen'
								className='text-burgundy-600 hover:text-burgundy-800 underline'
							>
								Our Journey from the Spice Islands to
								Your Kitchen
							</Link>
						</li>
						<li>
							<Link
								href='/blog/sambal-vs-hot-sauce'
								className='text-burgundy-600 hover:text-burgundy-800 underline'
							>
								Sambal vs Hot Sauce: Understanding the
								Difference
							</Link>
						</li>
					</ul>
				</section>
			</article>
		</>
	);
}
