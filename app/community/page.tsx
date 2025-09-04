import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/simple-button";
import { Badge } from "@/components/ui/badge";
import { getInternalUrls } from "@/lib/url-utils";
import dynamic from "next/dynamic";

// Lazy load heavy client components for better performance
const CommunityFeed = dynamic(
	() => import("@/components/community/CommunityFeed"),
	{
		loading: () => (
			<div className='space-y-4 animate-pulse'>
				{[1, 2, 3].map((i) => (
					<div
						key={i}
						className='h-48 bg-gray-200 rounded-lg'
					></div>
				))}
			</div>
		),
	}
);

const AchievementBadges = dynamic(
	() => import("@/components/community/AchievementBadges"),
	{
		loading: () => (
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse'>
				{[1, 2, 3, 4].map((i) => (
					<div
						key={i}
						className='h-24 bg-gray-200 rounded-lg'
					></div>
				))}
			</div>
		),
	}
);
import {
	Users,
	Trophy,
	Heart,
	Share2,
	Camera,
	Star,
	Flame,
} from "@/components/ui/icons";

export const metadata: Metadata = {
	title: "Sambal Community UK | Indonesian Spice Lovers & Recipe Sharing",
	description:
		"Join our vibrant community of Indonesian spice enthusiasts! Share your sambal stories, discover authentic recipes, earn achievement badges, and connect with fellow spice lovers across the UK.",
	keywords:
		"sambal community UK, Indonesian spice lovers, authentic Indonesian recipes, sambal stories, spice enthusiasts UK, Indonesian cooking community, recipe sharing, heat level challenge, Indonesian food culture UK",
	openGraph: {
		title: "Sambal Community UK | Indonesian Spice Lovers & Recipe Sharing",
		description:
			"Connect with fellow spice lovers, share cooking stories, and discover authentic Indonesian flavors. Join 247+ stories shared by our community!",
		type: "website",
		images: [
			{
				url: "/images/optimized/sambal-community-og.webp",
				width: 1200,
				height: 630,
				alt: "Sambal Community - Indonesian Spice Lovers UK",
			},
		],
		locale: "en_GB",
		siteName: "Spice Island Indonesia UK",
	},
	twitter: {
		card: "summary_large_image",
		title: "Sambal Community UK | Indonesian Spice Lovers",
		description:
			"Join our community of spice enthusiasts sharing authentic Indonesian recipes and sambal stories across the UK.",
	},
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/community",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function CommunityPage() {
	const urls = getInternalUrls();

	return (
		<>
			{/* Clean Subtle Background */}
			<div className='fixed inset-0 bg-coconut-50 pointer-events-none'></div>

			<div className='relative z-10 pt-20'>
				{/* Full Width Background Indonesian Cultural Image - High Resolution */}
				<div className='absolute inset-x-0 top-0 h-screen overflow-hidden -z-10'>
					<Image
						src='/images/optimized/indonesian-community-background-lg.webp'
						alt='Indonesian community landscape representing our cultural heritage'
						width={1920}
						height={1076}
						className='w-full h-full object-cover'
						loading='eager'
						quality={85}
						priority
						sizes='100vw'
					/>
					{/* Gradient overlay for smooth section transition */}
					<div className='absolute inset-0 bg-gradient-to-b from-transparent from-40% via-coconut-50/30 via-70% to-coconut-50'></div>
				</div>

				<div className='container mx-auto px-4 py-6 sm:py-8 lg:py-12 relative z-10'>
					{/* Indonesian Heritage Header Section */}
					<div className='text-center mb-8 sm:mb-12 lg:mb-16 relative'>
						{/* Hero Content Overlay Box */}
						<div className='absolute inset-0 -mx-4 sm:-mx-8 -my-4 sm:-my-8 bg-gradient-to-b from-white/85 via-white/75 to-white/85 backdrop-blur-sm rounded-3xl -z-10'></div>

						{/* Traditional Indonesian Welcome */}
						<div className='text-gold-600 text-sm font-medium mb-3 tracking-wide font-elegant'>
							Selamat datang di komunitas kami
						</div>
						<div className='text-gray-500 text-xs mb-8 sm:mb-10 font-body'>
							Welcome to our community
						</div>

						<div className='flex justify-center mb-8 sm:mb-10'>
							<div className='relative'>
								<div className='w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-gold-200'>
									<Image
										src='/images/optimized/traditional-sambal-making-lg.webp'
										alt='Traditional Indonesian sambal making representing our community'
										width={96}
										height={96}
										className='w-full h-full object-cover'
										loading='lazy'
									/>
								</div>
								<div className='absolute -top-2 -right-2 bg-burgundy-600 rounded-full p-2'>
									<Users
										className='w-4 h-4 text-white'
										aria-hidden='true'
									/>
								</div>
							</div>
						</div>
						<h1 className='text-4xl md:text-5xl font-bold text-burgundy-900 mb-4 relative'>
							Sambal Community
							<div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full'></div>
						</h1>
						<p className='text-xl text-burgundy-700 max-w-3xl mx-auto mb-4'>
							Connect with fellow spice lovers, share your
							cooking stories, and discover authentic
							Indonesian flavors together
						</p>
						<div className='text-gold-600 italic text-sm mb-10 sm:mb-12 font-script'>
							Mari berbagi cerita - Let's share stories
						</div>

						<div className='flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-2 sm:px-0'>
							<Badge className='bg-cream-100 text-burgundy-800 border border-gold-200 px-4 py-2 shadow-sm'>
								<Flame className='w-4 h-4 mr-2' />
								Heat Level Stories
								<span className='ml-2 text-xs text-gold-600'>
									• Pedas Level
								</span>
							</Badge>
							<Badge className='bg-cream-100 text-burgundy-800 border border-gold-200 px-4 py-2 shadow-sm'>
								<Camera className='w-4 h-4 mr-2' />
								Recipe Photos
								<span className='ml-2 text-xs text-gold-600'>
									• Foto Resep
								</span>
							</Badge>
							<Badge className='bg-gold-50 text-burgundy-800 border border-gold-200 px-4 py-2 shadow-sm'>
								<Trophy className='w-4 h-4 mr-2' />
								Achievement Badges
								<span className='ml-2 text-xs text-gold-600'>
									• Penghargaan
								</span>
							</Badge>
							<Badge className='bg-cream-100 text-burgundy-800 border border-gold-200 px-4 py-2 shadow-sm'>
								<Heart className='w-4 h-4 mr-2' />
								Community Support
								<span className='ml-2 text-xs text-burgundy-600'>
									• Dukungan
								</span>
							</Badge>
						</div>

						<div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0'>
							<Button
								asChild
								variant='sambal'
								size='lg'
								className='w-full sm:w-auto min-h-[48px] touch-manipulation'
							>
								<a
									href={urls.communityShareStory}
									aria-label='Share your Indonesian cooking story with the community'
									className='flex items-center'
								>
									<Share2
										className='w-5 h-5 mr-2'
										aria-hidden='true'
									/>
									Share Your Story
								</a>
							</Button>
							<Button
								asChild
								variant='cultural'
								size='lg'
								className='w-full sm:w-auto min-h-[48px] touch-manipulation'
							>
								<a
									href={urls.communityQuiz}
									aria-label='Take the Indonesian spice heat level quiz'
									className='flex items-center'
								>
									<Star
										className='w-5 h-5 mr-2'
										aria-hidden='true'
									/>
									Take Heat Quiz
								</a>
							</Button>
						</div>
					</div>

					{/* Stats Section */}
					<section
						aria-labelledby='community-stats-heading'
						className='mb-12 sm:mb-16 lg:mb-20'
					>
						<h2
							id='community-stats-heading'
							className='sr-only'
						>
							Community Statistics
						</h2>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6'>
							<Card className='text-center border-gold-200 bg-gradient-to-br from-cream-50 to-gold-50 shadow-lg border-l-4 border-l-gold-400 hover:shadow-xl transition-all duration-300 relative overflow-hidden'>
								<div className='absolute inset-0 opacity-5'>
									<div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gold-400 to-transparent rounded-bl-full'></div>
									<div className='absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-gold-300 to-transparent rounded-tr-full'></div>
								</div>
								<CardContent className='p-4 sm:p-6 relative z-10'>
									<div className='text-3xl font-bold text-burgundy-700 mb-2'>
										247
									</div>
									<div className='text-sm text-burgundy-600 font-medium'>
										Stories Shared
									</div>
									<div className='text-xs text-gold-600 mt-1'>
										Cerita Dibagikan
									</div>
								</CardContent>
							</Card>
							<Card className='text-center border-burgundy-200 bg-gradient-to-br from-burgundy-50 to-cream-50 shadow-lg border-l-4 border-l-burgundy-400 hover:shadow-xl transition-all duration-300 relative overflow-hidden'>
								<div className='absolute inset-0 opacity-5'>
									<div className='absolute top-0 right-0 w-14 h-14 bg-gradient-to-br from-burgundy-400 to-transparent rounded-bl-full'></div>
									<div className='absolute bottom-0 left-0 w-10 h-10 bg-gradient-to-tr from-burgundy-300 to-transparent rounded-tr-full'></div>
								</div>
								<CardContent className='p-4 sm:p-6 relative z-10'>
									<div className='text-3xl font-bold text-burgundy-700 mb-2'>
										89
									</div>
									<div className='text-sm text-burgundy-600 font-medium'>
										Active Members
									</div>
									<div className='text-xs text-gold-600 mt-1'>
										Anggota Aktif
									</div>
								</CardContent>
							</Card>
							<Card className='text-center border-gold-200 bg-gradient-to-br from-cream-50 to-gold-50 shadow-lg border-l-4 border-l-gold-400 hover:shadow-xl transition-all duration-300 relative overflow-hidden'>
								<div className='absolute inset-0 opacity-5'>
									<div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gold-400 to-transparent rounded-bl-full'></div>
									<div className='absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-gold-300 to-transparent rounded-tr-full'></div>
								</div>
								<CardContent className='p-4 sm:p-6 relative z-10'>
									<div className='text-3xl font-bold text-burgundy-700 mb-2'>
										156
									</div>
									<div className='text-sm text-burgundy-600 font-medium'>
										Recipes Shared
									</div>
									<div className='text-xs text-gold-600 mt-1'>
										Resep Dibagikan
									</div>
								</CardContent>
							</Card>
							<Card className='text-center border-burgundy-200 bg-gradient-to-br from-burgundy-50 to-cream-50 shadow-lg border-l-4 border-l-burgundy-400 hover:shadow-xl transition-all duration-300 relative overflow-hidden'>
								<div className='absolute inset-0 opacity-5'>
									<div className='absolute top-0 right-0 w-14 h-14 bg-gradient-to-br from-burgundy-400 to-transparent rounded-bl-full'></div>
									<div className='absolute bottom-0 left-0 w-10 h-10 bg-gradient-to-tr from-burgundy-300 to-transparent rounded-tr-full'></div>
								</div>
								<CardContent className='p-4 sm:p-6 relative z-10'>
									<div className='text-3xl font-bold text-burgundy-700 mb-2'>
										1.2k
									</div>
									<div className='text-sm text-burgundy-600 font-medium'>
										Community Likes
									</div>
									<div className='text-xs text-gold-600 mt-1'>
										Suka Komunitas
									</div>
								</CardContent>
							</Card>
						</div>
					</section>

					{/* Achievement Badges Section */}
					<div className='mb-12 sm:mb-16 lg:mb-20'>
						<Card className='border-gold-200 bg-gradient-to-br from-cream-50 to-gold-50 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden'>
							{/* Decorative background elements */}
							<div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-200/20 to-transparent rounded-bl-full -translate-y-16 translate-x-16'></div>
							<div className='absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-burgundy-200/15 to-transparent rounded-tr-full translate-y-12 -translate-x-12'></div>
							<div className='absolute top-1/2 right-4 w-16 h-16 bg-gradient-to-br from-gold-300/10 to-transparent rounded-full'></div>
							
							<CardHeader className='bg-gradient-to-r from-gold-100 to-gold-50 border-b border-gold-200 p-4 sm:p-6 relative z-10'>
								<CardTitle className='text-2xl text-burgundy-900 flex items-center'>
									<Trophy className='w-6 h-6 mr-3 text-gold-600' />
									Achievement Badges
									<span className='ml-3 text-lg text-gold-600'>
										• Penghargaan
									</span>
								</CardTitle>
								<CardDescription className='text-burgundy-700'>
									Earn badges by participating in our
									community and exploring Indonesian
									cuisine
								</CardDescription>
								<div className='text-sm text-gold-600 italic mt-2'>
									Raih lencana dengan berpartisipasi
									dalam komunitas kami
								</div>
							</CardHeader>
							<CardContent className='p-4 sm:p-6 bg-gradient-to-br from-white to-cream-50 relative z-10'>
								<AchievementBadges
									customerEmail='demo@example.com'
									showProgress={true}
								/>
							</CardContent>
						</Card>
					</div>

					{/* Community Feed Section */}
					<div className='mb-12 sm:mb-16 lg:mb-20'>
						<Card className='border-burgundy-200 bg-gradient-to-br from-burgundy-50 to-cream-50 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden'>
							{/* Decorative background elements */}
							<div className='absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-burgundy-200/15 to-transparent rounded-br-full -translate-y-14 -translate-x-14'></div>
							<div className='absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-gold-200/20 to-transparent rounded-tl-full translate-y-10 translate-x-10'></div>
							<div className='absolute top-1/3 left-6 w-12 h-12 bg-gradient-to-br from-burgundy-300/10 to-transparent rounded-full'></div>
							<div className='absolute bottom-1/4 right-8 w-14 h-14 bg-gradient-to-br from-gold-300/8 to-transparent rounded-full'></div>
							
							<CardHeader className='bg-gradient-to-r from-burgundy-100 to-gold-100 border-b border-burgundy-200 p-4 sm:p-6 relative z-10'>
								<CardTitle className='text-2xl text-burgundy-900 flex items-center'>
									<Users className='w-6 h-6 mr-3' />
									Community Stories
									<span className='ml-3 text-lg text-gold-600'>
										• Cerita Komunitas
									</span>
								</CardTitle>
								<CardDescription className='text-burgundy-700'>
									Discover cooking adventures and
									authentic Indonesian recipes from
									our community
								</CardDescription>
								<div className='text-sm text-gold-600 italic mt-2'>
									Temukan petualangan memasak dan
									resep Indonesia otentik dari
									komunitas kami
								</div>
							</CardHeader>
							<CardContent className='p-4 sm:p-6 bg-gradient-to-br from-white to-cream-50 relative z-10'>
								<CommunityFeed />
							</CardContent>
						</Card>
					</div>

					{/* Call to Action */}
					<div className='text-center px-4 sm:px-0'>
						<Card className='bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white border-0 shadow-2xl relative overflow-hidden'>
							{/* Background Image */}
							<div className='absolute inset-0'>
								<Image
									src='/images/optimized/indonesian-techniques-uk-kitchen-lg.webp'
									alt='Indonesian cooking techniques in UK kitchen'
									width={800}
									height={400}
									className='w-full h-full object-cover'
									loading='lazy'
								/>
								<div className='absolute inset-0 bg-gradient-to-r from-burgundy-600/80 to-burgundy-700/80'></div>
							</div>
							<CardContent className='p-6 sm:p-8 lg:p-10 relative z-10'>
								<div className='text-gold-300 text-sm font-medium mb-2'>
									Terima kasih telah bergabung
								</div>
								<div className='text-burgundy-100 text-xs mb-4'>
									Thank you for joining
								</div>

								<h2 className='text-2xl font-bold mb-4'>
									Ready to Share Your Sambal Story?
								</h2>
								<p className='text-burgundy-100 mb-4 max-w-2xl mx-auto'>
									Join our community of spice
									enthusiasts and share your
									Indonesian cooking journey. Earn
									rewards, connect with others, and
									discover new flavors!
								</p>
								<div className='text-gold-300 italic text-sm mb-6'>
									Bergabunglah dengan komunitas
									pecinta sambal kami
								</div>

								<Button
									asChild
									variant='heritage'
									size='xl'
									className='w-full sm:w-auto min-h-[56px] touch-manipulation transform hover:scale-105 transition-all duration-300'
								>
									<a
										href={
											urls.communityShareStory
										}
										aria-label='Get started sharing your Indonesian cooking story today'
										className='flex items-center'
									>
										<Heart
											className='w-4 h-4 mr-2'
											aria-hidden='true'
										/>
										Get Started Today
									</a>
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}
