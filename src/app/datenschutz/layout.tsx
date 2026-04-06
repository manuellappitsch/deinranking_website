import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | DeinRanking GmbH",
  description: "Datenschutzerklärung der DeinRanking GmbH. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  alternates: { canonical: "https://dein-ranking.at/datenschutz" },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
