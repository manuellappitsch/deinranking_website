import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
    title: "Kontakt | KI-Beratung & Erstgespräch – DeinRanking Graz",
    description: "Vereinbare dein kostenloses KI-Erstgespräch mit DeinRanking aus Graz. Per Telefon, E-Mail oder persönlich. Wir antworten innerhalb von 24 Stunden.",
    alternates: { canonical: "https://dein-ranking.at/kontakt" },
    openGraph: {
        title: "Kontakt | KI-Beratung & Erstgespräch – DeinRanking Graz",
        description: "Vereinbare dein kostenloses KI-Erstgespräch mit DeinRanking aus Graz. Per Telefon, E-Mail oder persönlich. Wir antworten innerhalb von 24 Stunden.",
        url: "https://dein-ranking.at/kontakt",
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
              { "@type": "ListItem", "position": 2, "name": "Kontakt" },
            ],
          }),
        }}
      />
      <Breadcrumb items={[{ label: "Kontakt" }]} />
      {children}
    </>
  );
}
