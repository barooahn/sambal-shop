import { FC } from "react";
import Link from "next/link";

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
	problems
}) => {
	return (
		<div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 my-8 border border-red-200">
			<div className="flex items-center mb-6">
				<div className="bg-red-100 p-2 rounded-full mr-3">
					<svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
					</svg>
				</div>
				<div>
					<h3 className="text-xl font-bold text-red-900">{title}</h3>
					{subtitle && (
						<p className="text-red-700 text-sm mt-1">{subtitle}</p>
					)}
				</div>
				<span className="ml-auto text-sm text-red-600 bg-red-100 px-2 py-1 rounded-full">
					Problem-Solution Optimized
				</span>
			</div>

			<div className="space-y-6">
				{problems.map((item, index) => (
					<div key={index} className="bg-white rounded-lg p-6 border border-red-100 shadow-sm">
						{item.category && (
							<span className="inline-block text-xs text-red-600 bg-red-50 px-2 py-1 rounded mb-3">
								{item.category}
							</span>
						)}
						
						<div className="grid md:grid-cols-2 gap-6">
							{/* Problem */}
							<div>
								<div className="flex items-center mb-3">
									<div className="bg-red-100 p-1 rounded-full mr-2">
										<svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
										</svg>
									</div>
									<h4 className="font-semibold text-red-900">Problem</h4>
								</div>
								<p className="text-gray-700 text-sm leading-relaxed">
									{item.problem}
								</p>
							</div>

							{/* Solution */}
							<div>
								<div className="flex items-center mb-3">
									<div className="bg-green-100 p-1 rounded-full mr-2">
										<svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</div>
									<h4 className="font-semibold text-green-900">Solution</h4>
								</div>
								<p className="text-gray-700 text-sm leading-relaxed mb-3">
									{item.solution}
								</p>
								
								{item.benefits.length > 0 && (
									<div>
										<h5 className="font-medium text-green-800 text-xs mb-2">Benefits:</h5>
										<ul className="text-xs text-green-700 space-y-1">
											{item.benefits.map((benefit, benefitIndex) => (
												<li key={benefitIndex} className="flex items-start">
													<span className="text-green-500 mr-1">✓</span>
													{benefit}
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</div>

						{item.actionLink && (
							<div className="mt-4 pt-4 border-t border-gray-100">
								<Link 
									href={item.actionLink.href}
									className="inline-flex items-center text-sm text-burgundy-600 hover:text-burgundy-800 font-medium"
								>
									{item.actionLink.text}
									<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</Link>
							</div>
						)}
					</div>
				))}
			</div>

			<div className="mt-6 text-xs text-red-600 flex items-center">
				<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				This content is optimized for "I want to..." and "How do I solve..." AI search queries.
			</div>
		</div>
	);
};

export default ProblemSolutionContent;
