"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
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

import { blogPosts } from "./posts";

// Get unique categories from actual blog posts
const getUniqueCategories = () => {
	const categories = blogPosts.map((post) => post.category);
	return ["All", ...Array.from(new Set(categories))];
};

export default function BlogPage() {
	const [activeCategory, setActiveCategory] = useState("All");
	const categories = getUniqueCategories();

	// Filter posts based on active category and sort oldest first
	const filteredPosts = useMemo(() => {
		const posts =
			activeCategory === "All"
				? blogPosts
				: blogPosts.filter((post) => post.category === activeCategory);

		// Always sort by publishDate ascending (oldest first)
		return [...posts].sort(
			(a, b) =>
				new Date(a.publishDate).getTime() -
				new Date(b.publishDate).getTime()
		);
	}, [activeCategory]);

	// Get featured post (first post if All, first of filtered category if specific)
	const featuredPost = filteredPosts[0];

	// Get grid posts (excluding featured)
	const gridPosts = filteredPosts.slice(1);

	// Prioritize certain posts when showing "All" category
	const prioritizedSlugs = [
		"spice-islands-to-your-kitchen",
		"sambal-vs-hot-sauce",
	];

	const reorderedGridPosts =
		activeCategory === "All" && gridPosts.length > 0
			? (() => {
					const prioritized = gridPosts.filter((p) =>
						prioritizedSlugs.includes(p.slug)
					);
					const others = gridPosts.filter(
						(p) => !prioritizedSlugs.includes(p.slug)
					);
					return [...prioritized, ...others];
				})()
			: gridPosts;
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
									category === activeCategory
										? "default"
										: "secondary"
								}
								className={`px-4 py-2 cursor-pointer transition-colors font-elegant ${
									category === activeCategory
										? "bg-burgundy-700 text-gold-200"
										: "hover:bg-burgundy-700 hover:text-gold-200"
								}`}
								onClick={() =>
									setActiveCategory(category)
								}
							>
								{category}
							</Badge>
						))}
					</div>

					{/* Featured Post */}
					{featuredPost && (
						<div className='mb-16'>
							<GlassCard
								variant='subtle'
								className='overflow-hidden rounded-sm'
							>
								<div className='grid lg:grid-cols-2 gap-0'>
									<div className='relative aspect-[16/9] lg:aspect-auto overflow-hidden'>
										<Image
											src={featuredPost.image}
											alt={featuredPost.title}
											fill
											className='object-cover object-center'
											priority
										/>
										<div className='absolute top-4 left-4'>
											<Badge className='bg-burgundy-900 text-gold-300 font-elegant'>
												{activeCategory ===
												"All"
													? "Featured"
													: `${activeCategory} Featured`}
											</Badge>
										</div>
									</div>
									<div className='p-8 lg:p-12 flex flex-col justify-center'>
										<Badge
											variant='secondary'
											className='w-fit mb-4 font-elegant'
										>
											{featuredPost.category}
										</Badge>
										<h2 className='text-3xl font-bold text-burgundy-900 mb-4 font-brand'>
											{featuredPost.title}
										</h2>
										<p className='text-neutral-700 mb-6 leading-relaxed font-body'>
											{featuredPost.excerpt}
										</p>
										<div className='flex items-center gap-4 text-sm text-neutral-600 mb-6 font-body'>
											<div className='flex items-center gap-1'>
												<Calendar className='w-4 h-4' />
												{new Date(
													featuredPost.publishDate
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
												{
													featuredPost.readTime
												}
											</div>
										</div>
										<Link
											href={`/blog/${featuredPost.slug}`}
											className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 font-bold rounded-full hover:shadow-lg transition-all duration-300 border border-gold-600/30 font-elegant w-fit'
										>
											Read Full Story
										</Link>
									</div>
								</div>
							</GlassCard>
						</div>
					)}

					{/* Results count and status */}
					{filteredPosts.length > 0 && (
						<div className='mb-8 text-center'>
							<p className='text-neutral-600 font-body'>
								{activeCategory === "All"
									? `Showing all ${filteredPosts.length} articles`
									: `${filteredPosts.length} article${filteredPosts.length !== 1 ? "s" : ""} in "${activeCategory}"`}
							</p>
						</div>
					)}

					{/* No posts message */}
					{filteredPosts.length === 0 && (
						<div className='text-center py-12'>
							<div className='max-w-md mx-auto'>
								<ChefHat className='w-16 h-16 text-neutral-400 mx-auto mb-4' />
								<h3 className='text-xl font-semibold text-neutral-700 mb-2'>
									No articles in this category yet
								</h3>
								<p className='text-neutral-600 mb-6'>
									We're working on more content for "
									{activeCategory}". Check back soon
									or browse other categories.
								</p>
								<Badge
									variant='secondary'
									className='cursor-pointer hover:bg-burgundy-700 hover:text-gold-200 transition-colors'
									onClick={() =>
										setActiveCategory("All")
									}
								>
									View All Articles
								</Badge>
							</div>
						</div>
					)}

					{/* Blog Grid */}
					{reorderedGridPosts.length > 0 && (
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{reorderedGridPosts.map((post) => (
								<Card
									key={post.id}
									className='overflow-hidden shadow-lg border border-gold-200 bg-gradient-to-br from-cream-50 to-cream-100 rounded-sm hover:shadow-luxury transition-all duration-300 group'
								>
									<div className='relative aspect-[16/9] overflow-hidden'>
										<Image
											src={post.image}
											alt={post.title}
											fill
											className='object-cover object-center group-hover:scale-105 transition-transform duration-300'
											loading='lazy'
										/>
										{/* Overlay for better text readability */}
										<div className='absolute top-3 left-3 right-3 flex items-start justify-between'>
											<Badge
												variant='secondary'
												className='font-elegant bg-white/90 text-neutral-800 backdrop-blur-sm'
											>
												{post.category}
											</Badge>
											<div className='flex items-center gap-1 text-xs bg-white/90 text-neutral-600 font-body px-2 py-1 rounded backdrop-blur-sm'>
												<Clock className='w-3 h-3' />
												{post.readTime}
											</div>
										</div>
									</div>
									<CardHeader className='pb-3'>
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
					)}

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
