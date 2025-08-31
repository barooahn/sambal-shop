'use client';

import { Shield, Truck, RotateCcw, Star, Clock, Leaf } from 'lucide-react';

interface TrustSignalsProps {
  variant?: 'horizontal' | 'vertical' | 'grid';
  size?: 'sm' | 'md' | 'lg';
  showAll?: boolean;
  className?: string;
}

const trustSignals = [
  {
    icon: Shield,
    title: 'Authentic Recipe',
    description: 'Chef Yossie\'s traditional Indonesian recipe',
    color: 'text-gold-600',
    bgColor: 'bg-gold-50',
  },
  {
    icon: Truck,
    title: 'Free UK Delivery',
    description: 'Free delivery on orders over £20',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: RotateCcw,
    title: '30-Day Returns',
    description: 'Not satisfied? Full refund guaranteed',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Small-batch, restaurant-grade sambal',
    color: 'text-burgundy-600',
    bgColor: 'bg-burgundy-50',
  },
  {
    icon: Clock,
    title: 'Fresh Made',
    description: 'Made to order for maximum freshness',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Leaf,
    title: 'Natural Ingredients',
    description: 'No artificial preservatives or colors',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
];

export default function TrustSignals({ 
  variant = 'horizontal', 
  size = 'md',
  showAll = false,
  className = '' 
}: TrustSignalsProps) {
  const displaySignals = showAll ? trustSignals : trustSignals.slice(0, 4);

  const sizeClasses = {
    sm: {
      icon: 'w-4 h-4',
      title: 'text-xs font-medium',
      description: 'text-xs',
      padding: 'p-2',
      gap: 'gap-1',
    },
    md: {
      icon: 'w-5 h-5',
      title: 'text-sm font-semibold',
      description: 'text-xs',
      padding: 'p-3',
      gap: 'gap-2',
    },
    lg: {
      icon: 'w-6 h-6',
      title: 'text-base font-semibold',
      description: 'text-sm',
      padding: 'p-4',
      gap: 'gap-3',
    },
  };

  const classes = sizeClasses[size];

  if (variant === 'horizontal') {
    return (
      <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
        {displaySignals.map((signal, index) => (
          <div
            key={index}
            className={`flex items-center ${classes.gap} ${classes.padding} rounded-lg border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className={`${signal.bgColor} ${classes.padding} rounded-full`}>
              <signal.icon className={`${classes.icon} ${signal.color}`} />
            </div>
            <div>
              <div className={`${classes.title} text-neutral-800`}>
                {signal.title}
              </div>
              <div className={`${classes.description} text-neutral-600`}>
                {signal.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`space-y-3 ${className}`}>
        {displaySignals.map((signal, index) => (
          <div
            key={index}
            className={`flex items-start ${classes.gap} ${classes.padding} rounded-lg border border-neutral-200 bg-white`}
          >
            <div className={`${signal.bgColor} ${classes.padding} rounded-full flex-shrink-0`}>
              <signal.icon className={`${classes.icon} ${signal.color}`} />
            </div>
            <div>
              <div className={`${classes.title} text-neutral-800`}>
                {signal.title}
              </div>
              <div className={`${classes.description} text-neutral-600`}>
                {signal.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {displaySignals.map((signal, index) => (
          <div
            key={index}
            className={`text-center ${classes.padding} rounded-lg border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className={`${signal.bgColor} ${classes.padding} rounded-full inline-flex mb-3`}>
              <signal.icon className={`${classes.icon} ${signal.color}`} />
            </div>
            <div className={`${classes.title} text-neutral-800 mb-1`}>
              {signal.title}
            </div>
            <div className={`${classes.description} text-neutral-600`}>
              {signal.description}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

// Compact trust badges for checkout/product pages
export function TrustBadges({ className = '' }: { className?: string }) {
  const badges = [
    { icon: Shield, text: 'Authentic Recipe' },
    { icon: Truck, text: 'Free UK Delivery' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Star, text: 'Premium Quality' },
  ];

  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-600 ${className}`}>
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-1">
          <badge.icon className="w-3 h-3 text-green-600" />
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  );
}

// Urgency indicator component
export function UrgencyIndicator({ 
  message = "Only 3 left in stock", 
  type = 'stock',
  className = '' 
}: { 
  message?: string;
  type?: 'stock' | 'time' | 'demand';
  className?: string;
}) {
  const typeStyles = {
    stock: 'bg-orange-50 text-orange-800 border-orange-200',
    time: 'bg-red-50 text-red-800 border-red-200',
    demand: 'bg-green-50 text-green-800 border-green-200',
  };

  const typeIcons = {
    stock: '📦',
    time: '⏰',
    demand: '🔥',
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium ${typeStyles[type]} ${className}`}>
      <span>{typeIcons[type]}</span>
      <span>{message}</span>
    </div>
  );
}