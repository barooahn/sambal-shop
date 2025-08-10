import { FC } from "react";

interface VoiceSearchSchemaProps {
	speakableSections: {
		cssSelector: string;
		description: string;
	}[];
	faqQuestions: {
		question: string;
		answer: string;
		voiceOptimized: boolean;
	}[];
}

const VoiceSearchSchema: FC<VoiceSearchSchemaProps> = ({
	speakableSections,
	faqQuestions,
}) => {
	// Speakable Schema for voice assistants
	const speakableSchema = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		speakable: {
			"@type": "SpeakableSpecification",
			cssSelector: speakableSections.map(
				(section) => section.cssSelector
			),
			xpath: speakableSections.map(
				(section) =>
					`//*[contains(@class, '${section.cssSelector.replace(".", "")}')]`
			),
		},
	};

	// HowTo Schema for cooking instructions
	const howToSchema = {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Use Indonesian Sambal in British Cooking",
		description:
			"Learn how to use authentic Indonesian sambal in everyday British dishes for amazing flavor enhancement",
		totalTime: "PT5M",
		supply: [
			{
				"@type": "HowToSupply",
				name: "Indonesian Sambal Oelek",
			},
			{
				"@type": "HowToSupply",
				name: "Your favorite British dish",
			},
		],
		tool: [
			{
				"@type": "HowToTool",
				name: "Teaspoon",
			},
		],
		step: [
			{
				"@type": "HowToStep",
				text: "Start with half a teaspoon of sambal oelek - it's much hotter than Western hot sauces",
				name: "Measure carefully",
				image: "https://spiceislandindonesia.com/images/sambal-measuring.webp",
			},
			{
				"@type": "HowToStep",
				text: "Mix sambal into your dish gradually, tasting as you go",
				name: "Add gradually",
				image: "https://spiceislandindonesia.com/images/sambal-mixing.webp",
			},
			{
				"@type": "HowToStep",
				text: "Let flavors develop for 2-3 minutes before serving",
				name: "Allow flavor development",
				image: "https://spiceislandindonesia.com/images/sambal-finished.webp",
			},
		],
	};

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(speakableSchema, null, 2),
				}}
			/>

			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(howToSchema, null, 2),
				}}
			/>
		</>
	);
};

export default VoiceSearchSchema;
