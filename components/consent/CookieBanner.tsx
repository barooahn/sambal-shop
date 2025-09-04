"use client";

import React, { useEffect, useState } from "react";
import { useConsent } from "./ConsentProvider";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
	const {
		showBanner,
		categories,
		acceptAll,
		rejectAll,
		savePreferences,
		closeBanner,
	} = useConsent();
	const [analyticsOn, setAnalyticsOn] = useState<boolean>(
		categories.analytics
	);
	const [expanded, setExpanded] = useState<boolean>(false);

	useEffect(() => {
		// Start in compact mode; if settings opened from footer, expanded will be true due to showBanner true.
		// We keep compact on initial open so users get quick Accept/Manage.
		setExpanded(false);
	}, [showBanner]);

	const containerClass = expanded
		? "mx-auto max-w-5xl m-4 rounded-lg border bg-white/95 backdrop-blur shadow-xl p-4 sm:p-6 text-neutral-900"
		: "mx-auto max-w-2xl m-3 rounded-md border bg-white/95 backdrop-blur shadow-md p-2 sm:p-3 text-neutral-900";

	// Hide until we need to show
	if (!showBanner) return null;

	return (
		<div className='fixed inset-x-0 bottom-0 z-[100]'>
			<div className={containerClass}>
				<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4'>
					<div className='space-y-2'>
						<h2
							className={`font-brand text-xl text-burgundy-900 ${
								!expanded ? "sr-only" : ""
							}`}
						>
							We respect your privacy
						</h2>
						<p
							className={`text-sm text-neutral-700 font-body ${
								!expanded ? "hidden" : ""
							}`}
						>
							We use cookies to provide essential site
							functionality and, with your consent, to
							measure performance with Google Analytics.
							You can accept all, reject non-essential
							cookies, or customise your choices. See our
							<a
								className='underline ml-1'
								href='/privacy'
							>
								Privacy Policy
							</a>{" "}
							for details.
						</p>
						{/* Compact vs expanded view */}
						{!expanded ? (
							<div className='mt-2 flex flex-col sm:flex-row sm:items-center gap-3'>
								<p className='text-xs text-neutral-700 font-body'>
									We use essential cookies and, with
									your consent, analytics.
								</p>
								<div className='flex gap-2 sm:ml-auto w-full sm:w-auto'>
									<Button
										className='w-full sm:w-auto'
										onClick={acceptAll}
									>
										Accept all
									</Button>
									<Button
										variant='secondary'
										className='w-full sm:w-auto'
										onClick={() =>
											setExpanded(true)
										}
									>
										Manage options
									</Button>
								</div>
							</div>
						) : (
							<div className='mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3'>
								<div className='flex items-center justify-between rounded-md border px-3 py-2'>
									<div>
										<p className='text-sm font-medium'>
											Strictly necessary
										</p>
										<p className='text-xs text-neutral-600'>
											Always on – required for
											basic site functionality
										</p>
									</div>
									<span className='inline-block text-xs font-semibold text-neutral-500'>
										ON
									</span>
								</div>
								<div className='flex items-center justify-between rounded-md border px-3 py-2'>
									<div>
										<p className='text-sm font-medium'>
											Analytics (GA4)
										</p>
										<p className='text-xs text-neutral-600'>
											Help us improve by
											collecting anonymous
											usage stats
										</p>
									</div>
									<input
										type='checkbox'
										aria-label='Enable analytics cookies'
										className='h-5 w-5 accent-burgundy-700'
										checked={analyticsOn}
										onChange={(e) =>
											setAnalyticsOn(
												e.target.checked
											)
										}
									/>
								</div>
							</div>
						)}
					</div>
					{expanded && (
						<div className='flex flex-col gap-2 w-full sm:w-auto'>
							<Button
								variant='secondary'
								className='w-full'
								onClick={() => {
									savePreferences({
										analytics: analyticsOn,
									});
								}}
							>
								Save choices
							</Button>
							<Button
								className='w-full'
								onClick={acceptAll}
							>
								Accept all
							</Button>
							{/* Keep Reject in expanded view */}
							<Button
								variant='outline'
								className='w-full'
								onClick={rejectAll}
							>
								Reject non-essential
							</Button>
							<button
								className='text-xs text-neutral-600 underline'
								onClick={() => {
									if (expanded) setExpanded(false);
									else closeBanner();
								}}
							>
								{expanded ? "Back" : "Close"}
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
