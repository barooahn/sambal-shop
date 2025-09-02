// Lightweight checkbox component to replace Radix UI Checkbox

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from '@/components/ui/icons';

interface SimpleCheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id?: string;
  className?: string;
  disabled?: boolean;
}

export function SimpleCheckbox({ checked = false, onCheckedChange, id, className, disabled }: SimpleCheckboxProps) {
  const handleChange = () => {
    if (!disabled && onCheckedChange) {
      onCheckedChange(!checked);
    }
  };

  return (
    <button
      type="button"
      id={id}
      role="checkbox"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleChange}
      className={cn(
        'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        checked && 'bg-primary text-primary-foreground',
        className
      )}
    >
      {checked && <Check className="h-4 w-4" />}
    </button>
  );
}

export { SimpleCheckbox as Checkbox };