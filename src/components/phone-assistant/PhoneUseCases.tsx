"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Hammer, Home, Stethoscope } from "lucide-react";
import { siteConfig } from "@/config/site";

export function PhoneUseCases() {
    const { useCases } = siteConfig.content.phoneAssistant;
    // Map icons manually since they are strings in config
    const icons = [Hammer, Home, Stethoscope];

    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers = itemRefs.current.map((ref, index) => {
            if (!ref) return null;
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) setActiveIndex(index);
            }, { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" });
            observer.observe(ref);
            return observer;
        });
        return () => observers.forEach(obs => obs?.disconnect());
    }, []);

    const [isClient, setIsClient] = useState(false);
    useEffect(() => { setIsClient(true); }, []);

    return (
        <section className="py-24 relative" ref={containerRef}>
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 bg-[size:30px_30px]" />
                <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-deep-navy to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-deep-navy to-transparent z-10 pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Sticky Sidebar */}
                    <div className="hidden lg:flex flex-col gap-8 w-1/3 sticky top-32 self-start h-fit">
                        <div className="backdrop-blur-sm bg-deep-navy/30 p-6 rounded-2xl border border-white/5">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{useCases.title}</h2>
                            <p className="text-gray-400 text-lg">{useCases.subtitle}</p>
                        </div>

                        <div className="relative pl-8 border-l border-white/10 space-y-6">
                            <motion.div
                                className="absolute left-[-2px] top-0 w-1 h-8 bg-brand-green rounded-full shadow-[0_0_15px_rgba(118,176,65,0.5)]"
                                animate={{ top: activeIndex * 68 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                            {useCases.items.map((item, i) => (
                                <div
                                    key={i}
                                    className={`text-xl font-bold cursor-pointer transition-all duration-300 ${i === activeIndex ? 'text-white scale-105 origin-left' : 'text-gray-500 hover:text-gray-300'}`}
                                    onClick={() => itemRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                                >
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="w-full lg:w-2/3 space-y-24 lg:space-y-40 pb-24">
                        {useCases.items.map((item, i) => {
                            const Icon = icons[i] || Hammer;
                            return (
                                <motion.div
                                    key={i}
                                    ref={el => { if (el) itemRefs.current[i] = el; }}
                                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5 }}
                                    className={`relative p-8 md:p-12 rounded-3xl border backdrop-blur-md transition-all duration-500 group overflow-hidden ${i === activeIndex ? 'bg-white/10 border-brand-green/50 shadow-[0_0_50px_rgba(118,176,65,0.1)]' : 'bg-white/5 border-white/10'}`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl group-hover:bg-brand-green/20 transition-colors" />

                                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                        <div className="w-16 h-16 rounded-2xl bg-brand-green/20 flex items-center justify-center border border-brand-green/30 shadow-[0_0_20px_rgba(118,176,65,0.2)] shrink-0 group-hover:scale-110 transition-transform duration-500">
                                            <Icon size={32} className="text-brand-green drop-shadow" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-green transition-colors">{item.title}</h3>
                                            <p className="text-gray-300 text-lg leading-relaxed mb-6">{item.description}</p>
                                            <div className="bg-black/20 p-4 rounded-lg border border-white/5 italic text-brand-green">
                                                "{item.example}"
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
