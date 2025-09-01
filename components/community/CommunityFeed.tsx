'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Heart, 
  Share2, 
  MessageCircle, 
  ChefHat, 
  Clock, 
  Flame,
  Star,
  Users,
  TrendingUp,
  Filter,
  Search,
  Camera,
  BookOpen,
  Award
} from 'lucide-react';
import { HeatLevelBadge } from '@/components/ui/SpiceHeatIndicator';
import { toast } from 'sonner';

interface StoryPhoto {
  photo_url: string;
  alt_text: string;
  caption?: string;
  is_featured: boolean;
  upload_order: number;
}

interface CustomerStory {
  id: string;
  customer_name: string;
  story_title: string;
  story_content: string;
  recipe_shared?: string;
  heat_level: 1 | 2 | 3 | 4 | 5;
  product_used: string;
  cooking_occasion: string;
  fusion_type: string;
  featured: boolean;
  likes_count: number;
  shares_count: number;
  created_at: string;
  story_photos: StoryPhoto[];
}

interface CommunityFeedProps {
  initialStories?: CustomerStory[];
  showFeaturedOnly?: boolean;
  showFilters?: boolean;
  maxStories?: number;
}

const FUSION_TYPE_LABELS: Record<string, string> = {
  'traditional': 'Traditional Indonesian',
  'british-fusion': 'British-Indonesian Fusion',
  'creative-experiment': 'Creative Experiment',
  'family-adaptation': 'Family Recipe'
};

const OCCASION_EMOJIS: Record<string, string> = {
  'family-dinner': '👨‍👩‍👧‍👦',
  'date-night': '💕',
  'dinner-party': '🎉',
  'quick-weeknight': '⚡',
  'sunday-roast': '🥩',
  'meal-prep': '📦',
  'special-occasion': '🎊',
  'trying-new-recipe': '🆕'
};

export default function CommunityFeed({ 
  initialStories = [], 
  showFeaturedOnly = false, 
  showFilters = true, 
  maxStories = 20 
}: CommunityFeedProps) {
  const [stories, setStories] = useState<CustomerStory[]>(initialStories);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'featured' | 'recent' | 'popular'>('all');
  const [heatFilter, setHeatFilter] = useState<number | null>(null);
  const [fusionFilter, setFusionFilter] = useState<string>('');

  // Load stories from API if not provided
  useEffect(() => {
    if (initialStories.length === 0) {
      loadStories();
    }
  }, [filter, heatFilter, fusionFilter]);

  const loadStories = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        featured: showFeaturedOnly ? 'true' : 'false',
        limit: maxStories.toString(),
        offset: '0'
      });

      const response = await fetch(`/api/customer-stories?${params}`);
      const result = await response.json();

      if (result.success) {
        let filteredStories = result.stories;

        // Apply client-side filters
        if (heatFilter) {
          filteredStories = filteredStories.filter((story: CustomerStory) => 
            story.heat_level === heatFilter
          );
        }

        if (fusionFilter) {
          filteredStories = filteredStories.filter((story: CustomerStory) => 
            story.fusion_type === fusionFilter
          );
        }

        // Apply sorting
        switch (filter) {
          case 'featured':
            filteredStories = filteredStories.filter((story: CustomerStory) => story.featured);
            break;
          case 'popular':
            filteredStories.sort((a: CustomerStory, b: CustomerStory) => 
              (b.likes_count + b.shares_count) - (a.likes_count + a.shares_count)
            );
            break;
          case 'recent':
          default:
            filteredStories.sort((a: CustomerStory, b: CustomerStory) => 
              new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
            );
        }

        setStories(filteredStories);
      }
    } catch (error) {
      console.error('Failed to load stories:', error);
      toast.error('Failed to load community stories');
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (storyId: string) => {
    try {
      // Optimistically update UI
      setStories(prev => 
        prev.map(story => 
          story.id === storyId 
            ? { ...story, likes_count: story.likes_count + 1 }
            : story
        )
      );

      // Send to API
      await fetch('/api/community-interactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          interaction_type: 'like',
          target_type: 'story',
          target_id: storyId
        })
      });

    } catch (error) {
      // Revert optimistic update on error
      setStories(prev => 
        prev.map(story => 
          story.id === storyId 
            ? { ...story, likes_count: Math.max(0, story.likes_count - 1) }
            : story
        )
      );
      toast.error('Failed to like story');
    }
  };

  const handleShare = async (story: CustomerStory) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: story.story_title,
          text: `Check out ${story.customer_name}'s sambal cooking story!`,
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
      }

      // Update share count
      setStories(prev => 
        prev.map(s => 
          s.id === story.id 
            ? { ...s, shares_count: s.shares_count + 1 }
            : s
        )
      );

      // Track share
      await fetch('/api/community-interactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          interaction_type: 'share',
          target_type: 'story',
          target_id: story.id
        })
      });

    } catch (error) {
      toast.error('Failed to share story');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-GB', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const renderStoryCard = (story: CustomerStory) => {
    const featuredPhoto = story.story_photos?.find(photo => photo.is_featured) || story.story_photos?.[0];

    return (
      <Card key={story.id} className={`shadow-lg hover:shadow-xl transition-all duration-300 ${
        story.featured ? 'border-gold-300 bg-gradient-to-br from-gold-50/30 to-burgundy-50/30' : 'border-burgundy-200'
      }`}>
        {story.featured && (
          <div className="bg-gradient-to-r from-gold-600 to-burgundy-600 text-white px-4 py-2 text-sm font-medium flex items-center justify-center">
            <Star className="w-4 h-4 mr-1" />
            Featured Community Story
          </div>
        )}

        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarFallback className="bg-burgundy-100 text-burgundy-700 font-bold">
                  {story.customer_name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg text-burgundy-900">{story.story_title}</CardTitle>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="font-medium">{story.customer_name}</span>
                  <span>•</span>
                  <span>{formatDate(story.created_at)}</span>
                  {OCCASION_EMOJIS[story.cooking_occasion] && (
                    <>
                      <span>•</span>
                      <span>{OCCASION_EMOJIS[story.cooking_occasion]}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <HeatLevelBadge heatLevel={story.heat_level} />
              <Badge variant="outline" className="text-xs">
                {FUSION_TYPE_LABELS[story.fusion_type] || story.fusion_type}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Featured Photo */}
          {featuredPhoto && (
            <div className="relative">
              <img 
                src={featuredPhoto.photo_url}
                alt={featuredPhoto.alt_text}
                className="w-full h-64 object-cover rounded-lg"
              />
              {story.story_photos && story.story_photos.length > 1 && (
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center">
                  <Camera className="w-3 h-3 mr-1" />
                  {story.story_photos.length}
                </div>
              )}
            </div>
          )}

          {/* Product Used */}
          <div className="flex items-center space-x-2 bg-burgundy-50 px-3 py-2 rounded-lg">
            <ChefHat className="w-4 h-4 text-burgundy-600" />
            <span className="text-sm font-medium text-burgundy-800">Made with {story.product_used}</span>
          </div>

          {/* Story Content */}
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {story.story_content.length > 300 
                ? `${story.story_content.substring(0, 300)}...`
                : story.story_content
              }
            </p>
          </div>

          {/* Recipe Section */}
          {story.recipe_shared && (
            <div className="bg-cream-50 border-l-4 border-burgundy-600 p-4 rounded-r-lg">
              <div className="flex items-center mb-2">
                <BookOpen className="w-4 h-4 mr-2 text-burgundy-600" />
                <span className="font-semibold text-burgundy-800">Recipe Shared</span>
              </div>
              <p className="text-sm text-gray-700">
                {story.recipe_shared.length > 150
                  ? `${story.recipe_shared.substring(0, 150)}...`
                  : story.recipe_shared
                }
              </p>
            </div>
          )}

          <Separator />

          {/* Interaction Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLike(story.id)}
                className="text-gray-600 hover:text-red-600"
              >
                <Heart className="w-4 h-4 mr-1" />
                {story.likes_count}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleShare(story)}
                className="text-gray-600 hover:text-blue-600"
              >
                <Share2 className="w-4 h-4 mr-1" />
                {story.shares_count}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600"
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                Comment
              </Button>
            </div>

            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>5 min read</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-burgundy-900 mb-4">
          Community Stories
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real stories from our UK customers sharing their Indonesian cooking adventures
        </p>
      </div>

      {/* Filters */}
      {showFilters && (
        <Card className="shadow-md border-burgundy-200">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filter Stories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Sort Filter */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Sort by
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: 'all', label: 'All Stories', icon: Users },
                    { key: 'featured', label: 'Featured', icon: Star },
                    { key: 'recent', label: 'Recent', icon: Clock },
                    { key: 'popular', label: 'Popular', icon: TrendingUp }
                  ].map(({ key, label, icon: Icon }) => (
                    <Button
                      key={key}
                      variant={filter === key ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFilter(key as any)}
                      className={filter === key ? 'bg-burgundy-600' : ''}
                    >
                      <Icon className="w-3 h-3 mr-1" />
                      {label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Heat Level Filter */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Heat Level
                </label>
                <div className="flex flex-wrap gap-1">
                  <Button
                    variant={heatFilter === null ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setHeatFilter(null)}
                    className={heatFilter === null ? 'bg-burgundy-600' : ''}
                  >
                    All
                  </Button>
                  {[1, 2, 3, 4, 5].map(level => (
                    <Button
                      key={level}
                      variant={heatFilter === level ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setHeatFilter(level)}
                      className={heatFilter === level ? 'bg-burgundy-600' : ''}
                    >
                      <Flame className="w-3 h-3 mr-1" />
                      {level}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Fusion Type Filter */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Cooking Style
                </label>
                <select
                  value={fusionFilter}
                  onChange={(e) => setFusionFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="">All Styles</option>
                  {Object.entries(FUSION_TYPE_LABELS).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stories Grid */}
      {loading ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="shadow-lg animate-pulse">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="w-32 h-4 bg-gray-200 rounded"></div>
                    <div className="w-24 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 bg-gray-200 rounded-lg mb-4"></div>
                <div className="space-y-2">
                  <div className="w-full h-4 bg-gray-200 rounded"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : stories.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto bg-burgundy-100 rounded-full flex items-center justify-center mb-4">
            <Users className="w-10 h-10 text-burgundy-600" />
          </div>
          <h3 className="text-xl font-semibold text-burgundy-900 mb-2">
            No stories yet
          </h3>
          <p className="text-gray-600 mb-6">
            Be the first to share your sambal cooking adventure!
          </p>
          <Button 
            onClick={() => window.location.href = '/community/share-story'}
            className="bg-burgundy-600 hover:bg-burgundy-700"
          >
            <Award className="w-4 h-4 mr-2" />
            Share Your Story
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stories.map(renderStoryCard)}
        </div>
      )}

      {/* Load More Button */}
      {stories.length > 0 && stories.length >= maxStories && (
        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={loadStories}
            disabled={loading}
            className="border-burgundy-600 text-burgundy-600 hover:bg-burgundy-50"
          >
            {loading ? (
              <>Loading more stories...</>
            ) : (
              <>Load More Stories</>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}