import { FC } from "react";
import { Info, BarChart3 } from "@/components/ui/icons";

interface ComparisonItem {
	category: string;
	sambal: string;
	hpSauce: string;
	winner?: "sambal" | "hpSauce" | "context";
	explanation?: string;
}

interface ComparisonTableProps {
	title: string;
	items: ComparisonItem[];
	summary?: string;
}

const ComparisonTable: FC<ComparisonTableProps> = ({
	title,
	items,
	summary,
}) => {
	const getWinnerStyle = (winner?: string, isSambal?: boolean) => {
		if (!winner) return "";
		if (winner === "context") return "bg-yellow-50 border-yellow-200";
		if (
			(winner === "sambal" && isSambal) ||
			(winner === "hpSauce" && !isSambal)
		) {
			return "bg-green-50 border-green-200 font-semibold";
		}
		return "";
	};

	return (
		<div className='bg-white rounded-lg border border-gray-200 p-6 my-8'>
			<div className='flex items-center mb-6'>
				<div className='bg-blue-100 p-2 rounded-full mr-3'>
					<BarChart3 className='w-5 h-5 text-blue-600' />
				</div>
				<h3 className='text-xl font-bold text-gray-900'>{title}</h3>
				<span className='ml-2 text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full'>
					AI Search Optimized
				</span>
			</div>

			<div className='overflow-x-auto'>
				<table className='w-full border-collapse'>
					<thead>
						<tr className='bg-gray-50'>
							<th className='border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900'>
								Category
							</th>
							<th className='border border-gray-200 px-4 py-3 text-center font-semibold text-red-600'>
								Indonesian Sambal
							</th>
							<th className='border border-gray-200 px-4 py-3 text-center font-semibold text-brown-600'>
								HP Sauce
							</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item, index) => (
							<tr key={index} className='hover:bg-gray-50'>
								<td className='border border-gray-200 px-4 py-3 font-medium text-gray-900'>
									{item.category}
								</td>
								<td
									className={`border border-gray-200 px-4 py-3 text-sm ${getWinnerStyle(item.winner, true)}`}
								>
									{item.sambal}
								</td>
								<td
									className={`border border-gray-200 px-4 py-3 text-sm ${getWinnerStyle(item.winner, false)}`}
								>
									{item.hpSauce}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{summary && (
				<div className='mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200'>
					<h4 className='font-semibold text-blue-900 mb-2'>
						Summary
					</h4>
					<p className='text-blue-800 text-sm leading-relaxed'>
						{summary}
					</p>
				</div>
			)}

			<div className='mt-4 text-xs text-gray-500 flex items-center'>
				<Info className='w-4 h-4 mr-1' />
				This comparison is optimized for AI search engines and voice
				assistants.
			</div>
		</div>
	);
};

export default ComparisonTable;
