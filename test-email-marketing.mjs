import { config } from 'dotenv';

// Load environment variables
config({ path: '.env.local' });

const API_BASE = 'http://localhost:3000';

// Test data
const testUser = {
  email: 'barooahn@gmail.com',
  firstName: 'Test',
  lastName: 'User'
};

// Test functions
async function testWelcomeEmailSequence() {
  console.log('\n🔥 Testing Welcome Email Sequence');
  console.log('=====================================');

  for (let emailNumber = 2; emailNumber <= 5; emailNumber++) {
    console.log(`\nSending Welcome Email ${emailNumber}...`);
    
    try {
      const response = await fetch(`${API_BASE}/api/email-campaigns`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'send_welcome_email',
          email: testUser.email,
          emailNumber: emailNumber,
          userData: testUser
        })
      });

      const result = await response.json();
      
      if (result.success) {
        console.log(`✅ Welcome Email ${emailNumber} sent successfully`);
        console.log(`   Message ID: ${result.messageId}`);
      } else {
        console.log(`❌ Welcome Email ${emailNumber} failed: ${result.message}`);
      }
    } catch (error) {
      console.error(`❌ Error sending Welcome Email ${emailNumber}:`, error.message);
    }

    // Wait 2 seconds between emails
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
}

async function testPromotionalEmails() {
  console.log('\n📢 Testing Promotional Emails');
  console.log('==============================');

  // Test Flash Sale Email
  console.log('\nSending Flash Sale Email...');
  try {
    const response = await fetch(`${API_BASE}/api/email-campaigns`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'send_promotional_email',
        email: testUser.email,
        campaignType: 'flash_sale',
        userData: testUser
      })
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Flash Sale Email sent successfully');
      console.log(`   Message ID: ${result.messageId}`);
    } else {
      console.log(`❌ Flash Sale Email failed: ${result.message}`);
    }
  } catch (error) {
    console.error('❌ Error sending Flash Sale Email:', error.message);
  }

  await new Promise(resolve => setTimeout(resolve, 2000));

  // Test New Product Email
  console.log('\nSending New Product Email...');
  try {
    const response = await fetch(`${API_BASE}/api/email-campaigns`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'send_promotional_email',
        email: testUser.email,
        campaignType: 'new_product',
        userData: testUser,
        campaignData: {
          productName: 'Sambal Matah Bali',
          productImage: 'https://www.spiceislandindonesia.com/images/sambal-matah.jpg'
        }
      })
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ New Product Email sent successfully');
      console.log(`   Message ID: ${result.messageId}`);
    } else {
      console.log(`❌ New Product Email failed: ${result.message}`);
    }
  } catch (error) {
    console.error('❌ Error sending New Product Email:', error.message);
  }
}

async function testBulkCampaign() {
  console.log('\n📋 Testing Bulk Campaign');
  console.log('=========================');

  const subscribers = [
    { email: 'barooahn@gmail.com', firstName: 'Test', lastName: 'User1' },
    // Add more test emails if available
  ];

  console.log(`Sending flash sale to ${subscribers.length} subscribers...`);
  
  try {
    const response = await fetch(`${API_BASE}/api/email-campaigns`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'send_bulk_campaign',
        campaignType: 'flash_sale',
        subscribers: subscribers,
        campaignData: {
          discountCode: 'BULK25'
        }
      })
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Bulk Campaign completed successfully');
      console.log(`   Sent: ${result.sent}, Failed: ${result.failed}`);
    } else {
      console.log(`❌ Bulk Campaign failed: ${result.message}`);
    }
  } catch (error) {
    console.error('❌ Error sending Bulk Campaign:', error.message);
  }
}

// Main test function
async function runEmailMarketingTests() {
  console.log('🚀 Email Marketing System Test Suite');
  console.log('====================================');
  
  try {
    // Test individual welcome emails
    await testWelcomeEmailSequence();
    
    // Test promotional emails
    await testPromotionalEmails();
    
    // Test bulk campaigns
    await testBulkCampaign();
    
    console.log('\n✅ All email marketing tests completed!');
    console.log('Check your inbox at barooahn@gmail.com for the test emails.');
    
  } catch (error) {
    console.error('\n❌ Test suite failed:', error);
  }
}

// Run the tests
runEmailMarketingTests();