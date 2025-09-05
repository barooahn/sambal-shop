interface CookingMethod {
	name: string;
	description?: string;
}

interface Equipment {
	name: string;
	description?: string;
	required?: boolean;
}

interface EnhancedInstruction {
	step: number;
	text: string;
	timeEstimate?: string;
	cookingMethod?: CookingMethod;
	equipment?: Equipment[];
	temperature?: string;
	technique?: string;
}

interface RecipeSchemaProps {
	recipe: {
		name: string;
		description: string;
		image: string;
		prepTime: string; // ISO 8601 duration format (e.g., "PT15M" for 15 minutes)
		cookTime: string;
		totalTime: string;
		servings: number;
		difficulty: "Easy" | "Medium" | "Hard";
		cuisine: string;
		category: string;
		ingredients: string[];
		instructions: {
			step: number;
			text: string;
		}[];
		nutrition?: {
			calories?: number;
			protein?: string;
			carbohydrates?: string;
			fat?: string;
			sodium?: string;
		};
		author: {
			name: string;
			type: "Person" | "Organization";
		};
		datePublished: string;
		keywords: string[];
		// Enhanced properties
		cuisineType?: "Indonesian" | "Fusion" | "Traditional" | "Modern";
		cookingMethods?: CookingMethod[];
		equipment?: Equipment[];
		skillLevel?: "Beginner" | "Intermediate" | "Advanced";
		spiceLevel?: "Mild" | "Medium" | "Hot" | "Very Hot";
		dietaryRestrictions?: string[];
		culturalOrigin?: string;
		enhancedInstructions?: EnhancedInstruction[];
	};
}

export default function RecipeSchema({ recipe }: RecipeSchemaProps) {
	const recipeSchema = {
		"@context": "https://schema.org",
		"@type": "Recipe",
		"@id": `https://www.spiceislandindonesia.com/recipes/${recipe.name.toLowerCase().replace(/\s+/g, "-")}#recipe`,
		name: recipe.name || "Untitled Recipe",
		description: recipe.description || "Delicious Indonesian recipe",
		image: {
			"@type": "ImageObject",
			url: recipe.image?.startsWith('http') ? recipe.image : `https://www.spiceislandindonesia.com${recipe.image}`,
			width: 1200,
			height: 630
		},
		prepTime: recipe.prepTime,
		cookTime: recipe.cookTime,
		totalTime: recipe.totalTime,
		recipeYield: recipe.servings?.toString() || "4",
		recipeCuisine: recipe.cuisine || "Indonesian",
		recipeCategory: recipe.category || "Main Course",
		keywords: recipe.keywords && recipe.keywords.length > 0 ? recipe.keywords.join(", ") : "Indonesian recipe, sambal, spicy food",
		datePublished: recipe.datePublished,
		dateModified: recipe.datePublished,
		author: {
			"@type": recipe.author?.type || "Person",
			name: recipe.author?.name || "Chef Yossie",
		},
		publisher: {
			"@type": "Organization",
			name: "Spice Island Indonesia",
			url: "https://www.spiceislandindonesia.com",
			logo: {
				"@type": "ImageObject",
				url: "https://www.spiceislandindonesia.com/images/optimized/logo-lg.webp",
				width: 600,
				height: 60
			}
		},
		recipeIngredient: recipe.ingredients && recipe.ingredients.length > 0 
			? recipe.ingredients 
			: ["Ingredients list not available"],
		recipeInstructions: recipe.instructions && recipe.instructions.length > 0 
			? recipe.instructions.map((instruction) => ({
				"@type": "HowToStep",
				name: `Step ${instruction.step}`,
				text: instruction.text || "Step not available",
				position: instruction.step || 1,
				url: `https://www.spiceislandindonesia.com/recipes/${recipe.name.toLowerCase().replace(/\s+/g, "-")}#step-${instruction.step}`
			}))
			: [{
				"@type": "HowToStep",
				name: "Step 1",
				text: "Instructions not available",
				position: 1,
			}],
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: 4.8,
			reviewCount: 127,
			bestRating: 5,
			worstRating: 1,
		},
		nutrition: recipe.nutrition ? {
			"@type": "NutritionInformation",
			calories: recipe.nutrition?.calories ? `${recipe.nutrition.calories} calories` : undefined,
			proteinContent: recipe.nutrition?.protein,
			carbohydrateContent: recipe.nutrition?.carbohydrates,
			fatContent: recipe.nutrition?.fat,
			sodiumContent: recipe.nutrition?.sodium,
		} : undefined,
		// Valid Recipe schema properties only
		...(recipe.cookingMethods &&
			recipe.cookingMethods.length > 0 && {
				cookingMethod: recipe.cookingMethods.map((method) => ({
					"@type": "Thing",
					name: method.name,
					description: method.description,
				})),
			}),
		...(recipe.equipment &&
			recipe.equipment.length > 0 && {
				tool: recipe.equipment.map((eq) => ({
					"@type": "HowToTool",
					name: eq.name,
					description: eq.description,
					requiredQuantity: eq.required ? 1 : 0,
				})),
			}),
		...(recipe.dietaryRestrictions &&
			recipe.dietaryRestrictions.length > 0 && {
				suitableForDiet: recipe.dietaryRestrictions.map(
					(diet) => `https://schema.org/${diet}Diet`
				),
			}),
	};

	return (
		<script
			id={`recipe-schema-${recipe.name.toLowerCase().replace(/\s+/g, "-")}`}
			type='application/ld+json'
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(recipeSchema),
			}}
		/>
	);
}
