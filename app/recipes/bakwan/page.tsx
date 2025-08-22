import { Metadata } from "next";
import RecipeCard from "@/components/recipes/RecipeCard";
import RecipeSchema from "@/components/seo/RecipeSchema";
import HowToSchema from "@/components/seo/HowToSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import EnhancedRecipeInstructions from "@/components/recipes/EnhancedRecipeInstructions";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import InternalLinkingOptimization from "@/components/seo/InternalLinkingOptimization";

export const metadata: Metadata = {
	title: "Bakwan Recipe | Indonesian Vegetable Fritters with Sambal | Spice Island Indonesia",
	description:
		"Authentic Indonesian Bakwan recipe - crispy vegetable fritters perfect with sambal. Traditional street food that's vegetarian-friendly and incredibly satisfying. Made with fresh vegetables and aromatic spices.",
	keywords:
		"bakwan recipe, Indonesian fritters, vegetable fritters recipe, Indonesian street food, sambal fritters, vegetarian Indonesian food, crispy vegetable snacks, Chef Yossie recipe",
	openGraph: {
		title: "Bakwan Recipe - Indonesian Crispy Vegetable Fritters",
		description:
			"Learn to make authentic Indonesian Bakwan - crispy vegetable fritters that are perfect with fiery sambal. Traditional street food that's vegetarian and incredibly satisfying.",
		images: ["/images/bakwan.webp"],
		type: "article",
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/recipes/bakwan"
	}
};

const recipe = {
	name: "Bakwan (Indonesian Vegetable Fritters)",
	description:
		"Indonesia's beloved street food fritters featuring fresh vegetables in a light, crispy batter. These golden, crunchy snacks are the perfect vehicle for sambal, creating an irresistible combination of textures and the explosive flavors that define Indonesian street food culture.",
	image: "/images/bakwan.webp",
	prepTime: "PT20M",
	cookTime: "PT15M",
	totalTime: "PT35M",
	servings: 4,
	difficulty: "Medium" as const,
	cuisine: "Indonesian",
	category: "Snacks",
	keywords: [
		"bakwan",
		"Indonesian fritters",
		"vegetable fritters",
		"street food",
		"vegetarian Indonesian",
		"crispy snacks",
		"sambal dipping",
	],
	author: {
		name: "Chef Yossie",
		type: "Person" as const,
	},
	datePublished: "2024-02-18",

	ingredients: [
		// For the batter
		"150g plain flour",
		"1 tablespoon rice flour (for extra crispiness)",
		"1 teaspoon baking powder",
		"1/2 teaspoon salt",
		"1/4 teaspoon white pepper",
		"1/2 teaspoon ground coriander",
		"200ml cold water (approximately)",
		"1 large egg",
		
		// For the vegetables
		"100g cabbage, finely shredded",
		"1 large carrot, julienned",
		"100g bean sprouts",
		"2 spring onions, finely sliced",
		"2 cloves garlic, minced",
		"1 small green chili, finely chopped (optional)",
		"2 tablespoons fresh coriander, chopped",
		
		// For frying
		"500ml vegetable oil for deep frying",
		
		// For serving
		"4-6 tablespoons Spice Island Sambal Oelek",
		"Lime wedges",
		"Fresh cucumber slices",
		"Sweet soy sauce (kecap manis) for dipping (optional)",
	],

	instructions: [
		{
			step: 1,
			text: "Prepare all vegetables: finely shred cabbage, julienne carrot, clean bean sprouts, slice spring onions, mince garlic, and chop chili if using.",
		},
		{
			step: 2,
			text: "In a large bowl, whisk together plain flour, rice flour, baking powder, salt, white pepper, and ground coriander.",
		},
		{
			step: 3,
			text: "Make a well in the center and add the beaten egg. Gradually add cold water while whisking to create a smooth batter with the consistency of thick cream.",
		},
		{
			step: 4,
			text: "Add minced garlic, chopped chili, and fresh coriander to the batter. Mix well to distribute evenly.",
		},
		{
			step: 5,
			text: "Fold in the prepared vegetables - cabbage, carrot, bean sprouts, and spring onions. Mix gently until vegetables are well-coated with batter.",
		},
		{
			step: 6,
			text: "Heat oil in a large, heavy-bottomed pot or deep fryer to 170°C (340°F). The oil should be deep enough for the fritters to float freely.",
		},
		{
			step: 7,
			text: "Using a large spoon or ice cream scoop, carefully drop spoonfuls of the vegetable mixture into the hot oil. Don't overcrowd - fry in batches.",
		},
		{
			step: 8,
			text: "Fry for 3-4 minutes until golden brown and crispy on the bottom, then carefully flip and fry another 2-3 minutes until golden all over.",
		},
		{
			step: 9,
			text: "Remove fritters with a slotted spoon and drain on paper towels for 1-2 minutes to remove excess oil.",
		},
		{
			step: 10,
			text: "Serve immediately while hot and crispy with sambal oelek, lime wedges, and cucumber slices for dipping and cooling.",
		},
	],

	nutrition: {
		calories: 185,
		protein: "6g",
		carbohydrates: "24g",
		fat: "8g",
		fiber: "3g",
		sodium: "340mg",
	},

	tips: [
		"Cold water in the batter creates a lighter, crispier texture than room temperature water",
		"Don't overmix the batter once vegetables are added - this can make fritters tough",
		"Rice flour addition is crucial for extra crispiness - don't skip it",
		"Oil temperature is critical - too low and fritters will be greasy, too high and they'll burn",
		"Serve immediately while hot - bakwan loses its crispiness quickly once cooled",
		"The vegetable mixture should hold together but not be too thick - adjust water if needed",
	],

	// Enhanced schema properties
	cuisineType: "Indonesian" as const,
	cookingMethods: [
		{
			name: "Deep frying",
			description: "Traditional method that creates the characteristic crispy exterior and tender interior",
		},
		{
			name: "Batter preparation",
			description: "Creating the perfect light, crispy coating for vegetables",
		},
		{
			name: "Vegetable preparation",
			description: "Proper cutting techniques to ensure even cooking and good texture",
		},
	],
	equipment: [
		{
			name: "Large heavy-bottomed pot or deep fryer",
			description: "Essential for maintaining steady oil temperature during frying",
			required: true,
		},
		{
			name: "Cooking thermometer",
			description: "To monitor oil temperature accurately",
			required: true,
		},
		{
			name: "Slotted spoon or spider strainer",
			description: "For safely removing fritters from hot oil",
			required: true,
		},
		{
			name: "Large mixing bowl",
			description: "For preparing batter and mixing vegetables",
			required: true,
		},
	],
	skillLevel: "Intermediate" as const,
	spiceLevel: "Mild" as const,
	dietaryRestrictions: ["Vegetarian"],
	culturalOrigin: "Indonesian Street Food - Popular throughout Indonesia, especially as afternoon snacks and market food",

	variations: [
		"Bakwan Jagung: Add fresh corn kernels for sweetness and texture",
		"Bakwan Udang: Traditional version with small prawns mixed in",
		"Bakwan Sayur: Extra vegetables like green beans, cauliflower, or broccoli",
		"Bakwan Pedas: Add more chilies and serve with extra spicy sambal",
	],
};

export default function BakwanPage() {
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
			name: "Bakwan",
			url: "https://spiceislandindonesia.com/recipes/bakwan",
			position: 3,
		},
	];

	// How-to steps for AI search optimization
	const howToSteps = [
		{
			name: "Prepare vegetables",
			text: "Shred cabbage, julienne carrot, clean bean sprouts, and slice spring onions. All vegetables should be cut finely for even cooking.",
		},
		{
			name: "Make batter",
			text: "Mix flours, baking powder, and spices. Add egg and cold water gradually to create smooth batter with thick cream consistency.",
		},
		{
			name: "Combine ingredients",
			text: "Add garlic, chili, and herbs to batter, then fold in prepared vegetables until well-coated but not overmixed.",
		},
		{
			name: "Heat oil perfectly",
			text: "Heat oil to exactly 170°C (340°F). Proper temperature is crucial for crispy, non-greasy fritters.",
		},
		{
			name: "Fry in batches",
			text: "Drop spoonfuls into oil, don't overcrowd. Fry 3-4 minutes per side until golden and crispy all over.",
		},
		{
			name: "Serve with sambal",
			text: "Drain briefly on paper towels, serve immediately while hot with sambal oelek and cooling cucumber slices.",
		},
	];

	// Enhanced instructions with visual indicators
	const enhancedInstructions = [
		{
			step: 1,
			text: "Prepare all vegetables: finely shred cabbage, julienne carrot, clean bean sprouts, slice spring onions, mince garlic, and chop chili if using.",
			timeEstimate: "12 min",
			difficulty: "Medium" as const,
			equipment: ["Sharp knife", "Cutting board", "Large bowl"],
			tips: "Cut vegetables uniformly for even cooking. Bean sprouts should have their tails removed for better presentation.",
		},
		{
			step: 2,
			text: "In a large bowl, whisk together plain flour, rice flour, baking powder, salt, white pepper, and ground coriander.",
			timeEstimate: "3 min",
			difficulty: "Easy" as const,
			equipment: ["Large mixing bowl", "Whisk"],
			tips: "Sift dry ingredients if possible to prevent lumps. Rice flour is crucial for crispiness - don't substitute.",
		},
		{
			step: 3,
			text: "Make a well in the center and add the beaten egg. Gradually add cold water while whisking to create a smooth batter with the consistency of thick cream.",
			timeEstimate: "5 min",
			difficulty: "Medium" as const,
			equipment: ["Whisk", "Measuring cup"],
			tips: "Add water gradually - you might not need all of it. The batter should coat vegetables but not be too thick or thin.",
			warning: "Cold water is essential for crispy texture. Don't use warm water.",
		},
		{
			step: 4,
			text: "Add minced garlic, chopped chili, and fresh coriander to the batter. Mix well to distribute evenly.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Wooden spoon"],
			tips: "These aromatics should be evenly distributed for consistent flavor in every fritter.",
		},
		{
			step: 5,
			text: "Fold in the prepared vegetables - cabbage, carrot, bean sprouts, and spring onions. Mix gently until vegetables are well-coated with batter.",
			timeEstimate: "3 min",
			difficulty: "Medium" as const,
			equipment: ["Large spoon or spatula"],
			tips: "Fold gently to avoid breaking vegetables. The mixture should hold together but not be too thick.",
			warning: "Don't overmix - this makes fritters tough and chewy.",
		},
		{
			step: 6,
			text: "Heat oil in a large, heavy-bottomed pot or deep fryer to 170°C (340°F). The oil should be deep enough for the fritters to float freely.",
			timeEstimate: "8 min",
			difficulty: "Medium" as const,
			equipment: ["Heavy pot", "Cooking thermometer"],
			tips: "Use enough oil so temperature doesn't drop dramatically when fritters are added. Test with a small piece of batter - it should sizzle immediately.",
			warning: "Hot oil is dangerous. Never leave unattended and keep a lid nearby for safety.",
		},
		{
			step: 7,
			text: "Using a large spoon or ice cream scoop, carefully drop spoonfuls of the vegetable mixture into the hot oil. Don't overcrowd - fry in batches.",
			timeEstimate: "2 min per batch",
			difficulty: "Hard" as const,
			equipment: ["Large spoon or ice cream scoop"],
			tips: "Drop batter away from you to prevent splashing. Each fritter should be about golf ball sized for even cooking.",
			warning: "Don't overcrowd the pot - this lowers oil temperature and makes fritters greasy.",
		},
		{
			step: 8,
			text: "Fry for 3-4 minutes until golden brown and crispy on the bottom, then carefully flip and fry another 2-3 minutes until golden all over.",
			timeEstimate: "6 min per batch",
			difficulty: "Medium" as const,
			equipment: ["Slotted spoon", "Tongs"],
			tips: "Listen for active sizzling - this means moisture is escaping and fritters are crisping. Don't flip too early.",
		},
		{
			step: 9,
			text: "Remove fritters with a slotted spoon and drain on paper towels for 1-2 minutes to remove excess oil.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Slotted spoon", "Paper towels"],
			tips: "Don't drain too long or they'll lose heat and crispiness. Just enough to remove surface oil.",
		},
		{
			step: 10,
			text: "Serve immediately while hot and crispy with sambal oelek, lime wedges, and cucumber slices for dipping and cooling.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Serving plates", "Small bowls"],
			tips: "Serve immediately - bakwan is best when hot and crispy. Provide plenty of sambal for dipping.",
		},
	];

	// Cooking FAQ data for AI search optimization
	const cookingFAQ = [
		{
			question: "Why do my bakwan turn out soggy instead of crispy?",
			answer: "Several factors cause soggy fritters: oil temperature too low (should be 170°C), batter too thick, overcrowding the pot, or not draining properly. Also ensure you're using cold water in the batter and including rice flour for extra crispiness.",
		},
		{
			question: "Can I make bakwan without eggs for vegan version?",
			answer: "Yes! Replace the egg with 2 tablespoons of cornstarch mixed with 3 tablespoons water, or use aquafaba (chickpea liquid). The texture will be slightly different but still delicious. Make sure your oil and other ingredients are vegan-friendly.",
		},
		{
			question: "What's the best oil temperature for frying bakwan?",
			answer: "170°C (340°F) is ideal. Too hot (above 180°C) burns the outside before inside cooks. Too cool (below 160°C) makes them absorb oil and become greasy. Use a thermometer for best results, or test with a small piece of batter.",
		},
		{
			question: "Can I prepare the batter ahead of time?",
			answer: "It's best to use batter immediately for maximum crispiness. If you must prepare ahead, keep batter and vegetables separate and combine just before frying. The baking powder loses effectiveness over time, making fritters less light and crispy.",
		},
	];

	// Internal linking data for SEO optimization
	const relatedProducts = [
		{
			name: "Sambal Oelek - Pure Heat",
			url: "/sambal-oelek-uk",
			description: "Perfect dipping sauce for crispy bakwan - the clean heat complements without overpowering the vegetables",
			rating: 4.9,
			price: "£7.49",
			badge: "Perfect Dipping Sauce",
		},
		{
			name: "Sambal Bali - Aromatic & Spicy",
			url: "/sambal-bali-aromatic-spicy",
			description: "Adds aromatic complexity to simple fritters - elevates street food to restaurant quality",
			rating: 4.8,
			price: "£7.49",
			badge: "Gourmet Option",
		},
	];

	const relatedRecipes = [
		{
			name: "Lalapan (Fresh Raw Vegetables)",
			url: "/recipes/lalapan",
			description: "Perfect cooling accompaniment to balance the richness of fried bakwan",
			difficulty: "Easy" as const,
			cookTime: "15 minutes",
		},
		{
			name: "Sambal Fried Rice",
			url: "/recipes/sambal-fried-rice",
			description: "Turn your snack into a meal by serving bakwan alongside spicy fried rice",
			difficulty: "Easy" as const,
			cookTime: "20 minutes",
		},
	];

	const relatedArticles = [
		{
			title: "Indonesian Street Food Culture: From Markets to Your Kitchen",
			url: "/blog/indonesian-food-culture-context",
			excerpt: "Explore the vibrant world of Indonesian street food and learn about dishes like bakwan",
			readTime: "9 min",
			category: "Culture & Food",
		},
		{
			title: "The Art of Indonesian Frying: Traditional Techniques",
			url: "/blog/indonesian-frying-techniques",
			excerpt: "Master traditional Indonesian frying methods for perfect crispy results every time",
			readTime: "7 min",
			category: "Cooking Techniques",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			<RecipeSchema recipe={recipe} />
			<BreadcrumbSchema items={breadcrumbItems} />
			<HowToSchema
				name='How to Make Bakwan (Indonesian Vegetable Fritters)'
				description='Learn to make authentic Indonesian Bakwan with crispy batter, fresh vegetables, and perfect frying technique. Traditional street food recipe.'
				steps={howToSteps}
				totalTime='PT35M'
				prepTime='PT20M'
				cookTime='PT15M'
				yield='4 servings'
				category='Indonesian Street Food'
			/>
			<FAQSchema
				faqs={cookingFAQ}
				pageTitle='Bakwan Cooking - Frequently Asked Questions'
			/>

			<div className='container mx-auto px-4 py-8 pb-16'>

				<RecipeCard recipe={recipe} />

				{/* Enhanced Interactive Recipe Instructions */}
				<div className='max-w-4xl mx-auto mt-8'>
					<EnhancedRecipeInstructions
						title='Interactive Cooking Guide'
						description="Master the art of Indonesian frying for perfectly crispy vegetable fritters"
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
							Indonesian Street Food Classic
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								Bakwan represents the heart of Indonesian street food culture - simple ingredients transformed into something extraordinary through technique and tradition. These crispy vegetable fritters have been satisfying hungry Indonesians for generations, sold from pushcarts, market stalls, and street corners throughout the archipelago.
							</p>
							<p>
								What makes bakwan special isn't complexity - it's the perfect balance of crispy exterior and tender vegetables inside, enhanced by the explosive flavor of authentic sambal. The contrast of textures and temperatures, the interplay of mild vegetables and fiery chilies, creates the kind of eating experience that defines Indonesian cuisine.
							</p>
						</div>
					</section>

					{/* Technique Mastery */}
					<section className='bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Secrets of Perfect Bakwan
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Batter Perfection
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>• Cold water creates lighter, crispier texture</li>
									<li>• Rice flour addition is non-negotiable for crispiness</li>
									<li>• Baking powder must be fresh for proper lift</li>
									<li>• Don't overmix once vegetables are added</li>
								</ul>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Frying Excellence
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>• 170°C oil temperature is critical</li>
									<li>• Don't overcrowd the pot</li>
									<li>• Listen for active sizzling - sign of proper crisping</li>
									<li>• Serve immediately while hot and crunchy</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Vegetable Selection */}
					<section className='bg-white rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Choosing Your Vegetables
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>Traditional Core:</strong> Cabbage provides the base with its mild flavor and satisfying crunch. Carrots add natural sweetness and color, while bean sprouts contribute freshness and texture. Spring onions offer mild sharpness that doesn't overpower.
							</p>
							<p>
								<strong>Seasonal Additions:</strong> Indonesian cooks adapt bakwan to available vegetables. Green beans, cauliflower, broccoli, or corn can be added. The key is balance - no single vegetable should dominate, and all should be cut to similar sizes for even cooking.
							</p>
							<p>
								<strong>Preparation Matters:</strong> Vegetables should be dry before adding to batter. Excess moisture creates steam during frying, making fritters soggy instead of crispy. Pat vegetables dry with paper towels if necessary.
							</p>
						</div>
					</section>

					{/* Serving Culture */}
					<section className='bg-gradient-to-br from-gold-50 to-cream-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Indonesian Snacking Culture
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>Afternoon Tradition:</strong> In Indonesia, bakwan is typically enjoyed as an afternoon snack with tea or coffee. Street vendors prepare them fresh throughout the day, the sizzling sound and aroma drawing customers from their daily routines.
							</p>
							<p>
								<strong>Social Food:</strong> Bakwan is often shared - a plate placed in the center of the table with various sambals for dipping. This communal eating style reflects the Indonesian philosophy that food brings people together and should be enjoyed socially.
							</p>
							<p>
								<strong>Modern Applications:</strong> While traditional as a snack, bakwan works beautifully as an appetizer for Western meals, a vegetarian main course with rice and vegetables, or even a unique breakfast with eggs. The key is always serving with authentic sambal.
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}