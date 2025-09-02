import { NextRequest, NextResponse } from 'next/server';

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'cooking' | 'community' | 'heat' | 'exploration';
  difficulty: 'easy' | 'medium' | 'hard';
  reward_points: number;
  reward_discount?: number;
  requirements: {
    type: string;
    count: number;
    description: string;
  };
}

// Master list of all possible achievements
const achievements: Achievement[] = [
  {
    id: 'first_story',
    name: 'Storyteller',
    description: 'Share your first cooking story with the community',
    icon: '📖',
    category: 'community',
    difficulty: 'easy',
    reward_points: 10,
    reward_discount: 10,
    requirements: {
      type: 'stories_shared',
      count: 1,
      description: 'Share 1 cooking story'
    }
  },
  {
    id: 'heat_explorer',
    name: 'Heat Explorer', 
    description: 'Try sambal at 3 different heat levels',
    icon: '🌶️',
    category: 'heat',
    difficulty: 'medium',
    reward_points: 25,
    requirements: {
      type: 'heat_levels_tried',
      count: 3,
      description: 'Experience 3 different spice levels'
    }
  },
  {
    id: 'recipe_master',
    name: 'Recipe Master',
    description: 'Try 5 different sambal recipes',
    icon: '👨‍🍳',
    category: 'cooking',
    difficulty: 'medium',
    reward_points: 30,
    reward_discount: 15,
    requirements: {
      type: 'recipes_tried',
      count: 5,
      description: 'Cook with sambal in 5 different recipes'
    }
  },
  {
    id: 'community_champion',
    name: 'Community Champion',
    description: 'Receive 10+ likes on your community stories',
    icon: '❤️',
    category: 'community',
    difficulty: 'medium',
    reward_points: 35,
    requirements: {
      type: 'community_interactions',
      count: 10,
      description: 'Get 10 likes from community members'
    }
  },
  {
    id: 'sambal_enthusiast',
    name: 'Sambal Enthusiast',
    description: 'Try all our sambal varieties',
    icon: '🌟',
    category: 'exploration',
    difficulty: 'hard',
    reward_points: 50,
    reward_discount: 20,
    requirements: {
      type: 'products_tried',
      count: 4,
      description: 'Purchase and try all 4 sambal varieties'
    }
  },
  {
    id: 'fire_lover',
    name: 'Fire Lover',
    description: 'Master the extreme heat levels (4-5 chilies)',
    icon: '🔥',
    category: 'heat',
    difficulty: 'hard',
    reward_points: 40,
    requirements: {
      type: 'extreme_heat_tried',
      count: 2,
      description: 'Try our hottest sambal varieties'
    }
  },
  {
    id: 'loyal_customer',
    name: 'Loyal Customer',
    description: 'Place 3 or more orders',
    icon: '🏆',
    category: 'exploration',
    difficulty: 'easy',
    reward_points: 20,
    reward_discount: 15,
    requirements: {
      type: 'orders_placed',
      count: 3,
      description: 'Complete 3 purchases'
    }
  },
  {
    id: 'fusion_chef',
    name: 'Fusion Chef',
    description: 'Create unique British-Indonesian fusion dishes',
    icon: '🇬🇧🇮🇩',
    category: 'cooking',
    difficulty: 'medium',
    reward_points: 35,
    requirements: {
      type: 'fusion_recipes',
      count: 2,
      description: 'Share 2 British-Indonesian fusion recipes'
    }
  },
  {
    id: 'indonesian_expert',
    name: 'Indonesian Culinary Expert',
    description: 'Master traditional Indonesian cooking techniques',
    icon: '🥘',
    category: 'cooking',
    difficulty: 'hard',
    reward_points: 60,
    reward_discount: 25,
    requirements: {
      type: 'traditional_recipes',
      count: 5,
      description: 'Successfully cook 5 traditional Indonesian dishes'
    }
  },
  {
    id: 'community_leader',
    name: 'Community Leader',
    description: 'Help other community members discover sambal',
    icon: '👑',
    category: 'community',
    difficulty: 'hard',
    reward_points: 75,
    requirements: {
      type: 'community_contributions',
      count: 10,
      description: 'Share 10+ helpful recipe tips or stories'
    }
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const difficulty = searchParams.get('difficulty');
    
    let filteredAchievements = achievements;
    
    if (category) {
      filteredAchievements = filteredAchievements.filter(a => a.category === category);
    }
    
    if (difficulty) {
      filteredAchievements = filteredAchievements.filter(a => a.difficulty === difficulty);
    }
    
    return NextResponse.json({
      success: true,
      achievements: filteredAchievements,
      count: filteredAchievements.length,
      categories: ['cooking', 'community', 'heat', 'exploration'],
      difficulties: ['easy', 'medium', 'hard']
    });

  } catch (error) {
    console.error('Error fetching achievements:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch achievements' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { achievement_id, customer_email } = body;
    
    if (!achievement_id || !customer_email) {
      return NextResponse.json(
        { success: false, message: 'Achievement ID and customer email are required' },
        { status: 400 }
      );
    }
    
    const achievement = achievements.find(a => a.id === achievement_id);
    if (!achievement) {
      return NextResponse.json(
        { success: false, message: 'Achievement not found' },
        { status: 404 }
      );
    }
    
    // In a real app, this would:
    // 1. Check if user meets requirements
    // 2. Mark achievement as earned
    // 3. Award points/discounts
    // 4. Send notification
    
    return NextResponse.json({
      success: true,
      message: `Achievement "${achievement.name}" awarded!`,
      achievement: {
        ...achievement,
        earned_at: new Date().toISOString()
      },
      rewards: {
        points: achievement.reward_points,
        discount: achievement.reward_discount || 0
      }
    });

  } catch (error) {
    console.error('Error awarding achievement:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to award achievement' },
      { status: 500 }
    );
  }
}