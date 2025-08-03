import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import StarRating from "./StarRating";
import { Quote } from "lucide-react";
import GlassCard from "./GlassCard";

interface Review {
	author: string;
	rating: number;
	reviewBody: string;
	datePublished: string;
	location?: string;
}

interface CustomerReviewsProps {
	reviews: Review[];
	title?: string;
	className?: string;
}

const CustomerReviews: FC<CustomerReviewsProps> = ({
	reviews,
	title = "Customer Reviews",
	className = "",
}) => {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-GB", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<div className={`${className}`}>
			<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-heading'>
				{title}
			</h3>

			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{reviews.map((review, index) => (
					<GlassCard
						key={index}
						variant='subtle'
						className='transition-shadow duration-300'
					>
						<div className='p-6'>
							<div className='flex items-start space-x-3 mb-4'>
								<div className='w-10 h-10 bg-gradient-to-r from-burgundy-600 to-burgundy-700 rounded-full flex items-center justify-center text-white font-bold text-sm'>
									{review.author.charAt(0)}
								</div>
								<div className='flex-1'>
									<div className='flex items-center justify-between mb-1'>
										<h4 className='font-bold text-burgundy-900 text-sm'>
											{review.author}
										</h4>
										{review.location && (
											<span className='text-xs text-gray-500'>
												{review.location}
											</span>
										)}
									</div>
									<StarRating
										rating={review.rating}
										size='sm'
										showValue={false}
									/>
								</div>
							</div>

							<div className='relative'>
								<Quote className='w-4 h-4 text-gold-500 mb-2' />
								<p className='text-gray-700 text-sm leading-relaxed mb-3 font-body'>
									{review.reviewBody}
								</p>
							</div>

							<div className='text-xs text-gray-500 font-medium'>
								{formatDate(review.datePublished)}
							</div>
						</div>
					</GlassCard>
				))}
			</div>
		</div>
	);
};

export default CustomerReviews;
