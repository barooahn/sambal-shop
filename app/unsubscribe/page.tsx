"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { unsubscribeFromNewsletter } from "@/lib/actions";
import Link from "next/link";

function UnsubscribeForm() {
	const searchParams = useSearchParams();
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [result, setResult] = useState<{
		success: boolean;
		message: string;
	} | null>(null);

	useEffect(() => {
		const emailParam = searchParams.get("email");
		if (emailParam) {
			setEmail(decodeURIComponent(emailParam));
		}
	}, [searchParams]);

	const handleUnsubscribe = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await unsubscribeFromNewsletter(email);
			setResult(response);
		} catch (error) {
			setResult({
				success: false,
				message: "Something went wrong. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
			<Card className='max-w-md w-full'>
				<CardHeader className='text-center'>
					<CardTitle className='text-2xl font-bold text-gray-900'>
						Unsubscribe from Newsletter
					</CardTitle>
					<CardDescription>
						We&apos;re sorry to see you go! You can unsubscribe
						from our newsletter below.
					</CardDescription>
				</CardHeader>
				<CardContent>
					{!result ? (
						<form
							onSubmit={handleUnsubscribe}
							className='space-y-4'
						>
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700 mb-2'
								>
									Email Address
								</label>
								<Input
									id='email'
									type='email'
									value={email}
									onChange={(e) =>
										setEmail(e.target.value)
									}
									placeholder='Enter your email address'
									required
									className='w-full'
								/>
							</div>
							<Button
								type='submit'
								className='w-full bg-red-600 hover:bg-red-700'
								disabled={isSubmitting}
							>
								{isSubmitting
									? "Unsubscribing..."
									: "Unsubscribe"}
							</Button>
						</form>
					) : (
						<div className='text-center space-y-4'>
							<div
								className={`p-4 rounded-lg ${
									result.success
										? "bg-green-50 text-green-800"
										: "bg-red-50 text-red-800"
								}`}
							>
								<p className='font-medium'>
									{result.message}
								</p>
							</div>

							{result.success ? (
								<div className='space-y-3'>
									<p className='text-sm text-gray-600'>
										You have been successfully
										unsubscribed from our
										newsletter.
									</p>
									<p className='text-sm text-gray-600'>
										If you change your mind, you
										can always subscribe again on
										our homepage.
									</p>
								</div>
							) : (
								<Button
									onClick={() => setResult(null)}
									variant='outline'
									className='w-full'
								>
									Try Again
								</Button>
							)}

							<Link href='/' className='block'>
								<Button
									variant='outline'
									className='w-full'
								>
									Return to Homepage
								</Button>
							</Link>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}

export default function UnsubscribePage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
			{/* SEO Content Header */}
			<div className="pt-16 pb-8">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-8">
						<h1 className="text-3xl font-bold text-burgundy-900 mb-4">
							Newsletter Preferences
						</h1>
						<p className="text-lg text-neutral-600 max-w-2xl mx-auto">
							We understand everyone's inbox is different. Customize your Indonesian cooking newsletter or explore what you might be missing.
						</p>
					</div>

					{/* What Our Subscribers Love */}
					<div className="bg-white rounded-lg p-8 mb-8 border border-gold-200">
						<h2 className="text-2xl font-bold text-burgundy-900 mb-6 text-center">
							What Our Subscribers Are Saying
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="bg-cream-50 rounded-lg p-6">
								<div className="flex items-center mb-3">
									<div className="flex space-x-1">
										{[...Array(5)].map((_, i) => (
											<svg key={i} className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
								</div>
								<blockquote className="text-burgundy-800 italic mb-2">
									"The monthly recipes have completely changed how I cook Indonesian food. Chef Yossie's tips are invaluable!"
								</blockquote>
								<cite className="text-sm text-neutral-600">— Emma R., Manchester</cite>
							</div>
							
							<div className="bg-cream-50 rounded-lg p-6">
								<div className="flex items-center mb-3">
									<div className="flex space-x-1">
										{[...Array(5)].map((_, i) => (
											<svg key={i} className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
								</div>
								<blockquote className="text-burgundy-800 italic mb-2">
									"I look forward to the newsletter every month. The authentic recipes and cooking stories are amazing."
								</blockquote>
								<cite className="text-sm text-neutral-600">— James K., Edinburgh</cite>
							</div>
						</div>
					</div>

					{/* Newsletter Content Preview */}
					<div className="bg-burgundy-50 rounded-lg p-8 mb-8 border border-burgundy-200">
						<h2 className="text-2xl font-bold text-burgundy-900 mb-6 text-center">
							Recent Newsletter Highlights
						</h2>
						<div className="grid md:grid-cols-3 gap-6">
							<div className="text-center">
								<div className="text-3xl mb-2">🌶️</div>
								<h3 className="font-semibold text-burgundy-900 mb-2">Secret Marinade Recipe</h3>
								<p className="text-sm text-neutral-600">Chef Yossie's 15-year-perfected sambal marinade for perfect Indonesian BBQ</p>
							</div>
							
							<div className="text-center">
								<div className="text-3xl mb-2">🥘</div>
								<h3 className="font-semibold text-burgundy-900 mb-2">Fusion Cooking Techniques</h3>
								<p className="text-sm text-neutral-600">How to blend Indonesian flavors with British ingredients seamlessly</p>
							</div>
							
							<div className="text-center">
								<div className="text-3xl mb-2">📖</div>
								<h3 className="font-semibold text-burgundy-900 mb-2">Spice Islands Stories</h3>
								<p className="text-sm text-neutral-600">Cultural stories and history behind traditional Indonesian recipes</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Suspense
				fallback={
					<div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
						<Card className='max-w-md w-full'>
							<CardHeader className='text-center'>
								<CardTitle className='text-2xl font-bold text-gray-900'>
									Loading...
								</CardTitle>
							</CardHeader>
						</Card>
					</div>
				}
			>
				<UnsubscribeForm />
			</Suspense>

			{/* Alternative Options */}
			<div className="py-12 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-8">
						<h2 className="text-2xl font-bold text-burgundy-900 mb-4">
							Still Want Indonesian Cooking Content?
						</h2>
						<p className="text-neutral-600">
							Explore our most popular Indonesian recipes and cooking guides
						</p>
					</div>
					
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<Link href="/blog/ultimate-guide-indonesian-sambal" className="block bg-cream-50 rounded-lg p-6 border border-gold-200 hover:border-gold-300 transition-colors text-center">
							<div className="text-2xl mb-2">📚</div>
							<h3 className="font-semibold text-burgundy-900 mb-2">Complete Sambal Guide</h3>
							<p className="text-xs text-neutral-600">Everything about Indonesian chili pastes</p>
						</Link>
						
						<Link href="/recipes/sambal-fried-rice" className="block bg-cream-50 rounded-lg p-6 border border-gold-200 hover:border-gold-300 transition-colors text-center">
							<div className="text-2xl mb-2">🍚</div>
							<h3 className="font-semibold text-burgundy-900 mb-2">Sambal Fried Rice</h3>
							<p className="text-xs text-neutral-600">Chef Yossie's signature recipe</p>
						</Link>
						
						<Link href="/blog/spicy-food-beginners-guide" className="block bg-cream-50 rounded-lg p-6 border border-gold-200 hover:border-gold-300 transition-colors text-center">
							<div className="text-2xl mb-2">🌶️</div>
							<h3 className="font-semibold text-burgundy-900 mb-2">Spicy Food Guide</h3>
							<p className="text-xs text-neutral-600">Safe way to build heat tolerance</p>
						</Link>
						
						<Link href="/products" className="block bg-cream-50 rounded-lg p-6 border border-gold-200 hover:border-gold-300 transition-colors text-center">
							<div className="text-2xl mb-2">🛒</div>
							<h3 className="font-semibold text-burgundy-900 mb-2">Browse Products</h3>
							<p className="text-xs text-neutral-600">Authentic sambal collection</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
