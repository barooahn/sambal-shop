// Lightweight button component to replace Radix UI Button
// This significantly reduces bundle size for simple button usage

import React from 'react';
import { cn } from '@/lib/utils';

interface SimpleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'golden';
  size?: 'default' | 'sm' | 'lg' | 'icon';
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
      golden: 'bg-gradient-to-r from-gold-600 to-gold-500 text-white hover:from-gold-700 hover:to-gold-600 shadow-lg hover:shadow-xl border border-gold-400/20'
    };

    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
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