'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Performance monitoring hook
export function usePerformanceMonitoring() {
  const [metrics, setMetrics] = useState<{
    paintTime?: number;
    loadTime?: number;
    memoryUsage?: number;
  }>({});

  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // First Contentful Paint
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, paintTime: entry.startTime }));
          }
        });
      });

      observer.observe({ entryTypes: ['paint'] });

      // Page Load Time
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        setMetrics(prev => ({ ...prev, loadTime }));
      });

      // Memory usage (if available)
      if ('memory' in performance) {
        const memoryInfo = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memoryInfo.usedJSHeapSize / 1024 / 1024 // MB
        }));
      }

      return () => observer.disconnect();
    }
  }, []);

  return metrics;
}

// Lazy component wrapper for performance
export function LazyComponentWrapper({ 
  children, 
  fallback = null, 
  threshold = 0.1 
}: { 
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
}) {
  const [inView, setInView] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return (
    <div ref={setRef} className="min-h-[200px]">
      {inView ? children : fallback}
    </div>
  );
}

// Critical CSS inliner component
export function CriticalCSS() {
  return (
    <style jsx>{`
      /* Critical above-the-fold styles */
      .hero-section {
        min-height: 100vh;
        background: linear-gradient(135deg, #fef7ed 0%, #fef3c7 100%);
      }
      .nav-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 50;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(8px);
      }
      .hero-title {
        font-size: clamp(2rem, 5vw, 4rem);
        font-weight: 700;
        color: #7c2d12;
        line-height: 1.2;
      }
    `}</style>
  );
}

// Resource preloader component
export function ResourcePreloader({ resources }: { resources: string[] }) {
  useEffect(() => {
    // Preload critical resources
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      
      if (resource.includes('.woff2') || resource.includes('.woff')) {
        link.as = 'font';
        link.type = resource.includes('.woff2') ? 'font/woff2' : 'font/woff';
        link.crossOrigin = 'anonymous';
      } else if (resource.includes('.jpg') || resource.includes('.png') || resource.includes('.webp')) {
        link.as = 'image';
      } else if (resource.includes('.css')) {
        link.as = 'style';
      } else if (resource.includes('.js')) {
        link.as = 'script';
      }
      
      link.href = resource;
      document.head.appendChild(link);
    });
  }, [resources]);

  return null;
}

// Performance-optimized scrolling component
export function SmoothScroller({ children, className = '' }: { 
  children: React.ReactNode;
  className?: string;
}) {
  useEffect(() => {
    // Enable smooth scrolling with performance optimizations
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Custom scroll handling can go here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-smooth transform-gpu ${className}`}>
      {children}
    </div>
  );
}

// Intersection Observer hook for performance
export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true);
      }
    }, {
      rootMargin: '50px',
      ...options
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, hasIntersected, options]);

  return { isIntersecting, hasIntersected };
}

// Memory-efficient component factory
export function createOptimizedComponent<T extends Record<string, any>>(
  Component: React.ComponentType<T>,
  options: {
    memo?: boolean;
    lazy?: boolean;
    ssr?: boolean;
  } = {}
) {
  const { memo = true, lazy = false, ssr = true } = options;

  let OptimizedComponent = Component;

  if (memo) {
    OptimizedComponent = React.memo(OptimizedComponent);
  }

  if (lazy) {
    OptimizedComponent = dynamic(() => Promise.resolve(OptimizedComponent), {
      ssr,
      loading: () => (
        <div className="flex items-center justify-center p-8">
          <div className="w-6 h-6 border-2 border-turmeric-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )
    });
  }

  return OptimizedComponent;
}

// Bundle analyzer component for development
export function BundleAnalyzer() {
  const [showAnalyzer, setShowAnalyzer] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'B') {
          setShowAnalyzer(!showAnalyzer);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [showAnalyzer]);

  if (process.env.NODE_ENV !== 'development' || !showAnalyzer) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-xs z-50 max-w-sm">
      <div className="font-bold mb-2">Performance Info</div>
      <div>Press Ctrl+Shift+B to toggle</div>
      <div>Build: {process.env.NODE_ENV}</div>
      <div>Bundle size: Analyzing...</div>
    </div>
  );
}