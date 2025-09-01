import { NextRequest, NextResponse } from "next/server";
import { withRateLimit } from "@/lib/rate-limiter";

async function handleGET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');
        const active_only = searchParams.get('active_only') !== 'false'; // Default to true

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
            .from("achievement_badges")
            .select("*")
            .order("category")
            .order("rarity");

        if (active_only) {
            query = query.eq("is_active", true);
        }

        if (category) {
            query = query.eq("category", category);
        }

        const { data: achievements, error } = await query;

        if (error) {
            throw error;
        }

        return NextResponse.json({
            success: true,
            achievements: achievements || [],
            total: achievements?.length || 0
        });

    } catch (error) {
        console.error("Get achievements error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch achievements" },
            { status: 500 }
        );
    }
}

// Export with rate limiting
export const GET = withRateLimit(handleGET, 'default');