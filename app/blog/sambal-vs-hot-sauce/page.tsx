import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleSchema from "@/components/seo/ArticleSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Sambal vs Hot Sauce: Understanding the Difference | Spice Island Indonesia",
  description:
    "Not all chili condiments are the same. Discover how Indonesian sambal differs from Western hot sauces and why authenticity matters in cooking.",
  keywords: [
    "sambal vs hot sauce",
    "Indonesian sambal",
    "chili condiments",
    "authentic sambal",
  ],
  openGraph: {
    title: "Sambal vs Hot Sauce: Understanding the Difference",
    description:
      "Explore the key differences between Indonesian sambal and common hot sauces — ingredients, texture, flavor, and use cases.",
    type: "article",
    images: [
      {
        url: "/images/blog/sambal-vs-hot-sauce-comparison.webp",
        width: 1200,
        height: 630,
        alt: "Comparative image of authentic Indonesian sambal and hot sauce",
      },
    ],
  },
  alternates: {
    canonical: "https://spiceislandindonesia.com/blog/sambal-vs-hot-sauce",
  },
};

const faqData = [
  {
    question: "Is sambal just a type of hot sauce?",
    answer:
      "No. Sambal is a traditional Indonesian chili paste with minimal ingredients and a thick, rustic texture. Most Western hot sauces are emulsified liquids with sugar and preservatives.",
  },
  {
    question: "How should I substitute sambal for hot sauce?",
    answer:
      "Use 1/4 of the amount of hot sauce you would normally use, then taste and adjust. Sambal is typically hotter and more concentrated.",
  },
];

export default function SambalVsHotSauceBlogPage() {
  return (
    <>
      {/* Structured Data */}
      <ArticleSchema
        headline="Sambal vs Hot Sauce: Understanding the Difference"
        description="Explore the differences between Indonesian sambal and common hot sauces. Learn how to use each in cooking."
        author={{ name: "Chef Yossie & Team", type: "Organization" }}
        publisher={{
          name: "Spice Island Indonesia",
          type: "Organization",
          logo: { url: "https://sambal-shop.vercel.app/images/optimized/logo-lg.webp", width: 200, height: 60 },
        }}
        url="https://spiceislandindonesia.com/blog/sambal-vs-hot-sauce"
        datePublished="2024-01-01"
        dateModified="2024-01-01"
        image="/images/blog/sambal-vs-hot-sauce-comparison.webp"
        wordCount={1400}
        keywords={["sambal vs hot sauce", "Indonesian sambal", "condiment comparison", "authentic cooking"]}
      />
      <FAQSchema faqs={faqData} pageTitle="Sambal vs Hot Sauce - FAQ" />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-burgundy-900 mb-4 leading-tight">
            Sambal vs Hot Sauce: Understanding the Difference
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            A professional comparison of Indonesia's traditional chili paste and the Western hot sauces most Brits know.
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative mb-10 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/blog/sambal-vs-hot-sauce-comparison.webp"
            alt="Side-by-side comparison of Indonesian sambal and hot sauce"
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Body (scaffold) */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2>Ingredients & Texture</h2>
          <p>
            Authentic sambal uses chilies, salt and vinegar, stone-ground to a coarse paste. Many hot sauces add sugar,
            stabilisers and artificial flavours with a pourable texture.
          </p>

          <h2>Flavor & Heat</h2>
          <p>
            Sambal delivers clean chili character with layered aromatics and a natural, bright heat. Hot sauces often
            lean sweet-tangy with thinner mouthfeel.
          </p>

          <h2>How to Use</h2>
          <p>
            Use sambal sparingly — 1/4 tsp at a time — to build depth into noodles, eggs, marinades and stir-fries. Use
            hot sauce when you want quick acidity or a thinner finish.
          </p>

          {/* TODO: Expand with tables, internal links, and examples */}
        </section>

        {/* CTA */}
        <section className="text-center">
          <Link
            href="/shop"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 font-bold rounded-full hover:shadow-lg transition-all duration-300 border border-gold-600/30"
          >
            Taste the Difference with Authentic Sambal
          </Link>
        </section>
      </article>
    </>
  );
}

