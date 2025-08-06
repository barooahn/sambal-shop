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
		quality: 65, // Reduced from 80 to 65 for better compression
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

	// Floating ingredients - small, optimized, preserve aspect ratio
	ingredient: {
		sizes: [
			{ width: 128, suffix: "-lg" },
			{ width: 96, suffix: "-md" },
			{ width: 64, suffix: "-sm" },
			{ width: 48, suffix: "-xs" },
		],
		quality: 75,
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
	if (lower.includes("sambal") || lower.includes("product"))
		return "product";
	if (lower.includes("recipe") || lower.includes("blog")) return "recipe";
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

// Run the script
if (require.main === module) {
	processImages().catch(console.error);
}

module.exports = { optimizeImage, processImages, IMAGE_CONFIGS };
