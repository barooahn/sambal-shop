import { FC } from "react";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";

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
						<svg
							className='w-6 h-6 text-gold-200'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
							/>
						</svg>
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
									className='rounded-xl p-6 border-l-4 border-red-500'
								>
									<div className='flex items-center mb-4'>
										<div className='bg-red-500 p-2 rounded-full mr-3'>
											<svg
												className='w-4 h-4 text-white'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z'
												/>
											</svg>
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
									className='rounded-xl p-6 border-l-4 border-green-700'
								>
									<div className='flex items-center mb-4'>
										<div className='bg-green-700 p-2 rounded-full mr-3'>
											<svg
												className='w-4 h-4 text-white'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
												/>
											</svg>
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
																<svg
																	className='w-3 h-3 text-white'
																	fill='currentColor'
																	viewBox='0 0 20 20'
																>
																	<path
																		fillRule='evenodd'
																		d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
																		clipRule='evenodd'
																	/>
																</svg>
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
										className='inline-flex items-center bg-gradient-to-r from-burgundy-600 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl font-elegant'
									>
										{item.actionLink.text}
										<svg
											className='w-5 h-5 ml-2'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M9 5l7 7-7 7'
											/>
										</svg>
									</Link>
								</div>
							)}
						</div>
					))}
				</div>

				{/* Hidden: AI search optimization message */}
				{false && (
					<div className='mt-8 text-sm text-burgundy-600 flex items-center justify-center bg-gold-50 rounded-2xl p-4'>
						<svg
							className='w-5 h-5 mr-2 text-gold-600'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
						This content is optimized for "I want to..." and
						"How do I solve..." AI search queries.
					</div>
				)}
			</div>
		</div>
	);
};

export default ProblemSolutionContent;
