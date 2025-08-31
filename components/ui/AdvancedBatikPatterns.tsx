'use client';

import React, { useEffect, useState } from 'react';

interface AdvancedBatikProps {
  variant?: 'hero' | 'section' | 'card' | 'overlay' | 'animated';
  pattern?: 'traditional' | 'modern' | 'floral' | 'geometric' | 'organic';
  intensity?: 'subtle' | 'medium' | 'prominent';
  animate?: boolean;
  className?: string;
}

export default function AdvancedBatikPattern({
  variant = 'section',
  pattern = 'traditional',
  intensity = 'subtle',
  animate = false,
  className = ''
}: AdvancedBatikProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  const baseClasses = 'absolute inset-0 pointer-events-none';
  const patternClass = `batik-${pattern}`;
  const intensityClass = `intensity-${intensity}`;
  const variantClass = `variant-${variant}`;
  const animationClass = animate && isVisible ? 'batik-fade-in' : '';

  return (
    <div 
      className={`${baseClasses} ${patternClass} ${intensityClass} ${variantClass} ${animationClass} ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      {/* Layered batik patterns for depth */}
      <div className="batik-layer-1" />
      <div className="batik-layer-2" />
      <div className="batik-layer-3" />
    </div>
  );
}

// Hero Section Batik Background
export function HeroBatikBackground({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-coconut-50 via-turmeric-50 to-chili-50" />
      
      {/* Multi-layer batik patterns */}
      <AdvancedBatikPattern 
        variant="hero" 
        pattern="traditional" 
        intensity="medium" 
        animate={true}
      />
      
      {/* Floating cultural elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-8 h-8 text-turmeric-400 text-2xl">🌺</div>
        </div>
        <div className="absolute top-3/4 right-1/4 animate-float delay-1000">
          <div className="w-6 h-6 text-chili-400 text-xl">🍃</div>
        </div>
        <div className="absolute top-1/2 right-1/3 animate-float delay-2000">
          <div className="w-10 h-10 text-palm-400 text-3xl">🌿</div>
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent" />
    </div>
  );
}

// Section Divider with Advanced Batik
export function BatikSectionDivider({ 
  title, 
  subtitle,
  className = '' 
}: { 
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`relative py-16 overflow-hidden ${className}`}>
      {/* Background with subtle batik */}
      <div className="absolute inset-0 bg-gradient-to-r from-turmeric-50 via-coconut-50 to-chili-50" />
      <AdvancedBatikPattern 
        variant="section" 
        pattern="geometric" 
        intensity="subtle" 
      />
      
      {/* Ornamental borders */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-turmeric-300 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-chili-300 to-transparent" />
      
      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4">
        {/* Decorative top element */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-turmeric-400" />
          <div className="text-3xl">🌺</div>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-turmeric-400" />
        </div>
        
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-burgundy-900 text-spice-gradient">
            {title}
          </h2>
        )}
        
        {subtitle && (
          <p className="text-lg text-palm-700 max-w-2xl text-traditional">
            {subtitle}
          </p>
        )}
        
        {/* Decorative bottom element */}
        <div className="flex items-center space-x-4 mt-4">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-chili-400" />
          <div className="text-xl">🍃</div>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-chili-400" />
        </div>
      </div>
    </div>
  );
}

// Interactive Batik Card
export function BatikCard({ 
  children, 
  hover = true,
  className = '' 
}: { 
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative group overflow-hidden rounded-2xl ${className}`}>
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coconut-50 to-coconut-100" />
      
      {/* Batik pattern */}
      <AdvancedBatikPattern 
        variant="card" 
        pattern="floral" 
        intensity="subtle"
      />
      
      {/* Hover enhancement */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-turmeric-50/0 to-turmeric-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      
      {/* Border glow */}
      <div className="absolute inset-0 rounded-2xl border border-turmeric-200/50 group-hover:border-turmeric-300/70 transition-colors duration-300" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
}

// Animated Batik Overlay for Special Sections
export function AnimatedBatikOverlay({ 
  children,
  triggerAnimation = true,
  className = '' 
}: { 
  children: React.ReactNode;
  triggerAnimation?: boolean;
  className?: string;
}) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (triggerAnimation) {
      const interval = setInterval(() => {
        setPhase(prev => (prev + 1) % 3);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [triggerAnimation]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Multi-phase animated background */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-turmeric-50 to-chili-50 transition-opacity duration-2000 ${
            phase === 0 ? 'opacity-100' : 'opacity-60'
          }`} 
        />
        <div 
          className={`absolute inset-0 bg-gradient-to-tr from-coconut-50 to-palm-50 transition-opacity duration-2000 ${
            phase === 1 ? 'opacity-100' : 'opacity-60'
          }`} 
        />
        <div 
          className={`absolute inset-0 bg-gradient-to-bl from-chili-50 to-burgundy-50 transition-opacity duration-2000 ${
            phase === 2 ? 'opacity-100' : 'opacity-60'
          }`} 
        />
      </div>
      
      {/* Rotating batik patterns */}
      <div className="absolute inset-0">
        {[0, 1, 2].map(index => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-3000 ${
              phase === index ? 'scale-100 opacity-30' : 'scale-95 opacity-10'
            }`}
          >
            <AdvancedBatikPattern 
              variant="overlay" 
              pattern={index === 0 ? 'traditional' : index === 1 ? 'geometric' : 'organic'} 
              intensity="medium"
            />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}