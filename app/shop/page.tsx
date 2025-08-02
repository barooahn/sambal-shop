import { ProductCard } from "@/components/product-card";
import { products } from "@/src/stripe-config";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
	title: "Chef Sari's Premium Sambal Collection | Authentic Indonesian Chili Paste UK",
	description:
		"Shop Chef Sari's professional-grade Indonesian sambal collection. Traditional Bandung recipes crafted with commercial kitchen precision. Authentic West Java flavors delivered across the UK.",
	keywords:
		"Indonesian sambal UK, Chef Sari sambal, Bandung recipes, West Java chili paste, professional Indonesian condiments, authentic sambal oelek, Indonesian chef UK",
};

export default function ShopPage() {
	return (
		<div className='bg-gradient-to-b from-cream-50 to-cream-100'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='text-center mb-12'>
					<ShoppingBag className='w-12 h-12 mx-auto mb-4 text-burgundy-600' />
					<h1 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-4 font-brand'>
						Chef Sari's Premium Sambal Collection
					</h1>
					<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
						Professional-grade Indonesian sambal crafted with
						traditional Bandung recipes and commercial kitchen
						precision. Each jar brings authentic West Java
						flavors to your kitchen.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>

				<div className='mt-12 text-center bg-white rounded-2xl p-8 shadow-lg border border-gold-200'>
					<h3 className='text-2xl font-semibold text-burgundy-900 mb-4 font-brand'>
						Ready to Experience Chef Sari's Sambal?
					</h3>
					<p className='text-neutral-600 mb-6 font-body'>
						Professional-grade Indonesian sambal crafted with
						traditional Bandung recipes. Each jar brings
						authentic West Java flavors to your kitchen.
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
								Meet Chef Sari
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
