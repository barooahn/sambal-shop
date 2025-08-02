'use client';

import { createContext, useContext, ReactNode } from 'react';
import {
  trackEvent,
  trackPageView,
  trackNewsletterSignup,
  trackContactForm,
  trackProductInterest,
  trackRecipeView,
  trackExternalLink,
} from './GoogleAnalytics';

interface AnalyticsContextType {
  trackEvent: typeof trackEvent;
  trackPageView: typeof trackPageView;
  trackNewsletterSignup: typeof trackNewsletterSignup;
  trackContactForm: typeof trackContactForm;
  trackProductInterest: typeof trackProductInterest;
  trackRecipeView: typeof trackRecipeView;
  trackExternalLink: typeof trackExternalLink;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const analytics: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackNewsletterSignup,
    trackContactForm,
    trackProductInterest,
    trackRecipeView,
    trackExternalLink,
  };

  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}

// Hook for tracking page views in Next.js App Router
export function usePageTracking() {
  const { trackPageView } = useAnalytics();
  
  return {
    trackPageView: (url?: string, title?: string) => {
      const currentUrl = url || window.location.href;
      const currentTitle = title || document.title;
      trackPageView(currentUrl, currentTitle);
    },
  };
}
