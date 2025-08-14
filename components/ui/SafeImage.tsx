"use client";

import { useState } from "react";
import Image from "next/image";

interface SafeImageProps {
	src: string;
	alt: string;
	className?: string;
	style?: React.CSSProperties;
	fallbackSrc: string;
	width?: number;
	height?: number;
	fill?: boolean;
	loading?: 'lazy' | 'eager';
	quality?: number;
	placeholder?: 'blur' | 'empty';
	blurDataURL?: string;
}

export default function SafeImage({
	src,
	alt,
	className,
	style,
	fallbackSrc,
	width = 400,
	height = 300,
	fill = false,
	loading = 'lazy',
	quality = 85,
	placeholder,
	blurDataURL,
}: SafeImageProps) {
	const [imgSrc, setImgSrc] = useState(src);

	const handleError = () => {
		setImgSrc(fallbackSrc);
	};

	return (
		<Image
			src={imgSrc}
			alt={alt}
			className={className}
			style={style}
			onError={handleError}
			width={fill ? undefined : width}
			height={fill ? undefined : height}
			fill={fill}
			loading={loading}
			quality={quality}
			placeholder={placeholder}
			blurDataURL={blurDataURL}
			sizes={
				fill
					? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					: undefined
			}
		/>
	);
}
