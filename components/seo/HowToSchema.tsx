import { FC } from "react";

interface HowToStep {
	name: string;
	text: string;
	image?: string;
	url?: string;
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
}

const HowToSchema: FC<HowToSchemaProps> = ({
	name,
	description,
	steps,
	totalTime,
	prepTime,
	cookTime,
	yield: recipeYield,
	category
}) => {
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "HowTo",
		"name": name,
		"description": description,
		"totalTime": totalTime,
		"prepTime": prepTime,
		"performTime": cookTime,
		"yield": recipeYield,
		"category": category,
		"supply": [
			{
				"@type": "HowToSupply",
				"name": "Sambal (Indonesian chili paste)"
			},
			{
				"@type": "HowToSupply", 
				"name": "Basic cooking ingredients"
			}
		],
		"tool": [
			{
				"@type": "HowToTool",
				"name": "Wok or large frying pan"
			},
			{
				"@type": "HowToTool",
				"name": "Wooden spoon or spatula"
			}
		],
		"step": steps.map((step, index) => ({
			"@type": "HowToStep",
			"position": index + 1,
			"name": step.name,
			"text": step.text,
			"image": step.image,
			"url": step.url
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
