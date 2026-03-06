"use client";

import { WorkshopHero } from "@/components/workshop/WorkshopHero";
import { WorkshopBenefits } from "@/components/workshop/WorkshopBenefits";
import { WorkshopProcess } from "@/components/workshop/WorkshopProcess";
import { WorkshopHost } from "@/components/workshop/WorkshopHost";
import { WorkshopCTA } from "@/components/workshop/WorkshopCTA";

export default function WorkshopPage() {
    return (
        <div className="bg-deep-navy min-h-screen">
            <WorkshopHero />
            <WorkshopBenefits />
            <WorkshopProcess />
            <WorkshopHost />
            <WorkshopCTA />
        </div>
    );
}
