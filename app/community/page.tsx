import React from "react";
import type { Metadata } from "next";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/simple-button";
import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";

// Lazy load heavy client components for better performance
const CommunityFeed = dynamic(() => import("@/components/community/CommunityFeed"), {
	loading: () => (
		<div className="space-y-4 animate-pulse">
			{[1, 2, 3].map((i) => (
				<div key={i} className="h-48 bg-gray-200 rounded-lg"></div>
			))}
		</div>
	),
});

const AchievementBadges = dynamic(() => import("@/components/community/AchievementBadges"), {
	loading: () => (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
			{[1, 2, 3, 4].map((i) => (
				<div key={i} className="h-24 bg-gray-200 rounded-lg"></div>
			))}
		</div>
	),
});
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
	return (
		<>
			{/* Clean Subtle Background */}
			<div className='fixed inset-0 bg-coconut-50 pointer-events-none'></div>

			<div className='relative z-10 pt-4'>
				<div className='container mx-auto px-4 py-8 relative z-10'>
					{/* Indonesian Heritage Header Section */}
					<div className='text-center mb-12 relative'>
						{/* Traditional Indonesian Welcome */}
						<div className='text-gold-600 text-sm font-medium mb-2 tracking-wide'>
							Selamat datang di komunitas kami
						</div>
						<div className='text-gray-500 text-xs mb-6'>
							Welcome to our community
						</div>

						<div className='flex justify-center mb-6'>
							<div 
								className='bg-gradient-to-br from-burgundy-100 to-gold-100 p-6 rounded-full shadow-lg border-2 border-gold-200'
								role="img" 
								aria-label="Community icon representing Indonesian spice lovers"
							>
								<Users className='w-12 h-12 text-burgundy-700' aria-hidden="true" />
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
						<div className='text-gold-600 italic text-sm mb-8'>
							Mari berbagi cerita - Let's share stories
						</div>

						<div className='flex flex-wrap justify-center gap-4 mb-8'>
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

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Button
								asChild
								className='bg-burgundy-600 hover:bg-burgundy-700 text-white px-8 py-3'
							>
								<a 
									href='/community/share-story'
									aria-label="Share your Indonesian cooking story with the community"
								>
									<Share2 className='w-5 h-5 mr-2' aria-hidden="true" />
									Share Your Story
								</a>
							</Button>
							<Button
								asChild
								variant='outline'
								className='border-burgundy-600 text-burgundy-600 hover:bg-burgundy-600 hover:text-white px-8 py-3'
							>
								<a 
									href='/community/quiz'
									aria-label="Take the Indonesian spice heat level quiz"
								>
									<Star className='w-5 h-5 mr-2' aria-hidden="true" />
									Take Heat Quiz
								</a>
							</Button>
						</div>
					</div>

					{/* Stats Section */}
					<section aria-labelledby="community-stats-heading">
						<h2 id="community-stats-heading" className="sr-only">Community Statistics</h2>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
						<Card className='text-center border-gold-200 bg-gradient-to-br from-cream-50 to-gold-50 shadow-lg border-l-4 border-l-gold-400'>
							<CardContent className='p-6'>
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
						<Card className='text-center border-burgundy-200 bg-gradient-to-br from-burgundy-50 to-cream-50 shadow-lg border-l-4 border-l-burgundy-400'>
							<CardContent className='p-6'>
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
						<Card className='text-center border-gold-200 bg-gradient-to-br from-cream-50 to-gold-50 shadow-lg border-l-4 border-l-gold-400'>
							<CardContent className='p-6'>
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
						<Card className='text-center border-burgundy-200 bg-gradient-to-br from-burgundy-50 to-cream-50 shadow-lg border-l-4 border-l-burgundy-400'>
							<CardContent className='p-6'>
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
					<div className='mb-12'>
						<Card className='border-gold-200 bg-gradient-to-br from-cream-50 to-gold-50 shadow-xl'>
							<CardHeader className='bg-gradient-to-r from-gold-100 to-gold-50 border-b border-gold-200'>
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
							<CardContent className='p-6 bg-gradient-to-br from-white to-cream-50'>
								<AchievementBadges
									customerEmail='demo@example.com'
									showProgress={true}
								/>
							</CardContent>
						</Card>
					</div>

					{/* Community Feed Section */}
					<div className='mb-12'>
						<Card className='border-burgundy-200 bg-gradient-to-br from-burgundy-50 to-cream-50 shadow-xl'>
							<CardHeader className='bg-gradient-to-r from-burgundy-100 to-gold-100 border-b border-burgundy-200'>
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
							<CardContent className='p-6 bg-gradient-to-br from-white to-cream-50'>
								<CommunityFeed />
							</CardContent>
						</Card>
					</div>

					{/* Call to Action */}
					<div className='text-center'>
						<Card className='bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white border-0 shadow-2xl relative overflow-hidden'>
							<CardContent className='p-8 relative z-10'>
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
									className='bg-gradient-to-r from-white to-gold-50 text-burgundy-700 hover:from-gold-100 hover:to-gold-200 hover:text-burgundy-800 shadow-lg border border-gold-200'
								>
									<a 
										href='/community/share-story'
										aria-label="Get started sharing your Indonesian cooking story today"
									>
										<Heart className='w-4 h-4 mr-2' aria-hidden="true" />
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
