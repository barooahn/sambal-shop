import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import {
	BookOpen,
	MapPin,
	Mail,
	Building,
	Users,
	Heart,
	Clock,
	HelpCircle,
	ShoppingBag,
} from "@/components/ui/icons";

export const metadata: Metadata = {
	title: "Contact Us UK | Spice Island Indonesia | Get In Touch",
	description:
		"Contact Spice Island Indonesia for questions about our authentic Indonesian sambals, UK wholesale inquiries, or cooking advice. We respond within 24 hours to UK customers.",
	keywords:
		"contact spice island indonesia UK, sambal questions UK, indonesian food contact UK, wholesale inquiries UK, cooking advice UK, customer service UK",
	openGraph: {
		title: "Contact Us UK | Spice Island Indonesia",
		description:
			"Get in touch with us for questions about our authentic Indonesian sambals, UK wholesale inquiries, or cooking advice.",
		images: [
			{
				url: "/images/contact-hero.jpg",
				width: 1200,
				height: 630,
				alt: "Contact Spice Island Indonesia",
			},
		],
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/contact",
	},
};

export default function ContactPage() {
	return (
		<div className='min-h-screen bg-coconut-50'>
			{/* Hero Section */}
			<section className='py-16 lg:py-24 relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-burgundy-900/5 via-transparent to-burgundy-900/5'></div>

				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
					<div className='text-center mb-16'>
						<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-6 font-brand'>
							Get In Touch
						</h1>
						<p className='text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto font-body leading-relaxed'>
							Have questions about our authentic Indonesian
							sambals? Want to learn more about our
							products or need cooking advice? We&apos;d
							love to hear from you.
						</p>
					</div>

					{/* Contact Information */}
					<div className='grid md:grid-cols-2 gap-12 mb-16'>
						<div className='bg-white/60 rounded-sm p-8 shadow-lg border border-gold-200/50'>
							<h2 className='text-2xl font-bold text-burgundy-900 mb-6 font-brand'>
								Contact Information
							</h2>
							<div className='space-y-4'>
								<div className='flex items-center space-x-4'>
									<div className='w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center'>
										<Mail className='w-6 h-6 text-burgundy-600' />
									</div>
									<div>
										<h3 className='font-semibold text-burgundy-800 font-brand'>
											Email Us
										</h3>
										<p className='text-neutral-600 font-body'>
											info@spiceislandindonesia.com
										</p>
									</div>
								</div>
								<div className='flex items-center space-x-4'>
									<div className='w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center'>
										<MapPin className='w-6 h-6 text-burgundy-600' />
									</div>
									<div>
										<h3 className='font-semibold text-burgundy-800 font-brand'>
											Location
										</h3>
										<p className='text-neutral-600 font-body'>
											Ormskirk, United Kingdom
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className='bg-white/60 rounded-sm p-8 shadow-lg border border-gold-200/50'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-brand'>
								Response Time
							</h3>
							<div className='space-y-4'>
								<div className='flex items-center space-x-4'>
									<div className='w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center'>
										<Clock className='w-6 h-6 text-gold-600' />
									</div>
									<div>
										<h3 className='font-semibold text-burgundy-800 font-brand'>
											Quick Response
										</h3>
										<p className='text-neutral-600 font-body'>
											We typically respond
											within 24 hours
										</p>
									</div>
								</div>
								<div className='flex items-center space-x-4'>
									<div className='w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center'>
										<HelpCircle className='w-6 h-6 text-burgundy-600' />
									</div>
									<div>
										<h3 className='font-semibold text-burgundy-800 font-brand'>
											Expert Advice
										</h3>
										<p className='text-neutral-600 font-body'>
											Get cooking tips and
											product recommendations
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<ContactForm showHeader={false} />

					{/* Additional Information */}
					<div className='mt-16 text-center'>
						<div className='bg-burgundy-50 rounded-sm p-8 border border-burgundy-200/50'>
							<h3 className='text-2xl font-bold text-burgundy-900 mb-4 font-brand'>
								What Can We Help You With?
							</h3>
							<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
								<div className='text-center'>
									<div className='w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4'>
										<ShoppingBag className='w-8 h-8 text-burgundy-600' />
									</div>
									<h3 className='font-semibold text-burgundy-800 font-brand mb-2'>
										Product Questions
									</h3>
									<p className='text-sm text-neutral-600 font-body'>
										Learn about our sambal
										varieties and ingredients
									</p>
								</div>
								<div className='text-center'>
									<div className='w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4'>
										<BookOpen className='w-8 h-8 text-burgundy-600' />
									</div>
									<h3 className='font-semibold text-burgundy-800 font-brand mb-2'>
										Cooking Advice
									</h3>
									<p className='text-sm text-neutral-600 font-body'>
										Get tips on how to use sambal
										in your cooking
									</p>
								</div>
								<div className='text-center'>
									<div className='w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4'>
										<Building className='w-8 h-8 text-burgundy-600' />
									</div>
									<h3 className='font-semibold text-burgundy-800 font-brand mb-2'>
										Wholesale Inquiries
									</h3>
									<p className='text-sm text-neutral-600 font-body'>
										Interested in stocking our
										products?
									</p>
								</div>
								<div className='text-center'>
									<div className='w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4'>
										<Heart className='w-8 h-8 text-burgundy-600' />
									</div>
									<h3 className='font-semibold text-burgundy-800 font-brand mb-2'>
										General Support
									</h3>
									<p className='text-sm text-neutral-600 font-body'>
										Any other questions or
										feedback
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
