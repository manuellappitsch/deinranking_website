"use client";

import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

export function Consultation() {
    const { consultation } = siteConfig.content;

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="py-16 md:py-32 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30" style={{ backgroundSize: '40px 40px' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {consultation.title}
                    </h2>
                    <p className="text-xl text-brand-green font-medium mb-6">
                        {consultation.subtitle}
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                        {consultation.description}
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Glow behind the calendar */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-green/20 rounded-full blur-[100px] -z-10" />

                    <Card className="bg-transparent border-none p-0 min-h-[600px] flex items-center justify-center relative overflow-hidden w-full shadow-none">
                        <div className="w-full h-full min-h-[700px] meetings-iframe-container" data-src="https://meetings.hubspot.com/manuel-lappitsch/ki-strategiegesprach?embed=true"></div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
