import ContactForm from "@/components/forms/ContactForm";

export default function ContactSection() {
	return (
		<section
			id='contact-section'
			className='py-24 relative overflow-hidden'
		>
			<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
						Get In Touch
					</h2>
					<p className='text-xl text-neutral-600 max-w-2xl mx-auto font-body'>
						Have questions about our sambals or want to learn
						more about Indonesian cuisine? We'd love to hear
						from you.
					</p>
				</div>

				<ContactForm />
			</div>
		</section>
	);
}
