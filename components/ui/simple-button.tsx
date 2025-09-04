// Lightweight button component to replace Radix UI Button
// This significantly reduces bundle size for simple button usage

import React from 'react';
import { cn } from '@/lib/utils';

interface SimpleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'golden' | 'sambal' | 'spice' | 'heritage' | 'cultural';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'xl';
  asChild?: boolean;
}

const SimpleButton = React.forwardRef<HTMLButtonElement, SimpleButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
      golden: 'bg-gradient-to-r from-gold-600 to-gold-500 text-white hover:from-gold-700 hover:to-gold-600 shadow-lg hover:shadow-xl border border-gold-400/20',
      // Enhanced Indonesian-inspired button variants
      sambal: 'bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white hover:from-burgundy-700 hover:to-burgundy-800 shadow-burgundy hover:shadow-burgundy-lg transition-all duration-300 border border-burgundy-500/20',
      spice: 'bg-gradient-to-r from-chili-600 to-burgundy-600 text-white hover:from-chili-700 hover:to-burgundy-700 shadow-chili hover:shadow-chili-lg transition-all duration-300',
      heritage: 'bg-gradient-to-r from-gold-600 to-turmeric-600 text-burgundy-900 hover:from-gold-700 hover:to-turmeric-700 shadow-gold hover:shadow-gold-lg transition-all duration-300 border border-gold-400/30',
      cultural: 'border-2 border-burgundy-600 text-burgundy-600 bg-cream-50 hover:bg-burgundy-600 hover:text-white hover:shadow-burgundy transition-all duration-300'
    };

    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      xl: 'h-14 rounded-lg px-10 py-4 text-base font-semibold', // Enhanced for mobile touch targets
      icon: 'h-10 w-10'
    };

    if (asChild && React.isValidElement(props.children)) {
      return React.cloneElement(props.children, {
        className: cn(baseClasses, variants[variant], sizes[size], className),
        ref,
        ...props
      });
    }

    return (
      <button
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

SimpleButton.displayName = 'SimpleButton';

export { SimpleButton as Button };
export type { SimpleButtonProps as ButtonProps };