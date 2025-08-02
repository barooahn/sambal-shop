import { Metadata } from "next";
import RecipeCard from "@/components/recipes/RecipeCard";
import RecipeSchema from "@/components/seo/RecipeSchema";

export const metadata: Metadata = {
	title: "Spicy Sambal Scrambled Eggs Recipe | Indonesian Breakfast | Spice Island Indonesia",
	description:
		"Elevate your breakfast with spicy sambal scrambled eggs. A quick, protein-rich Indonesian-inspired breakfast that's ready in 10 minutes with incredible flavor.",
	keywords:
		"sambal scrambled eggs, spicy eggs recipe, Indonesian breakfast, sambal eggs, quick breakfast recipe, protein breakfast",
	openGraph: {
		title: "Spicy Sambal Scrambled Eggs - Indonesian Breakfast Recipe",
		description:
			"Transform ordinary scrambled eggs with authentic Indonesian sambal. Quick, easy, and incredibly flavorful breakfast in just 10 minutes.",
		images: [
			"/images/Spice Island Indonesia Sambal Oelek 185g Label.png",
		],
		type: "article",
	},
};

const recipe = {
	name: "Spicy Sambal Scrambled Eggs",
	description:
		"Transform your morning routine with these incredibly flavorful scrambled eggs infused with authentic Indonesian sambal. Quick, easy, and packed with protein and spice.",
	image: "/images/Spice Island Indonesia Sambal Oelek 185g Label.png",
	prepTime: "PT5M",
	cookTime: "PT5M",
	totalTime: "PT10M",
	servings: 2,
	difficulty: "Easy" as const,
	cuisine: "Indonesian Fusion",
	category: "Breakfast",
	keywords: [
		"sambal",
		"scrambled eggs",
		"breakfast",
		"Indonesian",
		"spicy eggs",
		"quick breakfast",
	],
	author: {
		name: "Spice Island Indonesia",
		type: "Organization" as const,
	},
	datePublished: "2024-02-12",

	ingredients: [
		"6 large eggs",
		"1-2 teaspoons Spice Island Sambal Oelek (adjust to taste)",
		"2 tablespoons whole milk or cream",
		"2 tablespoons butter",
		"2 spring onions, finely sliced",
		"1 small tomato, diced (optional)",
		"Salt and white pepper to taste",
		"Fresh cilantro for garnish",
		"Toasted bread or rice for serving",
	],

	instructions: [
		{
			step: 1,
			text: "Crack eggs into a bowl and add milk, sambal oelek, salt, and white pepper. Whisk vigorously until well combined and slightly frothy.",
		},
		{
			step: 2,
			text: "Heat butter in a non-stick pan over medium-low heat until melted and foaming.",
		},
		{
			step: 3,
			text: "Pour in the egg mixture and let it sit for 30 seconds without stirring.",
		},
		{
			step: 4,
			text: "Using a spatula, gently push the eggs from the edges toward the center, tilting the pan to let uncooked egg flow underneath.",
		},
		{
			step: 5,
			text: "Continue this process for 3-4 minutes, stirring gently and occasionally, until eggs are almost set but still slightly wet.",
		},
		{
			step: 6,
			text: "Add diced tomato (if using) and half the spring onions. Gently fold in.",
		},
		{
			step: 7,
			text: "Remove from heat while eggs are still slightly underdone - they'll continue cooking from residual heat.",
		},
		{
			step: 8,
			text: "Garnish with remaining spring onions and fresh cilantro. Serve immediately with toast or rice.",
		},
	],

	nutrition: {
		calories: 285,
		protein: "20g",
		carbohydrates: "3g",
		fat: "22g",
		fiber: "1g",
		sodium: "420mg",
	},

	tips: [
		"Start with less sambal and add more to taste - you can always add heat but can't take it away",
		"Use medium-low heat to prevent the eggs from cooking too quickly and becoming rubbery",
		"The key to creamy scrambled eggs is removing them from heat while still slightly underdone",
		"Sambal Oelek works best here for pure heat, but Sambal Bali adds aromatic complexity",
		"Serve with cooling elements like cucumber slices or yogurt to balance the heat",
	],

	variations: [
		"Cheese Version: Add grated cheddar or feta cheese in the last minute of cooking",
		"Vegetable Loaded: Include diced bell peppers, mushrooms, or spinach",
		"Herb-Infused: Add fresh basil, chives, or dill along with cilantro",
		"Extra Spicy: Use Sambal Bali for aromatic heat plus extra Sambal Oelek for intensity",
	],
};

export default function SambalScrambledEggsPage() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			<RecipeSchema recipe={recipe} />

			<div className='container mx-auto px-4 py-8'>
				<RecipeCard recipe={recipe} />

				{/* Additional Content */}
				<div className='max-w-4xl mx-auto mt-12 space-y-8'>
					{/* About This Recipe */}
					<section className='bg-white rounded-2xl shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							About This Recipe
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								This recipe transforms the humble
								scrambled egg into something
								extraordinary by incorporating authentic
								Indonesian sambal. The result is a
								breakfast that's not only quick and
								nutritious but also incredibly flavorful
								and satisfying.
							</p>
							<p>
								In Indonesia, spicy eggs are a common
								breakfast item, often served with rice
								and vegetables. This fusion version
								adapts those flavors for Western
								breakfast preferences while maintaining
								the authentic heat and complexity that
								makes Indonesian cuisine so special.
							</p>
						</div>
					</section>

					{/* Perfect Scrambled Eggs Technique */}
					<section className='bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-2xl shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Perfect Scrambled Eggs Technique
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Temperature Control
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• Use medium-low heat
										throughout
									</li>
									<li>
										• Never rush with high heat
									</li>
									<li>
										• Remove from heat while
										slightly underdone
									</li>
									<li>
										• Residual heat will finish
										cooking
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Stirring Technique
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• Push from edges to center
									</li>
									<li>
										• Tilt pan to let uncooked egg
										flow
									</li>
									<li>
										• Stir gently and infrequently
									</li>
									<li>
										• Use a silicone spatula for
										best results
									</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Heat Level Guide */}
					<section className='bg-white rounded-2xl shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Adjusting the Heat Level
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>
									Mild (1/2 teaspoon sambal):
								</strong>{" "}
								Perfect for those new to spicy food or
								children. Provides warmth and flavor
								without overwhelming heat.
							</p>
							<p>
								<strong>
									Medium (1 teaspoon sambal):
								</strong>{" "}
								The recommended starting point for most
								people. Noticeable heat that enhances
								rather than dominates the eggs.
							</p>
							<p>
								<strong>
									Hot (2 teaspoons sambal):
								</strong>{" "}
								For spice lovers who want a proper kick
								with their breakfast. The heat will be
								prominent but not overwhelming.
							</p>
							<p>
								<strong>
									Extra Hot (2+ teaspoons):
								</strong>{" "}
								Only for serious chili enthusiasts.
								Consider serving with cooling elements
								like yogurt or cucumber.
							</p>
						</div>
					</section>

					{/* Serving Suggestions */}
					<section className='bg-gradient-to-br from-gold-50 to-cream-50 rounded-2xl shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Serving Suggestions
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Western Style
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• Serve on buttered sourdough
										toast
									</li>
									<li>
										• Add sliced avocado for
										creaminess
									</li>
									<li>
										• Include grilled tomatoes and
										mushrooms
									</li>
									<li>
										• Pair with crispy bacon or
										sausages
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Indonesian Style
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• Serve over steamed jasmine
										rice
									</li>
									<li>
										• Add cucumber slices for
										cooling
									</li>
									<li>
										• Include pickled vegetables
										(acar)
									</li>
									<li>
										• Garnish with fried shallots
										and herbs
									</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Nutritional Benefits */}
					<section className='bg-white rounded-2xl shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Why This Makes a Great Breakfast
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>High Protein:</strong> Six eggs
								provide about 36g of complete protein,
								keeping you satisfied throughout the
								morning and supporting muscle health.
							</p>
							<p>
								<strong>Metabolism Boost:</strong> The
								capsaicin in sambal can help boost
								metabolism and may aid in weight
								management when part of a balanced diet.
							</p>
							<p>
								<strong>Quick Energy:</strong> Ready in
								just 10 minutes, this breakfast provides
								sustained energy without the crash
								associated with high-sugar breakfast
								options.
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
