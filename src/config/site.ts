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
                        ],
                    },
                    {
                        title: "SEO",
                        links: [
                            { title: "SEO-Betreuung", href: "/seo-betreuung" },
                            { title: "Content-Marketing", href: "/content-marketing" },
                            { title: "SEO-Analyse", href: "/seo-analyse" },
                            { title: "Keywordrecherche inkl. Contentplan", href: "/ki-telefonassistent" },
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
        ],
        hero: {
            badge: "Die Zukunft der Arbeit ist jetzt",
            title: "Automatisierung & KI-Lösungen für dein Business",
            description: "Wir transformieren Unternehmen durch intelligente Automatisierung und maßgeschneiderte KI-Systeme. Nutze LLMs, RPA und Chatbots, um Prozesse zu beschleunigen, Kosten zu senken und dir den entscheidenden Wettbewerbsvorteil zu sichern.",
            ctaPrimary: "Kostenloses Erstgespräch",
            ctaSecondary: "Lösungen entdecken",
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
            subtitle: "Manuel Lappitsch & Team",
            description: "Hi, ich bin Manuel Lappitsch. Früher sah ich im SEO-Bereich viele Unternehmen, die an ineffizienten Prozessen scheiterten. Sichtbarkeit bringt nichts, wenn die Abwicklung klemmt.\n\nDeshalb habe ich mich der KI und Automatisierung verschrieben. Gemeinsam mit meinem Team aus Entwicklern und Strategen bauen wir keine theoretischen Konzepte, sondern funktionierende Lösungen. Wir schreiben Code, verbinden Systeme und schaffen echte Effizienz, die dein Unternehmen voranbringt.",
            image: "/images/robin-sumzuege.png",
        },
        testimonials: {
            title: "Was unsere Kunden sagen",
            subtitle: "Ergebnisse, die für sich sprechen",
            items: [
                {
                    quote: "Dank der Automatisierung sparen wir uns eine komplette Vollzeitstelle im Backoffice. Die Investition hat sich nach 3 Monaten amortisiert.",
                    author: "Markus W.",
                    role: "Geschäftsführer, Logistik GmbH",
                },
                {
                    quote: "Der KI-Telefonassistent ist ein Gamechanger. Wir verpassen keinen Anruf mehr auf der Baustelle und Termine landen direkt im Kalender.",
                    author: "Thomas R.",
                    role: "Inhaber, Elektro R.",
                },
                {
                    quote: "Vibe-Coding hat uns ermöglicht, ein internes Tool in nur 2 Wochen zu launchen. Unglaubliche Geschwindigkeit und Qualität.",
                    author: "Sarah L.",
                    role: "Marketing Head, TechStart",
                },
                {
                    quote: "Manuel und sein Team haben unser Mindset verändert. Wir lösen Probleme jetzt smart und automatisiert statt manuell.",
                    author: "Dr. Peter K.",
                    role: "CEO, Beratungshaus K&P",
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
                ctaSecondary: "Beratung buchen",
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
            categories: ["Alle", "Automatisierung", "KI-Automatisierung", "KI-Lösungen", "Vibe-Coding", "Lokale KI-Systeme", "SEO"],
            posts: [
                {
                    title: "Make.com: Automatisierung für dein Business, ohne Programmierkentnisse",
                    excerpt: "Wie du mit Make.com Prozesse automatisierst, Zeit sparst und dein Unternehmen skalierst – ganz ohne Code.",
                    date: "17. August 2025",
                    category: "Automatisierung",
                    slug: "/seo-ratgeber/make-com",
                    image: "/images/blog/make-com/hero.png",
                },
                {
                    title: "Featured Snippets verstehen & gezielt optimieren",
                    excerpt: "Wie du auf Position 0 in den Google-Suchergebnissen landest und deine Sichtbarkeit maximierst.",
                    date: "15. Juli 2025",
                    category: "SEO",
                    slug: "/seo-ratgeber/featured-snippets",
                    image: "https://dein-ranking.at/wp-content/uploads/2024/07/Featured-Snippets-Titelbild-Blog-1024x576.png",
                },
                {
                    title: "Google SGE: Neue Chancen für Sichtbarkeit & SEO",
                    excerpt: "Search Generative Experience: Wie KI die Google-Suche verändert und was das für dein SEO bedeutet.",
                    date: "7. Juli 2025",
                    category: "SEO",
                    slug: "/seo-ratgeber/google-sge",
                    image: "https://dein-ranking.at/wp-content/uploads/2024/07/Google-SGE-Titelbild-Blog-1024x576.png",
                },
                {
                    title: "Warum KI-Automatisierung 2025 unverzichtbar ist",
                    excerpt: "Unternehmen, die jetzt nicht automatisieren, werden den Anschluss verlieren. Wir zeigen warum.",
                    date: "15. Dez 2024",
                    category: "KI-Automatisierung",
                    slug: "/seo-ratgeber/ki-automatisierung-2025",
                    image: "bg-blue-500/10",
                },
                {
                    title: "Voice AI: Der neue Standard im Kundenservice?",
                    excerpt: "Erfahrungsbericht: Wie ein Handwerksbetrieb 30% mehr Umsatz durch KI-Telefonie generierte.",
                    date: "05. Dez 2024",
                    category: "KI-Lösungen",
                    slug: "/seo-ratgeber/voice-ai-kundenservice",
                    image: "bg-purple-500/10",
                },
                {
                    title: "Vibe-Coding: Software-Entwicklung im Zeitraffer",
                    excerpt: "Wie wir mit KI-gestütztem Coding interne Tools in Tagen statt Monaten bauen.",
                    date: "01. Dez 2024",
                    category: "Vibe-Coding",
                    slug: "/seo-ratgeber/vibe-coding-intro",
                    image: "bg-pink-500/10",
                },
                {
                    title: "Lokale LLMs: Maximale Sicherheit für deine Daten",
                    excerpt: "Warum On-Premise KI-Modelle für sensible Unternehmensdaten die beste Wahl sind.",
                    date: "25. Nov 2024",
                    category: "Lokale KI-Systeme",
                    slug: "/seo-ratgeber/lokale-llms-sicherheit",
                    image: "bg-indigo-500/10",
                },
            ],
        },
        caseStudies: {
            title: "Success Stories",
            subtitle: "Echte Ergebnisse aus der Praxis.",
            categories: ["Alle", "Automatisierung", "KI-Automatisierung", "KI-Lösungen", "Softwarelösungen"],
            items: [
                {
                    title: "Logistik-Prozesse 100% automatisiert: Von der Bestellung bis zum Versand",
                    excerpt: "Wie ein mittelständisches Logistikunternehmen durch Make.com und Custom-Scripting 25 Arbeitsstunden pro Woche einspart.",
                    date: "10. Dez 2024",
                    category: "Automatisierung",
                    slug: "/casestudies/logistik-automatisierung",
                    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
                    client: "Logistik GmbH",
                },
                {
                    title: "24/7 Erreichbarkeit im Handwerk: KI-Voicebot nimmt Termine an",
                    excerpt: "Kein Anruf geht mehr ins Leere. Wie ein Sanitärbetrieb seine Terminbuchungen um 30% steigerte.",
                    date: "05. Jan 2025",
                    category: "KI-Lösungen",
                    slug: "/casestudies/ki-voicebot-handwerk",
                    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
                    client: "Sanitär Müller",
                },
                {
                    title: "Internes Vertriebs-Dashboard in 3 Tagen statt 3 Monaten",
                    excerpt: "Vibe-Coding in Action: Wie wir für ein Sales-Team ein maßgeschneidertes Performance-Tool bauten.",
                    date: "20. Jan 2025",
                    category: "Softwarelösungen",
                    slug: "/casestudies/vibe-coding-dashboard",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
                    client: "TechStart",
                },
            ],
        },
        footer: {
            copyright: "© 2024 DeinRanking. Alle Rechte vorbehalten.",
            columns: {
                services: {
                    title: "Leistungen",
                    links: [
                        { label: "KI-Lösungen", href: "/ki-loesungen" },
                        { label: "Automatisierung", href: "/automatisierung" },
                        { label: "SEO-Optimierung", href: "/seo" },
                        { label: "Vibe-Coding", href: "/vibe-coding" },
                    ],
                },
                company: {
                    title: "Unternehmen",
                    links: [
                        { label: "Über uns", href: "/ueber-deinranking" },
                        { label: "Case Studies", href: "/casestudies" },
                        { label: "Ratgeber", href: "/seo-ratgeber" },
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
                twitter: "https://twitter.com/deinranking",
                linkedin: "https://linkedin.com/company/deinranking",
                instagram: "https://instagram.com/deinranking",
                github: "https://github.com/deinranking",
            }
        },
    },
};
export type SiteConfig = typeof siteConfig;
