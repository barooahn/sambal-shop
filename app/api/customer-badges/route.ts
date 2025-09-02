import { NextRequest, NextResponse } from 'next/server';

interface CustomerBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earned_at?: string;
  progress?: number;
  progress_total?: number;
  category: 'cooking' | 'community' | 'heat' | 'exploration';
}

// Mock badges data
const getAllBadges = (email: string): CustomerBadge[] => {
  // In a real app, this would query database for user's progress
  const mockProgress = {
    'demo@example.com': {
      stories_shared: 1,
      recipes_tried: 3,
      heat_levels_tried: 2,
      community_interactions: 5,
      orders_placed: 2,
      products_tried: 3
    }
  };

  const progress = mockProgress[email as keyof typeof mockProgress] || {
    stories_shared: 0,
    recipes_tried: 0,
    heat_levels_tried: 0,
    community_interactions: 0,
    orders_placed: 0,
    products_tried: 0
  };

  return [
    {
      id: 'first_story',
      name: 'Storyteller',
      description: 'Share your first cooking story',
      icon: '📖',
      earned: progress.stories_shared > 0,
      earned_at: progress.stories_shared > 0 ? '2025-08-28T14:30:00Z' : undefined,
      category: 'community'
    },
    {
      id: 'heat_explorer',
      name: 'Heat Explorer',
      description: 'Try 3 different heat levels',
      icon: '🌶️',
      earned: progress.heat_levels_tried >= 3,
      progress: progress.heat_levels_tried,
      progress_total: 3,
      category: 'heat'
    },
    {
      id: 'recipe_master',
      name: 'Recipe Master',
      description: 'Try 5 different sambal recipes',
      icon: '👨‍🍳',
      earned: progress.recipes_tried >= 5,
      progress: progress.recipes_tried,
      progress_total: 5,
      category: 'cooking'
    },
    {
      id: 'community_champion',
      name: 'Community Champion',
      description: 'Get 10 likes on your stories',
      icon: '❤️',
      earned: progress.community_interactions >= 10,
      progress: progress.community_interactions,
      progress_total: 10,
      category: 'community'
    },
    {
      id: 'sambal_enthusiast',
      name: 'Sambal Enthusiast',
      description: 'Try all our sambal varieties',
      icon: '🌟',
      earned: progress.products_tried >= 4,
      progress: progress.products_tried,
      progress_total: 4,
      category: 'exploration'
    },
    {
      id: 'fire_lover',
      name: 'Fire Lover',
      description: 'Master the hottest heat levels',
      icon: '🔥',
      earned: progress.heat_levels_tried >= 5,
      progress: Math.min(progress.heat_levels_tried, 5),
      progress_total: 5,
      category: 'heat'
    },
    {
      id: 'loyal_customer',
      name: 'Loyal Customer',
      description: 'Place 3+ orders',
      icon: '🏆',
      earned: progress.orders_placed >= 3,
      progress: progress.orders_placed,
      progress_total: 3,
      category: 'exploration'
    },
    {
      id: 'fusion_chef',
      name: 'Fusion Chef',
      description: 'Create British-Indonesian fusion dishes',
      icon: '🇬🇧🇮🇩',
      earned: progress.recipes_tried >= 2 && progress.stories_shared >= 1,
      category: 'cooking'
    }
  ];
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email parameter is required' },
        { status: 400 }
      );
    }

    const badges = getAllBadges(email);
    
    return NextResponse.json({
      success: true,
      badges,
      earned_count: badges.filter(b => b.earned).length,
      total_count: badges.length
    });

  } catch (error) {
    console.error('Error fetching customer badges:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch badges' },
      { status: 500 }
    );
  }
}