import type { Metadata } from "next";
import Link from "next/link";
import { getInternalUrls } from "@/lib/url-utils";

export const metadata: Metadata = {
	title: "Search Indonesian Recipes & Products | Spice Island Indonesia",
	description: "Search our complete collection of authentic Indonesian recipes, sambal products, and cooking guides. Find the perfect dish or ingredient for your culinary adventure.",
	keywords: "search Indonesian recipes, find sambal products, Indonesian cooking search, authentic recipes search, sambal varieties search, Indonesian ingredients search",
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/search",
	},
	openGraph: {
		title: "Search Indonesian Recipes & Products",
		description: "Find authentic Indonesian recipes, sambal products, and cooking guides from Chef Yossie's collection.",
		type: "website",
	},
};

export default function SearchLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const urls = getInternalUrls();
	
	return (
		<div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
			{/* SEO Content Header */}
			<div className="pt-16 pb-8">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h1 className="text-3xl font-bold text-burgundy-900 mb-4">
							Discover Authentic Indonesian Cuisine
						</h1>
						<p className="text-lg text-neutral-600 max-w-3xl mx-auto">
							Search through Chef Yossie's complete collection of traditional Indonesian recipes, premium sambal products, and expert cooking guides. From beginner-friendly dishes to complex traditional preparations.
						</p>
					</div>

					{/* Popular Search Categories */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
						<div className="bg-white rounded-lg p-4 border border-gold-200 text-center">
							<div className="text-2xl mb-2">🌶️</div>
							<h3 className="font-semibold text-burgundy-900 text-sm">Sambal Varieties</h3>
							<p className="text-xs text-neutral-600">Oelek, Bali, Goreng & more</p>
						</div>
						
						<div className="bg-white rounded-lg p-4 border border-gold-200 text-center">
							<div className="text-2xl mb-2">🍛</div>
							<h3 className="font-semibold text-burgundy-900 text-sm">Traditional Recipes</h3>
							<p className="text-xs text-neutral-600">Authentic Indonesian dishes</p>
						</div>
						
						<div className="bg-white rounded-lg p-4 border border-gold-200 text-center">
							<div className="text-2xl mb-2">📚</div>
							<h3 className="font-semibold text-burgundy-900 text-sm">Cooking Guides</h3>
							<p className="text-xs text-neutral-600">Techniques & ingredient tips</p>
						</div>
						
						<div className="bg-white rounded-lg p-4 border border-gold-200 text-center">
							<div className="text-2xl mb-2">🛒</div>
							<h3 className="font-semibold text-burgundy-900 text-sm">Premium Products</h3>
							<p className="text-xs text-neutral-600">Authentic sambal & spices</p>
						</div>
					</div>

					{/* Popular Searches */}
					<div className="bg-white rounded-lg p-8 border border-gold-200">
						<h2 className="text-xl font-bold text-burgundy-900 mb-6 text-center">
							Most Searched Indonesian Dishes
						</h2>
						<div className="grid md:grid-cols-3 gap-6">
							<div>
								<h3 className="font-semibold text-burgundy-900 mb-3">Beginner-Friendly</h3>
								<ul className="space-y-2 text-sm text-neutral-600">
									<li>• <a href={urls.recipes + '/sambal-fried-rice'} className="hover:text-burgundy-600">Sambal Fried Rice (Nasi Goreng)</a></li>
									<li>• <a href={urls.recipes + '/sambal-scrambled-eggs'} className="hover:text-burgundy-600">Sambal Scrambled Eggs</a></li>
									<li>• <a href={urls.recipes + '/sambal-chicken-stir-fry'} className="hover:text-burgundy-600">Sambal Chicken Stir-Fry</a></li>
									<li>• <Link href={urls.blog + '/spicy-food-beginners-guide'} className="hover:text-burgundy-600">Spicy Food Guide for Beginners</Link></li>
								</ul>
							</div>
							
							<div>
								<h3 className="font-semibold text-burgundy-900 mb-3">Traditional Favorites</h3>
								<ul className="space-y-2 text-sm text-neutral-600">
									<li>• <a href={urls.recipes + '/ayam-penyet'} className="hover:text-burgundy-600">Ayam Penyet (Smashed Chicken)</a></li>
									<li>• <a href={urls.recipes + '/ikan-bakar'} className="hover:text-burgundy-600">Ikan Bakar (Grilled Fish)</a></li>
									<li>• <a href={urls.recipes + '/lalapan'} className="hover:text-burgundy-600">Lalapan (Fresh Vegetable Salad)</a></li>
									<li>• <a href={urls.recipes + '/sambal-noodle-soup'} className="hover:text-burgundy-600">Sambal Noodle Soup</a></li>
								</ul>
							</div>
							
							<div>
								<h3 className="font-semibold text-burgundy-900 mb-3">Product Guides</h3>
								<ul className="space-y-2 text-sm text-neutral-600">
									<li>• <a href={urls.shop} className="hover:text-burgundy-600">Compare All Sambal Varieties</a></li>
									<li>• <a href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spiceislandindonesia.com'}/sambal-oelek-uk`} className="hover:text-burgundy-600">Sambal Oelek (Pure Heat)</a></li>
									<li>• <a href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spiceislandindonesia.com'}/sambal-bali-aromatic-spicy`} className="hover:text-burgundy-600">Sambal Bali (Aromatic)</a></li>
									<li>• <a href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spiceislandindonesia.com'}/sambal-goreng-uk`} className="hover:text-burgundy-600">Sambal Goreng (Sweet & Spicy)</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			{children}

			{/* Search Tips */}
			<div className="py-12 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl font-bold text-burgundy-900 mb-6 text-center">
						Search Tips for Indonesian Cuisine
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<h3 className="font-semibold text-burgundy-900 mb-3">Recipe Search Tips</h3>
							<ul className="space-y-2 text-sm text-neutral-600">
								<li>• Try Indonesian names: "nasi goreng" instead of "fried rice"</li>
								<li>• Search by heat level: "mild sambal" or "spicy recipes"</li>
								<li>• Look for cooking method: "grilled", "stir-fry", "marinade"</li>
								<li>• Search by main ingredient: "chicken", "seafood", "vegetarian"</li>
							</ul>
						</div>
						
						<div>
							<h3 className="font-semibold text-burgundy-900 mb-3">Product Search Tips</h3>
							<ul className="space-y-2 text-sm text-neutral-600">
								<li>• Use heat descriptors: "mild", "medium", "hot", "extra spicy"</li>
								<li>• Search by flavor profile: "aromatic", "sweet", "savory"</li>
								<li>• Try traditional names: "sambal terasi", "sambal matah"</li>
								<li>• Search by usage: "marinade", "condiment", "cooking sauce"</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
