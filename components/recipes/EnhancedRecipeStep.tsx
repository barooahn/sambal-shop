import { FC } from "react";
import { Clock, ChefHat, AlertCircle, CheckCircle } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";

interface RecipeStep {
	step: number;
	text: string;
	timeEstimate?: string;
	difficulty?: "Easy" | "Medium" | "Hard";
	equipment?: string[];
	tips?: string;
	warning?: string;
}

interface EnhancedRecipeStepProps {
	instruction: RecipeStep;
	isActive?: boolean;
	isCompleted?: boolean;
}

const EnhancedRecipeStep: FC<EnhancedRecipeStepProps> = ({
	instruction,
	isActive = false,
	isCompleted = false
}) => {
	const getDifficultyColor = (difficulty?: string) => {
		switch (difficulty) {
			case "Easy":
				return "bg-green-100 text-green-800 border-green-200";
			case "Medium":
				return "bg-yellow-100 text-yellow-800 border-yellow-200";
			case "Hard":
				return "bg-red-100 text-red-800 border-red-200";
			default:
				return "bg-gray-100 text-gray-800 border-gray-200";
		}
	};

	const getStepNumberStyle = () => {
		if (isCompleted) {
			return "bg-green-600 text-white border-green-600";
		}
		if (isActive) {
			return "bg-burgundy-600 text-white border-burgundy-600 ring-2 ring-burgundy-200";
		}
		return "bg-white text-burgundy-600 border-burgundy-300";
	};

	return (
		<div className={`relative p-6 rounded-lg border transition-all duration-300 ${
			isActive 
				? "border-burgundy-300 bg-burgundy-50 shadow-md" 
				: isCompleted
				? "border-green-300 bg-green-50"
				: "border-gray-200 bg-white hover:border-gold-300 hover:shadow-sm"
		}`}>
			{/* Step Number and Status */}
			<div className="flex items-start gap-4">
				<div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all duration-300 ${getStepNumberStyle()}`}>
					{isCompleted ? (
						<CheckCircle className="w-5 h-5" />
					) : (
						instruction.step
					)}
				</div>

				<div className="flex-1">
					{/* Step Header */}
					<div className="flex flex-wrap items-center gap-2 mb-3">
						{instruction.timeEstimate && (
							<Badge variant="outline" className="text-xs">
								<Clock className="w-3 h-3 mr-1" />
								{instruction.timeEstimate}
							</Badge>
						)}
						
						{instruction.difficulty && (
							<Badge className={`text-xs border ${getDifficultyColor(instruction.difficulty)}`}>
								<ChefHat className="w-3 h-3 mr-1" />
								{instruction.difficulty}
							</Badge>
						)}
					</div>

					{/* Step Text */}
					<p className="text-gray-700 font-body leading-relaxed mb-3">
						{instruction.text}
					</p>

					{/* Equipment Required */}
					{instruction.equipment && instruction.equipment.length > 0 && (
						<div className="mb-3">
							<h5 className="text-sm font-semibold text-burgundy-800 mb-1">
								Equipment needed:
							</h5>
							<div className="flex flex-wrap gap-1">
								{instruction.equipment.map((item, index) => (
									<Badge key={index} variant="secondary" className="text-xs">
										{item}
									</Badge>
								))}
							</div>
						</div>
					)}

					{/* Chef&apos;s Tip */}
					{instruction.tips && (
						<div className="bg-gold-50 border border-gold-200 rounded-md p-3 mb-3">
							<div className="flex items-start gap-2">
								<ChefHat className="w-4 h-4 text-gold-600 mt-0.5 flex-shrink-0" />
								<div>
									<h5 className="text-sm font-semibold text-gold-800 mb-1">
										Chef&apos;s Tip:
									</h5>
									<p className="text-sm text-gold-700">
										{instruction.tips}
									</p>
								</div>
							</div>
						</div>
					)}

					{/* Warning */}
					{instruction.warning && (
						<div className="bg-red-50 border border-red-200 rounded-md p-3">
							<div className="flex items-start gap-2">
								<AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
								<div>
									<h5 className="text-sm font-semibold text-red-800 mb-1">
										Important:
									</h5>
									<p className="text-sm text-red-700">
										{instruction.warning}
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Progress Line (for non-last steps) */}
			<div className="absolute left-9 top-16 w-0.5 h-6 bg-gray-200"></div>
		</div>
	);
};

export default EnhancedRecipeStep;
