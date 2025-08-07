import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, Users, ChefHat, Heart } from "lucide-react";

export default function RecipesPage() {
	const recipes = [
		{
			id: 1,
			title: "Sambal Fried Rice",
			description:
				"Transform leftover rice into a spicy, flavorful meal with our authentic sambal",
			time: "15 mins",
			serves: "4",
			difficulty: "Easy",
			image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
			ingredients: [
				"3 cups cooked rice (preferably day-old)",
				"2 tbsp Spice Island Sambal Oelek",
				"2 eggs, beaten",
				"2 cloves garlic, minced",
				"1 onion, diced",
				"2 tbsp soy sauce",
				"1 tbsp vegetable oil",
				"Spring onions for garnish",
			],
			instructions: [
				"Heat oil in a large wok or pan over high heat",
				"Add garlic and onion, stir-fry for 2 minutes",
				"Push to one side, add beaten eggs and scramble",
				"Add rice and break up any clumps",
				"Stir in sambal oelek and soy sauce",
				"Stir-fry for 5-7 minutes until heated through",
				"Garnish with spring onions and serve hot",
			],
		},
		{
			id: 2,
			title: "Sambal Glazed Chicken",
			description:
				"Juicy chicken thighs with a sticky, spicy sambal glaze",
			time: "45 mins",
			serves: "4",
			difficulty: "Medium",
			image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
			ingredients: [
				"8 chicken thighs, skin-on",
				"3 tbsp Spice Island Sambal Bali",
				"2 tbsp honey",
				"2 tbsp soy sauce",
				"1 tbsp rice vinegar",
				"2 cloves garlic, minced",
				"1 inch ginger, grated",
				"Salt and pepper to taste",
			],
			instructions: [
				"Preheat oven to 200°C (180°C fan)",
				"Season chicken with salt and pepper",
				"Mix sambal, honey, soy sauce, vinegar, garlic, and ginger",
				"Marinate chicken in half the mixture for 30 minutes",
				"Roast chicken for 35-40 minutes until golden",
				"Brush with remaining glaze in last 10 minutes",
				"Rest for 5 minutes before serving",
			],
		},
		{
			id: 3,
			title: "Spicy Sambal Noodles",
			description:
				"Quick and satisfying noodles with vegetables and our signature sambal",
			time: "20 mins",
			serves: "2",
			difficulty: "Easy",
			image: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg",
			ingredients: [
				"200g fresh egg noodles",
				"2 tbsp Spice Island Sambal Oelek",
				"1 bell pepper, sliced",
				"1 carrot, julienned",
				"100g bean sprouts",
				"2 tbsp vegetable oil",
				"2 tbsp oyster sauce",
				"1 tbsp sesame oil",
				"Coriander for garnish",
			],
			instructions: [
				"Cook noodles according to package instructions",
				"Heat oil in a wok over high heat",
				"Add vegetables and stir-fry for 3-4 minutes",
				"Add drained noodles to the wok",
				"Stir in sambal, oyster sauce, and sesame oil",
				"Toss everything together for 2-3 minutes",
				"Garnish with fresh coriander and serve",
			],
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-br from-cream-50 to-cream-100'>
			{/* Hero Section */}
			<section className='py-24 bg-gradient-to-br from-burgundy-900 to-burgundy-800 text-white relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-burgundy-900/90 to-gold-900/20'></div>
				<div className='absolute top-0 left-0 w-72 h-72 bg-gold-500/10 rounded-full -translate-x-36 -translate-y-36 blur-3xl'></div>
				<div className='absolute bottom-0 right-0 w-96 h-96 bg-burgundy-500/10 rounded-full translate-x-48 translate-y-48 blur-3xl'></div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-brand'>
						Recipe Ideas
					</h1>
					<p className='text-xl sm:text-2xl text-gold-200 max-w-3xl mx-auto font-body'>
						Discover delicious ways to use our authentic
						Indonesian sambal in your everyday cooking
					</p>
				</div>
			</section>

			{/* Recipes Grid */}
			<section className='py-24'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
							Featured Recipes
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto font-body'>
							From quick weeknight dinners to impressive
							weekend feasts, our sambal adds authentic
							Indonesian flavor to any dish
						</p>
					</div>

					<div className='grid lg:grid-cols-3 gap-8'>
						{recipes.map((recipe) => (
							<div
								key={recipe.id}
								className='bg-white rounded-sm shadow-lg overflow-hidden border border-gold-200 hover:shadow-luxury transition-all duration-300'
							>
								<div className='aspect-[4/3] overflow-hidden relative'>
									<Image
										src={recipe.image}
										alt={recipe.title}
										fill
										className='object-cover hover:scale-105 transition-transform duration-300'
										loading='lazy'
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									/>
								</div>
								<div className='p-8'>
									<h3 className='text-2xl font-bold text-burgundy-900 mb-3 font-brand'>
										{recipe.title}
									</h3>
									<p className='text-neutral-600 mb-6 font-body'>
										{recipe.description}
									</p>

									<div className='flex items-center justify-between mb-6 text-sm text-neutral-500'>
										<div className='flex items-center space-x-1'>
											<Clock className='w-4 h-4' />
											<span>
												{recipe.time}
											</span>
										</div>
										<div className='flex items-center space-x-1'>
											<Users className='w-4 h-4' />
											<span>
												Serves{" "}
												{recipe.serves}
											</span>
										</div>
										<div className='flex items-center space-x-1'>
											<ChefHat className='w-4 h-4' />
											<span>
												{recipe.difficulty}
											</span>
										</div>
									</div>

									<Button className='w-full bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 font-elegant'>
										View Full Recipe
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Tips Section */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<div>
							<h2 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand'>
								Cooking with
								<span className='text-gold-700 block'>
									Sambal
								</span>
							</h2>
							<div className='space-y-6 text-lg text-neutral-700 leading-relaxed font-body'>
								<div className='bg-cream-50 rounded-sm p-6 border border-gold-200'>
									<h3 className='font-bold text-burgundy-900 mb-2 font-brand'>
										Start Small
									</h3>
									<p>
										Sambal is potent! Start with a
										small amount and add more to
										taste. You can always add more
										heat, but you can&apos;t take it
										away.
									</p>
								</div>
								<div className='bg-cream-50 rounded-sm p-6 border border-gold-200'>
									<h3 className='font-bold text-burgundy-900 mb-2 font-brand'>
										Perfect Pairings
									</h3>
									<p>
										Sambal pairs beautifully with
										coconut milk, lime juice, and
										fresh herbs. Try it with
										grilled meats, stir-fries, and
										rice dishes.
									</p>
								</div>
								<div className='bg-cream-50 rounded-sm p-6 border border-gold-200'>
									<h3 className='font-bold text-burgundy-900 mb-2 font-brand'>
										Storage Tips
									</h3>
									<p>
										Keep opened jars refrigerated
										and use a clean spoon each
										time. Our sambal will keep its
										flavor for months when stored
										properly.
									</p>
								</div>
							</div>
						</div>
						<div className='relative'>
							<div className='aspect-square rounded-sm overflow-hidden shadow-luxury border border-gold-200'>
								<img
									src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
									alt='Cooking with sambal'
									className='w-full h-full object-cover'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-24 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-4xl sm:text-5xl font-bold mb-6 font-brand'>
						Ready to Start
						<span className='text-gold-300 block'>
							Cooking?
						</span>
					</h2>
					<p className='text-xl text-gold-200 mb-8 font-body'>
						Get our authentic sambal and start creating
						delicious Indonesian-inspired meals tonight
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button
							size='lg'
							className='bg-gold-600 hover:bg-gold-700 text-burgundy-900 px-8 py-4 text-lg font-semibold shadow-gold hover:shadow-luxury transform hover:-translate-y-1 transition-all duration-200 font-elegant'
						>
							<Heart className='w-5 h-5 mr-2' />
							Shop Sambal
						</Button>
						<Button
							variant='outline'
							size='lg'
							className='border-2 border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-burgundy-900 px-8 py-4 text-lg font-semibold font-elegant'
						>
							More Recipes
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
