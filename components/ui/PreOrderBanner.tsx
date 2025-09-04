"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/simple-button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Star, 
  ShoppingCart, 
  X, 
  ChevronRight,
  Clock,
  Shield,
  Gift
} from "@/components/ui/icons";

interface PreOrderBannerProps {
  className?: string;
  dismissible?: boolean;
  compact?: boolean;
}

export default function PreOrderBanner({ 
  className = "", 
  dismissible = false, 
  compact = false 
}: PreOrderBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  if (compact) {
    return (
      <div className={`bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 text-white ${className}`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span className="font-semibold text-sm">Pre-Order Now Available</span>
              </div>
              <Badge className="bg-white/20 text-white border-white/30 text-xs">
                No Payment Required
              </Badge>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link href="/products" className="hidden sm:block">
                <Button 
                  size="sm" 
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-sm"
                >
                  Reserve Yours
                  <ChevronRight className="w-3 h-3 ml-1" />
                </Button>
              </Link>
              {dismissible && (
                <button
                  onClick={() => setIsDismissed(true)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label="Dismiss banner"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-stone-900 text-white relative overflow-hidden ${className}`}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full translate-y-24 -translate-x-24 blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          {/* Main Badge */}
          <div className="mb-4">
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 text-lg font-bold shadow-lg border-0">
              <Gift className="w-5 h-5 mr-2" />
              LIMITED PRE-ORDER NOW LIVE
            </Badge>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="block text-white">Reserve Your Authentic</span>
            <span className="block text-amber-300">Indonesian Sambal</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl text-amber-100 mb-6 max-w-3xl mx-auto leading-relaxed">
            Be among the first to taste Chef Yossie's authentic sambal when production begins in January 2025. 
            <span className="font-semibold text-amber-200"> No payment required now.</span>
          </p>

          {/* Key Benefits */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-amber-200">No Payment Until Shipping</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5 text-blue-400" />
              <span className="text-amber-200">Expected: January 2025</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-amber-200">Special Pre-Order Price</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 hover:from-amber-400 hover:via-orange-500 hover:to-red-500 text-white font-bold py-4 px-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Reserve Your Sambal Now
              </Button>
            </Link>
            <Link href="/sample-pack-try-first">
              <Button 
                variant="outline" 
                size="lg"
                className="border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-burgundy-900 py-4 px-8 font-semibold"
              >
                <Star className="w-5 h-5 mr-2" />
                Or Try Sample Pack First
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-6 text-amber-200">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Production starts Jan 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Risk-free reservation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span className="text-sm">Authentic Indonesian recipes</span>
              </div>
            </div>
          </div>

          {/* Dismissible X */}
          {dismissible && (
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}