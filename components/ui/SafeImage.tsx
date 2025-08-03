'use client';

import { useState } from 'react';

interface SafeImageProps {
	src: string;
	alt: string;
	className?: string;
	style?: React.CSSProperties;
	fallbackSrc: string;
}

export default function SafeImage({ 
	src, 
	alt, 
	className, 
	style, 
	fallbackSrc 
}: SafeImageProps) {
	const [imgSrc, setImgSrc] = useState(src);

	const handleError = () => {
		setImgSrc(fallbackSrc);
	};

	return (
		<img
			src={imgSrc}
			alt={alt}
			className={className}
			style={style}
			onError={handleError}
		/>
	);
}
