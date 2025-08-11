import { redirect } from 'next/navigation'

// Redirect /products to /shop since that's where the actual products are displayed
export default function ProductsPage() {
	redirect('/shop')
}

export const metadata = {
	title: "Products | Spice Island Indonesia - Redirecting to Shop",
	description: "Browse our authentic Indonesian sambal products",
}