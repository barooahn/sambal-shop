'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { HeatLevelSelector } from '@/components/ui/SpiceHeatIndicator';
import { 
  Camera, 
  Heart, 
  Globe, 
  ChefHat, 
  Send, 
  Loader2, 
  Star,
  Upload,
  X,
  Check,
  Sparkles
} from 'lucide-react';
import { toast } from 'sonner';

interface StoryFormData {
  customerName: string;
  customerEmail?: string;
  storyTitle: string;
  storyContent: string;
  recipeShared?: string;
  heatLevel: 1 | 2 | 3 | 4 | 5;
  productUsed: string;
  cookingOccasion: string;
  fusionType: string;
  allowContact: boolean;
  allowFeaturing: boolean;
  photos: File[];
}

const SAMBAL_PRODUCTS = [
  'Sambal Oelek Traditional',
  'Sambal Bali Sweet & Spicy', 
  'Sambal Goreng',
  'Heritage Gift Set',
  'Sample Pack',
  'Other/Multiple'
];

const COOKING_OCCASIONS = [
  { value: 'family-dinner', label: 'Family Dinner', emoji: '👨‍👩‍👧‍👦' },
  { value: 'date-night', label: 'Date Night', emoji: '💕' },
  { value: 'dinner-party', label: 'Dinner Party', emoji: '🎉' },
  { value: 'quick-weeknight', label: 'Quick Weeknight Meal', emoji: '⚡' },
  { value: 'sunday-roast', label: 'Sunday Roast', emoji: '🥩' },
  { value: 'meal-prep', label: 'Meal Prep', emoji: '📦' },
  { value: 'special-occasion', label: 'Special Occasion', emoji: '🎊' },
  { value: 'trying-new-recipe', label: 'Trying Something New', emoji: '🆕' }
];

const FUSION_TYPES = [
  { value: 'traditional', label: 'Traditional Indonesian', description: 'Following authentic recipes' },
  { value: 'british-fusion', label: 'British-Indonesian Fusion', description: 'Mixed with UK ingredients/dishes' },
  { value: 'creative-experiment', label: 'Creative Experiment', description: 'My own unique creation' },
  { value: 'family-adaptation', label: 'Family Recipe Adaptation', description: 'Modified for family preferences' }
];

export default function CustomerStoryForm() {
  const [formData, setFormData] = useState<StoryFormData>({
    customerName: '',
    customerEmail: '',
    storyTitle: '',
    storyContent: '',
    recipeShared: '',
    heatLevel: 3,
    productUsed: '',
    cookingOccasion: '',
    fusionType: '',
    allowContact: false,
    allowFeaturing: false,
    photos: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [photoPreviewUrls, setPhotoPreviewUrls] = useState<string[]>([]);

  const updateFormData = (field: keyof StoryFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    // Limit to 4 photos
    const maxPhotos = 4;
    if (formData.photos.length + files.length > maxPhotos) {
      toast.error(`Maximum ${maxPhotos} photos allowed`);
      return;
    }

    // Validate file types and sizes
    const validFiles = files.filter(file => {
      const isValidType = file.type.startsWith('image/');
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB max

      if (!isValidType) {
        toast.error(`${file.name} is not a valid image file`);
        return false;
      }
      if (!isValidSize) {
        toast.error(`${file.name} is too large (max 5MB)`);
        return false;
      }
      return true;
    });

    if (validFiles.length === 0) return;

    // Update form data
    const newPhotos = [...formData.photos, ...validFiles];
    updateFormData('photos', newPhotos);

    // Create preview URLs
    const newPreviewUrls = validFiles.map(file => URL.createObjectURL(file));
    setPhotoPreviewUrls(prev => [...prev, ...newPreviewUrls]);
  };

  const removePhoto = (index: number) => {
    const newPhotos = formData.photos.filter((_, i) => i !== index);
    updateFormData('photos', newPhotos);

    // Clean up preview URLs
    URL.revokeObjectURL(photoPreviewUrls[index]);
    setPhotoPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First, upload photos if any
      let photoUrls: string[] = [];
      
      if (formData.photos.length > 0) {
        toast.info('Uploading photos...');
        
        // Upload each photo to our API
        for (const photo of formData.photos) {
          const photoFormData = new FormData();
          photoFormData.append('file', photo);
          photoFormData.append('folder', 'story-photos');
          
          const uploadResponse = await fetch('/api/upload', {
            method: 'POST',
            body: photoFormData,
          });
          
          if (!uploadResponse.ok) {
            throw new Error('Failed to upload photo');
          }
          
          const uploadResult = await uploadResponse.json();
          if (uploadResult.success) {
            photoUrls.push(uploadResult.url);
          } else {
            throw new Error(uploadResult.message || 'Photo upload failed');
          }
        }
        
        toast.success('Photos uploaded successfully!');
      }

      // Submit story data
      const storyData = {
        customer_name: formData.customerName,
        customer_email: formData.allowContact ? formData.customerEmail : null,
        story_title: formData.storyTitle,
        story_content: formData.storyContent,
        recipe_shared: formData.recipeShared || null,
        heat_level: formData.heatLevel,
        product_used: formData.productUsed,
        cooking_occasion: formData.cookingOccasion,
        fusion_type: formData.fusionType,
        photos: photoUrls.length > 0 ? photoUrls : null,
        allow_featuring: formData.allowFeaturing,
        approved: false, // Requires admin approval
      };

      const response = await fetch('/api/customer-stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(storyData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit story');
      }

      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        toast.success('Story submitted successfully! We\'ll review it within 24 hours.');
        
        // Clean up preview URLs
        photoPreviewUrls.forEach(url => URL.revokeObjectURL(url));
      } else {
        throw new Error(result.message || 'Failed to submit story');
      }

    } catch (error) {
      console.error('Story submission error:', error);
      toast.error('Failed to submit story. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="shadow-xl border-gold-200">
          <CardHeader className="text-center bg-gradient-to-br from-burgundy-50 to-gold-50">
            <div className="w-20 h-20 mx-auto bg-burgundy-100 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-10 h-10 text-burgundy-700" />
            </div>
            <CardTitle className="text-3xl text-burgundy-900 font-bold">
              Terima Kasih! 🙏
            </CardTitle>
            <CardDescription className="text-lg text-burgundy-700">
              Thank you for sharing your story!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 text-center">
            <div className="space-y-6">
              <p className="text-burgundy-800 text-lg">
                Your story has been submitted and will be reviewed within 24 hours. 
                Once approved, it will be featured in our community stories section!
              </p>
              
              <div className="bg-gradient-to-r from-gold-50 to-gold-100 border-2 border-gold-300 rounded-lg p-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-gold-600" />
                  <p className="font-bold text-gold-800">Community Reward</p>
                  <Star className="w-5 h-5 text-gold-600" />
                </div>
                <p className="text-gold-700 mb-3">
                  You've earned the <strong>"Storyteller"</strong> badge and 
                  <strong> 10% discount</strong> on your next order!
                </p>
                <div className="bg-white/60 rounded-lg px-4 py-2 inline-block">
                  <code className="text-gold-800 font-mono font-bold">STORY10</code>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => window.location.href = '/community'}
                  variant="outline"
                  className="border-burgundy-600 text-burgundy-600 hover:bg-burgundy-50"
                >
                  View Community Stories
                </Button>
                <Button
                  onClick={() => window.location.href = '/shop'}
                  className="bg-burgundy-600 hover:bg-burgundy-700 text-white"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="shadow-xl border-burgundy-200 mb-8">
        <CardHeader className="text-center bg-gradient-to-br from-burgundy-50 to-gold-50">
          <div className="w-16 h-16 mx-auto bg-burgundy-100 rounded-full flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-burgundy-700" />
          </div>
          <CardTitle className="text-3xl text-burgundy-900 font-bold">
            Share Your Sambal Story
          </CardTitle>
          <CardDescription className="text-lg text-burgundy-700">
            Tell our community about your Indonesian cooking adventure
          </CardDescription>
          <div className="flex justify-center mt-4">
            <Badge className="bg-gold-100 text-gold-800">
              <Star className="w-4 h-4 mr-1" />
              Earn storyteller badge + 10% discount
            </Badge>
          </div>
        </CardHeader>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <Card className="shadow-lg border-burgundy-200">
          <CardHeader>
            <CardTitle className="text-xl text-burgundy-900">Tell Us About Yourself</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customerName" className="text-base font-medium">
                  Your Name *
                </Label>
                <Input
                  id="customerName"
                  value={formData.customerName}
                  onChange={(e) => updateFormData('customerName', e.target.value)}
                  placeholder="How should we credit you?"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="customerEmail" className="text-base font-medium">
                  Email (Optional)
                </Label>
                <Input
                  id="customerEmail"
                  type="email"
                  value={formData.customerEmail}
                  onChange={(e) => updateFormData('customerEmail', e.target.value)}
                  placeholder="For follow-up questions"
                  className="mt-1"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox 
                id="allowContact"
                checked={formData.allowContact}
                onCheckedChange={(checked) => updateFormData('allowContact', checked)}
              />
              <Label htmlFor="allowContact" className="text-sm cursor-pointer">
                It's okay to contact me about my story or for future community features
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* Story Details */}
        <Card className="shadow-lg border-burgundy-200">
          <CardHeader>
            <CardTitle className="text-xl text-burgundy-900">Your Cooking Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="storyTitle" className="text-base font-medium">
                Story Title *
              </Label>
              <Input
                id="storyTitle"
                value={formData.storyTitle}
                onChange={(e) => updateFormData('storyTitle', e.target.value)}
                placeholder="e.g., 'My First Indonesian Sunday Roast' or 'Sambal Transformed My Weeknight Dinners'"
                required
                className="mt-1"
                maxLength={100}
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.storyTitle.length}/100 characters
              </p>
            </div>

            <div>
              <Label htmlFor="storyContent" className="text-base font-medium">
                Your Story *
              </Label>
              <Textarea
                id="storyContent"
                value={formData.storyContent}
                onChange={(e) => updateFormData('storyContent', e.target.value)}
                placeholder="Tell us about your experience... What did you cook? How did it turn out? What was the reaction from family/friends? Any surprises or lessons learned?"
                required
                className="mt-1 min-h-32"
                rows={6}
                maxLength={1000}
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.storyContent.length}/1000 characters
              </p>
            </div>

            <div>
              <Label htmlFor="recipeShared" className="text-base font-medium">
                Recipe to Share (Optional)
              </Label>
              <Textarea
                id="recipeShared"
                value={formData.recipeShared}
                onChange={(e) => updateFormData('recipeShared', e.target.value)}
                placeholder="Want to share your recipe with the community? Include ingredients and method here..."
                className="mt-1"
                rows={4}
                maxLength={800}
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.recipeShared?.length || 0}/800 characters
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Cooking Details */}
        <Card className="shadow-lg border-burgundy-200">
          <CardHeader>
            <CardTitle className="text-xl text-burgundy-900">Cooking Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-base font-medium mb-4 block">
                Which sambal did you use? *
              </Label>
              <RadioGroup
                value={formData.productUsed}
                onValueChange={(value) => updateFormData('productUsed', value)}
                className="grid grid-cols-2 gap-3"
              >
                {SAMBAL_PRODUCTS.map((product) => (
                  <div key={product} className="flex items-center space-x-2">
                    <RadioGroupItem value={product} id={product} />
                    <Label htmlFor={product} className="cursor-pointer text-sm">
                      {product}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-base font-medium mb-4 block">
                Heat Level Experience
              </Label>
              <HeatLevelSelector
                selectedLevel={formData.heatLevel}
                onLevelChange={(level) => updateFormData('heatLevel', level)}
                className="w-full"
              />
              <p className="text-sm text-gray-600 mt-2">
                How spicy did this dish turn out for you?
              </p>
            </div>

            <div>
              <Label className="text-base font-medium mb-4 block">
                What was the occasion? *
              </Label>
              <div className="grid grid-cols-2 gap-3">
                {COOKING_OCCASIONS.map((occasion) => (
                  <div 
                    key={occasion.value}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.cookingOccasion === occasion.value
                        ? 'border-burgundy-500 bg-burgundy-50'
                        : 'border-gray-200 hover:border-burgundy-300'
                    }`}
                    onClick={() => updateFormData('cookingOccasion', occasion.value)}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{occasion.emoji}</span>
                      <span className="text-sm font-medium">{occasion.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base font-medium mb-4 block">
                Cooking Style *
              </Label>
              <div className="space-y-3">
                {FUSION_TYPES.map((type) => (
                  <div 
                    key={type.value}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.fusionType === type.value
                        ? 'border-burgundy-500 bg-burgundy-50'
                        : 'border-gray-200 hover:border-burgundy-300'
                    }`}
                    onClick={() => updateFormData('fusionType', type.value)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-burgundy-900">{type.label}</div>
                        <div className="text-sm text-gray-600">{type.description}</div>
                      </div>
                      {formData.fusionType === type.value && (
                        <Check className="w-5 h-5 text-burgundy-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Photo Upload */}
        <Card className="shadow-lg border-burgundy-200">
          <CardHeader>
            <CardTitle className="text-xl text-burgundy-900 flex items-center">
              <Camera className="w-5 h-5 mr-2" />
              Add Photos (Optional)
            </CardTitle>
            <CardDescription>
              Share up to 4 photos of your cooking process or final dish
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {photoPreviewUrls.length < 4 && (
              <div className="border-2 border-dashed border-burgundy-300 rounded-lg p-8 text-center">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <Label
                  htmlFor="photo-upload"
                  className="cursor-pointer flex flex-col items-center space-y-2"
                >
                  <Upload className="w-8 h-8 text-burgundy-600" />
                  <span className="text-burgundy-700 font-medium">
                    Click to upload photos
                  </span>
                  <span className="text-sm text-gray-600">
                    JPG, PNG up to 5MB each
                  </span>
                </Label>
              </div>
            )}

            {photoPreviewUrls.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {photoPreviewUrls.map((url, index) => (
                  <div key={index} className="relative">
                    <img
                      src={url}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Permissions */}
        <Card className="shadow-lg border-burgundy-200">
          <CardHeader>
            <CardTitle className="text-xl text-burgundy-900">Sharing Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="allowFeaturing"
                  checked={formData.allowFeaturing}
                  onCheckedChange={(checked) => updateFormData('allowFeaturing', checked)}
                  className="mt-1"
                />
                <div>
                  <Label htmlFor="allowFeaturing" className="cursor-pointer font-medium">
                    Feature my story
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Allow us to feature your story on our homepage, social media, or marketing materials. 
                    You'll receive additional rewards if featured!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Card className="shadow-lg border-green-200">
          <CardContent className="p-6">
            <Button
              type="submit"
              disabled={
                isSubmitting ||
                !formData.customerName ||
                !formData.storyTitle ||
                !formData.storyContent ||
                !formData.productUsed ||
                !formData.cookingOccasion ||
                !formData.fusionType
              }
              className="w-full bg-burgundy-600 hover:bg-burgundy-700 text-white text-lg py-6"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting your story...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Share My Story & Earn Rewards
                </>
              )}
            </Button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Your story will be reviewed within 24 hours before being published to our community
            </p>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}