export type BlogPostMeta = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  publishDate: string; // ISO-like string
  slug: string;
};

export const blogPosts: BlogPostMeta[] = [
  {
    id: 1,
    title: "Sambal vs HP Sauce: The Ultimate British Condiment Showdown",
    excerpt:
      "A professional chef's honest comparison of Indonesia's ancient sambal tradition against Britain's beloved HP Sauce. Discover why sambal is quietly revolutionizing British kitchens.",
    image: "/images/blog/sambal-vs-hp-sauce-hero.webp",
    category: "Food Education",
    readTime: "12 min read",
    publishDate: "2025-01-10",
    slug: "sambal-vs-hp-sauce",
  },
  {
    id: 2,
    title: "Indonesian Cooking Guide for British Kitchens",
    excerpt:
      "Master authentic Indonesian cooking in your British kitchen. Complete 5-part guide with traditional recipes, UK ingredient sourcing, shopping tips & cultural insights from Chef Yossie.",
    image: "/images/blog/indonesian-cooking-guide-hero.webp",
    category: "Cooking Guide",
    readTime: "65 min series",
    publishDate: "2025-01-08",
    slug: "indonesian-cooking-guide-british-kitchens",
  },
  {
    id: 3,
    title: "Indonesian Spice Levels for British Palates",
    excerpt:
      "Navigate Indonesian heat levels safely. Learn to build spice tolerance, adjust traditional recipes for British tastes, and discover complex flavors behind the fire.",
    image: "/images/indonesian-spice-guide-uk.webp",
    category: "Cooking Guide",
    readTime: "8 min read",
    publishDate: "2025-01-09",
    slug: "indonesian-spice-levels-british-palates",
  },
  {
    id: 11,
    title: "Essential Indonesian Ingredients: UK Shopping Guide",
    excerpt:
      "Complete shopping guide for Indonesian ingredients in the UK. Find authentic sambal, spices, and pantry essentials at supermarkets, Asian shops, and online stores with money-saving tips.",
    image: "/images/ingredients-shopping-guide.webp",
    category: "Cooking Guide",
    readTime: "12 min read",
    publishDate: "2025-01-07",
    slug: "indonesian-ingredients-uk-shopping-guide",
  },
  {
    id: 4,
    title: "The History of the Spice Islands: Where Your Sambal Comes From",
    excerpt:
      "Journey back to the Maluku Islands, the original Spice Islands that changed world history. Discover the rich culinary heritage and volcanic soil that creates the perfect chilies for authentic sambal.",
    image: "/images/blog/spice-islands-history.webp",
    category: "Heritage Stories",
    readTime: "12 min read",
    publishDate: "2024-02-10",
    slug: "spice-islands-history",
  },
  {
    id: 5,
    title: "Transform British Classics with Indonesian Sambal: 8 Creative Ways",
    excerpt:
      "Revolutionize your favourite British dishes with authentic Indonesian sambal. From Sunday roasts to fish and chips, discover how traditional sambal elevates classic British cooking with bold, complex flavors.",
    image: "/images/blog/sambal-british-fusion.webp",
    category: "Cooking Tips",
    readTime: "12 min read",
    publishDate: "2024-02-05",
    slug: "sambal-british-classics",
  },
  {
    id: 6,
    title: "The Ultimate Guide to Indonesian Sambal: Beyond Sriracha",
    excerpt:
      "Discover the authentic world of Indonesian sambal - from traditional varieties to modern applications. Learn what makes real sambal different from Western hot sauces and how to use it in British cooking.",
    image: "/images/blog/ultimate-sambal-guide.webp",
    category: "Food Education",
    readTime: "12 min read",
    publishDate: "2024-02-01",
    slug: "ultimate-guide-indonesian-sambal",
  },
  {
    id: 7,
    title: "The Art of Traditional Sambal Making: A Journey Through the Spice Islands",
    excerpt:
      "Discover the ancient techniques and secret ingredients that make authentic Indonesian sambal so special. From selecting the perfect chilies to the traditional grinding methods passed down through generations.",
    image: "/images/blog/traditional-sambal-making.webp",
    category: "Traditional Recipes",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    slug: "traditional-sambal-making",
  },
  {
    id: 8,
    title: "Mastering Indonesian Heat: A Guide to Spice Levels and Flavor Building",
    excerpt:
      "Learn to navigate Indonesian heat levels with confidence. Discover how to build spice tolerance, balance heat with flavor, and create authentic Indonesian dishes that suit British palates.",
    image: "/images/blog/indonesian-spice-mastery.webp",
    category: "Cooking Guide",
    readTime: "9 min read",
    publishDate: "2024-01-10",
    slug: "mastering-indonesian-heat",
  },
  {
    id: 9,
    title: "Our Journey from the Spice Islands to Your Kitchen",
    excerpt:
      "Discover how traditional Indonesian spice knowledge from the historic Maluku Islands inspired our authentic sambal recipes, bringing centuries-old culinary wisdom to modern British kitchens.",
    image: "/images/blog/spice-islands-heritage.webp",
    category: "Heritage Stories",
    readTime: "10 min read",
    publishDate: "2024-01-05",
    slug: "spice-islands-to-your-kitchen",
  },
  {
    id: 10,
    title: "Sambal vs Hot Sauce: Understanding the Difference",
    excerpt:
      "Not all chili condiments are created equal. Explore what makes Indonesian sambal unique compared to Western hot sauces, and why authenticity matters in Indonesian cuisine.",
    image: "/images/blog/sambal-vs-hot-sauce-comparison.webp",
    category: "Food Education",
    readTime: "5 min read",
    publishDate: "2024-01-01",
    slug: "sambal-vs-hot-sauce",
  },
  {
    id: 12,
    title: "5 Ways to Use Sambal in British Cooking",
    excerpt:
      "Transform your everyday British meals with authentic Indonesian sambal. Discover five creative ways to incorporate this traditional Indonesian condiment into your British kitchen repertoire.",
    image: "/images/sambal-british-fusion.webp",
    category: "Cooking Tips",
    readTime: "8 min read",
    publishDate: "2024-01-18",
    slug: "5-ways-sambal-british-cooking",
  },
  {
    id: 13,
    title: "British-Indonesian Fusion: Weeknight Recipes",
    excerpt:
      "Quick and delicious fusion recipes that blend British comfort food with Indonesian flavors. Perfect weeknight dinners that bring excitement to your family table with authentic sambal.",
    image: "/images/fusion-recipes-guide.webp",
    category: "Cooking Tips",
    readTime: "10 min read",
    publishDate: "2024-01-20",
    slug: "british-indonesian-fusion-weeknight-recipes",
  },
  {
    id: 14,
    title: "Indonesian Cooking Techniques for British Kitchens",
    excerpt:
      "Master traditional Indonesian cooking methods using standard British kitchen equipment. Learn authentic techniques that bring out the best flavors in Indonesian cuisine at home.",
    image: "/images/indonesian-techniques-uk-kitchen.webp",
    category: "Cooking Guide",
    readTime: "12 min read",
    publishDate: "2024-01-25",
    slug: "indonesian-techniques-british-kitchens",
  },
  {
    id: 15,
    title: "Sambal vs Sriracha: The Original Asian Hot Sauce vs Commercial Alternative",
    excerpt:
      "Think Sriracha is authentic Asian hot sauce? Indonesian sambal predates it by 500 years. Compare ingredients, taste, and cultural heritage. Discover the real original Asian chili sauce.",
    image: "/images/blog/sambal-vs-sriracha-comparison.webp",
    category: "Food Education",
    readTime: "8 min read",
    publishDate: "2025-01-12",
    slug: "sambal-vs-sriracha",
  },
  {
    id: 16,
    title: "Complete Guide to Indonesian Sambal Varieties: From Oelek to Bali",
    excerpt:
      "Discover 15+ authentic Indonesian sambal varieties from across the archipelago. Complete guide to regional differences, heat levels, ingredients, and uses. Master traditional Indonesian condiments.",
    image: "/images/blog/indonesian-sambal-varieties-guide.webp",
    category: "Food Education",
    readTime: "15 min read",
    publishDate: "2025-01-15",
    slug: "complete-guide-indonesian-sambal-varieties",
  },
  {
    id: 17,
    title: "Authentic Indonesian Sambal: Why Most UK Brands Get It Wrong",
    excerpt:
      "UK supermarket 'sambal' vs real Indonesian sambal: shocking differences revealed. Learn why authentic matters, what to avoid, and how to identify genuine Indonesian sambal in the UK.",
    image: "/images/blog/authentic-vs-fake-sambal-uk.webp",
    category: "Food Education",
    readTime: "12 min read",
    publishDate: "2025-01-18",
    slug: "authentic-indonesian-sambal-why-uk-brands-get-it-wrong",
  },
  {
    id: 18,
    title: "Spicy Food Beginners Guide: How to Build Heat Tolerance Safely",
    excerpt:
      "Complete beginner's guide to spicy food: build heat tolerance safely, understand Scoville scale, choose beginner-friendly options, and discover authentic Indonesian sambal.",
    image: "/images/blog/spicy-food-beginners-guide.webp",
    category: "Cooking Guide",
    readTime: "10 min read",
    publishDate: "2025-01-20",
    slug: "spicy-food-beginners-guide",
  },
];
