import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Truck, Star, Phone, Mail } from "lucide-react";
import LocalSEOSchema from "@/components/seo/LocalSEOSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import InternalLinkingOptimization from "@/components/seo/InternalLinkingOptimization";
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
	title: "Authentic Indonesian Sambal Delivery Manchester | Same Day Delivery | Spice Island Indonesia",
	description:
		"Get authentic Indonesian sambal delivered to Manchester and Greater Manchester. Same-day delivery available. Traditional recipes by Chef Yossie from Bandung, Indonesia.",
	keywords:
		"sambal delivery Manchester, Indonesian food Manchester, authentic sambal Greater Manchester, Indonesian condiments delivery, spicy food Manchester, Asian ingredients Manchester",
	openGraph: {
		title: "Authentic Indonesian Sambal Delivery Manchester - Spice Island Indonesia",
		description:
			"Same-day delivery of authentic Indonesian sambal to Manchester. Traditional recipes, no preservatives, delivered fresh to your door.",
		images: ["/images/optimized/sambal-bali-md.webp"],
		type: "website",
	},
};

export default function ManchesterDeliveryPage() {
	// Breadcrumb data
	const breadcrumbItems = [
		{
			name: "Home",
			url: "https://spiceislandindonesia.com",
			position: 1,
		},
		{
			name: "Manchester Delivery",
			url: "https://spiceislandindonesia.com/sambal-delivery-manchester",
			position: 2,
		},
	];

	// Manchester coverage areas
	const manchesterAreas = [
		"Manchester City Centre",
		"Salford",
		"Trafford",
		"Stockport",
		"Oldham",
		"Rochdale",
		"Bury",
		"Bolton",
		"Wigan",
		"Tameside",
		"Chorlton",
		"Didsbury",
		"Withington",
		"Fallowfield",
		"Rusholme",
		"Hulme",
		"Ancoats",
		"Northern Quarter",
		"Deansgate",
		"Piccadilly",
		"Oxford Road",
		"Curry Mile",
		"Chinatown",
	];

	// Related products for Manchester
	const relatedProducts = [
		{
			name: "Sambal Bali - Aromatic & Spicy",
			url: "/sambal-bali-aromatic-spicy",
			description:
				"Perfect for Manchester&apos;s diverse food scene - aromatic spices with authentic heat",
			rating: 4.9,
			price: "£7.49",
			badge: "Most Popular",
		},
		{
			name: "Sambal Oelek - Pure Heat",
			url: "/sambal-oelek-uk",
			description:
				"Traditional Indonesian chili paste - perfect for Manchester&apos;s spice lovers",
			rating: 4.8,
			price: "£7.49",
			badge: "Authentic",
		},
	];

	const relatedRecipes = [
		{
			name: "Sambal Fried Rice",
			url: "/recipes/sambal-fried-rice",
			description:
				"Transform your Manchester takeaway night with authentic Indonesian flavors",
			difficulty: "Easy" as const,
			cookTime: "25 minutes",
		},
		{
			name: "Sambal Chicken Stir-Fry",
			url: "/recipes/sambal-chicken-stir-fry",
			description:
				"Quick weeknight dinner perfect for busy Manchester professionals",
			difficulty: "Easy" as const,
			cookTime: "20 minutes",
		},
	];

	const relatedArticles = [
		{
			title: "5 Ways to Use Indonesian Sambal in British Cooking",
			url: "/blog/5-ways-sambal-british-cooking",
			excerpt: "Discover how to incorporate authentic Indonesian flavors into your favorite British dishes",
			readTime: "10 min",
			category: "Cooking Tips",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			{/* Local SEO Schema for Manchester */}
			<LocalSEOSchema
				businessName='Spice Island Indonesia - Manchester Delivery'
				description='Authentic Indonesian sambal delivery service in Manchester and Greater Manchester. Traditional recipes by Chef Yossie, delivered fresh to your door.'
				serviceAreas={[
					{ name: "Manchester", type: "City" },
					{ name: "Greater Manchester", type: "Region" },
					{ name: "Salford", type: "City" },
					{ name: "Stockport", type: "City" },
					{ name: "Oldham", type: "City" },
					{ name: "Bolton", type: "City" },
					{ name: "Bury", type: "City" },
					{ name: "Rochdale", type: "City" },
					{ name: "Wigan", type: "City" },
					{ name: "Tameside", type: "Region" },
					{ name: "Trafford", type: "Region" },
				]}
				deliveryRadius={25}
				deliveryUnit='km'
				specialties={[
					"Indonesian Sambal Delivery Manchester",
					"Authentic Chili Paste Manchester",
					"Traditional Indonesian Spices Manchester",
					"Same Day Delivery Manchester",
					"Greater Manchester Indonesian Food",
					"Manchester Asian Ingredients",
					"Curry Mile Indonesian Condiments",
					"Manchester Spicy Food Delivery",
				]}
				languages={["English", "Indonesian"]}
			/>
			<BreadcrumbSchema items={breadcrumbItems} />

			{/* Hero Section */}
			<section className='py-16 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 text-white relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-gold-600/10 via-transparent to-gold-600/10'></div>
				<div className='container mx-auto px-4 relative z-10'>
					{/* Breadcrumb Navigation */}
					<div className='mb-8'>
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbLink
										href='/'
										className='text-gold-200 hover:text-gold-100'
									>
										Home
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className='text-gold-300' />
								<BreadcrumbItem>
									<BreadcrumbPage className='text-gold-100'>
										Manchester Delivery
									</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>

					<div className='max-w-4xl mx-auto text-center'>
						<div className='flex items-center justify-center gap-2 mb-6'>
							<MapPin className='w-8 h-8 text-gold-400' />
							<Badge className='bg-gold-600 text-white text-lg px-4 py-2'>
								Manchester & Greater Manchester
							</Badge>
						</div>

						<h1 className='text-4xl lg:text-6xl font-bold mb-6 font-heading'>
							Authentic Indonesian Sambal
							<span className='block text-gold-300'>
								Delivered to Manchester
							</span>
						</h1>

						<p className='text-xl lg:text-2xl text-gold-200 mb-8 max-w-3xl mx-auto leading-relaxed font-body'>
							From the Curry Mile to Chorlton, from
							Didsbury to the Northern Quarter - experience
							authentic Indonesian flavors delivered fresh
							to your Manchester doorstep.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
							<div className='flex items-center gap-2 text-gold-200'>
								<Clock className='w-5 h-5' />
								<span className='font-medium'>
									Same-day delivery available
								</span>
							</div>
							<div className='flex items-center gap-2 text-gold-200'>
								<Truck className='w-5 h-5' />
								<span className='font-medium'>
									Free delivery over £20
								</span>
							</div>
							<div className='flex items-center gap-2 text-gold-200'>
								<Star className='w-5 h-5 fill-gold-400' />
								<span className='font-medium'>
									4.9/5 customer rating
								</span>
							</div>
						</div>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Button
								asChild
								size='lg'
								className='bg-gold-600 hover:bg-gold-700 text-white font-bold px-8 py-4 text-lg'
							>
								<Link href='/shop'>
									Order Now - Manchester Delivery
								</Link>
							</Button>
							<Button
								asChild
								variant='outline'
								size='lg'
								className='border-gold-300 text-gold-200 hover:bg-gold-600 hover:text-white px-8 py-4 text-lg'
							>
								<Link href='/sample-pack-try-first'>
									Try Sample Pack First
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Manchester Coverage Areas */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 font-heading'>
								🗺️ Manchester Delivery Coverage
							</h2>
							<p className='text-xl text-gray-600 max-w-3xl mx-auto font-body'>
								We deliver authentic Indonesian sambal
								throughout Manchester and Greater
								Manchester. Same-day delivery available
								to most areas.
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-8 mb-12'>
							<Card className='border border-gold-200 shadow-lg'>
								<CardContent className='p-8'>
									<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-heading'>
										📍 Delivery Areas
									</h3>
									<div className='grid grid-cols-2 gap-2'>
										{manchesterAreas.map(
											(area, index) => (
												<div
													key={index}
													className='flex items-center gap-2 py-1'
												>
													<div className='w-2 h-2 bg-burgundy-600 rounded-full'></div>
													<span className='text-gray-700 text-sm'>
														{area}
													</span>
												</div>
											)
										)}
									</div>
								</CardContent>
							</Card>

							<Card className='border border-gold-200 shadow-lg'>
								<CardContent className='p-8'>
									<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-heading'>
										🚚 Delivery Information
									</h3>
									<div className='space-y-4'>
										<div className='flex items-start gap-3'>
											<Clock className='w-5 h-5 text-burgundy-600 mt-1' />
											<div>
												<h4 className='font-semibold text-burgundy-900'>
													Same-Day
													Delivery
												</h4>
												<p className='text-gray-600 text-sm'>
													Order before 2
													PM for same-day
													delivery
												</p>
											</div>
										</div>
										<div className='flex items-start gap-3'>
											<Truck className='w-5 h-5 text-burgundy-600 mt-1' />
											<div>
												<h4 className='font-semibold text-burgundy-900'>
													Free Delivery
												</h4>
												<p className='text-gray-600 text-sm'>
													Free delivery
													on orders over
													£20
												</p>
											</div>
										</div>
										<div className='flex items-start gap-3'>
											<MapPin className='w-5 h-5 text-burgundy-600 mt-1' />
											<div>
												<h4 className='font-semibold text-burgundy-900'>
													Coverage Radius
												</h4>
												<p className='text-gray-600 text-sm'>
													25km radius
													from Manchester
													city centre
												</p>
											</div>
										</div>
										<div className='flex items-start gap-3'>
											<Phone className='w-5 h-5 text-burgundy-600 mt-1' />
											<div>
												<h4 className='font-semibold text-burgundy-900'>
													Contact Us
												</h4>
												<p className='text-gray-600 text-sm'>
													Call for
													delivery
													outside
													standard areas
												</p>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Internal Linking for SEO */}
			<section className='py-16 bg-cream-50'>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto'>
						<InternalLinkingOptimization
							currentPage='product'
							relatedProducts={relatedProducts}
							relatedRecipes={relatedRecipes}
							relatedArticles={relatedArticles}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
