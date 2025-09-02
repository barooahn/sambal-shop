"use client";
/* eslint-disable @next/next/no-img-element */
import SafeImage from "@/components/optimization/SafeImage";

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useRouter } from "next/navigation";
import { Search, X, Clock, ArrowRight, Loader2 } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/optimization/OptimizedImage";
import { trackEvent } from "@/components/analytics/GoogleAnalytics";

interface SearchResult {
	id: string;
	title?: string;
	description?: string;
	name?: string;
	summary?: string;
	type?: "product" | "recipe" | "article" | "page" | string;
	url?: string;
	category?: string;
	keywords?: string[];
	image?: string;
	thumbnail?: string;
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

interface SearchModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<SearchResult[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [recentSearches, setRecentSearches] = useState<string[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);
	const router = useRouter();

	// Portal setup
	const elRef = useRef<HTMLDivElement | null>(null);

	// Only access document in the browser
	if (typeof window !== "undefined" && !elRef.current) {
		elRef.current = document.createElement("div");
	}

	useEffect(() => {
		const modalRoot = document.body;
		modalRoot.appendChild(elRef.current!);
		return () => {
			modalRoot.removeChild(elRef.current!);
		};
	}, []);

	const categories = [
		{ value: "all", label: "All" },
		{ value: "product", label: "Products" },
		{ value: "recipe", label: "Recipes" },
		{ value: "article", label: "Articles" },
		{ value: "page", label: "Pages" },
	];

	// Focus input when modal opens
	useEffect(() => {
		if (isOpen && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isOpen]);

	// Load recent searches from localStorage
	useEffect(() => {
		const stored = localStorage.getItem("recentSearches");
		if (stored) {
			setRecentSearches(JSON.parse(stored));
		}
	}, []);

	// Debounced search
	useEffect(() => {
		if (!query.trim()) {
			setResults([]);
			return;
		}

		const timeoutId = setTimeout(() => {
			performSearch(query, selectedCategory);
			trackEvent("search_execute", "search", selectedCategory);
		}, 300);

		return () => clearTimeout(timeoutId);
	}, [query, selectedCategory]);

	const performSearch = async (searchQuery: string, category: string) => {
		if (!searchQuery.trim()) return;

		setIsLoading(true);
		try {
			const params = new URLSearchParams({
				q: searchQuery,
				limit: "10",
			});
			if (category !== "all") {
				params.append("category", category);
			}

			const response = await fetch(`/api/search?${params}`);
			const data: SearchResponse = await response.json();
			if (Array.isArray(data.results)) {
				setResults(data.results);
			} else {
				setResults([]);
			}
		} catch (error) {
			console.error("Search error:", error);
			setResults([]);
		} finally {
			setIsLoading(false);
		}
	};

	const handleResultClick = (result: SearchResult) => {
		// Save to recent searches
		const newRecentSearches = [
			query,
			...recentSearches.filter((s) => s !== query),
		].slice(0, 5);
		setRecentSearches(newRecentSearches);
		localStorage.setItem(
			"recentSearches",
			JSON.stringify(newRecentSearches)
		);

		// Navigate to result
		if (result.url) {
			router.push(result.url);
			onClose();
		}
	};

	const handleRecentSearchClick = (searchTerm: string) => {
		setQuery(searchTerm);
		setSelectedCategory("all");
	};

	const clearRecentSearches = () => {
		setRecentSearches([]);
		localStorage.removeItem("recentSearches");
	};

	const getResultIcon = (type?: string) => {
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
		return result.category || "";
	};

	// Handle escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "auto";
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-start overflow-y-auto p-4'>
			<div className='relative w-full sm:max-w-4xl mx-auto my-8 flex flex-col bg-white rounded-lg shadow-lg max-h-[90vh]'>
				{/* Search Header */}
				<div className='border-b border-gray-200 p-6 flex-shrink-0'>
					<div className='flex items-center gap-4 mb-4'>
						<div className='relative flex-1'>
							<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
							<input
								ref={inputRef}
								type='text'
								value={query}
								onChange={(e) =>
									setQuery(e.target.value)
								}
								placeholder='Search products, recipes, articles...'
								className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent text-lg'
							/>
						</div>
						<Button
							variant='ghost'
							size='sm'
							onClick={onClose}
							className='p-2'
						>
							<X className='w-5 h-5' />
						</Button>
					</div>

					{/* Category Filters */}
					<div className='flex gap-2 overflow-x-auto pb-2'>
						{categories.map((category) => (
							<button
								key={category.value}
								onClick={() =>
									setSelectedCategory(category.value)
								}
								className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
									selectedCategory === category.value
										? "bg-burgundy-900 text-white"
										: "bg-gray-100 text-gray-700 hover:bg-gray-200"
								}`}
							>
								{category.label}
							</button>
						))}
					</div>
				</div>

				{/* Search Results */}
				<div className='flex-1 p-6 overflow-y-auto'>
					{isLoading && (
						<div className='flex items-center justify-center py-8'>
							<Loader2 className='w-6 h-6 animate-spin text-burgundy-600' />
							<span className='ml-2 text-gray-600'>
								Searching...
							</span>
						</div>
					)}

					{!isLoading && query && results.length === 0 && (
						<div className='text-center py-8'>
							<p className='text-gray-600 text-lg'>
								No results found for "{query}"
							</p>
							<p className='text-gray-500 text-sm mt-2'>
								Try a different search term or browse
								our categories
							</p>
						</div>
					)}

					{!isLoading && query && results.length > 0 && (
						<div className='space-y-4'>
							<p className='text-sm text-gray-600 font-medium'>
								{results.length} result
								{results.length !== 1 ? "s" : ""} for "
								{query}"
							</p>

							{results.map((result) => (
								<div
									key={
										result.id ||
										result.url ||
										result.title ||
										result.name ||
										Math.random()
									}
									onClick={() =>
										handleResultClick(result)
									}
									className='flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-white cursor-pointer transition-all hover:bg-gray-50'
								>
									{(result.image ||
										result.thumbnail) && (
										<div className='relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100'>
											<SafeImage
												src={
													result.image ||
													result.thumbnail ||
													"/images/optimized/sambal-bali-md.webp"
												}
												width={64}
												height={64}
												priority={false}
												alt={
													result.title ||
													result.name ||
													"Image"
												}
												className='absolute inset-0 w-full h-full object-fill'
											/>
										</div>
									)}
									<div className='flex-1 min-w-0'>
										<h3 className='font-semibold text-black'>
											{getResultIcon(
												result.type
											)}{" "}
											{result.title ||
												result.name ||
												"Untitled"}
										</h3>
										<p className='text-sm text-gray-800 mt-1'>
											{result.description ||
												result.summary ||
												""}
										</p>
										<div className='flex items-center gap-2 mt-2'>
											<span className='text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full'>
												{result.category ||
													result.type ||
													""}
											</span>
											<span className='text-xs text-gray-500'>
												{getResultMeta(
													result
												)}
											</span>
										</div>
									</div>
									<ArrowRight className='w-4 h-4 text-gray-400 transition-colors flex-shrink-0' />
								</div>
							))}
						</div>
					)}

					{!query && recentSearches.length > 0 && (
						<div className='space-y-4'>
							<div className='flex items-center justify-between'>
								<h3 className='font-semibold text-gray-900 flex items-center gap-2'>
									<Clock className='w-4 h-4' />
									Recent Searches
								</h3>
								<button
									onClick={clearRecentSearches}
									className='text-sm text-gray-500 hover:text-gray-700'
								>
									Clear
								</button>
							</div>
							<div className='flex flex-wrap gap-2'>
								{recentSearches.map((search, index) => (
									<button
										key={index}
										onClick={() =>
											handleRecentSearchClick(
												search
											)
										}
										className='px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors'
									>
										{search}
									</button>
								))}
							</div>
						</div>
					)}

					{!query && recentSearches.length === 0 && (
						<div className='text-center py-8'>
							<Search className='w-12 h-12 text-gray-300 mx-auto mb-4' />
							<h3 className='font-semibold text-gray-900 mb-2'>
								Search Spice Island Indonesia
							</h3>
							<p className='text-gray-600'>
								Find products, recipes, articles, and
								more
							</p>

							<div className='grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto'>
								<div className='text-center'>
									<div className='w-12 h-12 bg-burgundy-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
										🛒
									</div>
									<p className='text-sm font-medium text-gray-900'>
										Products
									</p>
									<p className='text-xs text-gray-600'>
										Sambal varieties
									</p>
								</div>
								<div className='text-center'>
									<div className='w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
										👨‍🍳
									</div>
									<p className='text-sm font-medium text-gray-900'>
										Recipes
									</p>
									<p className='text-xs text-gray-600'>
										Indonesian dishes
									</p>
								</div>
								<div className='text-center'>
									<div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
										📖
									</div>
									<p className='text-sm font-medium text-gray-900'>
										Articles
									</p>
									<p className='text-xs text-gray-600'>
										Cooking guides
									</p>
								</div>
								<div className='text-center'>
									<div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
										🚚
									</div>
									<p className='text-sm font-medium text-gray-900'>
										Delivery
									</p>
									<p className='text-xs text-gray-600'>
										Local areas
									</p>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Search Footer */}
				<div className='bg-gray-50 rounded-b-lg p-4 border-t border-gray-200 flex-shrink-0'>
					<div className='flex items-center justify-between text-sm text-gray-600'>
						{/* Keyboard shortcuts - only show on desktop */}
						<div className='hidden sm:flex items-center gap-4'>
							<span>
								Press{" "}
								<kbd className='px-2 py-1 bg-white border rounded text-xs'>
									↵
								</kbd>{" "}
								to navigate
							</span>
							<span>
								Press{" "}
								<kbd className='px-2 py-1 bg-white border rounded text-xs'>
									Esc
								</kbd>{" "}
								to close
							</span>
						</div>
						{/* Mobile - show results count or empty div for spacing */}
						<div className='sm:hidden flex-1'></div>
						{results.length > 0 && (
							<span>{results.length} results</span>
						)}
					</div>
				</div>
			</div>
		</div>,
		elRef.current!
	);
}
