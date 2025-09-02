import { FC } from "react";
import { Clock, CheckCircle, AlertCircle, ChefHat, Utensils } from "@/components/ui/icons";
import Image from "next/image";

interface HowToStep {
	name: string;
	text: string;
	duration?: string;
	tip?: string;
	image?: string;
}

interface HowToTool {
	name: string;
	description?: string;
	required?: boolean;
}

interface HowToSupply {
	name: string;
	amount?: string;
	description?: string;
}

interface HowToVisualProps {
	name: string;
	description: string;
	steps: HowToStep[];
	totalTime?: string;
	difficulty?: "Beginner" | "Intermediate" | "Advanced";
	tools?: HowToTool[];
	supplies?: HowToSupply[];
}

const HowToVisual: FC<HowToVisualProps> = ({
	name,
	description,
	steps,
	totalTime,
	difficulty,
	tools,
	supplies
}) => {
	const getDifficultyColor = (level?: string) => {
		switch (level) {
			case "Beginner":
				return "text-green-600 bg-green-100";
			case "Intermediate":
				return "text-yellow-600 bg-yellow-100";
			case "Advanced":
				return "text-red-600 bg-red-100";
			default:
				return "text-gray-600 bg-gray-100";
		}
	};

	return (
		<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
			{/* Header */}
			<div className="bg-gradient-to-r from-red-500 to-amber-500 text-white p-6">
				<div className="flex items-center justify-between">
					<div>
						<h2 className="text-2xl font-bold mb-2">{name}</h2>
						<p className="text-red-100">{description}</p>
					</div>
					<div className="text-right">
						{totalTime && (
							<div className="flex items-center mb-2">
								<Clock className="w-5 h-5 mr-2" />
								<span className="font-semibold">{totalTime}</span>
							</div>
						)}
						{difficulty && (
							<span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(difficulty)}`}>
								{difficulty}
							</span>
						)}
					</div>
				</div>
			</div>

			{/* Equipment and Supplies */}
			<div className="p-6 bg-gray-50 border-b">
				<div className="grid md:grid-cols-2 gap-6">
					{/* Tools */}
					{tools && tools.length > 0 && (
						<div>
							{/* Equipment Setup Image */}
							<div className="mb-4 rounded-lg overflow-hidden shadow-md">
								<Image
									src="/images/optimized/cooking-step-setup-md.webp"
									alt="Indonesian cooking equipment setup with wok, mortar and pestle, and traditional tools"
									width={600}
									height={400}
									className="w-full h-32 object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</div>
							<h3 className="flex items-center text-lg font-semibold mb-4 text-gray-800">
								<Utensils className="w-5 h-5 mr-2 text-red-500" />
								Equipment Needed
							</h3>
							<div className="space-y-3">
								{tools.map((tool, index) => (
									<div key={index} className="flex items-start space-x-3">
										<div className={`w-2 h-2 rounded-full mt-2 ${tool.required ? 'bg-red-500' : 'bg-gray-400'}`} />
										<div>
											<span className="font-medium text-gray-800">{tool.name}</span>
											{tool.required && (
												<span className="ml-2 text-xs text-red-600 font-medium">Required</span>
											)}
											{tool.description && (
												<p className="text-sm text-gray-600 mt-1">{tool.description}</p>
											)}
										</div>
									</div>
								))}
							</div>
						</div>
					)}

					{/* Supplies */}
					{supplies && supplies.length > 0 && (
						<div>
							{/* Ingredient Preparation Image */}
							<div className="mb-4 rounded-lg overflow-hidden shadow-md">
								<Image
									src="/images/optimized/ingredient-prep-process-md.webp"
									alt="Step-by-step ingredient preparation showing hands chopping garlic, dicing shallots, and measuring sambal"
									width={600}
									height={400}
									className="w-full h-32 object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</div>
							<h3 className="flex items-center text-lg font-semibold mb-4 text-gray-800">
								<ChefHat className="w-5 h-5 mr-2 text-amber-500" />
								Ingredients
							</h3>
							<div className="space-y-3">
								{supplies.map((supply, index) => (
									<div key={index} className="flex items-start space-x-3">
										<div className="w-2 h-2 rounded-full mt-2 bg-amber-500" />
										<div>
											<div className="flex items-center space-x-2">
												<span className="font-medium text-gray-800">{supply.name}</span>
												{supply.amount && (
													<span className="text-sm text-amber-600 font-medium">({supply.amount})</span>
												)}
											</div>
											{supply.description && (
												<p className="text-sm text-gray-600 mt-1">{supply.description}</p>
											)}
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Steps */}
			<div className="p-6">
				<h3 className="text-lg font-semibold mb-6 text-gray-800">Step-by-Step Instructions</h3>
				<div className="space-y-6">
					{steps.map((step, index) => (
						<div key={index} className="flex space-x-4">
							{/* Step Number */}
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-gradient-to-br from-red-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
									{index + 1}
								</div>
								{index < steps.length - 1 && (
									<div className="w-0.5 h-8 bg-gray-300 mx-auto mt-2" />
								)}
							</div>

							{/* Step Content */}
							<div className="flex-1 pb-6">
								<div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
									<div className="flex items-center justify-between mb-3">
										<h4 className="font-semibold text-gray-800">{step.name}</h4>
										{step.duration && (
											<div className="flex items-center text-sm text-gray-600">
												<Clock className="w-4 h-4 mr-1" />
												{step.duration}
											</div>
										)}
									</div>
									
									<p className="text-gray-700 leading-relaxed mb-3">{step.text}</p>
									
									{step.tip && (
										<div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 flex items-start space-x-2">
											<AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
											<div>
												<span className="font-medium text-yellow-800">Tip: </span>
												<span className="text-yellow-700">{step.tip}</span>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Completion */}
				<div className="flex items-center justify-center mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
					<CheckCircle className="w-6 h-6 text-green-600 mr-3" />
					<span className="text-green-800 font-medium">Recipe Complete! Enjoy your authentic Indonesian dish.</span>
				</div>
			</div>
		</div>
	);
};

export default HowToVisual;