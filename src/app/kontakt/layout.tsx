import type { Metadata } from "next";

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
    return <>{children}</>;
}
