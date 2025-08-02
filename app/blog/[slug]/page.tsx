import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
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
