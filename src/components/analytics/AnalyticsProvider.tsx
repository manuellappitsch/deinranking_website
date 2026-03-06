"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function AnalyticsProvider() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Placeholder for future analytics that don't rely on the old CookieBanner
    // Cookiebot + GTM now handle the consent and tag firing

    return null;
}
