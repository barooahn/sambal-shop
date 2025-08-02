import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import VoiceSearchOptimization from "@/components/seo/VoiceSearchOptimization";

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
	"spice-islands-history": {
		title: "The History of the Spice Islands: Where Your Sambal Comes From",
		excerpt: "Journey back to the Maluku Islands, the original Spice Islands that changed world history. Discover the rich culinary heritage and volcanic soil that creates the perfect chilies for authentic sambal.",
		content: `
		<div class="bg-gradient-to-r from-burgundy-50 to-gold-50 border-l-4 border-burgundy-500 p-6 my-8 rounded-r-lg">
			<p class="text-lg font-semibold text-burgundy-900 mb-4">🗺️ Journey Through Time</p>
			<p class="text-burgundy-700">Discover how volcanic islands in Indonesia created the perfect conditions for the world's most prized spices - and the authentic sambal we bring to your kitchen today.</p>
		</div>

		<p class="text-lg leading-relaxed mb-6">Long before Europeans knew of the Americas, before the great age of exploration, there existed a chain of volcanic islands in the Indonesian archipelago that would change the course of world history. The <strong>Maluku Islands</strong> - known to the world as the <em>Spice Islands</em> - were the sole source of nutmeg, cloves, and mace, spices so valuable they were literally worth their weight in gold.</p>

		<p class="text-lg leading-relaxed mb-8">But the Spice Islands gave the world more than just exotic seasonings. They gave us <a href="/shop" class="text-burgundy-600 hover:text-burgundy-800 underline font-semibold">sambal</a> - the fiery, complex chili paste that has become the soul of Indonesian cuisine and is now finding its way into kitchens across the UK.</p>

		<div class="bg-gradient-to-r from-burgundy-50 to-gold-50 border border-burgundy-200 rounded-lg p-6 my-8">
			<h3 class="text-xl font-bold text-burgundy-900 mb-4">📖 In This Article</h3>
			<div class="grid md:grid-cols-2 gap-4 text-sm">
				<ul class="space-y-2">
					<li>• <a href="#volcanic-foundation" class="text-burgundy-600 hover:text-burgundy-800 underline">Volcanic Foundation of Flavor</a></li>
					<li>• <a href="#indigenous-traditions" class="text-burgundy-600 hover:text-burgundy-800 underline">Indigenous Culinary Traditions</a></li>
					<li>• <a href="#spice-trade" class="text-burgundy-600 hover:text-burgundy-800 underline">The Spice Trade Era</a></li>
					<li>• <a href="#science-behind" class="text-burgundy-600 hover:text-burgundy-800 underline">Science Behind Spice Islands Chilies</a></li>
				</ul>
				<ul class="space-y-2">
					<li>• <a href="#traditional-making" class="text-burgundy-600 hover:text-burgundy-800 underline">Traditional Sambal Making</a></li>
					<li>• <a href="#modern-times" class="text-burgundy-600 hover:text-burgundy-800 underline">Journey to Modern Times</a></li>
					<li>• <a href="#uk-tradition" class="text-burgundy-600 hover:text-burgundy-800 underline">Bringing Tradition to the UK</a></li>
					<li>• <a href="#cultural-significance" class="text-burgundy-600 hover:text-burgundy-800 underline">Cultural Significance</a></li>
				</ul>
			</div>
		</div>

		<h2 id="volcanic-foundation" class="text-3xl font-bold text-burgundy-900 mb-6 scroll-mt-20">🌋 The Volcanic Foundation of Flavor</h2>

		<div class="bg-white border border-gold-200 rounded-lg p-6 my-6">
			<p class="text-lg mb-4">The story of <a href="/sambal-oelek-uk" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal</a> begins with geology. The Maluku Islands sit on the Pacific Ring of Fire, where volcanic activity has created some of the most fertile soil on Earth. This volcanic terroir - rich in minerals and perfectly drained - creates ideal growing conditions for chilies that develop exceptional heat and complexity.</p>

			<div class="bg-red-50 p-4 rounded-lg mb-4">
				<h3 class="font-bold text-burgundy-800 mb-2">🔥 Why Volcanic Soil Matters</h3>
				<ul class="space-y-2 text-gray-700">
					<li>• <strong>Mineral-rich composition:</strong> High levels of potassium and phosphorus</li>
					<li>• <strong>Perfect drainage:</strong> Prevents waterlogged roots</li>
					<li>• <strong>Heat development:</strong> Stress conditions increase capsaicin production</li>
					<li>• <strong>Flavor complexity:</strong> Trace minerals create unique taste profiles</li>
				</ul>
			</div>

		<VoiceSearchOptimization
			title="Voice Search Quick Answers"
			quickAnswers={[
				{
					question: "Where do the Spice Islands come from?",
					answer: "The Spice Islands are the Maluku Islands in Indonesia, also known as the Moluccas. They're located in the Indonesian archipelago and were the original source of nutmeg, cloves, and mace that changed world history.",
					category: "Geography"
				},
				{
					question: "Why are the Spice Islands important for sambal?",
					answer: "The volcanic soil of the Spice Islands creates ideal growing conditions for chilies with exceptional heat and complexity. The mineral-rich earth imparts distinctive depth of flavor that cannot be replicated elsewhere.",
					category: "History"
				},
				{
					question: "What makes Spice Islands chilies special?",
					answer: "Volcanic terroir rich in potassium and phosphorus creates chilies with intense heat levels and complex flavor compounds. The well-drained volcanic soil produces chilies with ideal moisture content for traditional grinding techniques.",
					category: "Agriculture"
				},
				{
					question: "How old is sambal making tradition?",
					answer: "Sambal making traditions in the Spice Islands date back centuries, long before European traders arrived in 1512. Indigenous peoples developed sophisticated techniques using volcanic stone mortars that are still used today.",
					category: "Tradition"
				}
			]}
		/>

			<p>The same volcanic soil that once nurtured the world's most precious spices now grows the chilies that form the foundation of <a href="/authentic-vs-store-bought" class="text-burgundy-600 hover:text-burgundy-800 underline">authentic sambal</a>. The mineral-rich earth imparts a distinctive depth of flavor that simply cannot be replicated elsewhere.</p>
		</div>

		<h2>Before the Spice Trade: Indigenous Culinary Traditions</h2>
		<p>Long before European ships arrived seeking nutmeg and cloves, the indigenous peoples of the Maluku Islands had developed sophisticated culinary traditions. They understood that the local chilies, when properly prepared, could preserve food in the tropical climate while adding incredible flavor.</p>

		<p>The earliest forms of sambal were simple but effective: fresh chilies ground with sea salt using volcanic stone mortars called cobek. This basic technique, refined over centuries, remains the foundation of authentic sambal making today.</p>

		<h2>The Spice Trade Era: A Culinary Revolution</h2>
		<p>When Portuguese traders first reached the Spice Islands in 1512, they found not just the nutmeg and cloves they sought, but a culinary culture of extraordinary sophistication. The local sambal-making techniques fascinated European visitors, who had never encountered such complex heat and flavor profiles.</p>

		<p>As trade routes developed, sambal techniques spread throughout the Indonesian archipelago. Each island, each region, developed its own variations, but the Maluku Islands remained the source of the finest chilies and the most refined techniques.</p>

		<h3>The Dutch Colonial Period: Preservation and Evolution</h3>
		<p>During the Dutch colonial period (1602-1945), sambal making evolved further. The Dutch, initially skeptical of the intense heat, gradually came to appreciate the preservative qualities and complex flavors of authentic sambal. They documented traditional recipes, helping to preserve techniques that might otherwise have been lost.</p>

		<p>Interestingly, it was during this period that sambal began to incorporate influences from other parts of the Indonesian archipelago, as the Dutch colonial administration moved people and ingredients between islands. This cross-pollination created some of the regional variations we know today.</p>

		<h2>The Science Behind Spice Islands Chilies</h2>
		<p>Modern food science has revealed why Spice Islands chilies are so exceptional. The volcanic soil contains high levels of potassium, phosphorus, and trace minerals that affect capsaicin development - the compound responsible for chili heat.</p>

		<p>But it's not just about heat. The same minerals that create intense capsaicin also promote the development of complex flavor compounds. This is why authentic Spice Islands sambal has layers of flavor beneath the heat - earthy, fruity, and slightly sweet notes that mass-produced alternatives simply cannot match.</p>

		<h3>The Terroir Effect</h3>
		<p>Like wine grapes, chilies express their terroir - the unique combination of soil, climate, and geography that creates distinctive flavors. The Spice Islands terroir produces chilies with:</p>

		<p><strong>Intense Heat:</strong> The volcanic soil promotes high capsaicin levels, creating authentic Indonesian heat levels.</p>

		<p><strong>Complex Flavor:</strong> Mineral-rich soil develops secondary flavor compounds that add depth and character.</p>

		<p><strong>Perfect Texture:</strong> The well-drained volcanic soil creates chilies with ideal moisture content for traditional grinding techniques.</p>

		<h2>Traditional Sambal Making: An Art Form</h2>
		<p>In the Spice Islands, sambal making is considered an art form passed down through generations. The process begins before dawn, when experienced makers select chilies by touch, smell, and appearance. Only the finest specimens - those with perfect ripeness and no blemishes - are chosen.</p>

		<p>The grinding process using traditional cobek (volcanic stone mortar and pestle) is almost meditative. The rhythm must be steady, the pressure consistent. Too fast, and the chilies release bitter compounds. Too slow, and the essential oils don't properly integrate.</p>

		<h3>The Role of Women in Sambal Tradition</h3>
		<p>Traditionally, sambal making was the domain of women, who guarded family recipes jealously. Mothers would teach daughters not just the techniques, but how to judge chili quality, how to adjust for seasonal variations, and how to balance heat with flavor.</p>

		<p>These women were the true custodians of Indonesian culinary heritage, preserving techniques that had been refined over centuries. Their knowledge forms the foundation of authentic sambal making today.</p>

		<h2>The Journey to Modern Times</h2>
		<p>The 20th century brought challenges to traditional sambal making. World War II disrupted trade routes, and the Indonesian independence movement (1945-1949) created political instability. Many traditional recipes were lost during this turbulent period.</p>

		<p>However, the post-independence era saw a revival of interest in traditional Indonesian cuisine. Government programs in the 1960s and 1970s documented traditional recipes, including many sambal variations from the Spice Islands.</p>

		<h3>Globalization and Authenticity</h3>
		<p>As Indonesian cuisine gained international recognition in the late 20th century, demand for authentic sambal grew worldwide. Unfortunately, this also led to mass-produced imitations that bore little resemblance to traditional Spice Islands sambal.</p>

		<p>The challenge became maintaining authenticity while meeting global demand. This required sourcing chilies directly from traditional growing regions and preserving time-honored preparation methods.</p>

		<h2>Bringing Spice Islands Tradition to the UK</h2>
		<p>Today, bringing authentic Spice Islands sambal to the UK requires careful attention to traditional methods while meeting modern food safety standards. The chilies must still come from the volcanic soils of the Maluku Islands, where the unique terroir creates the distinctive flavor profile.</p>

		<p>The traditional grinding techniques are preserved, though modern equipment ensures consistency and safety. The result is sambal that honors centuries of tradition while meeting the expectations of contemporary consumers.</p>

		<h3>Preserving Heritage in Every Jar</h3>
		<p>Each jar of authentic Spice Islands sambal contains not just chilies, salt, and vinegar, but centuries of culinary heritage. The techniques used today are essentially unchanged from those developed by the indigenous peoples of the Maluku Islands hundreds of years ago.</p>

		<p>This connection to history is what separates authentic sambal from mass-produced alternatives. When you taste real Spice Islands sambal, you're experiencing flavors that have been refined over centuries, techniques that have been passed down through generations.</p>

		<h2>The Cultural Significance of Sambal</h2>
		<p>In Indonesian culture, sambal is more than just a condiment - it's a symbol of hospitality, tradition, and regional identity. Different islands, different families, different occasions call for different sambals. The variety is extraordinary, with some estimates suggesting over 300 distinct regional variations.</p>

		<p>But all authentic sambals trace their lineage back to the Spice Islands, where the perfect combination of volcanic soil, tropical climate, and centuries of refinement created the world's finest chili pastes.</p>

		<h2>Sustainability and the Future</h2>
		<p>Today, sustainable farming practices in the Spice Islands ensure that traditional chili varieties are preserved for future generations. Small-scale farmers use methods that have been proven over centuries, avoiding the industrial agriculture that can diminish flavor complexity.</p>

		<p>This commitment to sustainability ensures that the unique terroir of the Spice Islands continues to produce exceptional chilies, maintaining the quality that has made this region famous for over 500 years.</p>

		<h2>Tasting History</h2>
		<p>When you taste authentic Spice Islands sambal, you're not just experiencing heat and flavor - you're tasting history. You're connecting with centuries of culinary tradition, with the volcanic soil that nurtured civilizations, with the indigenous knowledge that created one of the world's great condiments.</p>

		<p>This is why authenticity matters. This is why traditional methods matter. This is why the Spice Islands remain the gold standard for sambal production, just as they were the gold standard for spice production 500 years ago.</p>

		<p>The next time you add sambal to your cooking, remember that you're using a condiment with a heritage stretching back to the dawn of the global spice trade. You're participating in a culinary tradition that has survived colonization, war, and globalization to bring you flavors that are truly unique in the world.</p>

		<p>Welcome to the taste of the Spice Islands - where history, geography, and culinary artistry combine to create something truly extraordinary.</p>

		<div class="bg-gradient-to-r from-burgundy-600 to-burgundy-800 text-white rounded-lg p-8 my-8">
			<h2 class="text-2xl font-bold mb-4">🌶️ Experience Authentic Spice Islands Heritage</h2>
			<p class="text-lg mb-6">Taste the volcanic terroir and centuries of tradition in every jar of our authentic sambal. Made using traditional methods with chilies from the original Spice Islands.</p>
			<div class="flex flex-col sm:flex-row gap-4">
				<a href="/shop" class="bg-white text-burgundy-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
					Shop Authentic Sambal
				</a>
				<a href="/chef" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-burgundy-600 transition-colors text-center">
					Meet Our Indonesian Chef
				</a>
			</div>
		</div>

		<div class="bg-gradient-to-r from-gold-50 to-cream-50 border border-gold-200 rounded-lg p-8 my-8">
			<h2 class="text-2xl font-bold text-burgundy-900 mb-6">🍽️ Start Cooking with Authentic Sambal</h2>
			<div class="grid md:grid-cols-2 gap-6">
				<div class="bg-white p-4 rounded-lg border border-gold-100">
					<h3 class="font-bold text-burgundy-800 mb-2">
						<a href="/recipes/sambal-chicken-stir-fry" class="hover:text-burgundy-600">Sambal Chicken Stir-Fry</a>
					</h3>
					<p class="text-gray-700 text-sm">Quick Indonesian-inspired dinner in 25 minutes</p>
				</div>
				<div class="bg-white p-4 rounded-lg border border-gold-100">
					<h3 class="font-bold text-burgundy-800 mb-2">
						<a href="/recipes/sambal-fried-rice" class="hover:text-burgundy-600">Nasi Goreng (Sambal Fried Rice)</a>
					</h3>
					<p class="text-gray-700 text-sm">Indonesia's national dish made authentic</p>
				</div>
				<div class="bg-white p-4 rounded-lg border border-gold-100">
					<h3 class="font-bold text-burgundy-800 mb-2">
						<a href="/blog/5-ways-sambal-british-cooking" class="hover:text-burgundy-600">British-Indonesian Fusion</a>
					</h3>
					<p class="text-gray-700 text-sm">Transform British classics with sambal</p>
				</div>
				<div class="bg-white p-4 rounded-lg border border-gold-100">
					<h3 class="font-bold text-burgundy-800 mb-2">
						<a href="/sample-pack-try-first" class="hover:text-burgundy-600">Sample Pack</a>
					</h3>
					<p class="text-gray-700 text-sm">Try different sambals to find your favorite</p>
				</div>
			</div>
		</div>

		<div class="bg-white border border-gold-200 rounded-lg p-6 my-8">
			<h2 class="text-xl font-bold text-burgundy-900 mb-4">📚 Continue Your Indonesian Culinary Journey</h2>
			<div class="space-y-3">
				<p>• <a href="/blog/5-ways-sambal-british-cooking" class="text-burgundy-600 hover:text-burgundy-800 underline">5 Ways to Use Indonesian Sambal in British Cooking</a></p>
				<p>• <a href="/blog/ultimate-guide-indonesian-sambal" class="text-burgundy-600 hover:text-burgundy-800 underline">The Ultimate Guide to Indonesian Sambal: Beyond Sriracha</a></p>
				<p>• <a href="/sambal-vs-sriracha" class="text-burgundy-600 hover:text-burgundy-800 underline">Sambal vs Sriracha: Understanding the Difference</a></p>
				<p>• <a href="/authentic-vs-store-bought" class="text-burgundy-600 hover:text-burgundy-800 underline">Authentic vs Store-Bought: Why Quality Matters</a></p>
			</div>
		</div>
		`,
		image: "/images/indonesian_vista.png",
		category: "Heritage Stories",
		readTime: "12 min read",
		publishDate: "2024-02-10",
		author: "The Spice Island Indonesia Team",
	},
	"5-ways-sambal-british-cooking": {
		title: "5 Ways to Use Indonesian Sambal in British Cooking",
		excerpt: "Transform your favourite British dishes with authentic Indonesian sambal. From Sunday roasts to fish and chips, discover how this traditional chili paste can revolutionize your cooking.",
		content: `
		<p>British cuisine is experiencing a spice revolution, and <a href="/sambal-bali-aromatic-spicy" class="text-burgundy-600 hover:text-burgundy-800 underline">Indonesian sambal</a> is leading the charge. This isn't about replacing traditional flavors - it's about enhancing them with the complex heat and depth that only <a href="/shop" class="text-burgundy-600 hover:text-burgundy-800 underline">authentic sambal</a> can provide.</p>

		<div class="bg-gradient-to-r from-burgundy-50 to-gold-50 border-l-4 border-burgundy-500 p-6 my-8 rounded-r-lg">
			<p class="text-lg font-semibold text-burgundy-900 mb-2">🔥 Quick Navigation</p>
			<ul class="space-y-1 text-burgundy-700">
				<li>• <a href="#sunday-roast" class="hover:text-burgundy-900 underline">Sunday Roast with Sambal Glaze</a></li>
				<li>• <a href="#fish-chips" class="hover:text-burgundy-900 underline">Fish & Chips with Sambal Mayo</a></li>
				<li>• <a href="#full-english" class="hover:text-burgundy-900 underline">Full English with Sambal Beans</a></li>
				<li>• <a href="#shepherds-pie" class="hover:text-burgundy-900 underline">Spicy Shepherd's Pie</a></li>
				<li>• <a href="#cheese-toasties" class="hover:text-burgundy-900 underline">Sambal Cheese Toasties</a></li>
			</ul>
		</div>

		<p>Here are five brilliant ways to incorporate Indonesian sambal into classic British cooking:</p>

		<VoiceSearchOptimization
			title="Voice Search Quick Answers"
			quickAnswers={[
				{
					question: "How do I use sambal in British cooking?",
					answer: "Start with small amounts (1/4 teaspoon) and add sambal to marinades, stir-fries, or mix with mayo for dips. It works brilliantly in Sunday roast glazes, fish and chips mayo, and cheese toasties.",
					category: "Cooking Tips"
				},
				{
					question: "What is the best sambal for beginners?",
					answer: "Sambal Bali is perfect for beginners because it has aromatic spices that balance the heat, making it less aggressive than pure chili pastes while still delivering authentic Indonesian flavor.",
					category: "Product Recommendation"
				},
				{
					question: "Can I use sambal instead of hot sauce?",
					answer: "Yes, but sambal is much hotter than Western hot sauces. Use 1/4 the amount you would use of regular hot sauce and build up gradually. Sambal adds authentic Indonesian flavor, not just heat.",
					category: "Substitution"
				},
				{
					question: "Where can I buy authentic sambal in the UK?",
					answer: "You can order authentic Indonesian sambal online with UK delivery. Look for traditional recipes with minimal ingredients - avoid products with artificial colors or excessive sugar.",
					category: "Shopping"
				}
			]}
		/>

		<h2 id="sunday-roast" class="scroll-mt-20">1. Sunday Roast Revolution: Sambal-Glazed Lamb</h2>

		<div class="bg-white border border-gold-200 rounded-lg p-6 my-6">
			<p class="text-lg mb-4">Transform your Sunday roast with a sambal glaze that will have your guests asking for the recipe. The key is using <a href="/sambal-bali-aromatic-spicy" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal bali</a>, which contains aromatic spices that complement lamb beautifully.</p>

			<h3 class="text-xl font-semibold text-burgundy-800 mb-3">The Method:</h3>
			<div class="bg-cream-50 p-4 rounded-lg mb-4">
				<p>Mix 2 tablespoons of <a href="/sambal-bali-aromatic-spicy" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal bali</a> with 1 tablespoon of honey, 2 tablespoons of olive oil, and fresh rosemary. Rub this mixture over your leg of lamb 30 minutes before roasting. The sambal caramelizes beautifully in the oven, creating a glossy, spiced crust that's absolutely divine.</p>
			</div>

			<p><strong>💡 Why it works:</strong> The aromatic spices in sambal bali (galangal, lemongrass, kaffir lime) create a complex flavor profile that enhances rather than overwhelms the lamb. The heat builds gradually, making it accessible to all palates.</p>
		</div>

		<h2 id="fish-chips" class="scroll-mt-20">2. Fish and Chips Reimagined: Sambal Mayo</h2>

		<div class="bg-white border border-gold-200 rounded-lg p-6 my-6">
			<p class="text-lg mb-4">Forget mushy peas - sambal mayo is the condiment your fish and chips has been waiting for. This fusion creates the perfect balance of creamy coolness and fiery heat.</p>

			<h3 class="text-xl font-semibold text-burgundy-800 mb-3">The Recipe:</h3>
			<div class="bg-cream-50 p-4 rounded-lg mb-4">
				<p>Combine 4 tablespoons of good-quality mayonnaise with 1 teaspoon of <a href="/sambal-oelek-uk" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal oelek</a> (start small - you can always add more). Add a squeeze of lime juice and a pinch of salt. The result is a condiment that transforms ordinary chips into something extraordinary.</p>
			</div>

			<div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
				<p><strong>💡 Pro tip:</strong> Make extra and use it as a sandwich spread, burger sauce, or dip for roasted vegetables. It keeps in the fridge for up to a week. <a href="/recipes/sambal-bbq-marinade" class="text-burgundy-600 hover:text-burgundy-800 underline">Try our sambal marinade recipe</a> for more fusion ideas!</p>
			</div>
		</div>

		<h2 id="full-english" class="scroll-mt-20">3. Full English Breakfast Upgrade: Sambal Baked Beans</h2>

		<div class="bg-white border border-gold-200 rounded-lg p-6 my-6">
			<p class="text-lg mb-4">Elevate your full English with sambal-spiked baked beans that add warmth and complexity to the morning meal. This works particularly well with <a href="/sambal-bali-aromatic-spicy" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal bali's</a> aromatic profile.</p>

			<h3 class="text-xl font-semibold text-burgundy-800 mb-3">The Technique:</h3>
			<div class="bg-cream-50 p-4 rounded-lg mb-4">
				<p>Heat a tin of good-quality baked beans in a saucepan. Stir in 1-2 teaspoons of <a href="/sambal-bali-aromatic-spicy" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal bali</a> (depending on your heat tolerance) and a splash of Worcestershire sauce. The sambal adds depth while the familiar bean sweetness balances the heat perfectly.</p>
			</div>

			<div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
				<p><strong>🍳 Serving suggestion:</strong> Pair with buttery <a href="/recipes/sambal-scrambled-eggs" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal scrambled eggs</a> and crispy bacon. The richness of the eggs helps temper the heat, creating a perfectly balanced breakfast.</p>
			</div>
		</div>

		<h2 id="shepherds-pie" class="scroll-mt-20">4. Shepherd's Pie with a Spicy Twist</h2>

		<div class="bg-white border border-gold-200 rounded-lg p-6 my-6">
			<p class="text-lg mb-4">Add Indonesian flair to this British classic by incorporating sambal into both the meat layer and the mashed potato topping. The result is comfort food with an exciting edge.</p>

			<div class="grid md:grid-cols-2 gap-6 mb-4">
				<div class="bg-red-50 p-4 rounded-lg">
					<h3 class="text-xl font-semibold text-burgundy-800 mb-3">For the Meat Layer:</h3>
					<p>When browning your mince, add 1 tablespoon of <a href="/sambal-oelek-uk" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal oelek</a> along with your onions and carrots. The sambal will cook down and integrate beautifully with the traditional flavors, adding heat without overwhelming the dish.</p>
				</div>

				<div class="bg-yellow-50 p-4 rounded-lg">
					<h3 class="text-xl font-semibold text-burgundy-800 mb-3">For the Potato Topping:</h3>
					<p>Mix a small amount of <a href="/sambal-bali-aromatic-spicy" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal bali</a> into your mashed potatoes along with butter and milk. This creates subtle heat and aromatic complexity that elevates the entire dish.</p>
				</div>
			</div>

			<div class="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
				<p><strong>👨‍👩‍👧‍👦 Family-friendly tip:</strong> Keep the sambal separate and let family members add their preferred amount. This way, everyone can enjoy the dish at their comfort level. <a href="/sample-pack-try-first" class="text-burgundy-600 hover:text-burgundy-800 underline">Try our sample pack</a> to find your family's perfect heat level!</p>
			</div>
		</div>

		<h2 id="cheese-toasties" class="scroll-mt-20">5. Ploughman's Lunch Enhancement: Sambal Cheese Toasties</h2>

		<div class="bg-white border border-gold-200 rounded-lg p-6 my-6">
			<p class="text-lg mb-4">Transform the humble cheese toastie into something spectacular with a thin layer of sambal. This works brilliantly with mature cheddar and creates a perfect balance of creamy, sharp, and spicy.</p>

			<h3 class="text-xl font-semibold text-burgundy-800 mb-3">The Perfect Combination:</h3>
			<div class="bg-cream-50 p-4 rounded-lg mb-4">
				<p>Spread a thin layer of <a href="/sambal-oelek-uk" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal oelek</a> on one slice of bread, add mature cheddar cheese, and top with the second slice. Butter the outside and grill as usual. The sambal melts slightly, creating pockets of heat throughout the sandwich.</p>
			</div>

			<div class="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
				<p><strong>🧀 Gourmet variation:</strong> Add sliced tomatoes and fresh basil for a more sophisticated version. The tomatoes help cool the heat while the basil adds freshness.</p>
			</div>
		</div>

		<div class="bg-gradient-to-r from-burgundy-600 to-burgundy-800 text-white rounded-lg p-8 my-8">
			<h2 class="text-2xl font-bold mb-4">Ready to Transform Your British Cooking?</h2>
			<p class="text-lg mb-6">These five recipes are just the beginning. With authentic Indonesian sambal, you can revolutionize your entire approach to British cuisine.</p>
			<div class="flex flex-col sm:flex-row gap-4">
				<a href="/shop" class="bg-white text-burgundy-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
					Shop Authentic Sambal
				</a>
				<a href="/sample-pack-try-first" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-burgundy-600 transition-colors text-center">
					Try Sample Pack First
				</a>
			</div>
		</div>

		<h2 class="text-2xl font-bold text-burgundy-900 mb-6">Understanding Heat Levels for British Palates</h2>

		<div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
			<p class="text-lg mb-6">Indonesian sambal is significantly hotter than most British condiments. Here's how to introduce it gradually:</p>

			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white p-4 rounded-lg border border-red-100">
					<h3 class="font-bold text-burgundy-800 mb-2">🌶️ Start Small</h3>
					<p>Begin with 1/4 teaspoon and build up. Authentic sambal is 3-5 times hotter than typical British hot sauces.</p>
				</div>

				<div class="bg-white p-4 rounded-lg border border-red-100">
					<h3 class="font-bold text-burgundy-800 mb-2">🎯 Choose Your Sambal</h3>
					<p><a href="/sambal-bali-aromatic-spicy" class="text-burgundy-600 hover:text-burgundy-800 underline">Sambal bali</a> is more approachable for beginners due to its aromatic spices, while <a href="/sambal-oelek-uk" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal oelek</a> provides pure, intense heat.</p>
				</div>

				<div class="bg-white p-4 rounded-lg border border-red-100">
					<h3 class="font-bold text-burgundy-800 mb-2">🥛 Have Dairy Ready</h3>
					<p>Keep yogurt, milk, or ice cream nearby for your first tastings. The casein in dairy neutralizes capsaicin better than water.</p>
				</div>
			</div>
		</div>

		<h2 class="text-2xl font-bold text-burgundy-900 mb-6">Where to Source Authentic Sambal</h2>

		<div class="bg-gradient-to-r from-gold-50 to-cream-50 border border-gold-200 rounded-lg p-6 my-6">
			<p class="text-lg mb-4">The key to these recipes is using <a href="/authentic-vs-store-bought" class="text-burgundy-600 hover:text-burgundy-800 underline">authentic Indonesian sambal</a>, not mass-produced substitutes. Look for brands that list minimal ingredients - ideally just chilies, salt, and vinegar for <a href="/sambal-oelek-uk" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal oelek</a>, or chilies with traditional spices for <a href="/sambal-bali-aromatic-spicy" class="text-burgundy-600 hover:text-burgundy-800 underline">sambal bali</a>.</p>

			<div class="bg-white p-4 rounded-lg border border-gold-100 mb-4">
				<h3 class="font-bold text-burgundy-800 mb-2">✅ What to Look For:</h3>
				<ul class="space-y-1 text-gray-700">
					<li>• Minimal, natural ingredients</li>
					<li>• Chunky texture (not smooth paste)</li>
					<li>• Vibrant, natural color</li>
					<li>• No artificial preservatives</li>
				</ul>
			</div>

			<div class="bg-burgundy-600 text-white p-4 rounded-lg">
				<p class="font-semibold mb-2">🛒 Shop Authentic Sambal</p>
				<p class="mb-3">Get genuine Indonesian sambal made with traditional methods and authentic ingredients.</p>
				<a href="/shop" class="bg-white text-burgundy-600 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
					Browse Our Collection
				</a>
			</div>
		</div>

		<h2>Storage and Safety Tips</h2>
		<p>Authentic sambal should be stored in the refrigerator and consumed within 2-3 weeks of opening. The lack of preservatives means it won't last as long as commercial hot sauces, but the flavor intensity more than compensates.</p>

		<p>Always wash your hands thoroughly after handling sambal, and avoid touching your eyes. The oils can linger on surfaces, so clean cutting boards and utensils immediately after use.</p>

		<h2>Building Your Spice Tolerance</h2>
		<p>If you're new to serious heat, build your tolerance gradually. Start with tiny amounts mixed into familiar dishes. Your palate will adapt, and you'll begin to appreciate the complex flavors beneath the heat.</p>

		<p>Remember: Indonesian sambal isn't just about heat - it's about flavor complexity that has been perfected over centuries. Once you understand this, you'll never go back to ordinary hot sauce.</p>

		<h2>The Future of British-Indonesian Fusion</h2>
		<p>These five applications are just the beginning. Indonesian sambal offers British cooks an opportunity to add authentic, complex heat to familiar dishes without losing their essential character.</p>

		<p>As more British kitchens discover authentic Indonesian ingredients, we're seeing the emergence of a exciting new fusion cuisine that respects both traditions while creating something entirely new.</p>

		<p>Start with one of these five methods, and you'll quickly discover your own creative applications. Welcome to the delicious world of British-Indonesian fusion cooking.</p>

		<div class="bg-gradient-to-r from-burgundy-50 to-gold-50 border border-burgundy-200 rounded-lg p-8 my-8">
			<h2 class="text-2xl font-bold text-burgundy-900 mb-6">🍽️ Try These Related Recipes</h2>
			<div class="grid md:grid-cols-2 gap-6">
				<div class="bg-white p-4 rounded-lg border border-gold-100">
					<h3 class="font-bold text-burgundy-800 mb-2">
						<a href="/recipes/sambal-scrambled-eggs" class="hover:text-burgundy-600">Sambal Scrambled Eggs</a>
					</h3>
					<p class="text-gray-700 text-sm">Perfect spicy breakfast ready in 10 minutes</p>
				</div>
				<div class="bg-white p-4 rounded-lg border border-gold-100">
					<h3 class="font-bold text-burgundy-800 mb-2">
						<a href="/recipes/sambal-bbq-marinade" class="hover:text-burgundy-600">Sambal BBQ Marinade</a>
					</h3>
					<p class="text-gray-700 text-sm">Transform your grilling with Indonesian flavors</p>
				</div>
				<div class="bg-white p-4 rounded-lg border border-gold-100">
					<h3 class="font-bold text-burgundy-800 mb-2">
						<a href="/recipes/sambal-fried-rice" class="hover:text-burgundy-600">Sambal Fried Rice</a>
					</h3>
					<p class="text-gray-700 text-sm">Indonesia's national dish made easy</p>
				</div>
				<div class="bg-white p-4 rounded-lg border border-gold-100">
					<h3 class="font-bold text-burgundy-800 mb-2">
						<a href="/recipes/sambal-noodle-soup" class="hover:text-burgundy-600">Sambal Noodle Soup</a>
					</h3>
					<p class="text-gray-700 text-sm">Warming comfort food with coconut and spice</p>
				</div>
			</div>
			<div class="text-center mt-6">
				<a href="/recipes" class="bg-burgundy-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-burgundy-700 transition-colors">
					View All Recipes
				</a>
			</div>
		</div>

		<div class="bg-white border border-gold-200 rounded-lg p-6 my-8">
			<h2 class="text-xl font-bold text-burgundy-900 mb-4">📚 Learn More About Indonesian Cuisine</h2>
			<div class="space-y-3">
				<p>• <a href="/blog/spice-islands-history" class="text-burgundy-600 hover:text-burgundy-800 underline">The History of the Spice Islands: Where Your Sambal Comes From</a></p>
				<p>• <a href="/blog/ultimate-guide-indonesian-sambal" class="text-burgundy-600 hover:text-burgundy-800 underline">The Ultimate Guide to Indonesian Sambal: Beyond Sriracha</a></p>
				<p>• <a href="/sambal-vs-sriracha" class="text-burgundy-600 hover:text-burgundy-800 underline">Sambal vs Sriracha: Understanding the Difference</a></p>
				<p>• <a href="/chef" class="text-burgundy-600 hover:text-burgundy-800 underline">Meet Chef Yossie: Our Indonesian Culinary Expert</a></p>
			</div>
		</div>
		`,
		image: "/images/Spice Island Indonesia Sambal Bali 185g Label.png",
		category: "Cooking Tips",
		readTime: "10 min read",
		publishDate: "2024-02-05",
		author: "Chef Yossie & The Spice Island Team",
	},
	"ultimate-guide-indonesian-sambal": {
		title: "The Ultimate Guide to Indonesian Sambal: Beyond Sriracha",
		excerpt: "Discover the authentic world of Indonesian sambal - from traditional varieties to modern applications. Learn what makes real sambal different from Western hot sauces.",
		content: `
		<p>If you think Sriracha is spicy, wait until you discover authentic Indonesian sambal. This isn't just another hot sauce - it's a culinary tradition that spans centuries, with each variety telling a unique story from the Indonesian archipelago. From the volcanic islands of Maluku to the bustling markets of Jakarta, sambal is the fiery soul of Indonesian cuisine.</p>

		<h2>What Makes Sambal Different from Hot Sauce?</h2>
		<p>While Western hot sauces focus on vinegar and preservatives, authentic Indonesian sambal is built on three simple principles: fresh chilies, minimal ingredients, and maximum flavor. The texture is chunky rather than smooth, the heat is complex rather than one-dimensional, and the flavor profile changes with each variety.</p>

		<p>Unlike mass-produced hot sauces that can sit on shelves for years, traditional sambal is meant to be consumed fresh. This is why authentic sambal has such intense, vibrant flavors - there are no preservatives dulling the taste, no artificial colors masking the natural beauty of fresh chilies.</p>

		<h2>The Essential Sambal Varieties Every Food Lover Should Know</h2>

		<h3>Sambal Oelek: The Foundation</h3>
		<p>Think of sambal oelek as the mother of all sambals. Made with just fresh red chilies, salt, and a touch of vinegar, it's the purest expression of chili heat. The name "oelek" comes from the Indonesian word for the stone mortar and pestle used to grind the chilies.</p>

		<p>In Indonesian cooking, sambal oelek isn't just a condiment - it's a cooking ingredient. Use it as the base for stir-fries, marinades, and curry pastes. The heat level is intense (think 4-5 out of 5), but the flavor is clean and bright.</p>

		<h3>Sambal Bali: The Aromatic</h3>
		<p>If sambal oelek is fire, sambal bali is fire with finesse. This variety includes aromatic ingredients like galangal, lemongrass, and kaffir lime leaves, creating a complex flavor profile that's perfect for grilled meats and seafood.</p>

		<p>The heat level is more moderate (3 out of 5), making it accessible to those building their spice tolerance. The aromatic spices make it particularly good with British BBQ - try it as a marinade for chicken or lamb.</p>

		<h3>Sambal Terasi: The Umami Bomb</h3>
		<p>This variety includes terasi (shrimp paste), adding a deep umami flavor that transforms simple rice dishes into something extraordinary. It's an acquired taste for Western palates, but once you understand it, you'll crave its complex, savory heat.</p>

		<h2>How to Use Sambal in British Cooking</h2>

		<h3>Sunday Roast Revolution</h3>
		<p>Mix sambal bali with olive oil and herbs for a marinade that will transform your Sunday roast. The aromatic spices complement lamb beautifully, while the heat adds excitement to chicken and pork.</p>

		<h3>Elevated Fish and Chips</h3>
		<p>Forget mushy peas - try sambal oelek mixed with mayonnaise as a dipping sauce for your chips. The clean heat and chunky texture provide the perfect contrast to crispy batter and fluffy potatoes.</p>

		<h3>Breakfast Game Changer</h3>
		<p>A small spoonful of sambal in scrambled eggs creates an Indonesian-British fusion that's become popular in London's trendy cafes. Start with just a tiny amount - sambal is much hotter than you expect.</p>

		<h2>Building Your Spice Tolerance</h2>
		<p>Indonesian sambal is significantly hotter than most Western condiments. Here's how to build your tolerance safely:</p>

		<p><strong>Start Small:</strong> Begin with a tiny amount - literally the tip of a teaspoon. Authentic sambal is 3-10 times hotter than Tabasco.</p>

		<p><strong>Have Dairy Ready:</strong> Keep yogurt or milk nearby for your first tastings. The casein in dairy products neutralizes capsaicin better than water.</p>

		<p><strong>Build Gradually:</strong> Increase the amount slowly over several weeks. Your tolerance will improve, and you'll start to appreciate the complex flavors beneath the heat.</p>

		<h2>The Health Benefits of Authentic Sambal</h2>
		<p>Unlike processed hot sauces loaded with preservatives, authentic sambal offers genuine health benefits. Fresh chilies are packed with vitamin C, capsaicin (which may boost metabolism), and antioxidants. The minimal ingredient list means you're getting pure nutrition without artificial additives.</p>

		<h2>Storing and Serving Sambal</h2>
		<p>Authentic sambal should be stored in the refrigerator and consumed within 2-3 weeks of opening. The lack of preservatives means it won't last as long as commercial hot sauces, but the flavor intensity more than makes up for the shorter shelf life.</p>

		<p>Serve sambal in small amounts - a little goes a very long way. In Indonesia, it's common to have several varieties on the table, allowing diners to choose their preferred heat level and flavor profile.</p>

		<h2>Where to Find Authentic Sambal in the UK</h2>
		<p>While you can find mass-produced versions in supermarkets, authentic sambal made with traditional methods is harder to source. Look for brands that list minimal ingredients, avoid artificial preservatives, and ideally are made by Indonesian producers who understand the traditional techniques.</p>

		<p>The best authentic sambal will have a chunky texture, vibrant color, and an ingredient list you can pronounce. Avoid anything with artificial colors, excessive preservatives, or sugar as a main ingredient.</p>

		<h2>Making the Switch from Sriracha</h2>
		<p>If you're a Sriracha lover ready to explore authentic Indonesian flavors, start with sambal bali. Its aromatic spices provide a bridge between familiar flavors and traditional Indonesian heat. Once you've adjusted to the intensity, try sambal oelek for the pure chili experience.</p>

		<p>Remember: this isn't just about heat - it's about discovering a completely different approach to spicy food. Indonesian sambal offers complexity, tradition, and flavors that have been perfected over centuries. Welcome to the real world of Indonesian spice.</p>
		`,
		image: "/images/Spice Island Indonesia Sambal Oelek 185g Label.png",
		category: "Food Education",
		readTime: "12 min read",
		publishDate: "2024-02-01",
		author: "Chef Yossie & The Spice Island Team",
	},
	"traditional-sambal-making": {
		title: "The Art of Traditional Sambal Making: A Journey Through the Spice Islands",
		excerpt: "Discover the ancient techniques and secret ingredients that make authentic Indonesian sambal so special.",
		content: `
		<p>In the heart of the Maluku Islands, where the morning mist rises from volcanic peaks and the air is thick with the scent of cloves and nutmeg, lies the birthplace of authentic sambal making. For over 500 years, our family has perfected the art of creating these fiery, complex condiments that have become the soul of Indonesian cuisine.</p>

		<h2>The Sacred Ritual of Chili Selection</h2>
		<p>The journey begins before dawn in the local markets, where experienced sambal makers can identify the perfect chilies by touch alone. The ideal chili for sambal oelek must have the right balance of heat, sweetness, and that distinctive Indonesian terroir that comes from volcanic soil.</p>

		<p>We look for chilies that are firm to the touch, with a deep red color that speaks of perfect ripeness. The skin should have a slight sheen, and when you hold them close, the aroma should be clean and fiery, without any hint of mustiness.</p>

		<h2>Traditional Grinding Techniques</h2>
		<p>The cobek (stone mortar and pestle) is the heart of sambal making. Made from volcanic rock, these tools have been passed down through generations, each one seasoned by countless batches of sambal. The grinding technique is crucial - it's not just about crushing the chilies, but about releasing their essential oils and creating the perfect texture.</p>

		<p>The rhythm of grinding is almost meditative. Start with the hardest ingredients - garlic and shallots if making sambal bali - then add the chilies gradually. The motion should be firm but controlled, allowing the volcanic stone to break down the cell walls and release maximum flavor.</p>

		<h2>The Secret Ingredients</h2>
		<p>While many think sambal is just chilies and salt, authentic recipes include subtle ingredients that create depth and complexity. A touch of palm sugar balances the heat, while a splash of tamarind water adds the perfect acidic note. The salt must be sea salt, preferably from the waters around the Spice Islands.</p>

		<p>Each family guards their exact proportions jealously, but the principle remains the same: balance. Heat without nuance is just pain - true sambal should tell a story with every spoonful.</p>

		<h2>Preserving Tradition in Modern Times</h2>
		<p>As we bring these traditional recipes to the UK, we face the challenge of maintaining authenticity while meeting modern food safety standards. Every jar of our sambal is still made using traditional methods, but we've adapted our processes to ensure consistency and safety without compromising flavor.</p>

		<p>We source our chilies directly from trusted farmers in Indonesia, flash-freeze them at peak ripeness, and transport them to our UK facility where they're processed using the same techniques our ancestors used centuries ago.</p>
		`,
		image: "/images/indonesian_vista.png",
		category: "Traditional Recipes",
		readTime: "8 min read",
		publishDate: "2024-01-15",
		author: "The Spice Island Indonesia Team",
	},
};

interface BlogPostPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateMetadata({
	params,
}: BlogPostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = blogPosts[slug as keyof typeof blogPosts];

	if (!post) {
		return {
			title: "Post Not Found | Spice Island Indonesia Blog",
		};
	}

	return {
		title: `${post.title} | Spice Island Indonesia Blog`,
		description: post.excerpt,
		keywords:
			"Indonesian sambal, traditional recipes, Spice Islands, authentic Indonesian cooking, sambal making techniques",
		openGraph: {
			title: post.title,
			description: post.excerpt,
			images: [post.image],
			type: "article",
		},
	};
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const post = blogPosts[slug as keyof typeof blogPosts];

	if (!post) {
		notFound();
	}

	return (
		<div className='min-h-screen bg-gradient-to-b from-cream-50 to-cream-100'>
			{/* Hero Section */}
			<section className='py-16 bg-gradient-to-br from-burgundy-50 to-gold-50 relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-burgundy-900/5 via-transparent to-gold-600/5'></div>

				<div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<Link
						href='/blog'
						className='inline-flex items-center gap-2 text-burgundy-700 hover:text-burgundy-900 mb-8 font-elegant'
					>
						<ArrowLeft className='w-4 h-4' />
						Back to Blog
					</Link>

					<div className='mb-6'>
						<Badge
							variant='secondary'
							className='mb-4 font-elegant'
						>
							{post.category}
						</Badge>
						<h1 className='text-4xl sm:text-5xl font-bold text-burgundy-900 mb-6 font-brand leading-tight'>
							{post.title}
						</h1>
						<div className='flex items-center gap-6 text-neutral-600 font-body'>
							<div className='flex items-center gap-2'>
								<Calendar className='w-4 h-4' />
								{new Date(
									post.publishDate
								).toLocaleDateString("en-GB", {
									day: "numeric",
									month: "long",
									year: "numeric",
								})}
							</div>
							<div className='flex items-center gap-2'>
								<Clock className='w-4 h-4' />
								{post.readTime}
							</div>
							<button className='flex items-center gap-2 hover:text-burgundy-700 transition-colors'>
								<Share2 className='w-4 h-4' />
								Share
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Article Content */}
			<article className='py-16'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					{/* Featured Image */}
					<div className='relative aspect-[16/9] rounded-3xl overflow-hidden shadow-luxury mb-12'>
						<Image
							src={post.image}
							alt={post.title}
							fill
							className='object-cover'
							priority
						/>
					</div>

					{/* Article Body */}
					<Card className='shadow-luxury border border-gold-200 bg-gradient-to-br from-cream-50 to-cream-100 rounded-3xl overflow-hidden'>
						<CardContent className='p-8 lg:p-12'>
							<div
								className='prose prose-lg max-w-none font-body text-neutral-700 leading-relaxed'
								dangerouslySetInnerHTML={{
									__html: post.content,
								}}
								style={
									{
										"--tw-prose-headings":
											"rgb(127 29 29)", // burgundy-900
										"--tw-prose-links":
											"rgb(180 83 9)", // gold-700
									} as React.CSSProperties
								}
							/>
						</CardContent>
					</Card>

					{/* Author Bio */}
					<Card className='mt-12 shadow-lg border border-gold-200 bg-gradient-to-br from-burgundy-50 to-gold-50 rounded-2xl'>
						<CardContent className='p-8'>
							<div className='flex items-center gap-4'>
								<div className='w-16 h-16 bg-gradient-to-r from-burgundy-900 to-burgundy-800 rounded-full flex items-center justify-center border border-gold-600/30'>
									<span className='text-gold-200 font-bold text-xl font-brand'>
										SI
									</span>
								</div>
								<div>
									<h3 className='text-xl font-bold text-burgundy-900 font-brand'>
										{post.author}
									</h3>
									<p className='text-neutral-700 font-body'>
										Passionate about preserving
										authentic Indonesian culinary
										traditions and sharing the
										rich heritage of the Spice
										Islands with the world.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Related Posts CTA */}
					<div className='mt-16 text-center'>
						<h3 className='text-2xl font-bold text-burgundy-900 mb-6 font-brand'>
							Explore More Stories
						</h3>
						<Link
							href='/blog'
							className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 font-bold rounded-full hover:shadow-lg transition-all duration-300 border border-gold-600/30 font-elegant'
						>
							View All Blog Posts
						</Link>
					</div>
				</div>
			</article>
		</div>
	);
}
