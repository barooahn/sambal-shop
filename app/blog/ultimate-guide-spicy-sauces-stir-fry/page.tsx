import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/seo/StructuredData";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
	title: "Spicy Sauces for Stir Fry | Best Hot Sauce Guide UK",
	description:
		"Master stir-fry with the perfect spicy sauces! Complete guide to hot sauce for stir fry, from Indonesian sambal to Asian classics. Transform your UK home cooking today.",
	keywords:
		"spicy sauce stir fry, hot sauce stir fry, best sauce for stir fry, chili sauce cooking, stir fry sauce UK, Indonesian sambal stir fry, spicy stir fry sauce, Asian stir fry sauce",
	openGraph: {
		title: "Ultimate Guide to Spicy Sauces for Stir Fry - Master UK Home Cooking",
		description:
			"Transform your stir-fry game! Discover the best spicy sauces for perfect stir fry every time. From authentic Indonesian sambal to Asian classics - complete UK cooking guide.",
		images: ["/images/blog/spicy-sauces-stir-fry-guide.webp"],
		type: "article",
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/blog/ultimate-guide-spicy-sauces-stir-fry"
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
		name: "Ultimate Guide to Spicy Sauces for Stir Fry",
		url: "https://www.spiceislandindonesia.com/blog/ultimate-guide-spicy-sauces-stir-fry",
		position: 3,
	},
];

const faqData = [
	{
		question: "What's the best spicy sauce for stir fry?",
		answer: "Indonesian sambal oelek is the ultimate choice for stir fry. Unlike other sauces, it's pure chili paste without sugar or thickeners that can burn during high-heat cooking. It provides clean heat that enhances rather than masks your ingredients, and it's what professional chefs use for authentic Asian stir-fry dishes."
	},
	{
		question: "When should I add spicy sauce during stir frying?",
		answer: "Add spicy sauce in two stages for best results: 1) Add oil-based sauces like sambal at the beginning with aromatics (garlic, ginger) to release flavour oils. 2) Add liquid sauces in the final 30 seconds to prevent burning. This technique ensures maximum flavour development without bitter burnt notes."
	},
	{
		question: "How much spicy sauce should I use in stir fry?",
		answer: "Start with 1 teaspoon of sambal per portion and adjust to taste. Remember that stir-fry cooking intensifies flavours, so less is often more. You can always add extra sauce at the table, but you can't remove it once it's cooked in."
	},
	{
		question: "Can I use sweet chili sauce for stir fry?",
		answer: "Sweet chili sauce works for mild stir-fries but has limitations. The high sugar content can burn easily at high temperatures, creating bitter flavours. It's better for finishing dishes or marinades rather than high-heat cooking. For authentic results, use sambal or other oil-based chili sauces."
	},
	{
		question: "What's the difference between sambal and other Asian hot sauces for stir fry?",
		answer: "Sambal is pure chili paste designed for cooking, while many Asian hot sauces contain sugars, vinegars, or thickeners that can burn or separate at high heat. Sambal maintains its flavour integrity during stir-frying and creates the authentic taste profile used in Indonesian and Malaysian cuisine."
	}
];

export default function UltimateGuideSpicySaucesStirFry() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
			<BreadcrumbSchema items={breadcrumbItems} />
			<FAQSchema 
				faqs={faqData}
				pageTitle="Spicy Sauces for Stir Fry - Frequently Asked Questions"
			/>
			<StructuredData type="organization" />

			<div className="container mx-auto px-4 py-8 max-w-4xl">
				{/* Hero Image */}
				<div className="mb-8">
					<Image
						src="/images/blog/spicy-sauces-stir-fry-guide.webp"
						alt="Ultimate guide to spicy sauces for stir fry - Indonesian sambal and Asian hot sauces for perfect UK home cooking"
						width={1200}
						height={675}
						className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
						priority
					/>
				</div>

				{/* Hero Section */}
				<header className="mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-burgundy-900 mb-6 font-heading leading-tight">
						Ultimate Guide to Spicy Sauces for Stir Fry
					</h1>
					<p className="text-xl text-gray-700 mb-8 font-body leading-relaxed">
						Transform your home stir-fry from bland to brilliant with the right spicy sauces. Discover which sauces work best for high-heat cooking, when to add them, and how to achieve **restaurant-quality results** in your own kitchen.
					</p>
					<div className="flex items-center gap-4 text-sm text-gray-600 font-body">
						<span>By Chef Yossie</span>
						<span>•</span>
						<span>12 min read</span>
						<span>•</span>
						<span>Updated August 2025</span>
					</div>
				</header>

				{/* Quick Reference Guide */}
				<section className="mb-12">
					<div className="bg-gradient-to-br from-gold-50 to-burgundy-50 rounded-lg p-8 border border-gold-200">
						<h2 className="text-2xl font-bold text-burgundy-900 mb-6 font-heading">
							Quick Reference: Best Sauces by Stir-Fry Type
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-lg font-semibold text-burgundy-800 mb-3 font-brand">🥢 Traditional Asian Stir-Fry</h3>
								<ul className="space-y-2 text-gray-700 font-body text-sm">
									<li>• <strong>Best:</strong> Indonesian Sambal Oelek</li>
									<li>• <strong>Why:</strong> Pure heat, no burning</li>
									<li>• <strong>When:</strong> Add with garlic/ginger</li>
									<li>• <strong>Amount:</strong> 1-2 tsp per portion</li>
								</ul>
							</div>
							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-lg font-semibold text-burgundy-800 mb-3 font-brand">🍗 Protein-Heavy Stir-Fry</h3>
								<ul className="space-y-2 text-gray-700 font-body text-sm">
									<li>• <strong>Best:</strong> Sambal Bali (aromatic)</li>
									<li>• <strong>Why:</strong> Complements meat flavors</li>
									<li>• <strong>When:</strong> Marinate + finish</li>
									<li>• <strong>Amount:</strong> 1 tbsp marinade + 1 tsp finish</li>
								</ul>
							</div>
							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-lg font-semibold text-burgundy-800 mb-3 font-brand">🥬 Vegetable Stir-Fry</h3>
								<ul className="space-y-2 text-gray-700 font-body text-sm">
									<li>• <strong>Best:</strong> Gochujang + Sambal mix</li>
									<li>• <strong>Why:</strong> Sweet-savory balance</li>
									<li>• <strong>When:</strong> Final 30 seconds</li>
									<li>• <strong>Amount:</strong> 1 tsp each sauce</li>
								</ul>
							</div>
							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-lg font-semibold text-burgundy-800 mb-3 font-brand">🍜 Noodle Stir-Fry</h3>
								<ul className="space-y-2 text-gray-700 font-body text-sm">
									<li>• <strong>Best:</strong> Thai Nam Prik + Sambal</li>
									<li>• <strong>Why:</strong> Balances starchy noodles</li>
									<li>• <strong>When:</strong> Toss with cooked noodles</li>
									<li>• <strong>Amount:</strong> 2 tsp total per portion</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* The Science of Stir-Fry Sauces */}
				<section className="mb-12">
					<div className="bg-white rounded-lg shadow-sm border border-gold-200 p-8">
						<h2 className="text-2xl font-bold text-burgundy-900 mb-6 font-heading">
							The Science: Why Most Hot Sauces Fail at High Heat
						</h2>
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-xl font-semibold text-burgundy-800 mb-4 font-brand">❌ Common Failures</h3>
								<div className="space-y-4">
									<div className="bg-red-50 p-4 rounded-lg">
										<h4 className="font-semibold text-red-800 mb-2">Sriracha & Sweet Sauces</h4>
										<p className="text-red-700 text-sm"><strong>Problem:</strong> High sugar content burns at 320°F, creating bitter flavours and black spots in your stir-fry.</p>
									</div>
									<div className="bg-orange-50 p-4 rounded-lg">
										<h4 className="font-semibold text-orange-800 mb-2">Vinegar-Based Sauces</h4>
										<p className="text-orange-700 text-sm"><strong>Problem:</strong> Acid evaporates quickly, leaving harsh heat without balanced flavour complexity.</p>
									</div>
									<div className="bg-yellow-50 p-4 rounded-lg">
										<h4 className="font-semibold text-yellow-800 mb-2">Thick Sauces</h4>
										<p className="text-yellow-700 text-sm"><strong>Problem:</strong> Cornstarch and thickeners break down, creating gummy textures and uneven heat distribution.</p>
									</div>
								</div>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-burgundy-800 mb-4 font-brand">✅ Why Sambal Works</h3>
								<div className="space-y-4">
									<div className="bg-green-50 p-4 rounded-lg">
										<h4 className="font-semibold text-green-800 mb-2">Oil-Based Formula</h4>
										<p className="text-green-700 text-sm"><strong>Advantage:</strong> Chili oils distribute evenly and won't burn until 400°F+ - perfect for wok cooking.</p>
									</div>
									<div className="bg-blue-50 p-4 rounded-lg">
										<h4 className="font-semibold text-blue-800 mb-2">Minimal Processing</h4>
										<p className="text-blue-700 text-sm"><strong>Advantage:</strong> Pure ingredients maintain integrity under high heat, delivering consistent flavour.</p>
									</div>
									<div className="bg-purple-50 p-4 rounded-lg">
										<h4 className="font-semibold text-purple-800 mb-2">Traditional Design</h4>
										<p className="text-purple-700 text-sm"><strong>Advantage:</strong> Literally created for high-heat cooking - it's what Asian chefs have used for centuries.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Top 7 Spicy Sauces Ranked */}
				<section className="mb-12">
					<div className="bg-white rounded-lg shadow-sm border border-gold-200 p-8">
						<h2 className="text-2xl font-bold text-burgundy-900 mb-6 font-heading text-center">
							Top 7 Spicy Sauces for Stir-Fry (Ranked by Performance)
						</h2>

						{/* Rank 1 - Sambal Oelek */}
						<div className="mb-8 border-l-4 border-gold-500 pl-6">
							<div className="flex items-center gap-4 mb-4">
								<span className="text-3xl font-bold text-gold-600 bg-gold-50 rounded-full w-12 h-12 flex items-center justify-center font-heading">1</span>
								<h3 className="text-xl font-bold text-burgundy-900 font-heading">Indonesian Sambal Oelek - The Professional Choice</h3>
							</div>
							<div className="grid md:grid-cols-3 gap-6">
								<div>
									<Image
										src="/images/optimized/sambal-oelek-lg.webp"
										alt="Indonesian Sambal Oelek - best spicy sauce for stir fry"
										width={300}
										height={300}
										className="w-full h-48 object-cover rounded-lg mb-3"
									/>
								</div>
								<div className="md:col-span-2">
									<div className="flex items-center gap-2 mb-3">
										<span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">HEAT: 5/5</span>
										<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">HIGH HEAT OK</span>
										<span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">PROFESSIONAL</span>
									</div>
									<p className="text-gray-700 mb-4 font-body">
										<strong>Why it's #1:</strong> Pure chili paste with oil base that won't burn, caramelize, or separate. Used in professional kitchens across Southeast Asia for authentic stir-fry dishes.
									</p>
									<div className="grid md:grid-cols-2 gap-4">
										<div>
											<h4 className="font-semibold text-burgundy-800 mb-2 font-brand">Perfect For:</h4>
											<ul className="text-sm text-gray-700 space-y-1">
												<li>• Traditional Asian stir-fries</li>
												<li>• High-heat wok cooking</li>
												<li>• Protein-based dishes</li>
												<li>• When you want pure heat</li>
											</ul>
										</div>
										<div>
											<h4 className="font-semibold text-burgundy-800 mb-2 font-brand">Pro Technique:</h4>
											<p className="text-sm text-gray-700">Add 1 tsp with garlic and ginger at start. The oil carries flavour throughout the dish without burning.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-4 text-center">
								<Link 
									href="/sambal-oelek-uk"
									className="inline-flex items-center gap-2 bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-700 transition-colors font-body"
								>
									Get Professional-Grade Sambal Oelek £7.49
									<span>→</span>
								</Link>
							</div>
						</div>

						{/* Rank 2 - Sambal Bali */}
						<div className="mb-8 border-l-4 border-silver-400 pl-6">
							<div className="flex items-center gap-4 mb-4">
								<span className="text-3xl font-bold text-silver-600 bg-silver-50 rounded-full w-12 h-12 flex items-center justify-center font-heading">2</span>
								<h3 className="text-xl font-bold text-burgundy-900 font-heading">Indonesian Sambal Bali - The Gourmet Option</h3>
							</div>
							<div className="grid md:grid-cols-3 gap-6">
								<div>
									<Image
										src="/images/optimized/sambal-bali-lg.webp"
										alt="Indonesian Sambal Bali - aromatic spicy sauce for stir fry"
										width={300}
										height={300}
										className="w-full h-48 object-cover rounded-lg mb-3"
									/>
								</div>
								<div className="md:col-span-2">
									<div className="flex items-center gap-2 mb-3">
										<span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">HEAT: 3/5</span>
										<span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">AROMATIC</span>
										<span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs font-semibold">COMPLEX</span>
									</div>
									<p className="text-gray-700 mb-4 font-body">
										<strong>Why it's great:</strong> Combines chili heat with aromatic spices (shallots, garlic, galangal). Perfect for dishes where you want complexity beyond pure heat.
									</p>
									<div className="text-sm text-gray-700">
										<strong>Best technique:</strong> Use in marinades, then add extra at finish for layered flavour development.
									</div>
								</div>
							</div>
						</div>

						{/* Rank 3 - Korean Gochujang */}
						<div className="mb-8 border-l-4 border-bronze-400 pl-6">
							<div className="flex items-center gap-4 mb-4">
								<span className="text-3xl font-bold text-bronze-600 bg-bronze-50 rounded-full w-12 h-12 flex items-center justify-center font-heading">3</span>
								<h3 className="text-xl font-bold text-burgundy-900 font-heading">Korean Gochujang - The Sweet Heat Balance</h3>
							</div>
							<div className="grid md:grid-cols-3 gap-6">
								<div className="md:col-span-3">
									<div className="flex items-center gap-2 mb-3">
										<span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">HEAT: 2/5</span>
										<span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-semibold">SWEET</span>
										<span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">FERMENTED</span>
									</div>
									<p className="text-gray-700 mb-4 font-body">
										<strong>Best for:</strong> Vegetable stir-fries and noodle dishes where you want sweet-savory balance. The fermented complexity adds umami depth.
									</p>
									<p className="text-sm text-gray-700"><strong>Caution:</strong> Contains sugars - add in final 30 seconds to prevent burning.</p>
								</div>
							</div>
						</div>

						{/* Remaining ranks 4-7 in condensed format */}
						<div className="space-y-4">
							<div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
								<span className="text-2xl font-bold text-gray-600 bg-white rounded-full w-10 h-10 flex items-center justify-center font-heading">4</span>
								<div className="flex-1">
									<h4 className="font-semibold text-burgundy-900">Thai Nam Prik</h4>
									<p className="text-sm text-gray-700">Fresh, herbal heat - excellent for seafood stir-fries</p>
								</div>
								<span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">HEAT: 4/5</span>
							</div>
							
							<div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
								<span className="text-2xl font-bold text-gray-600 bg-white rounded-full w-10 h-10 flex items-center justify-center font-heading">5</span>
								<div className="flex-1">
									<h4 className="font-semibold text-burgundy-900">Chinese Doubanjiang</h4>
									<p className="text-sm text-gray-700">Fermented bean paste - rich, salty, complex for Sichuan dishes</p>
								</div>
								<span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">HEAT: 3/5</span>
							</div>
							
							<div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
								<span className="text-2xl font-bold text-gray-600 bg-white rounded-full w-10 h-10 flex items-center justify-center font-heading">6</span>
								<div className="flex-1">
									<h4 className="font-semibold text-burgundy-900">Harissa</h4>
									<p className="text-sm text-gray-700">North African blend - works for fusion Mediterranean-Asian dishes</p>
								</div>
								<span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">HEAT: 3/5</span>
							</div>
							
							<div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
								<span className="text-2xl font-bold text-red-600 bg-white rounded-full w-10 h-10 flex items-center justify-center font-heading">7</span>
								<div className="flex-1">
									<h4 className="font-semibold text-red-900">Sriracha (Commercial)</h4>
									<p className="text-sm text-red-700">⚠️ Burns easily due to sugar content - only for finishing, never for cooking</p>
								</div>
								<span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">AVOID FOR COOKING</span>
							</div>
						</div>
					</div>
				</section>

				{/* Timing Techniques */}
				<section className="mb-12">
					<div className="bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-lg p-8">
						<h2 className="text-2xl font-bold text-burgundy-900 mb-6 font-heading">
							Master Chef Timing: When to Add Your Sauce
						</h2>
						<div className="grid md:grid-cols-3 gap-6">
							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-lg font-semibold text-burgundy-800 mb-3 font-brand">
									🔥 Stage 1: With Aromatics (0-30 seconds)
								</h3>
								<div className="space-y-3 text-sm text-gray-700">
									<p><strong>Add:</strong> Oil-based sauces (sambal, chili oil)</p>
									<p><strong>With:</strong> Garlic, ginger, shallots</p>
									<p><strong>Why:</strong> Releases flavor compounds into oil base</p>
									<p><strong>Temperature:</strong> Medium-high heat</p>
								</div>
							</div>
							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-lg font-semibold text-burgundy-800 mb-3 font-brand">
									🥩 Stage 2: With Proteins (1-3 minutes)
								</h3>
								<div className="space-y-3 text-sm text-gray-700">
									<p><strong>Add:</strong> Marinade sauces if using</p>
									<p><strong>With:</strong> Meat, tofu, seafood</p>
									<p><strong>Why:</strong> Creates flavor crust, caramelization</p>
									<p><strong>Temperature:</strong> High heat</p>
								</div>
							</div>
							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-lg font-semibold text-burgundy-800 mb-3 font-brand">
									⚡ Stage 3: Final Finish (Last 30 seconds)
								</h3>
								<div className="space-y-3 text-sm text-gray-700">
									<p><strong>Add:</strong> Sugar-based sauces, extra heat</p>
									<p><strong>With:</strong> Final vegetables, noodles</p>
									<p><strong>Why:</strong> Prevents burning, maintains brightness</p>
									<p><strong>Temperature:</strong> Remove from highest heat</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Recipe Ratios */}
				<section className="mb-12">
					<div className="bg-white rounded-lg shadow-sm border border-gold-200 p-8">
						<h2 className="text-2xl font-bold text-burgundy-900 mb-6 font-heading">
							Perfect Ratios: How Much Sauce Per Portion
						</h2>
						<div className="overflow-x-auto">
							<table className="w-full border-collapse">
								<thead className="bg-burgundy-50">
									<tr>
										<th className="text-left p-3 font-semibold text-burgundy-800 border-b">Sauce Type</th>
										<th className="text-center p-3 font-semibold text-burgundy-800 border-b">Per Portion</th>
										<th className="text-left p-3 font-semibold text-burgundy-800 border-b">Best For</th>
										<th className="text-left p-3 font-semibold text-burgundy-800 border-b">Pro Tip</th>
									</tr>
								</thead>
								<tbody className="font-body text-sm">
									<tr className="border-b bg-green-50">
										<td className="p-3 font-semibold text-burgundy-700">Sambal Oelek</td>
										<td className="p-3 text-center font-bold">1-2 tsp</td>
										<td className="p-3">All stir-fries</td>
										<td className="p-3">Start with 1 tsp, add more to taste</td>
									</tr>
									<tr className="border-b">
										<td className="p-3 font-semibold text-burgundy-700">Sambal Bali</td>
										<td className="p-3 text-center font-bold">1 tbsp</td>
										<td className="p-3">Meat dishes</td>
										<td className="p-3">Use in marinade + extra for finish</td>
									</tr>
									<tr className="border-b bg-gray-50">
										<td className="p-3 font-semibold text-burgundy-700">Gochujang</td>
										<td className="p-3 text-center font-bold">1 tsp</td>
										<td className="p-3">Vegetable dishes</td>
										<td className="p-3">Mix with soy sauce for balance</td>
									</tr>
									<tr className="border-b">
										<td className="p-3 font-semibold text-burgundy-700">Thai Nam Prik</td>
										<td className="p-3 text-center font-bold">1/2 tsp</td>
										<td className="p-3">Seafood</td>
										<td className="p-3">Very potent - less is more</td>
									</tr>
									<tr className="border-b bg-gray-50">
										<td className="p-3 font-semibold text-burgundy-700">Doubanjiang</td>
										<td className="p-3 text-center font-bold">2 tsp</td>
										<td className="p-3">Sichuan dishes</td>
										<td className="p-3">Reduce other salt in recipe</td>
									</tr>
									<tr className="border-b bg-red-50">
										<td className="p-3 font-semibold text-red-700">Sriracha</td>
										<td className="p-3 text-center font-bold text-red-700">Finish only</td>
										<td className="p-3 text-red-700">Table condiment</td>
										<td className="p-3 text-red-700">Never cook with - burns easily</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* Common Mistakes */}
				<section className="mb-12">
					<div className="bg-red-50 border border-red-200 rounded-lg p-8">
						<h2 className="text-2xl font-bold text-red-900 mb-6 font-heading">
							5 Critical Mistakes That Ruin Spicy Stir-Fries
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="space-y-4">
								<div className="bg-white p-4 rounded-lg">
									<h3 className="text-lg font-semibold text-red-800 mb-2">❌ Adding Sweet Sauces Too Early</h3>
									<p className="text-red-700 text-sm mb-2">Sugar burns at 320°F, creating bitter, acrid flavours that overpower everything.</p>
									<p className="text-green-700 text-sm"><strong>Fix:</strong> Add sweet sauces in the final 30 seconds only.</p>
								</div>
								<div className="bg-white p-4 rounded-lg">
									<h3 className="text-lg font-semibold text-red-800 mb-2">❌ Using Too Much Sauce</h3>
									<p className="text-red-700 text-sm mb-2">Stir-frying concentrates flavors - a little goes a long way.</p>
									<p className="text-green-700 text-sm"><strong>Fix:</strong> Start with half what you think you need, taste, adjust.</p>
								</div>
							</div>
							<div className="space-y-4">
								<div className="bg-white p-4 rounded-lg">
									<h3 className="text-lg font-semibold text-red-800 mb-2">❌ Wrong Heat Level</h3>
									<p className="text-red-700 text-sm mb-2">Too low = steaming. Too high = burning. Both ruin sauce integration.</p>
									<p className="text-green-700 text-sm"><strong>Fix:</strong> Medium-high for aromatics, high for protein, medium for vegetables.</p>
								</div>
								<div className="bg-white p-4 rounded-lg">
									<h3 className="text-lg font-semibold text-red-800 mb-2">❌ Not Tasting as You Go</h3>
									<p className="text-red-700 text-sm mb-2">Heat levels vary by brand and your taste preferences change.</p>
									<p className="text-green-700 text-sm"><strong>Fix:</strong> Taste frequently and adjust. Keep extra sauce on the side.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Sample Recipes */}
				<section className="mb-12">
					<div className="bg-white rounded-lg shadow-sm border border-gold-200 p-8">
						<h2 className="text-2xl font-bold text-burgundy-900 mb-6 font-heading">
							3 Perfect Recipes to Master Your Technique
						</h2>

						<div className="space-y-8">
							{/* Recipe 1 */}
							<div className="border-l-4 border-gold-500 pl-6">
								<h3 className="text-xl font-semibold text-burgundy-800 mb-4 font-brand">
									🥩 Classic Sambal Chicken Stir-Fry (Serves 2)
								</h3>
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-semibold text-burgundy-800 mb-2">Ingredients:</h4>
										<ul className="text-sm text-gray-700 space-y-1">
											<li>• 300g chicken thigh, sliced thin</li>
											<li>• 2 tsp sambal oelek</li>
											<li>• 2 cloves garlic, minced</li>
											<li>• 1 tbsp vegetable oil</li>
											<li>• 200g mixed vegetables</li>
											<li>• 1 tbsp soy sauce</li>
											<li>• Spring onions for garnish</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold text-burgundy-800 mb-2">Perfect Technique:</h4>
										<ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
											<li>Heat wok to smoking</li>
											<li>Add oil + garlic + 1 tsp sambal (30 seconds)</li>
											<li>Add chicken, cook 3-4 minutes</li>
											<li>Add vegetables, stir-fry 2 minutes</li>
											<li>Add soy sauce + remaining sambal</li>
											<li>Toss 30 seconds, serve immediately</li>
										</ol>
									</div>
								</div>
							</div>

							{/* Recipe 2 */}
							<div className="border-l-4 border-green-500 pl-6">
								<h3 className="text-xl font-semibold text-burgundy-800 mb-4 font-brand">
									🥬 Gochujang Vegetable Stir-Fry (Serves 2)
								</h3>
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-semibold text-burgundy-800 mb-2">Ingredients:</h4>
										<ul className="text-sm text-gray-700 space-y-1">
											<li>• 400g mixed vegetables</li>
											<li>• 1 tsp gochujang</li>
											<li>• 1/2 tsp sambal oelek</li>
											<li>• 2 tbsp vegetable oil</li>
											<li>• 1 tbsp rice wine</li>
											<li>• 1 tsp sesame oil</li>
											<li>• Sesame seeds for garnish</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold text-burgundy-800 mb-2">Perfect Balance:</h4>
										<p className="text-sm text-gray-700 mb-2">Mix gochujang + sambal + rice wine in small bowl first.</p>
										<p className="text-sm text-gray-700">Add sauce mixture in final 30 seconds to prevent gochujang burning. The sambal provides clean heat while gochujang adds sweetness.</p>
									</div>
								</div>
							</div>

							{/* Recipe 3 */}
							<div className="border-l-4 border-blue-500 pl-6">
								<h3 className="text-xl font-semibold text-burgundy-800 mb-4 font-brand">
									🍜 Spicy Singapore Noodles (Serves 2)
								</h3>
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-semibold text-burgundy-800 mb-2">Ingredients:</h4>
										<ul className="text-sm text-gray-700 space-y-1">
											<li>• 200g rice noodles, soaked</li>
											<li>• 1 tsp sambal bali</li>
											<li>• 1/2 tsp thai nam prik</li>
											<li>• 100g prawns</li>
											<li>• 100g char siu or chicken</li>
											<li>• 2 eggs, beaten</li>
											<li>• Bean sprouts, spring onions</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold text-burgundy-800 mb-2">Noodle Technique:</h4>
										<p className="text-sm text-gray-700">Toss cooked noodles with sauce mixture OFF the heat. The residual heat warms the sauces without burning. Return to heat briefly just to warm through.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Shopping Guide */}
				<section className="mb-12">
					<div className="bg-gradient-to-br from-gold-50 to-burgundy-50 rounded-lg p-8">
						<h2 className="text-2xl font-bold text-burgundy-900 mb-6 font-heading">
							Start Your Spicy Stir-Fry Journey
						</h2>
						<div className="grid md:grid-cols-2 gap-8 items-center">
							<div>
								<h3 className="text-xl font-semibold text-burgundy-800 mb-4 font-brand">
									Perfect Starter Kit
								</h3>
								<div className="space-y-3 text-gray-700">
									<p><strong>Essential:</strong> Sambal Oelek - your foundation sauce for all stir-fries</p>
									<p><strong>Upgrade:</strong> Sambal Bali - for complex, restaurant-quality results</p>
									<p><strong>Bonus:</strong> Sample pack to experiment with different heat levels</p>
								</div>
								<div className="mt-6 bg-white p-4 rounded-lg">
									<h4 className="font-semibold text-burgundy-800 mb-2">Why Start with Our Sambals:</h4>
									<ul className="text-sm text-gray-700 space-y-1">
										<li>✓ Designed specifically for high-heat cooking</li>
										<li>✓ Traditional Indonesian recipes</li>
										<li>✓ No artificial thickeners or preservatives</li>
										<li>✓ Used by professional chefs</li>
									</ul>
								</div>
							</div>
							<div className="text-center">
								<div className="bg-white p-6 rounded-lg shadow-lg mb-4">
									<h4 className="text-lg font-bold text-burgundy-900 mb-2">Stir-Fry Starter Pack</h4>
									<p className="text-gray-700 mb-4">Sambal Oelek + Sambal Bali</p>
									<p className="text-2xl font-bold text-gold-600 mb-2">£14.99</p>
									<p className="text-sm text-gray-600 mb-4">Free UK delivery • Ready to cook</p>
								</div>
								<div className="flex flex-col gap-3">
									<Link 
										href="/sample-pack-try-first"
										className="bg-gold-600 hover:bg-gold-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
									>
										Get Starter Pack - £14.99
									</Link>
									<Link 
										href="/sambal-oelek-uk"
										className="bg-burgundy-600 hover:bg-burgundy-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
									>
										Just Sambal Oelek - £7.49
									</Link>
								</div>
							</div>
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
							Master More Spicy Cooking
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<Link 
								href="/blog/5-asian-hot-sauces-beat-sriracha"
								className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
							>
								<h3 className="text-lg font-semibold text-burgundy-800 mb-2 font-brand">
									5 Asian Hot Sauces That Beat Sriracha
								</h3>
								<p className="text-gray-600 text-sm font-body">
									Discover superior alternatives to basic Sriracha for all your cooking needs.
								</p>
							</Link>
							<Link 
								href="/blog/sambal-vs-sriracha"
								className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
							>
								<h3 className="text-lg font-semibold text-burgundy-800 mb-2 font-brand">
									Sambal vs Sriracha: Complete Comparison
								</h3>
								<p className="text-gray-600 text-sm font-body">
									Understand why authentic sambal outperforms commercial hot sauces.
								</p>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}