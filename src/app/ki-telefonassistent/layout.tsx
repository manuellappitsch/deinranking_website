import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "KI-Telefonassistent | 24/7 Erreichbarkeit – DeinRanking",
    description: "Nie wieder verpasste Anrufe. DeinRanking KI-Telefonassistent: 24/7 verfügbar, DSGVO-konform & nahtlos in dein CRM integrierbar. Jetzt kostenloses Erstgespräch.",
    alternates: { canonical: "https://dein-ranking.at/ki-telefonassistent" },
    openGraph: {
        title: "KI-Telefonassistent | 24/7 Erreichbarkeit – DeinRanking",
        description: "Nie wieder verpasste Anrufe. DeinRanking KI-Telefonassistent: 24/7 verfügbar, DSGVO-konform & nahtlos in dein CRM integrierbar. Jetzt kostenloses Erstgespräch.",
        url: "https://dein-ranking.at/ki-telefonassistent",
        siteName: "DeinRanking",
        locale: "de_AT",
        type: "website",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dein-ranking.at" },
              { "@type": "ListItem", "position": 2, "name": "KI-Telefonassistent" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
