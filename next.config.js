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
		optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
	},
	// Webpack optimizations for static export
	webpack: (config, { isServer }) => {
		if (!isServer) {
			// Optimize client-side bundle splitting
			config.optimization = {
				...config.optimization,
				splitChunks: {
					...config.optimization.splitChunks,
					cacheGroups: {
						...config.optimization.splitChunks.cacheGroups,
						// Split vendor libraries into separate chunks
						vendor: {
							test: /[\\/]node_modules[\\/]/,
							name: 'vendors',
							priority: 10,
							chunks: 'all',
							enforce: true,
						},
						// Separate chunk for UI components
						ui: {
							test: /[\\/]components[\\/]ui[\\/]/,
							name: 'ui-components',
							priority: 20,
							chunks: 'all',
							enforce: true,
						},
						// Analytics and optimization as separate chunk
						analytics: {
							test: /[\\/]components[\\/](analytics|optimization)[\\/]/,
							name: 'analytics',
							priority: 15,
							chunks: 'all',
							enforce: true,
						},
					},
				},
			};
		}
		return config;
	},
};

module.exports = nextConfig;
