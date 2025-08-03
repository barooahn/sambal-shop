import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, Star } from "lucide-react";
import OptimizedImage from "@/components/optimization/OptimizedImage";
import RecipeSchema from "@/components/seo/RecipeSchema";
import GlassCard from "@/components/ui/GlassCard";

interface RecipeCardProps {
	recipe: {
		name: string;
		description: string;
		image: string;
		prepTime: string;
		cookTime: string;
		totalTime: string;
		servings: number;
		difficulty: "Easy" | "Medium" | "Hard";
		cuisine: string;
		category: string;
		ingredients: string[];
		instructions: {
			step: number;
			text: string;
		}[];
		nutrition?: {
			calories?: number;
			protein?: string;
			carbohydrates?: string;
			fat?: string;
			sodium?: string;
		};
		author: {
			name: string;
			type: "Person" | "Organization";
		};
		datePublished: string;
		keywords: string[];
		rating?: number;
		reviewCount?: number;
	};
	showFullRecipe?: boolean;
}

export default function RecipeCard({
	recipe,
	showFullRecipe = false,
}: RecipeCardProps) {
	const formatTime = (isoTime: string) => {
		// Convert ISO 8601 duration to readable format
		const match = isoTime.match(/PT(\d+H)?(\d+M)?/);
		if (!match) return isoTime;

		const hours = match[1] ? parseInt(match[1]) : 0;
		const minutes = match[2] ? parseInt(match[2]) : 0;

		if (hours > 0) {
			return `${hours}h ${minutes}m`;
		}
		return `${minutes}m`;
	};

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
		<>
			{/* Recipe Schema for SEO */}
			<RecipeSchema recipe={recipe} />

			<GlassCard
				variant='subtle'
				className='overflow-hidden rounded-2xl'
			>
				{/* Recipe Image */}
				<div className='relative aspect-[4/3]'>
					<OptimizedImage
						src={recipe.image}
						alt={`${recipe.name} - Indonesian recipe with sambal`}
						width={400}
						height={300}
						className='w-full h-full object-cover'
						quality={90}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
					<div className='absolute top-4 left-4'>
						<Badge
							className={getDifficultyColor(
								recipe.difficulty
							)}
						>
							{recipe.difficulty}
						</Badge>
					</div>
					{recipe.rating && (
						<div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1'>
							<Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
							<span className='text-sm font-semibold'>
								{recipe.rating}
							</span>
							{recipe.reviewCount && (
								<span className='text-xs text-gray-600'>
									({recipe.reviewCount})
								</span>
							)}
						</div>
					)}
				</div>

				<CardHeader className='pb-4'>
					<div className='flex items-center gap-2 mb-2'>
						<Badge
							variant='secondary'
							className='font-elegant'
						>
							{recipe.category}
						</Badge>
						<Badge variant='outline' className='font-elegant'>
							{recipe.cuisine}
						</Badge>
					</div>
					<CardTitle className='text-xl font-bold text-burgundy-900 font-brand'>
						{recipe.name}
					</CardTitle>
					<p className='text-gray-600 font-body'>
						{recipe.description}
					</p>
				</CardHeader>

				<CardContent className='space-y-6'>
					{/* Recipe Stats */}
					<div className='grid grid-cols-3 gap-4 text-center'>
						<div className='flex flex-col items-center gap-1'>
							<Clock className='w-5 h-5 text-burgundy-600' />
							<span className='text-sm font-semibold text-burgundy-900'>
								{formatTime(recipe.totalTime)}
							</span>
							<span className='text-xs text-gray-600'>
								Total Time
							</span>
						</div>
						<div className='flex flex-col items-center gap-1'>
							<Users className='w-5 h-5 text-burgundy-600' />
							<span className='text-sm font-semibold text-burgundy-900'>
								{recipe.servings}
							</span>
							<span className='text-xs text-gray-600'>
								Servings
							</span>
						</div>
						<div className='flex flex-col items-center gap-1'>
							<ChefHat className='w-5 h-5 text-burgundy-600' />
							<span className='text-sm font-semibold text-burgundy-900'>
								{recipe.difficulty}
							</span>
							<span className='text-xs text-gray-600'>
								Level
							</span>
						</div>
					</div>

					{showFullRecipe && (
						<>
							{/* Ingredients */}
							<div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-brand'>
									Ingredients
								</h3>
								<ul className='space-y-2'>
									{recipe.ingredients.map(
										(ingredient, index) => (
											<li
												key={index}
												className='flex items-start gap-2 text-gray-700 font-body'
											>
												<span className='w-2 h-2 bg-burgundy-600 rounded-full mt-2 flex-shrink-0'></span>
												{ingredient}
											</li>
										)
									)}
								</ul>
							</div>

							{/* Instructions */}
							<div>
								<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-brand'>
									Instructions
								</h3>
								<ol className='space-y-3'>
									{recipe.instructions.map(
										(instruction) => (
											<li
												key={
													instruction.step
												}
												className='flex gap-3'
											>
												<span className='w-6 h-6 bg-burgundy-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
													{
														instruction.step
													}
												</span>
												<p className='text-gray-700 font-body leading-relaxed'>
													{
														instruction.text
													}
												</p>
											</li>
										)
									)}
								</ol>
							</div>

							{/* Nutrition Info */}
							{recipe.nutrition && (
								<div>
									<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-brand'>
										Nutrition Information
									</h3>
									<div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
										{recipe.nutrition
											.calories && (
											<div className='text-center p-3 bg-burgundy-50 rounded-lg'>
												<div className='text-lg font-bold text-burgundy-900'>
													{
														recipe
															.nutrition
															.calories
													}
												</div>
												<div className='text-xs text-gray-600'>
													Calories
												</div>
											</div>
										)}
										{recipe.nutrition.protein && (
											<div className='text-center p-3 bg-burgundy-50 rounded-lg'>
												<div className='text-lg font-bold text-burgundy-900'>
													{
														recipe
															.nutrition
															.protein
													}
												</div>
												<div className='text-xs text-gray-600'>
													Protein
												</div>
											</div>
										)}
										{recipe.nutrition
											.carbohydrates && (
											<div className='text-center p-3 bg-burgundy-50 rounded-lg'>
												<div className='text-lg font-bold text-burgundy-900'>
													{
														recipe
															.nutrition
															.carbohydrates
													}
												</div>
												<div className='text-xs text-gray-600'>
													Carbs
												</div>
											</div>
										)}
										{recipe.nutrition.fat && (
											<div className='text-center p-3 bg-burgundy-50 rounded-lg'>
												<div className='text-lg font-bold text-burgundy-900'>
													{
														recipe
															.nutrition
															.fat
													}
												</div>
												<div className='text-xs text-gray-600'>
													Fat
												</div>
											</div>
										)}
										{recipe.nutrition.sodium && (
											<div className='text-center p-3 bg-burgundy-50 rounded-lg'>
												<div className='text-lg font-bold text-burgundy-900'>
													{
														recipe
															.nutrition
															.sodium
													}
												</div>
												<div className='text-xs text-gray-600'>
													Sodium
												</div>
											</div>
										)}
									</div>
								</div>
							)}

							{/* Recipe Notes */}
							<div className='bg-gold-50 border border-gold-200 rounded-lg p-4'>
								<h4 className='font-bold text-burgundy-900 mb-2 font-brand'>
									Chef's Tips
								</h4>
								<p className='text-sm text-gray-700 font-body'>
									For best results, use authentic
									Indonesian sambal from Spice Island
									Indonesia. The quality of your
									sambal will significantly impact
									the final flavor of this dish.
								</p>
							</div>
						</>
					)}

					{/* Recipe Author */}
					<div className='flex items-center gap-3 pt-4 border-t border-gold-200'>
						<div className='w-10 h-10 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center'>
							<ChefHat className='w-5 h-5 text-gold-200' />
						</div>
						<div>
							<p className='text-sm font-semibold text-burgundy-900 font-brand'>
								{recipe.author.name}
							</p>
							<p className='text-xs text-gray-600 font-body'>
								Traditional Indonesian Recipe
							</p>
						</div>
					</div>
				</CardContent>
			</GlassCard>
		</>
	);
}
