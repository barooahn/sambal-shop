import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Dancing_Script } from "next/font/google";
import Header from "@/components/navigation/Header";
import ThirdPartyScripts from "@/components/optimization/ThirdPartyScripts";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically load Breadcrumb to reduce initial bundle
const Breadcrumb = dynamic(() => import("@/components/shared/Breadcrumb"), {
	loading: () => null, // Breadcrumb is not critical for initial render
});

// Lazy load non-critical components with improved loading states
const Footer = dynamic(() => import("@/components/navigation/Footer"), {
	ssr: true,
	loading: () => <div className='h-96 bg-gray-50 animate-pulse' />, // Prevent layout shift with skeleton
});

const UKExitIntentPopup = dynamic(
	() => import("@/components/optimization/UKExitIntentPopup"),
	{
		loading: () => null, // No loading state needed for popup
	}
);

const WebVitals = dynamic(
	() =>
		import("@/components/analytics/WebVitals").then((mod) => ({
			default: mod.WebVitals,
		})),
	{
		loading: () => null,
	}
);

// Note: ServiceWorkerRegistration is a client component, loaded in body

const Toaster = dynamic(
	() => import("sonner").then((mod) => ({ default: mod.Toaster })),
	{
		loading: () => null,
	}
);

// Dynamically import PageViewTracker to reduce initial bundle
const PageViewTracker = dynamic(
	() => import("@/components/analytics/PageViewTracker"),
	{
		loading: () => null,
	}
);

import PerformanceOptimizer, {
	criticalCSS,
	criticalImages,
} from "@/components/optimization/PerformanceOptimizer";
import ServiceWorkerRegistration from "@/components/optimization/ServiceWorkerRegistration";
import { ConsentProvider } from "@/components/consent/ConsentProvider";
import CookieBanner from "@/components/consent/CookieBanner";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
	preload: false,
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
	weight: ["400", "700"],
	preload: false,
});

const cormorant = Cormorant_Garamond({
	subsets: ["latin"],
	variable: "--font-cormorant",
	display: "swap",
	weight: ["400", "600", "700"],
	preload: false,
});

const dancingScript = Dancing_Script({
	subsets: ["latin"],
	variable: "--font-dancing-script",
	display: "swap",
	weight: ["400", "700"],
	preload: false,
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.spiceislandindonesia.com"),
	title: "Authentic Indonesian Sambal Goreng UK | Sweet & Spicy",
	description:
		"Coming Soon: Authentic Sambal Goreng - Traditional Indonesian sweet & spicy chili paste made with palm sugar and traditional goreng method. Join our waitlist for early access to this premium Indonesian condiment.",
	keywords:
		"sambal goreng UK, order sambal goreng, sweet spicy chili paste, Indonesian sambal goreng, traditional sambal goreng UK, palm sugar chili paste, goreng method sambal, authentic sambal goreng, sambal goreng delivery UK, Chef Yossie sambal goreng, Indonesian chili paste, sambal goreng £7.49, artisanal sambal goreng, West Java sambal recipe, traditional Indonesian condiments UK",
	verification: {
		google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE,
	},
	openGraph: {
		title: "Authentic Indonesian Sambal Goreng UK | Sweet & Spicy",
		description:
			"Coming Soon: Authentic Sambal Goreng - Traditional Indonesian sweet & spicy chili paste with palm sugar. Made using traditional goreng method from West Java. Join our waitlist for early access.",
		type: "website",
		images: [
			{
				url: "/images/optimized/sambal-goreng-md.webp",
				width: 400,
				height: 400,
				alt: "Authentic Sambal Goreng UK - Traditional Indonesian Sweet & Spicy Chili Paste £7.49 - UK Delivery Chef Yossie Recipe",
			},
		],
		locale: "en_GB",
		siteName: "Spice Island Indonesia UK",
	},
	twitter: {
		card: "summary_large_image",
		title: "Authentic Indonesian Sambal Goreng UK | Sweet & Spicy",
		description:
			"Coming Soon: Authentic Sambal Goreng - Traditional Indonesian sweet & spicy chili paste with palm sugar. Made using traditional goreng method from West Java. Join our waitlist for early access.",
		images: ["/images/optimized/sambal-goreng-md.webp"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		languages: {
			"en-GB": "https://www.spiceislandindonesia.com/",
			en: "https://www.spiceislandindonesia.com/",
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				{/* Critical Resource Hints */}
				<link rel='dns-prefetch' href='//fonts.googleapis.com' />
				<link
					rel='dns-prefetch'
					href='//www.googletagmanager.com'
				/>
				<link
					rel='dns-prefetch'
					href='//www.google-analytics.com'
				/>

				{/* Preload critical images - handled by PerformanceOptimizer component */}

				{/* Removed preload of unused self-hosted fonts (Junius) */}

				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
					crossOrigin='anonymous'
				/>
				<link
					rel='preconnect'
					href='https://www.googletagmanager.com'
					crossOrigin='anonymous'
				/>
				<link
					rel='preconnect'
					href='https://www.google-analytics.com'
					crossOrigin='anonymous'
				/>

				{/* Critical CSS inlining to prevent render blocking */}
				<style
					dangerouslySetInnerHTML={{
						__html: `
						/* Critical above-the-fold CSS */
						body {
							font-family: var(--font-inter) !important;
							margin: 0;
							padding: 0;
							font-display: swap !important;
						}

						/* Prevent layout shifts */
						img {
							max-width: 100% !important;
							height: auto !important;
						}
						.hero-section {
							min-height: 100vh !important;
							height: 100vh !important;
						}
						/* Prevent layout shift from font loading */
						.voice-hero-title, .voice-product-description, .voice-location-info {
							font-display: swap !important;
							line-height: 1.2 !important;
						}
						.header { position: sticky !important; top: 0; z-index: 50; }
						.loading-placeholder { height: 96px; background: #f5f5f5; }

						/* Critical layout styles - avoid !important on display/visibility */
						.relative { position: relative !important; }
						.absolute { position: absolute !important; }
						.items-center { align-items: center !important; }
						.justify-center { justify-content: center !important; }
						.w-full { width: 100% !important; }
						.h-full { height: 100% !important; }
						.object-cover { object-fit: cover !important; }

						/* Critical display classes - avoid overriding navigation */

						/* Sambal UK gold text - prevent hydration flash */
						.sambal-title {
							color: #fcd34d !important;
							text-shadow: 0 0 8px rgba(252, 211, 77, 0.3) !important;
						}

						/* Typography */
						.text-center { text-align: center !important; }
						.font-semibold { font-weight: 600 !important; }
						.text-xs { font-size: 0.75rem !important; }
						.text-sm { font-size: 0.875rem !important; }

						/* Spacing */
						.mb-4 { margin-bottom: 1rem !important; }
						.mb-6 { margin-bottom: 1.5rem !important; }
						.px-3 { padding-left: 0.75rem; padding-right: 0.75rem !important; }
						.py-1-5 { padding-top: 0.375rem; padding-bottom: 0.375rem !important; }

						/* Hero background container */
						.hero-bg { position: absolute; inset: 0; z-index: 0; }
						.hero-content { position: relative; z-index: 10; }

						/* Additional stability for key hero elements */
						.hero-section-container {
							height: 80vh !important;
							min-height: 80vh !important;
						}

						/* Ensure responsive visibility works */
						@media (max-width: 639px) {
							.sm\\:hidden { display: none !important; }
							.block { display: block !important; }
						}
						@media (min-width: 640px) {
							.hidden { display: none !important; }
							.sm\\:block { display: block !important; }
						}
						@media (min-width: 640px) and (max-width: 1023px) {
							.lg\\:hidden { display: none !important; }
							.sm\\:block.lg\\:hidden { display: block !important; }
						}
						@media (min-width: 768px) {
							.md\\:block { display: block !important; }
							.md\\:flex { display: flex !important; }
						}
						@media (min-width: 1024px) {
							.sm\\:block.lg\\:hidden { display: none !important; }
							.lg\\:block { display: block !important; }
							.lg\\:flex { display: flex !important; }
							.lg\\:text-left { text-align: left !important; }
							.lg\\:justify-start { justify-content: flex-start !important; }
						}
						@media (min-width: 1024px) and (max-width: 1279px) {
							.xl\\:hidden { display: none !important; }
						}
						@media (min-width: 1280px) {
							.lg\\:block.xl\\:hidden { display: none !important; }
							.xl\\:block { display: block !important; }
						}
					`,
					}}
				/>

				<PerformanceOptimizer
					preloadImages={[]} // Don't preload by default in layout - let pages decide
					criticalCSS={criticalCSS}
				/>
			</head>
			<body
				className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${dancingScript.variable} ${inter.className} bg-coconut-50`}
			>
				{/* GDPR Consent Provider & Banner */}
				{/* Wrap body content to provide consent context */}
				<ConsentProvider>
					<ThirdPartyScripts
						measurementId={
							process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
						}
					/>
					{/* Track SPA navigations in GA4 only when GA is enabled. The component will no-op if gtag is absent. */}
					{process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
						<Suspense fallback={null}>
							<PageViewTracker />
						</Suspense>
					) : null}
					<WebVitals />
					{/* ServiceWorkerRegistration disabled for testing */}

					{/* Skip to main content for keyboard navigation */}
					<a
						href='#main-content'
						className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded focus:shadow-lg focus:underline'
					>
						Skip to main content
					</a>

					<ErrorBoundary>
						<Header />
					</ErrorBoundary>
					
					<ErrorBoundary>
						<Breadcrumb />
					</ErrorBoundary>
					
					<main
						id='main-content'
						role='main'
						className='min-h-screen mb-16'
					>
						<ErrorBoundary>
							{children}
						</ErrorBoundary>
					</main>
					
					<ErrorBoundary>
						<Footer />
					</ErrorBoundary>
					<UKExitIntentPopup />
					<Toaster />
					{/* Cookie banner renders conditionally */}
					<CookieBanner />
				</ConsentProvider>
			</body>
		</html>
	);
}
