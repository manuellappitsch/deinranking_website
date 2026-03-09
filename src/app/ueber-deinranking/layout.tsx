import type { Metadata } from "next";

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
    return <>{children}</>;
}
