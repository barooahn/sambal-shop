"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { toast } from "sonner";

export default function WaitlistButton() {
  const [state, setState] = useState({ isSubmitting: false, isSubmitted: false, message: "" });

  const handleClick = async () => {
    if (state.isSubmitting || state.isSubmitted) return;
    setState({ isSubmitting: true, isSubmitted: false, message: "" });
    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "hero_waitlist" }),
      });
      if (!res.ok) throw new Error("Failed to record interest");
      const result = await res.json();
      setState({
        isSubmitting: false,
        isSubmitted: true,
        message: result.message || "Thanks — we’ll notify you when we launch in the UK.",
      });
      try {
        const { trackEvent } = await import("@/components/analytics/GoogleAnalytics");
        trackEvent("hero_interest_click", "product_engagement", "hero_waitlist");
      } catch {}
      toast.success("Interest recorded — you’re on the UK VIP list! 🇬🇧🌶️");
    } catch (e) {
      setState({ isSubmitting: false, isSubmitted: true, message: "Something went wrong. Please try again later." });
      toast.error("Couldn’t record your interest. Please try again.");
    }
    setTimeout(() => setState((p) => ({ ...p, isSubmitted: false, message: "" })), 4000);
  };

  return (
    <div>
      <button
        aria-label='Join Sambal Goreng waiting list'
        onClick={handleClick}
        disabled={state.isSubmitting || state.isSubmitted}
        className='group bg-transparent backdrop-blur-md hover:bg-orange-900/10 text-white font-medium py-3 sm:py-3 lg:py-3.5 px-4 sm:px-4 lg:px-8 rounded-md border-2 border-orange-800/50 hover:border-orange-700/70 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full min-h-[48px] sm:min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
      >
        <div className='flex items-center justify-center space-x-1 sm:space-x-2'>
          {state.isSubmitting ? (
            <>
              <Heart className='w-4 h-4 sm:w-4 sm:h-4 animate-pulse' />
              <span className='text-sm sm:text-sm lg:text-base'>Joining...</span>
            </>
          ) : state.isSubmitted ? (
            <>
              <Heart className='w-4 h-4 sm:w-4 sm:h-4' />
              <span className='text-sm sm:text-sm lg:text-base'>Joined! 🌶️</span>
            </>
          ) : (
            <>
              <Heart className='w-4 h-4 sm:w-4 sm:h-4' />
              <span className='text-sm sm:text-sm lg:text-base text-center leading-tight'>
                <span className='sm:hidden'>Join Waitlist</span>
                <span className='hidden sm:inline'>Join Waitlist for Full-Size Jars</span>
              </span>
            </>
          )}
        </div>
      </button>

      {state.message && (
        <div
          className={`mt-4 lg:mt-6 p-3 lg:p-4 rounded-lg backdrop-blur-md mx-4 lg:mx-0 lg:max-w-md border shadow-xl ${
            state.message.includes("Thanks") || state.message.includes("notify")
              ? "bg-green-600/20 text-green-100 border-green-400/30"
              : "bg-red-600/20 text-red-100 border-red-400/30"
          }`}
        >
          <span className='font-medium text-sm lg:text-base'>{state.message}</span>
        </div>
      )}
    </div>
  );
}

