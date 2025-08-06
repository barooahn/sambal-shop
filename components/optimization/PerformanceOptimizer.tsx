import Script from "next/script";

interface PerformanceOptimizerProps {
	preloadImages?: string[];
	criticalCSS?: string;
}

export default function PerformanceOptimizer({
	preloadImages = [],
	criticalCSS,
}: PerformanceOptimizerProps) {
	return (
		<>
			{/* Preload critical resources */}
			{preloadImages.map((src, index) => (
				<link
					key={index}
					rel='preload'
					as='image'
					href={src}
					// Add fetchpriority for the most important image (usually hero)
					{...(index === 0 && {
						fetchPriority: "high" as const,
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

			{/* Performance monitoring script */}
			<Script
				id='performance-monitor'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
            // Monitor Core Web Vitals
            function sendToAnalytics(metric) {
              // Send to Google Analytics if available
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

            // Load web-vitals library and measure
            import('https://unpkg.com/web-vitals@3/dist/web-vitals.js').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
              onCLS(sendToAnalytics);
              onFID(sendToAnalytics);
              onFCP(sendToAnalytics);
              onLCP(sendToAnalytics);
              onTTFB(sendToAnalytics);
            }).catch(err => {
              console.warn('Failed to load web-vitals:', err);
            });
          `,
				}}
			/>

			{/* Resource hints for external domains */}
			<link rel='dns-prefetch' href='//fonts.googleapis.com' />
			<link rel='dns-prefetch' href='//www.googletagmanager.com' />
			<link
				rel='preconnect'
				href='https://fonts.gstatic.com'
				crossOrigin=''
			/>
		</>
	);
}

// Critical CSS for above-the-fold content
export const criticalCSS = `
  /* Critical styles for hero section */
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  }
  
  /* Critical typography */
  .hero-title {
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  /* Critical layout */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  /* Prevent layout shift */
  .image-placeholder {
    background-color: #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Critical button styles */
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
  }
  
  .cta-button:hover {
    background-color: #b91c1c;
  }
`;

// Images to preload (most critical first)
export const criticalImages = [
	"/images/optimized/logo-xs.webp", // Logo - always visible
	"/images/optimized/hero-image-xl.webp", // Hero image
	"/images/optimized/sambal-bali-md.webp", // Product showcase
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
