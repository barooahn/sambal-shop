interface StructuredDataProps {
	type?: "organization" | "product" | "faq" | "reviews" | "localbusiness";
}

export default function StructuredData({
	type = "organization",
}: StructuredDataProps) {
	const organizationData = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Spice Island Indonesia",
		url: "https://spiceislandindonesia.com",
		logo: "https://spiceislandindonesia.com/images/optimized/logo-lg.webp",
		description:
			"UK's premier Indonesian sambal supplier. Authentic traditional chili paste from the original Spice Islands, delivered nationwide",
		address: {
			"@type": "PostalAddress",
			addressCountry: "GB",
		},
		sameAs: [
			"https://www.instagram.com/spiceislandindonesia",
			"https://www.facebook.com/spiceislandindonesia",
		],
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "customer service",
			availableLanguage: ["English", "Indonesian"],
		},
	};

	const productData = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: "Authentic Indonesian Sambal Collection",
		description:
			"Handcrafted Indonesian sambal from traditional Spice Islands recipes",
		brand: {
			"@type": "Brand",
			name: "Spice Island Indonesia",
		},
		offers: [
			{
				"@type": "Offer",
				name: "Sambal Oelek",
				description:
					"Pure, fiery chili paste - the foundation of Indonesian cooking",
				price: "7.49",
				priceCurrency: "GBP",
				availability: "https://schema.org/PreOrder",
				itemCondition: "https://schema.org/NewCondition",
				image: "https://spiceislandindonesia.com/images/Spice Island Indonesia Sambal Oelek 185g Label.webp",
			},
			{
				"@type": "Offer",
				name: "Sambal Bali",
				description: "Sweet and spicy with aromatic spices",
				price: "8.49",
				priceCurrency: "GBP",
				availability: "https://schema.org/PreOrder",
				itemCondition: "https://schema.org/NewCondition",
				image: "https://spiceislandindonesia.com/images/Spice Island Indonesia Sambal Bali 185g Label.webp",
			},
			{
				"@type": "Offer",
				name: "Heritage Gift Set",
				description: "Two signature sambals beautifully packaged",
				price: "14.99",
				priceCurrency: "GBP",
				availability: "https://schema.org/PreOrder",
				itemCondition: "https://schema.org/NewCondition",
				image: "https://spiceislandindonesia.com/images/Spice Island Indonesia Complete Packaging System Mockup.webp",
			},
		],
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			reviewCount: "150",
			bestRating: "5",
			worstRating: "1",
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
		name: "Spice Island Indonesia Sambal Collection",
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
					"Finally found authentic Indonesian sambal in the UK! The Sambal Oelek is exactly like what I had in Jakarta.",
				datePublished: "2024-01-15",
			},
		],
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			reviewCount: "150",
			bestRating: "5",
			worstRating: "1",
		},
	};

	// LocalBusiness Schema (template - needs real data)
	const localBusinessData = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: "Spice Island Indonesia",
		description:
			"Authentic Indonesian sambal from the original Spice Islands",
		url: "https://sambal-shop.vercel.app",
		telephone: "+44 (0) 20 1234 5678", // TODO: Replace with real phone number
		email: "hello@spiceislandindonesia.co.uk", // TODO: Replace with real email
		address: {
			"@type": "PostalAddress",
			streetAddress: "123 Spice Street", // TODO: Replace with real address
			addressLocality: "London", // TODO: Replace with real city
			postalCode: "SW1A 1AA", // TODO: Replace with real postcode
			addressCountry: "GB",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: "51.5074", // TODO: Replace with real coordinates
			longitude: "-0.1278",
		},
		openingHours: [
			"Mo-Fr 09:00-18:00", // TODO: Replace with real hours
			"Sa 10:00-16:00",
		],
		priceRange: "££",
		servesCuisine: "Indonesian",
		paymentAccepted: "Cash, Credit Card, Debit Card, PayPal",
		currenciesAccepted: "GBP",
		areaServed: {
			"@type": "Country",
			name: "United Kingdom",
		},
		sameAs: [
			"https://www.instagram.com/spiceislandindonesia", // TODO: Replace when social media is set up
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
