"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { useConsent } from "@/components/consent/ConsentProvider";

interface ThirdPartyScriptsProps {
	measurementId?: string;
}

export default function ThirdPartyScripts({
	measurementId,
}: ThirdPartyScriptsProps) {
	const { categories } = useConsent();
	const [canLoad, setCanLoad] = useState(false);

	useEffect(() => {
		// Lazy enablement based on interaction/idle, but only if analytics consent is granted
		let cleanup: (() => void) | undefined;
		if (!categories.analytics) {
			setCanLoad(false);
			return;
		}

		const loadWhenReady = () => {
			let hasLoaded = false;
			const load = () => {
				if (!hasLoaded) {
					hasLoaded = true;
					setCanLoad(true);
				}
			};
			const interactionEvents = [
				"mousedown",
				"keydown",
				"scroll",
				"touchstart",
			];
			const handleInteraction = () => {
				load();
				interactionEvents.forEach((e) =>
					document.removeEventListener(e, handleInteraction)
				);
			};
			interactionEvents.forEach((e) =>
				document.addEventListener(e, handleInteraction, {
					passive: true,
					once: true,
				})
			);
			const fallbackTimeout = setTimeout(() => {
				if (document.readyState === "complete") {
					if ("requestIdleCallback" in window) {
						requestIdleCallback(load, { timeout: 10000 });
					} else {
						setTimeout(load, 5000);
					}
				}
			}, 10000);
			cleanup = () => {
				clearTimeout(fallbackTimeout);
				interactionEvents.forEach((e) =>
					document.removeEventListener(e, handleInteraction)
				);
			};
		};

		loadWhenReady();
		return () => {
			cleanup?.();
		};
	}, [categories.analytics]);

	if (!canLoad) return null;

	return (
		<>
			{/* Google Analytics - Load only with consent */}
			{measurementId && categories.analytics && (
				<Script
					id='google-analytics-inline'
					strategy='lazyOnload'
					dangerouslySetInnerHTML={{
						__html: `
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','${measurementId}');

							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${measurementId}', {
								page_title: document.title,
								page_location: window.location.href,
								send_page_view: true,
								transport_type: 'beacon',
								anonymize_ip: true,
								allow_google_signals: false,
								allow_ad_personalization_signals: false,
								cookie_flags: 'SameSite=None;Secure'
							});
						`,
					}}
				/>
			)}

			{/* Other third-party scripts can be added here */}
		</>
	);
}

// gtag function already declared in GoogleAnalytics.tsx
