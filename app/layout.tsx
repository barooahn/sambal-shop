import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/navigation/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Spice Island Indonesia - Authentic Indonesian Sambal Coming Soon to UK",
	description:
		"Premium authentic Indonesian sambal made from traditional Spice Islands recipes. Get notified when we launch and receive 10% early bird discount. Bold, garlicky flavors perfect for British kitchens.",
	keywords:
		"Indonesian sambal, authentic chili sauce, spice islands, maluku, sambal bawang, indonesian food uk, premium condiments",
	openGraph: {
		title: "Spice Island Indonesia - Authentic Indonesian Sambal Coming Soon",
		description:
			"Premium authentic Indonesian sambal from the original Spice Islands, coming soon to the UK. Bold, garlicky flavors perfect for BBQ and stir-fries.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
