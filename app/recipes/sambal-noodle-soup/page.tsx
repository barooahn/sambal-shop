import { Metadata } from "next";
import RecipeCard from "@/components/recipes/RecipeCard";
import RecipeSchema from "@/components/seo/RecipeSchema";

export const metadata: Metadata = {
	title: "Indonesian Sambal Noodle Soup Recipe | Spicy Comfort Food | Spice Island Indonesia",
	description:
		"Warm, comforting Indonesian noodle soup with authentic sambal heat. Perfect for cold days with rich coconut broth and aromatic spices. Ready in 35 minutes.",
	keywords:
		"sambal noodle soup, Indonesian soup recipe, spicy noodle soup, coconut noodle soup, Asian comfort food, sambal soup",
	openGraph: {
		title: "Indonesian Sambal Noodle Soup - Spicy Comfort Food Recipe",
		description:
			"Warming Indonesian noodle soup with authentic sambal, coconut milk, and aromatic spices. Perfect comfort food for any season.",
		images: ["/images/Spice Island Indonesia Sambal Bali 185g Label.png"],
		type: "article",
	},
};

const recipe = {
	name: "Indonesian Sambal Noodle Soup",
	description:
		"A warming, aromatic noodle soup that combines the heat of authentic sambal with rich coconut milk and traditional Indonesian spices. Perfect comfort food for any season.",
	image: "/images/Spice Island Indonesia Sambal Bali 185g Label.png",
	prepTime: "PT15M",
	cookTime: "PT25M",
	totalTime: "PT40M",
	servings: 4,
	difficulty: "Medium" as const,
	cuisine: "Indonesian",
	category: "Soups",
	keywords: [
		"sambal",
		"noodle soup",
		"Indonesian soup",
		"coconut soup",
		"spicy soup",
		"comfort food",
	],
	author: {
		name: "Spice Island Indonesia",
		type: "Organization" as const,
	},
	datePublished: "2024-02-12",

	ingredients: [
		"400g fresh egg noodles or rice noodles",
		"2-3 tablespoons Spice Island Sambal Bali",
		"400ml coconut milk",
		"1 liter chicken or vegetable stock",
		"300g chicken breast or thigh, sliced thin",
		"200g prawns, peeled (optional)",
		"2 shallots, finely sliced",
		"4 cloves garlic, minced",
		"2cm piece fresh ginger, grated",
		"1 stalk lemongrass, bruised and chopped",
		"2 kaffir lime leaves (or lime zest)",
		"1 tablespoon fish sauce",
		"1 tablespoon palm sugar or brown sugar",
		"2 tablespoons vegetable oil",
		"200g bean sprouts",
		"2 pak choi, quartered",
		"Fresh cilantro, Thai basil, and mint for garnish",
		"Lime wedges for serving",
		"Fried shallots for garnish",
	],

	instructions: [
		{
			step: 1,
			text: "Cook noodles according to package instructions. Drain and set aside.",
		},
		{
			step: 2,
			text: "Heat oil in a large pot over medium heat. Add sliced shallots and cook until golden and fragrant, about 3-4 minutes.",
		},
		{
			step: 3,
			text: "Add garlic, ginger, and lemongrass. Stir-fry for 1-2 minutes until aromatic.",
		},
		{
			step: 4,
			text: "Add sambal bali and cook for 1 minute, stirring constantly to prevent burning.",
		},
		{
			step: 5,
			text: "Pour in the stock and bring to a boil. Add kaffir lime leaves, fish sauce, and palm sugar.",
		},
		{
			step: 6,
			text: "Add sliced chicken and simmer for 8-10 minutes until chicken is cooked through.",
		},
		{
			step: 7,
			text: "Add prawns (if using) and cook for 2-3 minutes until pink and cooked.",
		},
		{
			step: 8,
			text: "Stir in coconut milk and bring back to a gentle simmer. Do not boil vigorously as coconut milk may curdle.",
		},
		{
			step: 9,
			text: "Add pak choi and bean sprouts. Cook for 2-3 minutes until vegetables are just tender.",
		},
		{
			step: 10,
			text: "Taste and adjust seasoning with more sambal, fish sauce, or sugar as needed.",
		},
		{
			step: 11,
			text: "Divide cooked noodles among serving bowls. Ladle the hot soup over the noodles.",
		},
		{
			step: 12,
			text: "Garnish with fresh herbs, fried shallots, and serve with lime wedges on the side.",
		},
	],

	nutrition: {
		calories: 485,
		protein: "28g",
		carbohydrates: "52g",
		fat: "18g",
		fiber: "4g",
		sodium: "1240mg",
	},

	tips: [
		"Don't boil coconut milk vigorously as it may curdle - keep at a gentle simmer",
		"Bruise lemongrass with the back of a knife to release more flavor",
		"Fresh kaffir lime leaves are ideal, but lime zest works as a substitute",
		"Adjust spice level by varying the amount of sambal - start with less and add more",
		"For vegetarian version, use vegetable stock and replace meat with firm tofu or tempeh",
	],

	variations: [
		"Seafood Version: Use fish stock and add mixed seafood instead of chicken",
		"Vegetarian: Replace meat with firm tofu, tempeh, and extra vegetables",
		"Extra Spicy: Add fresh sliced chilies along with the sambal",
		"Laksa Style: Add curry powder and turmeric for a Malaysian laksa influence",
	],
};

export default function SambalNoodleSoupPage() {
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
								This Indonesian noodle soup combines the
								warming comfort of a hearty broth with
								the complex heat and aromatics of
								authentic sambal. It's inspired by
								traditional Indonesian soup dishes like
								soto and laksa, but simplified for home
								cooking while maintaining authentic
								flavors.
							</p>
							<p>
								The key to this soup is building layers
								of flavor - starting with aromatic base
								ingredients, adding the sambal for heat
								and depth, then finishing with rich
								coconut milk that balances and mellows
								the spice while adding luxurious
								richness.
							</p>
						</div>
					</section>

					{/* Ingredient Spotlight */}
					<section className='bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-2xl shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Key Ingredients & Their Roles
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Aromatic Base
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• <strong>Lemongrass:</strong>{" "}
										Adds citrusy, floral notes
									</li>
									<li>
										•{" "}
										<strong>
											Kaffir Lime Leaves:
										</strong>{" "}
										Intense lime fragrance
									</li>
									<li>
										• <strong>Ginger:</strong>{" "}
										Warming spice and digestive
										aid
									</li>
									<li>
										• <strong>Shallots:</strong>{" "}
										Sweet, mild onion flavor
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
										Heat and aromatic complexity
									</li>
									<li>
										•{" "}
										<strong>Coconut Milk:</strong>{" "}
										Richness and heat balance
									</li>
									<li>
										• <strong>Fish Sauce:</strong>{" "}
										Umami depth and saltiness
									</li>
									<li>
										• <strong>Palm Sugar:</strong>{" "}
										Subtle sweetness and balance
									</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Cooking Techniques */}
					<section className='bg-white rounded-2xl shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Essential Cooking Techniques
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>
									Building the Aromatic Base:
								</strong>{" "}
								Start by cooking shallots until golden
								to develop sweetness, then add garlic
								and ginger for fragrance. This creates
								the foundation of flavor.
							</p>
							<p>
								<strong>Blooming the Sambal:</strong>{" "}
								Cook the sambal briefly in oil to
								release its oils and deepen the flavors.
								Don't let it burn - this would create
								bitterness.
							</p>
							<p>
								<strong>Coconut Milk Handling:</strong>{" "}
								Add coconut milk at the end and keep at
								a gentle simmer. High heat can cause it
								to curdle and separate.
							</p>
							<p>
								<strong>Timing the Vegetables:</strong>{" "}
								Add harder vegetables first, then softer
								ones. Bean sprouts and leafy greens need
								only brief cooking to maintain their
								texture.
							</p>
						</div>
					</section>

					{/* Noodle Options */}
					<section className='bg-gradient-to-br from-gold-50 to-cream-50 rounded-2xl shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Choosing the Right Noodles
						</h2>
						<div className='grid md:grid-cols-3 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Egg Noodles
								</h3>
								<p className='text-gray-700 font-body'>
									Fresh egg noodles provide the best
									texture and flavor absorption. They
									hold up well in the hot broth and
									have a satisfying chew.
								</p>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Rice Noodles
								</h3>
								<p className='text-gray-700 font-body'>
									Flat rice noodles (like pad thai
									noodles) work excellently and are
									gluten-free. They absorb flavors
									well and have a silky texture.
								</p>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Ramen Noodles
								</h3>
								<p className='text-gray-700 font-body'>
									Fresh ramen noodles (not instant)
									provide excellent texture. Their
									alkaline content gives them a
									distinctive chew and flavor.
								</p>
							</div>
						</div>
					</section>

					{/* Serving & Storage */}
					<section className='bg-white rounded-2xl shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Serving & Storage Tips
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>Serving:</strong> Serve
								immediately while hot. Provide lime
								wedges, extra herbs, and additional
								sambal on the side so diners can adjust
								flavors to their preference.
							</p>
							<p>
								<strong>Storage:</strong> Store soup and
								noodles separately in the refrigerator
								for up to 3 days. The noodles will
								absorb liquid and become mushy if stored
								together.
							</p>
							<p>
								<strong>Reheating:</strong> Reheat soup
								gently, adding a splash of stock or
								coconut milk if needed. Cook fresh
								noodles or briefly reheat cooked noodles
								in hot water before serving.
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
