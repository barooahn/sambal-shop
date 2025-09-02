// Postbuild fix: remove erroneous CSS-as-script tags from Next build output.
// Scans .next/server/app HTML files and removes <script> tags whose src ends with .css
// Safe: only removes script tags whose src clearly ends with .css (optionally with query string).

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const TARGET_DIR = path.join(ROOT, ".next", "server", "app");

/**
 * Recursively collect all .html files in a directory.
 */
function collectHtmlFiles(dir, out = []) {
	if (!fs.existsSync(dir)) return out;
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	for (const e of entries) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) collectHtmlFiles(p, out);
		else if (e.isFile() && p.endsWith(".html")) out.push(p);
	}
	return out;
}

// Regex: matches <script ... src="... .css[?...]" ...></script>
// - Non-greedy to avoid spanning too far
// - case-insensitive
const CSS_SCRIPT_TAG_REGEX =
	/<script\b[^>]*src=("|')([^"']+\.css(?:\?[^"']*)?)(\1)[^>]*><\/script>/gi;

function fixFile(filePath) {
	try {
		let html = fs.readFileSync(filePath, "utf8");
		const before = html;
		html = html.replace(CSS_SCRIPT_TAG_REGEX, (m, q, url) => {
			// Extra guard: only remove if URL path ends with .css
			try {
				const u = new URL(url, "https://example.com");
				if (u.pathname.endsWith(".css")) {
					return ""; // remove the entire script tag
				}
			} catch (_) {
				// If URL constructor fails (relative), do a simple check
				if (url.split("?")[0].endsWith(".css")) return "";
			}
			return m; // fallback: keep
		});
		if (html !== before) {
			fs.writeFileSync(filePath, html, "utf8");
			return true;
		}
		return false;
	} catch (err) {
		console.error(
			`[fix-css-script-tags] Failed for ${filePath}:`,
			err.message
		);
		return false;
	}
}

function run() {
	const files = collectHtmlFiles(TARGET_DIR);
	let changed = 0;
	for (const f of files) {
		if (fixFile(f)) changed++;
	}
	console.log(
		`[fix-css-script-tags] Processed ${files.length} HTML files, cleaned ${changed}.`
	);
}

run();
