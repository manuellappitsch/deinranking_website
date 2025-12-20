import { ReactNode } from "react";

export interface CaseStudy {
    title: string;
    subtitle?: string;
    date: string;
    category: "Automatisierung" | "KI-Automatisierung" | "KI-Lösungen" | "Softwarelösungen";
    client: string;
    image: string;
    toc: { title: string; id: string; level: number }[];
    content: ReactNode;
}

export const caseStudies: Record<string, CaseStudy> = {
    "logistik-automatisierung": {
        title: "Logistik-Prozesse 100% automatisiert: Von der Bestellung bis zum Versand",
        subtitle: "Wie ein mittelständisches Logistikunternehmen durch Make.com und Custom-Scripting 25 Arbeitsstunden pro Woche einspart.",
        date: "10. Dez 2024",
        category: "Automatisierung",
        client: "Logistik GmbH (Anonymisiert)",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        toc: [
            { title: "Die Ausgangslage", id: "ausgangslage", level: 2 },
            { title: "Das Problem", id: "problem", level: 2 },
            { title: "Die Lösung", id: "loesung", level: 2 },
            { title: "Die Umsetzung", id: "umsetzung", level: 2 },
            { title: "Ergebnisse & ROI", id: "ergebnisse", level: 2 },
        ],
        content: (
            <>
                <p className="lead text-xl text-gray-300 mb-8">
                    Manuelle Dateneingabe, verlorene E-Mails und verzögerte Versandlabels waren gestern. Für unseren Kunden aus der Logistik-Branche haben wir eine End-to-End Automatisierung implementiert, die den gesamten Bestellprozess revolutioniert hat.
                </p>

                <h2 id="ausgangslage" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Die Ausgangslage</h2>
                <p className="mb-6">
                    Das Unternehmen wickelt täglich zwischen 50 und 150 B2B-Bestellungen ab. Diese Bestellungen kommen über verschiedene Kanäle herein: E-Mail (PDF-Anhänge), Webshop (Shopify) und EDI-Schnittstellen.
                </p>

                <h2 id="problem" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Das Problem</h2>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Hoher manueller Aufwand: Mitarbeiter mussten PDF-Bestellungen abtippen.</li>
                        <li>Fehleranfälligkeit: Tippfehler führten zu falschen Lieferadressen.</li>
                        <li>Verzögerung: Bestellungen nach 16 Uhr wurden oft erst am nächsten Tag bearbeitet.</li>
                        <li>Medienbrüche: Keine direkte Verbindung zwischen Shop und Lager-Software.</li>
                    </ul>
                </div>

                <h2 id="loesung" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Die Lösung</h2>
                <p className="mb-6">
                    Wir haben eine zentrale Automatisierungs-Logik mit **Make.com** entwickelt, die als "Verkehrspolizist" zwischen den Systemen agiert.
                </p>
                <p className="mb-4">Die Kernkomponenten:</p>
                <ul className="list-disc list-inside space-y-2 mb-8 text-gray-300 ml-4">
                    <li>**OCR-Parsing:** PDFs werden automatisch ausgelesen (Rechnungsnummer, Artikel, Menge).</li>
                    <li>**Daten-Standardisierung:** Egal ob Shop oder E-Mail, alle Daten werden in ein einheitliches JSON-Format umgewandelt.</li>
                    <li>**ERP-Sync:** Automatischer Push in das Warenwirtschaftssystem.</li>
                    <li>**Label-Druck:** Sobald die Ware gepackt ist, wird das Versandlabel automatisch generiert und gedruckt.</li>
                </ul>

                <h2 id="ergebnisse" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Ergebnisse & ROI</h2>
                <p className="mb-6">
                    Innerhalb von 4 Wochen nach Go-Live konnten folgende Ergebnisse gemessen werden:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-brand-green/10 p-6 rounded-xl border border-brand-green/20">
                        <div className="text-3xl font-bold text-brand-green mb-2">-25h</div>
                        <div className="text-sm text-gray-300">Arbeitszeit pro Woche im Backoffice eingespart</div>
                    </div>
                    <div className="bg-brand-green/10 p-6 rounded-xl border border-brand-green/20">
                        <div className="text-3xl font-bold text-brand-green mb-2">0%</div>
                        <div className="text-sm text-gray-300">Fehlerquote bei der Adressübernahme</div>
                    </div>
                    <div className="bg-brand-green/10 p-6 rounded-xl border border-brand-green/20">
                        <div className="text-3xl font-bold text-brand-green mb-2">+40%</div>
                        <div className="text-sm text-gray-300">Schnellere Durchlaufzeit pro Bestellung</div>
                    </div>
                </div>
            </>
        )
    },
    "ki-voicebot-handwerk": {
        title: "24/7 Erreichbarkeit im Handwerk: KI-Voicebot nimmt Termine an",
        subtitle: "Kein Anruf geht mehr ins Leere. Wie ein Sanitärbetrieb seine Terminbuchungen um 30% steigerte.",
        date: "05. Jan 2025",
        category: "KI-Lösungen",
        client: "Sanitär Müller",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
        toc: [
            { title: "Herausforderung", id: "herausforderung", level: 2 },
            { title: "Unsere KI-Lösung", id: "loesung", level: 2 },
            { title: "Technische Umsetzung", id: "tech", level: 2 },
            { title: "Resultat", id: "resultat", level: 2 },
        ],
        content: (
            <>
                <p className="lead text-xl text-gray-300 mb-8">
                    Auf der Baustelle ist es laut, die Hände sind voll zu tun. Wenn dann das Telefon klingelt, geht oft niemand ran. Für unseren Kunden bedeutete das: Verlorene Aufträge an die Konkurrenz.
                </p>

                <h2 id="herausforderung" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Herausforderung</h2>
                <p className="mb-6">
                    Der Kunde hatte eine missed-call Rate von fast 60%. Anrufbeantworter wurden von Anrufern oft ignoriert ("Ich ruf später nochmal an" - und sie riefen nie wieder an). Das Büro war nur halbtags besetzt.
                </p>

                <h2 id="loesung" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Unsere KI-Lösung</h2>
                <p className="mb-6">
                    Wir implementierten einen **KI-basierten Telefonassistenten** (Voice Agent), der natürlichsprachige Dialoge führen kann.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-8 text-gray-300 ml-4">
                    <li>Nimmt rund um die Uhr ab (auch am Wochenende).</li>
                    <li>Qualifiziert den Notfall (Wasserrohrbruch vs. Wartungstermin).</li>
                    <li>Hat Zugriff auf den Kalender und schlägt freie Termine vor.</li>
                    <li>Sendet eine Zusammenfassung per SMS an den Meister.</li>
                </ul>

                <h2 id="resultat" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Resultat</h2>
                <p className="mb-6">
                    Die Kunden waren begeistert von der sofortigen Erreichbarkeit. Der Betrieb wirkte modern und serviceorientiert.
                </p>
                <p className="font-bold text-brand-green text-xl">
                    "Seit wir den Bot haben, ist unser Kalender voll. Die Kunden feiern es, dass sofort jemand drangeht, auch sonntags."
                </p>
            </>
        )
    },
    "vibe-coding-dashboard": {
        title: "Internes Vertriebs-Dashboard in 3 Tagen statt 3 Monaten",
        subtitle: "Vibe-Coding in Action: Wie wir für ein Sales-Team ein maßgeschneidertes Performance-Tool bauten.",
        date: "20. Jan 2025",
        category: "Softwarelösungen",
        client: "TechStart Vertriebsagentur",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        toc: [
            { title: "Bedarf", id: "bedarf", level: 2 },
            { title: "Vibe-Coding Ansatz", id: "ansatz", level: 2 },
            { title: "Das Ergebnis", id: "ergebnis", level: 2 },
        ],
        content: (
            <>
                <p className="lead text-xl text-gray-300 mb-8">
                    Standard-CRMs wie Salesforce waren zu mächtig und langsam, Excel-Listen zu fehleranfällig. Der Kunde brauchte eine schnelle, leichte Lösung, um Leaderboards und Tagesziele zu visualisieren.
                </p>

                <h2 id="bedarf" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Der Bedarf</h2>
                <p className="mb-6">
                    Ein Gamification-Dashboard, das Live-Daten aus Pipedrive zieht und als Rennstrecke visualisiert. Budget für eine klassische Software-Agentur (30k€+) war nicht vorhanden. Zeitrahmen: "Am besten gestern".
                </p>

                <h2 id="ansatz" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Der Vibe-Coding Ansatz</h2>
                <p className="mb-6">
                    Statt wochenlanger Planung starteten wir direkt ins Coding mit KI-Unterstützung.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-8 text-gray-300 ml-4">
                    <li>**Tag 1:** Prototyping mit LLMs, Grundgerüst in Next.js.</li>
                    <li>**Tag 2:** Anbindung der Pipedrive API und Echtzeit-Updates.</li>
                    <li>**Tag 3:** Styling, "Polishing" und Deployment auf Vercel.</li>
                </ul>

                <h2 id="ergebnis" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Das Ergebnis</h2>
                <p className="mb-6">
                    Eine voll funktionsfähige Web-App, die auf jedem TV im Büro läuft. Das Team ist motivierter durch die direkte Sichtbarkeit der Erfolge.
                </p>
            </>
        )
    }
};
