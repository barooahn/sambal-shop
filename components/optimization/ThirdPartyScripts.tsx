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
					{/* Inline minimal gtag to reduce external script size */}
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
