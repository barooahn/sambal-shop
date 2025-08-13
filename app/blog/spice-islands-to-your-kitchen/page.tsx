import { Metadata } from "next";
const excerpt =
	"Discover how traditional Indonesian spice knowledge from the historic Maluku Islands inspired our authentic sambal recipes, bringing centuries-old culinary wisdom to modern British kitchens.";

import Image from "next/image";
import Link from "next/link";
import {
	Clock,
	Users,
	MapPin,
	Heart,
	Star,
	Ship,
	Home,
	Award,
	Globe,
} from "lucide-react";
import FAQSchema from "@/components/seo/FAQSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";

export const metadata: Metadata = {
	title: "Our Journey from the Spice Islands to Your Kitchen | Brand Story | Spice Island Indonesia",
	description: excerpt,
	keywords:
		"Spice Island Indonesia story, Maluku Islands spices, Indonesian heritage sambal, authentic Indonesian brand, traditional spice knowledge UK, Chef Yossie story, Indonesian culinary heritage Britain",
	openGraph: {
		title: "Our Journey from the Spice Islands to Your Kitchen | Brand Story",
		description:
			"The inspiring story of how traditional Indonesian spice wisdom from the Maluku Islands came to British kitchens",
		type: "article",
		images: [
			{
				url: "/images/blog/spice-islands-heritage.webp",
				width: 1200,
				height: 630,
				alt: "Beautiful landscape of the Maluku Spice Islands with traditional spice cultivation showing our heritage and journey to the UK",
			},
		],
	},
	alternates: {
		canonical:
			"https://spiceislandindonesia.com/blog/spice-islands-to-your-kitchen",
	},
};

const faqData = [
	{
		question:
			"What makes Spice Island Indonesia different from other Indonesian food brands?",
		answer: "Our recipes come directly from the Maluku Islands (the original Spice Islands) where Chef Yossie's family has cultivated spices for generations. We maintain traditional preparation methods while adapting for British kitchens, ensuring authentic flavors that respect Indonesian heritage.",
	},
	{
		question:
			"How do you maintain authenticity while adapting for UK markets?",
		answer: "We never compromise on core ingredients or traditional flavor profiles. Instead, we adjust heat levels gradually, provide cultural education, and use packaging and instructions that help British consumers understand and appreciate authentic Indonesian cuisine.",
	},
	{
		question: "What is Chef Yossie's background and expertise?",
		answer: "Chef Yossie grew up in the Maluku Islands learning traditional spice cultivation and sambal-making from her grandmother. She trained professionally in Indonesian cuisine, moved to the UK in 2015, and has spent years perfecting recipes that bring authentic Indonesian flavors to British kitchens.",
	},
	{
		question: "Why focus specifically on sambal products?",
		answer: "Sambal is the heart of Indonesian cuisine - it's not just a condiment but a flavor foundation that connects every Indonesian meal to our cultural identity. By perfecting sambal, we provide the key that unlocks authentic Indonesian cooking for British home cooks.",
	},
];

const journeyTimeline = [
	{
		year: "1920s",
		title: "Generational Spice Knowledge",
		description:
			"Chef Yossie's great-grandmother begins cultivating chilies and spices in the volcanic soils of the Maluku Islands, developing family recipes that would be passed down through generations.",
		location: "Maluku Islands, Indonesia",
	},
	{
		year: "1980s",
		title: "Traditional Learning",
		description:
			"Young Yossie learns the art of sambal-making from her grandmother, understanding not just techniques but the cultural significance and family pride behind each recipe.",
		location: "Ternate, Maluku Islands",
	},
	{
		year: "2000s",
		title: "Culinary Training",
		description:
			"Yossie pursues formal culinary training in Jakarta, combining traditional family knowledge with professional techniques, specializing in preserving authentic Indonesian flavors.",
		location: "Jakarta, Indonesia",
	},
	{
		year: "2015",
		title: "UK Migration",
		description:
			"Chef Yossie moves to London, bringing family recipes and a mission to share authentic Indonesian cuisine with British communities, initially through pop-up restaurants and catering.",
		location: "London, UK",
	},
	{
		year: "2018",
		title: "Recipe Development",
		description:
			"Years of experimentation adapting traditional recipes for British kitchens while maintaining authenticity. Testing with British families to perfect heat levels and accessibility.",
		location: "London & Manchester, UK",
	},
	{
		year: "2022",
		title: "Brand Launch",
		description:
			"Spice Island Indonesia launches with authentic sambal products, bringing the true taste of the Maluku Islands to British supermarkets and online customers.",
		location: "United Kingdom",
	},
];

const values = [
	{
		icon: Heart,
		title: "Cultural Respect",
		description:
			"We honor Indonesian culinary traditions while making them accessible to British palates, never compromising the soul of authentic recipes.",
	},
	{
		icon: Star,
		title: "Quality First",
		description:
			"Premium ingredients sourced directly from Indonesian suppliers who share our commitment to traditional cultivation methods and quality.",
	},
	{
		icon: Globe,
		title: "Bridge Building",
		description:
			"Creating connections between Indonesian and British food cultures, fostering understanding and appreciation for both culinary traditions.",
	},
	{
		icon: Award,
		title: "Authenticity",
		description:
			"Every product reflects genuine Indonesian flavors and traditional preparation methods, validated by our Indonesian heritage and expertise.",
	},
];

export default function SpiceIslandsToYourKitchenPage() {
	return (
		<>
			{/* Structured Data */}
			<ArticleSchema
				headline='Our Journey from the Spice Islands to Your Kitchen | Brand Story'
				description="The inspiring story of how traditional Indonesian spice wisdom from the historic Maluku Islands came to modern British kitchens through Chef Yossie's culinary journey"
				author={{
					name: "Chef Yossie",
					type: "Person",
					jobTitle: "Founder & Indonesian Chef",
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
				url='https://spiceislandindonesia.com/blog/spice-islands-to-your-kitchen'
				datePublished='2024-01-05'
				dateModified='2025-01-08'
				image='/images/blog/spice-islands-heritage.webp'
				wordCount={2600}
				keywords={[
					"Spice Island Indonesia story",
					"Indonesian heritage sambal",
					"Chef Yossie journey",
					"Maluku Islands spices UK",
				]}
			/>
			<FAQSchema
				faqs={faqData}
				pageTitle='Our Journey from the Spice Islands to Your Kitchen - FAQ'
			/>

			<article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Article Header */}
				<header className='text-center mb-12'>
					<div className='flex items-center justify-center gap-2 text-burgundy-600 mb-4'>
						<Ship className='w-6 h-6' />
						<span className='text-sm font-semibold tracking-wide uppercase'>
							Our Story
						</span>
						<Home className='w-6 h-6' />
					</div>

					<h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
						Our Journey from the Spice Islands to Your Kitchen
					</h1>

					<p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed'>
						Discover how traditional Indonesian spice
						knowledge from the historic Maluku Islands
						inspired our authentic sambal recipes, bringing
						centuries-old culinary wisdom to modern British
						kitchens.
					</p>

					<div className='flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8'>
						<div className='flex items-center gap-2'>
							<Clock className='w-4 h-4' />
							<span>10 min read</span>
						</div>
						<div className='flex items-center gap-2'>
							<Users className='w-4 h-4' />
							<span>By Chef Yossie</span>
						</div>
						<div className='flex items-center gap-2'>
							<MapPin className='w-4 h-4' />
							<span>Heritage Story</span>
						</div>
					</div>
				</header>

				{/* Hero Image */}
				<div className='relative mb-12 rounded-lg overflow-hidden shadow-2xl'>
					<Image
						src='/images/blog/spice-islands-heritage.webp'
						alt='Breathtaking view of the Maluku Spice Islands with traditional spice gardens and volcanic mountains showing our Indonesian heritage'
						width={1200}
						height={600}
						className='w-full h-auto object-cover'
						priority
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
					<div className='absolute bottom-6 left-6 right-6 text-white'>
						<p className='text-lg font-medium'>
							The Maluku Islands: Where our culinary
							journey began
						</p>
					</div>
				</div>

				{/* Introduction */}
				<section className='prose prose-lg max-w-none mb-12'>
					<div className='bg-gradient-to-br from-burgundy-50 to-gold-50 border-l-4 border-burgundy-400 p-8 mb-12 rounded-r-lg'>
						<div className='flex items-start gap-4'>
							<Heart className='w-8 h-8 text-burgundy-600 mt-1 flex-shrink-0' />
							<div>
								<h3 className='text-xl font-bold text-burgundy-900 mb-4'>
									A Personal Message from Chef Yossie
								</h3>
								<p className='text-burgundy-800 leading-relaxed mb-4'>
									"Every jar of sambal we create
									carries the soul of my homeland -
									the Maluku Islands, the original
									Spice Islands that changed world
									history. When I came to Britain, I
									brought more than recipes; I
									brought generations of family
									wisdom, cultural pride, and a deep
									responsibility to share authentic
									Indonesian flavors respectfully."
								</p>
								<p className='text-burgundy-800 leading-relaxed'>
									"This is the story of how my
									great-grandmother's sambal recipes
									traveled from volcanic Indonesian
									soil to British kitchen tables,
									maintaining their authenticity
									while embracing a new home."
								</p>
							</div>
						</div>
					</div>

					<p className='text-lg leading-relaxed text-gray-700 mb-6'>
						The Maluku Islands, known historically as the
						Spice Islands, were once the most coveted location
						on Earth. European explorers spent centuries
						searching for these remote Indonesian islands,
						drawn by precious spices that were literally worth
						their weight in gold. Today, those same islands
						are where our story begins - not with
						conquistadors or colonial traders, but with a
						family tradition of spice cultivation that has
						continued unbroken for over a century.
					</p>

					<p className='text-lg leading-relaxed text-gray-700 mb-8'>
						In 2025, that tradition found a new home in
						Britain, where we're proud to bring authentic
						Indonesian flavors to UK kitchens. This is more
						than a business story - it's a cultural bridge
						built with respect, authenticity, and the
						universal language of food.
					</p>
				</section>

				{/* Timeline Section */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Our Journey Through Time
					</h2>

					<div className='space-y-8'>
						{journeyTimeline.map((event, index) => (
							<div
								key={index}
								className='flex gap-8 items-start'
							>
								<div className='flex-shrink-0'>
									<div className='w-24 h-24 bg-gradient-to-br from-burgundy-500 to-gold-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg'>
										{event.year}
									</div>
								</div>
								<div className='flex-1 bg-white border border-gray-200 rounded-lg p-6 shadow-sm'>
									<div className='flex items-start justify-between mb-4'>
										<h3 className='text-xl font-semibold text-gray-900'>
											{event.title}
										</h3>
										<span className='text-sm text-gray-500 flex items-center gap-1'>
											<MapPin className='w-4 h-4' />
											{event.location}
										</span>
									</div>
									<p className='text-gray-700 leading-relaxed'>
										{event.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* The Maluku Islands Section */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						The Maluku Islands: Our Culinary Homeland
					</h2>

					<div className='bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 border border-amber-200'>
						<div className='grid md:grid-cols-2 gap-8'>
							<div>
								<h3 className='text-xl font-semibold text-amber-900 mb-4'>
									Geographic Significance
								</h3>
								<div className='space-y-3 text-amber-800'>
									<p>
										<strong>Location:</strong>{" "}
										Remote archipelago in eastern
										Indonesia, between Sulawesi
										and Papua
									</p>
									<p>
										<strong>
											Volcanic Soil:
										</strong>{" "}
										Exceptionally fertile ground
										perfect for spice cultivation
									</p>
									<p>
										<strong>Climate:</strong>{" "}
										Tropical conditions ideal for
										growing aromatic chilies and
										spices
									</p>
									<p>
										<strong>
											Historical Importance:
										</strong>{" "}
										The original "Spice Islands"
										that sparked global
										exploration
									</p>
								</div>
							</div>
							<div>
								<h3 className='text-xl font-semibold text-gray-900 mb-4'>
									Culinary Heritage
								</h3>
								<div className='space-y-3 text-gray-700'>
									<p>
										<strong>
											Unique Varieties:
										</strong>{" "}
										Indigenous chili species found
										nowhere else on Earth
									</p>
									<p>
										<strong>
											Traditional Methods:
										</strong>{" "}
										Centuries-old cultivation and
										preparation techniques
									</p>
									<p>
										<strong>
											Cultural Integration:
										</strong>{" "}
										Spices woven into daily life,
										ceremonies, and identity
									</p>
									<p>
										<strong>
											Family Recipes:
										</strong>{" "}
										Closely guarded sambal
										formulas passed through
										generations
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Values Section */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						What Drives Us: Our Core Values
					</h2>

					<div className='grid md:grid-cols-2 gap-6'>
						{values.map((value, index) => (
							<div
								key={index}
								className='bg-white border border-gray-200 rounded-lg p-6 shadow-lg text-center'
							>
								<div className='w-16 h-16 bg-gradient-to-br from-burgundy-100 to-gold-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<value.icon className='w-8 h-8 text-burgundy-600' />
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-3'>
									{value.title}
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									{value.description}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Chef Yossie's Story */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Chef Yossie: Bridging Two Worlds
					</h2>

					<div className='bg-white rounded-lg border border-gray-200 p-8 shadow-lg'>
						<div className='grid md:grid-cols-3 gap-8'>
							<div className='md:col-span-2 space-y-6'>
								<div>
									<h3 className='text-lg font-semibold text-gray-900 mb-3'>
										Indonesian Roots
									</h3>
									<p className='text-gray-700'>
										Born and raised in the Maluku
										Islands, Chef Yossie learned
										traditional sambal-making from
										her grandmother, who taught
										her that cooking isn't just
										about following recipes - it's
										about preserving culture,
										showing love, and connecting
										with your heritage. The
										techniques she learned in her
										family's spice garden form the
										foundation of every product we
										create.
									</p>
								</div>
								<div>
									<h3 className='text-lg font-semibold text-gray-900 mb-3'>
										Professional Development
									</h3>
									<p className='text-gray-700'>
										After formal culinary training
										in Jakarta, specializing in
										traditional Indonesian
										cuisine, Chef Yossie worked in
										high-end restaurants where she
										refined her understanding of
										flavor balance and authentic
										preparation methods. This
										professional experience taught
										her how to scale traditional
										recipes while maintaining
										their essential character.
									</p>
								</div>
								<div>
									<h3 className='text-lg font-semibold text-gray-900 mb-3'>
										British Journey
									</h3>
									<p className='text-gray-700'>
										Moving to London in 2015, Chef
										Yossie initially struggled to
										find ingredients that met her
										quality standards. This
										challenge sparked her mission:
										to make authentic Indonesian
										flavors accessible to British
										cooks by creating products
										that honor traditional recipes
										while adapting to local
										preferences and available
										ingredients.
									</p>
								</div>
							</div>
							<div className='flex flex-col justify-center'>
								<div className='bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-lg p-6 border border-burgundy-200'>
									<h4 className='font-semibold text-burgundy-900 mb-3'>
										Chef's Philosophy
									</h4>
									<blockquote className='text-burgundy-800 italic text-sm leading-relaxed'>
										"Authentic doesn't mean
										inflexible. Real authenticity
										means understanding the soul
										of a dish so deeply that you
										can adapt it for different
										palates while preserving what
										makes it special. That's what
										we do with every sambal we
										create."
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Product Development Process */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						How We Bring Islands to Your Kitchen
					</h2>

					<div className='grid md:grid-cols-2 gap-8'>
						<div className='grid gap-6'>
							<div className='bg-red-50 border border-red-200 rounded-lg p-6 h-full'>
								<h3 className='text-lg font-semibold text-red-800 mb-3'>
									Traditional Foundation
								</h3>
								<ul className='text-red-700 space-y-2 text-sm'>
									<li>
										• Start with authentic family
										recipes unchanged for
										generations
									</li>
									<li>
										• Source chilies from
										Indonesian suppliers
										maintaining traditional
										cultivation
									</li>
									<li>
										• Use traditional grinding
										methods that preserve
										ingredient integrity
									</li>
									<li>
										• Maintain the essential
										flavor balance that defines
										authentic sambal
									</li>
								</ul>
							</div>

							<div className='bg-gold-50 border border-gold-200 rounded-lg p-6 h-full'>
								<h3 className='text-lg font-semibold text-gold-800 mb-3'>
									British Adaptation
								</h3>
								<ul className='text-gold-700 space-y-2 text-sm'>
									<li>
										• Test with British families
										to understand heat preferences
									</li>
									<li>
										• Adjust spice levels while
										maintaining flavor complexity
									</li>
									<li>
										• Ensure ingredients are
										available through UK suppliers
									</li>
									<li>
										• Create packaging and
										instructions that educate and
										inspire
									</li>
								</ul>
							</div>
						</div>

						<div className='grid gap-6'>
							<div className='bg-burgundy-50 border border-burgundy-200 rounded-lg p-6 h-full'>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3'>
									Quality Control
								</h3>
								<ul className='text-burgundy-700 space-y-2 text-sm'>
									<li>
										• Every batch tested by Chef
										Yossie personally
									</li>
									<li>
										• Indonesian community
										taste-testing for authenticity
										verification
									</li>
									<li>
										• British customer feedback
										integration for accessibility
									</li>
									<li>
										• Continuous improvement while
										respecting traditional methods
									</li>
								</ul>
							</div>

							<div className='bg-amber-50 border border-amber-200 rounded-lg p-6 h-full'>
								<h3 className='text-lg font-semibold text-amber-800 mb-3'>
									Cultural Education
								</h3>
								<ul className='text-amber-700 space-y-2 text-sm'>
									<li>
										• Detailed usage instructions
										for authentic application
									</li>
									<li>
										• Cultural context and
										significance explanations
									</li>
									<li>
										• Recipe suggestions that
										respect Indonesian traditions
									</li>
									<li>
										• Community building through
										shared culinary experiences
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Mission Statement */}
				<section className='mb-12'>
					<div className='bg-gradient-to-r from-burgundy-600 to-burgundy-800 text-white rounded-lg p-8 text-center'>
						<h2 className='text-2xl font-bold mb-4'>
							Our Mission
						</h2>
						<p className='text-lg mb-6 opacity-90 max-w-3xl mx-auto'>
							To bridge Indonesian and British culinary
							cultures with authentic, respectful products
							that honor traditional recipes while making
							Indonesian cuisine accessible to UK home
							cooks. We believe great food builds
							understanding, creates connections, and
							enriches lives.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link
								href='/sample-pack-try-first'
								className='inline-flex items-center justify-center gap-2 bg-white text-burgundy-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
							>
								<Star className='w-5 h-5' />
								Experience Our Story
							</Link>
							<Link
								href='/blog/indonesian-food-culture-context'
								className='inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-burgundy-600 px-6 py-3 rounded-lg font-semibold transition-colors'
							>
								<Globe className='w-5 h-5' />
								Learn About Indonesian Culture
							</Link>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Understanding Our Story
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

				{/* Looking Forward */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Looking Forward: Growing Together
					</h2>

					<div className='bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 border border-amber-200'>
						<div className='grid md:grid-cols-2 gap-8'>
							<div>
								<h3 className='text-xl font-semibold text-amber-900 mb-4'>
									Our Vision for British Kitchens
								</h3>
								<div className='space-y-3 text-amber-800'>
									<p>
										We envision a Britain where
										Indonesian sambal is as
										familiar as HP Sauce, where
										British families confidently
										cook authentic Indonesian
										meals, and where our two food
										cultures enrich each other.
									</p>
									<p>
										Every jar we sell, every
										recipe we share, and every
										customer who discovers
										Indonesian cuisine brings us
										closer to this vision of
										culinary bridge-building.
									</p>
								</div>
							</div>
							<div>
								<h3 className='text-xl font-semibold text-gray-900 mb-4'>
									Join Our Community
								</h3>
								<div className='space-y-3 text-gray-700'>
									<p>
										We're not just selling
										products - we're building a
										community of food lovers who
										appreciate authenticity,
										respect cultural heritage, and
										enjoy exploring new flavors
										together.
									</p>
									<p>
										Whether you're Indonesian
										missing home flavors or
										British discovering new
										cuisine, you're part of our
										extended family, and we're
										grateful for your trust in our
										story.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Related Articles */}
				<section>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Continue Exploring Our Heritage
					</h2>

					<div className='grid md:grid-cols-2 gap-6'>
						<Link
							href='/blog/spice-islands-history'
							className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'
						>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								The History of the Spice Islands
							</h3>
							<p className='text-gray-600 text-sm mb-3'>
								Discover the fascinating history of the
								Maluku Islands and their impact on world
								cuisine
							</p>
							<div className='text-burgundy-600 text-sm font-medium'>
								Explore History →
							</div>
						</Link>

						<Link
							href='/blog/indonesian-food-culture-context'
							className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'
						>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								Understanding Indonesian Food Culture
							</h3>
							<p className='text-gray-600 text-sm mb-3'>
								Learn about the cultural significance
								behind Indonesian dishes and traditions
							</p>
							<div className='text-burgundy-600 text-sm font-medium'>
								Learn Culture →
							</div>
						</Link>
					</div>
				</section>
			</article>
		</>
	);
}
