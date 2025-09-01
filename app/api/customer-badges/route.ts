import { NextRequest, NextResponse } from "next/server";
import { withRateLimit } from "@/lib/rate-limiter";

async function handleGET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');
        const displayed_only = searchParams.get('displayed_only') === 'true';

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

        let query = supabase
            .from("customer_badges")
            .select(`
                *,
                achievement_badges (
                    badge_key,
                    badge_name,
                    description,
                    icon,
                    category,
                    rarity,
                    reward_type,
                    reward_value
                )
            `)
            .eq("customer_email", email)
            .order("earned_at", { ascending: false });

        if (displayed_only) {
            query = query.eq("is_displayed", true);
        }

        const { data: badges, error } = await query;

        if (error) {
            throw error;
        }

        return NextResponse.json({
            success: true,
            badges: badges || [],
            total: badges?.length || 0
        });

    } catch (error) {
        console.error("Get customer badges error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch customer badges" },
            { status: 500 }
        );
    }
}

// Export with rate limiting
export const GET = withRateLimit(handleGET, 'default');