export const siteConfig = {
    name: "DeinRanking",
    description: "KI & Automatisierung Agentur",
    url: "https://deinranking.de", // Placeholder
    ogImage: "https://deinranking.de/og.jpg",
    links: {
        twitter: "https://twitter.com/deinranking",
        github: "https://github.com/deinranking",
    },
    seo: {
        title: "DeinRanking | KI & Automatisierung",
        description: "Wir automatisieren Ihre Prozesse mit künstlicher Intelligenz.",
        metaPixelId: "", // User to fill
        googleAnalyticsId: "", // User to fill
        gtmId: "GTM-XXXXXXX", // User to fill
        cookiebotId: "64d05a38-5123-45e1-9917-dd7505a74f43",
    },
    content: {
        mainNav: [
            {
                title: "Leistungen",
                items: [
                    {
                        title: "KI-Lösungen",
                        links: [
                            { title: "KI-Telefonassistent", href: "/ki-telefonassistent" },
                            { title: "KI-Automatisierung", href: "/ki-automatisierung" },
                            { title: "Lokale KI-Systeme", href: "/lokale-ki-systeme" },
                        ],
                    },
                    {
                        title: "Automatisierung",
                        links: [
                            { title: "In Arbeit...", href: "#", disabled: true },
                        ],
                    },
                    {
                        title: "Digitalisierung",
                        links: [
                            { title: "In Arbeit...", href: "#", disabled: true },
                        ],
                    },
                ],
            },
            { title: "Case Studies", href: "/casestudies" },
            { title: "Über DeinRanking", href: "/ueber-deinranking" },
            { title: "Ratgeber", href: "/ratgeber" },
            { title: "KI Workshop", href: "/ki-workshop" },
        ],
        hero: {
            badge: "Die Zukunft der Arbeit ist jetzt",
            title: "Automatisierung & KI-Lösungen für dein Business",
            description: "Wir transformieren Unternehmen mit Automatisierungen und KI-Systeme, um Prozesse zu beschleunigen, Kosten zu senken und dir den entscheidenden Wettbewerbsvorteil zu sichern.",
            ctaPrimary: "Kostenloses Erstgespräch",
            ctaPrimaryHref: "/kontakt",
            ctaSecondary: "Lösungen entdecken",
            ctaSecondaryHref: "#services",
        },
        services: {
            title: "Unsere Dienstleistungen",

            subtitle: "Ganzheitliche Lösungen für die digitale Transformation",
            items: [
                {
                    title: "Lokale KI-Systeme",
                    description: "Maximale Sicherheit für deine Daten. Wir implementieren leistungsstarke KI-Modelle (On-Premise), die vollständig auf deiner eigenen Hardware laufen. Ideal für Branchen mit strengen Compliance-Anforderungen.",
                    icon: "Server",
                },
                {
                    title: "Prompt Engineering",
                    description: "Die perfekte Anweisung für perfekte Ergebnisse. Wir entwickeln komplexe Prompts, die das Maximum aus KI-Modellen herausholen und halluzinationsfreie, verlässliche Resultate für deine Prozesse liefern.",
                    icon: "MessageSquareCode",
                },
                {
                    title: "K.I. Automatisierung",
                    description: "Intelligente Workflows statt manueller Arbeit. Unsere Systeme analysieren E-Mails, verstehen Dokumente und treffen Entscheidungen – vollautomatisch, rund um die Uhr und fehlerfrei.",
                    icon: "Bot",
                },
                {
                    title: "Klassische Automatisierung",
                    description: "Verbinde deine Software-Landschaft nahtlos. Wir vernetzen CRM, ERP und Marketing-Tools über APIs, eliminieren Medienbrüche und sorgen für einen reibungslosen Datenfluss ohne manuelles Copy-Paste.",
                    icon: "Workflow",
                },
                {
                    title: "Vibe-Coding",
                    description: "Software-Entwicklung in Rekordzeit. Mit KI-gestützten Tools erstellen wir maßgeschneiderte Dashboards und interne Anwendungen in Wochen statt Monaten. Kosteneffizient und exakt auf dich zugeschnitten.",
                    icon: "Code2",
                },
                {
                    title: "KI-Telefonassistenten",
                    description: "Nie wieder einen Anruf verpassen. Unsere KI-Assistenten nehmen Gespräche an, qualifizieren Leads und vereinbaren Termine – natürlich klingend, freundlich und 24/7 erreichbar.",
                    icon: "Phone",
                },
                {
                    title: "KI Chatbots",
                    description: "Der intelligente Support-Mitarbeiter. Unsere Chatbots verstehen Kontext, lösen Kundenanfragen selbstständig und entlasten dein Team massiv von wiederkehrenden Aufgaben.",
                    icon: "MessageCircle",
                },
                {
                    title: "Firmeneigene Lösungen",
                    description: "Spezifische Probleme brauchen spezifische Lösungen. Wir entwickeln individuelle Software-Architekturen, von der OCR-Rechnungsverarbeitung bis zur komplexen Datenanalyse, die genau zu dir passen.",
                    icon: "Building2",
                },
            ],
        },
        benefits: {
            title: "Warum Automatisierung & KI?",
            subtitle: "Der Hebel für dein Unternehmenswachstum",
            items: [
                {
                    title: "Massive Zeitersparnis",
                    description: "Schenke deinem Team tausende Stunden zurück. Durch die Automatisierung administrativer Aufgaben bleibt endlich Zeit für Strategie, Kreativität und echte Kundenbeziehungen.",
                    icon: "Clock",
                },
                {
                    title: "Arbeitserleichterung & Verlässlichkeit",
                    description: "Prozesse laufen 24/7 mit 100%iger Präzision. Das reduziert Stress, eliminiert Flüchtigkeitsfehler und schafft Sicherheit, dass wichtige Aufgaben garantiert erledigt werden.",
                    icon: "ShieldCheck",
                },
                {
                    title: "Wettbewerbsvorteil & Output",
                    description: "Skaliere deinen Output ohne zusätzliches Personal. Reagiere schneller auf Kunden, triff datenbasierte Entscheidungen und sei der Konkurrenz durch Innovation immer einen Schritt voraus.",
                    icon: "TrendingUp",
                },
            ],
        },
        about: {
            title: "Über Uns",
            subtitle: "DeinRanking GmbH aus Graz",
            description: "Als Agentur für Automatisierung und KI-Lösungen aus Graz beraten wir regionale Unternehmen bei der digitalen Transformation. Wir bleiben nicht bei der Theorie stehen, sondern setzen Projekte direkt um.\n\nUnser Fokus liegt auf intelligenten Automatisierungsprojekten, maßgeschneiderten KI-Lösungen und individueller Software-Entwicklung. Zusätzlich unterstützen wir unsere Kunden erfolgreich bei der Neukunden- und Mitarbeitergewinnung durch gezielte Social Media Werbeanzeigen.",
            image: "/images/manuel-lappitsch-hq.jpg",
        },
        testimonials: {
            title: "Was unsere Kunden sagen",
            subtitle: "Echte Ergebnisse aus der Praxis",
            items: [
                {
                    text: "Seit der Zusammenarbeit hat sich unser Webseiten-Traffic verneunfacht. Ein unglaublicher Hebel für unser Geschäft, den wir so nicht erwartet hätten.",
                    name: "Robin Engelhart",
                    role: "Geschäftsführer, Robins Umzüge GmbH",
                },
                {
                    text: "Die digitale Lösung für unsere Lieferscheine hat unseren Papierkram massiv reduziert. Der Arbeitsalltag ist viel einfacher und effizienter geworden.",
                    name: "Manfred Hartmann",
                    role: "Geschäftsführer, Hartmann Erdbau GmbH",
                },
                {
                    text: "Die lokale KI-Lösung findet Dokumente in wenigen Sekunden. Das spart uns im Ingenieurs-Alltag extrem viel wertvolle Zeit bei der Recherche.",
                    name: "Markus Frewein",
                    role: "Geschäftsführer, verkehrPlus ZT GmbH",
                },
                {
                    text: "Mit Social Media Marketing wurden über 1000 neue Follower generiert. Unsere Kurse konnten wir dadurch mehrmals komplett füllen.",
                    name: "Jeannine Feiertag",
                    role: "Geschäftsführerin, J & J Sportanlagen GmbH",
                },
                {
                    text: "Innerhalb weniger Tage wurde eine eigene Software gebaut, die exakt auf unsere speziellen Anwendungsfälle zugeschnitten war. Top Umsetzung!",
                    name: "Mag. Markus Totz",
                    role: "Leitung, Wirbelsäulenstützpunkt Graz MT GmbH",
                },
                {
                    text: "Wir schalten seit über zwei Jahren erfolgreich Social Media Ads mit DeinRanking. Ein konstanter Kanal für neue Mitglieder.",
                    name: "Luca Kerbl",
                    role: "Geschäftsführer, Zitadelle Graz",
                },
                {
                    text: "Der Webseiten-Relaunch und die technische Unterstützung waren top. Unser Traffic hat sich verdreifacht und die Seite läuft perfekt.",
                    name: "Bernadette Marsano",
                    role: "Geschäftsführerin, Robins Facility Management OG",
                },
                {
                    text: "Bei Webseiten-Projekten ist DeinRanking unser fester Partner für den SEO-Part. Die Zusammenarbeit funktioniert immer reibungslos.",
                    name: "Stephan Schadl",
                    role: "Inhaber, DeinBranding KG",
                },
            ],
        },
        consultation: {
            title: "Bereit für den nächsten Schritt?",
            subtitle: "Buche dein kostenloses Erstgespräch",
            description: "Lass uns in 30 Minuten herausfinden, wo dein größtes Automatisierungspotenzial liegt. Wir analysieren deine Situation und skizzieren erste Lösungen. Unverbindlich und auf Augenhöhe.",
        },
        phoneAssistant: {
            hero: {
                badge: "24/7 Erreichbarkeit",
                title: "Der KI-Telefonassistent, der niemals schläft",
                subtitle: "Verpasse nie wieder einen Lead. Perfekter Service rund um die Uhr.",
                description: "Unser KI-Voice-Bot nimmt Anrufe entgegen, qualifiziert Kunden, vereinbart Termine und synchronisiert alles direkt in dein CRM. Klingt wie ein Mensch, arbeitet wie eine Maschine.",
                ctaPrimary: "Demo anhören",
                ctaPrimaryHref: "/kontakt",
                ctaSecondary: "Beratung buchen",
                ctaSecondaryHref: "/kontakt",
            },
            features: [
                {
                    title: "Natürliche Stimme",
                    description: "Dank modernster Voice-AI klingt unser Assistent täuschend echt. Keine roboterhaften Ansagen, sondern fließende Dialoge mit Empathie und Verständnis.",
                    icon: "Mic",
                },
                {
                    title: "Intelligente Terminbuchung",
                    description: "Der Assistent prüft deinen Kalender in Echtzeit und vereinbart Termine direkt im Gespräch. Keine E-Mail-Ping-Pong mehr.",
                    icon: "Calendar",
                },
                {
                    title: "Nahtlose CRM-Integration",
                    description: "Jedes Gespräch wird transkribiert und zusammengefasst. Alle Infos landen strukturiert in deinem CRM (HubSpot, Pipedrive, Salesforce, etc.).",
                    icon: "Database",
                },
                {
                    title: "Sofortige Qualifizierung",
                    description: "Der Bot stellt die richtigen Fragen, um Leads vorzuqualifizieren. Du sprichst nur noch mit Kunden, die wirklich kaufen wollen.",
                    icon: "Filter",
                },
            ],
            comparison: {
                title: "Warum KI statt Anrufbeantworter?",
                items: [
                    {
                        feature: "Erreichbarkeit",
                        human: "8-17 Uhr (Mo-Fr)",
                        voicemail: "24/7 (aber passiv)",
                        ai: "24/7 (aktiv & lösend)",
                    },
                    {
                        feature: "Kundenreaktion",
                        human: "Positiv",
                        voicemail: "Legen oft auf",
                        ai: "Begeistert (Wow-Effekt)",
                    },
                    {
                        feature: "Ergebnis",
                        human: "Termin/Info",
                        voicemail: "Rückruf nötig",
                        ai: "Termin/Info sofort",
                    },
                    {
                        feature: "Kosten",
                        human: "Hoch (>3000€/Monat)",
                        voicemail: "Gering",
                        ai: "Gering (ab 299€/Monat)",
                    },
                ],
            },
            faq: [
                {
                    question: "Klingt das nicht total nach Roboter?",
                    answer: "Nein. Wir nutzen die neuesten Modelle von OpenAI und ElevenLabs. Die Latenz ist minimal (<800ms) und die Betonung ist extrem menschlich. Viele Anrufer merken gar nicht, dass sie mit einer KI sprechen.",
                },
                {
                    question: "Was passiert, wenn die KI etwas nicht weiß?",
                    answer: "Wir definieren klare Eskalations-Szenarien. Wenn die KI nicht weiterweiß, kann sie das Gespräch höflich beenden, einen Rückruf versprechen oder (wenn gewünscht) an einen menschlichen Mitarbeiter weiterleiten.",
                },
                {
                    question: "Kann ich meine eigene Stimme nutzen?",
                    answer: "Ja! Wir können deine Stimme klonen (Voice Cloning), sodass dein digitaler Zwilling für dich ans Telefon geht. Das schafft maximales Vertrauen.",
                },
            ],
            useCases: {
                title: "Für wen ist das geeignet?",
                subtitle: "Branchen, die bereits profitieren",
                items: [
                    {
                        title: "Handwerk & Dienstleistung",
                        description: "Kein Anruf geht mehr ins Leere, während du auf der Baustelle oder beim Kunden bist. Die KI nimmt Terminwünsche auf und synchronisiert sie mit deinem Kalender.",
                        example: "Sanitärbetrieb Müller: +30% mehr Aufträge durch 24/7 Erreichbarkeit bei Notfällen.",
                        icon: "Hammer",
                    },
                    {
                        title: "Immobilienmakler",
                        description: "Interessenten rufen oft abends oder am Wochenende an. Die KI qualifiziert Käufer vor, beantwortet Fragen zum Exposé und vereinbart Besichtigungen.",
                        example: "ImmoTrust: Spart 20h Telefonzeit pro Woche und filtert 'Touristen' automatisch aus.",
                        icon: "Home",
                    },
                    {
                        title: "Arztpraxen & Kanzleien",
                        description: "Entlaste dein Empfangspersonal. Die KI kümmert sich um Terminabsagen, Rezeptbestellungen und Standardfragen, damit sich dein Team auf die Patienten konzentrieren kann.",
                        example: "Praxis Dr. Weber: Telefon klingelt 80% weniger, Patienten sind zufriedener.",
                        icon: "Stethoscope",
                    },
                ],
            },
        },
        aiAutomation: {
            hero: {
                badge: "Maximale Effizienz",
                title: "Dein Unternehmen auf Autopilot",
                subtitle: "Schluss mit manuellem Copy-Paste. Wir verbinden deine Tools und automatisieren deine Prozesse.",
                description: "Stell dir vor, deine Software-Tools würden endlich miteinander sprechen. Keine Medienbrüche mehr, keine Tippfehler, keine verschwendete Zeit. Wir bauen intelligente Workflows, die dir den Rücken freihalten.",
                ctaPrimary: "Prozess-Audit buchen",
                ctaSecondary: "Mehr erfahren",
            },
            benefits: [
                {
                    title: "Fehlerquote: 0%",
                    description: "Menschen machen Fehler, besonders bei repetitiven Aufgaben. Automatisierungen arbeiten präzise, immer gleich und rund um die Uhr.",
                    icon: "Target",
                },
                {
                    title: "Skalierbarkeit",
                    description: "Ob 10 oder 10.000 Anfragen – dein automatisierter Prozess schafft das Volumen, ohne dass du neue Mitarbeiter einstellen musst.",
                    icon: "TrendingUp",
                },
                {
                    title: "Mitarbeiter-Zufriedenheit",
                    description: "Niemand füllt gerne Excel-Listen aus. Befreie dein Team von 'Roboter-Arbeit', damit sie sich auf wertschöpfende Aufgaben konzentrieren können.",
                    icon: "Smile",
                },
            ],
            useCases: {
                title: "Was wir automatisieren",
                subtitle: "Grundsätzlich gilt: Jeder Prozess, der digital ist, kann automatisiert werden. Hier sind Bereiche, in denen wir täglich Zeit sparen:",
                categories: [
                    {
                        title: "Marketing Automatisierung",
                        icon: "Megaphone",
                        examples: [
                            "Social Media Auto-Posting (Blog → LinkedIn/Twitter)",
                            "Ad-Spend Monitoring & Budget-Alerts",
                            "Lead-Nurturing E-Mail Sequenzen",
                            "Content-Recycling mit KI"
                        ]
                    },
                    {
                        title: "Sales Automatisierung",
                        icon: "Target",
                        examples: [
                            "Personalisierte E-Mail-Outreach (KI-generiert)",
                            "Automatische Angebotserstellung & Versand",
                            "CRM-Synchronisation & Deal-Updates",
                            "Meeting-Vorbereitung & Lead-Recherche"
                        ]
                    },
                    {
                        title: "Onboarding Automatisierung",
                        icon: "UserPlus",
                        examples: [
                            "Vertragsversand & Digitale Signatur",
                            "Account-Erstellung (Slack, Google, Jira)",
                            "Hardware-Bestellung automatisch auslösen",
                            "Interaktive Willkommens-Sequenzen"
                        ]
                    },
                    {
                        title: "Fulfillment Automatisierung",
                        icon: "Package",
                        examples: [
                            "Bestellbestätigung & Rechnungserstellung",
                            "Versandlabel-Erstellung & Tracking",
                            "Status-Updates an den Kunden",
                            "Inventar-Abgleich & Nachbestellung"
                        ]
                    },
                    {
                        title: "Backoffice Automatisierung",
                        icon: "Settings",
                        examples: [
                            "Rechnungseingang & Vorkontierung (OCR)",
                            "Urlaubsanträge & Genehmigungen",
                            "Reisekostenabrechnung per Foto",
                            "Datensicherung & Archivierung"
                        ]
                    }
                ]
            },
            stats: {
                automationsBuilt: "500+",
                hoursSaved: "12.500+",
                roi: "300%",
            },
            caseStudies: [
                {
                    client: "E-Commerce Brand",
                    problem: "Manuelle Retourenbearbeitung kostete 20h/Woche.",
                    solution: "Vollautomatischer Workflow: Kunde meldet Retoure -> Label erstellt -> Lager informiert -> Erstattung vorbereitet.",
                    result: "90% Zeitersparnis, Erstattung in 2h statt 3 Tagen.",
                },
                {
                    client: "Marketing Agentur",
                    problem: "Reporting für 50 Kunden dauerte 3 Tage am Monatsende.",
                    solution: "Automatisierter Datenabzug aus FB/Google Ads -> Aufbereitung in Looker Studio -> Versand per Mail.",
                    result: "Reporting läuft jetzt vollautomatisch in 10 Minuten.",
                },
                {
                    client: "Handwerksbetrieb",
                    problem: "Angebote schreiben dauerte zu lange, Kunden sprangen ab.",
                    solution: "Formular auf Webseite -> KI generiert Angebot -> Versand zur Unterschrift.",
                    result: "Angebot ist in 5 Minuten beim Kunden, Abschlussquote +40%.",
                },
            ],
            tools: {
                title: "Wir sprechen deine Sprache",
                description: "Wir nutzen die Tools, die am besten zu deiner Infrastruktur passen. Von No-Code bis High-Code.",
                items: ["n8n", "Make", "Zapier", "Power Automate", "Python", "TypeScript"],
            },
        },
        impressum: {
            title: "Impressum",
            company: {
                name: "DeinRanking GmbH",
                address: "Gradnerstraße 120",
                city: "8054 Graz",
            },
            representedBy: [
                "Manuel Lappitsch",
                "Tondolo GmbH"
            ],
            contact: {
                phone: "+436767066333",
                email: "office@dein-ranking.at",
            },
            vatId: {
                label: "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:",
                number: "ATU82286704",
            },
            editorial: "Manuel Lappitsch",
            disputeResolution: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        },
        blog: {
            title: "Ratgeber & Insights",
            subtitle: "Expertenwissen zu KI, Automatisierung und SEO.",
            categories: ["Alle", "Automatisierung", "KI-Automatisierung", "KI-Lösungen", "Vibe-Coding", "Lokale KI-Systeme"],
            posts: [
                {
                    title: "Make.com: Automatisierung für dein Business, ohne Programmierkentnisse",
                    excerpt: "Wie du mit Make.com Prozesse automatisierst, Zeit sparst und dein Unternehmen skalierst – ganz ohne Code.",
                    date: "17. August 2025",
                    createdAt: "2025-08-17",
                    category: "Automatisierung",
                    slug: "/ratgeber/make-com",
                    image: "/images/blog/make-com/hero.jpg",
                },
            ],
        },
        caseStudies: {
            title: "Success Stories",
            subtitle: "Echte Ergebnisse aus der Praxis.",
            categories: ["Alle", "Automatisierung", "KI-Automatisierung", "KI-Lösungen", "Softwarelösungen", "Social Media Ads"],
            items: [
                {
                    title: "Lieferscheine 100% digital: Schluss mit Zettelwirtschaft am Bau",
                    excerpt: "Wie die Hartmann Erdbau GmbH durch HubSpot und digitale Protokolle ihre Maschinenvermietung papierlos und beweissicher machte.",
                    date: "20. Feb 2025",
                    createdAt: "2025-02-20",
                    category: "Automatisierung",
                    slug: "/casestudies/hartmann-erdbau-automatisierung",
                    image: "/images/case-studies/hartmann-erdbau/header.png",
                    client: "Hartmann Erdbau GmbH",
                },
                {
                    title: "Mitglieder-Wachstum auf Autopilot: Social Ads für Kampfsportverein",
                    excerpt: "Wie der Kampfsportverein Zitadelle durch gezielte Social Media Ads auf TikTok & Instagram konstant neue Mitglieder gewinnt – bei Lead-Preisen unter 20 €.",
                    date: "19. Dez 2025",
                    createdAt: "2025-12-19",
                    category: "Social Media Ads",
                    slug: "/casestudies/zitadelle-social-ads",
                    image: "/images/case-studies/zitadelle/header.jpg",
                    client: "Zitadelle Graz",
                },
                {
                    title: "Grand Opening Erfolg: 1.000 Follower in Monat 1",
                    excerpt: "Wie die NINJABOX Graz schon vor der Eröffnung für volle Kurse sorgte – mit einer smarten Social-Media-Strategie und nur 900€ Budget.",
                    date: "19. Okt 2025",
                    createdAt: "2025-10-19",
                    category: "Social Media Ads",
                    slug: "/casestudies/ninjabox-social-ads",
                    image: "/images/case-studies/ninjabox/header.png",
                    client: "NINJABOX Graz",
                },
            ],
        },
        footer: {
            copyright: "© 2024 DeinRanking. Alle Rechte vorbehalten.",
            columns: {
                services: {
                    title: "Leistungen",
                    links: [
                        { label: "KI Workshop", href: "/ki-workshop" },
                        { label: "KI Telefonassistent", href: "/ki-telefonassistent" },
                        { label: "KI Automatisierung", href: "/ki-automatisierung" },
                        { label: "Lokale KI-Systeme", href: "/lokale-ki-systeme" },
                    ],
                },
                company: {
                    title: "Unternehmen",
                    links: [
                        { label: "Über uns", href: "/ueber-deinranking" },
                        { label: "Case Studies", href: "/casestudies" },
                        { label: "Ratgeber", href: "/ratgeber" },
                        { label: "Kontakt", href: "/kontakt" },
                    ],
                },
                legal: {
                    title: "Rechtliches",
                    links: [
                        { label: "Impressum", href: "/impressum" },
                        { label: "Datenschutz", href: "/datenschutz" },
                        { label: "AGB", href: "/agbs" },
                    ],
                },
            },
            social: {
                linkedin: "https://www.linkedin.com/in/manuel-lappitsch/",
                instagram: "https://www.instagram.com/deinranking_gmbh/",
                facebook: "https://www.facebook.com/profile.php?id=61578050706636",
                tiktok: "https://www.tiktok.com/@deinranking",
                youtube: "https://www.youtube.com/@DeinRanking_GmbH",
            }
        },
    },
};
export type SiteConfig = typeof siteConfig;
