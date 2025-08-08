import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleSchema from "@/components/seo/ArticleSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "The Ultimate Guide to Indonesian Sambal: Beyond Sriracha | Spice Island Indonesia",
  description:
    "Discover authentic Indonesian sambal: varieties, ingredients, techniques, and how to use it in British cooking.",
  keywords: [
    "Indonesian sambal guide",
    "sambal vs sriracha",
    "authentic sambal UK",
    "traditional sambal",
  ],
  openGraph: {
    title: "The Ultimate Guide to Indonesian Sambal: Beyond Sriracha",
    description:
      "Explore sambal varieties, traditional techniques, and the differences from Western hot sauces.",
    type: "article",
    images: [
      { url: "/images/blog/ultimate-sambal-guide.webp", width: 1200, height: 630, alt: "Varieties of Indonesian sambal" },
    ],
  },
  alternates: {
    canonical: "https://spiceislandindonesia.com/blog/ultimate-guide-indonesian-sambal",
  },
};

const faqData = [
  {
    question: "What is the difference between sambal and hot sauce?",
    answer:
      "Sambal is a thick, rustic paste made with minimal ingredients (chilies, salt, vinegar). Hot sauce is typically liquid, often sweetened, and stabilised.",
  },
  {
    question: "How do I start cooking with sambal?",
    answer:
      "Start with 1/4 tsp and build gradually. Try eggs, fried rice, noodle soups, marinades and roast veg.",
  },
];

export default function UltimateSambalGuidePage() {
  return (
    <>
      {/* Structured Data */}
      <ArticleSchema
        headline="The Ultimate Guide to Indonesian Sambal: Beyond Sriracha"
        description="An expert guide to authentic Indonesian sambal — varieties, techniques, and UK-friendly uses."
        author={{ name: "Chef Yossie & Team", type: "Organization" }}
        publisher={{
          name: "Spice Island Indonesia",
          type: "Organization",
          logo: { url: "https://sambal-shop.vercel.app/images/optimized/logo-lg.webp", width: 200, height: 60 },
        }}
        url="https://spiceislandindonesia.com/blog/ultimate-guide-indonesian-sambal"
        datePublished="2024-02-01"
        dateModified="2024-02-01"
        image="/images/blog/ultimate-sambal-guide.webp"
        wordCount={2400}
        keywords={["sambal varieties", "sambal vs sriracha", "traditional sambal", "UK cooking"]}
      />
      <FAQSchema faqs={faqData} pageTitle="Ultimate Sambal Guide - FAQ" />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-burgundy-900 mb-4 leading-tight">
            The Ultimate Guide to Indonesian Sambal: Beyond Sriracha
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            A practical guide to authentic sambal — what it is, how it’s made, and how to use it in British kitchens.
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative mb-10 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/blog/ultimate-sambal-guide.webp"
            alt="A variety of Indonesian sambal styles and ingredients"
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Body (initial migration scaffold) */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2>What Makes Sambal ‘Authentic’</h2>
          <p>
            Minimal ingredients, stone-ground texture, bright chili character, and no unnecessary additives. Sambal is a
            culinary technique as much as it is a condiment.
          </p>

          <h2>Common Varieties</h2>
          <ul>
            <li>Sambal Oelek — pure chili paste</li>
            <li>Sambal Terasi — with shrimp paste</li>
            <li>Sambal Matah — raw shallot & chili salsa (Bali)</li>
            <li>Sambal Bali — aromatic, with galangal and lemongrass</li>
          </ul>

          <h2>How to Use in British Cooking</h2>
          <p>
            Start small and build: scrambled eggs, roast potatoes, stir-fries, barbecue marinades, and noodle soups. Use it
            for depth — not just heat.
          </p>

          <div className="bg-gold-50 border border-gold-200 p-6 rounded-lg my-8">
            <p className="font-semibold text-burgundy-900 mb-2">Chef’s Tip</p>
            <p className="text-neutral-700">
              Sambal is concentrated. 1/4 tsp can transform a dish — add gradually and taste as you go.
            </p>
          </div>

          <h2>Continue Exploring</h2>
          <ul>
            <li>
              <Link href="/sambal-vs-sriracha" className="text-burgundy-600 hover:text-burgundy-800 underline">
                Sambal vs Sriracha
              </Link>
            </li>
            <li>
              <Link href="/blog/traditional-sambal-making" className="text-burgundy-600 hover:text-burgundy-800 underline">
                The Art of Traditional Sambal Making
              </Link>
            </li>
          </ul>

          {/* TODO: Port remaining dynamic content (sections, callouts, internal links) */}
        </section>

        {/* CTA */}
        <section className="text-center">
          <Link
            href="/shop"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 font-bold rounded-full hover:shadow-lg transition-all duration-300 border border-gold-600/30"
          >
            Order Authentic Sambal
          </Link>
        </section>
      </article>
    </>
  );
}

