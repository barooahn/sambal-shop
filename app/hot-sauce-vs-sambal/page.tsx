import Link from "next/link";
import { getInternalUrls } from "@/lib/url-utils";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Hot Sauce vs Sambal | Key Differences Explained",
	description: "Hot sauce vs sambal: understand the key differences between Western hot sauces and authentic Indonesian sambal. Ingredients, heat levels, uses, and which is better explained.",
	keywords: [
		"hot sauce vs sambal",
		"difference between hot sauce and sambal",
		"sambal vs hot sauce",
		"western hot sauce vs asian sambal",
		"what is sambal vs hot sauce",
		"indonesian sambal vs american hot sauce",
		"sambal or hot sauce better",
		"hot sauce sambal difference"
	],
	openGraph: {
		title: "Hot Sauce vs Sambal: Key Differences Explained",
		description: "Discover the key differences between Western hot sauces and authentic Indonesian sambal. Ingredients, preparation, heat levels, and culinary uses compared.",
		images: ["/images/optimized/sambal-vs-sriracha-comparison-lg.webp"],
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/hot-sauce-vs-sambal",
	},
};

export default function HotSauceVsSambalPage() {
	const urls = getInternalUrls();

	return (
		<div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
			{/* Hero Section */}
			<section className="py-16 bg-gradient-to-br from-burgundy-50 to-gold-50 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-burgundy-900/5 via-transparent to-gold-600/5"></div>
				
				<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-6 font-brand">
						Hot Sauce vs Sambal
						<span className="text-gold-700 block">
							Key Differences Explained
						</span>
					</h1>
					<p className="text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed font-body mb-8">
						Not all chili condiments are created equal. Discover the fundamental differences between Western hot sauces and authentic Indonesian sambal - from ingredients and preparation to heat levels and culinary applications.
					</p>
					<div className="bg-blue-50 border-l-4 border-blue-500 p-6 max-w-3xl mx-auto">
						<p className="text-lg font-semibold text-blue-900 mb-2">🤔 Quick Answer</p>
						<p className="text-blue-800">Hot sauce is liquid, processed, and designed for mass market appeal. Sambal is a chunky paste, traditionally made, and focused on authentic flavor complexity.</p>
					</div>
				</div>
			</section>

			{/* Quick Comparison */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Quick Comparison: Hot Sauce vs Sambal</h2>
					
					<div className="overflow-x-auto bg-white rounded-lg shadow-xl">
						<table className="w-full text-left">
							<thead>
								<tr className="bg-burgundy-100 border-b-2 border-burgundy-200">
									<th className="py-4 px-6 font-bold text-burgundy-900">Aspect</th>
									<th className="py-4 px-6 font-bold text-red-700 text-center">Western Hot Sauce</th>
									<th className="py-4 px-6 font-bold text-green-800 text-center">Indonesian Sambal</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-neutral-200">
									<td className="py-4 px-6 font-medium">Texture</td>
									<td className="py-4 px-6 text-center">Liquid, smooth</td>
									<td className="py-4 px-6 text-center bg-green-50">Paste, chunky, rustic</td>
								</tr>
								<tr className="border-b border-neutral-200">
									<td className="py-4 px-6 font-medium">Primary Purpose</td>
									<td className="py-4 px-6 text-center">Add heat</td>
									<td className="py-4 px-6 text-center bg-green-50">Enhance flavor + heat</td>
								</tr>
								<tr className="border-b border-neutral-200">
									<td className="py-4 px-6 font-medium">Ingredient Count</td>
									<td className="py-4 px-6 text-center">8-15+ ingredients</td>
									<td className="py-4 px-6 text-center bg-green-50">3-5 ingredients</td>
								</tr>
								<tr className="border-b border-neutral-200">
									<td className="py-4 px-6 font-medium">Sugar Content</td>
									<td className="py-4 px-6 text-center">High (sweetened)</td>
									<td className="py-4 px-6 text-center bg-green-50">None or minimal</td>
								</tr>
								<tr className="border-b border-neutral-200">
									<td className="py-4 px-6 font-medium">Preservation</td>
									<td className="py-4 px-6 text-center">Artificial preservatives</td>
									<td className="py-4 px-6 text-center bg-green-50">Natural (salt, acid)</td>
								</tr>
								<tr className="border-b border-neutral-200">
									<td className="py-4 px-6 font-medium">Cultural Heritage</td>
									<td className="py-4 px-6 text-center">Commercial innovation</td>
									<td className="py-4 px-6 text-center bg-green-50">500+ years tradition</td>
								</tr>
								<tr className="border-b border-neutral-200">
									<td className="py-4 px-6 font-medium">Heat Development</td>
									<td className="py-4 px-6 text-center">Immediate, fades quickly</td>
									<td className="py-4 px-6 text-center bg-green-50">Builds gradually, lasting</td>
								</tr>
								<tr>
									<td className="py-4 px-6 font-medium">Culinary Role</td>
									<td className="py-4 px-6 text-center">Condiment only</td>
									<td className="py-4 px-6 text-center bg-green-50">Condiment + cooking ingredient</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>

			{/* Detailed Breakdown */}
			<section className="py-16 bg-gradient-to-br from-burgundy-50 to-gold-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Detailed Differences Explained</h2>
					
					{/* Ingredients */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h3 className="text-2xl font-bold text-burgundy-900 mb-6">🌶️ Ingredients & Composition</h3>
						
						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-red-50 p-6 rounded-lg">
								<h4 className="text-xl font-bold text-red-800 mb-4">Typical Hot Sauce Ingredients</h4>
								<ul className="space-y-2 text-red-700 text-sm">
									<li>• Vinegar (primary ingredient)</li>
									<li>• Cayenne or generic chilies</li>
									<li>• Water</li>
									<li>• Salt</li>
									<li>• Sugar or corn syrup</li>
									<li>• Garlic powder</li>
									<li>• Xanthan gum (thickener)</li>
									<li>• Natural flavoring</li>
									<li>• Preservatives (sodium benzoate)</li>
									<li>• Food coloring</li>
								</ul>
								<p className="text-xs text-red-600 mt-3 italic">Example: Tabasco has 3 ingredients, but most commercial hot sauces have 8-15</p>
							</div>
							
							<div className="bg-green-50 p-6 rounded-lg">
								<h4 className="text-xl font-bold text-green-800 mb-4">Traditional Sambal Ingredients</h4>
								<ul className="space-y-2 text-green-700 text-sm">
									<li>• <strong>Bird's eye chilies</strong> (primary ingredient)</li>
									<li>• <strong>Salt</strong></li>
									<li>• <strong>White vinegar</strong> (minimal amount)</li>
									<li className="text-neutral-500">• That's it for basic sambal oelek</li>
								</ul>
								<div className="mt-4 pt-4 border-t border-green-200">
									<p className="text-sm font-semibold text-green-800 mb-2">Regional variations add:</p>
									<ul className="space-y-1 text-green-700 text-sm">
										<li>• Shallots, garlic</li>
										<li>• Galangal, lemongrass</li>
										<li>• Tamarind, palm sugar</li>
										<li>• Shrimp paste (terasi)</li>
									</ul>
								</div>
								<p className="text-xs text-green-600 mt-3 italic">All natural, traditional ingredients with cultural significance</p>
							</div>
						</div>
					</div>

					{/* Preparation Methods */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h3 className="text-2xl font-bold text-burgundy-900 mb-6">🏭 Preparation & Manufacturing</h3>
						
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h4 className="text-xl font-bold text-red-800 mb-4">Hot Sauce Production</h4>
								<ul className="space-y-3 text-neutral-700">
									<li>
										<strong>Industrial processing:</strong> Large-scale automated production
									</li>
									<li>
										<strong>Heat treatment:</strong> High-temperature pasteurization kills beneficial bacteria
									</li>
									<li>
										<strong>Blending:</strong> Mechanical mixing for uniform consistency
									</li>
									<li>
										<strong>Stabilizers:</strong> Chemical thickeners for shelf stability
									</li>
									<li>
										<strong>Quality control:</strong> Standardized for consistency across batches
									</li>
								</ul>
							</div>
							
							<div>
								<h4 className="text-xl font-bold text-green-800 mb-4">Sambal Preparation</h4>
								<ul className="space-y-3 text-neutral-700">
									<li>
										<strong>Stone grinding:</strong> Traditional cobek (mortar & pestle) crushing
									</li>
									<li>
										<strong>Fresh preparation:</strong> Made in small batches, often daily
									</li>
									<li>
										<strong>Hand technique:</strong> Rhythmic pounding creates proper texture
									</li>
									<li>
										<strong>Natural preservation:</strong> Salt and acid content prevents spoilage
									</li>
									<li>
										<strong>Artisanal variation:</strong> Each batch has subtle differences
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Heat & Flavor */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h3 className="text-2xl font-bold text-burgundy-900 mb-6">🔥 Heat Levels & Flavor Profiles</h3>
						
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h4 className="text-xl font-bold text-red-800 mb-4">Hot Sauce Heat Characteristics</h4>
								<div className="space-y-4">
									<div>
										<p className="font-semibold text-neutral-800">Heat Range:</p>
										<p className="text-sm text-neutral-700">Usually 500-8,000 SHU (mild to medium)</p>
									</div>
									<div>
										<p className="font-semibold text-neutral-800">Heat Pattern:</p>
										<p className="text-sm text-neutral-700">Immediate burn, fades quickly</p>
									</div>
									<div>
										<p className="font-semibold text-neutral-800">Flavor Profile:</p>
										<p className="text-sm text-neutral-700">Vinegar-forward, tangy, often sweet</p>
									</div>
									<div>
										<p className="font-semibold text-neutral-800">Aftertaste:</p>
										<p className="text-sm text-neutral-700">Acidic, sometimes metallic</p>
									</div>
								</div>
							</div>
							
							<div>
								<h4 className="text-xl font-bold text-green-800 mb-4">Sambal Heat Characteristics</h4>
								<div className="space-y-4">
									<div>
										<p className="font-semibold text-neutral-800">Heat Range:</p>
										<p className="text-sm text-neutral-700">Typically 15,000-50,000 SHU (hot to very hot)</p>
									</div>
									<div>
										<p className="font-semibold text-neutral-800">Heat Pattern:</p>
										<p className="text-sm text-neutral-700">Builds gradually, lasting warmth</p>
									</div>
									<div>
										<p className="font-semibold text-neutral-800">Flavor Profile:</p>
										<p className="text-sm text-neutral-700">Chili-forward, umami-rich, complex</p>
									</div>
									<div>
										<p className="font-semibold text-neutral-800">Aftertaste:</p>
										<p className="text-sm text-neutral-700">Clean, warming, enhances food flavors</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Usage Differences */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">How They're Used Differently</h2>
					
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-red-50 p-6 rounded-lg">
							<h3 className="text-xl font-bold text-red-800 mb-4">Hot Sauce Applications</h3>
							<ul className="space-y-2 text-red-700">
								<li>🍳 <strong>Table condiment:</strong> Added to finished dishes</li>
								<li>🌮 <strong>Drizzling:</strong> Tacos, pizza, sandwiches</li>
								<li>🥤 <strong>Cocktail mixing:</strong> Bloody Marys, micheladas</li>
								<li>🍟 <strong>Dipping sauce:</strong> Wings, fries, onion rings</li>
								<li>🥗 <strong>Salad dressing:</strong> Mixed with ranch or mayo</li>
							</ul>
							<div className="mt-4 p-3 bg-red-100 rounded">
								<p className="text-sm text-red-800"><strong>Limitation:</strong> Primarily used as a finishing condiment due to liquid consistency</p>
							</div>
						</div>
						
						<div className="bg-green-50 p-6 rounded-lg">
							<h3 className="text-xl font-bold text-green-800 mb-4">Sambal Applications</h3>
							<ul className="space-y-2 text-green-700">
								<li>🍚 <strong>Essential condiment:</strong> Served with every Indonesian meal</li>
								<li>🥘 <strong>Cooking base:</strong> Foundation for curries, stir-fries</li>
								<li>🍖 <strong>Marinade ingredient:</strong> Meat, seafood, vegetables</li>
								<li>🍜 <strong>Soup enhancer:</strong> Added during cooking for depth</li>
								<li>🥬 <strong>Vegetable accompaniment:</strong> Fresh vegetables (lalapan)</li>
								<li>🍛 <strong>Rice companion:</strong> Mixed directly into rice</li>
							</ul>
							<div className="mt-4 p-3 bg-green-100 rounded">
								<p className="text-sm text-green-800"><strong>Versatility:</strong> Functions as both condiment and cooking ingredient</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Cultural Context */}
			<section className="py-16 bg-gradient-to-br from-gold-50 to-burgundy-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Cultural Context & Heritage</h2>
					
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<h3 className="text-xl font-bold text-burgundy-900 mb-4">🇺🇸 Hot Sauce Culture</h3>
							<div className="space-y-4 text-neutral-700">
								<p><strong>Origin:</strong> Primarily American innovation (Tabasco 1868, others follow)</p>
								<p><strong>Purpose:</strong> Commercial product designed for mass market appeal</p>
								<p><strong>Marketing:</strong> Focus on heat levels, novelty flavors, brand personality</p>
								<p><strong>Usage:</strong> Individual preference, not integral to traditional cuisine</p>
								<p><strong>Innovation:</strong> Constantly evolving with new flavors and heat levels</p>
							</div>
						</div>
						
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<h3 className="text-xl font-bold text-burgundy-900 mb-4">🇮🇩 Sambal Tradition</h3>
							<div className="space-y-4 text-neutral-700">
								<p><strong>Origin:</strong> Indonesia's Spice Islands, dating back 500+ years</p>
								<p><strong>Purpose:</strong> Essential component of Indonesian cuisine and culture</p>
								<p><strong>Tradition:</strong> Recipes passed down through generations</p>
								<p><strong>Usage:</strong> Required accompaniment to traditional meals</p>
								<p><strong>Stability:</strong> Time-tested recipes remain largely unchanged</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Which Should You Choose */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Which Should You Choose?</h2>
					
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
							<h3 className="text-lg font-bold text-red-800 mb-4">Choose Hot Sauce If You Want:</h3>
							<ul className="space-y-2 text-red-700 text-sm">
								<li>✓ Mild, familiar heat levels</li>
								<li>✓ Liquid consistency for drizzling</li>
								<li>✓ Sweet, tangy flavors</li>
								<li>✓ Long shelf life at room temperature</li>
								<li>✓ Wide availability in stores</li>
								<li>✓ Budget-friendly options</li>
								<li>✓ American/Western flavor profiles</li>
							</ul>
						</div>
						
						<div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
							<h3 className="text-lg font-bold text-green-800 mb-4">Choose Sambal If You Want:</h3>
							<ul className="space-y-2 text-green-700 text-sm">
								<li>✓ Authentic Asian flavors</li>
								<li>✓ Intense, complex heat</li>
								<li>✓ Natural, minimal ingredients</li>
								<li>✓ Cooking ingredient versatility</li>
								<li>✓ Traditional preparation methods</li>
								<li>✓ Cultural authenticity</li>
								<li>✓ Premium, artisanal quality</li>
							</ul>
						</div>
						
						<div className="bg-gold-50 border-2 border-gold-200 p-6 rounded-lg">
							<h3 className="text-lg font-bold text-gold-800 mb-4">Try Both If You Want:</h3>
							<ul className="space-y-2 text-gold-700 text-sm">
								<li>✓ To explore different heat styles</li>
								<li>✓ Variety in your spice collection</li>
								<li>✓ Different options for different foods</li>
								<li>✓ To understand global chili traditions</li>
								<li>✓ Maximum culinary flexibility</li>
							</ul>
							<div className="mt-4 p-3 bg-gold-100 rounded">
								<p className="text-xs text-gold-800"><strong>Pro tip:</strong> Use hot sauce for American dishes, sambal for Asian cuisine</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Try Authentic Sambal */}
			<section className="py-16 bg-burgundy-900 text-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-6 font-brand">Experience the Sambal Difference</h2>
					<p className="text-xl mb-8 text-burgundy-100">
						Ready to explore beyond Western hot sauce? Try authentic Indonesian sambal made by Chef Yossie using traditional methods and ingredients.
					</p>
					
					<div className="bg-burgundy-800 p-6 rounded-lg mb-8">
						<h3 className="text-lg font-bold mb-2">Perfect for Hot Sauce Lovers Who Want More</h3>
						<p className="text-burgundy-200 mb-4">Compare authentic sambal side-by-side with your favorite hot sauce</p>
						<p className="text-sm text-burgundy-300">Sample pack includes mild, medium, and hot varieties</p>
					</div>
					
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link 
							href={urls.samplePack}
							className="bg-gold-600 hover:bg-gold-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
						>
							Try Sambal Sample Pack
						</Link>
						<Link 
							href={urls.sambalOelek}
							className="bg-transparent border-2 border-white hover:bg-white hover:text-burgundy-900 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
						>
							Shop Traditional Sambal
						</Link>
					</div>
					
					<p className="text-sm text-burgundy-300 mt-6">
						Made by Indonesian Chef Yossie • Traditional Bandung recipes • Free UK delivery
					</p>
				</div>
			</section>
		</div>
	);
}