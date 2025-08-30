import { NextRequest, NextResponse } from 'next/server';
import { sendMonthlyRecipeNewsletter, sendBulkMonthlyNewsletter } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { mode, customData } = await request.json();
    
    console.log('🧪 Testing Monthly Recipe Newsletter...');

    // Sample newsletter data
    const defaultNewsletterData = {
      recipeName: 'Indonesian Sambal Fried Rice (Nasi Goreng Sambal)',
      recipeImage: 'https://www.spiceislandindonesia.com/images/nasi-goreng-sambal.webp',
      featuredSambal: 'Sambal Oelek',
      monthYear: new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
      culturalStory: 'Fried rice, or "nasi goreng," is Indonesia\'s national dish and a perfect canvas for sambal\'s complex flavors. Street vendors across Jakarta have perfected this recipe over generations, using day-old rice and authentic sambal to create the distinctive "wok hei" smoky flavor that defines great Indonesian cooking.'
    };

    const newsletterData = customData ? { ...defaultNewsletterData, ...customData } : defaultNewsletterData;

    if (mode === 'single' || !mode) {
      // Send to single test recipient
      const result = await sendMonthlyRecipeNewsletter({
        email: 'barooahn@gmail.com',
        firstName: 'John',
        ...newsletterData
      });

      if (result.success) {
        return NextResponse.json({
          success: true,
          message: 'Monthly recipe newsletter sent successfully!',
          recipient: 'barooahn@gmail.com',
          newsletterContent: {
            recipeName: newsletterData.recipeName,
            featuredSambal: newsletterData.featuredSambal,
            monthYear: newsletterData.monthYear
          },
          features: [
            'Full recipe with ingredients and step-by-step instructions',
            'Cultural story and background',
            'Chef Yossie\'s secret tips and techniques',
            'UK ingredient substitutions and adaptations',
            'Featured sambal product promotion',
            'Community sharing encouragement',
            'Next month recipe preview'
          ]
        });
      } else {
        return NextResponse.json({
          success: false,
          message: 'Failed to send newsletter',
          error: result.error
        }, { status: 500 });
      }
    }

    if (mode === 'bulk') {
      // Send to multiple test recipients
      const testSubscribers = [
        { email: 'barooahn@gmail.com', firstName: 'John' },
        { email: 'test@spiceislandindonesia.com', firstName: 'Test User' },
        // Add more test emails if needed
      ];

      const results = await sendBulkMonthlyNewsletter(testSubscribers, newsletterData);

      return NextResponse.json({
        success: results.success,
        message: results.success ? 'Bulk newsletter sent successfully!' : 'Some newsletters failed to send',
        statistics: {
          total: testSubscribers.length,
          sent: results.sent,
          failed: results.failed
        },
        errors: results.errors,
        newsletterContent: {
          recipeName: newsletterData.recipeName,
          featuredSambal: newsletterData.featuredSambal,
          monthYear: newsletterData.monthYear,
          culturalStory: newsletterData.culturalStory.substring(0, 100) + '...'
        }
      });
    }

  } catch (error) {
    console.error('💥 Error in newsletter test:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Newsletter test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Monthly Recipe Newsletter Test Endpoint',
    usage: {
      single_newsletter: 'POST with {"mode": "single"} - sends to one test recipient',
      bulk_newsletter: 'POST with {"mode": "bulk"} - sends to multiple test recipients',
      custom_content: 'POST with {"mode": "single", "customData": {...}} - override default content'
    },
    newsletter_features: {
      content_sections: [
        'Recipe of the month header with current date',
        'Cultural story and dish background',
        'Complete recipe with ingredients (serves 4)',
        'Step-by-step Chef Yossie method',
        'Professional cooking secrets and tips',
        'UK ingredient substitutions',
        'Featured sambal product promotion',
        'Community sharing encouragement',
        'Next month recipe preview'
      ],
      customization_options: {
        recipeName: 'Featured recipe name',
        recipeImage: 'Recipe hero image URL',
        featuredSambal: 'Sambal variety to promote',
        monthYear: 'Newsletter month and year',
        culturalStory: 'Cultural background story'
      }
    },
    automation_notes: {
      scheduling: 'Recommend sending on 1st of each month',
      personalization: 'Includes subscriber first name when available',
      rate_limiting: 'Built-in 100ms delay between bulk sends',
      tracking: 'Email includes unsubscribe links and branding'
    }
  });
}