import type { Metadata } from "next";
const excerpt =
	"Discover the ancient techniques and secret ingredients that make authentic Indonesian sambal so special. From selecting the perfect chilies to the traditional grinding methods passed down through generations.";

import Image from "next/image";
import Link from "next/link";
import {
	Clock,
	Users,
	Star,
	Flame,
	Target,
	CheckCircle,
	AlertTriangle,
	ChefHat,
	Eye,
	Heart,
	Award,
} from "@/components/ui/icons";
import ArticleSchema from "@/components/seo/ArticleSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
	title: "Traditional Sambal Making | Journey Through Spice Islands",
	description: excerpt,
	keywords:
		"traditional sambal making, Indonesian sambal techniques, stone mortar grinding, cobek and ulekan, authentic sambal recipe, traditional Indonesian cooking, spice islands heritage, volcanic stone grinding, sambal preservation methods, Indonesian culinary traditions",
	openGraph: {
		title: "Traditional Sambal Making | Journey Through Spice Islands",
		description:
			"How centuries-old techniques from the Spice Islands shape the flavour and texture of authentic sambal.",
		type: "article",
		images: [
			{
				url: "/images/blog/traditional-sambal-making.webp",
				width: 1200,
				height: 630,
				alt: "Traditional stone mortar with chilies",
			},
		],
	},
	alternates: {
		canonical:
			"https://www.spiceislandindonesia.com/blog/traditional-sambal-making",
	},
};

const faqData = [
	{
		question: "What tools are used for traditional sambal?",
		answer: "A volcanic stone mortar and pestle (ulekan and cobek) are used to achieve the ideal coarse texture and integrate aromatics without over-puréeing.",
	},
	{
		question: "Why is sambal kept simple?",
		answer: "Minimal ingredients preserve the chili’s natural character, texture, and aroma. Simplicity reveals quality.",
	},
	{
		question: "How fine should the grind be?",
		answer: "Aim for a coarse, rustic paste with visible chili flecks. Too smooth and the mouthfeel becomes saucy rather than clingy.",
	},
	{
		question: "Can I use a food processor?",
		answer: "In a pinch, pulse briefly and avoid long blends. A stone mortar breaks cells differently and preserves texture and aroma.",
	},
	{
		question: "How do I control bitterness?",
		answer: "Grind steadily without overheating. Add acidity gradually and taste often. If bitterness creeps in, round with fat (egg, coconut milk) in the dish, not sugar in the sambal.",
	},
	{
		question: "How long does homemade sambal keep?",
		answer: "Refrigerated in a clean jar, 2–4 weeks. Always use a clean spoon and consider a thin layer of neutral oil on top to reduce oxidation.",
	},
];

export default function TraditionalSambalMakingPage() {
	return (
		<>
			{/* Structured Data */}
			<ArticleSchema
				headline='The Art of Traditional Sambal Making: A Journey Through the Spice Islands'
				description='The essential techniques behind authentic sambal — chili selection, grinding, and balancing flavor.'
				author={{
					name: "Chef Yossie & Team",
					type: "Organization",
				}}
				publisher={{
					name: "Spice Island Indonesia",
					type: "Organization",
					logo: {
						url: "https://spiceislandindonesia.com/images/optimized/logo-lg.webp",
						width: 200,
						height: 60,
					},
				}}
				url='https://spiceislandindonesia.com/blog/traditional-sambal-making'
				datePublished='2024-01-15'
				dateModified='2024-01-15'
				image='/images/blog/traditional-sambal-making.webp'
				wordCount={3200}
				keywords={[
					"traditional sambal",
					"stone ground",
					"Indonesian techniques",
					"Spice Islands",
				]}
			/>
			<FAQSchema
				faqs={faqData}
				pageTitle='Traditional Sambal Making - FAQ'
			/>

			<article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Header */}
				<header className='text-center mb-12'>
					<div className='flex items-center justify-center gap-2 text-burgundy-600 mb-4'>
						<ChefHat className='w-5 h-5' />
						<span className='text-sm font-semibold tracking-wide uppercase'>
							Traditional Techniques
						</span>
					</div>

					<h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
						The Art of Traditional Sambal Making: A Journey
						Through the Spice Islands
					</h1>

					<p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed'>
						Discover the ancient techniques and secret ingredients that make authentic Indonesian sambal so special. From selecting the perfect chilies to the traditional grinding methods passed down through generations.
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
							<Star className='w-4 h-4 text-amber-500' />
							<span>Traditional Recipe</span>
						</div>
					</div>
				</header>

				{/* Hero Image */}
				<div className='relative mb-12 rounded-lg overflow-hidden shadow-2xl'>
					<Image
						src='/images/blog/traditional-sambal-making.webp'
						alt='Traditional Indonesian stone mortar and pestle with fresh chilies and aromatics laid out for authentic sambal preparation'
						width={1200}
						height={630}
						className='w-full h-auto object-cover'
						priority
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
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
									"In my grandmother's kitchen in Bandung, the sound of the cobek and ulekan was as familiar as breathing. Every morning, she would grind fresh sambal using techniques passed down through seven generations. Today, I want to share these sacred methods with you – not just the recipe, but the soul of traditional sambal making."
								</p>
								<p className='text-burgundy-800 leading-relaxed'>
									"Remember: sambal isn't just a condiment. It's the heart of Indonesian cuisine, and making it properly connects you to centuries of culinary wisdom."
								</p>
							</div>
						</div>
					</div>

					<p className='text-lg leading-relaxed text-gray-700 mb-6'>
						In the volcanic highlands of Java, in the bustling markets of Sumatra, and across the thousands of islands that make up Indonesia, the rhythmic sound of stone grinding stone has echoed for over eight centuries. This is the sound of sambal being born – not in factories, but in family kitchens where ancient techniques transform simple chilies into complex, soul-stirring condiments.
					</p>

					<p className='text-lg leading-relaxed text-gray-700 mb-8'>
						Traditional sambal making is both art and science, requiring an understanding of ingredient selection, grinding techniques, flavor balancing, and preservation methods that took generations to perfect. Today, we'll explore these time-honored methods and show you how to bring authentic Indonesian sambal traditions into your own kitchen.
					</p>
				</section>

				{/* The Philosophy of Traditional Sambal */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						The Philosophy of Traditional Sambal Making
					</h2>

					<div className='grid md:grid-cols-3 gap-8 mb-12'>
						<div className='bg-white rounded-lg border border-gray-200 p-6 shadow-lg text-center'>
							<div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Heart className='w-8 h-8 text-red-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-3'>
								Simplicity Reveals Quality
							</h3>
							<p className='text-gray-600 text-sm'>
								Traditional sambal uses minimal ingredients – fresh chilies, salt, and aromatics. This simplicity allows the natural character of each ingredient to shine through.
							</p>
						</div>

						<div className='bg-white rounded-lg border border-gray-200 p-6 shadow-lg text-center'>
							<div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Target className='w-8 h-8 text-orange-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-3'>
								Texture Defines Character
							</h3>
							<p className='text-gray-600 text-sm'>
								The coarse, rustic texture achieved through stone grinding creates the perfect mouthfeel – clingy enough to coat food, textured enough to provide interest.
							</p>
						</div>

						<div className='bg-white rounded-lg border border-gray-200 p-6 shadow-lg text-center'>
							<div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Award className='w-8 h-8 text-green-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-3'>
								Balance Over Heat
							</h3>
							<p className='text-gray-600 text-sm'>
								Authentic sambal balances heat with aroma, salt with acidity, creating complex flavors that enhance rather than overwhelm your dishes.
							</p>
						</div>
					</div>
				</section>

				{/* Choosing the Perfect Chilies */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Choosing the Perfect Chilies: Foundation of Great Sambal
					</h2>

					<div className='bg-red-50 border border-red-200 rounded-lg p-8 mb-8'>
						<h3 className='text-xl font-semibold text-red-800 mb-6'>
							What Makes a Chili Perfect for Sambal
						</h3>
						
						<div className='grid md:grid-cols-2 gap-8'>
							<div className='text-red-700'>
								<h4 className='font-semibold mb-3'>Visual Inspection</h4>
								<ul className='space-y-2 text-sm'>
									<li>• <strong>Skin:</strong> Glossy, taut surface without wrinkles or dark spots</li>
									<li>• <strong>Color:</strong> Vibrant, consistent hue appropriate to variety</li>
									<li>• <strong>Shape:</strong> Plump flesh, not shriveled or hollow feeling</li>
									<li>• <strong>Stem:</strong> Fresh, green stem end indicates recent harvest</li>
									<li>• <strong>Size:</strong> Uniform chilies grind more evenly</li>
								</ul>
							</div>
							<div className='text-red-700'>
								<h4 className='font-semibold mb-3'>Aroma and Feel Test</h4>
								<ul className='space-y-2 text-sm'>
									<li>• <strong>Aroma:</strong> Bright, peppery scent when stem is pinched</li>
									<li>• <strong>Firmness:</strong> Should feel solid, not soft or squishy</li>
									<li>• <strong>Weight:</strong> Heavy for size indicates good moisture content</li>
									<li>• <strong>Sound:</strong> Should snap crisply when broken, not bend limply</li>
									<li>• <strong>Interior:</strong> Seeds should be plump and cream-colored</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='bg-amber-50 border border-amber-200 rounded-lg p-6'>
						<h3 className='font-semibold text-amber-900 mb-3'>
							Why Volcanic Soil Matters
						</h3>
						<p className='text-amber-800 leading-relaxed'>
							Chilies grown in Indonesia's volcanic soil develop superior flavor complexity. The mineral-rich earth creates chilies with clean heat rather than harsh burn, and complex aromatic compounds that can't be replicated in other growing conditions. When selecting chilies in the UK, look for those with bright, clear heat and aromatic intensity – signs of quality growing conditions.
						</p>
					</div>
				</section>

				{/* Traditional Tools: Cobek and Ulekan */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Traditional Tools: The Sacred Cobek and Ulekan
					</h2>

					<div className='bg-gray-50 rounded-lg p-8 mb-8'>
						<div className='grid md:grid-cols-2 gap-8 items-center'>
							<div>
								<h3 className='text-xl font-semibold text-gray-900 mb-4'>
									The Volcanic Stone Mortar System
								</h3>
								<p className='text-gray-700 leading-relaxed mb-4'>
									The cobek (mortar) and ulekan (pestle) are carved from volcanic stone, typically from Mount Merapi in Java. This porous volcanic rock has the perfect texture and hardness to break chili cell walls without over-processing, creating the ideal coarse texture that defines authentic sambal.
								</p>
								<div className='bg-blue-50 border border-blue-200 p-4 rounded-lg'>
									<h4 className='font-semibold text-blue-800 mb-2'>Why Stone Matters</h4>
									<p className='text-blue-700 text-sm'>
										Volcanic stone's porous surface grips ingredients, preventing slipping while grinding. The rough texture breaks cell walls gradually, releasing aromatics slowly and preserving volatile compounds that blade grinding destroys.
									</p>
								</div>
							</div>
							<div>
								<div className='bg-white border border-gray-200 rounded-lg p-6'>
									<h4 className='font-semibold text-gray-900 mb-4'>Choosing Your Mortar and Pestle</h4>
									<div className='space-y-3 text-sm text-gray-700'>
										<div className='flex items-start gap-2'>
											<CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
											<span><strong>Size:</strong> 6-8 inch diameter for home use</span>
										</div>
										<div className='flex items-start gap-2'>
											<CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
											<span><strong>Weight:</strong> Heavy enough to stay stable during grinding</span>
										</div>
										<div className='flex items-start gap-2'>
											<CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
											<span><strong>Texture:</strong> Slightly rough interior surface</span>
										</div>
										<div className='flex items-start gap-2'>
											<CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
											<span><strong>Shape:</strong> Deep bowl to contain ingredients</span>
										</div>
										<div className='flex items-start gap-2'>
											<CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
											<span><strong>Base:</strong> Flat bottom for stability</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='bg-orange-50 border border-orange-200 rounded-lg p-6'>
						<h3 className='font-semibold text-orange-900 mb-3'>
							Seasoning Your New Mortar and Pestle
						</h3>
						<div className='grid md:grid-cols-4 gap-4 text-orange-800 text-sm'>
							<div>
								<strong>Step 1:</strong> Rinse with water and scrub with coarse salt to remove stone dust
							</div>
							<div>
								<strong>Step 2:</strong> Grind handful of raw rice until powder is white (removes grit)
							</div>
							<div>
								<strong>Step 3:</strong> Crush 3-4 garlic cloves and let sit 24 hours (seasons stone)
							</div>
							<div>
								<strong>Step 4:</strong> Rinse thoroughly – your mortar is now ready for sambal making
							</div>
						</div>
					</div>
				</section>

				{/* The Traditional Grinding Technique */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						The Traditional Grinding Technique: Creating Perfect Texture
					</h2>

					<div className='bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-8 border border-red-200 mb-8'>
						<h3 className='text-xl font-semibold text-red-800 mb-6'>
							Step-by-Step Traditional Method
						</h3>

						<div className='grid gap-6'>
							<div className='bg-white rounded-lg p-6 border border-red-100'>
								<div className='flex items-center gap-3 mb-3'>
									<div className='w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm'>1</div>
									<h4 className='font-semibold text-gray-900'>Prepare Your Workspace</h4>
								</div>
								<p className='text-gray-700 text-sm mb-3'>
									Place mortar on stable surface, preferably at hip height. Wrap base in damp towel to prevent slipping. Have all ingredients prepped and within reach.
								</p>
								<div className='text-xs text-red-600'>
									<strong>Pro tip:</strong> Work near good ventilation – fresh chili aromatics can be intense
								</div>
							</div>

							<div className='bg-white rounded-lg p-6 border border-red-100'>
								<div className='flex items-center gap-3 mb-3'>
									<div className='w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm'>2</div>
									<h4 className='font-semibold text-gray-900'>Start with Aromatics</h4>
								</div>
								<p className='text-gray-700 text-sm mb-3'>
									Begin with hardest ingredients (garlic, shallots if using). Add small pinch of salt to create friction. Grind with firm, circular motions until smooth paste forms.
								</p>
								<div className='text-xs text-red-600'>
									<strong>Traditional wisdom:</strong> Salt draws out moisture and starts cell breakdown
								</div>
							</div>

							<div className='bg-white rounded-lg p-6 border border-red-100'>
								<div className='flex items-center gap-3 mb-3'>
									<div className='w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm'>3</div>
									<h4 className='font-semibold text-gray-900'>Add Chilies Gradually</h4>
								</div>
								<p className='text-gray-700 text-sm mb-3'>
									Add 2-3 chilies at a time. Use pounding motion first to break skin, then grinding to break down flesh. Keep seeds for heat or remove for milder sambal.
								</p>
								<div className='text-xs text-red-600'>
									<strong>Technique note:</strong> Alternate pounding and grinding – don't just grind in circles
								</div>
							</div>

							<div className='bg-white rounded-lg p-6 border border-red-100'>
								<div className='flex items-center gap-3 mb-3'>
									<div className='w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm'>4</div>
									<h4 className='font-semibold text-gray-900'>Achieve Perfect Texture</h4>
								</div>
								<p className='text-gray-700 text-sm mb-3'>
									Continue until you achieve coarse paste consistency – visible chili flecks but no large chunks. This should take 8-12 minutes of steady grinding.
								</p>
								<div className='text-xs text-red-600'>
									<strong>Visual guide:</strong> Think "chunky peanut butter" consistency, not smooth
								</div>
							</div>

							<div className='bg-white rounded-lg p-6 border border-red-100'>
								<div className='flex items-center gap-3 mb-3'>
									<div className='w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm'>5</div>
									<h4 className='font-semibold text-gray-900'>Balance and Adjust</h4>
								</div>
								<p className='text-gray-700 text-sm mb-3'>
									Taste and adjust salt. Add rice vinegar drop by drop for brightness. Remember – you can always add more, but you can't take it away.
								</p>
								<div className='text-xs text-red-600'>
									<strong>Final test:</strong> Sambal should cling to spoon but not be stiff
								</div>
							</div>
						</div>
					</div>

					<div className='bg-yellow-50 border border-yellow-200 rounded-lg p-6'>
						<h3 className='font-semibold text-yellow-900 mb-3 flex items-center gap-2'>
							<AlertTriangle className='w-5 h-5' />
							Common Grinding Mistakes to Avoid
						</h3>
						<div className='grid md:grid-cols-2 gap-4 text-yellow-800 text-sm'>
							<ul className='space-y-2'>
								<li>• <strong>Rushing the process:</strong> Good sambal takes time – don't hurry</li>
								<li>• <strong>Adding too much salt early:</strong> Salt content concentrates as moisture evaporates</li>
								<li>• <strong>Over-grinding:</strong> Creates sauce-like consistency instead of paste</li>
							</ul>
							<ul className='space-y-2'>
								<li>• <strong>Inconsistent pressure:</strong> Vary your grinding force for best texture</li>
								<li>• <strong>Ignoring aroma:</strong> Smell tells you when aromatics are properly released</li>
								<li>• <strong>Working too hot:</strong> Heat breaks down delicate compounds</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Essential Ingredients */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Essential Ingredients: Building Authentic Flavor
					</h2>

					<div className='grid md:grid-cols-3 gap-8'>
						<div className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'>
							<div className='w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4'>
								<Flame className='w-6 h-6 text-red-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-3'>Fresh Chilies</h3>
							<p className='text-gray-600 text-sm mb-4'>
								The star ingredient. Use fresh, ripe chilies with good aroma and firm texture. Different varieties create different flavor profiles.
							</p>
							<div className='text-xs text-gray-500'>
								<strong>UK sources:</strong> Asian markets, specialty grocers, online suppliers
							</div>
						</div>

						<div className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'>
							<div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
								<Target className='w-6 h-6 text-blue-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-3'>Sea Salt</h3>
							<p className='text-gray-600 text-sm mb-4'>
								Use fine sea salt or kosher salt. Avoid table salt with additives. Salt draws moisture and helps break down cell walls during grinding.
							</p>
							<div className='text-xs text-gray-500'>
								<strong>Amount:</strong> Start with 1/4 tsp per 10 chilies, adjust to taste
							</div>
						</div>

						<div className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'>
							<div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4'>
								<CheckCircle className='w-6 h-6 text-green-600' />
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-3'>Rice Vinegar</h3>
							<p className='text-gray-600 text-sm mb-4'>
								Adds brightness and helps preservation. Use sparingly – just enough to enhance, not dominate. White rice vinegar is traditional.
							</p>
							<div className='text-xs text-gray-500'>
								<strong>Technique:</strong> Add drop by drop, tasting between additions
							</div>
						</div>
					</div>

					<div className='mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6'>
						<h3 className='font-semibold text-purple-900 mb-4'>Optional Traditional Aromatics</h3>
						<div className='grid md:grid-cols-2 gap-6 text-purple-800'>
							<div>
								<h4 className='font-medium mb-2'>For Enhanced Complexity:</h4>
								<ul className='space-y-1 text-sm'>
									<li>• <strong>Shallots:</strong> Sweet, mild onion flavor</li>
									<li>• <strong>Garlic:</strong> Pungent depth, use sparingly</li>
									<li>• <strong>Palm sugar:</strong> Subtle sweetness to balance heat</li>
									<li>• <strong>Candlenuts:</strong> Creamy richness (use macadamias in UK)</li>
								</ul>
							</div>
							<div>
								<h4 className='font-medium mb-2'>Regional Variations:</h4>
								<ul className='space-y-1 text-sm'>
									<li>• <strong>Terasi (shrimp paste):</strong> Umami depth in Sambal Terasi</li>
									<li>• <strong>Tomatoes:</strong> Sweetness and color in Sambal Tomat</li>
									<li>• <strong>Tamarind:</strong> Sour complexity in some regional styles</li>
									<li>• <strong>Kaffir lime leaves:</strong> Citrus aromatics</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Preservation and Storage */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Traditional Preservation and Storage Wisdom
					</h2>

					<div className='bg-green-50 border border-green-200 rounded-lg p-8 mb-8'>
						<h3 className='text-xl font-semibold text-green-800 mb-6'>
							Keeping Your Sambal Fresh and Safe
						</h3>

						<div className='grid md:grid-cols-2 gap-8'>
							<div>
								<h4 className='font-semibold text-green-700 mb-4'>Immediate Storage</h4>
								<ul className='space-y-2 text-green-600 text-sm'>
									<li>• Transfer to clean, dry glass jar immediately</li>
									<li>• Leave no air bubbles – press sambal down with clean spoon</li>
									<li>• Wipe jar rim clean before sealing</li>
									<li>• Refrigerate within 30 minutes of making</li>
									<li>• Label with date – fresh sambal is best within 2-4 weeks</li>
								</ul>
							</div>
							<div>
								<h4 className='font-semibold text-green-700 mb-4'>Traditional Preservation</h4>
								<ul className='space-y-2 text-green-600 text-sm'>
									<li>• Thin layer of neutral oil on surface prevents oxidation</li>
									<li>• Always use clean, dry spoon when serving</li>
									<li>• Store in refrigerator, not room temperature</li>
									<li>• Check regularly for color changes or off smells</li>
									<li>• Darker color over time is normal – off smells are not</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='bg-amber-50 border border-amber-200 rounded-lg p-6'>
						<h3 className='font-semibold text-amber-900 mb-3 flex items-center gap-2'>
							<Eye className='w-5 h-5' />
							Signs Your Sambal Needs Attention
						</h3>
						<div className='grid md:grid-cols-3 gap-4 text-amber-800 text-sm'>
							<div>
								<strong>Visual Changes:</strong>
								<ul className='mt-1 space-y-1'>
									<li>• Mold growth (discard immediately)</li>
									<li>• Significant darkening</li>
									<li>• Separation or watery layer</li>
								</ul>
							</div>
							<div>
								<strong>Aroma Changes:</strong>
								<ul className='mt-1 space-y-1'>
									<li>• Sour, fermented smell (unless intended)</li>
									<li>• Musty or off odors</li>
									<li>• Loss of bright chili aroma</li>
								</ul>
							</div>
							<div>
								<strong>Texture Changes:</strong>
								<ul className='mt-1 space-y-1'>
									<li>• Slimy or sticky texture</li>
									<li>• Excessive oil separation</li>
									<li>• Dried out, crumbly consistency</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
						Traditional Sambal Making - Your Questions Answered
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
				<section className='text-center mb-16'>
					<div className='bg-gradient-to-br from-burgundy-50 to-red-50 rounded-lg p-8 border border-burgundy-100'>
						<h3 className='text-2xl font-bold text-gray-900 mb-4'>
							Experience Authentic Traditional Sambal
						</h3>
						<p className='text-gray-700 mb-6 max-w-2xl mx-auto'>
							While making your own sambal is deeply rewarding, tasting authentic traditional sambal helps you understand the flavor profile you're aiming for. Our sambal is made using these exact traditional techniques.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link
								href='/sample-pack-try-first'
								className='inline-flex items-center justify-center gap-2 bg-burgundy-600 hover:bg-burgundy-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
							>
								<Flame className='w-5 h-5' />
								Try Authentic Sambal First
							</Link>
							<Link
								href='/blog/ultimate-guide-indonesian-sambal'
								className='inline-flex items-center justify-center gap-2 border border-burgundy-600 text-burgundy-600 hover:bg-burgundy-50 px-6 py-3 rounded-lg font-semibold transition-colors'
							>
								<Star className='w-5 h-5' />
								Learn More About Sambal
							</Link>
						</div>
					</div>
				</section>

				{/* Continue Exploring */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
						Continue Your Indonesian Journey
					</h2>
					<div className='grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto'>
						<Link
							href='/blog/spice-islands-history'
							className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'
						>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								The History of the Spice Islands
							</h3>
							<p className='text-gray-600 text-sm mb-3'>
								Discover the volcanic origins and cultural heritage behind traditional sambal ingredients
							</p>
							<div className='text-burgundy-600 text-sm font-medium'>
								Read Heritage Story →
							</div>
						</Link>
						<Link
							href='/blog/indonesian-cooking-guide-british-kitchens'
							className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'
						>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								Indonesian Cooking for British Kitchens
							</h3>
							<p className='text-gray-600 text-sm mb-3'>
								Complete guide to bringing authentic Indonesian flavors to your British kitchen
							</p>
							<div className='text-burgundy-600 text-sm font-medium'>
								Explore Cooking Guide →
							</div>
						</Link>
					</div>
				</section>

			</article>
		</>
	);
}
