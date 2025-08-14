import "./globals.css";
import type { Metadata } from "next";
import {
	Inter,
	Playfair_Display,
} from "next/font/google";
import Header from "@/components/navigation/Header";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ThirdPartyScripts from "@/components/optimization/ThirdPartyScripts";
import dynamic from "next/dynamic";

// Lazy load non-critical components
const Footer = dynamic(() => import("@/components/navigation/Footer"), {
	ssr: true,
	loading: () => <div className="h-96" />, // Prevent layout shift
});

const UKExitIntentPopup = dynamic(() => import("@/components/optimization/UKExitIntentPopup"), {
	loading: () => null, // No loading state needed for popup
});
import PerformanceOptimizer, {
	criticalCSS,
	criticalImages,
} from "@/components/optimization/PerformanceOptimizer";
import { Toaster } from "sonner";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
	preload: true,
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
	weight: ["400", "700"], // Reduced to only necessary weights
	preload: false, // Only preload critical fonts
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.spiceislandindonesia.com"),
	title: "Indonesian Sambal UK | Authentic Delivery London Manchester Birmingham | Spice Island Indonesia",
	description:
		"UK's premier Indonesian sambal supplier. Authentic traditional chili paste from the Spice Islands, delivered nationwide. Shop sambal oelek, sambal bali & gift sets with free UK delivery over £20.",
	keywords:
		"Indonesian sambal UK, sambal oelek UK, sambal bali UK, authentic chili paste UK, Indonesian condiments UK delivery, traditional sambal London, sambal delivery Manchester, Indonesian food Birmingham, premium condiments UK, sambal Edinburgh, authentic indonesian cuisine UK, Chef Yossie sambal",
	verification: {
		google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE,
	},
	openGraph: {
		title: "Indonesian Sambal UK | Authentic Delivery | Spice Island Indonesia",
		description:
			"UK's premier Indonesian sambal supplier. Traditional recipes by Chef Yossie, nationwide delivery. Authentic sambal oelek & sambal bali.",
		type: "website",
		images: [
			{
				url: "/images/Spice Island Indonesia Sambal Oelek 185g Label.webp",
				width: 400,
				height: 400,
				alt: "Authentic Indonesian Sambal Oelek 185g - UK Delivery - Chef Yossie Traditional Recipe",
			},
		],
		locale: "en_GB",
		siteName: "Spice Island Indonesia UK",
	},
	twitter: {
		card: "summary_large_image",
		title: "Indonesian Sambal UK | Authentic Delivery | Spice Island Indonesia",
		description:
			"UK's premier Indonesian sambal supplier. Traditional recipes by Chef Yossie, nationwide delivery. Authentic sambal oelek & sambal bali.",
		images: [
			"/images/Spice Island Indonesia Sambal Oelek 185g Label.webp",
		],
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
		canonical: "https://www.spiceislandindonesia.com/",
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
				<link rel='dns-prefetch' href='//www.googletagmanager.com' />
				<link rel='dns-prefetch' href='//www.google-analytics.com' />
				
				{/* Preload critical images */}
				<link 
					rel='preload' 
					href='/images/optimized/hero-image-lg.webp' 
					as='image' 
					type='image/webp'
				/>
				<link 
					rel='preload' 
					href='/images/optimized/sambal-bali-md.webp' 
					as='image' 
					type='image/webp'
				/>
				
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
				
				{/* Preload critical Next.js chunks */}
				<link
					rel='modulepreload'
					href='/_next/static/chunks/4bd1b696-602635ee57868870.js'
					as='script'
				/>
				<link
					rel='modulepreload'
					href='/_next/static/chunks/5964-1a8fca11ddc9a9d0.js'
					as='script'
				/>
				
				{/* Critical CSS inlining to prevent render blocking */}
				<style dangerouslySetInnerHTML={{
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
					`
				}} />
				
				<PerformanceOptimizer
					preloadImages={criticalImages}
					criticalCSS={criticalCSS}
				/>
			</head>
			<body
				className={`${inter.variable} ${playfair.variable} ${inter.className}`}
			>
				<ThirdPartyScripts
					measurementId={
						process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
					}
				/>
				<Header />
				<Breadcrumb />
				<main id='main-content' className='min-h-screen mb-16'>
					{children}
				</main>
				<Footer />
				<UKExitIntentPopup />
				<Toaster />
			</body>
		</html>
	);
}
