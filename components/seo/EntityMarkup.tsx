import { FC } from "react";

interface Entity {
	name: string;
	type: "Ingredient" | "Place" | "Product" | "Organization" | "Person";
	description?: string;
	properties?: Record<string, any>;
}

interface EntityMarkupProps {
	entities: Entity[];
	pageTitle?: string;
}

const EntityMarkup: FC<EntityMarkupProps> = ({ entities, pageTitle }) => {
	const generateEntitySchema = (entity: Entity) => {
		const baseSchema = {
			"@context": "https://schema.org",
			"@type": entity.type === "Ingredient" ? "Thing" : entity.type,
			"name": entity.name,
			"description": entity.description
		};

		// Add specific properties based on entity type
		switch (entity.type) {
			case "Ingredient":
				return {
					...baseSchema,
					"@type": "Thing",
					"additionalType": "https://schema.org/Food",
					"category": "Ingredient",
					...entity.properties
				};
			
			case "Place":
				return {
					...baseSchema,
					"@type": "Place",
					"geo": entity.properties?.coordinates ? {
						"@type": "GeoCoordinates",
						"latitude": entity.properties.coordinates.lat,
						"longitude": entity.properties.coordinates.lng
					} : undefined,
					"containedInPlace": entity.properties?.country ? {
						"@type": "Country",
						"name": entity.properties.country
					} : undefined,
					...entity.properties
				};
			
			case "Product":
				return {
					...baseSchema,
					"@type": "Product",
					"category": entity.properties?.category || "Food",
					"brand": entity.properties?.brand,
					"manufacturer": entity.properties?.manufacturer,
					...entity.properties
				};
			
			case "Organization":
				return {
					...baseSchema,
					"@type": "Organization",
					"url": entity.properties?.url,
					"address": entity.properties?.address,
					...entity.properties
				};
			
			case "Person":
				return {
					...baseSchema,
					"@type": "Person",
					"jobTitle": entity.properties?.jobTitle,
					"worksFor": entity.properties?.worksFor,
					...entity.properties
				};
			
			default:
				return baseSchema;
		}
	};

	const schemaData = {
		"@context": "https://schema.org",
		"@graph": entities.map(generateEntitySchema)
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

export default EntityMarkup;
