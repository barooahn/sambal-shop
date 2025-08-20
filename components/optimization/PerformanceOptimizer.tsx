import Script from "next/script";

interface PerformanceOptimizerProps {
	preloadImages?: string[];
	criticalCSS?: string;
	isHomepage?: boolean;
}

export default function PerformanceOptimizer({
	preloadImages = [],
	criticalCSS,
	isHomepage = false,
}: PerformanceOptimizerProps) {
	// Only preload images if they're provided AND we're on a page that actually uses them
	const imagesToPreload = preloadImages.length > 0 ? preloadImages : [];
	return (
		<>
			{/* Preload critical resources - LCP optimized */}
			{imagesToPreload.map((src, index) => (
				<link
					key={index}
					rel='preload'
					as='image'
					href={src}
					// Add fetchpriority for LCP images (first two are LCP candidates)
					{...(index <= 1 && {
						fetchPriority: "high" as const,
					})}
					// Add media query for responsive images
					{...(src.includes("hero-image") && {
						media: "(min-width: 768px)",
					})}
				/>
			))}

			{/* Preload critical fonts (already handled by next/font/google) */}

			{/* Critical CSS inlining */}
			{criticalCSS && (
				<style
					dangerouslySetInnerHTML={{
						__html: criticalCSS,
					}}
				/>
			)}

			{/* Lightweight performance monitoring - loads after critical rendering */}
			<Script
				id='performance-monitor'
				strategy='lazyOnload'
				dangerouslySetInnerHTML={{
					__html: `
            // Lightweight Core Web Vitals monitoring without external library
            function sendToAnalytics(metric) {
              // Send to Google Analytics if available (after it loads)
              if (typeof gtag !== 'undefined') {
                gtag('event', metric.name, {
                  event_category: 'Web Vitals',
                  event_label: metric.id,
                  value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                  non_interaction: true,
                });
              }

              // Log to console in development
              if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
                console.log('Core Web Vital:', metric);
              }
            }

            // Lightweight CWV measurement without external dependencies
            function measureCWV() {
              // Measure LCP
              if ('PerformanceObserver' in window) {
                try {
                  new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    sendToAnalytics({
                      name: 'LCP',
                      value: lastEntry.startTime,
                      id: 'lcp-' + Math.random().toString(36).substr(2, 9)
                    });
                  }).observe({ entryTypes: ['largest-contentful-paint'] });

                  // Measure FCP
                  new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
                    if (fcpEntry) {
                      sendToAnalytics({
                        name: 'FCP',
                        value: fcpEntry.startTime,
                        id: 'fcp-' + Math.random().toString(36).substr(2, 9)
                      });
                    }
                  }).observe({ entryTypes: ['paint'] });

                  // Measure CLS
                  let clsValue = 0;
                  new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                      if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                      }
                    }
                    sendToAnalytics({
                      name: 'CLS',
                      value: clsValue,
                      id: 'cls-' + Math.random().toString(36).substr(2, 9)
                    });
                  }).observe({ entryTypes: ['layout-shift'] });
                } catch (e) {
                  console.warn('Performance monitoring failed:', e);
                }
              }
            }

            // Start measuring after a delay to not impact initial load
            setTimeout(measureCWV, 1000);
          `,
				}}
			/>

			{/* Resource hints for critical external domains only */}
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link
				rel='preconnect'
				href='https://fonts.gstatic.com'
				crossOrigin=''
			/>
			{/* DNS prefetch for analytics (loaded later) */}
			<link rel='dns-prefetch' href='//www.googletagmanager.com' />
		</>
	);
}

// Critical CSS for above-the-fold content - Optimized for LCP
export const criticalCSS = `
  /* Critical styles for hero section - Prevent layout shift */
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  }

  /* Critical typography - Prevent FOUT */
  .hero-title {
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    font-display: swap;
  }

  /* Critical layout - Prevent CLS */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Prevent layout shift for images */
  .image-placeholder {
    background-color: #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
  }

  /* Critical button styles - Above fold */
  .cta-button {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    background-color: #dc2626;
    color: white;
    border-radius: 0.5rem;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.2s;
    will-change: transform;
  }

  .cta-button:hover {
    background-color: #b91c1c;
  }

  /* Prevent layout shift for hero images */
  .hero-image-container {
    aspect-ratio: 1;
    width: 100%;
    max-width: 320px;
    position: relative;
  }

  /* Critical font loading */
  @font-face {
    font-family: 'Inter';
    font-display: swap;
  }
`;

// Images to preload (LCP critical first) - only for homepage
export const criticalImages = [
	"/images/optimized/hero-image-lg.webp", // Hero background - actual image used in HeroSection
	"/images/optimized/sambal-goreng-md.webp", // Hero product - actual featured product image
];

// Utility function to measure and report performance
export const measurePerformance = () => {
	if (typeof window !== "undefined" && "performance" in window) {
		// Measure page load time
		window.addEventListener("load", () => {
			const navigation = performance.getEntriesByType(
				"navigation"
			)[0] as PerformanceNavigationTiming;
			const loadTime =
				navigation.loadEventEnd - navigation.loadEventStart;

			console.log("Page Load Time:", loadTime + "ms");

			// Measure FCP
			const paintEntries = performance.getEntriesByType("paint");
			const fcpEntry = paintEntries.find(
				(entry) => entry.name === "first-contentful-paint"
			);
			if (fcpEntry) {
				console.log(
					"First Contentful Paint:",
					fcpEntry.startTime + "ms"
				);
			}
		});
	}
};
