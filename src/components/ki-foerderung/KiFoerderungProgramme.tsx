"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { CheckCircle2, Star } from "lucide-react";

export function KiFoerderungProgramme() {
    const { programme } = siteConfig.content.kiFoerderung;

    return (
        <section id="programme" className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" style={{ backgroundSize: "50px 50px" }} />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Alle Programme 2026</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                        Welche Förderung passt zu dir?
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Über 55 Millionen Euro stehen bereit. Hier der vollständige Überblick — von €8.000 bis €5 Millionen.
                    </p>
                </motion.div>

                {/* Table — Desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="hidden md:block overflow-hidden rounded-2xl border border-white/10"
                >
                    <table className="w-full">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/10">
                                <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Programm</th>
                                <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Max. Förderung</th>
                                <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Förderquote</th>
                                <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Für wen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {programme.map((p, index) => (
                                <tr
                                    key={index}
                                    className={`border-b border-white/5 last:border-0 transition-colors ${
                                        p.highlight ? "bg-brand-green/5" : "hover:bg-white/3"
                                    }`}
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            {p.highlight && <Star className="w-4 h-4 text-brand-green fill-brand-green flex-shrink-0" />}
                                            <span className={`font-semibold ${p.highlight ? "text-white" : "text-gray-200"}`}>
                                                {p.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`font-bold text-lg ${p.highlight ? "text-brand-green" : "text-white"}`}>
                                            {p.foerderung}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-300">{p.quote}</td>
                                    <td className="px-6 py-4 text-gray-300">{p.fuerWen}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Cards — Mobile */}
                <div className="md:hidden space-y-3">
                    {programme.map((p, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className={`rounded-2xl border p-5 ${
                                p.highlight
                                    ? "bg-brand-green/5 border-brand-green/30"
                                    : "bg-white/5 border-white/10"
                            }`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    {p.highlight && <Star className="w-4 h-4 text-brand-green fill-brand-green" />}
                                    <span className="font-semibold text-white">{p.name}</span>
                                </div>
                                <span className={`font-bold ${p.highlight ? "text-brand-green" : "text-white"}`}>
                                    {p.foerderung}
                                </span>
                            </div>
                            <div className="flex gap-4 text-sm text-gray-400">
                                <span>Förderquote: {p.quote}</span>
                                <span>·</span>
                                <span>{p.fuerWen}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empfehlung */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8 bg-brand-green/5 border border-brand-green/20 rounded-2xl p-6 flex gap-4"
                >
                    <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">
                        <span className="text-white font-semibold">Förderungen kombinieren:</span>{" "}
                        KMU.DIGITAL, AI-Wissen und eine Landesförderung lassen sich in vielen Fällen stapeln — solange keine Doppelförderung desselben Kostenpunktes entsteht.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
