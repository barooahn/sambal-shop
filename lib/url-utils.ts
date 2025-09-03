/**
 * URL utility functions for generating complete URLs with environment variables
 * This ensures consistent internal linking for SEO optimization
 */

/**
 * Get the complete base URL from environment variables
 * Always returns the production URL for consistency in SEO
 */
export const getBaseUrl = (): string => {
  // Always use production URL for internal links to maintain consistency for search engines
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spiceislandindonesia.com';
};

/**
 * Generate complete internal URL for better SEO indexing
 * @param path - The relative path (with or without leading slash)
 * @returns Complete URL with proper domain
 */
export const getInternalUrl = (path: string): string => {
  const baseUrl = getBaseUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Generate complete URLs for all major internal pages
 * This provides a centralized way to manage internal links
 */
export const getInternalUrls = () => {
  const baseUrl = getBaseUrl();
  
  return {
    // Main pages
    home: baseUrl,
    shop: `${baseUrl}/shop`,
    recipes: `${baseUrl}/recipes`,
    blog: `${baseUrl}/blog`,
    chef: `${baseUrl}/chef`,
    
    // Auth pages
    login: `${baseUrl}/login`,
    signup: `${baseUrl}/signup`,
    
    // Product pages
    sambalOelek: `${baseUrl}/sambal-oelek-uk`,
    sambalBali: `${baseUrl}/sambal-bali-aromatic-spicy`,
    sambalGoreng: `${baseUrl}/sambal-goreng-uk`,
    sambalStirFry: `${baseUrl}/sambal-for-stir-fry`,
    sambalBbqMarinade: `${baseUrl}/sambal-bbq-marinade`,
    samplePack: `${baseUrl}/sample-pack-try-first`,
    
    // Recipe pages
    sambalFriedRice: `${baseUrl}/recipes/sambal-fried-rice`,
    sambalBbqMarinadeRecipe: `${baseUrl}/recipes/sambal-bbq-marinade`,
    sambalScrambledEggs: `${baseUrl}/recipes/sambal-scrambled-eggs`,
    
    // Blog posts
    ultimateGuideSambal: `${baseUrl}/blog/ultimate-guide-indonesian-sambal`,
    sambalVsHotSauce: `${baseUrl}/blog/sambal-vs-hot-sauce`,
    spiceIslandsHistory: `${baseUrl}/blog/spice-islands-history`,
    indonesianCookingGuide: `${baseUrl}/blog/indonesian-cooking-guide-british-kitchens`,
    authenticVsStoreBought: `${baseUrl}/authentic-vs-store-bought`,
    indonesianFoodCulture: `${baseUrl}/blog/indonesian-food-culture-context`,
    
    // Community pages
    community: `${baseUrl}/community`,
    communityShareStory: `${baseUrl}/community/share-story`,
    communityQuiz: `${baseUrl}/community/quiz`,
  };
};

/**
 * Validate that a URL is internal to the site
 * @param url - URL to validate
 * @returns boolean indicating if URL is internal
 */
export const isInternalUrl = (url: string): boolean => {
  const baseUrl = getBaseUrl();
  return url.startsWith(baseUrl) || url.startsWith('/');
};