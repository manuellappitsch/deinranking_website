import type { Metadata } from "next";

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
    return <>{children}</>;
}
