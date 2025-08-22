import { Metadata } from "next";
import RecipeCard from "@/components/recipes/RecipeCard";
import RecipeSchema from "@/components/seo/RecipeSchema";
import HowToSchema from "@/components/seo/HowToSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import EnhancedRecipeInstructions from "@/components/recipes/EnhancedRecipeInstructions";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import InternalLinkingOptimization from "@/components/seo/InternalLinkingOptimization";

export const metadata: Metadata = {
	title: "Sambal BBQ Marinade Recipe | Indonesian Spicy Grilling Sauce | Spice Island Indonesia",
	description:
		"Transform your BBQ with this authentic Indonesian sambal marinade. Perfect for chicken, beef, pork, and seafood. Easy 15-minute recipe with incredible flavor depth that revolutionizes grilling.",
	keywords:
		"sambal BBQ marinade, Indonesian BBQ sauce, spicy marinade recipe, sambal grilling sauce, Asian BBQ marinade, Indonesian cooking, Chef Yossie marinade",
	openGraph: {
		title: "Authentic Sambal BBQ Marinade Recipe - Indonesian Grilling Sauce",
		description:
			"Elevate your BBQ game with this authentic Indonesian sambal marinade. Perfect for all meats with complex heat and aromatic spices that transform ordinary grilling.",
		images: ["/images/sambal-bbq-marinade.webp"],
		type: "article",
	},
	alternates: {
		canonical:
			"https://www.spiceislandindonesia.com/recipes/sambal-bbq-marinade",
	},
};

const recipe = {
	name: "Indonesian Sambal BBQ Marinade",
	description:
		"A game-changing marinade that combines the complex heat of authentic sambal with traditional BBQ flavors. Perfect for grilling chicken, beef, pork, or seafood.",
	image: "/images/sambal-bbq-marinade.webp",
	prepTime: "PT15M",
	cookTime: "PT0M",
	totalTime: "PT15M",
	servings: 6,
	difficulty: "Easy" as const,
	cuisine: "Indonesian Fusion",
	category: "Marinades & Sauces",
	keywords: [
		"sambal",
		"BBQ marinade",
		"grilling sauce",
		"Indonesian",
		"spicy marinade",
		"Asian BBQ",
	],
	author: {
		name: "Chef Yossie",
		type: "Person" as const,
	},
	datePublished: "2024-02-12",

	ingredients: [
		"3 tablespoons Spice Island Sambal Bali",
		"2 tablespoons honey or brown sugar",
		"3 tablespoons soy sauce",
		"2 tablespoons rice vinegar or lime juice",
		"2 tablespoons vegetable oil",
		"3 cloves garlic, minced",
		"1 tablespoon fresh ginger, grated",
		"1 tablespoon sesame oil",
		"1 teaspoon ground coriander",
		"1/2 teaspoon ground cumin",
		"2 tablespoons tomato paste",
		"1 tablespoon fish sauce (optional, for umami depth)",
		"Salt and black pepper to taste",
	],

	instructions: [
		{
			step: 1,
			text: "In a medium bowl, whisk together the sambal bali, honey (or brown sugar), and soy sauce until well combined.",
		},
		{
			step: 2,
			text: "Add the rice vinegar, vegetable oil, and sesame oil. Whisk until the mixture is smooth and emulsified.",
		},
		{
			step: 3,
			text: "Stir in the minced garlic, grated ginger, ground coriander, and cumin until evenly distributed.",
		},
		{
			step: 4,
			text: "Add the tomato paste and fish sauce (if using). Mix thoroughly until no lumps remain.",
		},
		{
			step: 5,
			text: "Taste the marinade and adjust seasoning. Add salt and pepper as needed, or more honey for sweetness.",
		},
		{
			step: 6,
			text: "Use immediately or store in the refrigerator for up to 1 week. The flavors will develop and improve over time.",
		},
		{
			step: 7,
			text: "To use: Marinate chicken for 2-4 hours, beef or pork for 4-8 hours, and seafood for 30 minutes to 1 hour.",
		},
		{
			step: 8,
			text: "Grill over medium-high heat, basting with reserved marinade during cooking for extra flavor and glaze.",
		},
	],

	nutrition: {
		calories: 45,
		protein: "1g",
		carbohydrates: "8g",
		fat: "2g",
		fiber: "0g",
		sodium: "320mg",
	},

	tips: [
		"Reserve some marinade before adding raw meat for basting during cooking",
		"For extra heat, add 1-2 teaspoons of Sambal Oelek along with the Sambal Bali",
		"The marinade works excellently with chicken thighs, which stay juicier than breasts",
		"Don&apos;t marinate seafood for too long as the acid will start to 'cook' the fish",
		"For vegetarian option, use this marinade on firm tofu, tempeh, or vegetables",
	],

	variations: [
		"Spicy Version: Add 1-2 teaspoons Sambal Oelek for extra heat",
		"Sweet & Sour: Add 1 tablespoon tamarind paste for tangy complexity",
		"Coconut Version: Replace oil with coconut milk for richness",
		"Herb-Infused: Add fresh lemongrass, kaffir lime leaves, or Thai basil",
	],

	// Enhanced schema properties
	cuisineType: "Fusion" as const,
	cookingMethods: [
		{
			name: "Marinade preparation",
			description:
				"Blending authentic Indonesian sambal with complementary ingredients for maximum flavor penetration",
		},
		{
			name: "Flavor balancing",
			description:
				"Creating perfect harmony between sweet, spicy, salty, and umami elements",
		},
		{
			name: "Protein marinating",
			description:
				"Proper timing and technique for different proteins to achieve optimal flavor and tenderness",
		},
	],
	equipment: [
		{
			name: "Medium mixing bowl",
			description: "For combining all marinade ingredients thoroughly",
			required: true,
		},
		{
			name: "Whisk",
			description:
				"Essential for proper emulsification of oils and achieving smooth consistency",
			required: true,
		},
		{
			name: "Measuring spoons and cups",
			description: "For accurate ingredient proportions",
			required: true,
		},
		{
			name: "Glass or plastic containers",
			description:
				"Non-reactive containers for marinating proteins safely",
			required: true,
		},
	],
	skillLevel: "Beginner" as const,
	spiceLevel: "Medium" as const,
	dietaryRestrictions: ["GlutenFree", "DairyFree"],
	culturalOrigin:
		"Indonesian Fusion - Combines traditional sambal with Western BBQ techniques for modern grilling excellence",
};

export default function SambalBBQMarinadePage() {
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
			name: "Sambal BBQ Marinade",
			url: "https://spiceislandindonesia.com/recipes/sambal-bbq-marinade",
			position: 3,
		},
	];

	// How-to steps for AI search optimization
	const howToSteps = [
		{
			name: "Combine base ingredients",
			text: "Whisk together sambal bali, honey, and soy sauce until well combined to create the flavor foundation.",
		},
		{
			name: "Add liquid components",
			text: "Add rice vinegar, vegetable oil, and sesame oil. Whisk until smooth and emulsified for proper consistency.",
		},
		{
			name: "Incorporate aromatics",
			text: "Stir in minced garlic, grated ginger, and spices until evenly distributed throughout the marinade.",
		},
		{
			name: "Add depth elements",
			text: "Mix in tomato paste and fish sauce for umami depth, ensuring no lumps remain in the marinade.",
		},
		{
			name: "Balance flavors",
			text: "Taste and adjust seasoning with salt, pepper, or honey to achieve perfect sweet-spicy-salty balance.",
		},
		{
			name: "Marinate properly",
			text: "Use appropriate marinating times for different proteins and grill with reserved marinade for basting.",
		},
	];

	// Enhanced instructions with visual indicators
	const enhancedInstructions = [
		{
			step: 1,
			text: "In a medium bowl, whisk together the sambal bali, honey (or brown sugar), and soy sauce until well combined.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Medium bowl", "Whisk"],
			tips: "Use room temperature honey for easier mixing. Brown sugar works equally well and adds molasses depth.",
		},
		{
			step: 2,
			text: "Add the rice vinegar, vegetable oil, and sesame oil. Whisk until the mixture is smooth and emulsified.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Whisk"],
			tips: "Proper emulsification prevents separation. The mixture should look glossy and uniform when properly combined.",
			warning: "Add oils gradually while whisking to achieve better emulsification.",
		},
		{
			step: 3,
			text: "Stir in the minced garlic, grated ginger, ground coriander, and cumin until evenly distributed.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Wooden spoon", "Garlic press", "Microplane grater"],
			tips: "Fresh garlic and ginger are essential - don't substitute with powder. Grate ginger finely for even distribution.",
		},
		{
			step: 4,
			text: "Add the tomato paste and fish sauce (if using). Mix thoroughly until no lumps remain.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Whisk"],
			tips: "Fish sauce adds incredible umami depth but can be omitted for vegetarian version. Work out any tomato paste lumps completely.",
		},
		{
			step: 5,
			text: "Taste the marinade and adjust seasoning. Add salt and pepper as needed, or more honey for sweetness.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Tasting spoon"],
			tips: "The marinade should balance sweet, spicy, salty, and tangy. Remember it will concentrate during grilling, so don't over-salt.",
		},
		{
			step: 6,
			text: "Use immediately or store in the refrigerator for up to 1 week. The flavors will develop and improve over time.",
			timeEstimate: "1 min",
			difficulty: "Easy" as const,
			equipment: ["Airtight container"],
			tips: "Marinade actually improves after 24 hours as flavors meld. Bring to room temperature before using if refrigerated.",
		},
		{
			step: 7,
			text: "To use: Marinate chicken for 2-4 hours, beef or pork for 4-8 hours, and seafood for 30 minutes to 1 hour.",
			timeEstimate: "Variable",
			difficulty: "Medium" as const,
			equipment: ["Glass or plastic containers"],
			tips: "Always reserve some marinade before adding to raw meat for basting during cooking. Never reuse marinade that touched raw protein.",
			warning: "Don't over-marinate seafood - the acids will start to 'cook' the fish and make it mushy.",
		},
		{
			step: 8,
			text: "Grill over medium-high heat, basting with reserved marinade during cooking for extra flavor and glaze.",
			timeEstimate: "Variable",
			difficulty: "Medium" as const,
			equipment: ["Grill", "Basting brush"],
			tips: "The sugars in the marinade caramelize beautifully but can burn quickly. Watch carefully and adjust heat as needed.",
		},
	];

	// Cooking FAQ data for AI search optimization
	const cookingFAQ = [
		{
			question:
				"Can I use this marinade on vegetables for vegetarian grilling?",
			answer: "Absolutely! This marinade is fantastic on vegetables like eggplant, bell peppers, zucchini, and portobello mushrooms. Marinate for 30 minutes to 2 hours. For a completely vegetarian version, omit the fish sauce and add an extra tablespoon of soy sauce for umami depth.",
		},
		{
			question:
				"How long can I store this marinade in the refrigerator?",
			answer: "The marinade will keep for up to 1 week in the refrigerator in an airtight container. The flavors actually improve after 24 hours as they have time to meld together. Always bring to room temperature before using if it's been refrigerated.",
		},
		{
			question:
				"What's the difference between using Sambal Bali vs Sambal Oelek in this recipe?",
			answer: "Sambal Bali contains aromatic spices like galangal, lemongrass, and kaffir lime that add complexity beyond just heat. Sambal Oelek provides pure chili heat. For this marinade, Sambal Bali is preferred for its aromatic qualities, but you can use Sambal Oelek if you want cleaner heat or add both for extra complexity.",
		},
		{
			question:
				"Why does my meat sometimes burn on the grill with this marinade?",
			answer: "The sugars (honey/brown sugar) and tomato paste in the marinade can caramelize and burn quickly. Use medium heat rather than high, move meat to cooler spots if it's browning too fast, and consider partially cooking thicker cuts in the oven before finishing on the grill for the char.",
		},
	];

	// Internal linking data for SEO optimization
	const relatedProducts = [
		{
			name: "Sambal Bali - Aromatic & Spicy",
			url: "/sambal-bali-aromatic-spicy",
			description:
				"The star ingredient of this marinade - complex aromatic heat that transforms ordinary BBQ into something extraordinary",
			rating: 4.8,
			price: "£7.49",
			badge: "Perfect for Marinades",
		},
		{
			name: "Sambal Oelek - Pure Heat",
			url: "/sambal-oelek-uk",
			description:
				"Add extra heat intensity or use as alternative base for simpler, pure chili flavor profile",
			rating: 4.9,
			price: "£7.49",
			badge: "Extra Heat Option",
		},
	];

	const relatedRecipes = [
		{
			name: "Ikan Bakar (Grilled Fish)",
			url: "/recipes/ikan-bakar",
			description:
				"Perfect application for this marinade - traditional Indonesian grilled fish with aromatic spices",
			difficulty: "Medium" as const,
			cookTime: "40 minutes",
		},
		{
			name: "Ayam Penyet (Smashed Fried Chicken)",
			url: "/recipes/ayam-penyet",
			description:
				"Another excellent use for sambal-based marinades in Indonesian cuisine",
			difficulty: "Medium" as const,
			cookTime: "55 minutes",
		},
	];

	const relatedArticles = [
		{
			title: "Indonesian Grilling Traditions: Beyond the Western BBQ",
			url: "/blog/indonesian-grilling-traditions",
			excerpt: "Explore how Indonesian flavors revolutionize traditional grilling with aromatic spices and complex marinades",
			readTime: "8 min",
			category: "Grilling Techniques",
		},
		{
			title: "The Science of Marinades: How Sambal Transforms Protein",
			url: "/blog/sambal-marinade-science",
			excerpt: "Understanding how traditional Indonesian sambals work as marinades to tenderize and flavor proteins",
			readTime: "6 min",
			category: "Cooking Science",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			<RecipeSchema recipe={recipe} />
			<BreadcrumbSchema items={breadcrumbItems} />
			<HowToSchema
				name='How to Make Sambal BBQ Marinade'
				description='Learn to create the perfect Indonesian-inspired BBQ marinade using authentic sambal for incredible grilling results.'
				steps={howToSteps}
				totalTime='PT15M'
				prepTime='PT15M'
				cookTime='PT0M'
				yield='6 servings (marinade)'
				category='Indonesian BBQ Marinade'
			/>
			<FAQSchema
				faqs={cookingFAQ}
				pageTitle='Sambal BBQ Marinade - Frequently Asked Questions'
			/>

			<div className='container mx-auto px-4 py-8 pb-16'>

				<RecipeCard recipe={recipe} />

				{/* Enhanced Interactive Recipe Instructions */}
				<div className='max-w-4xl mx-auto mt-8'>
					<EnhancedRecipeInstructions
						title='Interactive Marinade Guide'
						description='Master the art of Indonesian-inspired BBQ marinades for incredible grilling results'
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
							Revolutionary Indonesian BBQ Fusion
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								This Indonesian-inspired BBQ marinade
								represents the perfect fusion of Eastern
								and Western grilling traditions. Unlike
								conventional BBQ sauces that rely
								heavily on tomato and molasses, this
								marinade showcases the complex aromatic
								heat of authentic Sambal Bali - a
								carefully crafted blend featuring
								galangal, lemongrass, and kaffir lime
								that creates incredible depth of flavor.
							</p>
							<p>
								What sets this marinade apart is its
								understanding of Indonesian flavor
								philosophy: the perfect balance of manis
								(sweet), pedas (spicy), asin (salty),
								and umami. Each component serves a
								specific purpose - honey provides
								caramelization, sambal delivers complex
								heat, soy sauce adds umami depth, and
								rice vinegar brightens everything with
								essential acidity. The result is meat
								that's beautifully caramelized on the
								outside and incredibly flavorful
								throughout.
							</p>
						</div>
					</section>

					{/* Marinating Science */}
					<section className='bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Chef Yossie's Marinating Mastery
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Timing is Everything
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• Chicken: 2-4 hours
										(overnight for deep flavor)
									</li>
									<li>
										• Beef/Pork: 4-8 hours (up to
										24 hours for tough cuts)
									</li>
									<li>
										• Seafood: 30 minutes to 1
										hour maximum
									</li>
									<li>
										• Vegetables: 30 minutes to 2
										hours
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Professional Techniques
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• Score thick cuts for better
										penetration
									</li>
									<li>
										• Use non-reactive containers
										only
									</li>
									<li>
										• Turn proteins halfway
										through marinating
									</li>
									<li>
										• Bring to room temperature
										before grilling
									</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Grilling Excellence */}
					<section className='bg-white rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Perfect Grilling Technique
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>
									Heat Management is Critical:
								</strong>{" "}
								The sugars in this marinade (honey and
								natural sugars in sambal) create
								beautiful caramelization but can burn
								quickly. Start with medium-high heat and
								be prepared to move proteins to cooler
								spots if browning too rapidly. This
								creates the perfect balance of char and
								tenderness.
							</p>
							<p>
								<strong>The Basting Secret:</strong>{" "}
								Always reserve clean marinade before it
								touches raw meat. Use this reserved
								portion for basting during cooking to
								build layers of flavor and create that
								coveted glossy glaze that's
								characteristic of Indonesian grilled
								meats. Apply in the final minutes of
								cooking for best results.
							</p>
							<p>
								<strong>Rest for Perfection:</strong>{" "}
								Indonesian cooking emphasizes patience.
								Let grilled proteins rest for 5-10
								minutes before serving - this allows
								juices to redistribute and flavors to
								settle, ensuring every bite is perfectly
								moist and flavorful.
							</p>
						</div>
					</section>

					{/* Protein Pairing Guide */}
					<section className='bg-gradient-to-br from-gold-50 to-cream-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Optimal Protein Pairings
						</h2>
						<div className='grid md:grid-cols-3 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Poultry Perfection
								</h3>
								<p className='text-gray-700 font-body'>
									Chicken thighs are ideal due to
									higher fat content that keeps meat
									moist while skin crisps
									beautifully. Wings absorb flavors
									quickly and char perfectly. The
									aromatic spices complement
									poultry's mild flavor without
									overwhelming.
								</p>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Beef Excellence
								</h3>
								<p className='text-gray-700 font-body'>
									Perfect for skirt steak, flank
									steak, or beef short ribs. The
									natural enzymes in sambal help
									tenderize tougher cuts while the
									complex spices enhance beef's rich,
									savory qualities. Creates
									incredible crust with tender
									interior.
								</p>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Seafood Harmony
								</h3>
								<p className='text-gray-700 font-body'>
									Excellent with firm fish like
									salmon, tuna, or king prawns. The
									aromatic Indonesian spices
									complement seafood's delicate
									flavors beautifully without
									overpowering. Quick marinating
									prevents texture changes while
									building flavor.
								</p>
							</div>
						</div>
					</section>

					{/* Cultural Context */}
					<section className='bg-white rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Indonesian Grilling Heritage
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								In Indonesian cuisine, marinades serve a
								deeper purpose than simple flavoring -
								they represent the Indonesian philosophy
								of balance and harmony. Traditional
								Indonesian grilling (known as "bakar")
								has been perfected over centuries, using
								aromatic spice pastes and sambals to
								create complex flavor profiles that
								Western BBQ is only beginning to
								discover.
							</p>
							<p>
								This fusion marinade honors that
								tradition while making it accessible to
								modern home cooks. By combining the
								aromatic complexity of Sambal Bali with
								familiar BBQ elements, we create
								something that speaks to both Indonesian
								authenticity and contemporary grilling
								preferences - a true celebration of
								culinary fusion at its finest.
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
