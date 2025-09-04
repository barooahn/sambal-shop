"use client";

import { useState } from "react";
import { Button } from "@/components/ui/simple-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Loader2, 
  CheckCircle, 
  Mail, 
  User, 
  Phone,
  MessageSquare,
  Calendar,
  Star,
  Shield,
  Truck
} from "@/components/ui/icons";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  image?: string;
  expectedDate?: string;
  discount?: string;
}

interface PreOrderFormProps {
  product: Product;
  onSuccess?: (preorderId: string) => void;
  className?: string;
}

export default function PreOrderForm({ product, onSuccess, className = "" }: PreOrderFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [preorderId, setPreorderId] = useState("");
  
  const [formData, setFormData] = useState({
    email: "",
    customer_name: "",
    phone: "",
    quantity: 1,
    special_requests: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.customer_name) {
      newErrors.customer_name = "Name is required";
    }
    
    if (formData.quantity < 1 || formData.quantity > 10) {
      newErrors.quantity = "Quantity must be between 1 and 10";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/pre-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          product_id: product.id,
          product_name: product.name,
          total_amount: parseFloat(product.price.replace('£', '')) * formData.quantity,
          source: "product_preorder_form"
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit pre-order");
      }

      setPreorderId(result.preorder_id);
      setIsSuccess(true);
      toast.success(result.message);
      
      if (onSuccess) {
        onSuccess(result.preorder_id);
      }

      // Track analytics
      try {
        const { trackEvent } = await import("@/components/analytics/GoogleAnalytics");
        trackEvent("pre_order_submit", "engagement", product.id, formData.quantity);
      } catch {}

    } catch (error: any) {
      console.error("Pre-order submission error:", error);
      toast.error(error.message || "Failed to submit pre-order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const totalAmount = parseFloat(product.price.replace('£', '')) * formData.quantity;

  if (isSuccess) {
    return (
      <Card className={`border-green-200 bg-green-50 ${className}`}>
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          
          <h3 className="text-2xl font-bold text-green-800 mb-4">Pre-Order Confirmed!</h3>
          
          <div className="bg-white rounded-lg p-6 mb-6 text-left">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-neutral-600">Pre-Order ID:</span>
              <span className="font-mono text-sm bg-green-100 px-3 py-1 rounded">{preorderId}</span>
            </div>
            
            <div className="space-y-2 text-sm text-neutral-700">
              <div className="flex justify-between">
                <span>Product:</span>
                <span className="font-semibold">{product.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity:</span>
                <span>{formData.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span>Email:</span>
                <span>{formData.email}</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t">
                <span>Total:</span>
                <span>£{totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-3 mb-2">
              <Calendar className="w-5 h-5 text-amber-600" />
              <span className="font-semibold text-amber-800">What Happens Next?</span>
            </div>
            <ul className="text-sm text-amber-700 space-y-1 text-left">
              <li>• You'll receive a confirmation email shortly</li>
              <li>• We'll start production in January 2025</li>
              <li>• You'll get shipping notification when ready</li>
              <li>• Payment will be collected before shipping</li>
            </ul>
          </div>

          <p className="text-neutral-600 mb-6">
            Thank you for supporting authentic Indonesian cuisine! We'll keep you updated on production progress.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => window.location.href = '/products'}
              className="bg-burgundy-600 hover:bg-burgundy-700 text-white"
            >
              View Other Products
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/recipes'}
              className="border-burgundy-300 text-burgundy-700 hover:bg-burgundy-50"
            >
              Explore Recipes
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`border-gold-200 bg-gradient-to-br from-cream-50 to-cream-100 ${className}`}>
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <Badge className="bg-amber-600 text-white px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            Pre-Order Special
          </Badge>
        </div>
        
        <CardTitle className="text-2xl font-bold text-burgundy-900">
          Reserve Your {product.name}
        </CardTitle>
        
        {product.discount && (
          <div className="flex items-center justify-center space-x-3 mt-2">
            <span className="text-lg text-neutral-500 line-through">{product.originalPrice}</span>
            <span className="text-2xl font-bold text-red-600">{product.price}</span>
            <Badge className="bg-red-100 text-red-700">{product.discount} OFF</Badge>
          </div>
        )}
        
        <p className="text-neutral-600 mt-3">
          {product.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-white/60 rounded-lg p-4">
            <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-xs font-semibold text-green-700">No Payment Now</p>
            <p className="text-xs text-neutral-600">Pay when we ship</p>
          </div>
          <div className="bg-white/60 rounded-lg p-4">
            <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-xs font-semibold text-blue-700">Expected: Jan 2025</p>
            <p className="text-xs text-neutral-600">Production start</p>
          </div>
          <div className="bg-white/60 rounded-lg p-4">
            <Truck className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-xs font-semibold text-purple-700">Free UK Shipping</p>
            <p className="text-xs text-neutral-600">Orders over £20</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-burgundy-900 mb-2">
              <Mail className="w-4 h-4 inline mr-1" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? 'border-red-300 bg-red-50' : 'border-gold-300'
              } focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-colors`}
              placeholder="your@email.com"
              required
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Name Field */}
          <div>
            <label htmlFor="customer_name" className="block text-sm font-semibold text-burgundy-900 mb-2">
              <User className="w-4 h-4 inline mr-1" />
              Full Name *
            </label>
            <input
              type="text"
              id="customer_name"
              value={formData.customer_name}
              onChange={(e) => handleInputChange("customer_name", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.customer_name ? 'border-red-300 bg-red-50' : 'border-gold-300'
              } focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-colors`}
              placeholder="Your full name"
              required
            />
            {errors.customer_name && <p className="text-red-600 text-sm mt-1">{errors.customer_name}</p>}
          </div>

          {/* Phone Field (Optional) */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-burgundy-900 mb-2">
              <Phone className="w-4 h-4 inline mr-1" />
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gold-300 focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-colors"
              placeholder="UK phone number"
            />
          </div>

          {/* Quantity Field */}
          <div>
            <label htmlFor="quantity" className="block text-sm font-semibold text-burgundy-900 mb-2">
              <ShoppingCart className="w-4 h-4 inline mr-1" />
              Quantity
            </label>
            <select
              id="quantity"
              value={formData.quantity}
              onChange={(e) => handleInputChange("quantity", parseInt(e.target.value))}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.quantity ? 'border-red-300 bg-red-50' : 'border-gold-300'
              } focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-colors`}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>
                  {num} jar{num > 1 ? 's' : ''} - £{(parseFloat(product.price.replace('£', '')) * num).toFixed(2)}
                </option>
              ))}
            </select>
            {errors.quantity && <p className="text-red-600 text-sm mt-1">{errors.quantity}</p>}
          </div>

          {/* Special Requests */}
          <div>
            <label htmlFor="special_requests" className="block text-sm font-semibold text-burgundy-900 mb-2">
              <MessageSquare className="w-4 h-4 inline mr-1" />
              Special Requests (Optional)
            </label>
            <textarea
              id="special_requests"
              value={formData.special_requests}
              onChange={(e) => handleInputChange("special_requests", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gold-300 focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-colors"
              rows={3}
              placeholder="Any special packaging requests or notes..."
            />
          </div>

          {/* Order Summary */}
          <div className="bg-white/80 rounded-lg p-4 border border-gold-200">
            <h4 className="font-semibold text-burgundy-900 mb-3">Pre-Order Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>{product.name} × {formData.quantity}</span>
                <span>£{totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>£{totalAmount.toFixed(2)}</span>
              </div>
              <p className="text-xs text-neutral-600 mt-2">
                * Payment will be collected before shipping in January 2025
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-burgundy-600 hover:bg-burgundy-700 text-white font-semibold py-4 text-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Confirming Pre-Order...
              </>
            ) : (
              <>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Confirm Pre-Order - No Payment Now
              </>
            )}
          </Button>

          <p className="text-xs text-neutral-600 text-center">
            By submitting, you agree to receive email updates about your pre-order. 
            No payment required now - you'll be charged when we ship in January 2025.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}