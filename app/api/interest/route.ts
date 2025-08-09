import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { source = "hero_waitlist" } = await request.json().catch(() => ({ source: "hero_waitlist" }));

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // Fallback: simulate success if env vars not present (dev-friendly)
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ success: true, message: "Thanks for your interest! We'll notify you when we launch." });
    }

    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(supabaseUrl, supabaseKey);

    const identifier = `anon_${Date.now()}`;
    const userAgent = request.headers.get("user-agent") || "server";

    const { error } = await supabase
      .from("product_interest")
      .insert([{ identifier, source, user_agent: userAgent }]);

    if (error) {
      console.error("Record interest API error:", error);
      return NextResponse.json({ success: false, message: "Unable to record interest right now." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Thanks for your interest! We'll notify you when we launch." });
  } catch (e) {
    console.error("Record interest API exception:", e);
    return NextResponse.json({ success: false, message: "Something went wrong. Please try again later." }, { status: 500 });
  }
}

