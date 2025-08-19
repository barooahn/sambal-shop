import { FC } from "react";

interface SimpleProductSchemaProps {
	name: string;
	description: string;
	brand?: string;
	category?: string;
	image?: string;
	price?: string;
	priceCurrency?: string;
	availability?: string;
	url?: string;
	ratingValue?: number;
	reviewCount?: number;
}

const SimpleProductSchema: FC<SimpleProductSchemaProps> = ({
	name,
	description,
	brand = "Spice Island Indonesia",
	category = "Condiments & Sauces",
	image,
	price = "7.49",
	priceCurrency = "GBP",
	availability = "https://schema.org/InStock",
	url,
	ratingValue = 4.8,
	reviewCount = 50,
}) => {
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: name,
		description: description,
		brand: {
			"@type": "Brand",
			name: brand,
		},
		category: category,
		...(image && { image: image }),
		offers: {
			"@type": "Offer",
			price: price,
			priceCurrency: priceCurrency,
			availability: availability,
			itemCondition: "https://schema.org/NewCondition",
			...(url && { url: url }),
			seller: {
				"@type": "Organization",
				name: brand,
			},
		},
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: ratingValue.toString(),
			reviewCount: reviewCount.toString(),
			bestRating: "5",
			worstRating: "1",
		},
		manufacturer: {
			"@type": "Organization",
			name: brand,
		},
	};

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schemaData, null, 2),
			}}
		/>
	);
};

export default SimpleProductSchema;