import { Metadata } from "next";
const excerpt =
	"Learn to navigate Indonesian heat levels with confidence. Discover how to build spice tolerance, balance heat with flavor, and create authentic Indonesian dishes that suit British palates.";

import Image from "next/image";
import Link from "next/link";
import { getInternalUrls } from "@/lib/url-utils";
import {
	Clock,
	Users,
	Flame,
	Thermometer,
	TrendingUp,
	Shield,
	Target,
	AlertTriangle,
} from "@/components/ui/icons";
import FAQSchema from "@/components/seo/FAQSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";

export const metadata: Metadata = {
	title: "Mastering Indonesian Heat | Spice Levels & Flavor Guide",
	description: excerpt,
	keywords:
		"Indonesian spice mastery, Indonesian heat levels, building spice tolerance, sambal spice guide, Indonesian cooking heat control, spicy food tolerance UK, authentic Indonesian spice levels",
	openGraph: {
		title: "Mastering Indonesian Heat | Spice Levels & Flavor Guide",
		description:
			"Complete guide to mastering Indonesian spice levels and building heat tolerance for British cooks",
		type: "article",
		images: [
			{
				url: "/images/blog/indonesian-spice-mastery.webp",
				width: 1200,
				height: 630,
				alt: "Indonesian chilies and spices showing heat level progression and spice mastery techniques",
			},
		],
	},
	alternates: {
		canonical:
			"https://www.spiceislandindonesia.com/blog/mastering-indonesian-heat",
	},
};

const faqData = [
	{
		question:
			"How long does it take to build tolerance to Indonesian spice levels?",
		answer: "Most people notice improvement within 2-3 weeks of regular, gradual exposure. Full tolerance to moderate Indonesian heat levels typically develops over 2-3 months. The key is consistent, small increases rather than dramatic jumps in spice levels.",
	},
	{
		question:
			"What's the difference between Indonesian heat and other spicy cuisines?",
		answer: "Indonesian heat often comes with complex flavor layers - sweetness, aromatics, and umami alongside the heat. Unlike one-dimensional hot sauces, Indonesian sambal provides depth and balance, making the heat more pleasant and manageable for most palates.",
	},
	{
		question:
			"Can I reduce the heat in traditional Indonesian recipes without losing authenticity?",
		answer: "Yes! Reduce chili quantities but maintain other aromatics like lemongrass, galangal, and kaffir lime leaves. These provide authentic Indonesian flavor complexity even when heat levels are adjusted for British preferences.",
	},
	{
		question: "What should I do if I accidentally make a dish too spicy?",
		answer: "Add coconut milk, sugar, or dairy to temper heat. Increase the bulk ingredients (rice, vegetables, protein) to dilute spice concentration. For future cooking, always taste and adjust gradually rather than adding all spice at once.",
	},
];

const spiceProgression = [
	{
		level: 1,
		name: "Gentle Introduction",
		scoville: "0-1,000 SHU",
		description:
			"Aromatic warmth with minimal heat. Perfect starting point for British palates.",
		examples: [
			"Mild sambal bali",
			"Coconut curry base",
			"Aromatic rice dishes",
		],
		tips: "Focus on building flavor recognition before heat tolerance.",
		color: "green",
	},
	{
		level: 2,
		name: "Building Confidence",
		scoville: "1,000-3,000 SHU",
		description:
			"Noticeable warmth that enhances without overwhelming. Comparable to mild jalapeño.",
		examples: [
			"Gado-gado sauce",
			"Mild rendang",
			"Lightly spiced stir-fries",
		],
		tips: "Introduce gradually over 1-2 weeks. Mix with familiar flavors.",
		color: "yellow",
	},
	{
		level: 3,
		name: "Developing Tolerance",
		scoville: "3,000-8,000 SHU",
		description:
			"Clear heat sensation with complex flavor layers. Most British cooks plateau here.",
		examples: [
			"Traditional sambal oelek",
			"Authentic nasi goreng",
			"Medium curry dishes",
		],
		tips: "Take breaks between bites. Have cooling foods nearby.",
		color: "orange",
	},
	{
		level: 4,
		name: "Advanced Appreciation",
		scoville: "8,000-15,000 SHU",
		description:
			"Intense heat balanced by sophisticated flavor profiles. For serious spice enthusiasts.",
		examples: [
			"Fiery sambal terasi",
			"Padang-style curries",
			"Competition-level dishes",
		],
		tips: "Build slowly over months. Focus on flavor beyond heat.",
		color: "red",
	},
];

export default function MasteringIndonesianHeatPage() {
	const urls = getInternalUrls();

	return (
		<>
			{/* Structured Data */}
			<ArticleSchema
				headline='Mastering Indonesian Heat | Complete Spice Levels & Flavor Building Guide'
				description='Learn to navigate Indonesian heat levels with confidence through systematic spice tolerance building and authentic flavor balancing techniques'
				author={{
					name: "Chef Yossie",
					type: "Person",
					jobTitle: "Indonesian Chef",
					worksFor: "Spice Island Indonesia",
				}}
				publisher={{
					name: "Spice Island Indonesia",
					type: "Organization",
					logo: {
						url: "https://www.spiceislandindonesia.com/images/logo.webp",
						width: 200,
						height: 100,
					},
				}}
				url='https://www.spiceislandindonesia.com/blog/mastering-indonesian-heat'
				datePublished='2024-01-10'
				dateModified='2025-01-08'
				image='/images/blog/indonesian-spice-mastery.webp'
				wordCount={3200}
				keywords={[
					"Indonesian spice mastery",
					"Indonesian heat levels",
					"building spice tolerance",
					"authentic Indonesian cooking",
				]}
			/>
			<FAQSchema
				faqs={faqData}
				pageTitle='Mastering Indonesian Heat - FAQ'
			/>

			<article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Article Header */}
				<header className='text-center mb-12'>
					<div className='flex items-center justify-center gap-2 text-red-600 mb-4'>
						<Flame className='w-6 h-6' />
						<span className='text-sm font-semibold tracking-wide uppercase'>
							Spice Mastery
						</span>
						<TrendingUp className='w-6 h-6' />
					</div>

					<h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
						Mastering Indonesian Heat
					</h1>

					<p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed'>
						Learn to navigate Indonesian heat levels with
						confidence. Discover how to build spice tolerance,
						balance heat with flavor, and create authentic
						Indonesian dishes that suit British palates
						perfectly.
					</p>

					<div className='flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8'>
						<div className='flex items-center gap-2'>
							<Clock className='w-4 h-4' />
							<span>9 min read</span>
						</div>
						<div className='flex items-center gap-2'>
							<Users className='w-4 h-4' />
							<span>By Chef Yossie</span>
						</div>
						<div className='flex items-center gap-2'>
							<Thermometer className='w-4 h-4' />
							<span>Spice Guide</span>
						</div>
					</div>
				</header>

				{/* Hero Image */}
				<div className='relative mb-12 rounded-lg overflow-hidden shadow-2xl'>
					<Image
						src='/images/blog/indonesian-spice-mastery.webp'
						alt='Indonesian chilies arranged by heat level with spices showing progression from mild to fiery'
						width={1200}
						height={600}
						className='w-full h-auto object-cover'
						priority
					/>
				</div>

				{/* Introduction */}
				<section className='prose prose-lg max-w-none mb-12'>
					<div className='bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg'>
						<div className='flex items-start gap-3'>
							<Target className='w-6 h-6 text-red-600 mt-1 flex-shrink-0' />
							<div>
								<h3 className='font-semibold text-red-900 mb-2'>
									Chef's Mastery Philosophy
								</h3>
								<p className='text-red-800 leading-relaxed'>
									"Mastering Indonesian heat isn't
									about proving how much spice you
									can handle - it's about developing
									your palate to appreciate the
									incredible complexity that exists
									within the heat. When you
									understand Indonesian spice levels,
									you unlock a world of flavors that
									most people never experience."
								</p>
							</div>
						</div>
					</div>

					<p className='text-lg leading-relaxed text-gray-700 mb-6'>
						Indonesian cuisine offers one of the world's most
						sophisticated approaches to heat and spice. Unlike
						cuisines that use heat primarily for intensity,
						Indonesian cooking employs spice as a vehicle for
						complex flavor development, creating layers of
						taste that reveal themselves as your palate
						develops tolerance and appreciation.
					</p>

					<p className='text-lg leading-relaxed text-gray-700 mb-8'>
						For British cooks, mastering Indonesian heat
						levels opens up an entire culinary universe. With
						the right approach, you can build tolerance
						systematically while learning to recognize the
						subtle differences between various chilies, spice
						blends, and heat-building techniques that make
						Indonesian cuisine so remarkable.
					</p>
				</section>

				{/* Heat Level Progression */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						The Indonesian Heat Progression
					</h2>

					<div className='space-y-6'>
						{spiceProgression.map((level) => (
							<div
								key={level.level}
								className={`bg-white border-l-4 ${
									level.color === "green"
										? "border-green-400 bg-green-50"
										: level.color === "yellow"
											? "border-yellow-400 bg-yellow-50"
											: level.color ===
												  "orange"
												? "border-orange-400 bg-orange-50"
												: "border-red-400 bg-red-50"
								} rounded-r-lg p-6 shadow-lg`}
							>
								<div className='flex items-start gap-4'>
									<div
										className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
											level.color === "green"
												? "bg-green-500"
												: level.color ===
													  "yellow"
													? "bg-yellow-500"
													: level.color ===
														  "orange"
														? "bg-orange-500"
														: "bg-red-500"
										}`}
									>
										{level.level}
									</div>
									<div className='flex-1'>
										<div className='flex items-center justify-between mb-3'>
											<h3 className='text-xl font-bold text-gray-900'>
												{level.name}
											</h3>
											<span className='text-sm font-medium bg-white px-3 py-1 rounded-full'>
												{level.scoville}
											</span>
										</div>
										<p className='text-gray-700 mb-4'>
											{level.description}
										</p>
										<div className='grid md:grid-cols-2 gap-4'>
											<div>
												<h4 className='font-semibold text-gray-900 mb-2'>
													Example Dishes:
												</h4>
												<ul className='text-sm text-gray-600 space-y-1'>
													{level.examples.map(
														(
															example,
															i
														) => (
															<li
																key={
																	i
																}
															>
																•{" "}
																{
																	example
																}
															</li>
														)
													)}
												</ul>
											</div>
											<div>
												<h4 className='font-semibold text-gray-900 mb-2'>
													Building Tips:
												</h4>
												<p className='text-sm text-gray-600'>
													{level.tips}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Tolerance Building Program */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Systematic Tolerance Building Program
					</h2>

					<div className='bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200'>
						<h3 className='text-2xl font-bold text-blue-900 mb-6'>
							4-Week Spice Mastery Plan
						</h3>

						<div className='grid md:grid-cols-2 gap-8'>
							<div>
								<h4 className='text-lg font-semibold text-blue-800 mb-4'>
									Week 1-2: Foundation
								</h4>
								<div className='space-y-3'>
									<div className='bg-white p-4 rounded border border-blue-100'>
										<h5 className='font-medium text-blue-900 mb-1'>
											Daily Practice
										</h5>
										<p className='text-blue-700 text-sm'>
											1/8 tsp sambal mixed into
											familiar dishes. Focus on
											recognizing flavors
											beyond heat.
										</p>
									</div>
									<div className='bg-white p-4 rounded border border-blue-100'>
										<h5 className='font-medium text-blue-900 mb-1'>
											Goals
										</h5>
										<p className='text-blue-700 text-sm'>
											Develop familiarity with
											Indonesian aromatics.
											Build basic heat
											recognition.
										</p>
									</div>
								</div>
							</div>

							<div>
								<h4 className='text-lg font-semibold text-purple-800 mb-4'>
									Week 3-4: Advancement
								</h4>
								<div className='space-y-3'>
									<div className='bg-white p-4 rounded border border-purple-100'>
										<h5 className='font-medium text-purple-900 mb-1'>
											Daily Practice
										</h5>
										<p className='text-purple-700 text-sm'>
											1/2 tsp sambal in
											dedicated Indonesian
											dishes. Experiment with
											different varieties.
										</p>
									</div>
									<div className='bg-white p-4 rounded border border-purple-100'>
										<h5 className='font-medium text-purple-900 mb-1'>
											Goals
										</h5>
										<p className='text-purple-700 text-sm'>
											Appreciate complex flavor
											layers. Handle moderate
											authentic spice levels.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className='mt-8 p-4 bg-white rounded border border-blue-200'>
							<h5 className='font-semibold text-blue-900 mb-2 flex items-center gap-2'>
								<Shield className='w-4 h-4' />
								Safety Guidelines
							</h5>
							<ul className='text-blue-700 text-sm space-y-1'>
								<li>
									• Have dairy products ready (milk,
									yogurt, ice cream)
								</li>
								<li>
									• Never jump more than one heat
									level per week
								</li>
								<li>
									• Skip days if experiencing
									discomfort
								</li>
								<li>
									• Listen to your body - everyone
									progresses differently
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Heat Management Techniques */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Advanced Heat Management Techniques
					</h2>

					<div className='grid md:grid-cols-2 gap-8'>
						<div className='bg-white border border-gray-200 rounded-lg p-6 shadow-lg'>
							<h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
								<Thermometer className='w-6 h-6 text-blue-500' />
								Cooling Techniques
							</h3>
							<div className='space-y-4'>
								<div>
									<h4 className='font-semibold text-gray-900 mb-1'>
										Coconut Milk Method
									</h4>
									<p className='text-gray-700 text-sm'>
										Add coconut milk gradually to
										reduce heat while maintaining
										authentic Indonesian richness
										and flavor profile.
									</p>
								</div>
								<div>
									<h4 className='font-semibold text-gray-900 mb-1'>
										Sugar Balance
									</h4>
									<p className='text-gray-700 text-sm'>
										Palm sugar or brown sugar
										counters heat naturally,
										following traditional
										Indonesian sweet-spicy balance
										principles.
									</p>
								</div>
								<div>
									<h4 className='font-semibold text-gray-900 mb-1'>
										Aromatic Dilution
									</h4>
									<p className='text-gray-700 text-sm'>
										Increase lemongrass, galangal,
										and kaffir lime leaves to
										maintain Indonesian character
										while reducing heat intensity.
									</p>
								</div>
							</div>
						</div>

						<div className='bg-white border border-gray-200 rounded-lg p-6 shadow-lg'>
							<h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
								<Target className='w-6 h-6 text-green-500' />
								Heat Building Methods
							</h3>
							<div className='space-y-4'>
								<div>
									<h4 className='font-semibold text-gray-900 mb-1'>
										Layered Introduction
									</h4>
									<p className='text-gray-700 text-sm'>
										Build heat gradually
										throughout cooking process
										rather than adding all spice
										at once for better flavor
										integration.
									</p>
								</div>
								<div>
									<h4 className='font-semibold text-gray-900 mb-1'>
										Oil Infusion
									</h4>
									<p className='text-gray-700 text-sm'>
										Cook spices in oil first to
										distribute heat evenly and
										develop complex flavor
										compounds before adding other
										ingredients.
									</p>
								</div>
								<div>
									<h4 className='font-semibold text-gray-900 mb-1'>
										Time Development
									</h4>
									<p className='text-gray-700 text-sm'>
										Longer cooking times mellow
										harsh heat while deepening
										complex spice flavors and
										aromatic compounds.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Common Mistakes */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Common Spice Mastery Mistakes
					</h2>

					<div className='space-y-4'>
						<div className='bg-red-50 border border-red-200 rounded-lg p-6'>
							<div className='flex items-start gap-3'>
								<AlertTriangle className='w-6 h-6 text-red-600 mt-1 flex-shrink-0' />
								<div>
									<h4 className='font-semibold text-red-800 mb-2'>
										Rushing the Process
									</h4>
									<p className='text-red-700 mb-2'>
										Jumping too quickly between
										heat levels often leads to
										overwhelming experiences that
										set back tolerance building.
									</p>
									<p className='text-red-600 text-sm'>
										<strong>Solution:</strong>{" "}
										Spend at least one week at
										each comfort level before
										advancing.
									</p>
								</div>
							</div>
						</div>

						<div className='bg-orange-50 border border-orange-200 rounded-lg p-6'>
							<div className='flex items-start gap-3'>
								<AlertTriangle className='w-6 h-6 text-orange-600 mt-1 flex-shrink-0' />
								<div>
									<h4 className='font-semibold text-orange-800 mb-2'>
										Focusing Only on Heat
									</h4>
									<p className='text-orange-700 mb-2'>
										Ignoring the complex flavors
										behind Indonesian heat misses
										the point of authentic cuisine
										appreciation.
									</p>
									<p className='text-orange-600 text-sm'>
										<strong>Solution:</strong>{" "}
										Practice identifying
										individual spice notes and
										aromatic compounds.
									</p>
								</div>
							</div>
						</div>

						<div className='bg-yellow-50 border border-yellow-200 rounded-lg p-6'>
							<div className='flex items-start gap-3'>
								<AlertTriangle className='w-6 h-6 text-yellow-600 mt-1 flex-shrink-0' />
								<div>
									<h4 className='font-semibold text-yellow-800 mb-2'>
										Using Poor Quality Spices
									</h4>
									<p className='text-yellow-700 mb-2'>
										Low-quality or stale spices
										provide harsh heat without the
										complex flavors that make
										Indonesian cuisine special.
									</p>
									<p className='text-yellow-600 text-sm'>
										<strong>Solution:</strong>{" "}
										Invest in fresh, authentic
										Indonesian spices and sambal
										varieties.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Spice Mastery Questions
					</h2>

					<div className='space-y-6'>
						{faqData.map((faq, index) => (
							<div
								key={index}
								className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'
							>
								<h3 className='text-lg font-semibold text-gray-900 mb-3'>
									{faq.question}
								</h3>
								<p className='text-gray-700 leading-relaxed'>
									{faq.answer}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Final Encouragement */}
				<section className='text-center mb-12'>
					<div className='bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-8'>
						<h2 className='text-2xl font-bold mb-4'>
							Your Spice Journey Awaits
						</h2>
						<p className='text-lg mb-6 opacity-90'>
							Mastering Indonesian heat levels is a
							rewarding journey that opens up incredible
							culinary possibilities. Take it step by step,
							focus on building appreciation alongside
							tolerance, and enjoy discovering the complex
							world of authentic Indonesian spice mastery.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link
								href={urls.samplePack}
								className='inline-flex items-center justify-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
							>
								<Flame className='w-5 h-5' />
								Start Your Spice Journey
							</Link>
							<Link
								href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spiceislandindonesia.com'}/blog/indonesian-spice-levels-british-palates`}
								className='inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-red-600 px-6 py-3 rounded-lg font-semibold transition-colors'
							>
								<TrendingUp className='w-5 h-5' />
								Beginner's Spice Guide
							</Link>
						</div>
					</div>
				</section>

				{/* Related Articles */}
				<section>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Continue Learning
					</h2>

					<div className='grid md:grid-cols-2 gap-6'>
						<Link
							href={urls.ultimateGuideSambal}
							className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'
						>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								The Ultimate Guide to Indonesian Sambal
							</h3>
							<p className='text-gray-600 text-sm mb-3'>
								Explore authentic sambal varieties and
								their heat profiles
							</p>
							<div className='text-red-600 text-sm font-medium'>
								Read Guide →
							</div>
						</Link>

						<Link
							href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spiceislandindonesia.com'}/blog/sambal-british-classics`}
							className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'
						>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								Transform British Classics with Sambal
							</h3>
							<p className='text-gray-600 text-sm mb-3'>
								Apply your heat mastery skills to
								British-Indonesian fusion cooking
							</p>
							<div className='text-red-600 text-sm font-medium'>
								Explore Fusion →
							</div>
						</Link>
					</div>
				</section>
			</article>
		</>
	);
}
