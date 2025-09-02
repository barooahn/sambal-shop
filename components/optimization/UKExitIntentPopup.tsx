"use client";

import { useState, useEffect } from "react";
import { X, Gift, Star, MapPin, Clock } from "@/components/ui/icons";
import { Button } from "@/components/ui/simple-button";
import { Input } from "@/components/ui/input";

export default function UKExitIntentPopup() {
	const [isVisible, setIsVisible] = useState(false);
	const [hasShown, setHasShown] = useState(false);
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		const handleMouseLeave = (e: MouseEvent) => {
			if (e.clientY <= 0 && !hasShown) {
				setIsVisible(true);
				setHasShown(true);
			}
		};

		// Show after 60 seconds to give users time to explore
		const timer = setTimeout(() => {
			if (!hasShown) {
				setIsVisible(true);
				setHasShown(true);
			}
		}, 60000);

		document.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			document.removeEventListener("mouseleave", handleMouseLeave);
			clearTimeout(timer);
		};
	}, [hasShown]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		setIsSubmitting(false);
		setIsSubmitted(true);

		// Auto close after 3 seconds
		setTimeout(() => {
			setIsVisible(false);
		}, 3000);
	};

	const handleClose = () => {
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn'>
			<div className='bg-white rounded-lg shadow-2xl max-w-lg w-full mx-4 relative animate-slideUp'>
				{/* Close button */}
				<button
					aria-label='Close popup'
					onClick={handleClose}
					className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10'
				>
					<X className='w-6 h-6' />
				</button>

				{/* Content */}
				<div className='p-8'>
					{!isSubmitted ? (
						<>
							{/* Header */}
							<div className='text-center mb-6'>
								<div className='flex items-center justify-center gap-2 mb-4'>
									<Star className='w-8 h-8 text-amber-500' />
									<h2 className='text-2xl font-bold text-burgundy-900'>
										Wait! UK Exclusive Offer
									</h2>
									<Star className='w-8 h-8 text-amber-500' />
								</div>
								<p className='text-lg text-gray-600'>
									Don't miss your chance to be among
									the first 100 UK customers
								</p>
							</div>

							{/* Benefits */}
							<div className='space-y-4 mb-6'>
								<div className='flex items-center gap-3'>
									<Gift className='w-5 h-5 text-burgundy-600 flex-shrink-0' />
									<span className='text-gray-700'>
										<strong>30% OFF</strong> your
										first order (UK exclusive)
									</span>
								</div>
								<div className='flex items-center gap-3'>
									<MapPin className='w-5 h-5 text-burgundy-600 flex-shrink-0' />
									<span className='text-gray-700'>
										Free delivery to London,
										Manchester, Birmingham &
										nationwide
									</span>
								</div>
								<div className='flex items-center gap-3'>
									<Clock className='w-5 h-5 text-burgundy-600 flex-shrink-0' />
									<span className='text-gray-700'>
										Priority access - skip the
										waiting list
									</span>
								</div>
							</div>

							{/* Form */}
							<form
								onSubmit={handleSubmit}
								className='space-y-4'
							>
								<Input
									type='email'
									placeholder='your.email@example.co.uk'
									value={email}
									onChange={(e) =>
										setEmail(e.target.value)
									}
									required
									className='w-full py-3 px-4 text-center border-2 border-burgundy-200 focus:border-burgundy-500 rounded-lg'
								/>
								<Button
									type='submit'
									disabled={isSubmitting}
									className='w-full bg-burgundy-600 hover:bg-burgundy-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors'
								>
									{isSubmitting
										? "Securing Your Spot..."
										: "Get UK Exclusive Access 🇬🇧"}
								</Button>
							</form>

							<p className='text-xs text-gray-500 text-center mt-4'>
								Join 500+ UK food lovers already on the
								list
							</p>
						</>
					) : (
						<div className='text-center py-8'>
							<div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Star className='w-8 h-8 text-green-600' />
							</div>
							<h3 className='text-2xl font-bold text-green-800 mb-2'>
								You're on the UK VIP List! 🇬🇧
							</h3>
							<p className='text-gray-600 mb-4'>
								We'll email you when Chef Yossie's
								authentic Indonesian sambal launches in
								the UK
							</p>
							<p className='text-sm text-gray-500'>
								This popup will close automatically in 3
								seconds...
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}