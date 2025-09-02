import { NextRequest, NextResponse } from 'next/server';

interface UserProgress {
  customer_email: string;
  total_points: number;
  level: number;
  level_name: string;
  progress_to_next_level: number;
  progress_to_next_level_total: number;
  achievements_earned: number;
  achievements_total: number;
  stories_shared: number;
  recipes_tried: number;
  heat_levels_mastered: number[];
  products_tried: string[];
  orders_placed: number;
  community_interactions: number;
  quiz_completed: boolean;
  quiz_results?: {
    heat_preference: number;
    cooking_experience: string;
    flavor_profile: string[];
    recommended_products: string[];
  };
  created_at: string;
  updated_at: string;
}

// Mock user progress data
const mockUserProgress: { [email: string]: UserProgress } = {
  'demo@example.com': {
    customer_email: 'demo@example.com',
    total_points: 45,
    level: 2,
    level_name: 'Sambal Explorer',
    progress_to_next_level: 45,
    progress_to_next_level_total: 100,
    achievements_earned: 3,
    achievements_total: 10,
    stories_shared: 1,
    recipes_tried: 3,
    heat_levels_mastered: [2, 3],
    products_tried: ['Sambal Oelek Traditional', 'Sambal Bali Sweet & Spicy', 'Sample Pack'],
    orders_placed: 2,
    community_interactions: 5,
    quiz_completed: true,
    quiz_results: {
      heat_preference: 3,
      cooking_experience: 'regular-explorer',
      flavor_profile: ['sweet-spicy', 'traditional'],
      recommended_products: ['Sambal Bali Sweet & Spicy', 'Sambal Oelek Traditional']
    },
    created_at: '2025-08-15T10:00:00Z',
    updated_at: '2025-08-28T14:30:00Z'
  }
};

// Level system
const levels = [
  { level: 1, name: 'Sambal Beginner', points_required: 0 },
  { level: 2, name: 'Sambal Explorer', points_required: 25 },
  { level: 3, name: 'Spice Enthusiast', points_required: 100 },
  { level: 4, name: 'Heat Master', points_required: 250 },
  { level: 5, name: 'Indonesian Chef', points_required: 500 },
  { level: 6, name: 'Sambal Legend', points_required: 1000 }
];

function calculateLevel(points: number) {
  let currentLevel = levels[0];
  let nextLevel = levels[1];
  
  for (let i = 0; i < levels.length - 1; i++) {
    if (points >= levels[i].points_required && points < levels[i + 1].points_required) {
      currentLevel = levels[i];
      nextLevel = levels[i + 1];
      break;
    }
  }
  
  // Handle max level
  if (points >= levels[levels.length - 1].points_required) {
    currentLevel = levels[levels.length - 1];
    nextLevel = currentLevel;
  }
  
  return {
    level: currentLevel.level,
    level_name: currentLevel.name,
    progress_to_next_level: nextLevel.level !== currentLevel.level ? points - currentLevel.points_required : 0,
    progress_to_next_level_total: nextLevel.level !== currentLevel.level ? nextLevel.points_required - currentLevel.points_required : 0
  };
}

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

    let userProgress = mockUserProgress[email];
    
    // Create default progress for new users
    if (!userProgress) {
      userProgress = {
        customer_email: email,
        total_points: 0,
        level: 1,
        level_name: 'Sambal Beginner',
        progress_to_next_level: 0,
        progress_to_next_level_total: 25,
        achievements_earned: 0,
        achievements_total: 10,
        stories_shared: 0,
        recipes_tried: 0,
        heat_levels_mastered: [],
        products_tried: [],
        orders_placed: 0,
        community_interactions: 0,
        quiz_completed: false,
        quiz_results: undefined,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      
      mockUserProgress[email] = userProgress;
    }

    // Recalculate level based on current points
    const levelInfo = calculateLevel(userProgress.total_points);
    userProgress = {
      ...userProgress,
      ...levelInfo
    };
    
    return NextResponse.json({
      success: true,
      progress: userProgress
    });

  } catch (error) {
    console.error('Error fetching user progress:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch user progress' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, action, data } = body;
    
    if (!email || !action) {
      return NextResponse.json(
        { success: false, message: 'Email and action are required' },
        { status: 400 }
      );
    }

    let userProgress = mockUserProgress[email] || {
      customer_email: email,
      total_points: 0,
      level: 1,
      level_name: 'Sambal Beginner',
      progress_to_next_level: 0,
      progress_to_next_level_total: 25,
      achievements_earned: 0,
      achievements_total: 10,
      stories_shared: 0,
      recipes_tried: 0,
      heat_levels_mastered: [],
      products_tried: [],
      orders_placed: 0,
      community_interactions: 0,
      quiz_completed: false,
      quiz_results: undefined,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    // Update progress based on action
    switch (action) {
      case 'story_shared':
        userProgress.stories_shared += 1;
        userProgress.total_points += 10;
        break;
      
      case 'recipe_tried':
        userProgress.recipes_tried += 1;
        userProgress.total_points += 5;
        break;
      
      case 'heat_level_mastered':
        if (data?.heat_level && !userProgress.heat_levels_mastered.includes(data.heat_level)) {
          userProgress.heat_levels_mastered.push(data.heat_level);
          userProgress.total_points += 15;
        }
        break;
      
      case 'product_tried':
        if (data?.product && !userProgress.products_tried.includes(data.product)) {
          userProgress.products_tried.push(data.product);
          userProgress.total_points += 20;
        }
        break;
      
      case 'order_placed':
        userProgress.orders_placed += 1;
        userProgress.total_points += 25;
        break;
      
      case 'community_interaction':
        userProgress.community_interactions += 1;
        userProgress.total_points += 2;
        break;
      
      case 'quiz_completed':
        if (!userProgress.quiz_completed) {
          userProgress.quiz_completed = true;
          if (data?.results) {
            userProgress.quiz_results = data.results;
          }
          userProgress.total_points += 15;
        }
        break;
      
      default:
        return NextResponse.json(
          { success: false, message: 'Invalid action' },
          { status: 400 }
        );
    }

    // Recalculate level
    const levelInfo = calculateLevel(userProgress.total_points);
    const previousLevel = userProgress.level;
    userProgress = {
      ...userProgress,
      ...levelInfo,
      updated_at: new Date().toISOString()
    };

    // Save updated progress
    mockUserProgress[email] = userProgress;

    // Check for level up
    const leveledUp = userProgress.level > previousLevel;

    return NextResponse.json({
      success: true,
      progress: userProgress,
      leveled_up: leveledUp,
      message: leveledUp ? `Congratulations! You've reached level ${userProgress.level}: ${userProgress.level_name}!` : 'Progress updated successfully'
    });

  } catch (error) {
    console.error('Error updating user progress:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update user progress' },
      { status: 500 }
    );
  }
}