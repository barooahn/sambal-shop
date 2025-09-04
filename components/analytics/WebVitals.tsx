"use client";

import { useReportWebVitals } from "next/web-vitals";
import { useConsent } from "@/components/consent/ConsentProvider";

export function WebVitals() {
	const { categories } = useConsent();
	useReportWebVitals((metric) => {
		// Log web vitals to console in development
		if (process.env.NODE_ENV === "development") {
			console.log("Web Vital:", metric.name, metric.value);
		}

		if (categories.analytics) {
			// Send to Google Analytics if available
			if (typeof window !== "undefined" && window.gtag) {
				window.gtag("event", metric.name, {
					custom_parameter_1: metric.value,
					custom_parameter_2: metric.id,
					custom_parameter_3: metric.name,
				});
			}

			// Send to your analytics endpoint
			if (metric.value && process.env.NODE_ENV === "production") {
				fetch("/api/analytics/web-vitals", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: metric.name,
						value: metric.value,
						id: metric.id,
						delta: metric.delta,
						navigationType: metric.navigationType,
					}),
				}).catch((error) => {
					// Silently fail to avoid disrupting user experience
					console.warn("Failed to send web vitals:", error);
				});
			}
		}
	});

	return null;
}
