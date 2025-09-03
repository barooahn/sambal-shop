# Spice Island Indonesia - Engineering Specifications

*Project-specific engineering document for Full-Stack Developer Subagent*

## Project Overview

**Spice Island Indonesia** is a premium Indonesian sambal e-commerce platform targeting the UK market. The application focuses on authentic cultural storytelling, educational content, and conversion-optimized user experience while maintaining high performance and security standards.

**Business Objectives:**
- Sell authentic Indonesian sambal products to UK customers
- Educate users about Indonesian culinary traditions  
- Build trust through cultural authenticity and quality assurance
- Optimize for conversions from discovery to purchase
- Support Chef Yossie's brand story and traditional methods

## Technology Stack

### Frontend Framework
- **Next.js 15** with App Router
  - Server Components for performance
  - Client Components for interactivity
  - Built-in image optimization
  - Font optimization with Google Fonts

### Core Technologies
- **React 18** with modern hooks and Suspense
- **TypeScript 5** with strict mode enabled
- **Tailwind CSS 3.4** with custom brand configuration
- **shadcn/ui** component system built on Radix UI primitives

### UI & Styling
- **Tailwind CSS Configuration:**
  - Custom brand colors (burgundy, gold, cream scales)
  - Extended spacing system (18, 22, 26, 30, etc.)
  - Custom font families (Playfair Display, Cormorant Garamond, Dancing Script, Inter)
  - Brand-specific shadow and gradient utilities

- **Component Library:**
  - **shadcn/ui** for consistent, accessible components
  - **Radix UI** primitives for complex interactions
  - **Lucide React** for consistent iconography
  - **Class Variance Authority** for type-safe component variants

### Backend & Database
- **Supabase** (PostgreSQL)
  - Row-level security for data protection
  - Real-time subscriptions for live features
  - Built-in authentication system
  - File storage for images and documents
  - **MCP Integration:** Direct database access via Supabase MCP for development and optimization

### Third-Party Integrations
- **Stripe** for payment processing
- **Resend** for transactional emails
- **Google Analytics** for user behavior tracking
- **Next.js Image API** for automatic image optimization

### Development Tools
- **Package Manager:** Yarn with workspace support
- **Linting:** ESLint with Next.js configuration
- **Testing:** Vitest with React Testing Library
- **Type Checking:** TypeScript strict mode
- **Performance:** Bundle analyzer, Lighthouse CI

### Available MCP Tools
- **Supabase MCP:** Direct database schema inspection, query analysis, and performance monitoring
- **Playwright MCP:** Browser automation and testing capabilities
- **Ref Tools MCP:** Documentation search and web content research

## Project Architecture

### Folder Structure
```
/app                          # Next.js App Router
├── (routes)/                # Route groups for organization
├── api/                     # API route handlers
│   ├── analytics/          # Analytics endpoints
│   ├── contact/            # Contact form submission
│   ├── newsletter/         # Newsletter subscription
│   └── stripe/             # Payment webhooks
├── globals.css             # Global styles and CSS variables
└── layout.tsx              # Root layout component

/components                   # React components
├── ui/                     # shadcn/ui components
│   ├── button.tsx          # Brand-customized button variants
│   ├── card.tsx            # Card components with brand styling
│   └── ...                 # Other UI primitives
├── forms/                  # Form components
│   └── ContactForm.tsx     # Contact form with validation
├── navigation/             # Navigation components  
│   ├── Header.tsx          # Main navigation header
│   └── Footer.tsx          # Site footer
├── home/                   # Homepage sections
│   ├── HeroSection.tsx     # Hero with brand story
│   ├── ProductShowcase.tsx # Featured products
│   └── ...                 # Other homepage sections
├── recipes/                # Recipe-related components
└── seo/                    # SEO and structured data components

/lib                         # Utilities and server actions
├── actions.ts              # Server actions for forms
├── utils.ts                # Utility functions
├── supabase.ts             # Database client
└── stripe-config.ts        # Stripe configuration

/hooks                       # Custom React hooks
└── use-toast.ts            # Toast notification hook

/types                       # TypeScript type definitions
```

### Database Schema (Supabase)

**Core Tables:**
- `profiles` - User profile information
- `products` - Sambal product catalog
- `orders` - Purchase orders and history
- `newsletter_subscriptions` - Email newsletter signups
- `contact_submissions` - Contact form submissions
- `product_interests` - Product interest tracking
- `feedback` - Customer feedback and reviews

**Key Relationships:**
- Users can have multiple orders and interests
- Products have categories, heat levels, and descriptions
- Orders contain line items linked to products
- All tables use UUID primary keys for security

### API Architecture

**Next.js API Routes:**
- `/api/contact` - Contact form submission
- `/api/newsletter` - Newsletter subscription
- `/api/analytics/web-vitals` - Performance tracking
- `/api/stripe/webhook` - Stripe webhook handling

**Server Actions:**
- Form submissions using Next.js server actions
- Database operations with proper error handling
- Email sending through Resend integration
- Input validation with Zod schemas

## Performance Requirements

### Core Web Vitals Targets
- **Largest Contentful Paint (LCP):** < 2.5s
- **First Input Delay (FID):** < 100ms
- **Cumulative Layout Shift (CLS):** < 0.1
- **First Contentful Paint (FCP):** < 1.8s

### Lighthouse Score Targets
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 90+
- **SEO:** 95+

### Bundle Size Limits
- **Main Bundle:** < 200KB gzipped
- **Page Bundles:** < 100KB gzipped each
- **Image Optimization:** WebP/AVIF with responsive sizing
- **Font Loading:** Optimized with display=swap

## Security Configuration

### Security Headers
```javascript
// Security headers implemented in next.config.js
{
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
}
```

### Content Security Policy
- Restricted script sources to trusted CDNs
- Image sources allow HTTPS and data URLs
- Font sources limited to Google Fonts
- No inline scripts except for trusted sources

### Input Validation
- **Zod Schemas:** TypeScript-first validation for all forms
- **Sanitization:** HTML input sanitization where needed
- **Rate Limiting:** API endpoint protection against abuse
- **CSRF Protection:** Built-in Next.js CSRF protection

## Third-Party Service Integration

### Supabase Configuration
```typescript
// Environment variables required
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
```

### Stripe Integration
- **Checkout Sessions:** Server-side session creation
- **Webhook Handling:** Secure webhook verification
- **Payment Processing:** PCI-compliant payment flows
- **Subscription Management:** Recurring payment support

### Email Service (Resend)
- **Transactional Emails:** Contact form notifications
- **Newsletter:** Bulk email sending capability
- **Templates:** Branded email templates
- **Deliverability:** Domain verification and reputation management

### Analytics & Monitoring
- **Google Analytics 4:** User behavior and conversion tracking
- **Vercel Analytics:** Performance and user experience metrics
- **Error Monitoring:** Built-in error tracking and logging
- **Uptime Monitoring:** Health checks and availability tracking

## Development Environment

### Required Environment Variables
```env
# Database
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Payment Processing
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Email Service
RESEND_API_KEY=

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# Application
NEXT_PUBLIC_APP_URL=https://www.spiceislandindonesia.com
```

### Development Scripts
```json
{
  "dev": "next dev",
  "build": "next build", 
  "start": "next start",
  "lint": "next lint",
  "test": "vitest",
  "test:ui": "vitest --ui",
  "optimize-images": "node scripts/optimize-images.js"
}
```

### Code Quality Tools
- **ESLint:** Next.js recommended configuration
- **Prettier:** Code formatting with consistent style
- **TypeScript:** Strict mode with comprehensive type checking
- **Vitest:** Fast unit testing with React Testing Library

## Deployment Configuration

### Vercel Platform
- **Framework Preset:** Next.js with automatic optimization
- **Build Command:** `yarn build`
- **Output Directory:** `.next` (automatic)
- **Node.js Version:** 18.x or latest LTS

### Environment Management
- **Development:** Local environment with `.env.local`
- **Preview:** Staging environment for testing
- **Production:** Live environment with all optimizations

### Build Optimizations
- **Bundle Splitting:** Automatic code splitting by Next.js
- **Image Optimization:** Automatic WebP/AVIF conversion
- **Font Optimization:** Google Fonts optimization
- **Static Generation:** Pre-generated pages for better performance

## Testing Strategy

### Unit Testing
- **Components:** React Testing Library for component behavior
- **Utilities:** Jest/Vitest for utility function testing
- **Hooks:** Custom hook testing with React hooks testing library
- **API Routes:** Endpoint testing with mock data

### Integration Testing
- **Database:** Supabase integration testing
- **Forms:** End-to-end form submission testing
- **Payment:** Stripe integration testing (test mode)
- **Email:** Email delivery testing

### Performance Testing
- **Lighthouse CI:** Automated performance regression testing
- **Bundle Analysis:** Regular bundle size monitoring
- **Core Web Vitals:** Continuous performance monitoring
- **Load Testing:** Peak traffic simulation for critical paths

## Monitoring & Maintenance

### Performance Monitoring
- **Real User Monitoring:** Core Web Vitals tracking
- **Bundle Analysis:** Regular bundle size optimization
- **Database Performance:** Query performance monitoring
- **API Response Times:** Endpoint performance tracking

### Error Monitoring
- **Application Errors:** Comprehensive error logging
- **Database Errors:** Connection and query error tracking
- **Payment Errors:** Stripe error monitoring
- **Email Delivery:** Failed email delivery tracking

### Maintenance Tasks
- **Dependency Updates:** Regular security and feature updates
- **Database Maintenance:** Performance tuning and cleanup
- **Content Updates:** Product catalog and content management
- **Security Audits:** Regular vulnerability assessments

## Business Logic Requirements

### E-commerce Features
- **Product Catalog:** Sambal varieties with heat levels and descriptions
- **Shopping Cart:** Persistent cart across sessions
- **Checkout Process:** Streamlined, mobile-optimized flow
- **Payment Processing:** Secure Stripe integration
- **Order Management:** Order history and status tracking

### Content Management
- **Blog/Recipes:** Educational content about Indonesian cuisine
- **Chef Story:** Authentic narrative about Chef Yossie
- **Product Information:** Detailed sambal descriptions and usage
- **Cultural Context:** Indonesian culinary education

### User Experience
- **Heat Level Guide:** Clear spice intensity communication
- **Sample Packs:** Low-risk trial options for new customers
- **Customer Reviews:** Social proof and authenticity validation
- **Educational Content:** Learning about Indonesian flavors and cooking

This engineering specification provides all technical details needed by the Full-Stack Developer Subagent to build, maintain, and optimize the Spice Island Indonesia e-commerce platform.