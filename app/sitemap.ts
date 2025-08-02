import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://spiceislandindonesia.com";

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/recipes`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/shop`,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/chef`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/wholesale`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		},
		// Product-specific landing pages
		{
			url: `${baseUrl}/sambal-oelek-uk`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/sambal-bali-sweet-spicy`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/sample-pack-try-first`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/gift-set-indonesian`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		// Use case landing pages
		{
			url: `${baseUrl}/sambal-for-stir-fry`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/sambal-bbq-marinade`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/sambal-eggs-breakfast`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/sambal-noodle-sauce`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
		// Comparison landing pages
		{
			url: `${baseUrl}/sambal-vs-sriracha`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/sambal-vs-hot-sauce`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/authentic-vs-store-bought`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
		// Location-based landing pages
		{
			url: `${baseUrl}/indonesian-sambal-london`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/privacy`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			url: `${baseUrl}/terms`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			url: `${baseUrl}/shipping`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
	];
}
