const fs = require("fs");
const path = require("path");

// Function to recursively find all .tsx and .ts files
function findFiles(dir, extensions = [".tsx", ".ts"]) {
	let results = [];
	const list = fs.readdirSync(dir);

	list.forEach((file) => {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);

		if (stat && stat.isDirectory()) {
			// Skip node_modules, .next, and other build directories
			if (
				![
					"node_modules",
					".next",
					"dist",
					"build",
					".git",
				].includes(file)
			) {
				results = results.concat(findFiles(filePath, extensions));
			}
		} else {
			const ext = path.extname(file);
			if (extensions.includes(ext)) {
				results.push(filePath);
			}
		}
	});

	return results;
}

// Function to fix unescaped entities in JSX
function fixUnescapedEntities(content) {
	let fixed = content;

	// Simple replacements for common patterns
	// Fix apostrophes in common contractions
	fixed = fixed.replace(/(\w+)'(s|t|re|ve|ll|d)\b/g, "$1&apos;$2");

	// Fix standalone apostrophes in text
	fixed = fixed.replace(/(\s|>)'(\s)/g, "$1&apos;$2");

	// Fix quotes around words (but not in attributes)
	fixed = fixed.replace(/(\s|>)"([^"<>]*?)"(\s|<)/g, "$1&quot;$2&quot;$3");

	return fixed;
}

// Main function to process all files
function fixLintingErrors() {
	console.log("🔍 Finding TypeScript and TSX files...");

	const files = findFiles("./app").concat(findFiles("./components"));

	console.log(`📁 Found ${files.length} files to process`);

	let totalFixed = 0;

	files.forEach((filePath) => {
		try {
			const originalContent = fs.readFileSync(filePath, "utf8");
			const fixedContent = fixUnescapedEntities(originalContent);

			if (originalContent !== fixedContent) {
				fs.writeFileSync(filePath, fixedContent, "utf8");
				console.log(`✅ Fixed: ${filePath}`);
				totalFixed++;
			}
		} catch (error) {
			console.error(`❌ Error processing ${filePath}:`, error.message);
		}
	});

	console.log(`\n🎉 Completed! Fixed ${totalFixed} files`);

	if (totalFixed > 0) {
		console.log('\n📝 Run "yarn lint" to verify the fixes');
	}
}

// Run the script
fixLintingErrors();
