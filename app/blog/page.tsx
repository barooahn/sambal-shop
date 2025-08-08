import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ChefHat } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export const metadata: Metadata = {
	title: "Indonesian Cuisine Blog | Spice Island Indonesia | Authentic Recipes & Stories",
	description:
		"Discover authentic Indonesian recipes, cooking tips, and stories from the Spice Islands. Learn about traditional sambal making, Indonesian spices, and culinary heritage.",
	keywords:
		"Indonesian recipes, sambal recipes, Indonesian cooking, Spice Islands, traditional Indonesian cuisine, authentic Indonesian food, Indonesian spices, Maluku recipes",
};

import { blogPosts } from "./posts";

const categories = [
	"All",
	"Cooking Guide",
	"Traditional Recipes",
	"Cooking Tips",
	"Heritage Stories",
	"Food Education",
];

export default function BlogPage() {
	const prioritizedSlugs = [
		"spice-islands-to-your-kitchen",
		"sambal-vs-hot-sauce",
	];
	const postsExceptFeatured = blogPosts.slice(1);
	const prioritized = postsExceptFeatured.filter((p) =>
		prioritizedSlugs.includes(p.slug)
	);
	const others = postsExceptFeatured.filter(
		(p) => !prioritizedSlugs.includes(p.slug)
	);
	const reorderedGridPosts = [...prioritized, ...others];
	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			{/* Hero Section */}
			<section className='py-16 bg-gradient-to-br from-burgundy-50 to-gold-50 relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-burgundy-900/5 via-transparent to-gold-600/5'></div>

				<div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-6 font-brand'>
						Stories from the
						<span className='text-gold-700 block'>
							Spice Islands
						</span>
					</h1>
					<p className='text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed font-body'>
						Discover authentic Indonesian recipes, cooking
						tips, and the rich culinary heritage that inspires
						our traditional sambal making.
					</p>
				</div>
			</section>

			{/* Blog Content */}
			<section className='py-16'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					{/* Category Filter */}
					<div className='flex flex-wrap gap-3 mb-12 justify-center'>
						{categories.map((category) => (
							<Badge
								key={category}
								variant={
									category === "All"
										? "default"
										: "secondary"
								}
								className='px-4 py-2 cursor-pointer hover:bg-burgundy-700 hover:text-gold-200 transition-colors font-elegant'
							>
								{category}
							</Badge>
						))}
					</div>

					{/* Featured Post */}
					<div className='mb-16'>
						<GlassCard
							variant='subtle'
							className='overflow-hidden rounded-sm'
						>
							<div className='grid lg:grid-cols-2 gap-0'>
								<div className='relative aspect-[16/9] lg:aspect-auto'>
									<Image
										src={blogPosts[0].image}
										alt={blogPosts[0].title}
										fill
										className='object-cover'
										priority
									/>
									<div className='absolute top-4 left-4'>
										<Badge className='bg-burgundy-900 text-gold-300 font-elegant'>
											Featured
										</Badge>
									</div>
								</div>
								<div className='p-8 lg:p-12 flex flex-col justify-center'>
									<Badge
										variant='secondary'
										className='w-fit mb-4 font-elegant'
									>
										{blogPosts[0].category}
									</Badge>
									<h2 className='text-3xl font-bold text-burgundy-900 mb-4 font-brand'>
										{blogPosts[0].title}
									</h2>
									<p className='text-neutral-700 mb-6 leading-relaxed font-body'>
										{blogPosts[0].excerpt}
									</p>
									<div className='flex items-center gap-4 text-sm text-neutral-600 mb-6 font-body'>
										<div className='flex items-center gap-1'>
											<Calendar className='w-4 h-4' />
											{new Date(
												blogPosts[0].publishDate
											).toLocaleDateString(
												"en-GB",
												{
													day: "numeric",
													month: "long",
													year: "numeric",
												}
											)}
										</div>
										<div className='flex items-center gap-1'>
											<Clock className='w-4 h-4' />
											{blogPosts[0].readTime}
										</div>
									</div>
									<Link
										href={`/blog/${blogPosts[0].slug}`}
										className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 font-bold rounded-full hover:shadow-lg transition-all duration-300 border border-gold-600/30 font-elegant w-fit'
									>
										Read Full Story
									</Link>
								</div>
							</div>
						</GlassCard>
					</div>

					{/* Blog Grid */}
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{reorderedGridPosts.map((post) => (
							<Card
								key={post.id}
								className='overflow-hidden shadow-lg border border-gold-200 bg-gradient-to-br from-cream-50 to-cream-100 rounded-sm hover:shadow-luxury transition-all duration-300 group'
							>
								<div className='relative aspect-[16/9]'>
									<Image
										src={post.image}
										alt={post.title}
										fill
										className='object-cover group-hover:scale-105 transition-transform duration-300'
										loading='lazy'
									/>
								</div>
								<CardHeader className='pb-3'>
									<div className='flex items-center justify-between mb-2'>
										<Badge
											variant='secondary'
											className='font-elegant'
										>
											{post.category}
										</Badge>
										<div className='flex items-center gap-1 text-xs text-neutral-500 font-body'>
											<Clock className='w-3 h-3' />
											{post.readTime}
										</div>
									</div>
									<CardTitle className='text-xl font-bold text-burgundy-900 font-brand line-clamp-2'>
										{post.title}
									</CardTitle>
								</CardHeader>
								<CardContent className='pt-0'>
									<CardDescription className='text-neutral-700 mb-4 font-body line-clamp-3'>
										{post.excerpt}
									</CardDescription>
									<div className='flex items-center justify-between'>
										<div className='flex items-center gap-1 text-xs text-neutral-500 font-body'>
											<Calendar className='w-3 h-3' />
											{new Date(
												post.publishDate
											).toLocaleDateString(
												"en-GB",
												{
													day: "numeric",
													month: "short",
												}
											)}
										</div>
										<Link
											href={`/blog/${post.slug}`}
											className='text-burgundy-700 hover:text-burgundy-900 font-medium text-sm font-elegant hover:underline'
										>
											Read More →
										</Link>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					{/* Newsletter CTA */}
					<div className='mt-16 text-center'>
						<Card className='max-w-2xl mx-auto shadow-luxury border border-gold-200 bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-sm overflow-hidden'>
							<CardHeader className='pb-6'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-600/30'>
									<ChefHat className='w-8 h-8 text-gold-200' />
								</div>
								<CardTitle className='text-2xl font-bold text-burgundy-900 font-brand'>
									Never Miss a Recipe
								</CardTitle>
								<CardDescription className='text-lg text-neutral-700 font-body'>
									Get the latest Indonesian recipes,
									cooking tips, and stories delivered
									to your inbox
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Link
									href='/#newsletter-signup'
									className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 font-bold rounded-full hover:shadow-lg transition-all duration-300 border border-gold-600/30 font-elegant'
								>
									Subscribe to Our Newsletter
								</Link>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</div>
	);
}
