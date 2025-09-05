'use client';

import { useStripeProduct } from '@/hooks/use-stripe-products';
import { useEffect, useState } from 'react';

interface DynamicProductSchemaProps {
  productId: string;
  fallbackData: {
    name: string;
    description: string;
    price: string;
    priceCurrency: string;
    availability: string;
    sku: string;
    url: string;
    priceValidUntil: string;
    shippingDetails?: {
      "@type": string;
      shippingRate: {
        "@type": string;
        currency: string;
        value: string;
      };
      shippingDestination: {
        "@type": string;
        addressCountry: string;
      };
    };
  };
}

export default function DynamicProductSchema({ productId, fallbackData }: DynamicProductSchemaProps) {
  const { product, loading } = useStripeProduct(productId);
  const [schemaData, setSchemaData] = useState(fallbackData);

  useEffect(() => {
    if (product && !loading) {
      setSchemaData({
        ...fallbackData,
        name: product.name,
        description: product.description,
        price: product.priceAmount.toString(),
        priceCurrency: product.currency,
        availability: product.active ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
      });
    }
  }, [product, loading, fallbackData]);

  useEffect(() => {
    // Inject the schema data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Product",
      ...schemaData
    });
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [schemaData]);

  return null; // This component only injects schema data
}