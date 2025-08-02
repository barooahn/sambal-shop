import Script from "next/script";

interface StructuredDataProps {
	type?: "organization" | "product" | "faq" | "reviews";
}

export default function StructuredData({
	type = "organization",
}: StructuredDataProps) {
	const organizationData = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Spice Island Indonesia",
		url: "https://sambal-shop.vercel.app",
		logo: "https://sambal-shop.vercel.app/images/logo.png",
		description:
			"Authentic Indonesian sambal from the original Spice Islands",
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
				image: "https://sambal-shop.vercel.app/images/Spice Island Indonesia Sambal Oelek 185g Label.png",
			},
			{
				"@type": "Offer",
				name: "Sambal Bali",
				description: "Sweet and spicy with aromatic spices",
				price: "8.49",
				priceCurrency: "GBP",
				availability: "https://schema.org/PreOrder",
				itemCondition: "https://schema.org/NewCondition",
				image: "https://sambal-shop.vercel.app/images/Spice Island Indonesia Sambal Bali 185g Label.png",
			},
			{
				"@type": "Offer",
				name: "Heritage Gift Set",
				description: "Two signature sambals beautifully packaged",
				price: "14.99",
				priceCurrency: "GBP",
				availability: "https://schema.org/PreOrder",
				itemCondition: "https://schema.org/NewCondition",
				image: "https://sambal-shop.vercel.app/images/Spice Island Indonesia Complete Packaging System Mockup.png",
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
					text: "Our Sambal Oelek rates 5/5 on our heat scale, significantly hotter than most Western hot sauces. It's made with pure chilies and delivers authentic Indonesian heat levels that Indonesian cuisine is known for.",
				},
			},
			{
				"@type": "Question",
				name: "What's the difference between sambal oelek and sambal bali?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Sambal Oelek is pure chili paste made primarily from chilies, salt, and vinegar - it's the foundation of Indonesian cooking. Sambal Bali includes aromatic spices and has a sweet-spicy profile that complements grilled meats beautifully.",
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
					text: "Yes, our sambals are made with all-natural ingredients and contain no animal products. They're suitable for both vegetarians and vegans, and contain no preservatives or artificial ingredients.",
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

	const getStructuredData = () => {
		switch (type) {
			case "product":
				return productData;
			case "faq":
				return faqData;
			case "reviews":
				return reviewsData;
			default:
				return organizationData;
		}
	};

	return (
		<Script
			id={`structured-data-${type}`}
			type='application/ld+json'
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(getStructuredData()),
			}}
		/>
	);
}
