"use client";

import Image from "next/image";
import { Quote, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function WorkshopHost() {
    return (
        <section className="py-48 md:py-64 relative overflow-hidden bg-deep-navy">
            {/* Gradient Overlay */}
            {/* Gradient Overlay removed for consistent background */}

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
                    {/* Image Column */}
                    <div className="lg:col-span-5 relative group">
                        <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/images/manu-workshop.jpg"
                                alt="Manuel Lappitsch"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-brand-green/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Floating Name Card - More Compact */}
                        <div className="absolute -bottom-4 right-4 lg:-right-4 bg-white text-deep-navy p-3 rounded-xl shadow-xl w-48">
                            <p className="font-bold text-base leading-tight">Manuel Lappitsch</p>
                            <p className="text-[10px] font-medium text-gray-600 mb-2 uppercase tracking-wide">Founder & AI Architect</p>
                            <Link href="https://www.linkedin.com/in/manuel-lappitsch/" target="_blank">
                                <Button size="sm" variant="outline" className="w-full h-7 text-[10px] border-deep-navy/10 hover:bg-deep-navy/5 px-0">
                                    <Linkedin className="w-3 h-3 mr-1" /> Connect
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 lg:pl-8 relative mt-8 lg:mt-0">
                        <Quote className="text-brand-green/20 absolute -top-6 -left-4" size={80} />

                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 relative z-10 leading-tight">
                            "Kein bloßer Tool-Pitch.<br />
                            <span className="text-gray-500">Sondern echte</span> <span className="text-brand-green">Wettbewerbsvorteile.</span>"
                        </h2>

                        <div className="space-y-4 text-base md:text-lg text-gray-300 relative z-10 leading-relaxed font-light">
                            <p>
                                <strong className="text-white">KI ist für mich keine Spielerei.</strong> Es ist der größte technologische Hebel unserer Zeit. In diesem Workshop geht es nicht um Theorie, sondern um Praxis.
                            </p>
                            <p>
                                Ich sehe täglich Unternehmen, die Monate mit falscher Implementierung verschwenden. Mein Anspruch für diesen Tag ist simple: Wir kürzen diesen Lernprozess ab. Von Monaten auf Stunden.
                            </p>
                            <p>
                                Ich nehme kein Blatt vor den Mund, wenn eine Prozess-Idee keinen Sinn macht. Aber ich finde immer einen Weg, wie wir es besser machen können.
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-3">
                            <div className="h-px bg-white/20 flex-1" />
                            <span className="text-brand-green font-mono uppercase tracking-widest text-xs">Your Host</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
