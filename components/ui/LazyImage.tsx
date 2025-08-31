'use client';

import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
}

export default function LazyImage({
  src,
  alt,
  className = '',
  placeholder = '/placeholder-image.jpg',
  blurDataURL,
  onLoad,
  onError,
  priority = false
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px' // Load images 50px before they come into view
      }
    );

    const currentImg = imgRef.current;
    if (currentImg) {
      observer.observe(currentImg);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
    onError?.();
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/blur background */}
      {!loaded && !error && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-coconut-100 to-coconut-200 animate-pulse"
          style={{
            backgroundImage: blurDataURL ? `url(${blurDataURL})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: blurDataURL ? 'blur(8px)' : undefined
          }}
        />
      )}

      {/* Main image */}
      {inView && (
        <img
          ref={imgRef}
          src={error ? placeholder : src}
          alt={alt}
          className={`
            w-full h-full object-cover transition-opacity duration-300
            ${loaded ? 'opacity-100' : 'opacity-0'}
            ${error ? 'filter grayscale' : ''}
          `}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-coconut-100 text-palm-700">
          <div className="text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="text-sm">Image unavailable</div>
          </div>
        </div>
      )}

      {/* Loading indicator */}
      {!loaded && !error && inView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-turmeric-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}