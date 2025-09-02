import { FC } from "react";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import {
	Lightbulb,
	AlertTriangle,
	CheckCircle,
	Info,
	Check,
	ChevronRight,
} from "@/components/ui/icons";

interface ProblemSolution {
	problem: string;
	solution: string;
	benefits: string[];
	actionLink?: {
		text: string;
		href: string;
	};
	category?: string;
}

interface ProblemSolutionContentProps {
	title: string;
	subtitle?: string;
	problems: ProblemSolution[];
}

const ProblemSolutionContent: FC<ProblemSolutionContentProps> = ({
	title,
	subtitle,
	problems,
}) => {
	return (
		<div className='p-8 lg:p-12 my-8 relative overflow-hidden'>
			{/* Decorative background pattern */}
			<div className='absolute inset-0'></div>

			<div className='relative'>
				<div className='flex items-center mb-8'>
					<div className='bg-gradient-to-r from-burgundy-600 to-burgundy-700 p-3 rounded-full mr-4 shadow-lg'>
						<Lightbulb className='w-6 h-6 text-gold-200' />
					</div>
					<div className='flex-1'>
						<h3 className='text-2xl lg:text-3xl font-bold text-burgundy-900 font-brand'>
							{title}
						</h3>
						{subtitle && (
							<p className='text-burgundy-700 text-lg mt-2 font-body'>
								{subtitle}
							</p>
						)}
					</div>
					<span className='ml-auto text-sm text-burgundy-700 bg-gold-100 px-4 py-2 rounded-full font-medium shadow-sm'>
						Problem-Solution Optimized
					</span>
				</div>

				<div className='space-y-8'>
					{problems.map((item, index) => (
						<div key={index} className='space-y-6'>
							{item.category && (
								<span className='inline-block text-sm text-burgundy-700 bg-gold-100 px-4 py-2 rounded-full font-medium'>
									{item.category}
								</span>
							)}

							<div className='grid md:grid-cols-2 gap-6'>
								{/* Problem - Glass Morphism */}
								<GlassCard
									variant='subtle'
									className='rounded-sm p-6 border-l-4 border-red-500'
								>
									<div className='flex items-center mb-4'>
										<div className='bg-red-500 p-2 rounded-full mr-3'>
											<AlertTriangle className='w-4 h-4 text-white' />
										</div>
										<h4 className='text-lg font-bold text-red-900 font-heading'>
											Problem
										</h4>
									</div>
									<p className='text-gray-800 leading-relaxed font-body'>
										{item.problem}
									</p>
								</GlassCard>

								{/* Solution - Glass Morphism */}
								<GlassCard
									variant='subtle'
									className='rounded-sm p-6 border-l-4 border-green-700'
								>
									<div className='flex items-center mb-4'>
										<div className='bg-green-700 p-2 rounded-full mr-3'>
											<CheckCircle className='w-4 h-4 text-white' />
										</div>
										<h4 className='text-lg font-bold text-green-800 font-heading'>
											Solution
										</h4>
									</div>
									<p className='text-gray-800 leading-relaxed mb-4 font-body'>
										{item.solution}
									</p>

									{item.benefits.length > 0 && (
										<div>
											<h5 className='font-bold text-green-700 mb-3 font-heading'>
												Key Benefits:
											</h5>
											<ul className='text-green-700 space-y-2'>
												{item.benefits.map(
													(
														benefit,
														benefitIndex
													) => (
														<li
															key={
																benefitIndex
															}
															className='flex items-start'
														>
															<div className='bg-green-700 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0'>
																<Check className='w-3 h-3 text-white' />
															</div>
															<span className='font-body'>
																{
																	benefit
																}
															</span>
														</li>
													)
												)}
											</ul>
										</div>
									)}
								</GlassCard>
							</div>

							{item.actionLink && (
								<div className='mt-8 pt-6 border-t border-gold-200'>
									<Link
										href={item.actionLink.href}
										className='inline-flex items-center bg-gradient-to-r from-burgundy-600 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 text-white px-6 py-3 rounded-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl font-elegant'
									>
										{item.actionLink.text}
										<ChevronRight className='w-5 h-5 ml-2' />
									</Link>
								</div>
							)}
						</div>
					))}
				</div>

				{/* Hidden: AI search optimization message */}
				{false && (
					<div className='mt-8 text-sm text-burgundy-600 flex items-center justify-center bg-gold-50 rounded-sm p-4'>
						<Info className='w-5 h-5 mr-2 text-gold-600' />
						This content is optimized for &quot;I want
						to...&quot; and &quot;How do I solve...&quot; AI
						search queries.
					</div>
				)}
			</div>
		</div>
	);
};

export default ProblemSolutionContent;
