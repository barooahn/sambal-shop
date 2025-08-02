"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
	label: string;
	href: string;
}

export default function Breadcrumb() {
	const pathname = usePathname();
	
	// Don't show breadcrumbs on homepage
	if (pathname === "/") return null;
	
	const pathSegments = pathname.split("/").filter(Boolean);
	
	const breadcrumbItems: BreadcrumbItem[] = [
		{ label: "Home", href: "/" },
	];
	
	// Build breadcrumb items from path segments
	let currentPath = "";
	pathSegments.forEach((segment) => {
		currentPath += `/${segment}`;
		
		// Convert segment to readable label
		const label = segment
			.split("-")
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
			
		breadcrumbItems.push({
			label,
			href: currentPath,
		});
	});
	
	return (
		<nav 
			className="bg-cream-50 border-b border-gold-200 py-3"
			aria-label="Breadcrumb"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ol className="flex items-center space-x-2 text-sm font-body">
					{breadcrumbItems.map((item, index) => {
						const isLast = index === breadcrumbItems.length - 1;
						
						return (
							<li key={item.href} className="flex items-center">
								{index === 0 ? (
									<Home className="w-4 h-4 text-burgundy-600" />
								) : (
									<ChevronRight className="w-4 h-4 text-neutral-400 mx-2" />
								)}
								
								{isLast ? (
									<span 
										className="text-burgundy-900 font-medium"
										aria-current="page"
									>
										{item.label}
									</span>
								) : (
									<Link
										href={item.href}
										className="text-burgundy-600 hover:text-burgundy-900 transition-colors"
									>
										{index === 0 ? "Home" : item.label}
									</Link>
								)}
							</li>
						);
					})}
				</ol>
			</div>
		</nav>
	);
}
