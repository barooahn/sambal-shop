import { Metadata } from "next";
import PreOrderForm from "@/components/ui/PreOrderForm";
import PreOrderBanner from "@/components/ui/PreOrderBanner";
import { Button } from "@/components/ui/simple-button";
import Link from "next/link";
import {
  CheckCircle,
  Calendar,
  Shield,
  Star,
  ChefHat,
  Heart,
  Award,
  Users
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Pre-Order Authentic Indonesian Sambal | Reserve Your Jars Now",
  description: "Reserve authentic Indonesian sambal by Chef Yossie. No payment required now - pay when we ship in January 2025. Limited pre-order spots available for UK customers.",
  keywords: "pre-order Indonesian sambal UK, reserve sambal oelek, authentic sambal delivery, Chef Yossie sambal, Indonesian condiments pre-order, sambal bali pre-order, traditional sambal uk",
  openGraph: {
    title: "Pre-Order Authentic Indonesian Sambal | No Payment Required",
    description: "Be first to taste Chef Yossie's authentic Indonesian sambal. Reserve yours now, pay when we ship in January 2025. Limited spots available.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.spiceislandindonesia.com/pre-order",
  },
};

export default function PreOrderPage() {
  // Featured product for pre-order
  const featuredProduct = {
    id: "sambal-oelek-preorder",
    name: "Sambal Oelek",
    price: "£6.99",
    originalPrice: "£7.49",
    description: "Pure Indonesian fire - traditional chili paste with no preservatives, made by Chef Yossie using authentic Bandung family recipes.",
    expectedDate: "January 2025",
    discount: "£0.50",
    image: "/images/optimized/sambal-oelek-lg.webp"
  };

  const allProducts = [
    {
      id: "sambal-oelek-preorder",
      name: "Sambal Oelek",
      price: "£6.99",
      originalPrice: "£7.49",
      description: "Pure chili intensity - the foundation of Indonesian cooking",
      discount: "Save £0.50"
    },
    {
      id: "sambal-bali-preorder", 
      name: "Sambal Bali",
      price: "£8.49",
      originalPrice: "£8.99",
      description: "Aromatic complexity with galangal and lemongrass",
      discount: "Save £0.50"
    },
    {
      id: "sambal-goreng-preorder",
      name: "Sambal Goreng", 
      price: "£7.99",
      originalPrice: "£8.49",
      description: "Sweet and spicy harmony with palm sugar",
      discount: "Save £0.50"
    },
    {
      id: "sample-pack-preorder",
      name: "Sample Pack",
      price: "£4.49",
      originalPrice: "£4.99", 
      description: "Try both Sambal Oelek and Sambal Bali in perfect tasting portions",
      discount: "Save £0.50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
      {/* Hero Pre-Order Banner */}
      <PreOrderBanner />

      {/* Why Pre-Order Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-burgundy-900 mb-4">
              Why Pre-Order from Spice Island Indonesia?
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Be among the first to experience authentic Indonesian sambal made with traditional recipes and premium ingredients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-burgundy-900 mb-2">No Risk</h3>
              <p className="text-sm text-neutral-700">Pay only when we ship. Cancel anytime before production starts.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-burgundy-900 mb-2">Special Price</h3>
              <p className="text-sm text-neutral-700">Save £0.50 per jar with pre-order pricing. Limited time offer.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg border border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-burgundy-900 mb-2">Authentic Recipe</h3>
              <p className="text-sm text-neutral-700">Chef Yossie's traditional Bandung family recipes, exactly as made in Indonesia.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-burgundy-900 mb-2">Limited Batch</h3>
              <p className="text-sm text-neutral-700">Small-batch production ensures quality. Reserve your spot early.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pre-Order Form */}
      <section className="py-16 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Selection */}
            <div>
              <h3 className="text-2xl font-bold text-burgundy-900 mb-6">Choose Your Sambal</h3>
              <div className="space-y-4">
                {allProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg p-6 border border-gold-200 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-burgundy-900 text-lg">{product.name}</h4>
                        <p className="text-sm text-neutral-600">{product.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-red-600">{product.price}</span>
                          <span className="text-sm text-neutral-500 line-through">{product.originalPrice}</span>
                        </div>
                        <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                          {product.discount}
                        </span>
                      </div>
                    </div>
                    
                    <Link href={`/pre-order/${product.id}`}>
                      <Button className="w-full bg-burgundy-600 hover:bg-burgundy-700 text-white">
                        Pre-Order {product.name}
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div className="mt-8 bg-white rounded-lg p-6 border border-gold-200">
                <h4 className="font-bold text-burgundy-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Production Timeline
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                    <div>
                      <p className="font-semibold text-green-700">Now - December 2024</p>
                      <p className="text-sm text-neutral-600">Pre-orders open, ingredient sourcing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-1"></div>
                    <div>
                      <p className="font-semibold text-blue-700">January 2025</p>
                      <p className="text-sm text-neutral-600">Production begins, quality testing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mt-1"></div>
                    <div>
                      <p className="font-semibold text-amber-700">February 2025</p>
                      <p className="text-sm text-neutral-600">Packaging, shipping begins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Product Form */}
            <div>
              <PreOrderForm 
                product={featuredProduct}
                onSuccess={(preorderId) => {
                  console.log("Pre-order successful:", preorderId);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-burgundy-900 mb-8 text-center">Pre-Order Questions</h3>
          
          <div className="space-y-6">
            <div className="bg-cream-50 rounded-lg p-6 border border-gold-200">
              <h4 className="font-bold text-burgundy-900 mb-2">When will I be charged?</h4>
              <p className="text-neutral-700">You won't be charged anything now. We'll only collect payment when your sambal is ready to ship in January-February 2025.</p>
            </div>

            <div className="bg-cream-50 rounded-lg p-6 border border-gold-200">
              <h4 className="font-bold text-burgundy-900 mb-2">Can I cancel my pre-order?</h4>
              <p className="text-neutral-700">Yes! You can cancel anytime before we start production in January 2025. Just email us and we'll remove your pre-order immediately.</p>
            </div>

            <div className="bg-cream-50 rounded-lg p-6 border border-gold-200">
              <h4 className="font-bold text-burgundy-900 mb-2">How will I know when it's ready?</h4>
              <p className="text-neutral-700">We'll send you email updates throughout the production process and notify you 24-48 hours before collecting payment and shipping.</p>
            </div>

            <div className="bg-cream-50 rounded-lg p-6 border border-gold-200">
              <h4 className="font-bold text-burgundy-900 mb-2">Is this the same quality as described on your site?</h4>
              <p className="text-neutral-700">Absolutely! These are the exact same authentic recipes and ingredients described throughout our site - made by Chef Yossie using traditional methods.</p>
            </div>

            <div className="bg-cream-50 rounded-lg p-6 border border-gold-200">
              <h4 className="font-bold text-burgundy-900 mb-2">What if I'm not satisfied?</h4>
              <p className="text-neutral-700">We offer a 30-day satisfaction guarantee. If you're not completely happy with your sambal, we'll refund your money.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-burgundy-800 to-burgundy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Taste Authentic Indonesia?</h3>
          <p className="text-xl text-burgundy-200 mb-8">Join the pre-order list and be among the first to experience Chef Yossie's traditional sambal.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-burgundy-900 hover:bg-gray-100">
              Reserve Your Sambal Now
            </Button>
            <Link href="/sample-pack-try-first">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-burgundy-900">
                Or Try Sample Pack First
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}