'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log error to console in development
    console.error('Global error boundary caught:', error);

    // Report error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: error.message,
          stack: error.stack,
          digest: error.digest,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      }).catch(() => {
        // Fail silently
      });
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-coconut-50 px-4">
      <div className="text-center max-w-lg mx-auto">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-burgundy-900 mb-4 font-brand">
            Oops! Something went wrong
          </h1>
          
          <p className="text-lg text-gray-600 mb-2">
            We're sorry, but something unexpected happened while preparing your authentic Indonesian experience.
          </p>
          
          <p className="text-sm text-gray-500 mb-8">
            Our team has been notified and we're working to fix this issue.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={reset}
            className="w-full bg-burgundy-700 hover:bg-burgundy-800"
          >
            Try Again
          </Button>
          
          <Button
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="w-full border-burgundy-300 text-burgundy-700 hover:bg-burgundy-50"
          >
            Return to Homepage
          </Button>
          
          <Button
            variant="ghost"
            onClick={() => window.location.reload()}
            className="w-full text-gray-600 hover:text-gray-800"
          >
            Refresh Page
          </Button>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 mb-3 text-center">
              Error Details (Development Only)
            </summary>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-xs">
              <div className="font-bold text-red-800 mb-2">
                {error.message}
              </div>
              {error.digest && (
                <div className="text-red-600 mb-2">
                  <strong>Digest:</strong> {error.digest}
                </div>
              )}
              <pre className="text-red-700 whitespace-pre-wrap overflow-auto max-h-40 bg-white p-2 rounded border">
                {error.stack}
              </pre>
            </div>
          </details>
        )}
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Need immediate assistance?
          </p>
          <a
            href="/contact"
            className="text-burgundy-600 hover:text-burgundy-800 font-medium underline"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </div>
  );
}