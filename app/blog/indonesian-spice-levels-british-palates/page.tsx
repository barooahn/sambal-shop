import { Metadata } from "next";
const excerpt =
	"Navigate Indonesian heat levels safely. Learn to build spice tolerance, adjust traditional recipes for British tastes, and discover complex flavors behind the fire.";

import Image from "next/image";
import Link from "next/link";
import {
	Clock,
	Users,
	Flame,
	Thermometer,
	AlertTriangle,
	Lightbulb,
	ArrowRight,
} from "lucide-react";
import FAQSchema from "@/components/seo/FAQSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";

export const metadata: Metadata = {
	title: "Indonesian Spice Levels for British Palates | Beginner's Guide | Spice Island Indonesia",
	description: excerpt,
	keywords:
		"Indonesian spice levels UK, sambal heat scale, British spice tolerance, Indonesian cooking beginners, spicy food UK, authentic Indonesian mild recipes, Chef Yossie spice guide",
	openGraph: {
		title: "Indonesian Spice Levels for British Palates | Beginner's Guide",
		description:
			"Master Indonesian heat levels with Chef Yossie's beginner-friendly guide for British kitchens",
		type: "article",
		images: [
			{
				url: "/images/blog/spice-levels-guide.webp",
				width: 1200,
				height: 630,
				alt: "Indonesian chili heat scale comparison for British palates",
			},
		],
	},
	alternates: {
		canonical:
			"https://www.spiceislandindonesia.com/blog/indonesian-spice-levels-british-palates",
	},
};

const faqData = [
	{
		question:
			"How hot is Indonesian sambal compared to British hot sauce?",
		answer: "Authentic sambal oelek ranges from 15,000-30,000 Scoville units, making it 5-10 times hotter than typical British hot sauce (1,000-3,000 SHU). However, you can easily adjust the heat by using smaller amounts or choosing milder sambal varieties like Sambal Bali.",
	},
	{
		question: "Can I build up tolerance to Indonesian spice levels?",
		answer: "Absolutely! Start with tiny amounts (1/4 teaspoon) mixed into familiar dishes. Increase gradually over 2-3 weeks. Your palate will adapt, and you'll begin to appreciate the complex flavors behind the heat. Many Brits discover they love authentic Indonesian spice levels after gradual introduction.",
	},
	{
		question:
			"What's the mildest way to try authentic Indonesian flavors?",
		answer: "Start with Sambal Bali (aromatic and milder) or use just a tiny amount of sambal oelek mixed with coconut milk or yogurt. You can also try our sample pack to test your tolerance before committing to full-size jars.",
	},
	{
		question: "How do I tone down an Indonesian recipe that's too spicy?",
		answer: "Add coconut milk, yogurt, or sugar to reduce heat. Include more vegetables or rice to dilute spice levels. You can also reduce the sambal quantity by half and gradually increase in future cooking sessions as your tolerance builds.",
	},
];

export default function IndonesianSpiceLevelsPage() {
	return (
		<>
			{/* Structured Data */}
			<ArticleSchema
				headline="Indonesian Spice Levels for British Palates | Complete Beginner's Guide"
				description="Learn to navigate Indonesian heat levels safely with Chef Yossie's comprehensive guide for British cooks"
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
				url='https://spiceislandindonesia.com/blog/indonesian-spice-levels-british-palates'
				datePublished='2025-01-08'
				dateModified='2025-01-08'
				image='/images/blog/spice-levels-guide.webp'
				wordCount={2400}
				keywords={[
					"Indonesian spice levels",
					"British spice tolerance",
					"sambal heat scale",
					"spicy food beginners",
				]}
			/>
			<FAQSchema
				faqs={faqData}
				pageTitle='Indonesian Spice Levels for British Palates - FAQ'
			/>

			<article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Navigation */}
				<nav className='mb-8'>
					<div className='flex items-center gap-2 text-sm text-gray-600'>
						<Link
							href='/blog/indonesian-cooking-guide-british-kitchens'
							className='hover:text-burgundy-600'
						>
							Indonesian Cooking Guide
						</Link>
						<span>→</span>
						<span className='text-burgundy-600 font-medium'>
							Part 1: Spice Levels
						</span>
					</div>
				</nav>

				{/* Article Header */}
				<header className='text-center mb-12'>
					<div className='flex items-center justify-center gap-2 text-burgundy-600 mb-4'>
						<div className='bg-burgundy-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
							Part 1 of 5
						</div>
						<Flame className='w-5 h-5' />
						<span className='text-sm font-semibold tracking-wide uppercase'>
							Beginner's Guide
						</span>
					</div>

					<h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
						Understanding Indonesian Spice Levels for British
						Palates
					</h1>

					<p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed'>
						Navigate the heat of authentic Indonesian cuisine
						with confidence. Learn to build spice tolerance,
						adjust traditional recipes, and discover the
						complex flavors behind the fire.
					</p>

					<div className='flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8'>
						<div className='flex items-center gap-2'>
							<Clock className='w-4 h-4' />
							<span>8 min read</span>
						</div>
						<div className='flex items-center gap-2'>
							<Users className='w-4 h-4' />
							<span>By Chef Yossie</span>
						</div>
						<div className='flex items-center gap-2'>
							<Thermometer className='w-4 h-4' />
							<span>Beginner Friendly</span>
						</div>
					</div>
				</header>

				{/* Hero Image */}
				<div className='relative mb-12 rounded-lg overflow-hidden shadow-2xl'>
					<Image
						src='/images/blog/spice-levels-guide.webp'
						alt='Visual guide showing Indonesian chili heat scale compared to familiar British spicy foods'
						width={1200}
						height={600}
						className='w-full h-auto object-cover'
						priority
					/>
				</div>

				{/* Introduction */}
				<section className='prose prose-lg max-w-none mb-12'>
					<div className='bg-amber-50 border-l-4 border-amber-400 p-6 mb-8 rounded-r-lg'>
						<div className='flex items-start gap-3'>
							<Lightbulb className='w-6 h-6 text-amber-600 mt-1 flex-shrink-0' />
							<div>
								<h3 className='font-semibold text-amber-900 mb-2'>
									Chef's Insight
								</h3>
								<p className='text-amber-800 leading-relaxed'>
									"The biggest mistake I see British
									home cooks make with Indonesian
									food is either avoiding it
									completely due to fear of heat, or
									jumping in with traditional
									quantities and being overwhelmed.
									The secret is understanding that
									Indonesian 'heat' isn't just about
									burning your mouth - it's about
									layers of flavor that reveal
									themselves as your palate adapts."
								</p>
							</div>
						</div>
					</div>

					<p className='text-lg leading-relaxed text-gray-700 mb-6'>
						When I first started teaching Indonesian cooking
						to British students, I watched many talented home
						cooks shy away from authentic recipes after one
						overly spicy experience. It broke my heart because
						they were missing the incredible complexity that
						makes Indonesian cuisine so special.
					</p>

					<p className='text-lg leading-relaxed text-gray-700 mb-8'>
						The truth is, Indonesian cuisine offers an
						enormous range of heat levels - from gentle,
						aromatic dishes perfect for sensitive palates to
						fiery specialties that challenge even experienced
						chili lovers. Understanding this spectrum is your
						first step toward confidently exploring authentic
						Indonesian flavors.
					</p>
				</section>

				{/* Heat Scale Comparison */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						The Indonesian Heat Scale: A British Perspective
					</h2>

					<div className='bg-white rounded-lg border border-gray-200 p-8 shadow-lg mb-8'>
						<div className='space-y-6'>
							{/* Mild */}
							<div className='flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200'>
								<div className='flex-shrink-0'>
									<div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
										<span className='text-green-700 font-bold'>
											1-2
										</span>
									</div>
								</div>
								<div className='flex-1'>
									<h3 className='text-lg font-semibold text-green-800 mb-1'>
										Gentle & Aromatic
									</h3>
									<p className='text-green-700 mb-2'>
										Perfect for British beginners.
										Comparable to mild salsa or HP
										Sauce heat.
									</p>
									<div className='text-sm text-green-600'>
										<strong>Examples:</strong>{" "}
										Sambal Bali (aromatic),
										Rendang (mild), Coconut curry
										bases
									</div>
								</div>
								<div className='text-xs text-green-600 font-medium'>
									0-1,000 SHU
								</div>
							</div>

							{/* Medium */}
							<div className='flex items-center gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200'>
								<div className='flex-shrink-0'>
									<div className='w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center'>
										<span className='text-yellow-700 font-bold'>
											3-4
										</span>
									</div>
								</div>
								<div className='flex-1'>
									<h3 className='text-lg font-semibold text-yellow-800 mb-1'>
										Warming & Flavorful
									</h3>
									<p className='text-yellow-700 mb-2'>
										Noticeable heat but
										manageable. Like jalapeño or
										Tabasco level.
									</p>
									<div className='text-sm text-yellow-600'>
										<strong>Examples:</strong>{" "}
										Gado-gado dressing, Mild nasi
										goreng, Soto soup
									</div>
								</div>
								<div className='text-xs text-yellow-600 font-medium'>
									1,000-5,000 SHU
								</div>
							</div>

							{/* Hot */}
							<div className='flex items-center gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200'>
								<div className='flex-shrink-0'>
									<div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center'>
										<span className='text-orange-700 font-bold'>
											5-6
										</span>
									</div>
								</div>
								<div className='flex-1'>
									<h3 className='text-lg font-semibold text-orange-800 mb-1'>
										Seriously Spicy
									</h3>
									<p className='text-orange-700 mb-2'>
										Challenging for most Brits.
										Similar to fresh habanero
										pepper heat.
									</p>
									<div className='text-sm text-orange-600'>
										<strong>Examples:</strong>{" "}
										Authentic sambal oelek,
										Traditional ayam penyet,
										Padang curry
									</div>
								</div>
								<div className='text-xs text-orange-600 font-medium'>
									5,000-25,000 SHU
								</div>
							</div>

							{/* Very Hot */}
							<div className='flex items-center gap-4 p-4 bg-red-50 rounded-lg border border-red-200'>
								<div className='flex-shrink-0'>
									<div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center'>
										<span className='text-red-700 font-bold'>
											7-8
										</span>
									</div>
								</div>
								<div className='flex-1'>
									<h3 className='text-lg font-semibold text-red-800 mb-1'>
										Fiery & Intense
									</h3>
									<p className='text-red-700 mb-2'>
										Only for serious chili lovers.
										Hotter than most British
										palates prefer.
									</p>
									<div className='text-sm text-red-600'>
										<strong>Examples:</strong>{" "}
										Sambal terasi, Raw bird's eye
										chili sambal,
										Competition-level spicy
									</div>
								</div>
								<div className='text-xs text-red-600 font-medium'>
									25,000+ SHU
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Building Tolerance */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Building Your Spice Tolerance: A 3-Week Plan
					</h2>

					<div className='bg-gradient-to-br from-burgundy-50 to-red-50 rounded-lg p-8 mb-8'>
						<h3 className='text-xl font-semibold text-burgundy-900 mb-6'>
							Chef Yossie's Gradual Introduction Method
						</h3>

						<div className='space-y-6'>
							{/* Week 1 */}
							<div className='border-l-4 border-burgundy-400 pl-6'>
								<h4 className='text-lg font-semibold text-burgundy-800 mb-2'>
									Week 1: Foundation Building
								</h4>
								<p className='text-burgundy-700 mb-3'>
									Start with tiny amounts mixed into
									familiar dishes. Your goal is to
									identify the flavor, not feel the
									burn.
								</p>
								<div className='space-y-2 text-sm text-burgundy-600'>
									<div>
										• <strong>Day 1-2:</strong>{" "}
										1/8 teaspoon sambal mixed into
										scrambled eggs
									</div>
									<div>
										• <strong>Day 3-4:</strong>{" "}
										1/4 teaspoon in tomato soup or
										pasta sauce
									</div>
									<div>
										• <strong>Day 5-7:</strong>{" "}
										Small amount in sandwich
										spreads or salad dressing
									</div>
								</div>
							</div>

							{/* Week 2 */}
							<div className='border-l-4 border-orange-400 pl-6'>
								<h4 className='text-lg font-semibold text-orange-800 mb-2'>
									Week 2: Flavor Recognition
								</h4>
								<p className='text-orange-700 mb-3'>
									Increase quantity slightly and try
									sambal in different contexts.
									Notice how it enhances rather than
									overwhelms.
								</p>
								<div className='space-y-2 text-sm text-orange-600'>
									<div>
										• <strong>Day 8-10:</strong>{" "}
										1/2 teaspoon in stir-fries or
										rice dishes
									</div>
									<div>
										• <strong>Day 11-12:</strong>{" "}
										Mix with mayonnaise for fish
										and chips
									</div>
									<div>
										• <strong>Day 13-14:</strong>{" "}
										Try in simple
										Indonesian-inspired recipes
									</div>
								</div>
							</div>

							{/* Week 3 */}
							<div className='border-l-4 border-red-400 pl-6'>
								<h4 className='text-lg font-semibold text-red-800 mb-2'>
									Week 3: Confident Cooking
								</h4>
								<p className='text-red-700 mb-3'>
									Begin using authentic recipe
									quantities. You should now
									appreciate the complex flavors
									behind the heat.
								</p>
								<div className='space-y-2 text-sm text-red-600'>
									<div>
										• <strong>Day 15-17:</strong>{" "}
										Full teaspoon in Indonesian
										curry recipes
									</div>
									<div>
										• <strong>Day 18-19:</strong>{" "}
										Try different sambal varieties
									</div>
									<div>
										• <strong>Day 20-21:</strong>{" "}
										Cook a complete Indonesian
										meal
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Recipe Modification Tips */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Toning Down Traditional Recipes
					</h2>

					<div className='grid md:grid-cols-2 gap-8 mb-8'>
						<div className='bg-white border border-gray-200 rounded-lg p-6 shadow-lg'>
							<h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
								<AlertTriangle className='w-6 h-6 text-orange-500' />
								Heat Reduction Techniques
							</h3>
							<div className='space-y-3 text-gray-700'>
								<div>
									<strong>
										Coconut Milk Method:
									</strong>{" "}
									Add extra coconut milk or cream to
									dilute spice while maintaining
									richness
								</div>
								<div>
									<strong>Sugar Balance:</strong>{" "}
									Small amount of palm sugar or honey
									counters heat without changing
									flavor profile
								</div>
								<div>
									<strong>Dairy Addition:</strong>{" "}
									Yogurt or sour cream can temper
									heat in curry dishes
								</div>
								<div>
									<strong>Vegetable Buffer:</strong>{" "}
									Extra vegetables absorb spice and
									make dishes more British-friendly
								</div>
							</div>
						</div>

						<div className='bg-white border border-gray-200 rounded-lg p-6 shadow-lg'>
							<h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
								<Lightbulb className='w-6 h-6 text-blue-500' />
								Flavor Preservation Tips
							</h3>
							<div className='space-y-3 text-gray-700'>
								<div>
									<strong>
										Maintain Aromatics:
									</strong>{" "}
									Keep lemongrass, galangal, and
									kaffir lime even when reducing
									chili
								</div>
								<div>
									<strong>Cooking Time:</strong>{" "}
									Longer cooking mellows heat while
									developing complex flavors
								</div>
								<div>
									<strong>Oil Infusion:</strong> Cook
									sambal in oil first to distribute
									heat more evenly
								</div>
								<div>
									<strong>Side Serving:</strong>{" "}
									Serve extra sambal on the side for
									heat-lovers to add
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* British-Friendly Indonesian Dishes */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Perfect Starter Dishes for British Palates
					</h2>

					<div className='space-y-6'>
						<div className='bg-white border border-gray-200 rounded-lg p-6 shadow-lg'>
							<h3 className='text-xl font-semibold text-burgundy-900 mb-3'>
								Coconut Rice with Mild Rendang
							</h3>
							<p className='text-gray-700 mb-3'>
								A gentle introduction to Indonesian
								flavors. The coconut rice provides a
								cooling base while the rendang offers
								complex spices without overwhelming
								heat.
							</p>
							<div className='flex flex-wrap gap-2'>
								<span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm'>
									Heat Level: 1-2
								</span>
								<span className='bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm'>
									Cook Time: 45 mins
								</span>
								<span className='bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm'>
									Family Friendly
								</span>
							</div>
						</div>

						<div className='bg-white border border-gray-200 rounded-lg p-6 shadow-lg'>
							<h3 className='text-xl font-semibold text-burgundy-900 mb-3'>
								Gado-Gado with Mild Peanut Sauce
							</h3>
							<p className='text-gray-700 mb-3'>
								Indonesian salad with vegetables and
								mild peanut dressing. Perfect for
								introducing Indonesian flavors without
								any intimidating heat levels.
							</p>
							<div className='flex flex-wrap gap-2'>
								<span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm'>
									Heat Level: 1
								</span>
								<span className='bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm'>
									Prep Time: 20 mins
								</span>
								<span className='bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm'>
									Healthy
								</span>
							</div>
						</div>

						<div className='bg-white border border-gray-200 rounded-lg p-6 shadow-lg'>
							<h3 className='text-xl font-semibold text-burgundy-900 mb-3'>
								Indonesian Chicken Soup (Soto)
							</h3>
							<p className='text-gray-700 mb-3'>
								Comforting soup with familiar
								ingredients but exciting Indonesian
								aromatics. Perfect comfort food with
								just a hint of warmth.
							</p>
							<div className='flex flex-wrap gap-2'>
								<span className='bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm'>
									Heat Level: 2-3
								</span>
								<span className='bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm'>
									Cook Time: 30 mins
								</span>
								<span className='bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm'>
									Comfort Food
								</span>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Common Questions About Indonesian Spice Levels
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

				{/* Next Steps */}
				<section className='mb-12'>
					<div className='bg-gradient-to-r from-burgundy-600 to-red-600 text-white rounded-lg p-8'>
						<h2 className='text-2xl font-bold mb-4'>
							Ready for the Next Step?
						</h2>
						<p className='text-lg mb-6 opacity-90'>
							Now that you understand Indonesian heat
							levels, it's time to learn where to find the
							ingredients you'll need in the UK.
						</p>
						<div className='flex flex-col sm:flex-row gap-4'>
							<Link
								href='/blog/indonesian-ingredients-uk-shopping-guide'
								className='inline-flex items-center justify-center gap-2 bg-white text-burgundy-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
							>
								<ArrowRight className='w-5 h-5' />
								Part 2: UK Shopping Guide
							</Link>
							<Link
								href='/sample-pack-try-first'
								className='inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-burgundy-600 px-6 py-3 rounded-lg font-semibold transition-colors'
							>
								<Flame className='w-5 h-5' />
								Try Our Sample Pack
							</Link>
						</div>
					</div>
				</section>
			</article>
		</>
	);
}
