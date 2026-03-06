"use client";

import { PhoneHero } from "@/components/phone-assistant/PhoneHero";
import { PhoneFeatures } from "@/components/phone-assistant/PhoneFeatures";
import { PhoneUseCases } from "@/components/phone-assistant/PhoneUseCases";
import { PhoneComparison } from "@/components/phone-assistant/PhoneComparison";
import { PhoneFaq } from "@/components/phone-assistant/PhoneFaq";
import { Consultation } from "@/components/sections/Consultation";

export default function PhoneAssistantPage() {
    return (
        <div className="bg-deep-navy min-h-screen">
            <PhoneHero />

            <PhoneFeatures />

            <PhoneUseCases />

            <PhoneComparison />

            <PhoneFaq />

            <Consultation />
        </div>
    );
}
