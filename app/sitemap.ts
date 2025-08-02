import { MetadataRoute } from "next";

// Get the base URL from environment or default
const baseUrl =
	process.env.NEXT_PUBLIC_SITE_URL || "https://spiceislandindonesia.com";

// Define all static routes with their priorities and change frequencies
const staticRoutes = [
	// Core pages
	{ route: "/", priority: 1.0, changeFrequency: "weekly" as const },
	{ route: "/shop", priority: 0.9, changeFrequency: "weekly" as const },
	{ route: "/recipes", priority: 0.9, changeFrequency: "weekly" as const },
	{ route: "/blog", priority: 0.8, changeFrequency: "weekly" as const },

	// Product pages
	{
		route: "/sambal-oelek-uk",
		priority: 0.8,
		changeFrequency: "monthly" as const,
	},
	{
		route: "/sambal-bali-aromatic-spicy",
		priority: 0.8,
		changeFrequency: "monthly" as const,
	},
	{
		route: "/sample-pack-try-first",
		priority: 0.8,
		changeFrequency: "monthly" as const,
	},
	{
		route: "/gift-set-indonesian",
		priority: 0.8,
		changeFrequency: "monthly" as const,
	},

	// Use case pages
	{
		route: "/sambal-for-stir-fry",
		priority: 0.7,
		changeFrequency: "monthly" as const,
	},
	{
		route: "/sambal-bbq-marinade",
		priority: 0.7,
		changeFrequency: "monthly" as const,
	},
	{
		route: "/sambal-eggs-breakfast",
		priority: 0.7,
		changeFrequency: "monthly" as const,
	},
	{
		route: "/sambal-noodle-sauce",
		priority: 0.7,
		changeFrequency: "monthly" as const,
	},

	// Comparison pages
	{
		route: "/sambal-vs-sriracha",
		priority: 0.7,
		changeFrequency: "monthly" as const,
	},
	{
		route: "/sambal-vs-hot-sauce",
		priority: 0.7,
		changeFrequency: "monthly" as const,
	},
	{
		route: "/authentic-vs-store-bought",
		priority: 0.7,
		changeFrequency: "monthly" as const,
	},

	// Location pages
	{
		route: "/indonesian-sambal-london",
		priority: 0.6,
		changeFrequency: "monthly" as const,
	},

	// Info pages
	{ route: "/about", priority: 0.6, changeFrequency: "monthly" as const },
	{ route: "/chef", priority: 0.6, changeFrequency: "monthly" as const },
	{
		route: "/wholesale",
		priority: 0.5,
		changeFrequency: "monthly" as const,
	},
	{ route: "/contact", priority: 0.5, changeFrequency: "monthly" as const },
	{ route: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
	{ route: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

// Blog posts (add new ones here as they're created)
const blogPosts = [
	{ slug: "spice-islands-history", date: "2024-02-10" },
	{ slug: "5-ways-sambal-british-cooking", date: "2024-02-05" },
	{ slug: "ultimate-guide-indonesian-sambal", date: "2024-02-01" },
	{ slug: "traditional-sambal-making", date: "2024-01-15" },
];

// Recipe pages (add new ones here as they're created)
const recipes = [
	{ slug: "sambal-chicken-stir-fry", date: "2024-02-01" },
	{ slug: "sambal-fried-rice", date: "2024-02-12" },
	{ slug: "sambal-bbq-marinade", date: "2024-02-12" },
	{ slug: "sambal-scrambled-eggs", date: "2024-02-12" },
	{ slug: "sambal-noodle-soup", date: "2024-02-12" },
];

export default function sitemap(): MetadataRoute.Sitemap {
	const routes: MetadataRoute.Sitemap = [];

	// Add static routes
	staticRoutes.forEach(({ route, priority, changeFrequency }) => {
		routes.push({
			url: `${baseUrl}${route}`,
			lastModified: new Date(),
			changeFrequency,
			priority,
		});
	});

	// Add blog posts
	blogPosts.forEach(({ slug, date }) => {
		routes.push({
			url: `${baseUrl}/blog/${slug}`,
			lastModified: new Date(date),
			changeFrequency: "monthly",
			priority: 0.7,
		});
	});

	// Add recipe pages
	recipes.forEach(({ slug, date }) => {
		routes.push({
			url: `${baseUrl}/recipes/${slug}`,
			lastModified: new Date(date),
			changeFrequency: "monthly",
			priority: 0.8,
		});
	});

	return routes;
}
