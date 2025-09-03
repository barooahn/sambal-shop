# Spice Island Indonesia - Analytics & Business Intelligence Specifications

*Project-specific analytics document for Data Analytics & Business Intelligence Subagent*

## Business Overview & Context

**Spice Island Indonesia** is a premium Indonesian sambal e-commerce business targeting UK customers with authentic, artisanal products. The business model focuses on educating UK consumers about Indonesian cuisine while converting them from curious browsers to loyal customers.

**Business Model:**
- Direct-to-consumer e-commerce sales
- Premium pricing strategy (artisanal positioning)
- Educational content marketing approach
- Sample pack strategy to reduce purchase hesitation
- Subscription/repeat purchase potential

**Key Business Challenges:**
- Converting UK customers unfamiliar with Indonesian products
- Educating market about authentic sambal vs. mass-market alternatives
- Building trust with premium pricing for unknown brand
- Seasonal demand patterns and inventory management
- Competing with established Asian sauce brands

## Primary Business Objectives & KPIs

### Revenue & Growth Metrics

**Primary Revenue Goals:**
- **Monthly Recurring Revenue (MRR):** Target £10K by month 12, £25K by month 24
- **Average Order Value (AOV):** Target £25-35 (current: £22)
- **Customer Lifetime Value (CLV):** Target £75-100 per customer
- **Revenue Growth Rate:** Target 15-20% month-over-month growth

**Key Performance Indicators:**
- **Conversion Rate:** Overall site (target: 3-5%), product pages (target: 8-12%)
- **Customer Acquisition Cost (CAC):** Target <£20 per customer across all channels
- **Return on Ad Spend (ROAS):** Target 4:1 minimum for paid advertising
- **Repeat Purchase Rate:** Target 35-50% within 6 months of first purchase

### Customer Acquisition & Retention

**Acquisition Metrics:**
- **New Customer Acquisition:** Target 200-300 new customers per month by month 12
- **Organic Traffic Growth:** 25% month-over-month increase from SEO efforts
- **Email List Growth:** Target 5,000 subscribers by month 12
- **Sample Pack Conversion:** Target 40-60% conversion from sample pack to full purchase

**Retention Metrics:**
- **Customer Retention Rate:** Target 60% retention at 6 months, 40% at 12 months
- **Repeat Purchase Timeline:** Target average second purchase within 90 days
- **Churn Rate:** Target <5% monthly churn rate for repeat customers
- **Net Promoter Score (NPS):** Target 70+ from post-purchase surveys

### Channel Performance Goals

**Organic Search (SEO):**
- Target 40-50% of total traffic from organic search within 12 months
- Top 3 rankings for "Indonesian sambal UK," "authentic sambal," and primary keywords
- 500+ organic sessions per week by month 6

**Social Media (Facebook/Instagram):**
- Target 20-25% of total traffic from social media
- 10K Instagram followers and 5K Facebook followers by month 12
- 5% conversion rate from social media traffic

**Email Marketing:**
- Target 25-30% of total revenue attributed to email marketing
- 25% open rate and 5% click rate for promotional emails
- 35% open rate for educational newsletter content

**Direct & Referral:**
- Target 15-20% direct traffic (brand awareness indicator)
- 10% referral traffic from food blogs, reviews, and word-of-mouth

## Customer Journey & Funnel Analysis

### Customer Personas & Segments

**Primary Persona: "Curious Foodie" (60% of customers)**
- Demographics: Ages 28-45, middle to high income, urban UK
- Behavior: Enjoys trying international cuisine, shops online regularly
- Journey: Discovers through search/social → educates → tries sample pack → converts
- Key Metrics: Higher AOV, lower conversion time, higher repeat rate

**Secondary Persona: "Indonesian Expat" (25% of customers)**  
- Demographics: Indonesian heritage living in UK, all ages
- Behavior: Seeks authentic flavors, price less sensitive
- Journey: Direct search for specific products → quick conversion
- Key Metrics: Highest AOV, fastest conversion, highest loyalty

**Tertiary Persona: "Spice Enthusiast" (15% of customers)**
- Demographics: Ages 25-55, enjoys very spicy food
- Behavior: Seeks heat challenges, active in food communities
- Journey: Discovery through communities/reviews → direct purchase
- Key Metrics: Focused on highest heat products, social sharing

### E-commerce Funnel Stages

**Awareness Stage:**
- **Traffic Sources:** Organic search (50%), social media (30%), referral (20%)
- **Key Pages:** Blog articles, "What is Sambal" content, social media posts
- **Success Metrics:** Page views, time on site, social engagement
- **Conversion Goal:** Email signup, social follow

**Interest/Education Stage:**
- **Key Pages:** Product pages, comparison guides, heat level explanations
- **Success Metrics:** Pages per session, return visitor rate, email engagement
- **Conversion Goal:** Sample pack purchase, wishlist creation

**Consideration Stage:**
- **Key Pages:** Sample pack, product comparisons, customer reviews
- **Success Metrics:** Cart adds, sample pack conversion rate, review engagement
- **Conversion Goal:** First product purchase

**Purchase Stage:**
- **Key Pages:** Checkout flow, payment processing
- **Success Metrics:** Cart abandonment rate, checkout completion rate, payment success
- **Conversion Goal:** Completed purchase

**Retention/Loyalty Stage:**
- **Key Actions:** Repeat purchases, referrals, reviews, social sharing
- **Success Metrics:** Customer lifetime value, repeat purchase rate, referral rate
- **Conversion Goal:** Loyal customer, brand advocate

## Analytics Infrastructure & Implementation

### Current Analytics Stack

**Google Analytics 4 (GA4):**
- **Configuration:** Enhanced e-commerce tracking enabled
- **Custom Events:** Sample pack purchases, heat level selections, recipe views
- **Conversion Goals:** Newsletter signup, sample pack purchase, full purchase, repeat purchase
- **Audience Segments:** First-time visitors, repeat customers, high-value customers

**E-commerce Tracking:**
- **Purchase Events:** Revenue, products, quantities, categories
- **Product Performance:** Views, adds to cart, purchases by individual sambal variety
- **Shopping Behavior:** Cart abandonment, checkout step analysis
- **Revenue Attribution:** Channel attribution for customer acquisition and revenue

**Additional Tools:**
- **Facebook Pixel:** Social media attribution and retargeting
- **Google Search Console:** Organic search performance and keyword insights
- **Email Analytics:** Mailchimp/Klaviyo integration for email performance
- **Heat Mapping:** Hotjar or similar for user behavior analysis

### Key Events & Conversions

**Custom Events to Track:**
- `sample_pack_view` - Sample pack page visits
- `heat_level_filter` - Product filtering by spice level
- `recipe_engagement` - Recipe page visits and time spent
- `cultural_content_view` - Educational content about Indonesia
- `product_comparison` - Using comparison tools or content
- `email_signup` - Newsletter subscription
- `social_share` - Content sharing on social platforms

**E-commerce Events:**
- `view_item` - Product page views
- `add_to_cart` - Product added to shopping cart
- `begin_checkout` - Checkout process initiated
- `purchase` - Completed purchase transaction
- `remove_from_cart` - Items removed from cart

**Content Engagement Events:**
- `blog_read_completion` - Blog article read to completion
- `recipe_save` - Recipe bookmarked or saved
- `cultural_story_engagement` - Chef Yossie story content engagement
- `cooking_guide_download` - PDF guide downloads

### Performance Benchmarks & Targets

**Website Performance:**
- **Page Load Speed:** Target <2 seconds (current baseline needed)
- **Core Web Vitals:** LCP <2.5s, FID <100ms, CLS <0.1
- **Mobile Performance:** 90+ Lighthouse mobile score
- **Bounce Rate:** Target <50% overall, <40% for product pages

**Conversion Benchmarks:**
- **Overall Conversion Rate:** Industry benchmark 2-3%, target 4-5%
- **Product Page Conversion:** Industry benchmark 5-8%, target 10-12%
- **Sample Pack Conversion:** Industry benchmark 30-40%, target 50-60%
- **Email Signup Rate:** Target 3-5% of website visitors

**Customer Behavior Benchmarks:**
- **Average Session Duration:** Target 3-4 minutes (educational content focus)
- **Pages per Session:** Target 4-5 pages (content consumption)
- **Return Visitor Rate:** Target 40-50% (loyalty building)
- **Customer Lifetime Value:** Target £75-100 (repeat purchases)

## Market & Competitive Context

### UK Food E-commerce Market

**Market Characteristics:**
- **Seasonal Patterns:** Higher demand in autumn/winter months
- **Shopping Behavior:** Strong preference for online reviews and recommendations
- **Price Sensitivity:** Willing to pay premium for quality and authenticity
- **Mobile Usage:** 60-70% of traffic from mobile devices

**Cultural Considerations:**
- **Heat Tolerance:** Generally lower spice tolerance than Indonesian market
- **Cultural Familiarity:** Limited knowledge of Indonesian cuisine
- **Trust Factors:** Important for unknown brands to establish credibility
- **Education Need:** Requires significant education about products and usage

### Competitive Analysis

**Direct Competitors:**
- **Lingham's:** Malaysian focus, established UK presence
  - Traffic: ~50K monthly visitors
  - Conversion rate: ~3-4%
  - AOV: ~£15-20

- **Flying Goose:** Thai focus, strong online presence
  - Traffic: ~30K monthly visitors  
  - Strong social media presence
  - AOV: ~£12-18

**Indirect Competitors:**
- **Sriracha brands:** Mass market, lower price point
- **Asian supermarkets:** Physical locations, established customer base
- **General hot sauce brands:** Tabasco, etc.

**Competitive Advantages to Track:**
- **Authenticity Score:** Measure brand perception vs. competitors
- **Educational Content Performance:** Compare content engagement
- **Customer Loyalty:** Compare repeat purchase rates
- **Premium Positioning:** Track price positioning effectiveness

## Reporting & Dashboard Requirements

### Stakeholder Reporting Needs

**Executive Dashboard (Weekly):**
- **Revenue Metrics:** Total revenue, growth rate, AOV trends
- **Customer Metrics:** New customers, retention rate, CLV
- **Traffic Overview:** Sessions, conversion rate, top traffic sources
- **Alert System:** Performance drops, inventory issues, technical problems

**Marketing Dashboard (Daily):**
- **Channel Performance:** Traffic and conversions by source/medium
- **Campaign ROI:** Individual campaign performance and attribution
- **Content Performance:** Blog traffic, engagement, conversion attribution
- **Social Media:** Follower growth, engagement rate, traffic contribution

**Operations Dashboard (Real-time):**
- **E-commerce Performance:** Sales, cart abandonment, checkout issues
- **Inventory Tracking:** Product performance, stock levels, demand forecasting
- **Customer Support:** Common questions, satisfaction scores, return reasons
- **Technical Performance:** Site speed, uptime, error rates

### Key Reports & Analysis

**Monthly Business Review:**
- Complete performance analysis across all KPIs
- Customer acquisition and retention analysis
- Revenue attribution by channel and campaign
- Competitive performance comparison
- Strategic recommendations for following month

**Quarterly Deep Dives:**
- **Customer Lifecycle Analysis:** Complete journey mapping and optimization
- **Product Performance Review:** Individual sambal variety analysis
- **Market Opportunity Assessment:** New customer segments and channels
- **Technical Performance Audit:** Site performance and optimization opportunities

**Special Analysis:**
- **Seasonal Pattern Analysis:** Prepare for holiday and seasonal demand
- **A/B Testing Results:** Regular testing program results and recommendations
- **Customer Feedback Analysis:** Survey results and satisfaction tracking
- **Content Performance Analysis:** Blog and educational content ROI

## Success Measurement Framework

### 90-Day Quick Wins
- **Analytics Implementation:** Complete GA4 setup and custom event tracking
- **Baseline Establishment:** Document current performance across all KPIs
- **Initial Optimization:** Top 3 conversion rate optimization opportunities
- **Reporting Setup:** Automated dashboards for all stakeholders

### 6-Month Growth Targets
- **Traffic Growth:** 200% increase in organic search traffic
- **Conversion Optimization:** 50% improvement in overall conversion rate
- **Customer Base:** 1,000+ customers acquired with 40% repeat purchase rate
- **Content Performance:** 75% of blog traffic converting to email signups

### 12-Month Business Goals
- **Revenue Target:** £10K monthly recurring revenue
- **Market Position:** Top 3 organic rankings for primary keywords
- **Customer Loyalty:** 35% of customers make repeat purchases within 6 months
- **Operational Excellence:** <2% cart abandonment rate, >95% site uptime

This comprehensive analytics specification provides the Data Analytics & Business Intelligence Subagent with all necessary context to measure performance, identify optimization opportunities, and drive data-driven growth for Spice Island Indonesia in the UK market.