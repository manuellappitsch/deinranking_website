import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
    title: "Über DeinRanking | KI-Agentur Graz – Manuel Lappitsch",
    description: "Lerne DeinRanking GmbH kennen: Manuel Lappitsch und sein Team bieten Voice AI, KI-Automatisierung & SEO aus Graz. Unsere Mission und Referenzen.",
    alternates: { canonical: "https://dein-ranking.at/ueber-deinranking" },
    openGraph: {
        title: "Über DeinRanking | KI-Agentur Graz – Manuel Lappitsch",
        description: "Lerne DeinRanking GmbH kennen: Manuel Lappitsch und sein Team bieten Voice AI, KI-Automatisierung & SEO aus Graz. Unsere Mission und Referenzen.",
        url: "https://dein-ranking.at/ueber-deinranking",
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
              { "@type": "ListItem", "position": 2, "name": "Über DeinRanking" },
            ],
          }),
        }}
      />
      <Breadcrumb items={[{ label: "Über DeinRanking" }]} />
      {children}
    </>
  );
}
