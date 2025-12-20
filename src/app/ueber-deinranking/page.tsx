"use client";

import { siteConfig } from "@/config/site";
import { Consultation } from "@/components/sections/Consultation";
import { motion } from "framer-motion";
import { MissionSection } from "@/components/about/MissionSection";
import { FounderTimeline } from "@/components/about/FounderTimeline";
import { LocationGallery } from "@/components/about/LocationGallery";
import { StatsSection } from "@/components/about/StatsSection";

import { AboutHero } from "@/components/about/AboutHero";

export default function AboutPage() {
  const { about } = siteConfig.content;

  return (
    <main className="min-h-screen bg-deep-navy selection:bg-brand-green selection:text-white relative">
      {/* Global Background Pattern for fluid transitions */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"
          style={{ backgroundSize: '40px 40px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-transparent to-deep-navy opacity-80" />
      </div>

      <div className="relative z-10 flex flex-col gap-[100px]">
        {/* High-Impact Hero Section */}
        <AboutHero />

        {/* Sektion 1: Mission */}
        <MissionSection />

        {/* Sektion 2: Founder / Timeline */}
        <FounderTimeline />

        {/* NEW: Stats Section */}
        <StatsSection />

        {/* NEW: Partners Section */}


        {/* Sektion 3: Location / Collage / Logos */}
        <LocationGallery />

        {/* Sektion 4: CTA */}
        <div className="pb-[100px]">
          <Consultation />
        </div>
      </div>
    </main>
  );
}
