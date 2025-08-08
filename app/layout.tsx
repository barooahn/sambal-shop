import "./globals.css";
import type { Metadata } from "next";
import {
	Inter,
	Playfair_Display,
	Cormorant_Garamond,
	Dancing_Script,
	Cinzel,
} from "next/font/google";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ThirdPartyScripts from "@/components/optimization/ThirdPartyScripts";
import UKExitIntentPopup from "@/components/optimization/UKExitIntentPopup";
import PerformanceOptimizer, {
	criticalCSS,
	criticalImages,
} from "@/components/optimization/PerformanceOptimizer";
import { Toaster } from "sonner";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
	weight: ["400", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
	subsets: ["latin"],
	variable: "--font-cormorant",
	display: "swap",
	weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
	subsets: ["latin"],
	variable: "--font-dancing",
	display: "swap",
	weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel({
	subsets: ["latin"],
	variable: "--font-logo",
	display: "swap",
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://spiceislandindonesia.com"),
	title: "Indonesian Sambal UK | Authentic Delivery London Manchester Birmingham | Spice Island Indonesia",
	description:
		"UK's premier Indonesian sambal supplier. Authentic traditional chili paste from the Spice Islands, delivered nationwide. Shop sambal oelek, sambal bali & gift sets with free UK delivery over £25.",
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
		canonical: "https://spiceislandindonesia.com/",
		languages: {
			"en-GB": "https://spiceislandindonesia.com/",
			en: "https://spiceislandindonesia.com/",
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
				<PerformanceOptimizer
					preloadImages={criticalImages}
					criticalCSS={criticalCSS}
				/>
			</head>
			<body
				className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${dancingScript.variable} ${cinzel.variable} ${inter.className}`}
			>
				<ThirdPartyScripts
					measurementId={
						process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
					}
				/>
				<Header />
				<Breadcrumb />
				<main id='main-content' className='min-h-screen'>
					{children}
				</main>
				<Footer />
				<UKExitIntentPopup />
			</body>
		</html>
	);
}
