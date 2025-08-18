"use client";

import { useEffect } from "react";

interface SearchKeyboardHandlerProps {
	onOpenSearch: () => void;
}

export default function SearchKeyboardHandler({ onOpenSearch }: SearchKeyboardHandlerProps) {
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			// Cmd+K on Mac, Ctrl+K on Windows/Linux
			if ((event.metaKey || event.ctrlKey) && event.key === "k") {
				event.preventDefault();
				onOpenSearch();
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [onOpenSearch]);

	return null; // This component doesn't render anything
}