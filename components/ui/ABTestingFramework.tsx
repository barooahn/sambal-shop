'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// A/B Test Configuration Types
interface ABTest {
  id: string;
  name: string;
  description: string;
  variants: {
    [key: string]: {
      name: string;
      weight: number;
      component?: React.ComponentType<any>;
      props?: any;
    };
  };
  enabled: boolean;
  targetAudience?: 'all' | 'new' | 'returning' | 'uk' | 'mobile' | 'desktop';
  startDate?: Date;
  endDate?: Date;
}

// Pre-configured A/B tests for the Indonesian sambal website
const AB_TESTS: Record<string, ABTest> = {
  'hero-cta-text': {
    id: 'hero-cta-text',
    name: 'Hero CTA Button Text',
    description: 'Test different call-to-action text on the hero section',
    variants: {
      control: {
        name: 'Join Waitlist',
        weight: 50,
        props: { text: 'Join Waitlist', variant: 'spicy' }
      },
      variant_a: {
        name: 'Get VIP Access',
        weight: 25,
        props: { text: 'Get VIP Access 🇬🇧', variant: 'cultural' }
      },
      variant_b: {
        name: 'Taste Indonesia',
        weight: 25,
        props: { text: 'Taste Indonesia First 🌶️', variant: 'traditional' }
      }
    },
    enabled: true,
    targetAudience: 'all'
  },
  
  'product-card-layout': {
    id: 'product-card-layout',
    name: 'Product Card Design',
    description: 'Test different product card layouts for conversion',
    variants: {
      control: {
        name: 'Standard Layout',
        weight: 50,
        props: { layout: 'standard', showHeatLevel: true }
      },
      variant_a: {
        name: 'Cultural Focus',
        weight: 30,
        props: { layout: 'cultural', showIndonesianName: true, showHeatLevel: true }
      },
      variant_b: {
        name: 'Minimal Clean',
        weight: 20,
        props: { layout: 'minimal', emphasizePrice: true }
      }
    },
    enabled: true,
    targetAudience: 'uk'
  },

  'trust-signals': {
    id: 'trust-signals',
    name: 'Trust Signal Emphasis',
    description: 'Test different trust signal presentations',
    variants: {
      control: {
        name: 'Standard Trust Signals',
        weight: 40,
        props: { style: 'standard' }
      },
      variant_a: {
        name: 'UK-Focused Signals',
        weight: 30,
        props: { style: 'uk-focused', emphasize: ['local-sourced', 'uk-delivery'] }
      },
      variant_b: {
        name: 'Cultural Authority',
        weight: 30,
        props: { style: 'cultural', emphasize: ['authentic', 'traditional-recipe'] }
      }
    },
    enabled: true,
    targetAudience: 'new'
  },

  'pricing-display': {
    id: 'pricing-display',
    name: 'Pricing Strategy Display',
    description: 'Test different ways to present pricing information',
    variants: {
      control: {
        name: 'Standard Pricing',
        weight: 50,
        props: { showOriginalPrice: false, emphasizeValue: false }
      },
      variant_a: {
        name: 'Value Emphasis',
        weight: 25,
        props: { showOriginalPrice: true, emphasizeValue: true, valueText: 'Compared to restaurant sambal' }
      },
      variant_b: {
        name: 'Bundle Savings',
        weight: 25,
        props: { showBundleDiscount: true, bundleText: 'Save £3 when you buy 3 jars' }
      }
    },
    enabled: true,
    targetAudience: 'all'
  },

  'cultural-education': {
    id: 'cultural-education',
    name: 'Cultural Education Content',
    description: 'Test impact of cultural education on engagement',
    variants: {
      control: {
        name: 'Product Focus',
        weight: 60,
        props: { showEducation: false }
      },
      variant_a: {
        name: 'Cultural Stories',
        weight: 40,
        props: { showEducation: true, educationType: 'stories' }
      }
    },
    enabled: true,
    targetAudience: 'all'
  }
};

// A/B Testing Context
interface ABTestContextType {
  getVariant: (testId: string) => string;
  trackConversion: (testId: string, conversionType: string) => void;
  userSegment: string;
}

const ABTestContext = createContext<ABTestContextType | null>(null);

// Hook to use A/B testing
export function useABTest(testId: string) {
  const context = useContext(ABTestContext);
  if (!context) {
    throw new Error('useABTest must be used within ABTestProvider');
  }

  const variant = context.getVariant(testId);
  const test = AB_TESTS[testId];
  const variantConfig = test?.variants[variant];

  return {
    variant,
    props: variantConfig?.props || {},
    trackConversion: (conversionType: string) => 
      context.trackConversion(testId, conversionType)
  };
}

// A/B Test Provider Component
export function ABTestProvider({ children }: { children: ReactNode }) {
  const [userSegment, setUserSegment] = useState<string>('all');
  const [variantAssignments, setVariantAssignments] = useState<Record<string, string>>({});

  // Initialize user segment and variant assignments
  useEffect(() => {
    // Determine user segment based on various factors
    const determineUserSegment = () => {
      const isNewVisitor = !localStorage.getItem('returning_visitor');
      const isMobile = window.innerWidth < 768;
      const isUK = Intl.DateTimeFormat().resolvedOptions().timeZone.includes('London') ||
                   navigator.language.includes('GB');

      if (isNewVisitor) {
        localStorage.setItem('returning_visitor', 'true');
        return 'new';
      } else if (isMobile) {
        return 'mobile';
      } else if (isUK) {
        return 'uk';
      } else {
        return 'returning';
      }
    };

    const segment = determineUserSegment();
    setUserSegment(segment);

    // Assign variants for all enabled tests
    const assignments: Record<string, string> = {};
    
    Object.entries(AB_TESTS).forEach(([testId, test]) => {
      if (!test.enabled) {
        assignments[testId] = 'control';
        return;
      }

      // Check if test applies to user segment
      if (test.targetAudience && test.targetAudience !== 'all' && test.targetAudience !== segment) {
        assignments[testId] = 'control';
        return;
      }

      // Check date restrictions
      const now = new Date();
      if (test.startDate && now < test.startDate) {
        assignments[testId] = 'control';
        return;
      }
      if (test.endDate && now > test.endDate) {
        assignments[testId] = 'control';
        return;
      }

      // Get existing assignment or create new one
      const storageKey = `ab_test_${testId}`;
      let assignment = localStorage.getItem(storageKey);

      if (!assignment) {
        // Weighted random assignment
        const random = Math.random() * 100;
        let cumulative = 0;

        for (const [variantId, variant] of Object.entries(test.variants)) {
          cumulative += variant.weight;
          if (random < cumulative) {
            assignment = variantId;
            break;
          }
        }

        assignment = assignment || 'control';
        localStorage.setItem(storageKey, assignment);
      }

      assignments[testId] = assignment;
    });

    setVariantAssignments(assignments);
  }, []);

  // Get variant for a specific test
  const getVariant = (testId: string): string => {
    return variantAssignments[testId] || 'control';
  };

  // Track conversion events
  const trackConversion = async (testId: string, conversionType: string) => {
    const variant = getVariant(testId);
    
    // In a real implementation, this would send data to your analytics service
    const eventData = {
      testId,
      variant,
      conversionType,
      userSegment,
      timestamp: new Date().toISOString(),
      userId: localStorage.getItem('user_id') || 'anonymous'
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('A/B Test Conversion:', eventData);
    }

    // Store locally for now (in production, send to analytics)
    const conversions = JSON.parse(localStorage.getItem('ab_conversions') || '[]');
    conversions.push(eventData);
    localStorage.setItem('ab_conversions', JSON.stringify(conversions.slice(-100))); // Keep last 100

    // TODO: Send to actual analytics service
    try {
      await fetch('/api/analytics/ab-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
      });
    } catch (error) {
      console.warn('Failed to send A/B test data:', error);
    }
  };

  return (
    <ABTestContext.Provider value={{ getVariant, trackConversion, userSegment }}>
      {children}
    </ABTestContext.Provider>
  );
}

// A/B Test Wrapper Component
export function ABTestWrapper({ 
  testId, 
  children, 
  fallback 
}: { 
  testId: string;
  children: (variant: string, props: any, trackConversion: (type: string) => void) => ReactNode;
  fallback?: ReactNode;
}) {
  const abTest = useABTest(testId);
  
  if (!AB_TESTS[testId]?.enabled) {
    return <>{fallback || children('control', {}, () => {})}</>;
  }

  return <>{children(abTest.variant, abTest.props, abTest.trackConversion)}</>;
}

// Specific A/B Test Components for Common Use Cases

// Hero CTA Button Test
export function HeroCTATest({ 
  onCTAClick, 
  className = '' 
}: { 
  onCTAClick: () => void;
  className?: string;
}) {
  return (
    <ABTestWrapper testId="hero-cta-text">
      {(variant, props, trackConversion) => (
        <button
          onClick={() => {
            trackConversion('cta_click');
            onCTAClick();
          }}
          className={`
            px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 min-h-[44px]
            ${variant === 'variant_a' ? 'bg-gold-600 hover:bg-gold-700 text-white' : 
              variant === 'variant_b' ? 'bg-burgundy-600 hover:bg-burgundy-700 text-white' :
              'bg-chili-600 hover:bg-chili-700 text-white'}
            ${className}
          `}
        >
          {props.text || 'Join Waitlist'}
        </button>
      )}
    </ABTestWrapper>
  );
}

// Trust Signals Test
export function TrustSignalsTest({ className = '' }: { className?: string }) {
  return (
    <ABTestWrapper testId="trust-signals">
      {(variant, props, trackConversion) => (
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}
          onClick={() => trackConversion('trust_signal_view')}
        >
          {variant === 'variant_a' ? (
            // UK-focused trust signals
            <>
              <div className="text-center p-3 rounded-lg bg-palm-50">
                <div className="text-2xl mb-1">🇬🇧</div>
                <div className="text-sm font-bold text-burgundy-900">UK Sourced</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-turmeric-50">
                <div className="text-2xl mb-1">📦</div>
                <div className="text-sm font-bold text-burgundy-900">Next Day</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-chili-50">
                <div className="text-2xl mb-1">🏆</div>
                <div className="text-sm font-bold text-burgundy-900">Award Winning</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-coconut-50">
                <div className="text-2xl mb-1">💂</div>
                <div className="text-sm font-bold text-burgundy-900">British Made</div>
              </div>
            </>
          ) : variant === 'variant_b' ? (
            // Cultural authority signals
            <>
              <div className="text-center p-3 rounded-lg bg-palm-50">
                <div className="text-2xl mb-1">👵</div>
                <div className="text-sm font-bold text-burgundy-900">Grandma's Recipe</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-turmeric-50">
                <div className="text-2xl mb-1">🏛️</div>
                <div className="text-sm font-bold text-burgundy-900">Authentic</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-chili-50">
                <div className="text-2xl mb-1">🌶️</div>
                <div className="text-sm font-bold text-burgundy-900">Traditional</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-coconut-50">
                <div className="text-2xl mb-1">🇮🇩</div>
                <div className="text-sm font-bold text-burgundy-900">From Indonesia</div>
              </div>
            </>
          ) : (
            // Standard trust signals
            <>
              <div className="text-center p-3 rounded-lg bg-palm-50">
                <div className="text-2xl mb-1">🌿</div>
                <div className="text-sm font-bold text-burgundy-900">All Natural</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-turmeric-50">
                <div className="text-2xl mb-1">⭐</div>
                <div className="text-sm font-bold text-burgundy-900">Premium</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-chili-50">
                <div className="text-2xl mb-1">🔥</div>
                <div className="text-sm font-bold text-burgundy-900">Authentic Heat</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-coconut-50">
                <div className="text-2xl mb-1">📦</div>
                <div className="text-sm font-bold text-burgundy-900">Free Delivery</div>
              </div>
            </>
          )}
        </div>
      )}
    </ABTestWrapper>
  );
}

// Development A/B Test Debug Panel
export function ABTestDebugPanel() {
  const context = useContext(ABTestContext);
  
  if (process.env.NODE_ENV !== 'development' || !context) {
    return null;
  }

  const [showPanel, setShowPanel] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-4 left-4 bg-purple-600 text-white p-2 rounded-full z-50 text-xs"
        title="Toggle A/B Test Debug Panel"
      >
        A/B
      </button>
      
      {showPanel && (
        <div className="fixed bottom-16 left-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 max-w-sm max-h-96 overflow-y-auto">
          <h3 className="font-bold mb-2">A/B Test Debug</h3>
          <p className="text-xs text-gray-600 mb-3">Segment: {context.userSegment}</p>
          
          {Object.entries(AB_TESTS).map(([testId, test]) => (
            <div key={testId} className="mb-3 p-2 border rounded">
              <div className="font-semibold text-sm">{test.name}</div>
              <div className="text-xs text-gray-600">
                Variant: {context.getVariant(testId)}
              </div>
              <div className="text-xs text-gray-500">
                Status: {test.enabled ? 'Active' : 'Disabled'}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}