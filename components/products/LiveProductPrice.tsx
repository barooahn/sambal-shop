'use client';

import { useStripeProduct } from '@/hooks/use-stripe-products';
import { Loader2 } from 'lucide-react';

interface LiveProductPriceProps {
  productId: string;
  fallbackPrice?: string;
  className?: string;
  showCurrency?: boolean;
  showLoading?: boolean;
}

export default function LiveProductPrice({ 
  productId, 
  fallbackPrice = '£7.49',
  className = '',
  showCurrency = true,
  showLoading = true
}: LiveProductPriceProps) {
  const { product, loading, error } = useStripeProduct(productId);

  // Show loading state
  if (loading && showLoading) {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <Loader2 className="w-4 h-4 animate-spin" />
        <span className="text-sm opacity-75">Loading price...</span>
      </span>
    );
  }

  // Show Stripe price if available
  if (product && !error) {
    return (
      <span className={className}>
        {product.price}
        {!product.active && (
          <span className="ml-2 text-xs text-red-600">(Inactive)</span>
        )}
      </span>
    );
  }

  // Show fallback price with error indicator
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span>{fallbackPrice}</span>
      {error && (
        <span 
          className="text-xs text-amber-600 cursor-help" 
          title={`Stripe error: ${error}`}
        >
          (Static)
        </span>
      )}
    </span>
  );
}

// Component for displaying detailed product info
interface LiveProductInfoProps {
  productId: string;
  fallbackData?: {
    name: string;
    price: string;
    description: string;
  };
  className?: string;
}

export function LiveProductInfo({ 
  productId, 
  fallbackData,
  className = ''
}: LiveProductInfoProps) {
  const { product, loading, error } = useStripeProduct(productId);

  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-8 bg-gray-200 rounded w-full"></div>
      </div>
    );
  }

  const displayData = product || fallbackData;
  
  if (!displayData) {
    return (
      <div className={className}>
        <p className="text-red-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <h3 className="font-semibold text-lg">{displayData.name}</h3>
      <p className="text-xl font-bold text-burgundy-600">{displayData.price}</p>
      <p className="text-sm text-gray-600 mt-2">{displayData.description}</p>
      
      {error && (
        <p className="text-xs text-amber-600 mt-1">
          Using cached data - {error}
        </p>
      )}
      
      {product && (
        <div className="text-xs text-gray-500 mt-1">
          Last updated: {new Date(product.stripeUpdatedAt! * 1000).toLocaleString()}
        </div>
      )}
    </div>
  );
}