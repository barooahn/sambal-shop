import { Metadata } from "next";
import RecipeCard from "@/components/recipes/RecipeCard";
import RecipeSchema from "@/components/seo/RecipeSchema";
import HowToSchema from "@/components/seo/HowToSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import EnhancedRecipeInstructions from "@/components/recipes/EnhancedRecipeInstructions";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import InternalLinkingOptimization from "@/components/seo/InternalLinkingOptimization";

export const metadata: Metadata = {
	title: "Ayam Penyet Recipe | Indonesian Smashed Fried Chicken",
	description:
		"Authentic Indonesian Ayam Penyet recipe - crispy fried chicken smashed and served with raw sambal oelek. Traditional East Javanese dish with explosive flavor combinations.",
	keywords:
		"ayam penyet recipe, Indonesian fried chicken, smashed chicken recipe, East Java cuisine, sambal oelek recipe, authentic Indonesian cooking, spicy chicken UK, Chef Yossie recipe",
	openGraph: {
		title: "Ayam Penyet Recipe - Indonesian Smashed Fried Chicken",
		description:
			"Learn to make authentic Indonesian Ayam Penyet - crispy fried chicken literally smashed and served with fresh sambal. Traditional East Javanese street food favorite.",
		images: ["/images/ayam-penyet.webp"],
		type: "article",
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/recipes/ayam-penyet"
	}
};

const recipe = {
	name: "Ayam Penyet (Indonesian Smashed Fried Chicken)",
	description:
		"The legendary Indonesian fried chicken dish where crispy chicken is literally 'smashed' with a wooden pestle and served with fresh, fiery sambal oelek. This East Javanese street food favorite delivers an explosive combination of textures and heat.",
	image: "/images/ayam-penyet.webp",
	prepTime: "PT30M",
	cookTime: "PT25M",
	totalTime: "PT55M",
	servings: 4,
	difficulty: "Medium" as const,
	cuisine: "Indonesian",
	category: "Main Course",
	keywords: [
		"ayam penyet",
		"Indonesian fried chicken",
		"smashed chicken",
		"East Java cuisine",
		"sambal oelek",
		"street food",
		"authentic Indonesian",
	],
	author: {
		name: "Chef Yossie",
		type: "Person" as const,
	},
	datePublished: "2024-02-15",

	ingredients: [
		"1 whole chicken (1.5kg), cut into 8 pieces",
		"3 tablespoons Spice Island Sambal Oelek",
		"2 tablespoons tamarind paste or 1 tablespoon tamarind concentrate",
		"4 cloves garlic, minced",
		"2 shallots, finely chopped", 
		"2cm piece fresh ginger, grated",
		"1 teaspoon ground coriander",
		"1 teaspoon ground cumin",
		"1 teaspoon turmeric powder",
		"2 tablespoons sweet soy sauce (kecap manis)",
		"1 tablespoon light soy sauce",
		"1 teaspoon salt",
		"1/2 teaspoon white pepper",
		"500ml coconut oil for deep frying",
		"2 tablespoons vegetable oil for marinade",
		
		// For serving
		"Steamed white rice",
		"Fresh cucumber slices",
		"Fresh cabbage leaves",
		"Cherry tomatoes",
		"Extra sambal oelek for serving",
		"Lime wedges",
		"Keropok (Indonesian crackers)",
	],

	instructions: [
		{
			step: 1,
			text: "Clean chicken pieces and pat dry with paper towels. Make shallow cuts in the thickest parts to help marinade penetrate and ensure even cooking.",
		},
		{
			step: 2,
			text: "In a large bowl, combine minced garlic, chopped shallots, grated ginger, ground coriander, cumin, turmeric, sweet soy sauce, light soy sauce, salt, and white pepper. Mix well to form a paste.",
		},
		{
			step: 3,
			text: "Add tamarind paste and vegetable oil to the spice paste. Mix thoroughly until you have a smooth, aromatic marinade.",
		},
		{
			step: 4,
			text: "Coat chicken pieces thoroughly with the marinade, making sure to work it into the cuts. Cover and refrigerate for at least 2 hours, preferably 4 hours or overnight.",
		},
		{
			step: 5,
			text: "Remove chicken from refrigerator 30 minutes before cooking to bring to room temperature. This ensures even cooking.",
		},
		{
			step: 6,
			text: "Heat coconut oil in a large, heavy-bottomed pot or deep fryer to 170°C (340°F). The oil should be deep enough to submerge the chicken pieces.",
		},
		{
			step: 7,
			text: "Carefully lower chicken pieces into the hot oil, a few at a time to avoid overcrowding. Fry for 12-15 minutes until golden brown and cooked through.",
		},
		{
			step: 8,
			text: "Remove chicken and drain on paper towels for 2-3 minutes. The internal temperature should reach 75°C (165°F).",
		},
		{
			step: 9,
			text: "Place each piece of fried chicken on a wooden cutting board. Using a wooden pestle or meat mallet, gently 'smash' each piece to flatten and crack the crispy skin. Don't pulverize - just break the surface.",
		},
		{
			step: 10,
			text: "Arrange smashed chicken on serving plates with steamed rice. Serve immediately with fresh vegetables, sambal oelek, and lime wedges on the side.",
		},
	],

	nutrition: {
		calories: 485,
		protein: "42g",
		carbohydrates: "8g",
		fat: "28g",
		fiber: "2g",
		sodium: "1150mg",
	},

	tips: [
		"The 'smashing' should crack the crispy skin without destroying the chicken - it's about texture, not pulverizing",
		"Use a wooden pestle (cobek) if available for authentic technique, or a meat mallet works well",
		"Marinate longer for deeper flavor - overnight marination gives the best results",
		"Keep oil temperature steady at 170°C for perfect crispy skin without burning",
		"Serve immediately after smashing - the contrast of hot chicken and cool raw vegetables is essential",
		"The sambal should be fresh and chunky, not smooth - this adds textural contrast",
	],

	// Enhanced schema properties
	cuisineType: "Indonesian" as const,
	cookingMethods: [
		{
			name: "Marinating",
			description: "Long marination develops deep flavors in the chicken",
		},
		{
			name: "Deep frying",
			description: "Creates the essential crispy exterior that contrasts with tender meat",
		},
		{
			name: "Smashing technique",
			description: "Traditional method that breaks the crispy skin for texture contrast",
		},
	],
	equipment: [
		{
			name: "Large heavy-bottomed pot or deep fryer",
			description: "Essential for maintaining steady oil temperature during frying",
			required: true,
		},
		{
			name: "Wooden pestle (cobek) or meat mallet",
			description: "Traditional tool for the characteristic 'smashing' technique",
			required: true,
		},
		{
			name: "Cooking thermometer",
			description: "To monitor oil temperature and ensure chicken is fully cooked",
			required: true,
		},
		{
			name: "Large mixing bowl",
			description: "For marinating the chicken pieces",
			required: true,
		},
	],
	skillLevel: "Intermediate" as const,
	spiceLevel: "Hot" as const,
	dietaryRestrictions: ["GlutenFree"],
	culturalOrigin: "East Java Traditional Street Food - Originated in Surabaya and surrounding areas",

	variations: [
		"Ayam Penyet Lombok: Add extra bird's eye chilies to the marinade for more heat",
		"Ayam Penyet Bali: Use sambal bali instead of sambal oelek for aromatic spice blend",
		"Ayam Penyet Pedas: Double the sambal and add fresh sliced chilies",
		"Ayam Penyet Tamarind: Increase tamarind for more tangy flavor profile",
	],
};

export default function AyamPenyetPage() {
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
			name: "Ayam Penyet",
			url: "https://spiceislandindonesia.com/recipes/ayam-penyet",
			position: 3,
		},
	];

	// How-to steps for AI search optimization
	const howToSteps = [
		{
			name: "Prepare and marinate chicken",
			text: "Clean chicken, make shallow cuts, and marinate with aromatic spice paste for at least 2 hours or overnight for best flavor.",
		},
		{
			name: "Heat oil for frying",
			text: "Heat coconut oil to 170°C (340°F) in large pot. Oil should be deep enough to submerge chicken pieces completely.",
		},
		{
			name: "Fry until golden",
			text: "Fry marinated chicken pieces for 12-15 minutes until golden brown and cooked through. Don't overcrowd the pot.",
		},
		{
			name: "Drain and rest",
			text: "Remove chicken and drain on paper towels for 2-3 minutes. Check internal temperature reaches 75°C (165°F).",
		},
		{
			name: "Smash the chicken",
			text: "Using wooden pestle or meat mallet, gently smash each piece to crack the crispy skin. Don't pulverize - just break surface.",
		},
		{
			name: "Serve immediately",
			text: "Serve hot smashed chicken with steamed rice, fresh vegetables, sambal oelek, and lime wedges on the side.",
		},
	];

	// Enhanced instructions with visual indicators
	const enhancedInstructions = [
		{
			step: 1,
			text: "Clean chicken pieces and pat dry with paper towels. Make shallow cuts in the thickest parts to help marinade penetrate and ensure even cooking.",
			timeEstimate: "10 min",
			difficulty: "Easy" as const,
			equipment: ["Sharp knife", "Paper towels", "Cutting board"],
			tips: "Pat chicken completely dry - any moisture will cause oil to splatter dangerously during frying.",
		},
		{
			step: 2,
			text: "In a large bowl, combine minced garlic, chopped shallots, grated ginger, ground coriander, cumin, turmeric, sweet soy sauce, light soy sauce, salt, and white pepper. Mix well to form a paste.",
			timeEstimate: "8 min",
			difficulty: "Easy" as const,
			equipment: ["Large mixing bowl", "Wooden spoon"],
			tips: "Pound the garlic, shallots, and ginger in a mortar and pestle first for more intense flavor if you have time.",
		},
		{
			step: 3,
			text: "Add tamarind paste and vegetable oil to the spice paste. Mix thoroughly until you have a smooth, aromatic marinade.",
			timeEstimate: "2 min",
			difficulty: "Easy" as const,
			equipment: ["Wooden spoon"],
			tips: "The marinade should be thick but spreadable. Add a little more oil if it's too thick.",
		},
		{
			step: 4,
			text: "Coat chicken pieces thoroughly with the marinade, making sure to work it into the cuts. Cover and refrigerate for at least 2 hours, preferably 4 hours or overnight.",
			timeEstimate: "5 min + marinating",
			difficulty: "Easy" as const,
			equipment: ["Plastic wrap or covered bowl"],
			tips: "Massage the marinade into every crevice. The longer you marinate, the more flavorful the chicken will be.",
		},
		{
			step: 5,
			text: "Remove chicken from refrigerator 30 minutes before cooking to bring to room temperature. This ensures even cooking.",
			timeEstimate: "30 min",
			difficulty: "Easy" as const,
			equipment: [],
			tips: "Cold chicken will drop the oil temperature too much and result in greasy, unevenly cooked chicken.",
		},
		{
			step: 6,
			text: "Heat coconut oil in a large, heavy-bottomed pot or deep fryer to 170°C (340°F). The oil should be deep enough to submerge the chicken pieces.",
			timeEstimate: "10 min",
			difficulty: "Medium" as const,
			equipment: ["Heavy-bottomed pot", "Cooking thermometer"],
			tips: "Use enough oil so temperature doesn't drop too much when chicken is added. Test with a small piece of marinade - it should sizzle immediately.",
			warning: "Hot oil is dangerous. Never leave unattended and have a lid nearby to smother any flames.",
		},
		{
			step: 7,
			text: "Carefully lower chicken pieces into the hot oil, a few at a time to avoid overcrowding. Fry for 12-15 minutes until golden brown and cooked through.",
			timeEstimate: "15 min",
			difficulty: "Medium" as const,
			equipment: ["Slotted spoon", "Spider strainer"],
			tips: "The chicken will bubble vigorously at first - this is normal. Adjust heat to maintain 170°C temperature.",
			warning: "Lower chicken away from you to avoid splashing. Don't overcrowd or temperature will drop.",
		},
		{
			step: 8,
			text: "Remove chicken and drain on paper towels for 2-3 minutes. The internal temperature should reach 75°C (165°F).",
			timeEstimate: "3 min",
			difficulty: "Easy" as const,
			equipment: ["Paper towels", "Meat thermometer"],
			tips: "Check the thickest part of the thigh for doneness. Juices should run clear, not pink.",
		},
		{
			step: 9,
			text: "Place each piece of fried chicken on a wooden cutting board. Using a wooden pestle or meat mallet, gently 'smash' each piece to flatten and crack the crispy skin. Don't pulverize - just break the surface.",
			timeEstimate: "5 min",
			difficulty: "Medium" as const,
			equipment: ["Wooden cutting board", "Wooden pestle or meat mallet"],
			tips: "This is the signature move! Hit firmly but controlled - you want to crack the skin, not destroy the chicken. It should sound satisfying.",
			warning: "Don't hit too hard or you'll make a mess. The goal is controlled cracking, not destruction.",
		},
		{
			step: 10,
			text: "Arrange smashed chicken on serving plates with steamed rice. Serve immediately with fresh vegetables, sambal oelek, and lime wedges on the side.",
			timeEstimate: "3 min",
			difficulty: "Easy" as const,
			equipment: ["Serving plates", "Small bowls"],
			tips: "Serve immediately while hot. The contrast of hot crispy chicken with cool raw vegetables and fiery sambal is what makes this dish special.",
		},
	];

	// Cooking FAQ data for AI search optimization
	const cookingFAQ = [
		{
			question: "What does 'penyet' mean and why do you smash the chicken?",
			answer: "Penyet means 'smashed' or 'pressed' in Indonesian. The smashing technique serves multiple purposes: it breaks the crispy skin for better sauce penetration, flattens the chicken so it's easier to eat, and creates textural contrast. It's also part of the theatrical presentation that makes this street food so popular.",
		},
		{
			question: "Can I use a different type of oil for frying?",
			answer: "Coconut oil is traditional and adds subtle flavor, but you can use vegetable oil, peanut oil, or any neutral frying oil with a high smoke point. Avoid olive oil as it has a low smoke point and will burn at frying temperatures.",
		},
		{
			question: "How do I know when the oil is the right temperature?",
			answer: "Use a cooking thermometer for accuracy - 170°C (340°F) is ideal. If you don't have one, drop a small piece of the marinade into the oil. It should sizzle immediately and rise to the surface. If it doesn't sizzle, the oil isn't hot enough. If it splatters violently, it's too hot.",
		},
		{
			question: "What if I don't have a wooden pestle for smashing?",
			answer: "A meat mallet works well, or even the bottom of a heavy pan. The key is controlled pressure - you want to crack and flatten, not pulverize. Some restaurants use a large wooden spoon. The important thing is the technique, not the specific tool.",
		},
	];

	// Internal linking data for SEO optimization
	const relatedProducts = [
		{
			name: "Sambal Oelek - Pure Heat",
			url: "/sambal-oelek-uk",
			description: "THE essential accompaniment for Ayam Penyet - raw, chunky sambal provides the perfect heat contrast",
			rating: 4.9,
			price: "£7.49",
			badge: "Essential for Ayam Penyet",
		},
		{
			name: "Sambal Bali - Aromatic & Spicy",
			url: "/sambal-bali-aromatic-spicy",
			description: "For a more complex flavor - the aromatic spices complement the fried chicken beautifully",
			rating: 4.8,
			price: "£7.49",
			badge: "Aromatic Alternative",
		},
	];

	const relatedRecipes = [
		{
			name: "Lalapan (Fresh Raw Vegetables)",
			url: "/recipes/lalapan",
			description: "The traditional vegetable accompaniment served with Ayam Penyet",
			difficulty: "Easy" as const,
			cookTime: "10 minutes",
		},
		{
			name: "Sambal Fried Rice",
			url: "/recipes/sambal-fried-rice",
			description: "Perfect side dish or use leftover chicken in this Indonesian classic",
			difficulty: "Easy" as const,
			cookTime: "20 minutes",
		},
	];

	const relatedArticles = [
		{
			title: "The Ultimate Guide to Indonesian Sambal",
			url: "/blog/ultimate-guide-indonesian-sambal",
			excerpt: "Learn about different types of sambal and how they transform Indonesian street food",
			readTime: "12 min",
			category: "Cooking Guide",
		},
		{
			title: "Indonesian Street Food Culture: From Warungs to Your Kitchen",
			url: "/blog/indonesian-ingredients-uk-shopping-guide",
			excerpt: "Discover the vibrant world of Indonesian street food and how to recreate it at home",
			readTime: "10 min",
			category: "Culture & Food",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			<RecipeSchema recipe={recipe} />
			<BreadcrumbSchema items={breadcrumbItems} />
			<HowToSchema
				name='How to Make Ayam Penyet (Indonesian Smashed Fried Chicken)'
				description='Learn to make authentic Indonesian Ayam Penyet with crispy fried chicken, traditional smashing technique, and fiery sambal oelek.'
				steps={howToSteps}
				totalTime='PT55M'
				prepTime='PT30M'
				cookTime='PT25M'
				yield='4 servings'
				category='Indonesian Main Course'
			/>
			<FAQSchema
				faqs={cookingFAQ}
				pageTitle='Ayam Penyet Cooking - Frequently Asked Questions'
			/>

			<div className='container mx-auto px-4 py-8 pb-16'>
				{/* Hidden H1 for SEO */}
				<h1 className='sr-only'>Ayam Penyet Recipe | Indonesian Smashed Fried Chicken</h1>

				<RecipeCard recipe={recipe} />

				{/* Enhanced Interactive Recipe Instructions */}
				<div className='max-w-4xl mx-auto mt-8'>
					<EnhancedRecipeInstructions
						title='Interactive Cooking Guide'
						description="Master the authentic smashing technique with step-by-step guidance from Chef Yossie"
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
							The Legend of Ayam Penyet
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								Ayam Penyet is more than just fried chicken - it's a cultural phenomenon that began in the bustling streets of Surabaya, East Java. The dish represents the Indonesian street food philosophy: bold flavors, interactive presentation, and explosive taste combinations that assault your senses in the best possible way.
							</p>
							<p>
								The name literally means "smashed chicken," and the theatrical smashing is part of the experience. Vendors would dramatically pound the crispy chicken with wooden pestles, creating a satisfying sound that drew customers from blocks away. This technique serves a culinary purpose too - breaking the crispy skin allows the fiery sambal to penetrate the meat, creating the perfect marriage of textures and heat.
							</p>
						</div>
					</section>

					{/* The Smashing Technique */}
					<section className='bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Mastering the Smashing Technique
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Traditional Method
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>• Use a wooden pestle (cobek) or wooden mallet</li>
									<li>• Place chicken on a sturdy wooden cutting board</li>
									<li>• Hit with controlled force - firm but not violent</li>
									<li>• Aim to crack skin and flatten slightly</li>
									<li>• Listen for the satisfying crack sound</li>
								</ul>
							</div>
							<div>
								<h3 className='text-lg font-semibold text-burgundy-800 mb-3 font-brand'>
									Purpose & Results
								</h3>
								<ul className='space-y-2 text-gray-700 font-body'>
									<li>• Breaks crispy skin for sauce penetration</li>
									<li>• Flattens chicken for easier eating</li>
									<li>• Creates textural contrast between crispy and tender</li>
									<li>• Theatrical presentation builds anticipation</li>
									<li>• Allows sambal to coat the meat directly</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Serving Style */}
					<section className='bg-white rounded-sm shadow-sm border border-gold-200 p-8'>
						<h2 className='text-2xl font-bold text-burgundy-900 mb-4 font-heading'>
							Authentic Indonesian Presentation
						</h2>
						<div className='prose prose-lg max-w-none text-gray-700 font-body'>
							<p>
								<strong>The Complete Ayam Penyet Experience:</strong> Traditional serving includes the smashed chicken alongside steamed white rice, fresh cucumber slices, cabbage leaves, cherry tomatoes, and a generous portion of raw sambal oelek. The contrast is essential - hot crispy chicken, cool fresh vegetables, and fiery sambal create a symphony of temperatures and textures.
							</p>
							<p>
								<strong>Eating Style:</strong> Indonesians typically eat this with their hands (after washing), using the fresh vegetables to cool the palate between bites of the spicy chicken. The lime is squeezed over everything, and extra sambal is added according to individual heat tolerance.
							</p>
							<p>
								<strong>Modern Adaptations:</strong> While traditionally eaten with hands, the dish adapts well to plate presentation for Western dining. The key elements remain the same: the theatrical smashing, the contrast of textures, and the essential role of fresh, chunky sambal oelek.
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}