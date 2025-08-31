'use client';

import { FC } from "react";
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
	name: string;
	url: string;
	position: number;
}

interface BreadcrumbSchemaProps {
	items: BreadcrumbItem[];
	showVisual?: boolean;
	className?: string;
}

const BreadcrumbSchema: FC<BreadcrumbSchemaProps> = ({ 
	items, 
	showVisual = true, 
	className = '' 
}) => {
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": items.map((item) => ({
			"@type": "ListItem",
			"position": item.position,
			"name": item.name,
			"item": {
				"@type": "WebPage",
				"@id": `https://www.spiceislandindonesia.com${item.url}`,
				"url": `https://www.spiceislandindonesia.com${item.url}`
			}
		}))
	};

	return (
		<>
			{/* JSON-LD Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(schemaData, null, 2)
				}}
			/>
			
			{/* Visual Breadcrumb Navigation */}
			{showVisual && items.length > 1 && (
				<nav 
					role="navigation" 
					aria-label="Breadcrumb"
					className={`bg-cream-50 border-b border-gold-200 py-3 ${className}`}
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<ol className="flex items-center space-x-2 text-sm">
							{/* Home */}
							<li>
								<Link
									href="/"
									className="flex items-center text-burgundy-600 hover:text-burgundy-800 transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:ring-offset-2 rounded"
									aria-label="Home"
								>
									<Home className="w-4 h-4" />
									<span className="sr-only">Home</span>
								</Link>
							</li>
							
							{items.map((item, index) => {
								const isLast = index === items.length - 1;
								
								return (
									<li key={item.url} className="flex items-center">
										<ChevronRight className="w-4 h-4 text-neutral-400 mx-2" aria-hidden="true" />
										{isLast ? (
											<span 
												className="text-neutral-600 font-medium"
												aria-current="page"
											>
												{item.name}
											</span>
										) : (
											<Link
												href={item.url}
												className="text-burgundy-600 hover:text-burgundy-800 transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:ring-offset-2 rounded px-1"
											>
												{item.name}
											</Link>
										)}
									</li>
								);
							})}
						</ol>
					</div>
				</nav>
			)}
		</>
	);
};

export default BreadcrumbSchema;
