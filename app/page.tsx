import StructuredData from "@/components/seo/StructuredData";
import ProblemSolutionContent from "@/components/seo/ProblemSolutionContent";
import LocalSEOSchema from "@/components/seo/LocalSEOSchema";
import HeroSection from "@/components/home/HeroSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import ShippingSection from "@/components/home/ShippingSection";
import StorySection from "@/components/home/StorySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
	return (
		<div className='bg-gradient-to-b from-cream-50 to-cream-100 font-body'>
			{/* Structured Data */}
			<StructuredData type='organization' />
			<StructuredData type='localbusiness' />
			<StructuredData type='product' />
			<StructuredData type='faq' />
			<StructuredData type='reviews' />

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

			{/* Hero Section */}
			<HeroSection />

			{/* Product Showcase Section */}
			<ProductShowcase />

			{/* Shipping & Packaging Section */}
			<ShippingSection />

			{/* Our Story Section */}
			<StorySection />

			{/* Testimonials Section */}
			<TestimonialsSection />

			{/* Problem-Solution Content - AI Search Optimized */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
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
									href: "/sambal-oelek-uk",
								},
								category: "Flavor Enhancement",
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
									href: "/sambal-bali-aromatic-spicy",
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
									href: "/sample-pack-try-first",
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
									href: "/recipes",
								},
								category: "Cooking Enhancement",
							},
						]}
					/>
				</div>
			</section>

			{/* FAQ Section */}
			<FAQSection />

			{/* Contact Section */}
			<ContactSection />
		</div>
	);
}
