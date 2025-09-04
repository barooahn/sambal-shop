"use client";

import { Suspense, ReactNode } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

interface LazyWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  errorFallback?: ReactNode;
}

// Default loading skeleton
function DefaultSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-6 rounded mb-4"></div>
      <div className="bg-gray-200 h-4 rounded mb-2"></div>
      <div className="bg-gray-200 h-4 rounded w-3/4"></div>
    </div>
  );
}

// Simple loading spinner
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-burgundy-700"></div>
    </div>
  );
}

// Lazy wrapper component for heavy components
export function LazyWrapper({ 
  children, 
  fallback = <LoadingSpinner />, 
  errorFallback 
}: LazyWrapperProps) {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

// Pre-built skeletons for different component types
export const Skeletons = {
  Card: () => (
    <div className="animate-pulse bg-white rounded-lg p-4 shadow">
      <div className="bg-gray-200 h-4 rounded mb-2"></div>
      <div className="bg-gray-200 h-20 rounded mb-4"></div>
      <div className="bg-gray-200 h-4 rounded w-1/2"></div>
    </div>
  ),
  
  List: ({ items = 3 }: { items?: number }) => (
    <div className="animate-pulse space-y-2">
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-center space-x-3">
          <div className="bg-gray-200 h-10 w-10 rounded-full"></div>
          <div className="flex-1">
            <div className="bg-gray-200 h-4 rounded mb-1"></div>
            <div className="bg-gray-200 h-3 rounded w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  ),
  
  Text: () => (
    <div className="animate-pulse space-y-2">
      <div className="bg-gray-200 h-4 rounded"></div>
      <div className="bg-gray-200 h-4 rounded"></div>
      <div className="bg-gray-200 h-4 rounded w-5/6"></div>
    </div>
  ),
  
  Form: () => (
    <div className="animate-pulse space-y-4">
      <div className="space-y-2">
        <div className="bg-gray-200 h-4 rounded w-1/4"></div>
        <div className="bg-gray-200 h-10 rounded"></div>
      </div>
      <div className="space-y-2">
        <div className="bg-gray-200 h-4 rounded w-1/3"></div>
        <div className="bg-gray-200 h-10 rounded"></div>
      </div>
      <div className="bg-gray-200 h-10 rounded w-1/2 mt-4"></div>
    </div>
  ),
  
  Image: ({ className = "w-full h-48" }: { className?: string }) => (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
  )
};

// Hook for lazy loading with intersection observer
import { useEffect, useRef, useState } from 'react';

export function useLazyLoad(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, hasLoaded]);

  return { ref, isVisible, hasLoaded };
}

// Intersection observer lazy component
interface LazyIntersectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export function LazyIntersection({ 
  children, 
  fallback = <DefaultSkeleton />, 
  threshold = 0.1,
  rootMargin = '50px',
  className = ''
}: LazyIntersectionProps) {
  const { ref, isVisible } = useLazyLoad(threshold);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback}
    </div>
  );
}