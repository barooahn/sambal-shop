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
		id: "prod_SqMc4jVjxfr7xF",
		priceId: "price_1Ruft8GFsfvhgc4ohlgJnkoe",
		name: "Sambal Oelek 185g",
		description:
			"Authentic Indonesian Sambal Oelek — pure chili paste made from fresh red chilies, salt and vinegar. Perfect foundation for cooking and adding clean heat.",
		mode: "payment",
		price: "£7.49",
	},
	{
		id: "prod_SqMbub2ongdTXd",
		priceId: "price_1RufryGFsfvhgc4o5X8bjTeK",
		name: "Sambal Bali 200g",
		description:
			"Balinese-style sambal with aromatic spices (galangal, lemongrass, kaffir lime). Balanced sweet heat and depth — great as condiment or for cooking.",
		mode: "payment",
		price: "£8.49",
	},
	{
		id: "prod_SqMXLUlQlnvRCw",
		priceId: "price_1RufoSGFsfvhgc4oOHaIyRsv",
		name: "Sambal Goreng 185g",
		description:
			"Classic sautéed chili relish with shallots and garlic. Rich, savory heat that pairs beautifully with rice, noodles, and grilled dishes.",
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
