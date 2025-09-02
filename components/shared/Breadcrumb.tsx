"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "@/components/ui/icons";

interface BreadcrumbItem {
	label: string;
	href: string;
}

// Custom page labels for better SEO and UX
const customLabels: Record<string, string> = {
	"blog": "Blog",
	"recipes": "Recipes",
	"shop": "Shop",
	"products": "Products",
	"about": "About",
	"contact": "Contact",
	"chef": "Chef Yossie",
	"sambal-oelek-uk": "Sambal Oelek",
	"sambal-bali-aromatic-spicy": "Sambal Bali Aromatic",
	"sambal-bali-sweet-spicy": "Sambal Bali Sweet",
	"sambal-goreng-uk": "Sambal Goreng",
	"sample-pack-try-first": "Sample Pack",
	"gift-set": "Gift Set",
	"gift-set-indonesian": "Indonesian Gift Set",
	"wholesale": "Wholesale",
	"shipping": "Shipping",
	"returns": "Returns",
	"privacy": "Privacy Policy",
	"terms": "Terms of Service",
	"sambal-vs-hot-sauce": "Sambal vs Hot Sauce",
	"sambal-vs-sriracha": "Sambal vs Sriracha",
	"hot-sauce-vs-sambal": "Hot Sauce vs Sambal",
	"best-asian-hot-sauce": "Best Asian Hot Sauce",
	"sriracha-alternative": "Sriracha Alternative",
	"authentic-vs-store-bought": "Authentic vs Store Bought",
	"indonesian-sambal-london": "Indonesian Sambal London",
	"sambal-delivery-manchester": "Sambal Delivery Manchester",
	"uk-indonesian-food-delivery": "UK Indonesian Food Delivery",
	"sambal-bbq-marinade": "Sambal BBQ Marinade",
	"sambal-eggs-breakfast": "Sambal Eggs Breakfast",
	"sambal-for-stir-fry": "Sambal for Stir Fry",
	"sambal-noodle-sauce": "Sambal Noodle Sauce",
	"ayam-penyet": "Ayam Penyet",
	"ikan-bakar": "Ikan Bakar",
	"bakwan": "Bakwan",
	"lalapan": "Lalapan",
	"sambal-chicken-stir-fry": "Sambal Chicken Stir Fry",
	"sambal-fried-rice": "Sambal Fried Rice",
	"sambal-noodle-soup": "Sambal Noodle Soup",
	"sambal-scrambled-eggs": "Sambal Scrambled Eggs"
};

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
		
		// Use custom label if available, otherwise convert segment to readable label
		const label = customLabels[segment] || segment
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
			className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 py-2.5 shadow-sm"
			aria-label="Breadcrumb"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ol className="flex items-center space-x-1 text-sm overflow-x-auto">
					{breadcrumbItems.map((item, index) => {
						const isLast = index === breadcrumbItems.length - 1;
						
						return (
							<li key={item.href} className="flex items-center flex-shrink-0">
								{index === 0 ? (
									<Home className="w-4 h-4 mr-1.5 text-red-600 flex-shrink-0" />
								) : (
									<ChevronRight className="w-3.5 h-3.5 text-gray-400 mx-1.5 flex-shrink-0" />
								)}
								
								{isLast ? (
									<span 
										className="text-gray-700 font-medium truncate max-w-[200px]"
										aria-current="page"
										title={item.label}
									>
										{item.label}
									</span>
								) : (
									<Link
										href={item.href}
										className="text-red-600 hover:text-red-800 transition-colors duration-200 hover:underline truncate max-w-[150px]"
										title={index === 0 ? "Home" : item.label}
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
