-- Create feedback table
CREATE TABLE IF NOT EXISTS feedback (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    overall_rating VARCHAR(10) NOT NULL,
    heat_level VARCHAR(10),
    would_recommend VARCHAR(50),
    comments TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert feedback
CREATE POLICY "Anyone can insert feedback" ON feedback
    FOR INSERT WITH CHECK (true);

-- Allow select for authenticated users (optional, adjust as needed)
CREATE POLICY "Authenticated users can select feedback" ON feedback
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create updated_at trigger function if not exists
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_feedback_updated_at 
    BEFORE UPDATE ON feedback 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
