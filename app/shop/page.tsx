import { ProductCard } from "@/components/product-card";
import { products } from "@/src/stripe-config";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NewsletterSection from "@/components/home/NewsletterSection";

export const metadata = {
	title: "Chef Yossie&apos;s Premium Sambal Collection | Authentic Indonesian Chili Paste UK",
	description:
		"Shop Chef Yossie&apos;s professional-grade Indonesian sambal collection. Traditional Bandung recipes crafted with commercial kitchen precision. Authentic West Java flavors delivered across the UK.",
	keywords:
		"Indonesian sambal UK, Chef Yossie sambal, Bandung recipes, West Java chili paste, professional Indonesian condiments, authentic sambal oelek, Indonesian chef UK",
};

export default function ShopPage() {
	const SALES_ENABLED = process.env.NEXT_PUBLIC_SALES_ENABLED === "true";

	return (
		<div className='bg-gradient-to-b from-cream-50 to-cream-100'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='text-center mb-12'>
					<ShoppingBag className='w-12 h-12 mx-auto mb-4 text-burgundy-600' />
					<h1 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-4 font-brand'>
						Chef Yossie&apos;s Premium Sambal Collection
					</h1>
					<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
						Professional-grade Indonesian sambal crafted with
						traditional Bandung recipes and commercial kitchen
						precision. Each jar brings authentic West Java
						flavors to your kitchen.
					</p>
					{SALES_ENABLED ? (
						<div className='mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200'>
							<span className='font-semibold'>
								Free UK delivery over £20
							</span>
						</div>
					) : (
						<div className='mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200'>
							<span className='font-semibold'>
								Coming soon — join the UK VIP list for
								launch updates
							</span>
						</div>
					)}
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>

				{SALES_ENABLED ? (
					<div className='mt-12 text-center bg-white rounded-sm p-8 shadow-lg border border-gold-200'>
						<h3 className='text-2xl font-semibold text-burgundy-900 mb-4 font-brand'>
							Ready to Experience Chef Yossie&apos;s
							Sambal?
						</h3>
						<p className='text-neutral-600 mb-6 font-body'>
							Professional-grade Indonesian sambal crafted
							with traditional Bandung recipes. Each jar
							brings authentic West Java flavors to your
							kitchen.
						</p>
						<div className='flex justify-center space-x-4'>
							<Link href='/contact'>
								<Button
									variant='primary'
									size='lg'
									className='font-elegant'
								>
									Order Now
								</Button>
							</Link>
							<Link href='/chef'>
								<Button
									variant='outline'
									size='lg'
									className='font-elegant border-burgundy-600 text-burgundy-600 hover:bg-burgundy-600 hover:text-white'
								>
									Meet Chef Yossie
								</Button>
							</Link>
						</div>
					</div>
				) : (
					<div className='mt-12'>
						<NewsletterSection />
					</div>
				)}
			</div>
		</div>
	);
}
