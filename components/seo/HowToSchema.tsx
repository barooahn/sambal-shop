import { FC } from "react";

interface HowToStep {
	name: string;
	text: string;
	image?: string;
	url?: string;
	duration?: string;
	tip?: string;
}

interface HowToTool {
	name: string;
	description?: string;
	required?: boolean;
}

interface HowToSupply {
	name: string;
	amount?: string;
	description?: string;
}

interface HowToSchemaProps {
	name: string;
	description: string;
	steps: HowToStep[];
	totalTime?: string;
	prepTime?: string;
	cookTime?: string;
	yield?: string;
	category?: string;
	difficulty?: "Beginner" | "Intermediate" | "Advanced";
	tools?: HowToTool[];
	supplies?: HowToSupply[];
}

const HowToSchema: FC<HowToSchemaProps> = ({
	name,
	description,
	steps,
	totalTime,
	prepTime,
	cookTime,
	yield: recipeYield,
	category,
	difficulty,
	tools,
	supplies
}) => {
	// Default tools and supplies if none provided
	const defaultTools = [
		{ name: "Wok or large frying pan", description: "For stir-frying and cooking sambal dishes", required: true },
		{ name: "Wooden spoon or spatula", description: "For stirring without scratching pan", required: true },
		{ name: "Stone mortar and pestle", description: "Traditional tool for authentic sambal grinding", required: false },
		{ name: "Sharp knife", description: "For chopping ingredients", required: true },
		{ name: "Cutting board", description: "For ingredient preparation", required: true }
	];

	const defaultSupplies = [
		{ name: "Sambal (Indonesian chili paste)", amount: "1-2 tablespoons", description: "Primary flavor base" },
		{ name: "Fresh ingredients", description: "As specified in recipe" },
		{ name: "Salt", description: "For seasoning" },
		{ name: "Oil", description: "For cooking" }
	];

	const schemaData = {
		"@context": "https://schema.org",
		"@type": "HowTo",
		"name": name,
		"description": description,
		"totalTime": totalTime,
		"prepTime": prepTime,
		"performTime": cookTime,
		"yield": recipeYield,
		"supply": (supplies || defaultSupplies).map(supply => ({
			"@type": "HowToSupply",
			"name": supply.name,
			"requiredQuantity": supply.amount,
			"description": supply.description
		})),
		"tool": (tools || defaultTools).map(tool => ({
			"@type": "HowToTool",
			"name": tool.name,
			"description": tool.description,
			"requiredQuantity": tool.required ? "1" : undefined
		})),
		"step": steps.map((step, index) => ({
			"@type": "HowToStep",
			"position": index + 1,
			"name": step.name,
			"text": step.text,
			"image": step.image,
			"url": step.url,
			"timeRequired": step.duration,
			"tip": step.tip
		})),
		"author": {
			"@type": "Person",
			"name": "Chef Yossie"
		},
		"publisher": {
			"@type": "Organization",
			"name": "Spice Island Indonesia"
		}
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schemaData, null, 2)
			}}
		/>
	);
};

export default HowToSchema;
