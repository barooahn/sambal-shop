import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Spicy Food Beginners Guide: How to Build Heat Tolerance Safely | Spice Island Indonesia",
	description: "Complete spicy food beginners guide: how to build heat tolerance, understand Scoville scale, choose beginner-friendly hot sauces, and safely explore spicy cuisines.",
	keywords: [
		"spicy food beginners guide",
		"how to build spice tolerance",
		"beginner hot sauce",
		"scoville scale explained",
		"spicy food tips",
		"mild hot sauce uk",
		"how to eat spicy food",
		"spice tolerance building"
	],
	openGraph: {
		title: "Spicy Food Beginners Guide: How to Build Heat Tolerance Safely",
		description: "Learn to enjoy spicy food safely with our complete beginners guide. Build heat tolerance gradually with expert tips and beginner-friendly recommendations.",
		images: ["/images/optimized/sambal-vs-hot-sauce-comparison-lg.webp"],
	},
};

export default function SpicyFoodBeginnersGuidePage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
			{/* Hero Section */}
			<section className="py-16 bg-gradient-to-br from-burgundy-50 to-gold-50 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-burgundy-900/5 via-transparent to-gold-600/5"></div>
				
				<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-6 font-brand">
						Spicy Food
						<span className="text-gold-700 block">
							Beginners Guide
						</span>
					</h1>
					<p className="text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed font-body mb-8">
						Ready to explore the exciting world of spicy food? Learn how to build heat tolerance safely, understand spice levels, choose beginner-friendly options, and discover amazing flavors beyond the heat.
					</p>
					<div className="bg-green-50 border-l-4 border-green-500 p-6 max-w-3xl mx-auto">
						<p className="text-lg font-semibold text-green-900 mb-2">🌶️ You're in Safe Hands</p>
						<p className="text-green-800">This guide will help you build spice tolerance gradually and safely, without overwhelming your palate or causing discomfort.</p>
					</div>
				</div>
			</section>

			{/* Quick Start Guide */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Quick Start: Your First Week</h2>
					
					<div className="grid md:grid-cols-7 gap-4">
						{[
							{ day: "Day 1-2", action: "Start with mild pepper like bell pepper in cooking", heat: "0 SHU" },
							{ day: "Day 3-4", action: "Try banana peppers or mild salsa", heat: "0-500 SHU" },
							{ day: "Day 5-6", action: "Add poblano peppers to dishes", heat: "1,000-2,000 SHU" },
							{ day: "Day 7", action: "Try jalapeño slices (remove seeds first)", heat: "2,500-8,000 SHU" },
							{ day: "Week 2", action: "Gradually increase jalapeño amount", heat: "5,000-10,000 SHU" },
							{ day: "Week 3", action: "Try serrano peppers or mild sambal", heat: "10,000-25,000 SHU" },
							{ day: "Week 4+", action: "Explore authentic hot sauces", heat: "25,000+ SHU" }
						].map((step, index) => (
							<div key={index} className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-lg text-center">
								<div className="text-lg font-bold text-green-800 mb-2">{step.day}</div>
								<div className="text-sm text-neutral-700 mb-2">{step.action}</div>
								<div className="text-xs text-green-600 font-semibold">{step.heat}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Understanding Heat Levels */}
			<section className="py-16 bg-gradient-to-br from-burgundy-50 to-gold-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Understanding the Scoville Scale</h2>
					
					<div className="bg-white rounded-lg shadow-xl p-8">
						<p className="text-neutral-700 mb-8 text-center">The Scoville Heat Unit (SHU) scale measures capsaicin concentration - the compound that makes peppers hot.</p>
						
						<div className="space-y-4">
							<div className="flex items-center p-4 bg-green-50 rounded-lg">
								<div className="w-16 h-8 bg-green-200 rounded mr-4"></div>
								<div className="flex-1">
									<div className="font-bold text-green-800">0-1,000 SHU: Beginner Friendly</div>
									<div className="text-sm text-green-700">Bell peppers, banana peppers, mild salsas</div>
								</div>
							</div>
							
							<div className="flex items-center p-4 bg-yellow-50 rounded-lg">
								<div className="w-16 h-8 bg-yellow-300 rounded mr-4"></div>
								<div className="flex-1">
									<div className="font-bold text-yellow-800">1,000-8,000 SHU: Mild Heat</div>
									<div className="text-sm text-yellow-700">Poblano, jalapeño, most commercial hot sauces</div>
								</div>
							</div>
							
							<div className="flex items-center p-4 bg-orange-50 rounded-lg">
								<div className="w-16 h-8 bg-orange-400 rounded mr-4"></div>
								<div className="flex-1">
									<div className="font-bold text-orange-800">8,000-25,000 SHU: Medium Heat</div>
									<div className="text-sm text-orange-700">Serrano, chipotle, mild sambal varieties</div>
								</div>
							</div>
							
							<div className="flex items-center p-4 bg-red-50 rounded-lg">
								<div className="w-16 h-8 bg-red-500 rounded mr-4"></div>
								<div className="flex-1">
									<div className="font-bold text-red-800">25,000-100,000 SHU: Hot</div>
									<div className="text-sm text-red-700">Cayenne, Thai chilies, authentic sambal oelek</div>
								</div>
							</div>
							
							<div className="flex items-center p-4 bg-red-100 rounded-lg">
								<div className="w-16 h-8 bg-red-700 rounded mr-4"></div>
								<div className="flex-1">
									<div className="font-bold text-red-900">100,000+ SHU: Very Hot (Advanced Only)</div>
									<div className="text-sm text-red-800">Habanero, scotch bonnet, ghost pepper</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Building Tolerance */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">How to Build Spice Tolerance Safely</h2>
					
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-green-50 p-6 rounded-lg">
							<h3 className="text-xl font-bold text-green-800 mb-4">✅ DO These Things</h3>
							<ul className="space-y-3 text-green-700">
								<li>• <strong>Start very small:</strong> Use tiny amounts at first</li>
								<li>• <strong>Increase gradually:</strong> 10-15% more heat each week</li>
								<li>• <strong>Eat regularly:</strong> Consistent exposure builds tolerance</li>
								<li>• <strong>Eat with dairy:</strong> Milk, yogurt, or cheese nearby</li>
								<li>• <strong>Choose quality spices:</strong> Better flavor makes heat worthwhile</li>
								<li>• <strong>Try different pepper types:</strong> Each has unique characteristics</li>
								<li>• <strong>Listen to your body:</strong> Stop if uncomfortable</li>
								<li>• <strong>Have realistic goals:</strong> Building tolerance takes months</li>
							</ul>
						</div>
						
						<div className="bg-red-50 p-6 rounded-lg">
							<h3 className="text-xl font-bold text-red-800 mb-4">❌ AVOID These Mistakes</h3>
							<ul className="space-y-3 text-red-700">
								<li>• <strong>Jumping levels:</strong> Going from mild to very hot quickly</li>
								<li>• <strong>Peer pressure:</strong> Eating beyond your comfort zone</li>
								<li>• <strong>Drinking water:</strong> It spreads capsaicin around your mouth</li>
								<li>• <strong>Touching eyes/face:</strong> After handling hot peppers</li>
								<li>• <strong>Eating on empty stomach:</strong> Can cause discomfort</li>
								<li>• <strong>Expecting instant results:</strong> Tolerance builds slowly</li>
								<li>• <strong>Using extract-based sauces:</strong> Artificial heat without flavor</li>
								<li>• <strong>Ignoring pain signals:</strong> Severe burning means stop</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Beginner-Friendly Products */}
			<section className="py-16 bg-gradient-to-br from-gold-50 to-burgundy-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Best Spicy Foods for Beginners</h2>
					
					<div className="grid md:grid-cols-3 gap-8">
						{/* Level 1: Starting Out */}
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<div className="text-center mb-4">
								<span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">LEVEL 1: STARTING OUT</span>
							</div>
							<h3 className="text-xl font-bold text-burgundy-900 mb-4">Mild Introduction</h3>
							<div className="space-y-3 text-neutral-700">
								<div>
									<p className="font-semibold">Fresh Peppers:</p>
									<p className="text-sm">Bell peppers, banana peppers</p>
								</div>
								<div>
									<p className="font-semibold">Sauces:</p>
									<p className="text-sm">Mild salsa, sweet chili sauce</p>
								</div>
								<div>
									<p className="font-semibold">Dishes:</p>
									<p className="text-sm">Mild curry, pepper jack cheese</p>
								</div>
							</div>
						</div>
						
						{/* Level 2: Building Confidence */}
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<div className="text-center mb-4">
								<span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">LEVEL 2: BUILDING CONFIDENCE</span>
							</div>
							<h3 className="text-xl font-bold text-burgundy-900 mb-4">Gentle Heat</h3>
							<div className="space-y-3 text-neutral-700">
								<div>
									<p className="font-semibold">Fresh Peppers:</p>
									<p className="text-sm">Jalapeño (seeded), poblano</p>
								</div>
								<div>
									<p className="font-semibold">Sauces:</p>
									<p className="text-sm">Sriracha, medium salsa</p>
								</div>
								<div>
									<p className="font-semibold">Dishes:</p>
									<p className="text-sm">Medium curry, spicy mayo</p>
								</div>
							</div>
						</div>
						
						{/* Level 3: Getting Serious */}
						<div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gold-300">
							<div className="text-center mb-4">
								<span className="bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-bold">LEVEL 3: GETTING SERIOUS</span>
							</div>
							<h3 className="text-xl font-bold text-burgundy-900 mb-4">Authentic Heat</h3>
							<div className="space-y-3 text-neutral-700">
								<div>
									<p className="font-semibold">Fresh Peppers:</p>
									<p className="text-sm">Serrano, whole jalapeño</p>
								</div>
								<div>
									<p className="font-semibold">Sauces:</p>
									<p className="text-sm">Mild sambal, hot sauce</p>
								</div>
								<div>
									<p className="font-semibold">Dishes:</p>
									<p className="text-sm">Thai curry, Indian curry</p>
								</div>
							</div>
							<div className="mt-4 p-3 bg-gold-50 rounded">
								<p className="text-sm text-gold-800"><strong>Perfect for:</strong> Ready to try authentic Indonesian sambal</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Emergency Tips */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Emergency: When It's Too Hot!</h2>
					
					<div className="bg-red-50 border-2 border-red-300 rounded-lg p-8">
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-xl font-bold text-red-800 mb-4">🚨 Immediate Relief</h3>
								<ul className="space-y-2 text-red-700">
									<li>• <strong>Dairy products:</strong> Milk, yogurt, ice cream</li>
									<li>• <strong>Bread or rice:</strong> Absorbs oils and provides relief</li>
									<li>• <strong>Sugar:</strong> Honey, sugar packet, sweet drink</li>
									<li>• <strong>Oil/fat:</strong> Olive oil, butter, avocado</li>
									<li>• <strong>Salt:</strong> Small amount on tongue</li>
								</ul>
							</div>
							
							<div>
								<h3 className="text-xl font-bold text-red-800 mb-4">❌ Don't Make It Worse</h3>
								<ul className="space-y-2 text-red-700">
									<li>• <strong>DON'T drink water:</strong> Spreads capsaicin</li>
									<li>• <strong>DON'T drink beer:</strong> Alcohol makes it worse</li>
									<li>• <strong>DON'T touch eyes:</strong> Wash hands first</li>
									<li>• <strong>DON'T panic:</strong> The feeling will pass</li>
									<li>• <strong>DON'T eat more:</strong> Stop immediately</li>
								</ul>
							</div>
						</div>
						
						<div className="mt-6 p-4 bg-red-100 rounded">
							<p className="text-red-800"><strong>Why dairy works:</strong> Casein protein in dairy binds to capsaicin and neutralizes it. Water just moves the oils around your mouth.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Health Benefits */}
			<section className="py-16 bg-gradient-to-br from-burgundy-50 to-gold-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Why Spicy Food is Good for You</h2>
					
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-6 rounded-lg shadow-lg text-center">
							<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">❤️</span>
							</div>
							<h3 className="text-lg font-bold text-burgundy-900 mb-3">Heart Health</h3>
							<p className="text-neutral-700 text-sm">Capsaicin may help lower blood pressure and reduce inflammation in blood vessels.</p>
						</div>
						
						<div className="bg-white p-6 rounded-lg shadow-lg text-center">
							<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🔥</span>
							</div>
							<h3 className="text-lg font-bold text-burgundy-900 mb-3">Metabolism Boost</h3>
							<p className="text-neutral-700 text-sm">Spicy foods can temporarily increase metabolic rate and promote fat burning.</p>
						</div>
						
						<div className="bg-white p-6 rounded-lg shadow-lg text-center">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🛡️</span>
							</div>
							<h3 className="text-lg font-bold text-burgundy-900 mb-3">Antioxidants</h3>
							<p className="text-neutral-700 text-sm">Hot peppers are rich in vitamins A and C, plus powerful antioxidants.</p>
						</div>
						
						<div className="bg-white p-6 rounded-lg shadow-lg text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🧠</span>
							</div>
							<h3 className="text-lg font-bold text-burgundy-900 mb-3">Endorphin Release</h3>
							<p className="text-neutral-700 text-sm">Spicy foods trigger endorphin release, creating natural mood enhancement.</p>
						</div>
						
						<div className="bg-white p-6 rounded-lg shadow-lg text-center">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🦠</span>
							</div>
							<h3 className="text-lg font-bold text-burgundy-900 mb-3">Antimicrobial</h3>
							<p className="text-neutral-700 text-sm">Capsaicin has natural antimicrobial properties that may help fight infections.</p>
						</div>
						
						<div className="bg-white p-6 rounded-lg shadow-lg text-center">
							<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">😌</span>
							</div>
							<h3 className="text-lg font-bold text-burgundy-900 mb-3">Pain Relief</h3>
							<p className="text-neutral-700 text-sm">Regular consumption may help reduce sensitivity to pain over time.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Perfect Beginner Sambal */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-burgundy-900 mb-12 text-center font-brand">Perfect Sambal for Beginners</h2>
					
					<div className="bg-gradient-to-br from-green-50 to-gold-50 p-8 rounded-lg">
						<div className="grid md:grid-cols-2 gap-8 items-center">
							<div>
								<h3 className="text-2xl font-bold text-burgundy-900 mb-4">Sambal Kecap: The Beginner's Choice</h3>
								<p className="text-neutral-700 mb-4">
									Sweet soy sauce balances the chili heat, making this the perfect introduction to authentic Indonesian sambal. Complex flavors without overwhelming heat.
								</p>
								<div className="space-y-2 text-neutral-700">
									<p>🌶️ <strong>Heat Level:</strong> Mild (5,000-8,000 SHU)</p>
									<p>🍯 <strong>Flavor:</strong> Sweet, savory, gentle heat</p>
									<p>🍖 <strong>Perfect with:</strong> Grilled meats, rice, noodles</p>
									<p>👶 <strong>Beginner-friendly:</strong> Build tolerance gradually</p>
								</div>
							</div>
							
							<div className="bg-white p-6 rounded-lg shadow-lg">
								<h4 className="text-lg font-bold text-burgundy-900 mb-4">Why Sambal Kecap for Beginners?</h4>
								<ul className="space-y-2 text-neutral-700 text-sm">
									<li>✓ Sweet soy sauce masks initial heat</li>
									<li>✓ Complex flavors beyond just spice</li>
									<li>✓ Traditional Indonesian authenticity</li>
									<li>✓ No artificial ingredients</li>
									<li>✓ Perfect for building tolerance</li>
									<li>✓ Versatile cooking ingredient</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 bg-burgundy-900 text-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-6 font-brand">Start Your Spicy Food Journey</h2>
					<p className="text-xl mb-8 text-burgundy-100">
						Ready to explore authentic spicy flavors? Try our beginner-friendly sambal sample pack designed specifically for building heat tolerance safely.
					</p>
					
					<div className="bg-burgundy-800 p-6 rounded-lg mb-8">
						<h3 className="text-lg font-bold mb-2">Beginner Sambal Sample Pack</h3>
						<p className="text-burgundy-200 mb-4">Mild, medium, and traditional varieties • Perfect for building tolerance • Free UK delivery</p>
						<p className="text-sm text-burgundy-300">Made by Indonesian Chef Yossie using traditional methods</p>
					</div>
					
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link 
							href="/sample-pack-try-first"
							className="bg-gold-600 hover:bg-gold-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
						>
							Try Beginner Sample Pack
						</Link>
						<Link 
							href="/shop"
							className="bg-transparent border-2 border-white hover:bg-white hover:text-burgundy-900 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
						>
							Browse All Options
						</Link>
					</div>
					
					<p className="text-sm text-burgundy-300 mt-6">
						Start with Sambal Kecap • Build tolerance gradually • Discover authentic Indonesian flavors
					</p>
				</div>
			</section>
		</div>
	);
}