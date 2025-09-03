"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/simple-button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	User,
	Package,
	CreditCard,
	Calendar,
	ArrowRight,
	ShoppingBag,
} from "@/components/ui/icons";
import Link from "next/link";
import { getInternalUrls } from "@/lib/url-utils";

interface Order {
	order_id: number | null;
	checkout_session_id: string | null;
	payment_intent_id: string | null;
	amount_subtotal: number | null;
	amount_total: number | null;
	currency: string | null;
	payment_status: string | null;
	order_status: "pending" | "completed" | "canceled" | null;
	order_date: string | null;
}

interface Subscription {
	customer_id: string;
	subscription_id: string | null;
	subscription_status:
		| "not_started"
		| "incomplete"
		| "incomplete_expired"
		| "trialing"
		| "active"
		| "past_due"
		| "canceled"
		| "unpaid"
		| "paused"
		| null;
	price_id: string | null;
	current_period_start: number | null;
	current_period_end: number | null;
	cancel_at_period_end: boolean;
	payment_method_brand: string | null;
	payment_method_last4: string | null;
}

export default function DashboardPage() {
	const urls = getInternalUrls();

	const [user, setUser] = useState<any>(null);
	const [orders, setOrders] = useState<Order[]>([]);
	const [subscription, setSubscription] = useState<Subscription | null>(
		null
	);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const getUser = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();

			if (!user) {
				router.push("/login");
				return;
			}

			setUser(user);
			await fetchUserData();
			setLoading(false);
		};

		getUser();

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((event, session) => {
			if (!session?.user) {
				router.push("/login");
			} else {
				setUser(session.user);
			}
		});

		return () => subscription.unsubscribe();
	}, [router]);

	const fetchUserData = async () => {
		try {
			// Fetch orders
			const { data: ordersData, error: ordersError } = await supabase
				.from("stripe_user_orders")
				.select("*")
				.order("order_date", { ascending: false });

			if (ordersError) {
				console.error("Error fetching orders:", ordersError);
			} else {
				setOrders((ordersData as unknown as Order[]) || []);
			}

			// Fetch subscription using maybeSingle()
			const { data: subscriptionData, error: subscriptionError } =
				await supabase
					.from("stripe_user_subscriptions")
					.select("*")
					.maybeSingle();

			if (subscriptionError) {
				console.error(
					"Error fetching subscription:",
					subscriptionError
				);
			} else {
				setSubscription(subscriptionData as unknown as Subscription);
			}
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	const handleSignOut = async () => {
		await supabase.auth.signOut();
		router.push("/");
	};

	const formatCurrency = (
		amount: number | null,
		currency: string | null
	) => {
		if (amount === null || currency === null) {
			return "N/A";
		}
		return new Intl.NumberFormat("en-GB", {
			style: "currency",
			currency: currency.toUpperCase(),
		}).format(amount / 100);
	};

	const formatDate = (dateString: string | null) => {
		if (!dateString) {
			return "N/A";
		}
		return new Date(dateString).toLocaleDateString("en-GB", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	const getStatusBadgeColor = (status: string | null) => {
		switch (status) {
			case "completed":
			case "active":
				return "bg-green-100 text-green-800";
			case "pending":
				return "bg-yellow-100 text-yellow-800";
			case "canceled":
				return "bg-red-100 text-red-800";
			case null:
			case "unknown":
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	if (loading) {
		return (
			<div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-orange-50'>
				<div className='animate-spin rounded-full h-32 w-32 border-b-2 border-red-600'></div>
			</div>
		);
	}

	return (
		<div className='bg-gradient-to-b from-amber-50 to-orange-50'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='mb-8'>
					<h1 className='text-4xl font-bold text-gray-900 mb-2 flex items-center'>
						<User className='w-10 h-10 mr-4 text-red-600' />
						Welcome back!
					</h1>
					<p className='text-xl text-gray-600'>
						Manage your orders and account settings
					</p>
				</div>

				<div className='grid lg:grid-cols-3 gap-8'>
					{/* Account Info */}
					<div className='lg:col-span-1'>
						<Card className='shadow-lg'>
							<CardHeader>
								<CardTitle className='flex items-center'>
									<User className='w-5 h-5 mr-2 text-red-600' />
									Account Information
								</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div>
									<p className='text-sm text-gray-600'>
										Email
									</p>
									<p className='font-medium'>
										{user?.email}
									</p>
								</div>
								<div>
									<p className='text-sm text-gray-600'>
										Member since
									</p>
									<p className='font-medium'>
										{user?.created_at
											? formatDate(
													user.created_at
												)
											: "N/A"}
									</p>
								</div>

								{/* Subscription Status */}
								{subscription && (
									<div className='pt-4 border-t'>
										<p className='text-sm text-gray-600 mb-2'>
											Subscription Status
										</p>
										<Badge
											className={getStatusBadgeColor(
												subscription.subscription_status ||
													"unknown"
											)}
										>
											{subscription.subscription_status
												? subscription.subscription_status
														.replace(
															"_",
															" "
														)
														.toUpperCase()
												: "UNKNOWN"}
										</Badge>
										{subscription.subscription_status ===
											"active" &&
											subscription.current_period_end && (
												<p className='text-xs text-gray-500 mt-1'>
													Renews on{" "}
													{formatDate(
														new Date(
															subscription.current_period_end *
																1000
														).toISOString()
													)}
												</p>
											)}
									</div>
								)}
							</CardContent>
						</Card>
					</div>

					{/* Orders */}
					<div className='lg:col-span-2'>
						<Card className='shadow-lg'>
							<CardHeader>
								<CardTitle className='flex items-center justify-between'>
									<div className='flex items-center'>
										<Package className='w-5 h-5 mr-2 text-red-600' />
										Order History
									</div>
									<Link href={urls.shop}>
										<Button
											variant='outline'
											size='sm'
										>
											<ShoppingBag className='w-4 h-4 mr-2' />
											Shop More
										</Button>
									</Link>
								</CardTitle>
								<CardDescription>
									View your recent purchases and
									order status
								</CardDescription>
							</CardHeader>
							<CardContent>
								{orders.length === 0 ? (
									<div className='text-center py-12'>
										<Package className='w-16 h-16 mx-auto text-gray-300 mb-4' />
										<h3 className='text-lg font-medium text-gray-900 mb-2'>
											No orders yet
										</h3>
										<p className='text-gray-600 mb-6'>
											Start shopping for
											authentic Indonesian
											sambal to see your orders
											here.
										</p>
										<Link href={urls.shop}>
											<Button className='bg-red-600 hover:bg-red-700'>
												<ShoppingBag className='w-4 h-4 mr-2' />
												Start Shopping
											</Button>
										</Link>
									</div>
								) : (
									<div className='space-y-4'>
										{orders.map(
											(order, index) => (
												<div
													key={
														order.order_id ||
														order.checkout_session_id ||
														`order-${index}`
													}
													className='border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow'
												>
													<div className='flex justify-between items-start mb-3'>
														<div>
															<p className='font-medium text-gray-900'>
																Order
																#
																{order.checkout_session_id
																	? order.checkout_session_id
																			.slice(
																				-8
																			)
																			.toUpperCase()
																	: order.order_id
																		? order.order_id
																				.toString()
																				.padStart(
																					8,
																					"0"
																				)
																		: "UNKNOWN"}
															</p>
															<p className='text-sm text-gray-600 flex items-center mt-1'>
																<Calendar className='w-4 h-4 mr-1' />
																{formatDate(
																	order.order_date
																)}
															</p>
														</div>
														<Badge
															className={getStatusBadgeColor(
																order.order_status
															)}
														>
															{order.order_status
																? order.order_status.toUpperCase()
																: "UNKNOWN"}
														</Badge>
													</div>

													<div className='flex justify-between items-center'>
														<div className='flex items-center space-x-4'>
															<div className='flex items-center text-sm text-gray-600'>
																<CreditCard className='w-4 h-4 mr-1' />
																{order.payment_status ||
																	"N/A"}
															</div>
															<div className='text-lg font-semibold text-gray-900'>
																{formatCurrency(
																	order.amount_total,
																	order.currency
																)}
															</div>
														</div>

														{order.order_status ===
															"completed" && (
															<Button
																variant='outline'
																size='sm'
															>
																<ArrowRight className='w-4 h-4 mr-1' />
																Reorder
															</Button>
														)}
													</div>
												</div>
											)
										)}
									</div>
								)}
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
