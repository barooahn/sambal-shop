"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter, Flame, Leaf, Star } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would integrate with your email service
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-amber-500/10 to-emerald-600/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Badge className="bg-red-600 text-white mb-4 px-4 py-2 text-lg">
              <Flame className="w-4 h-4 mr-2" />
              Coming Soon
            </Badge>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-red-600">Authentic Indonesian</span>
            <br />
            <span className="text-amber-600">Sambal</span>
            <br />
            <span className="text-emerald-700">Coming Soon to the UK</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Bringing the bold, traditional flavors of the original Spice Islands directly to British kitchens. 
            Experience the authentic taste of Indonesia with our premium, handcrafted sambal.
          </p>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto shadow-xl border border-amber-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get Early Access</h3>
            <p className="text-gray-600 mb-6">Be the first to know when we launch and receive a 10% early bird discount!</p>
            
            <form onSubmit={handleEmailSignup} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-lg py-3"
              />
              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold transition-all duration-200"
                disabled={isSubmitted}
              >
                {isSubmitted ? 'Thank You! 🌶️' : 'Notify Me + Get 10% Off'}
              </Button>
            </form>
            
            {isSubmitted && (
              <p className="text-green-600 mt-4 font-medium">Thank you! We'll notify you when we launch.</p>
            )}
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Introducing Our Signature
              <span className="text-red-600 block">Sambal Bawang</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship product brings together centuries of Indonesian culinary tradition in every jar
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-500 to-orange-400">
                <img 
                  src="https://images.pexels.com/photos/4198175/pexels-photo-4198175.jpeg" 
                  alt="Sambal Bawang in jar"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-amber-400 text-white px-4 py-2 rounded-full font-bold text-lg transform rotate-12">
                £6.99
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Sambal Bawang</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  A fiery Indonesian chili sauce elevated with aromatic shallots and garlic. This bold, 
                  garlicky condiment is perfect for BBQs, stir-fries, and adding authentic Indonesian 
                  heat to any dish.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Flame className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Bold Heat</p>
                    <p className="text-gray-600 text-sm">Perfectly balanced spice</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">All Natural</p>
                    <p className="text-gray-600 text-sm">No preservatives</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Premium Quality</p>
                    <p className="text-gray-600 text-sm">Handcrafted in small batches</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Authentic Recipe</p>
                    <p className="text-gray-600 text-sm">From the Spice Islands</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Perfect for UK palates</h4>
                <p className="text-gray-700">
                  The bold, garlicky flavor profile that British food lovers crave, with the authentic 
                  Indonesian heat and complexity that sets it apart from ordinary chili sauces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Our Story
                <span className="text-emerald-600 block">From the Original Spice Islands</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our journey begins in the Maluku Islands – the original "Spice Islands" that once 
                  drew traders from around the world in search of precious spices. For generations, 
                  our family has perfected the art of sambal making, preserving ancient recipes 
                  passed down through the centuries.
                </p>
                
                <p>
                  Today, we bring these authentic flavors to the UK, sharing our passion for 
                  Indonesian cuisine with British food lovers who appreciate bold, complex flavors. 
                  Each jar of our sambal is handcrafted using traditional methods, ensuring every 
                  spoonful delivers the genuine taste of Indonesia.
                </p>
                
                <p>
                  We believe that great food brings people together, and our mission is to introduce 
                  the UK to the incredible diversity and depth of Indonesian flavors – one jar at a time.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Badge className="bg-red-100 text-red-800 px-4 py-2">Heritage Recipes</Badge>
                <Badge className="bg-amber-100 text-amber-800 px-4 py-2">Handcrafted</Badge>
                <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2">Small Batch</Badge>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg" 
                  alt="Indonesian spices and ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Us</CardTitle>
              <CardDescription className="text-center">
                Send us a message and we'll get back to you soon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    required
                    className="text-lg py-3"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    required
                    className="text-lg py-3"
                  />
                </div>
                <Textarea
                  placeholder="Your Message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  required
                  className="min-h-32 text-lg"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Spice Island Indonesia</h3>
              <p className="text-gray-300 mb-4">
                Authentic Indonesian sambal from the original Spice Islands, 
                bringing bold flavors to British kitchens.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Recipes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>hello@spiceislandindonesia.co.uk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>Coming Soon</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>United Kingdom</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Spice Island Indonesia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}