"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Bot, Phone, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function PhoneFaq() {
    const { faq } = siteConfig.content.phoneAssistant;
    const [activeId, setActiveId] = useState<number>(0);

    const graphics = [
        // 1. Robot?
        (
            <div className="relative w-48 h-48 flex items-center justify-center">
                 <Bot size={80} className="text-brand-green drop-shadow-[0_0_20px_rgba(118,176,65,0.5)]" />
                 <div className="absolute inset-0 border border-brand-green/20 rounded-full animate-ping" />
            </div>
        ),
        // 2. Unknown?
        (
           <div className="relative w-48 h-48 flex items-center justify-center">
                 <Phone size={80} className="text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.5)]" />
            </div>
        ),
        // 3. Voice Clone?
        (
           <div className="relative w-48 h-48 flex items-center justify-center">
                 <div className="w-20 h-20 bg-gray-700/50 rounded-full blur-sm absolute left-10" />
                 <div className="w-20 h-20 bg-brand-green/50 rounded-full blur-sm absolute right-10" />
                 <Shield size={60} className="text-white relative z-10" />
            </div>
        )
    ];

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
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Häufige Fragen</h2>
                    <p className="text-gray-400 text-lg">Alles zum KI-Assistenten.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Left: Questions List */}
                    <div className="space-y-4">
                        {faq.map((item, index) => (
                            <div 
                                key={index}
                                className={cn(
                                    "group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden",
                                    activeId === index
                                        ? "bg-white/10 border-brand-green/30 shadow-[0_0_30px_rgba(118,176,65,0.1)]" 
                                        : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                                )}
                                onClick={() => setActiveId(index)}
                            >
                                <div className={cn(
                                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]"
                                )} />
                                
                                <div className="flex items-center justify-between relative z-10">
                                    <h3 className={cn(
                                        "text-xl font-bold transition-colors",
                                        activeId === index ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                                    )}>
                                        {item.question}
                                    </h3>
                                    {activeId === index
                                        ? <Minus className="text-brand-green" /> 
                                        : <Plus className="text-gray-500" />
                                    }
                                </div>
                                <div className={cn(
                                    "lg:hidden grid transition-[grid-template-rows] duration-300 ease-out",
                                    activeId === index ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] opacity-0"
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
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="relative z-10 flex flex-col items-center text-center h-full justify-center"
                            >
                                <div className="w-64 h-64 rounded-full flex items-center justify-center mb-10 bg-brand-green/5 border border-brand-green/20">
                                    {graphics[activeId] || graphics[0]}
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-6">
                                    {faq[activeId]?.question}
                                </h3>
                                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                                    {faq[activeId]?.answer}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
