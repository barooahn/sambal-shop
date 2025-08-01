export interface Product {
	id: string;
	priceId: string;
	name: string;
	description: string;
	mode: "payment" | "subscription";
	price: string;
}

export const products: Product[] = [
	{
		id: "prod_Smr9HU81tTheO7", // Your actual Stripe product ID
		priceId: "price_1RrHRQGFsfvhgc4oNLQRIyrG", // Your actual Stripe price ID
		name: "Sambal Bawang",
		description:
			"Authentic Indonesian Sambal Bawang - a fiery chili sauce made with fresh chilies, aromatic shallots, and garlic. Perfect for BBQs, stir-fries, eggs, and adding bold Indonesian flavour to any dish. Made using traditional recipes from the original Spice Islands. Medium-hot spice level. Ingredients: Red chilies, shallots, garlic, palm oil, salt, sugar, shrimp paste Heat Level: Medium-Hot (🌶️🌶️🌶️) Size: 200g jar Storage: Refrigerate after opening, use within 4 weeks",
		mode: "payment",
		price: "£7.49",
	},
];

export function getProductByPriceId(priceId: string): Product | undefined {
	return products.find((product) => product.priceId === priceId);
}

export function getProductById(id: string): Product | undefined {
	return products.find((product) => product.id === id);
}
