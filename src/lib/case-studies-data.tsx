import { ReactNode } from "react";

export interface CaseStudy {
    title: string;
    subtitle?: string;
    date: string;
    category: "Automatisierung" | "KI-Automatisierung" | "KI-Lösungen" | "Softwarelösungen" | "Social Media Ads";
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
    },
    "hartmann-erdbau-automatisierung": {
        title: "Lieferscheine 100% digital: Schluss mit der Zettelwirtschaft",
        subtitle: "Wie die Hartmann Erdbau GmbH durch HubSpot und digitale Protokolle ihre Maschinenvermietung papierlos und beweissicher machte.",
        date: "20. Feb 2025",
        category: "Automatisierung",
        client: "Hartmann Erdbau GmbH",
        image: "/images/case-studies/hartmann-erdbau/header.png",
        toc: [
            { title: "Das Problem", id: "problem", level: 2 },
            { title: "Die Lösung", id: "loesung", level: 2 },
            { title: "Die Umsetzung", id: "umsetzung", level: 2 },
            { title: "Ergebnisse & Vorteile", id: "ergebnisse", level: 2 },
        ],
        content: (
            <>
                <div className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <img
                        src="/images/case-studies/hartmann-erdbau/logo.png"
                        alt="Hartmann Erdbau Logo"
                        className="h-24 w-auto object-contain bg-white/10 p-2 rounded-lg"
                    />
                    <div>
                        <p className="text-xl text-gray-300 italic">
                            "Früher war der Lieferschein-Prozess mühsam und fehleranfällig. Heute läuft alles digital – von der Vorbereitung bis zur Unterschrift."
                        </p>
                    </div>
                </div>

                <p className="lead text-xl text-gray-300 mb-8">
                    Die Hartmann Erdbau GmbH vermietet Baumaschinen, doch der analoge Prozess der Lieferscheinabwicklung bremste das Geschäft aus. Dreifache Papierausfertigungen, fehlende Informationen vor Ort und mangelnde Dokumentation führten zu Ineffizienz und Haftungsrisiken.
                </p>

                <h2 id="problem" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Das Problem: Analoge Zettelwirtschaft</h2>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
                    <p className="mb-4 text-gray-300">Der alte Prozess war von manuellen Hürden geprägt:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>**Dreifacher Papieraufwand:** Lieferscheine mussten bei Übergabe und Rücknahme vor Ort handschriftlich ausgefüllt werden.</li>
                        <li>**Fehlende Vorbereitung:** Der Geschäftsführer konnte Lieferscheine für Mitarbeiter nicht digital vorkonfigurieren, was telefonische Rücksprachen erforderte.</li>
                        <li>**Informations-Silos:** Wichtige Kundendaten und Notizen lagen in Notizbüchern oder Köpfen einzelner Mitarbeiter, unzugänglich für das Team.</li>
                        <li>**Keine Beweissicherheit:** Es gab keine standardisierte Fotodokumentation. Bei Schäden war oft unklar, ob diese beim Kunden oder bereits vorher entstanden waren.</li>
                    </ul>
                </div>

                <h2 id="loesung" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Die Lösung: Integriertes CRM & Mobile Erfassung</h2>
                <p className="mb-6 text-gray-300">
                    Wir digitalisierten den gesamten Mietprozess durch die Einführung eines CRM-Systems (**HubSpot**) und eine mobile Lieferschein-Lösung.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-8 text-gray-300 ml-4">
                    <li>**Zentrales Daten-Hub:** Alle Kunden- und Auftragsdaten sind im CRM gespeichert und für alle berechtigten Mitarbeiter abrufbar.</li>
                    <li>**Vor-Ausfüllen:** Der Geschäftsführer kann Lieferscheine im Büro vorbereiten. Der Mitarbeiter vor Ort muss nur noch ergänzen und unterschreiben lassen.</li>
                    <li>**Mobile Abwicklung:** Lieferscheine und Rückgabeprotokolle werden direkt am Tablet oder Smartphone ausgefüllt.</li>
                    <li>**Automatische E-Mail:** Der Kunde erhält sofort nach der Unterschrift eine Kopie per E-Mail – kein Papierkram mehr.</li>
                </ul>

                <h2 id="umsetzung" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Fotodokumentation & Beweissicherheit</h2>
                <p className="mb-6 text-gray-300">
                    Ein Gamechanger war die integrierte Fotodokumentation. Bei der Übergabe und Rücknahme werden nun systematisch Fotos vom Zustand der Maschine gemacht.
                </p>
                <div className="bg-deep-navy/50 p-6 rounded-xl border border-brand-green/20 mb-8">
                    <p className="text-gray-300">
                        <strong className="text-brand-green">Der Vorteil:</strong> Diese Fotos werden automatisch im CRM beim jeweiligen Kundenauftrag abgelegt. Gibt es später Diskussionen über Schäden, lässt sich der Zustand zum Zeitpunkt der Übergabe lückenlos nachweisen. Das schafft Sicherheit für beide Seiten.
                    </p>
                </div>

                <h2 id="ergebnisse" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Ergebnisse</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <div className="text-xl font-bold text-white mb-2">100% Papierlos</div>
                        <p className="text-sm text-gray-300">Keine verlorenen Zettel mehr. Alles ist digital durchsuchbar und archiviert.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <div className="text-xl font-bold text-white mb-2">Transparenz</div>
                        <p className="text-sm text-gray-300">Jeder Mitarbeiter hat Zugriff auf relevante Informationen, ohne Rückfragen beim Chef.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <div className="text-xl font-bold text-white mb-2">Beweissicherheit</div>
                        <p className="text-sm text-gray-300">Fotodokumentation schützt vor ungerechtfertigten Schadensersatzforderungen.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <div className="text-xl font-bold text-white mb-2">Effizienz</div>
                        <p className="text-sm text-gray-300">Schnellere Übergaben und weniger Kommunikationsaufwand während der Aufträge.</p>
                    </div>
                </div>
            </>
        )
    },
    "zitadelle-social-ads": {
        title: "Mitglieder-Wachstum auf Autopilot",
        subtitle: "Wie der Kampfsportverein Zitadelle durch gezielte Social Media Ads auf TikTok & Instagram konstant neue Mitglieder gewinnt – bei Lead-Preisen unter 20 €.",
        date: "19. Dez 2025",
        category: "Social Media Ads",
        client: "Zitadelle Graz",
        image: "/images/case-studies/zitadelle/header.jpg",
        toc: [
            { title: "Die Strategie", id: "strategie", level: 2 },
            { title: "Creative Testing", id: "creatives", level: 2 },
            { title: "Ergebnisse", id: "ergebnisse", level: 2 },
        ],
        content: (
            <>
                <div className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <img
                        src="/images/case-studies/zitadelle/logo.png"
                        alt="Zitadelle Logo"
                        className="h-24 w-auto object-contain"
                    />
                    <div>
                        <p className="text-xl text-gray-300 italic">
                            "Die Ads bringen uns enorme Sicherheit und Ruhe. Wir haben einen Kanal, über den nachweislich und regelmäßig neue Mitglieder kommen."
                        </p>
                    </div>
                </div>

                <p className="lead text-xl text-gray-300 mb-8">
                    Seit Ende 2023 unterstützen wir den Kampfsportverein Zitadelle mit Performance Marketing auf Facebook, Instagram und TikTok. Was als Low-Budget-Test für Kinderkurse begann, ist heute ein entscheidender Wachstumsmotor für den gesamten Verein.
                </p>

                <h2 id="strategie" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Vom Low-Budget-Start zum Wachstumsmotor</h2>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
                    <p className="mb-4 text-gray-300">Zu Beginn setzten wir auf eine simple, aber effiziente Strategie:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>**Fokus auf Kinderkurse:** Start mit geringem Budget, um die Resonanz zu testen.</li>
                        <li>**Günstige Preise:** Das Angebot war niedrigschwellig, was die Hürde für den Einstieg senkte.</li>
                        <li>**Stetiges Wachstum:** Die Abo-Zahlen stiegen kontinuierlich, was uns erlaubte, das Budget schrittweise zu erhöhen und die Strategie auszuweiten.</li>
                    </ul>
                </div>

                <h2 id="creatives" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Weekly Creative Loop</h2>
                <p className="mb-6 text-gray-300">
                    Der Schlüssel zum langfristigen Erfolg war die ständige Weiterentwicklung der Werbemittel (Creatives). Wir ruhten uns nicht auf ersten Erfolgen aus.
                </p>
                <div className="bg-deep-navy/50 p-6 rounded-xl border border-brand-green/20 mb-8">
                    <p className="text-gray-300">
                        Wir etablierten einen **wöchentlichen Liefer-Rhythmus** für neue Creatives. Durch dieses ständige Testen von neuen Bildern, Videos und Hooks konnten wir:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300 ml-4">
                        <li>Die Anzeigenqualität massiv steigern.</li>
                        <li>Ermüdungseffekte (Ad Fatigue) vermeiden.</li>
                        <li>Die Lead-Preise (CPL) langfristig senken.</li>
                    </ul>
                </div>

                <h2 id="ergebnisse" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Ergebnisse</h2>
                <p className="mb-8 text-gray-300">
                    Performance Marketing ist für die Zitadelle in den letzten 1,5 Jahren zum entscheidenden Faktor im Mitgliederwachstum geworden.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                        <div className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Lead-Preis (CPL)</div>
                        <div className="text-3xl font-bold text-white mb-1">15 - 20 €</div>
                        <div className="text-xs text-brand-green">Stabil günstig</div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                        <div className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Plattformen</div>
                        <div className="text-xl font-bold text-white mb-1">Meta & TikTok</div>
                        <div className="text-xs text-brand-green">Full Funnel</div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                        <div className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Impact</div>
                        <div className="text-xl font-bold text-white mb-1">Planbares Wachstum</div>
                        <div className="text-xs text-brand-green">Zusätzlicher Vertriebskanal</div>
                    </div>
                </div>
            </>
        )
    },
    "ninjabox-social-ads": {
        title: "Full House zur Eröffnung: 1.000 Follower in 4 Wochen",
        subtitle: "Wie die NINJABOX Graz den Standortwechsel nutzte, um mit Pre-Opening Ads eine massive Community aufzubauen und Kurse sofort zu füllen.",
        date: "19. Okt 2025",
        category: "Social Media Ads",
        client: "NINJABOX Graz",
        image: "/images/case-studies/ninjabox/header.png",
        toc: [
            { title: "Die Herausforderung", id: "herausforderung", level: 2 },
            { title: "Pre-Opening Kampagne", id: "pre-opening", level: 2 },
            { title: "Ergebnisse", id: "ergebnisse", level: 2 },
            { title: "Langfristige Zusammenarbeit", id: "zusammenarbeit", level: 2 },
        ],
        content: (
            <>
                <div className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <img
                        src="/images/case-studies/ninjabox/logo.png"
                        alt="NINJABOX Logo"
                        className="h-24 w-auto object-contain bg-white p-2 rounded-lg"
                    />
                    <div>
                        <p className="text-xl text-gray-300 italic">
                            "Social Media Ads sind für uns heute nicht mehr wegzudenken. Was als 6-Monats-Projekt begann, ist jetzt fester Bestandteil unseres Marketings."
                        </p>
                        <p className="text-brand-green mt-4 font-bold">– NINJABOX Team</p>
                    </div>
                </div>

                <p className="lead text-xl text-gray-300 mb-8">
                    Mitte 2025 zog die NINJABOX von einem ländlichen Standort direkt nach Graz. Ziel war es, die größere Fläche und die bessere Erreichbarkeit zu nutzen, um die Marke Ninja Sport einer breiten Masse bekannt zu machen.
                </p>

                <h2 id="herausforderung" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Die Mission: Bekanntheit vor Eröffnung</h2>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
                    <p className="mb-4 text-gray-300">Es war klar: Wir dürfen nicht erst am Tag der Eröffnung mit dem Marketing beginnen.</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>**Standortwechsel:** Die Zielgruppe in Graz musste erst aktiviert werden.</li>
                        <li>**Reichweiten-Boost:** Ziel war es, die Bekanntheit in der Stadt noch vor dem ersten Öffnungstag drastisch zu steigern.</li>
                        <li>**Grand Opening:** Die Eröffnungsfeier sollte ein voller Erfolg werden.</li>
                    </ul>
                </div>

                <h2 id="pre-opening" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Die Pre-Opening Kampagne</h2>
                <p className="mb-6 text-gray-300">
                    Einen Monat vor dem Start schalteten wir die ersten Anzeigen. Mit einem Werbebudget von nur **900 € im Monat** fokussierten wir uns voll auf den Aufbau einer Community.
                </p>
                <div className="bg-deep-navy/50 p-6 rounded-xl border border-brand-green/20 mb-8">
                    <p className="text-gray-300">
                        <strong className="text-brand-green">Der Effekt:</strong> Allein im ersten Monat gewannen wir **über 1.000 neue Instagram-Follower**. Die Eröffnungsfeier war bestens besucht, weil die Leute schon Wochen vorher "angewärmt" wurden.
                    </p>
                </div>

                <h2 id="ergebnisse" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Volle Kurse & Profitabilität</h2>
                <p className="mb-8 text-gray-300">
                    Nach dem Opening verlagerten wir den Fokus auf die Bewerbung der Kurse und des freien Trainings.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                        <div className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Community</div>
                        <div className="text-3xl font-bold text-white mb-1">+1.000</div>
                        <div className="text-xs text-brand-green">Follower in 30 Tagen</div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                        <div className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Budget</div>
                        <div className="text-3xl font-bold text-white mb-1">900 €</div>
                        <div className="text-xs text-brand-green">Monatliches Ad-Spend</div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                        <div className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Auslastung</div>
                        <div className="text-xl font-bold text-white mb-1">Ausgebucht</div>
                        <div className="text-xs text-brand-green">Kinder- & Erwachsenenkurse</div>
                    </div>
                </div>

                <h2 id="zusammenarbeit" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Vom Projekt zum Partner</h2>
                <p className="mb-6 text-gray-300">
                    Die schnelle Umsetzung neuer Aktionen und die reibungslose Kommunikation waren entscheidend. Die Anzeigen waren von Beginn an profitabel. Aus einem ursprünglich auf 6 Monate geplanten Projekt wurde eine unbefristete Partnerschaft. Social Media Ads sind heute ein fester, unverzichtbarer Bestandteil der Wachstumsstrategie der NINJABOX.
                </p>
            </>
        )
    }
};
