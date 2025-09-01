"use client";

import React from "react";
import styles from "@/styles/patterns.module.css";

interface IndonesianPatternProps {
	variant?:
		| "batik-subtle"
		| "batik-traditional"
		| "spice-weave"
		| "palm-leaf"
		| "coconut-fiber";
	opacity?: "light" | "medium" | "visible";
	className?: string;
	color?: "turmeric" | "chili" | "palm" | "burgundy" | "coconut";
}

const patternVariants = {
	"batik-subtle": {
		description: "Subtle traditional batik pattern",
		className: "batik-pattern-subtle",
	},
	"batik-traditional": {
		description: "Traditional Indonesian batik motifs",
		className: "batik-pattern-traditional",
	},
	"spice-weave": {
		description: "Interwoven spice-inspired pattern",
		className: "spice-weave-pattern",
	},
	"palm-leaf": {
		description: "Stylized palm leaf pattern",
		className: "palm-leaf-pattern",
	},
	"coconut-fiber": {
		description: "Natural coconut fiber texture",
		className: "coconut-fiber-pattern",
	},
};

const colorVariants = {
	turmeric: "pattern-turmeric",
	chili: "pattern-chili",
	palm: "pattern-palm",
	burgundy: "pattern-burgundy",
	coconut: "pattern-coconut",
};

const opacityVariants = {
	light: "pattern-opacity-light",
	medium: "pattern-opacity-medium",
	visible: "pattern-opacity-visible",
};

export default function IndonesianPattern({
	variant = "batik-subtle",
	opacity = "light",
	color = "turmeric",
	className = "",
}: IndonesianPatternProps) {
	const pattern = patternVariants[variant];
	const colorClass = colorVariants[color];
	const opacityClass = opacityVariants[opacity];

	return (
		<div
			className={`absolute inset-0 pointer-events-none ${
				styles[pattern.className]
			} ${styles[colorClass]} ${styles[opacityClass]} ${className}`}
			aria-hidden='true'
			role='presentation'
		/>
	);
}

// Pre-built pattern combinations for common use cases
export function BatikBackground({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={`relative ${className}`}>
			<IndonesianPattern
				variant='batik-subtle'
				opacity='light'
				color='turmeric'
			/>
			{children}
		</div>
	);
}

export function SpiceMarketBackground({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`relative bg-gradient-to-br from-coconut-50 via-turmeric-50 to-chili-50 ${className}`}
		>
			<IndonesianPattern
				variant='spice-weave'
				opacity='light'
				color='chili'
			/>
			<div className='relative z-10'>{children}</div>
		</div>
	);
}

export function TraditionalBackground({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`relative bg-gradient-to-r from-coconut-50 to-coconut-100 ${className}`}
		>
			<IndonesianPattern
				variant='batik-traditional'
				opacity='medium'
				color='burgundy'
			/>
			<div className='relative z-10'>{children}</div>
		</div>
	);
}

// Cultural Section Divider
export function CulturalDivider({ className = "" }: { className?: string }) {
	return (
		<div
			className={`relative h-24 flex items-center justify-center bg-gradient-to-r from-turmeric-50 via-chili-50 to-turmeric-50 ${className}`}
		>
			<IndonesianPattern
				variant='batik-subtle'
				opacity='light'
				color='chili'
			/>

			{/* Central ornament */}
			<div className='relative z-10 flex items-center space-x-4'>
				<div className='w-8 h-0.5 bg-gradient-to-r from-transparent to-turmeric-400'></div>
				<div className='text-2xl'>🌺</div>
				<div className='w-8 h-0.5 bg-gradient-to-r from-turmeric-400 to-transparent'></div>
			</div>
		</div>
	);
}
