"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, ArrowRight, Home } from "lucide-react";
import Link from "next/link";

function SuccessPageContent() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const sessionId = searchParams.get("session_id");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate loading time for better UX
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return (
			<div className='min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 flex items-center justify-center'>
				<div className='text-center'>
					<div className='animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4'></div>
					<p className='text-lg text-gray-600'>
						Processing your order...
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gradient-to-b from-green-50 to-emerald-50'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='text-center mb-8'>
					<CheckCircle className='w-20 h-20 text-green-600 mx-auto mb-6' />
					<h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
						Order Successful!
					</h1>
					<p className='text-xl text-gray-600'>
						Thank you for your purchase. Your authentic
						Indonesian sambal is on its way!
					</p>
				</div>

				<Card className='shadow-xl border-0 bg-white/80 backdrop-blur-sm mb-8'>
					<CardHeader className='text-center'>
						<CardTitle className='text-2xl text-green-600 flex items-center justify-center'>
							<Package className='w-6 h-6 mr-2' />
							Order Confirmed
						</CardTitle>
						<CardDescription>
							{sessionId && (
								<span className='text-sm text-gray-500'>
									Order ID:{" "}
									{sessionId.slice(-8).toUpperCase()}
								</span>
							)}
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-6'>
						<div className='bg-amber-50 border border-amber-200 rounded-lg p-6'>
							<h3 className='font-semibold text-gray-900 mb-3 flex items-center'>
								<Package className='w-5 h-5 mr-2 text-amber-600' />
								What happens next?
							</h3>
							<div className='space-y-3 text-gray-700'>
								<div className='flex items-start space-x-3'>
									<div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
										<span className='text-green-600 text-sm font-bold'>
											1
										</span>
									</div>
									<div>
										<p className='font-medium'>
											Order Processing
										</p>
										<p className='text-sm text-gray-600'>
											We&apos;ll prepare your
											sambal with care using
											our traditional methods
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-3'>
									<div className='w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
										<span className='text-amber-600 text-sm font-bold'>
											2
										</span>
									</div>
									<div>
										<p className='font-medium'>
											Shipping Notification
										</p>
										<p className='text-sm text-gray-600'>
											You&apos;ll receive
											tracking information via
											email within 1-2 business
											days
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-3'>
									<div className='w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
										<span className='text-red-600 text-sm font-bold'>
											3
										</span>
									</div>
									<div>
										<p className='font-medium'>
											Enjoy Your Sambal!
										</p>
										<p className='text-sm text-gray-600'>
											Delivery typically takes
											3-5 business days within
											the UK
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className='bg-red-50 border border-red-200 rounded-lg p-6'>
							<h3 className='font-semibold text-gray-900 mb-3'>
								Storage & Usage Tips
							</h3>
							<div className='space-y-2 text-sm text-gray-700'>
								<p>
									• <strong>Storage:</strong>{" "}
									Refrigerate after opening, use
									within 4 weeks
								</p>
								<p>
									• <strong>Perfect for:</strong>{" "}
									BBQs, stir-fries, eggs, noodles,
									and rice dishes
								</p>
								<p>
									• <strong>Heat Level:</strong>{" "}
									Medium-Hot (🌶️🌶️🌶️) - perfect for
									UK palates
								</p>
								<p>
									• <strong>Ingredients:</strong> Red
									chilies, shallots, garlic, palm
									oil, salt, sugar, shrimp paste
								</p>
							</div>
						</div>

						<div className='flex flex-col sm:flex-row gap-4 pt-6'>
							<Link href='/dashboard' className='flex-1'>
								<Button className='w-full bg-green-600 hover:bg-green-700 text-white'>
									<ArrowRight className='w-4 h-4 mr-2' />
									View Order History
								</Button>
							</Link>
							<Link href='/shop' className='flex-1'>
								<Button
									variant='outline'
									className='w-full'
								>
									Continue Shopping
								</Button>
							</Link>
							<Link href='/' className='flex-1'>
								<Button
									variant='outline'
									className='w-full'
								>
									<Home className='w-4 h-4 mr-2' />
									Back to Home
								</Button>
							</Link>
						</div>
					</CardContent>
				</Card>

				<div className='text-center text-gray-600'>
					<p className='mb-2'>Questions about your order?</p>
					<p>
						Contact us at{" "}
						<a
							href='mailto:info@spiceislandindonesia.com'
							className='text-red-600 hover:text-red-700 font-medium'
						>
							info@spiceislandindonesia.com
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default function SuccessPage() {
	return (
		<Suspense
			fallback={
				<div className='min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 flex items-center justify-center'>
					<div className='text-center'>
						<div className='animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4'></div>
						<p className='text-lg text-gray-600'>
							Loading...
						</p>
					</div>
				</div>
			}
		>
			<SuccessPageContent />
		</Suspense>
	);
}
