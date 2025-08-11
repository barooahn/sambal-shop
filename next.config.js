/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // Enabled for static export to GitHub Pages
	eslint: {
		ignoreDuringBuilds: true,
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
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
	serverExternalPackages: ['sharp'],
	// Webpack optimizations for static export
	webpack: (config, { isServer }) => {
		if (!isServer) {
			// Optimize client-side bundle splitting and tree shaking
			config.optimization = {
				...config.optimization,
				usedExports: true,
				sideEffects: false,
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
							minSize: 20000,
							maxSize: 200000,
						},
						// Separate chunk for UI components
						ui: {
							test: /[\\/]components[\\/]ui[\\/]/,
							name: 'ui-components',
							priority: 20,
							chunks: 'all',
							enforce: true,
							minSize: 10000,
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
		
		// Enable tree shaking for better unused code elimination
		config.resolve = {
			...config.resolve,
			alias: {
				...config.resolve.alias,
				// Ensure ESM modules for better tree shaking
			}
		};
		
		return config;
	},
};

module.exports = nextConfig;
