"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Menu,
	X,
	ShoppingCart,
	Heart,
	User,
	LogOut,
	ChevronDown,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import OptimizedImage from "@/components/optimization/OptimizedImage";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProductsOpen, setIsProductsOpen] = useState(false);
	const [user, setUser] = useState<any>(null);
	const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(
		null
	);
	const router = useRouter();

	const navigation = [
		{ name: "Home", href: "/" },
		{
			name: "Products",
			href: "/shop",
			hasDropdown: true,
			dropdown: [
				{
					name: "Sambal Oelek",
					href: "/shop#sambal-oelek",
					description: "Pure chili paste - the foundation",
				},
				{
					name: "Sambal Bali",
					href: "/shop#sambal-bali",
					description: "Sweet & spicy with aromatic spices",
				},
				{
					name: "Sample Pack",
					href: "/shop#sample-pack",
					description: "Try before you buy",
				},
				{
					name: "Gift Set",
					href: "/shop#gift-set",
					description: "Perfect for food lovers",
				},
				{
					name: "View All Products",
					href: "/shop",
					description: "See our complete range",
				},
			],
		},
		{ name: "Recipes", href: "/recipes" },
		{ name: "Blog", href: "/blog" },
		{ name: "Chef's Story", href: "/chef" },
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
		<header className='bg-white/95 backdrop-blur-sm border-b border-gold-200 sticky top-0 z-50'>
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
						<div className='block'>
							<div className='text-sm sm:text-xl font-bold text-burgundy-900 font-brand'>
								Spice Island
							</div>
							<div className='text-xs text-gold-700 font-elegant tracking-wider'>
								INDONESIA
							</div>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex space-x-8'>
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
											<div className='absolute top-full left-0 w-80 bg-white rounded-sm shadow-luxury border border-gold-200 p-6 z-50'>
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
																className='block group'
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
																		<p className='text-sm text-neutral-600 font-body'>
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
					<div className='hidden md:flex items-center space-x-4'>
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
										Shop Now
									</Button>
								</Link>
							</>
						)}
					</div>

					{/* Mobile menu button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className='md:hidden p-2 rounded-md text-burgundy-800 hover:text-burgundy-600 hover:bg-burgundy-50 transition-colors duration-200'
					>
						{isMenuOpen ? (
							<X className='w-6 h-6' />
						) : (
							<Menu className='w-6 h-6' />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className='md:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gold-200'>
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
												Shop Now
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
