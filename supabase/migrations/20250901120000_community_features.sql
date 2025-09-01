-- Community Features Database Schema
-- This migration adds tables for interactive tools and customer-to-customer engagement

-- Customer Quiz Assessments
CREATE TABLE IF NOT EXISTS customer_assessments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    heat_tolerance INTEGER CHECK (heat_tolerance >= 1 AND heat_tolerance <= 5),
    cuisine_experience VARCHAR(50) CHECK (cuisine_experience IN ('never-tried', 'curious-beginner', 'occasional-cook', 'experienced', 'enthusiast')),
    flavor_preferences JSONB, -- Array of selected flavor profiles
    cooking_frequency VARCHAR(20) CHECK (cooking_frequency IN ('rarely', 'weekly', 'few-times-week', 'daily')),
    uk_ingredient_access VARCHAR(30) CHECK (uk_ingredient_access IN ('supermarket-only', 'some-asian-shops', 'full-access')),
    primary_goal VARCHAR(30) CHECK (primary_goal IN ('authentic-taste', 'gradual-heat-building', 'fusion-cooking', 'cultural-learning')),
    dietary_restrictions JSONB, -- Array of dietary considerations
    recommendations JSONB, -- Generated product recommendations
    quiz_completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_agent TEXT,
    ip_address VARCHAR(45),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customer Stories & Recipe Sharing
CREATE TABLE IF NOT EXISTS customer_stories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255), -- Optional for follow-up
    story_title VARCHAR(255) NOT NULL,
    story_content TEXT NOT NULL,
    recipe_shared TEXT, -- Optional recipe content
    photos JSONB, -- Array of photo URLs/metadata
    heat_level INTEGER CHECK (heat_level >= 1 AND heat_level <= 5),
    product_used VARCHAR(255), -- Which sambal product was used
    cooking_occasion VARCHAR(100), -- dinner party, family meal, etc.
    fusion_type VARCHAR(100), -- british-indonesian, traditional, etc.
    featured BOOLEAN DEFAULT FALSE, -- Admin can feature stories
    approved BOOLEAN DEFAULT FALSE, -- Moderation system
    likes_count INTEGER DEFAULT 0,
    shares_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    featured_at TIMESTAMP WITH TIME ZONE
);

-- Customer Story Photos (separate table for better organization)
CREATE TABLE IF NOT EXISTS story_photos (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    story_id UUID REFERENCES customer_stories(id) ON DELETE CASCADE,
    photo_url TEXT NOT NULL,
    alt_text TEXT,
    caption TEXT,
    upload_order INTEGER DEFAULT 0, -- Order for display
    is_featured BOOLEAN DEFAULT FALSE, -- Main photo for the story
    file_size INTEGER, -- In bytes
    dimensions JSONB, -- {width, height}
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Community Interactions (likes, comments, shares)
CREATE TABLE IF NOT EXISTS community_interactions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    customer_email VARCHAR(255), -- Anonymous interactions allowed
    customer_name VARCHAR(255), -- Display name for interaction
    interaction_type VARCHAR(20) CHECK (interaction_type IN ('like', 'share', 'comment', 'helpful', 'tried_recipe')) NOT NULL,
    target_type VARCHAR(20) CHECK (target_type IN ('story', 'recipe', 'review', 'comment')) NOT NULL,
    target_id UUID NOT NULL, -- References customer_stories.id or other content
    comment_text TEXT, -- For comment interactions
    metadata JSONB, -- Additional data like sharing platform, etc.
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Spice Journey Tracking (gamification)
CREATE TABLE IF NOT EXISTS spice_journeys (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    customer_email VARCHAR(255) NOT NULL,
    customer_name VARCHAR(255),
    current_heat_level INTEGER DEFAULT 1 CHECK (current_heat_level >= 1 AND current_heat_level <= 5),
    max_heat_achieved INTEGER DEFAULT 1 CHECK (max_heat_achieved >= 1 AND max_heat_achieved <= 5),
    products_tried JSONB, -- Array of product names/IDs tried
    milestones_achieved JSONB, -- Array of achievement badges earned
    total_recipes_tried INTEGER DEFAULT 0,
    journey_started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_activity_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Ensure unique journey per customer
    UNIQUE(customer_email)
);

-- Achievement Badges System
CREATE TABLE IF NOT EXISTS achievement_badges (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    badge_key VARCHAR(50) UNIQUE NOT NULL, -- e.g., 'first_taste', 'heat_warrior', 'fusion_master'
    badge_name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    icon VARCHAR(50), -- emoji or icon identifier
    category VARCHAR(30) CHECK (category IN ('heat', 'cultural', 'recipes', 'community', 'milestones')),
    rarity VARCHAR(20) CHECK (rarity IN ('common', 'uncommon', 'rare', 'legendary')) DEFAULT 'common',
    requirements JSONB, -- Conditions to earn the badge
    reward_type VARCHAR(30), -- discount, early_access, etc.
    reward_value VARCHAR(100), -- specific reward details
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customer Badge Achievements
CREATE TABLE IF NOT EXISTS customer_badges (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    customer_email VARCHAR(255) NOT NULL,
    badge_id UUID REFERENCES achievement_badges(id) ON DELETE CASCADE,
    earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    progress_data JSONB, -- How they achieved it
    is_displayed BOOLEAN DEFAULT TRUE, -- Customer can hide badges
    
    -- Prevent duplicate badges
    UNIQUE(customer_email, badge_id)
);

-- Recipe Collections (curated and user-generated)
CREATE TABLE IF NOT EXISTS recipe_collections (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    collection_name VARCHAR(255) NOT NULL,
    description TEXT,
    collection_type VARCHAR(30) CHECK (collection_type IN ('curated', 'user_generated', 'seasonal', 'beginner')) DEFAULT 'curated',
    curator_name VARCHAR(255), -- Chef Yossie, customer name, etc.
    curator_email VARCHAR(255),
    is_featured BOOLEAN DEFAULT FALSE,
    is_public BOOLEAN DEFAULT TRUE,
    recipe_count INTEGER DEFAULT 0,
    total_likes INTEGER DEFAULT 0,
    difficulty_level VARCHAR(20) CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
    estimated_time_minutes INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Recipe Collection Items
CREATE TABLE IF NOT EXISTS recipe_collection_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    collection_id UUID REFERENCES recipe_collections(id) ON DELETE CASCADE,
    recipe_title VARCHAR(255) NOT NULL,
    recipe_content TEXT NOT NULL,
    ingredients JSONB, -- Structured ingredient list
    instructions JSONB, -- Step-by-step instructions
    prep_time_minutes INTEGER,
    cook_time_minutes INTEGER,
    servings INTEGER,
    heat_level INTEGER CHECK (heat_level >= 1 AND heat_level <= 5),
    sambal_products JSONB, -- Which sambals to use
    tags JSONB, -- breakfast, dinner, fusion, traditional, etc.
    photos JSONB, -- Recipe photos
    customer_notes TEXT, -- Personal modifications/tips
    difficulty VARCHAR(20) CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
    success_rate DECIMAL(3,2), -- Based on customer feedback (0.00 to 1.00)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_customer_assessments_heat_tolerance ON customer_assessments(heat_tolerance);
CREATE INDEX IF NOT EXISTS idx_customer_assessments_experience ON customer_assessments(cuisine_experience);
CREATE INDEX IF NOT EXISTS idx_customer_assessments_completed_at ON customer_assessments(quiz_completed_at);

CREATE INDEX IF NOT EXISTS idx_customer_stories_featured ON customer_stories(featured);
CREATE INDEX IF NOT EXISTS idx_customer_stories_approved ON customer_stories(approved);
CREATE INDEX IF NOT EXISTS idx_customer_stories_heat_level ON customer_stories(heat_level);
CREATE INDEX IF NOT EXISTS idx_customer_stories_created_at ON customer_stories(created_at);
CREATE INDEX IF NOT EXISTS idx_customer_stories_likes ON customer_stories(likes_count DESC);

CREATE INDEX IF NOT EXISTS idx_story_photos_story_id ON story_photos(story_id);
CREATE INDEX IF NOT EXISTS idx_story_photos_featured ON story_photos(is_featured);

CREATE INDEX IF NOT EXISTS idx_community_interactions_target ON community_interactions(target_type, target_id);
CREATE INDEX IF NOT EXISTS idx_community_interactions_type ON community_interactions(interaction_type);
CREATE INDEX IF NOT EXISTS idx_community_interactions_created_at ON community_interactions(created_at);

CREATE INDEX IF NOT EXISTS idx_spice_journeys_customer_email ON spice_journeys(customer_email);
CREATE INDEX IF NOT EXISTS idx_spice_journeys_heat_level ON spice_journeys(current_heat_level);

CREATE INDEX IF NOT EXISTS idx_customer_badges_customer ON customer_badges(customer_email);
CREATE INDEX IF NOT EXISTS idx_customer_badges_earned_at ON customer_badges(earned_at);

CREATE INDEX IF NOT EXISTS idx_recipe_collections_featured ON recipe_collections(is_featured);
CREATE INDEX IF NOT EXISTS idx_recipe_collections_public ON recipe_collections(is_public);
CREATE INDEX IF NOT EXISTS idx_recipe_collections_type ON recipe_collections(collection_type);

-- Enable Row Level Security
ALTER TABLE customer_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE customer_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE story_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE spice_journeys ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievement_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE customer_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipe_collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipe_collection_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Customer Assessments: Anonymous insertion, admin viewing
CREATE POLICY "Anyone can submit quiz results" ON customer_assessments
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin can view assessments" ON customer_assessments
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM auth.users WHERE auth.users.id = auth.uid() AND auth.users.email = 'barooahn@gmail.com')
    );

-- Customer Stories: Public viewing of approved stories, anyone can submit
CREATE POLICY "Anyone can view approved stories" ON customer_stories
    FOR SELECT USING (approved = true);

CREATE POLICY "Anyone can submit stories" ON customer_stories
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin can manage all stories" ON customer_stories
    FOR ALL USING (
        EXISTS (SELECT 1 FROM auth.users WHERE auth.users.id = auth.uid() AND auth.users.email = 'barooahn@gmail.com')
    );

-- Story Photos: Follow parent story permissions
CREATE POLICY "Anyone can view photos of approved stories" ON story_photos
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM customer_stories WHERE customer_stories.id = story_photos.story_id AND customer_stories.approved = true)
    );

CREATE POLICY "Anyone can upload story photos" ON story_photos
    FOR INSERT WITH CHECK (true);

-- Community Interactions: Public viewing, anyone can interact
CREATE POLICY "Anyone can view interactions" ON community_interactions
    FOR SELECT WITH CHECK (true);

CREATE POLICY "Anyone can add interactions" ON community_interactions
    FOR INSERT WITH CHECK (true);

-- Spice Journeys: Customers can manage their own journey
CREATE POLICY "Customers can view their own journey" ON spice_journeys
    FOR SELECT USING (customer_email = auth.jwt() ->> 'email' OR customer_email IS NULL);

CREATE POLICY "Anyone can create spice journey" ON spice_journeys
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Customers can update their own journey" ON spice_journeys
    FOR UPDATE USING (customer_email = auth.jwt() ->> 'email');

-- Achievement Badges: Public viewing
CREATE POLICY "Anyone can view badges" ON achievement_badges
    FOR SELECT WITH CHECK (is_active = true);

-- Customer Badges: Customers can view their own badges, public display
CREATE POLICY "Anyone can view displayed badges" ON customer_badges
    FOR SELECT USING (is_displayed = true);

CREATE POLICY "Anyone can earn badges" ON customer_badges
    FOR INSERT WITH CHECK (true);

-- Recipe Collections: Public viewing of public collections
CREATE POLICY "Anyone can view public collections" ON recipe_collections
    FOR SELECT USING (is_public = true);

CREATE POLICY "Anyone can create collections" ON recipe_collections
    FOR INSERT WITH CHECK (true);

-- Recipe Collection Items: Follow parent collection permissions
CREATE POLICY "Anyone can view public recipe items" ON recipe_collection_items
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM recipe_collections WHERE recipe_collections.id = recipe_collection_items.collection_id AND recipe_collections.is_public = true)
    );

CREATE POLICY "Anyone can add recipe items" ON recipe_collection_items
    FOR INSERT WITH CHECK (true);

-- Grant permissions
GRANT SELECT, INSERT ON customer_assessments TO authenticated;
GRANT SELECT, INSERT ON customer_assessments TO anon;

GRANT SELECT, INSERT ON customer_stories TO authenticated;
GRANT SELECT, INSERT ON customer_stories TO anon;

GRANT SELECT, INSERT ON story_photos TO authenticated;
GRANT SELECT, INSERT ON story_photos TO anon;

GRANT SELECT, INSERT ON community_interactions TO authenticated;
GRANT SELECT, INSERT ON community_interactions TO anon;

GRANT SELECT, INSERT, UPDATE ON spice_journeys TO authenticated;
GRANT SELECT, INSERT, UPDATE ON spice_journeys TO anon;

GRANT SELECT ON achievement_badges TO authenticated;
GRANT SELECT ON achievement_badges TO anon;

GRANT SELECT, INSERT ON customer_badges TO authenticated;
GRANT SELECT, INSERT ON customer_badges TO anon;

GRANT SELECT, INSERT ON recipe_collections TO authenticated;
GRANT SELECT, INSERT ON recipe_collections TO anon;

GRANT SELECT, INSERT ON recipe_collection_items TO authenticated;
GRANT SELECT, INSERT ON recipe_collection_items TO anon;

-- Create updated_at triggers
CREATE TRIGGER update_customer_stories_updated_at 
    BEFORE UPDATE ON customer_stories 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_spice_journeys_updated_at 
    BEFORE UPDATE ON spice_journeys 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_recipe_collections_updated_at 
    BEFORE UPDATE ON recipe_collections 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_recipe_collection_items_updated_at 
    BEFORE UPDATE ON recipe_collection_items 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample achievement badges
INSERT INTO achievement_badges (badge_key, badge_name, description, icon, category, requirements) VALUES
('first_taste', 'First Taste', 'Completed your first sambal quiz', '🌱', 'milestones', '{"quiz_completed": true}'),
('heat_seeker', 'Heat Seeker', 'Comfortable with heat level 4+', '🔥', 'heat', '{"min_heat_tolerance": 4}'),
('fusion_master', 'Fusion Master', 'Shared a British-Indonesian fusion recipe', '🇬🇧🇮🇩', 'recipes', '{"fusion_recipe_shared": true}'),
('community_champion', 'Community Champion', 'Helped 10+ other customers with likes/comments', '⭐', 'community', '{"helpful_interactions": 10}'),
('cultural_bridge', 'Cultural Bridge', 'Learned about Indonesian food culture', '🌉', 'cultural', '{"cultural_content_engagement": 5}'),
('spice_journey_starter', 'Spice Journey Starter', 'Started tracking your heat tolerance journey', '🚀', 'milestones', '{"journey_created": true}'),
('recipe_collector', 'Recipe Collector', 'Saved 5+ recipes to your collection', '📚', 'recipes', '{"recipes_saved": 5}'),
('storyteller', 'Storyteller', 'Shared your sambal cooking story', '✍️', 'community', '{"story_shared": true}')
ON CONFLICT (badge_key) DO NOTHING;