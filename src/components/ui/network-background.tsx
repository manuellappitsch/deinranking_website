"use client";

import React, { useEffect, useRef } from "react";

export function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Optimization: Disable on mobile to prevent stuttering
        if (window.innerWidth < 768) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;

        const points: { x: number; y: number; vx: number; vy: number }[] = [];
        const numPoints = 40; // Number of nodes
        const connectionDistance = 150; // Max distance to connect

        // Initialize points
        for (let i = 0; i < numPoints; i++) {
            points.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5, // Slow velocity
                vy: (Math.random() - 0.5) * 0.5,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update and draw points
            points.forEach((point, i) => {
                point.x += point.vx;
                point.y += point.vy;

                // Bounce off edges
                if (point.x < 0 || point.x > width) point.vx *= -1;
                if (point.y < 0 || point.y > height) point.vy *= -1;

                // Draw point
                ctx.beginPath();
                ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(118, 176, 65, 0.3)"; // Brand green
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < points.length; j++) {
                    const other = points[j];
                    const dx = point.x - other.x;
                    const dy = point.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(point.x, point.y);
                        ctx.lineTo(other.x, other.y);
                        const opacity = 1 - distance / connectionDistance;
                        ctx.strokeStyle = `rgba(118, 176, 65, ${opacity * 0.2})`; // Faint green lines
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };

        window.addEventListener("resize", handleResize);
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />
    );
}
