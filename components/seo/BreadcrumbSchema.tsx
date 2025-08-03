import { FC } from "react";

interface BreadcrumbItem {
	name: string;
	url: string;
	position: number;
}

interface BreadcrumbSchemaProps {
	items: BreadcrumbItem[];
}

const BreadcrumbSchema: FC<BreadcrumbSchemaProps> = ({ items }) => {
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": items.map((item) => ({
			"@type": "ListItem",
			"position": item.position,
			"name": item.name,
			"item": {
				"@type": "WebPage",
				"@id": item.url,
				"url": item.url
			}
		}))
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

export default BreadcrumbSchema;
