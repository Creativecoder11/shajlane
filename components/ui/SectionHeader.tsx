"use client";

import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.72, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
};

// Three supported sizes — mobile / desktop
const sizeMap = {
    72: "text-[40px] lg:text-[72px]",
    64: "text-[36px] lg:text-[64px]",
    48: "text-[30px] lg:text-[48px]",
} as const;

type HeadingSize = keyof typeof sizeMap;

interface SectionHeaderProps {
    label: string;
    heading: React.ReactNode;
    /** 72 | 64 | 48 — desktop px size. Mobile scales down automatically. Default: 64 */
    size?: HeadingSize;
    align?: "left" | "center";
    className?: string;
}

export default function SectionHeader({
    label,
    heading,
    size = 64,
    align = "left",
    className = "",
}: SectionHeaderProps) {
    return (
        <div
            className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start"
                } ${className}`}
        >
            <span className="flex items-center gap-1 md:gap-2 text-base md:text-xl font-medium text-[#7E4BA4] uppercase">
                <Image
                    src="/assets/icon/section-icon.svg"
                    alt={label}
                    width={28}
                    height={20}
                    className="w-6 h-4 md:w-7 md:h-5 object-contain"
                />
                {label}
            </span>

            <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`${sizeMap[size]} font-semibold leading-[1.08] tracking-tight text-gray-900 mt-2 md:mt-4`}
            >
                {heading}
            </motion.h2>
        </div>
    );
}

/** Wrap any word in the heading with the brand gradient */
export function GradientText({ children }: { children: React.ReactNode }) {
    return (
        <span className="bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)] bg-clip-text text-transparent">
            {children}
        </span>
    );
}

/**
 * Animated wave underline — place inside a `relative inline-block` span.
 *
 * Recommended presets per heading size:
 *   size=72 → bottom="-4px" mdBottom="-10px"
 *   size=64 → bottom="-4px" mdBottom="-8px"
 *   size=48 → bottom="-2px" mdBottom="-6px"
 */
export function GradientUnderline({
    bottom = "-6px",
    mdBottom,
}: {
    bottom?: string;
    mdBottom?: string;
}) {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!mdBottom) return;

        const apply = () => {
            if (!svgRef.current) return;
            svgRef.current.style.bottom =
                window.innerWidth >= 768 ? mdBottom : bottom;
        };

        apply();
        window.addEventListener("resize", apply);
        return () => window.removeEventListener("resize", apply);
    }, [bottom, mdBottom]);

    return (
        <motion.svg
            ref={svgRef}
            viewBox="0 0 500 40"
            preserveAspectRatio="none"
            className="absolute left-0 w-full"
            style={{ bottom, height: "16px" }}
            fill="none"
        >
            <motion.path
                d="M10 25 Q250 5 490 25"
                stroke="url(#gu-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            />
            <defs>
                <linearGradient id="gu-gradient" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#7E4BA4" />
                    <stop offset="100%" stopColor="#301C3E" />
                </linearGradient>
            </defs>
        </motion.svg>
    );
}