"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GridMotionProps {
    items: (string | React.ReactNode)[];
    className?: string;
}

export function GridMotion({ items, className }: GridMotionProps) {
    return (
        <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4", className)}>
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="group relative aspect-square overflow-hidden rounded-xl bg-white/5 p-4 hover:bg-white/10"
                >
                    <div className="flex h-full w-full items-center justify-center text-white">
                        {typeof item === "string" ? (
                            item.startsWith("http") ? (
                                <img src={item} alt={`Grid item ${index}`} className="h-full w-full object-cover" />
                            ) : (
                                <span className="text-lg font-medium">{item}</span>
                            )
                        ) : (
                            item
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
