-- Community Features Migration
-- Creates tables for customer stories, achievements, badges, and community interactions

-- Customer heat/spice assessments and quiz results
CREATE TABLE IF NOT EXISTS customer_assessments (
    id SERIAL PRIMARY KEY,
    customer_email VARCHAR(255),
    heat_tolerance INTEGER CHECK (heat_tolerance >= 1 AND heat_tolerance <= 5) DEFAULT 3,
    cuisine_experience TEXT,
    flavor_preferences TEXT[],
    cooking_frequency TEXT,
    uk_ingredient_access BOOLEAN DEFAULT true,
    primary_goals TEXT[],
    quiz_completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customer stories and experiences
CREATE TABLE IF NOT EXISTS customer_stories (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255),
    story_title VARCHAR(255) NOT NULL,
    story_content TEXT NOT NULL,
    recipe_shared TEXT,
    heat_level INTEGER CHECK (heat_level >= 1 AND heat_level <= 5) DEFAULT 3,
    product_used VARCHAR(255),
    cooking_occasion VARCHAR(100),
    fusion_type VARCHAR(100),
    allow_featuring BOOLEAN DEFAULT false,
    approved BOOLEAN DEFAULT false,
    featured BOOLEAN DEFAULT false,
    likes_count INTEGER DEFAULT 0,
    shares_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    approved_at TIMESTAMP WITH TIME ZONE,
    featured_at TIMESTAMP WITH TIME ZONE
);

-- Photos associated with customer stories
CREATE TABLE IF NOT EXISTS story_photos (
    id SERIAL PRIMARY KEY,
    story_id INTEGER REFERENCES customer_stories(id) ON DELETE CASCADE,
    photo_url TEXT NOT NULL,
    storage_path TEXT,
    caption TEXT,
    display_order INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Community interactions (likes, shares, comments)
CREATE TABLE IF NOT EXISTS community_interactions (
    id SERIAL PRIMARY KEY,
    customer_email VARCHAR(255),
    story_id INTEGER REFERENCES customer_stories(id) ON DELETE CASCADE,
    interaction_type VARCHAR(50) CHECK (interaction_type IN ('like', 'share', 'comment')),
    comment_text TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(customer_email, story_id, interaction_type)
);

-- Spice journeys and customer progression
CREATE TABLE IF NOT EXISTS spice_journeys (
    id SERIAL PRIMARY KEY,
    customer_email VARCHAR(255) NOT NULL,
    current_heat_level INTEGER CHECK (current_heat_level >= 1 AND current_heat_level <= 5) DEFAULT 1,
    journey_start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    products_tried TEXT[],
    milestones_reached TEXT[],
    notes TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Achievement badges definition
CREATE TABLE IF NOT EXISTS achievement_badges (
    id SERIAL PRIMARY KEY,
    badge_key VARCHAR(100) UNIQUE NOT NULL,
    badge_name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    icon VARCHAR(100),
    category VARCHAR(50) CHECK (category IN ('heat', 'cultural', 'recipes', 'community', 'milestones')),
    rarity VARCHAR(20) CHECK (rarity IN ('common', 'uncommon', 'rare', 'legendary')) DEFAULT 'common',
    requirements JSONB,
    reward_type VARCHAR(50) CHECK (reward_type IN ('discount', 'points', 'exclusive_content')),
    reward_value INTEGER,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customer earned badges
CREATE TABLE IF NOT EXISTS customer_badges (
    id SERIAL PRIMARY KEY,
    customer_email VARCHAR(255) NOT NULL,
    badge_id INTEGER REFERENCES achievement_badges(id),
    earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_displayed BOOLEAN DEFAULT true,
    UNIQUE(customer_email, badge_id)
);

-- Recipe collections (for future expansion)
CREATE TABLE IF NOT EXISTS recipe_collections (
    id SERIAL PRIMARY KEY,
    collection_name VARCHAR(255) NOT NULL,
    description TEXT,
    created_by VARCHAR(255),
    is_public BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_customer_stories_email ON customer_stories(customer_email);
CREATE INDEX IF NOT EXISTS idx_customer_stories_approved ON customer_stories(approved, created_at);
CREATE INDEX IF NOT EXISTS idx_customer_stories_featured ON customer_stories(featured, featured_at);
CREATE INDEX IF NOT EXISTS idx_story_photos_story_id ON story_photos(story_id);
CREATE INDEX IF NOT EXISTS idx_community_interactions_story ON community_interactions(story_id);
CREATE INDEX IF NOT EXISTS idx_community_interactions_customer ON community_interactions(customer_email);
CREATE INDEX IF NOT EXISTS idx_customer_badges_email ON customer_badges(customer_email);
CREATE INDEX IF NOT EXISTS idx_spice_journeys_email ON spice_journeys(customer_email);

-- RLS Policies
ALTER TABLE customer_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE customer_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE story_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE spice_journeys ENABLE ROW LEVEL SECURITY;
ALTER TABLE customer_badges ENABLE ROW LEVEL SECURITY;

-- Public read access for approved stories
CREATE POLICY "Public can read approved stories" ON customer_stories
FOR SELECT USING (approved = true);

-- Users can read their own data
CREATE POLICY "Users can read own assessments" ON customer_assessments
FOR SELECT USING (true);

CREATE POLICY "Users can insert assessments" ON customer_assessments
FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can read own stories" ON customer_stories
FOR SELECT USING (true);

CREATE POLICY "Users can insert stories" ON customer_stories
FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can read story photos" ON story_photos
FOR SELECT USING (true);

CREATE POLICY "Users can insert story photos" ON story_photos
FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can read interactions" ON community_interactions
FOR SELECT USING (true);

CREATE POLICY "Users can insert interactions" ON community_interactions
FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can read own journey" ON spice_journeys
FOR SELECT USING (true);

CREATE POLICY "Users can insert/update journey" ON spice_journeys
FOR ALL WITH CHECK (true);

CREATE POLICY "Users can read own badges" ON customer_badges
FOR SELECT USING (true);

CREATE POLICY "Users can insert badges" ON customer_badges
FOR INSERT WITH CHECK (true);

-- Achievement badges - public read
ALTER TABLE achievement_badges ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read active badges" ON achievement_badges
FOR SELECT USING (is_active = true);

-- Insert default achievement badges
INSERT INTO achievement_badges (badge_key, badge_name, description, icon, category, rarity, requirements, reward_type, reward_value) VALUES
('first_story', 'Storyteller', 'Share your first cooking story with the community', '📖', 'community', 'common', '{"stories_shared": 1}', 'discount', 10),
('heat_explorer', 'Heat Explorer', 'Try 3 different heat levels', '🌶️', 'heat', 'common', '{"heat_levels_tried": 3}', 'points', 50),
('spice_master', 'Spice Master', 'Reach heat level 5 and share your experience', '🔥', 'heat', 'rare', '{"max_heat_level": 5, "stories_shared": 1}', 'discount', 15),
('cultural_ambassador', 'Cultural Ambassador', 'Share traditional Indonesian cooking methods', '🇮🇩', 'cultural', 'uncommon', '{"traditional_recipes_shared": 1}', 'exclusive_content', 1),
('recipe_collector', 'Recipe Collector', 'Save 10 community recipes', '📚', 'recipes', 'common', '{"recipes_saved": 10}', 'points', 100),
('community_champion', 'Community Champion', 'Get 50 likes on your stories', '⭐', 'community', 'rare', '{"total_likes_received": 50}', 'discount', 20),
('fusion_innovator', 'Fusion Innovator', 'Create and share 3 fusion recipes', '✨', 'recipes', 'uncommon', '{"fusion_recipes_shared": 3}', 'points', 150),
('spice_journey_complete', 'Spice Journey Master', 'Complete your personal spice journey', '🎯', 'milestones', 'legendary', '{"journey_completed": true}', 'discount', 25),
('early_adopter', 'Early Adopter', 'One of the first 100 community members', '🚀', 'milestones', 'rare', '{"early_member": true}', 'exclusive_content', 1),
('sambal_scholar', 'Sambal Scholar', 'Try all sambal varieties and share reviews', '🎓', 'cultural', 'legendary', '{"all_products_tried": true, "reviews_shared": 5}', 'discount', 30)
ON CONFLICT (badge_key) DO NOTHING;