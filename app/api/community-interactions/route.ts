import { NextRequest, NextResponse } from 'next/server';

interface CommunityInteraction {
  id: number;
  story_id: number;
  customer_email: string;
  interaction_type: 'like' | 'share' | 'comment';
  comment_text?: string;
  created_at: string;
}

// Mock interactions data
const mockInteractions: CommunityInteraction[] = [
  {
    id: 1,
    story_id: 1,
    customer_email: 'demo@example.com',
    interaction_type: 'like',
    created_at: '2025-08-28T15:00:00Z'
  },
  {
    id: 2,
    story_id: 2,
    customer_email: 'demo@example.com',
    interaction_type: 'share',
    created_at: '2025-08-25T20:00:00Z'
  }
];

let nextInteractionId = mockInteractions.length + 1;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const storyId = searchParams.get('story_id');
    const email = searchParams.get('email');
    const type = searchParams.get('type');
    
    let filteredInteractions = mockInteractions;
    
    if (storyId) {
      filteredInteractions = filteredInteractions.filter(i => i.story_id === parseInt(storyId));
    }
    
    if (email) {
      filteredInteractions = filteredInteractions.filter(i => i.customer_email === email);
    }
    
    if (type) {
      filteredInteractions = filteredInteractions.filter(i => i.interaction_type === type);
    }
    
    // Group by interaction type for summary
    const summary = {
      likes: filteredInteractions.filter(i => i.interaction_type === 'like').length,
      shares: filteredInteractions.filter(i => i.interaction_type === 'share').length,
      comments: filteredInteractions.filter(i => i.interaction_type === 'comment').length
    };
    
    return NextResponse.json({
      success: true,
      interactions: filteredInteractions,
      summary,
      total: filteredInteractions.length
    });

  } catch (error) {
    console.error('Error fetching community interactions:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch interactions' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { story_id, customer_email, interaction_type, comment_text } = body;
    
    // Validate required fields
    if (!story_id || !customer_email || !interaction_type) {
      return NextResponse.json(
        { success: false, message: 'Story ID, customer email, and interaction type are required' },
        { status: 400 }
      );
    }
    
    // Validate interaction type
    const validTypes = ['like', 'share', 'comment'];
    if (!validTypes.includes(interaction_type)) {
      return NextResponse.json(
        { success: false, message: 'Invalid interaction type' },
        { status: 400 }
      );
    }
    
    // Check if user already interacted (prevent duplicate likes/shares)
    if (interaction_type !== 'comment') {
      const existingInteraction = mockInteractions.find(
        i => i.story_id === story_id && 
             i.customer_email === customer_email && 
             i.interaction_type === interaction_type
      );
      
      if (existingInteraction) {
        return NextResponse.json(
          { success: false, message: `Already ${interaction_type}d this story` },
          { status: 409 }
        );
      }
    }
    
    // Create new interaction
    const newInteraction: CommunityInteraction = {
      id: nextInteractionId++,
      story_id,
      customer_email,
      interaction_type,
      comment_text: interaction_type === 'comment' ? comment_text : undefined,
      created_at: new Date().toISOString()
    };
    
    // Add to mock data (in real app, save to database)
    mockInteractions.push(newInteraction);
    
    // In a real app, you would also:
    // 1. Update story counts (likes_count, shares_count)
    // 2. Award points to the user
    // 3. Send notifications to story author
    // 4. Update user progress/achievements
    
    return NextResponse.json({
      success: true,
      interaction: newInteraction,
      message: `${interaction_type.charAt(0).toUpperCase() + interaction_type.slice(1)} recorded successfully`
    });

  } catch (error) {
    console.error('Error creating community interaction:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to record interaction' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const interactionId = searchParams.get('id');
    const customerEmail = searchParams.get('email');
    
    if (!interactionId || !customerEmail) {
      return NextResponse.json(
        { success: false, message: 'Interaction ID and customer email are required' },
        { status: 400 }
      );
    }
    
    const interactionIndex = mockInteractions.findIndex(
      i => i.id === parseInt(interactionId) && i.customer_email === customerEmail
    );
    
    if (interactionIndex === -1) {
      return NextResponse.json(
        { success: false, message: 'Interaction not found or not authorized' },
        { status: 404 }
      );
    }
    
    const deletedInteraction = mockInteractions.splice(interactionIndex, 1)[0];
    
    return NextResponse.json({
      success: true,
      message: `${deletedInteraction.interaction_type} removed successfully`,
      deleted_interaction: deletedInteraction
    });

  } catch (error) {
    console.error('Error deleting community interaction:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete interaction' },
      { status: 500 }
    );
  }
}