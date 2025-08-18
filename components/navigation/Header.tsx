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
					name: "Sambal Oelek",
					href: "/sambal-oelek-uk",
					description: "Pure chili paste - the foundation",
				},
				{
					name: "Sambal Bali",
					href: "/sambal-bali-aromatic-spicy",
					description: "Aromatic spices with sophisticated heat",
				},
				{
					name: "Sambal Goreng",
					href: "/sambal-goreng-uk",
					description: "Sweet & spicy with traditional fried method",
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
								width={40}
								height={40}
								className='w-full h-full object-contain'
								priority
								quality={85}
								sizes='(max-width: 640px) 32px, 40px'
							/>
						</div>
						<div className='block leading-none'>
							<div className='text-sm sm:text-xl font-bold text-burgundy-900 font-logo'>
								Spice Island
							</div>
							<div className='text-[10px] sm:text-xs text-gold-800 font-elegant tracking-[0.28em]'>
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
							<div key={item.name} className='relative'>
								{item.hasDropdown ? (
									<div
										className='relative'
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
												className='absolute top-full left-0 w-80 bg-white rounded-sm shadow-luxury border border-gold-200 p-6 z-50'
											>
												<div className='space-y-4'>
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
																className='block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-600 focus-visible:ring-offset-2 rounded-sm'
																onClick={() =>
																	setIsProductsOpen(
																		false
																	)
																}
															>
																<div className='flex items-start space-x-3 p-3 rounded-sm hover:bg-gradient-to-r hover:from-burgundy-50 hover:to-gold-50 transition-all duration-200'>
																	<div className='flex-1'>
																		<h4 className='font-bold text-burgundy-900 group-hover:text-burgundy-700 font-brand'>
																			{
																				dropdownItem.name
																			}
																		</h4>
																		<p className='text-sm text-neutral-700 font-body'>
																			{
																				dropdownItem.description
																			}
																		</p>
																	</div>
																</div>
															</Link>
														)
													)}
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
								<Link href='/shop'>
									<Button
										variant='primary'
										size='lg'
										className='font-elegant'
									>
										<ShoppingCart className='w-4 h-4 mr-2' />
										{SALES_ENABLED
											? "Shop Now"
											: "Coming Soon"}
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
					<div className='lg:hidden'>
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
										<Link href='/shop'>
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
												{SALES_ENABLED
													? "Shop Now"
													: "Coming Soon"}
											</Button>
										</Link>
									</>
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
