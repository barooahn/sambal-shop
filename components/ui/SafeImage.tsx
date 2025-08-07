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
			sizes={
				fill
					? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					: undefined
			}
		/>
	);
}
