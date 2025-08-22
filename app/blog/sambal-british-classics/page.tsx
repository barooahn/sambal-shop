import { Metadata } from "next";
const excerpt =
	"Revolutionize your favourite British dishes with authentic Indonesian sambal. From Sunday roasts to fish and chips, discover how traditional sambal elevates classic British cooking with bold, complex flavors.";

import Image from "next/image";
import Link from "next/link";
import {
	Clock,
	Users,
	Utensils,
	Star,
	ChefHat,
	ArrowRight,
	Flame,
	Crown,
} from "lucide-react";
import FAQSchema from "@/components/seo/FAQSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";

export const metadata: Metadata = {
	title: "Sambal Transforms British Classics | Indonesian Fusion Recipes",
	description: "Revolutionize British dishes with authentic sambal UK. Indonesian chili paste artisanal hot sauce transforms fish & chips, Sunday roasts. Complete UK fusion cooking guide.",
	keywords:
		"authentic sambal UK, Indonesian chili paste, artisanal hot sauce, sambal British food fusion, Indonesian sambal UK recipes, British Indonesian cooking, sambal fish and chips, sambal roast dinner, Indonesian spices British classics, sambal transformation British dishes",
	openGraph: {
		title: "Authentic Sambal UK Transforms British Classics | Indonesian Chili Paste Artisanal Hot Sauce Fusion",
		description:
			"Revolutionary fusion recipes combining authentic sambal UK Indonesian chili paste artisanal hot sauce with beloved British dishes",
		type: "article",
		images: [
			{
				url: "/images/blog/sambal-british-fusion.webp",
				width: 1200,
				height: 630,
				alt: "Authentic Sambal UK British classic dishes transformed with Indonesian chili paste artisanal hot sauce fusion cooking",
			},
		],
	},
	alternates: {
		canonical:
			"https://www.spiceislandindonesia.com/blog/sambal-british-classics",
	},
};

const faqData = [
	{
		question: "Which sambal works best with British roasts?",
		answer: "Sambal Bali works beautifully with roast beef and lamb due to its aromatic, less fiery profile. For pork, try a mild sambal oelek mixed with a touch of honey. The key is balancing the sambal's intensity with the meat's richness without overwhelming traditional flavors.",
	},
	{
		question: "Can I use sambal instead of mint sauce with lamb?",
		answer: "Absolutely! A mild sambal mixed with fresh mint creates an exciting alternative to traditional mint sauce. The combination provides the familiar mint freshness British palates expect while adding Indonesian complexity and gentle heat.",
	},
	{
		question:
			"How do I introduce sambal to family members who prefer mild flavors?",
		answer: "Start with tiny amounts mixed into familiar sauces. Try sambal-enhanced mayo for fish and chips, or a dash in gravy for Sunday roast. The key is gradual introduction where sambal enhances rather than dominates familiar flavors.",
	},
	{
		question:
			"What's the best way to store homemade sambal-fusion sauces?",
		answer: "Store sambal-fusion sauces in sterilized glass jars in the refrigerator for up to 2 weeks. The acidity in sambal helps preserve mixed sauces, but always use clean utensils and check for any signs of spoilage before use.",
	},
];

const fusionRecipes = [
	{
		id: 1,
		title: "Sambal-Glazed Sunday Roast",
		british: "Traditional Sunday Roast",
		indonesian: "Sambal Bali + Palm Sugar",
		description:
			"Transform your Sunday roast with a sambal glaze that caramelizes beautifully, adding depth without overwhelming the meat's natural flavors.",
		difficulty: "Easy",
		time: "15 min prep",
		tips: "Apply glaze in final 20 minutes of roasting. Mix sambal with honey for extra caramelization.",
	},
	{
		id: 2,
		title: "Indonesian-Spiced Fish & Chips",
		british: "Fish and Chips",
		indonesian: "Sambal Mayo + Lime",
		description:
			"Elevate your chippy tea with sambal-infused mayo and a sprinkle of Indonesian spices on perfectly crispy batter.",
		difficulty: "Easy",
		time: "10 min prep",
		tips: "Mix sambal with mayo and lime zest. Dust fish with turmeric and coriander before battering.",
	},
	{
		id: 3,
		title: "Spicy Sambal Shepherd's Pie",
		british: "Shepherd's Pie",
		indonesian: "Sambal Oelek + Lemongrass",
		description:
			"Add Indonesian warmth to this comfort food classic with sambal in the mince and aromatic herbs in the mash.",
		difficulty: "Medium",
		time: "30 min prep",
		tips: "Finely chop lemongrass into mash. Add sambal gradually to lamb mince while cooking.",
	},
	{
		id: 4,
		title: "Sambal-Butter Jacket Potatoes",
		british: "Jacket Potatoes",
		indonesian: "Sambal + British Butter",
		description:
			"Simple yet transformative - sambal-infused butter melting into fluffy jacket potatoes creates an addictive fusion.",
		difficulty: "Easy",
		time: "5 min prep",
		tips: "Mix room-temperature butter with sambal and fresh herbs. Let flavors meld before serving.",
	},
	{
		id: 5,
		title: "Indonesian Bangers & Mash",
		british: "Bangers and Mash",
		indonesian: "Sambal Gravy + Coconut Mash",
		description:
			"Reinvent this pub classic with sambal-spiked onion gravy and coconut milk in creamy mashed potatoes.",
		difficulty: "Medium",
		time: "25 min prep",
		tips: "Add coconut milk gradually to mash. Build sambal flavor slowly in onion gravy base.",
	},
	{
		id: 6,
		title: "Spiced Full English Breakfast",
		british: "Full English Breakfast",
		indonesian: "Sambal Baked Beans + Turmeric Eggs",
		description:
			"Wake up your breakfast with sambal-enhanced baked beans and golden turmeric-spiced scrambled eggs.",
		difficulty: "Easy",
		time: "20 min prep",
		tips: "Add sambal to beans during final heating. Whisk turmeric into eggs before scrambling.",
	},
	{
		id: 7,
		title: "Sambal Steak & Kidney Pie",
		british: "Steak and Kidney Pie",
		indonesian: "Aromatic Sambal + Star Anise",
		description:
			"Elevate this hearty classic with Indonesian aromatics that complement the rich filling without masking tradition.",
		difficulty: "Hard",
		time: "45 min prep",
		tips: "Use mild sambal in filling. Add star anise to cooking liquid for authentic Indonesian depth.",
	},
	{
		id: 8,
		title: "Indonesian-Style Ploughman's Lunch",
		british: "Ploughman's Lunch",
		indonesian: "Sambal Chutney + Spiced Cheese",
		description:
			"Transform this pub favorite with sambal-based chutneys and Indonesian-spiced cheese selections.",
		difficulty: "Easy",
		time: "15 min prep",
		tips: "Make sambal chutney with apple and onion. Choose aged cheeses that pair well with spice.",
	},
];

export default function SambalBritishClassicsPage() {
	return (
		<>
			{/* Structured Data */}
			<ArticleSchema
				headline='Transform British Classics with Indonesian Sambal | 8 Creative Fusion Ideas'
				description='Discover how to revolutionize beloved British dishes with authentic Indonesian sambal, creating exciting fusion recipes that respect both culinary traditions'
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
				url='https://spiceislandindonesia.com/blog/sambal-british-classics'
				datePublished='2024-02-05'
				dateModified='2025-01-08'
				image='/images/blog/sambal-british-fusion.webp'
				wordCount={3400}
				keywords={[
					"sambal British fusion",
					"Indonesian sambal UK recipes",
					"British Indonesian cooking",
					"sambal transformation recipes",
				]}
			/>
			<FAQSchema
				faqs={faqData}
				pageTitle='Transform British Classics with Indonesian Sambal - FAQ'
			/>

			<article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Article Header */}
				<header className='text-center mb-12'>
					<div className='flex items-center justify-center gap-2 text-burgundy-600 mb-4'>
						<Crown className='w-6 h-6' />
						<span className='text-sm font-semibold tracking-wide uppercase'>
							Fusion Cooking
						</span>
						<Flame className='w-6 h-6' />
					</div>

					<h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
						Transform British Classics with Indonesian Sambal
					</h1>

					<p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed'>
						Revolutionize your favourite British dishes with
						authentic Indonesian sambal. From Sunday roasts to
						fish and chips, discover 8 creative fusion ideas
						that bridge two culinary cultures beautifully.
					</p>

					<div className='flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8'>
						<div className='flex items-center gap-2'>
							<Clock className='w-4 h-4' />
							<span>12 min read</span>
						</div>
						<div className='flex items-center gap-2'>
							<Users className='w-4 h-4' />
							<span>By Chef Yossie</span>
						</div>
						<div className='flex items-center gap-2'>
							<ChefHat className='w-4 h-4' />
							<span>Fusion Recipes</span>
						</div>
					</div>
				</header>

				{/* Hero Image */}
				<div className='relative mb-12 rounded-lg overflow-hidden shadow-2xl'>
					<Image
						src='/images/blog/sambal-british-fusion.webp'
						alt='Beautiful spread of British classic dishes transformed with Indonesian sambal showing creative fusion cooking'
						width={1200}
						height={600}
						className='w-full h-auto object-cover'
						priority
					/>
				</div>

				{/* Introduction */}
				<section className='prose prose-lg max-w-none mb-12'>
					<div className='bg-gradient-to-br from-burgundy-50 to-red-50 border-l-4 border-burgundy-400 p-8 mb-12 rounded-r-lg'>
						<div className='flex items-start gap-4'>
							<ChefHat className='w-8 h-8 text-burgundy-600 mt-1 flex-shrink-0' />
							<div>
								<h3 className='text-xl font-bold text-burgundy-900 mb-4'>
									Chef's Fusion Philosophy
								</h3>
								<p className='text-burgundy-800 leading-relaxed mb-4'>
									"The best fusion cooking respects
									both culinary traditions while
									creating something new and
									exciting. When I combine Indonesian
									sambal with British classics, I'm
									not trying to replace traditional
									flavors - I'm enhancing them with
									Indonesian depth and complexity."
								</p>
								<p className='text-burgundy-800 leading-relaxed'>
									"These recipes have been tested in
									British kitchens and refined based
									on feedback from families who
									wanted to explore Indonesian
									flavors without abandoning their
									food heritage."
								</p>
							</div>
						</div>
					</div>

					<p className='text-lg leading-relaxed text-gray-700 mb-6'>
						British cuisine and Indonesian cuisine might seem
						worlds apart, but they share surprising common
						ground: both traditions emphasize comfort,
						community, and making the most of available
						ingredients. Indonesian sambal, with its complex
						layers of heat, sweetness, and aromatics, can
						transform familiar British dishes into exciting
						culinary adventures.
					</p>

					<p className='text-lg leading-relaxed text-gray-700 mb-8'>
						The key to successful fusion cooking lies in
						understanding the role each ingredient plays in
						the original dish, then thoughtfully introducing
						complementary Indonesian elements that enhance
						rather than overwhelm. These recipes have been
						developed specifically for British home cooks who
						want to explore Indonesian flavors while honoring
						their culinary heritage.
					</p>
				</section>

				{/* Fusion Principles */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						The Art of Respectful Fusion
					</h2>

					<div className='grid md:grid-cols-3 gap-6 mb-8'>
						<div className='bg-white border border-gray-200 rounded-lg p-6 shadow-lg text-center'>
							<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Star className='w-8 h-8 text-blue-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-3'>
								Enhance, Don't Replace
							</h3>
							<p className='text-gray-600 text-sm'>
								Indonesian elements should complement
								existing flavors, adding depth and
								complexity without overpowering
								traditional tastes.
							</p>
						</div>

						<div className='bg-white border border-gray-200 rounded-lg p-6 shadow-lg text-center'>
							<div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Utensils className='w-8 h-8 text-green-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-3'>
								Start Small
							</h3>
							<p className='text-gray-600 text-sm'>
								Begin with small amounts of sambal and
								Indonesian spices, building flavor
								gradually to avoid overwhelming palates.
							</p>
						</div>

						<div className='bg-white border border-gray-200 rounded-lg p-6 shadow-lg text-center'>
							<div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Crown className='w-8 h-8 text-purple-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-3'>
								Respect Both Traditions
							</h3>
							<p className='text-gray-600 text-sm'>
								Honor the cultural significance of both
								British and Indonesian culinary
								traditions in every fusion creation.
							</p>
						</div>
					</div>
				</section>

				{/* Fusion Recipes */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						8 Creative British-Indonesian Fusion Ideas
					</h2>

					<div className='space-y-8'>
						{fusionRecipes.map((recipe) => (
							<div
								key={recipe.id}
								className='bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'
							>
								<div className='p-8'>
									<div className='flex items-start justify-between mb-4'>
										<div className='flex-1'>
											<h3 className='text-2xl font-bold text-gray-900 mb-2'>
												{recipe.title}
											</h3>
											<div className='flex items-center gap-4 text-sm text-gray-600 mb-4'>
												<span className='bg-blue-100 text-blue-700 px-2 py-1 rounded-full'>
													{
														recipe.difficulty
													}
												</span>
												<span className='flex items-center gap-1'>
													<Clock className='w-4 h-4' />
													{recipe.time}
												</span>
											</div>
										</div>
									</div>

									<div className='grid md:grid-cols-2 gap-6 mb-6'>
										<div>
											<h4 className='font-semibold text-gray-900 mb-2 flex items-center gap-2'>
												<Crown className='w-4 h-4 text-blue-600' />
												British Classic
											</h4>
											<p className='text-gray-700 bg-blue-50 p-3 rounded'>
												{recipe.british}
											</p>
										</div>
										<div>
											<h4 className='font-semibold text-gray-900 mb-2 flex items-center gap-2'>
												<Flame className='w-4 h-4 text-red-600' />
												Indonesian Elements
											</h4>
											<p className='text-gray-700 bg-red-50 p-3 rounded'>
												{recipe.indonesian}
											</p>
										</div>
									</div>

									<p className='text-gray-700 leading-relaxed mb-4'>
										{recipe.description}
									</p>

									<div className='bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r'>
										<h5 className='font-semibold text-amber-900 mb-1'>
											Chef's Tips:
										</h5>
										<p className='text-amber-800 text-sm'>
											{recipe.tips}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Ingredient Pairing Guide */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Sambal & British Food Pairing Guide
					</h2>

					<div className='bg-white rounded-lg border border-gray-200 p-8 shadow-lg'>
						<div className='grid md:grid-cols-2 gap-8'>
							<div>
								<h3 className='text-xl font-semibold text-gray-900 mb-4'>
									Perfect Pairings
								</h3>
								<div className='space-y-3'>
									<div className='flex justify-between items-center py-2 border-b border-gray-100'>
										<span className='font-medium text-gray-900'>
											Roast Beef
										</span>
										<span className='text-sm text-gray-600'>
											Sambal Bali + Horseradish
										</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-gray-100'>
										<span className='font-medium text-gray-900'>
											Fish & Chips
										</span>
										<span className='text-sm text-gray-600'>
											Sambal Mayo + Lime
										</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-gray-100'>
										<span className='font-medium text-gray-900'>
											Bangers & Mash
										</span>
										<span className='text-sm text-gray-600'>
											Sambal Gravy + Coconut
										</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-gray-100'>
										<span className='font-medium text-gray-900'>
											Cheese Toastie
										</span>
										<span className='text-sm text-gray-600'>
											Mild Sambal + Chutney
										</span>
									</div>
								</div>
							</div>

							<div>
								<h3 className='text-xl font-semibold text-gray-900 mb-4'>
									Approach with Care
								</h3>
								<div className='space-y-3'>
									<div className='flex justify-between items-center py-2 border-b border-gray-100'>
										<span className='font-medium text-gray-900'>
											Yorkshire Pudding
										</span>
										<span className='text-sm text-gray-600'>
											Very light touch only
										</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-gray-100'>
										<span className='font-medium text-gray-900'>
											Victoria Sponge
										</span>
										<span className='text-sm text-gray-600'>
											Consider alternatives
										</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-gray-100'>
										<span className='font-medium text-gray-900'>
											Delicate Fish
										</span>
										<span className='text-sm text-gray-600'>
											Minimal sambal, focus on
											aromatics
										</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-gray-100'>
										<span className='font-medium text-gray-900'>
											Traditional Tea
										</span>
										<span className='text-sm text-gray-600'>
											Respect the ritual
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Getting Started Tips */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Getting Your Family On Board
					</h2>

					<div className='bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 border border-green-200'>
						<div className='grid md:grid-cols-2 gap-8'>
							<div>
								<h3 className='text-lg font-semibold text-green-800 mb-4'>
									Start Small Strategy
								</h3>
								<ul className='space-y-2 text-green-700'>
									<li>
										• Begin with sambal-mayo for
										fish and chips
									</li>
									<li>
										• Add tiny amounts to familiar
										gravies
									</li>
									<li>
										• Let people add their own
										sambal at the table
									</li>
									<li>
										• Focus on enhancing, not
										changing dishes
									</li>
									<li>
										• Explain the flavors you're
										adding
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-blue-800 mb-4'>
									Building Acceptance
								</h3>
								<ul className='space-y-2 text-blue-700'>
									<li>
										• Share the stories behind
										Indonesian spices
									</li>
									<li>
										• Let family members smell
										spices before cooking
									</li>
									<li>
										• Make it a cultural learning
										experience
									</li>
									<li>
										• Always have mild versions
										available
									</li>
									<li>
										• Celebrate successful fusion
										experiments
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Common Fusion Cooking Questions
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

				{/* Call to Action */}
				<section className='text-center mb-12'>
					<div className='bg-gradient-to-r from-burgundy-600 to-red-600 text-white rounded-lg p-8'>
						<h2 className='text-2xl font-bold mb-4'>
							Ready to Start Your Fusion Journey?
						</h2>
						<p className='text-lg mb-6 opacity-90'>
							Begin experimenting with these fusion ideas
							using authentic Indonesian sambal. Start
							small, build gradually, and discover how
							Indonesian flavors can enhance your favorite
							British dishes.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link
								href='/sample-pack-try-first'
								className='inline-flex items-center justify-center gap-2 bg-white text-burgundy-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
							>
								<Flame className='w-5 h-5' />
								Try Authentic Sambal First
							</Link>
							<Link
								href='/blog/indonesian-cooking-guide-british-kitchens'
								className='inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-burgundy-600 px-6 py-3 rounded-lg font-semibold transition-colors'
							>
								<ArrowRight className='w-5 h-5' />
								Complete Cooking Guide
							</Link>
						</div>
					</div>
				</section>

				{/* Related Articles */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Continue Your Indonesian Cooking Journey
					</h2>

					<div className='grid md:grid-cols-2 gap-6'>
						<Link
							href='/blog/ultimate-guide-indonesian-sambal'
							className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'
						>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								The Ultimate Guide to Indonesian Sambal
							</h3>
							<p className='text-gray-600 text-sm mb-3'>
								Discover the authentic world of
								Indonesian sambal varieties and their
								uses
							</p>
							<div className='text-burgundy-600 text-sm font-medium'>
								Read Article →
							</div>
						</Link>

						<Link
							href='/blog/indonesian-spice-levels-british-palates'
							className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'
						>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								Indonesian Spice Levels for British
								Palates
							</h3>
							<p className='text-gray-600 text-sm mb-3'>
								Learn to navigate Indonesian heat levels
								with confidence
							</p>
							<div className='text-burgundy-600 text-sm font-medium'>
								Read Article →
							</div>
						</Link>
					</div>
				</section>
			</article>
		</>
	);
}
