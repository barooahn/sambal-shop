import { NextRequest, NextResponse } from "next/server";
import { withRateLimit } from "@/lib/rate-limiter";

async function handlePOST(request: NextRequest) {
    try {
        const storyData = await request.json();

        // Validate required fields
        const requiredFields = [
            'customer_name',
            'story_title', 
            'story_content',
            'product_used',
            'cooking_occasion',
            'fusion_type',
            'heat_level'
        ];

        for (const field of requiredFields) {
            if (!storyData[field]) {
                return NextResponse.json(
                    { success: false, message: `Missing required field: ${field}` },
                    { status: 400 }
                );
            }
        }

        // Validate heat level
        if (storyData.heat_level < 1 || storyData.heat_level > 5) {
            return NextResponse.json(
                { success: false, message: "Heat level must be between 1 and 5" },
                { status: 400 }
            );
        }

        // Store in Supabase
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

                // Insert the main story
                const { data: story, error: storyError } = await supabase
                    .from("customer_stories")
                    .insert([{
                        customer_name: storyData.customer_name,
                        customer_email: storyData.customer_email || null,
                        story_title: storyData.story_title,
                        story_content: storyData.story_content,
                        recipe_shared: storyData.recipe_shared || null,
                        heat_level: storyData.heat_level,
                        product_used: storyData.product_used,
                        cooking_occasion: storyData.cooking_occasion,
                        fusion_type: storyData.fusion_type,
                        allow_featuring: storyData.allow_featuring || false,
                        approved: false, // Always requires admin approval
                        likes_count: 0,
                        shares_count: 0
                    }])
                    .select()
                    .single();

                if (storyError) {
                    console.error("Story insertion error:", storyError);
                    throw storyError;
                }

                // If photos were uploaded, create photo records
                if (storyData.photos && Array.isArray(storyData.photos) && storyData.photos.length > 0) {
                    const photoRecords = storyData.photos.map((photoUrl: string, index: number) => ({
                        story_id: story.id,
                        photo_url: photoUrl,
                        upload_order: index,
                        is_featured: index === 0, // First photo is featured
                        alt_text: `${storyData.story_title} - Photo ${index + 1}`
                    }));

                    const { error: photosError } = await supabase
                        .from("story_photos")
                        .insert(photoRecords);

                    if (photosError) {
                        console.error("Photos insertion error:", photosError);
                        // Don't fail the whole request if photos fail
                    }
                }

                // Award the "Storyteller" badge
                try {
                    if (storyData.customer_email) {
                        // Check if customer already has the storyteller badge
                        const { data: existingBadge } = await supabase
                            .from("customer_badges")
                            .select("id")
                            .eq("customer_email", storyData.customer_email)
                            .eq("badge_id", (
                                await supabase
                                    .from("achievement_badges")
                                    .select("id")
                                    .eq("badge_key", "storyteller")
                                    .single()
                            ).data?.id)
                            .single();

                        if (!existingBadge) {
                            // Get the storyteller badge ID
                            const { data: badge } = await supabase
                                .from("achievement_badges")
                                .select("id")
                                .eq("badge_key", "storyteller")
                                .single();

                            if (badge) {
                                await supabase
                                    .from("customer_badges")
                                    .insert([{
                                        customer_email: storyData.customer_email,
                                        badge_id: badge.id,
                                        progress_data: {
                                            story_id: story.id,
                                            story_title: storyData.story_title,
                                            earned_by: "story_submission"
                                        }
                                    }]);
                            }
                        }

                        // Update or create spice journey
                        const { error: journeyError } = await supabase
                            .from("spice_journeys")
                            .upsert([{
                                customer_email: storyData.customer_email,
                                customer_name: storyData.customer_name,
                                current_heat_level: storyData.heat_level,
                                max_heat_achieved: storyData.heat_level,
                                products_tried: [storyData.product_used],
                                total_recipes_tried: storyData.recipe_shared ? 1 : 0,
                                last_activity_at: new Date().toISOString()
                            }], {
                                onConflict: 'customer_email',
                                ignoreDuplicates: false
                            });

                        if (journeyError) {
                            console.error("Journey update error:", journeyError);
                            // Don't fail the request
                        }
                    }
                } catch (badgeError) {
                    console.error("Badge award error:", badgeError);
                    // Don't fail the request
                }

                return NextResponse.json({
                    success: true,
                    message: "Story submitted successfully! We'll review it within 24 hours.",
                    story_id: story.id,
                    badges_earned: ["storyteller"],
                    discount_code: "STORY10"
                });

            } else {
                throw new Error("Database configuration not available");
            }

        } catch (supabaseError) {
            console.error("Database error:", supabaseError);
            
            // Fallback - log the story for manual processing
            console.log("Story submission (fallback):", {
                customer: storyData.customer_name,
                title: storyData.story_title,
                content: storyData.story_content.substring(0, 100) + "...",
                product: storyData.product_used,
                heat_level: storyData.heat_level,
                occasion: storyData.cooking_occasion,
                fusion_type: storyData.fusion_type,
                timestamp: new Date().toISOString()
            });

            return NextResponse.json({
                success: true,
                message: "Story submitted successfully! We'll review it within 24 hours.",
                fallback: true
            });
        }

    } catch (error) {
        console.error("Customer stories API error:", error);
        return NextResponse.json(
            { 
                success: false, 
                message: "Failed to submit story. Please try again later." 
            },
            { status: 500 }
        );
    }
}

async function handleGET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const featured = searchParams.get('featured') === 'true';
        const limit = parseInt(searchParams.get('limit') || '10');
        const offset = parseInt(searchParams.get('offset') || '0');

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
            .from("customer_stories")
            .select(`
                *,
                story_photos (
                    photo_url,
                    alt_text,
                    caption,
                    is_featured,
                    upload_order
                )
            `)
            .eq("approved", true)
            .order("created_at", { ascending: false });

        if (featured) {
            query = query.eq("featured", true);
        }

        const { data: stories, error } = await query
            .range(offset, offset + limit - 1);

        if (error) {
            throw error;
        }

        return NextResponse.json({
            success: true,
            stories: stories || [],
            pagination: {
                limit,
                offset,
                total: stories?.length || 0
            }
        });

    } catch (error) {
        console.error("Get stories error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch stories" },
            { status: 500 }
        );
    }
}

// Export with rate limiting
export const POST = withRateLimit(handlePOST, 'contact'); // Use contact rate limit (5 per hour)
export const GET = withRateLimit(handleGET, 'default');