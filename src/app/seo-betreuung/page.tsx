import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Search, FileText, Settings, Link as LinkIcon, BarChart, Users, Clock, HelpCircle } from "lucide-react";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionLink } from "@/components/ui/motion-link";

export default function Page() {
    return (
        <PageLayout title="SEO-Betreuung, die dir Ergebnisse bringt">
            <div className="space-y-20">

                {/* Intro Section */}
                <section className="max-w-4xl">
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        Du willst online wachsen, neue Kunden gewinnen und bei Google endlich vorne mitspielen? Dann brauchst du mehr als eine einmalige Optimierung.
                        Unsere SEO-Betreuung sorgt dafür, dass du dauerhaft sichtbar bleibst – und zwar mit klarer Strategie, messbaren Ergebnissen und echten Fortschritten, Monat für Monat.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Höhere Sichtbarkeit bei Google",
                            "Mehr Anfragen & planbarer Umsatz",
                            "Maßgeschneiderte SEO-Strategie",
                            "Inhalte, die wirklich ranken",
                            "Technisch saubere Website",
                            "Transparente Ergebnisse mit Klartext-Reporting"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-brand-green shrink-0" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why SEO Section */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-10">Warum laufende SEO-Betreuung so wichtig ist</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="p-6 bg-white/5 border-white/10">
                            <Clock className="w-8 h-8 text-brand-green mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Google verändert sich</h3>
                            <p className="text-sm text-gray-400">Neue Updates, neue Spielregeln. Wer hier nicht Schritt hält, wird überholt.</p>
                        </Card>
                        <Card className="p-6 bg-white/5 border-white/10">
                            <Users className="w-8 h-8 text-brand-green mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Konkurrenz schläft nicht</h3>
                            <p className="text-sm text-gray-400">Auch andere arbeiten an ihrem Ranking. Stillstand bedeutet Rückschritt.</p>
                        </Card>
                        <Card className="p-6 bg-white/5 border-white/10">
                            <Search className="w-8 h-8 text-brand-green mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Nutzerverhalten wandelt sich</h3>
                            <p className="text-sm text-gray-400">Mobile, Voice Search, KI – was gestern funktioniert hat, ist morgen vielleicht nutzlos.</p>
                        </Card>
                        <Card className="p-6 bg-white/5 border-white/10">
                            <FileText className="w-8 h-8 text-brand-green mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Content wird schnell alt</h3>
                            <p className="text-sm text-gray-400">Nur wer regelmäßig aktualisiert, bleibt relevant für Google und für echte Menschen.</p>
                        </Card>
                    </div>
                </section>

                {/* No Packages Section */}
                <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
                    <h2 className="text-3xl font-bold text-white mb-8">Keine Pakete von der Stange</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center text-sm">1</span>
                                    Analyse & Zieldefinition
                                </h3>
                                <p className="text-gray-400 pl-11">Bevor wir loslegen, prüfen wir deine Website auf Herz und Nieren. Wir analysieren deine aktuelle Sichtbarkeit, deine Zielgruppe und dein Wettbewerbsumfeld.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center text-sm">2</span>
                                    Konkrete SEO-Strategie
                                </h3>
                                <p className="text-gray-400 pl-11">Keine Theorie, sondern ein konkreter Plan. Wir entwickeln eine individuelle Strategie, die zu deinem Unternehmen passt und dort ansetzt, wo das größte Potenzial liegt.</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center text-sm">3</span>
                                    Umsetzung & Optimierung
                                </h3>
                                <p className="text-gray-400 pl-11">Wir setzen um, messen, verbessern. Monat für Monat arbeiten wir daran, deine Rankings zu verbessern, deinen Content zu stärken und neue Chancen zu nutzen.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center text-sm">4</span>
                                    Reporting & Betreuung
                                </h3>
                                <p className="text-gray-400 pl-11">Du bekommst nicht nur Zahlen, sondern Klartext. In regelmäßigen Reportings zeigen wir dir, was sich bewegt. Du hast dabei einen festen Ansprechpartner.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Detail */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-10">Unsere Leistungen im Detail</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="p-8 bg-white/5 border-white/10">
                            <Search className="w-10 h-10 text-brand-green mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">SEO-Audit & Keyword-Mapping</h3>
                            <p className="text-gray-400">Wir starten mit einer gründlichen Analyse deiner Website und deines Marktumfelds. Danach clustern wir relevante Keywords und mappen sie auf deine Seitenstruktur.</p>
                        </Card>
                        <Card className="p-8 bg-white/5 border-white/10">
                            <FileText className="w-10 h-10 text-brand-green mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Content-Erstellung & Optimierung</h3>
                            <p className="text-gray-400">Texte, die nicht nur ranken, sondern verkaufen. Wir erstellen neue Inhalte auf Basis echter Suchintentionen und machen bestehende Seiten besser.</p>
                        </Card>
                        <Card className="p-8 bg-white/5 border-white/10">
                            <Settings className="w-10 h-10 text-brand-green mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">OnPage- & technische Optimierung</h3>
                            <p className="text-gray-400">Von interner Verlinkung bis Ladezeit: Wir sorgen dafür, dass Google deine Seite technisch liebt und Besucher sich sofort zurechtfinden.</p>
                        </Card>
                        <Card className="p-8 bg-white/5 border-white/10">
                            <LinkIcon className="w-10 h-10 text-brand-green mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Linkbuilding & digitale PR</h3>
                            <p className="text-gray-400">Wir bauen Autorität auf, mit hochwertigen Backlinks, strategischen Kooperationen und digitalen PR-Maßnahmen. Keine dubiosen Links, sondern echte Relevanz.</p>
                        </Card>
                    </div>
                </section>

                {/* FAQ */}
                <section className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Häufige Fragen zur SEO-Betreuung</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Wie lange dauert es, bis SEO wirkt?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                SEO ist kein Sprint. Erste Verbesserungen siehst du oft nach 4–8 Wochen, nachhaltige Erfolge bauen sich über 3–6 Monate auf – je nach Wettbewerb und Ausgangslage.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Was kostet eure SEO-Betreuung?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Das hängt davon ab, wo du stehst und was du erreichen willst. Wir schnüren individuelle Betreuungspakete – kein Schema F. Nach dem kostenlosen Sichtbarkeits-Check bekommst du ein konkretes Angebot.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Wie läuft die Kommunikation ab?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Du bekommst einen festen Ansprechpartner, der dich betreut – ohne Zwischenebenen. Wir sprechen Klartext, halten dich regelmäßig mit Reports auf dem Laufenden und reagieren schnell.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Macht ihr auch Linkbuilding?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Ja – aber nicht mit gekauften Massenlinks. Wir setzen auf hochwertige Backlinks über Gastartikel, digitale PR und gezielten Outreach. Nachhaltig, sauber und wirkungsvoll.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Ist technische SEO auch Teil der Betreuung?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Klar. Wir analysieren und optimieren Ladezeiten, Fehlerseiten, strukturierte Daten und alles, was Google bei der Indexierung hilft – und deinen Usern ein besseres Erlebnis bietet.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                {/* CTA */}
                <section className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Du willst bei Google ganz nach oben?</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Lass uns darüber sprechen, wie wir deine Website zum Kundenmagneten machen.
                    </p>

                    <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white px-8" asChild>
                        <MotionLink href="/kontakt">Kostenloses Erstgespräch vereinbaren</MotionLink>
                    </Button>
                </section>

            </div>
        </PageLayout>
    );
}
