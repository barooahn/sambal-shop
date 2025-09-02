// Lightweight progress component to replace Radix UI Progress

import React from 'react';
import { cn } from '@/lib/utils';

interface SimpleProgressProps {
  value?: number;
  max?: number;
  className?: string;
}

export function SimpleProgress({ value = 0, max = 100, className }: SimpleProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn('relative h-4 w-full overflow-hidden rounded-full bg-secondary', className)}>
      <div
        className="h-full w-full flex-1 bg-primary transition-all duration-300 ease-in-out"
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </div>
  );
}

export { SimpleProgress as Progress };