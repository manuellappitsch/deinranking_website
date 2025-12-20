import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Search, Settings, BarChart, FileText, ListChecks } from "lucide-react";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
    return (
        <PageLayout title="SEO-Analyse, die zeigt, was wirklich bremst und wie du sichtbar wirst.">
            <div className="space-y-20">

                {/* Intro Section */}
                <section className="max-w-4xl">
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        Deine Website ist online, aber Google lässt dich links liegen? Dann wird’s Zeit für eine SEO-Analyse, die den Finger in die Wunde legt.
                        Wir zeigen dir, wo du stehst, was nicht funktioniert und vor allem, was du konkret tun musst, um wieder gefunden zu werden.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Detaillierte Analyse deiner Website",
                            "Technik, Content & Struktur im Check",
                            "Priorisierter Maßnahmenplan mit Klartext",
                            "Keine Tool-Exports, sondern echte Bewertung",
                            "Klare Roadmap für bessere Rankings",
                            "Persönliches Abschlussgespräch mit unserem Experten"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-brand-green shrink-0" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why SEO Analysis Section */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-10">Warum eine fundierte SEO-Analyse so wichtig ist</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-6 bg-white/5 border-white/10">
                            <Settings className="w-8 h-8 text-brand-green mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Google bestraft Fehler</h3>
                            <p className="text-sm text-gray-400">Technische Fehler und schlechte Inhalte können verhindern, dass du rankst oder überhaupt gefunden wirst.</p>
                        </Card>
                        <Card className="p-6 bg-white/5 border-white/10">
                            <Search className="w-8 h-8 text-brand-green mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Kein Blindflug</h3>
                            <p className="text-sm text-gray-400">Ohne klare Analyse optimierst du ins Blaue. Du investierst Zeit in Dinge, die keine Wirkung haben und übersiehst, was wirklich bremst.</p>
                        </Card>
                        <Card className="p-6 bg-white/5 border-white/10">
                            <BarChart className="w-8 h-8 text-brand-green mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Geld sparen</h3>
                            <p className="text-sm text-gray-400">Du erkennst, welche Maßnahmen wirklich etwas bringen und welche du dir sparen kannst.</p>
                        </Card>
                        <Card className="p-6 bg-white/5 border-white/10">
                            <ListChecks className="w-8 h-8 text-brand-green mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Gezieltes Wachstum</h3>
                            <p className="text-sm text-gray-400">Nur wer die größten Hebel kennt, kann gezielt wachsen. Unsere Analyse zeigt dir genau, wo du ansetzen musst.</p>
                        </Card>
                    </div>
                </section>

                {/* Process Section */}
                <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
                    <h2 className="text-3xl font-bold text-white mb-8">So läuft deine SEO-Analyse ab</h2>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 font-bold">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Zielgespräch & Kick-off</h3>
                                <p className="text-gray-400">Wir besprechen deine aktuelle Situation, deine Ziele und deine Herausforderungen. So wissen wir genau, worauf es bei der Analyse ankommt.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 font-bold">2</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Technische & inhaltliche Analyse</h3>
                                <p className="text-gray-400">Wir nehmen deine Website ganz genau unter die Lupe: Technik, Ladezeiten, Inhalte, Struktur, Backlinks. Dabei verlassen wir uns nicht nur auf Tools, sondern auf Erfahrung.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 font-bold">3</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Maßnahmenkatalog & Priorisierung</h3>
                                <p className="text-gray-400">Du bekommst eine klare Liste mit den wichtigsten Maßnahmen, geordnet nach Wirkung und Aufwand. Kein unnötiges BlaBla, sondern konkrete Empfehlungen.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 font-bold">4</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Übergabe & Besprechung im Call</h3>
                                <p className="text-gray-400">In einem Abschlussgespräch gehen wir gemeinsam alle Ergebnisse durch. Du bekommst Antworten auf deine Fragen und weißt danach ganz genau, wie du weiter vorgehst.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Detail */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-10">Unsere Leistungen im Detail</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="p-8 bg-white/5 border-white/10">
                            <FileText className="w-10 h-10 text-brand-green mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">OnPage-Check & Contentanalyse</h3>
                            <p className="text-gray-400">Wir prüfen, ob deine Seitenstruktur, Überschriften, Texte und Metadaten sinnvoll aufgebaut sind und wie gut dein Content wirklich zur Suchintention passt.</p>
                        </Card>
                        <Card className="p-8 bg-white/5 border-white/10">
                            <Settings className="w-10 h-10 text-brand-green mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Technisches SEO & Performance</h3>
                            <p className="text-gray-400">Ladezeiten, Crawling, Indexierung, Core Web Vitals etc. Wir decken technische Probleme auf, die Google bremsen und Nutzer abschrecken.</p>
                        </Card>
                        <Card className="p-8 bg-white/5 border-white/10">
                            <ListChecks className="w-10 h-10 text-brand-green mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Struktur & Nutzerfreundlichkeit</h3>
                            <p className="text-gray-400">Wie logisch ist deine Seitenarchitektur? Finden sich Nutzer zurecht? Wir analysieren Navigation, interne Verlinkung und Struktur aus SEO- und UX-Sicht.</p>
                        </Card>
                        <Card className="p-8 bg-white/5 border-white/10">
                            <Check className="w-10 h-10 text-brand-green mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Konkrete Umsetzungsempfehlungen</h3>
                            <p className="text-gray-400">Du bekommst keine leeren Empfehlungen, sondern konkrete Vorschläge – mit Beispieltexten, Prioritäten und klaren nächsten Schritten.</p>
                        </Card>
                    </div>
                </section>

                {/* FAQ */}
                <section className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Häufige Fragen zur SEO-Analyse</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Was kostet eine SEO-Analyse?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Das hängt von der Größe und Komplexität deiner Website ab. Nach dem kostenlosen Erstgespräch bekommst du ein transparentes Angebot, ohne Paketzwang oder versteckte Kosten.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Wie lange dauert eine SEO-Analyse?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                In der Regel 1–2 Wochen je nach Umfang. Du bekommst den Maßnahmenkatalog vor dem Abschlussgespräch, damit du dich in Ruhe vorbereiten kannst.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Kann ich die Maßnahmen selbst umsetzen?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Ja, unsere Empfehlungen sind so formuliert, dass du sie direkt weitergeben oder selbst umsetzen kannst. Gerne unterstützen wir dich auch dabei.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Ist eine Analyse auch sinnvoll, wenn ich schon SEO mache?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Unbedingt. Gerade bei stagnierenden Rankings oder nach Google-Updates lohnt sich ein externer Blick, um blinde Flecken aufzudecken.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Was passiert nach der SEO-Analyse?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Du entscheidest. Du bekommst eine klare Roadmap mit konkreten Empfehlungen. Ob du selbst umsetzt oder wir dich weiter betreuen, liegt ganz bei dir.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                {/* CTA */}
                <section className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Jetzt Klarheit schaffen</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Lass uns herausfinden, was deine Website bremst und wie wir das ändern.
                    </p>
                    <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white px-8" asChild>
                        <Link href="/kontakt">Kostenloses Erstgespräch vereinbaren</Link>
                    </Button>
                </section>

            </div>
        </PageLayout>
    );
}
