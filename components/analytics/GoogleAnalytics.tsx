"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
	measurementId: string;
}

export default function GoogleAnalytics({
	measurementId,
}: GoogleAnalyticsProps) {
	if (!measurementId) {
		return null;
	}

	return (
		<>
			{/* Google Analytics gtag.js */}
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
				strategy='afterInteractive'
				id='google-analytics-script'
			/>
			<Script
				id='google-analytics-config'
				strategy='afterInteractive'
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

// Declare gtag function for TypeScript
declare global {
	interface Window {
		gtag: (
			command: "config" | "event" | "js",
			targetId: string | Date,
			config?: Record<string, any>
		) => void;
		dataLayer: any[];
	}
}
