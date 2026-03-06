"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, CloudOff, Database, Zap, Users, Shield, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
    {
        id: "hardware",
        question: "Was kostet die Hardware?",
        answer: "Der Einstieg (Small LLM) ist oft schon mit bestehenden Gaming-PCs möglich (NVIDIA RTX Karte). Für professionelle Business-Cases (Llama 3 70B) empfehlen wir Workstations ab ca. 3.000€ oder dedizierte Inhouse-Server.",
        icon: Cpu,
        color: "text-blue-400",
        bgGlow: "bg-blue-500/20",
        graphic: (
            <div className="relative w-48 h-48 flex items-center justify-center">
                <Cpu size={80} className="text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.5)]" />
                <div className="absolute inset-0 border-2 border-blue-500/20 rounded-lg scale-110" />
            </div>
        )
    },
    {
        id: "chatgpt",
        question: "Ist das schlechter als ChatGPT?",
        answer: "Open-Source Modelle wie Llama 3 oder Mixtral sind mittlerweile extrem nah an GPT-4 dran. Für spezifische Business-Aufgaben (E-Mails, Zusammenfassungen, Analyse) stehen sie Cloud-Modellen in nichts nach – aber ohne Datenschutz-Albtraum.",
        icon: Zap,
        color: "text-brand-green",
        bgGlow: "bg-brand-green/20",
        graphic: (
            <div className="relative w-48 h-48 flex items-center justify-center">
                <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-gray-700/50 rounded flex items-center justify-center text-gray-400">GPT</div>
                    <div className="font-bold text-brand-green text-xl">VS</div>
                    <div className="w-12 h-12 bg-brand-green/20 border border-brand-green rounded flex items-center justify-center text-brand-green font-bold">OS</div>
                </div>
            </div>
        )
    },
    {
        id: "privacy",
        question: "Wer sieht meine Daten?",
        answer: "Niemand. Punkt. Der Server steht in deinem Büro oder Rechenzentrum. Kein Byte verlässt dein Netzwerk. Du kannst das Netzwerkkabel ziehen und die KI funktioniert trotzdem.",
        icon: CloudOff,
        color: "text-red-400",
        bgGlow: "bg-red-500/20",
        graphic: (
            <div className="relative w-48 h-48 flex items-center justify-center">
                <CloudOff size={80} className="text-red-400 drop-shadow-[0_0_20px_rgba(248,113,113,0.5)]" />
            </div>
        )
    },
    {
        id: "updates",
        question: "Wie halte ich das aktuell?",
        answer: "Wir bieten Wartungsverträge an, oder schulen dein IT-Team. Open Source entwickelt sich rasend schnell; ein Modell-Update ist oft so einfach wie ein Software-Neustart.",
        icon: Database,
        color: "text-green-400",
        bgGlow: "bg-green-500/20",
        graphic: (
            <div className="relative w-48 h-48 flex items-center justify-center">
                <Database size={80} className="text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.5)]" />
                <div className="absolute -right-2 top-0 text-xs bg-green-500 text-deep-navy font-bold px-1 rounded">v2.0</div>
            </div>
        )
    },
    {
        id: "multiuser",
        question: "Können mehrere Mitarbeiter gleichzeitig arbeiten?",
        answer: "Ja. Wir richten Multi-User-Interfaces ein (ähnlich wie ChatGPT Team), mit Benutzerverwaltung und Chat-Historie. Die Hardware muss nur entsprechend dimensioniert sein (Batch-Processing).",
        icon: Users,
        color: "text-purple-400",
        bgGlow: "bg-purple-500/20",
        graphic: (
            <div className="relative w-48 h-48 flex items-center justify-center">
                <Users size={80} className="text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
            </div>
        )
    },
    {
        id: "legal",
        question: "Haftung & Copyright?",
        answer: "Da das Modell bei dir läuft, bist du der Betreiber. Du hast volle Kontrolle über System-Prompts und Sicherheitsfilter. Das ist rechtlich oft sauberer als undurchsichtige Cloud-AGBs.",
        icon: Shield,
        color: "text-orange-400",
        bgGlow: "bg-orange-500/20",
        graphic: (
            <div className="relative w-48 h-48 flex items-center justify-center">
                <Shield size={80} className="text-orange-400 drop-shadow-[0_0_20px_rgba(251,146,60,0.5)]" />
            </div>
        )
    }
];

export function LocalAiFaq() {
    const [activeId, setActiveId] = useState<string>(faqData[0].id);

    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 bg-[size:50px_50px]" />
                <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-deep-navy via-deep-navy/80 to-transparent z-10" />
                <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent z-10" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Fragen zu lokaler KI</h2>
                    <p className="text-gray-400 text-lg">Tech Talk, verständlich erklärt.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Left: Questions List */}
                    <div className="space-y-4">
                        {faqData.map((item) => (
                            <div
                                key={item.id}
                                className={cn(
                                    "group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden",
                                    activeId === item.id
                                        ? "bg-white/10 border-brand-green/30 shadow-[0_0_30px_rgba(118,176,65,0.1)]"
                                        : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                                )}
                                onClick={() => setActiveId(item.id)}
                            >
                                <div className={cn(
                                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]"
                                )} />

                                <div className="flex items-center justify-between relative z-10">
                                    <h3 className={cn(
                                        "text-xl font-bold transition-colors",
                                        activeId === item.id ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                                    )}>
                                        {item.question}
                                    </h3>
                                    {activeId === item.id
                                        ? <Minus className="text-brand-green" />
                                        : <Plus className="text-gray-500" />
                                    }
                                </div>
                                <div className={cn(
                                    "lg:hidden grid transition-[grid-template-rows] duration-300 ease-out",
                                    activeId === item.id ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                                )}>
                                    <div className="overflow-hidden">
                                        <p className="text-gray-400 leading-relaxed text-sm">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Dynamic Graphic */}
                    <div className="hidden lg:flex flex-col justify-center relative min-h-[500px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 bg-[size:30px_30px]" />

                        <AnimatePresence mode="wait">
                            {faqData.map((item) => {
                                if (item.id !== activeId) return null;
                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative z-10 flex flex-col items-center text-center h-full justify-center"
                                    >
                                        <div className={cn(
                                            "w-64 h-64 rounded-full flex items-center justify-center mb-10 transition-colors duration-500",
                                            item.bgGlow
                                        )}>
                                            {item.graphic}
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-6">
                                            {item.question}
                                        </h3>
                                        <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
