"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function KiFoerderungFaq() {
    const { faq } = siteConfig.content.kiFoerderung;
    const [activeId, setActiveId] = useState<number | null>(0);

    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" style={{ backgroundSize: "50px 50px" }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-brand-green text-sm font-medium uppercase tracking-wider">FAQ</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Häufige Fragen</h2>
                    <p className="text-gray-400 text-lg">Alles Wichtige zur KI-Förderung in Österreich.</p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faq.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className={cn(
                                "group relative rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden",
                                activeId === index
                                    ? "bg-white/10 border-brand-green/30 shadow-[0_0_30px_rgba(118,176,65,0.1)]"
                                    : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                            )}
                            onClick={() => setActiveId(activeId === index ? null : index)}
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className={cn(
                                        "text-lg font-semibold transition-colors pr-4",
                                        activeId === index ? "text-white" : "text-gray-300 group-hover:text-gray-100"
                                    )}>
                                        {item.question}
                                    </h3>
                                    {activeId === index
                                        ? <Minus className="w-5 h-5 text-brand-green flex-shrink-0" />
                                        : <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                    }
                                </div>

                                <AnimatePresence initial={false}>
                                    {activeId === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-gray-400 leading-relaxed mt-4 text-sm">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
