"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TableOfContentsProps {
    items: { title: string; id: string; level: number }[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "0% 0% -80% 0%" }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    return (
        <nav className="space-y-2">
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Inhalt</h3>
            <ul className="space-y-2 text-sm border-l border-white/10">
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={cn(
                                "block pl-4 py-1 border-l-2 -ml-[2px] transition-colors hover:text-brand-green",
                                activeId === item.id
                                    ? "border-brand-green text-brand-green font-medium"
                                    : "border-transparent text-gray-400"
                            )}
                            style={{ paddingLeft: `${item.level * 16}px` }}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                                setActiveId(item.id);
                            }}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
