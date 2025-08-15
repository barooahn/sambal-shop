import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Best Sriracha Alternative: Authentic Indonesian Sambal | Spice Island Indonesia",
	description: "Discover the superior Sriracha alternative: authentic Indonesian sambal. 500+ years older, no artificial ingredients, complex flavors. Free UK delivery. Try the original Asian hot sauce.",
	keywords: [
		"sriracha alternative",
		"best sriracha substitute",
		"authentic asian hot sauce",
		"indonesian sambal uk",
		"natural hot sauce alternative",
		"organic sriracha substitute",
		"traditional asian condiment",
		"sriracha replacement uk"
	],
	openGraph: {
		title: "Best Sriracha Alternative: Authentic Indonesian Sambal",
		description: "Discover why Indonesian sambal is the superior Sriracha alternative. 500+ years older, no artificial ingredients, authentic Asian flavors.",
		images: ["/images/optimized/sriracha-alternative-comparison-lg.webp"],
	},
};

export default function SrirachaAlternativePage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
			{/* Hero Section */}
			<section className="py-16 bg-gradient-to-br from-burgundy-50 to-gold-50 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-burgundy-900/5 via-transparent to-gold-600/5"></div>
				
				<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="bg-red-100 border border-red-300 rounded-lg p-4 max-w-2xl mx-auto mb-8">
						<p className="text-red-800 font-semibold">🔍 Searching for a Sriracha Alternative?</p>
						<p className="text-red-700">You found something 500 years better</p>
					</div>
					
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-6 font-brand">
						The Superior
						<span className="text-gold-700 block">
							Sriracha Alternative
						</span>
					</h1>
					<p className="text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed font-body mb-8">
						Meet Indonesian sambal - the original Asian hot sauce that predates Sriracha by 500 years. No artificial ingredients, no excessive sweetness, just pure authentic flavor that makes Sriracha taste like ketchup.
					</p>
					
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
						<Link 
							href="/sample-pack-try-first"
							className="bg-burgundy-600 hover:bg-burgundy-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
						>
							Try Authentic Alternative
						</Link>
						<Link 
							href="#comparison"
							className="bg-transparent border-2 border-burgundy-600 hover:bg-burgundy-600 hover:text-white text-burgundy-600 font-bold py-4 px-8 rounded-lg transition-colors text-lg"
						>
							See Comparison
						</Link>
					</div>
				</div>
			</section>

			{/* Why Sriracha Users Switch */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Why Sriracha Lovers Are Switching to Indonesian Sambal</h2>
					
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center p-6">
							<div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🌶️</span>
							</div>
							<h3 className="text-xl font-bold text-burgundy-900 mb-3">Pure Heat, No Sugar</h3>
							<p className="text-neutral-700">Sriracha is loaded with sugar. Indonesian sambal delivers clean, building heat that enhances flavors instead of masking them with sweetness.</p>
						</div>
						
						<div className="text-center p-6">
							<div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🏛️</span>
							</div>
							<h3 className="text-xl font-bold text-burgundy-900 mb-3">500+ Years Older</h3>
							<p className="text-neutral-700">While Sriracha was invented in 1980 California, Indonesian sambal has been perfected since the 1500s in the Spice Islands. This is the original.</p>
						</div>
						
						<div className="text-center p-6">
							<div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🧪</span>
							</div>
							<h3 className="text-xl font-bold text-burgundy-900 mb-3">No Artificial Ingredients</h3>
							<p className="text-neutral-700">Authentic sambal contains only chilies, salt, and vinegar. No preservatives, thickeners, or artificial flavors that Sriracha relies on.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Detailed Comparison */}
			<section id="comparison" className="py-16 bg-gradient-to-br from-burgundy-50 to-gold-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Indonesian Sambal vs Sriracha: The Complete Comparison</h2>
					
					<div className="bg-white rounded-lg shadow-xl overflow-hidden">
						<div className="overflow-x-auto">
							<table className="w-full">
								<thead>
									<tr className="bg-burgundy-900 text-white">
										<th className="py-4 px-6 text-left font-bold">Factor</th>
										<th className="py-4 px-6 text-center font-bold">Indonesian Sambal</th>
										<th className="py-4 px-6 text-center font-bold">Sriracha</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">History & Origin</td>
										<td className="py-4 px-6 text-center bg-green-50">🇮🇩 Indonesia, 1500s+</td>
										<td className="py-4 px-6 text-center">🇺🇸 California, 1980</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Primary Ingredients</td>
										<td className="py-4 px-6 text-center bg-green-50">Bird's eye chilies, salt, vinegar</td>
										<td className="py-4 px-6 text-center">Red jalapeños, sugar, garlic, vinegar</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Sugar Content</td>
										<td className="py-4 px-6 text-center bg-green-50">Zero added sugar</td>
										<td className="py-4 px-6 text-center">High sugar content</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Heat Level (SHU)</td>
										<td className="py-4 px-6 text-center bg-green-50">15,000-30,000</td>
										<td className="py-4 px-6 text-center">2,200-2,500</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Preservatives</td>
										<td className="py-4 px-6 text-center bg-green-50">None (naturally preserved)</td>
										<td className="py-4 px-6 text-center">Potassium sorbate, sodium bisulfite</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Artificial Additives</td>
										<td className="py-4 px-6 text-center bg-green-50">None</td>
										<td className="py-4 px-6 text-center">Xanthan gum, distilled vinegar</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Flavor Profile</td>
										<td className="py-4 px-6 text-center bg-green-50">Complex, umami-rich, clean heat</td>
										<td className="py-4 px-6 text-center">Sweet, mild, one-dimensional</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Cultural Authenticity</td>
										<td className="py-4 px-6 text-center bg-green-50">Traditional Indonesian recipe</td>
										<td className="py-4 px-6 text-center">Thai-inspired American product</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Nutritional Value</td>
										<td className="py-4 px-6 text-center bg-green-50">High vitamin C, antioxidants</td>
										<td className="py-4 px-6 text-center">High sodium, added sugars</td>
									</tr>
									<tr>
										<td className="py-4 px-6 font-medium">Price Point</td>
										<td className="py-4 px-6 text-center bg-green-50">Premium (authentic ingredients)</td>
										<td className="py-4 px-6 text-center">Budget (mass production)</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>

			{/* Customer Testimonials */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">What Former Sriracha Users Say</h2>
					
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-burgundy-50 p-6 rounded-lg">
							<div className="flex items-center mb-4">
								<div className="flex text-gold-500">
									{[...Array(5)].map((_, i) => (
										<span key={i}>⭐</span>
									))}
								</div>
							</div>
							<p className="text-burgundy-800 mb-4 italic">
								"I used Sriracha on everything for years. After trying Chef Yossie's sambal oelek, I realized how artificial and sweet Sriracha tastes. This is what hot sauce should be - pure chili flavor that enhances food instead of overpowering it."
							</p>
							<p className="text-burgundy-600 font-semibold">- Marcus T., London</p>
							<p className="text-burgundy-500 text-sm">Former Sriracha addict, now sambal convert</p>
						</div>
						
						<div className="bg-burgundy-50 p-6 rounded-lg">
							<div className="flex items-center mb-4">
								<div className="flex text-gold-500">
									{[...Array(5)].map((_, i) => (
										<span key={i}>⭐</span>
									))}
								</div>
							</div>
							<p className="text-burgundy-800 mb-4 italic">
								"The difference is incredible. Sriracha made everything taste the same - sweet and garlicky. Indonesian sambal has layers of flavor and real heat. I can't go back to that artificial stuff."
							</p>
							<p className="text-burgundy-600 font-semibold">- Sarah M., Manchester</p>
							<p className="text-burgundy-500 text-sm">Chef who switched restaurants to authentic sambal</p>
						</div>
					</div>
				</div>
			</section>

			{/* Usage Guide */}
			<section className="py-16 bg-gradient-to-br from-gold-50 to-burgundy-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">How to Replace Sriracha with Indonesian Sambal</h2>
					
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<h3 className="text-xl font-bold text-burgundy-900 mb-4">Direct Substitution Guide</h3>
							<div className="space-y-3">
								<div className="flex justify-between items-center border-b pb-2">
									<span className="font-medium">1 tbsp Sriracha</span>
									<span className="text-burgundy-600">= 1/2 tsp Sambal Oelek</span>
								</div>
								<div className="flex justify-between items-center border-b pb-2">
									<span className="font-medium">Pizza/Eggs</span>
									<span className="text-burgundy-600">Start with tiny dots</span>
								</div>
								<div className="flex justify-between items-center border-b pb-2">
									<span className="font-medium">Stir-fries</span>
									<span className="text-burgundy-600">1/4 tsp per serving</span>
								</div>
								<div className="flex justify-between items-center border-b pb-2">
									<span className="font-medium">Marinades</span>
									<span className="text-burgundy-600">1/2 tsp per portion</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="font-medium">Dipping sauce</span>
									<span className="text-burgundy-600">Mix with mayo/yogurt</span>
								</div>
							</div>
						</div>
						
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<h3 className="text-xl font-bold text-burgundy-900 mb-4">Pro Tips for Switching</h3>
							<ul className="space-y-3 text-neutral-700">
								<li className="flex items-start">
									<span className="text-gold-600 mr-2">💡</span>
									<span><strong>Start small:</strong> Sambal is 10x hotter than Sriracha</span>
								</li>
								<li className="flex items-start">
									<span className="text-gold-600 mr-2">💡</span>
									<span><strong>Build tolerance:</strong> Increase amount gradually over 2 weeks</span>
								</li>
								<li className="flex items-start">
									<span className="text-gold-600 mr-2">💡</span>
									<span><strong>Try Sambal Kecap first:</strong> Milder option for beginners</span>
								</li>
								<li className="flex items-start">
									<span className="text-gold-600 mr-2">💡</span>
									<span><strong>Mix with familiar foods:</strong> Rice, noodles, scrambled eggs</span>
								</li>
								<li className="flex items-start">
									<span className="text-gold-600 mr-2">💡</span>
									<span><strong>Keep Sambal Bali handy:</strong> Aromatic spices balance the heat</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Product Recommendations */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Best Indonesian Sambal for Former Sriracha Users</h2>
					
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200">
							<div className="text-center mb-4">
								<span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">BEST FOR BEGINNERS</span>
							</div>
							<h3 className="text-xl font-bold text-burgundy-900 mb-3">Sambal Kecap</h3>
							<p className="text-neutral-700 mb-4">Sweet soy sauce balances the heat - perfect transition from Sriracha's sweetness</p>
							<div className="space-y-2 text-sm text-neutral-600 mb-4">
								<p>• Mild heat level</p>
								<p>• Sweet & savory</p>
								<p>• Great with grilled meats</p>
							</div>
							<Link href="/shop" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded transition-colors">
								Try Sambal Kecap
							</Link>
						</div>
						
						<div className="bg-gradient-to-br from-gold-50 to-gold-100 p-6 rounded-lg border-2 border-gold-200">
							<div className="text-center mb-4">
								<span className="bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
							</div>
							<h3 className="text-xl font-bold text-burgundy-900 mb-3">Sambal Oelek</h3>
							<p className="text-neutral-700 mb-4">Pure chili paste - the authentic Indonesian experience without compromise</p>
							<div className="space-y-2 text-sm text-neutral-600 mb-4">
								<p>• Medium-hot heat</p>
								<p>• Pure chili flavor</p>
								<p>• Most versatile</p>
							</div>
							<Link href="/sambal-oelek-uk" className="block w-full bg-gold-600 hover:bg-gold-700 text-white text-center py-2 rounded transition-colors">
								Try Sambal Oelek
							</Link>
						</div>
						
						<div className="bg-gradient-to-br from-burgundy-50 to-burgundy-100 p-6 rounded-lg border-2 border-burgundy-200">
							<div className="text-center mb-4">
								<span className="bg-burgundy-600 text-white px-3 py-1 rounded-full text-sm font-bold">GOURMET CHOICE</span>
							</div>
							<h3 className="text-xl font-bold text-burgundy-900 mb-3">Sambal Bali</h3>
							<p className="text-neutral-700 mb-4">Aromatic spices add complexity - sophisticated flavor for food enthusiasts</p>
							<div className="space-y-2 text-sm text-neutral-600 mb-4">
								<p>• Medium heat with aromatics</p>
								<p>• Galangal & lemongrass</p>
								<p>• Restaurant quality</p>
							</div>
							<Link href="/sambal-bali-aromatic-spicy" className="block w-full bg-burgundy-600 hover:bg-burgundy-700 text-white text-center py-2 rounded transition-colors">
								Try Sambal Bali
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="py-16 bg-burgundy-900 text-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-6 font-brand">Ready to Upgrade from Sriracha?</h2>
					<p className="text-xl mb-8 text-burgundy-100">
						Join thousands of UK food lovers who discovered what Asian hot sauce was meant to be.
						Try authentic Indonesian sambal with our risk-free sample pack.
					</p>
					
					<div className="bg-burgundy-800 p-6 rounded-lg mb-8">
						<h3 className="text-lg font-bold mb-2">Limited Time: Sriracha Switcher Special</h3>
						<p className="text-burgundy-200 mb-4">Free delivery + 20% off your first order when you try our sample pack</p>
						<p className="text-sm text-burgundy-300">Use code: UPGRADE20 at checkout</p>
					</div>
					
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link 
							href="/sample-pack-try-first"
							className="bg-gold-600 hover:bg-gold-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
						>
							Try Sample Pack - Free Delivery
						</Link>
						<Link 
							href="/shop"
							className="bg-transparent border-2 border-white hover:bg-white hover:text-burgundy-900 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
						>
							Shop All Varieties
						</Link>
					</div>
					
					<p className="text-sm text-burgundy-300 mt-6">
						Made by Indonesian Chef Yossie using traditional Bandung family recipes • UK delivery in 1-2 days
					</p>
				</div>
			</section>
		</div>
	);
}