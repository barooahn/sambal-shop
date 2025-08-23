import { FC } from "react";

interface Author {
	name: string;
	type: "Person" | "Organization";
	url?: string;
	image?: string;
	jobTitle?: string;
	worksFor?: string;
}

interface Publisher {
	name: string;
	type: "Organization";
	logo: {
		url: string;
		width: number;
		height: number;
	};
}

interface ArticleSchemaProps {
	headline: string;
	description: string;
	image: string;
	datePublished: string;
	dateModified?: string;
	author: Author;
	publisher: Publisher;
	url: string;
	wordCount?: number;
	articleSection?: string;
	keywords?: string[];
	mainEntityOfPage?: string;
	inLanguage?: string;
	articleBody?: string;
}

const ArticleSchema: FC<ArticleSchemaProps> = ({
	headline,
	description,
	image,
	datePublished,
	dateModified,
	author,
	publisher,
	url,
	wordCount,
	articleSection = "Food & Cooking",
	keywords = [],
	mainEntityOfPage,
	inLanguage = "en-GB",
	articleBody
}) => {
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "Article",
		"headline": headline,
		"description": description,
		"image": {
			"@type": "ImageObject",
			"url": image,
			"width": 1200,
			"height": 630
		},
		"datePublished": datePublished,
		"dateModified": dateModified || datePublished,
		"author": {
			"@type": author.type,
			"name": author.name,
			...(author.url && { "url": author.url }),
			...(author.image && { "image": author.image }),
			...(author.jobTitle && { "jobTitle": author.jobTitle }),
			...(author.worksFor && { 
				"worksFor": {
					"@type": "Organization",
					"name": author.worksFor
				}
			})
		},
		"publisher": {
			"@type": publisher.type,
			"name": publisher.name,
			"logo": {
				"@type": "ImageObject",
				"url": publisher.logo.url,
				"width": publisher.logo.width,
				"height": publisher.logo.height
			}
		},
		"url": url,
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": mainEntityOfPage || url
		},
		"articleSection": articleSection,
		"inLanguage": inLanguage,
		...(wordCount && { "wordCount": wordCount }),
		...(keywords.length > 0 && { "keywords": keywords.join(", ") }),
		...(articleBody && { "articleBody": articleBody }),
		"about": [
			{
				"@type": "Thing",
				"name": "Indonesian Cuisine",
				"description": "Traditional cooking methods and recipes from Indonesia"
			},
			{
				"@type": "Thing", 
				"name": "Sambal",
				"description": "Traditional Indonesian chili-based condiment"
			},
			{
				"@type": "Thing",
				"name": "Spice Islands",
				"description": "Indonesian archipelago known for spice production"
			}
		],
		"mentions": [
			{
				"@type": "Thing",
				"name": "Sambal Oelek",
				"description": "Traditional Indonesian chili paste"
			},
			{
				"@type": "Thing",
				"name": "Sambal Bali",
				"description": "Aromatic Indonesian chili paste with traditional spices"
			}
		],
		"isPartOf": {
			"@type": "Blog",
			"name": "Spice Island Indonesia Blog",
			"description": "Authentic Indonesian cooking guides and cultural insights"
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

export default ArticleSchema;
