import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Impressum | DeinRanking GmbH",
  description: "Impressum der DeinRanking GmbH. Geschäftsführer: Manuel Lappitsch. Sitz: Graz, Steiermark, Österreich.",
  alternates: { canonical: "https://dein-ranking.at/impressum" },
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
              { "@type": "ListItem", "position": 2, "name": "Impressum" },
            ],
          }),
        }}
      />
      <Breadcrumb items={[{ label: "Impressum" }]} />
      {children}
    </>
  );
}
