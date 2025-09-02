"use client";
/* eslint-disable @next/next/no-img-element */
import SafeImage from "@/components/optimization/SafeImage";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
	Heart,
	Share2,
	MessageCircle,
	Filter,
	Search,
	Flame,
	Globe,
	ChefHat,
	Calendar,
	User,
} from "@/components/ui/icons";
import { toast } from "sonner";

interface Story {
	id: number;
	customer_name: string;
	story_title: string;
	story_content: string;
	recipe_shared?: string;
	heat_level: number;
	product_used: string;
	cooking_occasion: string;
	fusion_type: string;
	photos?: string[];
	likes_count: number;
	shares_count: number;
	created_at: string;
	featured: boolean;
}

const HEAT_LEVELS = [
	{
		level: 1,
		label: "Mild (Tidak Pedas)",
		emoji: "🌶️",
		color: "bg-gold-50 text-burgundy-700",
		indicator: "gold-400",
	},
	{
		level: 2,
		label: "Medium (Sedang)",
		emoji: "🌶️🌶️",
		color: "bg-gold-100 text-burgundy-800",
		indicator: "gold-500",
	},
	{
		level: 3,
		label: "Hot (Pedas)",
		emoji: "🌶️🌶️🌶️",
		color: "bg-burgundy-50 text-burgundy-800",
		indicator: "burgundy-500",
	},
	{
		level: 4,
		label: "Very Hot (Sangat Pedas)",
		emoji: "🌶️🌶️🌶️🌶️",
		color: "bg-burgundy-100 text-burgundy-900",
		indicator: "burgundy-700",
	},
	{
		level: 5,
		label: "Extreme (Pedas Sekali)",
		emoji: "🔥🔥🔥",
		color: "bg-burgundy-200 text-burgundy-900",
		indicator: "burgundy-800",
	},
];

export default function CommunityFeed() {
	const [stories, setStories] = useState<Story[]>([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [filterHeatLevel, setFilterHeatLevel] = useState<number | null>(
		null
	);
	const [filterFusionType, setFilterFusionType] = useState<string>("");

	useEffect(() => {
		loadStories();
	}, []);

	const loadStories = async () => {
		try {
			const response = await fetch("/api/customer-stories");
			if (response.ok) {
				const data = await response.json();
				if (data.success) {
					setStories(data.stories || []);
				}
			}
		} catch (error) {
			console.error("Failed to load stories:", error);
			// Load mock data for demo
			setStories(getMockStories());
		} finally {
			setLoading(false);
		}
	};

	const handleLike = async (storyId: number) => {
		try {
			const response = await fetch("/api/community-interactions", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					story_id: storyId,
					interaction_type: "like",
					customer_email: "demo@example.com", // In real app, get from auth
				}),
			});

			if (response.ok) {
				setStories((prev) =>
					prev.map((story) =>
						story.id === storyId
							? {
									...story,
									likes_count: story.likes_count + 1,
							  }
							: story
					)
				);
				toast.success("Story liked!");
			}
		} catch (error) {
			toast.error("Failed to like story");
		}
	};

	const handleShare = async (storyId: number) => {
		try {
			await navigator.clipboard.writeText(
				`${window.location.origin}/community/story/${storyId}`
			);

			// Record share interaction
			await fetch("/api/community-interactions", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					story_id: storyId,
					interaction_type: "share",
					customer_email: "demo@example.com",
				}),
			});

			setStories((prev) =>
				prev.map((story) =>
					story.id === storyId
						? {
								...story,
								shares_count: story.shares_count + 1,
						  }
						: story
				)
			);

			toast.success("Story link copied to clipboard!");
		} catch (error) {
			toast.error("Failed to share story");
		}
	};

	const filteredStories = stories.filter((story) => {
		const matchesSearch =
			story.story_title
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			story.story_content
				.toLowerCase()
				.includes(searchTerm.toLowerCase());
		const matchesHeat =
			filterHeatLevel === null || story.heat_level === filterHeatLevel;
		const matchesFusion =
			!filterFusionType || story.fusion_type === filterFusionType;

		return matchesSearch && matchesHeat && matchesFusion;
	});

	const getHeatLevelInfo = (level: number) => {
		return HEAT_LEVELS.find((h) => h.level === level) || HEAT_LEVELS[2];
	};

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric",
		});
	};

	if (loading) {
		return (
			<div className='space-y-4'>
				{[1, 2, 3].map((i) => (
					<Card key={i} className='animate-pulse'>
						<CardContent className='p-6'>
							<div className='h-4 bg-gray-200 rounded w-3/4 mb-4'></div>
							<div className='h-3 bg-gray-200 rounded w-full mb-2'></div>
							<div className='h-3 bg-gray-200 rounded w-2/3'></div>
						</CardContent>
					</Card>
				))}
			</div>
		);
	}

	return (
		<div className='space-y-6'>
			{/* Search and Filters */}
			<div className='flex flex-col md:flex-row gap-4'>
				<div className='flex-1'>
					<Input
						placeholder='Search stories...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>

				<select
					value={filterHeatLevel || ""}
					onChange={(e) =>
						setFilterHeatLevel(
							e.target.value
								? parseInt(e.target.value)
								: null
						)
					}
					className='px-3 py-2 border rounded-md'
				>
					<option value=''>All Heat Levels</option>
					{HEAT_LEVELS.map((level) => (
						<option key={level.level} value={level.level}>
							{level.emoji} {level.label}
						</option>
					))}
				</select>

				<select
					value={filterFusionType}
					onChange={(e) => setFilterFusionType(e.target.value)}
					className='px-3 py-2 border rounded-md'
				>
					<option value=''>All Styles</option>
					<option value='traditional'>
						Traditional Indonesian
					</option>
					<option value='british-fusion'>
						British-Indonesian Fusion
					</option>
					<option value='creative-experiment'>
						Creative Experiment
					</option>
					<option value='family-adaptation'>
						Family Recipe Adaptation
					</option>
				</select>
			</div>

			{/* Stories */}
			<div className='space-y-6'>
				{filteredStories.length === 0 ? (
					<Card className='text-center py-12'>
						<CardContent>
							<div className='text-gray-500 mb-4'>
								<MessageCircle className='w-12 h-12 mx-auto mb-4' />
								<p className='text-lg'>
									No stories found
								</p>
								<p className='text-sm'>
									Try adjusting your search or
									filters
								</p>
							</div>
							<Button
								asChild
								className='bg-burgundy-600 hover:bg-burgundy-700'
							>
								<a href='/community/share-story'>
									Share Your Story
								</a>
							</Button>
						</CardContent>
					</Card>
				) : (
					filteredStories.map((story) => {
						const heatInfo = getHeatLevelInfo(
							story.heat_level
						);

						return (
							<Card
								key={story.id}
								className={`${
									story.featured
										? "border-gold-300 bg-gold-50"
										: "border-gray-200"
								}`}
							>
								<CardHeader className='pb-4'>
									<div className='flex items-start justify-between'>
										<div className='flex-1'>
											<div className='flex items-center gap-2 mb-2'>
												<User className='w-4 h-4 text-gray-500' />
												<span className='font-medium text-burgundy-900'>
													{
														story.customer_name
													}
												</span>
												{story.featured && (
													<Badge className='bg-gold-100 text-gold-800'>
														⭐
														Featured
													</Badge>
												)}
											</div>
											<CardTitle className='text-xl text-burgundy-900 mb-2'>
												{story.story_title}
											</CardTitle>
											<div className='flex flex-wrap gap-2 mb-3'>
												<Badge
													className={
														heatInfo.color
													}
												>
													<Flame className='w-3 h-3 mr-1' />
													{
														heatInfo.emoji
													}{" "}
													{
														heatInfo.label
													}
												</Badge>
												<Badge variant='outline'>
													<ChefHat className='w-3 h-3 mr-1' />
													{
														story.product_used
													}
												</Badge>
												<Badge variant='outline'>
													<Globe className='w-3 h-3 mr-1' />
													{story.fusion_type
														.replace(
															"-",
															" "
														)
														.replace(
															/\b\w/g,
															(
																l
															) =>
																l.toUpperCase()
														)}
												</Badge>
											</div>
										</div>
										<div className='text-sm text-gray-500 flex items-center'>
											<Calendar className='w-4 h-4 mr-1' />
											{formatDate(
												story.created_at
											)}
										</div>
									</div>
								</CardHeader>

								<CardContent className='space-y-4'>
									{/* Photos */}
									{story.photos &&
										story.photos.length > 0 && (
											<div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
												{story.photos
													.slice(0, 4)
													.map(
														(
															photo,
															index
														) => (
															<SafeImage 
																key={index} 
																src={photo} 
																alt={`${story.story_title} ${index + 1}`} 
																className='w-full h-24 object-cover rounded-lg border-2 border-gray-100' 
																width={240} 
																height={96} 
																priority={false} 
															/>
														)
													)}
											</div>
										)}

									{/* Story Content */}
									<div className='prose prose-sm max-w-none'>
										<p className='text-gray-700 leading-relaxed'>
											{story.story_content}
										</p>
									</div>

									{/* Recipe */}
									{story.recipe_shared && (
										<div className='bg-burgundy-50 border-l-4 border-burgundy-300 p-4 rounded'>
											<h4 className='font-semibold text-burgundy-900 mb-2 flex items-center'>
												<ChefHat className='w-4 h-4 mr-2' />
												Shared Recipe
											</h4>
											<p className='text-burgundy-800 text-sm whitespace-pre-line'>
												{
													story.recipe_shared
												}
											</p>
										</div>
									)}

									{/* Actions */}
									<div className='flex items-center justify-between pt-4 border-t border-gray-100'>
										<div className='flex items-center space-x-6'>
											<button
												onClick={() =>
													handleLike(
														story.id
													)
												}
												className='flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors'
											>
												<Heart className='w-5 h-5' />
												<span className='text-sm'>
													{
														story.likes_count
													}
												</span>
											</button>

											<button
												onClick={() =>
													handleShare(
														story.id
													)
												}
												className='flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors'
											>
												<Share2 className='w-5 h-5' />
												<span className='text-sm'>
													{
														story.shares_count
													}
												</span>
											</button>
										</div>

										<Badge
											variant='outline'
											className='text-xs'
										>
											{story.cooking_occasion
												.replace("-", " ")
												.replace(
													/\b\w/g,
													(l) =>
														l.toUpperCase()
												)}
										</Badge>
									</div>
								</CardContent>
							</Card>
						);
					})
				)}
			</div>

			{/* Load More */}
			{filteredStories.length > 0 && (
				<div className='text-center'>
					<Button
						variant='outline'
						className='border-burgundy-600 text-burgundy-600 hover:bg-burgundy-600 hover:text-white'
					>
						Load More Stories
					</Button>
				</div>
			)}
		</div>
	);
}

// Mock data for demo purposes
function getMockStories(): Story[] {
	return [
		{
			id: 1,
			customer_name: "Sarah M.",
			story_title: "My First Indonesian Sunday Roast",
			story_content:
				"I decided to try something different for Sunday lunch and used Sambal Oelek as a marinade for our traditional roast chicken. The results were absolutely incredible! My family, who are usually quite conservative with spices, were asking for seconds. The heat level was perfect - warming but not overwhelming. It's now become our new Sunday tradition!",
			recipe_shared:
				"Sambal Sunday Roast Chicken:\n1 whole chicken\n3 tbsp Sambal Oelek\n2 tbsp honey\n1 tbsp soy sauce\n1 tbsp olive oil\n\nMix ingredients, marinate for 2 hours, roast at 180°C for 1 hour 15 mins.",
			heat_level: 3,
			product_used: "Sambal Oelek - Original",
			cooking_occasion: "sunday-roast",
			fusion_type: "british-fusion",
			photos: [],
			likes_count: 24,
			shares_count: 8,
			created_at: "2025-08-28T14:30:00Z",
			featured: true,
		},
		{
			id: 2,
			customer_name: "Ahmed K.",
			story_title: "Sambal Transformed My Weeknight Dinners",
			story_content:
				"As someone who cooks for the family every night, I was getting bored with the same old flavours. A friend recommended trying sambal, and it's been a game-changer! I now add it to stir-fries, pasta sauces, even scrambled eggs. My teenage kids have gone from picky eaters to asking 'what's for dinner?' with genuine excitement.",
			heat_level: 2,
			product_used: "Sambal Badjak - Sweet & Spicy",
			cooking_occasion: "quick-weeknight",
			fusion_type: "creative-experiment",
			photos: [],
			likes_count: 31,
			shares_count: 12,
			created_at: "2025-08-25T19:45:00Z",
			featured: false,
		},
		{
			id: 3,
			customer_name: "Emma L.",
			story_title: "Bringing Indonesia to Manchester",
			story_content:
				"Having lived in Jakarta for two years, I've been desperately missing authentic Indonesian flavours since moving back to Manchester. This sambal is the closest I've found to what I remember from the street food stalls. I made gado-gado for my friends last weekend, and they couldn't believe how amazing it was!",
			recipe_shared:
				"Quick Gado-Gado:\nBlanched vegetables (cabbage, bean sprouts, green beans)\nBoiled eggs\nTofu cubes\nSambal dressing: 2 tbsp sambal + 1 tbsp peanut butter + lime juice + a little warm water",
			heat_level: 4,
			product_used: "Sambal Oelek - Extra Hot",
			cooking_occasion: "dinner-party",
			fusion_type: "traditional",
			photos: [],
			likes_count: 18,
			shares_count: 6,
			created_at: "2025-08-23T16:20:00Z",
			featured: false,
		},
	];
}
