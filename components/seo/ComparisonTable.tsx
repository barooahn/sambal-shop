import { FC } from "react";

interface ComparisonItem {
	feature: string;
	product1: string;
	product2: string;
	winner?: "product1" | "product2" | "tie";
}

interface ComparisonTableProps {
	title: string;
	product1Name: string;
	product2Name: string;
	comparisons: ComparisonItem[];
	summary?: string;
}

const ComparisonTable: FC<ComparisonTableProps> = ({
	title,
	product1Name,
	product2Name,
	comparisons,
	summary
}) => {
	const getWinnerStyle = (winner?: string, isProduct1?: boolean) => {
		if (!winner) return "";
		if (winner === "tie") return "bg-yellow-50 border-yellow-200";
		if ((winner === "product1" && isProduct1) || (winner === "product2" && !isProduct1)) {
			return "bg-green-50 border-green-200 font-semibold";
		}
		return "";
	};

	return (
		<div className="bg-white rounded-lg border border-gray-200 p-6 my-8">
			<div className="flex items-center mb-6">
				<div className="bg-blue-100 p-2 rounded-full mr-3">
					<svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
					</svg>
				</div>
				<h3 className="text-xl font-bold text-gray-900">{title}</h3>
				<span className="ml-2 text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
					AI Search Optimized
				</span>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full border-collapse">
					<thead>
						<tr className="bg-gray-50">
							<th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
								Feature
							</th>
							<th className="border border-gray-200 px-4 py-3 text-center font-semibold text-burgundy-600">
								{product1Name}
							</th>
							<th className="border border-gray-200 px-4 py-3 text-center font-semibold text-burgundy-600">
								{product2Name}
							</th>
						</tr>
					</thead>
					<tbody>
						{comparisons.map((item, index) => (
							<tr key={index} className="hover:bg-gray-50">
								<td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
									{item.feature}
								</td>
								<td className={`border border-gray-200 px-4 py-3 text-center ${getWinnerStyle(item.winner, true)}`}>
									{item.product1}
								</td>
								<td className={`border border-gray-200 px-4 py-3 text-center ${getWinnerStyle(item.winner, false)}`}>
									{item.product2}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{summary && (
				<div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
					<h4 className="font-semibold text-blue-900 mb-2">Summary</h4>
					<p className="text-blue-800 text-sm leading-relaxed">{summary}</p>
				</div>
			)}

			<div className="mt-4 text-xs text-gray-500 flex items-center">
				<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				This comparison is optimized for AI search engines and voice assistants.
			</div>
		</div>
	);
};

export default ComparisonTable;
