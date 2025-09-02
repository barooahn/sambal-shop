"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "./GoogleAnalytics";

// Tracks GA4 page_view events on client-side route changes (Next.js App Router)
// Skips the initial load to avoid double-counting because GA is configured to send
// the first page_view when it initializes.
export default function PageViewTracker() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const search = searchParams.toString();
	const previousUrlRef = useRef<string | null>(null);

	useEffect(() => {
		// Ensure this runs only in the browser
		if (typeof window === "undefined") return;

		const currentUrl = window.location.href;

		// Skip initial mount to prevent duplicate page_view with GA's initial config
		if (previousUrlRef.current === null) {
			previousUrlRef.current = currentUrl;
			return;
		}

		if (previousUrlRef.current !== currentUrl) {
			trackPageView(currentUrl, document.title);
			previousUrlRef.current = currentUrl;
		}
		// We depend on pathname and searchParams to detect client-side navigations
	}, [pathname, search]);

	return null;
}
