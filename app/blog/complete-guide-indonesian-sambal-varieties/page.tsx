import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Complete Guide to Indonesian Sambal Varieties: From Oelek to Bali | Spice Island Indonesia",
	description: "Comprehensive guide to 15+ authentic Indonesian sambal varieties. Learn regional differences, heat levels, ingredients, and traditional uses. Master Indonesian condiments.",
	keywords: [
		"indonesian sambal varieties",
		"sambal types",
		"authentic indonesian condiments",
		"sambal oelek vs sambal bali",
		"traditional indonesian sauces",
		"regional sambal differences",
		"indonesian chili paste varieties",
		"sambal guide uk"
	],
	openGraph: {
		title: "Complete Guide to Indonesian Sambal Varieties: From Oelek to Bali",
		description: "Discover 15+ authentic Indonesian sambal varieties from across the archipelago. Complete guide to regional differences, heat levels, and traditional uses.",
		images: ["/images/optimized/indonesian-sambal-varieties-guide-lg.webp"],
	},
};

export default function CompleteGuideIndonesianSambalVarietiesPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
			{/* Hero Section */}
			<section className="py-16 bg-gradient-to-br from-burgundy-50 to-gold-50 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-burgundy-900/5 via-transparent to-gold-600/5"></div>
				
				<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-6 font-brand">
						Complete Guide to
						<span className="text-gold-700 block">
							Indonesian Sambal Varieties
						</span>
					</h1>
					<p className="text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed font-body mb-8">
						From the volcanic islands of Indonesia comes the world's most diverse collection of chili condiments. Discover 15+ authentic sambal varieties, their regional origins, heat levels, and traditional uses in this comprehensive guide.
					</p>
					<div className="bg-burgundy-50 border-l-4 border-burgundy-500 p-6 max-w-3xl mx-auto">
						<p className="text-lg font-semibold text-burgundy-900 mb-2">🌶️ Did You Know?</p>
						<p className="text-burgundy-800">Indonesia has over 300 regional sambal varieties - more than any other country in the world. Each island, region, and sometimes even village has its own unique recipe passed down through generations.</p>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-16">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					
					{/* Quick Reference Table */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-12">
						<h2 className="text-3xl font-bold text-burgundy-900 mb-8 text-center font-brand">Quick Reference: Popular Sambal Varieties</h2>
						
						<div className="overflow-x-auto">
							<table className="w-full text-left">
								<thead>
									<tr className="border-b-2 border-burgundy-200">
										<th className="py-4 px-6 font-bold text-burgundy-900">Sambal Type</th>
										<th className="py-4 px-6 font-bold text-burgundy-900 text-center">Origin</th>
										<th className="py-4 px-6 font-bold text-burgundy-900 text-center">Heat Level</th>
										<th className="py-4 px-6 font-bold text-burgundy-900 text-center">Key Ingredients</th>
										<th className="py-4 px-6 font-bold text-burgundy-900 text-center">Best Use</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b border-neutral-200 bg-green-50">
										<td className="py-4 px-6 font-medium">Sambal Oelek</td>
										<td className="py-4 px-6 text-center">Java</td>
										<td className="py-4 px-6 text-center">🌶️🌶️🌶️</td>
										<td className="py-4 px-6 text-center">Red chilies, salt, vinegar</td>
										<td className="py-4 px-6 text-center">Universal base</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Sambal Bali</td>
										<td className="py-4 px-6 text-center">Bali</td>
										<td className="py-4 px-6 text-center">🌶️🌶️</td>
										<td className="py-4 px-6 text-center">Chilies, galangal, lemongrass</td>
										<td className="py-4 px-6 text-center">Grilled meats</td>
									</tr>
									<tr className="border-b border-neutral-200 bg-green-50">
										<td className="py-4 px-6 font-medium">Sambal Terasi</td>
										<td className="py-4 px-6 text-center">Java</td>
										<td className="py-4 px-6 text-center">🌶️🌶️🌶️🌶️</td>
										<td className="py-4 px-6 text-center">Chilies, shrimp paste, palm sugar</td>
										<td className="py-4 px-6 text-center">Rice dishes</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Sambal Matah</td>
										<td className="py-4 px-6 text-center">Bali</td>
										<td className="py-4 px-6 text-center">🌶️🌶️</td>
										<td className="py-4 px-6 text-center">Chilies, shallots, lemongrass (raw)</td>
										<td className="py-4 px-6 text-center">Seafood</td>
									</tr>
									<tr className="border-b border-neutral-200 bg-green-50">
										<td className="py-4 px-6 font-medium">Sambal Bajak</td>
										<td className="py-4 px-6 text-center">Java</td>
										<td className="py-4 px-6 text-center">🌶️🌶️🌶️</td>
										<td className="py-4 px-6 text-center">Chilies, tomatoes, tamarind</td>
										<td className="py-4 px-6 text-center">Fried foods</td>
									</tr>
									<tr className="border-b border-neutral-200">
										<td className="py-4 px-6 font-medium">Sambal Kecap</td>
										<td className="py-4 px-6 text-center">Java</td>
										<td className="py-4 px-6 text-center">🌶️🌶️</td>
										<td className="py-4 px-6 text-center">Chilies, sweet soy sauce, onions</td>
										<td className="py-4 px-6 text-center">Satay & grilled meats</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* Regional Categories */}
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-burgundy-900 mb-8 font-brand">Sambal by Region</h2>
						
						{/* Java */}
						<div className="mb-10">
							<h3 className="text-2xl font-bold text-burgundy-800 mb-6">Javanese Sambals</h3>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="bg-white p-6 rounded-lg shadow-lg">
									<h4 className="text-xl font-bold text-burgundy-900 mb-3">Sambal Oelek</h4>
									<div className="space-y-2 text-neutral-700">
										<p><strong>Origin:</strong> Central & East Java</p>
										<p><strong>Heat:</strong> Medium-Hot (15,000-30,000 SHU)</p>
										<p><strong>Texture:</strong> Coarse, chunky</p>
										<p><strong>Key Ingredients:</strong> Red bird's eye chilies, salt, vinegar</p>
										<p><strong>Traditional Use:</strong> Universal base for other sambals, cooking ingredient</p>
										<p className="text-sm italic text-burgundy-600">The "mother of all sambals" - simple, pure, and versatile</p>
									</div>
								</div>

								<div className="bg-white p-6 rounded-lg shadow-lg">
									<h4 className="text-xl font-bold text-burgundy-900 mb-3">Sambal Terasi</h4>
									<div className="space-y-2 text-neutral-700">
										<p><strong>Origin:</strong> West Java (Bandung region)</p>
										<p><strong>Heat:</strong> Hot (20,000-40,000 SHU)</p>
										<p><strong>Texture:</strong> Smooth paste</p>
										<p><strong>Key Ingredients:</strong> Chilies, terasi (shrimp paste), palm sugar, garlic</p>
										<p><strong>Traditional Use:</strong> Rice dishes, vegetables, grilled fish</p>
										<p className="text-sm italic text-burgundy-600">Rich umami flavor from fermented shrimp paste</p>
									</div>
								</div>

								<div className="bg-white p-6 rounded-lg shadow-lg">
									<h4 className="text-xl font-bold text-burgundy-900 mb-3">Sambal Bajak</h4>
									<div className="space-y-2 text-neutral-700">
										<p><strong>Origin:</strong> East Java</p>
										<p><strong>Heat:</strong> Medium-Hot (12,000-25,000 SHU)</p>
										<p><strong>Texture:</strong> Chunky with visible ingredients</p>
										<p><strong>Key Ingredients:</strong> Chilies, tomatoes, tamarind, peanuts, anchovies</p>
										<p><strong>Traditional Use:</strong> Fried foods, tempeh, tofu</p>
										<p className="text-sm italic text-burgundy-600">Sweet-sour-spicy balance perfect for fried dishes</p>
									</div>
								</div>

								<div className="bg-white p-6 rounded-lg shadow-lg">
									<h4 className="text-xl font-bold text-burgundy-900 mb-3">Sambal Kecap</h4>
									<div className="space-y-2 text-neutral-700">
										<p><strong>Origin:</strong> Central Java</p>
										<p><strong>Heat:</strong> Mild-Medium (5,000-15,000 SHU)</p>
										<p><strong>Texture:</strong> Sauce-like consistency</p>
										<p><strong>Key Ingredients:</strong> Chilies, kecap manis (sweet soy sauce), shallots</p>
										<p><strong>Traditional Use:</strong> Satay, grilled meats, noodle dishes</p>
										<p className="text-sm italic text-burgundy-600">Sweet and savory - perfect introduction to sambal</p>
									</div>
								</div>
							</div>
						</div>

						{/* Bali */}
						<div className="mb-10">
							<h3 className="text-2xl font-bold text-burgundy-800 mb-6">Balinese Sambals</h3>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="bg-white p-6 rounded-lg shadow-lg">
									<h4 className="text-xl font-bold text-burgundy-900 mb-3">Sambal Bali (Aromatic)</h4>
									<div className="space-y-2 text-neutral-700">
										<p><strong>Origin:</strong> Ubud & Central Bali</p>
										<p><strong>Heat:</strong> Medium (8,000-18,000 SHU)</p>
										<p><strong>Texture:</strong> Smooth, aromatic paste</p>
										<p><strong>Key Ingredients:</strong> Chilies, galangal, lemongrass, kaffir lime, candlenuts</p>
										<p><strong>Traditional Use:</strong> Balinese curries, grilled fish, ceremony foods</p>
										<p className="text-sm italic text-burgundy-600">Complex aromatics balance the heat beautifully</p>
									</div>
								</div>

								<div className="bg-white p-6 rounded-lg shadow-lg">
									<h4 className="text-xl font-bold text-burgundy-900 mb-3">Sambal Matah</h4>
									<div className="space-y-2 text-neutral-700">
										<p><strong>Origin:</strong> Northern Bali</p>
										<p><strong>Heat:</strong> Medium (10,000-20,000 SHU)</p>
										<p><strong>Texture:</strong> Fresh, uncooked relish</p>
										<p><strong>Key Ingredients:</strong> Raw chilies, shallots, lemongrass, lime leaves, coconut oil</p>
										<p><strong>Traditional Use:</strong> Grilled seafood, roasted duck, fresh vegetables</p>
										<p className="text-sm italic text-burgundine-600">Fresh, vibrant flavors - never cooked</p>
									</div>
								</div>
							</div>
						</div>

						{/* Sumatra */}
						<div className="mb-10">
							<h3 className="text-2xl font-bold text-burgundy-800 mb-6">Sumatran Sambals</h3>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="bg-white p-6 rounded-lg shadow-lg">
									<h4 className="text-xl font-bold text-burgundy-900 mb-3">Sambal Andaliman</h4>
									<div className="space-y-2 text-neutral-700">
										<p><strong>Origin:</strong> North Sumatra (Batak region)</p>
										<p><strong>Heat:</strong> Medium-Hot (15,000-25,000 SHU)</p>
										<p><strong>Texture:</strong> Coarse with unique numbing sensation</p>
										<p><strong>Key Ingredients:</strong> Chilies, andaliman pepper, tomatoes, shallots</p>
										<p><strong>Traditional Use:</strong> Batak grilled fish, pork dishes</p>
										<p className="text-sm italic text-burgundy-600">Unique tingling sensation from native andaliman pepper</p>
									</div>
								</div>

								<div className="bg-white p-6 rounded-lg shadow-lg">
									<h4 className="text-xl font-bold text-burgundy-900 mb-3">Sambal Lado</h4>
									<div className="space-y-2 text-neutral-700">
										<p><strong>Origin:</strong> West Sumatra (Padang)</p>
										<p><strong>Heat:</strong> Very Hot (25,000-50,000 SHU)</p>
										<p><strong>Texture:</strong> Smooth, intense paste</p>
										<p><strong>Key Ingredients:</strong> Bird's eye chilies, garlic, salt, oil</p>
										<p><strong>Traditional Use:</strong> Padang cuisine, rendang, rice dishes</p>
										<p className="text-sm italic text-burgundy-600">Extremely hot - use sparingly until accustomed</p>
									</div>
								</div>
							</div>
						</div>

						{/* Sulawesi */}
						<div className="mb-10">
							<h3 className="text-2xl font-bold text-burgundy-800 mb-6">Sulawesi Sambals</h3>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="bg-white p-6 rounded-lg shadow-lg">
									<h4 className="text-xl font-bold text-burgundy-900 mb-3">Sambal Dabu-Dabu</h4>
									<div className="space-y-2 text-neutral-700">
										<p><strong>Origin:</strong> North Sulawesi (Manado)</p>
										<p><strong>Heat:</strong> Medium (8,000-15,000 SHU)</p>
										<p><strong>Texture:</strong> Fresh, chopped relish</p>
										<p><strong>Key Ingredients:</strong> Chilies, tomatoes, shallots, lemon basil, lime juice</p>
										<p><strong>Traditional Use:</strong> Grilled fish, seafood, fresh vegetables</p>
										<p className="text-sm italic text-burgundy-600">Fresh and bright - perfect with seafood</p>
									</div>
								</div>

								<div className="bg-white p-6 rounded-lg shadow-lg">
									<h4 className="text-xl font-bold text-burgundy-900 mb-3">Sambal Rica-Rica</h4>
									<div className="space-y-2 text-neutral-700">
										<p><strong>Origin:</strong> North Sulawesi</p>
										<p><strong>Heat:</strong> Hot (20,000-35,000 SHU)</p>
										<p><strong>Texture:</strong> Chunky with visible chilies</p>
										<p><strong>Key Ingredients:</strong> Bird's eye chilies, tomatoes, ginger, lemongrass</p>
										<p><strong>Traditional Use:</strong> Chicken, fish, stir-fries</p>
										<p className="text-sm italic text-burgundy-600">Fiery and aromatic - signature Manado flavor</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Heat Level Guide */}
					<div className="bg-gradient-to-r from-yellow-50 to-red-50 p-8 rounded-lg mb-12">
						<h2 className="text-3xl font-bold text-burgundy-900 mb-6 font-brand">Understanding Sambal Heat Levels</h2>
						
						<div className="grid md:grid-cols-4 gap-4">
							<div className="bg-white p-4 rounded-lg text-center">
								<div className="text-2xl mb-2">🌶️</div>
								<h3 className="font-bold text-green-700">Mild</h3>
								<p className="text-sm">1,000-8,000 SHU</p>
								<p className="text-xs text-neutral-600">Sambal Kecap</p>
							</div>
							
							<div className="bg-white p-4 rounded-lg text-center">
								<div className="text-2xl mb-2">🌶️🌶️</div>
								<h3 className="font-bold text-yellow-600">Medium</h3>
								<p className="text-sm">8,000-18,000 SHU</p>
								<p className="text-xs text-neutral-600">Sambal Bali, Matah</p>
							</div>
							
							<div className="bg-white p-4 rounded-lg text-center">
								<div className="text-2xl mb-2">🌶️🌶️🌶️</div>
								<h3 className="font-bold text-orange-600">Hot</h3>
								<p className="text-sm">18,000-30,000 SHU</p>
								<p className="text-xs text-neutral-600">Sambal Oelek, Bajak</p>
							</div>
							
							<div className="bg-white p-4 rounded-lg text-center">
								<div className="text-2xl mb-2">🌶️🌶️🌶️🌶️</div>
								<h3 className="font-bold text-red-600">Very Hot</h3>
								<p className="text-sm">30,000+ SHU</p>
								<p className="text-xs text-neutral-600">Sambal Lado, Rica-Rica</p>
							</div>
						</div>
						
						<div className="mt-6 p-4 bg-blue-50 rounded-lg">
							<p className="text-blue-800 font-medium">💡 Pro Tip: Start with milder varieties and gradually build your tolerance. Indonesian heat is different from Western hot sauces - it builds slowly and has more complex flavor.</p>
						</div>
					</div>

					{/* How to Use Guide */}
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-burgundy-900 mb-8 font-brand">How to Use Different Sambals</h2>
						
						<div className="grid md:grid-cols-3 gap-6">
							<div className="bg-white p-6 rounded-lg shadow-lg">
								<h3 className="text-xl font-bold text-burgundy-900 mb-4">As Condiments</h3>
								<ul className="space-y-2 text-neutral-700">
									<li><strong>Table sauce:</strong> Sambal Oelek, Terasi</li>
									<li><strong>Rice accompaniment:</strong> Any variety</li>
									<li><strong>Noodle topping:</strong> Sambal Kecap</li>
									<li><strong>Sandwich spread:</strong> Mix with mayo</li>
								</ul>
							</div>
							
							<div className="bg-white p-6 rounded-lg shadow-lg">
								<h3 className="text-xl font-bold text-burgundy-900 mb-4">In Cooking</h3>
								<ul className="space-y-2 text-neutral-700">
									<li><strong>Stir-fry base:</strong> Sambal Oelek</li>
									<li><strong>Marinade ingredient:</strong> Sambal Bali</li>
									<li><strong>Curry paste:</strong> Blend with coconut milk</li>
									<li><strong>Soup enhancer:</strong> Add at end of cooking</li>
								</ul>
							</div>
							
							<div className="bg-white p-6 rounded-lg shadow-lg">
								<h3 className="text-xl font-bold text-burgundy-900 mb-4">Fresh Applications</h3>
								<ul className="space-y-2 text-neutral-700">
									<li><strong>Salad dressing:</strong> Sambal Matah</li>
									<li><strong>Seafood accompaniment:</strong> Dabu-Dabu</li>
									<li><strong>Vegetable dip:</strong> Any fresh variety</li>
									<li><strong>Grilled meat topping:</strong> Rica-Rica</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Storage & Tips */}
					<div className="bg-burgundy-50 p-8 rounded-lg mb-12">
						<h2 className="text-3xl font-bold text-burgundy-900 mb-6 font-brand">Storage & Tips</h2>
						
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-xl font-bold text-burgundy-800 mb-4">Proper Storage</h3>
								<ul className="space-y-2 text-burgundy-700">
									<li>• Store in airtight containers in refrigerator</li>
									<li>• Fresh sambals: Use within 1 week</li>
									<li>• Cooked sambals: Keep up to 3 months</li>
									<li>• Freeze in ice cube trays for portions</li>
									<li>• Always use clean utensils to prevent contamination</li>
								</ul>
							</div>
							
							<div>
								<h3 className="text-xl font-bold text-burgundy-800 mb-4">Beginner Tips</h3>
								<ul className="space-y-2 text-burgundy-700">
									<li>• Start with Sambal Kecap or Bali varieties</li>
									<li>• Use a tiny amount first - they're potent!</li>
									<li>• Mix with rice or yogurt to reduce heat</li>
									<li>• Build tolerance gradually over weeks</li>
									<li>• Keep milk or yogurt nearby when trying new ones</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Try Authentic Sambals */}
					<div className="bg-burgundy-900 text-white p-8 rounded-lg text-center">
						<h2 className="text-3xl font-bold mb-4 font-brand">Experience Authentic Indonesian Sambals</h2>
						<p className="text-xl mb-6 text-burgundy-100">
							Made by Chef Yossie using traditional Indonesian techniques and family recipes from Bandung.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link 
								href="/sample-pack-try-first"
								className="bg-gold-600 hover:bg-gold-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
							>
								Try Sample Pack
							</Link>
							<Link 
								href="/shop"
								className="bg-transparent border-2 border-white hover:bg-white hover:text-burgundy-900 text-white font-bold py-3 px-6 rounded-lg transition-colors"
							>
								Shop All Varieties
							</Link>
						</div>
					</div>

				</div>
			</section>
		</div>
	);
}