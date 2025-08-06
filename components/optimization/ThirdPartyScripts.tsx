"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface ThirdPartyScriptsProps {
	measurementId?: string;
}

export default function ThirdPartyScripts({
	measurementId,
}: ThirdPartyScriptsProps) {
	const [scriptsReady, setScriptsReady] = useState(false);

	useEffect(() => {
		// Wait for critical rendering to complete before loading third-party scripts
		const loadThirdPartyScripts = () => {
			// Check if page is interactive and LCP has likely occurred
			if (document.readyState === "complete") {
				// Use requestIdleCallback to load during idle time
				if ("requestIdleCallback" in window) {
					requestIdleCallback(() => setScriptsReady(true), {
						timeout: 5000,
					});
				} else {
					setTimeout(() => setScriptsReady(true), 3000);
				}
			} else {
				// Wait for load event
				window.addEventListener(
					"load",
					() => {
						setTimeout(() => {
							if ("requestIdleCallback" in window) {
								requestIdleCallback(
									() => setScriptsReady(true),
									{ timeout: 5000 }
								);
							} else {
								setTimeout(
									() => setScriptsReady(true),
									2000
								);
							}
						}, 1000);
					},
					{ once: true }
				);
			}
		};

		loadThirdPartyScripts();
	}, []);

	if (!scriptsReady) {
		return null;
	}

	return (
		<>
			{/* Google Analytics - Only load when ready */}
			{measurementId && (
				<>
					<Script
						src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
						strategy='lazyOnload'
						id='google-analytics-script'
						onLoad={() => {
							// Initialize GA after script loads
							window.dataLayer = window.dataLayer || [];
							function gtag(...args: any[]) {
								window.dataLayer.push(args);
							}
							gtag("js", new Date());
							gtag("config", measurementId, {
								page_title: document.title,
								page_location: window.location.href,
								send_page_view: true,
								transport_type: "beacon",
								anonymize_ip: true,
								allow_google_signals: false,
								allow_ad_personalization_signals: false,
							});
						}}
					/>
				</>
			)}

			{/* Other third-party scripts can be added here */}
			{/* They will all load after critical rendering is complete */}
		</>
	);
}

// Declare gtag function for TypeScript
declare global {
	interface Window {
		gtag: (...args: any[]) => void;
		dataLayer: any[];
	}
}
