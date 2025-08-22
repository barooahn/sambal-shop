import { NextRequest, NextResponse } from "next/server";

// Static search data - in a real app this would come from a database
const searchData = [
	// Products
	{
		id: "sambal-oelek",
		title: "Sambal Oelek - Pure Heat",
		description: "Traditional Indonesian chili paste made with pure chilies, salt, and vinegar. The foundation of Indonesian cooking.",
		type: "product",
		url: "/sambal-oelek-uk",
		category: "Products",
		keywords: ["sambal", "oelek", "chili paste", "spicy", "pure", "traditional", "indonesian"],
		image: "/images/optimized/sambal-oelek-md.webp",
		price: "£7.49"
	},
	{
		id: "sambal-bali",
		title: "Sambal Bali - Aromatic & Spicy", 
		description: "Aromatic sambal with garlic, shallots, palm sugar and traditional spices. Sweet-spicy perfection.",
		type: "product",
		url: "/sambal-bali-aromatic-spicy",
		category: "Products",
		keywords: ["sambal", "bali", "aromatic", "sweet", "spicy", "garlic", "shallots", "palm sugar"],
		image: "/images/optimized/sambal-bali-md.webp",
		price: "£7.49"
	},
	{
		id: "sambal-goreng",
		title: "Sambal Goreng - Sweet & Spicy",
		description: "Traditional fried sambal with sweet and spicy flavors, perfect for rice dishes and grilled meats.",
		type: "product", 
		url: "/sambal-goreng-uk",
		category: "Products",
		keywords: ["sambal", "goreng", "fried", "sweet", "spicy", "rice", "grilled", "meat"],
		image: "/images/optimized/sambal-goreng-md.webp",
		price: "£7.49"
	},
	{
		id: "sample-pack",
		title: "Sample Pack - Try First",
		description: "Try all three sambal varieties in 45g jars. Perfect for discovering your favorite before buying full size.",
		type: "product",
		url: "/sample-pack-try-first", 
		category: "Products",
		keywords: ["sample", "pack", "try", "variety", "small", "taste", "discover"],
		image: "/images/optimized/sambal-sample-md.webp",
		price: "£12.99"
	},
	{
		id: "gift-set",
		title: "Indonesian Sambal Gift Set",
		description: "Beautiful gift set with all three sambal varieties, perfect for food lovers and special occasions.",
		type: "product",
		url: "/gift-set-indonesian",
		category: "Products", 
		keywords: ["gift", "set", "present", "food", "lover", "special", "occasion", "beautiful"],
		image: "/images/optimized/Spice Island Indonesia Complete Packaging System Mockup-md.webp",
		price: "£24.99"
	},

	// Recipes
	{
		id: "sambal-scrambled-eggs",
		title: "Sambal Scrambled Eggs",
		description: "Indonesian-style scrambled eggs with authentic sambal heat. Perfect 10-minute protein breakfast.",
		type: "recipe",
		url: "/recipes/sambal-scrambled-eggs",
		category: "Recipes",
		keywords: ["scrambled", "eggs", "breakfast", "protein", "quick", "easy", "morning", "spicy"],
		image: "/images/optimized/sambal-scrambled-eggs-md.webp",
		cookTime: "10 minutes",
		difficulty: "Easy"
	},
	{
		id: "sambal-fried-rice", 
		title: "Sambal Fried Rice (Nasi Goreng)",
		description: "Indonesia's beloved national dish - transform leftover rice with authentic sambal heat and flavor.",
		type: "recipe",
		url: "/recipes/sambal-fried-rice",
		category: "Recipes",
		keywords: ["fried", "rice", "nasi", "goreng", "national", "dish", "leftover", "indonesian"],
		image: "/images/optimized/sambal-fried-rice-md.webp", 
		cookTime: "25 minutes",
		difficulty: "Easy"
	},
	{
		id: "sambal-chicken-stir-fry",
		title: "Sambal Chicken Stir-Fry",
		description: "Quick weeknight dinner with tender chicken and vegetables in spicy sambal sauce.",
		type: "recipe",
		url: "/recipes/sambal-chicken-stir-fry",
		category: "Recipes",
		keywords: ["chicken", "stir-fry", "quick", "weeknight", "dinner", "vegetables", "sauce"],
		image: "/images/optimized/sambal-chicken-stir-fry-md.webp",
		cookTime: "20 minutes", 
		difficulty: "Easy"
	},
	{
		id: "sambal-noodle-soup",
		title: "Sambal Noodle Soup",
		description: "Comforting Indonesian-style noodle soup with aromatic broth and spicy sambal kick.",
		type: "recipe",
		url: "/recipes/sambal-noodle-soup", 
		category: "Recipes",
		keywords: ["noodle", "soup", "comfort", "broth", "aromatic", "warm", "soto"],
		image: "/images/optimized/sambal-noodle-soup-md.webp",
		cookTime: "35 minutes",
		difficulty: "Medium"
	},
	{
		id: "sambal-bbq-marinade",
		title: "Sambal BBQ Marinade",
		description: "Transform your BBQ with this spicy Indonesian marinade perfect for grilled meats.",
		type: "recipe",
		url: "/recipes/sambal-bbq-marinade",
		category: "Recipes", 
		keywords: ["bbq", "marinade", "grilled", "meat", "barbecue", "outdoor", "summer"],
		image: "/images/optimized/sambal-bbq-marinade-md.webp",
		cookTime: "15 minutes",
		difficulty: "Easy"
	},
	{
		id: "ayam-penyet",
		title: "Ayam Penyet (Smashed Fried Chicken)",
		description: "Indonesian smashed fried chicken with crispy exterior and tender meat, served with sambal.",
		type: "recipe",
		url: "/recipes/ayam-penyet",
		category: "Recipes",
		keywords: ["ayam", "penyet", "chicken", "fried", "smashed", "crispy", "indonesian"],
		image: "/images/optimized/ayam-penyet-md.webp",
		cookTime: "45 minutes",
		difficulty: "Medium"
	},
	{
		id: "ikan-bakar",
		title: "Ikan Bakar (Grilled Fish)",
		description: "Traditional Indonesian grilled fish with aromatic spice paste and sambal on the side.",
		type: "recipe", 
		url: "/recipes/ikan-bakar",
		category: "Recipes",
		keywords: ["ikan", "bakar", "fish", "grilled", "spice", "paste", "traditional"],
		image: "/images/optimized/ikan-bakar-md.webp",
		cookTime: "30 minutes",
		difficulty: "Medium"
	},
	{
		id: "lalapan",
		title: "Lalapan (Fresh Raw Vegetables)",
		description: "Traditional Indonesian fresh vegetable salad served with sambal for cooling contrast.",
		type: "recipe",
		url: "/recipes/lalapan",
		category: "Recipes",
		keywords: ["lalapan", "vegetables", "fresh", "raw", "salad", "cooling", "healthy"],
		image: "/images/optimized/lalapan-md.webp",
		cookTime: "15 minutes",
		difficulty: "Easy"
	},
	{
		id: "bakwan",
		title: "Bakwan (Indonesian Vegetable Fritters)",
		description: "Crispy Indonesian vegetable fritters perfect as snacks or side dishes, served with sambal.",
		type: "recipe",
		url: "/recipes/bakwan",
		category: "Recipes", 
		keywords: ["bakwan", "fritters", "vegetables", "crispy", "snack", "side", "dish"],
		image: "/images/optimized/bakwan-md.webp",
		cookTime: "25 minutes",
		difficulty: "Easy"
	},

	// Blog Posts
	{
		id: "ultimate-guide-sambal",
		title: "Ultimate Guide to Indonesian Sambal",
		description: "Everything you need to know about Indonesia's most beloved condiment and how to use it in your cooking.",
		type: "article",
		url: "/blog/ultimate-guide-indonesian-sambal",
		category: "Guides",
		keywords: ["guide", "sambal", "condiment", "cooking", "tips", "varieties", "authentic"],
		image: "/images/optimized/ultimate-sambal-guide-md.webp",
		readTime: "12 min"
	},
	{
		id: "spice-islands-history",
		title: "The History of the Spice Islands",
		description: "Discover the volcanic islands that created the perfect conditions for the world's most flavorful chilies.",
		type: "article",
		url: "/blog/spice-islands-history",
		category: "Culture",
		keywords: ["history", "spice", "islands", "maluku", "volcanic", "chilies", "origins"],
		image: "/images/optimized/spice-islands-history-md.webp",
		readTime: "8 min"
	},
	{
		id: "sambal-vs-sriracha",
		title: "Sambal vs Sriracha: The Ultimate Comparison",
		description: "Compare authentic Indonesian sambal with popular Sriracha - taste, heat, ingredients, and usage.",
		type: "article",
		url: "/blog/sambal-vs-sriracha",
		category: "Comparisons",
		keywords: ["sambal", "sriracha", "comparison", "taste", "heat", "ingredients", "difference"],
		image: "/images/optimized/sambal-vs-sriracha-comparison-md.webp",
		readTime: "6 min"
	},
	{
		id: "sambal-vs-hp-sauce",
		title: "Sambal vs HP Sauce: British vs Indonesian Heat",
		description: "Compare British HP Sauce with Indonesian sambal - flavors, heat levels, and usage in cooking.",
		type: "article",
		url: "/blog/sambal-vs-hp-sauce",
		category: "Comparisons", 
		keywords: ["sambal", "hp sauce", "british", "indonesian", "heat", "comparison", "cooking"],
		image: "/images/optimized/hp-vs-sambal-md.webp",
		readTime: "7 min"
	},
	{
		id: "indonesian-cooking-british-kitchens",
		title: "Indonesian Cooking in British Kitchens",
		description: "Adapt authentic Indonesian recipes for British kitchens with local ingredients and techniques.",
		type: "article",
		url: "/blog/indonesian-cooking-guide-british-kitchens",
		category: "Cooking Tips",
		keywords: ["indonesian", "cooking", "british", "kitchen", "adapt", "local", "ingredients"],
		image: "/images/optimized/indonesian-techniques-uk-kitchen-md.webp",
		readTime: "10 min"
	},
	{
		id: "mastering-indonesian-heat",
		title: "Mastering Indonesian Heat Levels",
		description: "Learn about Indonesian spice levels and how to build heat tolerance for authentic flavors.",
		type: "article",
		url: "/blog/mastering-indonesian-heat",
		category: "Cooking Tips",
		keywords: ["heat", "spice", "levels", "tolerance", "build", "authentic", "flavors"],
		image: "/images/optimized/indonesian-spice-mastery-md.webp",
		readTime: "8 min"
	},
	{
		id: "indonesian-spice-guide-uk",
		title: "Indonesian Spice Guide for UK Cooks",
		description: "Complete guide to sourcing and using authentic Indonesian spices in the UK - where to buy and how to store.",
		type: "article",
		url: "/blog/indonesian-spice-guide-uk",
		category: "Cooking Tips",
		keywords: ["spices", "guide", "uk", "sourcing", "authentic", "ingredients", "storage"],
		image: "/images/optimized/indonesian-spice-guide-uk-md.webp",
		readTime: "9 min"
	},
	{
		id: "sambal-varieties-guide",
		title: "Indonesian Sambal Varieties Guide",
		description: "Explore the diverse world of Indonesian sambal varieties - from fiery Sambal Rawit to sweet Sambal Kecap.",
		type: "article",
		url: "/blog/indonesian-sambal-varieties-guide",
		category: "Guides",
		keywords: ["sambal", "varieties", "types", "regional", "authentic", "traditional", "indonesia"],
		image: "/images/optimized/indonesian-sambal-varieties-guide-md.webp",
		readTime: "11 min"
	},
	{
		id: "spicy-food-beginners",
		title: "Spicy Food for Beginners: Start Your Heat Journey",
		description: "New to spicy food? Learn how to build your heat tolerance and enjoy authentic Indonesian flavors safely.",
		type: "article",
		url: "/blog/spicy-food-beginners-guide",
		category: "Cooking Tips",
		keywords: ["spicy", "beginners", "heat", "tolerance", "guide", "tips", "safe"],
		image: "/images/optimized/spicy-food-beginners-guide-md.webp",
		readTime: "7 min"
	},
	{
		id: "best-asian-hot-sauce",
		title: "Best Asian Hot Sauce Comparison",
		description: "Compare the best Asian hot sauces including Indonesian sambal, Thai sriracha, and Korean gochujang.",
		type: "article",
		url: "/blog/best-asian-hot-sauce-comparison",
		category: "Comparisons",
		keywords: ["asian", "hot sauce", "comparison", "sambal", "sriracha", "gochujang", "review"],
		image: "/images/optimized/best-asian-hot-sauce-comparison-md.webp",
		readTime: "10 min"
	},
	{
		id: "fusion-recipes-guide",
		title: "Indonesian-British Fusion Recipes",
		description: "Creative fusion recipes combining Indonesian sambal with classic British dishes for exciting new flavors.",
		type: "article",
		url: "/blog/indonesian-british-fusion-recipes",
		category: "Recipes",
		keywords: ["fusion", "recipes", "british", "indonesian", "creative", "sambal", "modern"],
		image: "/images/optimized/fusion-recipes-guide-md.webp",
		readTime: "12 min"
	},

	// Delivery Pages
	{
		id: "manchester-delivery",
		title: "Sambal Delivery Manchester",
		description: "Same-day delivery of authentic Indonesian sambal to Manchester and Greater Manchester.",
		type: "page",
		url: "/sambal-delivery-manchester",
		category: "Delivery",
		keywords: ["manchester", "delivery", "same-day", "greater manchester", "local"],
		image: "/images/optimized/Spice Island Indonesia E-commerce Shipping Box-md.webp"
	},
	{
		id: "london-delivery",
		title: "Indonesian Sambal London Delivery", 
		description: "Fast London delivery of authentic Indonesian sambal across all London boroughs.",
		type: "page",
		url: "/indonesian-sambal-london",
		category: "Delivery",
		keywords: ["london", "delivery", "boroughs", "fast", "authentic", "sambal"],
		image: "/images/optimized/Spice Island Indonesia E-commerce Shipping Box-md.webp"
	},

	// About Pages
	{
		id: "chef-story",
		title: "Chef Yossie's Story",
		description: "Meet Chef Yossie from Bandung, Indonesia, and learn about her journey bringing authentic sambal to the UK.",
		type: "page",
		url: "/chef",
		category: "About",
		keywords: ["chef", "yossie", "bandung", "indonesia", "story", "journey", "authentic"],
		image: "/images/optimized/chef-yossie-md.webp"
	},
	{
		id: "about-us",
		title: "About Spice Island Indonesia",
		description: "Learn about our mission to bring authentic Indonesian flavors from the Spice Islands to the UK.",
		type: "page",
		url: "/about", 
		category: "About",
		keywords: ["about", "mission", "authentic", "flavors", "spice islands", "uk"],
		image: "/images/optimized/spice-islands-heritage-md.webp"
	}
];

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const query = searchParams.get("q")?.toLowerCase().trim();
		const category = searchParams.get("category")?.toLowerCase();
		const limit = parseInt(searchParams.get("limit") || "20");

		if (!query) {
			return NextResponse.json({ 
				results: [], 
				total: 0, 
				query: "",
				message: "Please enter a search term" 
			});
		}

		// Search algorithm
		let results = searchData.filter(item => {
			// Category filter
			if (category && category !== "all" && item.type !== category) {
				return false;
			}

			// Text matching
			const searchFields = [
				item.title,
				item.description,
				...item.keywords,
				item.category
			].join(" ").toLowerCase();

			// Split query into words for better matching
			const queryWords = query.split(" ").filter(word => word.length > 0);
			
			// Item matches if it contains any query word
			return queryWords.some(word => searchFields.includes(word));
		});

		// Sort by relevance (title matches first, then description, then keywords)
		results.sort((a, b) => {
			const aTitle = a.title.toLowerCase();
			const bTitle = b.title.toLowerCase();
			const aDesc = a.description.toLowerCase();
			const bDesc = b.description.toLowerCase();

			// Exact title match
			if (aTitle.includes(query) && !bTitle.includes(query)) return -1;
			if (bTitle.includes(query) && !aTitle.includes(query)) return 1;

			// Title word match
			const queryWords = query.split(" ");
			const aTitleMatches = queryWords.filter(word => aTitle.includes(word)).length;
			const bTitleMatches = queryWords.filter(word => bTitle.includes(word)).length;
			
			if (aTitleMatches !== bTitleMatches) {
				return bTitleMatches - aTitleMatches;
			}

			// Description match
			if (aDesc.includes(query) && !bDesc.includes(query)) return -1;
			if (bDesc.includes(query) && !aDesc.includes(query)) return 1;

			// Alphabetical fallback
			return aTitle.localeCompare(bTitle);
		});

		// Apply limit
		const limitedResults = results.slice(0, limit);

		return NextResponse.json({
			results: limitedResults,
			total: results.length,
			query,
			category: category || "all",
			limit,
			hasMore: results.length > limit
		});

	} catch (error) {
		console.error("Search API error:", error);
		return NextResponse.json(
			{ error: "Search failed", results: [], total: 0 },
			{ status: 500 }
		);
	}
}

// Optional: Add POST method for more complex search queries
export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { query, filters, sort } = body;

		// Enhanced search with filters and sorting
		// This could include price ranges, difficulty levels, etc.
		
		return NextResponse.json({
			message: "Advanced search not implemented yet",
			query
		});

	} catch (error) {
		return NextResponse.json(
			{ error: "Invalid request body" },
			{ status: 400 }
		);
	}
}