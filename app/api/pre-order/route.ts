import { NextRequest, NextResponse } from "next/server";
import { withRateLimit } from "@/lib/rate-limiter";

export const runtime = "nodejs";

async function handlePOST(request: NextRequest) {
  try {
    const { 
      email = "", 
      product_id = "", 
      product_name = "",
      quantity = 1, 
      total_amount = 0,
      customer_name = "",
      phone = "",
      special_requests = "",
      source = "product_page_preorder" 
    } = await request.json().catch(() => ({}));

    // Validate required fields
    if (!email || !product_id || !product_name) {
      return NextResponse.json(
        { success: false, message: "Email, product ID, and product name are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // Fallback: simulate success if env vars not present (dev-friendly)
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ 
        success: true, 
        message: `Pre-order confirmed! We'll email you at ${email} when ${product_name} is ready to ship. Expected production start: January 2025.`,
        preorder_id: `DEV_${Date.now()}`
      });
    }

    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(supabaseUrl, supabaseKey);

    const userAgent = request.headers.get("user-agent") || "server";
    const preorder_id = `PO_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Insert pre-order record
    const { error } = await supabase
      .from("pre_orders")
      .insert([{ 
        preorder_id,
        email,
        product_id,
        product_name,
        quantity,
        total_amount,
        customer_name,
        phone,
        special_requests,
        source,
        user_agent: userAgent,
        status: 'confirmed',
        created_at: new Date().toISOString()
      }]);

    if (error) {
      console.error("Pre-order API error:", error);
      return NextResponse.json(
        { success: false, message: "Unable to process pre-order right now. Please try again later." }, 
        { status: 500 }
      );
    }

    // Also add to product interest for analytics (silent fail)
    try {
      await supabase
        .from("product_interest")
        .insert([{ 
          identifier: email, 
          source: `preorder_${product_id}`, 
          user_agent: userAgent 
        }]);
    } catch {
      // Silent fail - not critical
    }

    return NextResponse.json({ 
      success: true, 
      message: `Pre-order confirmed! We'll email you at ${email} when ${product_name} is ready to ship. Expected production start: January 2025.`,
      preorder_id
    });

  } catch (e) {
    console.error("Pre-order API exception:", e);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." }, 
      { status: 500 }
    );
  }
}

// Export with rate limiting
export const POST = withRateLimit(handlePOST, 'preorder');