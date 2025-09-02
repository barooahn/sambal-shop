'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/simple-button';
import { Progress } from '@/components/ui/simple-progress';
import { 
  Trophy, 
  Star, 
  Lock,
  CheckCircle2,
  Flame,
  Globe,
  BookOpen,
  Users,
  Target,
  Sparkles
} from '@/components/ui/icons';

interface AchievementBadge {
  id: number;
  badge_key: string;
  badge_name: string;
  description: string;
  icon: string;
  category: 'heat' | 'cultural' | 'recipes' | 'community' | 'milestones';
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  requirements: any;
  reward_type: 'discount' | 'points' | 'exclusive_content';
  reward_value: number;
  is_active: boolean;
}

interface CustomerBadge {
  id: number;
  badge_id: number;
  earned_at: string;
  is_displayed: boolean;
  achievement_badges: AchievementBadge;
}

interface UserProgress {
  quiz_completed: boolean;
  heat_tolerance: number;
  stories_shared: number;
  recipes_saved: number;
  community_interactions: number;
  cultural_content_engaged: number;
  journey_created: boolean;
}

interface AchievementBadgesProps {
  customerEmail: string;
  showProgress?: boolean;
  compact?: boolean;
}

const CATEGORY_ICONS = {
  heat: Flame,
  cultural: Globe,
  recipes: BookOpen,
  community: Users,
  milestones: Target
};

const RARITY_STYLES = {
  common: 'bg-gray-100 border-gray-300 text-gray-700',
  uncommon: 'bg-green-100 border-green-300 text-green-700',
  rare: 'bg-blue-100 border-blue-300 text-blue-700',
  legendary: 'bg-purple-100 border-purple-300 text-purple-700'
};

const RARITY_LABELS = {
  common: 'Common',
  uncommon: 'Uncommon', 
  rare: 'Rare',
  legendary: 'Legendary'
};

export default function AchievementBadges({ customerEmail, showProgress = false, compact = false }: AchievementBadgesProps) {
  const [earnedBadges, setEarnedBadges] = useState<CustomerBadge[]>([]);
  const [availableBadges, setAvailableBadges] = useState<AchievementBadge[]>([]);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const loadBadgesAndProgress = useCallback(async () => {
    try {
      // Load earned badges
      const earnedResponse = await fetch(`/api/customer-badges?email=${customerEmail}`);
      if (earnedResponse.ok) {
        const earnedData = await earnedResponse.json();
        if (earnedData.success) {
          setEarnedBadges(earnedData.badges || []);
        }
      }

      // Load available badges
      const availableResponse = await fetch('/api/achievements');
      if (availableResponse.ok) {
        const availableData = await availableResponse.json();
        if (availableData.success) {
          setAvailableBadges(availableData.achievements || []);
        }
      }

      // Load user progress if showing progress
      if (showProgress) {
        const progressResponse = await fetch(`/api/user-progress?email=${customerEmail}`);
        if (progressResponse.ok) {
          const progressData = await progressResponse.json();
          if (progressData.success) {
            setUserProgress(progressData.progress);
          }
        }
      }

    } catch (error) {
      console.error('Failed to load badges:', error);
      // Load mock data for demo
      setEarnedBadges(getMockEarnedBadges());
      setAvailableBadges(getMockAvailableBadges());
      if (showProgress) {
        setUserProgress(getMockUserProgress());
      }
    } finally {
      setLoading(false);
    }
  }, [customerEmail, showProgress]);

  useEffect(() => {
    loadBadgesAndProgress();
  }, [customerEmail, loadBadgesAndProgress]);

  const calculateProgress = (badge: AchievementBadge): { progress: number; isEarned: boolean; canEarn: boolean } => {
    if (!userProgress) return { progress: 0, isEarned: false, canEarn: false };

    const isEarned = earnedBadges.some(eb => eb.badge_id === badge.id);
    if (isEarned) return { progress: 100, isEarned: true, canEarn: false };

    const req = badge.requirements || {};
    let progress = 0;
    let canEarn = false;

    // Calculate progress based on requirements
    if (req.stories_shared) {
      progress = Math.min((userProgress.stories_shared / req.stories_shared) * 100, 100);
      canEarn = userProgress.stories_shared >= req.stories_shared;
    } else if (req.heat_levels_tried) {
      // Mock calculation - in real app, track different heat levels tried
      progress = Math.min((userProgress.heat_tolerance / 5) * 100, 100);
      canEarn = userProgress.heat_tolerance >= 3;
    } else if (req.max_heat_level) {
      progress = Math.min((userProgress.heat_tolerance / req.max_heat_level) * 100, 100);
      canEarn = userProgress.heat_tolerance >= req.max_heat_level;
    } else if (req.total_likes_received) {
      // Mock calculation
      progress = Math.min((userProgress.community_interactions * 10 / req.total_likes_received) * 100, 100);
      canEarn = (userProgress.community_interactions * 10) >= req.total_likes_received;
    } else if (req.recipes_saved) {
      progress = Math.min((userProgress.recipes_saved / req.recipes_saved) * 100, 100);
      canEarn = userProgress.recipes_saved >= req.recipes_saved;
    }

    return { progress: Math.round(progress), isEarned, canEarn };
  };

  const filteredBadges = availableBadges.filter(badge => 
    selectedCategory === 'all' || badge.category === selectedCategory
  );

  const categories = [
    { key: 'all', label: 'All Badges', icon: Trophy },
    { key: 'heat', label: 'Heat Master', icon: Flame },
    { key: 'cultural', label: 'Cultural', icon: Globe },
    { key: 'recipes', label: 'Recipes', icon: BookOpen },
    { key: 'community', label: 'Community', icon: Users },
    { key: 'milestones', label: 'Milestones', icon: Target }
  ];

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="flex flex-wrap gap-2">
        {earnedBadges.slice(0, 6).map((earnedBadge) => (
          <div
            key={earnedBadge.id}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${RARITY_STYLES[earnedBadge.achievement_badges.rarity]}`}
          >
            <span>{earnedBadge.achievement_badges.icon}</span>
            <span>{earnedBadge.achievement_badges.badge_name}</span>
          </div>
        ))}
        {earnedBadges.length > 6 && (
          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-gray-100 border border-gray-300 text-gray-700">
            <Sparkles className="w-3 h-3" />
            +{earnedBadges.length - 6} more
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Button
              key={category.key}
              variant={selectedCategory === category.key ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.key)}
              className={selectedCategory === category.key ? "bg-burgundy-600 hover:bg-burgundy-700" : ""}
            >
              <IconComponent className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          );
        })}
      </div>

      {/* Earned Badges Count */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-gold-600" />
          <span className="font-semibold text-burgundy-900">
            {earnedBadges.length} of {availableBadges.length} Badges Earned
          </span>
        </div>
        <Badge className="bg-gold-100 text-gold-800">
          {Math.round((earnedBadges.length / availableBadges.length) * 100)}% Complete
        </Badge>
      </div>

      {/* Progress Overview */}
      {showProgress && userProgress && (
        <Card className="bg-gradient-to-r from-burgundy-50 to-gold-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Target className="w-5 h-5 mr-2 text-burgundy-600" />
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-burgundy-700">{userProgress.stories_shared}</div>
                <div className="text-sm text-gray-600">Stories Shared</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-burgundy-700">{userProgress.heat_tolerance}</div>
                <div className="text-sm text-gray-600">Heat Level</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-burgundy-700">{userProgress.community_interactions}</div>
                <div className="text-sm text-gray-600">Interactions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-burgundy-700">{userProgress.recipes_saved}</div>
                <div className="text-sm text-gray-600">Recipes Saved</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBadges.map((badge) => {
          const { progress, isEarned, canEarn } = showProgress ? calculateProgress(badge) : { progress: 0, isEarned: earnedBadges.some(eb => eb.badge_id === badge.id), canEarn: false };
          const CategoryIcon = CATEGORY_ICONS[badge.category] || Target;

          return (
            <Card key={badge.id} className={`relative overflow-hidden ${isEarned ? 'border-gold-300 bg-gold-50' : 'border-gray-200'}`}>
              {isEarned && (
                <div className="absolute top-2 right-2">
                  <CheckCircle2 className="w-6 h-6 text-gold-600" />
                </div>
              )}

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isEarned ? 'bg-gold-100' : 'bg-gray-100'}`}>
                      <span className="text-2xl">{badge.icon}</span>
                    </div>
                    <div>
                      <CardTitle className={`text-lg ${isEarned ? 'text-gold-800' : 'text-gray-600'}`}>
                        {badge.badge_name}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge className={RARITY_STYLES[badge.rarity]} variant="outline">
                          {RARITY_LABELS[badge.rarity]}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <CategoryIcon className="w-3 h-3" />
                          {badge.category}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <CardDescription className={isEarned ? 'text-gold-700' : 'text-gray-600'}>
                  {badge.description}
                </CardDescription>

                {/* Progress Bar */}
                {showProgress && !isEarned && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}

                {/* Reward */}
                <div className={`flex items-center justify-between text-sm ${isEarned ? 'text-gold-700' : 'text-gray-600'}`}>
                  <span>Reward:</span>
                  <span className="font-medium">
                    {badge.reward_type === 'discount' && `${badge.reward_value}% off`}
                    {badge.reward_type === 'points' && `${badge.reward_value} points`}
                    {badge.reward_type === 'exclusive_content' && 'Exclusive content'}
                  </span>
                </div>

                {/* Earned Date */}
                {isEarned && (
                  <div className="text-xs text-gold-600 bg-gold-100 rounded px-2 py-1">
                    Earned {new Date(earnedBadges.find(eb => eb.badge_id === badge.id)?.earned_at || '').toLocaleDateString()}
                  </div>
                )}

                {/* Can Earn Soon */}
                {showProgress && !isEarned && canEarn && (
                  <div className="text-xs text-green-600 bg-green-100 rounded px-2 py-1">
                    ✨ Ready to claim!
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredBadges.length === 0 && (
        <div className="text-center py-8">
          <Trophy className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">No badges in this category yet.</p>
        </div>
      )}
    </div>
  );
}

// Mock data functions
function getMockEarnedBadges(): CustomerBadge[] {
  return [
    {
      id: 1,
      badge_id: 1,
      earned_at: "2025-08-20T10:00:00Z",
      is_displayed: true,
      achievement_badges: {
        id: 1,
        badge_key: "first_story",
        badge_name: "Storyteller",
        description: "Share your first cooking story with the community",
        icon: "📖",
        category: "community",
        rarity: "common",
        requirements: { stories_shared: 1 },
        reward_type: "discount",
        reward_value: 10,
        is_active: true
      }
    }
  ];
}

function getMockAvailableBadges(): AchievementBadge[] {
  return [
    {
      id: 1,
      badge_key: "first_story",
      badge_name: "Storyteller",
      description: "Share your first cooking story with the community",
      icon: "📖",
      category: "community",
      rarity: "common",
      requirements: { stories_shared: 1 },
      reward_type: "discount",
      reward_value: 10,
      is_active: true
    },
    {
      id: 2,
      badge_key: "heat_explorer",
      badge_name: "Heat Explorer",
      description: "Try 3 different heat levels",
      icon: "🌶️",
      category: "heat",
      rarity: "common",
      requirements: { heat_levels_tried: 3 },
      reward_type: "points",
      reward_value: 50,
      is_active: true
    },
    {
      id: 3,
      badge_key: "spice_master",
      badge_name: "Spice Master",
      description: "Reach heat level 5 and share your experience",
      icon: "🔥",
      category: "heat",
      rarity: "rare",
      requirements: { max_heat_level: 5, stories_shared: 1 },
      reward_type: "discount",
      reward_value: 15,
      is_active: true
    }
  ];
}

function getMockUserProgress(): UserProgress {
  return {
    quiz_completed: true,
    heat_tolerance: 3,
    stories_shared: 1,
    recipes_saved: 0,
    community_interactions: 2,
    cultural_content_engaged: 1,
    journey_created: true
  };
}