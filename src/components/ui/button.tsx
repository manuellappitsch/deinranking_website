"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
        const variants = {
            primary: "bg-brand-green text-white hover:bg-opacity-90 shadow-lg shadow-brand-green/20 rounded-l-none rounded-r-full",
            secondary: "bg-white text-deep-navy hover:bg-gray-100",
            outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green/10 rounded-l-full rounded-r-none",
            ghost: "text-gray-300 hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        const Comp = (asChild ? Slot : motion.button) as any;

        const motionProps = asChild ? {} : {
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 }
        };

        return (
            <Comp
                ref={ref}
                {...motionProps}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button };
