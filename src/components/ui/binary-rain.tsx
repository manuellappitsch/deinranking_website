"use client";

import { useEffect, useRef } from "react";

export const BinaryRain = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const columns = Math.floor(width / 20);
        const drops: number[] = new Array(columns).fill(1);

        // Brand Green color: #76B041
        // We'll use a slightly lighter version for visibility against dark bg
        const colors = ["#76B041", "#4C8A2A", "#96D061"];

        const draw = () => {
            // Semi-transparent black to create trail effect
            ctx.fillStyle = "rgba(7, 16, 32, 0.05)"; // Deep Navy with high transparency
            ctx.fillRect(0, 0, width, height);

            ctx.font = "14px monospace";

            for (let i = 0; i < drops.length; i++) {
                // Random binary character
                const text = Math.random() > 0.5 ? "1" : "0";

                // Random green shade
                ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];

                // Draw the character
                ctx.fillText(text, i * 20, drops[i] * 20);

                // Reset drop to top with interruption
                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Move drop down
                drops[i]++;
            }
        };

        let animationFrameId: number;
        let lastTime = 0;
        const fps = 20; // Slower speed (approx 20 frames per second)
        const interval = 1000 / fps;

        const render = (currentTime: number) => {
            animationFrameId = requestAnimationFrame(render);

            const delta = currentTime - lastTime;
            if (delta > interval) {
                lastTime = currentTime - (delta % interval);
                draw();
            }
        };

        render(0);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Recalculate columns on resize
            const newColumns = Math.floor(width / 20);
            // Preserve existing drops if possible, or reset
            if (newColumns !== Math.floor(canvas.width / 20)) {
                drops.length = newColumns;
                drops.fill(1);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-10 mix-blend-screen"
        />
    );
};
