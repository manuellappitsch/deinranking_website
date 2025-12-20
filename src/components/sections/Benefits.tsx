"use client";

import { siteConfig } from "@/config/site";
import { Spotlight } from "@/components/ui/spotlight";
import { Clock, ShieldCheck, TrendingUp, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Clock: Clock,
    ShieldCheck: ShieldCheck,
    TrendingUp: TrendingUp,
};

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function Benefits() {
    const { benefits } = siteConfig.content;
    const [activeIndex, setActiveIndex] = useState(0);
    const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers = observerRefs.current.map((ref, index) => {
            if (!ref) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(index);
                    }
                },
                { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" }
            );

            observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach((observer) => observer?.disconnect());
        };
    }, []);

    return (
        <section className="py-32 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/15 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Sticky Header & Navigation */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {benefits.title}
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md mb-12">
                            {benefits.subtitle}
                        </p>

                        {/* Dynamic Active State List */}
                        <div className="hidden lg:flex flex-col gap-6 relative pl-6 border-l-2 border-white/10">
                            {/* Animated Active Line Indicator */}
                            <motion.div
                                className="absolute left-[-2px] top-0 w-0.5 bg-brand-green h-8 rounded-full"
                                animate={{ top: activeIndex * 56 + 4 }} // Approx height calculation
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />

                            {benefits.items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-300 cursor-pointer ${index === activeIndex ? 'text-white translate-x-2' : 'text-gray-600 hover:text-gray-400'}`}
                                    onClick={() => {
                                        document.getElementById(`benefit-card-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }}
                                >
                                    <span className={`text-xl font-bold block ${index === activeIndex ? 'scale-110 origin-left' : 'scale-100'}`}>
                                        {item.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Scrolling Items */}
                    <div className="flex flex-col gap-24 lg:gap-32 pb-24">
                        {benefits.items.map((item, index) => {
                            const Icon = iconMap[item.icon] || Clock;

                            return (
                                <div
                                    key={index}
                                    id={`benefit-card-${index}`}
                                    ref={(el) => {
                                        if (el) observerRefs.current[index] = el;
                                    }}
                                    className="scroll-mt-32"
                                >
                                    <Spotlight className={`flex flex-col items-start p-8 md:p-10 transition-all duration-500 border-white/10 rounded-2xl ${index === activeIndex ? 'bg-white/10 border-brand-green/50 shadow-[0_0_30px_rgba(118,176,65,0.1)]' : 'bg-white/5 opacity-50 scale-95'}`}>
                                        <div className="h-16 w-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6 text-brand-green">
                                            <Icon size={32} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-lg">
                                            {item.description}
                                        </p>
                                    </Spotlight>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
