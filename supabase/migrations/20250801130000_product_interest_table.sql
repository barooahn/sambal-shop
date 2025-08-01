-- Create product interest table for tracking likes/interest
CREATE TABLE IF NOT EXISTS product_interest (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    identifier VARCHAR(255) NOT NULL, -- Simple identifier to prevent duplicates
    source VARCHAR(50) DEFAULT 'hero_waitlist', -- Where the interest came from
    user_agent TEXT, -- Browser info for analytics
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_product_interest_identifier ON product_interest(identifier);
CREATE INDEX IF NOT EXISTS idx_product_interest_source ON product_interest(source);
CREATE INDEX IF NOT EXISTS idx_product_interest_created_at ON product_interest(created_at);

-- Enable Row Level Security
ALTER TABLE product_interest ENABLE ROW LEVEL SECURITY;

-- RLS Policy - Allow anyone to insert (record interest)
CREATE POLICY "Anyone can record interest" ON product_interest
    FOR INSERT WITH CHECK (true);

-- RLS Policy - Allow reading for analytics (you might want to restrict this)
CREATE POLICY "Allow reading interest data" ON product_interest
    FOR SELECT USING (true);
