import { ReactNode } from "react";
import Image from "next/image";

export interface BlogPost {
    title: string;
    subtitle?: string;
    date: string;
    category: string;
    author: string;
    image: string;
    toc: { title: string; id: string; level: number }[];
    content: ReactNode;
}

export const blogPosts: Record<string, BlogPost> = {
    "make-com": {
        title: "Make.com: Automatisierung für dein Business, ohne Programmierkentnisse",
        subtitle: "Wie du mit Make.com Prozesse automatisierst, Zeit sparst und dein Unternehmen skalierst – ganz ohne Code.",
        date: "17. August 2025",
        category: "Automatisierung",
        author: "Manuel Lappitsch",
        image: "/images/blog/make-com/hero.jpg",
        toc: [
            { title: "Was ist Make.com?", id: "was-ist-make-com", level: 2 },
            { title: "Die Grundlagen", id: "grundlagen", level: 2 },
            { title: "Was sind Szenarien?", id: "szenarien", level: 3 },
            { title: "Trigger", id: "trigger", level: 3 },
            { title: "Module", id: "module", level: 3 },
            { title: "Vergleich: Zapier & n8n", id: "vergleich", level: 2 },
            { title: "Praxisbeispiele", id: "praxisbeispiele", level: 2 },
            { title: "Fortgeschrittene Möglichkeiten", id: "fortgeschritten", level: 2 },
            { title: "Make AI Agents", id: "ai-agents", level: 2 },
            { title: "Lernressourcen", id: "lernressourcen", level: 2 },
            { title: "Fazit", id: "fazit", level: 2 },
        ],
        content: (
            <>
                <p className="lead text-xl text-gray-300 mb-8">
                    Stell dir vor, viele deiner täglichen Aufgaben laufen völlig automatisch ab. Kundenanfragen landen direkt in deiner Datenbank, Rechnungen werden automatisch sortiert und Social Media Inhalte veröffentlichen sich fast von selbst. Das und noch viel mehr ermöglicht dir Make.com.
                </p>
                <p className="mb-6">
                    Der große Vorteil dabei ist, dass du keine Programmierkenntnisse brauchst. Alles funktioniert über eine einfache, visuelle Oberfläche, bei der du Arbeitsschritte und Tools wie Bausteine miteinander verbindest. So kannst du in wenigen Minuten bestehende Prozesse automatisieren und sparst dir täglich viele Stunden Arbeit.
                </p>
                <p className="mb-4">Make.com bringt dir gleich mehrere Pluspunkte:</p>
                <ul className="list-disc list-inside space-y-2 mb-8 text-gray-300 ml-4">
                    <li><strong>Zeitersparnis:</strong> Wiederkehrende Aufgaben laufen automatisch im Hintergrund.</li>
                    <li><strong>Fehlerreduzierung:</strong> Manuelle Übertragungsfehler gehören der Vergangenheit an.</li>
                    <li><strong>Flexibilität:</strong> Ob E-Mails, CRM, Social Media oder ERP-Systeme. Mit Make kannst du nahezu alle digitalen Tools miteinander verbinden.</li>
                    <li><strong>Skalierbarkeit:</strong> Von kleinen Einzelschritten bis hin zu komplexen Unternehmensprozessen ist alles möglich.</li>
                    <li><strong>Kostenersparnis:</strong> Statt zusätzliche Mitarbeiter für Routineaufgaben einzusetzen, übernimmt die Automatisierung einen Großteil dieser Arbeit.</li>
                </ul>
                <p className="mb-12">
                    Mit Make.com automatisierst du deine täglichen Abläufe so, dass viele wiederkehrende Aufgaben von allein im Hintergrund laufen. Besonders spannend ist die Möglichkeit, KI einzubinden, etwa durch ChatGPT, DeepSeek oder die neue AI Agent-Funktion in Make.com.
                </p>

                <h2 id="was-ist-make-com" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Was ist Make.com?</h2>
                <p className="mb-6">
                    Make.com ist eine visuelle Automatisierungsplattform, die unterschiedliche Apps und digitale Systeme miteinander verbindet. Anstatt Arbeitsschritte mühsam manuell zu erledigen, wie das Kopieren von Daten aus einer E-Mail in eine Excel-Tabelle oder das manuelle Versenden von Bestätigungen etc., übernimmt Make.com diese Abläufe automatisch.
                </p>
                <p className="mb-12">
                    Make.com ist besonders interessant, weil du keinerlei Programmierkenntnisse brauchst. Dank der einfachen Drag-and-Drop-Oberfläche kannst du Workflows intuitiv erstellen, ohne technischen Hintergrund. Genau deshalb ist Make.com nicht nur für große Konzerne, sondern auch für kleine und mittlere Unternehmen eine ideale Lösung, um Digitalisierung und Effizienzsteigerung praktisch umzusetzen.
                </p>

                <h2 id="grundlagen" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Die Grundlagen: Szenarien, Trigger und Module</h2>
                <p className="mb-6">
                    Bevor du eigene Automatisierungen in Make.com erstellst, solltest du die Grundlagen verstehen. Szenarien, Trigger und Module bilden das Fundament jeder Make-Automatisierung und genau diese drei Bausteine schauen wir uns jetzt an.
                </p>

                <h3 id="szenarien" className="text-2xl font-bold text-white mb-4 scroll-mt-32">Was sind Szenarien?</h3>
                <p className="mb-6">
                    In Make.com nennt man einen Automatisierungsablauf Szenario. Ein Szenario ist im Grunde ein Workflow, der aus mehreren verbundenen Schritten besteht. Er beginnt immer mit einem Auslöser (Trigger) und führt anschließend automatisch eine festgelegte Abfolge von Aktionen aus.
                </p>
                <p className="mb-6 italic border-l-4 border-brand-green pl-4">
                    Ein einfaches Beispiel wäre: „Neue E-Mail kommt an → ChatGPT analysiert den Inhalt → E-Mail wird in den passenden Ordner verschoben.“
                </p>
                <p className="mb-8">
                    Szenarien können sehr schlicht sein, wie das Verschieben einer Datei in einen bestimmten Ordner. Sie können aber auch hochkomplex werden, zum Beispiel eine komplette Auftragsabwicklung, die Kundendaten erfasst, Rechnungen erstellt und Benachrichtigungen an das Team sendet. Egal, wie groß oder klein der Ablauf ist, Make.com erledigt ihn zuverlässig im Hintergrund.
                </p>

                <h3 id="trigger" className="text-2xl font-bold text-white mb-4 scroll-mt-32">Trigger</h3>
                <p className="mb-4">
                    Ein Trigger ist das Startsignal, das ein Szenario in Gang setzt. Ohne Trigger passiert nichts. Make.com bietet zwei Hauptarten:
                </p>
                <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-300 ml-4">
                    <li><strong>Zeitgesteuerte Trigger:</strong> Das Szenario startet in festen Abständen, z. B. alle 15 Minuten, einmal pro Stunde oder täglich um 8 Uhr.</li>
                    <li><strong>Ereignisgesteuerte Trigger:</strong> Das Szenario startet, sobald ein bestimmtes Ereignis eintritt.</li>
                </ol>
                <p className="mb-4">Beispiele für ereignisgesteuerte Trigger:</p>
                <ul className="list-disc list-inside space-y-2 mb-8 text-gray-300 ml-4">
                    <li>Ein neues Formular wird auf deiner Website ausgefüllt</li>
                    <li>Eine neue E-Mail trifft im Posteingang ein</li>
                    <li>Ein neuer Datensatz wird in einer Tabelle gespeichert</li>
                    <li>Ein Webhook empfängt Daten von einem externen Tool</li>
                </ul>
                <p className="mb-8">Trigger sind die Basis jeder Automatisierung, denn sie legen fest, wann das Szenario starten soll.</p>

                <h3 id="module" className="text-2xl font-bold text-white mb-4 scroll-mt-32">Module</h3>
                <p className="mb-6">
                    Ein Modul ist einfach ein Bestandteil deines Szenarios, also ein einzelner Schritt, der eine konkrete Aufgabe übernimmt. Du kannst dir Module wie Bausteine vorstellen, die du miteinander kombinierst, um deinen Workflow aufzubauen.
                </p>
                <p className="mb-4">Das Spannende dabei: Es gibt bereits tausende vorgefertigte Module von externen Tools, die du direkt nutzen kannst. Beispiele sind:</p>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 ml-4">
                    <li><strong>Gmail</strong> für den Versand oder die Verarbeitung von E-Mails</li>
                    <li><strong>Google Sheets</strong> zum Erstellen und Aktualisieren von Tabellen</li>
                    <li><strong>Slack oder Microsoft Teams</strong> für automatische Benachrichtigungen</li>
                    <li><strong>ChatGPT oder DeepSeek</strong> für die Textgenerierung und Analyse</li>
                </ul>
                <p className="mb-12">
                    Darüber hinaus stellt Make.com auch eigene System-Module bereit. Diese helfen dir, deine Szenarien noch flexibler zu gestalten, etwa durch Router, Filter oder Iteratoren, mit denen du Daten verzweigen, filtern oder in kleinere Teile zerlegen kannst.
                </p>

                <h2 id="vergleich" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Make.com im Vergleich zu Zapier und N8N</h2>
                <p className="mb-6">
                    Wenn es um Automatisierung geht, tauchen neben Make.com oft zwei weitere Namen auf: Zapier und n8n. Alle drei Tools lösen grundsätzlich dasselbe Problem und zwar die gleichen wiederkehrenden Prozesse zu automatisieren.
                </p>
                <p className="mb-6">
                    Alle drei Plattformen erlauben Automatisierung ohne Code. Trotzdem unterscheiden sie sich deutlich in Zielgruppe, Flexibilität und Einsatzbereich:
                </p>
                <div className="space-y-6 mb-12">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h4 className="text-lg font-bold text-brand-green mb-2">Make.com</h4>
                        <p>Punktet mit einer visuellen Workflow-Oberfläche, die komplexe Automatisierungen unterstützt und gleichzeitig übersichtlich bleibt. Durch vordefinierte Module und Steuerelemente wie Router und Iteratoren kannst du Workflows flexibel gestalten, ganz ohne Programmieren. Das macht Make besonders geeignet für KMU, Selbstständige und Nicht-Techniker, die Automatisierungen selbst umsetzen möchten.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h4 className="text-lg font-bold text-brand-green mb-2">Zapier</h4>
                        <p>Ist ideal für Einsteiger und Teams, die einfache Automatisierungen schnell und unkompliziert umsetzen möchten wie z.B. Standard-Apps verknüpfen. Die Oberfläche ist sehr linear strukturiert, aber bei komplexeren Abläufen stößt man schnell an Grenzen.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h4 className="text-lg font-bold text-brand-green mb-2">n8n</h4>
                        <p>Ist dagegen ein Tool für Technik-affine Nutzer und Entwickler. Es bietet volle Kontrolle durch Selbst-Hosting und offene Architektur was sich gut für komplexe Workflows eignet. Nutzer berichten, dass man durch das visuelle Node-Interface präzise sehen kann, wie die Daten fließen und so besser debuggen kann.</p>
                    </div>
                </div>

                <h2 id="praxisbeispiele" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Praxisbeispiele für Make.com</h2>
                <p className="mb-8">
                    Viele können sich unter „Automatisierung“ zunächst wenig Konkretes vorstellen. Deshalb schauen wir uns jetzt ein paar praxisnahe Beispiele an, wie Make.com im Alltag eingesetzt wird. So bekommst du ein klares Bild davon, wie Workflows tatsächlich aussehen.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">Beispiel 1: Anfragen automatisieren</h3>
                <p className="mb-4">
                    Stell dir einen Maler- oder Installateurbetrieb vor, der täglich mehrere Anfragen über das Kontaktformular auf seiner Website erhält. Normalerweise muss jemand jede Anfrage manuell ins CRM oder in eine Kundenliste übertragen, dem Interessenten antworten und die Anfrage an den richtigen Mitarbeiter weiterleiten. Das kostet Zeit und sorgt oft für Verzögerungen.
                </p>
                <p className="mb-4">Mit Make.com läuft das deutlich einfacher ab:</p>
                <ul className="list-none space-y-2 mb-6 text-gray-300 ml-4">
                    <li>→ Neue Anfrage über das Kontaktformular (z.B. in Elementor)</li>
                    <li>→ Automatische Speicherung der Daten im CRM (z. B. HubSpot oder ToolTime)</li>
                    <li>→ Sofortige Bestätigungsmail an den Kunden, dass die Anfrage eingegangen ist</li>
                    <li>→ Benachrichtigung an den zuständigen Mitarbeiter per E-Mail oder direkt im CRM.</li>
                </ul>
                <p className="mb-8">
                    Das Ergebnis: Alle Anfragen landen zuverlässig im System, kein Kontakt geht verloren, und Kunden erhalten sofort eine Rückmeldung. Der Betrieb wirkt professioneller, spart Zeit bei der Verwaltung und kann Angebote schneller vorbereiten.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">Beispiel 2: Bestellungen automatisieren</h3>
                <p className="mb-4">
                    In vielen Industrieunternehmen laufen Bestellungen von Händlern oder Zulieferern per E-Mail oder über ein Bestellformular ein. Normalerweise müssen diese Bestelldaten manuell von den Mitarbeitern in das ERP-System (z. B. SAP, proAlpha oder SelectLine) übertragen werden. Ein aufwändiger Prozess, bei dem schnell Tippfehler entstehen und wertvolle Zeit verloren geht.
                </p>
                <p className="mb-4">Mit Make.com lässt sich dieser Ablauf komplett automatisieren:</p>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 ml-4">
                    <li>Eine neue Bestellung trifft im Posteingang ein oder wird über ein Formular abgeschickt.</li>
                    <li>Make.com liest die relevanten Daten automatisch aus (Kundendaten, Bestellnummer, Artikel, Menge etc.).</li>
                    <li>Die Informationen werden direkt ins ERP-System übertragen.</li>
                    <li>Der Händler erhält automatisch eine Bestellbestätigung per E-Mail.</li>
                </ul>
                <p className="mb-8">
                    Der gesamte Prozess läuft fehlerfrei und in Echtzeit ab. Mitarbeiter sparen nicht nur Zeit, sondern können sich auf wertschöpfende Tätigkeiten konzentrieren, während die Kunden eine schnellere und zuverlässigere Bestellabwicklung erleben.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">Beispiel 3: E-Mails automatisch kategorisieren</h3>
                <p className="mb-4">
                    Jeder kennt es: Der Posteingang quillt über, und Mitarbeiter verbringen Stunden damit, E-Mails zu lesen, zu sortieren und in Ordner zu verschieben.
                </p>
                <p className="mb-4">Mit Make.com lässt sich dieser Prozess in Minuten automatisieren. Ein Beispiel:</p>
                <ul className="list-none space-y-2 mb-8 text-gray-300 ml-4">
                    <li>→ Neue E-Mail trifft ein</li>
                    <li>→ Inhalt wird durch ChatGPT analysiert</li>
                    <li>→ Automatische Kategorisierung: „Wichtig“ oder „Spam“</li>
                    <li>→ Verschiebung in den passenden Ordner.</li>
                </ul>

                <h2 id="fortgeschritten" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Fortgeschrittene Möglichkeiten mit Make.com</h2>
                <p className="mb-8">
                    Natürlich gibt es bei Make.com noch viele weitere fortgeschrittene Funktionen, die den Rahmen dieses Artikels bei weitem sprengen würden. Damit du aber ein Gefühl dafür bekommst, welche Features dir als erfahrener Nutzer immer wieder begegnen, zeige ich dir hier zwei der wichtigsten Bereiche.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">API-Calls</h3>
                <p className="mb-6">
                    Während viele Apps bereits über fertige Integrationen in Make.com verfügen, gibt es immer wieder Spezial-Tools oder Systeme, die nicht direkt angebunden sind. Genau hier kommen API-Calls ins Spiel.
                    Eine API (Application Programming Interface) ist eine standardisierte Schnittstelle, über die zwei Systeme Informationen austauschen können. Mit dem HTTP-Modul in Make.com kannst du solche API-Calls selbst erstellen. Dadurch bist du nicht mehr auf bestehende Module angewiesen, sondern kannst praktisch jedes Tool mit Make.com verbinden, solange es eine API anbietet.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">KI-Integration</h3>
                <p className="mb-4">
                    Ein Bereich, der in den letzten Jahren massiv an Bedeutung gewonnen hat, ist die Integration von Künstlicher Intelligenz (KI) in Automatisierungen. Make.com ermöglicht es dir, Large Language Models (LLMs) wie ChatGPT, DeepSeek, Claude oder GPT-4 direkt in deine Workflows einzubinden.
                </p>
                <p className="mb-4">Praktische Anwendungsfälle sind zum Beispiel:</p>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 ml-4">
                    <li><strong>Texterstellung:</strong> Automatische Erstellung von Social Media Posts, E-Mail-Vorlagen oder Produktbeschreibungen.</li>
                    <li><strong>Analyse:</strong> Automatisches Zusammenfassen von Kundennachrichten oder Sortieren von Support-Anfragen nach Wichtigkeit.</li>
                    <li><strong>Kategorisierung:</strong> KI erkennt Muster und sortiert Daten, Dokumente oder E-Mails in die richtigen Kategorien.</li>
                </ul>
                <p className="mb-12">
                    Durch die Verbindung von Automatisierung und KI entsteht ein enormes Potenzial: Prozesse werden nicht nur schneller, sondern auch intelligenter. Besonders spannend ist, dass du die LLMs mit passenden Prompts oder zusätzlichen Kontextdaten steuern kannst, sodass die Ergebnisse genau auf deine Anforderungen zugeschnitten sind.
                </p>

                <h2 id="ai-agents" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Make AI Agents</h2>
                <p className="mb-6">
                    Falls du noch nicht weißt, was AI Agents sind, habe ich hier eine kurze Zusammenfassung für dich: Make hat vor kurzem ein neues Feature eingeführt, die AI Agents. Einfach erklärt sind das digitale Assistenten, die du einmal einrichtest und die danach selbstständig Aufgaben erledigen können. Anders als klassische Szenarien musst du ihnen nicht für jeden Ablauf Regeln vorgeben. Make-Agents verstehen dein Ziel in natürlicher Sprache, greifen auf die Szenarien zurück, die du ihnen zuweist, und führen die notwendigen Schritte automatisch aus.
                </p>
                <p className="mb-12">
                    So kannst du dir wiederverwendbare „digitale Teammitglieder“ bauen, die dich in verschiedensten Prozessen unterstützen. Das macht deine Automatisierungen deutlich flexibler, weil der Agent nicht nur starr eine Abfolge abarbeitet, sondern eigenständig entscheidet, welches Szenario für deine Aufgabe am besten geeignet ist.
                </p>

                <h2 id="lernressourcen" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Lernressourcen und Community</h2>
                <p className="mb-6">
                    Make.com stellt dir eine eigene Akademie mit Schritt-für-Schritt-Kursen zur Verfügung, außerdem findest du in der Community zahlreiche Diskussionen, Beispiele und Hilfestellungen. Zusätzlich gibt es eine große Auswahl an Templates, die dir als Vorlage für eigene Workflows dienen können. So musst du nicht immer bei null anfangen, sondern kannst bewährte Szenarien einfach an deine Bedürfnisse anpassen.
                </p>
                <p className="mb-6">
                    Wenn du beschließt, dich selbst in Make.com einzuarbeiten, dann erfordert das zwar etwas Zeit und Geduld, aber sie zahlt sich langfristig definitiv aus. Schon nach kurzer Übungsphase wirst du merken, wie leicht sich auch komplexere Prozesse mit wenigen Klicks automatisieren lassen.
                </p>
                <p className="mb-12">
                    Der Großteil der offiziellen Dokumentation und der Tutorials ist aktuell auf Englisch verfügbar. Für viele Nutzer ist das keine unüberwindbare Hürde, macht es aber manchmal etwas schwieriger, Inhalte schnell zu verstehen. Genau aus diesem Grund habe ich auf meinem YouTube-Kanal zahlreiche Videos auf Deutsch erstellt, die dir den Einstieg erleichtern.
                </p>

                <h2 id="fazit" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Fazit: Warum Make.com die richtige Wahl ist</h2>
                <p className="mb-6">
                    Make.com bietet eine intuitive, visuelle Oberfläche und ist gleichzeitig so flexibel, dass sich nahezu jedes Tool damit verbinden lässt. Mit dem neuen AI-Agent-Feature zeigt Make.com, dass sie immer am Zahn der Zeit sind und komplexe Automatisierung auch über ihre No Code-Plattform gebaut werden können.
                </p>
                <p className="mb-6">
                    Besonders stark ist die Plattform durch ihre Übersichtlichkeit: Szenarien lassen sich per Drag-and-Drop aufbauen, sofort testen und flexibel anpassen. Damit ist Make.com nicht nur für jedes Unternehmen interessant, dass Prozesse automatisieren möchte.
                </p>
                <p>
                    Dazu kommt eine sehr gute Lernplattform mit Tutorials, Vorlagen und einer aktiven Community, sodass wirklich jeder Schritt für Schritt einsteigen kann.
                </p>
            </>
        )


    },
    "ki-im-marketing": {
        title: "KI im Marketing: Was KMU 2026 wirklich einsetzen",
        subtitle: "8 konkrete Use Cases, Tools mit Preisen & Praxis-Tipps von einer KI-Agentur aus Graz.",
        date: "6. April 2026",
        category: "KI Marketing",
        author: "Manuel Lappitsch",
        image: "/images/blog/ki-im-marketing/hero.jpg",
        toc: [
            { title: "Was \"KI im Marketing\" eigentlich heißt", id: "was-ki-im-marketing-heisst", level: 2 },
            { title: "8 Marketing-Use-Cases für KMU", id: "use-cases", level: 2 },
            { title: "Zielgruppenanalyse & Persona-Building", id: "zielgruppenanalyse", level: 3 },
            { title: "Content-Erstellung", id: "content-erstellung", level: 3 },
            { title: "E-Mail-Marketing & Newsletter", id: "email-marketing", level: 3 },
            { title: "Ad-Creative-Generierung", id: "ad-creative", level: 3 },
            { title: "Lead-Qualifizierung & Scoring", id: "lead-scoring", level: 3 },
            { title: "Kundenfeedback & Sentiment-Analyse", id: "sentiment-analyse", level: 3 },
            { title: "SEO & Content-Optimierung", id: "seo-content", level: 3 },
            { title: "Telefonische Lead-Qualifizierung", id: "voice-ai-leads", level: 3 },
            { title: "Welche Tools brauchst du?", id: "tools", level: 2 },
            { title: "KI-Marketing und DSGVO", id: "dsgvo", level: 2 },
            { title: "3-Schritte-Plan für KMU", id: "einstieg", level: 2 },
            { title: "Was KI im Marketing NICHT kann", id: "grenzen", level: 2 },
            { title: "Häufig gestellte Fragen", id: "faq", level: 2 },
        ],
        content: (
            <>
                {/* TL;DR */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
                    <p className="text-sm font-semibold text-brand-green mb-3">TL;DR</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>KI im Marketing ist 2026 kein Hype mehr, sondern Standardwerkzeug — über 70% der KMU in DACH nutzen es bereits aktiv</li>
                        <li>Die 3 Use Cases mit dem größten ROI für KMU: Content-Erstellung, E-Mail-Automatisierung und telefonische Lead-Qualifizierung</li>
                        <li>Du brauchst keine Programmierkenntnisse und kein riesiges Budget — mit 50-300€/Monat kannst du sofort starten</li>
                    </ul>
                </div>

                <p className="lead text-xl text-gray-300 mb-8">
                    Ich sag dir was: 90% der Artikel über &quot;KI im Marketing&quot; sind von Leuten geschrieben, die selbst kein Marketing machen. Die labern über &quot;Paradigmenwechsel&quot; und &quot;transformative Potenziale&quot; — und am Ende weißt du immer noch nicht, was du am Montag konkret anders machen sollst.
                </p>
                <p className="mb-6">
                    Des ändern wir jetzt.
                </p>
                <p className="mb-12">
                    Ich bin Manuel, Gründer von DeinRanking. Wir sind eine KI-Agentur aus Graz und setzen KI täglich im Marketing ein — für uns selbst und für unsere Kunden. Was du hier liest, ist kein theoretisches Geschwätz, sondern das, was bei uns und unseren Kunden in der Praxis funktioniert.
                </p>

                <h2 id="was-ki-im-marketing-heisst" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Was &quot;KI im Marketing&quot; eigentlich heißt (und was nicht)</h2>
                <p className="mb-6">
                    Lass uns kurz aufräumen, weil der Begriff &quot;KI im Marketing&quot; wild herumgeworfen wird.
                </p>
                <p className="mb-6">
                    <strong>KI im Marketing heißt:</strong> Du nutzt künstliche Intelligenz, um Marketing-Aufgaben schneller, besser oder automatisiert zu erledigen. Das kann ein ChatGPT-Prompt sein, ein automatisierter E-Mail-Flow oder ein KI-Telefonassistent, der Leads qualifiziert.
                </p>
                <p className="mb-6">
                    <strong>KI im Marketing heißt NICHT:</strong> Du lässt ChatGPT einen Blogpost ausspucken und klatscht den 1:1 auf deine Website. Des is kein KI-Marketing — des is Faulheit. Und Google straft dich dafür ab.
                </p>
                <p className="mb-6">
                    Der Unterschied? <strong>KI als Werkzeug vs. KI als Ersatz.</strong> Ein Tischler verwendet eine elektrische Säge, aber die Säge baut keinen Schrank. Genauso nutzt du KI, um dein Marketing zu verstärken — aber die Strategie, die Ideen und das Kundenverständnis kommen von dir.
                </p>
                <p className="mb-12">
                    Gartner sagt, dass bis Ende 2026 über 80% aller Unternehmen generative KI im Marketing einsetzen werden. In der DACH-Region sehen wir: Über 70% der mittelständischen Unternehmen nutzen KI-Tools schon regelmäßig. Die Frage ist nicht mehr ob, sondern wie gut du es machst.
                </p>

                <h2 id="use-cases" className="text-3xl font-bold text-white mb-6 scroll-mt-32">8 Marketing-Use-Cases, die für KMU funktionieren</h2>
                <p className="mb-8">
                    Jetzt wird&apos;s konkret. Hier sind 8 Use Cases, die wir bei unseren Kunden erfolgreich umsetzen. Keine Theorie — jeder davon läuft in echten Unternehmen.
                </p>

                <h3 id="zielgruppenanalyse" className="text-2xl font-bold text-white mb-4 scroll-mt-32">1. Zielgruppenanalyse &amp; Persona-Building</h3>
                <p className="mb-4">
                    <strong>Das Problem:</strong> Die meisten KMU kennen ihre Zielgruppe nur oberflächlich. &quot;Männer, 30-50, technikaffin&quot; — des is keine Persona, des is ein Horoskop.
                </p>
                <p className="mb-4">
                    <strong>Die Lösung:</strong> Du fütterst eine KI (Claude oder ChatGPT) mit deinen echten Kundendaten: Support-Tickets, Sales-Gespräche, Bewertungen, Social-Media-Kommentare. Die KI extrahiert daraus Muster, Schmerzpunkte und Kaufmotive, die du mit bloßem Auge nie gesehen hättest.
                </p>
                <p className="mb-4 italic border-l-4 border-brand-green pl-4">
                    Konkretes Beispiel: Wir haben für einen Handwerksbetrieb 200 Google-Bewertungen analysiert. Die KI hat erkannt, dass &quot;Erreichbarkeit&quot; in 73% der negativen Bewertungen das Kernproblem war — nicht die Qualität der Arbeit. Das hat die gesamte Marketing-Strategie verändert.
                </p>
                <p className="mb-8">
                    <strong>Tool:</strong> ChatGPT Plus oder Claude Pro (je ~20€/Monat)
                </p>

                <h3 id="content-erstellung" className="text-2xl font-bold text-white mb-4 scroll-mt-32">2. Content-Erstellung (Blog, Social, Ads)</h3>
                <p className="mb-4">
                    <strong>Das Problem:</strong> Du weißt, dass du Content brauchst. Aber wer hat die Zeit, 3 Blogposts pro Woche zu schreiben?
                </p>
                <p className="mb-4">
                    <strong>Die Lösung:</strong> KI als Schreib-Assistent. Nicht als Ghostwriter. Du gibst die Richtung vor, die KI schreibt den ersten Draft, du polierst mit deiner Expertise und deiner Stimme.
                </p>
                <p className="mb-4">
                    <strong>So machen wir&apos;s:</strong> Briefing mit Keyword, Zielgruppe und 3 Kernaussagen → Claude schreibt Draft → Manuel überarbeitet → fertig. Zeitersparnis: von 4 Stunden pro Artikel auf 1,5 Stunden.
                </p>
                <p className="mb-8">
                    <strong>Tools:</strong> Claude Pro (20€/Mo), Jasper (ab 49€/Mo), oder ChatGPT Plus (20€/Mo)
                </p>

                <h3 id="email-marketing" className="text-2xl font-bold text-white mb-4 scroll-mt-32">3. E-Mail-Marketing &amp; Newsletter-Automatisierung</h3>
                <p className="mb-4">
                    <strong>Das Problem:</strong> Du sammelst E-Mail-Adressen, aber verschickst dann denselben Newsletter an alle. Oder schlimmer: gar keinen.
                </p>
                <p className="mb-4">
                    <strong>Die Lösung:</strong> KI-gestützte E-Mail-Sequenzen, die sich an das Verhalten des Empfängers anpassen. Wer auf &quot;Preise&quot; klickt, bekommt andere Follow-ups als jemand, der sich für Case Studies interessiert.
                </p>
                <p className="mb-4 italic border-l-4 border-brand-green pl-4">
                    Konkretes Beispiel: Ein Kunde hat mit einer KI-personalisierten Willkommens-Sequenz die Öffnungsrate von 22% auf 41% gesteigert. Der Trick? Die KI hat für jede Branche eine eigene Betreffzeile generiert.
                </p>
                <p className="mb-8">
                    <strong>Tools:</strong> Make.com (ab 9€/Mo) + ChatGPT API, oder ActiveCampaign mit KI-Features
                </p>

                <h3 id="ad-creative" className="text-2xl font-bold text-white mb-4 scroll-mt-32">4. Ad-Creative-Generierung (Meta, Google)</h3>
                <p className="mb-4">
                    <strong>Das Problem:</strong> Du brauchst 15 verschiedene Ad-Varianten für A/B-Tests, aber dein Designer ist ausgebucht.
                </p>
                <p className="mb-4">
                    <strong>Die Lösung:</strong> KI generiert Ad-Texte und -Konzepte in Minuten. Du gibst dein Angebot, deine Zielgruppe und den Kanal an — die KI spuckt 10 Varianten aus. Du wählst die besten 3, testest sie, und skalierst den Gewinner.
                </p>
                <p className="mb-4 italic border-l-4 border-brand-green pl-4">
                    Konkretes Beispiel: Für die Zitadelle Graz (Kampfsportverein) haben wir mit KI-generierten Ad-Texten Lead-Preise unter 20€ erreicht — und das bei einer Nische, wo 50€ pro Lead normal wäre.
                </p>
                <p className="mb-8">
                    <strong>Tools:</strong> ChatGPT für Texte, Canva AI für Visuals (ab 12€/Mo)
                </p>

                <h3 id="lead-scoring" className="text-2xl font-bold text-white mb-4 scroll-mt-32">5. Lead-Qualifizierung &amp; Scoring</h3>
                <p className="mb-4">
                    <strong>Das Problem:</strong> Dein Vertrieb ruft jeden Lead an, egal ob der kaufbereit ist oder nur mal geschaut hat. Zeitverschwendung.
                </p>
                <p className="mb-4">
                    <strong>Die Lösung:</strong> KI bewertet jeden Lead anhand seines Verhaltens: Welche Seiten hat er besucht? Wie lange? Hat er die Preisseite angeschaut? Die KI vergibt Punkte und dein Vertrieb ruft nur die heißen Leads an.
                </p>
                <p className="mb-8">
                    <strong>Tools:</strong> HubSpot Free CRM + Make.com (ab 9€/Mo) + ChatGPT API (~5-20€/Mo je nach Volumen)
                </p>

                <h3 id="sentiment-analyse" className="text-2xl font-bold text-white mb-4 scroll-mt-32">6. Kundenfeedback &amp; Sentiment-Analyse</h3>
                <p className="mb-4">
                    <strong>Das Problem:</strong> Du bekommst Bewertungen auf Google, Feedback per E-Mail und Kommentare auf Social Media. Aber wer wertet das systematisch aus?
                </p>
                <p className="mb-4">
                    <strong>Die Lösung:</strong> KI sammelt und analysiert alle Kundenstimmen zentral. Sie erkennt Muster: &quot;Die letzten 10 negativen Bewertungen erwähnen alle lange Wartezeiten.&quot; Das ist dein Signal zum Handeln.
                </p>
                <p className="mb-8">
                    <strong>Tools:</strong> n8n (self-hosted, kostenlos) oder Make.com + Claude API
                </p>

                <h3 id="seo-content" className="text-2xl font-bold text-white mb-4 scroll-mt-32">7. SEO &amp; Content-Optimierung</h3>
                <p className="mb-4">
                    <strong>Das Problem:</strong> Du schreibst Blogartikel, aber sie ranken nicht. Oder du hast keine Ahnung, welche Keywords du targetieren sollst.
                </p>
                <p className="mb-4">
                    <strong>Die Lösung:</strong> KI hilft dir bei der Keyword-Recherche, Inhaltserstellung und On-Page-Optimierung. Nicht als Ersatz für eine SEO-Strategie, aber als massiver Beschleuniger.
                </p>
                <p className="mb-4">
                    <strong>So machen wir&apos;s:</strong> Keyword-Recherche mit Ahrefs → Content-Briefing mit KI → Artikel schreiben mit Claude als Assistent → On-Page-Optimierung → Veröffentlichen. Unser Workflow für diesen Artikel, den du gerade liest, hat genau so funktioniert.
                </p>
                <p className="mb-8">
                    <strong>Tools:</strong> Ahrefs (ab 99€/Mo), Claude/ChatGPT (20€/Mo), Surfer SEO (ab 89€/Mo optional)
                </p>

                <h3 id="voice-ai-leads" className="text-2xl font-bold text-white mb-4 scroll-mt-32">8. Telefonische Lead-Qualifizierung (Voice AI)</h3>
                <p className="mb-4">
                    <strong>Das Problem:</strong> Anrufe kommen rein, aber keiner hebt ab. Oder der Anruf ist für dein Team zu früh — der Kunde will erst mal Infos.
                </p>
                <p className="mb-4">
                    <strong>Die Lösung:</strong> Ein KI-Telefonassistent nimmt jeden Anruf an, 24/7. Er klingt natürlich, beantwortet Standardfragen, qualifiziert den Lead (&quot;Haben Sie ein Budget?&quot;, &quot;Wann brauchen Sie die Lösung?&quot;) und bucht direkt einen Termin in deinem Kalender.
                </p>
                <p className="mb-4 italic border-l-4 border-brand-green pl-4">
                    Konkretes Beispiel: Ein Sanitärbetrieb in der Steiermark hat mit unserem KI-Telefonassistenten die Erreichbarkeit auf 100% gebracht. Vorher: 40% der Anrufe gingen ins Leere. Ergebnis: 9x mehr qualifizierte Anfragen.
                </p>
                <p className="mb-4">
                    Des is unser Kernprodukt. <a href="/ki-telefonassistent" className="text-brand-green hover:underline font-medium">Mehr über den KI-Telefonassistenten →</a>
                </p>
                <p className="mb-12">
                    <strong>Kosten:</strong> Ab 299€/Monat — rechnet sich ab dem ersten gewonnenen Kunden.
                </p>

                <h2 id="tools" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Welche Tools brauchst du? (mit Preisen)</h2>
                <p className="mb-6">
                    Hier die ehrliche Übersicht — kein Affiliate-Bullshit, sondern was wir selbst nutzen:
                </p>
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-3 pr-4 text-gray-400 font-medium">Tool</th>
                                <th className="py-3 pr-4 text-gray-400 font-medium">Wofür</th>
                                <th className="py-3 pr-4 text-gray-400 font-medium">Preis/Monat</th>
                                <th className="py-3 text-gray-400 font-medium">Unsere Einschätzung</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            <tr className="border-b border-white/5"><td className="py-3 pr-4 font-medium text-white">ChatGPT Plus</td><td className="py-3 pr-4">Texte, Ideen, Analysen</td><td className="py-3 pr-4">20€</td><td className="py-3">Allrounder, gut für den Einstieg</td></tr>
                            <tr className="border-b border-white/5"><td className="py-3 pr-4 font-medium text-white">Claude Pro</td><td className="py-3 pr-4">Längere Texte, Analysen, Code</td><td className="py-3 pr-4">20€</td><td className="py-3">Besser bei komplexen Aufgaben</td></tr>
                            <tr className="border-b border-white/5"><td className="py-3 pr-4 font-medium text-white">Make.com</td><td className="py-3 pr-4">Workflow-Automatisierung</td><td className="py-3 pr-4">ab 9€</td><td className="py-3">Unser Go-to für Automationen</td></tr>
                            <tr className="border-b border-white/5"><td className="py-3 pr-4 font-medium text-white">n8n</td><td className="py-3 pr-4">Workflow-Automatisierung (self-hosted)</td><td className="py-3 pr-4">kostenlos</td><td className="py-3">Für Tech-affine, volle Kontrolle</td></tr>
                            <tr className="border-b border-white/5"><td className="py-3 pr-4 font-medium text-white">Canva AI</td><td className="py-3 pr-4">Visuals, Ad-Creatives</td><td className="py-3 pr-4">ab 12€</td><td className="py-3">Schnelle Grafiken ohne Designer</td></tr>
                            <tr className="border-b border-white/5"><td className="py-3 pr-4 font-medium text-white">Ahrefs</td><td className="py-3 pr-4">SEO, Keyword-Recherche</td><td className="py-3 pr-4">ab 99€</td><td className="py-3">Unverzichtbar für SEO</td></tr>
                            <tr><td className="py-3 pr-4 font-medium text-white">ActiveCampaign</td><td className="py-3 pr-4">E-Mail-Marketing mit KI</td><td className="py-3 pr-4">ab 29€</td><td className="py-3">Gut für automatisierte Sequences</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="mb-12">
                    <strong>Meine Empfehlung für den Start:</strong> ChatGPT Plus oder Claude Pro (20€) + Make.com (9€) = <strong>29€/Monat.</strong> Damit deckst du 5 von 8 Use Cases ab. Des is spitzenmäßig.
                </p>

                <h2 id="dsgvo" className="text-3xl font-bold text-white mb-6 scroll-mt-32">KI-Marketing und DSGVO: Was du beachten musst</h2>
                <p className="mb-4">Kurz und knapp, weil des Thema viele verunsichert:</p>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 ml-4">
                    <li><strong>Personenbezogene Daten</strong> dürfen nicht einfach in ChatGPT gepastet werden. Anonymisiere immer.</li>
                    <li><strong>Auftragsverarbeitungsvertrag (AVV):</strong> Brauchst du bei ChatGPT Business, Claude for Teams, etc. — die bieten das an.</li>
                    <li><strong>Hosting in der EU:</strong> Claude und ChatGPT bieten EU-Hosting-Optionen. Nutze sie.</li>
                    <li><strong>On-Premise-Lösung:</strong> Wenn du maximale Sicherheit brauchst (Arztpraxis, Kanzlei), setzen wir <a href="/lokale-ki-systeme" className="text-brand-green hover:underline">lokale KI-Systeme</a> auf, die komplett auf deiner eigenen Hardware laufen.</li>
                </ul>
                <p className="mb-12">
                    Für die volle Tiefe: Wir arbeiten gerade an einem eigenen DSGVO-Guide für KI — kommt bald.
                </p>

                <h2 id="einstieg" className="text-3xl font-bold text-white mb-6 scroll-mt-32">So fängst du an: 3-Schritte-Plan für KMU</h2>
                <p className="mb-6">Nicht alles auf einmal. So gehst du vor:</p>

                <h3 className="text-xl font-bold text-white mb-3">Schritt 1: Einen Quick Win wählen (diese Woche)</h3>
                <p className="mb-6">
                    Pick EINEN Use Case aus der Liste oben. Meine Empfehlung für den Einstieg: <strong>Use Case 2 (Content-Erstellung)</strong> oder <strong>Use Case 3 (E-Mail-Marketing).</strong> Beide sind risikoarm und zeigen schnell Ergebnisse.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">Schritt 2: Ein Tool testen (nächste 2 Wochen)</h3>
                <p className="mb-6">
                    Hol dir ChatGPT Plus oder Claude Pro. Spiel damit rum. Schreib 5 LinkedIn-Posts, 3 E-Mail-Betreffzeilen und einen Blog-Draft. Lerne die Prompting-Basics.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">Schritt 3: Einen Workflow aufbauen (Monat 1)</h3>
                <p className="mb-6">
                    Verbinde dein neues KI-Tool mit deinen bestehenden Systemen. Z.B.: Neuer Lead in HubSpot → Make.com triggert → ChatGPT schreibt personalisierte Willkommens-Mail → Mail wird automatisch versendet. Einmal aufsetzen, läuft dann von allein.
                </p>
                <div className="bg-brand-green/10 border border-brand-green/20 rounded-xl p-6 mb-12">
                    <p className="text-white font-semibold mb-2">Klingt gut, aber du willst Hilfe beim Setup?</p>
                    <p className="text-gray-300 mb-4">Wir schauen gemeinsam, welcher Use Case bei dir den größten Hebel hat.</p>
                    <a href="/kontakt" className="inline-flex items-center gap-2 bg-brand-green text-deep-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-green/90 transition-colors">
                        Kostenloses Erstgespräch buchen →
                    </a>
                </div>

                <h2 id="grenzen" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Was KI im Marketing NICHT kann (ehrliche Einschätzung)</h2>
                <p className="mb-4">Jetzt mal Klartext, weil des wichtig ist:</p>
                <ul className="list-disc list-inside space-y-3 mb-6 text-gray-300 ml-4">
                    <li><strong>Deine Strategie definieren.</strong> KI ist ein Werkzeug, kein Stratege. Wenn du nicht weißt, wer dein Kunde ist und was du verkaufst, hilft dir auch die beste KI nichts.</li>
                    <li><strong>Echte Beziehungen aufbauen.</strong> Kein KI-Tool ersetzt ein persönliches Gespräch, einen Handschlag oder ein ehrliches &quot;Wie kann ich dir helfen?&quot;.</li>
                    <li><strong>Kreativität ersetzen.</strong> KI ist gut im Kombinieren, Variieren und Optimieren. Aber die wirklich kreativen Ideen — die, die Leute zum Staunen bringen — die kommen von Menschen.</li>
                    <li><strong>Vertrauen schaffen.</strong> Deine Kunden kaufen von dir, weil sie DIR vertrauen. Nicht weil ein Bot einen guten Text geschrieben hat.</li>
                </ul>
                <p className="mb-12">
                    <strong>Mein Zugang:</strong> KI ist wie ein extrem schneller Praktikant mit Zugang zum Weltwissen. Brutal nützlich, aber du musst ihm sagen, was er tun soll. Und du musst sein Ergebnis kontrollieren.
                </p>

                <h2 id="faq" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Häufig gestellte Fragen</h2>

                <div className="space-y-6 mb-12">
                    <div className="border-b border-white/10 pb-6">
                        <h3 className="text-lg font-bold text-white mb-2">Was kostet KI im Marketing für ein KMU?</h3>
                        <p className="text-gray-300">Zwischen 20 und 300€ pro Monat, je nach Umfang. Für den Einstieg reichen ChatGPT Plus (20€) + Make.com (9€) = 29€/Monat. Für fortgeschrittene Setups mit KI-Telefonassistent, SEO-Tools und Automatisierung bist du bei 300-500€/Monat. Der ROI ist typischerweise 3-10x innerhalb der ersten 3 Monate.</p>
                    </div>
                    <div className="border-b border-white/10 pb-6">
                        <h3 className="text-lg font-bold text-white mb-2">Welches KI-Tool ist am besten für Marketing?</h3>
                        <p className="text-gray-300">Für Texte und Analysen: Claude Pro oder ChatGPT Plus. Für Automatisierung: Make.com oder n8n. Für SEO: Ahrefs + KI-Assistent. Es gibt kein &quot;bestes&quot; Tool — es kommt auf deinen Use Case an.</p>
                    </div>
                    <div className="border-b border-white/10 pb-6">
                        <h3 className="text-lg font-bold text-white mb-2">Kann KI mein Marketing-Team ersetzen?</h3>
                        <p className="text-gray-300">Nein. KI macht dein bestehendes Team 3-5x produktiver, aber sie ersetzt keine Marketing-Köpfe. Du brauchst immer noch Menschen für Strategie, Kreativität und Kundenbeziehungen.</p>
                    </div>
                    <div className="border-b border-white/10 pb-6">
                        <h3 className="text-lg font-bold text-white mb-2">Wie schnell sehe ich Ergebnisse?</h3>
                        <p className="text-gray-300">Content-Erstellung: sofort. E-Mail-Marketing: nach 2-4 Wochen. SEO-Effekte: nach 2-4 Monaten. Lead-Qualifizierung mit Voice AI: ab Tag 1.</p>
                    </div>
                    <div className="border-b border-white/10 pb-6">
                        <h3 className="text-lg font-bold text-white mb-2">Ist KI im Marketing DSGVO-konform?</h3>
                        <p className="text-gray-300">Ja, wenn du es richtig machst. Nutze Business-Versionen der Tools (AVV inkludiert), anonymisiere personenbezogene Daten und wähle EU-Hosting wenn möglich. Für maximale Sicherheit gibt es On-Premise-Lösungen.</p>
                    </div>
                    <div className="pb-6">
                        <h3 className="text-lg font-bold text-white mb-2">Brauche ich Programmierkenntnisse?</h3>
                        <p className="text-gray-300">Nein. Tools wie Make.com, ChatGPT und Claude sind komplett ohne Code nutzbar. Erst wenn du komplexe, individuelle Workflows brauchst, wird technisches Know-how hilfreich — dafür gibt es dann Agenturen wie uns.</p>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-6">Fazit: KI im Marketing ist kein Luxus mehr</h2>
                <p className="mb-6">
                    KI im Marketing ist 2026 so normal wie eine Website. Die Frage ist nicht, ob du KI einsetzt, sondern wie gut. Wer jetzt startet, hat in 3 Monaten einen massiven Vorsprung gegenüber der Konkurrenz, die noch überlegt.
                </p>
                <p className="mb-8">
                    Fang klein an. Ein Tool, ein Use Case, ein Quick Win. Und dann skaliere.
                </p>

                <div className="bg-brand-green/10 border border-brand-green/20 rounded-xl p-6 mb-8">
                    <p className="text-white font-semibold mb-2">Du willst wissen, welcher Use Case bei dir den größten Hebel hat?</p>
                    <p className="text-gray-300 mb-4">Wir schauen uns dein Marketing an und zeigen dir in 30 Minuten, wo KI bei dir sofort Impact bringt.</p>
                    <a href="/kontakt" className="inline-flex items-center gap-2 bg-brand-green text-deep-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-green/90 transition-colors">
                        Kostenloses Erstgespräch buchen →
                    </a>
                </div>
                <p className="text-gray-400">
                    Oder du willst gleich mit dem stärksten Hebel starten? Dann schau dir unseren <a href="/ki-telefonassistent" className="text-brand-green hover:underline">KI-Telefonassistenten</a> an — 24/7 erreichbar, qualifiziert Leads und bucht Termine. Ab 299€/Monat.
                </p>
            </>
        )
    }
};
