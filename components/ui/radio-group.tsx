'use client';

import * as React from 'react';
import { Circle } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

interface RadioGroupContextType {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
}

const RadioGroupContext = React.createContext<RadioGroupContextType | null>(null);

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  className?: string;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value, onValueChange, name, ...props }, ref) => {
    return (
      <RadioGroupContext.Provider value={{ value, onValueChange, name }}>
        <div
          ref={ref}
          className={cn('grid gap-2', className)}
          role="radiogroup"
          {...props}
        />
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  className?: string;
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value, ...props }, ref) => {
    const context = React.useContext(RadioGroupContext);
    const isChecked = context?.value === value;
    
    const handleChange = () => {
      context?.onValueChange?.(value);
    };

    return (
      <div className="relative inline-flex items-center">
        <input
          type="radio"
          ref={ref}
          className="sr-only peer"
          checked={isChecked}
          onChange={handleChange}
          name={context?.name}
          value={value}
          {...props}
        />
        <div
          className={cn(
            'h-4 w-4 rounded-full border border-gray-300 bg-white',
            'peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-2',
            'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
            'peer-checked:border-burgundy-600',
            'transition-colors duration-200',
            'flex items-center justify-center',
            className
          )}
        >
          {isChecked && (
            <Circle className="h-2 w-2 fill-burgundy-600 text-burgundy-600" />
          )}
        </div>
      </div>
    );
  }
);

RadioGroupItem.displayName = 'RadioGroupItem';

export { RadioGroup, RadioGroupItem };