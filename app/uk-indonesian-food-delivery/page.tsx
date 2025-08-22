import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Truck, Star, Package, Shield } from "lucide-react";
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
	title: "UK-Wide Indonesian Food Delivery | Authentic Sambal Nationwide | Spice Island Indonesia",
	description:
		"Authentic Indonesian sambal delivered nationwide across the UK. Traditional recipes by Chef Yossie from Bandung. Free delivery to England, Scotland, Wales & Northern Ireland.",
	keywords:
		"Indonesian food delivery UK, sambal delivery nationwide, authentic Indonesian condiments UK, Indonesian spices delivery, UK Indonesian food, nationwide sambal delivery",
	openGraph: {
		title: "UK-Wide Indonesian Food Delivery - Authentic Sambal Nationwide",
		description:
			"Bringing authentic Indonesian flavors to every corner of the UK. Traditional sambal recipes delivered nationwide with free shipping.",
		images: ["/images/optimized/sambal-bali-md.webp"],
		type: "website",
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/uk-indonesian-food-delivery",
	},
};

export default function UKDeliveryPage() {
	// Breadcrumb data
	const breadcrumbItems = [
		{
			name: "Home",
			url: "https://spiceislandindonesia.com",
			position: 1,
		},
		{
			name: "UK Delivery",
			url: "https://spiceislandindonesia.com/uk-indonesian-food-delivery",
			position: 2,
		},
	];

	// Major UK cities and regions
	const ukRegions = [
		{
			region: "England",
			cities: [
				"London",
				"Manchester",
				"Birmingham",
				"Liverpool",
				"Leeds",
				"Sheffield",
				"Bristol",
				"Newcastle",
				"Nottingham",
				"Leicester",
				"Coventry",
				"Bradford",
				"Stoke-on-Trent",
				"Wolverhampton",
				"Plymouth",
			],
		},
		{
			region: "Scotland",
			cities: [
				"Edinburgh",
				"Glasgow",
				"Aberdeen",
				"Dundee",
				"Stirling",
				"Perth",
				"Inverness",
				"Paisley",
				"East Kilbride",
				"Livingston",
			],
		},
		{
			region: "Wales",
			cities: [
				"Cardiff",
				"Swansea",
				"Newport",
				"Wrexham",
				"Barry",
				"Caerphilly",
				"Rhondda",
				"Bridgend",
				"Neath",
				"Port Talbot",
			],
		},
		{
			region: "Northern Ireland",
			cities: [
				"Belfast",
				"Derry/Londonderry",
				"Lisburn",
				"Newtownabbey",
				"Bangor",
				"Craigavon",
				"Castlereagh",
				"Ballymena",
				"Newtownards",
				"Carrickfergus",
			],
		},
	];

	// Related products for UK delivery
	const relatedProducts = [
		{
			name: "Indonesian Sambal Gift Set",
			url: "/gift-set-indonesian",
			description:
				"Perfect introduction to authentic Indonesian flavors - delivered anywhere in the UK",
			rating: 4.9,
			price: "£19.99",
			badge: "Best Value",
		},
		{
			name: "Sample Pack - Try First",
			url: "/sample-pack-try-first",
			description:
				"Small portions of our most popular sambals - perfect for first-time customers",
			rating: 4.8,
			price: "£12.99",
			badge: "Try First",
		},
	];

	const relatedRecipes = [
		{
			name: "Sambal Fried Rice",
			url: "/recipes/sambal-fried-rice",
			description:
				"Transform your weeknight dinners with this authentic Indonesian recipe",
			difficulty: "Easy" as const,
			cookTime: "25 minutes",
		},
		{
			name: "Sambal BBQ Marinade",
			url: "/recipes/sambal-bbq-marinade",
			description:
				"Perfect for British BBQ season - Indonesian spice meets British grilling",
			difficulty: "Easy" as const,
			cookTime: "15 minutes",
		},
	];

	const relatedArticles = [
		{
			title: "The History of the Spice Islands: Where Your Sambal Comes From",
			url: "/blog/spice-islands-history",
			excerpt: "Discover the volcanic islands that created the perfect conditions for the world&apos;s most flavorful chilies",
			readTime: "8 min",
			category: "Culture & History",
		},
		{
			title: "5 Ways to Use Indonesian Sambal in British Cooking",
			url: "/blog/5-ways-sambal-british-cooking",
			excerpt: "Transform your favourite British dishes with authentic Indonesian sambal",
			readTime: "10 min",
			category: "Cooking Tips",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			{/* Local SEO Schema for UK */}
			<LocalSEOSchema
				businessName='Spice Island Indonesia - UK Delivery'
				description='Authentic Indonesian sambal delivery service across the United Kingdom. Traditional recipes by Chef Yossie, delivered nationwide to England, Scotland, Wales, and Northern Ireland.'
				serviceAreas={[
					{ name: "United Kingdom", type: "Country" },
					{ name: "England", type: "Region" },
					{ name: "Scotland", type: "Region" },
					{ name: "Wales", type: "Region" },
					{ name: "Northern Ireland", type: "Region" },
					{ name: "London", type: "City" },
					{ name: "Manchester", type: "City" },
					{ name: "Birmingham", type: "City" },
					{ name: "Edinburgh", type: "City" },
					{ name: "Cardiff", type: "City" },
					{ name: "Belfast", type: "City" },
				]}
				deliveryRadius={800}
				deliveryUnit='km'
				specialties={[
					"UK Indonesian Food Delivery",
					"Nationwide Sambal Delivery",
					"Authentic Indonesian Condiments UK",
					"Traditional Indonesian Spices UK",
					"Indonesian Food England Scotland Wales",
					"UK Asian Ingredients Delivery",
					"British Indonesian Cuisine",
					"Nationwide Spicy Food Delivery",
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
										UK Delivery
									</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>

					<div className='max-w-4xl mx-auto text-center'>
						<div className='flex items-center justify-center gap-2 mb-6'>
							<MapPin className='w-8 h-8 text-gold-400' />
							<Badge className='bg-gold-600 text-white text-lg px-4 py-2'>
								🇬🇧 Nationwide UK Delivery
							</Badge>
						</div>

						<h1 className='text-4xl lg:text-6xl font-bold mb-6 font-heading'>
							Authentic Indonesian Sambal
							<span className='block text-gold-300'>
								Delivered Across the UK
							</span>
						</h1>

						<p className='text-xl lg:text-2xl text-gold-200 mb-8 max-w-3xl mx-auto leading-relaxed font-body'>
							From the Highlands of Scotland to the valleys
							of Wales, from bustling London to peaceful
							countryside - bringing authentic Indonesian
							flavors to every corner of the United
							Kingdom.
						</p>

						<div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto'>
							<div className='flex flex-col items-center gap-2 text-gold-200'>
								<Package className='w-6 h-6' />
								<span className='text-sm font-medium'>
									Free Shipping
								</span>
								<span className='text-xs'>
									Orders over £20
								</span>
							</div>
							<div className='flex flex-col items-center gap-2 text-gold-200'>
								<Shield className='w-6 h-6' />
								<span className='text-sm font-medium'>
									Secure Packaging
								</span>
								<span className='text-xs'>
									Temperature controlled
								</span>
							</div>
							<div className='flex flex-col items-center gap-2 text-gold-200'>
								<Clock className='w-6 h-6' />
								<span className='text-sm font-medium'>
									Fast Delivery
								</span>
								<span className='text-xs'>
									2-3 working days
								</span>
							</div>
							<div className='flex flex-col items-center gap-2 text-gold-200'>
								<Star className='w-6 h-6 fill-gold-400' />
								<span className='text-sm font-medium'>
									4.9/5 Rating
								</span>
								<span className='text-xs'>
									1000+ reviews
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
									Order Now - UK Delivery
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

			{/* UK Coverage Areas */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 font-heading'>
								🗺️ Complete UK Coverage
							</h2>
							<p className='text-xl text-gray-600 max-w-3xl mx-auto font-body'>
								We deliver authentic Indonesian sambal
								to every corner of the United Kingdom.
								From major cities to remote villages, we
								bring the taste of Indonesia to your
								door.
							</p>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
							{ukRegions.map((region, index) => (
								<Card
									key={index}
									className='border border-gold-200 shadow-lg'
								>
									<CardContent className='p-6'>
										<h3 className='text-xl font-bold text-burgundy-900 mb-4 font-heading flex items-center gap-2'>
											<MapPin className='w-5 h-5 text-burgundy-600' />
											{region.region}
										</h3>
										<div className='space-y-2'>
											{region.cities.map(
												(
													city,
													cityIndex
												) => (
													<div
														key={
															cityIndex
														}
														className='flex items-center gap-2'
													>
														<div className='w-2 h-2 bg-burgundy-600 rounded-full'></div>
														<span className='text-gray-700 text-sm'>
															{
																city
															}
														</span>
													</div>
												)
											)}
										</div>
									</CardContent>
								</Card>
							))}
						</div>

						{/* Delivery Information */}
						<Card className='border border-gold-200 shadow-lg'>
							<CardContent className='p-8'>
								<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-heading text-center'>
									🚚 UK Delivery Information
								</h3>
								<div className='grid md:grid-cols-3 gap-6'>
									<div className='text-center'>
										<Package className='w-12 h-12 text-burgundy-600 mx-auto mb-4' />
										<h4 className='font-bold text-burgundy-900 mb-2'>
											Free Shipping
										</h4>
										<p className='text-gray-600 text-sm'>
											Free delivery on all
											orders over £20 to
											anywhere in the UK
										</p>
									</div>
									<div className='text-center'>
										<Clock className='w-12 h-12 text-burgundy-600 mx-auto mb-4' />
										<h4 className='font-bold text-burgundy-900 mb-2'>
											Fast Delivery
										</h4>
										<p className='text-gray-600 text-sm'>
											2-3 working days to most
											UK addresses, including
											remote areas
										</p>
									</div>
									<div className='text-center'>
										<Shield className='w-12 h-12 text-burgundy-600 mx-auto mb-4' />
										<h4 className='font-bold text-burgundy-900 mb-2'>
											Secure Packaging
										</h4>
										<p className='text-gray-600 text-sm'>
											Temperature-controlled
											packaging ensures
											freshness on arrival
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Why Choose Us for UK Delivery */}
			<section className='py-16 bg-cream-50'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto text-center mb-12'>
						<h2 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-6 font-heading'>
							🇮🇩 Bringing Indonesia to Britain
						</h2>
						<p className='text-xl text-gray-600 font-body'>
							We&apos;re proud to be the UK&apos;s premier
							source for authentic Indonesian sambal,
							bridging the gap between traditional
							Indonesian cuisine and British kitchens.
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12'>
						<Card className='border border-gold-200 shadow-lg'>
							<CardContent className='p-8'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-4'>
									🌶️ Authentic Recipes
								</h3>
								<p className='text-gray-700 mb-4'>
									Our sambal is made using
									traditional recipes from Chef
									Yossie&apos;s family in Bandung,
									Indonesia. No shortcuts, no
									artificial ingredients - just
									authentic Indonesian flavors.
								</p>
								<p className='text-gray-700'>
									Each jar contains the same
									volcanic-soil chilies and
									time-honored techniques that have
									been perfected over generations in
									the Spice Islands.
								</p>
							</CardContent>
						</Card>

						<Card className='border border-gold-200 shadow-lg'>
							<CardContent className='p-8'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-4'>
									🇬🇧 Made for British Kitchens
								</h3>
								<p className='text-gray-700 mb-4'>
									While our recipes are authentically
									Indonesian, we understand British
									tastes and cooking styles. Our
									sambal works perfectly in
									traditional British dishes and
									modern fusion cooking.
								</p>
								<p className='text-gray-700'>
									From Sunday roasts to fish and
									chips, our customers across the UK
									have discovered how Indonesian
									sambal can transform familiar
									British meals.
								</p>
							</CardContent>
						</Card>
					</div>

					{/* Internal Linking for SEO */}
					<InternalLinkingOptimization
						currentPage='product'
						relatedProducts={relatedProducts}
						relatedRecipes={relatedRecipes}
						relatedArticles={relatedArticles}
					/>
				</div>
			</section>
		</div>
	);
}
