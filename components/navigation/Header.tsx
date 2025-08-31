"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, User, LogOut, ChevronDown } from "lucide-react";
import { supabase } from "@/lib/supabase";
import OptimizedImage from "@/components/optimization/OptimizedImage";
import SearchButton from "@/components/search/SearchButton";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProductsOpen, setIsProductsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [user, setUser] = useState<any>(null);
	const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(
		null
	);
	const router = useRouter();
	const SALES_ENABLED = process.env.NEXT_PUBLIC_SALES_ENABLED === "true";

	const navigation = [
		{ name: "Home", href: "/" },
		{
			name: "Products",
			href: "/shop",
			hasDropdown: true,
			dropdown: [
				{
					name: "Sambal Goreng",
					href: "/sambal-goreng-uk",
					description:
						"Sweet & spicy with traditional fried method",
				},
				{
					name: "Sambal Oelek",
					href: "/sambal-oelek-uk",
					description: "Pure chili paste - Coming Soon",
				},
				{
					name: "Sambal Bali",
					href: "/sambal-bali-aromatic-spicy",
					description: "Aromatic spices - Coming Soon",
				},
				{
					name: "Sample Pack",
					href: "/sample-pack-try-first",
					description: "Try before you buy",
				},
				{
					name: "Gift Set",
					href: "/gift-set",
					description: "Perfect for food lovers",
				},
				{
					name: "View All Products",
					href: "/products",
					description: "See our complete range",
				},
			],
		},
		{ name: "Recipes", href: "/recipes" },
		{ name: "Blog", href: "/blog" },
		{ name: "About", href: "/about" },
		{ name: "Wholesale", href: "/wholesale" },
	];

	useEffect(() => {
		// Get initial user
		const getUser = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			setUser(user);
		};
		getUser();

		// Listen for auth changes
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((event, session) => {
			setUser(session?.user || null);
		});

		return () => subscription.unsubscribe();
	}, []);

	// Collapse micro-bar and add gold accent on scroll
	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 10);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleSignOut = async () => {
		await supabase.auth.signOut();
		router.push("/");
	};

	const handleMouseEnter = () => {
		if (hoverTimeout) {
			clearTimeout(hoverTimeout);
			setHoverTimeout(null);
		}
		setIsProductsOpen(true);
	};

	const handleMouseLeave = () => {
		const timeout = setTimeout(() => {
			setIsProductsOpen(false);
		}, 150); // Small delay to allow moving to dropdown

		setHoverTimeout(timeout);
	};

	return (
		<header
			role="banner"
			className={`sticky top-0 z-50 backdrop-blur-sm transition-all duration-300 ${isScrolled ? "bg-cream-50/80 border-b border-gold-300 shadow-gold" : "bg-cream-50/95 border-b border-gold-200"}`}
		>
			<a
				href='#main-content'
				className='sr-only focus:not-sr-only absolute left-2 top-2 z-[60] bg-white text-burgundy-900 px-3 py-2 rounded-sm shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-600 focus-visible:ring-offset-2'
			>
				Skip to content
			</a>
			{/* Top micro-bar */}
			<div
				className={`overflow-hidden bg-burgundy-900 text-gold-100 text-xs font-body transition-[height,opacity] duration-300 ${isScrolled ? "h-0 opacity-0" : "h-9 opacity-100"}`}
			>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center'>
					<div className='flex items-center gap-6 overflow-x-auto whitespace-nowrap w-full no-scrollbar'>
						<span className='flex items-center gap-1.5'>
							Free UK delivery over £20
						</span>
						<span className='flex items-center gap-1.5'>
							30-day returns
						</span>
						<span className='flex items-center gap-1.5'>
							Small-batch quality
						</span>
					</div>
				</div>
			</div>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					{/* Logo */}
					<Link href='/' className='flex items-center space-x-2'>
						<div className='relative w-10 h-10 sm:w-10 sm:h-10'>
							<OptimizedImage
								src='/images/optimized/logo-xs.webp'
								alt='Spice Island Indonesia Logo'
								width={45}
								height={45}
								className='w-full h-full object-contain'
								priority
								quality={85}
								sizes='(max-width: 640px) 32px, 40px'
							/>
						</div>
						<div className='flex flex-col items-center justify-center leading-none'>
							<div className='font-logo text-gold-700 pb-1'>
								SPICE ISLAND
							</div>
							<div className='font-logo-sub text-gold-700'>
								INDONESIA
							</div>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav
						className='hidden lg:flex space-x-8'
						aria-label='Primary'
					>
						{navigation.map((item) => (
							<div key={item.name}>
								{item.hasDropdown ? (
									<div
										onMouseEnter={
											handleMouseEnter
										}
										onMouseLeave={
											handleMouseLeave
										}
									>
										<button className='flex items-center space-x-1 text-burgundy-800 hover:text-burgundy-600 font-medium font-body transition-colors duration-200'>
											<span>{item.name}</span>
											<ChevronDown className='w-4 h-4' />
										</button>

										{isProductsOpen && (
											<div
												id='products-menu'
												role='menu'
												className='absolute top-full left-1/2 -translate-x-1/2 w-[80vw] max-w-7xl bg-white rounded-lg shadow-lg border border-gold-200 p-4 sm:p-6 z-50'
											>
												{/* Header */}
												<div className='mb-4 sm:mb-6 text-center'>
													<h3 className='text-lg sm:text-xl font-bold text-burgundy-900 font-brand mb-1'>
														Our Sambal
														Collection
													</h3>
													<p className='text-sm text-neutral-600 font-body'>
														Authentic
														Indonesian
														chili
														pastes
														from Chef
														Yossie
													</p>
												</div>

												{/* Products Grid */}
												<div className='grid md:grid-cols-3 gap-6 mb-10'>
													{item.dropdown
														?.slice(
															0,
															3
														)
														.map(
															(
																dropdownItem
															) => {
																// Product images mapping
																const productImages: {
																	[
																		key: string
																	]: string;
																} =
																	{
																		"Sambal Goreng":
																			"/images/optimized/sambal-goreng-md.webp",
																		"Sambal Oelek":
																			"/images/optimized/sambal-oelek-md.webp",
																		"Sambal Bali":
																			"/images/optimized/sambal-bali-md.webp",
																	};

																// Heat level indicators
																const heatLevels: {
																	[
																		key: string
																	]: string;
																} =
																	{
																		"Sambal Goreng":
																			"🌶️🌶️🌶️",
																		"Sambal Oelek":
																			"🌶️🌶️🌶️🌶️🌶️",
																		"Sambal Bali":
																			"🌶️🌶️🌶️",
																	};

																// Status badges
																const statusInfo: {
																	[
																		key: string
																	]: {
																		status: string;
																		color: string;
																	};
																} =
																	{
																		"Sambal Goreng":
																			{
																				status: "Featured",
																				color: "bg-amber-500",
																			},
																		"Sambal Oelek":
																			{
																				status: "Coming Soon",
																				color: "bg-burgundy-600",
																			},
																		"Sambal Bali":
																			{
																				status: "Coming Soon",
																				color: "bg-burgundy-600",
																			},
																	};

																return (
																	<Link
																		key={
																			dropdownItem.name
																		}
																		href={
																			dropdownItem.href
																		}
																		className='block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-600 focus-visible:ring-offset-2 rounded-lg'
																		onClick={() =>
																			setIsProductsOpen(
																				false
																			)
																		}
																	>
																		{/* Unified Card Layout */}
																		<div className='p-4 rounded-lg hover:bg-gradient-to-r hover:from-burgundy-50 hover:to-gold-50 transition-all duration-200 border border-transparent hover:border-gold-200 text-center'>
																			{/* Product Image */}
																			<div className='relative mx-auto flex items-center justify-center w-36 h-40 bg-white rounded-lg mb-6'>
																				<OptimizedImage
																					src={
																						productImages[
																							dropdownItem
																								.name
																						] ||
																						"/images/optimized/sambal-oelek-md.webp"
																					}
																					alt={`${dropdownItem.name} - Indonesian chili paste`}
																					width={
																						160
																					}
																					height={
																						180
																					}
																					className='w-auto h-full object-contain'
																					quality={
																						95
																					}
																					sizes='160px'
																				/>
																				{/* Status Badge */}
																				<div
																					className={`absolute top-2 right-2 ${statusInfo[dropdownItem.name]?.color || "bg-burgundy-600"} text-white text-xs px-2 py-0.5 rounded-full font-medium`}
																				>
																					{statusInfo[
																						dropdownItem
																							.name
																					]
																						?.status ||
																						"Soon"}
																				</div>
																			</div>

																			{/* Product Info */}
																			<div>
																				<h4 className='font-bold text-burgundy-900 group-hover:text-burgundy-700 font-brand text-base mb-1 pt-4'>
																					{
																						dropdownItem.name
																					}
																				</h4>
																				<div className='text-sm text-burgundy-600 mb-2'>
																					{heatLevels[
																						dropdownItem
																							.name
																					] ||
																						"🌶️🌶️🌶️"}
																				</div>
																				<p className='text-xs text-neutral-700 font-body leading-tight mb-2'>
																					{
																						dropdownItem.description
																					}
																				</p>
																				<div className='text-sm text-burgundy-600 font-semibold'>
																					£7.49
																					•
																					185g
																				</div>
																			</div>
																		</div>
																	</Link>
																);
															}
														)}
												</div>

												{/* Additional Options */}
												<div className='border-t border-gold-200 pt-4'>
													<div className='grid md:grid-cols-3 gap-3'>
														{item.dropdown
															?.slice(
																3
															)
															.map(
																(
																	dropdownItem
																) => (
																	<Link
																		key={
																			dropdownItem.name
																		}
																		href={
																			dropdownItem.href
																		}
																		className='block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-600 focus-visible:ring-offset-2 rounded-md'
																		onClick={() =>
																			setIsProductsOpen(
																				false
																			)
																		}
																	>
																		<div className='p-3 rounded-md hover:bg-burgundy-50 transition-all duration-200 text-center'>
																			<h4 className='font-semibold text-burgundy-900 group-hover:text-burgundy-700 font-brand text-sm mb-1'>
																				{
																					dropdownItem.name
																				}
																			</h4>
																			<p className='text-xs text-neutral-600 font-body'>
																				{
																					dropdownItem.description
																				}
																			</p>
																		</div>
																	</Link>
																)
															)}
													</div>
												</div>

												{/* Call to Action */}
												<div className='border-t border-gold-200 pt-4 mt-4'>
													<Link
														href='/products'
														className='block w-full'
														onClick={() =>
															setIsProductsOpen(
																false
															)
														}
													>
														<div className='text-center p-3 bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white rounded-lg hover:from-burgundy-700 hover:to-burgundy-800 transition-all duration-200 font-semibold text-sm'>
															View
															All
															Products
															&
															Comparison
															Tool
														</div>
													</Link>
												</div>
											</div>
										)}
									</div>
								) : (
									<Link
										href={item.href}
										className='text-burgundy-800 hover:text-burgundy-600 font-medium font-body transition-colors duration-200'
									>
										{item.name}
									</Link>
								)}
							</div>
						))}
					</nav>

					{/* Desktop CTA */}
					<div className='hidden lg:flex items-center space-x-4'>
						{user ? (
							<>
								<Link href='/dashboard'>
									<Button
										variant='outline'
										className='flex items-center space-x-2'
									>
										<User className='w-4 h-4' />
										<span>Dashboard</span>
									</Button>
								</Link>
								<Button
									onClick={handleSignOut}
									variant='outline'
									className='flex items-center space-x-2'
								>
									<LogOut className='w-4 h-4' />
									<span>Sign Out</span>
								</Button>
							</>
						) : (
							<>
								<Link href='/login'>
									<Button variant='outline'>
										Sign In
									</Button>
								</Link>
								<Link href='/sambal-goreng-uk'>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant'
									>
										<ShoppingCart className='w-4 h-4 mr-2' />
										Learn About Sambal Goreng
									</Button>
								</Link>
							</>
						)}
					</div>

					{/* Search & Mobile Menu */}
					<div className='flex items-center space-x-2'>
						<SearchButton />
						<button
							className='lg:hidden p-2 rounded-md text-burgundy-800 hover:text-burgundy-600 hover:bg-burgundy-50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-600 focus-visible:ring-offset-2'
							aria-label={
								isMenuOpen ? "Close menu" : "Open menu"
							}
							aria-expanded={isMenuOpen}
							aria-controls='mobile-menu'
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? (
								<X className='w-6 h-6' />
							) : (
								<Menu className='w-6 h-6' />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<nav 
						id="mobile-menu" 
						className='lg:hidden' 
						role="navigation" 
						aria-label="Mobile navigation"
					>
						<div className='px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gold-200'>
							{/* Search Link */}
							<Link
								href='/search'
								className='block px-3 py-2 text-burgundy-800 hover:text-burgundy-600 hover:bg-burgundy-50 rounded-md font-medium font-body transition-colors duration-200'
								onClick={() => setIsMenuOpen(false)}
							>
								🔍 Search
							</Link>

							{navigation.map((item) => (
								<div key={item.name}>
									{item.hasDropdown ? (
										<div className='space-y-1'>
											<Link
												href={item.href}
												className='block px-3 py-2 text-burgundy-800 hover:text-burgundy-600 hover:bg-burgundy-50 rounded-md font-medium font-body transition-colors duration-200'
												onClick={() =>
													setIsMenuOpen(
														false
													)
												}
											>
												{item.name}
											</Link>
											<div className='pl-4 space-y-1'>
												{item.dropdown?.map(
													(
														dropdownItem
													) => (
														<Link
															key={
																dropdownItem.name
															}
															href={
																dropdownItem.href
															}
															className='block px-3 py-2 text-sm text-burgundy-700 hover:text-burgundy-600 hover:bg-burgundy-50 rounded-md font-body transition-colors duration-200'
															onClick={() =>
																setIsMenuOpen(
																	false
																)
															}
														>
															{
																dropdownItem.name
															}
														</Link>
													)
												)}
											</div>
										</div>
									) : (
										<Link
											href={item.href}
											className='block px-3 py-2 text-burgundy-800 hover:text-burgundy-600 hover:bg-burgundy-50 rounded-md font-medium font-body transition-colors duration-200'
											onClick={() =>
												setIsMenuOpen(false)
											}
										>
											{item.name}
										</Link>
									)}
								</div>
							))}
							<div className='pt-4 pb-2 space-y-2'>
								{user ? (
									<>
										<Link href='/dashboard'>
											<Button
												variant='outline'
												className='w-full flex items-center justify-center space-x-2'
												onClick={() =>
													setIsMenuOpen(
														false
													)
												}
											>
												<User className='w-4 h-4' />
												<span>
													Dashboard
												</span>
											</Button>
										</Link>
										<Button
											onClick={() => {
												handleSignOut();
												setIsMenuOpen(
													false
												);
											}}
											variant='outline'
											className='w-full flex items-center justify-center space-x-2'
										>
											<LogOut className='w-4 h-4' />
											<span>Sign Out</span>
										</Button>
									</>
								) : (
									<>
										<Link href='/login'>
											<Button
												variant='outline'
												className='w-full'
												onClick={() =>
													setIsMenuOpen(
														false
													)
												}
											>
												Sign In
											</Button>
										</Link>
										<Link href='/sambal-goreng-uk'>
											<Button
												variant='primary'
												size='lg'
												className='w-full font-elegant'
												onClick={() =>
													setIsMenuOpen(
														false
													)
												}
											>
												<ShoppingCart className='w-4 h-4 mr-2' />
												Learn About Sambal
												Goreng
											</Button>
										</Link>
									</>
								)}
							</div>
						</div>
					</nav>
				)}
			</div>
		</header>
	);
}
