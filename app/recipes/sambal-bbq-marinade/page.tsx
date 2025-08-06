import { Metadata } from "next";
import RecipeCard from "@/components/recipes/RecipeCard";
import RecipeSchema from "@/components/seo/RecipeSchema";

export const metadata: Metadata = {
	title: "Sambal BBQ Marinade Recipe | Indonesian Spicy Grilling Sauce | Spice Island Indonesia",
	description:
		"Transform your BBQ with this authentic Indonesian sambal marinade. Perfect for chicken, beef, pork, and seafood. Easy recipe with incredible flavor depth.",
	keywords:
		"sambal BBQ marinade, Indonesian BBQ sauce, spicy marinade recipe, sambal grilling sauce, Asian BBQ marinade, Indonesian cooking",
	openGraph: {
		title: "Authentic Sambal BBQ Marinade Recipe - Indonesian Grilling Sauce",
		description:
			"Elevate your BBQ game with this authentic Indonesian sambal marinade. Perfect for all meats with complex heat and aromatic spices.",
		images: ["/images/Spice Island Indonesia Sambal Bali 185g Label.png"],
		type: "article",
	},
};

const recipe = {
	name: "Indonesian Sambal BBQ Marinade",
	description:
		"A game-changing marinade that combines the complex heat of authentic sambal with traditional BBQ flavors. Perfect for grilling chicken, beef, pork, or seafood.",
	image: "/images/Spice Island Indonesia Sambal Bali 185g Label.png",
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
		name: "Spice Island Indonesia",
		type: "Organization" as const,
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
		"Don't marinate seafood for too long as the acid will start to 'cook' the fish",
		"For vegetarian option, use this marinade on firm tofu, tempeh, or vegetables",
	],

	variations: [
		"Spicy Version: Add 1-2 teaspoons Sambal Oelek for extra heat",
		"Sweet & Sour: Add 1 tablespoon tamarind paste for tangy complexity",
		"Coconut Version: Replace oil with coconut milk for richness",
		"Herb-Infused: Add fresh lemongrass, kaffir lime leaves, or Thai basil",
	],
};

export default function SambalBBQMarinadePage() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			<RecipeSchema recipe={recipe} />

			<div className='container mx-auto px-4 py-8'>
				<RecipeCard recipe={recipe} />

				{/* Additional Content */}
				<div className='max-w-4xl mx-auto mt-12 space-y-8'>
					{/* About This Recipe */}
					<section className='bg-white rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							About This Marinade
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								This Indonesian-inspired BBQ marinade
								transforms ordinary grilled meats into
								something extraordinary. The Sambal Bali
								provides not just heat, but a complex
								blend of aromatic spices including
								galangal, lemongrass, and kaffir lime
								that create incredible depth of flavor.
							</p>
							<p>
								Unlike Western BBQ sauces that rely
								heavily on tomato and molasses, this
								marinade balances sweet, spicy, salty,
								and umami flavors in the traditional
								Indonesian way. The result is meat
								that's beautifully caramelized on the
								outside and incredibly flavorful
								throughout.
							</p>
						</div>
					</section>

					{/* Marinating Guide */}
					<section className='bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Marinating Times & Tips
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Recommended Times
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• <strong>Chicken:</strong>{" "}
										2-4 hours (overnight for best
										results)
									</li>
									<li>
										• <strong>Beef/Pork:</strong>{" "}
										4-8 hours (up to 24 hours)
									</li>
									<li>
										• <strong>Seafood:</strong> 30
										minutes to 1 hour maximum
									</li>
									<li>
										• <strong>Vegetables:</strong>{" "}
										30 minutes to 2 hours
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Pro Tips
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• Score thick cuts of meat for
										better penetration
									</li>
									<li>
										• Use glass or plastic
										containers, never metal
									</li>
									<li>
										• Turn meat halfway through
										marinating
									</li>
									<li>
										• Bring to room temperature
										before grilling
									</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Grilling Instructions */}
					<section className='bg-white rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Perfect Grilling Technique
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>Heat Management:</strong> Start
								with medium-high heat. The sugars in the
								marinade can burn quickly, so watch
								carefully and move to cooler spots if
								needed.
							</p>
							<p>
								<strong>Basting:</strong> Use reserved
								marinade (never used on raw meat) to
								baste during cooking. This creates a
								beautiful glaze and adds extra flavor
								layers.
							</p>
							<p>
								<strong>Resting:</strong> Let grilled
								meat rest for 5-10 minutes before
								serving to allow juices to redistribute.
							</p>
						</div>
					</section>

					{/* Best Meat Pairings */}
					<section className='bg-gradient-to-br from-gold-50 to-cream-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Best Meat Pairings
						</h2>
						<div className='grid md:grid-cols-3 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Chicken
								</h3>
								<p className='text-gray-700 font-body'>
									Thighs work best due to higher fat
									content. Wings are also excellent.
									The marinade penetrates well and
									creates crispy, flavorful skin.
								</p>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Beef
								</h3>
								<p className='text-gray-700 font-body'>
									Perfect for skirt steak, flank
									steak, or beef short ribs. The
									enzymes help tenderize tougher cuts
									while adding incredible flavor.
								</p>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Seafood
								</h3>
								<p className='text-gray-700 font-body'>
									Excellent with firm fish like
									salmon, tuna, or prawns. The
									aromatic spices complement seafood
									beautifully without overpowering.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
