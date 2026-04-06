import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "AGB | DeinRanking GmbH",
  description: "Allgemeine Geschäftsbedingungen der DeinRanking GmbH für KI-Dienstleistungen, Automatisierung und Beratung.",
  alternates: { canonical: "https://dein-ranking.at/agbs" },
  robots: { index: true, follow: true },
};

export default function AGBPage() {
    return (
        <PageLayout title="Allgemeine Geschäftsbedingungen">
            <div className="text-gray-300 space-y-8 max-w-4xl mx-auto leading-relaxed">

                {/* Header Info */}
                <div className="border-b border-white/10 pb-8 mb-8">
                    <p className="text-lg font-semibold text-white">DeinRanking GmbH</p>
                    <p className="text-gray-400">Stand: 28. Mai 2025</p>
                </div>

                {/* Section 1 */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">1. Geltungsbereich</h2>
                    <p className="mb-4">
                        Diese Allgemeinen Geschäftsbedingungen („AGB“) gelten für sämtliche Dienstleistungen der DeinRanking GmbH, („DeinRanking“). Sie sind integraler Bestandteil aller Verträge zwischen DeinRanking und dem jeweiligen Kunden und regeln die Zusammenarbeit abschließend, unabhängig von vorherigen Absprachen.
                    </p>
                    <p>
                        Abweichende Bedingungen oder Vertragsformulare des Kunden werden ausdrücklich nicht anerkannt, es sei denn, DeinRanking stimmt diesen schriftlich zu. Begriffsdefinitionen und Leistungsbeschreibungen gemäß Anhang ./1 ergänzen diese Bedingungen.
                    </p>
                </section>

                {/* Section 2 */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">2. Zustandekommen von Verträgen</h2>
                    <p className="mb-4">
                        Kommt kein gesonderter Vertrag zustande, gilt das Vertragsverhältnis als abgeschlossen, sobald der Kunde ein schriftliches Angebot von DeinRanking annimmt. Ergänzungen oder Änderungen durch den Kunden sind nur bei ausdrücklicher Zustimmung gültig.
                    </p>
                    <p>
                        Alle Angebote sind unverbindlich, sofern nichts anderes angegeben wird. Sofern nicht anders vermerkt, ist ein Angebot 14 Tage ab Ausstellungsdatum gültig und kann von DeinRanking jederzeit widerrufen werden.
                    </p>
                </section>

                {/* Section 3 */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">3. Leistungsumfang und Umsetzung</h2>
                    <p className="mb-4">
                        DeinRanking erbringt die vereinbarten Leistungen mit angemessener Sorgfalt. Ein konkreter Erfolg wird nicht zugesichert. Ort und Zeit der Leistungserbringung liegen im Ermessen von DeinRanking.
                    </p>
                    <p className="mb-4">
                        Die Umsetzung technischer Empfehlungen obliegt dem Kunden. Liefertermine sind unverbindlich. Teilleistungen sind möglich. DeinRanking kann Drittleister beauftragen. Bei höherer Gewalt besteht keine Haftung, Fristen verlängern sich entsprechend.
                    </p>
                    <p>
                        Die Platzierung bei Google hängt von externen Faktoren ab, auf die DeinRanking keinen Einfluss hat. Es werden keine konkreten Platzierungen garantiert.
                    </p>
                </section>

                {/* Section 4 */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">4. Pflichten des Kunden zur Mitwirkung</h2>
                    <p className="mb-4">
                        Der Kunde verpflichtet sich, DeinRanking alle erforderlichen Informationen und Zugänge rechtzeitig und unentgeltlich zur Verfügung zu stellen. Diese müssen frei von Schadsoftware sein und keine Rechte Dritter verletzen.
                    </p>
                    <p className="mb-4">
                        Der Kunde haftet für Inhalte und Richtigkeit der bereitgestellten Daten und verpflichtet sich, DeinRanking bei Ansprüchen Dritter vollständig schad- und klaglos zu halten.
                    </p>
                    <p>
                        Verletzt der Kunde seine Mitwirkungspflichten, trägt er die daraus resultierenden Kosten. Für die Dauer des Vertrags und zwölf Monate darüber hinaus verpflichtet sich der Kunde, keine für DeinRanking tätige oder ehemals tätige Person abzuwerben. Bei Verstoß wird eine Vertragsstrafe fällig.
                    </p>
                </section>

                {/* Section 5 */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">5. Vergütung und Zahlungsbedingungen</h2>
                    <p className="mb-4">
                        Alle Preisangaben verstehen sich netto in Euro, zuzüglich gesetzlicher Abgaben. Zahlungen sind sofort nach Rechnungserhalt ohne Abzug fällig. Dein-Ranking ist berechtigt, Teilleistungen zu fakturieren.
                    </p>
                    <p>
                        Bei Zahlungsverzug können Verzugszinsen ab dem Fälligkeitsdatum geltend gemacht werden. Kursverluste durch verspätete oder in falscher Währung erfolgte Zahlungen trägt der Kunde.
                    </p>
                </section>

                {/* Section 6 */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">6. Nutzungsrechte</h2>
                    <p className="mb-4">
                        Mit vollständiger Bezahlung erhält der Kunde ein einfaches, nicht übertragbares Nutzungsrecht an den erbrachten Leistungen. Bis dahin kann DeinRanking die Nutzung untersagen.
                    </p>
                    <p>
                        Stockmedien werden im Namen des Kunden lizenziert und dürfen ausschließlich gemäß den Lizenzbedingungen genutzt werden.
                    </p>
                </section>

                {/* Section 7 */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">7. Gewährleistung</h2>
                    <p className="mb-4">
                        DeinRanking gewährleistet eine fachgerechte Leistungserbringung, jedoch keinen bestimmten Erfolg, insbesondere keine garantierten Google-Rankings.
                    </p>
                    <p>
                        Mängel sind umgehend und schriftlich anzuzeigen. Werden Leistungen durch Dritte verändert, entfällt die Gewährleistung. Bei Mängeln leistet Dein-Ranking nach eigener Wahl Ersatz oder Gutschrift.
                    </p>
                </section>

                {/* Section 8 */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">8. Haftung</h2>
                    <p>
                        DeinRanking haftet nur bei grober Fahrlässigkeit oder Vorsatz, ausgenommen sind Personenschäden. Schadenersatzansprüche verjähren nach sechs Monaten ab Kenntnis.
                    </p>
                </section>

                {/* Section 9 */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">9. Vertragslaufzeit und Kündigung</h2>
                    <p className="mb-4">
                        Die Mindestvertragslaufzeit beträgt, sofern nicht anders vereinbart, entweder zwölf (12) oder vierundzwanzig (24) Monate, abhängig von der jeweiligen Vereinbarung im vom Kunden angenommenen Angebot. Die konkrete Laufzeit ergibt sich somit aus dem jeweiligen Vertragsdokument bzw. Angebotsformular.
                    </p>
                    <p className="mb-4">
                        Eine ordentliche Kündigung ist erstmals zum Ende der vereinbarten Vertragslaufzeit unter Einhaltung einer Kündigungsfrist von vier Wochen möglich. Erfolgt keine fristgerechte Kündigung, verlängert sich der Vertrag automatisch um weitere zwölf (12) Monate.
                    </p>
                    <p className="mb-4">
                        Eine vorzeitige Vertragsauflösung durch den Kunden ist ausdrücklich ausgeschlossen. Das gilt unabhängig von der Laufzeit. Die einzige Ausnahme bildet ein Zahlungsverzug oder eine schwerwiegende Pflichtverletzung des Kunden. In einem solchen Fall ist DeinRanking zur außerordentlichen Kündigung berechtigt.
                    </p>
                    <p>
                        Auch bei einer berechtigten Kündigung durch DeinRanking bleibt der Anspruch auf die vollständige Vergütung für die ursprünglich vereinbarte Vertragslaufzeit bestehen. DeinRanking behält sich zudem das Recht vor, bei Zahlungsverzug Leistungen auszusetzen oder den Vertrag vorzeitig zu beenden, ohne dass dadurch die Zahlungspflicht des Kunden entfällt.
                    </p>
                </section>

                {/* Section 10 */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">10. Vertraulichkeit</h2>
                    <p>
                        Beide Parteien verpflichten sich zur Vertraulichkeit hinsichtlich sämtlicher Informationen aus dem Vertragsverhältnis, sofern keine gesetzliche Offenlegungspflicht besteht oder die Informationen öffentlich zugänglich sind.
                    </p>
                </section>

                {/* Section 11 */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">11. Gerichtsstand und anzuwendendes Recht</h2>
                    <p>
                        Es gilt ausschließlich österreichisches Recht unter Ausschluss der Verweisungsnormen und des UN-Kaufrechts. Gerichtsstand ist Graz.
                    </p>
                </section>

                {/* Section 12 */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">12. Schlussbestimmungen</h2>
                    <p className="mb-4">
                        DeinRanking darf gewonnene Erkenntnisse anonymisiert weiterverwenden. Der Kunde darf ohne schriftliche Genehmigung keine Ergebnisse oder Methoden Dritten zugänglich machen.
                    </p>
                    <p className="mb-4">
                        Der Kunde erklärt sich damit einverstanden, dass DeinRanking ihn (inkl. Logo) als Referenz nennen darf. Änderungen dieser AGB werden dem Kunden mitgeteilt und gelten als akzeptiert, wenn kein Widerspruch binnen 14 Tagen erfolgt.
                    </p>
                    <p>
                        Sollte eine Klausel dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen unberührt.
                    </p>
                </section>

            </div>
        </PageLayout>
    );
}
