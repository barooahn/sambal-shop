"use client";

import { useState } from "react";
import { Button } from "@/components/ui/simple-button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GlassCard from "@/components/ui/GlassCard";
import { Flame, Leaf, Star, ShoppingCart, Loader2, Bell } from "@/components/ui/icons";
import SpiceHeatIndicator, {
	HeatLevelBadge,
} from "@/components/ui/SpiceHeatIndicator";
import { Product } from "@/src/stripe-config";
import { toast } from "sonner";

interface ProductCardProps {
	product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
	const [loading, setLoading] = useState(false);
	const [joining, setJoining] = useState(false);

	const SALES_ENABLED = process.env.NEXT_PUBLIC_SALES_ENABLED === "true";

	const handlePurchase = async () => {
		// For static export, redirect to external checkout or show message
		toast.error(
			"Checkout is currently unavailable. Please join our waitlist for updates!"
		);
	};

	const handleJoinWaitlist = async () => {
		try {
			setJoining(true);
			const res = await fetch("/api/interest", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ source: "shop_waitlist" }),
			});
			const result = await res.json();
			if (!res.ok || result?.success === false) {
				throw new Error(
					result?.message || "Failed to record interest"
				);
			}
			toast.success(
				result.message ||
					"Interest recorded — you’re on the UK VIP list! 🇬🇧🌶️"
			);
			// Track GA4 event for shop waitlist joins
			try {
				const { trackEvent } = await import(
					"@/components/analytics/GoogleAnalytics"
				);
				trackEvent(
					"shop_interest_click",
					"product_engagement",
					"shop_waitlist"
				);
			} catch {}
		} catch (err: any) {
			toast.error(
				err?.message ||
					"We couldn't record your interest right now. Please try again later."
			);
		} finally {
			setJoining(false);
		}
	};

	return (
		<GlassCard
			variant='subtle'
			className='h-full transition-shadow duration-300'
		>
			<CardHeader>
				<div className='flex justify-between items-start mb-2'>
					<CardTitle className='text-xl font-bold text-gray-900'>
						{product.name}
					</CardTitle>
					<div className='flex items-center gap-2'>
						<Badge className='bg-red-600 text-white'>
							<Flame className='w-3 h-3 mr-1' />
							Hot
						</Badge>
						{SALES_ENABLED ? (
							<Badge className='bg-emerald-600 text-white hidden sm:inline-flex'>
								Free over £20
							</Badge>
						) : (
							<Badge className='bg-amber-600 text-white hidden sm:inline-flex'>
								Coming Soon
							</Badge>
						)}
					</div>
				</div>
				<div className='text-2xl font-bold text-red-600 mb-2'>
					{product.price}
				</div>
			</CardHeader>

			<CardContent className='space-y-4'>
				<CardDescription className='text-gray-700 leading-relaxed'>
					{product.description}
				</CardDescription>

				<div className='space-y-4'>
					{/* Enhanced Heat Level Indicator */}
					<div className='bg-gradient-to-r from-coconut-50 to-coconut-100 p-4 rounded-xl border border-coconut-200'>
						<div className='flex items-center justify-between mb-3'>
							<h4 className='font-bold text-burgundy-900 text-sm'>
								Heat Level
							</h4>
							<HeatLevelBadge heatLevel={3} />
						</div>
						<SpiceHeatIndicator
							heatLevel={3}
							variant='detailed'
							size='sm'
							className='w-full'
						/>
					</div>

					{/* Enhanced Product Features */}
					<div className='grid grid-cols-2 gap-3'>
						<div className='flex items-center space-x-3 p-3 rounded-lg bg-palm-50 border border-palm-200 hover:bg-palm-100 transition-colors'>
							<div className='w-10 h-10 bg-palm-100 rounded-full flex items-center justify-center border border-palm-300'>
								<Leaf className='w-5 h-5 text-palm-600' />
							</div>
							<div>
								<p className='font-bold text-sm text-burgundy-900'>
									🌿 All Natural
								</p>
								<p className='text-xs text-palm-700 font-medium'>
									No preservatives
								</p>
							</div>
						</div>

						<div className='flex items-center space-x-3 p-3 rounded-lg bg-turmeric-50 border border-turmeric-200 hover:bg-turmeric-100 transition-colors'>
							<div className='w-10 h-10 bg-turmeric-100 rounded-full flex items-center justify-center border border-turmeric-300'>
								<Star className='w-5 h-5 text-turmeric-600' />
							</div>
							<div>
								<p className='font-bold text-sm text-burgundy-900'>
									⭐ Premium Quality
								</p>
								<p className='text-xs text-turmeric-700 font-medium'>
									Chef handcrafted
								</p>
							</div>
						</div>
					</div>

					{/* Additional product info if needed */}
					<div className='flex items-center justify-center p-3 rounded-lg bg-coconut-50 border border-coconut-200'>
						<div className='flex items-center space-x-2'>
							<span className='text-turmeric-600 font-bold text-sm'>
								📏 200g
							</span>
							<span className='text-palm-700 text-xs'>
								Perfect portion size
							</span>
						</div>
					</div>
				</div>

				{SALES_ENABLED ? (
					<Button
						onClick={handlePurchase}
						disabled={loading}
						className='w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 mt-6'
					>
						{loading ? (
							<>
								<Loader2 className='w-4 h-4 mr-2 animate-spin' />
								Processing...
							</>
						) : (
							<>
								<ShoppingCart className='w-4 h-4 mr-2' />
								Buy Now
							</>
						)}
					</Button>
				) : (
					<Button
						onClick={handleJoinWaitlist}
						disabled={joining}
						className='w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 mt-6'
					>
						{joining ? (
							<>
								<Loader2 className='w-4 h-4 mr-2 animate-spin' />
								Joining...
							</>
						) : (
							<>
								<Bell className='w-4 h-4 mr-2' />
								Join Waitlist
							</>
						)}
					</Button>
				)}
			</CardContent>
		</GlassCard>
	);
}
