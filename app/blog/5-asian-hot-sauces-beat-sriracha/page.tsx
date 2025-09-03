import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getInternalUrls } from "@/lib/url-utils";
import StructuredData from "@/components/seo/StructuredData";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
	title: "5 Asian Hot Sauces That Beat Sriracha | Best Alternatives",
	description:
		"Discover 5 superior Asian hot sauces that outperform Sriracha. From Indonesia's authentic sambal to Korean gochujang - find your perfect Sriracha alternative for UK cooking.",
	keywords:
		"sriracha alternative, better than sriracha, Asian hot sauce, best chili sauce UK, spicy sauce alternatives, Indonesian sambal, authentic Asian condiments, hot sauce comparison",
	openGraph: {
		title: "5 Asian Hot Sauces That Beat Sriracha - Superior Alternatives",
		description:
			"Stop settling for basic Sriracha! Discover 5 authentic Asian hot sauces that deliver more complexity, heat, and flavor. Perfect for UK home cooks seeking real spice.",
		images: ["/images/blog/best-asian-hot-sauces-better-than-sriracha.webp"],
		type: "article",
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/blog/5-asian-hot-sauces-beat-sriracha"
	}
};

const breadcrumbItems = [
	{
		name: "Home",
		url: "https://www.spiceislandindonesia.com",
		position: 1,
	},
	{
		name: "Blog",
		url: "https://www.spiceislandindonesia.com/blog",
		position: 2,
	},
	{
		name: "5 Asian Hot Sauces That Beat Sriracha",
		url: "https://www.spiceislandindonesia.com/blog/5-asian-hot-sauces-beat-sriracha",
		position: 3,
	},
];

const faqData = [
	{
		question: "What makes these Asian hot sauces better than Sriracha?",
		answer: "These sauces offer more complex flavour profiles, authentic ingredients, and versatile applications. While Sriracha is sweet and one-dimensional, authentic Asian hot sauces like Indonesian sambal provide layered heat with garlic, shallots, and traditional spices that enhance rather than mask food flavours."
	},
	{
		question: "Where can I buy authentic Asian hot sauces in the UK?",
		answer: "Authentic Asian hot sauces are available from specialist retailers, Asian supermarkets, and online. Look for brands that use traditional ingredients and avoid artificial preservatives. Many authentic producers now deliver directly to UK consumers."
	},
	{
		question: "How spicy are these sauces compared to Sriracha?",
		answer: "Heat levels vary significantly. Indonesian sambal oelek is considerably hotter (5/5 heat scale) while some versions like sambal bali offer medium heat with aromatic spices. Korean gochujang is milder but more complex. Always check heat ratings before trying."
	},
	{
		question: "Can I use these sauces in British cooking?",
		answer: "Absolutely! These sauces work brilliantly with British classics. Try sambal with Sunday roasts, in shepherds pie, or mixed into gravy. Korean gochujang transforms roasted vegetables, while Thai nam prik elevates simple grilled meats and fish."
	},
	{
		question: "Do these sauces need refrigeration like Sriracha?",
		answer: "Most authentic Asian hot sauces benefit from refrigeration after opening for best flavour and longevity. However, many traditional fermented versions are shelf-stable due to their natural preservation methods. Always check individual product guidance."
	}
];

export default function FiveAsianHotSaucesBeatSriracha() {
	const urls = getInternalUrls();

	return (
		<div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
			<BreadcrumbSchema items={breadcrumbItems} />
			<FAQSchema 
				faqs={faqData}
				pageTitle="Asian Hot Sauces vs Sriracha - Frequently Asked Questions"
			/>
			<StructuredData type="organization" />

			<div className="container mx-auto px-4 py-8 max-w-4xl">
				{/* Hero Image */}
				<div className="mb-8">
					<Image
						src="/images/blog/best-asian-hot-sauces-better-than-sriracha.webp"
						alt="5 authentic Asian hot sauces that beat Sriracha - Indonesian sambal, Korean gochujang, and other superior alternatives"
						width={1200}
						height={675}
						className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
						priority
					/>
				</div>

				{/* Hero Section */}
				<header className="mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-burgundy-900 mb-6 font-heading leading-tight">
						5 Asian Hot Sauces That Actually Beat Sriracha
					</h1>
					<p className="text-xl text-gray-700 mb-8 font-body leading-relaxed">
						Tired of the same old sweet, one-dimensional Sriracha? Discover 5 authentic Asian hot sauces that deliver <strong>real complexity, genuine heat, and proper flavour</strong> - perfect for elevating your British cooking beyond basic spice.
					</p>
					<div className="flex items-center gap-4 text-sm text-gray-600 font-body">
						<span>By Chef Yossie</span>
						<span>•</span>
						<span>8 min read</span>
						<span>•</span>
						<span>Updated January 2025</span>
					</div>
				</header>

				{/* Introduction */}
				<section className="mb-12">
					<div className="bg-gradient-to-br from-gold-50 to-cream-50 rounded-lg p-8 border border-gold-200">
						<h2 className="text-2xl font-bold text-burgundy-900 mb-4 font-heading">
							Why Sriracha Falls Short for Serious Spice Lovers
						</h2>
						<p className="text-gray-700 mb-4 font-body leading-relaxed">
							Don't get us wrong - Sriracha revolutionised hot sauce accessibility in the West. But if you're ready to graduate from <strong>sugary, artificial heat</strong> to authentic Asian flavours that actually enhance your food, it's time for an upgrade.
						</p>
						<p className="text-gray-700 font-body leading-relaxed">
							These 5 superior alternatives offer <strong>complex heat profiles, traditional ingredients, and versatile applications</strong> that make Sriracha taste like tomato ketchup in comparison. Perfect for UK home cooks ready to explore real Asian spice culture.
						</p>
					</div>
				</section>

				{/* Hot Sauce #1 - Indonesian Sambal */}
				<section className="mb-12">
					<div className="bg-white rounded-lg shadow-sm border border-gold-200 overflow-hidden">
						<div className="p-8">
							<div className="flex items-center gap-4 mb-4">
								<span className="text-3xl font-bold text-burgundy-600 bg-burgundy-50 rounded-full w-12 h-12 flex items-center justify-center font-heading">1</span>
								<h2 className="text-2xl font-bold text-burgundy-900 font-heading">
									Indonesian Sambal Oelek - The Pure Heat Champion
								</h2>
							</div>
							
							<div className="grid md:grid-cols-2 gap-8 mb-6">
								<div>
									<Image
										src="/images/optimized/sambal-oelek-lg.webp"
										alt="Authentic Indonesian Sambal Oelek - Pure chili paste superior to Sriracha"
										width={400}
										height={400}
										className="w-full h-64 object-cover rounded-lg"
									/>
								</div>
								<div>
									<div className="flex items-center gap-2 mb-3">
										<span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">HEAT: 5/5</span>
										<span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">AUTHENTIC</span>
									</div>
									<h3 className="text-lg font-semibold text-burgundy-800 mb-3 font-brand">Why It Destroys Sriracha:</h3>
									<ul className="space-y-2 text-gray-700 font-body">
										<li>• <strong>Pure chili intensity</strong> - no sugar masking the heat</li>
										<li>• <strong>Clean ingredient list</strong> - just chilies, salt, vinegar</li>
										<li>• <strong>Versatile base</strong> - enhances rather than dominates</li>
										<li>• <strong>Authentic tradition</strong> - centuries-old Indonesian recipe</li>
									</ul>
								</div>
							</div>

							<div className="bg-burgundy-50 rounded-lg p-6 mb-6">
								<h3 className="text-lg font-semibold text-burgundy-800 mb-3 font-brand">Perfect for British Cooking:</h3>
								<div className="grid md:grid-cols-2 gap-4 text-gray-700 font-body">
									<ul className="space-y-1">
										<li>• <strong>Sunday roasts</strong> - mix into gravy</li>
										<li>• <strong>Stir-fries</strong> - authentic Asian heat</li>
										<li>• <strong>Marinades</strong> - for BBQ and grilling</li>
									</ul>
									<ul className="space-y-1">
										<li>• <strong>Egg dishes</strong> - transforms boring scrambled eggs</li>
										<li>• <strong>Soup base</strong> - adds depth without sweetness</li>
										<li>• <strong>Dipping sauce</strong> - mix with mayo or yogurt</li>
									</ul>
								</div>
							</div>

							<div className="text-center">
								<Link 
									href={urls.sambalOelek}
									className="inline-flex items-center gap-2 bg-burgundy-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-burgundy-700 transition-colors font-body"
								>
									Try Authentic Sambal Oelek - £7.49
									<span>→</span>
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Hot Sauce #2 - Sambal Bali */}
				<section className="mb-12">
					<div className="bg-white rounded-lg shadow-sm border border-gold-200 overflow-hidden">
						<div className="p-8">
							<div className="flex items-center gap-4 mb-4">
								<span className="text-3xl font-bold text-burgundy-600 bg-burgundy-50 rounded-full w-12 h-12 flex items-center justify-center font-heading">2</span>
								<h2 className="text-2xl font-bold text-burgundy-900 font-heading">
									Indonesian Sambal Bali - The Aromatic Game-Changer
								</h2>
							</div>
							
							<div className="grid md:grid-cols-2 gap-8 mb-6">
								<div>
									<Image
										src="/images/optimized/sambal-bali-lg.webp"
										alt="Authentic Indonesian Sambal Bali with aromatic spices - premium Sriracha alternative"
										width={400}
										height={400}
										className="w-full h-64 object-cover rounded-lg"
									/>
								</div>
								<div>
									<div className="flex items-center gap-2 mb-3">
										<span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">HEAT: 3/5</span>
										<span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">COMPLEX</span>
									</div>
									<h3 className="text-lg font-semibold text-burgundy-800 mb-3 font-brand">Why It's More Sophisticated:</h3>
									<ul className="space-y-2 text-gray-700 font-body">
										<li>• <strong>Layered complexity</strong> - garlic, shallots, aromatic spices</li>
										<li>• <strong>Sweet-spicy balance</strong> - natural, not artificial</li>
										<li>• <strong>Balinese tradition</strong> - perfected over generations</li>
										<li>• <strong>Gourmet applications</strong> - elevates simple dishes</li>
									</ul>
								</div>
							</div>

							<div className="bg-gold-50 rounded-lg p-6 mb-6">
								<h3 className="text-lg font-semibold text-burgundy-800 mb-3 font-brand">Transform Your Cooking:</h3>
								<div className="text-gray-700 font-body">
									<p className="mb-3">
										<strong>Sambal Bali</strong> is what happens when centuries of Balinese culinary wisdom meets modern convenience. Unlike Sriracha's one-note sweetness, this delivers <strong>complex heat with aromatic depth</strong> that transforms everything it touches.
									</p>
									<p>Perfect for: <strong>grilled meats, roasted vegetables, fusion marinades, and elevating British comfort food</strong> to restaurant quality.</p>
								</div>
							</div>

							<div className="text-center">
								<Link 
									href={urls.sambalBali}
									className="inline-flex items-center gap-2 bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-700 transition-colors font-body"
								>
									Try Sambal Bali - £7.49
									<span>→</span>
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Hot Sauce #3 - Gochujang */}
				<section className="mb-12">
					<div className="bg-white rounded-lg shadow-sm border border-gold-200 overflow-hidden">
						<div className="p-8">
							<div className="flex items-center gap-4 mb-4">
								<span className="text-3xl font-bold text-burgundy-600 bg-burgundy-50 rounded-full w-12 h-12 flex items-center justify-center font-heading">3</span>
								<h2 className="text-2xl font-bold text-burgundy-900 font-heading">
									Korean Gochujang - The Umami Powerhouse
								</h2>
							</div>
							
							<div className="grid md:grid-cols-2 gap-8 mb-6">
								<div className="space-y-3">
									<div className="flex items-center gap-2">
										<span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">HEAT: 2/5</span>
										<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">FERMENTED</span>
									</div>
									<h3 className="text-lg font-semibold text-burgundy-800 font-brand">The Fermented Advantage:</h3>
									<ul className="space-y-2 text-gray-700 font-body text-sm">
										<li>• <strong>Fermented complexity</strong> - deep, funky umami</li>
										<li>• <strong>Sticky texture</strong> - perfect for glazing</li>
										<li>• <strong>Natural sweetness</strong> - from rice and fermentation</li>
										<li>• <strong>Mild heat</strong> - flavour-first approach</li>
									</ul>
								</div>
								<div className="space-y-3">
									<h3 className="text-lg font-semibold text-burgundy-800 font-brand">Perfect UK Applications:</h3>
									<ul className="space-y-2 text-gray-700 font-body text-sm">
										<li>• <strong>Glazed ham or pork</strong> - incredible depth</li>
										<li>• <strong>Roasted vegetables</strong> - caramelizes beautifully</li>
										<li>• <strong>Burger sauce</strong> - mix with mayo</li>
										<li>• <strong>Salad dressings</strong> - adds complexity</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Hot Sauce #4 - Thai Nam Prik */}
				<section className="mb-12">
					<div className="bg-white rounded-lg shadow-sm border border-gold-200 overflow-hidden">
						<div className="p-8">
							<div className="flex items-center gap-4 mb-4">
								<span className="text-3xl font-bold text-burgundy-600 bg-burgundy-50 rounded-full w-12 h-12 flex items-center justify-center font-heading">4</span>
								<h2 className="text-2xl font-bold text-burgundy-900 font-heading">
									Thai Nam Prik - The Fresh Herb Champion
								</h2>
							</div>
							
							<div className="grid md:grid-cols-2 gap-8">
								<div className="space-y-3">
									<div className="flex items-center gap-2">
										<span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">HEAT: 4/5</span>
										<span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">FRESH</span>
									</div>
									<p className="text-gray-700 font-body">
										<strong>Nam Prik</strong> brings <strong>bright, fresh heat</strong> with lime, fish sauce, and fresh herbs. Unlike Sriracha's artificial tang, this delivers authentic Thai balance of sweet, sour, salty, and spicy.
									</p>
								</div>
								<div className="space-y-2">
									<h3 className="text-lg font-semibold text-burgundy-800 font-brand">British Fusion Ideas:</h3>
									<ul className="space-y-1 text-gray-700 font-body text-sm">
										<li>• Fish and chips dipping sauce</li>
										<li>• Grilled chicken marinade</li>
										<li>• Prawn cocktail upgrade</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Hot Sauce #5 - Chinese Doubanjiang */}
				<section className="mb-12">
					<div className="bg-white rounded-lg shadow-sm border border-gold-200 overflow-hidden">
						<div className="p-8">
							<div className="flex items-center gap-4 mb-4">
								<span className="text-3xl font-bold text-burgundy-600 bg-burgundy-50 rounded-full w-12 h-12 flex items-center justify-center font-heading">5</span>
								<h2 className="text-2xl font-bold text-burgundy-900 font-heading">
									Chinese Doubanjiang - The Salty, Funky Flavour Bomb
								</h2>
							</div>
							
							<div className="space-y-4">
								<div className="flex items-center gap-2">
									<span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">HEAT: 3/5</span>
									<span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-semibold">FUNKY</span>
								</div>
								<p className="text-gray-700 font-body">
									The <strong>secret weapon of Sichuan cuisine</strong>. This fermented bean paste delivers incredible depth and complexity that makes Western palates weep with joy. Perfect for braised dishes and anything that needs serious flavour depth.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Comparison Table */}
				<section className="mb-12">
					<div className="bg-white rounded-lg shadow-sm border border-gold-200 p-8">
						<h2 className="text-2xl font-bold text-burgundy-900 mb-6 font-heading text-center">
							Quick Comparison: Why These Beat Sriracha
						</h2>
						<div className="overflow-x-auto">
							<table className="w-full text-sm">
								<thead className="bg-burgundy-50">
									<tr>
										<th className="text-left p-3 font-semibold text-burgundy-800">Hot Sauce</th>
										<th className="text-center p-3 font-semibold text-burgundy-800">Heat</th>
										<th className="text-left p-3 font-semibold text-burgundy-800">Flavour Profile</th>
										<th className="text-left p-3 font-semibold text-burgundy-800">Best UK Use</th>
									</tr>
								</thead>
								<tbody className="font-body">
									<tr className="border-t">
										<td className="p-3 font-semibold text-burgundy-600">Sambal Oelek</td>
										<td className="p-3 text-center">🌶️🌶️🌶️🌶️🌶️</td>
										<td className="p-3">Pure, clean heat</td>
										<td className="p-3">Sunday roasts, marinades</td>
									</tr>
									<tr className="border-t bg-gray-50">
										<td className="p-3 font-semibold text-burgundy-600">Sambal Bali</td>
										<td className="p-3 text-center">🌶️🌶️🌶️</td>
										<td className="p-3">Sweet, aromatic, complex</td>
										<td className="p-3">Grilled meats, vegetables</td>
									</tr>
									<tr className="border-t">
										<td className="p-3 font-semibold text-burgundy-600">Gochujang</td>
										<td className="p-3 text-center">🌶️🌶️</td>
										<td className="p-3">Fermented, umami-rich</td>
										<td className="p-3">Glazes, burger sauce</td>
									</tr>
									<tr className="border-t bg-gray-50">
										<td className="p-3 font-semibold text-burgundy-600">Nam Prik</td>
										<td className="p-3 text-center">🌶️🌶️🌶️🌶️</td>
										<td className="p-3">Fresh, herbal, bright</td>
										<td className="p-3">Seafood, chicken</td>
									</tr>
									<tr className="border-t">
										<td className="p-3 font-semibold text-burgundy-600">Doubanjiang</td>
										<td className="p-3 text-center">🌶️🌶️🌶️</td>
										<td className="p-3">Salty, funky, deep</td>
										<td className="p-3">Braised dishes, stews</td>
									</tr>
									<tr className="border-t bg-red-50">
										<td className="p-3 font-semibold text-gray-500">Sriracha</td>
										<td className="p-3 text-center">🌶️🌶️</td>
										<td className="p-3">Sweet, artificial, one-note</td>
										<td className="p-3">Beginners only</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* Where to Start */}
				<section className="mb-12">
					<div className="bg-gradient-to-br from-burgundy-600 to-burgundy-700 rounded-lg p-8 text-white">
						<h2 className="text-2xl font-bold mb-4 font-heading">
							Ready to Graduate from Sriracha?
						</h2>
						<p className="text-burgundy-100 mb-6 font-body leading-relaxed">
							Start with <strong>Indonesian Sambal</strong> - it's the perfect bridge between familiar and extraordinary. Our authentic recipes deliver the complexity and heat that Sriracha simply can't match, perfect for adventurous UK cooks ready for real flavour.
						</p>
						<div className="grid md:grid-cols-2 gap-4">
							<Link 
								href={urls.sambalOelek}
								className="bg-white text-burgundy-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-cream-50 transition-colors font-body"
							>
								Try Pure Heat - Sambal Oelek £7.49
							</Link>
							<Link 
								href={urls.sambalBali}
								className="bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-gold-600 transition-colors font-body"
							>
								Try Complex Heat - Sambal Bali £7.49
							</Link>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="mb-12">
					<div className="bg-white rounded-lg shadow-sm border border-gold-200 p-8">
						<h2 className="text-2xl font-bold text-burgundy-900 mb-6 font-heading">
							Frequently Asked Questions
						</h2>
						<div className="space-y-6">
							{faqData.map((faq, index) => (
								<div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
									<h3 className="text-lg font-semibold text-burgundy-800 mb-2 font-brand">
										{faq.question}
									</h3>
									<p className="text-gray-700 font-body leading-relaxed">
										{faq.answer}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Related Content */}
				<section className="mb-12">
					<div className="bg-gray-50 rounded-lg p-8">
						<h2 className="text-2xl font-bold text-burgundy-900 mb-6 font-heading">
							Explore More Spicy Content
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<Link 
								href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spiceislandindonesia.com'}/sambal-vs-sriracha`}
								className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
							>
								<h3 className="text-lg font-semibold text-burgundy-800 mb-2 font-brand">
									Sambal vs Sriracha: Complete Comparison
								</h3>
								<p className="text-gray-600 text-sm font-body">
									Deep dive into why authentic Indonesian sambal outperforms mass-market Sriracha in every way.
								</p>
							</Link>
							<Link 
								href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spiceislandindonesia.com'}/best-asian-hot-sauce`}
								className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
							>
								<h3 className="text-lg font-semibold text-burgundy-800 mb-2 font-brand">
									Best Asian Hot Sauces for UK Cooking
								</h3>
								<p className="text-gray-600 text-sm font-body">
									Complete guide to incorporating authentic Asian heat into British home cooking.
								</p>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}