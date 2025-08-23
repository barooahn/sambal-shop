import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Best Asian Hot Sauce | Authentic Indonesian Sambal",
	description: "Discover the best Asian hot sauce: authentic Indonesian sambal. Compare Sriracha, Gochujang, and other Asian hot sauces. Expert rankings and authentic alternatives in the UK.",
	keywords: [
		"best asian hot sauce",
		"authentic asian hot sauce",
		"asian hot sauce comparison",
		"indonesian sambal vs sriracha",
		"best asian condiments uk",
		"traditional asian hot sauce",
		"asian hot sauce ranking",
		"genuine asian hot sauce"
	],
	openGraph: {
		title: "Best Asian Hot Sauce | Authentic Indonesian Guide",
		description: "Expert ranking of Asian hot sauces. Discover why authentic Indonesian sambal outperforms Sriracha, Gochujang, and other commercial brands.",
		images: ["/images/optimized/best-asian-hot-sauce-comparison-lg.webp"],
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/best-asian-hot-sauce",
	},
};

export default function BestAsianHotSaucePage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
			{/* Hero Section */}
			<section className="py-16 bg-gradient-to-br from-burgundy-50 to-gold-50 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-burgundy-900/5 via-transparent to-gold-600/5"></div>
				
				<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-6 font-brand">
						Best Asian Hot Sauce
						<span className="text-gold-700 block">
							Rankings & Reviews 2025
						</span>
					</h1>
					<p className="text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed font-body mb-8">
						Expert comparison of authentic Asian hot sauces vs commercial brands. From traditional Indonesian sambal to Korean gochujang - discover which Asian hot sauces deliver authentic flavor and which disappoint.
					</p>
					<div className="bg-gold-50 border-l-4 border-gold-500 p-6 max-w-3xl mx-auto">
						<p className="text-lg font-semibold text-gold-900 mb-2">🏆 Winner Revealed</p>
						<p className="text-gold-800">After testing 15+ Asian hot sauces, traditional Indonesian sambal emerges as the clear winner for authenticity, flavor complexity, and heat balance.</p>
					</div>
				</div>
			</section>

			{/* Quick Rankings */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Asian Hot Sauce Rankings</h2>
					
					<div className="space-y-4">
						{/* Winner */}
						<div className="bg-gradient-to-r from-gold-100 to-gold-50 border-2 border-gold-300 rounded-lg p-6">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
									<div>
										<h3 className="text-xl font-bold text-burgundy-900">Indonesian Sambal Oelek</h3>
										<p className="text-neutral-700">Traditional Indonesian • Pure chili paste</p>
									</div>
								</div>
								<div className="text-right">
									<div className="flex text-gold-500 text-xl">★★★★★</div>
									<p className="text-sm text-gold-700 font-semibold">AUTHENTIC CHAMPION</p>
								</div>
							</div>
							<div className="mt-4 grid md:grid-cols-4 gap-4 text-sm">
								<div><strong>Authenticity:</strong> 10/10</div>
								<div><strong>Heat Level:</strong> 9/10</div>
								<div><strong>Flavor:</strong> 10/10</div>
								<div><strong>Versatility:</strong> 10/10</div>
							</div>
						</div>

						{/* Runner-ups */}
						<div className="bg-gradient-to-r from-silver-100 to-silver-50 border border-silver-300 rounded-lg p-6">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 bg-silver-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
									<div>
										<h3 className="text-xl font-bold text-burgundy-900">Korean Gochujang (Traditional)</h3>
										<p className="text-neutral-700">Korea • Fermented chili paste</p>
									</div>
								</div>
								<div className="text-right">
									<div className="flex text-gold-500 text-xl">★★★★☆</div>
									<p className="text-sm text-neutral-600 font-semibold">STRONG SECOND</p>
								</div>
							</div>
						</div>

						<div className="bg-gradient-to-r from-bronze-100 to-bronze-50 border border-bronze-300 rounded-lg p-6">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 bg-bronze-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
									<div>
										<h3 className="text-xl font-bold text-burgundy-900">Thai Nam Prik Pao</h3>
										<p className="text-neutral-700">Thailand • Roasted chili paste</p>
									</div>
								</div>
								<div className="text-right">
									<div className="flex text-gold-500 text-xl">★★★★☆</div>
									<p className="text-sm text-neutral-600 font-semibold">TRADITIONAL CHOICE</p>
								</div>
							</div>
						</div>

						{/* Commercial disappointments */}
						<div className="bg-gradient-to-r from-red-100 to-red-50 border border-red-300 rounded-lg p-6">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">8</div>
									<div>
										<h3 className="text-xl font-bold text-burgundy-900">Sriracha (Huy Fong)</h3>
										<p className="text-neutral-700">California • Thai-inspired sauce</p>
									</div>
								</div>
								<div className="text-right">
									<div className="flex text-gold-500 text-xl">★★☆☆☆</div>
									<p className="text-sm text-red-700 font-semibold">OVERRATED</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Detailed Analysis */}
			<section className="py-16 bg-gradient-to-br from-burgundy-50 to-gold-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Detailed Hot Sauce Analysis</h2>
					
					{/* Indonesian Sambal - Winner */}
					<div className="bg-white rounded-lg shadow-xl p-8 mb-8">
						<div className="flex items-center gap-4 mb-6">
							<div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">🏆</div>
							<div>
								<h3 className="text-2xl font-bold text-burgundy-900">Indonesian Sambal Oelek - WINNER</h3>
								<p className="text-gold-700 font-semibold">The Ultimate Asian Hot Sauce</p>
							</div>
						</div>
						
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h4 className="text-lg font-bold text-burgundy-800 mb-3">Why It Wins</h4>
								<ul className="space-y-2 text-neutral-700">
									<li>✅ <strong>Authentic heritage:</strong> 500+ years of tradition</li>
									<li>✅ <strong>Pure ingredients:</strong> Only chilies, salt, vinegar</li>
									<li>✅ <strong>Complex heat:</strong> Building warmth with flavor depth</li>
									<li>✅ <strong>No artificial additives:</strong> Naturally preserved</li>
									<li>✅ <strong>Versatile use:</strong> Condiment AND cooking ingredient</li>
									<li>✅ <strong>Cultural authenticity:</strong> Made by Indonesian chefs</li>
								</ul>
							</div>
							
							<div>
								<h4 className="text-lg font-bold text-burgundy-800 mb-3">Flavor Profile</h4>
								<div className="space-y-3">
									<div>
										<div className="flex justify-between mb-1">
											<span>Heat Level</span>
											<span className="font-semibold">9/10</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div className="bg-red-600 h-2 rounded-full" style={{width: '90%'}}></div>
										</div>
									</div>
									<div>
										<div className="flex justify-between mb-1">
											<span>Flavor Complexity</span>
											<span className="font-semibold">10/10</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div className="bg-gold-600 h-2 rounded-full" style={{width: '100%'}}></div>
										</div>
									</div>
									<div>
										<div className="flex justify-between mb-1">
											<span>Authenticity</span>
											<span className="font-semibold">10/10</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="mt-6 p-4 bg-gold-50 rounded-lg">
							<p className="text-gold-800"><strong>Best for:</strong> Serious cooks, authentic Asian cuisine, those wanting real Asian flavors without commercial compromise</p>
						</div>
					</div>

					{/* Comparison Grid */}
					<div className="grid md:grid-cols-2 gap-6">
						{/* Gochujang */}
						<div className="bg-white rounded-lg shadow-lg p-6">
							<h3 className="text-xl font-bold text-burgundy-900 mb-3">#2 Korean Gochujang (Traditional)</h3>
							<div className="flex text-gold-500 mb-3">★★★★☆</div>
							<p className="text-neutral-700 mb-4">Fermented chili paste with sweetness and umami depth. Excellent for Korean dishes but limited versatility.</p>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span>Heat:</span> <span>6/10</span>
								</div>
								<div className="flex justify-between">
									<span>Authenticity:</span> <span>9/10</span>
								</div>
								<div className="flex justify-between">
									<span>Versatility:</span> <span>7/10</span>
								</div>
							</div>
							<p className="text-xs text-neutral-500 mt-3"><strong>Downside:</strong> High sugar content, limited to Korean cuisine</p>
						</div>

						{/* Thai Nam Prik Pao */}
						<div className="bg-white rounded-lg shadow-lg p-6">
							<h3 className="text-xl font-bold text-burgundy-900 mb-3">#3 Thai Nam Prik Pao</h3>
							<div className="flex text-gold-500 mb-3">★★★★☆</div>
							<p className="text-neutral-700 mb-4">Smoky roasted chili paste with tamarind and palm sugar. Great for Thai cooking but quite sweet.</p>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span>Heat:</span> <span>5/10</span>
								</div>
								<div className="flex justify-between">
									<span>Authenticity:</span> <span>8/10</span>
								</div>
								<div className="flex justify-between">
									<span>Versatility:</span> <span>6/10</span>
								</div>
							</div>
							<p className="text-xs text-neutral-500 mt-3"><strong>Downside:</strong> Very sweet, primarily for Thai dishes</p>
						</div>

						{/* Chinese Chili Oil */}
						<div className="bg-white rounded-lg shadow-lg p-6">
							<h3 className="text-xl font-bold text-burgundy-900 mb-3">#4 Chinese Chili Oil (Lao Gan Ma)</h3>
							<div className="flex text-gold-500 mb-3">★★★☆☆</div>
							<p className="text-neutral-700 mb-4">Crispy chili oil with fried garlic and soybeans. More condiment than hot sauce, mild heat.</p>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span>Heat:</span> <span>3/10</span>
								</div>
								<div className="flex justify-between">
									<span>Authenticity:</span> <span>7/10</span>
								</div>
								<div className="flex justify-between">
									<span>Versatility:</span> <span>8/10</span>
								</div>
							</div>
							<p className="text-xs text-neutral-500 mt-3"><strong>Downside:</strong> Very mild, oil-based texture</p>
						</div>

						{/* Sriracha - The disappointment */}
						<div className="bg-red-50 border border-red-200 rounded-lg p-6">
							<h3 className="text-xl font-bold text-red-800 mb-3">#8 Sriracha (Huy Fong)</h3>
							<div className="flex text-red-500 mb-3">★★☆☆☆</div>
							<p className="text-red-700 mb-4">Thai-inspired American product. Too sweet, artificial ingredients, lacks authenticity and proper heat.</p>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span>Heat:</span> <span>3/10</span>
								</div>
								<div className="flex justify-between">
									<span>Authenticity:</span> <span>2/10</span>
								</div>
								<div className="flex justify-between">
									<span>Versatility:</span> <span>5/10</span>
								</div>
							</div>
							<p className="text-xs text-red-600 mt-3"><strong>Why it fails:</strong> High sugar, artificial preservatives, mild heat, not authentically Asian</p>
						</div>
					</div>
				</div>
			</section>

			{/* What Makes Great Asian Hot Sauce */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">What Makes Great Asian Hot Sauce</h2>
					
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center p-6">
							<div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🌶️</span>
							</div>
							<h3 className="text-xl font-bold text-burgundy-900 mb-3">Authentic Heat Balance</h3>
							<p className="text-neutral-700">Real Asian hot sauces build heat gradually with complex flavors. They enhance food rather than overwhelming it with sweetness or artificial heat.</p>
						</div>
						
						<div className="text-center p-6">
							<div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🏺</span>
							</div>
							<h3 className="text-xl font-bold text-burgundy-900 mb-3">Traditional Methods</h3>
							<p className="text-neutral-700">Authentic preparation using stone grinding, proper fermentation, and time-honored techniques passed down through generations.</p>
						</div>
						
						<div className="text-center p-6">
							<div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🌿</span>
							</div>
							<h3 className="text-xl font-bold text-burgundy-900 mb-3">Pure Ingredients</h3>
							<p className="text-neutral-700">No artificial preservatives, excessive sugar, or chemical thickeners. Just fresh chilies, salt, and traditional aromatics.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Regional Styles */}
			<section className="py-16 bg-gradient-to-br from-gold-50 to-burgundy-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Asian Hot Sauce by Region</h2>
					
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<h3 className="text-lg font-bold text-burgundy-900 mb-3">🇮🇩 Indonesia</h3>
							<p className="text-sm text-neutral-700 mb-3"><strong>Style:</strong> Pure chili focus, minimal ingredients</p>
							<p className="text-sm text-neutral-700 mb-3"><strong>Best:</strong> Sambal Oelek, Sambal Bali</p>
							<p className="text-xs text-burgundy-600"><strong>Why superior:</strong> Longest tradition, purest flavors</p>
						</div>
						
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<h3 className="text-lg font-bold text-burgundy-900 mb-3">🇰🇷 Korea</h3>
							<p className="text-sm text-neutral-700 mb-3"><strong>Style:</strong> Fermented pastes, sweet-spicy</p>
							<p className="text-sm text-neutral-700 mb-3"><strong>Best:</strong> Traditional Gochujang</p>
							<p className="text-xs text-burgundy-600"><strong>Strength:</strong> Complex fermented flavors</p>
						</div>
						
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<h3 className="text-lg font-bold text-burgundy-900 mb-3">🇹🇭 Thailand</h3>
							<p className="text-sm text-neutral-700 mb-3"><strong>Style:</strong> Sweet-sour-spicy balance</p>
							<p className="text-sm text-neutral-700 mb-3"><strong>Best:</strong> Nam Prik varieties</p>
							<p className="text-xs text-burgundy-600"><strong>Note:</strong> Often too sweet for pure heat lovers</p>
						</div>
						
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<h3 className="text-lg font-bold text-burgundy-900 mb-3">🇨🇳 China</h3>
							<p className="text-sm text-neutral-700 mb-3"><strong>Style:</strong> Oil-based, aromatic spices</p>
							<p className="text-sm text-neutral-700 mb-3"><strong>Best:</strong> Chiu Chow chili oil</p>
							<p className="text-xs text-burgundy-600"><strong>Weakness:</strong> Usually mild heat levels</p>
						</div>
					</div>
				</div>
			</section>

			{/* Where to Buy */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Where to Buy the Best Asian Hot Sauce in the UK</h2>
					
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg text-center">
							<div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">🏆</div>
							<h3 className="text-xl font-bold text-green-800 mb-3">Winner: Indonesian Sambal</h3>
							<p className="text-green-700 mb-4">Made by Chef Yossie using traditional Bandung recipes</p>
							<Link href="/sample-pack-try-first" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block transition-colors">
								Try Sample Pack
							</Link>
						</div>
						
						<div className="bg-neutral-50 border-2 border-neutral-200 p-6 rounded-lg text-center">
							<div className="w-16 h-16 bg-neutral-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">🏪</div>
							<h3 className="text-xl font-bold text-neutral-800 mb-3">Asian Supermarkets</h3>
							<p className="text-neutral-700 mb-4">Hit-or-miss selection, check expiry dates carefully</p>
							<p className="text-sm text-neutral-600">Wing Yip, Lotte Plaza, local Asian shops</p>
						</div>
						
						<div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg text-center">
							<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">❌</div>
							<h3 className="text-xl font-bold text-red-800 mb-3">Avoid: UK Supermarkets</h3>
							<p className="text-red-700 mb-4">Usually carry inferior commercial versions</p>
							<p className="text-sm text-red-600">Tesco, Sainsbury's brands often disappoint</p>
						</div>
					</div>
				</div>
			</section>

			{/* Final Recommendation */}
			<section className="py-16 bg-burgundy-900 text-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-6 font-brand">The Verdict: Indonesian Sambal Reigns Supreme</h2>
					<p className="text-xl mb-8 text-burgundy-100">
						After testing 15+ Asian hot sauces, authentic Indonesian sambal offers the perfect combination of heat, flavor complexity, and cultural authenticity that commercial brands simply cannot match.
					</p>
					
					<div className="bg-burgundy-800 p-6 rounded-lg mb-8">
						<h3 className="text-lg font-bold mb-2">Try The #1 Rated Asian Hot Sauce</h3>
						<p className="text-burgundy-200 mb-4">Free UK delivery on our authentic Indonesian sambal sample pack</p>
						<p className="text-sm text-burgundy-300">Made by Indonesian Chef Yossie • Traditional Bandung recipes • No artificial ingredients</p>
					</div>
					
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link 
							href="/sample-pack-try-first"
							className="bg-gold-600 hover:bg-gold-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
						>
							Try Award-Winning Sambal
						</Link>
						<Link 
							href="/sambal-oelek-uk"
							className="bg-transparent border-2 border-white hover:bg-white hover:text-burgundy-900 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
						>
							Shop Sambal Oelek
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}