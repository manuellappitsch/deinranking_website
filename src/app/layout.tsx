import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Using Inter as a placeholder for Liebling, aliased to the same variable name
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-liebling",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-deep-navy font-sans antialiased text-pure-white selection:bg-brand-green selection:text-white overflow-x-hidden",
          fontSans.variable
        )}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.seo.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Cookiebot */}
        <Script
          id="cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid={siteConfig.seo.cookiebotId}
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${siteConfig.seo.gtmId}');
          `}
        </Script>
      </body>
    </html>
  );
}
