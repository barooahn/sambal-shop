interface StructuredDataProps {
	type?: "organization" | "product" | "faq" | "reviews" | "localbusiness";
}

export default function StructuredData({
	type = "organization",
}: StructuredDataProps) {
	const organizationData = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": "https://www.spiceislandindonesia.com/#organization",
		name: "Spice Island Indonesia",
		url: "https://www.spiceislandindonesia.com",
		logo: {
			"@type": "ImageObject",
			url: "https://www.spiceislandindonesia.com/images/optimized/logo-lg.webp",
			width: 600,
			height: 60
		},
		description:
			"UK's premier authentic sambal UK supplier. Traditional Indonesian chili paste crafted as artisanal hot sauce from the original Spice Islands, delivered nationwide",
		address: {
			"@type": "PostalAddress",
			streetAddress: "175 Redgate",
			addressLocality: "Ormskirk",
			postalCode: "L39 3NW",
			addressCountry: "GB",
		},
		foundingDate: "2024",
		founder: {
			"@type": "Person",
			name: "Chef Yossie",
			nationality: "Indonesian"
		},
		sameAs: [
			"https://www.instagram.com/spiceisland_indonesia",
			"https://www.facebook.com/spiceislandindonesia",
		],
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "customer service",
			availableLanguage: ["English", "Indonesian"],
			email: "info@spiceislandindonesia.com"
		},
	};

	const productData = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: "Authentic Sambal UK - Indonesian Chili Paste Collection",
		description:
			"Handcrafted authentic sambal UK - premium Indonesian chili paste as artisanal hot sauce from traditional Spice Islands recipes",
		brand: {
			"@type": "Brand",
			name: "Spice Island Indonesia",
		},
		image: [
			"https://www.spiceislandindonesia.com/images/sambal-oelek-lg.webp",
			"https://www.spiceislandindonesia.com/images/sambal-bali.webp",
			"https://www.spiceislandindonesia.com/images/Spice Island Indonesia Complete Packaging System Mockup.webp",
		],
		// Basic shipping and return policy info to improve Merchant eligibility
		shippingDetails: [
			{
				"@type": "OfferShippingDetails",
				shippingRate: {
					"@type": "MonetaryAmount",
					value: 3.45,
					currency: "GBP",
				},
				shippingDestination: {
					"@type": "DefinedRegion",
					addressCountry: "GB",
				},
				shippingLabel: "Royal Mail Tracked 48",
			},
			{
				"@type": "OfferShippingDetails",
				shippingRate: {
					"@type": "MonetaryAmount",
					value: 0,
					currency: "GBP",
				},
				shippingDestination: {
					"@type": "DefinedRegion",
					addressCountry: "GB",
				},
				shippingLabel: "Free Delivery on orders over £20",
			},
		],
		hasMerchantReturnPolicy: {
			"@type": "MerchantReturnPolicy",
			applicableCountry: "GB",
			returnPolicyCategory:
				"https://schema.org/MerchantReturnFiniteReturnWindow",
			merchantReturnDays: 30,
			returnMethod: "https://schema.org/ReturnByMail",
			returnFees: "https://schema.org/ReturnShippingFees",
		},

		offers: [
			{
				"@type": "Offer",
				name: "Authentic Sambal UK - Sambal Oelek Indonesian Chili Paste",
				description:
					"Pure, fiery authentic sambal UK - traditional Indonesian chili paste, the foundation of Indonesian cooking. Premium artisanal hot sauce crafted from Spice Islands recipes.",
				price: "7.49",
				priceCurrency: "GBP",
				priceValidUntil: "2025-12-31",
				availability: "https://schema.org/PreOrder",
				itemCondition: "https://schema.org/NewCondition",
				image: "https://www.spiceislandindonesia.com/images/sambal-oelek-lg.webp",
				url: "https://www.spiceislandindonesia.com/sambal-oelek-uk",
				shippingDetails: [
					{
						"@type": "OfferShippingDetails",
						shippingRate: {
							"@type": "MonetaryAmount",
							value: 3.45,
							currency: "GBP",
						},
						shippingDestination: {
							"@type": "DefinedRegion",
							addressCountry: "GB",
						},
						deliveryTime: {
							"@type": "ShippingDeliveryTime",
							handlingTime: {
								"@type": "QuantitativeValue",
								minValue: 0,
								maxValue: 1,
								unitCode: "DAY",
							},
							transitTime: {
								"@type": "QuantitativeValue",
								minValue: 2,
								maxValue: 3,
								unitCode: "DAY",
							},
						},
						shippingLabel:
							"Royal Mail Tracked 48 - Standard Delivery",
					},
					{
						"@type": "OfferShippingDetails",
						shippingRate: {
							"@type": "MonetaryAmount",
							value: 0,
							currency: "GBP",
						},
						shippingDestination: {
							"@type": "DefinedRegion",
							addressCountry: "GB",
						},
						deliveryTime: {
							"@type": "ShippingDeliveryTime",
							handlingTime: {
								"@type": "QuantitativeValue",
								minValue: 0,
								maxValue: 1,
								unitCode: "DAY",
							},
							transitTime: {
								"@type": "QuantitativeValue",
								minValue: 2,
								maxValue: 3,
								unitCode: "DAY",
							},
						},
						shippingLabel: "Free Delivery",
						eligibleQuantity: {
							"@type": "QuantitativeValue",
							minValue: 20,
							unitCode: "GBP",
						},
					},
				],
				hasMerchantReturnPolicy: {
					"@type": "MerchantReturnPolicy",
					applicableCountry: "GB",
					returnPolicyCategory:
						"https://schema.org/MerchantReturnFiniteReturnWindow",
					merchantReturnDays: 30,
					returnMethod: "https://schema.org/ReturnByMail",
					returnFees: "https://schema.org/ReturnShippingFees",
				},
			},
			{
				"@type": "Offer",
				name: "Authentic Sambal UK - Sambal Bali Indonesian Chili Paste",
				description: "Premium authentic sambal UK - Indonesian chili paste with aromatic spices. Sweet and spicy artisanal hot sauce from traditional Balinese recipes.",
				price: "8.49",
				priceCurrency: "GBP",
				priceValidUntil: "2025-12-31",
				availability: "https://schema.org/PreOrder",
				itemCondition: "https://schema.org/NewCondition",
				image: "https://www.spiceislandindonesia.com/images/sambal-bali.webp",
				url: "https://www.spiceislandindonesia.com/sambal-bali-sweet-spicy",
				shippingDetails: [
					{
						"@type": "OfferShippingDetails",
						shippingRate: {
							"@type": "MonetaryAmount",
							value: 3.45,
							currency: "GBP",
						},
						shippingDestination: {
							"@type": "DefinedRegion",
							addressCountry: "GB",
						},
						deliveryTime: {
							"@type": "ShippingDeliveryTime",
							handlingTime: {
								"@type": "QuantitativeValue",
								minValue: 0,
								maxValue: 1,
								unitCode: "DAY",
							},
							transitTime: {
								"@type": "QuantitativeValue",
								minValue: 2,
								maxValue: 3,
								unitCode: "DAY",
							},
						},
						shippingLabel:
							"Royal Mail Tracked 48 - Standard Delivery",
					},
					{
						"@type": "OfferShippingDetails",
						shippingRate: {
							"@type": "MonetaryAmount",
							value: 0,
							currency: "GBP",
						},
						shippingDestination: {
							"@type": "DefinedRegion",
							addressCountry: "GB",
						},
						deliveryTime: {
							"@type": "ShippingDeliveryTime",
							handlingTime: {
								"@type": "QuantitativeValue",
								minValue: 0,
								maxValue: 1,
								unitCode: "DAY",
							},
							transitTime: {
								"@type": "QuantitativeValue",
								minValue: 2,
								maxValue: 3,
								unitCode: "DAY",
							},
						},
						shippingLabel: "Free Delivery",
						eligibleQuantity: {
							"@type": "QuantitativeValue",
							minValue: 20,
							unitCode: "GBP",
						},
					},
				],
				hasMerchantReturnPolicy: {
					"@type": "MerchantReturnPolicy",
					applicableCountry: "GB",
					returnPolicyCategory:
						"https://schema.org/MerchantReturnFiniteReturnWindow",
					merchantReturnDays: 30,
					returnMethod: "https://schema.org/ReturnByMail",
					returnFees: "https://schema.org/ReturnShippingFees",
				},
			},
			{
				"@type": "Offer",
				name: "Authentic Sambal UK Heritage Gift Set - Indonesian Chili Paste Collection",
				description: "Two signature authentic sambal UK varieties beautifully packaged - premium Indonesian chili paste collection featuring artisanal hot sauce from traditional recipes",
				price: "14.99",
				priceCurrency: "GBP",
				priceValidUntil: "2025-12-31",
				availability: "https://schema.org/PreOrder",
				itemCondition: "https://schema.org/NewCondition",
				image: "https://www.spiceislandindonesia.com/images/Spice Island Indonesia Complete Packaging System Mockup.webp",
				url: "https://www.spiceislandindonesia.com/gift-set-indonesian",
				shippingDetails: [
					{
						"@type": "OfferShippingDetails",
						shippingRate: {
							"@type": "MonetaryAmount",
							value: 3.45,
							currency: "GBP",
						},
						shippingDestination: {
							"@type": "DefinedRegion",
							addressCountry: "GB",
						},
						deliveryTime: {
							"@type": "ShippingDeliveryTime",
							handlingTime: {
								"@type": "QuantitativeValue",
								minValue: 0,
								maxValue: 1,
								unitCode: "DAY",
							},
							transitTime: {
								"@type": "QuantitativeValue",
								minValue: 2,
								maxValue: 3,
								unitCode: "DAY",
							},
						},
						shippingLabel:
							"Royal Mail Tracked 48 - Standard Delivery",
					},
					{
						"@type": "OfferShippingDetails",
						shippingRate: {
							"@type": "MonetaryAmount",
							value: 0,
							currency: "GBP",
						},
						shippingDestination: {
							"@type": "DefinedRegion",
							addressCountry: "GB",
						},
						deliveryTime: {
							"@type": "ShippingDeliveryTime",
							handlingTime: {
								"@type": "QuantitativeValue",
								minValue: 0,
								maxValue: 1,
								unitCode: "DAY",
							},
							transitTime: {
								"@type": "QuantitativeValue",
								minValue: 2,
								maxValue: 3,
								unitCode: "DAY",
							},
						},
						shippingLabel: "Free Delivery",
						eligibleQuantity: {
							"@type": "QuantitativeValue",
							minValue: 20,
							unitCode: "GBP",
						},
					},
				],
				hasMerchantReturnPolicy: {
					"@type": "MerchantReturnPolicy",
					applicableCountry: "GB",
					returnPolicyCategory:
						"https://schema.org/MerchantReturnFiniteReturnWindow",
					merchantReturnDays: 30,
					returnMethod: "https://schema.org/ReturnByMail",
					returnFees: "https://schema.org/ReturnShippingFees",
				},
			},
		],
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: 4.9,
			reviewCount: 150,
			bestRating: 5,
			worstRating: 1,
		},
	};

	const faqData = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "What makes your sambal authentic?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Our sambal recipes come from the original Spice Islands (Maluku) and have been passed down through generations. We use traditional methods and authentic Indonesian ingredients to create the genuine taste of Indonesia.",
				},
			},
			{
				"@type": "Question",
				name: "How spicy is Indonesian sambal compared to other hot sauces?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Our Sambal Oelek rates 5/5 on our heat scale, significantly hotter than most Western hot sauces. It&apos;s made with pure chilies and delivers authentic Indonesian heat levels that Indonesian cuisine is known for.",
				},
			},
			{
				"@type": "Question",
				name: "What&apos;s the difference between sambal oelek and sambal bali?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Sambal Oelek is pure chili paste made primarily from chilies, salt, and vinegar - it&apos;s the foundation of Indonesian cooking. Sambal Bali includes aromatic spices and has a sweet-spicy profile that complements grilled meats beautifully.",
				},
			},
			{
				"@type": "Question",
				name: "Do you deliver across the UK?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, we deliver premium Indonesian sambal across the UK. Our products are carefully packaged to ensure they arrive in perfect condition, typically within 2-3 business days.",
				},
			},
			{
				"@type": "Question",
				name: "Are your sambals suitable for vegetarians and vegans?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, our sambals are made with all-natural ingredients and contain no animal products. They&apos;re suitable for both vegetarians and vegans, and contain no preservatives or artificial ingredients.",
				},
			},
		],
	};

	const reviewsData = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: "Authentic Sambal UK - Spice Island Indonesia Indonesian Chili Paste Collection",
		review: [
			{
				"@type": "Review",
				reviewRating: {
					"@type": "Rating",
					ratingValue: "5",
					bestRating: "5",
				},
				author: {
					"@type": "Person",
					name: "Sarah M.",
				},
				reviewBody:
					"Finally found authentic sambal UK that matches Indonesian quality! This Indonesian chili paste is exactly like what I had in Jakarta - best artisanal hot sauce in Britain.",
				datePublished: "2024-01-15",
			},
		],
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: 4.9,
			reviewCount: 150,
			bestRating: 5,
			worstRating: 1,
		},
	};

	const localBusinessData = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"@id": "https://www.spiceislandindonesia.com/#localbusiness",
		name: "Spice Island Indonesia",
		description:
			"Authentic sambal UK - Traditional Indonesian chili paste crafted as artisanal hot sauce from the original Spice Islands",
		url: "https://www.spiceislandindonesia.com",
		email: "info@spiceislandindonesia.com", 
		address: {
			"@type": "PostalAddress",
			streetAddress: "175 Redgate", 
			addressLocality: "Ormskirk", 
			postalCode: "L39 3NW", 
			addressCountry: "GB",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 53.562573,
			longitude: -2.890138,
		},
		openingHours: [
			"Mo-Fr 09:00-17:00", 
		],
		priceRange: "££",
		servesCuisine: "Indonesian",
		paymentAccepted: ["Credit Card", "Debit Card", "PayPal"],
		currenciesAccepted: "GBP",
		areaServed: {
			"@type": "Country",
			name: "United Kingdom",
		},
		foundingDate: "2024",
		founder: {
			"@type": "Person",
			name: "Chef Yossie",
			nationality: "Indonesian"
		},
		sameAs: [
			"https://www.instagram.com/spiceisland_indonesia",
			"https://www.facebook.com/spiceislandindonesia",
		],
	};

	const getStructuredData = () => {
		switch (type) {
			case "product":
				return productData;
			case "faq":
				return faqData;
			case "reviews":
				return reviewsData;
			case "localbusiness":
				return localBusinessData;
			default:
				return organizationData;
		}
	};

	return (
		<script
			id={`structured-data-${type}`}
			type='application/ld+json'
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(getStructuredData()),
			}}
		/>
	);
}
