import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { KiFoerderungHero } from "@/components/ki-foerderung/KiFoerderungHero";
import { KiFoerderungProgramme } from "@/components/ki-foerderung/KiFoerderungProgramme";
import { KiFoerderungDetails } from "@/components/ki-foerderung/KiFoerderungDetails";
import { KiFoerderungSchritte } from "@/components/ki-foerderung/KiFoerderungSchritte";
import { KiFoerderungFaq } from "@/components/ki-foerderung/KiFoerderungFaq";
import { Consultation } from "@/components/sections/Consultation";

const { meta, faq } = siteConfig.content.kiFoerderung;

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
    alternates: {
        canonical: "https://dein-ranking.at/ki-foerderung-oesterreich",
    },
    openGraph: {
        title: meta.title,
        description: meta.description,
        url: "https://dein-ranking.at/ki-foerderung-oesterreich",
        siteName: "DeinRanking",
        locale: "de_AT",
        type: "article",
    },
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

export default function KiFoerderungPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="bg-deep-navy min-h-screen">
                <KiFoerderungHero />
                <KiFoerderungProgramme />
                <KiFoerderungDetails />
                <KiFoerderungSchritte />
                <KiFoerderungFaq />
                <Consultation />
            </div>
        </>
    );
}
