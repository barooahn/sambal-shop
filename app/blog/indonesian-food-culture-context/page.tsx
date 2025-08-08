import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Heart, Globe, Star, ArrowLeft, ArrowRight, BookOpen, Utensils } from "lucide-react";
import FAQSchema from "@/components/seo/FAQSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";

export const metadata: Metadata = {
	title: "Understanding Indonesian Food Culture | Cultural Context Guide | Spice Island Indonesia",
	description: "Learn the cultural significance behind Indonesian dishes, proper etiquette, meal structure, and how to show respect for Indonesian culinary traditions in British kitchens.",
	keywords: "Indonesian food culture, Indonesian meal etiquette, Indonesian dining traditions, Indonesian cooking cultural context, Indonesian food significance, respecting Indonesian cuisine, Indonesian culinary heritage",
	openGraph: {
		title: "Understanding Indonesian Food Culture | Cultural Context Guide",
		description: "Learn the cultural significance and traditions behind authentic Indonesian cuisine",
		type: "article",
		images: [
			{
				url: "/images/blog/food-culture-guide.webp",
				width: 1200,
				height: 630,
				alt: "Indonesian family sharing traditional meal showing food culture and community"
			}
		]
	},
	alternates: {
		canonical: "https://spiceislandindonesia.com/blog/indonesian-food-culture-context"
	}
};

const faqData = [
	{
		question: "What is the proper etiquette for eating Indonesian food?",
		answer: "In Indonesian culture, meals are typically shared family-style with rice as the centerpiece. Use a spoon and fork (spoon in right hand, fork in left). Wait for elders to start eating first, and it's polite to try a little of everything offered. Never point with utensils or waste food."
	},
	{
		question: "Why is rice so important in Indonesian cuisine?",
		answer: "Rice is the sacred foundation of Indonesian meals, both nutritionally and culturally. It represents life, prosperity, and community. A proper Indonesian meal always centers around rice with various accompanying dishes (lauk-pauk) that complement and balance the rice."
	},
	{
		question: "How do Indonesian meal structures differ from British dining?",
		answer: "Indonesian meals are typically served all at once family-style, rather than in courses. The concept is balance - sweet, salty, spicy, and fresh flavors all present simultaneously. Meals are communal experiences focused on sharing and togetherness rather than individual portions."
	},
	{
		question: "What does sambal represent in Indonesian culture?",
		answer: "Sambal is more than a condiment - it's a cultural identity marker. Each region and family has their own sambal recipes passed down through generations. Making sambal is considered an art form and a way to preserve cultural heritage. The spice level and ingredients reflect local preferences and available produce."
	}
];

export default function IndonesianFoodCulturePage() {
	return (
		<>
			{/* Structured Data */}
			<ArticleSchema
				headline="Understanding Indonesian Food Culture | Complete Cultural Context Guide"
				description="Learn the cultural significance behind Indonesian dishes, proper etiquette, meal structure, and how to respectfully appreciate Indonesian culinary traditions"
				author={{
					name: "Chef Yossie",
					type: "Person",
					jobTitle: "Indonesian Chef",
					worksFor: "Spice Island Indonesia"
				}}
				publisher={{
					name: "Spice Island Indonesia",
					type: "Organization",
					logo: {
						url: "https://spiceislandindonesia.com/images/logo.webp",
						width: 200,
						height: 100
					}
				}}
				url="https://spiceislandindonesia.com/blog/indonesian-food-culture-context"
				datePublished="2025-01-08"
				dateModified="2025-01-08"
				image="/images/blog/food-culture-guide.webp"
				wordCount={2800}
				keywords={["Indonesian food culture", "Indonesian meal etiquette", "Indonesian culinary traditions", "Indonesian dining customs"]}
			/>
			<FAQSchema 
				faqs={faqData}
				pageTitle="Understanding Indonesian Food Culture - FAQ"
			/>

			<article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Navigation */}
				<nav className="mb-8">
					<div className="flex items-center gap-2 text-sm text-gray-600">
						<Link href="/blog/indonesian-cooking-guide-british-kitchens" className="hover:text-burgundy-600">
							Indonesian Cooking Guide
						</Link>
						<span>→</span>
						<span className="text-burgundy-600 font-medium">Part 5: Cultural Context</span>
					</div>
				</nav>

				{/* Article Header */}
				<header className="text-center mb-12">
					<div className="flex items-center justify-center gap-2 text-burgundy-600 mb-4">
						<div className="bg-burgundy-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
							Part 5 of 5
						</div>
						<Heart className="w-5 h-5" />
						<span className="text-sm font-semibold tracking-wide uppercase">Cultural Understanding</span>
					</div>
					
					<h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
						Understanding Indonesian Food Culture
					</h1>
					
					<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
						Discover the rich cultural significance behind Indonesian cuisine. Learn proper etiquette, meal structures, and how to respectfully appreciate the deep traditions that make Indonesian food so special.
					</p>

					<div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
						<div className="flex items-center gap-2">
							<Clock className="w-4 h-4" />
							<span>10 min read</span>
						</div>
						<div className="flex items-center gap-2">
							<Users className="w-4 h-4" />
							<span>By Chef Yossie</span>
						</div>
						<div className="flex items-center gap-2">
							<Globe className="w-4 h-4" />
							<span>Cultural Guide</span>
						</div>
					</div>
				</header>

				{/* Hero Image */}
				<div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
					<Image
						src="/images/blog/food-culture-guide.webp"
						alt="Indonesian family sharing traditional communal meal showing food culture, respect, and community bonding"
						width={1200}
						height={600}
						className="w-full h-auto object-cover"
						priority
					/>
				</div>

				{/* Introduction */}
				<section className="prose prose-lg max-w-none mb-12">
					<div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8 rounded-r-lg">
						<div className="flex items-start gap-3">
							<Heart className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
							<div>
								<h3 className="font-semibold text-amber-900 mb-2">Chef's Cultural Note</h3>
								<p className="text-amber-800 leading-relaxed">
									"Food in Indonesia is never just about eating - it's about family, community, respect, and preserving our ancestors' wisdom. When you cook Indonesian food, you're participating in thousands of years of cultural tradition. Understanding this context will deepen your appreciation and make your cooking more authentic."
								</p>
							</div>
						</div>
					</div>

					<p className="text-lg leading-relaxed text-gray-700 mb-6">
						Indonesian cuisine extends far beyond recipes and ingredients. It's a living expression of the nation's diverse cultural heritage, reflecting the values, beliefs, and social structures of over 17,000 islands and 300 ethnic groups. When we cook Indonesian food, we're participating in ancient traditions that have been passed down through generations.
					</p>
					
					<p className="text-lg leading-relaxed text-gray-700 mb-8">
						As you embark on your Indonesian cooking journey in your British kitchen, understanding these cultural contexts will not only make you a better cook but also help you appreciate the deep significance behind every dish you prepare.
					</p>
				</section>

				{/* The Role of Rice */}
				<section className="mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-8">Rice: The Sacred Foundation</h2>
					
					<div className="bg-white rounded-lg border border-gray-200 p-8 shadow-lg mb-8">
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">Cultural Significance</h3>
								<div className="space-y-4 text-gray-700">
									<p><strong>Spiritual Importance:</strong> Rice is considered sacred, representing life, fertility, and prosperity. The rice goddess Dewi Sri is honored in many Indonesian cultures.</p>
									<p><strong>Daily Ritual:</strong> Eating rice three times a day isn't just nutrition - it's a cultural practice that connects people to their heritage and the land.</p>
									<p><strong>Community Bond:</strong> Sharing rice creates unity. The phrase "sudah makan nasi?" (have you eaten rice?) is how Indonesians ask about well-being.</p>
								</div>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">In Your British Kitchen</h3>
								<div className="space-y-4 text-gray-700">
									<p><strong>Always Center Rice:</strong> Make rice the foundation of Indonesian meals, not a side dish.</p>
									<p><strong>Quality Matters:</strong> Invest in good jasmine or basmati rice - it shows respect for the tradition.</p>
									<p><strong>Cooking Mindfully:</strong> Take care when preparing rice, as it represents the care you show for those you're feeding.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Meal Structure and Etiquette */}
				<section className="mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-8">Traditional Meal Structure & Etiquette</h2>
					
					<div className="space-y-8">
						{/* Family-Style Service */}
						<div className="bg-gradient-to-br from-burgundy-50 to-red-50 rounded-lg p-8">
							<h3 className="text-xl font-semibold text-burgundy-900 mb-6">Family-Style Service</h3>
							
							<div className="grid md:grid-cols-3 gap-6">
								<div className="text-center">
									<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
										<Utensils className="w-8 h-8 text-burgundy-600" />
									</div>
									<h4 className="font-semibold text-burgundy-800 mb-2">All Together</h4>
									<p className="text-burgundy-700 text-sm">All dishes served simultaneously, not in courses. Everyone shares from the same dishes.</p>
								</div>
								<div className="text-center">
									<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
										<Heart className="w-8 h-8 text-burgundy-600" />
									</div>
									<h4 className="font-semibold text-burgundy-800 mb-2">Balance is Key</h4>
									<p className="text-burgundy-700 text-sm">Sweet, salty, spicy, and fresh flavors all present to create harmony.</p>
								</div>
								<div className="text-center">
									<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
										<Users className="w-8 h-8 text-burgundy-600" />
									</div>
									<h4 className="font-semibold text-burgundy-800 mb-2">Community Focus</h4>
									<p className="text-burgundy-700 text-sm">Meals are social experiences that strengthen family and community bonds.</p>
								</div>
							</div>
						</div>

						{/* Proper Etiquette */}
						<div className="bg-white rounded-lg border border-gray-200 p-8 shadow-lg">
							<h3 className="text-xl font-semibold text-gray-900 mb-6">Dining Etiquette Guidelines</h3>
							
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
										<div className="w-4 h-4 bg-green-500 rounded-full"></div>
										Do
									</h4>
									<ul className="space-y-2 text-gray-700 text-sm">
										<li>• Wait for elders to begin eating first</li>
										<li>• Use spoon in right hand, fork in left</li>
										<li>• Try a little of everything offered</li>
										<li>• Eat with your right hand only</li>
										<li>• Compliment the cook genuinely</li>
										<li>• Accept seconds when offered</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
										<div className="w-4 h-4 bg-red-500 rounded-full"></div>
										Avoid
									</h4>
									<ul className="space-y-2 text-gray-700 text-sm">
										<li>• Pointing with utensils or fingers</li>
										<li>• Wasting food (considered disrespectful)</li>
										<li>• Refusing food without good reason</li>
										<li>• Eating before everyone is served</li>
										<li>• Using your left hand to eat</li>
										<li>• Making negative comments about food</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Regional Differences */}
				<section className="mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-8">Regional Cultural Variations</h2>
					
					<div className="space-y-6">
						<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-gray-900 mb-3">Javanese Traditions</h3>
							<p className="text-gray-700 mb-3">
								Emphasizes harmony and balance. Meals are served with careful attention to color, texture, and flavor balance. The concept of "sego" (rice) as the spiritual center of meals.
							</p>
							<div className="text-sm text-gray-600">
								<strong>Key dishes:</strong> Gudeg, Soto, Gado-gado - all emphasizing gentle, balanced flavors
							</div>
						</div>

						<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-gray-900 mb-3">Sumatran Culture</h3>
							<p className="text-gray-700 mb-3">
								Bold, robust flavors reflecting the mountainous terrain. Meals are hearty and communal, often featuring rich coconut-based curries and intense spice blends.
							</p>
							<div className="text-sm text-gray-600">
								<strong>Key dishes:</strong> Rendang, Gulai, Sambal - representing strength and bold character
							</div>
						</div>

						<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-gray-900 mb-3">Eastern Indonesian Influences</h3>
							<p className="text-gray-700 mb-3">
								Maritime culture emphasizes fresh seafood and tropical fruits. Portuguese and Dutch influences create unique fusion elements while maintaining Indonesian soul.
							</p>
							<div className="text-sm text-gray-600">
								<strong>Key dishes:</strong> Ikan bakar, various sambal, tropical fruit desserts
							</div>
						</div>
					</div>
				</section>

				{/* The Significance of Sambal */}
				<section className="mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-8">Sambal: More Than a Condiment</h2>
					
					<div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8 border border-red-100">
						<div className="text-center mb-8">
							<div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Star className="w-10 h-10 text-red-600" />
							</div>
							<h3 className="text-2xl font-bold text-red-900 mb-4">Cultural Identity in a Bowl</h3>
							<p className="text-red-800 max-w-2xl mx-auto">
								Sambal represents regional identity, family heritage, and personal expression. Each family guards their sambal recipe as a treasured inheritance.
							</p>
						</div>
						
						<div className="grid md:grid-cols-3 gap-6 text-center">
							<div>
								<h4 className="font-semibold text-red-800 mb-2">Regional Pride</h4>
								<p className="text-red-700 text-sm">Each region's sambal reflects local ingredients, climate, and cultural preferences</p>
							</div>
							<div>
								<h4 className="font-semibold text-red-800 mb-2">Family Legacy</h4>
								<p className="text-red-700 text-sm">Recipes passed down through generations, often with secret techniques and ingredients</p>
							</div>
							<div>
								<h4 className="font-semibold text-red-800 mb-2">Personal Expression</h4>
								<p className="text-red-700 text-sm">Adjusting heat, sweetness, and ingredients to reflect individual taste and skill</p>
							</div>
						</div>
					</div>
				</section>

				{/* Respectful Cooking Practices */}
				<section className="mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-8">Cooking with Cultural Respect</h2>
					
					<div className="bg-white rounded-lg border border-gray-200 p-8 shadow-lg">
						<div className="space-y-6">
							<div className="border-l-4 border-blue-400 pl-6">
								<h4 className="text-lg font-semibold text-blue-800 mb-2">Learn the Stories</h4>
								<p className="text-blue-700">Understand the history and significance behind dishes you're preparing. This knowledge enriches your cooking and shows respect for the culture.</p>
							</div>
							
							<div className="border-l-4 border-green-400 pl-6">
								<h4 className="text-lg font-semibold text-green-800 mb-2">Use Quality Ingredients</h4>
								<p className="text-green-700">Invest in authentic ingredients when possible. Using quality spices and traditional components honors the original recipes and their creators.</p>
							</div>
							
							<div className="border-l-4 border-purple-400 pl-6">
								<h4 className="text-lg font-semibold text-purple-800 mb-2">Share and Credit</h4>
								<p className="text-purple-700">When sharing Indonesian dishes with British friends, explain their cultural significance and credit Indonesian culinary traditions.</p>
							</div>
							
							<div className="border-l-4 border-amber-400 pl-6">
								<h4 className="text-lg font-semibold text-amber-800 mb-2">Adapt Thoughtfully</h4>
								<p className="text-amber-700">When modifying recipes for British tastes, maintain the soul of the dish while making necessary adjustments for local preferences.</p>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Indonesian Food Culture</h2>
					
					<div className="space-y-6">
						{faqData.map((faq, index) => (
							<div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
								<h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
								<p className="text-gray-700 leading-relaxed">{faq.answer}</p>
							</div>
						))}
					</div>
				</section>

				{/* Conclusion */}
				<section className="mb-12">
					<div className="bg-gradient-to-r from-burgundy-600 to-red-600 text-white rounded-lg p-8">
						<h2 className="text-2xl font-bold mb-4">Your Cultural Journey Continues</h2>
						<p className="text-lg mb-6 opacity-90">
							Understanding Indonesian food culture transforms cooking from mere recipe-following into a meaningful cultural exchange. Every dish you prepare connects you to centuries of tradition and thousands of Indonesian families who have preserved these flavors.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link 
								href="/blog/indonesian-cooking-guide-british-kitchens"
								className="inline-flex items-center justify-center gap-2 bg-white text-burgundy-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
							>
								<BookOpen className="w-5 h-5" />
								Complete Cooking Guide
							</Link>
							<Link 
								href="/sample-pack-try-first"
								className="inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-burgundy-600 px-6 py-3 rounded-lg font-semibold transition-colors"
							>
								<Heart className="w-5 h-5" />
								Experience Authentic Sambal
							</Link>
						</div>
					</div>
				</section>

				{/* Navigation */}
				<div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
					<Link 
						href="/blog/british-indonesian-fusion-weeknight-recipes"
						className="flex-1 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
					>
						<div className="flex items-center justify-between">
							<div>
								<ArrowLeft className="w-5 h-5 text-burgundy-600 mb-2" />
								<p className="text-sm text-gray-600">Previous</p>
								<p className="font-semibold text-gray-900">Part 4: Fusion Recipes</p>
							</div>
						</div>
					</Link>
					
					<Link 
						href="/blog"
						className="flex-1 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
					>
						<div className="flex items-center justify-between">
							<div className="text-right">
								<ArrowRight className="w-5 h-5 text-burgundy-600 mb-2 ml-auto" />
								<p className="text-sm text-gray-600">Back to</p>
								<p className="font-semibold text-gray-900">All Blog Articles</p>
							</div>
						</div>
					</Link>
				</div>
			</article>
		</>
	);
}