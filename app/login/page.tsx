import dynamic from 'next/dynamic';

export const metadata = {
	title: "Login | Spice Island Indonesia",
	description: "Sign in to your Spice Island Indonesia account to manage orders, track deliveries, and access exclusive Indonesian sambal offers.",
	alternates: {
		canonical: "https://www.spiceislandindonesia.com/login",
	},
};

const LoginForm = dynamic(() => import('@/components/auth/login-form').then(mod => ({ default: mod.LoginForm })), {
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
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
      {/* SEO Content Section */}
      <div className="pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-burgundy-900 mb-4">
              Access Your Indonesian Sambal Account
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Sign in to enjoy faster checkout, order tracking, exclusive Indonesian recipes, and special offers from Chef Yossie's authentic sambal collection.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gold-200 text-center">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-burgundy-900 mb-2">Exclusive Indonesian Recipes</h3>
              <p className="text-sm text-neutral-600">Access Chef Yossie's private recipe collection and monthly cooking tips from Bandung.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gold-200 text-center">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-burgundy-900 mb-2">Fast & Secure Checkout</h3>
              <p className="text-sm text-neutral-600">Save payment details for quick sambal orders with tracked UK delivery.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gold-200 text-center">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-semibold text-burgundy-900 mb-2">Early Access & Discounts</h3>
              <p className="text-sm text-neutral-600">Get first access to new sambal varieties and member-only special offers.</p>
            </div>
          </div>
        </div>
      </div>

      <LoginForm />

      {/* Additional Content Section */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-burgundy-900 mb-4">New to Indonesian Cuisine?</h2>
              <p className="text-neutral-600 mb-4">
                Create an account to access our beginner-friendly guides and learn about authentic Indonesian cooking from Chef Yossie's professional kitchen experience.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Step-by-step sambal cooking tutorials</li>
                <li>• Traditional recipe modifications for UK ingredients</li>
                <li>• Heat level guidance for British palates</li>
                <li>• Monthly Indonesian cooking newsletter</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-burgundy-900 mb-4">Account Security</h3>
              <p className="text-neutral-600 mb-4">
                Your personal information and payment details are protected with enterprise-level security. We follow UK data protection regulations and never share your information.
              </p>
              <div className="flex items-center space-x-4 text-sm text-neutral-600">
                <span>🔒 SSL Encrypted</span>
                <span>🇬🇧 UK GDPR Compliant</span>
                <span>🛡️ Secure Payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}