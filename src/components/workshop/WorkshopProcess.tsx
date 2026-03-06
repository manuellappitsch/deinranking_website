"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Users, BrainCircuit, FileText } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight-bg";

// Animated Graphics Components - Professional Glassmorphic Style
const AuditGraphic = () => (
    <div className="relative w-full h-48 flex items-center justify-center max-w-sm mx-auto group">
        {/* Glow behind */}
        <div className="absolute inset-0 bg-brand-green/20 blur-[60px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

        {/* Card */}
        <div className="relative z-10 w-64 h-32 bg-[#0A1A2F]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden group-hover:border-brand-green/30 transition-colors duration-500">
            {/* Scanning Line */}
            <motion.div
                animate={{ x: [-100, 300] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-brand-green to-transparent opacity-50 skew-x-12"
            />

            <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    <Search className="w-8 h-8 text-brand-green" />
                </div>
                <div className="h-1 w-16 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-full bg-brand-green"
                    />
                </div>
            </div>
        </div>
    </div>
);

const WorkshopGraphic = () => (
    <div className="relative w-full h-48 flex items-center justify-center max-w-sm mx-auto group">
        <div className="absolute inset-0 bg-purple-500/20 blur-[60px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

        <div className="relative z-10 w-64 h-32 bg-[#0A1A2F]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center gap-4 shadow-2xl group-hover:border-purple-500/30 transition-colors duration-500">
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    animate={{ height: [20, 40 + i * 10, 20] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-8 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm relative overflow-hidden"
                >
                    <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-to-t from-purple-500/50 to-transparent opacity-50" />
                </motion.div>
            ))}
            <Users className="absolute -right-2 -bottom-2 text-white/5 w-24 h-24" />
        </div>
    </div>
);

const StrategyGraphic = () => (
    <div className="relative w-full h-48 flex items-center justify-center max-w-sm mx-auto group">
        <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

        <div className="relative z-10 w-64 h-32 bg-[#0A1A2F]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl group-hover:border-blue-500/30 transition-colors duration-500">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border border-dashed border-white/10 rounded-xl"
            />

            <div className="relative z-10 p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10">
                <BrainCircuit className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>

            {/* Connection Nodes */}
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-8 left-12 w-2 h-2 bg-blue-500 rounded-full" />
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="absolute bottom-8 right-12 w-2 h-2 bg-purple-500 rounded-full" />
        </div>
    </div>
);

const ReportGraphic = () => (
    <div className="relative w-full h-48 flex items-center justify-center max-w-sm mx-auto group">
        <div className="absolute inset-0 bg-brand-green/20 blur-[60px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

        <motion.div
            whileHover={{ y: -5 }}
            className="relative z-10 w-56 h-36 bg-[#0A1A2F]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-2xl group-hover:border-brand-green/30 transition-colors duration-500"
        >
            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-50" />
            <FileText className="w-10 h-10 text-gray-400 mb-3 group-hover:text-white transition-colors" />
            <div className="w-24 h-2 bg-white/10 rounded-full mb-2" />
            <div className="w-16 h-2 bg-white/10 rounded-full" />

            <div className="absolute bottom-4 right-4 flex gap-1">
                <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            </div>
        </motion.div>
    </div>
);

const steps = [
    {
        phase: "Phase 1",
        title: "Deep Dive Analyse",
        desc: "Wir starten nicht bei Null. Vor dem Termin analysieren wir deine Website, deine Konkurrenz und deine technischen Grundlagen. Wir kommen vorbereitet.",
        tags: ["Audit", "Vorabrecherche", "Tech-Check"],
        Graphic: AuditGraphic
    },
    {
        phase: "Phase 2",
        title: "Der Workshop (4h)",
        desc: "Intensiv-Session. Wir nehmen deine Prozesse Schritt für Schritt auseinander. Wo verlierst du Zeit? Wo sind Datenbrüche? Was nervt deine Mitarbeiter?",
        tags: ["Process Mapping", "Interviews", "Whiteboarding"],
        Graphic: WorkshopGraphic
    },
    {
        phase: "Phase 3",
        title: "Matchmaking & Strategie",
        desc: "Wir legen die Schablone der Technologie über deine Probleme. Wir entscheiden: Make oder n8n? Llama oder GPT? Cloud oder On-Premise?",
        tags: ["Solution Design", "Tool Selection", "Architecture"],
        Graphic: StrategyGraphic
    },
    {
        phase: "Phase 4",
        title: "Handover & Roadmap",
        desc: "Du erhältst das 'Playbook'. Ein PDF-Dokument mit Schritt-für-Schritt-Anleitung, Kostenschätzung und Zeitplan. Deine Anleitung zum Erfolg.",
        tags: ["PDF Report", "Budgetplan", "Action Items"],
        Graphic: ReportGraphic
    }
];

export function WorkshopProcess() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="ablauf" className="py-32 relative overflow-hidden bg-deep-navy">
            {/* Background Gradients - Circular, Centered, Faded Ends */}
            <div className="absolute inset-0 pointer-events-none" style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}>
                {/* Right: Blue-Violet Circle */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full translate-x-1/2" />

                {/* Left: Brand-Green Circle */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 blur-[120px] rounded-full -translate-x-1/2" />
            </div>

            {/* Background Texture with Fade */}
            <div className="absolute inset-0 opacity-30 bg-[url('/grid-pattern.svg')] bg-[size:30px_30px]"
                style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}
            />

            <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
                <div className="mb-24">
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-6">Der <span className="text-brand-green">Pfad.</span></h2>
                    <p className="text-gray-400 text-xl max-w-xl">
                        Ein strukturierter Prozess, der nichts dem Zufall überlässt.
                    </p>
                </div>

                <div className="relative h-full">
                    {/* Base Line */}
                    <div className="absolute left-[19px] md:left-[39px] top-0 bottom-0 w-[2px] bg-white/10"
                        style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}
                    />

                    {/* Glowing Beam Progress Line */}
                    <div className="absolute left-[19px] md:left-[39px] top-0 bottom-0 w-[2px]"
                        style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}>
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-brand-green via-[#8A2BE2] to-brand-green shadow-[0_0_20px_#76B041]"
                        />
                    </div>

                    <div className="space-y-32">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center pl-12 md:pl-24"
                            >
                                {/* Dot indicator */}
                                <div className="absolute left-[10px] md:left-[30px] top-12 w-5 h-5 rounded-full border-4 border-[#0A1A2F] bg-brand-green shadow-[0_0_20px_rgba(118,176,65,0.5)] z-10" />

                                {/* Text Content */}
                                <div className="flex flex-col items-start gap-4">
                                    <span className="text-brand-green font-mono text-sm tracking-widest uppercase mb-2">{step.phase}</span>
                                    <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
                                        {step.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {step.tags.map((tag, j) => (
                                            <div key={j} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2 hover:border-brand-green/30 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Graphic Content - Right Side */}
                                <div className="hidden lg:block">
                                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-brand-green/30 transition-all duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <step.Graphic />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
