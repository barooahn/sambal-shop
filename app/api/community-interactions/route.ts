import { NextRequest, NextResponse } from "next/server";
import { withRateLimit } from "@/lib/rate-limiter";

async function handlePOST(request: NextRequest) {
    try {
        const { interaction_type, target_type, target_id, comment_text } = await request.json();

        // Validate required fields
        if (!interaction_type || !target_type || !target_id) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        // Validate interaction type
        const validInteractionTypes = ['like', 'share', 'comment', 'helpful', 'tried_recipe'];
        if (!validInteractionTypes.includes(interaction_type)) {
            return NextResponse.json(
                { success: false, message: "Invalid interaction type" },
                { status: 400 }
            );
        }

        // Validate target type
        const validTargetTypes = ['story', 'recipe', 'review', 'comment'];
        if (!validTargetTypes.includes(target_type)) {
            return NextResponse.json(
                { success: false, message: "Invalid target type" },
                { status: 400 }
            );
        }

        // Get client information
        const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
        const userAgent = request.headers.get('user-agent') || '';

        try {
            const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
            const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
            const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

            if (supabaseUrl && (serviceRoleKey || anonKey)) {
                const { createClient } = await import("@supabase/supabase-js");
                const supabase = createClient(
                    supabaseUrl,
                    serviceRoleKey || (anonKey as string)
                );

                // Record the interaction
                const { data: interaction, error: interactionError } = await supabase
                    .from("community_interactions")
                    .insert([{
                        interaction_type,
                        target_type,
                        target_id,
                        comment_text: comment_text || null,
                        ip_address: clientIP,
                        user_agent: userAgent,
                        metadata: { timestamp: new Date().toISOString() }
                    }])
                    .select()
                    .single();

                if (interactionError) {
                    console.error("Interaction insertion error:", interactionError);
                    throw interactionError;
                }

                // Update counters based on interaction type
                if (interaction_type === 'like' && target_type === 'story') {
                    const { error: updateError } = await supabase.rpc(
                        'increment_story_likes', 
                        { story_id: target_id }
                    );
                    
                    if (updateError) {
                        // Create the function if it doesn't exist (fallback)
                        const { error: fallbackError } = await supabase
                            .from('customer_stories')
                            .update({ 
                                likes_count: supabase.raw('likes_count + 1')
                            })
                            .eq('id', target_id);

                        if (fallbackError) {
                            console.error("Like count update error:", fallbackError);
                        }
                    }
                }

                if (interaction_type === 'share' && target_type === 'story') {
                    const { error: updateError } = await supabase.rpc(
                        'increment_story_shares', 
                        { story_id: target_id }
                    );
                    
                    if (updateError) {
                        // Fallback
                        const { error: fallbackError } = await supabase
                            .from('customer_stories')
                            .update({ 
                                shares_count: supabase.raw('shares_count + 1')
                            })
                            .eq('id', target_id);

                        if (fallbackError) {
                            console.error("Share count update error:", fallbackError);
                        }
                    }
                }

                // Award badges for community engagement
                try {
                    // Get the customer email if this is related to their engagement
                    // For now, we'll track anonymous interactions and award badges later when they sign up
                    
                    console.log('Community interaction recorded:', {
                        type: interaction_type,
                        target: target_type,
                        id: target_id,
                        timestamp: new Date().toISOString()
                    });

                } catch (badgeError) {
                    console.error("Badge processing error:", badgeError);
                    // Don't fail the request
                }

                return NextResponse.json({
                    success: true,
                    message: "Interaction recorded successfully",
                    interaction_id: interaction.id
                });

            } else {
                throw new Error("Database configuration not available");
            }

        } catch (supabaseError) {
            console.error("Database error:", supabaseError);
            
            // Fallback - log the interaction for analytics
            console.log("Community interaction (fallback):", {
                type: interaction_type,
                target_type,
                target_id,
                ip: clientIP,
                timestamp: new Date().toISOString()
            });

            return NextResponse.json({
                success: true,
                message: "Interaction recorded",
                fallback: true
            });
        }

    } catch (error) {
        console.error("Community interactions API error:", error);
        return NextResponse.json(
            { 
                success: false, 
                message: "Failed to record interaction" 
            },
            { status: 500 }
        );
    }
}

async function handleGET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const targetType = searchParams.get('target_type');
        const targetId = searchParams.get('target_id');
        const interactionType = searchParams.get('interaction_type');

        if (!targetType || !targetId) {
            return NextResponse.json(
                { success: false, message: "Missing target_type or target_id" },
                { status: 400 }
            );
        }

        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !anonKey) {
            return NextResponse.json(
                { success: false, message: "Database not configured" },
                { status: 500 }
            );
        }

        const { createClient } = await import("@supabase/supabase-js");
        const supabase = createClient(supabaseUrl, anonKey);

        let query = supabase
            .from("community_interactions")
            .select("*")
            .eq("target_type", targetType)
            .eq("target_id", targetId)
            .order("created_at", { ascending: false });

        if (interactionType) {
            query = query.eq("interaction_type", interactionType);
        }

        const { data: interactions, error } = await query;

        if (error) {
            throw error;
        }

        // Aggregate the interactions
        const summary = {
            likes: interactions?.filter(i => i.interaction_type === 'like').length || 0,
            shares: interactions?.filter(i => i.interaction_type === 'share').length || 0,
            comments: interactions?.filter(i => i.interaction_type === 'comment').length || 0,
            helpful: interactions?.filter(i => i.interaction_type === 'helpful').length || 0,
            tried_recipe: interactions?.filter(i => i.interaction_type === 'tried_recipe').length || 0,
            total: interactions?.length || 0
        };

        return NextResponse.json({
            success: true,
            interactions: interactions || [],
            summary
        });

    } catch (error) {
        console.error("Get interactions error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch interactions" },
            { status: 500 }
        );
    }
}

// Export with rate limiting
export const POST = withRateLimit(handlePOST, 'default');
export const GET = withRateLimit(handleGET, 'default');