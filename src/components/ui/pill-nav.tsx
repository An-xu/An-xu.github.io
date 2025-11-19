"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface PillNavProps {
  items: NavItem[];
  className?: string;
}

export function PillNav({ items, className }: PillNavProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md shadow-lg",
        className
      )}
    >
      {items.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          className="relative px-4 py-2 text-sm font-medium text-white transition-colors hover:text-white/80"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === index && (
            <motion.div
              layoutId="pill-nav-hover"
              className="absolute inset-0 -z-10 rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
