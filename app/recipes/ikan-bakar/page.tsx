import { Metadata } from "next";
import RecipeCard from "@/components/recipes/RecipeCard";
import RecipeSchema from "@/components/seo/RecipeSchema";
import HowToSchema from "@/components/seo/HowToSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import EnhancedRecipeInstructions from "@/components/recipes/EnhancedRecipeInstructions";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import InternalLinkingOptimization from "@/components/seo/InternalLinkingOptimization";

export const metadata: Metadata = {
	title: "Ikan Bakar Recipe | Indonesian Grilled Fish with Sambal | Spice Island Indonesia",
	description:
		"Authentic Indonesian Ikan Bakar recipe - aromatic grilled fish with traditional spice marinade and fresh sambal. Healthy Indonesian BBQ with smoky charcoal flavors and fiery heat.",
	keywords:
		"ikan bakar recipe, Indonesian grilled fish, fish BBQ recipe, sambal fish, Indonesian seafood, healthy fish recipe, charcoal grilled fish, Chef Yossie recipe, Indonesian marinade",
	openGraph: {
		title: "Ikan Bakar Recipe - Indonesian Grilled Fish with Sambal",
		description:
			"Master authentic Indonesian Ikan Bakar - perfectly grilled fish with aromatic spice marinade and fresh sambal. Healthy seafood with bold Indonesian flavors.",
		images: ["/images/ikan-bakar.webp"],
		type: "article",
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/recipes/ikan-bakar",
	},
};

const recipe = {
	name: "Ikan Bakar (Indonesian Grilled Fish)",
	description:
		"Indonesia's beloved grilled fish dish featuring whole fish marinated in aromatic spices and grilled over charcoal until perfectly smoky. Served with fresh sambal and steamed rice, this healthy Indonesian classic showcases the perfect marriage of fire, spice, and fresh seafood.",
	image: "/images/ikan-bakar.webp",
	prepTime: "PT20M",
	cookTime: "PT20M",
	totalTime: "PT40M",
	servings: 4,
	difficulty: "Medium" as const,
	cuisine: "Indonesian",
	category: "Main Course",
	keywords: [
		"ikan bakar",
		"Indonesian grilled fish",
		"fish BBQ",
		"sambal fish",
		"Indonesian seafood",
		"healthy fish recipe",
		"charcoal grilled",
	],
	author: {
		name: "Chef Yossie",
		type: "Person" as const,
	},
	datePublished: "2024-02-16",

	ingredients: [
		"2 whole fish (800g each) - red snapper, sea bass, or mackerel, cleaned and scaled",
		"3 tablespoons Spice Island Sambal Bali",
		"4 shallots, finely chopped",
		"6 cloves garlic, minced",
		"3cm piece fresh ginger, grated",
		"2cm piece galangal, grated (optional)",
		"2 stalks lemongrass, finely sliced",
		"4 kaffir lime leaves, finely shredded",
		"1 tablespoon tamarind paste",
		"2 tablespoons sweet soy sauce (kecap manis)",
		"1 tablespoon palm sugar or brown sugar",
		"2 tablespoons coconut oil",
		"1 teaspoon salt",
		"1/2 teaspoon white pepper",
		"2 tablespoons lime juice",

		// For serving
		"Steamed white rice",
		"Fresh sambal bali or sambal oelek",
		"Cucumber slices",
		"Tomato wedges",
		"Fresh lettuce leaves",
		"Lime wedges",
		"Fried peanuts (optional)",
		"Banana leaves for grilling (optional but traditional)",
	],

	instructions: [
		{
			step: 1,
			text: "Clean fish thoroughly and pat dry. Make 3-4 diagonal cuts on each side of the fish, cutting about 1cm deep. This helps the marinade penetrate and ensures even cooking.",
		},
		{
			step: 2,
			text: "In a food processor or mortar and pestle, blend shallots, garlic, ginger, galangal (if using), lemongrass, and kaffir lime leaves into a smooth paste. Add a little water if needed.",
		},
		{
			step: 3,
			text: "In a large bowl, combine the spice paste with sambal bali, tamarind paste, sweet soy sauce, palm sugar, coconut oil, salt, white pepper, and lime juice. Mix well to form a thick marinade.",
		},
		{
			step: 4,
			text: "Rub the marinade all over the fish, inside and out, making sure to work it into the cuts. Place in a dish, cover, and marinate for at least 1 hour, preferably 2-3 hours in the refrigerator.",
		},
		{
			step: 5,
			text: "Remove fish from refrigerator 30 minutes before grilling to bring to room temperature. Prepare charcoal grill or preheat gas grill to medium-high heat.",
		},
		{
			step: 6,
			text: "If using banana leaves, quickly pass them over the flame to soften, then use to wrap the fish loosely. This prevents sticking and adds subtle flavor.",
		},
		{
			step: 7,
			text: "Oil the grill grates well to prevent sticking. Place fish on the grill and cook for 8-10 minutes on the first side without moving.",
		},
		{
			step: 8,
			text: "Carefully flip the fish using two spatulas or tongs. Grill for another 8-10 minutes until the skin is charred and crispy, and fish flakes easily when tested.",
		},
		{
			step: 9,
			text: "Brush fish with any remaining marinade during the last few minutes of cooking for extra flavor and moisture.",
		},
		{
			step: 10,
			text: "Remove from grill and let rest for 2-3 minutes. Serve immediately with steamed rice, fresh vegetables, sambal, and lime wedges.",
		},
	],

	nutrition: {
		calories: 320,
		protein: "48g",
		carbohydrates: "6g",
		fat: "12g",
		fiber: "1g",
		sodium: "580mg",
	},

	tips: [
		"Choose firm, fresh fish with clear eyes and bright red gills - freshness is crucial for grilling",
		"Don't flip the fish too early - let it develop a good crust before turning",
		"Banana leaves prevent sticking and add subtle flavor, but aluminum foil works as substitute",
		"The marinade should be thick enough to cling to the fish - add more oil if too thin",
		"Medium-high heat is ideal - too high burns the outside before inside cooks",
		"Serve immediately while the skin is still crispy for the best texture contrast",
	],

	// Enhanced schema properties
	cuisineType: "Indonesian" as const,
	cookingMethods: [
		{
			name: "Marinating",
			description:
				"Long marination allows aromatic spices to penetrate the fish",
		},
		{
			name: "Charcoal grilling",
			description:
				"Traditional method that imparts smoky flavor and creates crispy skin",
		},
		{
			name: "Spice paste preparation",
			description:
				"Grinding fresh aromatics creates the flavor base for the marinade",
		},
	],
	equipment: [
		{
			name: "Charcoal or gas grill",
			description:
				"Essential for achieving the characteristic smoky flavor and crispy skin",
			required: true,
		},
		{
			name: "Food processor or mortar and pestle",
			description: "For grinding the aromatic spice paste",
			required: true,
		},
		{
			name: "Two large spatulas or fish turner",
			description:
				"For safely flipping the whole fish without breaking",
			required: true,
		},
		{
			name: "Banana leaves (optional)",
			description:
				"Traditional wrapping that prevents sticking and adds flavor",
			required: false,
		},
	],
	skillLevel: "Intermediate" as const,
	spiceLevel: "Medium" as const,
	dietaryRestrictions: ["GlutenFree", "Pescatarian"],
	culturalOrigin:
		"Traditional Indonesian Seafood - Popular throughout coastal Indonesia, especially Java and Sumatra",

	variations: [
		"Ikan Bakar Manado: Add extra chilies and use rica-rica spice blend from North Sulawesi",
		"Ikan Bakar Jimbaran: Balinese style with extra lemongrass and served with plecing kangkung",
		"Ikan Bakar Padang: West Sumatran version with extra galangal and turmeric",
		"Ikan Bakar Sambal Matah: Served with fresh Balinese sambal matah (raw shallot and lemongrass sambal)",
	],
};

export default function IkanBakarPage() {
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
			name: "Ikan Bakar",
			url: "https://spiceislandindonesia.com/recipes/ikan-bakar",
			position: 3,
		},
	];

	// How-to steps for AI search optimization
	const howToSteps = [
		{
			name: "Prepare and score fish",
			text: "Clean fish thoroughly and make diagonal cuts on both sides. This helps marinade penetrate and ensures even cooking.",
		},
		{
			name: "Make spice paste",
			text: "Blend shallots, garlic, ginger, galangal, lemongrass, and kaffir lime leaves into smooth paste using food processor or mortar.",
		},
		{
			name: "Create marinade",
			text: "Mix spice paste with sambal bali, tamarind, sweet soy sauce, palm sugar, coconut oil, salt, pepper, and lime juice.",
		},
		{
			name: "Marinate fish",
			text: "Rub marinade all over fish, inside and out, working into cuts. Marinate 1-3 hours in refrigerator for best flavor.",
		},
		{
			name: "Prepare grill",
			text: "Heat charcoal or gas grill to medium-high. Oil grates well to prevent sticking. Optionally wrap fish in banana leaves.",
		},
		{
			name: "Grill to perfection",
			text: "Grill 8-10 minutes per side without moving too early. Fish is done when skin is charred and fish flakes easily.",
		},
	];

	// Enhanced instructions with visual indicators
	const enhancedInstructions = [
		{
			step: 1,
			text: "Clean fish thoroughly and pat dry. Make 3-4 diagonal cuts on each side of the fish, cutting about 1cm deep. This helps the marinade penetrate and ensures even cooking.",
			timeEstimate: "8 min",
			difficulty: "Easy" as const,
			equipment: ["Sharp knife", "Paper towels", "Cutting board"],
			tips: "Make cuts at a 45-degree angle across the thickest part of the fish. Don't cut too deep or the fish may fall apart.",
		},
		{
			step: 2,
			text: "In a food processor or mortar and pestle, blend shallots, garlic, ginger, galangal (if using), lemongrass, and kaffir lime leaves into a smooth paste. Add a little water if needed.",
			timeEstimate: "10 min",
			difficulty: "Medium" as const,
			equipment: ["Food processor or mortar and pestle"],
			tips: "If using mortar and pestle, pound garlic and ginger first (hardest ingredients), then add softer ones. The paste should be smooth and fragrant.",
		},
		{
			step: 3,
			text: "In a large bowl, combine the spice paste with sambal bali, tamarind paste, sweet soy sauce, palm sugar, coconut oil, salt, white pepper, and lime juice. Mix well to form a thick marinade.",
			timeEstimate: "3 min",
			difficulty: "Easy" as const,
			equipment: ["Large mixing bowl", "Whisk or spoon"],
			tips: "The marinade should be thick enough to cling to the fish. If too thin, add more oil or sambal. Taste and adjust seasoning.",
		},
		{
			step: 4,
			text: "Rub the marinade all over the fish, inside and out, making sure to work it into the cuts. Place in a dish, cover, and marinate for at least 1 hour, preferably 2-3 hours in the refrigerator.",
			timeEstimate: "5 min + marinating",
			difficulty: "Easy" as const,
			equipment: ["Large dish", "Plastic wrap"],
			tips: "Use your hands to massage the marinade in - get messy! The longer you marinate, the more flavorful the fish will be.",
		},
		{
			step: 5,
			text: "Remove fish from refrigerator 30 minutes before grilling to bring to room temperature. Prepare charcoal grill or preheat gas grill to medium-high heat.",
			timeEstimate: "30 min",
			difficulty: "Medium" as const,
			equipment: ["Charcoal or gas grill"],
			tips: "Room temperature fish cooks more evenly. For charcoal, coals are ready when you can hold your hand 6 inches above for 3-4 seconds.",
		},
		{
			step: 6,
			text: "If using banana leaves, quickly pass them over the flame to soften, then use to wrap the fish loosely. This prevents sticking and adds subtle flavor.",
			timeEstimate: "3 min",
			difficulty: "Easy" as const,
			equipment: ["Banana leaves (optional)"],
			tips: "Banana leaves should just wilt and turn bright green. Don't char them. If unavailable, well-oiled foil works as substitute.",
		},
		{
			step: 7,
			text: "Oil the grill grates well to prevent sticking. Place fish on the grill and cook for 8-10 minutes on the first side without moving.",
			timeEstimate: "10 min",
			difficulty: "Medium" as const,
			equipment: ["Oil for grilling", "Tongs"],
			tips: "Resist the urge to flip early! The fish will release naturally when ready. Moving too soon causes sticking and tearing.",
			warning: "Keep a water bottle nearby for flare-ups. The marinade can cause flames.",
		},
		{
			step: 8,
			text: "Carefully flip the fish using two spatulas or tongs. Grill for another 8-10 minutes until the skin is charred and crispy, and fish flakes easily when tested.",
			timeEstimate: "10 min",
			difficulty: "Hard" as const,
			equipment: ["Two spatulas or large fish turner"],
			tips: "Support the fish with one spatula while flipping with the other. The skin should be charred but not black, and the flesh should flake easily.",
			warning: "Be gentle when flipping - whole fish can break apart easily.",
		},
		{
			step: 9,
			text: "Brush fish with any remaining marinade during the last few minutes of cooking for extra flavor and moisture.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Pastry brush"],
			tips: "This adds a final layer of flavor and helps keep the fish moist. Don't brush too early or the sugars will burn.",
		},
		{
			step: 10,
			text: "Remove from grill and let rest for 2-3 minutes. Serve immediately with steamed rice, fresh vegetables, sambal, and lime wedges.",
			timeEstimate: "3 min",
			difficulty: "Easy" as const,
			equipment: ["Serving platter"],
			tips: "The brief rest allows juices to redistribute. Serve immediately while skin is still crispy for best texture contrast.",
		},
	];

	// Cooking FAQ data for AI search optimization
	const cookingFAQ = [
		{
			question: "What's the best type of fish for Ikan Bakar?",
			answer: "Firm, meaty fish work best for grilling. Red snapper, sea bass, mackerel, and pomfret are traditional choices. The fish should be whole and fresh with clear eyes and bright red gills. Avoid delicate fish like sole or flounder as they may fall apart on the grill.",
		},
		{
			question: "Can I make this without a grill?",
			answer: "Yes! You can use a grill pan on the stovetop, or even broil in the oven. For oven method, broil on high for 6-8 minutes per side, watching carefully to prevent burning. The flavor won't be as smoky, but still delicious.",
		},
		{
			question:
				"How do I prevent the fish from sticking to the grill?",
			answer: "Oil the grates well before heating, make sure they're clean, and don't flip the fish too early. The fish will naturally release when it's ready. Banana leaves or well-oiled foil also help prevent sticking while adding flavor.",
		},
		{
			question: "What if I can't find banana leaves?",
			answer: "Banana leaves are traditional but not essential. You can wrap the fish in well-oiled aluminum foil, or grill directly on well-oiled grates. Some Asian grocery stores sell frozen banana leaves, or you can grill without any wrapping if you're careful about sticking.",
		},
	];

	// Internal linking data for SEO optimization
	const relatedProducts = [
		{
			name: "Sambal Bali - Aromatic & Spicy",
			url: "/sambal-bali-aromatic-spicy",
			description:
				"Perfect for this recipe - the aromatic spices complement the grilled fish beautifully",
			rating: 4.9,
			price: "£7.49",
			badge: "Ideal for Fish",
		},
		{
			name: "Sambal Oelek - Pure Heat",
			url: "/sambal-oelek-uk",
			description:
				"Fresh, chunky sambal that pairs perfectly with grilled seafood",
			rating: 4.8,
			price: "£7.49",
			badge: "Fresh Accompaniment",
		},
	];

	const relatedRecipes = [
		{
			name: "Lalapan (Fresh Raw Vegetables)",
			url: "/recipes/lalapan",
			description:
				"Traditional fresh vegetables that perfectly accompany grilled fish",
			difficulty: "Easy" as const,
			cookTime: "10 minutes",
		},
		{
			name: "Sambal Fried Rice",
			url: "/recipes/sambal-fried-rice",
			description:
				"Perfect side dish to serve alongside your grilled fish",
			difficulty: "Easy" as const,
			cookTime: "20 minutes",
		},
	];

	const relatedArticles = [
		{
			title: "Indonesian Seafood Culture: From Coast to Kitchen",
			url: "/blog/indonesian-seafood-culture",
			excerpt: "Explore Indonesia's rich maritime culinary traditions and how fresh seafood shapes the cuisine",
			readTime: "8 min",
			category: "Culture & Food",
		},
		{
			title: "Grilling Techniques from Indonesian Masters",
			url: "/blog/indonesian-grilling-techniques",
			excerpt: "Learn traditional Indonesian grilling methods that create perfect charred flavors",
			readTime: "10 min",
			category: "Cooking Techniques",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			<RecipeSchema recipe={recipe} />
			<BreadcrumbSchema items={breadcrumbItems} />
			<HowToSchema
				name='How to Make Ikan Bakar (Indonesian Grilled Fish)'
				description='Master authentic Indonesian Ikan Bakar with aromatic marinades, proper grilling technique, and traditional sambal accompaniments.'
				steps={howToSteps}
				totalTime='PT40M'
				prepTime='PT20M'
				cookTime='PT20M'
				yield='4 servings'
				category='Indonesian Seafood'
			/>
			<FAQSchema
				faqs={cookingFAQ}
				pageTitle='Ikan Bakar Cooking - Frequently Asked Questions'
			/>

			<div className='container mx-auto px-4 py-8 pb-16'>

				<RecipeCard recipe={recipe} />

				{/* Enhanced Interactive Recipe Instructions */}
				<div className='max-w-4xl mx-auto mt-8'>
					<EnhancedRecipeInstructions
						title='Interactive Cooking Guide'
						description='Master Indonesian grilling techniques with step-by-step guidance for perfect charred fish'
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
							Indonesia's Grilled Fish Tradition
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								Ikan Bakar represents one of Indonesia's
								most beloved cooking methods, found from
								the beaches of Bali to the streets of
								Jakarta. This isn't just grilled fish -
								it's a celebration of Indonesia's
								maritime heritage, where fresh catch
								meets ancient spice knowledge passed
								down through generations of coastal
								communities.
							</p>
							<p>
								The magic lies in the marinade: a
								complex blend of aromatics that
								penetrates the fish, creating layers of
								flavor that complement rather than mask
								the natural seafood taste. When grilled
								over charcoal, the sugars in the
								marinade caramelize, creating a
								beautiful char while the fish stays
								moist and flaky inside.
							</p>
						</div>
					</section>

					{/* Regional Variations */}
					<section className='bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Regional Indonesian Styles
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Javanese Style
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• Sweet soy sauce (kecap
										manis) for caramelization
									</li>
									<li>
										• Palm sugar adds subtle
										sweetness
									</li>
									<li>
										• Served with lalapan (fresh
										vegetables)
									</li>
									<li>
										• Accompanied by sambal terasi
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Balinese Style (Jimbaran)
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>
										• Extra lemongrass and kaffir
										lime leaves
									</li>
									<li>
										• Served on beach with tables
										in the sand
									</li>
									<li>
										• Accompanied by plecing
										kangkung (spicy water spinach)
									</li>
									<li>
										• Fresh sambal matah (raw
										shallot sambal)
									</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Health Benefits */}
					<section className='bg-white rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Health Benefits of Ikan Bakar
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>High-Quality Protein:</strong>{" "}
								Fresh fish provides complete proteins
								essential for muscle development and
								repair. Grilling preserves these
								proteins while adding minimal fat
								compared to frying methods.
							</p>
							<p>
								<strong>Omega-3 Fatty Acids:</strong>{" "}
								Especially in oily fish like mackerel,
								these essential fats support heart
								health and brain function. The
								Indonesian preparation method preserves
								these beneficial oils.
							</p>
							<p>
								<strong>Antioxidant Spices:</strong> The
								marinade is packed with
								anti-inflammatory compounds from
								turmeric, ginger, galangal, and fresh
								herbs. These spices not only add flavor
								but provide health benefits.
							</p>
							<p>
								<strong>Low Carb, High Flavor:</strong>{" "}
								This dish is naturally low in
								carbohydrates while being incredibly
								satisfying and flavorful, making it
								perfect for various dietary approaches.
							</p>
						</div>
					</section>

					{/* Serving Suggestions */}
					<section className='bg-gradient-to-br from-gold-50 to-cream-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Traditional Indonesian Serving
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>
									The Complete Experience:
								</strong>{" "}
								Ikan Bakar is traditionally served on a
								banana leaf with steamed white rice,
								fresh cucumber slices, tomato wedges,
								and lettuce. The contrast of hot, spicy
								fish with cool, crisp vegetables is
								essential to the experience.
							</p>
							<p>
								<strong>Sambal Selection:</strong>{" "}
								Different regions prefer different
								sambals. Sambal bali complements the
								grilled flavors with its aromatic spice
								blend, while fresh sambal oelek provides
								clean heat that doesn't compete with the
								fish's natural flavors.
							</p>
							<p>
								<strong>Eating Style:</strong>{" "}
								Indonesians typically eat with their
								hands, using the fresh vegetables and
								rice to balance each bite of spicy fish.
								The lime is essential - squeeze it over
								everything for brightness that cuts
								through the rich, smoky flavors.
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
