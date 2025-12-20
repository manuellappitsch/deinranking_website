"use client";

import { useState, useEffect, useCallback } from "react";
import Script from "next/script";
import { CookieBanner, ConsentState } from "@/components/privacy/CookieBanner";

const GTM_ID = "GTM-PW8MZ9KV";
const GA4_ID = "G-DSSP13S6M0";
const FB_PIXEL_ID = "1710172766538287";

export function AnalyticsProvider() {
    const [consent, setConsent] = useState<ConsentState>({
        essential: true,
        statistics: false,
        marketing: false,
        external: false,
    });

    useEffect(() => {
        const storedConsent = localStorage.getItem("cookie-consent-v2");
        if (storedConsent) {
            setConsent(JSON.parse(storedConsent));
        }
    }, []);

    const handleConsentChange = useCallback((newConsent: ConsentState) => {
        setConsent(newConsent);
    }, []);

    return (
        <>
            <CookieBanner onConsentChange={handleConsentChange} />

            {/* Statistics: GTM & GA4 */}
            {consent.statistics && (
                <>
                    {/* Google Tag Manager */}
                    <Script
                        id="gtm-script"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','${GTM_ID}');
                            `,
                        }}
                    />

                    {/* Google Analytics 4 */}
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA4_ID}');
                        `}
                    </Script>
                </>
            )}

            {/* Marketing: Facebook Pixel */}
            {consent.marketing && (
                <Script id="facebook-pixel" strategy="afterInteractive">
                    {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${FB_PIXEL_ID}');
                    fbq('track', 'PageView');
                    `}
                </Script>
            )}
        </>
    );
}
