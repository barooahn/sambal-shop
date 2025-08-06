import "./globals.css";
import type { Metadata } from "next";
import {
	Inter,
	Playfair_Display,
	Cormorant_Garamond,
	Dancing_Script,
} from "next/font/google";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ThirdPartyScripts from "@/components/optimization/ThirdPartyScripts";
import PerformanceOptimizer, {
	criticalCSS,
	criticalImages,
} from "@/components/optimization/PerformanceOptimizer";

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

export const metadata: Metadata = {
	metadataBase: new URL("https://sambal-shop.vercel.app"),
	title: "Authentic Indonesian Sambal | Spice Island Indonesia | Premium Chili Paste UK",
	description:
		"Discover authentic Indonesian sambal from the original Spice Islands. Handcrafted using traditional Maluku recipes, no preservatives. Premium sambal delivery across UK.",
	keywords:
		"Indonesian sambal, sambal oelek, sambal bali, authentic chili paste, Indonesian condiments, UK delivery, Maluku spices, traditional recipes, handcrafted sambal, spice islands indonesia, indonesian food uk, premium condiments, chili sauce uk, authentic indonesian cuisine",
	verification: {
		google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE,
	},
	openGraph: {
		title: "Authentic Indonesian Sambal | Spice Island Indonesia",
		description:
			"Handcrafted sambal from the original Spice Islands. Traditional recipes, premium quality, UK delivery.",
		type: "website",
		images: [
			{
				url: "/images/Spice Island Indonesia Sambal Oelek 185g Label.png",
				width: 400,
				height: 400,
				alt: "Spice Island Indonesia Sambal Oelek 185g - Authentic Indonesian Chili Paste",
			},
		],
		locale: "en_GB",
		siteName: "Spice Island Indonesia",
	},
	twitter: {
		card: "summary_large_image",
		title: "Authentic Indonesian Sambal | Spice Island Indonesia",
		description:
			"Handcrafted sambal from the original Spice Islands. Traditional recipes, premium quality, UK delivery.",
		images: [
			"/images/Spice Island Indonesia Sambal Oelek 185g Label.png",
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
		canonical: "https://sambal-shop.vercel.app",
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
				<PerformanceOptimizer
					preloadImages={criticalImages}
					criticalCSS={criticalCSS}
				/>
			</head>
			<body
				className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${dancingScript.variable} ${inter.className}`}
			>
				<ThirdPartyScripts
					measurementId={
						process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
					}
				/>
				<Header />
				<Breadcrumb />
				<main className='min-h-screen'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
