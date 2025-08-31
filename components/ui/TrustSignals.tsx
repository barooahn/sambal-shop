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
    description: '🇮🇩 Chef Yossie\'s traditional West Java family recipe',
    color: 'text-turmeric-600',
    bgColor: 'bg-turmeric-50',
    borderColor: 'border-turmeric-200',
  },
  {
    icon: Truck,
    title: 'Free UK Delivery',
    description: '🚚 Free delivery on orders over £25 - Next day available',
    color: 'text-chili-600',
    bgColor: 'bg-chili-50',
    borderColor: 'border-chili-200',
  },
  {
    icon: RotateCcw,
    title: '30-Day Returns',
    description: '✅ Not satisfied? Full refund guaranteed - No questions asked',
    color: 'text-palm-600',
    bgColor: 'bg-palm-50',
    borderColor: 'border-palm-200',
  },
  {
    icon: Star,
    title: '★★★★★ Premium Quality',
    description: '⭐ Small-batch, restaurant-grade sambal - 4.9/5 rated',
    color: 'text-burgundy-600',
    bgColor: 'bg-burgundy-50',
    borderColor: 'border-burgundy-200',
  },
  {
    icon: Clock,
    title: 'Fresh Made Weekly',
    description: '🔥 Made in small batches every week for maximum freshness',
    color: 'text-turmeric-700',
    bgColor: 'bg-turmeric-50',
    borderColor: 'border-turmeric-200',
  },
  {
    icon: Leaf,
    title: 'Natural Ingredients',
    description: '🌿 No artificial preservatives, colors, or additives - Pure taste',
    color: 'text-palm-600',
    bgColor: 'bg-palm-50',
    borderColor: 'border-palm-200',
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
      title: 'text-xs font-bold',
      description: 'text-xs leading-tight',
      padding: 'p-3',
      gap: 'gap-2',
      minHeight: 'min-h-[44px]', // Ensure accessibility
    },
    md: {
      icon: 'w-5 h-5',
      title: 'text-sm font-bold',
      description: 'text-xs leading-relaxed',
      padding: 'p-4',
      gap: 'gap-3',
      minHeight: 'min-h-[48px]',
    },
    lg: {
      icon: 'w-6 h-6',
      title: 'text-base font-bold',
      description: 'text-sm leading-relaxed',
      padding: 'p-5',
      gap: 'gap-4',
      minHeight: 'min-h-[52px]',
    },
  };

  const classes = sizeClasses[size];

  if (variant === 'horizontal') {
    return (
      <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
        {displaySignals.map((signal, index) => (
          <div
            key={index}
            className={`flex items-center ${classes.gap} ${classes.padding} ${classes.minHeight} rounded-xl border-2 ${signal.borderColor} bg-gradient-to-r from-coconut-50 to-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-default max-w-sm`}
          >
            <div className={`${signal.bgColor} ${classes.padding} rounded-full shadow-sm border ${signal.borderColor}`}>
              <signal.icon className={`${classes.icon} ${signal.color}`} />
            </div>
            <div className="flex-1">
              <div className={`${classes.title} text-burgundy-900 mb-1`}>
                {signal.title}
              </div>
              <div className={`${classes.description} text-palm-700`}>
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

// Enhanced Urgency indicator component with Indonesian styling
export function UrgencyIndicator({ 
  message = "⚡ Only 3 jars left - Order now!", 
  type = 'stock',
  className = '' 
}: { 
  message?: string;
  type?: 'stock' | 'time' | 'demand' | 'cultural';
  className?: string;
}) {
  const typeStyles = {
    stock: 'bg-gradient-to-r from-chili-50 to-chili-100 text-chili-800 border-chili-300 shadow-chili',
    time: 'bg-gradient-to-r from-turmeric-50 to-turmeric-100 text-turmeric-800 border-turmeric-300 shadow-turmeric',
    demand: 'bg-gradient-to-r from-burgundy-50 to-burgundy-100 text-burgundy-800 border-burgundy-300 shadow-burgundy',
    cultural: 'bg-gradient-to-r from-palm-50 to-palm-100 text-palm-800 border-palm-300 shadow-palm',
  };

  const typeIcons = {
    stock: '⚡',
    time: '🔥',
    demand: '👥',
    cultural: '🇮🇩',
  };

  return (
    <div className={`inline-flex items-center gap-3 px-4 py-3 rounded-full border-2 text-sm font-bold min-h-[44px] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 animate-pulse ${typeStyles[type]} ${className}`}>
      <span className="text-lg">{typeIcons[type]}</span>
      <span>{message}</span>
    </div>
  );
}