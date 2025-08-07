import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from "lucide-react";
import RecipeCard from "@/components/recipes/RecipeCard";

export const metadata: Metadata = {
	title: "Sambal Chicken Stir-Fry Recipe | Authentic Indonesian Cooking | Spice Island Indonesia",
	description:
		"Learn to make authentic Indonesian Sambal Chicken Stir-Fry with our traditional recipe. Quick, spicy, and full of flavor using genuine Indonesian sambal.",
	keywords:
		"sambal chicken recipe, Indonesian stir fry, sambal oelek recipe, spicy chicken, Indonesian cooking, authentic Asian recipes, quick dinner recipes",
	openGraph: {
		title: "Authentic Sambal Chicken Stir-Fry Recipe",
		description:
			"Quick and spicy Indonesian chicken stir-fry using authentic sambal. Ready in 20 minutes!",
		images: [
			"/images/Spice Island Indonesia Sambal Oelek 185g Label.png",
		],
		type: "article",
	},
};

const sambalChickenRecipe = {
	name: "Authentic Sambal Chicken Stir-Fry",
	description:
		"A quick and fiery Indonesian stir-fry that brings the authentic flavors of the Spice Islands to your kitchen. This recipe uses traditional sambal oelek for genuine heat and flavor.",
	image: "/images/Spice Island Indonesia Sambal Oelek 185g Label.png",
	prepTime: "PT15M", // 15 minutes
	cookTime: "PT10M", // 10 minutes
	totalTime: "PT25M", // 25 minutes
	servings: 4,
	difficulty: "Easy" as const,
	cuisine: "Indonesian",
	category: "Main Course",
	ingredients: [
		"500g chicken breast or thigh, sliced thin",
		"2 tablespoons Spice Island Indonesia Sambal Oelek",
		"2 tablespoons vegetable oil",
		"3 cloves garlic, minced",
		"1 medium onion, sliced",
		"1 red bell pepper, sliced",
		"1 green bell pepper, sliced",
		"2 tablespoons soy sauce",
		"1 tablespoon oyster sauce",
		"1 teaspoon brown sugar",
		"2 spring onions, chopped",
		"1 tablespoon lime juice",
		"Steamed jasmine rice, to serve",
		"Fresh coriander for garnish",
	],
	instructions: [
		{
			step: 1,
			text: "Heat 1 tablespoon of oil in a large wok or frying pan over high heat. Add the sliced chicken and stir-fry for 3-4 minutes until just cooked through. Remove chicken and set aside.",
		},
		{
			step: 2,
			text: "Add remaining oil to the same pan. Add minced garlic and stir-fry for 30 seconds until fragrant, being careful not to burn.",
		},
		{
			step: 3,
			text: "Add the sambal oelek to the pan and stir-fry for 1 minute. The sambal should sizzle and become very fragrant - this releases the essential oils.",
		},
		{
			step: 4,
			text: "Add sliced onion and bell peppers. Stir-fry for 2-3 minutes until vegetables are tender-crisp but still have some bite.",
		},
		{
			step: 5,
			text: "Return the chicken to the pan along with soy sauce, oyster sauce, and brown sugar. Stir-fry for 2 minutes until everything is well combined and heated through.",
		},
		{
			step: 6,
			text: "Remove from heat and stir in lime juice and chopped spring onions. Taste and adjust seasoning - add more sambal for extra heat if desired.",
		},
		{
			step: 7,
			text: "Serve immediately over steamed jasmine rice, garnished with fresh coriander. Provide extra sambal oelek on the side for those who want more heat.",
		},
	],
	nutrition: {
		calories: 285,
		protein: "28g",
		carbohydrates: "12g",
		fat: "14g",
		sodium: "890mg",
	},
	author: {
		name: "Chef Yossie",
		type: "Person" as const,
	},
	datePublished: "2024-02-01",
	keywords: [
		"sambal chicken",
		"Indonesian stir fry",
		"spicy chicken recipe",
		"authentic Indonesian cooking",
		"sambal oelek recipe",
		"quick dinner",
		"Asian stir fry",
	],
	rating: 4.8,
	reviewCount: 127,
};

export default function SambalChickenStirFryPage() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100 font-body'>
			{/* Header */}
			<section className='py-8 bg-gradient-to-br from-burgundy-50 to-gold-50'>
				<div className='container mx-auto px-4'>
					<Link
						href='/recipes'
						className='inline-flex items-center gap-2 text-burgundy-700 hover:text-burgundy-900 mb-6 font-elegant'
					>
						<ArrowLeft className='w-4 h-4' />
						Back to Recipes
					</Link>

					<div className='flex items-center justify-between'>
						<div>
							<h1 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-2 font-heading'>
								{sambalChickenRecipe.name}
							</h1>
							<p className='text-lg text-gray-600 max-w-2xl'>
								{sambalChickenRecipe.description}
							</p>
						</div>

						<Button
							variant='outline'
							size='sm'
							className='hidden md:flex'
						>
							<Share2 className='w-4 h-4 mr-2' />
							Share Recipe
						</Button>
					</div>
				</div>
			</section>

			{/* Recipe Content */}
			<section className='py-12'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto'>
						<RecipeCard
							recipe={sambalChickenRecipe}
							showFullRecipe={true}
						/>

						{/* Additional Tips */}
						<div className='mt-8 bg-white rounded-sm shadow-lg border border-gold-200 p-8'>
							<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
								About This Recipe
							</h2>
							<div className='prose prose-lg max-w-none text-gray-700 font-body'>
								<p>
									This Sambal Chicken Stir-Fry
									represents the perfect introduction
									to authentic Indonesian cooking.
									The key to this dish is using
									genuine sambal oelek - not a
									substitute or Western &quot;chili
									garlic sauce.&quot; Authentic
									sambal oelek provides the clean,
									intense heat and complex flavor
									that makes Indonesian cuisine so
									distinctive.
								</p>

								<h3 className='text-xl font-bold text-burgundy-900 mt-6 mb-3'>
									Why Authentic Sambal Makes a
									Difference
								</h3>
								<p>
									Traditional Indonesian sambal oelek
									is made with just three
									ingredients: fresh red chilies,
									salt, and vinegar. This simplicity
									allows the pure chili flavor to
									shine through, creating a heat that
									builds gradually and has depth.
									Western substitutes often contain
									sugar, preservatives, and
									thickeners that mask the authentic
									taste.
								</p>

								<h3 className='text-xl font-bold text-burgundy-900 mt-6 mb-3'>
									Cooking Tips for Perfect Results
								</h3>
								<ul>
									<li>
										<strong>
											High Heat is Essential:
										</strong>{" "}
										Indonesian stir-frying
										requires very high heat to
										achieve the characteristic
										&quot;wok hei&quot; (breath of
										the wok) flavor.
									</li>
									<li>
										<strong>
											Don&apos;t Overcook the
											Vegetables:
										</strong>{" "}
										They should retain some crunch
										for authentic texture.
									</li>
									<li>
										<strong>
											Taste and Adjust:
										</strong>{" "}
										Sambal heat can vary, so
										always taste and add more if
										needed.
									</li>
									<li>
										<strong>
											Serve Immediately:
										</strong>{" "}
										This dish is best enjoyed hot
										from the wok.
									</li>
								</ul>

								<h3 className='text-xl font-bold text-burgundy-900 mt-6 mb-3'>
									Variations and Substitutions
								</h3>
								<p>
									While this recipe uses chicken, you
									can easily substitute with beef,
									pork, prawns, or tofu. For
									vegetables, try adding green beans,
									baby corn, or bok choy. The key is
									maintaining the balance of flavors
									and not overwhelming the dish with
									too many ingredients.
								</p>
							</div>
						</div>

						{/* Related Products CTA */}
						<div className='mt-8 bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-sm shadow-lg border border-gold-200 p-8 text-center'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
								Get Authentic Sambal for This Recipe
							</h3>
							<p className='text-gray-700 mb-6 font-body'>
								This recipe tastes best with genuine
								Indonesian sambal oelek. Our traditional
								recipe delivers the authentic heat and
								flavor you need.
							</p>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<Button
									size='lg'
									className='bg-burgundy-600 hover:bg-burgundy-700'
								>
									Order Sambal Oelek - £7.49
								</Button>
								<Button variant='outline' size='lg'>
									View All Sambal Varieties
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
