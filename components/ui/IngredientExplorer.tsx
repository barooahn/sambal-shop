'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Info, Leaf, Star, MapPin, Clock, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SpiceHeatIndicator } from '@/components/ui/SpiceHeatIndicator';
import { BatikCard } from '@/components/ui/AdvancedBatikPatterns';

interface Ingredient {
  id: string;
  name: string;
  indonesian: string;
  category: 'chili' | 'spice' | 'herb' | 'aromatics' | 'base';
  description: string;
  origin: string;
  heatLevel?: 1 | 2 | 3 | 4 | 5;
  flavor: string[];
  uses: string[];
  culturalNote: string;
  image: string;
  color: string;
  facts: {
    label: string;
    value: string;
  }[];
}

const ingredients: Ingredient[] = [
  {
    id: 'bird-eye-chili',
    name: 'Bird\'s Eye Chili',
    indonesian: 'Cabe Rawit',
    category: 'chili',
    description: 'The fiery heart of Indonesian cuisine - small but mighty chilies that pack incredible heat and fruity flavor.',
    origin: 'Southeast Asia',
    heatLevel: 5,
    flavor: ['Fiery hot', 'Fruity', 'Sharp'],
    uses: ['Sambal base', 'Stir-fries', 'Soup seasoning'],
    culturalNote: 'Essential in traditional Indonesian cooking, these tiny chilies are often grown in family gardens and passed down through generations.',
    image: '🌶️',
    color: 'chili',
    facts: [
      { label: 'Scoville Rating', value: '50,000-100,000 SHU' },
      { label: 'Size', value: '1-2cm long' },
      { label: 'Harvest Season', value: 'Year-round in tropics' }
    ]
  },
  {
    id: 'galangal',
    name: 'Galangal',
    indonesian: 'Lengkuas',
    category: 'aromatics',
    description: 'The aromatic cousin of ginger with a sharp, citrusy flavor that forms the foundation of Indonesian spice pastes.',
    origin: 'Indonesia & Malaysia',
    flavor: ['Citrusy', 'Sharp', 'Pine-like'],
    uses: ['Spice paste base', 'Curry', 'Traditional medicine'],
    culturalNote: 'Considered sacred in some Indonesian ceremonies, galangal is believed to bring protection and good fortune.',
    image: '🫚',
    color: 'turmeric',
    facts: [
      { label: 'Family', value: 'Zingiberaceae (Ginger)' },
      { label: 'Traditional Use', value: 'Medicine & cooking' },
      { label: 'Preparation', value: 'Pounded fresh in mortar' }
    ]
  },
  {
    id: 'candlenuts',
    name: 'Candlenuts',
    indonesian: 'Kemiri',
    category: 'base',
    description: 'Creamy, oil-rich nuts that provide body and richness to Indonesian sauces and curry pastes.',
    origin: 'Moluccas (Spice Islands)',
    flavor: ['Nutty', 'Creamy', 'Mild'],
    uses: ['Thickening agent', 'Curry base', 'Traditional oil source'],
    culturalNote: 'Historically used as candles by early Indonesian communities, these nuts were also a valuable trade commodity.',
    image: '🥥',
    color: 'coconut',
    facts: [
      { label: 'Oil Content', value: '60-65%' },
      { label: 'Alternative Names', value: 'Kukui nuts, Indian walnut' },
      { label: 'Preparation', value: 'Always cooked - toxic raw' }
    ]
  },
  {
    id: 'lemongrass',
    name: 'Lemongrass',
    indonesian: 'Serai',
    category: 'herb',
    description: 'Fragrant grass with a bright citrus aroma that adds freshness and complexity to Indonesian dishes.',
    origin: 'Southeast Asia',
    flavor: ['Citrusy', 'Fresh', 'Lemony'],
    uses: ['Curry paste', 'Soup flavoring', 'Tea infusion'],
    culturalNote: 'Often planted around Indonesian homes as a natural mosquito repellent and for easy kitchen access.',
    image: '🌾',
    color: 'palm',
    facts: [
      { label: 'Scientific Name', value: 'Cymbopogon citratus' },
      { label: 'Used Parts', value: 'Lower stalks & leaves' },
      { label: 'Storage', value: 'Freezes well when chopped' }
    ]
  },
  {
    id: 'shallots',
    name: 'Shallots',
    indonesian: 'Bawang Merah',
    category: 'aromatics',
    description: 'Small, sweet onions that form the aromatic foundation of countless Indonesian dishes with their deep, complex flavor.',
    origin: 'Central Asia',
    flavor: ['Sweet', 'Mild', 'Complex'],
    uses: ['Spice paste base', 'Fried garnish', 'Curry foundation'],
    culturalNote: 'Red shallots are preferred in Indonesian cooking and are often grown in volcanic soil for the best flavor.',
    image: '🧅',
    color: 'burgundy',
    facts: [
      { label: 'Variety', value: 'Asian red shallots preferred' },
      { label: 'Preparation', value: 'Sliced thin and fried crispy' },
      { label: 'Storage', value: 'Cool, dry place for months' }
    ]
  },
  {
    id: 'turmeric',
    name: 'Fresh Turmeric',
    indonesian: 'Kunyit',
    category: 'spice',
    description: 'Golden root that provides earthy warmth and vibrant color, essential for authentic Indonesian flavor profiles.',
    origin: 'Southeast Asia',
    flavor: ['Earthy', 'Warm', 'Slightly bitter'],
    uses: ['Color and flavor', 'Curry base', 'Traditional medicine'],
    culturalNote: 'Sacred in Hindu-Buddhist ceremonies in Indonesia, turmeric represents purification and prosperity.',
    image: '🟡',
    color: 'turmeric',
    facts: [
      { label: 'Active Compound', value: 'Curcumin' },
      { label: 'Staining', value: 'Will stain hands & surfaces' },
      { label: 'Fresh vs Dried', value: 'Fresh preferred for paste' }
    ]
  }
];

const categories = {
  chili: { label: 'Chilies', icon: '🌶️', color: 'chili' },
  spice: { label: 'Spices', icon: '⭐', color: 'turmeric' },
  herb: { label: 'Herbs', icon: '🌿', color: 'palm' },
  aromatics: { label: 'Aromatics', icon: '🧄', color: 'burgundy' },
  base: { label: 'Base Ingredients', icon: '🥥', color: 'coconut' }
};

export default function IngredientExplorer({ className = '' }: { className?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIngredient, setCurrentIngredient] = useState<number>(0);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const filteredIngredients = selectedCategory === 'all' 
    ? ingredients 
    : ingredients.filter(ing => ing.category === selectedCategory);

  const nextIngredient = () => {
    setCurrentIngredient((prev) => (prev + 1) % filteredIngredients.length);
  };

  const prevIngredient = () => {
    setCurrentIngredient((prev) => (prev - 1 + filteredIngredients.length) % filteredIngredients.length);
  };

  useEffect(() => {
    setCurrentIngredient(0);
  }, [selectedCategory]);

  const ingredient = filteredIngredients[currentIngredient];

  if (!ingredient) return null;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-spice-gradient">
          🌶️ Explore Indonesian Ingredients
        </h2>
        <p className="text-lg text-palm-700 max-w-2xl mx-auto text-traditional">
          Discover the authentic spices and ingredients that make Indonesian sambal truly special
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          variant={selectedCategory === 'all' ? 'spicy' : 'outline'}
          onClick={() => setSelectedCategory('all')}
          className="min-h-[44px]"
        >
          🌟 All Ingredients
        </Button>
        {Object.entries(categories).map(([key, cat]) => (
          <Button
            key={key}
            variant={selectedCategory === key ? 'spicy' : 'outline'}
            onClick={() => setSelectedCategory(key)}
            className="min-h-[44px]"
          >
            {cat.icon} {cat.label}
          </Button>
        ))}
      </div>

      {/* Main Ingredient Display */}
      <div className="max-w-4xl mx-auto">
        <BatikCard className="p-0 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            {/* Ingredient Image & Basic Info */}
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-8xl mb-4">{ingredient.image}</div>
                <h3 className="text-2xl font-bold text-burgundy-900 mb-1">
                  {ingredient.name}
                </h3>
                <p className="text-lg font-medium text-turmeric-700 mb-2">
                  {ingredient.indonesian}
                </p>
                <Badge 
                  className={`bg-${ingredient.color}-100 text-${ingredient.color}-700 border-${ingredient.color}-200`}
                >
                  <MapPin className="w-3 h-3 mr-1" />
                  {ingredient.origin}
                </Badge>
              </div>

              {/* Heat Level (if applicable) */}
              {ingredient.heatLevel && (
                <div className="bg-coconut-50 p-4 rounded-xl border border-coconut-200">
                  <h4 className="font-bold text-burgundy-900 text-sm mb-2">Heat Level</h4>
                  <SpiceHeatIndicator 
                    heatLevel={ingredient.heatLevel}
                    variant="detailed"
                    size="sm"
                  />
                </div>
              )}

              {/* Quick Facts */}
              <div className="space-y-2">
                {ingredient.facts.map((fact, index) => (
                  <div key={index} className="flex justify-between items-center p-2 rounded-lg bg-gradient-to-r from-coconut-50 to-transparent">
                    <span className="text-sm font-medium text-palm-700">{fact.label}:</span>
                    <span className="text-sm text-burgundy-900 font-bold">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Information */}
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-burgundy-900 mb-2">Description</h4>
                <p className="text-sm text-palm-700 leading-relaxed">
                  {ingredient.description}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-burgundy-900 mb-2">Flavor Profile</h4>
                <div className="flex flex-wrap gap-2">
                  {ingredient.flavor.map((flavor, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {flavor}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-burgundy-900 mb-2">Common Uses</h4>
                <div className="space-y-2">
                  {ingredient.uses.map((use, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star className="w-3 h-3 text-turmeric-600" />
                      <span className="text-sm text-palm-700">{use}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-turmeric-50 to-chili-50 border border-turmeric-200">
                <h4 className="font-bold text-burgundy-900 mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Cultural Note
                </h4>
                <p className="text-sm text-palm-700 leading-relaxed italic">
                  {ingredient.culturalNote}
                </p>
              </div>
            </div>
          </div>
        </BatikCard>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="outline"
            onClick={prevIngredient}
            disabled={filteredIngredients.length <= 1}
            className="min-h-[44px]"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <div className="text-center">
            <p className="text-sm text-palm-700">
              {currentIngredient + 1} of {filteredIngredients.length} ingredients
            </p>
            <div className="flex justify-center gap-1 mt-2">
              {filteredIngredients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIngredient(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIngredient 
                      ? 'bg-chili-600' 
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            onClick={nextIngredient}
            disabled={filteredIngredients.length <= 1}
            className="min-h-[44px]"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Educational Footer */}
      <div className="text-center p-6 bg-gradient-to-r from-coconut-50 via-turmeric-50 to-coconut-50 rounded-xl border border-coconut-200">
        <p className="text-sm text-palm-700 mb-2">
          💡 <strong>Did you know?</strong> Each ingredient is carefully selected and prepared using traditional Indonesian methods passed down through generations.
        </p>
        <p className="text-xs text-palm-600">
          Our sambal recipes honor these time-tested techniques while adapting to modern kitchens.
        </p>
      </div>
    </div>
  );
}

// Compact version for sidebars or smaller spaces
export function IngredientQuickExplorer({ className = '' }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIngredient = () => {
    setCurrentIndex((prev) => (prev + 1) % ingredients.length);
  };

  const ingredient = ingredients[currentIndex];

  useEffect(() => {
    const interval = setInterval(nextIngredient, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`bg-gradient-to-br from-coconut-50 to-turmeric-50 p-4 rounded-xl border border-coconut-200 ${className}`}>
      <div className="text-center">
        <h4 className="font-bold text-burgundy-900 text-sm mb-3">
          🌶️ Ingredient Spotlight
        </h4>
        <div className="text-4xl mb-2">{ingredient.image}</div>
        <h5 className="font-bold text-burgundy-900 text-sm">{ingredient.name}</h5>
        <p className="text-xs text-turmeric-700 font-medium mb-2">{ingredient.indonesian}</p>
        <p className="text-xs text-palm-700 leading-tight mb-3">
          {ingredient.description.substring(0, 80)}...
        </p>
        
        <div className="flex justify-center gap-1 mb-2">
          {ingredients.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-chili-600' 
                  : 'bg-neutral-300'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={nextIngredient}
          className="text-xs"
        >
          Learn More 🌿
        </Button>
      </div>
    </div>
  );
}