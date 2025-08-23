import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Share Your Sambal Experience | Customer Feedback",
	description: "Help us improve our authentic Indonesian sambal recipes! Share your experience with Chef Yossie's traditional sambal and get 15% off your next order.",
	keywords: "Indonesian sambal feedback, customer reviews, sambal experience, Chef Yossie feedback, Indonesian food reviews, authentic sambal rating",
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/feedback",
	},
	openGraph: {
		title: "Share Your Sambal Experience | Customer Feedback",
		description: "Tell us about your authentic Indonesian sambal experience and get 15% off your next order from Chef Yossie's collection.",
		type: "website",
	},
};

export default function FeedbackLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
			{/* SEO Content Header */}
			<div className="pt-16 pb-8">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h1 className="text-3xl font-bold text-burgundy-900 mb-4">
							Share Your Indonesian Sambal Experience
						</h1>
						<p className="text-lg text-neutral-600 max-w-2xl mx-auto">
							Your feedback helps Chef Yossie perfect traditional Indonesian recipes. Share your experience and receive 15% off your next authentic sambal order.
						</p>
					</div>

					{/* Why Feedback Matters */}
					<div className="bg-white rounded-lg p-8 mb-8 border border-gold-200">
						<h2 className="text-2xl font-bold text-burgundy-900 mb-6 text-center">
							How Your Feedback Helps
						</h2>
						<div className="grid md:grid-cols-3 gap-6">
							<div className="text-center">
								<div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl">👨‍🍳</span>
								</div>
								<h3 className="font-semibold text-burgundy-900 mb-2">Recipe Perfection</h3>
								<p className="text-sm text-neutral-600">Chef Yossie uses your feedback to refine traditional recipes for UK ingredients and palates</p>
							</div>
							
							<div className="text-center">
								<div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl">🌶️</span>
								</div>
								<h3 className="font-semibold text-burgundy-900 mb-2">Heat Level Calibration</h3>
								<p className="text-sm text-neutral-600">Your spice tolerance feedback helps us guide other customers to their perfect heat level</p>
							</div>
							
							<div className="text-center">
								<div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl">📦</span>
								</div>
								<h3 className="font-semibold text-burgundy-900 mb-2">Product Development</h3>
								<p className="text-sm text-neutral-600">Customer insights drive new authentic Indonesian condiment varieties and packaging improvements</p>
							</div>
						</div>
					</div>

					{/* Customer Success Stories */}
					<div className="bg-burgundy-50 rounded-lg p-8 border border-burgundy-200">
						<h2 className="text-xl font-bold text-burgundy-900 mb-6 text-center">
							Recent Customer Experiences
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="bg-white rounded-lg p-6">
								<div className="flex items-center mb-3">
									<div className="flex space-x-1">
										{[...Array(5)].map((_, i) => (
											<svg key={i} className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
									<span className="ml-2 text-sm text-neutral-600">Perfect Heat Level</span>
								</div>
								<blockquote className="text-burgundy-800 italic mb-2">
									"The sambal bali has exactly the right aromatic complexity I was looking for. Not too hot, but full of flavor!"
								</blockquote>
								<cite className="text-sm text-neutral-600">— Maria C., Birmingham</cite>
							</div>
							
							<div className="bg-white rounded-lg p-6">
								<div className="flex items-center mb-3">
									<div className="flex space-x-1">
										{[...Array(5)].map((_, i) => (
											<svg key={i} className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
									<span className="ml-2 text-sm text-neutral-600">Authentic Quality</span>
								</div>
								<blockquote className="text-burgundy-800 italic mb-2">
									"Finally found authentic Indonesian sambal in the UK! Tastes exactly like what I had in Bali."
								</blockquote>
								<cite className="text-sm text-neutral-600">— David L., London</cite>
							</div>
						</div>
					</div>
				</div>
			</div>

			{children}
		</div>
	);
}