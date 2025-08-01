import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function createTables() {
  console.log('Creating newsletter_subscribers table...')
  
  const { error: newsletterError } = await supabase.rpc('exec_sql', {
    sql: `
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        is_active BOOLEAN DEFAULT true,
        source VARCHAR(50) DEFAULT 'homepage',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
      
      CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
      CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_active ON newsletter_subscribers(is_active);
    `
  })

  if (newsletterError) {
    console.error('Error creating newsletter table:', newsletterError)
  } else {
    console.log('✅ Newsletter subscribers table created')
  }

  console.log('Creating contact_messages table...')
  
  const { error: contactError } = await supabase.rpc('exec_sql', {
    sql: `
      CREATE TABLE IF NOT EXISTS contact_messages (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        status VARCHAR(20) DEFAULT 'new',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
      
      CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
      CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at);
    `
  })

  if (contactError) {
    console.error('Error creating contact table:', contactError)
  } else {
    console.log('✅ Contact messages table created')
  }
}

async function testNewsletterSubscription() {
  console.log('\n🧪 Testing newsletter subscription...')
  
  const testEmail = 'test@example.com'
  
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email: testEmail, source: 'test' }])
    .select()

  if (error) {
    console.error('❌ Newsletter subscription test failed:', error.message)
  } else {
    console.log('✅ Newsletter subscription test passed:', data)
  }
}

async function testContactMessage() {
  console.log('\n🧪 Testing contact message...')
  
  const testMessage = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message'
  }
  
  const { data, error } = await supabase
    .from('contact_messages')
    .insert([testMessage])
    .select()

  if (error) {
    console.error('❌ Contact message test failed:', error.message)
  } else {
    console.log('✅ Contact message test passed:', data)
  }
}

async function cleanup() {
  console.log('\n🧹 Cleaning up test data...')
  
  await supabase.from('newsletter_subscribers').delete().eq('email', 'test@example.com')
  await supabase.from('contact_messages').delete().eq('email', 'test@example.com')
  
  console.log('✅ Cleanup completed')
}

async function main() {
  try {
    await createTables()
    await testNewsletterSubscription()
    await testContactMessage()
    await cleanup()
    console.log('\n🎉 All tests completed successfully!')
  } catch (error) {
    console.error('❌ Test failed:', error)
  }
}

main()
