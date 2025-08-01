"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, Heart, User, LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [user, setUser] = useState<any>(null);
	const router = useRouter();

	const navigation = [
		{ name: "Home", href: "/" },
		{ name: "Products", href: "/shop" },
		{ name: "About", href: "/about" },
		{ name: "Recipes", href: "/recipes" },
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

	return (
		<header className='bg-white/95 backdrop-blur-sm border-b border-gold-200 sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					{/* Logo */}
					<Link href='/' className='flex items-center space-x-2'>
						<div className='w-10 h-10 bg-burgundy-900 rounded-full flex items-center justify-center'>
							<Heart className='w-6 h-6 text-gold-300' />
						</div>
						<div className='hidden sm:block'>
							<div className='text-xl font-bold text-burgundy-900 font-brand'>
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
							<Link
								key={item.name}
								href={item.href}
								className='text-burgundy-800 hover:text-burgundy-600 font-medium font-body transition-colors duration-200'
							>
								{item.name}
							</Link>
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
								<Link
									key={item.name}
									href={item.href}
									className='block px-3 py-2 text-burgundy-800 hover:text-burgundy-600 hover:bg-burgundy-50 rounded-md font-medium font-body transition-colors duration-200'
									onClick={() =>
										setIsMenuOpen(false)
									}
								>
									{item.name}
								</Link>
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
