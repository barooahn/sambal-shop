import type { Metadata } from "next";
import Link from "next/link";
import { getInternalUrls, getBaseUrl } from "@/lib/url-utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2 } from "@/components/ui/icons";
import VoiceSearchOptimization from "@/components/seo/VoiceSearchOptimization";
import ArticleSchema from "@/components/seo/ArticleSchema";
import SimpleProductSchema from "@/components/seo/SimpleProductSchema";

const post = {
	title: "The Complete Sambal Pairing Guide: Transform Your Favourite British Meals",
	excerpt: "Discover how to perfectly pair authentic Indonesian sambal with British classics. From Sunday roast to fish and chips, unlock flavor combinations that will revolutionize your dining experience.",
	content: `
	<div class="bg-gradient-to-r from-burgundy-50 to-gold-50 border-l-4 border-burgundy-500 p-6 my-8 rounded-r-lg">
		<p class="text-lg font-semibold text-burgundy-900 mb-4">🍽️ Master the Art of Fusion</p>
		<p class="text-burgundy-700">Learn how to elevate your favourite British meals with authentic Indonesian sambal. This comprehensive pairing guide reveals surprising flavor combinations that work beautifully together.</p>
	</div>

	<p class="text-lg leading-relaxed mb-6">British cuisine is experiencing a quiet revolution, and it's happening right in your kitchen. <a href="https://www.spiceislandindonesia.com/sambal-oelek-uk" class="text-burgundy-600 hover:text-burgundy-800 underline font-semibold">Authentic Indonesian sambal</a> is transforming how we think about flavor, adding depth and complexity to beloved British classics without overwhelming their essence.</p>

	<p class="text-lg leading-relaxed mb-8">As someone who grew up with both British comfort food and Indonesian fire, I've spent years perfecting these pairings. The secret isn't about replacing traditional flavors - it's about enhancing them with <a href="https://www.spiceislandindonesia.com/authentic-vs-store-bought" class="text-burgundy-600 hover:text-burgundy-800 underline">authentic Indonesian sambal</a> that respects both culinary traditions.</p>

	<div class="bg-gradient-to-r from-burgundy-50 to-gold-50 border border-burgundy-200 rounded-lg p-6 my-8">
		<h3 class="text-xl font-bold text-burgundy-900 mb-4">📖 Complete Pairing Guide</h3>
		<div class="grid md:grid-cols-2 gap-4 text-sm">
			<ul class="space-y-2">
				<li>• <a href="#sunday-roast-revolution" class="text-burgundy-600 hover:text-burgundy-800 underline">Sunday Roast with Sambal</a></li>
				<li>• <a href="#fish-chips-upgrade" class="text-burgundy-600 hover:text-burgundy-800 underline">Fish & Chips Transformation</a></li>
				<li>• <a href="#breakfast-pairings" class="text-burgundy-600 hover:text-burgundy-800 underline">British Breakfast Enhancement</a></li>
				<li>• <a href="#pie-pairings" class="text-burgundy-600 hover:text-burgundy-800 underline">Meat Pie Combinations</a></li>
			</ul>
			<ul class="space-y-2">
				<li>• <a href="#cheese-boards" class="text-burgundy-600 hover:text-burgundy-800 underline">Cheese Board Innovation</a></li>
				<li>• <a href="#sandwich-upgrades" class="text-burgundy-600 hover:text-burgundy-800 underline">Sandwich & Wrap Upgrades</a></li>
				<li>• <a href="#soup-enhancements" class="text-burgundy-600 hover:text-burgundy-800 underline">Soup & Stew Enhancements</a></li>
				<li>• <a href="#seasonal-pairings" class="text-burgundy-600 hover:text-burgundy-800 underline">Seasonal Menu Ideas</a></li>
			</ul>
		</div>
	</div>

	<h2 id="sunday-roast-revolution" class="text-3xl font-bold text-burgundy-900 mb-6 scroll-mt-20">🥩 Sunday Roast Revolution</h2>

	<div class="bg-gradient-to-r from-burgundy-50 to-gold-50 border border-burgundy-200 rounded-lg p-6 my-6 text-center">
		<p class="text-sm text-burgundy-700 mb-2 italic">💡 Visual Guide Tip</p>
		<p class="text-burgundy-800 font-semibold">Refer to the hero image above to see exactly how traditional Sunday roast components pair with different sambal varieties - notice the rich colors and perfect portion sizes!</p>
	</div>

	<div class="bg-white border border-gold-200 rounded-lg p-6 my-6">
		<p class="text-lg mb-4">The Sunday roast is sacred in British culture, but adding <a href="https://www.spiceislandindonesia.com/sambal-bali-aromatic-spicy" class="text-burgundy-600 hover:text-burgundy-800 underline">aromatic sambal Bali</a> creates an extraordinary fusion without losing tradition. The key is understanding which sambal complements each protein.</p>
		
		<div class="grid md:grid-cols-2 gap-6 mt-4">
			<div class="border border-burgundy-100 rounded p-4">
				<h4 class="font-bold text-burgundy-900 mb-2">🐄 Beef & Lamb Pairing</h4>
				<p class="text-sm mb-2">Rich red meats pair beautifully with <a href="https://www.spiceislandindonesia.com/sambal-goreng-uk" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal goreng's</a> sweet-spicy complexity. The palm sugar balances the meat's richness.</p>
				<p class="text-xs text-neutral-600">Try: Small dollop alongside horseradish for roast beef</p>
			</div>
			<div class="border border-burgundy-100 rounded p-4">
				<h4 class="font-bold text-burgundy-900 mb-2">🐔 Chicken & Turkey Pairing</h4>
				<p class="text-sm mb-2">Lighter meats shine with <a href="https://www.spiceislandindonesia.com/sambal-oelek-uk" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal oelek's</a> clean heat. Mix into gravy or serve as a side condiment.</p>
				<p class="text-xs text-neutral-600">Try: Mix into stuffing for an Indonesian twist</p>
			</div>
		</div>
	</div>

	<h2 id="fish-chips-upgrade" class="text-3xl font-bold text-burgundy-900 mb-6 scroll-mt-20">🐟 Fish & Chips Transformation</h2>

	<p class="text-lg leading-relaxed mb-4">Fish and chips with sambal isn't just fusion - it's revelation. The clean heat of authentic sambal cuts through the richness of battered fish while enhancing the natural sweetness of properly cooked chips. <em>Look at the featured image to see how the vibrant red sambal creates beautiful color contrast against golden fish and chips.</em></p>

	<div class="bg-gradient-to-r from-cream-50 to-gold-50 border border-gold-200 rounded-lg p-6 my-6">
		<h4 class="font-bold text-burgundy-900 mb-3">Perfect Pairing Formula:</h4>
		<ul class="space-y-2 text-sm">
			<li>• <strong>White Fish:</strong> Light sambal oelek mixed with malt vinegar (2:1 ratio)</li>
			<li>• <strong>Chips:</strong> <a href="https://www.spiceislandindonesia.com/sambal-bali-sweet-spicy" class="text-burgundy-600 hover:text-burgundy-800 underline">Sweet sambal Bali</a> as a ketchup alternative</li>
			<li>• <strong>Mushy Peas:</strong> Tiny amount of sambal stirred through for warmth</li>
		</ul>
		<p class="text-xs text-neutral-600 mt-3 italic">Pro tip: Start with just 1/4 teaspoon per portion and adjust to taste</p>
	</div>

	<h2 id="breakfast-pairings" class="text-3xl font-bold text-burgundy-900 mb-6 scroll-mt-20">🍳 British Breakfast Enhancement</h2>

	<p class="text-lg leading-relaxed mb-4">The full English breakfast becomes extraordinary with strategic sambal placement. Rather than drowning everything in heat, use sambal to highlight specific elements of your breakfast plate.</p>

	<div class="grid md:grid-cols-3 gap-4 my-6">
		<div class="bg-white border border-burgundy-100 rounded-lg p-4 text-center">
			<h4 class="font-bold text-burgundy-900 mb-2">🥓 Bacon & Sausages</h4>
			<p class="text-sm mb-2">Sambal's acidity cuts through fatty meats perfectly</p>
			<Link href="/sambal-eggs-breakfast" class="text-xs text-burgundy-600 hover:text-burgundy-800 underline">See breakfast recipes →</Link>
		</div>
		<div class="bg-white border border-burgundy-100 rounded-lg p-4 text-center">
			<h4 class="font-bold text-burgundy-900 mb-2">🍞 Baked Beans</h4>
			<p class="text-sm mb-2">Add 1/2 tsp sambal to beans while heating - transforms the dish</p>
			<p class="text-xs text-neutral-600">Works with tinned or homemade</p>
		</div>
		<div class="bg-white border border-burgundy-100 rounded-lg p-4 text-center">
			<h4 class="font-bold text-burgundy-900 mb-2">🍅 Grilled Tomatoes</h4>
			<p class="text-sm mb-2">Brush with sambal-butter mix before grilling</p>
			<p class="text-xs text-neutral-600">Caramelizes beautifully</p>
		</div>
	</div>

	<h2 id="pie-pairings" class="text-3xl font-bold text-burgundy-900 mb-6 scroll-mt-20">🥧 Meat Pie Combinations</h2>

	<p class="text-lg leading-relaxed mb-4">British pies and Indonesian sambal create magic together. The rich, hearty fillings provide the perfect canvas for sambal's complex heat, while the pastry acts as a neutral buffer.</p>

	<div class="bg-white border border-gold-200 rounded-lg p-6 my-6">
		<div class="grid md:grid-cols-2 gap-6">
			<div>
				<h4 class="font-bold text-burgundy-900 mb-3">🥩 Steak & Kidney Pie</h4>
				<p class="text-sm mb-2">The rich, savory filling pairs excellently with <a href="https://www.spiceislandindonesia.com/sambal-goreng-uk" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal goreng</a>. The sweetness complements the gravy.</p>
				<p class="text-xs text-neutral-600">Serving: Small spoonful on the side of each slice</p>
			</div>
			<div>
				<h4 class="font-bold text-burgundy-900 mb-3">🐑 Shepherd's/Cottage Pie</h4>
				<p class="text-sm mb-2">Mix a tiny amount of sambal into the mince while cooking, or offer as a table condiment for those who want extra heat.</p>
				<p class="text-xs text-neutral-600">Family-friendly: Serve sambal separately</p>
			</div>
		</div>
	</div>

	<h2 id="cheese-boards" class="text-3xl font-bold text-burgundy-900 mb-6 scroll-mt-20">🧀 Cheese Board Innovation</h2>

	<p class="text-lg leading-relaxed mb-4">British cheese boards are about to get more exciting. Sambal's complexity provides the perfect counterpoint to aged cheddars, creamy stiltons, and everything in between.</p>

	<div class="bg-gradient-to-r from-burgundy-50 to-gold-50 border border-burgundy-200 rounded-lg p-6 my-6">
		<h4 class="font-bold text-burgundy-900 mb-3">Cheese & Sambal Pairings:</h4>
		<div class="grid md:grid-cols-2 gap-4 text-sm">
			<ul class="space-y-2">
				<li>• <strong>Aged Cheddar:</strong> Sambal oelek cuts through richness</li>
				<li>• <strong>Wensleydale:</strong> Sweet sambal Bali complements honey notes</li>
				<li>• <strong>Stilton:</strong> Tiny amount of sambal with crackers</li>
			</ul>
			<ul class="space-y-2">
				<li>• <strong>Red Leicester:</strong> Aromatic sambal enhances nuttiness</li>
				<li>• <strong>Cornish Yarg:</strong> Clean sambal oelek with fresh herbs</li>
				<li>• <strong>Caerphilly:</strong> Gentle sambal pairing for mild cheese</li>
			</ul>
		</div>
		<p class="text-xs text-neutral-600 mt-3 italic">Always provide sambal in small portions - a little goes a long way with cheese</p>
	</div>

	<h2 id="sandwich-upgrades" class="text-3xl font-bold text-burgundy-900 mb-6 scroll-mt-20">🥪 Sandwich & Wrap Upgrades</h2>

	<p class="text-lg leading-relaxed mb-4">Transform everyday sandwiches into gourmet experiences with strategic sambal application. The key is balancing the heat with other flavors and textures.</p>

	<div class="grid md:grid-cols-2 gap-6 my-6">
		<div class="bg-white border border-burgundy-100 rounded-lg p-4">
			<h4 class="font-bold text-burgundy-900 mb-3">Classic Combinations</h4>
			<ul class="space-y-2 text-sm">
				<li>• <strong>Ploughman's:</strong> Sambal with pickle and cheese</li>
				<li>• <strong>Ham & Mustard:</strong> Replace mustard with sambal-mayo mix</li>
				<li>• <strong>Coronation Chicken:</strong> Add sambal to the curry mayo</li>
				<li>• <strong>Tuna Mayo:</strong> Mix in sambal for Indonesian-style tuna</li>
			</ul>
		</div>
		<div class="bg-white border border-burgundy-100 rounded-lg p-4">
			<h4 class="font-bold text-burgundy-900 mb-3">Modern Twists</h4>
			<ul class="space-y-2 text-sm">
				<li>• <strong>Avocado Toast:</strong> Drizzle of diluted sambal</li>
				<li>• <strong>BLT:</strong> Sambal-aioli instead of mayo</li>
				<li>• <strong>Cheese Toastie:</strong> Brush outside with sambal-butter</li>
				<li>• <strong>Club Sandwich:</strong> Layer sambal between ingredients</li>
			</ul>
		</div>
	</div>

	<h2 id="soup-enhancements" class="text-3xl font-bold text-burgundy-900 mb-6 scroll-mt-20">🍲 Soup & Stew Enhancements</h2>

	<p class="text-lg leading-relaxed mb-4">British soups and stews provide the perfect liquid medium for sambal to bloom and develop. The key is adding sambal at the right stage of cooking.</p>

	<div class="bg-white border border-gold-200 rounded-lg p-6 my-6">
		<h4 class="font-bold text-burgundy-900 mb-3">Cooking Integration Method:</h4>
		<ol class="list-decimal list-inside space-y-2 text-sm mb-4">
			<li>Start with 1/4 teaspoon sambal per 4 servings</li>
			<li>Add during the last 10 minutes of cooking</li>
			<li>Taste and adjust - heat develops as it cooks</li>
			<li>Always offer extra sambal at the table</li>
		</ol>
		
		<div class="grid md:grid-cols-2 gap-4 mt-4">
			<div>
				<h5 class="font-semibold text-burgundy-800 mb-2">Perfect for:</h5>
				<ul class="text-xs space-y-1">
					<li>• Tomato soup (adds depth)</li>
					<li>• Vegetable broths (creates complexity)</li>
					<li>• Beef stew (enhances richness)</li>
					<li>• Chicken soup (brightens flavor)</li>
				</ul>
			</div>
			<div>
				<h5 class="font-semibold text-burgundy-800 mb-2">Use Carefully With:</h5>
				<ul class="text-xs space-y-1">
					<li>• Cream-based soups (can curdle)</li>
					<li>• Delicate fish soups (can overpower)</li>
					<li>• Chilled soups (heat isn't always welcome)</li>
					<li>• Children's portions (adjust heat levels)</li>
				</ul>
			</div>
		</div>
	</div>

	<h2 id="seasonal-pairings" class="text-3xl font-bold text-burgundy-900 mb-6 scroll-mt-20">🍂 Seasonal Menu Ideas</h2>

	<p class="text-lg leading-relaxed mb-4">Each season brings different British favorites, and sambal adapts beautifully to complement seasonal ingredients and cooking methods.</p>

	<div class="grid md:grid-cols-2 gap-6 my-6">
		<div class="bg-gradient-to-r from-burgundy-50 to-cream-50 border border-burgundy-200 rounded-lg p-6">
			<h4 class="font-bold text-burgundy-900 mb-3">🌸 Spring & Summer</h4>
			<ul class="space-y-2 text-sm">
				<li>• <strong>BBQ Season:</strong> <a href="https://www.spiceislandindonesia.com/sambal-bbq-marinade" class="text-burgundy-600 hover:text-burgundy-800 underline">Sambal marinades</a> for grilled meats</li>
				<li>• <strong>Picnic Foods:</strong> Sambal-enhanced sandwiches and wraps</li>
				<li>• <strong>Salads:</strong> Light sambal dressings with Asian greens</li>
				<li>• <strong>Cold Cuts:</strong> Sambal as a chutney alternative</li>
			</ul>
		</div>
		<div class="bg-gradient-to-r from-gold-50 to-burgundy-50 border border-gold-200 rounded-lg p-6">
			<h4 class="font-bold text-burgundy-900 mb-3">🍂 Autumn & Winter</h4>
			<ul class="space-y-2 text-sm">
				<li>• <strong>Comfort Food:</strong> Sambal in hearty stews and casseroles</li>
				<li>• <strong>Roast Dinners:</strong> Traditional roasts with sambal sides</li>
				<li>• <strong>Warming Soups:</strong> Heat-building broths and bisques</li>
				<li>• <strong>Pub Food:</strong> Elevated bangers and mash combinations</li>
			</ul>
		</div>
	</div>

	<h2 class="text-3xl font-bold text-burgundy-900 mb-6">🎯 Getting Started: Your First Sambal Adventure</h2>

	<p class="text-lg leading-relaxed mb-4">Ready to transform your British cooking? Start small and build confidence. <a href="https://www.spiceislandindonesia.com/sample-pack-try-first" class="text-burgundy-600 hover:text-burgundy-800 underline font-semibold">Our sample pack</a> lets you experiment with different sambal varieties without committing to full-size jars.</p>

	<div class="bg-gradient-to-r from-burgundy-50 to-gold-50 border border-burgundy-200 rounded-lg p-6 my-6">
		<h4 class="font-bold text-burgundy-900 mb-3">Beginner's Progression:</h4>
		<ol class="list-decimal list-inside space-y-2 text-sm">
			<li><strong>Week 1:</strong> Try sambal as a side condiment with one familiar meal</li>
			<li><strong>Week 2:</strong> Mix small amounts into cooking (soups, stir-fries)</li>
			<li><strong>Week 3:</strong> Experiment with marinades and sandwich spreads</li>
			<li><strong>Week 4:</strong> Create your own fusion combinations</li>
		</ol>
		<p class="text-xs text-neutral-600 mt-3 italic">Remember: You can always add more heat, but you can't take it away!</p>
	</div>

	<h2 class="text-3xl font-bold text-burgundy-900 mb-6">🛒 Essential Sambal Varieties for British Cooking</h2>

	<p class="text-lg leading-relaxed mb-4">Different British dishes call for different sambal varieties. Here's your essential collection for mastering British-Indonesian fusion:</p>

	<div class="grid md:grid-cols-3 gap-4 my-8">
		<div class="bg-white border border-burgundy-100 rounded-lg p-4 text-center">
			<h4 class="font-bold text-burgundy-900 mb-2">🌶️ Sambal Oelek</h4>
			<p class="text-sm mb-3">Clean heat, maximum versatility</p>
			<p class="text-xs text-neutral-600 mb-3">Perfect for: Fish & chips, breakfast items, cheese boards</p>
			<Link href="/sambal-oelek-uk" class="text-xs text-burgundy-600 hover:text-burgundy-800 underline">Learn more →</Link>
		</div>
		<div class="bg-white border border-burgundy-100 rounded-lg p-4 text-center">
			<h4 class="font-bold text-burgundy-900 mb-2">🍯 Sambal Goreng</h4>
			<p class="text-sm mb-3">Sweet & spicy complexity</p>
			<p class="text-xs text-neutral-600 mb-3">Perfect for: Sunday roasts, meat pies, BBQ</p>
			<Link href="/sambal-goreng-uk" class="text-xs text-burgundy-600 hover:text-burgundy-800 underline">Learn more →</Link>
		</div>
		<div class="bg-white border border-burgundy-100 rounded-lg p-4 text-center">
			<h4 class="font-bold text-burgundy-900 mb-2">🌺 Sambal Bali</h4>
			<p class="text-sm mb-3">Aromatic & sophisticated</p>
			<p class="text-xs text-neutral-600 mb-3">Perfect for: Special occasions, gourmet pairings</p>
			<Link href="/sambal-bali-aromatic-spicy" class="text-xs text-burgundy-600 hover:text-burgundy-800 underline">Learn more →</Link>
		</div>
	</div>

	<div class="bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 rounded-lg p-6 my-8 text-center">
		<h3 class="text-xl font-bold mb-3">Ready to Transform Your British Cooking?</h3>
		<p class="mb-4">Join thousands of UK home cooks who've discovered the perfect marriage of British comfort and Indonesian fire.</p>
		<div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
			<Link href="/shop" class="inline-flex items-center px-6 py-3 bg-gold-600 text-burgundy-900 font-bold rounded-full hover:bg-gold-500 transition-colors">
				Shop Authentic Sambal
			</Link>
			<Link href="/recipes" class="inline-flex items-center px-6 py-3 border border-gold-300 text-gold-200 font-semibold rounded-full hover:bg-gold-200 hover:text-burgundy-900 transition-colors">
				Get Free Recipes
			</Link>
		</div>
	</div>

	<h2 class="text-3xl font-bold text-burgundy-900 mb-6">🔗 Continue Your Culinary Journey</h2>

	<div class="grid md:grid-cols-2 gap-6 my-6">
		<div class="bg-white border border-burgundy-100 rounded-lg p-4">
			<h4 class="font-bold text-burgundy-900 mb-3">Learn More Techniques</h4>
			<ul class="space-y-2 text-sm">
				<li>• <Link href="/blog/ultimate-guide-indonesian-sambal" class="text-burgundy-600 hover:text-burgundy-800 underline">Ultimate Guide to Indonesian Sambal</Link></li>
				<li>• <Link href="/blog/sambal-british-classics" class="text-burgundy-600 hover:text-burgundy-800 underline">Transform British Classics with Sambal</Link></li>
				<li>• <Link href="/blog/spicy-food-beginners-guide" class="text-burgundy-600 hover:text-burgundy-800 underline">Beginner's Guide to Spicy Food</Link></li>
			</ul>
		</div>
		<div class="bg-white border border-burgundy-100 rounded-lg p-4">
			<h4 class="font-bold text-burgundy-900 mb-3">Explore Products</h4>
			<ul class="space-y-2 text-sm">
				<li>• <Link href="/gift-set-indonesian" class="text-burgundy-600 hover:text-burgundy-800 underline">Indonesian Gift Sets</Link></li>
				<li>• <Link href="/best-asian-hot-sauce" class="text-burgundy-600 hover:text-burgundy-800 underline">Best Asian Hot Sauces</Link></li>
				<li>• <Link href="/sriracha-alternative" class="text-burgundy-600 hover:text-burgundy-800 underline">Superior Sriracha Alternatives</Link></li>
			</ul>
		</div>
	</div>
	`,
	image: "/images/optimized/sambal-pairing-british-meals-guide-lg.webp",
	category: "Cooking Guide",
	readTime: "18 min read",
	publishDate: "2025-09-05",
	author: "Chef Yossie",
	keywords: "sambal pairing guide, British Indonesian fusion, Sunday roast sambal, fish chips sambal, British cooking sambal, Indonesian condiments UK, authentic sambal British meals, spicy food pairings, Asian condiments UK",
};

export async function generateMetadata(): Promise<Metadata> {
	const baseUrl = getBaseUrl();
	
	return {
		title: post.title,
		description: post.excerpt,
		keywords: post.keywords,
		openGraph: {
			title: post.title,
			description: post.excerpt,
			type: "article",
			images: [
				{
					url: post.image,
					width: 1200,
					height: 630,
					alt: "British comfort foods including Sunday roast, fish and chips, and breakfast items beautifully paired with vibrant Indonesian sambal condiments, showing the perfect fusion of British and Indonesian cuisine",
				},
			],
			publishedTime: post.publishDate,
			authors: [post.author],
			locale: "en_GB",
			siteName: "Spice Island Indonesia UK",
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.excerpt,
			images: [{
				url: post.image,
				alt: "British comfort foods including Sunday roast, fish and chips, and breakfast items beautifully paired with vibrant Indonesian sambal condiments, showing the perfect fusion of British and Indonesian cuisine",
			}],
		},
		alternates: {
			canonical: `${baseUrl}/blog/sambal-pairing-guide-british-meals`,
		},
		robots: {
			index: true,
			follow: true,
		},
	};
}

export default function BlogPostPage() {
	const baseUrl = getBaseUrl();

	return (
		<div className='min-h-screen bg-coconut-50'>
			{/* Article Header */}
			<article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
				<div className='mb-8'>
					<Link
						href='/blog'
						className='inline-flex items-center text-burgundy-600 hover:text-burgundy-800 mb-6 font-elegant'
					>
						<ArrowLeft className='w-4 h-4 mr-2' />
						Back to Blog
					</Link>

					<div className='mb-6'>
						<Badge className='mb-4 font-elegant'>
							{post.category}
						</Badge>
						<h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy-900 mb-4 font-brand leading-tight'>
							{post.title}
						</h1>
						<p className='text-xl text-neutral-700 leading-relaxed font-body'>
							{post.excerpt}
						</p>
					</div>

					<div className='flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-8 font-body'>
						<div className='flex items-center gap-1'>
							<Calendar className='w-4 h-4' />
							{new Date(post.publishDate).toLocaleDateString('en-GB', {
								day: 'numeric',
								month: 'long',
								year: 'numeric',
							})}
						</div>
						<div className='flex items-center gap-1'>
							<Clock className='w-4 h-4' />
							{post.readTime}
						</div>
						<div className='flex items-center gap-1'>
							<span>By {post.author}</span>
						</div>
					</div>
				</div>

				{/* Featured Image */}
				<div className='relative aspect-video mb-8 rounded-lg overflow-hidden shadow-luxury'>
					<Image
						src={post.image}
						alt="British comfort foods including Sunday roast, fish and chips, and breakfast items beautifully paired with vibrant Indonesian sambal condiments, showing the perfect fusion of British and Indonesian cuisine"
						fill
						className='object-cover'
						priority
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px'
						quality={90}
					/>
					<div className='absolute top-4 right-4'>
						<Badge className='bg-burgundy-900/90 text-gold-300 font-elegant backdrop-blur-sm'>
							Featured Guide
						</Badge>
					</div>
				</div>

				{/* Article Content */}
				<div
					className='prose prose-lg max-w-none font-body prose-burgundy prose-headings:font-brand prose-headings:text-burgundy-900 prose-links:text-burgundy-600 prose-links:no-underline hover:prose-links:underline prose-strong:text-burgundy-800'
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>

				{/* Social Sharing */}
				<div className='mt-12 pt-8 border-t border-gold-200'>
					<div className='flex items-center gap-4'>
						<span className='text-sm font-semibold text-neutral-700 font-elegant'>
							Share this article:
						</span>
						<button className='flex items-center gap-2 text-sm text-burgundy-600 hover:text-burgundy-800'>
							<Share2 className='w-4 h-4' />
							Share
						</button>
					</div>
				</div>

				{/* Related Articles */}
				<div className='mt-16'>
					<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-brand'>
						Related Articles
					</h3>
					<div className='grid md:grid-cols-2 gap-6'>
						<Card className='overflow-hidden shadow-lg border border-gold-200'>
							<div className='p-6'>
								<Badge className='mb-3 font-elegant'>
									Cooking Tips
								</Badge>
								<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
									Transform British Classics with Indonesian Sambal
								</h4>
								<p className='text-sm text-neutral-700 mb-3 font-body'>
									Revolutionize your favourite British dishes with authentic Indonesian sambal.
								</p>
								<Link
									href='/blog/sambal-british-classics'
									className='text-sm text-burgundy-600 hover:text-burgundy-800 font-elegant'
								>
									Read More →
								</Link>
							</div>
						</Card>
						<Card className='overflow-hidden shadow-lg border border-gold-200'>
							<div className='p-6'>
								<Badge className='mb-3 font-elegant'>
									Food Education
								</Badge>
								<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
									The Ultimate Guide to Indonesian Sambal
								</h4>
								<p className='text-sm text-neutral-700 mb-3 font-body'>
									Discover the authentic world of Indonesian sambal beyond Sriracha.
								</p>
								<Link
									href='/blog/ultimate-guide-indonesian-sambal'
									className='text-sm text-burgundy-600 hover:text-burgundy-800 font-elegant'
								>
									Read More →
								</Link>
							</div>
						</Card>
					</div>
				</div>
			</article>

			{/* Schema Markup */}
			<ArticleSchema
				headline={post.title}
				description={post.excerpt}
				image={`${baseUrl}${post.image}`}
				datePublished={`${post.publishDate}T12:00:00Z`}
				author={{
					name: post.author,
					type: "Person",
					jobTitle: "Indonesian Chef & Culinary Expert",
					worksFor: "Spice Island Indonesia"
				}}
				publisher={{
					name: "Spice Island Indonesia",
					type: "Organization",
					logo: {
						url: `${baseUrl}/images/optimized/hero-image-sm.webp`,
						width: 400,
						height: 400
					}
				}}
				url={`${baseUrl}/blog/sambal-pairing-guide-british-meals`}
				keywords={post.keywords.split(', ')}
				articleSection="Cooking Guide"
			/>

			{/* Voice Search Optimization */}
			<VoiceSearchOptimization
				quickAnswers={[
					{
						question: "How do you pair sambal with British food?",
						answer: "Start with small amounts alongside familiar dishes like Sunday roast or fish and chips. Sambal's clean heat enhances British classics without overwhelming them.",
						category: "Pairing Guide"
					},
					{
						question: "What British meals go well with Indonesian sambal?",
						answer: "Sunday roast, fish and chips, full English breakfast, meat pies, and cheese boards all pair excellently with different sambal varieties.",
						category: "Meal Ideas"
					},
					{
						question: "Which sambal is best for beginners?",
						answer: "Sambal oelek offers clean heat and maximum versatility, making it perfect for British palates new to Indonesian flavors.",
						category: "Getting Started"
					},
					{
						question: "Can you use sambal instead of HP sauce?",
						answer: "Yes! Sambal goreng's sweet-spicy profile makes an excellent alternative to HP sauce, offering more complex flavors and authentic heat.",
						category: "Substitutions"
					}
				]}
				title="Voice Search Quick Answers"
			/>
		</div>
	);
}