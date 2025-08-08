import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleSchema from "@/components/seo/ArticleSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "The Art of Traditional Sambal Making: A Journey Through the Spice Islands | Spice Island Indonesia",
  description:
    "Discover the ancient techniques and principles behind authentic Indonesian sambal — from chili selection to stone-grinding methods.",
  keywords: [
    "traditional sambal making",
    "Indonesian sambal",
    "stone-ground sambal",
    "Spice Islands",
  ],
  openGraph: {
    title: "The Art of Traditional Sambal Making: A Journey Through the Spice Islands",
    description:
      "How centuries-old techniques from the Spice Islands shape the flavour and texture of authentic sambal.",
    type: "article",
    images: [
      { url: "/images/blog/traditional-sambal-making.webp", width: 1200, height: 630, alt: "Traditional stone mortar with chilies" },
    ],
  },
  alternates: {
    canonical: "https://spiceislandindonesia.com/blog/traditional-sambal-making",
  },
};

const faqData = [
  {
    question: "What tools are used for traditional sambal?",
    answer:
      "A volcanic stone mortar and pestle (ulekan and cobek) are used to achieve the ideal coarse texture and integrate aromatics without over-puréeing.",
  },
  {
    question: "Why is sambal kept simple?",
    answer:
      "Minimal ingredients preserve the chili’s natural character, texture, and aroma. Simplicity reveals quality.",
  },
];

export default function TraditionalSambalMakingPage() {
  return (
    <>
      {/* Structured Data */}
      <ArticleSchema
        headline="The Art of Traditional Sambal Making: A Journey Through the Spice Islands"
        description="The essential techniques behind authentic sambal — chili selection, grinding, and balancing flavor."
        author={{ name: "Chef Yossie & Team", type: "Organization" }}
        publisher={{
          name: "Spice Island Indonesia",
          type: "Organization",
          logo: { url: "https://sambal-shop.vercel.app/images/optimized/logo-lg.webp", width: 200, height: 60 },
        }}
        url="https://spiceislandindonesia.com/blog/traditional-sambal-making"
        datePublished="2024-01-15"
        dateModified="2024-01-15"
        image="/images/blog/traditional-sambal-making.webp"
        wordCount={1600}
        keywords={["traditional sambal", "stone ground", "Indonesian techniques", "Spice Islands"]}
      />
      <FAQSchema faqs={faqData} pageTitle="Traditional Sambal Making - FAQ" />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-burgundy-900 mb-4 leading-tight">
            The Art of Traditional Sambal Making: A Journey Through the Spice Islands
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            The principles and techniques behind authentic Indonesian sambal — brought to British kitchens.
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative mb-10 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/blog/traditional-sambal-making.webp"
            alt="Traditional Indonesian stone mortar and pestle with chilies"
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Body (initial migration scaffold) */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2>Choosing Chilies</h2>
          <p>
            For sambal, chili quality matters more than heat number. Look for bright aroma and consistent flesh. Volcanic
            soils produce chilies with clean, potent flavor.
          </p>

          <h2>Grinding for Texture</h2>
          <p>
            A volcanic stone mortar breaks cells differently than blades, creating a coarse, sauce-clinging texture. This
            is why traditional grinding changes flavor perception and mouthfeel.
          </p>

          <h2>Balance and Simplicity</h2>
          <p>
            Season lightly. Let the chili speak. Balance salt, acidity and aromatics so sambal elevates — not masks — the
            dish.
          </p>

          {/* TODO: Port more sections (family methods, storage, hygiene, step-by-step visuals) */}
        </section>

        {/* CTA */}
        <section className="text-center">
          <Link
            href="/shop"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-200 font-bold rounded-full hover:shadow-lg transition-all duration-300 border border-gold-600/30"
          >
            Explore Authentic Sambal
          </Link>
        </section>
      </article>
    </>
  );
}

