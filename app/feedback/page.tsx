"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Star, Flame, Heart, ThumbsUp, Send, Loader2, Zap } from "lucide-react";

interface FeedbackForm {
	name: string;
	email: string;
	overallRating: string;
	heatLevel: string;
	wouldRecommend: string;
	comments: string;
}

export default function FeedbackPage() {
	const [formData, setFormData] = useState<FeedbackForm>({
		name: "",
		email: "",
		overallRating: "",
		heatLevel: "",
		wouldRecommend: "",
		comments: "",
	});

	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const router = useRouter();

	const handleInputChange = (field: keyof FeedbackForm, value: string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			// Here you would send the data to your backend/database
			// For now, we&apos;ll simulate an API call
			await new Promise((resolve) => setTimeout(resolve, 1500));

			console.log("Feedback submitted:", formData);
			setSubmitted(true);
		} catch (error) {
			console.error("Error submitting feedback:", error);
		} finally {
			setLoading(false);
		}
	};

	const renderStarRating = (
		value: string,
		onChange: (value: string) => void
	) => (
		<div className='flex gap-1 justify-center'>
			{[1, 2, 3, 4, 5].map((star) => (
				<Star
					key={star}
					className={`w-8 h-8 cursor-pointer transition-colors ${
						parseInt(value) >= star
							? "fill-amber-400 text-amber-400"
							: "text-gray-300 hover:text-amber-300"
					}`}
					onClick={() => onChange(star.toString())}
				/>
			))}
		</div>
	);

	const renderFlameRating = (
		value: string,
		onChange: (value: string) => void
	) => (
		<div className='flex gap-1 justify-center'>
			{[1, 2, 3, 4, 5].map((level) => (
				<Flame
					key={level}
					className={`w-8 h-8 cursor-pointer transition-colors ${
						parseInt(value) >= level
							? "fill-red-500 text-red-500"
							: "text-gray-300 hover:text-red-300"
					}`}
					onClick={() => onChange(level.toString())}
				/>
			))}
		</div>
	);

	if (submitted) {
		return (
			<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 flex items-center justify-center p-4'>
				<Card className='w-full max-w-md text-center shadow-xl border-gold-200'>
					<CardHeader className='bg-gradient-to-r from-burgundy-50 to-gold-50 rounded-t-lg'>
						<div className='mx-auto w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mb-4 shadow-md'>
							<ThumbsUp className='w-8 h-8 text-burgundy-700' />
						</div>
						<CardTitle className='text-3xl text-burgundy-900 font-bold font-brand'>
							Terima Kasih!
						</CardTitle>
						<CardDescription className='text-lg text-burgundy-700 font-body'>
							Thank you for your feedback!
						</CardDescription>
					</CardHeader>
					<CardContent className='p-8'>
						<p className='text-burgundy-800 mb-6 text-lg font-body'>
							Your feedback helps us perfect our authentic
							recipes. Enjoy{" "}
							<strong className='text-burgundy-900'>
								15% off
							</strong>{" "}
							your next order!
						</p>
						<div className='bg-gradient-to-r from-gold-50 to-gold-100 border-2 border-gold-300 rounded-lg p-6 mb-6 shadow-inner'>
							<p className='font-mono text-2xl font-bold text-gold-800 mb-2'>
								FEEDBACK15
							</p>
							<p className='text-sm text-gold-700 font-medium'>
								Use this code at checkout
							</p>
						</div>
						<Button
							onClick={() => router.push("/")}
							className='w-full bg-burgundy-900 hover:bg-burgundy-800 text-white py-3 shadow-lg hover:shadow-xl transition-all duration-200 font-body'
						>
							Back to Home
						</Button>
					</CardContent>
				</Card>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 flex items-center justify-center p-4'>
			<div className='w-full max-w-lg'>
				{/* Header */}
				<Card className='mb-6 shadow-xl border-gold-200'>
					<CardHeader className='text-center bg-gradient-to-r from-burgundy-50 to-gold-50 rounded-t-lg'>
						<Badge className='mx-auto mb-4 bg-burgundy-900 hover:bg-burgundy-800 text-white px-4 py-2 shadow-md'>
							<Zap className='w-4 h-4 mr-2' />
							Quick Feedback
						</Badge>
						<CardTitle className='text-3xl font-bold text-burgundy-900 font-brand'>
							How was your{" "}
							<span className='text-burgundy-900'>
								Sambal
							</span>
							?
						</CardTitle>
						<CardDescription className='text-lg text-burgundy-700 font-body'>
							2 minutes • Get 15% off your next order
						</CardDescription>
					</CardHeader>
				</Card>

				<form onSubmit={handleSubmit}>
					<Card className='shadow-xl border-gold-200'>
						<CardContent className='p-8 space-y-8 bg-white'>
							{/* Star Rating */}
							<div className='text-center'>
								<Label className='text-lg font-medium mb-4 block'>
									Overall, how was it? ⭐
								</Label>
								{renderStarRating(
									formData.overallRating,
									(value) =>
										handleInputChange(
											"overallRating",
											value
										)
								)}
							</div>

							{/* Heat Level */}
							<div className='text-center'>
								<Label className='text-lg font-medium mb-4 block'>
									How spicy was it? 🌶️
								</Label>
								{renderFlameRating(
									formData.heatLevel,
									(value) =>
										handleInputChange(
											"heatLevel",
											value
										)
								)}
								<p className='text-sm text-gray-500 mt-2'>
									1 = Mild, 5 = Very Hot
								</p>
							</div>

							{/* Would Recommend */}
							<div>
								<Label className='text-lg font-medium mb-4 block'>
									Would you recommend it to a friend?
									🤝
								</Label>
								<RadioGroup
									value={formData.wouldRecommend}
									onValueChange={(value) =>
										handleInputChange(
											"wouldRecommend",
											value
										)
									}
									className='space-y-3'
								>
									<div className='flex items-center space-x-3'>
										<RadioGroupItem
											value='definitely'
											id='definitely'
										/>
										<Label
											htmlFor='definitely'
											className='text-base cursor-pointer'
										>
											Definitely! 🙌
										</Label>
									</div>
									<div className='flex items-center space-x-3'>
										<RadioGroupItem
											value='probably'
											id='probably'
										/>
										<Label
											htmlFor='probably'
											className='text-base cursor-pointer'
										>
											Probably 👍
										</Label>
									</div>
									<div className='flex items-center space-x-3'>
										<RadioGroupItem
											value='maybe'
											id='maybe'
										/>
										<Label
											htmlFor='maybe'
											className='text-base cursor-pointer'
										>
											Maybe 🤷‍♀️
										</Label>
									</div>
									<div className='flex items-center space-x-3'>
										<RadioGroupItem
											value='no'
											id='no'
										/>
										<Label
											htmlFor='no'
											className='text-base cursor-pointer'
										>
											Probably not 👎
										</Label>
									</div>
								</RadioGroup>
							</div>

							{/* Comments */}
							<div>
								<Label
									htmlFor='comments'
									className='text-lg font-medium mb-3 block'
								>
									Anything else? (Optional) 💭
								</Label>
								<Textarea
									id='comments'
									value={formData.comments}
									onChange={(e) =>
										handleInputChange(
											"comments",
											e.target.value
										)
									}
									placeholder='What did you love? What could be better?'
									className='resize-none'
									rows={3}
								/>
							</div>

							{/* Contact Info */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div>
									<Label
										htmlFor='name'
										className='text-base font-medium mb-2 block'
									>
										First Name
									</Label>
									<Input
										id='name'
										value={formData.name}
										onChange={(e) =>
											handleInputChange(
												"name",
												e.target.value
											)
										}
										placeholder='Your name'
										required
									/>
								</div>
								<div>
									<Label
										htmlFor='email'
										className='text-base font-medium mb-2 block'
									>
										Email
									</Label>
									<Input
										id='email'
										type='email'
										value={formData.email}
										onChange={(e) =>
											handleInputChange(
												"email",
												e.target.value
											)
										}
										placeholder='your@email.com'
										required
									/>
								</div>
							</div>

							{/* Submit Button */}
							<Button
								type='submit'
								disabled={
									loading ||
									!formData.name ||
									!formData.email ||
									!formData.overallRating
								}
								className='w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-200'
							>
								{loading ? (
									<>
										<Loader2 className='w-5 h-5 mr-2 animate-spin' />
										Sending...
									</>
								) : (
									<>
										<Send className='w-5 h-5 mr-2' />
										Get My 15% Discount!
									</>
								)}
							</Button>

							<p className='text-xs text-gray-500 text-center'>
								We respect your privacy. Email only used
								for order updates.
							</p>
						</CardContent>
					</Card>
				</form>

				{/* Why Feedback Matters */}
				<Card className='mt-4 shadow-lg border-amber-200'>
					<CardContent className='p-4 bg-gradient-to-r from-amber-50 to-orange-50'>
						<div className='flex items-center space-x-3'>
							<Heart className='w-5 h-5 text-red-600 flex-shrink-0' />
							<p className='text-sm text-gray-700'>
								<span className='font-semibold text-gray-900'>
									Why feedback matters:
								</span>{" "}
								As a small family business, every review
								helps us perfect our traditional
								Indonesian recipes.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
