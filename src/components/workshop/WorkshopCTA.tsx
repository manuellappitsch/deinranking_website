"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";

export function WorkshopCTA() {
    return (
        <section className="py-24 relative overflow-hidden flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="relative bg-gradient-to-br from-brand-green/10 to-deep-navy border border-brand-green/30 rounded-[3rem] p-12 md:p-24 text-center overflow-hidden">

                    {/* Background Shine */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                            Bereit für dein <br />
                            <span className="text-brand-green">Upgrade?</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                            Der erste Schritt ist der wichtigste. Lass uns unverbindlich prüfen, ob der Workshop für dein Unternehmen Sinn macht.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                            <Link href="/kontakt">
                                <Button className="h-14 px-8 text-lg bg-brand-green hover:bg-brand-green/90 text-white font-bold rounded-full shadow-[0_0_30px_rgba(118,176,65,0.4)] hover:shadow-[0_0_50px_rgba(118,176,65,0.6)] hover:scale-105 transition-all duration-300">
                                    Termin anfragen
                                </Button>
                            </Link>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-brand-green" size={16} />
                                <span>100% Geld-zurück-Garantie, wenn kein Mehrwert</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="text-brand-green" size={16} />
                                <span>Schnelle Verfügbarkeit (Remote & Vor Ort)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
