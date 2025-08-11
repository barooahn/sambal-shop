/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // Enabled for static export to GitHub Pages
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		unoptimized: true, // Keep for static export, but we'll optimize manually
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		formats: ["image/webp", "image/avif"],
	},
	// Performance optimizations for bundle splitting
	experimental: {
		optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', 'next'],
		optimizeCss: false,
	},
	// Webpack optimizations temporarily disabled for development
	// webpack: (config, { isServer, dev }) => {
	// 	// Only apply optimizations in production builds
	// 	if (!isServer && !dev) {
	// 		// Optimize client-side bundle splitting and tree shaking
	// 		config.optimization = {
	// 			...config.optimization,
	// 			usedExports: true,
	// 			sideEffects: false,
	// 			splitChunks: {
	// 				...config.optimization.splitChunks,
	// 				minSize: 30000,
	// 				maxSize: 150000,
	// 				cacheGroups: {
	// 					...config.optimization.splitChunks.cacheGroups,
	// 					// Core framework (React + Next.js)
	// 					framework: {
	// 						test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
	// 						name: 'framework',
	// 						priority: 40,
	// 						chunks: 'all',
	// 						enforce: true,
	// 					},
	// 					// Vendor libraries (everything else from node_modules)
	// 					vendors: {
	// 						test: /[\\/]node_modules[\\/]/,
	// 						name: 'vendors',
	// 						priority: 20,
	// 						chunks: 'all',
	// 						enforce: true,
	// 						reuseExistingChunk: true,
	// 					},
	// 					// Components (only if they're large enough)
	// 					components: {
	// 						test: /[\\/](components|src)[\\/]/,
	// 						name: 'components',
	// 						priority: 10,
	// 						chunks: 'all',
	// 						minSize: 40000,
	// 						enforce: false,
	// 					},
	// 				},
	// 			},
	// 		};
	// 	}
	// 	return config;
	// },
};

module.exports = nextConfig;
