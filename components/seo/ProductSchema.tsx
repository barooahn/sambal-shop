import { FC } from "react";

interface ProductOffer {
	name: string;
	description: string;
	price: string;
	priceCurrency: string;
	availability: string;
	image?: string;
	sku?: string;
	url?: string; // Landing page for the offer (helps Merchant listings)
	priceValidUntil?: string; // ISO date string
	shippingDetails?: any; // OfferShippingDetails | OfferShippingDetails[]
	hasMerchantReturnPolicy?: any; // MerchantReturnPolicy
}

interface ProductReview {
	author: string;
	rating: number;
	reviewBody: string;
	datePublished: string;
}

interface ProductSchemaProps {
	name: string;
	description: string;
	brand: string;
	category: string;
	image: string;
	offers: ProductOffer[];
	aggregateRating: {
		ratingValue: number;
		reviewCount: number;
		bestRating: number;
		worstRating: number;
	};
	reviews?: ProductReview[];
	additionalProperties?: Record<string, any>;
}

const ProductSchema: FC<ProductSchemaProps> = ({
	name,
	description,
	brand,
	category,
	image,
	offers,
	aggregateRating,
	reviews = [],
	additionalProperties = {},
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
		image: image,
		offers: offers.map((offer) => ({
			"@type": "Offer",
			name: offer.name,
			description: offer.description,
			price: offer.price,
			priceCurrency: offer.priceCurrency,
			availability: offer.availability,
			itemCondition: "https://schema.org/NewCondition",
			image: offer.image,
			sku: offer.sku,
			url: offer.url,
			priceValidUntil: offer.priceValidUntil,
			shippingDetails: offer.shippingDetails,
			hasMerchantReturnPolicy: offer.hasMerchantReturnPolicy,

			seller: {
				"@type": "Organization",
				name: brand,
			},
		})),
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: aggregateRating.ratingValue.toString(),
			reviewCount: aggregateRating.reviewCount.toString(),
			bestRating: aggregateRating.bestRating.toString(),
			worstRating: aggregateRating.worstRating.toString(),
		},
		review: reviews.map((review) => ({
			"@type": "Review",
			author: {
				"@type": "Person",
				name: review.author,
			},
			reviewRating: {
				"@type": "Rating",
				ratingValue: review.rating.toString(),
				bestRating: "5",
				worstRating: "1",
			},
			reviewBody: review.reviewBody,
			datePublished: review.datePublished,
		})),
		manufacturer: {
			"@type": "Organization",
			name: brand,
		},
		...additionalProperties,
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

export default ProductSchema;
