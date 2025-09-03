# Spice Island Indonesia - Design Specifications

*Project-specific design document for Visual Designer Subagent*

## Brand Overview

### Brand Story & Values
**Spice Island Indonesia** represents authentic Indonesian culinary heritage brought to the UK market by Chef Yossie. The brand embodies traditional craftsmanship, premium quality, and cultural authenticity while making exotic flavors accessible to British palates.

**Core Values:**
- **Authenticity First:** Every design reflects genuine Indonesian culinary heritage
- **Artisanal Quality:** Premium craft that reflects traditional sambal-making methods  
- **Cultural Bridge:** Making Indonesian flavors approachable for UK customers
- **Trust & Heritage:** Building confidence through consistent quality and cultural respect

### Brand Personality
- **Warm & Welcoming:** Approachable despite exotic nature
- **Authentic & Traditional:** Rooted in Indonesian heritage
- **Premium & Artisanal:** High-quality, handcrafted feel
- **Educational & Storytelling:** Sharing cultural knowledge and cooking traditions

## Visual Identity System

### Primary Brand Colors

**Burgundy Scale (Primary Brand Color)**
- `burgundy-50`: #fdf2f3 (Very light backgrounds)
- `burgundy-100`: #fce7e8 (Light backgrounds, hover states)
- `burgundy-200`: #fbd4d6 (Soft accents, borders)
- `burgundy-300`: #f7aab0 (Medium light accents)
- `burgundy-400`: #f27881 (Medium emphasis)
- `burgundy-500`: #ea4c5a (Standard emphasis)
- `burgundy-600`: #d63446 (Strong emphasis)
- `burgundy-700`: #b52d3c (Dark emphasis)
- `burgundy-800`: #962838 (Very dark emphasis)
- **`burgundy-900`: #7f1d2b (PRIMARY - Deep jar color)**
- `burgundy-950`: #450a0e (Darkest shade)

**Gold Scale (Accent & Warmth)**
- `gold-50`: #fffbeb (Very light backgrounds)
- `gold-100`: #fef3c7 (Light backgrounds, highlights)
- `gold-200`: #fde68a (Soft warmth, hover states)
- `gold-300`: #fcd34d (Medium light accents)
- `gold-400`: #fbbf24 (Medium emphasis)
- `gold-500`: #f59e0b (Standard emphasis)
- **`gold-600`: #d97706 (ACCENT - Label gold color)**
- `gold-700`: #b45309 (Dark emphasis)
- `gold-800`: #92400e (Very dark emphasis)
- `gold-900`: #78350f (Darkest readable)
- `gold-950`: #451a03 (Deepest shade)

**Cream Scale (Backgrounds & Warmth)**
- `cream-50`: #fefdfb (Pure backgrounds)
- `cream-100`: #fef9f1 (Light backgrounds)
- `cream-200`: #fdf2e1 (Soft backgrounds)
- `cream-300`: #fae8c8 (Warm backgrounds)
- `cream-400`: #f5d9a4 (Medium backgrounds)
- `cream-500`: #efc776 (Standard cream)
- `cream-600`: #e2b04a (Strong cream)
- `cream-700`: #c8963d (Dark cream)
- `cream-800`: #a37838 (Very dark cream)
- `cream-900`: #856234 (Darkest cream)
- `cream-950`: #4a3119 (Deep brown-cream)

**Neutral Scale (Text & Structure)**
- `neutral-50`: #fafaf9 (Almost white)
- `neutral-100`: #f5f5f4 (Very light gray)
- `neutral-200`: #e7e5e4 (Light borders, dividers)
- `neutral-300`: #d6d3d1 (Medium light gray)
- `neutral-400`: #a8a29e (Medium gray)
- `neutral-500`: #78716c (Body text color)
- `neutral-600`: #57534e (Dark gray)
- `neutral-700`: #44403c (Darker gray)
- `neutral-800`: #292524 (Very dark gray)
- `neutral-900`: #1c1917 (Heading text color)

### Typography System

**Font Families:**
- **Brand Font:** `Playfair Display`, serif (Elegant headers, main branding)
- **Elegant Font:** `Cormorant Garamond`, serif (Sophisticated headings)
- **Script Font:** `Dancing Script`, cursive (Authentic Indonesian touches, signatures)
- **Body Font:** `Inter`, sans-serif (Clean, readable content)

**Typography Hierarchy:**
- **Hero (H1):** Playfair Display, 48px/56px (mobile: 32px/40px)
- **Section (H2):** Playfair Display, 36px/44px (mobile: 28px/36px)
- **Subsection (H3):** Cormorant Garamond, 28px/36px (mobile: 24px/32px)
- **Component (H4):** Inter SemiBold, 20px/28px (mobile: 18px/24px)
- **Body Large:** Inter Regular, 18px/28px (Important descriptions)
- **Body Default:** Inter Regular, 16px/24px (Standard content)
- **Body Small:** Inter Regular, 14px/20px (Secondary info)
- **Caption:** Inter Regular, 12px/16px (Labels, helper text)

### Spacing & Layout System

**Base Unit:** 4px (0.25rem)

**Spacing Scale:**
- `4px` (1): Tight spacing, borders
- `8px` (2): Small component padding
- `12px` (3): Medium component spacing
- `16px` (4): Standard component padding
- `24px` (6): Section spacing
- `32px` (8): Large section spacing
- `48px` (12): Major section dividers
- `64px` (16): Hero spacing
- `96px` (24): Massive spacing

**Custom Extensions:**
- `18`: 4.5rem (72px) - Custom spacing
- `22`: 5.5rem (88px) - Custom spacing
- `26`: 6.5rem (104px) - Custom spacing
- `30`: 7.5rem (120px) - Custom spacing

**Border Radii:**
- Small: `6px` (Buttons, badges)
- Medium: `12px` (Cards, components)  
- Large: `16px` (Major sections)
- XL: `1rem` (16px)
- 2XL: `1.5rem` (24px)
- 3XL: `2rem` (32px)

## Component Design Specifications

### Button Variants

**Primary Button (CTA)**
- Background: `burgundy-900` to `burgundy-800` gradient
- Text: `cream-50`
- Border: `gold-600/30` (1px)
- Hover: Slight scale + shadow increase
- Shadow: `shadow-lg` with burgundy tint

**Secondary Button**
- Background: `cream-100`
- Text: `burgundy-900`
- Border: `burgundy-200` (2px)
- Hover: `burgundy-50` background

**Elegant Button (Gold)**
- Background: `gold-600` to `gold-500` gradient
- Text: `burgundy-900`
- Border: `gold-700/40` (1px)
- Hover: Lighter gradient + shadow

**Heritage Button**
- Background: `cream-100`
- Text: `burgundy-900`
- Border: `burgundy-200` (2px)
- Hover: `burgundy-50` + `burgundy-300` border

### Card Components

**Product Card**
- Background: `cream-50`
- Border: `cream-200` (1px)
- Border Radius: `12px`
- Shadow: Subtle with warm tint
- Hover: Slight lift + shadow increase

**Testimonial Card**
- Background: `neutral-50`
- Border: `gold-200` accent (left border 4px)
- Padding: `24px`
- Typography: Italic for quotes

**Content Card**
- Background: White
- Border: `neutral-200` (1px)
- Shadow: Minimal, clean
- Hover: Subtle shadow increase

### Heat Level Indicators

**Visual System:**
- Mild: `emerald-500` (🌶️ × 1)
- Medium: `amber-500` (🌶️ × 2-3)  
- Hot: `red-500` (🌶️ × 4)
- Fire: `red-800` (🌶️ × 5)

**Design Elements:**
- Chili pepper icons in corresponding colors
- Color-coded backgrounds with subtle gradients
- Clear text descriptions alongside visual indicators

## Cultural Design Elements

### Indonesian Heritage Integration

**Traditional Patterns:**
- Subtle batik-inspired geometric patterns for backgrounds
- Use sparingly as texture, not dominant design
- Earth tone interpretations of traditional motifs

**Cultural Photography Style:**
- Warm, natural lighting (Indonesian sunshine feel)
- Rich, saturated colors showcasing spice vibrancy  
- Traditional cooking vessels and ingredients as props
- Chef Yossie's hands crafting sambal (authenticity)
- Mortar & pestle, traditional tools

**Iconography:**
- Chili peppers for heat levels
- Mortar & pestle for traditional methods
- Indonesian map outlines for origin stories
- UK delivery icons for local service assurance

### Cultural Sensitivity Guidelines

**Respectful Representation:**
- Use Indonesian design elements authentically, not decoratively
- Understand cultural significance before implementing patterns
- Balance traditional elements with modern UK e-commerce expectations
- Include Indonesian terms with English explanations

**Educational Approach:**
- Design supports learning about Indonesian cooking traditions
- Visual hierarchy helps explain unfamiliar concepts
- Progressive disclosure for complex cultural information

## Target Audience & Market Context

### Primary Audience: UK Food Enthusiasts
- **Demographics:** Adults 25-55, middle to high income
- **Interests:** International cuisine, cooking, food quality
- **Behavior:** Online shopping, social media recipe sharing
- **Needs:** Authentic flavors, cooking guidance, quality assurance

### Secondary Audience: Indonesian Diaspora
- **Demographics:** Indonesian expats and descendants in UK
- **Interests:** Authentic homeland flavors, cultural connection
- **Behavior:** Word-of-mouth recommendations, community sharing
- **Needs:** Authentic taste, cultural validation, nostalgia

### Market Positioning
- **Premium Position:** Higher quality than mass market alternatives
- **Authenticity Advantage:** Real Indonesian heritage vs. imitation
- **Educational Value:** Teaching customers about Indonesian cuisine
- **UK Accessibility:** Making exotic flavors approachable

## E-commerce Specific Requirements

### Product Presentation
- **High-Quality Images:** Professional food photography with consistent styling
- **Heat Level Clarity:** Immediate visual communication of spice intensity
- **Ingredient Transparency:** Clear listing with Indonesian and English names
- **Usage Suggestions:** Visual guides for how to use each sambal

### Trust Building Elements
- **Chef Story:** Prominent positioning of Chef Yossie's background
- **Traditional Methods:** Visual emphasis on authentic preparation
- **UK Relevance:** Clear UK delivery, returns policy, customer service
- **Quality Indicators:** Certifications, ingredients sourcing information

### Conversion Optimization
- **Sample Pack Prominence:** Low-risk trial option highly visible
- **Clear Hierarchy:** Easy navigation from discovery to purchase
- **Social Proof:** Customer reviews, testimonials, social media
- **Urgency Elements:** Limited availability, seasonal products

## Technical Integration Notes

### Performance Requirements
- **Image Optimization:** All images must be WebP optimized
- **Font Loading:** Ensure web fonts don't block rendering
- **Color Accessibility:** Maintain 4.5:1 contrast ratio minimum
- **Mobile Performance:** Prioritize mobile loading speed

### Implementation Notes
- Colors integrate with existing Tailwind CSS configuration
- Typography system works with Google Fonts integration
- Spacing system aligns with Tailwind's base-4 system
- Border radii complement existing component library

This design specification document provides all project-specific details needed by the Visual Designer Subagent to create authentic, conversion-optimized designs for Spice Island Indonesia while maintaining cultural authenticity and UK market appeal.