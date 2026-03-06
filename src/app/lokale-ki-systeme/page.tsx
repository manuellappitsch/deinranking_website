"use client";

import { LocalAiHero } from "@/components/local-ai/LocalAiHero";
import { LocalAiProcess } from "@/components/local-ai/LocalAiProcess";
import { LocalAiFaq } from "@/components/local-ai/LocalAiFaq";
import { Consultation } from "@/components/sections/Consultation";
import { Wallet, ShieldCheck, WifiOff, Settings2 } from "lucide-react";

export default function LocalAiSystemsPage() {
    return (
        <div className="bg-deep-navy min-h-screen">
            <LocalAiHero />

            <LocalAiProcess />

            {/* Benefits Grid */}
            <section id="vorteile" className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-deep-navy/80 z-0">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 bg-[size:40px_40px]" />
                </div>

                {/* Gradient Masks */}
                <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-deep-navy to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-deep-navy to-transparent z-20 pointer-events-none" />

                {/* Green Haze Gradient */}
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none z-0" />

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 text-center">Warum <span className="text-brand-green">Lokal?</span></h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Keine Token-Kosten",
                                text: "Investiere einmal in Hardware, danach gehört die Rechenleistung dir. Keine monatlichen API-Rechnungen, egal wie viel du generierst.",
                                icon: Wallet
                            },
                            {
                                title: "100% Datenschutz",
                                text: "Ideal für Anwälte, Forscher und Kliniken. Deine sensiblen Daten verlassen niemals das Haus. Trainiere Modelle mit Geheimwissen.",
                                icon: ShieldCheck
                            },
                            {
                                title: "Unabhängigkeit",
                                text: "Wenn das Internet ausfällt oder OpenAI die Preise erhöht, arbeitest du einfach weiter. Du bist souverän über deine Infrastruktur.",
                                icon: WifiOff
                            },
                            {
                                title: "Volle Kontrolle",
                                text: "Keine Zensur, keine Black-Box-Filter. Du entscheidest, wie sich die KI verhält und woran sie sich hält.",
                                icon: Settings2
                            }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="group relative flex gap-6 p-8 md:p-10 bg-white/5 hover:bg-white/[0.07] border border-white/10 rounded-3xl hover:border-brand-green/30 transition-all duration-300 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-green/0 via-brand-green/5 to-brand-green/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                                    <div className="relative shrink-0 w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green group-hover:rotate-6 transition-transform">
                                        <Icon size={32} />
                                    </div>
                                    <div className="relative">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">{item.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-lg">{item.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <LocalAiFaq />

            <Consultation />
        </div>
    );
}
