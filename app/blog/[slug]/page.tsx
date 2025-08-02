import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
	"ultimate-guide-indonesian-sambal": {
		title: "The Ultimate Guide to Indonesian Sambal: Beyond Sriracha",
		excerpt: "Discover the authentic world of Indonesian sambal - from traditional varieties to modern applications. Learn what makes real sambal different from Western hot sauces.",
		content: `
		<p>If you think Sriracha is spicy, wait until you discover authentic Indonesian sambal. This isn't just another hot sauce - it's a culinary tradition that spans centuries, with each variety telling a unique story from the Indonesian archipelago. From the volcanic islands of Maluku to the bustling markets of Jakarta, sambal is the fiery soul of Indonesian cuisine.</p>

		<h2>What Makes Sambal Different from Hot Sauce?</h2>
		<p>While Western hot sauces focus on vinegar and preservatives, authentic Indonesian sambal is built on three simple principles: fresh chilies, minimal ingredients, and maximum flavor. The texture is chunky rather than smooth, the heat is complex rather than one-dimensional, and the flavor profile changes with each variety.</p>

		<p>Unlike mass-produced hot sauces that can sit on shelves for years, traditional sambal is meant to be consumed fresh. This is why authentic sambal has such intense, vibrant flavors - there are no preservatives dulling the taste, no artificial colors masking the natural beauty of fresh chilies.</p>

		<h2>The Essential Sambal Varieties Every Food Lover Should Know</h2>

		<h3>Sambal Oelek: The Foundation</h3>
		<p>Think of sambal oelek as the mother of all sambals. Made with just fresh red chilies, salt, and a touch of vinegar, it's the purest expression of chili heat. The name "oelek" comes from the Indonesian word for the stone mortar and pestle used to grind the chilies.</p>

		<p>In Indonesian cooking, sambal oelek isn't just a condiment - it's a cooking ingredient. Use it as the base for stir-fries, marinades, and curry pastes. The heat level is intense (think 4-5 out of 5), but the flavor is clean and bright.</p>

		<h3>Sambal Bali: The Aromatic</h3>
		<p>If sambal oelek is fire, sambal bali is fire with finesse. This variety includes aromatic ingredients like galangal, lemongrass, and kaffir lime leaves, creating a complex flavor profile that's perfect for grilled meats and seafood.</p>

		<p>The heat level is more moderate (3 out of 5), making it accessible to those building their spice tolerance. The aromatic spices make it particularly good with British BBQ - try it as a marinade for chicken or lamb.</p>

		<h3>Sambal Terasi: The Umami Bomb</h3>
		<p>This variety includes terasi (shrimp paste), adding a deep umami flavor that transforms simple rice dishes into something extraordinary. It's an acquired taste for Western palates, but once you understand it, you'll crave its complex, savory heat.</p>

		<h2>How to Use Sambal in British Cooking</h2>

		<h3>Sunday Roast Revolution</h3>
		<p>Mix sambal bali with olive oil and herbs for a marinade that will transform your Sunday roast. The aromatic spices complement lamb beautifully, while the heat adds excitement to chicken and pork.</p>

		<h3>Elevated Fish and Chips</h3>
		<p>Forget mushy peas - try sambal oelek mixed with mayonnaise as a dipping sauce for your chips. The clean heat and chunky texture provide the perfect contrast to crispy batter and fluffy potatoes.</p>

		<h3>Breakfast Game Changer</h3>
		<p>A small spoonful of sambal in scrambled eggs creates an Indonesian-British fusion that's become popular in London's trendy cafes. Start with just a tiny amount - sambal is much hotter than you expect.</p>

		<h2>Building Your Spice Tolerance</h2>
		<p>Indonesian sambal is significantly hotter than most Western condiments. Here's how to build your tolerance safely:</p>

		<p><strong>Start Small:</strong> Begin with a tiny amount - literally the tip of a teaspoon. Authentic sambal is 3-10 times hotter than Tabasco.</p>

		<p><strong>Have Dairy Ready:</strong> Keep yogurt or milk nearby for your first tastings. The casein in dairy products neutralizes capsaicin better than water.</p>

		<p><strong>Build Gradually:</strong> Increase the amount slowly over several weeks. Your tolerance will improve, and you'll start to appreciate the complex flavors beneath the heat.</p>

		<h2>The Health Benefits of Authentic Sambal</h2>
		<p>Unlike processed hot sauces loaded with preservatives, authentic sambal offers genuine health benefits. Fresh chilies are packed with vitamin C, capsaicin (which may boost metabolism), and antioxidants. The minimal ingredient list means you're getting pure nutrition without artificial additives.</p>

		<h2>Storing and Serving Sambal</h2>
		<p>Authentic sambal should be stored in the refrigerator and consumed within 2-3 weeks of opening. The lack of preservatives means it won't last as long as commercial hot sauces, but the flavor intensity more than makes up for the shorter shelf life.</p>

		<p>Serve sambal in small amounts - a little goes a very long way. In Indonesia, it's common to have several varieties on the table, allowing diners to choose their preferred heat level and flavor profile.</p>

		<h2>Where to Find Authentic Sambal in the UK</h2>
		<p>While you can find mass-produced versions in supermarkets, authentic sambal made with traditional methods is harder to source. Look for brands that list minimal ingredients, avoid artificial preservatives, and ideally are made by Indonesian producers who understand the traditional techniques.</p>

		<p>The best authentic sambal will have a chunky texture, vibrant color, and an ingredient list you can pronounce. Avoid anything with artificial colors, excessive preservatives, or sugar as a main ingredient.</p>

		<h2>Making the Switch from Sriracha</h2>
		<p>If you're a Sriracha lover ready to explore authentic Indonesian flavors, start with sambal bali. Its aromatic spices provide a bridge between familiar flavors and traditional Indonesian heat. Once you've adjusted to the intensity, try sambal oelek for the pure chili experience.</p>

		<p>Remember: this isn't just about heat - it's about discovering a completely different approach to spicy food. Indonesian sambal offers complexity, tradition, and flavors that have been perfected over centuries. Welcome to the real world of Indonesian spice.</p>
		`,
		image: "/images/Spice Island Indonesia Sambal Oelek 185g Label.png",
		category: "Food Education",
		readTime: "12 min read",
		publishDate: "2024-02-01",
		author: "Chef Yossie & The Spice Island Team",
	},
	"traditional-sambal-making": {
		title: "The Art of Traditional Sambal Making: A Journey Through the Spice Islands",
		excerpt: "Discover the ancient techniques and secret ingredients that make authentic Indonesian sambal so special.",
		content: `
		<p>In the heart of the Maluku Islands, where the morning mist rises from volcanic peaks and the air is thick with the scent of cloves and nutmeg, lies the birthplace of authentic sambal making. For over 500 years, our family has perfected the art of creating these fiery, complex condiments that have become the soul of Indonesian cuisine.</p>

		<h2>The Sacred Ritual of Chili Selection</h2>
		<p>The journey begins before dawn in the local markets, where experienced sambal makers can identify the perfect chilies by touch alone. The ideal chili for sambal oelek must have the right balance of heat, sweetness, and that distinctive Indonesian terroir that comes from volcanic soil.</p>

		<p>We look for chilies that are firm to the touch, with a deep red color that speaks of perfect ripeness. The skin should have a slight sheen, and when you hold them close, the aroma should be clean and fiery, without any hint of mustiness.</p>

		<h2>Traditional Grinding Techniques</h2>
		<p>The cobek (stone mortar and pestle) is the heart of sambal making. Made from volcanic rock, these tools have been passed down through generations, each one seasoned by countless batches of sambal. The grinding technique is crucial - it's not just about crushing the chilies, but about releasing their essential oils and creating the perfect texture.</p>

		<p>The rhythm of grinding is almost meditative. Start with the hardest ingredients - garlic and shallots if making sambal bali - then add the chilies gradually. The motion should be firm but controlled, allowing the volcanic stone to break down the cell walls and release maximum flavor.</p>

		<h2>The Secret Ingredients</h2>
		<p>While many think sambal is just chilies and salt, authentic recipes include subtle ingredients that create depth and complexity. A touch of palm sugar balances the heat, while a splash of tamarind water adds the perfect acidic note. The salt must be sea salt, preferably from the waters around the Spice Islands.</p>

		<p>Each family guards their exact proportions jealously, but the principle remains the same: balance. Heat without nuance is just pain - true sambal should tell a story with every spoonful.</p>

		<h2>Preserving Tradition in Modern Times</h2>
		<p>As we bring these traditional recipes to the UK, we face the challenge of maintaining authenticity while meeting modern food safety standards. Every jar of our sambal is still made using traditional methods, but we've adapted our processes to ensure consistency and safety without compromising flavor.</p>

		<p>We source our chilies directly from trusted farmers in Indonesia, flash-freeze them at peak ripeness, and transport them to our UK facility where they're processed using the same techniques our ancestors used centuries ago.</p>
		`,
		image: "/images/indonesian_vista.png",
		category: "Traditional Recipes",
		readTime: "8 min read",
		publishDate: "2024-01-15",
		author: "The Spice Island Indonesia Team",
	},
};

interface BlogPostPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateMetadata({
	params,
}: BlogPostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = blogPosts[slug as keyof typeof blogPosts];

	if (!post) {
		return {
			title: "Post Not Found | Spice Island Indonesia Blog",
		};
	}

	return {
		title: `${post.title} | Spice Island Indonesia Blog`,
		description: post.excerpt,
		keywords:
			"Indonesian sambal, traditional recipes, Spice Islands, authentic Indonesian cooking, sambal making techniques",
		openGraph: {
			title: post.title,
			description: post.excerpt,
			images: [post.image],
			type: "article",
		},
	};
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const post = blogPosts[slug as keyof typeof blogPosts];

	if (!post) {
		notFound();
	}

	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			{/* Hero Section */}
			<section className='py-16 bg-gradient-to-br from-burgundy-50 to-gold-50 relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-burgundy-900/5 via-transparent to-gold-600/5'></div>

				<div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<Link
						href='/blog'
						className='inline-flex items-center gap-2 text-burgundy-700 hover:text-burgundy-900 mb-8 font-elegant'
					>
						<ArrowLeft className='w-4 h-4' />
						Back to Blog
					</Link>

					<div className='mb-6'>
						<Badge
							variant='secondary'
							className='mb-4 font-elegant'
						>
							{post.category}
						</Badge>
						<h1 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand leading-tight'>
							{post.title}
						</h1>
						<div className='flex items-center gap-6 text-neutral-600 font-body'>
							<div className='flex items-center gap-2'>
								<Calendar className='w-4 h-4' />
								{new Date(
									post.publishDate
								).toLocaleDateString("en-GB", {
									day: "numeric",
									month: "long",
									year: "numeric",
								})}
							</div>
							<div className='flex items-center gap-2'>
								<Clock className='w-4 h-4' />
								{post.readTime}
							</div>
							<button className='flex items-center gap-2 hover:text-burgundy-700 transition-colors'>
								<Share2 className='w-4 h-4' />
								Share
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Article Content */}
			<article className='py-16'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					{/* Featured Image */}
					<div className='relative aspect-[16/9] rounded-3xl overflow-hidden shadow-luxury mb-12'>
						<Image
							src={post.image}
							alt={post.title}
							fill
							className='object-cover'
							priority
						/>
					</div>

					{/* Article Body */}
					<Card className='shadow-luxury border border-gold-200 bg-gradient-to-br from-cream-50 to-cream-100 rounded-3xl overflow-hidden'>
						<CardContent className='p-8 lg:p-12'>
							<div
								className='prose prose-lg max-w-none font-body text-neutral-700 leading-relaxed'
								dangerouslySetInnerHTML={{
									__html: post.content,
								}}
								style={
									{
										"--tw-prose-headings":
											"rgb(127 29 29)", // burgundy-900
										"--tw-prose-links":
											"rgb(180 83 9)", // gold-700
									} as React.CSSProperties
								}
							/>
						</CardContent>
					</Card>

					{/* Author Bio */}
					<Card className='mt-12 shadow-lg border border-gold-200 bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-2xl'>
						<CardContent className='p-8'>
							<div className='flex items-center gap-4'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center border border-gold-600/30'>
									<span className='text-gold-200 font-bold text-xl font-brand'>
										SI
									</span>
								</div>
								<div>
									<h3 className='text-xl font-bold text-burgundy-900 font-brand'>
										{post.author}
									</h3>
									<p className='text-neutral-700 font-body'>
										Passionate about preserving
										authentic Indonesian culinary
										traditions and sharing the
										rich heritage of the Spice
										Islands with the world.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Related Posts CTA */}
					<div className='mt-16 text-center'>
						<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-brand'>
							Explore More Stories
						</h3>
						<Link
							href='/blog'
							className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 font-bold rounded-full hover:shadow-lg transition-all duration-300 border border-gold-600/30 font-elegant'
						>
							View All Blog Posts
						</Link>
					</div>
				</div>
			</article>
		</div>
	);
}
