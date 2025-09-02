"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchModal from "./SearchModal";
import { trackEvent } from "@/components/analytics/GoogleAnalytics";
import SearchKeyboardHandler from "./SearchKeyboardHandler";

export default function SearchButton() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	return (
		<>
			<SearchKeyboardHandler
				onOpenSearch={() => setIsSearchOpen(true)}
			/>

			{/* Compact search button for all screens */}
			<Button
				variant='ghost'
				size='sm'
				onClick={() => {
					setIsSearchOpen(true);
					trackEvent("search_open", "search", "header_button");
				}}
				className='p-2 text-burgundy-600 hover:text-burgundy-800 hover:bg-burgundy-50'
				aria-label='Search'
				title='Search (Cmd+K)'
			>
				<Search className='w-5 h-5' />
			</Button>

			<SearchModal
				isOpen={isSearchOpen}
				onClose={() => setIsSearchOpen(false)}
			/>
		</>
	);
}
