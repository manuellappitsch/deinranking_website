import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { KiAgenturGrazHero } from "@/components/ki-agentur-graz/KiAgenturGrazHero";
import { KiAgenturGrazLeistungen } from "@/components/ki-agentur-graz/KiAgenturGrazLeistungen";
import { KiAgenturGrazVorteile } from "@/components/ki-agentur-graz/KiAgenturGrazVorteile";
import { KiAgenturGrazTestimonials } from "@/components/ki-agentur-graz/KiAgenturGrazTestimonials";
import { KiAgenturGrazFaq } from "@/components/ki-agentur-graz/KiAgenturGrazFaq";
import { Consultation } from "@/components/sections/Consultation";

const { meta, faq } = siteConfig.content.kiAgenturGraz;

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
    alternates: {
        canonical: "https://dein-ranking.at/ki-agentur-graz",
    },
    openGraph: {
        title: meta.title,
        description: meta.description,
        url: "https://dein-ranking.at/ki-agentur-graz",
        siteName: "DeinRanking",
        locale: "de_AT",
        type: "website",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DeinRanking GmbH",
    "description": "KI Agentur aus Graz – Voice AI, KI-Telefonassistenten & Automatisierung für Unternehmen in Graz und der Steiermark.",
    "url": "https://dein-ranking.at",
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
    "areaServed": [
        { "@type": "City", "name": "Graz" },
        { "@type": "State", "name": "Steiermark" },
        { "@type": "Country", "name": "Österreich" },
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
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
        },
    })),
};

export default function KiAgenturGrazPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="bg-deep-navy min-h-screen">
                <KiAgenturGrazHero />
                <KiAgenturGrazLeistungen />
                <KiAgenturGrazVorteile />
                <KiAgenturGrazTestimonials />
                <KiAgenturGrazFaq />
                <Consultation />
            </div>
        </>
    );
}
