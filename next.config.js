/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // Enabled for static export to GitHub Pages
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: { unoptimized: true },
};

module.exports = nextConfig;
