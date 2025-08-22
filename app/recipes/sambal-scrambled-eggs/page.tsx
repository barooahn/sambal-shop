import { Metadata } from "next";
import RecipeCard from "@/components/recipes/RecipeCard";
import RecipeSchema from "@/components/seo/RecipeSchema";
import HowToSchema from "@/components/seo/HowToSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import EnhancedRecipeInstructions from "@/components/recipes/EnhancedRecipeInstructions";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import InternalLinkingOptimization from "@/components/seo/InternalLinkingOptimization";

export const metadata: Metadata = {
	title: "Sambal Scrambled Eggs Recipe | Indonesian Spicy Breakfast | Spice Island Indonesia",
	description:
		"Master Indonesian-style sambal scrambled eggs with authentic heat and creamy texture. Perfect 10-minute protein breakfast that transforms your morning routine with genuine sambal flavors.",
	keywords:
		"sambal scrambled eggs, spicy eggs recipe, Indonesian breakfast, sambal eggs, quick breakfast recipe, protein breakfast, Chef Yossie breakfast, Indonesian fusion breakfast",
	openGraph: {
		title: "Sambal Scrambled Eggs - Authentic Indonesian Breakfast Recipe",
		description:
			"Transform ordinary scrambled eggs with authentic Indonesian sambal. Master the perfect technique for creamy, spicy eggs ready in just 10 minutes.",
		images: ["/images/sambal-scrambled-eggs.webp"],
		type: "article",
	},
	alternates: {
		canonical:
			"https://www.spiceislandindonesia.com/recipes/sambal-scrambled-eggs",
	},
};

const recipe = {
	name: "Sambal Scrambled Eggs (Telur Orak-Arik Sambal)",
	description:
		"The perfect Indonesian-inspired breakfast that transforms simple scrambled eggs with the authentic heat of sambal oelek. Creamy, spicy, and ready in 10 minutes - this protein-packed breakfast will revolutionize your morning routine.",
	image: "/images/sambal-scrambled-eggs.webp",
	prepTime: "PT3M",
	cookTime: "PT7M",
	totalTime: "PT10M",
	servings: 2,
	difficulty: "Easy" as const,
	cuisine: "Indonesian Fusion",
	category: "Breakfast",
	keywords: [
		"sambal scrambled eggs",
		"telur orak arik",
		"Indonesian breakfast",
		"spicy eggs",
		"quick breakfast",
		"protein breakfast",
		"fusion breakfast",
	],
	author: {
		name: "Chef Yossie",
		type: "Person" as const,
	},
	datePublished: "2024-02-18",

	ingredients: [
		"6 large free-range eggs",
		"1-2 teaspoons Spice Island Sambal Oelek (start with 1 tsp)",
		"3 tablespoons whole milk or heavy cream",
		"2 tablespoons unsalted butter",
		"2 shallots or spring onions, finely sliced",
		"1 small ripe tomato, seeded and diced",
		"1/4 teaspoon salt (adjust to taste)",
		"1/8 teaspoon white pepper",
		"1 tablespoon fresh coriander, chopped",
		"1 small green chili, finely sliced (optional)",
		"Toasted sourdough bread or steamed jasmine rice for serving",
		"Cucumber slices for cooling contrast",
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
			text: "Remove from heat while eggs are still slightly underdone - they&apos;ll continue cooking from residual heat.",
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
		"Start with 1 teaspoon sambal and adjust up - heat builds as you eat",
		"Use medium-low heat throughout - rushing with high heat creates rubbery eggs",
		"Remove from heat while slightly underdone - residual heat finishes cooking perfectly",
		"Sambal Oelek provides pure heat, Sambal Bali adds aromatic complexity",
		"Fresh eggs make the biggest difference in texture and flavor",
		"Serve immediately while hot - scrambled eggs don't hold well",
	],

	// Enhanced schema properties
	cuisineType: "Fusion" as const,
	cookingMethods: [
		{
			name: "Low-temperature scrambling",
			description:
				"Gentle cooking method that creates creamy, custardy texture",
		},
		{
			name: "Sambal integration",
			description:
				"Incorporating Indonesian sambal for authentic heat and flavor complexity",
		},
		{
			name: "Fresh garnishing",
			description:
				"Adding fresh herbs and vegetables for color, texture, and cooling contrast",
		},
	],
	equipment: [
		{
			name: "Non-stick pan or well-seasoned cast iron",
			description:
				"Essential for easy cooking and cleanup with delicate eggs",
			required: true,
		},
		{
			name: "Silicone spatula",
			description:
				"Gentle tool that won't scratch non-stick surface while scrambling",
			required: true,
		},
		{
			name: "Whisk or fork",
			description: "For properly beating eggs before cooking",
			required: true,
		},
		{
			name: "Small bowl",
			description: "For beating eggs and mixing sambal evenly",
			required: true,
		},
	],
	skillLevel: "Beginner" as const,
	spiceLevel: "Medium" as const,
	dietaryRestrictions: ["Vegetarian", "GlutenFree", "LowCarb"],
	culturalOrigin:
		"Indonesian Fusion Breakfast - Adapts traditional Indonesian sambal into Western breakfast format",

	variations: [
		"Cheese Version: Add grated aged cheddar or crumbled feta in final minute",
		"Vegetable Loaded: Include diced bell peppers, mushrooms, or baby spinach",
		"Herb Garden: Add fresh basil, chives, or dill along with coriander",
		"Extra Spicy: Use Sambal Bali for aromatic heat plus extra Sambal Oelek for intensity",
		"Creamy Luxury: Add a dollop of crème fraîche or sour cream to cool and enrich",
	],
};

export default function SambalScrambledEggsPage() {
	// Breadcrumb data for navigation and schema
	const breadcrumbItems = [
		{
			name: "Home",
			url: "https://spiceislandindonesia.com",
			position: 1,
		},
		{
			name: "Recipes",
			url: "https://spiceislandindonesia.com/recipes",
			position: 2,
		},
		{
			name: "Sambal Scrambled Eggs",
			url: "https://spiceislandindonesia.com/recipes/sambal-scrambled-eggs",
			position: 3,
		},
	];

	// How-to steps for AI search optimization
	const howToSteps = [
		{
			name: "Beat eggs with sambal",
			text: "Whisk eggs with sambal oelek, milk, salt, and pepper until well combined and slightly frothy.",
		},
		{
			name: "Heat pan gently",
			text: "Melt butter in non-stick pan over medium-low heat until foaming. Don't rush with high heat.",
		},
		{
			name: "Add eggs and wait",
			text: "Pour egg mixture into pan and let sit for 30 seconds without stirring to begin setting.",
		},
		{
			name: "Scramble gently",
			text: "Push eggs from edges toward center, tilting pan to let uncooked egg flow underneath. Stir gently.",
		},
		{
			name: "Remove while soft",
			text: "Remove from heat while eggs are still slightly wet - residual heat will finish cooking perfectly.",
		},
		{
			name: "Garnish and serve",
			text: "Add fresh herbs and vegetables, serve immediately while hot and creamy for best texture.",
		},
	];

	// Enhanced instructions with visual indicators
	const enhancedInstructions = [
		{
			step: 1,
			text: "Crack eggs into a bowl and add milk, sambal oelek, salt, and white pepper. Whisk vigorously until well combined and slightly frothy.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Medium bowl", "Whisk or fork"],
			tips: "The frothy texture from vigorous whisking creates lighter, fluffier scrambled eggs. Don't skip this step.",
		},
		{
			step: 2,
			text: "Heat butter in a non-stick pan over medium-low heat until melted and foaming.",
			timeEstimate: "1 min",
			difficulty: "Easy" as const,
			equipment: ["Non-stick pan", "Silicone spatula"],
			tips: "Medium-low heat is crucial - too high and eggs will cook too quickly and become rubbery.",
			warning: "Don't let butter brown or burn - this will give eggs an off flavor.",
		},
		{
			step: 3,
			text: "Pour in the egg mixture and let it sit for 30 seconds without stirring.",
			timeEstimate: "30 sec",
			difficulty: "Easy" as const,
			equipment: ["Silicone spatula"],
			tips: "This initial rest allows the bottom to begin setting, creating better texture when you start stirring.",
		},
		{
			step: 4,
			text: "Using a spatula, gently push the eggs from the edges toward the center, tilting the pan to let uncooked egg flow underneath.",
			timeEstimate: "3 min",
			difficulty: "Medium" as const,
			equipment: ["Silicone spatula"],
			tips: "This technique creates large, creamy curds. Don't stir constantly - let the eggs set between pushes.",
		},
		{
			step: 5,
			text: "Continue this process for 3-4 minutes, stirring gently and occasionally, until eggs are almost set but still slightly wet.",
			timeEstimate: "4 min",
			difficulty: "Medium" as const,
			equipment: ["Silicone spatula"],
			tips: "The eggs should look almost done but still slightly glossy and wet - they'll finish cooking off the heat.",
		},
		{
			step: 6,
			text: "Add diced tomato (if using) and half the spring onions. Gently fold in.",
			timeEstimate: "30 sec",
			difficulty: "Easy" as const,
			equipment: ["Silicone spatula"],
			tips: "Add vegetables at the end to prevent them from releasing water and making eggs watery.",
		},
		{
			step: 7,
			text: "Remove from heat while eggs are still slightly underdone - they'll continue cooking from residual heat.",
			timeEstimate: "10 sec",
			difficulty: "Easy" as const,
			equipment: [],
			tips: "This is the secret to perfect scrambled eggs - the residual heat in the pan finishes cooking gently.",
			warning: "Don't leave on heat too long or eggs will become dry and rubbery.",
		},
		{
			step: 8,
			text: "Garnish with remaining spring onions and fresh cilantro. Serve immediately with toast or rice.",
			timeEstimate: "1 min",
			difficulty: "Easy" as const,
			equipment: ["Serving plates"],
			tips: "Serve immediately while hot and creamy. Provide cucumber slices for cooling contrast if the sambal is too spicy.",
		},
	];

	// Cooking FAQ data for AI search optimization
	const cookingFAQ = [
		{
			question:
				"How do I prevent my scrambled eggs from becoming rubbery?",
			answer: "The key is low heat and patience. Use medium-low heat throughout cooking, never rush with high heat. Remove the eggs from heat while they're still slightly wet and glossy - the residual heat will finish cooking them perfectly. Also, don't over-stir; gentle folding motions work best.",
		},
		{
			question:
				"Can I adjust the spice level in sambal scrambled eggs?",
			answer: "Absolutely! Start with 1/2 teaspoon of sambal if you're heat-sensitive, or go up to 2 teaspoons for serious spice lovers. Remember that sambal heat builds as you eat, so start conservatively. You can always serve extra sambal on the side for those who want more heat.",
		},
		{
			question:
				"What's the best type of sambal to use for scrambled eggs?",
			answer: "Sambal Oelek is perfect for scrambled eggs as it provides pure chili heat without competing flavors. Sambal Bali adds aromatic complexity with its spice blend but may be too complex for some palates in this simple dish. Start with Sambal Oelek and experiment from there.",
		},
		{
			question: "Can I make these eggs dairy-free?",
			answer: "Yes! Replace the milk with coconut milk (adds nice flavor) or any plant-based milk. Use vegan butter or coconut oil instead of regular butter. The sambal and technique remain the same, and the results are still delicious.",
		},
	];

	// Internal linking data for SEO optimization
	const relatedProducts = [
		{
			name: "Sambal Oelek - Pure Heat",
			url: "/sambal-oelek-uk",
			description:
				"Perfect for scrambled eggs - clean heat that doesn't overpower the delicate egg flavor",
			rating: 4.9,
			price: "£7.49",
			badge: "Ideal for Breakfast",
		},
		{
			name: "Sambal Bali - Aromatic & Spicy",
			url: "/sambal-bali-aromatic-spicy",
			description:
				"For those who want aromatic complexity - adds depth beyond just heat",
			rating: 4.8,
			price: "£7.49",
			badge: "Gourmet Option",
		},
	];

	const relatedRecipes = [
		{
			name: "Sambal Fried Rice",
			url: "/recipes/sambal-fried-rice",
			description:
				"Perfect companion dish - serve eggs over spicy fried rice for complete meal",
			difficulty: "Easy" as const,
			cookTime: "20 minutes",
		},
		{
			name: "Lalapan (Fresh Raw Vegetables)",
			url: "/recipes/lalapan",
			description:
				"Traditional fresh vegetables provide cooling contrast to spicy eggs",
			difficulty: "Easy" as const,
			cookTime: "15 minutes",
		},
	];

	const relatedArticles = [
		{
			title: "Indonesian Breakfast Culture: Starting the Day with Spice",
			url: "/blog/indonesian-breakfast-culture",
			excerpt: "Explore how Indonesians start their day with bold, spicy flavors and hearty meals",
			readTime: "7 min",
			category: "Culture & Food",
		},
		{
			title: "Mastering Eggs: Indonesian Techniques for Perfect Texture",
			url: "/blog/indonesian-egg-cooking-techniques",
			excerpt: "Learn traditional Indonesian methods for cooking eggs with perfect texture and flavor",
			readTime: "9 min",
			category: "Cooking Techniques",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			<RecipeSchema recipe={recipe} />
			<BreadcrumbSchema items={breadcrumbItems} />
			<HowToSchema
				name='How to Make Sambal Scrambled Eggs'
				description='Learn to make perfect Indonesian-style sambal scrambled eggs with creamy texture and authentic heat. Quick breakfast ready in 10 minutes.'
				steps={howToSteps}
				totalTime='PT10M'
				prepTime='PT3M'
				cookTime='PT7M'
				yield='2 servings'
				category='Indonesian Breakfast'
			/>
			<FAQSchema
				faqs={cookingFAQ}
				pageTitle='Sambal Scrambled Eggs Cooking - Frequently Asked Questions'
			/>

			<div className='container mx-auto px-4 py-8 pb-16'>
				<RecipeCard recipe={recipe} />

				{/* Enhanced Interactive Recipe Instructions */}
				<div className='max-w-4xl mx-auto mt-8'>
					<EnhancedRecipeInstructions
						title='Interactive Cooking Guide'
						description='Master the perfect scrambled egg technique with Indonesian sambal heat'
						prepTime={recipe.prepTime}
						cookTime={recipe.cookTime}
						totalTime={recipe.totalTime}
						servings={recipe.servings}
						difficulty={recipe.difficulty}
						instructions={enhancedInstructions}
					/>
				</div>

				{/* Internal Linking for SEO */}
				<div className='max-w-6xl mx-auto mt-12'>
					<InternalLinkingOptimization
						currentPage='recipe'
						relatedProducts={relatedProducts}
						relatedRecipes={relatedRecipes}
						relatedArticles={relatedArticles}
					/>
				</div>

				{/* Additional Content */}
				<div className='max-w-4xl mx-auto mt-10 space-y-8'>
					{/* About This Recipe */}
					<section className='bg-white rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							The Perfect Fusion Breakfast
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								This recipe represents the beautiful
								fusion of Indonesian heat with classic
								Western breakfast comfort. By
								incorporating authentic sambal into
								perfectly scrambled eggs, we create a
								dish that wakes up your palate while
								providing the protein and satisfaction
								you need to start your day strong.
							</p>
							<p>
								In Indonesia, spicy egg dishes are
								common breakfast foods, often served
								with rice and fresh vegetables. This
								adaptation brings those bold flavors to
								the familiar format of scrambled eggs,
								making it accessible while maintaining
								authentic Indonesian heat and
								complexity.
							</p>
						</div>
					</section>

					{/* Perfect Scrambled Eggs Technique */}
					<section className='bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Chef Yossie's Perfect Egg Technique
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Temperature Control
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• Use medium-low heat
										throughout cooking
									</li>
									<li>
										• Never rush with high heat
									</li>
									<li>
										• Remove from heat while
										slightly underdone
									</li>
									<li>
										• Let residual heat finish
										cooking perfectly
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Stirring Technique
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• Push eggs from edges toward
										center
									</li>
									<li>
										• Tilt pan to let uncooked egg
										flow underneath
									</li>
									<li>
										• Stir gently and infrequently
									</li>
									<li>
										• Use silicone spatula for
										best results
									</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Heat Level Guide */}
					<section className='bg-white rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Adjusting Your Heat Level
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>
									Mild (1/2 teaspoon sambal):
								</strong>{" "}
								Perfect for those new to spicy food or
								children. Provides warmth and flavor
								complexity without overwhelming heat.
								Great introduction to Indonesian
								flavors.
							</p>
							<p>
								<strong>
									Medium (1 teaspoon sambal):
								</strong>{" "}
								The recommended starting point for most
								people. Noticeable heat that enhances
								rather than dominates the eggs. Builds
								pleasant warmth as you eat.
							</p>
							<p>
								<strong>
									Hot (1.5 teaspoons sambal):
								</strong>{" "}
								For those who enjoy spice and want a
								proper kick with their breakfast. The
								heat will be prominent but balanced by
								the creamy eggs.
							</p>
							<p>
								<strong>
									Extra Hot (2+ teaspoons):
								</strong>{" "}
								Only for serious chili enthusiasts.
								Consider serving with cooling elements
								like yogurt, avocado, or cucumber slices
								to balance the intense heat.
							</p>
						</div>
					</section>

					{/* Serving Suggestions */}
					<section className='bg-gradient-to-br from-gold-50 to-cream-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Serving Styles Around the World
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
					<section className='bg-white rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Why This Makes a Perfect Breakfast
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>High-Quality Protein:</strong>{" "}
								Six eggs provide approximately 36g of
								complete protein, containing all
								essential amino acids needed for muscle
								repair and sustained energy throughout
								the morning.
							</p>
							<p>
								<strong>Metabolism Boost:</strong> The
								capsaicin in authentic sambal can help
								boost metabolism by up to 8% for several
								hours after eating, potentially aiding
								in weight management when part of a
								balanced diet.
							</p>
							<p>
								<strong>Quick and Satisfying:</strong>{" "}
								Ready in just 10 minutes, this breakfast
								provides sustained energy without blood
								sugar spikes. The combination of protein
								and healthy fats keeps you satisfied for
								hours.
							</p>
							<p>
								<strong>Brain Food:</strong> Eggs are
								rich in choline, essential for brain
								function and memory. Starting your day
								with this nutrient supports cognitive
								performance and focus throughout the
								morning.
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
