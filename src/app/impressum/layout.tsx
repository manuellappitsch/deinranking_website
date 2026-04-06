import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | DeinRanking GmbH",
  description: "Impressum der DeinRanking GmbH. Geschäftsführer: Manuel Lappitsch. Sitz: Graz, Steiermark, Österreich.",
  alternates: { canonical: "https://dein-ranking.at/impressum" },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
