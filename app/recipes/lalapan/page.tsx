import { Metadata } from "next";
import RecipeCard from "@/components/recipes/RecipeCard";
import RecipeSchema from "@/components/seo/RecipeSchema";
import HowToSchema from "@/components/seo/HowToSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import EnhancedRecipeInstructions from "@/components/recipes/EnhancedRecipeInstructions";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import InternalLinkingOptimization from "@/components/seo/InternalLinkingOptimization";

export const metadata: Metadata = {
	title: "Lalapan Recipe | Indonesian Fresh Raw Vegetables",
	description:
		"Authentic Indonesian Lalapan recipe - fresh raw vegetables served with fiery sambal. The perfect healthy accompaniment that showcases sambal as the star. Simple, traditional, essential.",
	keywords:
		"lalapan recipe, Indonesian fresh vegetables, raw vegetables with sambal, Indonesian salad, healthy Indonesian food, sambal vegetables, traditional Indonesian sides, Chef Yossie recipe",
	openGraph: {
		title: "Lalapan Recipe - Indonesian Fresh Raw Vegetables with Sambal",
		description:
			"Discover authentic Indonesian Lalapan - the traditional fresh vegetable dish that exists purely to showcase the incredible flavors of sambal. Simple, healthy, essential.",
		images: ["/images/lalapan.webp"],
		type: "article",
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/recipes/lalapan",
	},
};

const recipe = {
	name: "Lalapan (Indonesian Fresh Raw Vegetables)",
	description:
		"The ultimate Indonesian side dish that exists for one purpose: to showcase the incredible power of authentic sambal. Fresh, crisp vegetables provide the perfect cooling contrast to fiery sambal heat, creating the essential balance found in every Indonesian meal.",
	image: "/images/lalapan.webp",
	prepTime: "PT15M",
	cookTime: "PT0M",
	totalTime: "PT15M",
	servings: 4,
	difficulty: "Easy" as const,
	cuisine: "Indonesian",
	category: "Sides",
	keywords: [
		"lalapan",
		"Indonesian fresh vegetables",
		"raw vegetables",
		"sambal vegetables",
		"Indonesian salad",
		"healthy Indonesian",
		"traditional sides",
	],
	author: {
		name: "Chef Yossie",
		type: "Person" as const,
	},
	datePublished: "2024-02-17",

	ingredients: [
		"1 large cucumber, sliced into rounds",
		"1 small head lettuce or cabbage, leaves separated and torn",
		"4-6 cherry tomatoes, halved",
		"1 small carrot, julienned (optional)",
		"4-6 Thai basil leaves (optional)",
		"2 spring onions, sliced (optional)",
		"1 small green chili, sliced thin (optional)",

		// The essential component
		"4-6 tablespoons Spice Island Sambal Oelek or Sambal Bali",
		"Lime wedges for serving",
		"Salt to taste",

		// Traditional accompaniments
		"Fried peanuts or keropok (Indonesian crackers)",
		"Hard-boiled eggs, quartered (optional)",
		"Fried tofu or tempeh, sliced (optional)",
	],

	instructions: [
		{
			step: 1,
			text: "Wash all vegetables thoroughly under cold running water. This is crucial as the vegetables will be eaten raw.",
		},
		{
			step: 2,
			text: "Slice cucumber into 1cm thick rounds. For a traditional touch, score the skin with a fork before slicing for better texture.",
		},
		{
			step: 3,
			text: "Separate lettuce or cabbage leaves and tear into bite-sized pieces. Remove any tough stems or damaged parts.",
		},
		{
			step: 4,
			text: "Halve the cherry tomatoes and julienne the carrot if using. All cuts should be bite-sized for easy eating.",
		},
		{
			step: 5,
			text: "Arrange vegetables attractively on a large serving platter or individual plates. There's no wrong way - make it look appealing.",
		},
		{
			step: 6,
			text: "Place sambal in small individual bowls or one central bowl for sharing. Each person should have easy access.",
		},
		{
			step: 7,
			text: "Garnish with fresh herbs, spring onions, or thin chili slices if desired. Add lime wedges around the plate.",
		},
		{
			step: 8,
			text: "Serve immediately while vegetables are crisp and fresh. Provide small spoons for the sambal.",
		},
	],

	nutrition: {
		calories: 45,
		protein: "2g",
		carbohydrates: "8g",
		fat: "1g",
		fiber: "3g",
		sodium: "320mg",
	},

	tips: [
		"The vegetables MUST be completely fresh and crisp - this dish lives or dies by vegetable quality",
		"Ice water bath for 10 minutes makes vegetables extra crisp if they're not perfectly fresh",
		"Each diner should have their own small bowl of sambal - sharing leads to double-dipping",
		"Start with less sambal if you're not used to Indonesian heat levels - you can always add more",
		"The contrast of temperatures is essential - cold vegetables, room temperature sambal",
		"Don't dress the vegetables ahead of time - they should stay separate until eating",
	],

	// Enhanced schema properties
	cuisineType: "Indonesian" as const,
	cookingMethods: [
		{
			name: "Fresh preparation",
			description:
				"No cooking required - focuses on selecting and preparing fresh ingredients",
		},
		{
			name: "Knife skills",
			description:
				"Proper cutting techniques to create appealing, bite-sized pieces",
		},
		{
			name: "Plating and presentation",
			description:
				"Arranging components attractively to showcase the fresh ingredients",
		},
	],
	equipment: [
		{
			name: "Sharp knife",
			description:
				"Essential for clean cuts that don't bruise the vegetables",
			required: true,
		},
		{
			name: "Cutting board",
			description: "Clean surface for food preparation",
			required: true,
		},
		{
			name: "Large serving platter",
			description: "To arrange vegetables attractively",
			required: true,
		},
		{
			name: "Small bowls",
			description: "Individual bowls for sambal serving",
			required: true,
		},
	],
	skillLevel: "Beginner" as const,
	// Variable spice via sambal choice; choose representative level for schema
	spiceLevel: "Mild" as const,
	dietaryRestrictions: ["Vegan", "GlutenFree", "Raw", "LowCarb"],
	culturalOrigin:
		"Traditional Indonesian accompaniment - found throughout Indonesia, essential part of every meal",

	variations: [
		"Lalapan Sunda: West Javanese style with extra fresh herbs and kemangi (lemon basil)",
		"Lalapan Bali: Include jukut urab (blanched vegetables) alongside raw ones",
		"Lalapan Padang: Served with extra fried peanuts and rendang",
		"Lalapan Modern: Add avocado, bean sprouts, and microgreens for contemporary presentation",
	],
};

export default function LalapaPage() {
	// Breadcrumb data for navigation and schema
	const breadcrumbItems = [
		{
			name: "Home",
			url: "https://www.spiceislandindonesia.com",
			position: 1,
		},
		{
			name: "Recipes",
			url: "https://www.spiceislandindonesia.com/recipes",
			position: 2,
		},
		{
			name: "Lalapan",
			url: "https://www.spiceislandindonesia.com/recipes/lalapan",
			position: 3,
		},
	];

	// How-to steps for AI search optimization
	const howToSteps = [
		{
			name: "Select fresh vegetables",
			text: "Choose the freshest, crispest vegetables available. Quality is everything for this raw preparation.",
		},
		{
			name: "Wash thoroughly",
			text: "Wash all vegetables under cold running water. Since they're eaten raw, cleanliness is crucial.",
		},
		{
			name: "Cut attractively",
			text: "Slice cucumber, tear lettuce, halve tomatoes. All pieces should be bite-sized and visually appealing.",
		},
		{
			name: "Arrange beautifully",
			text: "Arrange vegetables on serving platter. Make it look inviting - presentation matters for this simple dish.",
		},
		{
			name: "Serve with sambal",
			text: "Provide sambal in individual bowls with lime wedges. Each person controls their own heat level.",
		},
	];

	// Enhanced instructions with visual indicators
	const enhancedInstructions = [
		{
			step: 1,
			text: "Wash all vegetables thoroughly under cold running water. This is crucial as the vegetables will be eaten raw.",
			timeEstimate: "3 min",
			difficulty: "Easy" as const,
			equipment: ["Colander", "Cold running water"],
			tips: "Use a vegetable brush for cucumbers and tomatoes. Consider a vegetable wash if available.",
			warning: "Extra care with washing is essential - these vegetables are eaten completely raw.",
		},
		{
			step: 2,
			text: "Slice cucumber into 1cm thick rounds. For a traditional touch, score the skin with a fork before slicing for better texture.",
			timeEstimate: "3 min",
			difficulty: "Easy" as const,
			equipment: ["Sharp knife", "Cutting board", "Fork"],
			tips: "Scoring the cucumber skin with a fork creates an attractive pattern and helps sambal cling to the surface.",
		},
		{
			step: 3,
			text: "Separate lettuce or cabbage leaves and tear into bite-sized pieces. Remove any tough stems or damaged parts.",
			timeEstimate: "4 min",
			difficulty: "Easy" as const,
			equipment: ["Clean hands"],
			tips: "Tearing by hand rather than cutting with a knife prevents browning and gives a more rustic, traditional appearance.",
		},
		{
			step: 4,
			text: "Halve the cherry tomatoes and julienne the carrot if using. All cuts should be bite-sized for easy eating.",
			timeEstimate: "3 min",
			difficulty: "Easy" as const,
			equipment: ["Sharp knife", "Cutting board"],
			tips: "Cut tomatoes just before serving to prevent them from releasing too much juice and making other vegetables soggy.",
		},
		{
			step: 5,
			text: "Arrange vegetables attractively on a large serving platter or individual plates. There's no wrong way - make it look appealing.",
			timeEstimate: "3 min",
			difficulty: "Easy" as const,
			equipment: ["Large serving platter"],
			tips: "Group similar colors together or create rainbow patterns. The visual appeal is important for this simple dish.",
		},
		{
			step: 6,
			text: "Place sambal in small individual bowls or one central bowl for sharing. Each person should have easy access.",
			timeEstimate: "1 min",
			difficulty: "Easy" as const,
			equipment: ["Small bowls", "Small spoons"],
			tips: "Individual bowls prevent double-dipping and allow each person to control their heat level. Provide small spoons for serving.",
		},
		{
			step: 7,
			text: "Garnish with fresh herbs, spring onions, or thin chili slices if desired. Add lime wedges around the plate.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Sharp knife for garnish"],
			tips: "Fresh herbs like Thai basil or cilantro add aromatic complexity. Lime is essential - it brightens everything.",
		},
		{
			step: 8,
			text: "Serve immediately while vegetables are crisp and fresh. Provide small spoons for the sambal.",
			timeEstimate: "1 min",
			difficulty: "Easy" as const,
			equipment: ["Small spoons"],
			tips: "Don't let this sit - vegetables will lose their crispness. The contrast of cold, crisp vegetables with room temperature sambal is key.",
		},
	];

	// Cooking FAQ data for AI search optimization
	const cookingFAQ = [
		{
			question: "What vegetables are traditional for Lalapan?",
			answer: "Traditional lalapan includes cucumber, lettuce or young cabbage leaves, and tomatoes. Some regions add Thai basil, bean sprouts, or long beans. The key is that vegetables should be fresh, crisp, and eaten raw. Choose what's freshest and most appealing to you.",
		},
		{
			question: "How much sambal should I serve with Lalapan?",
			answer: "Start with 1 tablespoon per person and let people add more. Indonesian sambal is much hotter than most Western condiments, so it's better to under-serve than overwhelm guests. Experienced sambal eaters might use 2-3 tablespoons per serving.",
		},
		{
			question: "Can I prepare Lalapan ahead of time?",
			answer: "You can wash and cut vegetables up to 4 hours ahead, but store them separately in the refrigerator covered with damp paper towels. Don't arrange the platter until just before serving - the vegetables need to stay crisp and the presentation fresh.",
		},
		{
			question: "Is Lalapan safe to eat raw?",
			answer: "Yes, when vegetables are fresh and properly washed. Use vegetable wash if available, and ensure all vegetables are thoroughly cleaned under running water. If you're concerned about water quality, soak vegetables in bottled water for final rinse.",
		},
	];

	// Internal linking data for SEO optimization
	const relatedProducts = [
		{
			name: "Sambal Oelek - Pure Heat",
			url: "/sambal-oelek-uk",
			description:
				"THE star of Lalapan - fresh, chunky sambal that transforms simple vegetables into an unforgettable experience",
			rating: 4.9,
			price: "£7.49",
			badge: "Essential for Lalapan",
		},
		{
			name: "Sambal Bali - Aromatic & Spicy",
			url: "/sambal-bali-aromatic-spicy",
			description:
				"Adds aromatic complexity to the fresh vegetables - perfect for those who want more than just heat",
			rating: 4.8,
			price: "£7.49",
			badge: "Aromatic Option",
		},
	];

	const relatedRecipes = [
		{
			name: "Ayam Penyet",
			url: "/recipes/ayam-penyet",
			description:
				"Traditional pairing - lalapan is the classic accompaniment to smashed fried chicken",
			difficulty: "Medium" as const,
			cookTime: "55 minutes",
		},
		{
			name: "Ikan Bakar",
			url: "/recipes/ikan-bakar",
			description:
				"Fresh vegetables provide cooling contrast to spicy grilled fish",
			difficulty: "Medium" as const,
			cookTime: "40 minutes",
		},
	];

	const relatedArticles = [
		{
			title: "The Philosophy of Indonesian Balance: Hot, Sweet, Sour, Salt",
			url: "/blog/mastering-indonesian-heat",
			excerpt: "Understand how simple dishes like Lalapan create perfect harmony in Indonesian meals",
			readTime: "6 min",
			category: "Culinary Philosophy",
		},
		{
			title: "Sambal: The Soul of Indonesian Cuisine",
			url: "/blog/ultimate-guide-indonesian-sambal",
			excerpt: "Discover why every Indonesian meal revolves around sambal and how it transforms simple ingredients",
			readTime: "8 min",
			category: "Culture & Food",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			<RecipeSchema recipe={recipe} />
			<BreadcrumbSchema items={breadcrumbItems} />
			<HowToSchema
				name='How to Make Lalapan (Indonesian Fresh Raw Vegetables)'
				description='Learn to prepare authentic Indonesian Lalapan - the simple fresh vegetable dish that showcases sambal as the star of Indonesian cuisine.'
				steps={howToSteps}
				totalTime='PT15M'
				prepTime='PT15M'
				cookTime='PT0M'
				yield='4 servings'
				category='Indonesian Side Dish'
			/>
			<FAQSchema
				faqs={cookingFAQ}
				pageTitle='Lalapan Preparation - Frequently Asked Questions'
			/>

			<div className='container mx-auto px-4 py-8 pb-16'>
				{/* Hidden H1 for SEO */}
				<h1 className='sr-only'>Lalapan Recipe | Indonesian Fresh Raw Vegetables with Sambal</h1>

				<RecipeCard recipe={recipe} />

				{/* Enhanced Interactive Recipe Instructions */}
				<div className='max-w-4xl mx-auto mt-8'>
					<EnhancedRecipeInstructions
						title='Interactive Preparation Guide'
						description='Master the art of presenting fresh vegetables that showcase sambal perfectly'
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
							The Essence of Indonesian Dining
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								Lalapan represents something profound in
								Indonesian cuisine: the understanding
								that sometimes the simplest things are
								the most essential. This isn't just a
								side dish - it's a philosophy. Fresh,
								raw vegetables exist to showcase the
								incredible complexity and heat of
								authentic sambal, creating a perfect
								balance that defines Indonesian eating.
							</p>
							<p>
								Every Indonesian meal, from street food
								to fine dining, includes some form of
								fresh vegetables and sambal. The cooling
								crispness of cucumber, the mild
								bitterness of fresh lettuce, the sweet
								acidity of tomatoes - these provide the
								canvas on which sambal paints its fiery
								masterpiece. Without lalapan, Indonesian
								food would be incomplete.
							</p>
						</div>
					</section>

					{/* The Perfect Balance */}
					<section className='bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Understanding Indonesian Food Balance
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Temperature Contrast
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• Cold, crisp vegetables cool
										the palate
									</li>
									<li>
										• Room temperature sambal
										provides heat
									</li>
									<li>
										• This contrast is essential,
										not accidental
									</li>
									<li>
										• Creates rhythm in the eating
										experience
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Flavor Harmony
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• Mild vegetables don't
										compete with sambal
									</li>
									<li>
										• Fresh textures contrast with
										cooked foods
									</li>
									<li>
										• Clean flavors refresh
										between spicy bites
									</li>
									<li>
										• Natural sweetness balances
										heat and salt
									</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Regional Variations */}
					<section className='bg-white rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Regional Indonesian Styles
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>
									Sundanese Lalapan (West Java):
								</strong>{" "}
								Often includes kemangi (lemon basil),
								young cassava leaves, and sometimes
								blanched long beans alongside the raw
								vegetables. The aromatic herbs add
								complexity that pairs beautifully with
								the region's preference for sambal
								terasi.
							</p>
							<p>
								<strong>Javanese Style:</strong> Tends
								to be simpler - focusing on cucumber,
								lettuce, and tomatoes. Often accompanied
								by fried peanuts and served with the
								iconic sambal oelek that Central Java is
								famous for.
							</p>
							<p>
								<strong>Balinese Approach:</strong> May
								include blanched vegetables (jukut urab)
								alongside raw ones, and often features
								sambal matah - a fresh, raw sambal made
								with shallots and lemongrass that's
								perfect with the crisp vegetables.
							</p>
						</div>
					</section>

					{/* Health Benefits */}
					<section className='bg-gradient-to-br from-green-50 to-teal-50 rounded-sm shadow-sm border border-green-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Health Benefits of Raw Vegetables with Sambal
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>Maximum Nutrition:</strong> Raw
								vegetables retain all their vitamins,
								minerals, and enzymes that cooking can
								destroy. The vitamin C in tomatoes and
								cucumbers is particularly high when
								fresh.
							</p>
							<p>
								<strong>Digestive Benefits:</strong> The
								fresh enzymes in raw vegetables aid
								digestion, especially important when
								eating rich, spicy Indonesian dishes.
								The fiber helps with satiety and
								digestive health.
							</p>
							<p>
								<strong>Sambal's Health Power:</strong>{" "}
								The capsaicin in fresh chilies boosts
								metabolism, has anti-inflammatory
								properties, and can help with pain
								relief. Combined with fresh vegetables,
								it's a powerful health combination.
							</p>
							<p>
								<strong>Hydration and Cooling:</strong>{" "}
								High water content vegetables like
								cucumber help maintain hydration and
								provide natural cooling - essential when
								eating spicy foods in tropical climates.
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
