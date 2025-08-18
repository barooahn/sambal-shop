import { Metadata } from "next";
import RecipeCard from "@/components/recipes/RecipeCard";
import RecipeSchema from "@/components/seo/RecipeSchema";
import HowToSchema from "@/components/seo/HowToSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import EnhancedRecipeInstructions from "@/components/recipes/EnhancedRecipeInstructions";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import InternalLinkingOptimization from "@/components/seo/InternalLinkingOptimization";

export const metadata: Metadata = {
	title: "Indonesian Sambal Noodle Soup Recipe | Soto Ayam Sambal Style | Spice Island Indonesia",
	description:
		"Authentic Indonesian sambal noodle soup with rich coconut broth, aromatic spices, and traditional heat. Comforting soto-inspired recipe ready in 40 minutes. Made with genuine sambal bali.",
	keywords:
		"sambal noodle soup, Indonesian soup recipe, soto ayam, spicy noodle soup, coconut noodle soup, Asian comfort food, sambal soup, Chef Yossie recipe, Indonesian comfort food",
	openGraph: {
		title: "Indonesian Sambal Noodle Soup - Authentic Soto Ayam Style",
		description:
			"Warming Indonesian noodle soup with authentic sambal bali, rich coconut broth, and traditional aromatic spices. Perfect comfort food recipe.",
		images: ["/images/sambal-noodle-soup.webp"],
		type: "article",
	},
	alternates: {
		canonical:
			"https://spiceislandindonesia.com/recipes/sambal-noodle-soup",
	},
};

const recipe = {
	name: "Indonesian Sambal Noodle Soup (Soto Ayam Sambal)",
	description:
		"A soul-warming Indonesian noodle soup that combines the authentic heat of sambal bali with rich coconut milk, aromatic spices, and tender chicken. Inspired by traditional soto ayam but elevated with the complex flavors of genuine Indonesian sambal.",
	image: "/images/sambal-noodle-soup.webp",
	prepTime: "PT20M",
	cookTime: "PT25M",
	totalTime: "PT45M",
	servings: 4,
	difficulty: "Medium" as const,
	cuisine: "Indonesian",
	category: "Soups",
	keywords: [
		"sambal noodle soup",
		"soto ayam",
		"Indonesian soup",
		"coconut soup",
		"spicy soup",
		"comfort food",
		"authentic Indonesian",
	],
	author: {
		name: "Chef Yossie",
		type: "Person" as const,
	},
	datePublished: "2024-02-12",

	ingredients: [
		"400g fresh egg noodles or thick rice noodles",
		"3 tablespoons Spice Island Sambal Bali",
		"400ml full-fat coconut milk",
		"1.2 liters rich chicken stock (preferably homemade)",
		"400g chicken thigh fillets, cut into bite-sized pieces",
		"200g raw prawns, peeled and deveined (optional)",
		"3 shallots, finely sliced",
		"5 cloves garlic, minced",
		"3cm piece fresh ginger, grated",
		"2 stalks lemongrass, bruised and sliced",
		"4 fresh kaffir lime leaves (or zest of 2 limes)",
		"2 tablespoons fish sauce",
		"1 tablespoon palm sugar or coconut sugar",
		"3 tablespoons coconut oil or vegetable oil",
		"200g fresh bean sprouts",
		"2 heads pak choi or bok choy, quartered",
		"1 medium carrot, julienned (optional)",
		"Fresh coriander leaves",
		"Fresh Thai basil leaves",
		"Fresh mint leaves",
		"Lime wedges for serving",
		"Fried shallots for garnish",
		"Extra sambal bali for serving",
	],

	instructions: [
		{
			step: 1,
			text: "Cook noodles according to package instructions until just tender (they'll cook slightly more in the hot soup). Drain, rinse with cold water, and set aside.",
		},
		{
			step: 2,
			text: "Heat coconut oil in a large, heavy-bottomed pot over medium heat. Add sliced shallots and cook for 4-5 minutes, stirring frequently, until golden brown and fragrant.",
		},
		{
			step: 3,
			text: "Add minced garlic, grated ginger, and sliced lemongrass. Stir-fry for 1-2 minutes until very aromatic. The mixture should sizzle actively.",
		},
		{
			step: 4,
			text: "Add sambal bali and cook for 2-3 minutes, stirring constantly. The sambal should become very fragrant and the oil should turn a rich red color. Don't let it burn.",
		},
		{
			step: 5,
			text: "Pour in the chicken stock and bring to a boil. Add kaffir lime leaves, fish sauce, and palm sugar. Reduce heat and simmer for 10 minutes to develop flavors.",
		},
		{
			step: 6,
			text: "Add chicken pieces and simmer for 12-15 minutes until chicken is fully cooked and tender. Skim any foam that rises to the surface.",
		},
		{
			step: 7,
			text: "If using prawns, add them now and cook for 3-4 minutes until they turn pink and are cooked through.",
		},
		{
			step: 8,
			text: "Reduce heat to low and slowly stir in coconut milk. Bring to a very gentle simmer - do not boil vigorously or the coconut milk will curdle.",
		},
		{
			step: 9,
			text: "Add pak choi and julienned carrot (if using). Simmer gently for 2-3 minutes until vegetables are just tender but still crisp.",
		},
		{
			step: 10,
			text: "Add bean sprouts in the final minute of cooking - they should remain crunchy. Taste and adjust seasoning with more sambal, fish sauce, or palm sugar.",
		},
		{
			step: 11,
			text: "Divide cooked noodles among 4 serving bowls. Ladle the hot soup over the noodles, ensuring each bowl gets chicken, vegetables, and aromatic broth.",
		},
		{
			step: 12,
			text: "Garnish generously with fresh herbs, fried shallots, and serve immediately with lime wedges and extra sambal bali on the side for heat adjustment.",
		},
	],

	nutrition: {
		calories: 520,
		protein: "35g",
		carbohydrates: "48g",
		fat: "22g",
		fiber: "5g",
		sodium: "1380mg",
	},

	tips: [
		"Use chicken thighs instead of breast for richer flavor and more tender texture in soup",
		"Don't boil coconut milk vigorously - it will curdle and separate. Keep at gentle simmer",
		"Bruise lemongrass stalks with the back of a knife to release maximum aromatic oils",
		"Fresh kaffir lime leaves provide the best flavor, but lime zest is a good substitute",
		"Build heat gradually - start with less sambal and add more to taste preferences",
		"Store noodles and soup separately to prevent mushiness - combine only when serving",
	],

	// Enhanced schema properties
	cuisineType: "Indonesian" as const,
	cookingMethods: [
		{
			name: "Simmering",
			description:
				"Gentle cooking method that develops deep flavors in the aromatic broth",
		},
		{
			name: "Aromatic base building",
			description:
				"Creating flavor foundation by cooking aromatics and blooming sambal",
		},
		{
			name: "Coconut milk incorporation",
			description:
				"Careful technique to add richness without curdling the soup",
		},
	],
	equipment: [
		{
			name: "Large heavy-bottomed pot",
			description:
				"Essential for even heat distribution and preventing burning of aromatics",
			required: true,
		},
		{
			name: "Fine-mesh strainer",
			description:
				"For straining noodles and removing any foam from broth",
			required: true,
		},
		{
			name: "Wooden spoon",
			description: "For stirring without scratching the pot surface",
			required: true,
		},
		{
			name: "Ladle",
			description: "For serving soup into bowls without splashing",
			required: true,
		},
	],
	skillLevel: "Intermediate" as const,
	spiceLevel: "Medium" as const,
	dietaryRestrictions: ["GlutenFree"],
	culturalOrigin:
		"Indonesian Traditional Soup - Inspired by Soto Ayam from Java with sambal enhancement",

	variations: [
		"Seafood Soto: Use fish stock and add mixed seafood (prawns, fish, squid) instead of chicken",
		"Vegetarian Soto: Replace chicken with firm tofu, tempeh, and mushrooms, use vegetable stock",
		"Laksa Style: Add curry powder and turmeric with the sambal for Malaysian influence",
		"Extra Fiery: Add fresh bird's eye chilies and use sambal oelek along with sambal bali",
		"Javanese Style: Add hard-boiled eggs, rice cakes (ketupat), and extra herbs",
	],
};

export default function SambalNoodleSoupPage() {
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
			name: "Sambal Noodle Soup",
			url: "https://spiceislandindonesia.com/recipes/sambal-noodle-soup",
			position: 3,
		},
	];

	// How-to steps for AI search optimization
	const howToSteps = [
		{
			name: "Prepare noodles",
			text: "Cook noodles according to package instructions until just tender. Drain, rinse with cold water, and set aside.",
		},
		{
			name: "Build aromatic base",
			text: "Heat oil in large pot. Cook shallots until golden, then add garlic, ginger, and lemongrass until fragrant.",
		},
		{
			name: "Bloom the sambal",
			text: "Add sambal bali and cook for 2-3 minutes, stirring constantly until very fragrant and oil turns red.",
		},
		{
			name: "Create the broth",
			text: "Add stock, lime leaves, fish sauce, and palm sugar. Bring to boil and simmer 10 minutes to develop flavors.",
		},
		{
			name: "Cook protein",
			text: "Add chicken and simmer 12-15 minutes until tender. Add prawns if using and cook until pink.",
		},
		{
			name: "Add coconut milk",
			text: "Reduce heat and slowly stir in coconut milk. Bring to gentle simmer - don't boil vigorously or it will curdle.",
		},
		{
			name: "Finish with vegetables",
			text: "Add pak choi and simmer 2-3 minutes. Add bean sprouts in final minute. Taste and adjust seasoning.",
		},
		{
			name: "Serve hot",
			text: "Divide noodles among bowls, ladle hot soup over. Garnish with herbs and fried shallots. Serve with lime wedges.",
		},
	];

	// Enhanced instructions with visual indicators
	const enhancedInstructions = [
		{
			step: 1,
			text: "Cook noodles according to package instructions until just tender (they'll cook slightly more in the hot soup). Drain, rinse with cold water, and set aside.",
			timeEstimate: "8 min",
			difficulty: "Easy" as const,
			equipment: ["Large pot", "Fine-mesh strainer"],
			tips: "Rinse noodles with cold water to stop cooking and prevent sticking. They'll warm up in the hot broth.",
		},
		{
			step: 2,
			text: "Heat coconut oil in a large, heavy-bottomed pot over medium heat. Add sliced shallots and cook for 4-5 minutes, stirring frequently, until golden brown and fragrant.",
			timeEstimate: "5 min",
			difficulty: "Easy" as const,
			equipment: ["Large heavy-bottomed pot", "Wooden spoon"],
			tips: "Golden shallots create a sweet aromatic base. Don't rush this step - the caramelization adds depth to the soup.",
		},
		{
			step: 3,
			text: "Add minced garlic, grated ginger, and sliced lemongrass. Stir-fry for 1-2 minutes until very aromatic. The mixture should sizzle actively.",
			timeEstimate: "2 min",
			difficulty: "Medium" as const,
			equipment: ["Wooden spoon"],
			tips: "The aromatics should sizzle when they hit the oil. If they don't, increase the heat slightly.",
			warning: "Don't let the garlic burn - it will make the soup bitter.",
		},
		{
			step: 4,
			text: "Add sambal bali and cook for 2-3 minutes, stirring constantly. The sambal should become very fragrant and the oil should turn a rich red color. Don't let it burn.",
			timeEstimate: "3 min",
			difficulty: "Medium" as const,
			equipment: ["Wooden spoon"],
			tips: "This blooming process is crucial - it releases the essential oils and develops the complex sambal flavors.",
			warning: "Stir constantly to prevent burning. The sambal can go from perfectly bloomed to burnt very quickly.",
		},
		{
			step: 5,
			text: "Pour in the chicken stock and bring to a boil. Add kaffir lime leaves, fish sauce, and palm sugar. Reduce heat and simmer for 10 minutes to develop flavors.",
			timeEstimate: "12 min",
			difficulty: "Easy" as const,
			equipment: ["Ladle"],
			tips: "This simmering time allows all the flavors to meld and creates a deeply aromatic broth base.",
		},
		{
			step: 6,
			text: "Add chicken pieces and simmer for 12-15 minutes until chicken is fully cooked and tender. Skim any foam that rises to the surface.",
			timeEstimate: "15 min",
			difficulty: "Easy" as const,
			equipment: ["Slotted spoon", "Small bowl"],
			tips: "Chicken thighs will stay more tender than breast meat during the longer cooking time.",
		},
		{
			step: 7,
			text: "If using prawns, add them now and cook for 3-4 minutes until they turn pink and are cooked through.",
			timeEstimate: "4 min",
			difficulty: "Easy" as const,
			equipment: ["Wooden spoon"],
			tips: "Prawns cook very quickly - they're done as soon as they turn pink and curl up.",
		},
		{
			step: 8,
			text: "Reduce heat to low and slowly stir in coconut milk. Bring to a very gentle simmer - do not boil vigorously or the coconut milk will curdle.",
			timeEstimate: "3 min",
			difficulty: "Medium" as const,
			equipment: ["Wooden spoon"],
			tips: "Add coconut milk gradually while stirring to prevent curdling. Keep heat low from this point on.",
			warning: "If the coconut milk curdles, the soup is still edible but won't look as appetizing.",
		},
		{
			step: 9,
			text: "Add pak choi and julienned carrot (if using). Simmer gently for 2-3 minutes until vegetables are just tender but still crisp.",
			timeEstimate: "3 min",
			difficulty: "Easy" as const,
			equipment: ["Wooden spoon"],
			tips: "Vegetables should retain some bite for textural contrast with the tender chicken and soft noodles.",
		},
		{
			step: 10,
			text: "Add bean sprouts in the final minute of cooking - they should remain crunchy. Taste and adjust seasoning with more sambal, fish sauce, or palm sugar.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Tasting spoon"],
			tips: "Bean sprouts add essential crunch - don't overcook them. Balance the flavors at the end: sambal for heat, fish sauce for saltiness, palm sugar for sweetness.",
		},
		{
			step: 11,
			text: "Divide cooked noodles among 4 serving bowls. Ladle the hot soup over the noodles, ensuring each bowl gets chicken, vegetables, and aromatic broth.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Ladle", "4 serving bowls"],
			tips: "Warm the bowls with hot water first if possible - it keeps the soup hot longer.",
		},
		{
			step: 12,
			text: "Garnish generously with fresh herbs, fried shallots, and serve immediately with lime wedges and extra sambal bali on the side for heat adjustment.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Small bowls for garnishes"],
			tips: "Let diners customize their bowl with herbs and extra sambal to their taste preferences.",
		},
	];

	// Cooking FAQ data for AI search optimization
	const cookingFAQ = [
		{
			question:
				"How do I prevent coconut milk from curdling in the soup?",
			answer: "The key is temperature control. Add coconut milk when the soup is off direct heat or at very low heat. Stir it in gradually and bring to only a gentle simmer - never a rolling boil. High heat breaks down the coconut proteins and causes separation. If it does curdle, the soup is still safe to eat, just less visually appealing.",
		},
		{
			question: "Can I make this soup vegetarian?",
			answer: "Absolutely! Replace chicken stock with rich vegetable stock, omit the fish sauce (or use vegetarian fish sauce), and substitute chicken with firm tofu, tempeh, or mixed mushrooms. Add the tofu/tempeh in the last 5 minutes of cooking to prevent it from breaking apart.",
		},
		{
			question: "What's the best way to store and reheat this soup?",
			answer: "Store the soup and noodles separately in the refrigerator for up to 3 days. The noodles will absorb liquid and become mushy if stored together. To reheat, warm the soup gently on low heat and cook fresh noodles, or briefly reheat the cooked noodles in hot water before combining.",
		},
		{
			question: "How can I adjust the spice level?",
			answer: "Start with 2 tablespoons of sambal bali and taste the broth after simmering. You can always add more, but you can't take it away. For very heat-sensitive palates, start with just 1 tablespoon. The coconut milk helps balance the heat, and fresh herbs and lime juice can also cool the palate.",
		},
	];

	// Internal linking data for SEO optimization
	const relatedProducts = [
		{
			name: "Sambal Bali - Aromatic & Spicy",
			url: "/sambal-bali-aromatic-spicy",
			description:
				"Perfect for this soup - provides aromatic complexity along with heat",
			rating: 4.9,
			price: "£7.49",
			badge: "Ideal for Soups",
		},
		{
			name: "Sambal Oelek - Pure Heat",
			url: "/sambal-oelek-uk",
			description:
				"For extra heat lovers - add a teaspoon along with sambal bali",
			rating: 4.8,
			price: "£7.49",
			badge: "Heat Booster",
		},
	];

	const relatedRecipes = [
		{
			name: "Sambal Fried Rice",
			url: "/recipes/sambal-fried-rice",
			description:
				"Perfect accompaniment or use leftover soup ingredients in this Indonesian classic",
			difficulty: "Easy" as const,
			cookTime: "20 minutes",
		},
		{
			name: "Sambal Chicken Stir-Fry",
			url: "/recipes/sambal-chicken-stir-fry",
			description:
				"Another comforting dish using similar ingredients but with different technique",
			difficulty: "Easy" as const,
			cookTime: "25 minutes",
		},
	];

	const relatedArticles = [
		{
			title: "The History of the Spice Islands: Where Your Sambal Comes From",
			url: "/blog/spice-islands-history",
			excerpt: "Discover the volcanic islands that created the perfect conditions for the world's most flavorful chilies",
			readTime: "8 min",
			category: "Culture & History",
		},
		{
			title: "Ultimate Guide to Indonesian Sambal",
			url: "/blog/ultimate-guide-indonesian-sambal",
			excerpt: "Everything you need to know about Indonesia's most beloved condiment and how to use it in cooking",
			readTime: "12 min",
			category: "Cooking Guide",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			<RecipeSchema recipe={recipe} />
			<BreadcrumbSchema items={breadcrumbItems} />
			<HowToSchema
				name='How to Make Indonesian Sambal Noodle Soup'
				description='Learn to make authentic Indonesian sambal noodle soup with rich coconut broth, aromatic spices, and traditional heat. Perfect comfort food recipe.'
				steps={howToSteps}
				totalTime='PT45M'
				prepTime='PT20M'
				cookTime='PT25M'
				yield='4 servings'
				category='Indonesian Soup'
			/>
			<FAQSchema
				faqs={cookingFAQ}
				pageTitle='Sambal Noodle Soup Cooking - Frequently Asked Questions'
			/>

			<div className='container mx-auto px-4 py-8 pb-16'>

				<RecipeCard recipe={recipe} />

				{/* Enhanced Interactive Recipe Instructions */}
				<div className='max-w-4xl mx-auto mt-8'>
					<EnhancedRecipeInstructions
						title='Interactive Cooking Guide'
						description="Follow along step-by-step with time estimates and chef's tips for perfect soup"
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
							About This Indonesian Comfort Soup
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								This sambal noodle soup draws
								inspiration from Indonesia's beloved
								soto ayam (chicken soup) tradition,
								elevated with the complex heat and
								aromatics of authentic sambal bali.
								Unlike traditional soto which often uses
								turmeric and galangal, this version
								focuses on the pure, intense flavors of
								sambal combined with coconut richness.
							</p>
							<p>
								The soup represents the perfect balance
								of Indonesian cooking principles:
								building layers of flavor through
								aromatic bases, incorporating heat that
								enhances rather than overwhelms, and
								finishing with coconut milk that adds
								richness while mellowing the spice. It's
								comfort food that warms you from the
								inside out.
							</p>
						</div>
					</section>

					{/* Ingredient Spotlight */}
					<section className='bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Key Ingredients & Their Magic
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Aromatic Foundation
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• <strong>Lemongrass:</strong>{" "}
										Adds citrusy, floral notes
										that brighten the rich broth
									</li>
									<li>
										•{" "}
										<strong>
											Kaffir Lime Leaves:
										</strong>{" "}
										Provide intense lime fragrance
										that's irreplaceable
									</li>
									<li>
										•{" "}
										<strong>Fresh Ginger:</strong>{" "}
										Warming spice that aids
										digestion and adds depth
									</li>
									<li>
										• <strong>Shallots:</strong>{" "}
										Sweet, mild onion flavor that
										forms the aromatic base
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Flavor Balance
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										•{" "}
										<strong>Sambal Bali:</strong>{" "}
										Complex heat with aromatic
										spices that don't overpower
									</li>
									<li>
										•{" "}
										<strong>Coconut Milk:</strong>{" "}
										Rich, creamy texture that
										balances the heat perfectly
									</li>
									<li>
										• <strong>Fish Sauce:</strong>{" "}
										Umami depth and saltiness that
										enhances all other flavors
									</li>
									<li>
										• <strong>Palm Sugar:</strong>{" "}
										Subtle sweetness that rounds
										out the flavor profile
									</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Chef's Techniques */}
					<section className='bg-white rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Chef Yossie's Professional Techniques
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>
									Building the Aromatic Base:
								</strong>{" "}
								The foundation of great Indonesian soup
								lies in properly cooking the aromatics.
								Start with shallots cooked until golden
								- this caramelization creates natural
								sweetness that balances the heat. Add
								garlic and ginger only when the shallots
								are ready, as they cook much faster.
							</p>
							<p>
								<strong>Blooming the Sambal:</strong>{" "}
								This crucial step releases the essential
								oils from the chilies and spices. The
								sambal should sizzle actively and become
								very fragrant. The oil will turn a
								beautiful red color - this is your
								visual cue that the flavors are properly
								developed.
							</p>
							<p>
								<strong>Coconut Milk Mastery:</strong>{" "}
								Temperature control is everything. Add
								coconut milk to slightly cooled soup and
								bring to only a gentle simmer. High heat
								breaks down the proteins and causes the
								distinctive curdled appearance that
								ruins the soup's visual appeal.
							</p>
						</div>
					</section>

					{/* Noodle Selection Guide */}
					<section className='bg-gradient-to-br from-gold-50 to-cream-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Choosing Your Noodles
						</h2>
						<div className='grid md:grid-cols-3 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Fresh Egg Noodles
								</h3>
								<p className='text-gray-700 font-body text-sm'>
									The gold standard for this soup.
									Fresh egg noodles provide the best
									texture and flavor absorption. They
									hold up beautifully in the hot
									broth and have that satisfying chew
									that makes each slurp memorable.
								</p>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Flat Rice Noodles
								</h3>
								<p className='text-gray-700 font-body text-sm'>
									Excellent gluten-free option with a
									silky texture. Use pad thai-width
									noodles for the best results. They
									absorb the aromatic broth
									beautifully and provide a different
									but equally satisfying experience.
								</p>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Fresh Ramen Noodles
								</h3>
								<p className='text-gray-700 font-body text-sm'>
									High-quality fresh ramen noodles
									(not instant) work wonderfully.
									Their alkaline content gives them a
									distinctive chew and helps them
									hold up in the soup without
									becoming mushy.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
