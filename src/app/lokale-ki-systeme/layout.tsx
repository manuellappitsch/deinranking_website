import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
    title: "Lokale KI-Systeme & On-Premise KI | DeinRanking Graz",
    description: "Lokale KI-Systeme von DeinRanking: Kein Cloud-Zugriff, keine API-Kosten, 100% DSGVO-konform. Wir installieren KI direkt in deiner Infrastruktur.",
    alternates: { canonical: "https://dein-ranking.at/lokale-ki-systeme" },
    openGraph: {
        title: "Lokale KI-Systeme & On-Premise KI | DeinRanking Graz",
        description: "Lokale KI-Systeme von DeinRanking: Kein Cloud-Zugriff, keine API-Kosten, 100% DSGVO-konform. Wir installieren KI direkt in deiner Infrastruktur.",
        url: "https://dein-ranking.at/lokale-ki-systeme",
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
              { "@type": "ListItem", "position": 2, "name": "Lokale KI-Systeme" },
            ],
          }),
        }}
      />
      <Breadcrumb items={[{ label: "Lokale KI-Systeme" }]} />
      {children}
    </>
  );
}
