import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleSchema from "@/components/seo/ArticleSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
	title: "Sambal vs Hot Sauce: Understanding the Difference | Spice Island Indonesia",
	description:
		"Not all chili condiments are the same. Discover how Indonesian sambal differs from Western hot sauces and why authenticity matters in cooking.",
	keywords: [
		"sambal vs hot sauce",
		"Indonesian sambal",
		"chili condiments",
		"authentic sambal",
	],
	openGraph: {
		title: "Sambal vs Hot Sauce: Understanding the Difference",
		description:
			"Explore the key differences between Indonesian sambal and common hot sauces — ingredients, texture, flavor, and use cases.",
		type: "article",
		images: [
			{
				url: "/images/blog/sambal-vs-hot-sauce-comparison.webp",
				width: 1200,
				height: 630,
				alt: "Comparative image of authentic Indonesian sambal and hot sauce",
			},
		],
	},
	alternates: {
		canonical:
			"https://spiceislandindonesia.com/blog/sambal-vs-hot-sauce",
	},
};

const faqData = [
	{
		question: "Is sambal just a type of hot sauce?",
		answer: "No. Sambal is a traditional Indonesian chili paste with minimal ingredients and a thick, rustic texture. Most Western hot sauces are emulsified liquids with sugar and preservatives.",
	},
	{
		question: "How should I substitute sambal for hot sauce?",
		answer: "Use 1/4 of the amount of hot sauce you would normally use, then taste and adjust. Sambal is typically hotter and more concentrated.",
	},
];

export default function SambalVsHotSauceBlogPage() {
	return (
		<>
			{/* Structured Data */}
			<ArticleSchema
				headline='Sambal vs Hot Sauce: Understanding the Difference'
				description='Explore the differences between Indonesian sambal and common hot sauces. Learn how to use each in cooking.'
				author={{
					name: "Chef Yossie & Team",
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
				url='https://spiceislandindonesia.com/blog/sambal-vs-hot-sauce'
				datePublished='2024-01-01'
				dateModified='2024-01-01'
				image='/images/blog/sambal-vs-hot-sauce-comparison.webp'
				wordCount={1400}
				keywords={[
					"sambal vs hot sauce",
					"Indonesian sambal",
					"condiment comparison",
					"authentic cooking",
				]}
			/>
			<FAQSchema
				faqs={faqData}
				pageTitle='Sambal vs Hot Sauce - FAQ'
			/>

			<article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Header */}
				<header className='text-center mb-10'>
					<h1 className='text-4xl lg:text-5xl font-bold text-burgundy-900 mb-4 leading-tight'>
						Sambal vs Hot Sauce: Understanding the Difference
					</h1>
					<p className='text-lg text-neutral-700 max-w-2xl mx-auto'>
						A professional comparison of Indonesia's
						traditional chili paste and the Western hot sauces
						most Brits know.
					</p>
				</header>

				{/* Hero Image */}
				<div className='relative mb-10 rounded-lg overflow-hidden shadow-xl'>
					<Image
						src='/images/blog/sambal-vs-hot-sauce-comparison.webp'
						alt='Side-by-side comparison of Indonesian sambal and hot sauce'
						width={1200}
						height={630}
						className='w-full h-auto object-cover'
						priority
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent' />
				</div>

				{/* Body (scaffold) */}
				<section className='prose prose-lg max-w-none mb-12'>
					<h2>Ingredients & Texture</h2>
					<p>
						Authentic sambal uses chilies, salt and vinegar,
						stone-ground to a coarse paste. Many hot sauces
						add sugar, stabilisers and artificial flavours
						with a pourable texture.
					</p>

					<h2>Flavor & Heat</h2>
					<p>
						Sambal delivers clean chili character with layered
						aromatics and a natural, bright heat. Hot sauces
						often lean sweet-tangy with thinner mouthfeel.
					</p>

					<h2>How to Use</h2>
					<p>
						Use sambal sparingly — 1/4 tsp at a time — to
						build depth into noodles, eggs, marinades and
						stir-fries. Use hot sauce when you want quick
						acidity or a thinner finish.
					</p>

					{/* TODO: Expand with tables, internal links, and examples */}
				</section>

				{/* Deep dive sections */}
				<section className='prose prose-lg max-w-none mb-12'>
					<h2>Ingredient Philosophy in Detail</h2>
					<ul>
						<li>
							<strong>Sambal (traditional)</strong>: Fresh
							chilies, salt, vinegar. Sometimes aromatics
							(shallot, garlic) or shrimp paste in regional
							styles. No fillers.
						</li>
						<li>
							<strong>Hot Sauce (typical)</strong>: Chilies
							plus water, sugar, stabilisers (e.g. xanthan
							gum), sometimes artificial flavours/colours
							to standardise texture and taste.
						</li>
					</ul>

					<h2>Texture & Mouthfeel</h2>
					<p>
						Stone-grinding produces a rustic, clingy texture
						that grips noodles, eggs and roast veg. Emulsified
						hot sauces feel thinner and disperse quickly. This
						single difference changes how a dish carries
						flavour.
					</p>

					<h2>When to Choose Which</h2>
					<ul>
						<li>
							<strong>Choose sambal</strong> when you want
							depth and concentration — finishing fried
							rice, enriching a marinade, or giving soups a
							clean chili backbone.
						</li>
						<li>
							<strong>Choose hot sauce</strong> when you
							want quick acidity for a sandwich, tacos, or
							a light drizzle over fries.
						</li>
					</ul>

					<h2>Substitutions & Conversion</h2>
					<ul>
						<li>
							Start with 1/4 tsp sambal in place of 1 tsp
							hot sauce. Taste, then add in 1/4 tsp
							increments.
						</li>
						<li>
							For sauces: whisk sambal with a splash of
							vinegar and a pinch of sugar if you want a
							more “hot-sauce-like” profile.
						</li>
						<li>
							For marinades: mix sambal with oil, garlic
							and a little soy or tamari to spread its heat
							evenly.
						</li>
					</ul>

					<h2>Real‑World Cooking Examples</h2>
					<h3>Eggs & Breakfast</h3>
					<p>
						Fold 1/4 tsp sambal into scrambled eggs off‑heat;
						finish with chives and butter. For a fry‑up, dot
						tiny amounts on the plate rather than mixing
						through.
					</p>
					<h3>Stir‑Fries</h3>
					<p>
						Add sambal during the final minute of cooking to
						keep aromas bright. Balance with a squeeze of
						lime.
					</p>
					<h3>Marinades & BBQ</h3>
					<p>
						Combine sambal, honey and soy for chicken thighs.
						Reserve a little as a glaze to brush on in the
						last 2 minutes.
					</p>
					<h3>Noodles & Soups</h3>
					<p>
						Stir 1/4–1/2 tsp into broth-based soups for
						clarity without sweetness. Toss noodles with
						sambal, sesame oil, and a splash of noodle water.
					</p>
				</section>

				{/* CTA */}
				<section className='text-center'>
					<Link
						href='/shop'
						className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 font-bold rounded-full hover:shadow-lg transition-all duration-300 border border-gold-600/30'
					>
						Taste the Difference with Authentic Sambal
					</Link>
				</section>
			</article>
		</>
	);
}
