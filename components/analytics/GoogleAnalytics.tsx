"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

interface GoogleAnalyticsProps {
	measurementId: string;
}

export default function GoogleAnalytics({
	measurementId,
}: GoogleAnalyticsProps) {
	const [shouldLoad, setShouldLoad] = useState(false);

	useEffect(() => {
		// Wait for LCP and FCP to complete before loading analytics
		const loadAnalytics = () => {
			// Check if LCP has occurred
			if ("PerformanceLongTaskObserver" in window) {
				// Use requestIdleCallback if available, otherwise setTimeout
				const scheduleLoad = () => {
					if ("requestIdleCallback" in window) {
						requestIdleCallback(() => setShouldLoad(true), {
							timeout: 3000,
						});
					} else {
						setTimeout(() => setShouldLoad(true), 2000);
					}
				};

				// Wait for LCP
				if ("PerformanceObserver" in window) {
					try {
						const observer = new PerformanceObserver(
							(list) => {
								const entries = list.getEntries();
								const lcpEntry = entries.find(
									(entry) =>
										entry.entryType ===
										"largest-contentful-paint"
								);
								if (lcpEntry) {
									observer.disconnect();
									scheduleLoad();
								}
							}
						);
						observer.observe({
							entryTypes: ["largest-contentful-paint"],
						});

						// Fallback timeout in case LCP doesn&apos;t fire
						setTimeout(() => {
							observer.disconnect();
							scheduleLoad();
						}, 4000);
					} catch (e) {
						// Fallback if PerformanceObserver fails
						scheduleLoad();
					}
				} else {
					scheduleLoad();
				}
			} else {
				// Fallback for older browsers
				setTimeout(() => setShouldLoad(true), 3000);
			}
		};

		// Start the loading process after component mounts
		loadAnalytics();
	}, []);

	if (!measurementId || !shouldLoad) {
		return null;
	}

	return (
		<>
			{/* Google Analytics gtag.js - Loaded after LCP */}
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
				strategy='lazyOnload'
				id='google-analytics-script'
			/>
			<Script
				id='google-analytics-config'
				strategy='lazyOnload'
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true,
              // Performance optimizations
              transport_type: 'beacon',
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
              custom_map: {
                'custom_parameter_1': 'page_category'
              }
            });
          `,
				}}
			/>
		</>
	);
}

// Utility function to track custom events
export const trackEvent = (
	action: string,
	category: string,
	label?: string,
	value?: number
) => {
	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("event", action, {
			event_category: category,
			event_label: label,
			value: value,
		});
	}
};

// Utility function to track page views (for SPA navigation)
export const trackPageView = (url: string, title?: string) => {
	if (
		typeof window !== "undefined" &&
		window.gtag &&
		process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
	) {
		window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
			page_title: title || document.title,
			page_location: url,
		});
	}
};

// Utility function to track conversions
export const trackConversion = (
	conversionId: string,
	value?: number,
	currency?: string
) => {
	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("event", "conversion", {
			send_to: conversionId,
			value: value,
			currency: currency || "GBP",
		});
	}
};

// Utility function to track newsletter signups
export const trackNewsletterSignup = (method: string = "hero_section") => {
	trackEvent("newsletter_signup", "engagement", method);
};

// Utility function to track contact form submissions
export const trackContactForm = (formType: string = "contact_page") => {
	trackEvent("contact_form_submit", "engagement", formType);
};

// Utility function to track product interest
export const trackProductInterest = (
	productName: string,
	action: string = "view"
) => {
	trackEvent(action, "product_engagement", productName);
};

// Utility function to track recipe page views
export const trackRecipeView = (recipeName: string) => {
	trackEvent("recipe_view", "content_engagement", recipeName);
};

// Utility function to track external link clicks
export const trackExternalLink = (url: string, linkText?: string) => {
	trackEvent("external_link_click", "outbound", linkText || url);
};

// Declare gtag function for TypeScript (removed to avoid conflicts)
