import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
    title: "KI-Workshop für Unternehmen | Praxis & KI – DeinRanking",
    description: "KI-Workshop von DeinRanking: Praxiswissen zu KI-Tools, Automatisierung & ChatGPT für Unternehmen in Graz und online. Mach dein Team fit für die KI-Ära.",
    alternates: { canonical: "https://dein-ranking.at/ki-workshop" },
    openGraph: {
        title: "KI-Workshop für Unternehmen | Praxis & KI – DeinRanking",
        description: "KI-Workshop von DeinRanking: Praxiswissen zu KI-Tools, Automatisierung & ChatGPT für Unternehmen in Graz und online. Mach dein Team fit für die KI-Ära.",
        url: "https://dein-ranking.at/ki-workshop",
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
              { "@type": "ListItem", "position": 2, "name": "KI-Workshop" },
            ],
          }),
        }}
      />
      <Breadcrumb items={[{ label: "KI-Workshop" }]} />
      {children}
    </>
  );
}
