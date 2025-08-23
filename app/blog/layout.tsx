import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Indonesian Cuisine Blog | Authentic Recipes & Stories",
	description:
		"Discover authentic Indonesian recipes, cooking tips, and stories from the Spice Islands. Learn about traditional sambal making, Indonesian spices, and culinary heritage.",
	keywords:
		"Indonesian recipes, sambal recipes, Indonesian cooking, Spice Islands, traditional Indonesian cuisine, authentic Indonesian food, Indonesian spices, Maluku recipes",
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/blog",
	},
};

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}