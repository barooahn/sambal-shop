import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
	children: ReactNode;
	className?: string;
	variant?: "default" | "subtle" | "strong" | "colored";
	hover?: boolean;
	border?: boolean;
	blur?: "sm" | "md" | "lg" | "xl";
}

export default function GlassCard({
	children,
	className,
	variant = "default",
	hover = true,
	border = true,
	blur = "md",
}: GlassCardProps) {
	const baseClasses = "relative overflow-hidden transition-all duration-500";
	
	const variantClasses = {
		default: "bg-white/20 backdrop-blur-md",
		subtle: "bg-white/10 backdrop-blur-sm",
		strong: "bg-white/30 backdrop-blur-lg",
		colored: "bg-gradient-to-br from-white/20 via-blue-50/20 to-indigo-50/20 backdrop-blur-md",
	};

	const blurClasses = {
		sm: "backdrop-blur-sm",
		md: "backdrop-blur-md", 
		lg: "backdrop-blur-lg",
		xl: "backdrop-blur-xl",
	};

	const hoverClasses = hover 
		? "hover:bg-white/25 hover:border-white/40 hover:shadow-2xl hover:scale-[1.02]" 
		: "";

	const borderClasses = border 
		? "border border-white/20 shadow-xl" 
		: "shadow-lg";

	return (
		<div
			className={cn(
				baseClasses,
				variantClasses[variant],
				blurClasses[blur],
				hoverClasses,
				borderClasses,
				className
			)}
		>
			{/* Multi-layer glass effect */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 backdrop-blur-xs" />
			<div className="absolute inset-2 bg-gradient-to-br from-white/3 to-transparent rounded-inherit backdrop-blur-xs" />
			
			{/* Content */}
			<div className="relative z-10">
				{children}
			</div>
		</div>
	);
}

// Glass morphism button component
interface GlassButtonProps {
	children: ReactNode;
	className?: string;
	variant?: "primary" | "secondary" | "accent";
	size?: "sm" | "md" | "lg";
	onClick?: () => void;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
}

export function GlassButton({
	children,
	className,
	variant = "primary",
	size = "md",
	onClick,
	disabled = false,
	type = "button",
}: GlassButtonProps) {
	const baseClasses = "relative overflow-hidden transition-all duration-300 font-medium backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed";
	
	const variantClasses = {
		primary: "bg-burgundy-500/80 hover:bg-burgundy-600/80 text-white",
		secondary: "bg-white/20 hover:bg-white/30 text-gray-800",
		accent: "bg-gradient-to-r from-blue-500/80 to-indigo-500/80 hover:from-blue-600/80 hover:to-indigo-600/80 text-white",
	};

	const sizeClasses = {
		sm: "px-4 py-2 text-sm rounded-lg",
		md: "px-6 py-3 text-base rounded-xl",
		lg: "px-8 py-4 text-lg rounded-2xl",
	};

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={cn(
				baseClasses,
				variantClasses[variant],
				sizeClasses[size],
				className
			)}
		>
			{/* Glass effect overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
			
			{/* Content */}
			<span className="relative z-10 flex items-center justify-center gap-2">
				{children}
			</span>
		</button>
	);
}

// Glass morphism input component
interface GlassInputProps {
	placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	className?: string;
	required?: boolean;
}

export function GlassInput({
	placeholder,
	value,
	onChange,
	type = "text",
	className,
	required = false,
}: GlassInputProps) {
	return (
		<div className="relative">
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={required}
				className={cn(
					"w-full px-4 py-3 bg-white/20 backdrop-blur-md border border-white/20 rounded-xl",
					"placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-white/40",
					"transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-white/25",
					className
				)}
			/>
			{/* Glass effect overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl pointer-events-none" />
		</div>
	);
}
