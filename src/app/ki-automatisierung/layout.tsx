import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
    title: "KI-Automatisierung für Unternehmen | DeinRanking Graz",
    description: "KI-Automatisierung von DeinRanking Graz: n8n, Make.com & Custom-KI für effiziente Prozesse. Spar Zeit, reduzier Fehler und steiger deinen ROI.",
    alternates: { canonical: "https://dein-ranking.at/ki-automatisierung" },
    openGraph: {
        title: "KI-Automatisierung für Unternehmen | DeinRanking Graz",
        description: "KI-Automatisierung von DeinRanking Graz: n8n, Make.com & Custom-KI für effiziente Prozesse. Spar Zeit, reduzier Fehler und steiger deinen ROI.",
        url: "https://dein-ranking.at/ki-automatisierung",
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
              { "@type": "ListItem", "position": 2, "name": "KI-Automatisierung" },
            ],
          }),
        }}
      />
      <Breadcrumb items={[{ label: "KI-Automatisierung" }]} />
      {children}
    </>
  );
}
