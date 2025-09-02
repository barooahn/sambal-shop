"use client";

import Image from "next/image";
import React from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

export default function SafeImage({
  src,
  alt,
  className,
  fill,
  width,
  height,
  sizes,
  priority,
}: SafeImageProps) {
  // Fallback for missing/invalid src
  const safeSrc = src || "/images/optimized/sambal-goreng-md.webp";
  const common = { className, sizes, priority };

  if (fill) {
    return (
      <Image src={safeSrc} alt={alt} fill {...common} />
    );
  }
  return (
    <Image src={safeSrc} alt={alt} width={width || 800} height={height || 450} {...common} />
  );
}

