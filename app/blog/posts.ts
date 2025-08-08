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
    publishDate: "2025-01-08",
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
    image: "/images/blog/spice-levels-guide.webp",
    category: "Cooking Guide",
    readTime: "8 min read",
    publishDate: "2025-01-08",
    slug: "indonesian-spice-levels-british-palates",
  },
  {
    id: 11,
    title: "Essential Indonesian Ingredients: UK Shopping Guide",
    excerpt:
      "Complete shopping guide for Indonesian ingredients in the UK. Find authentic sambal, spices, and pantry essentials at supermarkets, Asian shops, and online stores with money-saving tips.",
    image: "/images/blog/ingredients-shopping-guide.webp",
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
];
