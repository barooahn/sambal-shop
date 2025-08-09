#!/usr/bin/env node

/**
 * Image Optimization Script
 *
 * This script helps optimize images for web use by:
 * 1. Resizing images to appropriate dimensions
 * 2. Converting to WebP format
 * 3. Compressing images for better performance
 *
 * Usage: node scripts/optimize-images.js
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Configuration for different image types
const IMAGE_CONFIGS = {
	// Hero images - large, higher compression
	hero: {
		sizes: [
			{ width: 1920, height: 1080, suffix: "-xl" },
			{ width: 1200, height: 675, suffix: "-lg" },
			{ width: 768, height: 432, suffix: "-md" },
			{ width: 640, height: 360, suffix: "-sm" },
		],
		quality: 82, // Increased from 65 to 82 for better clarity on detailed photos
	},

	// Product images - preserve aspect ratio, higher compression + responsive sizes
	product: {
		sizes: [
			{ width: 664, suffix: "-responsive" }, // Match displayed dimensions, no height to preserve aspect ratio
			{ width: 400, suffix: "-lg" },
			{ width: 320, suffix: "-md" },
			{ width: 240, suffix: "-sm" },
			{ width: 160, suffix: "-xs" },
		],
		quality: 75, // Reduced from 85 to 75 for better compression
	},

	// Recipe/blog images - 4:3 aspect ratio
	recipe: {
		sizes: [
			{ width: 480, height: 360, suffix: "-lg" },
			{ width: 320, height: 240, suffix: "-md" },
			{ width: 240, height: 180, suffix: "-sm" },
		],
		quality: 80,
	},

	// Blog images - 16:9 aspect ratio for modern blog layouts
	blog: {
		sizes: [
			{ width: 1200, height: 675, suffix: "-lg" }, // Large desktop
			{ width: 800, height: 450, suffix: "-md" }, // Medium screens
			{ width: 640, height: 360, suffix: "-sm" }, // Small screens
			{ width: 400, height: 225, suffix: "-xs" }, // Mobile
		],
		quality: 75, // Good balance of quality and file size for blog images
	},

	// Floating ingredients - higher resolution for desktop display
	ingredient: {
		sizes: [
			{ width: 320, suffix: "-xl" }, // For large desktop displays
			{ width: 256, suffix: "-lg" }, // For desktop displays
			{ width: 192, suffix: "-md" }, // For tablet displays
			{ width: 128, suffix: "-sm" }, // For mobile displays
			{ width: 96, suffix: "-xs" }, // For small mobile displays
		],
		quality: 85, // Higher quality for better clarity
	},

	// Logo images - preserve aspect ratio, multiple sizes for responsive design
	logo: {
		sizes: [
			{ width: 200, suffix: "-lg" }, // Large screens
			{ width: 150, suffix: "-md" }, // Medium screens
			{ width: 120, suffix: "-sm" }, // Small screens
			{ width: 80, suffix: "-xs" }, // Mobile
		],
		quality: 85, // Higher quality for logos
	},
};

// Image type mapping based on filename patterns
const getImageType = (filename) => {
	const lower = filename.toLowerCase();

	if (lower.includes("logo")) return "logo";
	if (lower.includes("hero")) return "hero";

	// Blog images - specific patterns for blog content (16:9 aspect ratio)
	if (
		lower.includes("cooking-guide") ||
		lower.includes("spice-mastery") ||
		lower.includes("british-fusion") ||
		lower.includes("hot-sauce-comparison") ||
		lower.includes("spice-islands") ||
		lower.includes("traditional-sambal") ||
		lower.includes("ultimate-sambal-guide") ||
		lower.includes("blog") ||
		lower.includes("guide")
	)
		return "blog";

	if (lower.includes("sambal") || lower.includes("product"))
		return "product";
	if (lower.includes("recipe")) return "recipe";
	if (
		lower.includes("floating") ||
		lower.includes("chili") ||
		lower.includes("garlic") ||
		lower.includes("shallot") ||
		lower.includes("turmeric") ||
		lower.includes("mortar") ||
		lower.includes("tomato")
	)
		return "ingredient";

	return "product"; // default
};

async function optimizeImage(inputPath, outputDir, imageType) {
	const config = IMAGE_CONFIGS[imageType];
	const filename = path.basename(inputPath, path.extname(inputPath));

	console.log(`Optimizing ${filename} as ${imageType}...`);

	for (const size of config.sizes) {
		const outputPath = path.join(
			outputDir,
			`${filename}${size.suffix}.webp`
		);

		try {
			const resizeOptions = size.height
				? {
						width: size.width,
						height: size.height,
						fit: "cover",
						position: "center",
					}
				: {
						width: size.width,
						fit: "inside",
						withoutEnlargement: true,
					};

			await sharp(inputPath)
				.resize(resizeOptions)
				.webp({ quality: config.quality })
				.toFile(outputPath);

			console.log(`  ✓ Created ${path.basename(outputPath)}`);
		} catch (error) {
			console.error(
				`  ✗ Failed to create ${path.basename(outputPath)}:`,
				error.message
			);
		}
	}
}

async function processImages() {
	const inputDir = path.join(process.cwd(), "public", "images");
	const outputDir = path.join(
		process.cwd(),
		"public",
		"images",
		"optimized"
	);

	// Create output directory if it doesn't exist
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}

	// Get all image files
	const files = fs
		.readdirSync(inputDir)
		.filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
		.filter((file) => !file.includes("optimized")); // Skip already optimized files

	console.log(`Found ${files.length} images to optimize...\n`);

	for (const file of files) {
		const inputPath = path.join(inputDir, file);
		const imageType = getImageType(file);

		await optimizeImage(inputPath, outputDir, imageType);
		console.log(""); // Empty line for readability
	}

	console.log("✅ Image optimization complete!");
	console.log(`\nOptimized images saved to: ${outputDir}`);
	console.log("\nNext steps:");
	console.log("1. Update your image imports to use the optimized versions");
	console.log("2. Use appropriate sizes in your components");
	console.log("3. Test the images on your website");
}

// Specialized function to process blog images from the blog directory
async function processBlogImages() {
	const blogDir = path.join(process.cwd(), "public", "images", "blog");
	const outputDir = path.join(
		process.cwd(),
		"public",
		"images",
		"optimized"
	);

	// Create output directory if it doesn't exist
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}

	// Get all blog image files
	const files = fs
		.readdirSync(blogDir)
		.filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));

	console.log(`Found ${files.length} blog images to optimize...\n`);

	// Target blog images for optimization
	const targetImages = [
		"indonesian-cooking-guide-hero.webp",
		"indonesian-spice-mastery.webp",
		"sambal-british-fusion.webp",
		"sambal-vs-hot-sauce-comparison.webp",
		"spice-islands-heritage.webp",
		"spice-islands-history.webp",
		"traditional-sambal-making.webp",
		"ultimate-sambal-guide.webp",
	];

	let processedCount = 0;

	for (const file of files) {
		// Only process the target blog images or all if no specific targets
		if (targetImages.length === 0 || targetImages.includes(file)) {
			const inputPath = path.join(blogDir, file);
			const imageType = "blog"; // Force blog type for all images in blog directory

			await optimizeImage(inputPath, outputDir, imageType);
			processedCount++;
			console.log(""); // Empty line for readability
		}
	}

	console.log(
		`✅ Blog image optimization complete! Processed ${processedCount} images.`
	);
	console.log(`\nOptimized images saved to: ${outputDir}`);
	console.log("\nBlog images processed:");
	targetImages.forEach((img) => {
		if (files.includes(img)) {
			console.log(`  ✓ ${img} -> 4 responsive sizes (lg, md, sm, xs)`);
		} else {
			console.log(`  ⚠ ${img} - not found`);
		}
	});
}

// Run the script
if (require.main === module) {
	const args = process.argv.slice(2);

	if (args.includes("--blog")) {
		processBlogImages().catch(console.error);
	} else {
		processImages().catch(console.error);
	}
}

module.exports = {
	optimizeImage,
	processImages,
	processBlogImages,
	IMAGE_CONFIGS,
};
