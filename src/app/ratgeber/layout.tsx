import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "KI & SEO Ratgeber | Automatisierung Insights – DeinRanking",
    description: "Expertenwissen zu KI-Automatisierung, Voice AI und SEO von DeinRanking. Praxisnahe Artikel und Use Cases für Unternehmen im DACH-Raum. Jetzt lesen.",
    alternates: { canonical: "https://dein-ranking.at/ratgeber" },
    openGraph: {
        title: "KI & SEO Ratgeber | Automatisierung Insights – DeinRanking",
        description: "Expertenwissen zu KI-Automatisierung, Voice AI und SEO von DeinRanking. Praxisnahe Artikel und Use Cases für Unternehmen im DACH-Raum. Jetzt lesen.",
        url: "https://dein-ranking.at/ratgeber",
        siteName: "DeinRanking",
        locale: "de_AT",
        type: "website",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
