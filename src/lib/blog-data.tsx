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


    }
};
