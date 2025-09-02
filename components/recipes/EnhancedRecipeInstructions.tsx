"use client";

import { FC, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/simple-button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, Play, Pause, RotateCcw } from "@/components/ui/icons";
import EnhancedRecipeStep from "./EnhancedRecipeStep";

interface EnhancedRecipeStep {
	step: number;
	text: string;
	timeEstimate?: string;
	difficulty?: "Easy" | "Medium" | "Hard";
	equipment?: string[];
	tips?: string;
	warning?: string;
}

interface EnhancedRecipeInstructionsProps {
	title: string;
	description: string;
	prepTime: string;
	cookTime: string;
	totalTime: string;
	servings: number;
	difficulty: "Easy" | "Medium" | "Hard";
	instructions: EnhancedRecipeStep[];
	className?: string;
}

const EnhancedRecipeInstructions: FC<EnhancedRecipeInstructionsProps> = ({
	title,
	description,
	prepTime,
	cookTime,
	totalTime,
	servings,
	difficulty,
	instructions,
	className = "",
}) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [completedSteps, setCompletedSteps] = useState<number[]>([]);
	const [isActive, setIsActive] = useState(false);

	const formatTime = (isoTime: string) => {
		const match = isoTime.match(/PT(\d+H)?(\d+M)?/);
		if (!match) return isoTime;

		const hours = match[1] ? parseInt(match[1]) : 0;
		const minutes = match[2] ? parseInt(match[2]) : 0;

		if (hours > 0) {
			return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
		}
		return `${minutes}m`;
	};

	const getDifficultyColor = (diff: string) => {
		switch (diff) {
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

	const handleStepComplete = (stepNumber: number) => {
		if (!completedSteps.includes(stepNumber)) {
			setCompletedSteps([...completedSteps, stepNumber]);
		}
		// Advance to the next step if not on the last step
		if (stepNumber < instructions.length) {
			setCurrentStep(stepNumber + 1);
		}
	};

	const resetProgress = () => {
		setCurrentStep(0);
		setCompletedSteps([]);
		setIsActive(false);
	};

	const startCooking = () => {
		setIsActive(true);
		setCurrentStep(1);
	};

	return (
		<Card className={`${className}`}>
			<CardHeader className='bg-gradient-to-r from-burgundy-50 to-gold-50 border-b border-gold-200'>
				<div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
					<div>
						<CardTitle className='text-2xl font-bold text-burgundy-900 mb-2 font-heading'>
							{title}
						</CardTitle>
						<p className='text-gray-600 font-body'>
							{description}
						</p>
					</div>

					{/* Recipe Stats */}
					<div className='flex flex-wrap gap-3'>
						<Badge variant='outline' className='text-sm'>
							<Clock className='w-4 h-4 mr-1' />
							{formatTime(totalTime)}
						</Badge>
						<Badge variant='outline' className='text-sm'>
							<Users className='w-4 h-4 mr-1' />
							{servings} servings
						</Badge>
						<Badge
							className={`text-sm border ${getDifficultyColor(difficulty)}`}
						>
							<ChefHat className='w-4 h-4 mr-1' />
							{difficulty}
						</Badge>
					</div>
				</div>

				{/* Time Breakdown */}
				<div className='grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gold-200'>
					<div className='text-center'>
						<div className='text-sm text-gray-500'>
							Prep Time
						</div>
						<div className='font-semibold text-burgundy-900'>
							{formatTime(prepTime)}
						</div>
					</div>
					<div className='text-center'>
						<div className='text-sm text-gray-500'>
							Cook Time
						</div>
						<div className='font-semibold text-burgundy-900'>
							{formatTime(cookTime)}
						</div>
					</div>
					<div className='text-center'>
						<div className='text-sm text-gray-500'>
							Total Time
						</div>
						<div className='font-semibold text-burgundy-900'>
							{formatTime(totalTime)}
						</div>
					</div>
				</div>

				{/* Cooking Controls */}
				<div className='flex gap-2 mt-4 pt-4 border-t border-gold-200'>
					{!isActive ? (
						<Button
							onClick={startCooking}
							className='bg-burgundy-600 hover:bg-burgundy-700'
						>
							<Play className='w-4 h-4 mr-2' />
							Start Cooking
						</Button>
					) : (
						<>
							<Button
								variant='outline'
								onClick={() => setIsActive(!isActive)}
								className='border-burgundy-300 text-burgundy-600'
							>
								<Pause className='w-4 h-4 mr-2' />
								Pause
							</Button>
							<Button
								variant='outline'
								onClick={resetProgress}
								className='border-gray-300 text-gray-600'
							>
								<RotateCcw className='w-4 h-4 mr-2' />
								Reset
							</Button>
						</>
					)}

					{/* Progress Indicator */}
					<div className='flex items-center ml-auto text-sm text-gray-600'>
						Step {Math.max(currentStep, 1)} of{" "}
						{instructions.length}
						{completedSteps.length > 0 && (
							<span className='ml-2 text-green-600'>
								({completedSteps.length} completed)
							</span>
						)}
					</div>
				</div>
			</CardHeader>

			<CardContent className='p-6'>
				<div className='space-y-4'>
					{instructions.map((instruction, index) => (
						<div key={instruction.step}>
							<EnhancedRecipeStep
								instruction={instruction}
								isActive={
									isActive &&
									currentStep === instruction.step
								}
								isCompleted={completedSteps.includes(
									instruction.step
								)}
							/>

							{isActive &&
								currentStep === instruction.step && (
									<div className='flex justify-center mt-4'>
										<Button
											onClick={() =>
												handleStepComplete(
													instruction.step
												)
											}
											className='bg-green-600 hover:bg-green-700'
										>
											Complete Step{" "}
											{instruction.step}
										</Button>
									</div>
								)}

							{/* Remove progress line from last step */}
							{index < instructions.length - 1 && (
								<div className='h-4'></div>
							)}
						</div>
					))}
				</div>

				{/* Completion Message */}
				{completedSteps.length === instructions.length && (
					<div className='mt-8 p-6 bg-green-50 border border-green-200 rounded-lg text-center'>
						<h3 className='text-lg font-bold text-green-800 mb-2'>
							🎉 Recipe Complete!
						</h3>
						<p className='text-green-700'>
							Congratulations! You&apos;ve successfully made{" "}
							{title}. Enjoy your delicious creation!
						</p>
					</div>
				)}
			</CardContent>
		</Card>
	);
};

export default EnhancedRecipeInstructions;
