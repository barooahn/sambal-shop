import { Metadata } from "next";
import RecipeCard from "@/components/recipes/RecipeCard";
import RecipeSchema from "@/components/seo/RecipeSchema";

export const metadata: Metadata = {
	title: "Sambal Fried Rice Recipe | Authentic Indonesian Nasi Goreng | Spice Island Indonesia",
	description:
		"Learn to make authentic Indonesian sambal fried rice (nasi goreng) with our traditional recipe. Perfect for using leftover rice with authentic sambal heat and flavor.",
	keywords:
		"sambal fried rice, nasi goreng recipe, Indonesian fried rice, sambal recipe, leftover rice recipe, authentic Indonesian cooking",
	openGraph: {
		title: "Authentic Sambal Fried Rice Recipe - Indonesian Nasi Goreng",
		description:
			"Transform leftover rice into Indonesia's national dish with authentic sambal. Easy 20-minute recipe with step-by-step instructions.",
		images: ["/images/Spice Island Indonesia Sambal Bali 185g Label.png"],
		type: "article",
	},
};

const recipe = {
	name: "Sambal Fried Rice (Nasi Goreng)",
	description:
		"Indonesia's beloved national dish - a perfect way to transform leftover rice into something spectacular with the heat and complexity of authentic sambal.",
	image: "/images/Spice Island Indonesia Sambal Bali 185g Label.png",
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
		"Day-old rice works best as it's drier and won't become mushy",
		"Keep the heat high throughout cooking for the best 'wok hei' (breath of the wok) flavor",
		"Don't overcrowd the wok - cook in batches if necessary",
		"Sambal Bali works perfectly here due to its aromatic spices that complement the other ingredients",
		"For vegetarian version, omit meat and add extra vegetables like carrots, peas, or bean sprouts",
	],

	variations: [
		"Seafood Nasi Goreng: Use prawns, squid, and fish instead of chicken",
		"Vegetable Nasi Goreng: Add diced carrots, peas, and bean sprouts",
		"Pineapple Nasi Goreng: Add fresh pineapple chunks for a sweet-spicy combination",
		"Extra Spicy: Use Sambal Oelek instead of Sambal Bali for pure heat",
	],
};

export default function SambalFriedRicePage() {
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
								Nasi Goreng is Indonesia's national dish
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

					{/* Chef's Tips */}
					<section className='bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-2xl shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Chef's Tips for Perfect Nasi Goreng
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
									<li>• Don't overcrowd the wok</li>
									<li>
										• Taste and adjust seasoning
										at the end
									</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Serving Suggestions */}
					<section className='bg-white rounded-2xl shadow-sm border border-gold-200 p-8'>
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
