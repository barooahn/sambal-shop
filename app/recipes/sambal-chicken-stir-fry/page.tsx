import { Metadata } from "next";
import RecipeCard from "@/components/recipes/RecipeCard";
import RecipeSchema from "@/components/seo/RecipeSchema";
import HowToSchema from "@/components/seo/HowToSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import EnhancedRecipeInstructions from "@/components/recipes/EnhancedRecipeInstructions";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import InternalLinkingOptimization from "@/components/seo/InternalLinkingOptimization";
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
	title: "Sambal Chicken Stir-Fry Recipe | Authentic Indonesian Ayam Rica Rica | Spice Island Indonesia",
	description:
		"Learn to make authentic Indonesian sambal chicken stir-fry (ayam rica rica) with traditional recipe. Quick 20-minute spicy chicken dish with genuine sambal oelek heat and aromatic flavors.",
	keywords:
		"sambal chicken recipe, Indonesian stir fry, sambal oelek recipe, ayam rica rica, spicy chicken, Indonesian cooking, authentic Asian recipes, quick dinner recipes, Chef Yossie recipe",
	openGraph: {
		title: "Authentic Sambal Chicken Stir-Fry Recipe - Indonesian Ayam Rica Rica",
		description:
			"Master the art of Indonesian sambal chicken stir-fry. Ready in 20 minutes with authentic heat and complex flavors from traditional sambal oelek.",
		images: ["/images/sambal-chicken-stir-fry.webp"],
		type: "article",
	},
	alternates: {
		canonical: "https://spiceislandindonesia.com/recipes/sambal-chicken-stir-fry"
	}
};

const recipe = {
	name: "Sambal Chicken Stir-Fry (Ayam Rica Rica)",
	description:
		"A fiery Indonesian chicken stir-fry that showcases the authentic heat and complexity of traditional sambal oelek. This quick weeknight dinner brings the bold flavors of the Spice Islands to your kitchen in just 20 minutes.",
	image: "/images/sambal-chicken-stir-fry.webp",
	prepTime: "PT10M",
	cookTime: "PT15M",
	totalTime: "PT25M",
	servings: 4,
	difficulty: "Easy" as const,
	cuisine: "Indonesian",
	category: "Main Course",
	keywords: [
		"sambal chicken",
		"ayam rica rica",
		"Indonesian stir fry",
		"sambal oelek",
		"spicy chicken",
		"quick dinner",
		"authentic Indonesian",
	],
	author: {
		name: "Chef Yossie",
		type: "Person" as const,
	},
	datePublished: "2024-02-12",

	ingredients: [
		"600g chicken thigh fillets, cut into bite-sized pieces",
		"2-3 tablespoons Spice Island Sambal Oelek (adjust to taste)",
		"2 tablespoons coconut oil or vegetable oil",
		"4 cloves garlic, minced",
		"2 shallots, thinly sliced",
		"1 large onion, sliced into half-moons",
		"1 red bell pepper, sliced",
		"1 green bell pepper, sliced", 
		"2 tablespoons sweet soy sauce (kecap manis)",
		"1 tablespoon light soy sauce",
		"1 tablespoon palm sugar or brown sugar",
		"2 spring onions, sliced diagonally",
		"1 lime, juiced",
		"Fresh coriander leaves for garnish",
		"Steamed jasmine rice, to serve",
		"Cucumber slices for serving (traditional)",
	],

	instructions: [
		{
			step: 1,
			text: "Prepare all ingredients before cooking - mise en place is crucial for stir-frying. Cut chicken into uniform pieces for even cooking.",
		},
		{
			step: 2,
			text: "Heat coconut oil in a large wok or heavy-based pan over high heat until shimmering. Add chicken pieces and stir-fry for 4-5 minutes until golden and just cooked through. Remove and set aside.",
		},
		{
			step: 3,
			text: "In the same wok, add garlic and shallots. Stir-fry for 30 seconds until fragrant, being careful not to burn.",
		},
		{
			step: 4,
			text: "Add sambal oelek and stir-fry for 1-2 minutes until very fragrant and the oil turns red. This 'blooming' process releases the essential oils and develops deep flavor.",
		},
		{
			step: 5,
			text: "Add onion and bell peppers. Stir-fry for 3-4 minutes until vegetables are tender-crisp but still have bite.",
		},
		{
			step: 6,
			text: "Return chicken to the wok along with both soy sauces and palm sugar. Stir-fry vigorously for 2-3 minutes until everything is well-coated and heated through.",
		},
		{
			step: 7,
			text: "Remove from heat and stir in lime juice and spring onions. Taste and adjust seasoning - add more sambal for heat or soy sauce for saltiness.",
		},
		{
			step: 8,
			text: "Serve immediately over steamed jasmine rice, garnished with fresh coriander and cucumber slices. Provide extra sambal oelek on the side.",
		},
	],

	nutrition: {
		calories: 295,
		protein: "32g",
		carbohydrates: "15g",
		fat: "14g",
		fiber: "3g",
		sodium: "920mg",
	},

	tips: [
		"Use chicken thighs instead of breast for more flavor and juiciness - they won't dry out during high-heat cooking",
		"The key to great stir-fry is having everything prepped before you start cooking",
		"High heat throughout cooking creates the characteristic 'wok hei' (breath of the wok) flavor",
		"Don't overcrowd the wok - cook in batches if necessary for best results",
		"Sambal Oelek works perfectly here as it provides pure chili heat without masking other flavors",
		"For authentic presentation, serve with keropok (prawn crackers) and fresh cucumber",
	],

	// Enhanced schema properties
	cuisineType: "Indonesian" as const,
	cookingMethods: [
		{
			name: "Stir-frying",
			description: "High-heat cooking technique that quickly sears ingredients while maintaining texture",
		},
		{
			name: "Sautéing",
			description: "Quick cooking method using oil over high heat to develop flavors",
		},
		{
			name: "Blooming spices",
			description: "Heating sambal in oil to release essential oils and develop complex flavors",
		},
	],
	equipment: [
		{
			name: "Large wok or heavy-based frying pan",
			description: "Essential for high-heat stir-frying and achieving authentic texture",
			required: true,
		},
		{
			name: "Sharp knife and cutting board",
			description: "For precise cutting of ingredients into uniform pieces",
			required: true,
		},
		{
			name: "Wooden spatula or wok turner",
			description: "For constant stirring without scratching the pan",
			required: true,
		},
		{
			name: "Small bowls for prep",
			description: "To hold prepped ingredients for quick addition during cooking",
			required: false,
		},
	],
	skillLevel: "Beginner" as const,
	spiceLevel: "Hot" as const,
	dietaryRestrictions: ["GlutenFree"],
	culturalOrigin: "Indonesian Traditional - Originating from North Sulawesi, also known as Ayam Rica Rica",

	variations: [
		"Seafood Rica Rica: Use prawns or fish instead of chicken",
		"Vegetable Rica Rica: Add green beans, baby corn, or bok choy",
		"Extra Spicy: Use Sambal Bali for aromatic heat or double the sambal oelek",
		"Mild Version: Reduce sambal to 1 tablespoon and add more vegetables",
	],
};

export default function SambalChickenStirFryPage() {
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
			name: "Sambal Chicken Stir-Fry",
			url: "https://spiceislandindonesia.com/recipes/sambal-chicken-stir-fry",
			position: 3,
		},
	];

	// How-to steps for AI search optimization
	const howToSteps = [
		{
			name: "Prepare ingredients",
			text: "Cut chicken into uniform bite-sized pieces. Slice vegetables and have all ingredients ready - stir-frying happens quickly.",
		},
		{
			name: "Cook chicken first",
			text: "Heat oil in wok over high heat. Add chicken and stir-fry for 4-5 minutes until golden and just cooked through. Remove and set aside.",
		},
		{
			name: "Build the flavor base",
			text: "Add garlic and shallots to the hot wok. Stir-fry for 30 seconds until fragrant, then add sambal oelek for 1-2 minutes until oil turns red.",
		},
		{
			name: "Add vegetables",
			text: "Add onion and bell peppers. Stir-fry for 3-4 minutes until tender-crisp but still have bite.",
		},
		{
			name: "Combine and season",
			text: "Return chicken to wok with soy sauces and palm sugar. Stir-fry vigorously for 2-3 minutes until well-coated.",
		},
		{
			name: "Finish and serve",
			text: "Remove from heat, add lime juice and spring onions. Serve immediately over jasmine rice with coriander and cucumber.",
		},
	];

	// Enhanced instructions with visual indicators
	const enhancedInstructions = [
		{
			step: 1,
			text: "Prepare all ingredients before cooking - mise en place is crucial for stir-frying. Cut chicken into uniform pieces for even cooking.",
			timeEstimate: "5 min",
			difficulty: "Easy" as const,
			equipment: ["Sharp knife", "Cutting board", "Small bowls"],
			tips: "Having everything ready before you start cooking is essential - stir-frying happens very quickly.",
		},
		{
			step: 2,
			text: "Heat coconut oil in a large wok or heavy-based pan over high heat until shimmering. Add chicken pieces and stir-fry for 4-5 minutes until golden and just cooked through. Remove and set aside.",
			timeEstimate: "5 min",
			difficulty: "Medium" as const,
			equipment: ["Large wok", "Wooden spatula"],
			tips: "The oil should be very hot before adding chicken. You'll hear a strong sizzle when the chicken hits the pan.",
			warning: "Don't overcrowd the wok - cook in batches if necessary.",
		},
		{
			step: 3,
			text: "In the same wok, add garlic and shallots. Stir-fry for 30 seconds until fragrant, being careful not to burn.",
			timeEstimate: "1 min",
			difficulty: "Medium" as const,
			equipment: ["Wooden spatula"],
			tips: "The garlic should sizzle immediately. If it doesn't, your wok isn't hot enough.",
			warning: "Garlic burns quickly at high heat - keep it moving.",
		},
		{
			step: 4,
			text: "Add sambal oelek and stir-fry for 1-2 minutes until very fragrant and the oil turns red. This 'blooming' process releases the essential oils and develops deep flavor.",
			timeEstimate: "2 min",
			difficulty: "Medium" as const,
			equipment: ["Wooden spatula"],
			tips: "This step is crucial - the sambal should become very aromatic and the oil should turn a beautiful red color.",
		},
		{
			step: 5,
			text: "Add onion and bell peppers. Stir-fry for 3-4 minutes until vegetables are tender-crisp but still have bite.",
			timeEstimate: "4 min",
			difficulty: "Easy" as const,
			equipment: ["Wooden spatula"],
			tips: "Vegetables should still have some crunch - they'll continue cooking slightly in the residual heat.",
		},
		{
			step: 6,
			text: "Return chicken to the wok along with both soy sauces and palm sugar. Stir-fry vigorously for 2-3 minutes until everything is well-coated and heated through.",
			timeEstimate: "3 min",
			difficulty: "Medium" as const,
			equipment: ["Wooden spatula"],
			tips: "Toss everything together vigorously to ensure even coating of the sauce.",
		},
		{
			step: 7,
			text: "Remove from heat and stir in lime juice and spring onions. Taste and adjust seasoning - add more sambal for heat or soy sauce for saltiness.",
			timeEstimate: "1 min",
			difficulty: "Easy" as const,
			equipment: ["Tasting spoon"],
			tips: "The lime juice brightens all the flavors. Always taste before serving - every batch of sambal can vary in heat.",
		},
		{
			step: 8,
			text: "Serve immediately over steamed jasmine rice, garnished with fresh coriander and cucumber slices. Provide extra sambal oelek on the side.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Serving plates", "Rice bowls"],
			tips: "The contrast of cool cucumber with hot spicy chicken is traditional and refreshing.",
		},
	];

	// Cooking FAQ data for AI search optimization
	const cookingFAQ = [
		{
			question: "Can I use chicken breast instead of thigh?",
			answer: "Yes, but chicken thighs are preferred for stir-frying as they stay juicier and more flavorful during high-heat cooking. If using breast, cut it slightly thicker and don't overcook - remove it from heat as soon as it's just done to prevent dryness.",
		},
		{
			question: "How do I know when the sambal is properly bloomed?",
			answer: "You'll know the sambal is properly bloomed when it becomes very fragrant and the oil turns a deep red color. This usually takes 1-2 minutes of constant stirring over high heat. The sambal should sizzle actively but not burn.",
		},
		{
			question: "What if my stir-fry is too spicy?",
			answer: "If the dish is too spicy, serve it with extra steamed rice, cucumber slices, or a dollop of coconut cream. For future cooking, start with less sambal - you can always add more, but you can't take it away. Remember that sambal heat varies between batches.",
		},
		{
			question: "Can I make this dish ahead of time?",
			answer: "Stir-fries are best served immediately for optimal texture and flavor. However, you can prep all ingredients hours ahead. Store cut vegetables and chicken separately in the refrigerator, then cook when ready to serve. Reheated stir-fry loses the characteristic 'wok hei' flavor.",
		},
	];

	// Internal linking data for SEO optimization
	const relatedProducts = [
		{
			name: "Sambal Oelek - Pure Heat",
			url: "/sambal-oelek-uk",
			description: "The star ingredient for this recipe - pure chili heat without masking flavors",
			rating: 4.9,
			price: "£7.49",
			badge: "Perfect for Stir-Fry",
		},
		{
			name: "Sambal Bali - Aromatic & Spicy",
			url: "/sambal-bali-aromatic-spicy",
			description: "For extra aromatic complexity - use half sambal oelek, half sambal bali",
			rating: 4.8,
			price: "£7.49",
			badge: "Aromatic Upgrade",
		},
	];

	const relatedRecipes = [
		{
			name: "Sambal Fried Rice",
			url: "/recipes/sambal-fried-rice",
			description: "Perfect side dish or use leftover chicken in this Indonesian classic",
			difficulty: "Easy" as const,
			cookTime: "20 minutes",
		},
		{
			name: "Sambal BBQ Marinade",
			url: "/recipes/sambal-bbq-marinade",
			description: "Marinate chicken with sambal for barbecue - incredible flavor combination",
			difficulty: "Easy" as const,
			cookTime: "30 minutes + marinating",
		},
	];

	const relatedArticles = [
		{
			title: "The Ultimate Guide to Indonesian Sambal",
			url: "/blog/ultimate-guide-indonesian-sambal",
			excerpt: "Learn about different types of sambal and how to use them in cooking",
			readTime: "12 min",
			category: "Cooking Guide",
		},
		{
			title: "Sambal vs HP Sauce: The Ultimate British Condiment Showdown",
			url: "/blog/sambal-vs-hp-sauce",
			excerpt: "Professional chef comparison reveals why sambal is revolutionizing British kitchens",
			readTime: "15 min",
			category: "Food Comparison",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			<RecipeSchema recipe={recipe} />
			<BreadcrumbSchema items={breadcrumbItems} />
			<HowToSchema
				name='How to Make Sambal Chicken Stir-Fry (Ayam Rica Rica)'
				description='Learn to make authentic Indonesian sambal chicken stir-fry with this step-by-step guide. Quick, spicy, and full of authentic Spice Islands flavor.'
				steps={howToSteps}
				totalTime='PT25M'
				prepTime='PT10M'
				cookTime='PT15M'
				yield='4 servings'
				category='Indonesian Main Course'
			/>
			<FAQSchema
				faqs={cookingFAQ}
				pageTitle='Sambal Chicken Stir-Fry Cooking - Frequently Asked Questions'
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
									Sambal Chicken Stir-Fry
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<RecipeCard recipe={recipe} />

				{/* Enhanced Interactive Recipe Instructions */}
				<div className='max-w-4xl mx-auto mt-8'>
					<EnhancedRecipeInstructions
						title='Interactive Cooking Guide'
						description="Follow along step-by-step with time estimates and chef's tips for perfect results"
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
							About This Indonesian Classic
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								Ayam Rica Rica originates from North Sulawesi and represents one of Indonesia's most beloved spicy chicken dishes. Unlike Chinese-style stir-fries, this Indonesian version showcases the pure, intense heat of sambal oelek combined with aromatic vegetables and traditional seasonings.
							</p>
							<p>
								The name "Rica Rica" refers to the spicy sambal-based sauce that coats the chicken. Traditionally made with local Minahasan chilies, our recipe uses authentic sambal oelek to deliver the same fiery heat and complex flavor that makes this dish so special throughout Indonesia.
							</p>
						</div>
					</section>

					{/* Chef's Tips */}
					<section className='bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Chef Yossie's Professional Tips
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Authentic Technique
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>• Use coconut oil for authentic Indonesian flavor</li>
									<li>• Bloom the sambal properly - this is crucial for deep flavor</li>
									<li>• Keep vegetables slightly crisp for authentic texture</li>
									<li>• Finish with fresh lime juice for brightness</li>
								</ul>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Heat Management
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>• Start with less sambal if you're heat-sensitive</li>
									<li>• Each batch of sambal can vary in intensity</li>
									<li>• Serve with cucumber to cool the palate</li>
									<li>• Provide extra sambal on the side for heat lovers</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Serving Suggestions */}
					<section className='bg-white rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Traditional Indonesian Serving
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								In Indonesia, Ayam Rica Rica is traditionally served with steamed white rice, fresh cucumber slices, and keropok (prawn crackers). The cool cucumber provides essential relief from the heat, while the crunchy prawn crackers add textural contrast.
							</p>
							<p>
								For an authentic Indonesian meal, serve this alongside gado-gado salad, sayur lodeh (vegetable curry), or our sambal fried rice. The combination creates a balanced meal with varying textures and complementary flavors.
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
