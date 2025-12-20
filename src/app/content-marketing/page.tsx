import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Search, FileText, BarChart, Users, Target, PenTool, Share2 } from "lucide-react";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
    return (
        <PageLayout title="Deine Content-Marketing-Agentur für Inhalte, die gefunden und geklickt werden.">
            <div className="space-y-20">

                {/* Intro Section */}
                <section className="max-w-4xl">
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        Guter Content bringt dir Sichtbarkeit. Großartiger Content bringt dir Kunden.
                        Als Content-Marketing-Agentur sorgen wir dafür, dass deine Inhalte nicht nur gelesen werden, sondern auch Ergebnisse liefern. Mit klarer Strategie, gezielter Umsetzung und messbarem Impact.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Mehr Sichtbarkeit bei Google",
                            "Texte, die wirklich konvertieren",
                            "Klar strukturierte Content-Strategien",
                            "Content-Erstellung & Optimierung aus einer Hand",
                            "Direkter Draht zu erfahrenen Textern"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-brand-green shrink-0" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Content Marketing Section */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-10">Warum Content-Marketing heute entscheidend ist</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-6 bg-white/5 border-white/10">
                            <Search className="w-8 h-8 text-brand-green mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Mehr Sichtbarkeit in Suchmaschinen</h3>
                            <p className="text-sm text-gray-400">Mit relevanten Inhalten erreichst du Menschen, die genau nach dem suchen, was du anbietest.</p>
                        </Card>
                        <Card className="p-6 bg-white/5 border-white/10">
                            <Users className="w-8 h-8 text-brand-green mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Vertrauen aufbauen</h3>
                            <p className="text-sm text-gray-400">Wer hilfreichen Content liefert, gewinnt Sympathie und automatisch Glaubwürdigkeit, noch bevor der erste Kontakt entsteht.</p>
                        </Card>
                        <Card className="p-6 bg-white/5 border-white/10">
                            <BarChart className="w-8 h-8 text-brand-green mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Planbare Reichweite</h3>
                            <p className="text-sm text-gray-400">Statt auf Klickpreise zu setzen, baust du mit Content ein nachhaltiges Fundament für organisches Wachstum auf.</p>
                        </Card>
                        <Card className="p-6 bg-white/5 border-white/10">
                            <Target className="w-8 h-8 text-brand-green mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Wettbewerbsvorteil</h3>
                            <p className="text-sm text-gray-400">Wer bessere Inhalte liefert, wird zuerst gefunden und zuerst angefragt.</p>
                        </Card>
                    </div>
                </section>

                {/* Approach Section */}
                <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
                    <h2 className="text-3xl font-bold text-white mb-8">Unser Ansatz – Strategie, Umsetzung & Wirkung</h2>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 font-bold">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Content-Analyse & Zieldefinition</h3>
                                <p className="text-gray-400">Wir analysieren, was da ist und was fehlt. Dabei prüfen wir deine bestehenden Inhalte, identifizieren Potenziale und legen klare Ziele fest: mehr Sichtbarkeit, mehr Leads, mehr Wirkung.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 font-bold">2</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Keyword-Recherche & Clustering</h3>
                                <p className="text-gray-400">Wir finden heraus, was deine Zielgruppe wirklich sucht und wie du dafür rankst. Auf dieser Basis planen wir Inhalte, die exakt auf Suchintentionen abgestimmt sind.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 font-bold">3</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Themenplanung & Content-Strategie</h3>
                                <p className="text-gray-400">Wir entwickeln eine Content-Strategie, die auf deinen Sales Funnel und deine Unternehmensziele einzahlt.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 font-bold">4</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Texterstellung & Optimierung</h3>
                                <p className="text-gray-400">Wir schreiben Texte so, dass sie attraktiv für Suchmaschinen und Besucher sind und erzielen dadurch Top-Rankings.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 font-bold">5</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Reporting & Weiterentwicklung</h3>
                                <p className="text-gray-400">Wir lassen dich nicht im Dunkeln. Du bekommst regelmäßig Reportings, siehst, wie dein Content performt und was wir als Nächstes verbessern.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Detail */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-10">Unsere Leistungen im Überblick</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="p-8 bg-white/5 border-white/10">
                            <PenTool className="w-10 h-10 text-brand-green mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Content-Erstellung</h3>
                            <p className="text-gray-400">Wir schreiben Texte, die performen: SEO-Texte, Blogartikel, Leistungsseiten – voll und ganz auf deine Marke und Zielgruppe zugeschnitten.</p>
                        </Card>
                        <Card className="p-8 bg-white/5 border-white/10">
                            <Search className="w-10 h-10 text-brand-green mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Content-Audits & Optimierung</h3>
                            <p className="text-gray-400">Wir analysieren, welche Inhalte schon gut funktionieren, was überarbeitet werden sollte und was raus kann. So holen wir mehr aus deinem bestehenden Content heraus.</p>
                        </Card>
                        <Card className="p-8 bg-white/5 border-white/10">
                            <Target className="w-10 h-10 text-brand-green mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Content-Strategie</h3>
                            <p className="text-gray-400">Kein Content-Chaos mehr. Wir erstellen einen klaren Plan, der zu deinem Business passt, mit Themen, die relevant sind.</p>
                        </Card>
                        <Card className="p-8 bg-white/5 border-white/10">
                            <Share2 className="w-10 h-10 text-brand-green mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Content-Distribution</h3>
                            <p className="text-gray-400">Wir bringen deinen Content dorthin, wo er gelesen wird durch gezielten Outreach, digitale PR und strategische Platzierung.</p>
                        </Card>
                        <Card className="p-8 bg-white/5 border-white/10">
                            <BarChart className="w-10 h-10 text-brand-green mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Performance-Analyse</h3>
                            <p className="text-gray-400">Du bekommst Klartext: Welche Inhalte funktionieren, welche nicht und was wir als Nächstes verbessern.</p>
                        </Card>
                    </div>
                </section>

                {/* FAQ */}
                <section className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Häufige Fragen zum Content-Marketing</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Wie viele Texte brauche ich für sichtbare Ergebnisse?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Das hängt von deinem Markt, Wettbewerb und Ziel ab. In der Regel starten wir mit einem klar definierten Kernset an Seiten und erweitern es je nach Bedarf. Qualität schlägt dabei immer Quantität.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Was kostet guter Content?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Jeder Text ist individuell. Die Kosten richten sich nach Umfang, Thema und Zielsetzung. Du bekommst von uns ein transparentes Angebot, ohne versteckte Zusatzkosten oder starre Paketpreise.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Macht ihr auch nur Optimierung bestehender Inhalte?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Ja. Wir analysieren deine vorhandenen Seiten, verbessern sie gezielt und holen das Maximum heraus, oft mit deutlich weniger Aufwand als bei Neuproduktionen.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Wie lange dauert es, bis Content Wirkung zeigt?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Erste Ergebnisse sind oft nach 4–8 Wochen sichtbar. Nachhaltige Effekte entwickeln sich über mehrere Monate, je nach Konkurrenz und Thema.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Kann ich Inhalte auch selbst schreiben?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Natürlich. Wir unterstützen dich gern mit Strategie, Briefings oder Qualitätssicherung oder übernehmen die Texterstellung komplett. Du entscheidest, wie viel du auslagern möchtest.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-brand-green">Arbeitet ihr auch für Shops / Dienstleister / B2B?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Ja. Wir haben Erfahrung in verschiedenen Branchen von Handwerk über Industrie bis zu Beratungsdienstleistungen. Unsere Strategie passt sich deinem Business an.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                {/* CTA */}
                <section className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Werde jetzt auf Google sichtbar</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Lass uns darüber sprechen, wie wir deine Website mit starkem Content nach vorne bringen.
                    </p>
                    <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white px-8" asChild>
                        <Link href="/kontakt">Kostenloses Erstgespräch vereinbaren</Link>
                    </Button>
                </section>

            </div>
        </PageLayout>
    );
}
