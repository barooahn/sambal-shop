"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/simple-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
	Check, 
	X, 
	Star, 
	Flame, 
	Sparkles, 
	Zap,
	ShoppingCart,
	Info,
	ArrowRight
} from "@/components/ui/icons";
import StarRating from "@/components/ui/StarRating";

interface Product {
	id: string;
	name: string;
	subtitle: string;
	price: string;
	image: string;
	scoville: string;
	heatLevel: string;
	rating: number;
	reviews: number;
	url: string;
	keyFeatures: string[];
	badge: string;
	badgeIcon: React.ReactNode;
	color: string;
	description: string;
	ingredients: string[];
	uses: string[];
	origin: string;
}

interface ProductComparisonProps {
	products: Product[];
	className?: string;
}

export default function ProductComparison({ products, className = "" }: ProductComparisonProps) {
	const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
	const [comparisonMode, setComparisonMode] = useState(false);

	const toggleProductSelection = (productId: string) => {
		setSelectedProducts(prev => 
			prev.includes(productId) 
				? prev.filter(id => id !== productId)
				: prev.length < 3 
					? [...prev, productId] 
					: prev
		);
	};

	const getSelectedProducts = () => {
		return products.filter(product => selectedProducts.includes(product.id));
	};

	const comparisonFeatures = [
		{ key: 'heatLevel', label: 'Heat Level', type: 'text' },
		{ key: 'scoville', label: 'Scoville Rating', type: 'text' },
		{ key: 'rating', label: 'Customer Rating', type: 'rating' },
		{ key: 'origin', label: 'Recipe Origin', type: 'text' },
		{ key: 'keyFeatures', label: 'Key Features', type: 'list' },
		{ key: 'uses', label: 'Best Used For', type: 'list' },
		{ key: 'ingredients', label: 'Main Ingredients', type: 'list' },
	];

	const getColorClasses = (color: string) => {
		const colors = {
			slate: { bg: 'from-slate-500 to-slate-600', badge: 'bg-slate-600' },
			burgundy: { bg: 'from-red-600 to-red-700', badge: 'bg-red-600' },
			emerald: { bg: 'from-emerald-600 to-emerald-700', badge: 'bg-emerald-600' },
			amber: { bg: 'from-amber-600 to-amber-700', badge: 'bg-amber-600' },
		};
		return colors[color as keyof typeof colors] || colors.burgundy;
	};

	if (comparisonMode && selectedProducts.length > 0) {
		const selectedItems = getSelectedProducts();
		
		return (
			<div className={`bg-white rounded-lg shadow-xl border ${className}`}>
				<div className="p-6 border-b bg-gray-50">
					<div className="flex items-center justify-between">
						<div>
							<h3 className="text-2xl font-bold text-gray-900">Product Comparison</h3>
							<p className="text-gray-600">Compare up to 3 sambal varieties side-by-side</p>
						</div>
						<Button
							variant="outline"
							onClick={() => setComparisonMode(false)}
							className="hover:bg-gray-100"
						>
							Back to Products
						</Button>
					</div>
				</div>

				<div className="p-6">
					<div className="overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr className="border-b-2">
									<th className="text-left py-4 px-2 font-semibold text-gray-600 w-48">
										Feature
									</th>
									{selectedItems.map((product) => (
										<th key={product.id} className="text-center py-4 px-4 min-w-64">
											<div className="space-y-3">
												<div className="relative">
													<Image
														src={product.image}
														alt={product.name}
														width={120}
														height={120}
														className="mx-auto object-contain h-32 w-32"
													/>
													<Badge className={`absolute -top-2 -right-2 ${getColorClasses(product.color).badge} text-white`}>
														{product.badge}
													</Badge>
												</div>
												<div>
													<h4 className="font-bold text-lg text-gray-900">{product.name}</h4>
													<p className="text-sm text-gray-600">{product.subtitle}</p>
													<p className="text-xl font-bold text-red-600 mt-2">{product.price}</p>
												</div>
											</div>
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{comparisonFeatures.map((feature) => (
									<tr key={feature.key} className="border-b hover:bg-gray-50">
										<td className="py-4 px-2 font-medium text-gray-700">
											{feature.label}
										</td>
										{selectedItems.map((product) => {
											const value = product[feature.key as keyof Product];
											
											return (
												<td key={product.id} className="py-4 px-4 text-center">
													{feature.type === 'rating' && typeof value === 'number' ? (
														<div className="flex items-center justify-center space-x-2">
															<StarRating rating={value} size="sm" />
															<span className="text-sm text-gray-600">({product.reviews})</span>
														</div>
													) : feature.type === 'list' && Array.isArray(value) ? (
														<ul className="text-sm space-y-1">
															{value.map((item, index) => (
																<li key={index} className="flex items-center justify-center space-x-1">
																	<Check className="w-3 h-3 text-green-500 flex-shrink-0" />
																	<span>{item}</span>
																</li>
															))}
														</ul>
													) : (
														<span className="text-sm">{value as string}</span>
													)}
												</td>
											);
										})}
									</tr>
								))}
							</tbody>
						</table>
					</div>

					{/* Action Buttons */}
					<div className="mt-8 border-t pt-6">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							{selectedItems.map((product) => (
								<div key={product.id} className="space-y-2">
									<Link href={product.url}>
										<Button className="w-full" variant="outline">
											<Info className="w-4 h-4 mr-2" />
											View {product.name}
										</Button>
									</Link>
									<Link href={product.url}>
										<Button className={`w-full bg-gradient-to-r ${getColorClasses(product.color).bg} text-white hover:opacity-90`}>
											<ShoppingCart className="w-4 h-4 mr-2" />
											Buy {product.price}
										</Button>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={`space-y-6 ${className}`}>
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center justify-between">
						<span>Select Products to Compare</span>
						{selectedProducts.length > 0 && (
							<div className="flex items-center space-x-3">
								<Badge variant="outline" className="text-sm">
									{selectedProducts.length}/3 selected
								</Badge>
								<Button 
									onClick={() => setComparisonMode(true)}
									disabled={selectedProducts.length < 2}
									className="bg-red-600 hover:bg-red-700 text-white"
								>
									Compare Selected
									<ArrowRight className="w-4 h-4 ml-2" />
								</Button>
							</div>
						)}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{products.map((product) => {
							const isSelected = selectedProducts.includes(product.id);
							const colorClasses = getColorClasses(product.color);
							
							return (
								<div
									key={product.id}
									className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
										isSelected 
											? 'border-red-500 bg-red-50 shadow-lg' 
											: 'border-gray-200 hover:border-gray-300 hover:shadow-md'
									}`}
									onClick={() => toggleProductSelection(product.id)}
								>
									{/* Selection Indicator */}
									<div className={`absolute top-2 right-2 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
										isSelected 
											? 'border-red-500 bg-red-500' 
											: 'border-gray-300'
									}`}>
										{isSelected && <Check className="w-4 h-4 text-white" />}
									</div>

									{/* Badge */}
									<Badge className={`absolute top-2 left-2 ${colorClasses.badge} text-white text-xs`}>
										{product.badge}
									</Badge>

									{/* Product Image */}
									<div className="mt-8 mb-4">
										<Image
											src={product.image}
											alt={product.name}
											width={150}
											height={150}
											className="mx-auto object-contain h-40 w-40"
										/>
									</div>

									{/* Product Info */}
									<div className="text-center">
										<h3 className="font-bold text-lg text-gray-900">{product.name}</h3>
										<p className="text-sm text-gray-600 mb-2">{product.subtitle}</p>
										<div className="flex items-center justify-center space-x-1 mb-2">
											<StarRating rating={product.rating} size="sm" />
											<span className="text-xs text-gray-500">({product.reviews})</span>
										</div>
										<p className="text-lg font-bold text-red-600">{product.price}</p>
										<div className="mt-2 space-y-1">
											<p className="text-xs text-gray-600">Heat: {product.heatLevel}</p>
											<p className="text-xs text-gray-500">{product.scoville}</p>
										</div>
									</div>

									{/* Quick Actions */}
									<div className="mt-4 space-y-2">
										<Link href={product.url} onClick={(e) => e.stopPropagation()}>
											<Button variant="outline" size="sm" className="w-full text-xs">
												View Details
											</Button>
										</Link>
									</div>
								</div>
							);
						})}
					</div>

					{selectedProducts.length >= 3 && (
						<div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
							<p className="text-amber-800 text-sm text-center">
								Maximum 3 products can be compared at once. Deselect one to add another.
							</p>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}