'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Trophy, 
  Star, 
  Flame, 
  Heart, 
  ChefHat, 
  Users, 
  BookOpen, 
  Award,
  Lock,
  Sparkles,
  Target,
  Crown,
  Zap,
  Gift
} from 'lucide-react';
import { toast } from 'sonner';

interface Achievement {
  id: string;
  badge_key: string;
  badge_name: string;
  description: string;
  icon: string;
  category: 'heat' | 'cultural' | 'recipes' | 'community' | 'milestones';
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  requirements: Record<string, any>;
  reward_type?: string;
  reward_value?: string;
  is_active: boolean;
}

interface CustomerBadge {
  id: string;
  badge_id: string;
  earned_at: string;
  progress_data: Record<string, any>;
  is_displayed: boolean;
  achievement: Achievement;
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
  customerEmail?: string;
  showProgress?: boolean;
  displayMode?: 'earned' | 'available' | 'all';
  compact?: boolean;
}

const CATEGORY_ICONS = {
  heat: Flame,
  cultural: Heart,
  recipes: BookOpen,
  community: Users,
  milestones: Trophy
};

const RARITY_COLORS = {
  common: 'bg-slate-100 border-slate-300 text-slate-700',
  uncommon: 'bg-green-100 border-green-300 text-green-700',
  rare: 'bg-blue-100 border-blue-300 text-blue-700',
  legendary: 'bg-purple-100 border-purple-300 text-purple-700'
};

const RARITY_GLOW = {
  common: '',
  uncommon: 'shadow-green-200',
  rare: 'shadow-blue-200',
  legendary: 'shadow-purple-200 animate-pulse'
};

export default function AchievementBadges({ 
  customerEmail, 
  showProgress = true, 
  displayMode = 'all',
  compact = false 
}: AchievementBadgesProps) {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [earnedBadges, setEarnedBadges] = useState<CustomerBadge[]>([]);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    quiz_completed: false,
    heat_tolerance: 1,
    stories_shared: 0,
    recipes_saved: 0,
    community_interactions: 0,
    cultural_content_engaged: 0,
    journey_created: false
  });
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    loadAchievements();
    if (customerEmail) {
      loadEarnedBadges();
      loadUserProgress();
    }
  }, [customerEmail]);

  const loadAchievements = async () => {
    try {
      const response = await fetch('/api/achievements');
      const result = await response.json();
      
      if (result.success) {
        setAchievements(result.achievements);
      }
    } catch (error) {
      console.error('Failed to load achievements:', error);
    }
  };

  const loadEarnedBadges = async () => {
    if (!customerEmail) return;

    try {
      const response = await fetch(`/api/customer-badges?email=${encodeURIComponent(customerEmail)}`);
      const result = await response.json();
      
      if (result.success) {
        setEarnedBadges(result.badges);
      }
    } catch (error) {
      console.error('Failed to load earned badges:', error);
    }
  };

  const loadUserProgress = async () => {
    if (!customerEmail) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/user-progress?email=${encodeURIComponent(customerEmail)}`);
      const result = await response.json();
      
      if (result.success) {
        setUserProgress(result.progress);
      }
    } catch (error) {
      console.error('Failed to load user progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkBadgeEligibility = (achievement: Achievement): { eligible: boolean; progress: number; missing: string[] } => {
    const requirements = achievement.requirements;
    let eligible = true;
    let progress = 0;
    const missing: string[] = [];
    const totalRequirements = Object.keys(requirements).length;

    if (requirements.quiz_completed && !userProgress.quiz_completed) {
      eligible = false;
      missing.push('Complete the sambal quiz');
    } else if (requirements.quiz_completed) {
      progress += 1;
    }

    if (requirements.min_heat_tolerance && userProgress.heat_tolerance < requirements.min_heat_tolerance) {
      eligible = false;
      missing.push(`Try heat level ${requirements.min_heat_tolerance}+`);
    } else if (requirements.min_heat_tolerance) {
      progress += 1;
    }

    if (requirements.stories_shared && userProgress.stories_shared < requirements.stories_shared) {
      eligible = false;
      missing.push(`Share ${requirements.stories_shared - userProgress.stories_shared} more stories`);
    } else if (requirements.stories_shared) {
      progress += 1;
    }

    if (requirements.recipes_saved && userProgress.recipes_saved < requirements.recipes_saved) {
      eligible = false;
      missing.push(`Save ${requirements.recipes_saved - userProgress.recipes_saved} more recipes`);
    } else if (requirements.recipes_saved) {
      progress += 1;
    }

    if (requirements.helpful_interactions && userProgress.community_interactions < requirements.helpful_interactions) {
      eligible = false;
      missing.push(`Help ${requirements.helpful_interactions - userProgress.community_interactions} more customers`);
    } else if (requirements.helpful_interactions) {
      progress += 1;
    }

    return { 
      eligible, 
      progress: totalRequirements > 0 ? (progress / totalRequirements) * 100 : 0,
      missing 
    };
  };

  const toggleBadgeDisplay = async (badgeId: string) => {
    try {
      const response = await fetch('/api/customer-badges/toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_email: customerEmail,
          badge_id: badgeId
        })
      });

      if (response.ok) {
        setEarnedBadges(prev => 
          prev.map(badge => 
            badge.badge_id === badgeId 
              ? { ...badge, is_displayed: !badge.is_displayed }
              : badge
          )
        );
        toast.success('Badge display updated');
      }
    } catch (error) {
      toast.error('Failed to update badge display');
    }
  };

  const getIconComponent = (iconString: string) => {
    switch (iconString) {
      case '🌱': return <Sparkles className="w-6 h-6" />;
      case '🔥': return <Flame className="w-6 h-6" />;
      case '🇬🇧🇮🇩': return <Heart className="w-6 h-6" />;
      case '⭐': return <Star className="w-6 h-6" />;
      case '🌉': return <Target className="w-6 h-6" />;
      case '🚀': return <Zap className="w-6 h-6" />;
      case '📚': return <BookOpen className="w-6 h-6" />;
      case '✍️': return <ChefHat className="w-6 h-6" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

  const renderBadge = (achievement: Achievement, earned?: CustomerBadge) => {
    const CategoryIcon = CATEGORY_ICONS[achievement.category];
    const isEarned = !!earned;
    const { eligible, progress, missing } = checkBadgeEligibility(achievement);

    if (displayMode === 'earned' && !isEarned) return null;
    if (displayMode === 'available' && isEarned) return null;

    return (
      <Card 
        key={achievement.id}
        className={`relative transition-all duration-300 hover:scale-105 ${
          isEarned 
            ? `${RARITY_COLORS[achievement.rarity]} shadow-lg ${RARITY_GLOW[achievement.rarity]}` 
            : 'border-gray-200 bg-gray-50 opacity-75'
        } ${compact ? 'p-4' : 'p-6'}`}
      >
        {isEarned && achievement.rarity === 'legendary' && (
          <div className="absolute -top-2 -right-2">
            <Crown className="w-6 h-6 text-yellow-500 animate-bounce" />
          </div>
        )}

        <CardHeader className={compact ? 'pb-2' : 'pb-4'}>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${
                isEarned 
                  ? 'bg-white/50' 
                  : 'bg-gray-200'
              }`}>
                {getIconComponent(achievement.icon)}
              </div>
              <div>
                <CardTitle className={`${compact ? 'text-base' : 'text-lg'} flex items-center gap-2`}>
                  {achievement.badge_name}
                  {isEarned && <Check className="w-4 h-4 text-green-600" />}
                  {!isEarned && !eligible && <Lock className="w-4 h-4 text-gray-400" />}
                </CardTitle>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="outline" className="text-xs">
                    <CategoryIcon className="w-3 h-3 mr-1" />
                    {achievement.category}
                  </Badge>
                  <Badge 
                    className={`text-xs ${RARITY_COLORS[achievement.rarity]}`}
                    variant="outline"
                  >
                    {achievement.rarity}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className={compact ? 'pt-0' : 'pt-2'}>
          <CardDescription className="mb-3">
            {achievement.description}
          </CardDescription>

          {/* Progress Bar for Unearned Badges */}
          {!isEarned && showProgress && customerEmail && (
            <div className="space-y-2 mb-3">
              <div className="flex justify-between text-xs">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              {missing.length > 0 && (
                <div className="text-xs text-gray-600">
                  <p className="font-medium">To earn this badge:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    {missing.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Earned Badge Details */}
          {isEarned && earned && (
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Earned {new Date(earned.earned_at).toLocaleDateString()}</span>
                {earned.is_displayed && <span className="text-green-600">★ Displayed</span>}
              </div>
              {customerEmail && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleBadgeDisplay(earned.badge_id)}
                  className="w-full text-xs"
                >
                  {earned.is_displayed ? 'Hide from Profile' : 'Show on Profile'}
                </Button>
              )}
            </div>
          )}

          {/* Reward Information */}
          {achievement.reward_type && achievement.reward_value && (
            <div className="bg-white/50 rounded-lg p-2 mt-3">
              <div className="flex items-center space-x-2">
                <Gift className="w-4 h-4 text-gold-600" />
                <div className="text-xs">
                  <span className="font-medium">Reward: </span>
                  {achievement.reward_type === 'discount' && `${achievement.reward_value} off next order`}
                  {achievement.reward_type === 'early_access' && 'Early access to new products'}
                  {achievement.reward_type === 'free_shipping' && 'Free shipping on next order'}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  const filteredAchievements = achievements.filter(achievement => 
    selectedCategory === 'all' || achievement.category === selectedCategory
  );

  const earnedCount = earnedBadges.length;
  const totalCount = achievements.length;
  const completionPercentage = totalCount > 0 ? (earnedCount / totalCount) * 100 : 0;

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="w-24 h-4 bg-gray-200 rounded"></div>
                    <div className="w-16 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="w-full h-3 bg-gray-200 rounded"></div>
                  <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header & Progress */}
      {!compact && (
        <div className="text-center space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-burgundy-900 mb-2">
              Achievement Badges
            </h2>
            <p className="text-xl text-gray-600">
              Earn badges as you explore Indonesian cuisine with us
            </p>
          </div>

          {customerEmail && (
            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6">
                <div className="text-center space-y-3">
                  <div className="text-2xl font-bold text-burgundy-900">
                    {earnedCount} / {totalCount}
                  </div>
                  <Progress value={completionPercentage} className="h-3" />
                  <p className="text-sm text-gray-600">
                    {Math.round(completionPercentage)}% Complete
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Category Filter */}
      {!compact && (
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' ? 'bg-burgundy-600' : ''}
            >
              All Badges
            </Button>
            {Object.entries(CATEGORY_ICONS).map(([category, Icon]) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-burgundy-600' : ''}
              >
                <Icon className="w-4 h-4 mr-1" />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Badges Grid */}
      <div className={`grid gap-4 ${
        compact 
          ? 'md:grid-cols-3 lg:grid-cols-4' 
          : 'md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {filteredAchievements.map(achievement => {
          const earned = earnedBadges.find(badge => badge.badge_id === achievement.id);
          return renderBadge(achievement, earned);
        })}
      </div>

      {/* Empty State */}
      {filteredAchievements.length === 0 && (
        <div className="text-center py-12">
          <Award className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No badges in this category yet
          </h3>
          <p className="text-gray-600">
            Try a different category or start exploring our community features!
          </p>
        </div>
      )}
    </div>
  );
}

// Import Check icon
const Check = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);