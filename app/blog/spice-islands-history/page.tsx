import type { Metadata } from "next";
export const excerpt =
	"Journey back to the Maluku Islands, the original Spice Islands that changed world history. Discover the rich culinary heritage and volcanic soil that creates the perfect chilies for authentic sambal.";

import Image from "next/image";
import Link from "next/link";
import ArticleSchema from "@/components/seo/ArticleSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
	title: "The History of the Spice Islands: Where Your Sambal Comes From | Spice Island Indonesia",
	description: excerpt,
	keywords: [
		"Spice Islands history",
		"Maluku",
		"Indonesian sambal",
		"volcanic soil",
	],
	openGraph: {
		title: "The History of the Spice Islands: Where Your Sambal Comes From",
		description:
			"A heritage story from the Maluku Islands — the birthplace of nutmeg, cloves, and authentic Indonesian spice culture.",
		type: "article",
		images: [
			{
				url: "/images/blog/spice-islands-history.webp",
				width: 1200,
				height: 630,
				alt: "Historic Spice Islands landscape",
			},
		],
	},
	alternates: {
		canonical:
			"https://spiceislandindonesia.com/blog/spice-islands-history",
	},
};

const faqData = [
	{
		question: "Where are the Spice Islands located?",
		answer: "The Spice Islands are the Maluku Islands in Indonesia, historically known as the Moluccas. They were the world’s primary source of nutmeg, cloves and mace.",
	},
	{
		question: "Why does volcanic soil matter for chilies?",
		answer: "Volcanic soils rich in minerals help chilies develop complex capsaicinoids and flavor compounds — foundational to authentic sambal.",
	},
	,
	{
		question: "What made nutmeg and cloves so valuable?",
		answer: "Scarcity, medicinal beliefs, and preservation power. Control of these spices shaped trade routes and global politics for centuries.",
	},
	{
		question: "What does ‘terroir’ mean for chilies?",
		answer: "Just like wine, soil and climate shape chili flavor and heat development. Maluku’s volcanic soils build clean heat and complexity.",
	},
	{
		question: "How is sambal connected to Spice Islands history?",
		answer: "Indigenous techniques from Maluku informed grinding, preservation and minimal-ingredient philosophy that define authentic sambal today.",
	},
	{
		question: "How can I taste this heritage at home?",
		answer: "Use small amounts of authentic sambal in simple dishes and focus on aroma and mouthfeel first. Let heat build gradually.",
	},
];

export default function SpiceIslandsHistoryPage() {
	return (
		<>
			{/* Structured Data */}
			<ArticleSchema
				headline='The History of the Spice Islands: Where Your Sambal Comes From'
				description="How Indonesia's Maluku Islands shaped world spice history and the flavor of authentic sambal."
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
				url='https://spiceislandindonesia.com/blog/spice-islands-history'
				datePublished='2024-02-10'
				dateModified='2024-02-10'
				image='/images/blog/spice-islands-history.webp'
				wordCount={1800}
				keywords={[
					"Spice Islands",
					"Maluku",
					"volcanic soil",
					"Indonesian sambal",
					"heritage",
				]}
			/>
			<FAQSchema
				faqs={faqData}
				pageTitle='Spice Islands History - FAQ'
			/>

			<article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Header */}
				<header className='text-center mb-10'>
					<h1 className='text-4xl lg:text-5xl font-bold text-burgundy-900 mb-4 leading-tight'>
						The History of the Spice Islands: Where Your
						Sambal Comes From
					</h1>
					<p className='text-lg text-neutral-700 max-w-2xl mx-auto'>
						Explore the Maluku archipelago, where volcanic
						landscapes and centuries of trade shaped
						Indonesia’s culinary foundations.
					</p>
				</header>

				{/* Hero Image */}
				<div className='relative mb-10 rounded-lg overflow-hidden shadow-xl'>
					<Image
						src='/images/blog/spice-islands-history.webp'
						alt='Historic Spice Islands coastal landscape with volcanic backdrop'
						width={1200}
						height={630}
						className='w-full h-auto object-cover'
						priority
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent' />
				</div>

				{/* Body (initial migration scaffold) */}
				<section className='prose prose-lg max-w-none mb-12'>
					<h2>Journey Through Time</h2>
					<p>
						The Maluku Islands, at the heart of the Indonesian
						archipelago, once supplied the world with coveted
						spices like nutmeg and cloves. Their fertile,
						volcanic terrain and maritime trade routes forged
						a unique culinary identity that lives on in
						Indonesian cooking.
					</p>

					<h2>Volcanic Foundation of Flavor</h2>
					<p>
						Volcanic soils provide minerals that help chilies
						develop both heat and layered flavor. This terroir
						is one reason authentic sambal tastes distinct
						from mass-made condiments.
					</p>

					<div className='bg-amber-50 border border-amber-200 p-6 rounded-lg my-8'>
						<p className='font-semibold text-amber-900 mb-2'>
							Quick Tip
						</p>
						<p className='text-neutral-700'>
							When cooking with authentic sambal, start
							small and build gradually — it’s hotter and
							more complex than typical hot sauces.
						</p>
					</div>

					<h2>Continue Exploring</h2>
					<ul>
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
								href='/blog/traditional-sambal-making'
								className='text-burgundy-600 hover:text-burgundy-800 underline'
							>
								The Art of Traditional Sambal Making
							</Link>
						</li>
					</ul>

					{/* TODO: Port remaining dynamic content (callouts, sections, internal links) and refine images/captions */}

					{/* Expanded content */}
					<section className='prose prose-lg max-w-none mb-12'>
						<h2>Trade, Conflict, and Taste</h2>
						<p>
							Nutmeg and cloves changed global economics
							and cuisine. In Maluku, everyday cooking
							preserved a simpler truth: respect for
							ingredients and patient technique. Sambal
							reflects this — it’s about clarity of
							flavour, not additives.
						</p>

						<h2>Geography in the Jar</h2>
						<p>
							Volcanic minerals shape chili aroma and heat
							profile. That’s why Indonesian sambal has a
							distinct, clean character, even before
							aromatics like galangal or lemongrass are
							added in regional styles.
						</p>

						<h2>Tasting the Past, Cooking the Present</h2>
						<ul>
							<li>
								Smell for brightness: fresh chili first,
								vinegar second
							</li>
							<li>
								Look for rustic texture: small chili
								flecks, not a uniform liquid
							</li>
							<li>
								Use sparingly at first — let heat build
								naturally
							</li>
						</ul>
					</section>
				</section>

				{/* CTA */}
				<section className='text-center'>
					<Link
						href='/shop'
						className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 font-bold rounded-full hover:shadow-lg transition-all duration-300 border border-gold-600/30'
					>
						Shop Authentic Sambal
					</Link>
				</section>
			</article>
		</>
	);
}
