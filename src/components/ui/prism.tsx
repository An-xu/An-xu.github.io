"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PrismProps {
    className?: string;
    children?: React.ReactNode;
}

export function Prism({ className, children }: PrismProps) {
    return (
        <div className={cn("relative w-full overflow-hidden bg-black", className)}>
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -top-[50%] -left-[50%] h-[200%] w-[200%] opacity-30 blur-[100px]"
                    style={{
                        background: "conic-gradient(from 0deg at 50% 50%, #ff0000, #00ff00, #0000ff, #ff0000)",
                    }}
                />
                <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl" />
            </div>
            <div className="relative z-10">{children}</div>
        </div>
    );
}
