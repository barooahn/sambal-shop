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
		"@id": `https://www.spiceislandindonesia.com/${businessName.toLowerCase().replace(/\s+/g, "-")}#localbusiness`,
		name: businessName,
		description: description,
		url: "https://www.spiceislandindonesia.com",
		email: "info@spiceislandindonesia.com",
		foundingDate: "2024",
		founder: {
			"@type": "Person",
			name: "Chef Yossie",
			nationality: "Indonesian",
			knowsAbout: "Traditional Indonesian Cuisine",
		},
		address: {
			"@type": "PostalAddress",
			streetAddress: "175 Redgate",
			addressLocality: "Ormskirk",
			postalCode: "L39 3NW",
			addressCountry: "GB"
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 53.562573,
			longitude: -2.890138,
		},
		areaServed: serviceAreas.map((area) => ({
			"@type": area.type,
			name: area.name,
		})),
		serviceArea: {
			"@type": "GeoCircle",
			geoMidpoint: {
				"@type": "GeoCoordinates",
				latitude: 53.562573,
				longitude: -2.890138,
			},
			geoRadius: deliveryRadius
				? `${deliveryRadius} ${deliveryUnit}`
				: "500 km",
		},
		knowsAbout: specialties,
		knowsLanguage: languages,
		priceRange: "££",
		servesCuisine: "Indonesian",
		paymentAccepted: ["Credit Card", "PayPal", "Bank Transfer"],
		currenciesAccepted: "GBP",
		openingHours: ["Mo-Fr 09:00-17:00"],
		potentialAction: [
			{
				"@type": "OrderAction",
				target: "https://www.spiceislandindonesia.com/shop",
				deliveryMethod: "https://schema.org/ParcelService",
			},
			{
				"@type": "SearchAction",
				target: "https://www.spiceislandindonesia.com/search?q={search_term_string}",
				"query-input": "required name=search_term_string",
			},
		],
		sameAs: [
			"https://www.instagram.com/spiceisland_indonesia",
			"https://www.facebook.com/profile.php?id=61579653961037",
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
