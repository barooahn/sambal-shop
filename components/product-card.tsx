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
import { Flame, Leaf, Star, ShoppingCart, Loader2 } from "lucide-react";
import { Product } from "@/src/stripe-config";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

interface ProductCardProps {
	product: Product;
	user?: any;
}

export function ProductCard({ product, user }: ProductCardProps) {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handlePurchase = async () => {
		if (!user) {
			router.push("/login");
			return;
		}

		setLoading(true);

		try {
			const {
				data: { session },
			} = await supabase.auth.getSession();

			if (!session) {
				router.push("/login");
				return;
			}

			const response = await fetch(
				`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/stripe-checkout`,
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${session.access_token}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						price_id: product.priceId,
						success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
						cancel_url: `${window.location.origin}/shop`,
						mode: product.mode,
					}),
				}
			);

			const data = await response.json();

			if (data.error) {
				throw new Error(data.error);
			}

			if (data.url) {
				window.location.href = data.url;
			}
		} catch (error) {
			console.error("Error creating checkout session:", error);
			alert("Failed to start checkout. Please try again.");
		} finally {
			setLoading(false);
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
					<Badge className='bg-red-600 text-white'>
						<Flame className='w-3 h-3 mr-1' />
						Hot
					</Badge>
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
			</CardContent>
		</GlassCard>
	);
}
