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
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DeinRanking GmbH",
  "url": "https://dein-ranking.at",
  "logo": "https://dein-ranking.at/logo.png",
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
  "founder": {
    "@type": "Person",
    "name": "Manuel Lappitsch",
    "url": "https://dein-ranking.at/ueber-deinranking",
    "sameAs": "https://www.linkedin.com/in/manuel-lappitsch/",
  },
  "areaServed": ["Graz", "Steiermark", "Österreich", "DACH"],
  "knowsAbout": ["Künstliche Intelligenz", "Voice AI", "KI-Telefonassistent", "Prozessautomatisierung", "SEO", "DSGVO-konforme KI"],
  "sameAs": [
    "https://www.linkedin.com/in/manuel-lappitsch/",
    "https://www.instagram.com/deinranking_gmbh/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
