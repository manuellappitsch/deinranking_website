"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const defaultSnippets = [
    "<meta name='description' content='SEO' />",
    "const ranking = true;",
    "h1 { color: #76B041; }",
    "function optimize() { return 'Top 1'; }",
    "<title>DeinRanking</title>",
    "import { SEO } from 'google';",
    "robots.txt: Allow /",
    "<link rel='canonical' />",
    "display: flex; justify-content: center;",
    "console.log('Sichtbarkeit gesteigert');"
];

export function CodeBackground({ snippets }: { snippets?: string[] }) {
    const [items, setItems] = useState<Array<{ id: number; text: string; x: number; y: number; duration: number; delay: number }>>([]);

    useEffect(() => {
        const activeSnippets = snippets || defaultSnippets;
        const newItems = Array.from({ length: 8 }).map((_, i) => ({
            id: i,
            text: activeSnippets[Math.floor(Math.random() * activeSnippets.length)],
            x: Math.random() * 100, // percentage
            y: Math.random() * 100, // percentage
            duration: 20 + Math.random() * 10,
            delay: Math.random() * 0.5
        }));
        setItems(newItems);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    className="absolute text-brand-green/20 text-sm md:text-base font-mono whitespace-nowrap select-none font-bold"
                    initial={{ x: `${item.x}vw`, y: `${item.y}vh`, opacity: 0.3 }}
                    animate={{ y: `-10vh`, opacity: [0.3, 1, 1, 0] }} // Start visible!
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: item.delay,
                    }}
                >
                    {item.text}
                </motion.div>
            ))}
        </div>
    );
}
