import { NextRequest, NextResponse } from "next/server";
import { withRateLimit } from "@/lib/rate-limiter";

async function handlePOST(request: NextRequest) {
  try {
    const {
      message,
      stack,
      componentStack,
      timestamp,
      url,
      userAgent,
    } = await request.json();

    // Validate required fields
    if (!message || !timestamp) {
      return NextResponse.json(
        { success: false, message: "Missing required error information" },
        { status: 400 }
      );
    }

    // Get client IP for logging
    const clientIP =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Log error details
    console.error("=== CLIENT-SIDE ERROR REPORT ===");
    console.error("Timestamp:", timestamp);
    console.error("URL:", url);
    console.error("IP:", clientIP);
    console.error("User Agent:", userAgent);
    console.error("Message:", message);
    console.error("Stack:", stack);
    if (componentStack) {
      console.error("Component Stack:", componentStack);
    }
    console.error("=====================================");

    // In production, you might want to send this to an error monitoring service
    // like Sentry, LogRocket, or your own monitoring system
    if (process.env.NODE_ENV === "production") {
      // Example: Send to external monitoring service
      // await sendToErrorMonitoring({
      //   message,
      //   stack,
      //   componentStack,
      //   timestamp,
      //   url,
      //   userAgent,
      //   clientIP,
      // });
    }

    return NextResponse.json({
      success: true,
      message: "Error report received",
    });
  } catch (error) {
    console.error("Error processing error report:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process error report" },
      { status: 500 }
    );
  }
}

// Apply rate limiting to prevent error report spam
export const POST = withRateLimit(handlePOST, 'feedback');