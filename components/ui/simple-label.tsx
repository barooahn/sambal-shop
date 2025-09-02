// Lightweight label component to replace Radix UI Label
// This reduces bundle size for simple label usage

import React from 'react';
import { cn } from '@/lib/utils';

interface SimpleLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const SimpleLabel = React.forwardRef<HTMLLabelElement, SimpleLabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      {...props}
    />
  )
);

SimpleLabel.displayName = 'SimpleLabel';

export { SimpleLabel as Label };
export type { SimpleLabelProps as LabelProps };