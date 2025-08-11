"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GlassCard from "@/components/ui/GlassCard";
import { Flame, Leaf, Star, ShoppingCart, Loader2, Bell } from "lucide-react";
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
		toast.error("Checkout is currently unavailable. Please join our waitlist for updates!");
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

				<div className='grid grid-cols-2 gap-3'>
					<div className='flex items-center space-x-2'>
						<div className='w-8 h-8 bg-red-100 rounded-full flex items-center justify-center'>
							<Flame className='w-4 h-4 text-red-600' />
						</div>
						<div>
							<p className='font-semibold text-sm text-gray-900'>
								Medium-Hot
							</p>
							<p className='text-xs text-gray-600'>
								🌶️🌶️🌶️
							</p>
						</div>
					</div>

					<div className='flex items-center space-x-2'>
						<div className='w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center'>
							<Leaf className='w-4 h-4 text-emerald-600' />
						</div>
						<div>
							<p className='font-semibold text-sm text-gray-900'>
								All Natural
							</p>
							<p className='text-xs text-gray-600'>
								No preservatives
							</p>
						</div>
					</div>

					<div className='flex items-center space-x-2'>
						<div className='w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center'>
							<Star className='w-4 h-4 text-amber-600' />
						</div>
						<div>
							<p className='font-semibold text-sm text-gray-900'>
								Premium
							</p>
							<p className='text-xs text-gray-600'>
								Handcrafted
							</p>
						</div>
					</div>

					<div className='flex items-center space-x-2'>
						<div className='w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center'>
							<span className='text-orange-600 font-bold text-xs'>
								200g
							</span>
						</div>
						<div>
							<p className='font-semibold text-sm text-gray-900'>
								Size
							</p>
							<p className='text-xs text-gray-600'>
								Perfect portion
							</p>
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
