import { NextRequest, NextResponse } from "next/server";
import { withRateLimit } from "@/lib/rate-limiter";

async function handleGET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');

        if (!email) {
            return NextResponse.json(
                { success: false, message: "Email parameter required" },
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

        // Aggregate user progress from multiple sources
        const progress = {
            quiz_completed: false,
            heat_tolerance: 1,
            stories_shared: 0,
            recipes_saved: 0,
            community_interactions: 0,
            cultural_content_engaged: 0,
            journey_created: false
        };

        // Check quiz completion
        const { data: quizData } = await supabase
            .from("customer_assessments")
            .select("heat_tolerance")
            .order("quiz_completed_at", { ascending: false })
            .limit(1);

        if (quizData && quizData.length > 0) {
            progress.quiz_completed = true;
            progress.heat_tolerance = quizData[0].heat_tolerance;
        }

        // Count stories shared
        const { count: storiesCount } = await supabase
            .from("customer_stories")
            .select("*", { count: 'exact', head: true })
            .eq("customer_email", email);

        progress.stories_shared = storiesCount || 0;

        // Count community interactions
        const { count: interactionsCount } = await supabase
            .from("community_interactions")
            .select("*", { count: 'exact', head: true })
            .eq("customer_email", email);

        progress.community_interactions = interactionsCount || 0;

        // Check if spice journey exists
        const { data: journeyData } = await supabase
            .from("spice_journeys")
            .select("customer_email")
            .eq("customer_email", email)
            .single();

        progress.journey_created = !!journeyData;

        // For recipes_saved and cultural_content_engaged, we'd need additional tracking
        // These would be implemented when we add recipe saving and content engagement features

        return NextResponse.json({
            success: true,
            progress
        });

    } catch (error) {
        console.error("Get user progress error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch user progress" },
            { status: 500 }
        );
    }
}

// Export with rate limiting
export const GET = withRateLimit(handleGET, 'default');