"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Building2, Rocket, FlaskConical, GraduationCap, Check, AlertCircle } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    Building2,
    Rocket,
    FlaskConical,
    GraduationCap,
};

export function KiFoerderungDetails() {
    const { details } = siteConfig.content.kiFoerderung;

    return (
        <section className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Im Detail</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                        Die wichtigsten Programme erklärt
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Was genau wird gefördert, wer kann einreichen und worauf musst du achten.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {details.map((item, index) => {
                        const Icon = iconMap[item.icon] ?? Building2;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-brand-green/30 transition-colors"
                            >
                                {/* Header */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-6 h-6 text-brand-green" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-brand-green font-medium uppercase tracking-wider">
                                            {item.badge}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mt-1">{item.name}</h3>
                                    </div>
                                </div>

                                {/* Beschreibung */}
                                <p className="text-gray-300 leading-relaxed mb-6">{item.beschreibung}</p>

                                {/* Punkte */}
                                <ul className="space-y-3 mb-6">
                                    {item.punkte.map((punkt, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300 text-sm">{punkt}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Hinweis */}
                                <div className="flex items-start gap-3 bg-brand-green/5 border border-brand-green/20 rounded-xl p-4">
                                    <AlertCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-gray-300">{item.hinweis}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
