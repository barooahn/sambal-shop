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
	offers?: ProductOffer[];
	aggregateRating?: {
		ratingValue: number;
		reviewCount: number;
		bestRating: number;
		worstRating: number;
	};
	reviews?: ProductReview[];
	additionalProperties?: any;
}

const ProductSchema: FC<ProductSchemaProps> = ({
	name,
	description,
	brand,
	category,
	image,
	offers = [],
	aggregateRating,
	reviews = [],
	additionalProperties,
}) => {
	// Default aggregate rating if none provided
	const defaultAggregateRating = {
		ratingValue: 4.8,
		reviewCount: 50,
		bestRating: 5,
		worstRating: 1,
	};

	// Default offer if none provided
	const defaultOffers = offers.length > 0 ? offers : [
		{
			name: name,
			description: description,
			price: "7.49",
			priceCurrency: "GBP",
			availability: "https://schema.org/InStock",
			url: typeof window !== 'undefined' ? window.location.href : `https://www.spiceislandindonesia.com/${name.toLowerCase().replace(/\s+/g, '-')}`,
			priceValidUntil: "2026-12-31",
		}
	];

	const finalAggregateRating = aggregateRating || defaultAggregateRating;

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
		offers: defaultOffers.map((offer) => ({
			"@type": "Offer",
			name: offer.name,
			description: offer.description,
			price: offer.price,
			priceCurrency: offer.priceCurrency,
			availability: offer.availability,
			itemCondition: "https://schema.org/NewCondition",
			...(offer.image && { image: offer.image }),
			...(offer.sku && { sku: offer.sku }),
			url: offer.url,
			...(offer.priceValidUntil && { priceValidUntil: offer.priceValidUntil }),
			...(offer.shippingDetails && { shippingDetails: offer.shippingDetails }),
			...(offer.hasMerchantReturnPolicy && { hasMerchantReturnPolicy: offer.hasMerchantReturnPolicy }),

			seller: {
				"@type": "Organization",
				name: brand,
			},
		})),
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: finalAggregateRating.ratingValue.toString(),
			reviewCount: finalAggregateRating.reviewCount.toString(),
			bestRating: finalAggregateRating.bestRating.toString(),
			worstRating: finalAggregateRating.worstRating.toString(),
		},
		...(reviews.length > 0 && {
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
			}))
		}),
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

export default ProductSchema;
