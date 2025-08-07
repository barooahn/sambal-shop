"use client";

import { useState, useEffect } from "react";
import SafeImage from "./SafeImage";

interface ResponsivePosition {
	top?: string;
	bottom?: string;
	left?: string;
	right?: string;
}

interface IngredientConfig {
	src: string;
	alt: string;
	size: "sm" | "md" | "lg";
	position:
		| ResponsivePosition
		| {
				mobile?: ResponsivePosition;
				tablet?: ResponsivePosition;
				desktop?: ResponsivePosition;
				default?: ResponsivePosition;
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
	sm: "w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40", // Even larger sizes
	md: "w-24 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52", // Even larger sizes
	lg: "w-28 h-28 md:w-40 md:h-40 lg:w-56 lg:h-56 xl:w-64 xl:h-64", // Even larger sizes
};

// Custom hook for responsive positioning
const useResponsivePosition = (position: IngredientConfig["position"]) => {
	const [currentPosition, setCurrentPosition] = useState<ResponsivePosition>(
		{}
	);

	useEffect(() => {
		// If it&apos;s a simple position object, use it directly
		if (
			"top" in position ||
			"bottom" in position ||
			"left" in position ||
			"right" in position
		) {
			setCurrentPosition(position as ResponsivePosition);
			return;
		}

		// Handle responsive positioning
		const responsivePosition = position as {
			mobile?: ResponsivePosition;
			tablet?: ResponsivePosition;
			desktop?: ResponsivePosition;
			default?: ResponsivePosition;
		};

		const updatePosition = () => {
			const width = window.innerWidth;
			let newPosition: ResponsivePosition = {};

			if (width < 768 && responsivePosition.mobile) {
				newPosition = responsivePosition.mobile;
			} else if (width < 1024 && responsivePosition.tablet) {
				newPosition = responsivePosition.tablet;
			} else if (width >= 1024 && responsivePosition.desktop) {
				newPosition = responsivePosition.desktop;
			} else if (responsivePosition.default) {
				newPosition = responsivePosition.default;
			} else {
				// Fallback to first available position
				newPosition =
					responsivePosition.mobile ||
					responsivePosition.tablet ||
					responsivePosition.desktop ||
					{};
			}

			setCurrentPosition(newPosition);
		};

		// Set initial position
		updatePosition();

		// Add resize listener
		window.addEventListener("resize", updatePosition);
		return () => window.removeEventListener("resize", updatePosition);
	}, [position]);

	return currentPosition;
};

export default function FloatingIngredients({
	ingredients,
	className = "",
}: FloatingIngredientsProps) {
	const [shouldRender, setShouldRender] = useState(false);

	// Delay rendering of decorative ingredients until after LCP
	useEffect(() => {
		const timer = setTimeout(() => {
			setShouldRender(true);
		}, 1500); // Wait 1.5 seconds to not interfere with LCP

		return () => clearTimeout(timer);
	}, []);

	// Don&apos;t render anything until after delay
	if (!shouldRender) {
		return null;
	}

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
				<ResponsiveIngredient key={index} ingredient={ingredient} />
			))}
		</div>
	);
}

// Component for individual responsive ingredient
function ResponsiveIngredient({
	ingredient,
}: {
	ingredient: IngredientConfig;
}) {
	const position = useResponsivePosition(ingredient.position);

	return (
		<div
			className={`absolute ${sizeClasses[ingredient.size]} transform`}
			style={{
				...position,
				transform: `rotate(${ingredient.rotation}deg)`,
				opacity: ingredient.opacity || 1.0,
			}}
		>
			<SafeImage
				src={ingredient.src}
				alt={ingredient.alt}
				className='w-full h-full object-contain drop-shadow-lg smooth-rendering'
				style={{
					backfaceVisibility: "hidden",
					transform: "translateZ(0)",
				}}
				fallbackSrc='https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
			/>
		</div>
	);
}

// Ingredient configurations are now defined in the page file for better control
