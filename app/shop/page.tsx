"use client";

import { useEffect, useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { products } from '@/src/stripe-config';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { User, LogOut, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ShopPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-red-600">
              Spice Island Indonesia
            </Link>
            
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Link href="/dashboard">
                    <Button variant="outline" className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Dashboard</span>
                    </Button>
                  </Link>
                  <Button 
                    onClick={handleSignOut}
                    variant="outline"
                    className="flex items-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline">Sign In</Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="bg-red-600 hover:bg-red-700">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-red-600" />
            Our Premium Sambal Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Authentic Indonesian flavors crafted from traditional Spice Islands recipes. 
            Each jar brings the bold, complex taste of Indonesia to your kitchen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} user={user} />
          ))}
        </div>

        {!user && (
          <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Order?</h3>
            <p className="text-gray-600 mb-6">
              Create an account to purchase our authentic Indonesian sambal and track your orders.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/signup">
                <Button className="bg-red-600 hover:bg-red-700 px-8 py-3">
                  Create Account
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="px-8 py-3">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}