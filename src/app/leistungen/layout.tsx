import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KI-Leistungen: Voice AI, Automatisierung & mehr | DeinRanking",
  description: "Alle KI-Leistungen der DeinRanking GmbH: KI-Telefonassistent, Automatisierung, lokale KI-Systeme, Workshops, Vibe-Coding und Förderberatung.",
  alternates: { canonical: "https://dein-ranking.at/leistungen" },
  openGraph: {
    title: "KI-Leistungen: Voice AI, Automatisierung & mehr | DeinRanking",
    description: "Alle KI-Leistungen der DeinRanking GmbH: KI-Telefonassistent, Automatisierung, lokale KI-Systeme, Workshops und mehr.",
    url: "https://dein-ranking.at/leistungen",
    siteName: "DeinRanking",
    locale: "de_AT",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
