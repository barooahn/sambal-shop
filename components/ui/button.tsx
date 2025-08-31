import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-burgundy-800/95 hover:text-gold-100 shadow-lg hover:shadow-xl border border-gold-600/20 focus-visible:ring-burgundy-500",
				primary: "bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-100 hover:from-burgundy-800 hover:to-burgundy-700 shadow-lg hover:shadow-xl border border-gold-600/30 focus-visible:ring-burgundy-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-gold-600/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
				secondary: "bg-cream-100 text-burgundy-900 hover:bg-burgundy-50 shadow-lg hover:shadow-xl border border-burgundy-200 focus-visible:ring-burgundy-300",
				outline: "border-2 border-burgundy-600 text-burgundy-700 bg-transparent hover:bg-burgundy-600 hover:text-gold-100 shadow-md hover:shadow-lg focus-visible:ring-burgundy-500",
				ghost: "text-burgundy-700 hover:bg-burgundy-50 hover:text-burgundy-900 shadow-none hover:shadow-md focus-visible:ring-burgundy-300",
				link: "text-burgundy-600 underline-offset-4 hover:underline hover:text-burgundy-700 shadow-none focus-visible:ring-burgundy-300",
				elegant: "bg-gradient-to-r from-gold-600 to-gold-500 text-burgundy-900 hover:from-gold-500 hover:to-gold-400 shadow-lg hover:shadow-xl border border-gold-700/40 focus-visible:ring-gold-500",
				heritage: "bg-cream-100 text-burgundy-900 border-2 border-burgundy-200 hover:bg-burgundy-50 hover:border-burgundy-300 shadow-md hover:shadow-lg focus-visible:ring-burgundy-300",
				// New Indonesian-inspired variants
				spicy: "bg-gradient-to-r from-chili-500 to-chili-600 text-white hover:from-chili-600 hover:to-chili-700 shadow-lg hover:shadow-xl border border-chili-700/40 focus-visible:ring-chili-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-turmeric-400/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
				golden: "bg-gradient-to-r from-turmeric-400 to-turmeric-500 text-burgundy-900 hover:from-turmeric-500 hover:to-turmeric-600 shadow-lg hover:shadow-xl border border-turmeric-600/40 focus-visible:ring-turmeric-400",
				natural: "bg-gradient-to-r from-coconut-50 to-coconut-100 text-palm-500 hover:from-coconut-100 hover:to-coconut-200 shadow-md hover:shadow-lg border border-palm-200 focus-visible:ring-palm-300",
				authentic: "bg-gradient-to-r from-palm-500 to-palm-600 text-coconut-50 hover:from-palm-600 hover:to-palm-700 shadow-lg hover:shadow-xl border border-palm-700/40 focus-visible:ring-palm-400",
			},
			size: {
				default: "h-11 px-6 py-3 text-sm min-h-[44px]", // Ensure 44px minimum for accessibility
				sm: "h-10 px-4 py-2 text-xs min-h-[40px]",
				lg: "h-14 px-8 py-4 text-base min-h-[44px]",
				xl: "h-16 px-10 py-5 text-lg min-h-[44px]",
				icon: "h-11 w-11 min-h-[44px] min-w-[44px]", // Square with minimum touch target
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
