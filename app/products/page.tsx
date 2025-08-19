import { Metadata } from "next";
import { products } from "@/src/stripe-config";
import ProductComparison from "@/components/ui/ProductComparison";
import { Star, Flame, Sparkles, Zap, CheckCircle } from "lucide-react";
import NewsletterSection from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
	title: "Compare Indonesian Sambal Products UK | Sambal Oelek vs Bali vs Goreng | Product Comparison",
	description: "Compare all authentic Indonesian sambal varieties side-by-side. Sambal Oelek (25,000 SHU), Sambal Bali (aromatic), Sambal Goreng (sweet). Heat levels, ingredients, customer reviews, and pricing comparison. Made by Chef Yossie with traditional recipes.",
	keywords: "compare Indonesian sambal UK, sambal oelek vs sambal bali, sambal comparison UK, Indonesian chili paste comparison, authentic sambal varieties UK, sambal heat levels comparison, Chef Yossie sambal products, sambal product comparison tool",
	openGraph: {
		title: "Compare Indonesian Sambal Products UK | Product Comparison Tool",
		description: "Side-by-side comparison of authentic Indonesian sambal varieties. Compare heat levels, ingredients, customer reviews, and pricing for all products.",
		type: "website",
		images: [{
			url: "/images/Spice Island Indonesia Complete Packaging System Mockup.webp",
			width: 600,
			height: 600,
			alt: "Compare Indonesian Sambal Products - Complete Collection"
		}]
	}
};

export default function ProductsPage() {
	// Enhanced product data for comparison
	const comparisonProducts = [
		{
			id: "sample-pack",
			name: "Sample Pack",
			subtitle: "Try First",
			price: "£4.99",
			image: "/images/optimized/sambal-sample-lg.webp",
			scoville: "Various Levels",
			heatLevel: "Try All Levels",
			rating: 4.8,
			reviews: 24,
			url: "/sample-pack-try-first",
			keyFeatures: [
				"Two 45g sample jars",
				"Perfect introduction",
				"Risk-free tasting"
			],
			badge: "Try First",
			badgeIcon: <Star className='w-4 h-4' />,
			color: "slate",
			description: "Try-before-you-buy tasting set: Sambal Oelek + Sambal Bali in small jars.",
			ingredients: ["Chili", "Salt", "Vinegar", "Traditional spices"],
			uses: ["First-time tasting", "Gift giving", "Flavor exploration"],
			origin: "Traditional Indonesian recipes"
		},
		{
			id: "sambal-oelek",
			name: "Sambal Oelek",
			subtitle: "Pure Indonesian Fire",
			price: "£7.49",
			image: "/images/optimized/sambal-oelek-lg.webp",
			scoville: "25,000 SHU",
			heatLevel: "Very Hot",
			rating: 4.9,
			reviews: 127,
			url: "/sambal-oelek-uk",
			keyFeatures: [
				"Pure chili intensity",
				"Perfect for cooking",
				"No preservatives"
			],
			badge: "Most Popular",
			badgeIcon: <Flame className='w-4 h-4' />,
			color: "burgundy",
			description: "The foundation of Indonesian cooking - pure ground chilies with just salt and vinegar.",
			ingredients: ["Fresh red chilies", "Sea salt", "Rice vinegar"],
			uses: ["Cooking base", "Marinades", "Stir-fries", "Noodle dishes"],
			origin: "Traditional Bandung family recipe"
		},
		{
			id: "sambal-bali",
			name: "Sambal Bali",
			subtitle: "Aromatic Sophistication",
			price: "£8.99",
			image: "/images/optimized/sambal-bali-lg.webp",
			scoville: "14,000 SHU",
			heatLevel: "Medium-Hot",
			rating: 4.9,
			reviews: 94,
			url: "/sambal-bali-aromatic-spicy",
			keyFeatures: [
				"Galangal & lemongrass",
				"Sophisticated complexity",
				"Restaurant-quality"
			],
			badge: "Chef's Choice",
			badgeIcon: <Sparkles className='w-4 h-4' />,
			color: "emerald",
			description: "Complex aromatic sambal with galangal, lemongrass, and kaffir lime leaves.",
			ingredients: ["Red chilies", "Galangal", "Lemongrass", "Kaffir lime leaves", "Shallots", "Garlic"],
			uses: ["Grilled fish", "Rice dishes", "Vegetable sides", "Fusion cooking"],
			origin: "Balinese temple cuisine tradition"
		},
		{
			id: "sambal-goreng",
			name: "Sambal Goreng",
			subtitle: "Sweet & Spicy Harmony",
			price: "£8.49",
			image: "/images/optimized/sambal-goreng-lg.webp",
			scoville: "12,000 SHU",
			heatLevel: "Medium",
			rating: 4.8,
			reviews: 89,
			url: "/sambal-goreng-uk",
			keyFeatures: [
				"Palm sugar sweetness",
				"Traditional fried method",
				"Perfect for nasi goreng"
			],
			badge: "Traditional",
			badgeIcon: <Zap className='w-4 h-4' />,
			color: "amber",
			description: "Sweet and spicy sambal with palm sugar, using traditional frying method.",
			ingredients: ["Red chilies", "Palm sugar", "Tamarind", "Shallots", "Garlic", "Peanut oil"],
			uses: ["Fried rice", "Grilled meats", "Noodle soups", "Traditional dishes"],
			origin: "Central Java cooking tradition"
		}
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
			{/* Hero Section */}
			<section className="py-16 bg-gradient-to-br from-cream-50 via-white to-gold-50/30">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
					{/* Subtle background decoration */}
					<div className='absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-gold-100/20 to-burgundy-100/20 rounded-full -translate-y-24 translate-x-24 blur-3xl'></div>
					<div className='absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-burgundy-100/30 to-gold-100/30 rounded-full translate-y-16 -translate-x-16 blur-2xl'></div>
					
					<div className="relative z-10">
						<div className='inline-flex items-center justify-center mb-6'>
							<Flame className='w-16 h-16 text-burgundy-600' />
						</div>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-brand">
							<span className="block text-burgundy-900">Compare Our</span>
							<span className="block text-gold-700">Sambal Collection</span>
						</h1>
						<p className="text-xl text-neutral-700 mb-8 max-w-4xl mx-auto leading-relaxed font-body">
							Make the perfect choice with our side-by-side product comparison. 
							Compare heat levels, ingredients, customer reviews, and find your ideal Indonesian sambal.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<div className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-gold-200/50">
								<span className="text-neutral-600 text-lg font-medium font-body flex items-center gap-2">
									<Flame className="w-5 h-5 text-burgundy-600" />
									4 Unique Varieties
								</span>
							</div>
							<div className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-gold-200/50">
								<span className="text-neutral-600 text-lg font-medium font-body flex items-center gap-2">
									<Star className="w-5 h-5 text-amber-500" />
									4.8+ Star Rating
								</span>
							</div>
							<div className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-gold-200/50">
								<span className="text-neutral-600 text-lg font-medium font-body flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-burgundy-600" />
									Chef Yossie's Recipes
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Product Comparison Section */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-bold text-burgundy-900 mb-4 font-brand">
							Interactive Product Comparison
						</h2>
						<p className="text-lg text-neutral-600 max-w-3xl mx-auto font-body">
							Select any 2-3 products below to compare them side-by-side. 
							See detailed comparisons of heat levels, ingredients, uses, and customer ratings.
						</p>
					</div>

					<ProductComparison 
						products={comparisonProducts}
						className="mb-16" 
					/>
				</div>
			</section>

			{/* Heat Level Guide */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-burgundy-900 mb-4 font-brand">
							Understanding Heat Levels
						</h2>
						<p className="text-lg text-neutral-600 font-body">
							Our sambal varieties range from beginner-friendly to serious heat enthusiasts
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						<div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gold-200/50 shadow-sm">
							<div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
								<span className="text-3xl font-bold text-green-600">1</span>
							</div>
							<h3 className="font-bold text-burgundy-900 mb-2 font-brand">Mild</h3>
							<p className="text-sm text-neutral-700 mb-2 font-body">5,000 - 10,000 SHU</p>
							<p className="text-xs text-neutral-600 font-body">Perfect for beginners</p>
						</div>

						<div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gold-200/50 shadow-sm">
							<div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
								<span className="text-3xl font-bold text-amber-600">2</span>
							</div>
							<h3 className="font-bold text-burgundy-900 mb-2 font-brand">Medium</h3>
							<p className="text-sm text-neutral-700 mb-2 font-body">10,000 - 15,000 SHU</p>
							<p className="text-xs text-neutral-600 font-body">
								Sambal Goreng<br />
								<strong>12,000 SHU</strong>
							</p>
						</div>

						<div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gold-200/50 shadow-sm">
							<div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
								<span className="text-3xl font-bold text-orange-600">3</span>
							</div>
							<h3 className="font-bold text-burgundy-900 mb-2 font-brand">Medium-Hot</h3>
							<p className="text-sm text-neutral-700 mb-2 font-body">15,000 - 20,000 SHU</p>
							<p className="text-xs text-neutral-600 font-body">
								Sambal Bali<br />
								<strong>14,000 SHU</strong>
							</p>
						</div>

						<div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gold-200/50 shadow-sm">
							<div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
								<span className="text-3xl font-bold text-red-600">4</span>
							</div>
							<h3 className="font-bold text-burgundy-900 mb-2 font-brand">Very Hot</h3>
							<p className="text-sm text-neutral-700 mb-2 font-body">20,000+ SHU</p>
							<p className="text-xs text-neutral-600 font-body">
								Sambal Oelek<br />
								<strong>25,000 SHU</strong>
							</p>
						</div>
					</div>

					<div className="mt-8 p-8 bg-gradient-to-br from-cream-50 via-white to-gold-50/30 rounded-2xl border border-gold-200/50 shadow-sm">
						<h3 className="font-bold text-burgundy-900 mb-6 text-center font-brand text-xl">Not Sure Which Heat Level Is Right for You?</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
							<div className="text-center p-4 bg-white/60 rounded-xl border border-gold-200/50">
								<div className="mb-3">
									<span className="text-2xl">🌱</span>
								</div>
								<h4 className="font-semibold text-burgundy-900 mb-2 font-brand">New to Spicy Food?</h4>
								<p className="text-neutral-600 font-body">Start with our Sample Pack to try different heat levels safely</p>
							</div>
							<div className="text-center p-4 bg-white/60 rounded-xl border border-gold-200/50">
								<div className="mb-3">
									<Flame className="w-6 h-6 text-burgundy-600 mx-auto" />
								</div>
								<h4 className="font-semibold text-burgundy-900 mb-2 font-brand">Regular Hot Sauce User?</h4>
								<p className="text-neutral-600 font-body">Sambal Bali offers complexity with manageable heat</p>
							</div>
							<div className="text-center p-4 bg-white/60 rounded-xl border border-gold-200/50">
								<div className="mb-3">
									<span className="text-2xl">🔥</span>
								</div>
								<h4 className="font-semibold text-burgundy-900 mb-2 font-brand">Heat Enthusiast?</h4>
								<p className="text-neutral-600 font-body">Sambal Oelek delivers authentic Indonesian fire</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Newsletter CTA */}
			<section className="py-16">
				<NewsletterSection />
			</section>
		</div>
	);
}