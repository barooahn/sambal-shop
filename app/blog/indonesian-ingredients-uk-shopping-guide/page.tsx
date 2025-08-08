import type { Metadata } from "next";
export const excerpt =
	"Complete shopping guide for Indonesian ingredients in the UK. Find authentic sambal, spices, and pantry essentials at supermarkets, Asian shops, and online stores with money-saving tips.";

import Link from "next/link";
import Image from "next/image";
import {
	ArrowLeft,
	ArrowRight,
	ShoppingCart,
	MapPin,
	PoundSterling,
} from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GlassCard from "@/components/ui/GlassCard";

export const metadata: Metadata = {
	title: "Essential Indonesian Ingredients: UK Shopping Guide | Spice Island Indonesia",
	description: excerpt,
	keywords:
		"Indonesian ingredients UK, where to buy sambal UK, Asian supermarket UK, Indonesian shopping guide, sambal ingredients UK, Indonesian spices UK",
};

export default function IndonesianIngredientsUKPage() {
	const ukSupermarkets = [
		{
			name: "Tesco",
			availability: "Good",
			strengths: [
				"Coconut milk",
				"Rice",
				"Basic spices",
				"Some Asian sauces",
			],
			weaknesses: [
				"Limited authentic Indonesian products",
				"No fresh Asian vegetables",
			],
			bestFor: "Basic pantry staples",
		},
		{
			name: "ASDA",
			availability: "Fair",
			strengths: [
				"Coconut products",
				"Rice varieties",
				"Soy sauce",
				"Chili sauces",
			],
			weaknesses: [
				"Limited Indonesian selection",
				"Generic Asian products",
			],
			bestFor: "Budget-conscious shopping",
		},
		{
			name: "Sainsbury's",
			availability: "Good",
			strengths: [
				"Quality coconut milk",
				"Jasmine rice",
				"Better Asian section",
			],
			weaknesses: ["Higher prices", "Limited Indonesian authenticity"],
			bestFor: "Quality ingredients with some variety",
		},
		{
			name: "Waitrose",
			availability: "Excellent",
			strengths: [
				"Premium ingredients",
				"Wider Asian selection",
				"Quality control",
			],
			weaknesses: ["Expensive", "Not all locations have full range"],
			bestFor: "Premium ingredients when budget allows",
		},
	];

	const asianStores = [
		{
			name: "Wing Yip",
			locations: "Birmingham, London, Manchester, Croydon",
			specialty:
				"Comprehensive Asian supermarket with dedicated Indonesian section",
			highlights: [
				"Authentic sambal varieties",
				"Fresh Indonesian vegetables",
				"Frozen Indonesian products",
			],
		},
		{
			name: "See Woo",
			locations: "London (multiple locations)",
			specialty:
				"Large Chinese supermarket with Southeast Asian section",
			highlights: [
				"Good spice selection",
				"Fresh ingredients",
				"Competitive prices",
			],
		},
		{
			name: "Local Asian grocers",
			locations: "Most UK cities",
			specialty: "Often family-run with personal service",
			highlights: [
				"Local expertise",
				"Special orders possible",
				"Community connection",
			],
		},
	];

	const essentialIngredients = [
		{
			ingredient: "Sambal Oelek/Bali",
			ukAvailability: "Asian stores, online",
			substitute: "Fresh chili paste (make your own)",
			notes: "Essential - worth buying authentic versions",
			priority: "High",
		},
		{
			ingredient: "Coconut Milk",
			ukAvailability: "All supermarkets",
			substitute: "None needed",
			notes: "Choose full-fat versions for authentic flavor",
			priority: "High",
		},
		{
			ingredient: "Jasmine Rice",
			ukAvailability: "All supermarkets",
			substitute: "Basmati rice (acceptable)",
			notes: "Long grain, fragrant variety preferred",
			priority: "High",
		},
		{
			ingredient: "Soy Sauce (Dark & Light)",
			ukAvailability: "Most supermarkets",
			substitute: "Regular soy sauce + molasses",
			notes: "Look for Indonesian/Malaysian brands if possible",
			priority: "High",
		},
		{
			ingredient: "Galangal",
			ukAvailability: "Asian stores, frozen sections",
			substitute: "Fresh ginger (different flavor)",
			notes: "Frozen galangal works well for cooking",
			priority: "Medium",
		},
		{
			ingredient: "Lemongrass",
			ukAvailability: "Most supermarkets, Asian stores",
			substitute: "Lemon zest (not ideal)",
			notes: "Fresh is best, freeze well for storage",
			priority: "Medium",
		},
		{
			ingredient: "Kaffir Lime Leaves",
			ukAvailability: "Asian stores, some Waitrose",
			substitute: "Lime zest (different profile)",
			notes: "Dried or frozen acceptable for cooking",
			priority: "Medium",
		},
		{
			ingredient: "Tamarind Paste",
			ukAvailability: "Asian stores, some supermarkets",
			substitute: "Lime juice + brown sugar",
			notes: "Adds essential sourness to many dishes",
			priority: "Medium",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			{/* Hero Section */}
			<section className='py-12 bg-gradient-to-br from-burgundy-50 to-gold-50'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='mb-8'>
						<Link
							href='/blog/indonesian-cooking-guide-british-kitchens'
							className='inline-flex items-center gap-2 text-burgundy-600 hover:text-burgundy-800 font-medium mb-4'
						>
							<ArrowLeft className='w-4 h-4' />
							Back to Indonesian Cooking Guide
						</Link>

						<div className='flex items-center gap-3 mb-4'>
							<Badge className='bg-burgundy-900 text-gold-300'>
								Part 2 of 5
							</Badge>
							<Badge variant='secondary'>
								Shopping Guide
							</Badge>
						</div>

						<h1 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-4 font-brand'>
							Essential Indonesian Ingredients:
							<span className='text-gold-700 block'>
								UK Shopping Guide
							</span>
						</h1>

						<p className='text-xl text-neutral-700 leading-relaxed font-body'>
							Your complete guide to finding authentic
							Indonesian ingredients across the UK. From
							high street supermarkets to specialist Asian
							stores, plus money-saving substitutions.
						</p>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className='py-12'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12'>
					{/* UK Supermarkets Section */}
					<div>
						<h2 className='text-3xl font-bold text-burgundy-900 mb-8 font-brand'>
							UK Supermarket Guide
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							{ukSupermarkets.map((store, index) => (
								<Card
									key={index}
									className='border border-gold-200 shadow-sm'
								>
									<CardHeader>
										<div className='flex items-center justify-between'>
											<CardTitle className='text-xl font-brand'>
												{store.name}
											</CardTitle>
											<Badge
												variant={
													store.availability ===
													"Excellent"
														? "default"
														: "secondary"
												}
											>
												{store.availability}
											</Badge>
										</div>
									</CardHeader>
									<CardContent className='space-y-4'>
										<div>
											<h4 className='font-semibold text-green-700 mb-2'>
												Available:
											</h4>
											<ul className='text-sm space-y-1'>
												{store.strengths.map(
													(item, i) => (
														<li
															key={
																i
															}
														>
															•{" "}
															{
																item
															}
														</li>
													)
												)}
											</ul>
										</div>
										<div>
											<h4 className='font-semibold text-amber-600 mb-2'>
												Limited:
											</h4>
											<ul className='text-sm space-y-1'>
												{store.weaknesses.map(
													(item, i) => (
														<li
															key={
																i
															}
														>
															•{" "}
															{
																item
															}
														</li>
													)
												)}
											</ul>
										</div>
										<div className='pt-2 border-t'>
											<p className='text-sm font-medium text-burgundy-700'>
												Best for:{" "}
												{store.bestFor}
											</p>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>

					{/* Asian Stores Section */}
					<div>
						<h2 className='text-3xl font-bold text-burgundy-900 mb-8 font-brand'>
							Specialist Asian Stores
						</h2>
						<div className='space-y-6'>
							{asianStores.map((store, index) => (
								<GlassCard
									key={index}
									variant='subtle'
									className='p-6'
								>
									<div className='flex items-start justify-between mb-4'>
										<div>
											<h3 className='text-xl font-bold text-burgundy-900 font-brand'>
												{store.name}
											</h3>
											<p className='text-sm text-neutral-600 flex items-center gap-1 mt-1'>
												<MapPin className='w-4 h-4' />
												{store.locations}
											</p>
										</div>
									</div>
									<p className='text-neutral-700 mb-4 font-body'>
										{store.specialty}
									</p>
									<div>
										<h4 className='font-semibold text-burgundy-800 mb-2'>
											Highlights:
										</h4>
										<ul className='grid md:grid-cols-3 gap-2'>
											{store.highlights.map(
												(highlight, i) => (
													<li
														key={i}
														className='text-sm bg-gold-50 px-3 py-1 rounded'
													>
														{
															highlight
														}
													</li>
												)
											)}
										</ul>
									</div>
								</GlassCard>
							))}
						</div>
					</div>

					{/* Essential Ingredients Table */}
					<div>
						<h2 className='text-3xl font-bold text-burgundy-900 mb-8 font-brand'>
							Essential Ingredients Checklist
						</h2>
						<div className='overflow-hidden rounded-lg border border-gold-200'>
							<div className='overflow-x-auto'>
								<table className='w-full'>
									<thead className='bg-burgundy-50'>
										<tr>
											<th className='px-4 py-3 text-left font-semibold text-burgundy-900'>
												Ingredient
											</th>
											<th className='px-4 py-3 text-left font-semibold text-burgundy-900'>
												UK Availability
											</th>
											<th className='px-4 py-3 text-left font-semibold text-burgundy-900'>
												Substitute
											</th>
											<th className='px-4 py-3 text-left font-semibold text-burgundy-900'>
												Priority
											</th>
										</tr>
									</thead>
									<tbody className='bg-white divide-y divide-gold-100'>
										{essentialIngredients.map(
											(item, index) => (
												<tr
													key={index}
													className='hover:bg-gold-25'
												>
													<td className='px-4 py-3'>
														<div>
															<p className='font-medium text-burgundy-900'>
																{
																	item.ingredient
																}
															</p>
															<p className='text-sm text-neutral-600'>
																{
																	item.notes
																}
															</p>
														</div>
													</td>
													<td className='px-4 py-3 text-sm'>
														{
															item.ukAvailability
														}
													</td>
													<td className='px-4 py-3 text-sm'>
														{
															item.substitute
														}
													</td>
													<td className='px-4 py-3'>
														<Badge
															variant={
																item.priority ===
																"High"
																	? "default"
																	: "secondary"
															}
														>
															{
																item.priority
															}
														</Badge>
													</td>
												</tr>
											)
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>

					{/* Budget Tips */}
					<GlassCard variant='subtle' className='p-8'>
						<div className='flex items-center gap-3 mb-6'>
							<PoundSterling className='w-6 h-6 text-gold-600' />
							<h2 className='text-2xl font-bold text-burgundy-900 font-brand'>
								Budget-Friendly Shopping Tips
							</h2>
						</div>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<h3 className='font-semibold text-burgundy-800 mb-3'>
									Money-Saving Strategies
								</h3>
								<ul className='space-y-2 text-sm'>
									<li>
										• Buy whole spices and grind
										yourself
									</li>
									<li>
										• Purchase coconut milk in
										bulk
									</li>
									<li>
										• Freeze fresh herbs in
										portions
									</li>
									<li>
										• Make your own sambal when
										possible
									</li>
									<li>
										• Share specialty ingredient
										costs with friends
									</li>
								</ul>
							</div>
							<div>
								<h3 className='font-semibold text-burgundy-800 mb-3'>
									Acceptable Substitutions
								</h3>
								<ul className='space-y-2 text-sm'>
									<li>
										• Ginger for galangal
										(different but workable)
									</li>
									<li>
										• Lime zest for kaffir lime
										leaves
									</li>
									<li>
										• Regular soy + molasses for
										dark soy
									</li>
									<li>
										• Lemon juice for tamarind
										(add brown sugar)
									</li>
									<li>
										• Chili flakes for fresh
										chilies (adjust quantity)
									</li>
								</ul>
							</div>
						</div>
					</GlassCard>

					{/* Navigation */}
					<div className='flex flex-col sm:flex-row gap-4 pt-8 border-t border-gold-200'>
						<Link
							href='/blog/indonesian-spice-levels-british-palates'
							className='flex-1 bg-white border border-gold-200 rounded-lg p-6 hover:shadow-md transition-shadow'
						>
							<div className='flex items-center justify-between'>
								<div>
									<ArrowLeft className='w-5 h-5 text-burgundy-600 mb-2' />
									<p className='text-sm text-neutral-600'>
										Previous
									</p>
									<p className='font-semibold text-burgundy-900'>
										Part 1: Spice Levels Guide
									</p>
								</div>
							</div>
						</Link>

						<Link
							href='/blog/indonesian-cooking-guide-british-kitchens'
							className='flex-1 bg-white border border-gold-200 rounded-lg p-6 hover:shadow-md transition-shadow'
						>
							<div className='flex items-center justify-between'>
								<div className='text-right'>
									<ArrowRight className='w-5 h-5 text-burgundy-600 mb-2 ml-auto' />
									<p className='text-sm text-neutral-600'>
										Next
									</p>
									<p className='font-semibold text-burgundy-900'>
										Part 3: Kitchen Techniques
									</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
