import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sambal vs Sriracha | Original vs Commercial Hot Sauce",
	description: "Discover why Indonesian sambal predates Sriracha by centuries. Compare authentic Spice Islands chili paste vs Thai-American hot sauce. Find the real Asian hot sauce here.",
	keywords: [
		"sambal vs sriracha",
		"sriracha alternative", 
		"asian hot sauce comparison",
		"indonesian sambal",
		"authentic asian hot sauce",
		"sambal oelek vs sriracha",
		"original asian chili sauce",
		"traditional indonesian hot sauce"
	],
	openGraph: {
		title: "Sambal vs Sriracha | Original vs Commercial Hot Sauce",
		description: "Why Indonesian sambal is the authentic Asian hot sauce that predates Sriracha by centuries. Compare ingredients, taste, and cultural heritage.",
		images: ["/images/optimized/sambal-vs-sriracha-comparison-lg.webp"],
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/blog/sambal-vs-sriracha",
	},
};

export default function SambalVsSrirachaPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
			{/* Hero Section */}
			<section className="py-16 bg-gradient-to-br from-burgundy-50 to-gold-50 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-burgundy-900/5 via-transparent to-gold-600/5"></div>
				
				<div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-6 font-brand">
						Sambal vs Sriracha
						<span className="text-gold-700 block">
							The Original vs The Imitation
						</span>
					</h1>
					<p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed font-body">
						Think Sriracha is the original Asian hot sauce? Think again. Indonesian sambal has been perfected for centuries before Sriracha even existed. Here's why authentic beats commercial every time.
					</p>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					
					{/* Quick Comparison Table */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-12">
						<h2 className="text-3xl font-bold text-burgundy-900 mb-8 text-center font-brand">Quick Comparison: The Truth About Asian Hot Sauces</h2>
						
						<div className="overflow-x-auto">
							<table className="w-full text-left">
								<thead>
									<tr className="border-b-2 border-burgundy-200">
										<th className="py-4 px-6 font-bold text-burgundy-900">Factor</th>
										<th className="py-4 px-6 font-bold text-burgundy-900 text-center">Indonesian Sambal</th>
										<th className="py-4 px-6 font-bold text-neutral-600 text-center">Sriracha</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Origin</td>
										<td className="py-4 px-6 text-center bg-green-50">🇮🇩 Indonesia (Spice Islands)</td>
										<td className="py-4 px-6 text-center">🇺🇸 California (Thai-inspired)</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">History</td>
										<td className="py-4 px-6 text-center bg-green-50">500+ years old</td>
										<td className="py-4 px-6 text-center">40+ years old</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Main Ingredients</td>
										<td className="py-4 px-6 text-center bg-green-50">Red chilies, salt, vinegar</td>
										<td className="py-4 px-6 text-center">Red jalapeños, sugar, garlic, vinegar</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Sugar Content</td>
										<td className="py-4 px-6 text-center bg-green-50">Minimal to none</td>
										<td className="py-4 px-6 text-center">High (sweetened)</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Heat Level</td>
										<td className="py-4 px-6 text-center bg-green-50">Variable (authentic varieties)</td>
										<td className="py-4 px-6 text-center">Mild-medium (standardized)</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Cultural Authenticity</td>
										<td className="py-4 px-6 text-center bg-green-50">Traditional Asian cooking</td>
										<td className="py-4 px-6 text-center">Adapted for Western palates</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* The History Truth */}
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-burgundy-900 mb-6 font-brand">The History Truth: Sambal Came First</h2>
						
						<div className="bg-burgundy-50 border-l-4 border-burgundy-500 p-6 mb-6">
							<p className="text-lg font-semibold text-burgundy-900 mb-2">🕰️ Timeline Reality Check</p>
							<p className="text-burgundy-800">Indonesian sambal has been made in the Spice Islands since the 1500s. Sriracha was invented in California in 1980. That's nearly 500 years difference!</p>
						</div>

						<p className="text-lg leading-relaxed mb-6 text-neutral-700">
							When Portuguese traders first arrived in the Maluku Islands (the original Spice Islands) in 1512, they found Indonesian communities already perfecting sambal-making techniques that had been passed down through generations. These weren't simple chili sauces—they were complex, fermented pastes that preserved food in tropical climates while adding incredible depth of flavor.
						</p>

						<p className="text-lg leading-relaxed mb-6 text-neutral-700">
							Sriracha, on the other hand, was created by David Tran in Los Angeles in 1980, adapting Thai flavors for American taste buds. While delicious in its own right, calling it "authentic Asian" ignores centuries of Indonesian culinary tradition.
						</p>
					</div>

					{/* Ingredient Breakdown */}
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-burgundy-900 mb-6 font-brand">Ingredients: Simple vs Sweet</h2>
						
						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-green-50 p-6 rounded-lg">
								<h3 className="text-xl font-bold text-green-800 mb-4">Traditional Indonesian Sambal Oelek</h3>
								<ul className="space-y-2">
									<li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Red bird's eye chilies</li>
									<li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Sea salt</li>
									<li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>White vinegar</li>
								</ul>
								<p className="text-sm text-green-700 mt-4 italic">That's it. Pure, authentic flavor.</p>
							</div>
							
							<div className="bg-neutral-100 p-6 rounded-lg">
								<h3 className="text-xl font-bold text-neutral-700 mb-4">Commercial Sriracha</h3>
								<ul className="space-y-2">
									<li className="flex items-center"><span className="w-2 h-2 bg-neutral-500 rounded-full mr-3"></span>Red jalapeño peppers</li>
									<li className="flex items-center"><span className="w-2 h-2 bg-neutral-500 rounded-full mr-3"></span>Sugar (lots of it)</li>
									<li className="flex items-center"><span className="w-2 h-2 bg-neutral-500 rounded-full mr-3"></span>Salt</li>
									<li className="flex items-center"><span className="w-2 h-2 bg-neutral-500 rounded-full mr-3"></span>Garlic</li>
									<li className="flex items-center"><span className="w-2 h-2 bg-neutral-500 rounded-full mr-3"></span>Distilled vinegar</li>
									<li className="flex items-center"><span className="w-2 h-2 bg-neutral-500 rounded-full mr-3"></span>Potassium sorbate</li>
									<li className="flex items-center"><span className="w-2 h-2 bg-neutral-500 rounded-full mr-3"></span>Sodium bisulfite</li>
									<li className="flex items-center"><span className="w-2 h-2 bg-neutral-500 rounded-full mr-3"></span>Xanthan gum</li>
								</ul>
								<p className="text-sm text-neutral-600 mt-4 italic">Adapted for mass production and sweetness.</p>
							</div>
						</div>
					</div>

					{/* Taste Profile */}
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-burgundy-900 mb-6 font-brand">Taste Profile: Complex vs Simple</h2>
						
						<div className="bg-white p-8 rounded-lg shadow-lg">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h3 className="text-2xl font-bold text-burgundy-900 mb-4">Indonesian Sambal</h3>
									<ul className="space-y-3 text-neutral-700">
										<li><strong>Heat:</strong> Clean, building heat that complements food</li>
										<li><strong>Flavor:</strong> Complex, umami-rich, slightly fermented</li>
										<li><strong>Texture:</strong> Slightly coarse, rustic</li>
										<li><strong>Finish:</strong> Long, warming, authentic</li>
										<li><strong>Best For:</strong> Traditional cooking, marinades, authentic dishes</li>
									</ul>
								</div>
								
								<div>
									<h3 className="text-2xl font-bold text-neutral-700 mb-4">Sriracha</h3>
									<ul className="space-y-3 text-neutral-700">
										<li><strong>Heat:</strong> Mild, sweet heat</li>
										<li><strong>Flavor:</strong> Sweet, garlicky, tangy</li>
										<li><strong>Texture:</strong> Smooth, processed</li>
										<li><strong>Finish:</strong> Sweet, mild</li>
										<li><strong>Best For:</strong> American-Asian fusion, dipping sauce</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* Cultural Context */}
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-burgundy-900 mb-6 font-brand">Cultural Context: Traditional vs Commercial</h2>
						
						<p className="text-lg leading-relaxed mb-6 text-neutral-700">
							In Indonesia, sambal isn't just a condiment—it's a cultural cornerstone. Every region has its own varieties, techniques, and family recipes passed down through generations. Making sambal is considered an art form, with experienced cooks able to identify the source and method by taste alone.
						</p>

						<p className="text-lg leading-relaxed mb-6 text-neutral-700">
							Sriracha, while popular, was designed as a commercial product for Western markets. It's consistent, mild, and sweet because it was created to appeal to American taste preferences, not to represent authentic Thai or Asian cuisine.
						</p>

						<div className="bg-gold-50 border-l-4 border-gold-500 p-6">
							<p className="text-lg font-semibold text-gold-900 mb-2">🌶️ The Real Asian Hot Sauce</p>
							<p className="text-gold-800">If you want to experience authentic Asian hot sauce culture, start with Indonesian sambal. It's what Asian families have been making for centuries—before commercial alternatives existed.</p>
						</div>
					</div>

					{/* When to Use Each */}
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-burgundy-900 mb-6 font-brand">When to Use Each: A Practical Guide</h2>
						
						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-green-50 p-6 rounded-lg">
								<h3 className="text-xl font-bold text-green-800 mb-4">Choose Indonesian Sambal When You Want:</h3>
								<ul className="space-y-2 text-green-700">
									<li>✓ Authentic Asian flavors</li>
									<li>✓ Complex, building heat</li>
									<li>✓ Traditional cooking ingredient</li>
									<li>✓ Lower sugar content</li>
									<li>✓ Cultural authenticity</li>
									<li>✓ Premium quality</li>
									<li>✓ To impress foodie friends</li>
								</ul>
							</div>
							
							<div className="bg-neutral-100 p-6 rounded-lg">
								<h3 className="text-xl font-bold text-neutral-700 mb-4">Choose Sriracha When You Want:</h3>
								<ul className="space-y-2 text-neutral-600">
									<li>• Mild, sweet heat</li>
									<li>• American-Asian fusion</li>
									<li>• Familiar flavors</li>
									<li>• Wide availability</li>
									<li>• Budget option</li>
									<li>• Consistent taste</li>
									<li>• Sweet dipping sauce</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Try Authentic Sambal */}
					<div className="bg-burgundy-900 text-white p-8 rounded-lg text-center">
						<h2 className="text-3xl font-bold mb-4 font-brand">Ready to Try the Original?</h2>
						<p className="text-xl mb-6 text-burgundy-100">
							Experience what Asian hot sauce was meant to be. Authentic Indonesian sambal from the Spice Islands.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link 
								href="/sambal-oelek-uk"
								className="bg-gold-600 hover:bg-gold-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
							>
								Shop Authentic Sambal Oelek
							</Link>
							<Link 
								href="/shop"
								className="bg-transparent border-2 border-white hover:bg-white hover:text-burgundy-900 text-white font-bold py-3 px-6 rounded-lg transition-colors"
							>
								Browse All Sambal Varieties
							</Link>
						</div>
					</div>

				</div>
			</section>
		</div>
	);
}