"use client";

import { PhoneHero } from "@/components/phone-assistant/PhoneHero";
import { PhoneFeatures } from "@/components/phone-assistant/PhoneFeatures";
import { PhoneUseCases } from "@/components/phone-assistant/PhoneUseCases";
import { PhoneComparison } from "@/components/phone-assistant/PhoneComparison";
import { PhoneFaq } from "@/components/phone-assistant/PhoneFaq";
import { Consultation } from "@/components/sections/Consultation";

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "KI-Telefonassistent",
    description: "24/7 KI-Telefonassistent für Unternehmen – automatische Anrufbeantwortung, Terminvereinbarung und Kundenservice ohne Wartezeit.",
    provider: {
        "@type": "Organization",
        name: "DeinRanking",
        url: "https://dein-ranking.at",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Graz",
            addressCountry: "AT",
        },
    },
    areaServed: { "@type": "Country", name: "Austria" },
    url: "https://dein-ranking.at/ki-telefonassistent",
};

export default function PhoneAssistantPage() {
    return (
        <div className="bg-deep-navy min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <PhoneHero />

            <PhoneFeatures />

            <PhoneUseCases />

            <PhoneComparison />

            <PhoneFaq />

            <Consultation />
        </div>
    );
}
