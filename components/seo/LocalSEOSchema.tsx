import { FC } from "react";

interface ServiceArea {
	name: string;
	type: "City" | "Region" | "Country";
}

interface LocalSEOSchemaProps {
	businessName: string;
	description: string;
	serviceAreas: ServiceArea[];
	deliveryRadius?: number;
	deliveryUnit?: "km" | "miles";
	specialties: string[];
	languages?: string[];
}

const LocalSEOSchema: FC<LocalSEOSchemaProps> = ({
	businessName,
	description,
	serviceAreas,
	deliveryRadius,
	deliveryUnit = "km",
	specialties,
	languages = ["English"],
}) => {
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"@id": "https://spiceislandindonesia.com/#localbusiness",
		name: businessName,
		description: description,
		url: "https://spiceislandindonesia.com",
		email: "info@spiceislandindonesia.com",
		foundingDate: "2024",
		founder: {
			"@type": "Person",
			name: "Chef Yossie",
			nationality: "Indonesian",
			expertise: "Traditional Indonesian Cuisine",
		},
		areaServed: serviceAreas.map((area) => ({
			"@type": area.type,
			name: area.name,
		})),
		serviceArea: {
			"@type": "GeoCircle",
			geoMidpoint: {
				"@type": "GeoCoordinates",
				latitude: 51.5074,
				longitude: -0.1278,
			},
			geoRadius: deliveryRadius
				? `${deliveryRadius} ${deliveryUnit}`
				: "500 km",
		},
		// makesOffer removed to avoid triggering incomplete Merchant listing items on the homepage
		knowsAbout: specialties,
		knowsLanguage: languages,
		// hasOfferCatalog removed on homepage to avoid creating incomplete Product items
		priceRange: "££",
		servesCuisine: "Indonesian",
		paymentAccepted: "Credit Card, PayPal, Bank Transfer",
		currenciesAccepted: "GBP",
		potentialAction: [
			{
				"@type": "OrderAction",
				target: "https://spiceislandindonesia.com/shop",
				deliveryMethod: "https://schema.org/ParcelService",
			},
			{
				"@type": "SearchAction",
				target: "https://spiceislandindonesia.com/search?q={search_term_string}",
				"query-input": "required name=search_term_string",
			},
		],
		sameAs: [
			"https://www.instagram.com/spiceislandindonesia",
			"https://www.facebook.com/spiceislandindonesia",
		],
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

export default LocalSEOSchema;
