"use client";

import { FC } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, ShoppingCart } from "lucide-react";
import { trackEvent } from "@/components/analytics/GoogleAnalytics";

interface RelatedProduct {
	name: string;
	url: string;
	description: string;
	rating: number;
	price: string;
	badge?: string;
}

interface RelatedRecipe {
	name: string;
	url: string;
	description: string;
	difficulty: "Easy" | "Medium" | "Hard";
	cookTime: string;
}

interface RelatedArticle {
	title: string;
	url: string;
	excerpt: string;
	readTime: string;
	category: string;
}

interface InternalLinkingOptimizationProps {
	currentPage: "product" | "recipe" | "blog" | "homepage";
	relatedProducts?: RelatedProduct[];
	relatedRecipes?: RelatedRecipe[];
	relatedArticles?: RelatedArticle[];
	className?: string;
}

const InternalLinkingOptimization: FC<InternalLinkingOptimizationProps> = ({
	currentPage,
	relatedProducts = [],
	relatedRecipes = [],
	relatedArticles = [],
	className = "",
}) => {
	const getDifficultyColor = (difficulty: string) => {
		switch (difficulty) {
			case "Easy":
				return "bg-green-100 text-green-800";
			case "Medium":
				return "bg-yellow-100 text-yellow-800";
			case "Hard":
				return "bg-red-100 text-red-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	return (
		<div className={`space-y-8 ${className}`}>
			{/* Related Products Section */}
			{relatedProducts.length > 0 && (
				<section>
					<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-heading'>
						🛒 Perfect Ingredients for This Recipe
					</h3>
					<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
						{relatedProducts.map((product, index) => (
							<Card
								key={index}
								className='border border-gold-200 hover:shadow-lg transition-shadow duration-300'
							>
								<CardContent className='p-4'>
									<div className='flex justify-between items-start mb-2'>
										<h4 className='font-bold text-burgundy-900 text-sm'>
											{product.name}
										</h4>
										{product.badge && (
											<Badge className='bg-burgundy-100 text-burgundy-800 text-xs'>
												{product.badge}
											</Badge>
										)}
									</div>

									<p className='text-gray-600 text-sm mb-3 line-clamp-2'>
										{product.description}
									</p>

									<div className='flex items-center justify-between mb-3'>
										<div className='flex items-center space-x-1'>
											<Star className='w-4 h-4 text-gold-500 fill-gold-500' />
											<span className='text-sm font-medium text-gray-700'>
												{product.rating}
											</span>
										</div>
										<span className='font-bold text-burgundy-900'>
											{product.price}
										</span>
									</div>

									<Link
										onClick={() =>
											trackEvent(
												"internal_cta_click",
												"product_cta",
												product.name
											)
										}
										href={product.url}
										className='inline-flex items-center w-full justify-center px-4 py-2 bg-burgundy-600 text-white text-sm font-medium rounded-md hover:bg-burgundy-700 transition-colors duration-200'
									>
										<ShoppingCart className='w-4 h-4 mr-2' />
										Shop Now
									</Link>
								</CardContent>
							</Card>
						))}
					</div>
				</section>
			)}

			{/* Related Recipes Section */}
			{relatedRecipes.length > 0 && (
				<section>
					<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-heading'>
						👨‍🍳 More Delicious Sambal Recipes
					</h3>
					<div className='grid gap-4 md:grid-cols-2'>
						{relatedRecipes.map((recipe, index) => (
							<Card
								key={index}
								className='border border-gold-200 hover:shadow-lg transition-shadow duration-300'
							>
								<CardContent className='p-4'>
									<div className='flex justify-between items-start mb-2'>
										<h4 className='font-bold text-burgundy-900'>
											{recipe.name}
										</h4>
										<Badge
											className={`text-xs ${getDifficultyColor(
												recipe.difficulty
											)}`}
										>
											{recipe.difficulty}
										</Badge>
									</div>

									<p className='text-gray-600 text-sm mb-3'>
										{recipe.description}
									</p>

									<div className='flex items-center justify-between'>
										<span className='text-sm text-gray-500'>
											⏱️ {recipe.cookTime}
										</span>
										<Link
											onClick={() =>
												trackEvent(
													"internal_cta_click",
													"recipe_cta",
													recipe.name
												)
											}
											href={recipe.url}
											className='inline-flex items-center text-burgundy-600 hover:text-burgundy-800 font-medium text-sm transition-colors duration-200'
										>
											Try Recipe
											<ArrowRight className='w-4 h-4 ml-1' />
										</Link>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</section>
			)}

			{/* Related Articles Section */}
			{relatedArticles.length > 0 && (
				<section>
					<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-heading'>
						📚 Learn More About Indonesian Cuisine
					</h3>
					<div className='space-y-4'>
						{relatedArticles.map((article, index) => (
							<Card
								key={index}
								className='border border-gold-200 hover:shadow-lg transition-shadow duration-300'
							>
								<CardContent className='p-4'>
									<div className='flex justify-between items-start mb-2'>
										<h4 className='font-bold text-burgundy-900 text-lg'>
											{article.title}
										</h4>
										<Badge
											variant='outline'
											className='text-xs'
										>
											{article.category}
										</Badge>
									</div>

									<p className='text-gray-600 mb-3'>
										{article.excerpt}
									</p>

									<div className='flex items-center justify-between'>
										<span className='text-sm text-gray-500'>
											📖 {article.readTime}{" "}
											read
										</span>
										<Link
											onClick={() =>
												trackEvent(
													"internal_cta_click",
													"article_cta",
													article.title
												)
											}
											href={article.url}
											className='inline-flex items-center text-burgundy-600 hover:text-burgundy-800 font-medium transition-colors duration-200'
										>
											Read Article
											<ArrowRight className='w-4 h-4 ml-1' />
										</Link>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</section>
			)}
		</div>
	);
};

export default InternalLinkingOptimization;
