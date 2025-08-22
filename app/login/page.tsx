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
  return <LoginForm />;
}