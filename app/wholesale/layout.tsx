import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Wholesale Indonesian Sambal UK | Bulk Orders | Restaurants & Retailers",
	description: "Wholesale Indonesian sambal for UK restaurants, cafes, and retailers. Authentic traditional recipes, competitive pricing, reliable UK delivery. Contact us for bulk orders.",
	keywords: "wholesale Indonesian sambal UK, bulk sambal orders UK, restaurant sambal supplier UK, retail sambal distributor UK, authentic sambal wholesale, Chef Yossie wholesale UK",
	openGraph: {
		title: "Wholesale Indonesian Sambal UK | Bulk Orders",
		description: "Wholesale authentic Indonesian sambal for UK businesses. Restaurants, cafes, and retailers - contact us for competitive bulk pricing.",
		images: ["/images/optimized/sambal-oelek-lg.webp"],
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/wholesale",
	},
};

export default function WholesaleLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}