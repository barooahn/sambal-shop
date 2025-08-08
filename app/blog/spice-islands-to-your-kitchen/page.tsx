import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleSchema from "@/components/seo/ArticleSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
	title: "Our Journey from the Spice Islands to Your Kitchen | Spice Island Indonesia",
	description:
		"Discover how traditional Indonesian spice knowledge from the historic Maluku Islands inspired our authentic sambal recipes for modern British kitchens.",
	keywords: [
		"Spice Islands history",
		"Indonesian heritage",
		"traditional sambal",
		"UK kitchens",
		"Chef Yossie",
	],
	openGraph: {
		title: "Our Journey from the Spice Islands to Your Kitchen",
		description:
			"From Maluku's volcanic terroir to authentic sambal on British tables — our heritage story.",
		type: "article",
		images: [
			{
				url: "/images/blog/spice-islands-heritage.webp",
				width: 1200,
				height: 630,
				alt: "Spice Islands volcanic landscape with traditional Indonesian ingredients",
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
		question: "Where are the Spice Islands?",
		answer: "The Spice Islands refer to the Maluku Islands in Indonesia, historically known for nutmeg, cloves and mace — a region whose volcanic soil and climate shaped Indonesia's spice culture.",
	},
	{
		question: "How does this heritage influence your sambal?",
		answer: "We follow traditional techniques learned in family kitchens — careful chili selection, stone-grinding texture, and minimal ingredients — adapted for modern UK food safety standards.",
	},
];

export default function SpiceIslandsToYourKitchenPage() {
	return (
		<>
			{/* Structured Data */}
			<ArticleSchema
				headline='Our Journey from the Spice Islands to Your Kitchen'
				description="How Maluku's spice heritage and Chef Yossie's tradition inspire authentic sambal in the UK"
				author={{
					name: "Spice Island Indonesia Team",
					type: "Organization",
				}}
				publisher={{
					name: "Spice Island Indonesia",
					type: "Organization",
					logo: {
						url: "https://sambal-shop.vercel.app/images/optimized/logo-lg.webp",
						width: 200,
						height: 60,
					},
				}}
				url='https://spiceislandindonesia.com/blog/spice-islands-to-your-kitchen'
				datePublished='2024-01-05'
				dateModified='2024-01-05'
				image='/images/blog/spice-islands-heritage.webp'
				wordCount={1600}
				keywords={[
					"Spice Islands",
					"Maluku",
					"Indonesian sambal",
					"culinary heritage",
					"UK kitchens",
				]}
			/>
			<FAQSchema
				faqs={faqData}
				pageTitle='Spice Islands to Your Kitchen - FAQ'
			/>

			<article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Header */}
				<header className='text-center mb-10'>
					<h1 className='text-4xl lg:text-5xl font-bold text-burgundy-900 mb-4 leading-tight'>
						Our Journey from the Spice Islands to Your Kitchen
					</h1>
					<p className='text-lg text-neutral-700 max-w-2xl mx-auto'>
						From Maluku's volcanic terroir to modern British
						tables — an authentic story of family tradition,
						craftsmanship, and Indonesian flavor.
					</p>
				</header>

				{/* Hero Image */}
				<div className='relative mb-10 rounded-lg overflow-hidden shadow-xl'>
					<Image
						src='/images/blog/spice-islands-heritage.webp'
						alt='Traditional Indonesian ingredients and volcanic landscape of the Spice Islands'
						width={1200}
						height={630}
						className='w-full h-auto object-cover'
						priority
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent' />
				</div>

				{/* Body (scaffold) */}
				<section className='prose prose-lg max-w-none mb-12'>
					<p>
						The Maluku archipelago, historically called the
						Spice Islands, shaped the world’s taste for
						centuries. This same heritage informs how we craft
						sambal today—selecting chilies for flavor and heat
						balance, using traditional techniques, and
						respecting the ingredient’s natural character.
					</p>

					<h2>Volcanic Terroir, Living Tradition</h2>
					<p>
						Chilies grown on volcanic soil develop exceptional
						complexity. Our approach preserves that complexity
						through minimal processing — a clean ingredient
						list and careful heat management.
					</p>

					<h2>From Bandung to Britain</h2>
					<p>
						Chef Yossie grew up learning in a family catering
						kitchen in Bandung. Today, those methods translate
						to UK kitchens: professional technique, authentic
						flavor, and modern standards.
					</p>

					<div className='bg-gold-50 border border-gold-200 p-6 rounded-lg my-8'>
						<p className='font-semibold text-burgundy-900 mb-2'>
							Chef’s Note
						</p>
						<p className='text-neutral-700'>
							True sambal is more than heat — it’s texture,
							aroma, and a clean, honest chili flavor.
							Start with small amounts and build complexity
							into your favourite dishes.
						</p>
					</div>

					<h2>Where to Explore Next</h2>
					<ul>
						<li>
							<Link
								href='/blog/spice-islands-history'
								className='text-burgundy-600 hover:text-burgundy-800 underline'
							>
								The History of the Spice Islands
							</Link>
						</li>
						<li>
							<Link
								href='/blog/ultimate-guide-indonesian-sambal'
								className='text-burgundy-600 hover:text-burgundy-800 underline'
							>
								The Ultimate Guide to Indonesian Sambal
							</Link>
						</li>
						<li>
							<Link
								href='/sambal-vs-sriracha'
								className='text-burgundy-600 hover:text-burgundy-800 underline'
							>
								Sambal vs Sriracha
							</Link>
						</li>
					</ul>

					{/* TODO: Expand sections with images, quotes, and internal links once content is finalized */}

					{/* Expanded content */}
					<section className='prose prose-lg max-w-none mb-12'>
						<h2>Trade Winds & Culinary Exchange</h2>
						<p>
							For centuries, Maluku’s nutmeg and cloves
							drew traders from Arabia, India, China and
							Europe. That exchange left a culinary
							imprint: techniques, preservation methods and
							a respect for spice as a cultural asset
							rather than mere heat. Our sambal philosophy
							is born from that respect.
						</p>

						<h2>Family Kitchens, Professional Standards</h2>
						<p>
							The craft begins with selection: picking
							chilies for aroma, not just Scoville. In
							Bandung family kitchens, we learned to build
							flavour in stages — first texture, then
							brightness, then balance. In the UK we apply
							food safety standards and consistent batching
							without losing soul.
						</p>

						<h2>Responsible Sourcing</h2>
						<ul>
							<li>
								Chilies chosen for character and
								freshness
							</li>
							<li>
								Minimal-ingredient recipes: no
								unnecessary additives
							</li>
							<li>
								Batch control for consistency, flavour,
								and safety
							</li>
						</ul>

						<h2>How to Taste Sambal</h2>
						<p>
							Start with a clean spoon. Smell first — you
							should get fresh chili and gentle acidity.
							Place a tiny amount on the tongue and notice
							texture before heat. Great sambal blooms with
							flavour rather than shouting with sugar.
						</p>
					</section>
				</section>

				{/* CTA */}
				<section className='text-center'>
					<Link
						href='/shop'
						className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 font-bold rounded-full hover:shadow-lg transition-all duration-300 border border-gold-600/30'
					>
						Try Authentic Sambal in Your Kitchen
					</Link>
				</section>
			</article>
		</>
	);
}
