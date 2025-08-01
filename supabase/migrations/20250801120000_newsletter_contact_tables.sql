-- Create newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT true,
    source VARCHAR(50) DEFAULT 'homepage',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'new', -- new, read, replied, archived
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_active ON newsletter_subscribers(is_active);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at);

-- Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for newsletter_subscribers
-- Allow anyone to insert (subscribe)
CREATE POLICY "Anyone can subscribe to newsletter" ON newsletter_subscribers
    FOR INSERT WITH CHECK (true);

-- Allow users to view their own subscription
CREATE POLICY "Users can view their own subscription" ON newsletter_subscribers
    FOR SELECT USING (email = auth.jwt() ->> 'email');

-- Allow authenticated users to update their own subscription
CREATE POLICY "Users can update their own subscription" ON newsletter_subscribers
    FOR UPDATE USING (email = auth.jwt() ->> 'email');

-- RLS Policies for contact_messages
-- Allow anyone to insert (send message)
CREATE POLICY "Anyone can send contact message" ON contact_messages
    FOR INSERT WITH CHECK (true);

-- Only authenticated admin users can view contact messages
-- (You'll need to set up admin roles separately)
CREATE POLICY "Admin can view contact messages" ON contact_messages
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM auth.users 
            WHERE auth.users.id = auth.uid() 
            AND auth.users.email = 'barooahn@gmail.com' -- Replace with your admin email
        )
    );

-- Grant permissions
GRANT SELECT, INSERT, UPDATE ON newsletter_subscribers TO authenticated;
GRANT SELECT, INSERT, UPDATE ON newsletter_subscribers TO anon;
GRANT SELECT, INSERT ON contact_messages TO authenticated;
GRANT SELECT, INSERT ON contact_messages TO anon;

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_newsletter_subscribers_updated_at 
    BEFORE UPDATE ON newsletter_subscribers 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_messages_updated_at 
    BEFORE UPDATE ON contact_messages 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
