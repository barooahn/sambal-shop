"use client";

import SafeImage from "@/components/optimization/SafeImage";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, Filter, Grid, List } from "@/components/ui/icons";
import { Button } from "@/components/ui/simple-button";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "@/components/optimization/OptimizedImage";
import Link from "next/link";

interface SearchResult {
	id: string;
	title: string;
	description: string;
	type: "product" | "recipe" | "article" | "page";
	url: string;
	category: string;
	keywords: string[];
	image?: string;
	price?: string;
	cookTime?: string;
	difficulty?: string;
	readTime?: string;
}

interface SearchResponse {
	results: SearchResult[];
	total: number;
	query: string;
	category: string;
	limit: number;
	hasMore: boolean;
}

function SearchPageContent() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [results, setResults] = useState<SearchResult[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [query, setQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
	const [total, setTotal] = useState(0);

	const categories = [
		{ value: "all", label: "All", count: 0 },
		{ value: "product", label: "Products", count: 0 },
		{ value: "recipe", label: "Recipes", count: 0 },
		{ value: "article", label: "Articles", count: 0 },
		{ value: "page", label: "Pages", count: 0 },
	];

	// Get initial search params
	useEffect(() => {
		const q = searchParams.get("q") || "";
		const category = searchParams.get("category") || "all";
		setQuery(q);
		setSelectedCategory(category);

		if (q) {
			performSearch(q, category);
		}
	}, [searchParams]);

	const performSearch = async (searchQuery: string, category: string) => {
		if (!searchQuery.trim()) {
			setResults([]);
			setTotal(0);
			return;
		}

		setIsLoading(true);
		try {
			const params = new URLSearchParams({
				q: searchQuery,
				category,
				limit: "20",
			});

			const response = await fetch(`/api/search?${params}`);
			const data: SearchResponse = await response.json();

			setResults(data.results);
			setTotal(data.total);
		} catch (error) {
			console.error("Search error:", error);
			setResults([]);
			setTotal(0);
		} finally {
			setIsLoading(false);
		}
	};

	const handleSearch = (newQuery: string) => {
		setQuery(newQuery);
		const params = new URLSearchParams();
		if (newQuery) params.set("q", newQuery);
		if (selectedCategory !== "all")
			params.set("category", selectedCategory);

		router.push(`/search?${params.toString()}`);
	};

	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category);
		const params = new URLSearchParams();
		if (query) params.set("q", query);
		if (category !== "all") params.set("category", category);

		router.push(`/search?${params.toString()}`);
	};

	const getResultIcon = (type: string) => {
		switch (type) {
			case "product":
				return "🛒";
			case "recipe":
				return "👨‍🍳";
			case "article":
				return "📖";
			default:
				return "📄";
		}
	};

	const getResultMeta = (result: SearchResult) => {
		if (result.price) return result.price;
		if (result.cookTime)
			return `${result.cookTime} • ${result.difficulty}`;
		if (result.readTime) return result.readTime;
		return result.category;
	};

	const getCategoryCount = (categoryValue: string) => {
		if (categoryValue === "all") return total;
		return results.filter((r) => r.type === categoryValue).length;
	};

	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			<div className='container mx-auto px-4 py-8'>
				{/* Search Header */}
				<div className='mb-8'>
					<h2 className='text-3xl font-bold text-burgundy-900 mb-4 font-brand'>
						Search Results
					</h2>

					{/* Search Input */}
					<div className='relative max-w-2xl'>
						<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
						<input
							type='text'
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							onKeyDown={(e) =>
								e.key === "Enter" && handleSearch(query)
							}
							placeholder='Search products, recipes, articles...'
							className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent text-lg'
						/>
						<Button
							onClick={() => handleSearch(query)}
							className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-burgundy-900 hover:bg-burgundy-800'
							size='sm'
						>
							Search
						</Button>
					</div>
				</div>

				<div className='flex flex-col lg:flex-row gap-8'>
					{/* Sidebar Filters - Hidden in mobile to reduce scroll areas */}
					<div className='hidden lg:block lg:w-64 flex-shrink-0'>
						<Card>
							<CardContent className='p-6'>
								<div className='flex items-center gap-2 mb-4'>
									<Filter className='w-4 h-4' />
									<h3 className='font-semibold'>
										Filters
									</h3>
								</div>

								<div className='space-y-2'>
									<h4 className='text-sm font-medium text-gray-700 mb-2'>
										Category
									</h4>
									{categories.map((category) => (
										<button
											key={category.value}
											onClick={() =>
												handleCategoryChange(
													category.value
												)
											}
											className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between ${
												selectedCategory ===
												category.value
													? "bg-burgundy-100 text-burgundy-900 font-medium"
													: "hover:bg-gray-100 text-gray-700"
											}`}
										>
											<span>
												{category.label}
											</span>
											<span className='text-xs text-gray-500'>
												{getCategoryCount(
													category.value
												)}
											</span>
										</button>
									))}
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Mobile Filter Buttons - Horizontal scroll alternative */}
					<div className='lg:hidden mb-6'>
						<div className='flex gap-2 overflow-x-auto pb-2 scrollbar-hide'>
							{categories.map((category) => (
								<button
									key={category.value}
									onClick={() =>
										handleCategoryChange(
											category.value
										)
									}
									className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition-colors ${
										selectedCategory ===
										category.value
											? "bg-burgundy-900 text-white"
											: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
									}`}
								>
									{category.label} (
									{getCategoryCount(category.value)})
								</button>
							))}
						</div>
					</div>

					{/* Main Content */}
					<div className='flex-1'>
						{/* Results Header */}
						<div className='flex items-center justify-between mb-6'>
							<div>
								{query && (
									<p className='text-gray-600'>
										{isLoading
											? "Searching..."
											: `${total} result${
													total !== 1
														? "s"
														: ""
											  } for "${query}"`}
									</p>
								)}
							</div>

							<div className='flex items-center gap-2'>
								<Button
									variant={
										viewMode === "grid"
											? "default"
											: "outline"
									}
									size='sm'
									onClick={() => setViewMode("grid")}
								>
									<Grid className='w-4 h-4' />
								</Button>
								<Button
									variant={
										viewMode === "list"
											? "default"
											: "outline"
									}
									size='sm'
									onClick={() => setViewMode("list")}
								>
									<List className='w-4 h-4' />
								</Button>
							</div>
						</div>

						{/* Results */}
						{isLoading && (
							<div className='flex items-center justify-center py-12'>
								<div className='animate-spin w-8 h-8 border-4 border-burgundy-200 border-t-burgundy-600 rounded-full'></div>
								<span className='ml-3 text-gray-600'>
									Searching...
								</span>
							</div>
						)}

						{!isLoading && query && results.length === 0 && (
							<Card className='p-12 text-center'>
								<h3 className='text-xl font-semibold text-gray-900 mb-2'>
									No results found
								</h3>
								<p className='text-gray-600 mb-6'>
									Try adjusting your search terms or
									browse our categories
								</p>
								<div className='flex flex-wrap gap-2 justify-center'>
									<Link href='/shop'>
										<Button variant='outline'>
											Browse Products
										</Button>
									</Link>
									<Link href='/recipes'>
										<Button variant='outline'>
											View Recipes
										</Button>
									</Link>
									<Link href='/blog'>
										<Button variant='outline'>
											Read Articles
										</Button>
									</Link>
								</div>
							</Card>
						)}

						{!isLoading && results.length > 0 && (
							<div
								className={
									viewMode === "grid"
										? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
										: "space-y-4"
								}
							>
								{results.map((result) => (
									<Link
										key={result.id}
										href={result.url}
									>
										<Card className='h-full hover:shadow-lg transition-shadow cursor-pointer group'>
											<CardContent
												className={`p-6 ${
													viewMode ===
													"list"
														? "flex items-center gap-4"
														: ""
												}`}
											>
												{result.image && (
													<div
														className={`relative bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 ${
															viewMode ===
															"list"
																? "w-20 h-20"
																: "w-full h-48 mb-4"
														}`}
													>
														<SafeImage
															src={
																result.image
															}
															alt={
																result.title
															}
															className='absolute inset-0 w-full h-full object-fill group-hover:scale-105 transition-transform duration-300'
															fill
															sizes='(max-width: 768px) 100vw, 33vw'
															priority={
																false
															}
														/>
													</div>
												)}

												<div className='flex-1'>
													<div className='flex items-start justify-between gap-2 mb-2'>
														<h3 className='font-semibold text-gray-900 group-hover:text-burgundy-900 transition-colors'>
															{getResultIcon(
																result.type
															)}{" "}
															{
																result.title
															}
														</h3>
													</div>

													<p
														className={`text-gray-600 mb-3 ${
															viewMode ===
															"list"
																? "line-clamp-2"
																: "line-clamp-3"
														}`}
													>
														{
															result.description
														}
													</p>

													<div className='flex items-center gap-2'>
														<span className='text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full'>
															{
																result.category
															}
														</span>
														<span className='text-sm text-gray-500'>
															{getResultMeta(
																result
															)}
														</span>
													</div>
												</div>
											</CardContent>
										</Card>
									</Link>
								))}
							</div>
						)}

						{!query && (
							<Card className='p-12 text-center'>
								<Search className='w-16 h-16 text-gray-300 mx-auto mb-4' />
								<h3 className='text-xl font-semibold text-gray-900 mb-2'>
									Search Spice Island Indonesia
								</h3>
								<p className='text-gray-600 mb-6'>
									Find products, recipes, articles,
									and more
								</p>

								<div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
									<div className='text-center'>
										<div className='w-16 h-16 bg-burgundy-100 rounded-lg flex items-center justify-center mx-auto mb-3'>
											🛒
										</div>
										<h4 className='font-medium text-gray-900 mb-1'>
											Products
										</h4>
										<p className='text-sm text-gray-600'>
											Authentic sambal
											varieties
										</p>
									</div>
									<div className='text-center'>
										<div className='w-16 h-16 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-3'>
											👨‍🍳
										</div>
										<h4 className='font-medium text-gray-900 mb-1'>
											Recipes
										</h4>
										<p className='text-sm text-gray-600'>
											Indonesian dishes
										</p>
									</div>
									<div className='text-center'>
										<div className='w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3'>
											📖
										</div>
										<h4 className='font-medium text-gray-900 mb-1'>
											Articles
										</h4>
										<p className='text-sm text-gray-600'>
											Cooking guides
										</p>
									</div>
									<div className='text-center'>
										<div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3'>
											🚚
										</div>
										<h4 className='font-medium text-gray-900 mb-1'>
											Delivery
										</h4>
										<p className='text-sm text-gray-600'>
											Local areas
										</p>
									</div>
								</div>
							</Card>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default function SearchPage() {
	return (
		<Suspense
			fallback={
				<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100 flex items-center justify-center'>
					<div className='animate-spin w-8 h-8 border-4 border-burgundy-200 border-t-burgundy-600 rounded-full'></div>
				</div>
			}
		>
			<SearchPageContent />
		</Suspense>
	);
}
