import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { Consultation } from "@/components/sections/Consultation";

export const metadata: Metadata = {
  title: "KI Agentur & Automatisierung für Unternehmen | DeinRanking",
  description: "KI-Agentur aus Graz: Voice AI, KI-Telefonassistenten & Prozessautomatisierung für B2B-Unternehmen im DACH-Raum. Jetzt kostenloses Erstgespräch buchen!",
  alternates: {
    canonical: "https://dein-ranking.at",
  },
  openGraph: {
    title: "KI Agentur & Automatisierung für Unternehmen | DeinRanking",
    description: "KI-Agentur aus Graz: Voice AI, KI-Telefonassistenten & Prozessautomatisierung für B2B-Unternehmen im DACH-Raum. Jetzt kostenloses Erstgespräch buchen!",
    url: "https://dein-ranking.at",
    siteName: "DeinRanking",
    locale: "de_AT",
    type: "website",
    // TODO: Replace with dedicated 1200x630 OG-Banner (incl. Logo + Tagline + Manuel)
    images: [
      {
        url: "https://dein-ranking.at/images/manu-workshop.jpg",
        width: 1024,
        height: 1024,
        alt: "Manuel Lappitsch – KI-Agentur DeinRanking aus Graz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KI Agentur & Automatisierung für Unternehmen | DeinRanking",
    description: "KI-Agentur aus Graz: Voice AI, KI-Telefonassistenten & Prozessautomatisierung für B2B-Unternehmen im DACH-Raum.",
    images: ["https://dein-ranking.at/images/manu-workshop.jpg"],
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dein-ranking.at/#organization",
      "name": "DeinRanking GmbH",
      "url": "https://dein-ranking.at",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dein-ranking.at/images/logo.png",
        "width": 320,
        "height": 60,
      },
      "image": "https://dein-ranking.at/images/manu-workshop.jpg",
      "description": "KI-Agentur aus Graz – Voice AI, KI-Telefonassistenten & Prozessautomatisierung für B2B-Unternehmen.",
      "telephone": "+436767066333",
      "email": "office@dein-ranking.at",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gradnerstraße 120",
        "addressLocality": "Graz",
        "postalCode": "8054",
        "addressCountry": "AT",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 47.0297,
        "longitude": 15.4476,
      },
      "founder": {
        "@type": "Person",
        "@id": "https://dein-ranking.at/#person-manuel",
        "name": "Manuel Lappitsch",
        "url": "https://dein-ranking.at/ueber-deinranking",
        "jobTitle": "Geschäftsführer",
        "sameAs": "https://www.linkedin.com/in/manuel-lappitsch/",
      },
      "foundingDate": "2022",
      "areaServed": [
        { "@type": "City", "name": "Graz" },
        { "@type": "State", "name": "Steiermark" },
        { "@type": "Country", "name": "Österreich" },
        { "@type": "Country", "name": "Deutschland" },
        { "@type": "Country", "name": "Schweiz" },
      ],
      "knowsAbout": [
        "Künstliche Intelligenz",
        "Voice AI",
        "KI-Telefonassistent",
        "Prozessautomatisierung",
        "DSGVO-konforme KI",
      ],
      "sameAs": [
        "https://www.linkedin.com/in/manuel-lappitsch/",
        "https://www.instagram.com/deinranking_gmbh/",
        "https://www.tiktok.com/@deinranking",
        "https://www.facebook.com/deinranking",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://dein-ranking.at/#website",
      "name": "DeinRanking",
      "url": "https://dein-ranking.at",
      "publisher": { "@id": "https://dein-ranking.at/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://dein-ranking.at/ratgeber?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://dein-ranking.at/#webpage",
      "url": "https://dein-ranking.at",
      "name": "KI Agentur & Automatisierung für Unternehmen | DeinRanking",
      "isPartOf": { "@id": "https://dein-ranking.at/#website" },
      "about": { "@id": "https://dein-ranking.at/#organization" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <div className="flex flex-col gap-0 w-full relative overflow-x-hidden">
        <Hero />
        <Services />
        <Benefits />
        <About />
        <Testimonials />
        <Consultation />
      </div>
    </>
  );
}
