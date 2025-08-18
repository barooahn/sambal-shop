import { Metadata } from "next";
const excerpt =
	"A professional chef's honest comparison of Indonesia's ancient sambal tradition against Britain's beloved HP Sauce. Discover why sambal is quietly revolutionizing British kitchens.";

import Image from "next/image";
import Link from "next/link";
import {
	Clock,
	Users,
	Star,
	Flame,
	Heart,
	Award,
	ChefHat,
	Zap,
} from "lucide-react";
import ComparisonTable from "@/components/seo/ComparisonTable";
import StructuredData from "@/components/seo/StructuredData";
import FAQSchema from "@/components/seo/FAQSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";

export const metadata: Metadata = {
	title: "Sambal vs HP Sauce: The Ultimate British Condiment Showdown | Spice Island Indonesia",
	description: excerpt,
	keywords:
		"sambal vs HP sauce, best condiment UK, HP sauce alternative, Indonesian condiment UK, spicy sauce comparison, authentic sambal UK, British condiment showdown, Chef Yossie sambal, healthy condiment UK, professional chef condiment",
	openGraph: {
		title: "Sambal vs HP Sauce: The Ultimate British Condiment Showdown",
		description:
			"Professional chef reveals why Indonesian sambal is transforming British kitchens. Comprehensive comparison of flavor, health benefits & versatility.",
		type: "article",
		images: [
			{
				url: "/images/blog/sambal-vs-hp-sauce-comparison.webp",
				width: 1200,
				height: 630,
				alt: "Side by side comparison of Indonesian sambal and HP sauce bottles",
			},
		],
	},
	alternates: {
		canonical: "https://spiceislandindonesia.com/blog/sambal-vs-hp-sauce",
	},
};

const faqData = [
	{
		question: "Is sambal healthier than HP Sauce?",
		answer: "Yes, authentic Indonesian sambal is significantly healthier than HP Sauce. Sambal contains no added sugar, artificial preservatives, or colors - just fresh chilies, salt, and vinegar. HP Sauce contains high fructose corn syrup, artificial flavors, and preservatives. Sambal also provides capsaicin which boosts metabolism and has anti-inflammatory properties.",
	},
	{
		question: "Can I use sambal instead of HP Sauce on my breakfast?",
		answer: "Absolutely! Sambal works brilliantly on British breakfast foods. Try a small amount (sambal is much hotter than HP Sauce) on your scrambled eggs, bacon, or black pudding. Start with half a teaspoon - sambal packs 3-5 times more heat than HP Sauce but delivers incredible flavor complexity.",
	},
	{
		question: "Where can I buy authentic Indonesian sambal in the UK?",
		answer: "Spice Island Indonesia delivers authentic sambal throughout the UK. Made by Chef Yossie using traditional Bandung recipes, our sambal contains no artificial ingredients unlike mass-produced alternatives in UK supermarkets. We offer free delivery to London, Manchester, Birmingham and nationwide on orders over £20.",
	},
	{
		question: "How spicy is Indonesian sambal compared to HP Sauce?",
		answer: "Indonesian sambal is significantly hotter than HP Sauce. While HP Sauce has minimal heat, authentic sambal oelek ranges from 15,000-30,000 Scoville units - similar to jalapeño or serrano peppers. The heat builds gradually and has a clean chili flavor without sweetness.",
	},
	{
		question:
			"Can sambal replace HP Sauce in traditional British recipes?",
		answer: "Yes, but with modifications due to the heat difference. Use 1/4 the amount of sambal compared to HP Sauce initially. Sambal works excellently in shepherd's pie, with roast dinners, and in marinades. The complex flavor actually enhances traditional British dishes without overpowering them.",
	},
];

export default function SambalVsHPSaucePage() {
	return (
		<>
			{/* Structured Data */}
			<ArticleSchema
				headline='Sambal vs HP Sauce: The Ultimate British Condiment Showdown'
				description='Professional chef comparison reveals why Indonesian sambal is revolutionizing British kitchens with authentic flavor and health benefits'
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
				url='https://spiceislandindonesia.com/blog/sambal-vs-hp-sauce'
				datePublished='2025-01-08'
				dateModified='2025-01-08'
				image='/images/blog/sambal-vs-hp-sauce-comparison.webp'
				wordCount={2800}
				keywords={[
					"sambal vs HP sauce",
					"Indonesian condiment UK",
					"British condiment comparison",
					"Chef Yossie",
					"authentic sambal UK",
				]}
			/>
			<FAQSchema
				faqs={faqData}
				pageTitle='Sambal vs HP Sauce - Frequently Asked Questions'
			/>

			<article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Article Header */}
				<header className='text-center mb-12'>
					<div className='flex items-center justify-center gap-2 text-burgundy-600 mb-4'>
						<ChefHat className='w-5 h-5' />
						<span className='text-sm font-semibold tracking-wide uppercase'>
							Professional Chef Analysis
						</span>
					</div>

					<h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
						Sambal vs HP Sauce: The Ultimate British Condiment
						Showdown
					</h1>

					<p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed'>
						A professional chef's honest comparison of
						Indonesia's ancient sambal tradition against
						Britain's beloved HP Sauce. Discover why sambal is
						quietly revolutionizing British kitchens.
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
							<Star className='w-4 h-4 text-amber-500' />
							<span>Expert Review</span>
						</div>
					</div>
				</header>

				{/* Hero Image */}
				<div className='relative mb-12 rounded-lg overflow-hidden shadow-2xl'>
					<Image
						src='/images/blog/sambal-vs-hp-sauce-hero.webp'
						alt='Professional chef comparison of Indonesian sambal and HP sauce in British kitchen setting'
						width={1200}
						height={600}
						className='w-full h-auto object-cover'
						priority
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
				</div>

				{/* Introduction */}
				<section className='prose prose-lg max-w-none mb-12'>
					<p className='text-lg leading-relaxed text-gray-700 mb-6'>
						In the pantheon of British condiments, few hold
						the iconic status of HP Sauce. That distinctive
						brown bottle has graced British tables since 1903,
						earning its place in the national culinary
						identity. But there's a quiet revolution happening
						in British kitchens, and it's coming from the
						volcanic islands of Indonesia.
					</p>

					<p className='text-lg leading-relaxed text-gray-700 mb-6'>
						As a professional chef trained in traditional
						Indonesian cooking, I've watched with fascination
						as sambal - Indonesia's ancient chili paste -
						begins to find its way into British homes. Today,
						I want to give you an honest, professional
						comparison between these two remarkable
						condiments.
					</p>

					<div className='bg-amber-50 border-l-4 border-amber-400 p-6 my-8 rounded-r-lg'>
						<div className='flex items-start gap-3'>
							<Award className='w-6 h-6 text-amber-600 mt-1 flex-shrink-0' />
							<div>
								<h3 className='font-semibold text-amber-900 mb-2'>
									Chef's Promise
								</h3>
								<p className='text-amber-800 leading-relaxed'>
									This isn't about replacing your
									beloved HP Sauce - it's about
									understanding why sambal deserves a
									place in your kitchen alongside it.
									Both condiments have earned their
									reputation, but for very different
									reasons.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* The Contenders */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
						The Contenders
					</h2>

					<div className='grid md:grid-cols-2 gap-8 mb-12'>
						{/* HP Sauce */}
						<div className='bg-white rounded-lg border border-gray-200 p-8 shadow-lg'>
							<div className='text-center mb-6'>
								<div className='w-20 h-20 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Heart className='w-10 h-10 text-brown-600' />
								</div>
								<h3 className='text-2xl font-bold text-gray-900 mb-2'>
									HP Sauce
								</h3>
								<p className='text-gray-600'>
									The British Institution
								</p>
							</div>

							<div className='space-y-4'>
								<div className='flex items-center justify-between'>
									<span className='text-gray-600'>
										Heritage:
									</span>
									<span className='font-semibold'>
										Since 1903
									</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-gray-600'>
										Primary Use:
									</span>
									<span className='font-semibold'>
										Breakfast & Roasts
									</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-gray-600'>
										Flavor Profile:
									</span>
									<span className='font-semibold'>
										Sweet & Tangy
									</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-gray-600'>
										Heat Level:
									</span>
									<span className='font-semibold text-green-600'>
										Mild
									</span>
								</div>
							</div>
						</div>

						{/* Sambal */}
						<div className='bg-white rounded-lg border border-red-200 p-8 shadow-lg ring-2 ring-red-100'>
							<div className='text-center mb-6'>
								<div className='w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Flame className='w-10 h-10 text-red-600' />
								</div>
								<h3 className='text-2xl font-bold text-gray-900 mb-2'>
									Indonesian Sambal
								</h3>
								<p className='text-gray-600'>
									The Ancient Art
								</p>
							</div>

							<div className='space-y-4'>
								<div className='flex items-center justify-between'>
									<span className='text-gray-600'>
										Heritage:
									</span>
									<span className='font-semibold'>
										800+ Years
									</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-gray-600'>
										Primary Use:
									</span>
									<span className='font-semibold'>
										Everything
									</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-gray-600'>
										Flavor Profile:
									</span>
									<span className='font-semibold'>
										Complex Heat
									</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-gray-600'>
										Heat Level:
									</span>
									<span className='font-semibold text-red-600'>
										Serious
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Head-to-Head Comparison */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
						The Professional Analysis
					</h2>

					<ComparisonTable
						title='Sambal vs HP Sauce: Complete Comparison'
						items={[
							{
								category: "Flavor Complexity",
								sambal: "Multi-layered heat with fruity chili notes, subtle fermentation, clean finish",
								hpSauce: "Sweet-tangy profile with vinegar backbone, molasses sweetness, familiar comfort",
								winner: "sambal",
								explanation:
									"Sambal offers significantly more flavor complexity",
							},
							{
								category: "Heat Level",
								sambal: "15,000-30,000 Scoville units, building heat, clean burn",
								hpSauce: "Minimal heat, focuses on flavor over spice",
								winner: "context",
								explanation:
									"Depends on preference - sambal for heat lovers, HP for mild palates",
							},
							{
								category: "Ingredient Quality",
								sambal: "Fresh chilies, sea salt, rice vinegar - no additives",
								hpSauce: "Tomatoes, dates, vinegar, plus artificial flavors & preservatives",
								winner: "sambal",
								explanation:
									"Sambal uses only natural, whole ingredients",
							},
							{
								category: "Health Benefits",
								sambal: "No sugar, metabolism-boosting capsaicin, antioxidants, probiotics",
								hpSauce: "High sugar content, artificial additives, minimal nutritional value",
								winner: "sambal",
								explanation:
									"Sambal offers significant health advantages",
							},
							{
								category: "Culinary Versatility",
								sambal: "Cooking ingredient, marinade, condiment, flavor base",
								hpSauce: "Primarily table condiment, limited cooking applications",
								winner: "sambal",
								explanation:
									"Sambal functions as both ingredient and condiment",
							},
							{
								category: "Cultural Heritage",
								sambal: "800+ years of Indonesian tradition, regional variations",
								hpSauce: "120+ years of British breakfast culture, national identity",
								winner: "context",
								explanation:
									"Both represent deep cultural significance",
							},
						]}
					/>
				</section>

				{/* Flavor Profile Deep Dive */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Flavor Profile: Where They Truly Differ
					</h2>

					<div className='grid md:grid-cols-2 gap-12'>
						<div className='space-y-6'>
							<h3 className='text-2xl font-semibold text-gray-900 flex items-center gap-3'>
								<Heart className='w-6 h-6 text-brown-600' />
								HP Sauce: The Comfort Classic
							</h3>

							<p className='text-gray-700 leading-relaxed'>
								HP Sauce delivers exactly what British
								palates have loved for over a century:
								predictable, comforting flavor that
								enhances without challenging. The
								sweetness from dates and molasses
								balances the vinegar tang, creating a
								sauce that feels like a warm hug for
								your taste buds.
							</p>

							<div className='bg-brown-50 p-6 rounded-lg'>
								<h4 className='font-semibold text-brown-900 mb-3'>
									Tasting Notes:
								</h4>
								<ul className='space-y-2 text-brown-800'>
									<li>
										• Initial sweetness from dates
										and molasses
									</li>
									<li>
										• Vinegar acidity provides
										brightness
									</li>
									<li>
										• Subtle spice warmth (not
										heat)
									</li>
									<li>
										• Umami depth from tomato
										concentrate
									</li>
									<li>
										• Familiar, nostalgic finish
									</li>
								</ul>
							</div>
						</div>

						<div className='space-y-6'>
							<h3 className='text-2xl font-semibold text-gray-900 flex items-center gap-3'>
								<Flame className='w-6 h-6 text-red-600' />
								Sambal: The Flavor Adventure
							</h3>

							<p className='text-gray-700 leading-relaxed'>
								Authentic sambal is flavor complexity in
								its purest form. Made from fresh chilies
								ground with traditional methods, each
								variety tells the story of its region.
								The heat isn't just heat - it's a
								journey that reveals layers of flavor as
								your palate adapts.
							</p>

							<div className='bg-red-50 p-6 rounded-lg'>
								<h4 className='font-semibold text-red-900 mb-3'>
									Tasting Notes:
								</h4>
								<ul className='space-y-2 text-red-800'>
									<li>
										• Fresh chili brightness with
										fruity undertones
									</li>
									<li>
										• Building heat that reveals
										complexity
									</li>
									<li>
										• Clean, pure flavor without
										masking sweetness
									</li>
									<li>
										• Subtle fermentation adds
										depth
									</li>
									<li>
										• Lingering warmth that
										enhances food
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Health Comparison */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						The Health Verdict
					</h2>

					<div className='bg-green-50 rounded-lg p-8 mb-8'>
						<div className='flex items-start gap-4'>
							<Zap className='w-8 h-8 text-green-600 mt-1 flex-shrink-0' />
							<div>
								<h3 className='text-xl font-semibold text-green-900 mb-4'>
									Why Nutritionists Love Sambal
								</h3>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold text-green-800 mb-2'>
											Sambal Benefits:
										</h4>
										<ul className='space-y-1 text-green-700'>
											<li>
												• Zero added sugar
											</li>
											<li>
												• No artificial
												preservatives
											</li>
											<li>
												•
												Metabolism-boosting
												capsaicin
											</li>
											<li>
												• Natural
												antioxidants
											</li>
											<li>
												• Anti-inflammatory
												properties
											</li>
											<li>
												• Probiotic benefits
												(fermented
												varieties)
											</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold text-red-800 mb-2'>
											HP Sauce Concerns:
										</h4>
										<ul className='space-y-1 text-red-700'>
											<li>
												• High sugar content
											</li>
											<li>
												• Artificial
												flavoring
											</li>
											<li>
												• Chemical
												preservatives
											</li>
											<li>
												• Minimal
												nutritional value
											</li>
											<li>
												• Blood sugar spikes
											</li>
											<li>
												• Processed
												ingredients
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<p className='text-gray-700 leading-relaxed'>
						From a nutritional standpoint, the comparison
						isn't close. While HP Sauce serves its purpose as
						an occasional indulgence, sambal actively
						contributes to your health. The capsaicin in fresh
						chilies has been shown to boost metabolism, reduce
						inflammation, and even support heart health.
					</p>
				</section>

				{/* In British Kitchens */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						How They Perform in British Kitchens
					</h2>

					<div className='space-y-8'>
						<div className='bg-white border border-gray-200 rounded-lg p-8 shadow-lg'>
							<h3 className='text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3'>
								<ChefHat className='w-6 h-6 text-burgundy-600' />
								Traditional British Breakfast
							</h3>

							<div className='grid md:grid-cols-2 gap-8'>
								<div>
									<h4 className='font-semibold text-gray-800 mb-3'>
										With HP Sauce:
									</h4>
									<p className='text-gray-700 mb-4'>
										The classic combination
										everyone knows. HP Sauce's
										sweetness complements the
										richness of bacon and eggs,
										while the tangy finish cuts
										through the fat. It's comfort
										food at its finest.
									</p>
									<div className='text-sm text-gray-600'>
										<strong>Best with:</strong>{" "}
										Black pudding, bacon, fried
										eggs
									</div>
								</div>
								<div>
									<h4 className='font-semibold text-gray-800 mb-3'>
										With Sambal:
									</h4>
									<p className='text-gray-700 mb-4'>
										A revelation for adventurous
										breakfast lovers. Just a small
										amount transforms scrambled
										eggs into something
										extraordinary. The heat wakes
										up your palate and makes
										everything taste more vibrant.
									</p>
									<div className='text-sm text-gray-600'>
										<strong>Best with:</strong>{" "}
										Scrambled eggs, grilled
										tomatoes, mushrooms
									</div>
								</div>
							</div>
						</div>

						<div className='bg-white border border-gray-200 rounded-lg p-8 shadow-lg'>
							<h3 className='text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3'>
								<Award className='w-6 h-6 text-burgundy-600' />
								Sunday Roast
							</h3>

							<div className='grid md:grid-cols-2 gap-8'>
								<div>
									<h4 className='font-semibold text-gray-800 mb-3'>
										Traditional Approach:
									</h4>
									<p className='text-gray-700 mb-4'>
										HP Sauce has been the Sunday
										roast companion for
										generations. Its familiar
										flavor doesn't compete with
										the meat - it simply adds a
										sweet-tangy note that many
										British families consider
										essential.
									</p>
								</div>
								<div>
									<h4 className='font-semibold text-gray-800 mb-3'>
										Modern Innovation:
									</h4>
									<p className='text-gray-700 mb-4'>
										A tiny amount of sambal mixed
										into your gravy creates an
										incredible depth of flavor. Or
										use it as Chef Yossie does -
										mix a small amount into
										horseradish for beef, or
										create a sambal-mint sauce for
										lamb.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Recipe Fusion Section */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						British-Indonesian Fusion: Recipe Ideas
					</h2>

					<div className='grid md:grid-cols-3 gap-8'>
						<div className='bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border border-red-100'>
							<h3 className='text-lg font-semibold text-gray-900 mb-3'>
								Sambal Sunday Roast
							</h3>
							<p className='text-gray-700 text-sm mb-4'>
								Traditional roast beef with a twist -
								add 1 tsp sambal to your gravy for
								incredible depth.
							</p>
							<div className='text-xs text-gray-600'>
								<strong>Technique:</strong> Stir sambal
								into gravy during final 2 minutes of
								cooking
							</div>
						</div>

						<div className='bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-6 border border-amber-100'>
							<h3 className='text-lg font-semibold text-gray-900 mb-3'>
								Fish & Chips Sambal Mayo
							</h3>
							<p className='text-gray-700 text-sm mb-4'>
								Mix ½ tsp sambal with mayonnaise and a
								squeeze of lemon. Game-changing chip
								shop experience.
							</p>
							<div className='text-xs text-gray-600'>
								<strong>Tip:</strong> Start with less
								sambal - you can always add more
							</div>
						</div>

						<div className='bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border border-green-100'>
							<h3 className='text-lg font-semibold text-gray-900 mb-3'>
								British-Indonesian Breakfast
							</h3>
							<p className='text-gray-700 text-sm mb-4'>
								Scrambled eggs with a dash of sambal,
								grilled tomatoes, and toast. Simple
								perfection.
							</p>
							<div className='text-xs text-gray-600'>
								<strong>Method:</strong> Add sambal to
								eggs in final 30 seconds of cooking
							</div>
						</div>
					</div>

					<div className='mt-8 text-center'>
						<Link
							href='/recipes'
							className='inline-flex items-center gap-2 bg-burgundy-600 hover:bg-burgundy-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
						>
							<ChefHat className='w-5 h-5' />
							More Fusion Recipes
						</Link>
					</div>
				</section>

				{/* The Verdict */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
						The Professional Verdict
					</h2>

					<div className='bg-gradient-to-br from-burgundy-50 to-red-50 rounded-lg p-8 border border-burgundy-100'>
						<div className='text-center mb-8'>
							<Award className='w-12 h-12 text-burgundy-600 mx-auto mb-4' />
							<h3 className='text-2xl font-semibold text-gray-900 mb-4'>
								Both Deserve a Place in Your Kitchen
							</h3>
						</div>

						<div className='grid md:grid-cols-2 gap-8 mb-8'>
							<div>
								<h4 className='font-semibold text-gray-900 mb-3'>
									Choose HP Sauce When:
								</h4>
								<ul className='space-y-2 text-gray-700'>
									<li>
										• You want familiar,
										comforting flavor
									</li>
									<li>
										• Cooking for children or
										spice-sensitive guests
									</li>
									<li>
										• Maintaining traditional
										British recipes
									</li>
									<li>
										• You prefer sweet-tangy over
										spicy flavors
									</li>
								</ul>
							</div>
							<div>
								<h4 className='font-semibold text-gray-900 mb-3'>
									Choose Sambal When:
								</h4>
								<ul className='space-y-2 text-gray-700'>
									<li>
										• You want to elevate your
										cooking
									</li>
									<li>
										• Seeking authentic, complex
										flavors
									</li>
									<li>
										• Health-conscious condiment
										choices
									</li>
									<li>
										• Ready for culinary adventure
									</li>
								</ul>
							</div>
						</div>

						<div className='text-center'>
							<p className='text-lg text-gray-700 leading-relaxed'>
								As a professional chef, I believe the
								future of British cuisine lies in
								embracing both tradition and innovation.
								HP Sauce will always have its place in
								British hearts and homes. But sambal?
								Sambal has the power to transform your
								cooking entirely.
							</p>
						</div>
					</div>
				</section>

				{/* Call to Action */}
				<section className='text-center mb-16'>
					<div className='bg-white border border-gray-200 rounded-lg p-8 shadow-lg'>
						<h3 className='text-2xl font-semibold text-gray-900 mb-4'>
							Ready to Experience Authentic Indonesian
							Sambal?
						</h3>
						<p className='text-gray-700 mb-6 max-w-2xl mx-auto'>
							Try Chef Yossie's traditional sambal, made
							using the same techniques perfected in
							Bandung kitchens for generations. Delivered
							fresh throughout the UK.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link
								href='/sample-pack-try-first'
								className='inline-flex items-center justify-center gap-2 bg-burgundy-600 hover:bg-burgundy-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
							>
								<Flame className='w-5 h-5' />
								Try Sample Pack First
							</Link>
							<Link
								href='/sambal-oelek-uk'
								className='inline-flex items-center justify-center gap-2 border border-burgundy-600 text-burgundy-600 hover:bg-burgundy-50 px-6 py-3 rounded-lg font-semibold transition-colors'
							>
								<ChefHat className='w-5 h-5' />
								Shop Sambal Oelek
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
