"use client";

import { CheckCircle2, FileJson, TrendingUp, ShieldCheck, Zap, BrainCircuit, LineChart } from "lucide-react";
import { motion } from "framer-motion";

export function WorkshopBenefits() {
    const cards = [
        {
            title: "Das 'Big Picture' PDF",
            desc: "Kein Gelaber, sondern ein physisches Ergebnis. Du erhältst eine detaillierte Roadmap mit Handlungsempfehlung die du mit deiner IT oder gemeinsam mit uns umsetzen kannst.",
            icon: FileJson,
            colSpan: "lg:col-span-2",
            bg: "bg-gradient-to-br from-brand-green/20 to-transparent"
        },
        {
            title: "ROI-Berechnung",
            desc: "Wir rechnen dir vor: 5h/Woche gespart x 50€/Std x 50 Wochen = 12.500€/Jahr pro Mitarbeiter. Schwarz auf weiß.",
            icon: LineChart,
            colSpan: "lg:col-span-1",
            bg: "bg-white/5"
        },
        {
            title: "Tech-Stack Auswahl",
            desc: "Llama 3 lokal oder GPT-4 in der Cloud? Make oder n8n? Wir treffen die technologisch korrekte Entscheidung für deine Compliance.",
            icon: BrainCircuit,
            colSpan: "lg:col-span-1",
            bg: "bg-white/5"
        },
        {
            title: "Fehlervermeidung",
            desc: "Spare dir 5-stellige Fehlinvestitionen in Software, die nicht zu deinen Prozessen passt.",
            icon: ShieldCheck,
            colSpan: "lg:col-span-2",
            bg: "bg-white/5"
        }
    ];

    return (
        <section className="py-32 relative bg-deep-navy">
            {/* Background Glow - Faded out at top and bottom */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 bg-brand-green/30 blur-[150px] pointer-events-none rounded-full"
                style={{ maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)" }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Mehr als nur ein <span className="text-brand-green">Meeting.</span>
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Dieser Workshop ist eine Investition, die sich meist schon im ersten Monat amortisiert.
                        Wir liefern Klarheit in einer komplexen Welt.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`${card.colSpan} group relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl hover:border-brand-green/50 transition-all duration-500`}
                        >
                            <div className={`absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40 ${card.bg}`} />

                            <div className="relative p-10 h-full flex flex-col items-start">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 text-brand-green">
                                    <card.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">{card.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
