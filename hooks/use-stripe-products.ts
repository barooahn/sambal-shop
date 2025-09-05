import { useState, useEffect, useCallback } from 'react';
import type { EnhancedProduct } from '@/app/api/products/route';

interface UseStripeProductsResult {
  products: EnhancedProduct[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  lastUpdated: string | null;
}

interface UseStripeProductResult {
  product: EnhancedProduct | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

// Hook for fetching all products
export function useStripeProducts(): UseStripeProductsResult {
  const [products, setProducts] = useState<EnhancedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }

      const data = await response.json();
      
      setProducts(data.products || []);
      setLastUpdated(data.lastUpdated || new Date().toISOString());
      
      if (data.error) {
        setError(data.error);
      }

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch products';
      setError(errorMessage);
      console.error('Error fetching Stripe products:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
    lastUpdated
  };
}

// Hook for fetching a single product by ID
export function useStripeProduct(productId: string): UseStripeProductResult {
  const [product, setProduct] = useState<EnhancedProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = useCallback(async () => {
    if (!productId) return;

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/products?id=${encodeURIComponent(productId)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch product: ${response.statusText}`);
      }

      const data = await response.json();
      setProduct(data);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch product';
      setError(errorMessage);
      console.error('Error fetching Stripe product:', err);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return {
    product,
    loading,
    error,
    refetch: fetchProduct
  };
}

// Hook for fetching a single product by price ID
export function useStripeProductByPrice(priceId: string): UseStripeProductResult {
  const [product, setProduct] = useState<EnhancedProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = useCallback(async () => {
    if (!priceId) return;

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/products?priceId=${encodeURIComponent(priceId)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch product: ${response.statusText}`);
      }

      const data = await response.json();
      setProduct(data);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch product';
      setError(errorMessage);
      console.error('Error fetching Stripe product:', err);
    } finally {
      setLoading(false);
    }
  }, [priceId]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return {
    product,
    loading,
    error,
    refetch: fetchProduct
  };
}

// Utility function to get product by ID from a products array
export function getProductById(products: EnhancedProduct[], productId: string): EnhancedProduct | undefined {
  return products.find(product => product.id === productId);
}

// Utility function to get product by price ID from a products array
export function getProductByPriceId(products: EnhancedProduct[], priceId: string): EnhancedProduct | undefined {
  return products.find(product => product.priceId === priceId);
}