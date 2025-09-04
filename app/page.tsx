import { Metadata } from "next";
import StructuredData from "@/components/seo/StructuredData";

export const metadata: Metadata = {
	title: "Authentic Indonesian Sambal UK | Spice Island Indonesia",
	description:
		"Discover authentic Indonesian sambal made by Chef Yossie using traditional recipes. Premium sambal oelek, sambal bali, and sambal goreng delivered throughout the UK. Free delivery over £20.",
	keywords:
		"authentic Indonesian sambal UK, sambal oelek UK, traditional Indonesian chili paste, Chef Yossie sambal, UK delivery Indonesian condiments",
	alternates: {
		canonical: "https://www.spiceislandindonesia.com",
	},
	openGraph: {
		title: "Authentic Indonesian Sambal UK | Spice Island Indonesia",
		description:
			"Premium Indonesian sambal made by Chef Yossie using traditional recipes. UK delivery available.",
		type: "website",
		url: "https://www.spiceislandindonesia.com",
	},
};
import ProblemSolutionContent from "@/components/seo/ProblemSolutionContent";
import LocalSEOSchema from "@/components/seo/LocalSEOSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import VoiceSearchSchema from "@/components/seo/VoiceSearchSchema";
import EntityMarkup from "@/components/seo/EntityMarkup";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import ProductShowcase from "@/components/home/ProductShowcase";

import { getInternalUrls } from '@/lib/url-utils';

// Get all internal URLs using the utility function
const urls = getInternalUrls();
import ShippingSection from "@/components/home/ShippingSection";
import StorySection from "@/components/home/StorySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import FloatingIngredients from "@/components/ui/FloatingIngredients";
import TrustIndicators, {
	DeliveryGuarantee,
} from "@/components/ui/TrustIndicators";
import { Waves, Triangle } from "@/components/ui/icons";
import PreOrderBanner from "@/components/ui/PreOrderBanner";

// Ingredient configurations for different sections
const heroIngredients = [
	{
		src: "/images/optimized/long-red-chili-sm.webp",
		alt: "Fresh Red Chili",
		size: "md" as const,
		position: {
			mobile: { bottom: "-30px", right: "60px" },
			tablet: { bottom: "-50px", right: "60px" },
			desktop: { bottom: "-80px", right: "60px" },
		},
		rotation: 0,
		animationDelay: "0.5s",
		animationDuration: "6s",
	},
	{
		src: "/images/optimized/garlic-clove-sm.webp",
		alt: "Garlic Clove",
		size: "sm" as const,
		position: {
			mobile: { bottom: "-30px", left: "50px" },
			tablet: { bottom: "-30px", left: "40px" },
			desktop: { bottom: "-70px", left: "60px" },
		},
		rotation: 0,
	},
];

const productIngredients: {
	src: string;
	alt: string;
	size: "sm" | "md" | "lg";
	position: { top?: string; bottom?: string; left?: string; right?: string };
	rotation: number;
	animationDelay?: string;
	animationDuration?: string;
	opacity?: number;
}[] = [];

const storyIngredients = [
	{
		src: "/images/optimized/garlic-clove-sm.webp",
		alt: "Garlic Clove",
		size: "md" as const,
		position: {
			mobile: { bottom: "-30px", right: "60px" },
			tablet: { bottom: "-40px", right: "60px" },
			desktop: { bottom: "-50px", right: "60px" },
		},
		rotation: 0,
		animationDelay: "0.6s",
		animationDuration: "6s",
	},
	{
		src: "/images/optimized/mortar-pestle-xl.webp",
		alt: "Mortar & Pestle",
		size: "lg" as const,
		position: {
			mobile: { bottom: "-30px", left: "40px" },
			tablet: { bottom: "-40px", left: "50px" },
			desktop: { bottom: "-50px", left: "50px" },
		},
		rotation: 0,
	},
];

const newsletterIngredients = [
	{
		src: "/images/optimized/galangal-root-md.webp",
		alt: "Galangal Root",
		size: "sm" as const,
		position: { top: "-250px", left: "80px" },
		rotation: 15,
		animationDelay: "0.3s",
		animationDuration: "7s",
	},
	{
		src: "/images/optimized/long-red-chili-sm.webp",
		alt: "Red Chili",
		size: "md" as const,
		position: { top: "-290px", right: "80px" },
		rotation: 0,
		animationDelay: "0.8s",
		animationDuration: "5s",
	},
];

const transitionIngredients = [
	{
		src: "/images/optimized/lemongrass-stalks-sm.webp",
		alt: "Lemongrass Stalks",
		size: "sm" as const,
		position: { bottom: "-80px", left: "80px" },
		rotation: -10,
		animationDelay: "0.3s",
		animationDuration: "5s",
	},
	{
		src: "/images/optimized/kaffir-lime-leaves-sm.webp",
		alt: "Kaffir Lime Leaves",
		size: "sm" as const,
		position: { bottom: "-60px", right: "80px" },
		rotation: 20,
		animationDelay: "0.8s",
		animationDuration: "6s",
	},
];

const shippingIngredients = [
	{
		src: "/images/optimized/garlic-clove-sm.webp",
		alt: "Garlic Clove",
		size: "md" as const,
		position: { bottom: "-50px", left: "60px" },
		rotation: 0,
	},
	{
		src: "/images/optimized/turmeric-powder-lg.webp",
		alt: "Turmeric Powder",
		size: "sm" as const,
		position: { bottom: "-50px", right: "60px" },
		rotation: 0,
	},
];

const cookingExperienceIngredients = [
	{
		src: "/images/optimized/long-red-chili-sm.webp",
		alt: "Red Chili",
		size: "md" as const,
		position: { top: "-100px", left: "60px" },
		rotation: 0,
		animationDelay: "0.4s",
		animationDuration: "7s",
	},
	{
		src: "/images/optimized/shallot-bulb-lg.webp",
		alt: "Shallot",
		size: "sm" as const,
		position: { top: "-100px", right: "60px" },
		rotation: 0,
		animationDelay: "0.9s",
		animationDuration: "5s",
	},
];

const problemSolutionIngredients = [
	{
		src: "/images/optimized/mortar-pestle-lg.webp",
		alt: "Mortar & Pestle",
		size: "sm" as const,
		position: { bottom: "-50px", left: "60px" },
		rotation: 0,
	},
	{
		src: "/images/optimized/tomatoes-floating-xl.webp",
		alt: "Fresh Tomatoes",
		size: "md" as const,
		position: { bottom: "-50px", right: "60px" },
		rotation: 0,
	},
];

const faqIngredients = [
	{
		src: "/images/optimized/tomatoes-floating-xl.webp",
		alt: "Fresh Tomatoes",
		size: "md" as const,
		position: { top: "-50px", right: "60px" },
		rotation: 0,
	},
	{
		src: "/images/optimized/garlic-clove-lg.webp",
		alt: "Garlic Clove",
		size: "sm" as const,
		position: { top: "-50px", left: "60px" },
		rotation: 0,
	},
];

const contactIngredients = [
	{
		src: "/images/optimized/turmeric-powder-xl.webp",
		alt: "Turmeric Powder",
		size: "lg" as const,
		position: { top: "-100px", right: "60px" },
		rotation: 0,
		animationDelay: "0.6s",
		animationDuration: "8s",
	},
	{
		src: "/images/optimized/mortar-pestle-xl.webp",
		alt: "Mortar & Pestle",
		size: "md" as const,
		position: { top: "-80px", left: "60px" },
		rotation: 0,
		animationDelay: "1.2s",
		animationDuration: "6s",
	},
];

export default function Home() {
	// Ingredient Entity Markup for AI search optimization
	const ingredientEntities = [
		{
			name: "Chili Peppers",
			type: "Ingredient" as const,
			description:
				"Fresh red chili peppers are the primary ingredient in Indonesian sambal, providing natural heat and vibrant flavor. Varieties include bird's eye chilies (cabe rawit) and long red chilies (cabe merah), each contributing different heat levels and flavor profiles to traditional sambal recipes.",
			properties: {
				cuisine: "Indonesian",
				spiceLevel: "Hot",
				nutritionalBenefit: "Rich in vitamin C and capsaicin",
				uses: [
					"Sambal making",
					"Indonesian cooking",
					"Heat enhancement",
				],
				scovilleRange: "15000-30000 SHU",
				origin: "Maluku Islands, Indonesia",
			},
		},
		{
			name: "Galangal",
			type: "Ingredient" as const,
			description:
				"Galangal (lengkuas) is an aromatic root spice essential to Sambal Bali and many Indonesian dishes. This cousin of ginger provides a unique citrusy, pine-like flavor that's more complex and refined than regular ginger, adding depth and authentic Indonesian character to sambal recipes.",
			properties: {
				cuisine: "Indonesian",
				flavorProfile: "Citrusy, pine-like, aromatic",
				uses: [
					"Sambal Bali",
					"Indonesian curry",
					"Traditional medicine",
				],
				nutritionalBenefit: "Anti-inflammatory properties",
				origin: "Southeast Asia",
				alternativeName: "Greater galangal, Lengkuas",
			},
		},
		{
			name: "Lemongrass",
			type: "Ingredient" as const,
			description:
				"Lemongrass (serai) is a fragrant grass that adds bright, citrusy notes to Sambal Bali. This traditional Indonesian ingredient provides a fresh, lemony aroma without the acidity of actual lemons, making it perfect for balancing the heat of chilies in authentic sambal recipes.",
			properties: {
				cuisine: "Indonesian",
				flavorProfile: "Citrusy, fresh, aromatic",
				uses: [
					"Sambal Bali",
					"Indonesian soups",
					"Traditional teas",
				],
				nutritionalBenefit:
					"Natural antioxidants and digestive aid",
				origin: "Southeast Asia",
				preparation:
					"Bruised or finely chopped for maximum flavor release",
			},
		},
		{
			name: "Kaffir Lime Leaves",
			type: "Ingredient" as const,
			description:
				"Kaffir lime leaves (daun jeruk purut) are double-lobed aromatic leaves that provide an intense, floral citrus fragrance to Indonesian sambal. These leaves are irreplaceable in authentic Indonesian cooking, offering a unique lime essence that can't be replicated with regular lime zest.",
			properties: {
				cuisine: "Indonesian",
				flavorProfile: "Intense citrus, floral, aromatic",
				uses: [
					"Sambal Bali",
					"Indonesian curry",
					"Traditional marinades",
				],
				nutritionalBenefit:
					"Essential oils with antimicrobial properties",
				origin: "Southeast Asia",
				preparation:
					"Torn or finely shredded to release essential oils",
			},
		},
		{
			name: "Shallots",
			type: "Ingredient" as const,
			description:
				"Shallots (bawang merah) are small, purple-skinned onions that form the aromatic base of Indonesian sambal. Milder and sweeter than regular onions, shallots provide essential depth and complexity to traditional Indonesian condiments and are a cornerstone of authentic Southeast Asian cooking.",
			properties: {
				cuisine: "Indonesian",
				flavorProfile: "Sweet, mild, aromatic",
				uses: [
					"Sambal base",
					"Indonesian stir-fries",
					"Traditional spice pastes",
				],
				nutritionalBenefit:
					"Antioxidants and natural sulfur compounds",
				origin: "Southeast Asia",
				preparation:
					"Finely chopped or ground in traditional stone mortar",
			},
		},
		{
			name: "Garlic",
			type: "Ingredient" as const,
			description:
				"Garlic (bawang putih) is an essential aromatic ingredient in Indonesian sambal, providing depth and umami complexity. Fresh garlic cloves are traditionally ground with chilies in a stone mortar, releasing essential oils that create the authentic flavor foundation of Indonesian condiments.",
			properties: {
				cuisine: "Indonesian",
				flavorProfile: "Pungent, aromatic, umami",
				uses: [
					"Sambal base",
					"Indonesian marinades",
					"Traditional spice pastes",
				],
				nutritionalBenefit:
					"Natural antibacterial and immune-boosting properties",
				origin: "Central Asia, widely used in Indonesian cuisine",
				preparation:
					"Fresh cloves, traditionally ground in stone mortar",
			},
		},
	];

	// General Sambal FAQ data for AI search optimization
	const generalSambalFAQ = [
		{
			question: "What is authentic sambal UK?",
			answer: "Authentic sambal UK is a traditional Indonesian chili paste that serves as the finest artisanal hot sauce available in Britain. Unlike mass-produced Western hot sauces, authentic sambal UK is crafted with fresh ingredients using ancient techniques passed down through generations. This Indonesian chili paste isn't just about heat - it's about complex flavor layers that transform every dish. From the volcanic soils of the Spice Islands comes this authentic taste that elevates ordinary meals into extraordinary culinary experiences.",
		},
		{
			question: "Where does sambal come from?",
			answer: "Sambal originates from the Indonesian archipelago, particularly the Maluku Islands (Spice Islands), where volcanic soil creates ideal conditions for growing the world's most flavorful chilies. The tradition dates back centuries, long before European traders arrived in 1512. Each region of Indonesia has developed its own unique sambal varieties, with techniques refined over generations using traditional stone mortars and time-honored recipes.",
		},
		{
			question: "Is sambal healthy?",
			answer: "Yes! Authentic sambal is incredibly healthy when made with traditional methods. Fresh chilies are rich in vitamin C, capsaicin (which boosts metabolism), and antioxidants. Our sambal contains no artificial preservatives, colors, or excessive sodium like many commercial hot sauces. The natural fermentation process and minimal ingredients create a condiment that supports digestive health and provides natural anti-inflammatory benefits.",
		},
		{
			question:
				"Can I buy authentic sambal UK with Indonesian chili paste quality?",
			answer: "Absolutely! We're the UK's premier authentic sambal UK supplier, crafting traditional Indonesian chili paste as artisanal hot sauce. Made by Chef Yossie using traditional Bandung family recipes, our authentic sambal UK is crafted with the same techniques used in Indonesia for generations. We deliver this Indonesian chili paste throughout the UK including London, Manchester, Birmingham, Edinburgh with proper packaging to maintain freshness. Unlike mass-produced alternatives found in UK supermarkets, our artisanal hot sauce contains no artificial ingredients and captures the true taste of Indonesia.",
		},
		{
			question:
				"Do you deliver authentic sambal UK and Indonesian chili paste to London and Manchester?",
			answer: "Yes! We deliver authentic sambal UK and Indonesian chili paste throughout Britain with next-day delivery available to London, Manchester, Birmingham, Edinburgh and all major cities. Free UK delivery on orders over £20. Our artisanal hot sauce is carefully packaged to maintain freshness during transport, ensuring you receive restaurant-quality authentic sambal UK at your door.",
		},
		{
			question:
				"Where can I find authentic sambal UK and Indonesian chili paste near me?",
			answer: "Spice Island Indonesia is your best source for authentic sambal UK and Indonesian chili paste in Britain. While UK supermarkets may stock mass-produced versions, our artisanal hot sauce is the only one made by a professional Indonesian chef using traditional Bandung recipes. We deliver this authentic sambal UK nationwide, so whether you're in London, Manchester, Scotland, Wales or anywhere in Britain, you can order Indonesian chili paste online with fast delivery.",
		},
		{
			question:
				"What exactly is authentic sambal UK as Indonesian chili paste?",
			answer: "Authentic sambal UK is traditional Indonesian chili paste that's been crafted for centuries in the Spice Islands, now available as premium artisanal hot sauce in Britain. It's not just hot sauce - authentic sambal UK is made from fresh chilies, salt, and vinegar using ancient stone grinding techniques. Unlike Western hot sauces, this Indonesian chili paste has no sugar, preservatives, or artificial ingredients. It's the heart and soul of Indonesian cooking, now delivered across the UK.",
		},
		{
			question:
				"How spicy is Indonesian sambal compared to other hot sauces?",
			answer: "Indonesian sambal is significantly hotter than most Western hot sauces. Authentic sambal oelek ranges from fifteen thousand to thirty thousand Scoville Heat Units, making it three to five times hotter than Tabasco or sriracha. The heat builds gradually and has a clean, pure chili flavor without sweetness.",
		},
		{
			question: "Can I use sambal in British cooking?",
			answer: "Absolutely! Sambal works brilliantly in British dishes. Try adding half a teaspoon to scrambled eggs, mix it with mayonnaise for fish and chips, or add it to your Sunday roast gravy for an Indonesian twist. Start small - sambal is much hotter than HP sauce or other British condiments.",
		},
	];

	return (
		<>
			{/* Clean Subtle Background */}
			<div className='fixed inset-0 bg-coconut-50 pointer-events-none'></div>

			<div className='font-body min-h-screen relative overflow-hidden'>
				{/* Content with proper z-index */}
				<div className='relative z-10'>
					{/* Structured Data (keep single instances to avoid duplicates) */}
					<StructuredData type='organization' />
					<StructuredData type='localbusiness' />

					{/* Local SEO Schema for AI Search */}
					<LocalSEOSchema
						businessName='Spice Island Indonesia'
						description='Authentic Indonesian sambal and spices delivered throughout the UK. Traditional recipes by Chef Yossie from Bandung, Indonesia.'
						serviceAreas={[
							{ name: "United Kingdom", type: "Country" },
							{ name: "London", type: "City" },
							{ name: "Manchester", type: "City" },
							{ name: "Birmingham", type: "City" },
							{ name: "Edinburgh", type: "City" },
							{ name: "Cardiff", type: "City" },
							{ name: "Belfast", type: "City" },
							{ name: "England", type: "Region" },
							{ name: "Scotland", type: "Region" },
							{ name: "Wales", type: "Region" },
							{ name: "Northern Ireland", type: "Region" },
						]}
						deliveryRadius={500}
						deliveryUnit='km'
						specialties={[
							"Indonesian Sambal",
							"Traditional Chili Paste",
							"Authentic Indonesian Spices",
							"Sambal Oelek",
							"Sambal Bali",
							"Indonesian Condiments",
							"Southeast Asian Cuisine",
							"Traditional Indonesian Recipes",
						]}
						languages={["English", "Indonesian"]}
					/>

					{/* General Sambal FAQ Schema */}
					<FAQSchema
						faqs={generalSambalFAQ}
						pageTitle='Indonesian Sambal - Frequently Asked Questions'
					/>

					{/* Ingredient Entity Markup for AI Search */}
					<EntityMarkup
						entities={ingredientEntities}
						pageTitle='Indonesian Sambal Ingredients - Traditional Spices and Aromatics'
					/>

					{/* Voice Search Optimization Schema */}
					<VoiceSearchSchema
						speakableSections={[
							{
								cssSelector: ".voice-hero-title",
								description:
									"Main page title for voice assistants",
							},
							{
								cssSelector:
									".voice-product-description",
								description:
									"Key product information for voice queries",
							},
							{
								cssSelector: ".voice-optimized-answer",
								description:
									"FAQ answers optimized for voice search",
							},
							{
								cssSelector: ".voice-location-info",
								description:
									"UK delivery and location information",
							},
						]}
						faqQuestions={generalSambalFAQ.map((faq) => ({
							question: faq.question,
							answer: faq.answer,
							voiceOptimized: true,
						}))}
					/>

					{/* Pre-Order Banner */}
					<PreOrderBanner compact dismissible className="sticky top-0 z-50" />
					
					{/* Hero Section */}
					<div className='relative'>
						<HeroSection />
						<FloatingIngredients
							ingredients={heroIngredients}
						/>
					</div>

					{/* Product Showcase Section */}
					<div className='relative'>
						<div className='relative pt-8'>
							<ProductShowcase />
						</div>
						<FloatingIngredients
							ingredients={productIngredients}
						/>
					</div>

					{/* Newsletter Section */}
					<div className='relative'>
						<div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-gold-300/20 to-transparent rounded-full blur-3xl'></div>
						<NewsletterSection />
						<FloatingIngredients
							ingredients={newsletterIngredients}
						/>
					</div>

					{/* Popular Recipes Section */}
					<section className='py-16 bg-gradient-to-br from-cream-50 to-gold-50/30 relative'>
						<div className='container mx-auto px-4'>
							<div className='text-center mb-12'>
								<h2 className='text-3xl md:text-4xl font-bold text-burgundy-900 mb-4'>
									Popular Indonesian Recipes
								</h2>
								<p className='text-xl text-burgundy-700 max-w-3xl mx-auto mb-8'>
									Discover authentic Indonesian dishes featuring our sambal. 
									From traditional classics to modern fusion recipes.
								</p>
							</div>

							<div className='grid md:grid-cols-3 gap-8 mb-12'>
								{/* Sambal Fried Rice */}
								<div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
									<div className='h-48 relative overflow-hidden'>
										<Image
											src="/images/optimized/sambal-fried-rice-lg.webp"
											alt="Indonesian Sambal Fried Rice - Traditional nasi goreng with sambal goreng"
											width={400}
											height={192}
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
											loading="lazy"
										/>
									</div>
									<div className='p-6'>
										<h3 className='text-xl font-bold text-burgundy-900 mb-3'>
											Sambal Fried Rice
										</h3>
										<p className='text-gray-600 mb-6'>
											Classic Indonesian fried rice with our signature sambal goreng. 
											A perfect introduction to Indonesian flavors.
										</p>
										<Link
											href={urls.sambalFriedRice}
											className='inline-block bg-burgundy-600 text-white px-6 py-3 rounded-lg hover:bg-burgundy-700 transition-colors'
										>
											View Recipe
										</Link>
									</div>
								</div>

								{/* Sambal BBQ Marinade */}
								<div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
									<div className='h-48 relative overflow-hidden'>
										<Image
											src="/images/optimized/sambal-bbq-marinade-lg.webp"
											alt="Sambal BBQ Marinade - Indonesian spicy marinade for grilled chicken and vegetables"
											width={400}
											height={192}
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
											loading="lazy"
										/>
									</div>
									<div className='p-6'>
										<h3 className='text-xl font-bold text-burgundy-900 mb-3'>
											Sambal BBQ Marinade
										</h3>
										<p className='text-gray-600 mb-6'>
											Transform your BBQ with this Indonesian-inspired marinade. 
											Perfect for chicken, beef, or vegetables.
										</p>
										<Link
											href={urls.sambalBbqMarinadeRecipe}
											className='inline-block bg-burgundy-600 text-white px-6 py-3 rounded-lg hover:bg-burgundy-700 transition-colors'
										>
											View Recipe
										</Link>
									</div>
								</div>

								{/* Sambal Scrambled Eggs */}
								<div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
									<div className='h-48 relative overflow-hidden'>
										<Image
											src="/images/optimized/sambal-scrambled-eggs-lg.webp"
											alt="Indonesian Sambal Scrambled Eggs - Spicy breakfast dish with traditional sambal"
											width={400}
											height={192}
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
											loading="lazy"
										/>
									</div>
									<div className='p-6'>
										<h3 className='text-xl font-bold text-burgundy-900 mb-3'>
											Sambal Scrambled Eggs
										</h3>
										<p className='text-gray-600 mb-6'>
											Start your day with a spicy kick. Traditional Indonesian breakfast 
											that's quick and satisfying.
										</p>
										<Link
											href={urls.sambalScrambledEggs}
											className='inline-block bg-burgundy-600 text-white px-6 py-3 rounded-lg hover:bg-burgundy-700 transition-colors'
										>
											View Recipe
										</Link>
									</div>
								</div>
							</div>

							<div className='text-center'>
								<Link
									href={urls.recipes}
									className='inline-block bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white px-8 py-3 rounded-lg hover:from-burgundy-700 hover:to-burgundy-800 transition-all duration-200 font-semibold text-lg'
								>
									Explore All Recipes
								</Link>
							</div>
						</div>
					</section>

					{/* Transition Ingredients between Newsletter and Shipping */}
					<div className='relative '>
						<FloatingIngredients
							ingredients={transitionIngredients}
						/>
					</div>

					{/* Shipping Section */}
					<div className='relative'>
						<div className='relative pt-12'>
							<ShippingSection />
						</div>
						<FloatingIngredients
							ingredients={shippingIngredients}
						/>
					</div>

					{/* Story Section */}
					<div className='relative'>
						<StorySection />
						<FloatingIngredients
							ingredients={storyIngredients}
						/>
					</div>

					{/* Blog Highlights Section */}
					<section className='py-16 bg-gradient-to-br from-burgundy-50 to-cream-50 relative'>
						<div className='container mx-auto px-4'>
							<div className='text-center mb-12'>
								<h2 className='text-3xl md:text-4xl font-bold text-burgundy-900 mb-4'>
									Indonesian Food Culture & Education
								</h2>
								<p className='text-xl text-burgundy-700 max-w-3xl mx-auto mb-8'>
									Learn about authentic Indonesian cuisine, sambal traditions, and 
									cultural insights from our food heritage blog.
								</p>
							</div>

							<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
								{/* Ultimate Guide to Indonesian Sambal */}
								<div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
									<div className='h-48 relative overflow-hidden'>
										<Image
											src="/images/optimized/ultimate-sambal-guide-lg.webp"
											alt="Ultimate Guide to Indonesian Sambal - Complete overview of authentic sambal varieties"
											width={400}
											height={192}
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
											loading="lazy"
										/>
									</div>
									<div className='p-6'>
										<h3 className='text-lg font-bold text-burgundy-900 mb-3'>
											Ultimate Guide to Indonesian Sambal
										</h3>
										<p className='text-gray-600 mb-4 text-sm'>
											Complete guide to sambal varieties, origins, and authentic preparation methods.
										</p>
										<Link
											href={urls.ultimateGuideSambal}
											className='inline-block text-burgundy-600 hover:text-burgundy-800 font-semibold text-sm'
										>
											Read Article →
										</Link>
									</div>
								</div>

								{/* Sambal vs Hot Sauce */}
								<div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
									<div className='h-48 relative overflow-hidden'>
										<Image
											src="/images/optimized/indonesian-spice-mastery-lg.webp"
											alt="Sambal vs Western Hot Sauce - Comparing Indonesian sambal with Western condiments"
											width={400}
											height={192}
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
											loading="lazy"
										/>
									</div>
									<div className='p-6'>
										<h3 className='text-lg font-bold text-burgundy-900 mb-3'>
											Sambal vs Western Hot Sauce
										</h3>
										<p className='text-gray-600 mb-4 text-sm'>
											Understanding the key differences in ingredients, preparation, and flavor profiles.
										</p>
										<Link
											href={urls.sambalVsHotSauce}
											className='inline-block text-burgundy-600 hover:text-burgundy-800 font-semibold text-sm'
										>
											Read Article →
										</Link>
									</div>
								</div>

								{/* Indonesian Spice Islands History */}
								<div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
									<div className='h-48 relative overflow-hidden'>
										<Image
											src="/images/optimized/spice-islands-heritage-lg.webp"
											alt="Indonesian Spice Islands Heritage - Maluku Islands volcanic soil and traditional spice cultivation"
											width={400}
											height={192}
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
											loading="lazy"
										/>
									</div>
									<div className='p-6'>
										<h3 className='text-lg font-bold text-burgundy-900 mb-3'>
											Spice Islands Heritage
										</h3>
										<p className='text-gray-600 mb-4 text-sm'>
											Journey through the Maluku Islands and discover how volcanic soil creates unique flavors.
										</p>
										<Link
											href={urls.spiceIslandsHistory}
											className='inline-block text-burgundy-600 hover:text-burgundy-800 font-semibold text-sm'
										>
											Read Article →
										</Link>
									</div>
								</div>

								{/* Indonesian Cooking for British Kitchens */}
								<div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
									<div className='h-48 relative overflow-hidden'>
										<Image
											src="/images/optimized/indonesian-techniques-uk-kitchen-lg.webp"
											alt="Indonesian Cooking for British Kitchens - Adapting traditional Indonesian recipes for UK kitchens"
											width={400}
											height={192}
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
											loading="lazy"
										/>
									</div>
									<div className='p-6'>
										<h3 className='text-lg font-bold text-burgundy-900 mb-3'>
											Indonesian Cooking for British Kitchens
										</h3>
										<p className='text-gray-600 mb-4 text-sm'>
											Practical guide to adapting traditional Indonesian recipes for UK ingredients and equipment.
										</p>
										<Link
											href={urls.indonesianCookingGuide}
											className='inline-block text-burgundy-600 hover:text-burgundy-800 font-semibold text-sm'
										>
											Read Article →
										</Link>
									</div>
								</div>

								{/* Authentic vs Store Bought */}
								<div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
									<div className='h-48 relative overflow-hidden'>
										<Image
											src="/images/optimized/traditional-sambal-making-lg.webp"
											alt="Authentic vs Store-Bought Sambal - Traditional sambal making methods and quality comparison"
											width={400}
											height={192}
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
											loading="lazy"
										/>
									</div>
									<div className='p-6'>
										<h3 className='text-lg font-bold text-burgundy-900 mb-3'>
											Authentic vs Store-Bought Sambal
										</h3>
										<p className='text-gray-600 mb-4 text-sm'>
											Learn to identify authentic sambal and why traditional methods make all the difference.
										</p>
										<Link
											href={urls.authenticVsStoreBought}
											className='inline-block text-burgundy-600 hover:text-burgundy-800 font-semibold text-sm'
										>
											Read Article →
										</Link>
									</div>
								</div>

								{/* Indonesian Food Culture Context */}
								<div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
									<div className='h-48 relative overflow-hidden'>
										<Image
											src="/images/optimized/indonesian_vista-lg.webp"
											alt="Indonesian Food Culture & Context - Cultural significance of sambal in Indonesian daily life and traditions"
											width={400}
											height={192}
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
											loading="lazy"
										/>
									</div>
									<div className='p-6'>
										<h3 className='text-lg font-bold text-burgundy-900 mb-3'>
											Indonesian Food Culture & Context
										</h3>
										<p className='text-gray-600 mb-4 text-sm'>
											Understanding the cultural significance of sambal in Indonesian daily life and traditions.
										</p>
										<Link
											href={urls.indonesianFoodCulture}
											className='inline-block text-burgundy-600 hover:text-burgundy-800 font-semibold text-sm'
										>
											Read Article →
										</Link>
									</div>
								</div>
							</div>

							<div className='text-center'>
								<Link
									href={urls.blog}
									className='inline-block bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white px-8 py-3 rounded-lg hover:from-burgundy-700 hover:to-burgundy-800 transition-all duration-200 font-semibold text-lg'
								>
									Explore All Articles
								</Link>
							</div>
						</div>
					</section>

					{/* Community Section */}
					<section className='py-16 bg-gradient-to-br from-burgundy-50 to-gold-50 relative'>
						<div className='container mx-auto px-4'>
							<div className='text-center mb-12'>
								<h2 className='text-3xl md:text-4xl font-bold text-burgundy-900 mb-4'>
									Join Our Spice Community
								</h2>
								<p className='text-xl text-burgundy-700 max-w-3xl mx-auto mb-8'>
									Connect with fellow food lovers,
									share your cooking stories, and
									discover new ways to enjoy
									authentic Indonesian flavors
								</p>
							</div>

							<div className='grid md:grid-cols-3 gap-8 mb-12'>
								{/* Share Stories */}
								<div className='bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow'>
									<div className='w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4'>
										<span className='text-2xl'>
											📖
										</span>
									</div>
									<h3 className='text-xl font-bold text-burgundy-900 mb-3'>
										Share Your Story
									</h3>
									<p className='text-gray-600 mb-6'>
										Tell us about your sambal
										cooking adventures and earn
										rewards!
									</p>
									<Link
										href={urls.communityShareStory}
										className='inline-block bg-burgundy-600 text-white px-6 py-3 rounded-lg hover:bg-burgundy-700 transition-colors'
									>
										Share Now
									</Link>
								</div>

								{/* Take Quiz */}
								<div className='bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow'>
									<div className='w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4'>
										<span className='text-2xl'>
											🌶️
										</span>
									</div>
									<h3 className='text-xl font-bold text-burgundy-900 mb-3'>
										Discover Your Perfect Sambal
									</h3>
									<p className='text-gray-600 mb-6'>
										Take our personalized quiz to
										find your ideal heat level and
										flavors.
									</p>
									<Link
										href={urls.communityQuiz}
										className='inline-block bg-gold-600 text-white px-6 py-3 rounded-lg hover:bg-gold-700 transition-colors'
									>
										Take Quiz
									</Link>
								</div>

								{/* Community Feed */}
								<div className='bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow'>
									<div className='w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4'>
										<span className='text-2xl'>
											👥
										</span>
									</div>
									<h3 className='text-xl font-bold text-burgundy-900 mb-3'>
										Community Stories
									</h3>
									<p className='text-gray-600 mb-6'>
										Read inspiring cooking stories
										and recipes from our
										community.
									</p>
									<Link
										href={urls.community}
										className='inline-block bg-burgundy-600 text-white px-6 py-3 rounded-lg hover:bg-burgundy-700 transition-colors'
									>
										Explore Community
									</Link>
								</div>
							</div>

							<div className='text-center'>
								<div className='bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white rounded-lg p-6 max-w-2xl mx-auto'>
									<h3 className='text-xl font-bold mb-3'>
										🏆 Earn Rewards & Badges
									</h3>
									<p className='mb-4'>
										Share your stories, complete
										challenges, and unlock
										exclusive discounts and
										content!
									</p>
									<Link
										href={urls.community}
										className='inline-block bg-white text-burgundy-700 px-6 py-2 rounded-lg hover:bg-gold-50 transition-colors font-semibold'
									>
										Get Started
									</Link>
								</div>
							</div>
						</div>
					</section>

					{/* Testimonials Section */}
					<div className='relative pt-8'>
						<TestimonialsSection />
					</div>

					{/* Problem-Solution Content with enhanced visual appeal */}
					<section className='py-16 relative'>
						{/* Background accent elements */}
						<div className='absolute top-10 left-10 w-24 h-24 bg-gold-300/20 rounded-full blur-xl animate-pulse'></div>
						<div
							className='absolute bottom-10 right-10 w-32 h-32 bg-burgundy-300/10 rounded-full blur-2xl animate-pulse'
							style={{ animationDelay: "3s" }}
						></div>

						{/* Floating ingredients after header */}
						<FloatingIngredients
							ingredients={cookingExperienceIngredients}
						/>
						<div className='container mx-auto px-4 relative'>
							{/* Section header with visual enhancement */}
							<div className='text-center mb-16 relative'>
								<div className='inline-block p-8 bg-white/80 backdrop-blur-sm rounded-sm shadow-xl border border-white/20'>
									<h3 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 font-heading'>
										Transform Your Cooking
										Experience
									</h3>
									<p className='text-xl text-gray-600 font-body'>
										Discover how authentic
										Indonesian sambal solves your
										kitchen challenges
									</p>
								</div>
							</div>

							<ProblemSolutionContent
								title='Common Cooking Challenges Solved'
								subtitle='How authentic Indonesian sambal solves your kitchen problems'
								problems={[
									{
										problem: "I want to add heat to my cooking but don't like artificial flavors or excessive sweetness in Western hot sauces.",
										solution:
											"Authentic sambal oelek contains only chilies, salt, and vinegar - no artificial colors, preservatives, or added sugar. You get pure chili heat that enhances rather than masks your food's natural flavors.",
										benefits: [
											"No artificial ingredients or preservatives",
											"Pure chili flavor without sweetness",
											"Traditional Indonesian authenticity",
											"Perfect for serious home cooks",
										],
										actionLink: {
											text: "Try Authentic Sambal Oelek",
											href: urls.sambalOelek,
										},
										category:
											"Flavor Enhancement",
									},
									{
										problem: "I'm new to spicy food but want to explore Indonesian flavors without overwhelming heat.",
										solution:
											"Sambal Bali offers complex aromatic spices (galangal, lemongrass, kaffir lime) that balance the heat beautifully. It's milder than pure chili pastes while delivering authentic Indonesian flavor complexity.",
										benefits: [
											"Aromatic spices balance the heat",
											"Perfect introduction to Indonesian cuisine",
											"Complex flavor layers, not just heat",
											"Ideal for gradual spice tolerance building",
										],
										actionLink: {
											text: "Start with Sambal Bali",
											href: urls.sambalBali,
										},
										category: "Beginner-Friendly",
									},
									{
										problem: "I want to cook authentic Asian dishes but can't find quality Indonesian ingredients in UK stores.",
										solution:
											"We deliver authentic Indonesian sambal throughout the UK, made by Chef Yossie using traditional Bandung family recipes. No need to compromise with inferior substitutes or artificial products.",
										benefits: [
											"Authentic Indonesian recipes and techniques",
											"Made by traditional Indonesian chef",
											"UK-wide delivery with proper packaging",
											"Sample packs available to try first",
										],
										actionLink: {
											text: "Order Authentic Sambal",
											href: urls.samplePack,
										},
										category: "Authenticity",
									},
									{
										problem: "I love cooking but struggle with bland, boring meals that lack excitement and depth of flavor.",
										solution:
											"Indonesian sambal transforms ordinary dishes into restaurant-quality meals. Use it in marinades, stir-fries, or as a finishing sauce to add layers of complex heat and authentic Southeast Asian flavor.",
										benefits: [
											"Transforms simple ingredients into exciting dishes",
											"Versatile - works as condiment or cooking ingredient",
											"Restaurant-quality flavor at home",
											"Endless recipe possibilities",
										],
										actionLink: {
											text: "Explore Recipe Ideas",
											href: urls.recipes,
										},
										category:
											"Cooking Enhancement",
									},
								]}
							/>
						</div>
						<FloatingIngredients
							ingredients={problemSolutionIngredients}
						/>
					</section>

					{/* General Sambal FAQ with enhanced design */}
					<section className='py-16 relative'>
						{/* Visual connecting elements with icons instead of SVG */}
						<div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
							<Waves className='w-24 h-6 text-white/10' />
						</div>

						<div className='container mx-auto px-4 relative pt-8'>
							<div className='max-w-4xl mx-auto'>
								{/* Enhanced section header */}
								<div className='text-center mb-16'>
									<div className='inline-block p-8 bg-white/90 backdrop-blur-sm rounded-sm shadow-2xl border border-white/30'>
										<h2 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 font-heading'>
											About Indonesian Sambal
										</h2>
										<p className='text-xl text-gray-600 font-body'>
											Everything you need to
											know about authentic
											Indonesian sambal culture
											and tradition
										</p>
									</div>
								</div>

								<div className='space-y-8'>
									{/* Enhanced FAQ items with better visual flow */}
									{generalSambalFAQ.map(
										(faq, index) => (
											<div
												key={index}
												className='group'
											>
												<div className='bg-white/80 backdrop-blur-sm rounded-sm p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
													{/* Visual accent */}
													<div className='flex items-start space-x-4'>
														<div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg'>
															{index +
																1}
														</div>
														<div className='flex-1'>
															<h3 className='text-xl font-bold text-burgundy-900 mb-4 font-brand group-hover:text-red-600 transition-colors'>
																{
																	faq.question
																}
															</h3>
															<p className='voice-optimized-answer text-gray-700 font-body leading-relaxed'>
																{
																	faq.answer
																}
																{index ===
																	3 && (
																	<>
																		{" "}
																		Try
																		our{" "}
																		<Link
																			href={urls.samplePack}
																			className='text-burgundy-600 hover:text-burgundy-800 underline font-semibold'
																		>
																			sample
																			pack
																		</Link>{" "}
																		to
																		experience
																		the
																		authentic
																		difference.
																	</>
																)}
															</p>
														</div>
													</div>
												</div>
											</div>
										)
									)}
								</div>
							</div>
						</div>
					</section>

					{/* FAQ Section */}
					<div className='relative'>
						<div className='absolute top-0 right-0 w-48 h-48 bg-gradient-to-l from-gold-300/20 to-transparent rounded-full blur-3xl'></div>
						<FAQSection />
						<FloatingIngredients
							ingredients={faqIngredients}
						/>
					</div>

					{/* Trust Indicators & Security Section */}
					<section className='py-16 bg-gradient-to-br from-white via-cream-50 to-gold-50/30 relative'>
						<div className='absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-gold-100/30 to-cream-100/30 rounded-full blur-2xl'></div>
						<div className='absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-l from-gold-100/30 to-cream-100/30 rounded-full blur-xl'></div>

						<div className='container mx-auto px-4 relative z-10'>
							<div className='text-center mb-12'>
								<h3 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 font-heading'>
									Your Peace of Mind Guaranteed
								</h3>
								<p className='text-xl text-gray-600 font-body max-w-3xl mx-auto'>
									Shop with confidence knowing we
									prioritize quality, security, and
									customer satisfaction
								</p>
							</div>

							<div className='grid lg:grid-cols-3 gap-8 mb-12'>
								<div className='lg:col-span-2'>
									<TrustIndicators
										layout='grid'
										className='mb-8'
									/>
								</div>
								<div className='lg:col-span-1'>
									<DeliveryGuarantee />
								</div>
							</div>

							<div className='text-center'>
								<div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gold-200/50 shadow-sm inline-block'>
									<h3 className='text-lg font-bold text-burgundy-900 mb-3 font-brand'>
										Why Customers Trust Us
									</h3>
									<div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-body'>
										<div className='text-center'>
											<div className='text-2xl mb-1'>
												240+
											</div>
											<div className='text-neutral-600'>
												Happy Customers
											</div>
										</div>
										<div className='text-center'>
											<div className='text-2xl mb-1'>
												4.8★
											</div>
											<div className='text-neutral-600'>
												Average Rating
											</div>
										</div>
										<div className='text-center'>
											<div className='text-2xl mb-1'>
												95%
											</div>
											<div className='text-neutral-600'>
												Reorder Rate
											</div>
										</div>
										<div className='text-center'>
											<div className='text-2xl mb-1'>
												100%
											</div>
											<div className='text-neutral-600'>
												Authentic Recipes
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Contact Section with final visual flourish */}
					<div className='relative'>
						{/* Final connecting elements with icons */}
						<div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
							<Triangle className='w-16 h-8 text-gold-100/10' />
						</div>

						{/* Background accent for contact section */}
						<div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900/5 to-transparent'></div>

						<div className='relative pt-12'>
							<ContactSection />
						</div>
						<FloatingIngredients
							ingredients={contactIngredients}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
