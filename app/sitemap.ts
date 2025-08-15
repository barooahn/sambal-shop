import { MetadataRoute } from "next";

export const dynamic = "force-static";

// Get the base URL from environment or default
const baseUrl = "https://www.spiceislandindonesia.com";

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
		route: "/sambal-bali-sweet-spicy",
		priority: 0.8,
		changeFrequency: "monthly" as const,
	},
	{
		route: "/sambal-goreng-uk",
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
	{
		route: "/gift-set",
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
		route: "/sriracha-alternative",
		priority: 0.9,
		changeFrequency: "weekly" as const,
	},
	{
		route: "/best-asian-hot-sauce",
		priority: 0.9,
		changeFrequency: "weekly" as const,
	},
	{
		route: "/hot-sauce-vs-sambal",
		priority: 0.8,
		changeFrequency: "weekly" as const,
	},
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
	{
		route: "/sambal-delivery-manchester",
		priority: 0.6,
		changeFrequency: "monthly" as const,
	},
	{
		route: "/uk-indonesian-food-delivery",
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
	{ route: "/shipping", priority: 0.5, changeFrequency: "monthly" as const },
	{ route: "/returns", priority: 0.5, changeFrequency: "monthly" as const },
	{ route: "/feedback", priority: 0.4, changeFrequency: "monthly" as const },
	{ route: "/success", priority: 0.3, changeFrequency: "yearly" as const },
	{ route: "/unsubscribe", priority: 0.2, changeFrequency: "yearly" as const },
	{ route: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
	{ route: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

// Blog posts (add new ones here as they&apos;re created)
const blogPosts = [
	{ slug: "sambal-vs-hp-sauce", date: "2025-08-13" },
	{ slug: "indonesian-cooking-guide-british-kitchens", date: "2025-08-13" },
	{ slug: "indonesian-spice-levels-british-palates", date: "2025-08-13" },
	{ slug: "indonesian-ingredients-uk-shopping-guide", date: "2025-08-13" },
	{ slug: "mastering-indonesian-heat", date: "2025-08-13" },
	{ slug: "spice-islands-history", date: "2025-08-13" },
	{ slug: "sambal-british-classics", date: "2025-08-13" },
	{ slug: "ultimate-guide-indonesian-sambal", date: "2025-08-13" },
	{ slug: "traditional-sambal-making", date: "2025-08-13" },
	{ slug: "spice-islands-to-your-kitchen", date: "2025-08-13" },
	{ slug: "sambal-vs-hot-sauce", date: "2025-08-13" },
	{ slug: "indonesian-food-culture-context", date: "2025-08-13" },
	{ slug: "5-ways-sambal-british-cooking", date: "2025-08-13" },
	{ slug: "british-indonesian-fusion-weeknight-recipes", date: "2025-08-13" },
	{ slug: "indonesian-techniques-british-kitchens", date: "2025-08-13" },
	{ slug: "sambal-vs-sriracha", date: "2025-08-15" },
	{ slug: "complete-guide-indonesian-sambal-varieties", date: "2025-08-15" },
	{ slug: "authentic-indonesian-sambal-why-uk-brands-get-it-wrong", date: "2025-08-15" },
	{ slug: "spicy-food-beginners-guide", date: "2025-08-15" },
];

// Recipe pages (add new ones here as they&apos;re created)
const recipes = [
	{ slug: "sambal-chicken-stir-fry", date: "2024-02-01" },
	{ slug: "sambal-fried-rice", date: "2024-02-12" },
	{ slug: "sambal-bbq-marinade", date: "2024-02-12" },
	{ slug: "sambal-scrambled-eggs", date: "2024-02-12" },
	{ slug: "sambal-noodle-soup", date: "2024-02-12" },
	{ slug: "ayam-penyet", date: "2024-02-12" },
	{ slug: "bakwan", date: "2024-02-12" },
	{ slug: "ikan-bakar", date: "2024-02-12" },
	{ slug: "lalapan", date: "2024-02-12" },
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
