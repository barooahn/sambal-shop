import Image from "next/image";
import {
	Truck,
	Clock,
	MapPin,
	Package,
	Shield,
	CreditCard,
} from "lucide-react";

export default function ShippingPage() {
	const shippingOptions = [
		{
			name: "Standard Delivery (Royal Mail 48 Tracked)",
			time: "2-3 business days",
			cost: "£3.45",
			description: "Tracked delivery to your door",
			icon: Truck,
		},
		{
			name: "Express Delivery",
			time: "1-2 business days",
			cost: "£9.99",
			description: "Fast delivery for urgent orders",
			icon: Clock,
		},
		{
			name: "Free Delivery",
			time: "2-3 business days",
			cost: "Free on orders over £20",
			description: "Automatically applied at checkout",
			icon: Package,
		},
	];

	const deliveryAreas = [
		{ region: "England", time: "3-5 business days", available: true },
		{ region: "Scotland", time: "4-6 business days", available: true },
		{ region: "Wales", time: "3-5 business days", available: true },
		{
			region: "Northern Ireland",
			time: "5-7 business days",
			available: true,
		},
		{
			region: "Channel Islands",
			time: "7-10 business days",
			available: false,
		},
		{
			region: "Isle of Man",
			time: "7-10 business days",
			available: false,
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100'>
			{/* Hero Section */}
			<section className='py-24 bg-gradient-to-br from-burgundy-900 to-burgundy-800 text-white relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-burgundy-900/90 to-gold-900/20'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-brand'>
						Shipping Information
					</h1>
					<p className='text-xl sm:text-2xl text-gold-200 max-w-3xl mx-auto font-body'>
						Fast, reliable delivery of authentic Indonesian
						sambal straight to your door
					</p>
				</div>
			</section>

			{/* Shipping Options */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							Delivery Options
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							Choose the delivery option that works best
							for you
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						{shippingOptions.map((option, index) => (
							<div
								key={index}
								className='bg-cream-50 rounded-sm p-8 border border-gold-200 text-center'
							>
								<div className='w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-burgundy-200'>
									<option.icon className='w-8 h-8 text-burgundy-700' />
								</div>
								<h3 className='text-2xl font-bold text-burgundy-900 mb-2 font-brand'>
									{option.name}
								</h3>
								<p className='text-lg text-gold-700 font-bold mb-2 font-elegant'>
									{option.cost}
								</p>
								<p className='text-neutral-600 mb-4 font-body'>
									{option.time}
								</p>
								<p className='text-sm text-neutral-500 font-body'>
									{option.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Packaging Section */}
			<section className='py-24 bg-gradient-to-br from-cream-100 to-cream-200'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div className='relative'>
							<div className='aspect-square rounded-sm overflow-hidden shadow-luxury bg-gradient-to-br from-cream-50 to-gold-50'>
								<div className='w-full h-full flex items-center justify-center p-8'>
									<Image
										src='/images/Spice Island Indonesia E-commerce Shipping Box.webp'
										alt='Spice Island Indonesia Premium Shipping Box'
										width={500}
										height={500}
										className='w-full h-full object-contain drop-shadow-2xl'
									/>
								</div>
							</div>
						</div>
						<div>
							<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
								Premium
								<span className='text-gold-700 block'>
									Packaging
								</span>
							</h2>
							<div className='space-y-6 text-lg text-neutral-700 leading-relaxed font-body'>
								<p>
									Every order is carefully packed in
									our signature shipping boxes,
									designed to protect your sambal
									during transit and create a
									delightful unboxing experience.
								</p>
								<p>
									Our packaging is eco-friendly and
									recyclable, reflecting our
									commitment to sustainability while
									ensuring your products arrive in
									perfect condition.
								</p>
							</div>
							<div className='grid grid-cols-2 gap-6 mt-8'>
								<div className='flex items-center space-x-3'>
									<div className='w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center'>
										<Shield className='w-6 h-6 text-burgundy-700' />
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 font-brand'>
											Protected
										</h4>
										<p className='text-sm text-neutral-600 font-body'>
											Secure packaging
										</p>
									</div>
								</div>
								<div className='flex items-center space-x-3'>
									<div className='w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center'>
										<Package className='w-6 h-6 text-gold-700' />
									</div>
									<div>
										<h4 className='font-bold text-burgundy-900 font-brand'>
											Eco-Friendly
										</h4>
										<p className='text-sm text-neutral-600 font-body'>
											Recyclable materials
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Delivery Areas */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							Delivery Areas
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							We currently deliver across the United
							Kingdom
						</p>
					</div>

					<div className='max-w-4xl mx-auto'>
						<div className='bg-cream-50 rounded-sm p-8 border border-gold-200'>
							<div className='grid md:grid-cols-2 gap-6'>
								{deliveryAreas.map((area, index) => (
									<div
										key={index}
										className='flex items-center justify-between p-4 bg-white rounded-sm border border-gold-200'
									>
										<div className='flex items-center space-x-3'>
											<MapPin
												className={`w-5 h-5 ${area.available ? "text-green-600" : "text-neutral-400"}`}
											/>
											<div>
												<h4 className='font-bold text-burgundy-900 font-brand'>
													{area.region}
												</h4>
												<p className='text-sm text-neutral-600 font-body'>
													{area.available
														? area.time
														: "Coming Soon"}
												</p>
											</div>
										</div>
										<div
											className={`px-3 py-1 rounded-full text-xs font-bold ${
												area.available
													? "bg-green-100 text-green-800"
													: "bg-neutral-100 text-neutral-500"
											}`}
										>
											{area.available
												? "Available"
												: "Soon"}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='py-24 bg-gradient-to-br from-cream-100 to-cream-200'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							Shipping FAQ
						</h2>
					</div>

					<div className='space-y-6'>
						<div className='bg-white rounded-sm p-8 border border-gold-200'>
							<h3 className='text-xl font-bold text-burgundy-900 mb-4 font-brand'>
								When will my order be dispatched?
							</h3>
							<p className='text-neutral-700 font-body'>
								Orders placed before 2 PM Monday-Friday
								are typically dispatched the same day.
								Weekend orders are dispatched on the
								next business day.
							</p>
						</div>

						<div className='bg-white rounded-sm p-8 border border-gold-200'>
							<h3 className='text-xl font-bold text-burgundy-900 mb-4 font-brand'>
								Do you offer tracking?
							</h3>
							<p className='text-neutral-700 font-body'>
								Yes! You&apos;ll receive a tracking
								number via email once your order is
								dispatched. You can track your package
								through our delivery partner&apos;s
								website.
							</p>
						</div>

						<div className='bg-white rounded-sm p-8 border border-gold-200'>
							<h3 className='text-xl font-bold text-burgundy-900 mb-4 font-brand'>
								What if I&apos;m not home for delivery?
							</h3>
							<p className='text-neutral-700 font-body'>
								Our delivery partners will leave a card
								with instructions for redelivery or
								collection from a local depot. Some
								areas offer safe place delivery options.
							</p>
						</div>

						<div className='bg-white rounded-sm p-8 border border-gold-200'>
							<h3 className='text-xl font-bold text-burgundy-900 mb-4 font-brand'>
								Are there any additional charges?
							</h3>
							<p className='text-neutral-700 font-body'>
								No hidden fees! The shipping cost shown
								at checkout is the total delivery
								charge. There are no additional handling
								fees or surcharges.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
