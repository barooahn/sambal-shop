import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Flame,
	ChefHat,
	Award,
	Leaf,
	MapPin,
	Clock,
	Users,
} from "lucide-react";
import OptimizedImage from "@/components/optimization/OptimizedImage";
import StructuredData from "@/components/seo/StructuredData";
import FAQSchema from "@/components/seo/FAQSchema";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Authentic Sambal Bali UK | Aromatic Spicy Indonesian Chili Paste | Spice Island Indonesia",
	description:
		"Discover authentic Sambal Bali - aromatic Indonesian chili paste with complex spices. Perfect for grilled meats and traditional Indonesian cooking. UK delivery available.",
	keywords:
		"sambal bali, aromatic sambal, Indonesian chili paste, spicy condiment UK, authentic Indonesian sauce, sambal with spices, Indonesian cooking, UK delivery",
	openGraph: {
		title: "Authentic Sambal Bali - Aromatic Spicy Indonesian Chili Paste",
		description:
			"Aromatic Indonesian sambal with complex spices. Perfect for grilled meats and authentic Indonesian cooking.",
		images: ["/images/Spice Island Indonesia Sambal Bali 185g Label.png"],
	},
};

export default function SambalBaliPage() {
	// FAQ data for AI search optimization
	const faqData = [
		{
			question: "What is sambal bali?",
			answer: "Sambal Bali is an aromatic Indonesian chili paste that combines fresh chilies with traditional spices like galangal, lemongrass, and kaffir lime leaves. Unlike simple chili pastes, Sambal Bali offers complex layers of flavor - it&apos;s spicy, aromatic, and slightly sweet. This traditional recipe from Bali creates a more sophisticated heat that enhances rather than overwhelms your dishes.",
		},
		{
			question: "What makes sambal bali different from sambal oelek?",
			answer: "Sambal Bali contains aromatic spices (galangal, lemongrass, kaffir lime) that create complex flavor layers, while sambal oelek is pure chili paste with minimal ingredients. Sambal Bali is slightly milder and more aromatic, making it perfect for grilled meats and marinades. Sambal oelek provides pure heat, while Sambal Bali offers sophisticated, restaurant-quality flavor complexity.",
		},
		{
			question: "Is sambal bali sweeter than other sambals?",
			answer: "Sambal Bali has natural sweetness from aromatic spices and traditional preparation methods, but it&apos;s not artificially sweetened. The galangal and lemongrass create subtle sweet notes that balance the heat beautifully. It&apos;s less aggressive than pure chili pastes while still delivering authentic Indonesian heat - perfect for those who want complex flavor with their spice.",
		},
		{
			question: "What dishes work best with sambal bali?",
			answer: "Sambal Bali excels with grilled meats, marinades, and traditional Indonesian dishes like satay and rendang. It&apos;s perfect for BBQ marinades, stir-fries, and any dish where you want aromatic complexity. Try it with chicken, beef, seafood, or vegetables. The aromatic spices make it ideal for fusion cooking and elevating Western dishes with Indonesian flavors.",
		},
		{
			question: "How do I use sambal bali in cooking?",
			answer: "Use Sambal Bali as a marinade base (mix with oil and soy sauce), stir-fry ingredient, or finishing sauce. Start with 1 teaspoon in recipes and adjust to taste. It&apos;s excellent in marinades for grilling, mixed into fried rice, or as a condiment for roasted vegetables. The aromatic spices make it perfect for slow-cooked dishes where flavors can develop.",
		},
		{
			question: "Where can I buy authentic sambal bali in the UK?",
			answer: "We deliver authentic Sambal Bali throughout the UK, made by Chef Yossie using traditional Balinese family recipes. Our Sambal Bali contains real galangal, lemongrass, and kaffir lime leaves - not artificial flavors. We offer free UK delivery on orders over £20, and you can try our sample pack to experience the authentic difference.",
		},
	];

	// Product data for Sambal Bali schema
	const productData = {
		name: "Authentic Indonesian Sambal Bali",
		description:
			"Sweet and spicy Balinese-style sambal with aromatic spices like galangal, lemongrass, and kaffir lime leaves. Handcrafted by Chef Yossie using traditional recipes.",
		brand: "Spice Island Indonesia",
		category: "Condiments & Sauces",
		image: "https://spiceislandindonesia.com/images/Spice Island Indonesia Sambal Bali 185g Label.webp",
		shippingDetails: [
			{
				"@type": "OfferShippingDetails",
				shippingRate: {
					"@type": "MonetaryAmount",
					value: 0,
					currency: "GBP",
				},
				eligibleTransactionVolume: {
					"@type": "PriceSpecification",
					minPrice: 20,
					priceCurrency: "GBP",
				},
				shippingDestination: {
					"@type": "DefinedRegion",
					addressCountry: "GB",
				},
				deliveryTime: {
					"@type": "ShippingDeliveryTime",
					handlingTime: {
						"@type": "QuantitativeValue",
						minValue: 0,
						maxValue: 1,
						unitCode: "d",
					},
					transitTime: {
						"@type": "QuantitativeValue",
						minValue: 2,
						maxValue: 3,
						unitCode: "d",
					},
				},
			},
			{
				"@type": "OfferShippingDetails",
				shippingRate: {
					"@type": "MonetaryAmount",
					value: 3.45,
					currency: "GBP",
				},
				eligibleTransactionVolume: {
					"@type": "PriceSpecification",
					maxPrice: 19.99,
					priceCurrency: "GBP",
				},
				shippingDestination: {
					"@type": "DefinedRegion",
					addressCountry: "GB",
				},
				deliveryTime: {
					"@type": "ShippingDeliveryTime",
					handlingTime: {
						"@type": "QuantitativeValue",
						minValue: 0,
						maxValue: 1,
						unitCode: "d",
					},
					transitTime: {
						"@type": "QuantitativeValue",
						minValue: 2,
						maxValue: 3,
						unitCode: "d",
					},
				},
			},
		],
		hasMerchantReturnPolicy: {
			"@type": "MerchantReturnPolicy",
			applicableCountry: "GB",
			returnPolicyCategory:
				"https://schema.org/MerchantReturnFiniteReturnWindow",
			merchantReturnDays: 14,
			returnMethod: "https://schema.org/ReturnByMail",
			returnFees: "https://schema.org/ReturnShippingFees",
		},
		offers: [
			{
				name: "Sambal Bali 185g",
				description:
					"Aromatic sweet-spicy chili paste with traditional Balinese spices",
				price: "8.49",
				priceCurrency: "GBP",
				availability: "https://schema.org/InStock",
				sku: "SII-SB-185G",
				url: "https://spiceislandindonesia.com/sambal-bali-sweet-spicy",
				priceValidUntil: "2026-12-31",
				shippingDetails: [
					{
						"@type": "OfferShippingDetails",
						shippingRate: {
							"@type": "MonetaryAmount",
							value: 0,
							currency: "GBP",
						},
						eligibleTransactionVolume: {
							"@type": "PriceSpecification",
							minPrice: 20,
							priceCurrency: "GBP",
						},
						shippingDestination: {
							"@type": "DefinedRegion",
							addressCountry: "GB",
						},
					},
				],
				hasMerchantReturnPolicy: {
					"@type": "MerchantReturnPolicy",
					applicableCountry: "GB",
					returnPolicyCategory:
						"https://schema.org/MerchantReturnFiniteReturnWindow",
					merchantReturnDays: 14,
					returnMethod: "https://schema.org/ReturnByMail",
					returnFees: "https://schema.org/FreeReturn",
				},
			},
		],
		aggregateRating: {
			ratingValue: 4.9,
			reviewCount: 98,
			bestRating: 5,
			worstRating: 1,
		},
	};
	return (
		<div className='bg-gradient-to-b from-cream-50 to-cream-100 font-body'>
			<FAQSchema
				faqs={faqData}
				pageTitle='Sambal Bali UK - Frequently Asked Questions'
			/>
			{/* Product schema moved to dedicated component with full details below */}

			{/* Hero Section */}
			<section className='py-16 lg:py-24'>
				<div className='container mx-auto px-4'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<div>
							<Badge className='mb-4 bg-red-100 text-red-800 hover:bg-red-200'>
								<MapPin className='w-4 h-4 mr-2' />
								Authentic Balinese Recipe
							</Badge>

							<h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading'>
								Authentic{" "}
								<span className='text-red-600'>
									Sambal Bali
								</span>
								<br />
								<span className='text-2xl lg:text-3xl text-gray-700'>
									Aromatic Spicy Indonesian Chili
									Paste
								</span>
							</h1>

							<p className='text-xl text-gray-600 mb-8 leading-relaxed'>
								Experience the complex flavors of
								authentic Sambal Bali - a traditional
								Indonesian chili paste enriched with
								aromatic spices. Perfect for grilled
								meats, rice dishes, and adding authentic
								Indonesian depth to your cooking.
							</p>

							<div className='flex flex-wrap gap-4 mb-8'>
								<div className='flex items-center gap-2'>
									<Flame className='w-5 h-5 text-red-500' />
									<span className='font-semibold'>
										🌶️🌶️🌶️ Hot
									</span>
								</div>
								<div className='flex items-center gap-2'>
									<ChefHat className='w-5 h-5 text-orange-500' />
									<span className='font-semibold'>
										Aromatic Spices
									</span>
								</div>
								<div className='flex items-center gap-2'>
									<Award className='w-5 h-5 text-yellow-500' />
									<span className='font-semibold'>
										Traditional Recipe
									</span>
								</div>
							</div>

							<div className='flex flex-col sm:flex-row gap-4'>
								<Button
									size='lg'
									className='bg-red-600 hover:bg-red-700'
								>
									Order Sambal Bali - £8.49
								</Button>
								<Button variant='outline' size='lg'>
									Try Sample Size - £3.99
								</Button>
							</div>
						</div>

						<div className='relative'>
							<div className='bg-gradient-to-br from-red-100 to-orange-100 rounded-sm p-8'>
								<OptimizedImage
									src='/images/Spice Island Indonesia Sambal Bali 185g Label.png'
									alt='Spice Island Indonesia Sambal Bali 185g - Aromatic spicy Indonesian chili paste with traditional spices'
									width={400}
									height={400}
									className='w-full h-auto drop-shadow-2xl'
									priority
									quality={90}
									sizes='(max-width: 768px) 100vw, 400px'
								/>
								<div className='absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold'>
									£8.49
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* What Makes Sambal Bali Special */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading'>
							What Makes{" "}
							<span className='text-red-600'>
								Sambal Bali
							</span>{" "}
							Special?
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Unlike simple chili sauces, Sambal Bali
							combines fresh chilies with aromatic
							Indonesian spices, creating a complex flavor
							profile that enhances rather than overwhelms
							your dishes.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						<div className='text-center p-6'>
							<div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Leaf className='w-8 h-8 text-red-600' />
							</div>
							<h3 className='text-xl font-bold mb-3'>
								Aromatic Spice Blend
							</h3>
							<p className='text-gray-600'>
								Traditional Balinese spices including
								galangal, lemongrass, and kaffir lime
								leaves create a complex, aromatic base
								that sets Sambal Bali apart from simple
								chili pastes.
							</p>
						</div>

						<div className='text-center p-6'>
							<div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<ChefHat className='w-8 h-8 text-orange-600' />
							</div>
							<h3 className='text-xl font-bold mb-3'>
								Perfect for Grilled Meats
							</h3>
							<p className='text-gray-600'>
								The aromatic spices in Sambal Bali
								complement grilled chicken, beef, and
								seafood perfectly. Use as a marinade,
								dipping sauce, or finishing condiment.
							</p>
						</div>

						<div className='text-center p-6'>
							<div className='w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Award className='w-8 h-8 text-yellow-600' />
							</div>
							<h3 className='text-xl font-bold mb-3'>
								Authentic Indonesian
							</h3>
							<p className='text-gray-600'>
								Made using traditional Balinese methods
								by Chef Yossie, who learned these
								recipes in professional Indonesian
								kitchens. No shortcuts, no
								preservatives.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* How to Use Sambal Bali */}
			<section className='py-16 bg-cream-50'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading'>
							How to Use{" "}
							<span className='text-red-600'>
								Sambal Bali
							</span>
						</h2>
						<p className='text-xl text-gray-600'>
							Versatile enough for everyday cooking,
							special enough for dinner parties
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
						<div className='bg-white p-6 rounded-sm shadow-sm'>
							<div className='text-2xl mb-3'>🍖</div>
							<h3 className='font-bold mb-2'>
								Grilled Meats
							</h3>
							<p className='text-sm text-gray-600'>
								Perfect marinade for chicken satay,
								grilled beef, or BBQ seafood. Mix with
								oil and marinate for 30 minutes.
							</p>
						</div>

						<div className='bg-white p-6 rounded-sm shadow-sm'>
							<div className='text-2xl mb-3'>🍚</div>
							<h3 className='font-bold mb-2'>
								Rice Dishes
							</h3>
							<p className='text-sm text-gray-600'>
								Add a spoonful to fried rice or serve
								alongside steamed rice. The aromatic
								spices enhance any grain dish.
							</p>
						</div>

						<div className='bg-white p-6 rounded-sm shadow-sm'>
							<div className='text-2xl mb-3'>🥘</div>
							<h3 className='font-bold mb-2'>
								Curry Base
							</h3>
							<p className='text-sm text-gray-600'>
								Use as a flavor base for Indonesian
								curries and stews. Sauté with onions and
								coconut milk.
							</p>
						</div>

						<div className='bg-white p-6 rounded-sm shadow-sm'>
							<div className='text-2xl mb-3'>🥙</div>
							<h3 className='font-bold mb-2'>
								Dipping Sauce
							</h3>
							<p className='text-sm text-gray-600'>
								Serve alongside grilled vegetables,
								spring rolls, or crackers. The complex
								flavors complement many dishes.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Comparison with Other Sambals */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading'>
							Sambal Bali vs Other{" "}
							<span className='text-red-600'>
								Indonesian Sambals
							</span>
						</h2>
					</div>

					<div className='max-w-4xl mx-auto'>
						<div className='grid md:grid-cols-2 gap-8'>
							<div className='bg-red-50 p-6 rounded-sm'>
								<h3 className='text-xl font-bold mb-4 text-red-800'>
									Sambal Bali (This Product)
								</h3>
								<ul className='space-y-2 text-gray-700'>
									<li>
										✓ Complex aromatic spice blend
									</li>
									<li>
										✓ Perfect for grilled meats
									</li>
									<li>
										✓ Traditional Balinese recipe
									</li>
									<li>
										✓ Medium-hot heat level (3/5)
									</li>
									<li>
										✓ Rich, layered flavor profile
									</li>
								</ul>
							</div>

							<div className='bg-gray-50 p-6 rounded-sm'>
								<h3 className='text-xl font-bold mb-4 text-gray-800'>
									Sambal Oelek
								</h3>
								<ul className='space-y-2 text-gray-700'>
									<li>• Pure chili paste base</li>
									<li>
										• Very hot heat level (5/5)
									</li>
									<li>
										• Simple, clean chili flavor
									</li>
									<li>• Perfect for stir-fries</li>
									<li>
										• Foundation of Indonesian
										cooking
									</li>
								</ul>
							</div>
						</div>

						<div className='text-center mt-8'>
							<p className='text-gray-600 mb-4'>
								Want to try both? Our Heritage Gift Set
								includes both Sambal Bali and Sambal
								Oelek.
							</p>
							<Button variant='outline'>
								View Heritage Gift Set - £14.99
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Customer Reviews */}
			<section className='py-16 bg-cream-50'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading'>
							What UK Customers Say About{" "}
							<span className='text-red-600'>
								Sambal Bali
							</span>
						</h2>
					</div>

					<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
						<div className='bg-white p-6 rounded-sm shadow-sm'>
							<div className='flex items-center mb-4'>
								<div className='flex text-yellow-400'>
									{"★".repeat(5)}
								</div>
								<span className='ml-2 text-sm text-gray-600'>
									Verified Purchase
								</span>
							</div>
							<p className='text-gray-700 mb-4'>
								&quot;The aromatic spices in this sambal
								are incredible! I use it as a marinade
								for chicken and the flavor is so much
								more complex than any hot sauce
								I&apos;ve tried. Authentic taste.&quot;
							</p>
							<div className='text-sm text-gray-600'>
								<strong>James P.</strong> - Manchester,
								UK
							</div>
						</div>

						<div className='bg-white p-6 rounded-sm shadow-sm'>
							<div className='flex items-center mb-4'>
								<div className='flex text-yellow-400'>
									{"★".repeat(5)}
								</div>
								<span className='ml-2 text-sm text-gray-600'>
									Verified Purchase
								</span>
							</div>
							<p className='text-gray-700 mb-4'>
								&quot;Perfect heat level for me - not
								too overwhelming but still has a good
								kick. The spices make it so much more
								interesting than regular chili
								sauce.&quot;
							</p>
							<div className='text-sm text-gray-600'>
								<strong>David L.</strong> - Edinburgh,
								UK
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 bg-red-600 text-white'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl lg:text-4xl font-bold mb-4'>
						Ready to Experience Authentic Sambal Bali?
					</h2>
					<p className='text-xl mb-8 opacity-90'>
						Join hundreds of UK customers discovering the
						complex flavors of traditional Indonesian cooking
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button
							size='lg'
							className='bg-white text-red-600 hover:bg-gray-100'
						>
							Order Sambal Bali - £8.49
						</Button>
						<Button
							variant='outline'
							size='lg'
							className='border-white text-white hover:bg-white hover:text-red-600'
						>
							Try Sample Size First - £3.99
						</Button>
					</div>

					<div className='mt-8 flex items-center justify-center gap-6 text-sm opacity-80'>
						<div className='flex items-center gap-2'>
							<Clock className='w-4 h-4' />
							<span>2-3 day UK delivery</span>
						</div>
						<div className='flex items-center gap-2'>
							<Users className='w-4 h-4' />
							<span>150+ happy customers</span>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section - AI Search Optimized */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto'>
						<h2 className='text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 text-center font-heading'>
							Frequently Asked Questions
						</h2>
						<p className='text-xl text-gray-600 text-center mb-12 font-body'>
							Everything you need to know about authentic
							Sambal Bali
						</p>

						<div className='space-y-6'>
							{/* FAQ Item 1 */}
							<div className='bg-cream-50 rounded-lg p-6 border border-gold-200'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									What is sambal bali?
								</h3>
								<p className='text-gray-700 font-body leading-relaxed'>
									Sambal Bali is an aromatic
									Indonesian chili paste that
									combines fresh chilies with
									traditional spices like galangal,
									lemongrass, and kaffir lime leaves.
									Unlike simple chili pastes, Sambal
									Bali offers complex layers of
									flavor - it&apos;s spicy, aromatic,
									and slightly sweet. This
									traditional recipe from Bali
									creates a more sophisticated heat
									that enhances rather than
									overwhelms your dishes.
								</p>
							</div>

							{/* FAQ Item 2 */}
							<div className='bg-cream-50 rounded-lg p-6 border border-gold-200'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									What makes sambal bali different
									from sambal oelek?
								</h3>
								<p className='text-gray-700 font-body leading-relaxed'>
									Sambal Bali contains aromatic
									spices (galangal, lemongrass,
									kaffir lime) that create complex
									flavor layers, while{" "}
									<Link
										href='/sambal-oelek-uk'
										className='text-burgundy-600 hover:text-burgundy-800 underline'
									>
										sambal oelek
									</Link>{" "}
									is pure chili paste with minimal
									ingredients. Sambal Bali is
									slightly milder and more aromatic,
									making it perfect for grilled meats
									and marinades. Sambal oelek
									provides pure heat, while Sambal
									Bali offers sophisticated,
									restaurant-quality flavor
									complexity.
								</p>
							</div>

							{/* FAQ Item 3 */}
							<div className='bg-cream-50 rounded-lg p-6 border border-gold-200'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									Is sambal bali sweeter than other
									sambals?
								</h3>
								<p className='text-gray-700 font-body leading-relaxed'>
									Sambal Bali has natural sweetness
									from aromatic spices and
									traditional preparation methods,
									but it&apos;s not artificially
									sweetened. The galangal and
									lemongrass create subtle sweet
									notes that balance the heat
									beautifully. It&apos;s less
									aggressive than pure chili pastes
									while still delivering authentic
									Indonesian heat - perfect for those
									who want complex flavor with their
									spice.
								</p>
							</div>

							{/* FAQ Item 4 */}
							<div className='bg-cream-50 rounded-lg p-6 border border-gold-200'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									What dishes work best with sambal
									bali?
								</h3>
								<p className='text-gray-700 font-body leading-relaxed'>
									Sambal Bali excels with grilled
									meats, marinades, and traditional
									Indonesian dishes like satay and
									rendang. It&apos;s perfect for{" "}
									<Link
										href='/recipes/sambal-bbq-marinade'
										className='text-burgundy-600 hover:text-burgundy-800 underline'
									>
										BBQ marinades
									</Link>
									,
									<Link
										href='/recipes/sambal-fried-rice'
										className='text-burgundy-600 hover:text-burgundy-800 underline'
									>
										{" "}
										fried rice
									</Link>
									, and any dish where you want
									aromatic complexity. Try it with
									chicken, beef, seafood, or
									vegetables. The aromatic spices
									make it ideal for fusion cooking
									and elevating Western dishes with
									Indonesian flavors.
								</p>
							</div>

							{/* FAQ Item 5 */}
							<div className='bg-cream-50 rounded-lg p-6 border border-gold-200'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									How do I use sambal bali in
									cooking?
								</h3>
								<p className='text-gray-700 font-body leading-relaxed'>
									Use Sambal Bali as a marinade base
									(mix with oil and soy sauce),
									stir-fry ingredient, or finishing
									sauce. Start with 1 teaspoon in
									recipes and adjust to taste.
									It&apos;s excellent in marinades
									for grilling, mixed into fried
									rice, or as a condiment for roasted
									vegetables. The aromatic spices
									make it perfect for slow-cooked
									dishes where flavors can develop.
								</p>
							</div>

							{/* FAQ Item 6 */}
							<div className='bg-cream-50 rounded-lg p-6 border border-gold-200'>
								<h3 className='text-xl font-bold text-burgundy-900 mb-3 font-brand'>
									Where can I buy authentic sambal
									bali in the UK?
								</h3>
								<p className='text-gray-700 font-body leading-relaxed'>
									We deliver authentic Sambal Bali
									throughout the UK, made by Chef
									Yossie using traditional Balinese
									family recipes. Our Sambal Bali
									contains real galangal, lemongrass,
									and kaffir lime leaves - not
									artificial flavors. We offer free
									UK delivery on orders over £20, and
									you can
									<Link
										href='/sample-pack-try-first'
										className='text-burgundy-600 hover:text-burgundy-800 underline'
									>
										{" "}
										try our sample pack
									</Link>
									to experience the authentic
									difference.
								</p>
							</div>
						</div>

						{/* CTA after FAQ */}
						<div className='text-center mt-12'>
							<div className='bg-gradient-to-r from-burgundy-600 to-burgundy-800 text-white rounded-lg p-8'>
								<h3 className='text-2xl font-bold mb-4 font-heading'>
									Ready to Experience Aromatic Sambal
									Bali?
								</h3>
								<p className='text-lg mb-6 opacity-90 font-body'>
									Discover the complex flavors that
									make Balinese cuisine so special
								</p>
								<div className='flex flex-col sm:flex-row gap-4 justify-center'>
									<Button
										size='lg'
										className='bg-white text-burgundy-600 hover:bg-gray-100'
									>
										Order Sambal Bali Now
									</Button>
									<Button
										variant='outline'
										size='lg'
										className='border-white text-white hover:bg-white hover:text-burgundy-600'
									>
										Try Sample Pack First
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
