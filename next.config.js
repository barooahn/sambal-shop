/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		unoptimized: false, // Enable Next.js image optimization
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		formats: ["image/webp", "image/avif"],
		minimumCacheTTL: 31536000, // 1 year cache
		dangerouslyAllowSVG: false,
	},
	trailingSlash: true,
	
	// Redirect non-www to www to consolidate SEO authority
	async redirects() {
		return [
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'spiceislandindonesia.com',
					},
				],
				destination: 'https://www.spiceislandindonesia.com/:path*',
				permanent: true,
			},
		]
	},
	
	// Security headers for better SEO and security
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					{
						key: 'Content-Security-Policy',
						value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.tailwindcss.com cdn.jsdelivr.net unpkg.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com cdn.tailwindcss.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https:; frame-src 'none'; object-src 'none'; base-uri 'self';",
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=()',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains',
					},
				],
			},
		]
	},
	// Performance optimizations for bundle splitting
	experimental: {
		optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', 'next'],
		optimizeCss: false,
	},
	
	// Modern JavaScript targets to reduce polyfills and bundle size
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	// SWC is enabled by default in Next.js 15
	// output: 'standalone', // For deployment optimization - only add if needed for deployment
	// Webpack optimizations for better performance
	webpack: (config, { isServer, dev }) => {
		// Apply optimizations in all builds for better dev performance
		if (!isServer) {
			// Optimize bundle splitting for faster loading
			config.optimization = {
				...config.optimization,
				splitChunks: {
					...config.optimization.splitChunks,
					chunks: 'all',
					minSize: 20000,
					maxSize: 200000,
					cacheGroups: {
						...config.optimization.splitChunks.cacheGroups,
						// React and Next.js framework
						framework: {
							test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
							name: 'framework',
							priority: 40,
							enforce: true,
						},
						// Large libraries
						vendor: {
							test: /[\\/]node_modules[\\/]/,
							name: 'vendor',
							priority: 20,
							enforce: true,
							reuseExistingChunk: true,
						},
					},
				},
			};
		}
		return config;
	},
};

module.exports = withBundleAnalyzer(nextConfig);
