import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | KI & Automatisierung Referenzen – DeinRanking",
    description: "DeinRanking Case Studies: Echte KI & Automatisierungs-Projekte aus der Praxis. Entdecke messbare Ergebnisse und Referenzen unserer Kunden.",
    alternates: { canonical: "https://dein-ranking.at/casestudies" },
    openGraph: {
        title: "Case Studies | KI & Automatisierung Referenzen – DeinRanking",
        description: "DeinRanking Case Studies: Echte KI & Automatisierungs-Projekte aus der Praxis. Entdecke messbare Ergebnisse und Referenzen unserer Kunden.",
        url: "https://dein-ranking.at/casestudies",
        siteName: "DeinRanking",
        locale: "de_AT",
        type: "website",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
