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
		name: recipe.name,
		description: recipe.description,
		image: recipe.image,
		prepTime: recipe.prepTime,
		cookTime: recipe.cookTime,
		totalTime: recipe.totalTime,
		recipeYield: recipe.servings,
		recipeCuisine: recipe.cuisine,
		recipeCategory: recipe.category,
		keywords: recipe.keywords.join(", "),
		datePublished: recipe.datePublished,
		author: {
			"@type": recipe.author.type,
			name: recipe.author.name,
		},
		recipeIngredient: recipe.ingredients,
		recipeInstructions: recipe.instructions.map((instruction) => ({
			"@type": "HowToStep",
			text: instruction.text,
			position: instruction.step,
		})),
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			reviewCount: "127",
			bestRating: "5",
			worstRating: "1",
		},
		nutrition: recipe.nutrition
			? {
					"@type": "NutritionInformation",
					calories: recipe.nutrition.calories,
					proteinContent: recipe.nutrition.protein,
					carbohydrateContent: recipe.nutrition.carbohydrates,
					fatContent: recipe.nutrition.fat,
					sodiumContent: recipe.nutrition.sodium,
				}
			: undefined,
		video: {
			"@type": "VideoObject",
			name: `How to Make ${recipe.name}`,
			description: `Step-by-step video guide for making ${recipe.name}`,
			thumbnailUrl: recipe.image,
			uploadDate: recipe.datePublished,
		},
		// Enhanced schema properties
		...(recipe.cuisineType && {
			cuisineType: recipe.cuisineType,
			culturalContext:
				recipe.culturalOrigin || "Indonesian Traditional Cuisine",
		}),
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
		...(recipe.skillLevel && {
			skillLevel: recipe.skillLevel,
			difficulty: recipe.difficulty,
		}),
		...(recipe.spiceLevel && {
			spiceLevel: recipe.spiceLevel,
			additionalProperty: {
				"@type": "PropertyValue",
				name: "Heat Level",
				value: recipe.spiceLevel,
			},
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
