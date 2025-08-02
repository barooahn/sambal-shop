import StructuredData from "@/components/seo/StructuredData";
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

			{/* FAQ Section */}
			<FAQSection />

			{/* Contact Section */}
			<ContactSection />
		</div>
	);
}
