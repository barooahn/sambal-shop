'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/simple-button';
import { Progress } from '@/components/ui/simple-progress';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/simple-radio-group';
import { Label } from '@/components/ui/simple-label';
import { Checkbox } from '@/components/ui/simple-checkbox';
import { 
  ChefHat, 
  Flame, 
  Award, 
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShoppingCart
} from '@/components/ui/icons';

interface QuizData {
  heatTolerance: number;
  cuisineExperience: string;
  flavorPreferences: string[];
  cookingFrequency: string;
  ukIngredientAccess: boolean;
  primaryGoals: string[];
  currentStep: number;
}

interface ProductRecommendation {
  name: string;
  description: string;
  heatLevel: number;
  price: string;
  image: string;
  reasons: string[];
}

interface QuizResults {
  heatProfile: string;
  recommendations: ProductRecommendation[];
  personalizedTips: string[];
  nextSteps: string[];
}

const HEAT_LEVELS = [
  { level: 1, label: 'Very Mild (Tidak Pedas)', emoji: '🌶️', description: 'Just a hint of warmth - perfect for beginners', color: 'emerald-500' },
  { level: 2, label: 'Mild (Sedang)', emoji: '🌶️🌶️', description: 'Gentle heat, family-friendly', color: 'amber-500' },
  { level: 3, label: 'Medium (Pedas)', emoji: '🌶️🌶️🌶️', description: 'Noticeable kick, well-balanced', color: 'red-500' },
  { level: 4, label: 'Hot (Sangat Pedas)', emoji: '🌶️🌶️🌶️🌶️', description: 'Serious heat for spice lovers', color: 'red-800' },
  { level: 5, label: 'Extreme (Pedas Sekali)', emoji: '🔥🔥🔥', description: 'Maximum Indonesian intensity!', color: 'red-800' }
];

const CUISINE_EXPERIENCES = [
  { value: 'beginner', label: 'Complete Beginner', description: 'New to Asian/Indonesian cuisine' },
  { value: 'some-experience', label: 'Some Experience', description: 'Tried a few Asian dishes' },
  { value: 'regular', label: 'Regular Explorer', description: 'Cook Asian food occasionally' },
  { value: 'experienced', label: 'Experienced', description: 'Very familiar with Asian cuisines' },
  { value: 'expert', label: 'Expert/Professional', description: 'Professional or expert level' }
];

const FLAVOR_PREFERENCES = [
  { value: 'sweet-spicy', label: 'Sweet & Spicy', emoji: '🍯🌶️' },
  { value: 'smoky', label: 'Smoky & Rich', emoji: '🔥' },
  { value: 'fresh-tangy', label: 'Fresh & Tangy', emoji: '🍋' },
  { value: 'complex-layered', label: 'Complex & Layered', emoji: '🎭' },
  { value: 'simple-clean', label: 'Simple & Clean', emoji: '✨' },
  { value: 'umami-rich', label: 'Umami & Savory', emoji: '🍄' }
];

const COOKING_FREQUENCIES = [
  { value: 'daily', label: 'Daily Cook', description: 'I cook most meals at home' },
  { value: 'weekly', label: 'Weekly Explorer', description: '3-4 times per week' },
  { value: 'weekend', label: 'Weekend Warrior', description: 'Mainly weekends and special occasions' },
  { value: 'occasional', label: 'Occasional Chef', description: 'Once or twice a month' }
];

const PRIMARY_GOALS = [
  { value: 'explore-flavors', label: 'Explore New Flavors', emoji: '🌏' },
  { value: 'family-meals', label: 'Enhance Family Meals', emoji: '👨‍👩‍👧‍👦' },
  { value: 'impress-guests', label: 'Impress Dinner Guests', emoji: '🎉' },
  { value: 'healthy-cooking', label: 'Add Healthy Spices', emoji: '🥗' },
  { value: 'cultural-connection', label: 'Connect with Culture', emoji: '🇮🇩' },
  { value: 'heat-tolerance', label: 'Build Heat Tolerance', emoji: '🔥' }
];

export default function PersonalizedSambalQuiz() {
  const [quizData, setQuizData] = useState<QuizData>({
    heatTolerance: 3,
    cuisineExperience: '',
    flavorPreferences: [],
    cookingFrequency: '',
    ukIngredientAccess: true,
    primaryGoals: [],
    currentStep: 1
  });

  const [results, setResults] = useState<QuizResults | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 7;
  const progress = (quizData.currentStep / totalSteps) * 100;

  const updateQuizData = (field: keyof QuizData, value: any) => {
    setQuizData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field: 'flavorPreferences' | 'primaryGoals', value: string) => {
    setQuizData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const nextStep = () => {
    if (quizData.currentStep < totalSteps) {
      updateQuizData('currentStep', quizData.currentStep + 1);
    } else {
      submitQuiz();
    }
  };

  const prevStep = () => {
    if (quizData.currentStep > 1) {
      updateQuizData('currentStep', quizData.currentStep - 1);
    }
  };

  const submitQuiz = async () => {
    setIsSubmitting(true);
    
    try {
      // Generate recommendations
      const quizResults = generateRecommendations(quizData);
      
      // Submit to API (in real app)
      const response = await fetch('/api/quiz-results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_email: 'demo@example.com', // Get from auth in real app
          heat_tolerance: quizData.heatTolerance,
          cuisine_experience: quizData.cuisineExperience,
          flavor_preferences: quizData.flavorPreferences,
          cooking_frequency: quizData.cookingFrequency,
          uk_ingredient_access: quizData.ukIngredientAccess,
          primary_goals: quizData.primaryGoals,
          quiz_completed_at: new Date().toISOString()
        })
      });

      setResults(quizResults);
    } catch (error) {
      console.error('Quiz submission error:', error);
      // Still show results even if API fails
      setResults(generateRecommendations(quizData));
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateRecommendations = (data: QuizData): QuizResults => {
    const recommendations: ProductRecommendation[] = [];
    
    // Base recommendation logic
    if (data.heatTolerance <= 2) {
      recommendations.push({
        name: 'Sambal Bali Sweet & Spicy',
        description: 'Perfect starter sambal with balanced sweetness and mild heat',
        heatLevel: 2,
        price: '£8.99',
        image: '/images/sambal-bali-sweet.jpg',
        reasons: ['Mild heat level matches your tolerance', 'Sweet notes make it very approachable', 'Great for family meals']
      });
    }
    
    if (data.heatTolerance >= 3) {
      recommendations.push({
        name: 'Sambal Oelek Traditional',
        description: 'Authentic Indonesian sambal with pure chili flavor',
        heatLevel: 3,
        price: '£9.99',
        image: '/images/sambal-oelek.jpg',
        reasons: ['Matches your medium heat preference', 'Versatile for many dishes', 'Authentic Indonesian experience']
      });
    }

    if (data.heatTolerance >= 4) {
      recommendations.push({
        name: 'Sambal Goreng Extra Hot',
        description: 'For serious heat lovers who want authentic fire',
        heatLevel: 4,
        price: '£10.99',
        image: '/images/sambal-goreng.jpg',
        reasons: ['High heat level for experienced users', 'Complex flavor profile', 'Traditional preparation method']
      });
    }

    // Add sample pack for beginners
    if (data.cuisineExperience === 'beginner' || data.flavorPreferences.length > 3) {
      recommendations.unshift({
        name: 'Heritage Discovery Sample Pack',
        description: 'Try all our varieties with this curated tasting set',
        heatLevel: 0,
        price: '£24.99',
        image: '/images/sample-pack.jpg',
        reasons: ['Perfect for exploring different flavors', 'Best value for trying multiple sambals', 'Includes tasting guide']
      });
    }

    const heatProfile = getHeatProfile(data.heatTolerance);
    const personalizedTips = getPersonalizedTips(data);
    const nextSteps = getNextSteps(data);

    return {
      heatProfile,
      recommendations,
      personalizedTips,
      nextSteps
    };
  };

  const getHeatProfile = (heatLevel: number): string => {
    const profiles = [
      'Heat Sensitive Explorer',
      'Gentle Heat Enjoyer', 
      'Balanced Spice Lover',
      'Heat Seeker',
      'Fire Master'
    ];
    return profiles[heatLevel - 1] || 'Spice Explorer';
  };

  const getPersonalizedTips = (data: QuizData): string[] => {
    const tips = [];
    
    if (data.heatTolerance <= 2) {
      tips.push('Start with small amounts and gradually increase to build tolerance');
      tips.push('Mix sambal with yogurt or coconut milk to moderate heat');
    }
    
    if (data.cuisineExperience === 'beginner') {
      tips.push('Try sambal as a condiment before using it as a cooking ingredient');
      tips.push('Start with familiar dishes and add small amounts of sambal');
    }
    
    if (data.cookingFrequency === 'weekend') {
      tips.push('Perfect for weekend meal prep - make sambal-marinated proteins in advance');
    }
    
    if (data.primaryGoals.includes('family-meals')) {
      tips.push('Serve sambal on the side so family members can adjust heat to taste');
    }

    return tips;
  };

  const getNextSteps = (data: QuizData): string[] => {
    const steps = [];
    
    steps.push('Order your recommended sambal selection');
    
    if (data.cuisineExperience === 'beginner') {
      steps.push('Download our free Indonesian Cooking Guide');
      steps.push('Join our community to share your first sambal experience');
    }
    
    steps.push('Try our featured recipe suggestions');
    steps.push('Share your cooking story for rewards and badges');
    
    return steps;
  };

  const canProceed = () => {
    switch (quizData.currentStep) {
      case 2: return quizData.cuisineExperience !== '';
      case 3: return quizData.flavorPreferences.length > 0;
      case 4: return quizData.cookingFrequency !== '';
      case 6: return quizData.primaryGoals.length > 0;
      default: return true;
    }
  };

  if (results) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="shadow-xl border-gold-200 mb-8">
          <CardHeader className="text-center bg-gradient-to-br from-burgundy-50 to-gold-50">
            <div className="w-20 h-20 mx-auto bg-burgundy-100 rounded-full flex items-center justify-center mb-4">
              <Award className="w-10 h-10 text-burgundy-700" />
            </div>
            <CardTitle className="text-3xl text-burgundy-900 font-bold mb-2">
              Your Sambal Profile: {results.heatProfile}
            </CardTitle>
            <CardDescription className="text-lg text-burgundy-700">
              Personalized recommendations based on your preferences
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Recommendations */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-burgundy-900 mb-6 flex items-center">
            <ShoppingCart className="w-6 h-6 mr-3" />
            Recommended for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.recommendations.map((product, index) => (
              <Card key={index} className="shadow-lg border-burgundy-200 hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-burgundy-100 text-burgundy-800">
                      #{index + 1} Pick
                    </Badge>
                    {product.heatLevel > 0 && (
                      <Badge className="bg-orange-100 text-orange-800">
                        {HEAT_LEVELS.find(h => h.level === product.heatLevel)?.emoji} Heat {product.heatLevel}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-burgundy-900">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold text-burgundy-700">{product.price}</div>
                  
                  <div>
                    <h4 className="font-semibold text-burgundy-900 mb-2">Perfect for you because:</h4>
                    <ul className="space-y-1">
                      {product.reasons.map((reason, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <Sparkles className="w-3 h-3 mt-1 mr-2 text-gold-600 flex-shrink-0" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-burgundy-600 hover:bg-burgundy-700">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-xl text-blue-900 flex items-center">
                <ChefHat className="w-5 h-5 mr-2" />
                Personalized Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {results.personalizedTips.map((tip, index) => (
                  <li key={index} className="text-blue-800 flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-xl text-green-900 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Your Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {results.nextSteps.map((step, index) => (
                  <li key={index} className="text-green-800 flex items-start">
                    <span className="text-green-600 mr-2">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <Card className="bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white border-0">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Ready to Start Your Spice Journey?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-burgundy-700 hover:bg-gold-50">
                Shop Recommendations
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-burgundy-700">
                Share Your Story
              </Button>
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
            <Flame className="w-8 h-8 text-burgundy-700" />
          </div>
          <CardTitle className="text-3xl text-burgundy-900 font-bold">
            Discover Your Perfect Sambal
          </CardTitle>
          <CardDescription className="text-lg text-burgundy-700 mb-4">
            Take our personalized quiz to get tailored product recommendations
          </CardDescription>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-burgundy-600">
              <span>Step {quizData.currentStep} of {totalSteps}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </CardHeader>
      </Card>

      <Card className="shadow-lg border-burgundy-200">
        <CardContent className="p-8">
          {quizData.currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-burgundy-900 mb-2">
                  What's your heat tolerance?
                </h2>
                <p className="text-gray-600">
                  This helps us recommend the perfect spice level for you
                </p>
              </div>

              <div className="space-y-4">
                {HEAT_LEVELS.map((level) => (
                  <div
                    key={level.level}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      quizData.heatTolerance === level.level
                        ? 'border-burgundy-500 bg-burgundy-50'
                        : 'border-gray-200 hover:border-burgundy-300'
                    }`}
                    onClick={() => updateQuizData('heatTolerance', level.level)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{level.emoji}</span>
                        <div>
                          <div className="font-semibold text-burgundy-900">{level.label}</div>
                          <div className="text-sm text-gray-600">{level.description}</div>
                        </div>
                      </div>
                      <div className="flex">
                        {Array.from({ length: level.level }).map((_, i) => (
                          <Flame key={i} className="w-4 h-4 text-orange-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {quizData.currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-burgundy-900 mb-2">
                  How familiar are you with Indonesian/Asian cuisine?
                </h2>
                <p className="text-gray-600">
                  This helps us tailor our recommendations to your experience level
                </p>
              </div>

              <RadioGroup
                value={quizData.cuisineExperience}
                onValueChange={(value) => updateQuizData('cuisineExperience', value)}
                className="space-y-4"
              >
                {CUISINE_EXPERIENCES.map((experience) => (
                  <div key={experience.value} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50">
                    <RadioGroupItem value={experience.value} id={experience.value} />
                    <Label htmlFor={experience.value} className="cursor-pointer flex-1">
                      <div className="font-semibold text-burgundy-900">{experience.label}</div>
                      <div className="text-sm text-gray-600">{experience.description}</div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {quizData.currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-burgundy-900 mb-2">
                  What flavor profiles do you enjoy?
                </h2>
                <p className="text-gray-600">
                  Select all that appeal to you (multiple selections welcome)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {FLAVOR_PREFERENCES.map((flavor) => (
                  <div
                    key={flavor.value}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      quizData.flavorPreferences.includes(flavor.value)
                        ? 'border-burgundy-500 bg-burgundy-50'
                        : 'border-gray-200 hover:border-burgundy-300'
                    }`}
                    onClick={() => toggleArrayValue('flavorPreferences', flavor.value)}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">{flavor.emoji}</div>
                      <div className="font-medium text-burgundy-900">{flavor.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {quizData.currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-burgundy-900 mb-2">
                  How often do you cook at home?
                </h2>
                <p className="text-gray-600">
                  This helps us suggest the right quantities and varieties
                </p>
              </div>

              <RadioGroup
                value={quizData.cookingFrequency}
                onValueChange={(value) => updateQuizData('cookingFrequency', value)}
                className="space-y-4"
              >
                {COOKING_FREQUENCIES.map((frequency) => (
                  <div key={frequency.value} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50">
                    <RadioGroupItem value={frequency.value} id={frequency.value} />
                    <Label htmlFor={frequency.value} className="cursor-pointer flex-1">
                      <div className="font-semibold text-burgundy-900">{frequency.label}</div>
                      <div className="text-sm text-gray-600">{frequency.description}</div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {quizData.currentStep === 5 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-burgundy-900 mb-2">
                  Do you have access to Asian ingredients in the UK?
                </h2>
                <p className="text-gray-600">
                  This helps us recommend recipes and cooking approaches
                </p>
              </div>

              <div className="space-y-4">
                <div
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                    quizData.ukIngredientAccess
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                  onClick={() => updateQuizData('ukIngredientAccess', true)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-green-900">Yes, I have good access</div>
                      <div className="text-sm text-gray-600">Asian supermarkets, online shopping, etc.</div>
                    </div>
                    <span className="text-2xl">✅</span>
                  </div>
                </div>

                <div
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                    !quizData.ukIngredientAccess
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                  onClick={() => updateQuizData('ukIngredientAccess', false)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-orange-900">Limited access</div>
                      <div className="text-sm text-gray-600">Mainly UK supermarkets and online</div>
                    </div>
                    <span className="text-2xl">🔍</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {quizData.currentStep === 6 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-burgundy-900 mb-2">
                  What are your primary cooking goals?
                </h2>
                <p className="text-gray-600">
                  Select all that apply to get personalized advice
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {PRIMARY_GOALS.map((goal) => (
                  <div
                    key={goal.value}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      quizData.primaryGoals.includes(goal.value)
                        ? 'border-burgundy-500 bg-burgundy-50'
                        : 'border-gray-200 hover:border-burgundy-300'
                    }`}
                    onClick={() => toggleArrayValue('primaryGoals', goal.value)}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{goal.emoji}</span>
                      <div className="font-medium text-burgundy-900">{goal.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {quizData.currentStep === 7 && (
            <div className="space-y-6 text-center">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-burgundy-900 mb-2">
                  Ready to discover your perfect sambal?
                </h2>
                <p className="text-gray-600">
                  We'll analyze your preferences and create personalized recommendations
                </p>
              </div>

              <div className="bg-burgundy-50 rounded-lg p-6">
                <h3 className="font-bold text-burgundy-900 mb-4">Your Preferences Summary:</h3>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <div className="text-sm font-medium text-gray-600">Heat Level:</div>
                    <div className="text-burgundy-900">{HEAT_LEVELS.find(h => h.level === quizData.heatTolerance)?.label}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600">Experience:</div>
                    <div className="text-burgundy-900">{CUISINE_EXPERIENCES.find(e => e.value === quizData.cuisineExperience)?.label}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600">Cooking Frequency:</div>
                    <div className="text-burgundy-900">{COOKING_FREQUENCIES.find(f => f.value === quizData.cookingFrequency)?.label}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600">Goals Selected:</div>
                    <div className="text-burgundy-900">{quizData.primaryGoals.length}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              onClick={prevStep}
              disabled={quizData.currentStep === 1}
              variant="outline"
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={nextStep}
              disabled={!canProceed() || isSubmitting}
              className="flex items-center bg-burgundy-600 hover:bg-burgundy-700"
            >
              {isSubmitting ? (
                <>
                  <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : quizData.currentStep === totalSteps ? (
                <>
                  Get My Recommendations
                  <Award className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}