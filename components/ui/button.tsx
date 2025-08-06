import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:-translate-y-0.5 active:translate-y-0",
	{
		variants: {
			variant: {
				default: "bg-burgundy-900 text-gold-200 hover:bg-burgundy-800 hover:text-gold-100 shadow-lg hover:shadow-xl border border-burgundy-700/50 hover:border-burgundy-600",
				primary: "bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 hover:from-burgundy-800 hover:to-burgundy-700 hover:text-gold-100 shadow-lg hover:shadow-xl border border-gold-600/30",
				secondary:
					"bg-gold-600 text-burgundy-900 hover:bg-gold-500 hover:text-burgundy-800 shadow-lg hover:shadow-xl border border-gold-700/50",
				outline: "border-2 border-burgundy-800 text-burgundy-800 bg-transparent hover:bg-burgundy-800 hover:text-gold-200 shadow-md hover:shadow-lg",
				ghost: "text-burgundy-800 hover:bg-burgundy-50 hover:text-burgundy-900 shadow-none hover:shadow-md",
				link: "text-burgundy-800 underline-offset-4 hover:underline hover:text-burgundy-600 shadow-none",
				elegant: "bg-gradient-to-r from-gold-600 to-gold-500 text-burgundy-900 hover:from-gold-500 hover:to-gold-400 hover:text-burgundy-800 shadow-lg hover:shadow-xl border border-gold-700/50",
				heritage:
					"bg-cream-100 text-burgundy-900 border-2 border-burgundy-200 hover:bg-burgundy-50 hover:border-burgundy-300 shadow-md hover:shadow-lg",
			},
			size: {
				default: "h-11 px-6 py-3 text-sm",
				sm: "h-9 px-4 py-2 text-xs rounded-sm",
				lg: "h-14 px-8 py-4 text-base rounded-sm",
				xl: "h-16 px-10 py-5 text-lg rounded-sm",
				icon: "h-11 w-11 rounded-sm",
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
