import { Metadata } from "next";
import RecipeCard from "@/components/recipes/RecipeCard";
import RecipeSchema from "@/components/seo/RecipeSchema";
import HowToSchema from "@/components/seo/HowToSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import EnhancedRecipeInstructions from "@/components/recipes/EnhancedRecipeInstructions";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import InternalLinkingOptimization from "@/components/seo/InternalLinkingOptimization";
import HowToVisual from "@/components/ui/HowToVisual";
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
	title: "Sambal Fried Rice Recipe | Authentic Indonesian Nasi Goreng | Spice Island Indonesia",
	description:
		"Learn to make authentic Indonesian sambal fried rice (nasi goreng) with our traditional recipe. Perfect for using leftover rice with authentic sambal heat and flavor.",
	keywords:
		"sambal fried rice, nasi goreng recipe, Indonesian fried rice, sambal recipe, leftover rice recipe, authentic Indonesian cooking",
	openGraph: {
		title: "Authentic Sambal Fried Rice Recipe - Indonesian Nasi Goreng",
		description:
			"Transform leftover rice into Indonesia&apos;s national dish with authentic sambal. Easy 20-minute recipe with step-by-step instructions.",
		images: ["/images/sambal-fried-rice.webp"],
		type: "article",
	},
};

const recipe = {
	name: "Sambal Fried Rice (Nasi Goreng)",
	description:
		"Indonesia&apos;s beloved national dish - a perfect way to transform leftover rice into something spectacular with the heat and complexity of authentic sambal.",
	image: "/images/sambal-fried-rice.webp",
	prepTime: "PT10M",
	cookTime: "PT15M",
	totalTime: "PT25M",
	servings: 4,
	difficulty: "Easy" as const,
	cuisine: "Indonesian",
	category: "Main Course",
	keywords: [
		"sambal",
		"fried rice",
		"nasi goreng",
		"Indonesian",
		"leftover rice",
		"quick dinner",
	],
	author: {
		name: "Spice Island Indonesia",
		type: "Organization" as const,
	},
	datePublished: "2024-02-12",

	ingredients: [
		"4 cups cooked jasmine rice (preferably day-old and refrigerated)",
		"2-3 tablespoons Spice Island Sambal Bali",
		"3 large eggs, beaten",
		"200g chicken breast or prawns, diced (optional)",
		"1 large onion, finely diced",
		"3 cloves garlic, minced",
		"2 tablespoons sweet soy sauce (kecap manis)",
		"1 tablespoon light soy sauce",
		"2 tablespoons vegetable oil",
		"2 spring onions, sliced",
		"1 cucumber, sliced (for serving)",
		"Prawn crackers (keropok) for serving",
		"Fried shallots for garnish (optional)",
	],

	instructions: [
		{
			step: 1,
			text: "Prepare all ingredients before cooking. Break up any clumps in the cold rice with your hands or a fork.",
		},
		{
			step: 2,
			text: "Heat 1 tablespoon oil in a large wok or frying pan over high heat. Add beaten eggs and scramble until just set. Remove and set aside.",
		},
		{
			step: 3,
			text: "Add remaining oil to the wok. Add diced chicken or prawns (if using) and cook for 3-4 minutes until nearly cooked through.",
		},
		{
			step: 4,
			text: "Add onion and garlic to the wok. Stir-fry for 2-3 minutes until fragrant and onion is translucent.",
		},
		{
			step: 5,
			text: "Add the sambal bali and stir-fry for 30 seconds until fragrant. Be careful not to burn it.",
		},
		{
			step: 6,
			text: "Add the cold rice to the wok, breaking up any remaining clumps. Stir-fry for 3-4 minutes, ensuring the rice is heated through and well-coated with sambal.",
		},
		{
			step: 7,
			text: "Add both soy sauces and the scrambled eggs back to the wok. Stir-fry for another 2-3 minutes until everything is well combined and heated through.",
		},
		{
			step: 8,
			text: "Taste and adjust seasoning. Add more sambal for heat, or soy sauce for saltiness.",
		},
		{
			step: 9,
			text: "Remove from heat and garnish with sliced spring onions and fried shallots. Serve immediately with cucumber slices and prawn crackers.",
		},
	],

	nutrition: {
		calories: 320,
		protein: "18g",
		carbohydrates: "45g",
		fat: "8g",
		fiber: "2g",
		sodium: "890mg",
	},

	tips: [
		"Day-old rice works best as it&apos;s drier and won&apos;t become mushy",
		"Keep the heat high throughout cooking for the best 'wok hei' (breath of the wok) flavor",
		"Don&apos;t overcrowd the wok - cook in batches if necessary",
		"Sambal Bali works perfectly here due to its aromatic spices that complement the other ingredients",
		"For vegetarian version, omit meat and add extra vegetables like carrots, peas, or bean sprouts",
	],

	// Enhanced schema properties
	cuisineType: "Indonesian" as const,
	cookingMethods: [
		{
			name: "Stir-frying",
			description:
				"High-heat cooking technique that quickly cooks ingredients while maintaining texture and flavor",
		},
		{
			name: "Sautéing",
			description:
				"Quick cooking method using a small amount of oil over medium-high heat",
		},
		{
			name: "Scrambling",
			description:
				"Gentle cooking technique for eggs to create fluffy, tender texture",
		},
	],
	equipment: [
		{
			name: "Large wok or frying pan",
			description:
				"Traditional round-bottomed cooking vessel ideal for stir-frying",
			required: true,
		},
		{
			name: "Wooden spoon or wok spatula",
			description:
				"Essential for stirring and tossing ingredients without scratching the wok",
			required: true,
		},
		{
			name: "Sharp knife",
			description: "For dicing ingredients and slicing garnishes",
			required: true,
		},
		{
			name: "Cutting board",
			description: "Safe surface for food preparation",
			required: true,
		},
		{
			name: "Rice paddle",
			description: "Helpful for breaking up rice clumps",
			required: false,
		},
	],
	skillLevel: "Beginner" as const,
	spiceLevel: "Medium" as const,
	dietaryRestrictions: ["GlutenFree"],
	culturalOrigin:
		"Indonesian Traditional Cuisine - National dish originating from Java and Sumatra regions",

	variations: [
		"Seafood Nasi Goreng: Use prawns, squid, and fish instead of chicken",
		"Vegetable Nasi Goreng: Add diced carrots, peas, and bean sprouts",
		"Pineapple Nasi Goreng: Add fresh pineapple chunks for a sweet-spicy combination",
		"Extra Spicy: Use Sambal Oelek instead of Sambal Bali for pure heat",
	],
};

export default function SambalFriedRicePage() {
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
			name: "Sambal Fried Rice",
			url: "https://spiceislandindonesia.com/recipes/sambal-fried-rice",
			position: 3,
		},
	];

	// How-to steps for AI search optimization
	const howToSteps = [
		{
			name: "Prepare ingredients",
			text: "Heat oil in a large wok or frying pan over medium-high heat. Gather all ingredients and have them ready - this dish cooks quickly.",
		},
		{
			name: "Cook aromatics",
			text: "Add minced garlic and cook for 30 seconds until fragrant. Add sambal and stir for another 30 seconds to release the flavors.",
		},
		{
			name: "Add rice",
			text: "Add the cold, day-old rice to the wok. Break up any clumps and stir-fry for 3-4 minutes until heated through and slightly crispy.",
		},
		{
			name: "Season the rice",
			text: "Add soy sauce, fish sauce (if using), and a pinch of salt. Stir well to coat all the rice evenly with the seasonings.",
		},
		{
			name: "Create egg well",
			text: "Push rice to one side of the wok. Add beaten eggs to the empty space and scramble them, then mix into the rice.",
		},
		{
			name: "Add vegetables",
			text: "Add frozen peas and carrots (if using). Stir-fry for 2-3 minutes until vegetables are heated through.",
		},
		{
			name: "Final seasoning",
			text: "Taste and adjust seasoning with more sambal, soy sauce, or salt as needed. The rice should be well-coated and flavorful.",
		},
		{
			name: "Garnish and serve",
			text: "Remove from heat. Garnish with sliced green onions, cucumber slices, and fried shallots. Serve immediately while hot.",
		},
	];

	// Enhanced instructions with visual indicators
	const enhancedInstructions = [
		{
			step: 1,
			text: "Heat oil in a large wok or frying pan over medium-high heat. Gather all ingredients and have them ready - this dish cooks quickly.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Large wok or frying pan", "Wooden spoon"],
			tips: "Mise en place (everything in place) is crucial for stir-frying. Have all ingredients prepped and ready before you start cooking.",
		},
		{
			step: 2,
			text: "Add minced garlic and cook for 30 seconds until fragrant. Add sambal and stir for another 30 seconds to release the flavors.",
			timeEstimate: "1 min",
			difficulty: "Medium" as const,
			equipment: ["Wooden spoon"],
			tips: "The garlic should sizzle immediately. If it doesn't, your oil isn&apos;t hot enough.",
			warning: "Don&apos;t let the garlic burn - it will turn bitter. Reduce heat if needed.",
		},
		{
			step: 3,
			text: "Add the cold, day-old rice to the wok. Break up any clumps and stir-fry for 3-4 minutes until heated through and slightly crispy.",
			timeEstimate: "4 min",
			difficulty: "Medium" as const,
			equipment: ["Wooden spoon", "Rice paddle (optional)"],
			tips: "Day-old rice is essential - fresh rice will become mushy. Break up clumps with your spoon before adding to prevent sticking.",
		},
		{
			step: 4,
			text: "Add soy sauce, fish sauce (if using), and a pinch of salt. Stir well to coat all the rice evenly with the seasonings.",
			timeEstimate: "1 min",
			difficulty: "Easy" as const,
			equipment: ["Wooden spoon"],
			tips: "Start with less seasoning - you can always add more. The sambal already provides salt and flavor.",
		},
		{
			step: 5,
			text: "Push rice to one side of the wok. Add beaten eggs to the empty space and scramble them, then mix into the rice.",
			timeEstimate: "2 min",
			difficulty: "Medium" as const,
			equipment: ["Wooden spoon", "Spatula"],
			tips: "This technique keeps the eggs fluffy and prevents them from becoming rubbery. Scramble quickly over high heat.",
		},
		{
			step: 6,
			text: "Add frozen peas and carrots (if using). Stir-fry for 2-3 minutes until vegetables are heated through.",
			timeEstimate: "3 min",
			difficulty: "Easy" as const,
			equipment: ["Wooden spoon"],
			tips: "Frozen vegetables work great for fried rice. They add color and nutrition without making the dish watery.",
		},
		{
			step: 7,
			text: "Taste and adjust seasoning with more sambal, soy sauce, or salt as needed. The rice should be well-coated and flavorful.",
			timeEstimate: "1 min",
			difficulty: "Easy" as const,
			equipment: ["Tasting spoon"],
			tips: "This is your chance to perfect the flavor. Each grain of rice should be coated with sauce and have a balanced taste.",
		},
		{
			step: 8,
			text: "Remove from heat. Garnish with sliced green onions, cucumber slices, and fried shallots. Serve immediately while hot.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Serving plates", "Knife", "Cutting board"],
			tips: "The contrast of cool cucumber with hot rice is traditional. Serve immediately for the best texture and temperature.",
		},
	];

	// Cooking FAQ data for AI search optimization
	const cookingFAQ = [
		{
			question: "How do I adjust spice levels in sambal recipes?",
			answer: "Start with 1/4 teaspoon of sambal and gradually increase to taste. You can reduce heat by adding more rice, vegetables, or a splash of coconut milk. For extra heat, add more sambal at the end of cooking. Remember that sambal heat builds, so taste as you go and let flavors develop for a minute before adding more.",
		},
		{
			question: "Can I substitute sambal in recipes?",
			answer: "While sambal is unique, you can substitute with sriracha (use 3x more for similar heat) or chili garlic sauce. However, these alternatives are sweeter and less authentic. For best results, order authentic sambal online - the flavor difference is significant and worth the investment for genuine Indonesian taste.",
		},
		{
			question: "What if I can&apos;t find Indonesian ingredients?",
			answer: "Most sambal recipes work with common UK ingredients. Use jasmine rice instead of Indonesian rice, regular soy sauce instead of kecap manis (add a pinch of brown sugar), and frozen mixed vegetables if fresh aren&apos;t available. The key is authentic sambal - this makes the biggest difference in achieving genuine Indonesian flavor.",
		},
		{
			question: "How do I store leftover sambal dishes?",
			answer: "Store leftover sambal fried rice in the refrigerator for up to 3 days in an airtight container. Reheat in a wok or large pan with a splash of oil to restore texture. The flavors actually improve overnight as the sambal penetrates the rice. For food safety, cool quickly and refrigerate within 2 hours of cooking.",
		},
	];

	// Internal linking data for SEO optimization
	const relatedProducts = [
		{
			name: "Sambal Bali - Aromatic & Spicy",
			url: "/sambal-bali-aromatic-spicy",
			description:
				"Perfect for this fried rice recipe with its complex aromatic spices and medium heat level",
			rating: 4.9,
			price: "£7.49",
			badge: "Best for Fried Rice",
		},
		{
			name: "Sambal Oelek - Pure Heat",
			url: "/sambal-oelek-uk",
			description:
				"For those who want extra heat - add a teaspoon to make this recipe fiery hot",
			rating: 4.8,
			price: "£7.49",
			badge: "Extra Spicy",
		},
	];

	const relatedRecipes = [
		{
			name: "Sambal Chicken Stir-Fry",
			url: "/recipes/sambal-chicken-stir-fry",
			description:
				"Another quick and delicious sambal recipe perfect for weeknight dinners",
			difficulty: "Easy" as const,
			cookTime: "20 minutes",
		},
		{
			name: "Sambal Scrambled Eggs",
			url: "/recipes/sambal-scrambled-eggs",
			description:
				"Transform your breakfast with this spicy Indonesian twist on scrambled eggs",
			difficulty: "Easy" as const,
			cookTime: "10 minutes",
		},
	];

	const relatedArticles = [
		{
			title: "The History of the Spice Islands: Where Your Sambal Comes From",
			url: "/blog/spice-islands-history",
			excerpt: "Discover the volcanic islands that created the perfect conditions for the world&apos;s most flavorful chilies",
			readTime: "8 min",
			category: "Culture & History",
		},
		{
			title: "Ultimate Guide to Indonesian Sambal",
			url: "/blog/ultimate-guide-indonesian-sambal",
			excerpt: "Everything you need to know about Indonesia&apos;s most beloved condiment and how to use it",
			readTime: "12 min",
			category: "Cooking Guide",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			<RecipeSchema recipe={recipe} />
			<BreadcrumbSchema items={breadcrumbItems} />
			<HowToSchema
				name='How to Make Sambal Fried Rice (Nasi Goreng)'
				description='Learn to make authentic Indonesian sambal fried rice with this step-by-step guide. Perfect for using leftover rice with authentic sambal heat and flavor.'
				steps={howToSteps.map((step, index) => ({
					...step,
					duration: ['PT2M', 'PT1M', 'PT4M', 'PT1M', 'PT2M', 'PT3M', 'PT1M', 'PT2M'][index],
					tip: enhancedInstructions[index]?.tips
				}))}
				totalTime='PT25M'
				prepTime='PT10M'
				cookTime='PT15M'
				yield='4 servings'
				category='Indonesian Main Course'
				difficulty='Beginner'
				tools={recipe.equipment.map(eq => ({
					name: eq.name,
					description: eq.description,
					required: eq.required
				}))}
				supplies={[
					{ name: "Day-old jasmine rice", amount: "4 cups", description: "Preferably refrigerated overnight for best texture" },
					{ name: "Sambal Bali", amount: "2-3 tablespoons", description: "Authentic Indonesian chili paste with aromatic spices" },
					{ name: "Large eggs", amount: "3", description: "For protein and traditional texture" },
					{ name: "Chicken breast or prawns", amount: "200g", description: "Optional protein addition" },
					{ name: "Yellow onion", amount: "1 large", description: "Finely diced for aromatic base" },
					{ name: "Garlic cloves", amount: "3", description: "Minced fresh for best flavor" },
					{ name: "Sweet soy sauce (kecap manis)", amount: "2 tablespoons", description: "Essential for authentic Indonesian flavor" },
					{ name: "Light soy sauce", amount: "1 tablespoon", description: "For saltiness and umami" },
					{ name: "Vegetable oil", amount: "2 tablespoons", description: "For high-heat cooking" }
				]}
			/>
			<FAQSchema
				faqs={cookingFAQ}
				pageTitle='Sambal Fried Rice Cooking - Frequently Asked Questions'
			/>

			<div className='container mx-auto px-4 py-8 pb-16'>
				{/* Breadcrumb Navigation */}
				<div className='mb-6'>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href='/'>
									Home
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href='/recipes'>
									Recipes
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>
									Sambal Fried Rice
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<RecipeCard recipe={recipe} />

				{/* Visual How-To Guide with Step Indicators */}
				<div className='max-w-4xl mx-auto mt-8'>
					<HowToVisual
						name="Authentic Sambal Fried Rice (Nasi Goreng)"
						description="Follow this step-by-step visual guide to create Indonesia's national dish with authentic sambal heat and flavor."
						steps={howToSteps.map((step, index) => ({
							...step,
							duration: ['2 minutes', '1 minute', '4 minutes', '1 minute', '2 minutes', '3 minutes', '1 minute', '2 minutes'][index],
							tip: enhancedInstructions[index]?.tips
						}))}
						totalTime="25 minutes"
						difficulty="Beginner"
						tools={recipe.equipment.map(eq => ({
							name: eq.name,
							description: eq.description,
							required: eq.required
						}))}
						supplies={[
							{ name: "Day-old jasmine rice", amount: "4 cups", description: "Preferably refrigerated overnight for best texture" },
							{ name: "Sambal Bali", amount: "2-3 tablespoons", description: "Authentic Indonesian chili paste with aromatic spices" },
							{ name: "Large eggs", amount: "3", description: "For protein and traditional texture" },
							{ name: "Chicken breast or prawns", amount: "200g", description: "Optional protein addition" },
							{ name: "Yellow onion", amount: "1 large", description: "Finely diced for aromatic base" },
							{ name: "Garlic cloves", amount: "3", description: "Minced fresh for best flavor" },
							{ name: "Sweet soy sauce (kecap manis)", amount: "2 tablespoons", description: "Essential for authentic Indonesian flavor" },
							{ name: "Light soy sauce", amount: "1 tablespoon", description: "For saltiness and umami" },
							{ name: "Vegetable oil", amount: "2 tablespoons", description: "For high-heat cooking" }
						]}
					/>
				</div>

				{/* Enhanced Interactive Recipe Instructions */}
				<div className='max-w-4xl mx-auto mt-8'>
					<EnhancedRecipeInstructions
						title='Interactive Cooking Guide'
						description="Follow along step-by-step with time estimates and chef&apos;s tips"
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
							About This Recipe
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								Nasi Goreng is Indonesia&apos;s national dish
								and one of the most beloved fried rice
								recipes in the world. This version uses
								authentic Sambal Bali to create the
								perfect balance of heat, sweetness, and
								aromatic spices that make this dish so
								special.
							</p>
							<p>
								The key to great nasi goreng is using
								day-old rice and cooking over high heat.
								The sambal not only provides heat but
								also acts as the flavor base that ties
								all the ingredients together. Unlike
								Chinese fried rice, Indonesian nasi
								goreng has a distinctive sweet-spicy
								profile that comes from the combination
								of sambal and sweet soy sauce.
							</p>
						</div>
					</section>

					{/* Chef&apos;s Tips */}
					<section className='bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Chef&apos;s Tips for Perfect Nasi Goreng
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Rice Preparation
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• Use jasmine rice for the
										best texture and flavor
									</li>
									<li>
										• Cook rice the day before and
										refrigerate overnight
									</li>
									<li>
										• Break up clumps before
										adding to the wok
									</li>
									<li>
										• Never use freshly cooked
										warm rice
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Cooking Technique
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• Keep the heat high
										throughout cooking
									</li>
									<li>
										• Have all ingredients prepped
										before starting
									</li>
									<li>• Don&apos;t overcrowd the wok</li>
									<li>
										• Taste and adjust seasoning
										at the end
									</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Serving Suggestions */}
					<section className='bg-white rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Traditional Serving Style
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								In Indonesia, nasi goreng is
								traditionally served with fresh cucumber
								slices, prawn crackers (keropok), and
								sometimes a fried egg on top. The cool
								cucumber provides a refreshing contrast
								to the spicy rice, while the prawn
								crackers add a satisfying crunch.
							</p>
							<p>
								For an authentic presentation, serve the
								nasi goreng on a banana leaf or in a
								traditional Indonesian plate, garnished
								with fried shallots and fresh herbs like
								cilantro or Thai basil.
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
