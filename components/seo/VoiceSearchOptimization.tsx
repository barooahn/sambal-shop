import { FC } from "react";
import { Mic, Info } from "lucide-react";

interface QuickAnswer {
	question: string;
	answer: string;
	category?: string;
}

interface VoiceSearchOptimizationProps {
	quickAnswers: QuickAnswer[];
	title?: string;
}

const VoiceSearchOptimization: FC<VoiceSearchOptimizationProps> = ({
	quickAnswers,
	title = "Quick Answers",
}) => {
	return (
		<div className='bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 my-8'>
			<div className='flex items-center mb-4'>
				<div className='bg-blue-100 p-2 rounded-full mr-3'>
					<Mic className='w-5 h-5 text-blue-600' />
				</div>
				<h3 className='text-lg font-bold text-blue-900'>{title}</h3>
				<span className='ml-2 text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full'>
					Voice Search Optimized
				</span>
			</div>

			<div className='space-y-4'>
				{quickAnswers.map((qa, index) => (
					<div
						key={index}
						className='bg-white p-4 rounded-lg border border-blue-100'
					>
						<h4 className='font-semibold text-blue-900 mb-2 text-sm'>
							🎤 "{qa.question}"
						</h4>
						<p className='text-gray-700 text-sm leading-relaxed'>
							{qa.answer}
						</p>
						{qa.category && (
							<span className='inline-block mt-2 text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded'>
								{qa.category}
							</span>
						)}
					</div>
				))}
			</div>

			<div className='mt-4 text-xs text-blue-600 flex items-center'>
				<Info className='w-4 h-4 mr-1' />
				These answers are optimized for voice assistants like Alexa,
				Google Assistant, and AI search engines.
			</div>
		</div>
	);
};

export default VoiceSearchOptimization;
