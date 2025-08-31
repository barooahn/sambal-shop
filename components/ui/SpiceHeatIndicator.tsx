'use client';

import React from 'react';
import { Flame } from 'lucide-react';

interface SpiceHeatIndicatorProps {
  heatLevel: 1 | 2 | 3 | 4 | 5;
  variant?: 'default' | 'minimal' | 'detailed' | 'cultural';
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const heatLevelData = {
  1: {
    label: 'Mild',
    indonesian: 'Ringan',
    description: 'Perfect for beginners - gentle warmth',
    color: 'text-palm-600',
    bgColor: 'bg-palm-50',
    borderColor: 'border-palm-200',
    shadowColor: 'shadow-palm',
  },
  2: {
    label: 'Medium-Mild',
    indonesian: 'Sedang Ringan', 
    description: 'Gentle heat with flavor balance',
    color: 'text-turmeric-600',
    bgColor: 'bg-turmeric-50',
    borderColor: 'border-turmeric-200',
    shadowColor: 'shadow-turmeric',
  },
  3: {
    label: 'Medium',
    indonesian: 'Sedang',
    description: 'Traditional Indonesian heat level',
    color: 'text-gold-600',
    bgColor: 'bg-gold-50', 
    borderColor: 'border-gold-200',
    shadowColor: 'shadow-gold',
  },
  4: {
    label: 'Hot',
    indonesian: 'Pedas',
    description: 'Authentic Indonesian spice level',
    color: 'text-chili-600',
    bgColor: 'bg-chili-50',
    borderColor: 'border-chili-200', 
    shadowColor: 'shadow-chili',
  },
  5: {
    label: 'Very Hot',
    indonesian: 'Sangat Pedas',
    description: 'For serious chili lovers only!',
    color: 'text-burgundy-700',
    bgColor: 'bg-burgundy-50',
    borderColor: 'border-burgundy-200',
    shadowColor: 'shadow-burgundy',
  },
};

export default function SpiceHeatIndicator({ 
  heatLevel, 
  variant = 'default', 
  className = '',
  showLabel = true,
  size = 'md'
}: SpiceHeatIndicatorProps) {
  const heat = heatLevelData[heatLevel];
  
  const sizeClasses = {
    sm: {
      flame: 'w-3 h-3',
      text: 'text-xs',
      padding: 'p-2',
      gap: 'gap-1',
    },
    md: {
      flame: 'w-4 h-4',
      text: 'text-sm',
      padding: 'p-3',
      gap: 'gap-2',
    },
    lg: {
      flame: 'w-5 h-5',
      text: 'text-base',
      padding: 'p-4',
      gap: 'gap-3',
    },
  };
  
  const classes = sizeClasses[size];
  
  if (variant === 'minimal') {
    return (
      <div className={`inline-flex items-center ${classes.gap} ${className}`}>
        {Array.from({ length: 5 }, (_, index) => (
          <Flame
            key={index}
            className={`${classes.flame} ${
              index < heatLevel 
                ? heat.color 
                : 'text-neutral-200'
            } transition-colors`}
            fill={index < heatLevel ? 'currentColor' : 'none'}
          />
        ))}
        {showLabel && (
          <span className={`${classes.text} font-medium ${heat.color} ml-1`}>
            {heat.label}
          </span>
        )}
      </div>
    );
  }
  
  if (variant === 'cultural') {
    return (
      <div className={`${classes.padding} rounded-xl border-2 ${heat.borderColor} ${heat.bgColor} ${heat.shadowColor} hover:shadow-lg transition-all duration-300 ${className}`}>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }, (_, index) => (
              <Flame
                key={index}
                className={`${classes.flame} ${
                  index < heatLevel 
                    ? heat.color 
                    : 'text-neutral-200'
                } transition-all duration-200 hover:scale-110`}
                fill={index < heatLevel ? 'currentColor' : 'none'}
              />
            ))}
          </div>
          
          <div className="space-y-1">
            <div className={`${classes.text} font-bold ${heat.color}`}>
              🌶️ {heat.label}
            </div>
            <div className={`text-xs text-burgundy-700 font-medium`}>
              {heat.indonesian}
            </div>
            <div className={`text-xs text-palm-600 leading-tight max-w-[120px]`}>
              {heat.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (variant === 'detailed') {
    return (
      <div className={`flex items-start ${classes.gap} ${classes.padding} rounded-lg border ${heat.borderColor} ${heat.bgColor} ${className}`}>
        <div className="flex items-center gap-1 flex-shrink-0">
          {Array.from({ length: 5 }, (_, index) => (
            <Flame
              key={index}
              className={`${classes.flame} ${
                index < heatLevel 
                  ? heat.color 
                  : 'text-neutral-200'
              } transition-colors`}
              fill={index < heatLevel ? 'currentColor' : 'none'}
            />
          ))}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className={`${classes.text} font-semibold ${heat.color} mb-1`}>
            {heat.label} ({heat.indonesian})
          </div>
          <div className={`text-xs text-neutral-600 leading-relaxed`}>
            {heat.description}
          </div>
        </div>
      </div>
    );
  }
  
  // Default variant
  return (
    <div className={`inline-flex items-center ${classes.gap} ${classes.padding} rounded-full border ${heat.borderColor} ${heat.bgColor} ${className}`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Flame
          key={index}
          className={`${classes.flame} ${
            index < heatLevel 
              ? heat.color 
              : 'text-neutral-200'
          } transition-colors`}
          fill={index < heatLevel ? 'currentColor' : 'none'}
        />
      ))}
      {showLabel && (
        <span className={`${classes.text} font-medium ${heat.color}`}>
          {heat.label}
        </span>
      )}
    </div>
  );
}

// Heat Level Badge Component
export function HeatLevelBadge({ 
  heatLevel, 
  className = '' 
}: { 
  heatLevel: 1 | 2 | 3 | 4 | 5;
  className?: string;
}) {
  const heat = heatLevelData[heatLevel];
  
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${heat.borderColor} ${heat.bgColor} ${className}`}>
      <Flame className={`w-3 h-3 ${heat.color}`} fill="currentColor" />
      <span className={`text-xs font-bold ${heat.color}`}>
        {heat.label}
      </span>
    </div>
  );
}

// Interactive Heat Selector Component
export function HeatLevelSelector({
  selectedLevel,
  onLevelChange,
  className = ''
}: {
  selectedLevel: 1 | 2 | 3 | 4 | 5;
  onLevelChange: (level: 1 | 2 | 3 | 4 | 5) => void;
  className?: string;
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="text-sm font-semibold text-burgundy-900 mb-2">
        🌶️ Choose Your Heat Level
      </div>
      
      <div className="grid grid-cols-1 gap-2">
        {(Object.keys(heatLevelData) as Array<keyof typeof heatLevelData>).map((level) => {
          const heat = heatLevelData[level];
          const isSelected = selectedLevel === level;
          
          return (
            <button
              key={level}
              onClick={() => onLevelChange(level)}
              className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all duration-200 min-h-[44px] ${
                isSelected 
                  ? `${heat.borderColor} ${heat.bgColor} ${heat.shadowColor}` 
                  : 'border-neutral-200 bg-white hover:border-neutral-300'
              }`}
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <Flame
                    key={index}
                    className={`w-3 h-3 ${
                      index < level 
                        ? heat.color 
                        : 'text-neutral-200'
                    }`}
                    fill={index < level ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              
              <div className="flex-1 text-left">
                <div className={`text-sm font-semibold ${isSelected ? heat.color : 'text-neutral-700'}`}>
                  {heat.label} ({heat.indonesian})
                </div>
                <div className="text-xs text-neutral-600">
                  {heat.description}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}