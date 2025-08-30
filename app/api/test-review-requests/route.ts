import { NextRequest, NextResponse } from 'next/server';
import { startQuickReviewTest, triggerReviewRequest, exampleReviewRequestData, scheduleReviewRequestFromOrder } from '@/lib/review-automation';

export async function POST(request: NextRequest) {
  try {
    const { mode, orderData } = await request.json();
    
    console.log('🧪 Testing Review Request Automation...');

    if (mode === 'quick' || !mode) {
      // Quick test mode - sends both emails with 5 and 15-second intervals
      console.log('🚀 Starting QUICK test sequence (5 and 15-second intervals)...');
      
      await startQuickReviewTest(exampleReviewRequestData);
      
      return NextResponse.json({
        success: true,
        message: 'Quick review request test started!',
        mode: 'quick_test',
        schedule: {
          initialRequest: '5 seconds (7 days after delivery in production)',
          followUp: '15 seconds (14 days after delivery in production)'
        },
        reviewData: {
          email: exampleReviewRequestData.email,
          orderNumber: exampleReviewRequestData.orderNumber,
          incentiveCode: exampleReviewRequestData.reviewIncentive
        },
        emailFeatures: {
          initialRequest: [
            'Multiple review platform options (Google, Trustpilot, Facebook)',
            'Photo upload encouragement for social proof',
            '£5 discount incentive (REVIEW5 code)',
            'Easy 5-step review process guide',
            'Personal thank you from Chef Yossie'
          ],
          followUp: [
            'Simplified one-click experience options',
            'Handles positive, neutral, and negative experiences',
            'Final chance messaging with same incentive',
            'Customer support routing for issues'
          ]
        }
      });
    }
    
    if (mode === 'production') {
      // Production mode - uses real timing (7 days and 14 days after delivery)
      console.log('📊 Starting PRODUCTION review sequence (real timing)...');
      
      await triggerReviewRequest(exampleReviewRequestData);
      
      return NextResponse.json({
        success: true,
        message: 'Production review request sequence started!',
        mode: 'production',
        schedule: {
          initialRequest: '7 days after delivery',
          followUp: '14 days after delivery (if no response)'
        },
        reviewData: {
          email: exampleReviewRequestData.email,
          orderNumber: exampleReviewRequestData.orderNumber,
          incentiveCode: 'REVIEW5'
        }
      });
    }

    if (mode === 'from_order') {
      // Test integration with order completion
      const testOrderData = orderData || {
        customerEmail: 'barooahn@gmail.com',
        customerName: 'John Smith',
        orderNumber: '#ORD-2025-TEST',
        estimatedDeliveryDays: 3
      };

      await scheduleReviewRequestFromOrder(testOrderData);

      return NextResponse.json({
        success: true,
        message: 'Review requests scheduled from order completion!',
        mode: 'order_integration',
        orderData: testOrderData,
        timeline: {
          orderDate: 'Today',
          estimatedDelivery: `${testOrderData.estimatedDeliveryDays || 3} days`,
          reviewRequest: `${7 + (testOrderData.estimatedDeliveryDays || 3)} days (7 days after delivery)`,
          followUp: `${14 + (testOrderData.estimatedDeliveryDays || 3)} days (14 days after delivery)`
        },
        integration_note: 'This can be automatically triggered from your Stripe webhook'
      });
    }

  } catch (error) {
    console.error('💥 Error in review request test:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Review request test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Review Request Automation Test Endpoint',
    usage: {
      quick_test: 'POST with {"mode": "quick"} - sends both emails with 5-15 second intervals',
      production_test: 'POST with {"mode": "production"} - uses real timing (7-14 days)',
      order_integration: 'POST with {"mode": "from_order"} - simulates order completion trigger'
    },
    review_sequence: {
      timing: {
        trigger: 'Automatically triggered 7 days after estimated delivery',
        followUp: '7 days after initial request if no response',
        rationale: 'Gives customers time to use the product and have an opinion'
      },
      email_features: {
        initial_request: [
          'Multiple review platform choices (Google, Trustpilot, Facebook)',
          'Photo upload encouragement for authentic social proof',
          '£5 discount code incentive (REVIEW5)',
          'Step-by-step review process guide',
          'Personal appeal from Chef Yossie'
        ],
        follow_up: [
          'Simplified experience-based options',
          'Positive/Neutral/Negative experience routing',
          'Customer service integration for issues',
          'Final incentive opportunity',
          'Clear finale messaging'
        ]
      }
    },
    integration_points: {
      stripe_webhook: 'Add scheduleReviewRequestFromOrder() to order confirmation webhook',
      delivery_tracking: 'Trigger on actual delivery confirmation for accuracy',
      review_platforms: 'Update Google Business and Trustpilot URLs with actual links',
      discount_codes: 'Configure REVIEW5 code in your payment system'
    },
    expected_results: {
      response_rate: '20-30% of customers typically leave reviews',
      timing_optimization: '7-day delay balances product experience with memory freshness',
      social_proof_boost: 'Photo uploads significantly increase review credibility',
      seo_benefits: 'Google reviews directly impact local search ranking'
    }
  });
}