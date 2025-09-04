import { NextRequest, NextResponse } from 'next/server';
import { 
  startWinBackCampaign, 
  startWinBackQuickTest, 
  identifyInactiveCustomers,
  runBulkWinBackCampaign,
  exampleInactiveCustomerData,
  winBackCampaignConfig,
  WinBackCampaignManager
} from '@/lib/winback-campaign';

export async function POST(request: NextRequest) {
  try {
    const { mode, customerData, inactiveCustomers } = await request.json();
    
    console.log('🧪 Testing Win-back Campaign System...');

    if (mode === 'quick' || !mode) {
      // Quick test mode - sends 3 emails with 30-second intervals
      const testCustomer = customerData || exampleInactiveCustomerData;
      console.log('🚀 Starting QUICK test sequence (30-60 second intervals)...');
      
      await startWinBackQuickTest(testCustomer);
      
      // Calculate reactivation score for test customer
      const manager = new WinBackCampaignManager(testCustomer);
      const reactivationScore = manager.getReactivationScore();
      
      return NextResponse.json({
        success: true,
        message: 'Quick win-back campaign test started!',
        mode: 'quick_test',
        schedule: {
          email1: '0 seconds (immediate)',
          email2: '30 seconds',
          email3: '60 seconds'
        },
        testCustomer: {
          email: testCustomer.email,
          monthsInactive: testCustomer.monthsInactive,
          lastPurchaseDate: testCustomer.lastPurchaseDate.toLocaleDateString(),
          reactivationScore: reactivationScore
        },
        emailSequence: {
          email1: 'We Miss You + What\'s New',
          email2: 'Exclusive 20% Welcome Back Discount',
          email3: 'Feedback Request + Final 25% Off'
        },
        configuration: winBackCampaignConfig
      });
    }
    
    if (mode === 'production') {
      // Production mode - uses real timing (immediate, 7 days, 14 days)
      const testCustomer = customerData || exampleInactiveCustomerData;
      console.log('📊 Starting PRODUCTION win-back campaign...');
      
      await startWinBackCampaign(testCustomer);
      
      return NextResponse.json({
        success: true,
        message: 'Production win-back campaign started!',
        mode: 'production',
        schedule: {
          email1: 'Immediate',
          email2: '7 days',
          email3: '14 days'
        },
        customer: {
          email: testCustomer.email,
          monthsInactive: testCustomer.monthsInactive,
          estimatedValue: testCustomer.totalSpent || 'Unknown'
        },
        expectedResults: winBackCampaignConfig.expectedResults
      });
    }

    if (mode === 'identify_inactive') {
      // Simulate identifying inactive customers from database
      const mockCustomers = [
        {
          email: 'customer1@example.com',
          firstName: 'Sarah',
          lastPurchaseDate: new Date('2023-12-15'), // ~10 months ago
          totalPurchases: 2,
          totalSpent: 35.50,
          favoriteProduct: 'Sambal Bali',
          customerSince: new Date('2023-08-01')
        },
        {
          email: 'customer2@example.com', 
          firstName: 'Mike',
          lastPurchaseDate: new Date('2024-01-20'), // ~8 months ago
          totalPurchases: 4,
          totalSpent: 78.20,
          favoriteProduct: 'Sambal Oelek',
          customerSince: new Date('2023-10-15')
        },
        {
          email: 'customer3@example.com',
          firstName: 'Emma',
          lastPurchaseDate: new Date('2024-02-28'), // ~7 months ago
          totalPurchases: 1,
          totalSpent: 15.99,
          customerSince: new Date('2024-02-28')
        }
      ];

      const inactiveCustomers = identifyInactiveCustomers(mockCustomers, 6);
      
      return NextResponse.json({
        success: true,
        message: 'Inactive customers identified!',
        mode: 'identify_inactive',
        criteria: {
          inactiveThreshold: '6+ months',
          totalCustomersScanned: mockCustomers.length,
          inactiveCustomersFound: inactiveCustomers.length
        },
        inactiveCustomers: inactiveCustomers.map(customer => ({
          email: customer.email,
          monthsInactive: customer.monthsInactive,
          lastPurchaseDate: customer.lastPurchaseDate.toLocaleDateString(),
          totalSpent: customer.totalSpent,
          priority: new WinBackCampaignManager(customer).getReactivationScore().category
        })),
        nextStep: 'Run bulk win-back campaign for these customers'
      });
    }

    if (mode === 'bulk_campaign') {
      // Run bulk win-back campaign for multiple customers
      const customers = inactiveCustomers || [
        exampleInactiveCustomerData,
        {
          ...exampleInactiveCustomerData,
          email: 'test2@example.com',
          firstName: 'Sarah',
          monthsInactive: 8
        }
      ];

      console.log(`📧 Starting bulk win-back campaign for ${customers.length} customers...`);
      
      const results = await runBulkWinBackCampaign(customers);
      
      return NextResponse.json({
        success: true,
        message: 'Bulk win-back campaign completed!',
        mode: 'bulk_campaign',
        results: {
          campaignsStarted: results.started,
          campaignsFailed: results.failed,
          totalCustomers: customers.length
        },
        timeline: {
          email1: 'Sent immediately to all customers',
          email2: 'Will be sent in 7 days',
          email3: 'Will be sent in 14 days'
        },
        errors: results.errors.length > 0 ? results.errors : undefined
      });
    }

  } catch (error) {
    console.error('💥 Error in win-back campaign test:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Win-back campaign test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Win-back Campaign System Test Endpoint',
    description: 'Re-engage customers inactive for 6+ months with 3-email sequence',
    usage: {
      quick_test: 'POST with {"mode": "quick"} - sends 3 emails with 30-60 second intervals',
      production_campaign: 'POST with {"mode": "production"} - uses real timing (immediate, 7d, 14d)',
      identify_inactive: 'POST with {"mode": "identify_inactive"} - finds inactive customers',
      bulk_campaign: 'POST with {"mode": "bulk_campaign"} - runs campaign for multiple customers'
    },
    campaign_strategy: {
      trigger: 'Customers with no purchase in 6+ months',
      sequence: [
        {
          email: 1,
          timing: 'Immediate',
          focus: 'Reconnection & What\'s New',
          tone: 'Warm, no pressure'
        },
        {
          email: 2, 
          timing: '7 days later',
          focus: 'Exclusive 20% Comeback Discount',
          tone: 'Generous appreciation'
        },
        {
          email: 3,
          timing: '14 days after first email',
          focus: 'Feedback Request + Final 25% Off',
          tone: 'Understanding & helpful'
        }
      ]
    },
    reactivation_scoring: {
      factors: [
        'Previous purchase history (repeat vs single)',
        'Total amount spent (high/medium/low value)',
        'Time since last purchase (recently vs long inactive)',
        'Customer tenure (loyal vs new customer)'
      ],
      categories: [
        'High Priority (80+ score): Very likely to return',
        'Medium Priority (60-79): Likely to return', 
        'Low Priority (40-59): Possibly will return',
        'Monitor Only (<40): Unlikely to return'
      ]
    },
    personalization_features: {
      customer_data: 'First name, purchase history, favorite products',
      dynamic_content: 'Time away, loyalty status, spending amount',
      progressive_incentives: '0% → 20% → 25% discount progression',
      emotional_connection: 'Chef Yossie personal messages',
      respectful_exit: 'Easy unsubscribe and feedback collection'
    },
    integration_points: {
      customer_database: 'Query customers by last purchase date',
      purchase_history: 'Track favorite products and spending patterns',
      segmentation: 'Prioritize by reactivation score',
      feedback_system: 'Collect improvement suggestions',
      discount_codes: 'Configure WELCOME20 and FEEDBACK25 codes'
    },
    expected_results: winBackCampaignConfig.expectedResults,
    best_practices: winBackCampaignConfig.bestPractices
  });
}