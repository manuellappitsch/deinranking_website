"use client";

import { Check, X, Minus } from "lucide-react";
import { siteConfig } from "@/config/site";

export function PhoneComparison() {
    const { comparison } = siteConfig.content.phoneAssistant;

    return (
        <section className="py-24 relative overflow-hidden bg-white/5">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 bg-[size:50px_50px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{comparison.title}</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full max-w-5xl mx-auto border-separate border-spacing-0">
                        <thead>
                            <tr>
                                <th className="py-6 px-6 text-left text-gray-400 font-medium border-b border-white/10">Feature</th>
                                <th className="py-6 px-6 text-left text-gray-400 font-medium border-b border-white/10">Mensch</th>
                                <th className="py-6 px-6 text-left text-gray-400 font-medium border-b border-white/10">Anrufbeantworter</th>
                                <th className="py-6 px-6 text-left text-brand-green font-bold border-b border-brand-green/50 bg-brand-green/10 rounded-t-xl">
                                    KI-Assistent
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparison.items.map((item, index) => (
                                <tr key={index} className="group hover:bg-white/5 transition-colors">
                                    <td className="py-6 px-6 text-white font-bold border-b border-white/5">{item.feature}</td>
                                    <td className="py-6 px-6 text-gray-400 border-b border-white/5">{item.human}</td>
                                    <td className="py-6 px-6 text-gray-400 border-b border-white/5">{item.voicemail}</td>
                                    <td className="py-6 px-6 text-brand-green font-bold border-b border-brand-green/20 bg-brand-green/5 group-last:rounded-b-xl border-l border-r border-brand-green/20">
                                        {item.ai}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
