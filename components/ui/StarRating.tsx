import { FC } from "react";
import { Star } from "@/components/ui/icons";

interface StarRatingProps {
	rating: number;
	maxRating?: number;
	size?: "sm" | "md" | "lg";
	showValue?: boolean;
	reviewCount?: number;
	className?: string;
	ratingColorClass?: string; // Tailwind classes for the numeric rating (e.g., text-gold-500)
	reviewColorClass?: string; // Tailwind classes for the review count text (e.g., text-white)
}

const StarRating: FC<StarRatingProps> = ({
	rating,
	maxRating = 5,
	size = "md",
	showValue = true,
	reviewCount,
	className = "",
}) => {
	const sizeClasses = {
		sm: "w-4 h-4",
		md: "w-5 h-5",
		lg: "w-6 h-6",
	};

	const textSizeClasses = {
		sm: "text-sm",
		md: "text-base",
		lg: "text-lg",
	};

	const renderStars = () => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;

		// Full stars
		for (let i = 0; i < fullStars; i++) {
			stars.push(
				<Star
					key={`full-${i}`}
					className={`${sizeClasses[size]} text-gold-500 fill-gold-500`}
				/>
			);
		}

		// Half star
		if (hasHalfStar) {
			stars.push(
				<div key='half' className='relative'>
					<Star
						className={`${sizeClasses[size]} text-gray-300 fill-gray-300`}
					/>
					<div className='absolute inset-0 overflow-hidden w-1/2'>
						<Star
							className={`${sizeClasses[size]} text-gold-500 fill-gold-500`}
						/>
					</div>
				</div>
			);
		}

		// Empty stars
		const emptyStars = maxRating - Math.ceil(rating);
		for (let i = 0; i < emptyStars; i++) {
			stars.push(
				<Star
					key={`empty-${i}`}
					className={`${sizeClasses[size]} text-gray-300 fill-gray-300`}
				/>
			);
		}

		return stars;
	};

	return (
		<div className={`flex items-center space-x-2 ${className}`}>
			<div className='flex items-center space-x-1'>
				{renderStars()}
			</div>
			{showValue && (
				<div className={`${textSizeClasses[size]} font-medium`}>
					<span className={`text-gold-500 font-bold`}>
						{rating.toFixed(1)}
					</span>
					{reviewCount && (
						<span className={`text-white ml-1`}>
							({reviewCount.toLocaleString()} reviews)
						</span>
					)}
				</div>
			)}
		</div>
	);
};

export default StarRating;
