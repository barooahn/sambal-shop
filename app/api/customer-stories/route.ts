import { NextRequest, NextResponse } from 'next/server';

interface CustomerStory {
  id: number;
  customer_name: string;
  customer_email?: string;
  story_title: string;
  story_content: string;
  recipe_shared?: string;
  heat_level: number;
  product_used: string;
  cooking_occasion: string;
  fusion_type: string;
  photos?: string[];
  allow_featuring: boolean;
  approved: boolean;
  likes_count: number;
  shares_count: number;
  featured: boolean;
  created_at: string;
}

// Mock data for demonstration
const mockStories: CustomerStory[] = [
  {
    id: 1,
    customer_name: "Sarah M.",
    story_title: "My First Indonesian Sunday Roast",
    story_content: "I decided to try something different for Sunday lunch and used Sambal Oelek as a marinade for our traditional roast chicken. The results were absolutely incredible! My family, who are usually quite conservative with spices, were asking for seconds. The heat level was perfect - warming but not overwhelming. It's now become our new Sunday tradition!",
    recipe_shared: "Sambal Sunday Roast Chicken:\n1 whole chicken\n3 tbsp Sambal Oelek\n2 tbsp honey\n1 tbsp soy sauce\n1 tbsp olive oil\n\nMix ingredients, marinate for 2 hours, roast at 180°C for 1 hour 15 mins.",
    heat_level: 3,
    product_used: "Sambal Oelek Traditional",
    cooking_occasion: "sunday-roast",
    fusion_type: "british-fusion",
    photos: [],
    allow_featuring: true,
    approved: true,
    likes_count: 24,
    shares_count: 8,
    featured: true,
    created_at: "2025-08-28T14:30:00Z"
  },
  {
    id: 2,
    customer_name: "Ahmed K.",
    story_title: "Sambal Transformed My Weeknight Dinners",
    story_content: "As someone who cooks for the family every night, I was getting bored with the same old flavours. A friend recommended trying sambal, and it's been a game-changer! I now add it to stir-fries, pasta sauces, even scrambled eggs. My teenage kids have gone from picky eaters to asking 'what's for dinner?' with genuine excitement.",
    heat_level: 2,
    product_used: "Sambal Bali Sweet & Spicy",
    cooking_occasion: "quick-weeknight",
    fusion_type: "creative-experiment",
    photos: [],
    allow_featuring: true,
    approved: true,
    likes_count: 31,
    shares_count: 12,
    featured: false,
    created_at: "2025-08-25T19:45:00Z"
  },
  {
    id: 3,
    customer_name: "Emma L.",
    story_title: "Bringing Indonesia to Manchester",
    story_content: "Having lived in Jakarta for two years, I've been desperately missing authentic Indonesian flavours since moving back to Manchester. This sambal is the closest I've found to what I remember from the street food stalls. I made gado-gado for my friends last weekend, and they couldn't believe how amazing it was!",
    recipe_shared: "Quick Gado-Gado:\nBlanched vegetables (cabbage, bean sprouts, green beans)\nBoiled eggs\nTofu cubes\nSambal dressing: 2 tbsp sambal + 1 tbsp peanut butter + lime juice + a little warm water",
    heat_level: 4,
    product_used: "Sambal Oelek Traditional",
    cooking_occasion: "dinner-party",
    fusion_type: "traditional",
    photos: [],
    allow_featuring: true,
    approved: true,
    likes_count: 18,
    shares_count: 6,
    featured: false,
    created_at: "2025-08-23T16:20:00Z"
  }
];

export async function GET() {
  try {
    // In a real app, this would query a database
    // For now, return mock data
    return NextResponse.json({
      success: true,
      stories: mockStories,
      count: mockStories.length
    });
  } catch (error) {
    console.error('Error fetching customer stories:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch stories' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const required = [
      'customer_name', 
      'story_title', 
      'story_content', 
      'heat_level', 
      'product_used',
      'cooking_occasion',
      'fusion_type'
    ];
    
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // In a real app, this would save to a database
    const newStory: CustomerStory = {
      id: mockStories.length + 1,
      customer_name: body.customer_name,
      customer_email: body.customer_email || null,
      story_title: body.story_title,
      story_content: body.story_content,
      recipe_shared: body.recipe_shared || null,
      heat_level: body.heat_level,
      product_used: body.product_used,
      cooking_occasion: body.cooking_occasion,
      fusion_type: body.fusion_type,
      photos: body.photos || [],
      allow_featuring: body.allow_featuring || false,
      approved: false, // Stories need admin approval
      likes_count: 0,
      shares_count: 0,
      featured: false,
      created_at: new Date().toISOString()
    };

    // Add to mock data (in real app, save to database)
    mockStories.push(newStory);

    return NextResponse.json({
      success: true,
      story: newStory,
      message: 'Story submitted successfully and will be reviewed within 24 hours'
    });

  } catch (error) {
    console.error('Error creating customer story:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit story' },
      { status: 500 }
    );
  }
}