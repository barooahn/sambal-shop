import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getInternalUrls } from '@/lib/url-utils';

export const metadata = {
	title: "Sign Up | Spice Island Indonesia",
	description: "Create your Spice Island Indonesia account to enjoy authentic Indonesian sambal delivery, exclusive offers, and cooking tips from Chef Yossie.",
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/signup",
	},
};

const SignupForm = dynamic(() => import('@/components/auth/signup-form').then(mod => ({ default: mod.SignupForm })), {
  ssr: true, // Keep SSR for SEO and better UX
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default function SignupPage() {
	const urls = getInternalUrls();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
      {/* SEO Content Section */}
      <div className="pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-burgundy-900 mb-4">
              Join the Indonesian Cooking Community
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Create your account to unlock authentic Indonesian recipes, exclusive sambal cooking tips from Chef Yossie, and member-only discounts on traditional condiments.
            </p>
          </div>

          {/* Member Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gold-200 text-center">
              <div className="text-2xl mb-3">🍜</div>
              <h3 className="font-semibold text-burgundy-900 mb-2">Exclusive Recipes</h3>
              <p className="text-sm text-neutral-600">Chef Yossie's private Bandung family recipes</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gold-200 text-center">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-semibold text-burgundy-900 mb-2">Early Access</h3>
              <p className="text-sm text-neutral-600">First to try new sambal varieties and seasonal products</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gold-200 text-center">
              <div className="text-2xl mb-3">💰</div>
              <h3 className="font-semibold text-burgundy-900 mb-2">Member Discounts</h3>
              <p className="text-sm text-neutral-600">Exclusive discounts on authentic Indonesian condiments</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gold-200 text-center">
              <div className="text-2xl mb-3">📚</div>
              <h3 className="font-semibold text-burgundy-900 mb-2">Cooking Tips</h3>
              <p className="text-sm text-neutral-600">Monthly newsletter with Indonesian cooking techniques</p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-burgundy-50 rounded-lg p-8 mb-12 border border-burgundy-200">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-lg italic text-burgundy-800 mb-3">
                "Chef Yossie's monthly recipes have transformed my cooking! I've learned authentic Indonesian techniques I never knew existed."
              </blockquote>
              <cite className="text-sm text-neutral-600">— Sarah M., London (Member since 2023)</cite>
            </div>
          </div>
        </div>
      </div>

      <SignupForm />

      {/* Popular Resources */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-burgundy-900 mb-8 text-center">Popular with New Members</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spiceislandindonesia.com'}/blog/spicy-food-beginners-guide`} className="block bg-cream-50 rounded-lg p-6 border border-gold-200 hover:border-gold-300 transition-colors">
              <h3 className="font-semibold text-burgundy-900 mb-2">Beginner's Guide to Spicy Food</h3>
              <p className="text-sm text-neutral-600">Learn how to build heat tolerance safely</p>
            </Link>
            
            <Link href={urls.ultimateGuideSambal} className="block bg-cream-50 rounded-lg p-6 border border-gold-200 hover:border-gold-300 transition-colors">
              <h3 className="font-semibold text-burgundy-900 mb-2">Ultimate Sambal Guide</h3>
              <p className="text-sm text-neutral-600">Everything about Indonesian chili pastes</p>
            </Link>
            
            <a href={urls.sambalFriedRice} className="block bg-cream-50 rounded-lg p-6 border border-gold-200 hover:border-gold-300 transition-colors">
              <h3 className="font-semibold text-burgundy-900 mb-2">Sambal Fried Rice Recipe</h3>
              <p className="text-sm text-neutral-600">Chef Yossie's signature dish tutorial</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
