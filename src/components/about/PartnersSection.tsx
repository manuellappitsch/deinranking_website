"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function PartnersSection() {
    return (
        <section className="py-20 bg-white/5 border-y border-white/10">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Starke Technologie-Partner</h3>
                    <p className="text-gray-400">Wir setzen auf die besten Tools am Markt, um deine Lösung zukunftssicher zu bauen.</p>
                </motion.div>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">

                    {/* Make.com */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group flex flex-col items-center gap-4"
                    >
                        <div className="bg-white p-4 rounded-xl w-48 h-20 flex items-center justify-center hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300">
                            {/* Placeholder Text as SVG/Image logic not yet available for these specific logos without external assets */}
                            <span className="text-2xl font-bold text-black flex items-center gap-2">
                                <span className="w-6 h-6 bg-[#63248d] rounded-full inline-block"></span>
                                make
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors">
                            <CheckCircle2 size={16} className="text-brand-green" /> Verifizierter Partner
                        </div>
                    </motion.div>

                    {/* Fonio.ai */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group flex flex-col items-center gap-4"
                    >
                        <div className="bg-white p-4 rounded-xl w-48 h-20 flex items-center justify-center hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300">
                            <span className="text-2xl font-bold text-black">fonio.ai</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors">
                            <CheckCircle2 size={16} className="text-brand-green" /> KI-Voice Solution
                        </div>
                    </motion.div>

                    {/* Superchat */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group flex flex-col items-center gap-4"
                    >
                        <div className="bg-white p-4 rounded-xl w-48 h-20 flex items-center justify-center hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300">
                            <span className="text-2xl font-bold text-[#1f2937]">Superchat</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors">
                            <CheckCircle2 size={16} className="text-brand-green" /> Messaging Partner
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
