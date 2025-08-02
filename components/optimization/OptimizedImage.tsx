"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
	src: string;
	alt: string;
	width: number;
	height: number;
	priority?: boolean;
	className?: string;
	sizes?: string;
	quality?: number;
	placeholder?: "blur" | "empty";
	blurDataURL?: string;
}

export default function OptimizedImage({
	src,
	alt,
	width,
	height,
	priority = false,
	className = "",
	sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
	quality = 85,
	placeholder = "empty",
	blurDataURL,
}: OptimizedImageProps) {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	// Generate WebP source if original is PNG/JPG
	const getOptimizedSrc = (originalSrc: string) => {
		if (
			originalSrc.includes(".png") ||
			originalSrc.includes(".jpg") ||
			originalSrc.includes(".jpeg")
		) {
			// In production, you would have WebP versions
			// For now, we'll use Next.js automatic optimization
			return originalSrc;
		}
		return originalSrc;
	};

	const handleLoad = () => {
		setIsLoading(false);
	};

	const handleError = () => {
		setIsLoading(false);
		setHasError(true);
	};

	if (hasError) {
		return (
			<div
				className={`bg-gray-200 flex items-center justify-center ${className}`}
				style={{ width, height }}
			>
				<span className='text-gray-500 text-sm'>
					Image failed to load
				</span>
			</div>
		);
	}

	return (
		<div className={`relative ${className}`}>
			<Image
				src={getOptimizedSrc(src)}
				alt={alt}
				width={width}
				height={height}
				priority={priority}
				quality={quality}
				sizes={sizes}
				placeholder={placeholder}
				blurDataURL={blurDataURL}
				className={`transition-opacity duration-300 ${
					isLoading ? "opacity-0" : "opacity-100"
				}`}
				onLoad={handleLoad}
				onError={handleError}
				style={{
					objectFit: "cover",
					width: "100%",
					height: "auto",
				}}
			/>
			{isLoading && (
				<div
					className='absolute inset-0 bg-gray-200 animate-pulse'
					style={{ width, height }}
				/>
			)}
		</div>
	);
}

// Utility function to generate blur data URL for placeholder
export const generateBlurDataURL = (width: number, height: number) => {
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext("2d");

	if (ctx) {
		// Create a simple gradient blur effect
		const gradient = ctx.createLinearGradient(0, 0, width, height);
		gradient.addColorStop(0, "#f3f4f6");
		gradient.addColorStop(1, "#e5e7eb");
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, width, height);
	}

	return canvas.toDataURL("image/jpeg", 0.1);
};

// Pre-defined blur data URLs for common image sizes
export const blurDataURLs = {
	small: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
	medium: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
	large: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
};
