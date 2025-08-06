"use client";

import SafeImage from "./SafeImage";

interface IngredientConfig {
	src: string;
	alt: string;
	size: "sm" | "md" | "lg";
	position: {
		top?: string;
		bottom?: string;
		left?: string;
		right?: string;
	};
	rotation: number;
	animationDelay?: string;
	animationDuration?: string;
	opacity?: number;
}

interface FloatingIngredientsProps {
	ingredients: IngredientConfig[];
	className?: string;
}

const sizeClasses = {
	sm: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20", // Reduced sizes
	md: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24", // Reduced sizes
	lg: "w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28", // Reduced sizes
};

export default function FloatingIngredients({
	ingredients,
	className = "",
}: FloatingIngredientsProps) {
	return (
		<div
			className={`absolute pointer-events-none overflow-visible ${className}`}
			style={{
				zIndex: 15,
				left: "-50px",
				right: "-50px",
				top: "-20px",
				bottom: "-20px",
			}}
		>
			{ingredients.map((ingredient, index) => (
				<div
					key={index}
					className={`absolute ${sizeClasses[ingredient.size]} transform`}
					style={{
						...ingredient.position,
						transform: `rotate(${ingredient.rotation}deg)`,
						opacity: ingredient.opacity || 1.0,
					}}
				>
					<SafeImage
						src={ingredient.src}
						alt={ingredient.alt}
						className='w-full h-full object-contain drop-shadow-md'
						fallbackSrc='https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop'
					/>
				</div>
			))}
		</div>
	);
}

// Ingredient configurations are now defined in the page file for better control
