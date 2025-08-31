'use client';

import React, { useState, useEffect } from 'react';
import { Quote, MapPin, Calendar, Users, Sparkles, Heart, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BatikCard, AnimatedBatikOverlay } from '@/components/ui/AdvancedBatikPatterns';

interface Story {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  culturalContext: string;
  location: string;
  timeframe: string;
  community: string;
  quote: {
    text: string;
    author: string;
    role: string;
  };
  emoji: string;
  color: 'turmeric' | 'chili' | 'palm' | 'coconut' | 'burgundy';
}

const stories: Story[] = [
  {
    id: 'origins',
    title: 'The Birth of Sambal',
    subtitle: 'Ancient Indonesian Spice Wisdom',
    content: 'In the volcanic islands of Indonesia, where fertile soil meets tropical sun, the art of sambal was born from necessity and evolved into culinary poetry. Ancient Indonesian cooks discovered that crushing chilies with stone mortars not only preserved them but unlocked complex flavors that danced on the tongue.',
    culturalContext: 'Sambal represents more than seasoning in Indonesian culture - it embodies the balance of life itself. The heat represents passion and strength, while the accompanying ingredients provide harmony and depth, reflecting the Indonesian philosophy of achieving balance in all things.',
    location: 'Java & Sumatra, Indonesia',
    timeframe: '8th-13th Century',
    community: 'Javanese & Sumatran Villages',
    quote: {
      text: 'A meal without sambal is like a day without sunshine - incomplete and lacking the fire of life.',
      author: 'Ibu Sari',
      role: 'Traditional Village Cook, Central Java'
    },
    emoji: '🏛️',
    color: 'turmeric'
  },
  {
    id: 'spice-trade',
    title: 'Spice Trade Legacy',
    subtitle: 'When Indonesia Ruled the Spice World',
    content: 'For centuries, Indonesian spices were literally worth their weight in gold. European ships braved treacherous seas to reach the Spice Islands, not just for pepper and nutmeg, but for the secret spice blends that Indonesian cooks had perfected over generations.',
    culturalContext: 'The spice trade made Indonesia the center of global commerce, but it also spread Indonesian culinary traditions worldwide. Each trading ship carried not just spices, but the knowledge and techniques that make Indonesian cuisine so distinctive.',
    location: 'Maluku (Spice Islands)',
    timeframe: '15th-17th Century',
    community: 'Spice Merchants & Traders',
    quote: {
      text: 'We did not just trade spices - we shared the soul of our cuisine, one recipe at a time.',
      author: 'Hasan Al-Maluki',
      role: 'Historical Spice Trader, Banda Islands'
    },
    emoji: '⛵',
    color: 'burgundy'
  },
  {
    id: 'family-traditions',
    title: 'Grandmother\'s Kitchen',
    subtitle: 'Recipes Passed Through Generations',
    content: 'In Indonesian families, sambal recipes are sacred inheritances. Each family guards their unique blend, passed down through whispered instructions and patient observation. Grandmothers teach not just ingredients, but the rhythm of the mortar and pestle, the art of balancing flavors by instinct.',
    culturalContext: 'Indonesian cooking is deeply matriarchal - the kitchen is the grandmother\'s domain where cultural identity is preserved and transmitted. Young women learn not just to cook, but to carry forward their family\'s culinary legacy.',
    location: 'Indonesian Family Homes',
    timeframe: 'Ongoing Tradition',
    community: 'Indonesian Families Worldwide',
    quote: {
      text: 'My grandmother never wrote down her recipe. She said it lived in her hands and her heart, not on paper.',
      author: 'Dewi Kusuma',
      role: 'Third-Generation Sambal Maker, Yogyakarta'
    },
    emoji: '👵',
    color: 'palm'
  },
  {
    id: 'modern-diaspora',
    title: 'Global Indonesian Hearts',
    subtitle: 'Keeping Culture Alive Abroad',
    content: 'Today, Indonesian communities worldwide maintain their cultural identity through food. In London, New York, and Sydney, Indonesian families recreate the tastes of home, introducing new generations and curious neighbors to the complex world of sambal.',
    culturalContext: 'For Indonesian diaspora communities, making traditional sambal is an act of cultural preservation and identity. It connects them to their homeland and passes authentic flavors to children who may never have visited Indonesia.',
    location: 'Indonesian Communities Worldwide',
    timeframe: '20th Century - Present',
    community: 'Indonesian Diaspora',
    quote: {
      text: 'When I make sambal in my London kitchen, I am not just cooking - I am keeping my culture alive for my children.',
      author: 'Bapak Wijaya',
      role: 'Indonesian Community Leader, London'
    },
    emoji: '🌍',
    color: 'chili'
  },
  {
    id: 'ritual-ceremony',
    title: 'Sacred Celebrations',
    subtitle: 'Sambal in Indonesian Ceremonies',
    content: 'In Indonesian Hindu-Buddhist traditions, certain sambals are prepared for religious ceremonies and life celebrations. The act of grinding spices becomes a meditative practice, and sharing sambal symbolizes community bonds and spiritual nourishment.',
    culturalContext: 'Food plays a central role in Indonesian spiritual life. Sambal is not merely sustenance but an offering that connects the physical and spiritual worlds, representing the harmony between earth\'s gifts and human craft.',
    location: 'Balinese & Javanese Temples',
    timeframe: 'Ancient Tradition - Present',
    community: 'Religious Communities',
    quote: {
      text: 'Each ingredient we grind carries prayers and intentions - sambal becomes our offering of gratitude to the divine.',
      author: 'Ida Bagus Putu',
      role: 'Temple Priest, Bali'
    },
    emoji: '🙏',
    color: 'coconut'
  }
];

export default function CulturalStoryElements({ className = '' }: { className?: string }) {
  const [selectedStory, setSelectedStory] = useState<number>(0);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [expandedDetails, setExpandedDetails] = useState(false);

  const currentStory = stories[selectedStory];

  useEffect(() => {
    if (!autoAdvance) return;
    
    const interval = setInterval(() => {
      setSelectedStory(prev => (prev + 1) % stories.length);
      setExpandedDetails(false);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [autoAdvance]);

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-spice-gradient">
          📚 Stories of Indonesian Cuisine
        </h2>
        <p className="text-lg text-palm-700 max-w-2xl mx-auto text-traditional">
          Discover the rich cultural heritage and timeless traditions behind every jar of sambal
        </p>
      </div>

      {/* Story Navigation */}
      <div className="flex flex-wrap justify-center gap-2">
        {stories.map((story, index) => (
          <Button
            key={story.id}
            variant={selectedStory === index ? 'spicy' : 'outline'}
            onClick={() => {
              setSelectedStory(index);
              setAutoAdvance(false);
              setExpandedDetails(false);
            }}
            className="min-h-[44px] text-sm"
          >
            {story.emoji} {story.title}
          </Button>
        ))}
      </div>

      {/* Main Story Display */}
      <div className="max-w-4xl mx-auto">
        <AnimatedBatikOverlay triggerAnimation={true}>
          <BatikCard className="p-8">
            <div className="space-y-6">
              {/* Story Header */}
              <div className="text-center space-y-3">
                <div className="text-6xl mb-4">{currentStory.emoji}</div>
                <h3 className="text-2xl font-bold text-burgundy-900">
                  {currentStory.title}
                </h3>
                <p className="text-lg text-turmeric-700 font-medium">
                  {currentStory.subtitle}
                </p>
                
                {/* Story Context */}
                <div className="flex flex-wrap justify-center gap-4 text-sm text-palm-700">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {currentStory.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {currentStory.timeframe}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {currentStory.community}
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="prose prose-sm max-w-none">
                <p className="text-palm-700 leading-relaxed text-center text-base">
                  {currentStory.content}
                </p>
              </div>

              {/* Cultural Quote */}
              <div className={`p-6 rounded-xl border-2 border-${currentStory.color}-200 bg-${currentStory.color}-50`}>
                <div className="text-center space-y-3">
                  <Quote className={`w-8 h-8 text-${currentStory.color}-600 mx-auto`} />
                  <blockquote className="text-lg font-medium text-burgundy-900 italic">
                    "{currentStory.quote.text}"
                  </blockquote>
                  <div className="text-sm text-palm-700">
                    <div className="font-bold">{currentStory.quote.author}</div>
                    <div>{currentStory.quote.role}</div>
                  </div>
                </div>
              </div>

              {/* Cultural Context (Expandable) */}
              <div className="border border-coconut-200 rounded-xl">
                <Button
                  variant="ghost"
                  onClick={() => setExpandedDetails(!expandedDetails)}
                  className="w-full p-4 justify-between text-left min-h-[44px]"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-turmeric-600" />
                    <span className="font-semibold text-burgundy-900">Cultural Context</span>
                  </div>
                  {expandedDetails ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Button>
                
                {expandedDetails && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-palm-700 leading-relaxed">
                      {currentStory.culturalContext}
                    </p>
                  </div>
                )}
              </div>

              {/* Story Navigation */}
              <div className="flex justify-between items-center pt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedStory(prev => (prev - 1 + stories.length) % stories.length);
                    setAutoAdvance(false);
                    setExpandedDetails(false);
                  }}
                  className="min-h-[44px]"
                >
                  ← Previous Story
                </Button>

                <div className="flex flex-col items-center">
                  <div className="flex gap-1 mb-2">
                    {stories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedStory(index);
                          setAutoAdvance(false);
                          setExpandedDetails(false);
                        }}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === selectedStory 
                            ? 'bg-chili-600' 
                            : 'bg-neutral-300 hover:bg-neutral-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setAutoAdvance(!autoAdvance)}
                    className="text-xs"
                  >
                    {autoAdvance ? (
                      <>
                        <Sparkles className="w-3 h-3 mr-1" />
                        Auto-playing
                      </>
                    ) : (
                      'Click to auto-advance'
                    )}
                  </Button>
                </div>

                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedStory(prev => (prev + 1) % stories.length);
                    setAutoAdvance(false);
                    setExpandedDetails(false);
                  }}
                  className="min-h-[44px]"
                >
                  Next Story →
                </Button>
              </div>
            </div>
          </BatikCard>
        </AnimatedBatikOverlay>
      </div>

      {/* Cultural Appreciation Footer */}
      <div className="text-center p-6 bg-gradient-to-r from-turmeric-50 via-coconut-50 to-chili-50 rounded-xl border border-turmeric-200">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Heart className="w-5 h-5 text-chili-600" />
          <p className="font-semibold text-burgundy-900">
            Honoring Indonesian Culinary Heritage
          </p>
          <Heart className="w-5 h-5 text-chili-600" />
        </div>
        <p className="text-sm text-palm-700">
          Every jar of our sambal carries these stories forward, connecting you to centuries of Indonesian culinary artistry and cultural wisdom.
        </p>
      </div>
    </div>
  );
}

// Compact Story Widget for Sidebars
export function CulturalStoryWidget({ className = '' }: { className?: string }) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex(prev => (prev + 1) % stories.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const story = stories[currentStoryIndex];

  return (
    <div className={`bg-gradient-to-br from-coconut-50 to-turmeric-50 p-4 rounded-xl border border-coconut-200 ${className}`}>
      <div className="text-center space-y-3">
        <h4 className="font-bold text-burgundy-900 text-sm flex items-center justify-center gap-2">
          <BookOpen className="w-4 h-4" />
          Cultural Heritage
        </h4>
        
        <div className="text-3xl">{story.emoji}</div>
        
        <div>
          <h5 className="font-bold text-burgundy-900 text-sm">{story.title}</h5>
          <p className="text-xs text-turmeric-700 font-medium mb-2">{story.subtitle}</p>
        </div>
        
        <p className="text-xs text-palm-700 leading-tight">
          {story.content.substring(0, 120)}...
        </p>
        
        <div className="flex justify-center gap-1 mt-2">
          {stories.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === currentStoryIndex 
                  ? 'bg-chili-600' 
                  : 'bg-neutral-300'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          className="text-xs w-full"
          onClick={() => {
            // This could trigger a modal or navigation to full stories
            console.log('Navigate to full cultural stories');
          }}
        >
          Read Full Stories 📚
        </Button>
      </div>
    </div>
  );
}