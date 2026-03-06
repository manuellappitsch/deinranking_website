# DeinRanking Website – CLAUDE.md

## Projektübersicht

Website der **DeinRanking GmbH** (Graz, Österreich) – eine Agentur für KI, Automatisierung und SEO.

- **Framework:** Next.js 16.1.0 (App Router)
- **React:** 19
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animationen:** Framer Motion
- **UI-Komponenten:** Radix UI
- **Icons:** Lucide React

## Entwicklung

```bash
npm run dev     # Startet Dev-Server auf Port 4000
npm run build   # Produktions-Build
npm run lint    # ESLint
```

Der Dev-Server läuft auf **http://localhost:4000** (nicht 3000!).

## Projektstruktur

```
src/
  app/                  # Next.js App Router Pages
    page.tsx            # Startseite
    layout.tsx          # Root Layout (Header, Footer, GTM, Cookiebot)
    ratgeber/           # Blog-Übersicht + [slug]/page.tsx
    casestudies/        # Case Studies Übersicht + [slug]/page.tsx
    ki-telefonassistent/
    ki-automatisierung/
    lokale-ki-systeme/
    seo-betreuung/
    seo-analyse/
    content-marketing/
    keywordrecherche/
    ki-workshop/
    ueber-deinranking/
    kontakt/
    impressum/
    datenschutz/
    agbs/
  components/
    layout/             # Header.tsx, Footer.tsx, PageLayout.tsx, ServicePage.tsx
    sections/           # Hero, Services, Benefits, Testimonials, About, Consultation
    ui/                 # Wiederverwendbare UI-Komponenten
    blog/               # BlogPostLayout, AuthorBox, TableOfContents
    case-studies/
    phone-assistant/
    seo/, keywords/, content/, local-ai/, workshop/, analyse/
  config/
    site.ts             # ZENTRALE Konfigurationsdatei – Texte, Nav, Services, Blog-Posts etc.
  lib/
    blog-data.tsx       # Blog-Post Inhalte (MDX-artig in TSX)
    case-studies-data.tsx
    utils.ts            # cn() Helper (clsx + tailwind-merge)
```

## Design-System

### Farben (Tailwind Custom Colors)
| Token | Hex | Verwendung |
|---|---|---|
| `brand-green` | `#76B041` | CTAs, Highlights, Akzente |
| `deep-navy` | `#050B19` | Hintergrundfarbe (Body) |
| `pure-white` | `#FFFFFF` | Text auf dunklem Hintergrund |
| `soft-gray` | `#F9FAFB` | Helle Bereiche |

### Font
- Schriftart: **Inter** (als Platzhalter für "Liebling"), CSS-Variable `--font-liebling`
- Tailwind-Klasse: `font-sans`

## Zentrale Konfiguration

**`src/config/site.ts`** ist die einzige Quelle für:
- Navigation (`mainNav`)
- Seitentexte (Hero, Services, Benefits, Testimonials, etc.)
- Blog-Post-Metadaten
- Case-Study-Metadaten
- Footer-Links und Social-Media-Links
- SEO-Konfiguration (GTM-ID, Cookiebot-ID)
- Impressum / Kontakt-Daten

Inhalte immer hier pflegen, nicht direkt in den Page-Komponenten.

## Tracking & Cookies

- **Google Tag Manager:** ID in `siteConfig.seo.gtmId` (aktuell Platzhalter `GTM-XXXXXXX`)
- **Cookiebot:** ID in `siteConfig.seo.cookiebotId`
- Eingebunden in `src/app/layout.tsx`

## Wichtige Konventionen

- **Alle Texte auf Deutsch** (Website richtet sich an den DACH-Raum)
- **noindex/nofollow** war zeitweise gesetzt – vor Live-Gang prüfen
- Neue Seiten als `page.tsx` im entsprechenden `src/app/[route]/` Ordner anlegen
- Service-Seiten nutzen `ServicePage`-Layout aus `src/components/layout/ServicePage.tsx`
- Blog-Posts werden in `src/lib/blog-data.tsx` als TSX-Komponenten definiert
- Path-Alias `@/` zeigt auf `src/`

## Unternehmen (Kontakt)

- **Firma:** DeinRanking GmbH, Gradnerstraße 120, 8054 Graz
- **Ansprechpartner:** Manuel Lappitsch
- **E-Mail:** office@dein-ranking.at
- **Tel:** +436767066333
- **UID:** ATU82286704
