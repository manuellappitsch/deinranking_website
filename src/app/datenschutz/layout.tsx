import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | DeinRanking GmbH",
  description: "Datenschutzerklärung der DeinRanking GmbH. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  alternates: { canonical: "https://dein-ranking.at/datenschutz" },
  robots: { index: true, follow: true },
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
              { "@type": "ListItem", "position": 2, "name": "Datenschutz" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
