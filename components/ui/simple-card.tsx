// Lightweight card component to replace Radix UI Card in non-critical areas
// This reduces bundle size for simple card usage

import React from 'react';

interface SimpleCardProps {
  children: React.ReactNode;
  className?: string;
}

interface SimpleCardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface SimpleCardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface SimpleCardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SimpleCard({ children, className = '' }: SimpleCardProps) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function SimpleCardContent({ children, className = '' }: SimpleCardContentProps) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
}

export function SimpleCardHeader({ children, className = '' }: SimpleCardHeaderProps) {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>
  );
}

export function SimpleCardTitle({ children, className = '' }: SimpleCardTitleProps) {
  return (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
      {children}
    </h3>
  );
}

// Export as a group for easy replacement
export const SimpleCardComponents = {
  Card: SimpleCard,
  CardContent: SimpleCardContent,
  CardHeader: SimpleCardHeader,
  CardTitle: SimpleCardTitle,
};