#!/usr/bin/env tsx

// Script to test all backend connections for data collection forms
// Run with: npm run test:backend or npx tsx scripts/test-backend-connections.ts

import { testBackendConnections } from '../lib/enhanced-actions';

async function main() {
  console.log('🔍 Testing Backend Connections for Data Collection Forms...\n');

  // Test environment variables
  console.log('📋 Environment Variables Check:');
  console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing');
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing');
  console.log('NEXT_PUBLIC_CONVERTKIT_API_KEY:', process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY ? '✅ Set' : '❌ Missing');
  console.log('NEXT_PUBLIC_CONVERTKIT_FORM_ID:', process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID ? '✅ Set' : '❌ Missing');
  console.log('NEXT_PUBLIC_MAILCHIMP_API_KEY:', process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY ? '✅ Set' : '❌ Missing');
  console.log('NEXT_PUBLIC_MAILCHIMP_LIST_ID:', process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID ? '✅ Set' : '❌ Missing');
  console.log('NEXT_PUBLIC_FORMSPREE_ENDPOINT:', process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ? '✅ Set' : '❌ Missing');
  console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY ? '✅ Set' : '❌ Missing');
  console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? '✅ Set' : '❌ Missing');
  console.log();

  // Test backend connections
  try {
    console.log('🌐 Testing Backend Service Connections...');
    const results = await testBackendConnections();

    console.log(`Newsletter Service: ${results.newsletter ? '✅ Connected' : '❌ Failed'}`);
    console.log(`Contact Service: ${results.contact ? '✅ Connected' : '❌ Failed'}`);
    console.log(`Supabase Database: ${results.supabase ? '✅ Connected' : '❌ Failed'}`);
    console.log();

    // Test individual services
    await testConvertKitConnection();
    await testMailchimpConnection();
    await testFormspreeConnection();
    await testSupabaseConnection();
    await testLocalAPIRoutes();

    console.log('✅ Backend connection testing completed!');
    console.log('\n📝 Recommendations:');
    
    if (!results.newsletter && !results.contact && !results.supabase) {
      console.log('⚠️  No backend services are currently connected. Forms will use simulation mode.');
      console.log('   Consider setting up at least one service for production use.');
    }

    if (!results.newsletter) {
      console.log('📧 Newsletter: Consider setting up ConvertKit or Mailchimp for email collection.');
    }

    if (!results.contact) {
      console.log('📞 Contact: Consider setting up Formspree or email service for contact forms.');
    }

    if (!results.supabase) {
      console.log('📊 Database: Consider setting up Supabase for interest tracking.');
    }

  } catch (error) {
    console.error('❌ Error testing backend connections:', error);
    process.exit(1);
  }
}

async function testConvertKitConnection() {
  const apiKey = process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY;
  const formId = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    console.log('ConvertKit: ⚪ Not configured (API key or form ID missing)');
    return;
  }

  try {
    const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}?api_key=${apiKey}`);
    if (response.ok) {
      console.log('ConvertKit: ✅ Connected and form accessible');
    } else {
      console.log('ConvertKit: ❌ Connection failed or invalid credentials');
    }
  } catch (error) {
    console.log('ConvertKit: ❌ Connection error');
  }
}

async function testMailchimpConnection() {
  const apiKey = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY || process.env.MAILCHIMP_API_KEY;
  const listId = process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID || process.env.MAILCHIMP_LIST_ID;

  if (!apiKey || !listId) {
    console.log('Mailchimp: ⚪ Not configured (API key or list ID missing)');
    return;
  }

  try {
    const datacenter = apiKey.split('-')[1];
    const response = await fetch(`https://${datacenter}.api.mailchimp.com/3.0/lists/${listId}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      }
    });
    
    if (response.ok) {
      console.log('Mailchimp: ✅ Connected and list accessible');
    } else {
      console.log('Mailchimp: ❌ Connection failed or invalid credentials');
    }
  } catch (error) {
    console.log('Mailchimp: ❌ Connection error');
  }
}

async function testFormspreeConnection() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  if (!endpoint) {
    console.log('Formspree: ⚪ Not configured (endpoint missing)');
    return;
  }

  try {
    const response = await fetch(endpoint, {
      method: 'OPTIONS',
    });
    
    if (response.ok || response.status === 405) { // 405 Method Not Allowed is expected for OPTIONS
      console.log('Formspree: ✅ Endpoint accessible');
    } else {
      console.log('Formspree: ❌ Endpoint not accessible');
    }
  } catch (error) {
    console.log('Formspree: ❌ Connection error');
  }
}

async function testSupabaseConnection() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.log('Supabase: ⚪ Not configured (URL or key missing)');
    return;
  }

  try {
    // Dynamic import to avoid issues if @supabase/supabase-js is not installed
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(url, key);
    
    // Test connection by trying to select from product_interest table
    const { error } = await supabase.from('product_interest').select('id').limit(1);
    
    if (!error) {
      console.log('Supabase: ✅ Connected and product_interest table accessible');
    } else {
      console.log('Supabase: ❌ Connection failed or table not accessible:', error.message);
    }
  } catch (error) {
    console.log('Supabase: ❌ Connection error or client not installed');
  }
}

async function testLocalAPIRoutes() {
  console.log('\n🔗 Testing Local API Routes:');
  
  // Test contact API
  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'OPTIONS',
    });
    console.log('Contact API (/api/contact):', response.ok ? '✅ Available' : '❌ Not available');
  } catch (error) {
    console.log('Contact API (/api/contact): ⚪ Server not running or route not available');
  }

  // Test Mailchimp subscribe API
  try {
    const response = await fetch('http://localhost:3000/api/mailchimp-subscribe', {
      method: 'OPTIONS',
    });
    console.log('Mailchimp API (/api/mailchimp-subscribe):', response.ok ? '✅ Available' : '❌ Not available');
  } catch (error) {
    console.log('Mailchimp API (/api/mailchimp-subscribe): ⚪ Server not running or route not available');
  }
}

// Run the test if this file is executed directly
if (require.main === module) {
  main().catch(console.error);
}

export { main as testBackendConnections };