import { redirect } from 'next/navigation'

// Redirect /products to /shop since that's where the actual products are displayed
export default function ProductsPage() {
	redirect('/shop')
}

export const metadata = {
	title: "Indonesian Sambal Products UK | Authentic Collection | Spice Island Indonesia",
	description: "Browse our authentic Indonesian sambal products available across the UK. Traditional recipes from the Spice Islands, delivered nationwide. Free UK shipping over £20.",
	keywords: "Indonesian sambal products UK, sambal collection UK, authentic chili paste products, Indonesian condiments UK, sambal varieties UK delivery",
}