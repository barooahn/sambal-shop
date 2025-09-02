// Lightweight radio group component to replace Radix UI RadioGroup
// This reduces bundle size for simple radio group usage

import React from 'react';
import { cn } from '@/lib/utils';

interface SimpleRadioGroupProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

interface SimpleRadioGroupItemProps {
  value: string;
  id?: string;
  className?: string;
  disabled?: boolean;
}

const SimpleRadioGroupContext = React.createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
}>({});

export function SimpleRadioGroup({ value, onValueChange, children, className }: SimpleRadioGroupProps) {
  return (
    <SimpleRadioGroupContext.Provider value={{ value, onValueChange }}>
      <div className={cn('grid gap-2', className)} role="radiogroup">
        {children}
      </div>
    </SimpleRadioGroupContext.Provider>
  );
}

export function SimpleRadioGroupItem({ value, id, className, disabled }: SimpleRadioGroupItemProps) {
  const context = React.useContext(SimpleRadioGroupContext);
  const isChecked = context.value === value;

  const handleChange = () => {
    if (!disabled && context.onValueChange) {
      context.onValueChange(value);
    }
  };

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isChecked}
      id={id}
      disabled={disabled}
      onClick={handleChange}
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        isChecked && 'bg-primary',
        className
      )}
    >
      {isChecked && (
        <div className="flex items-center justify-center">
          <div className="h-2.5 w-2.5 rounded-full bg-current" />
        </div>
      )}
    </button>
  );
}

// Export with compatible names
export { SimpleRadioGroup as RadioGroup, SimpleRadioGroupItem as RadioGroupItem };