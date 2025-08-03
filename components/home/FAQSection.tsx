"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FAQItem {
	question: string;
	answer: string;
}

const faqs: FAQItem[] = [
	{
		question: "What makes your sambal authentic?",
		answer: "Our sambal recipes come from the original Spice Islands (Maluku) and have been passed down through generations. We use traditional methods and authentic Indonesian ingredients, including chilies sourced directly from Indonesia. Each jar is handcrafted using time-honored techniques that preserve the genuine taste of Indonesia.",
	},
	{
		question:
			"How spicy is Indonesian sambal compared to other hot sauces?",
		answer: "Our Sambal Oelek rates 5/5 on our heat scale, significantly hotter than most Western hot sauces like Tabasco or Sriracha. It's made with pure Indonesian chilies and delivers authentic heat levels that Indonesian cuisine is known for. Learn more about the differences in our detailed <a href='/sambal-vs-sriracha' class='text-burgundy-700 hover:text-burgundy-900 font-semibold underline decoration-gold-600'>sambal vs sriracha comparison</a>. If you're new to Indonesian food, we recommend starting with our sample size!",
	},
	{
		question:
			"What's the difference between sambal oelek and sambal bali?",
		answer: "Sambal Oelek is pure chili paste made primarily from chilies, salt, and vinegar - it's the foundation of Indonesian cooking and perfect for <a href='/sambal-for-stir-fry' class='text-burgundy-700 hover:text-burgundy-900 font-semibold underline decoration-gold-600'>marinades and stir-fries</a>. Sambal Bali includes aromatic spices like garlic, shallots, and palm sugar, creating a sweet-spicy profile that complements grilled meats and rice dishes beautifully. <a href='/sambal-oelek-uk' class='text-burgundy-700 hover:text-burgundy-900 font-semibold underline decoration-gold-600'>Learn more about our authentic sambal oelek</a>.",
	},
	{
		question: "Do you deliver across the UK?",
		answer: "Yes, we deliver premium Indonesian sambal across the UK! Our products are carefully packaged in our signature shipping boxes to ensure they arrive in perfect condition. Standard delivery is 2-3 business days, and we offer free shipping on orders over £25.",
	},
	{
		question: "Are your sambals suitable for vegetarians and vegans?",
		answer: "Absolutely! Our sambals are made with all-natural ingredients and contain no animal products. They're suitable for both vegetarians and vegans. We also use no preservatives, artificial colors, or artificial flavors - just pure, authentic Indonesian ingredients.",
	},
	{
		question: "How should I store sambal and how long does it last?",
		answer: "Store your sambal in the refrigerator after opening. Our sambals will keep for up to 6 months refrigerated due to their natural acidity and salt content. Before opening, they can be stored in a cool, dry place for up to 2 years. Always use a clean spoon to prevent contamination.",
	},
	{
		question: "What dishes can I use sambal with?",
		answer: "Sambal is incredibly versatile! Use it as a condiment with rice dishes, noodles, and grilled meats. It's perfect for marinades, stir-fries, and adding heat to soups. Many customers love it with eggs, pizza, and even as a dip for chips. Start with small amounts and adjust to your heat preference.",
	},
	{
		question: "Can I try before buying a full jar?",
		answer: "Yes! We offer 75g sample sizes for £3.99 - perfect for discovering your favorite sambal before committing to the full 185g jar. This is especially great if you're new to Indonesian cuisine or want to try multiple varieties.",
	},
];

export default function FAQSection() {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const toggleItem = (index: number) => {
		setOpenItems((prev) =>
			prev.includes(index)
				? prev.filter((i) => i !== index)
				: [...prev, index]
		);
	};

	return (
		<section className='py-24 relative overflow-hidden'>
			<div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
						Frequently Asked
						<span className='text-gold-700 block'>
							Questions
						</span>
					</h2>
					<p className='text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-body'>
						Everything you need to know about authentic
						Indonesian sambal and our products
					</p>
				</div>

				<div className='space-y-4'>
					{faqs.map((faq, index) => (
						<Card
							key={index}
							className='shadow-lg border border-gold-200 bg-gradient-to-br from-cream-50 to-cream-100 overflow-hidden rounded-2xl hover:shadow-luxury transition-all duration-300'
						>
							<CardContent className='p-0'>
								<button
									onClick={() => toggleItem(index)}
									className='w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:ring-inset'
									aria-expanded={openItems.includes(
										index
									)}
								>
									<div className='flex justify-between items-center'>
										<h3 className='text-lg font-bold text-burgundy-900 font-brand pr-4'>
											{faq.question}
										</h3>
										<div className='flex-shrink-0'>
											{openItems.includes(
												index
											) ? (
												<ChevronUp className='w-5 h-5 text-burgundy-700' />
											) : (
												<ChevronDown className='w-5 h-5 text-burgundy-700' />
											)}
										</div>
									</div>
								</button>

								{openItems.includes(index) && (
									<div className='px-6 pb-6'>
										<div className='pt-4 border-t border-gold-200'>
											<p className='text-neutral-700 leading-relaxed font-body'>
												{faq.answer}
											</p>
										</div>
									</div>
								)}
							</CardContent>
						</Card>
					))}
				</div>

				<div className='text-center mt-12'>
					<p className='text-lg text-neutral-600 mb-6 font-body'>
						Still have questions? We'd love to help!
					</p>
					<button
						onClick={() => {
							const contactSection =
								document.getElementById(
									"contact-section"
								);
							contactSection?.scrollIntoView({
								behavior: "smooth",
							});
						}}
						className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 font-bold rounded-full hover:shadow-lg transition-all duration-300 border border-gold-600/30 font-elegant'
					>
						Contact Us
					</button>
				</div>
			</div>
		</section>
	);
}
