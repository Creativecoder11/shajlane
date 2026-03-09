"use client";

import Image from "next/image";
import FadeIn from "./fade-in";
import { motion, cubicBezier } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.72, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
};

const products = [
    {
        image: "/assets/brand/brand1.png",
        title: "Facial Cleansers",
    },
    {
        image: "/assets/brand/brand2.png",
        title: "Serums & Moisturizers",
    },
    {
        image: "/assets/brand/brand3.png",
        title: "Sun Protection",
    },
    {
        image: "/assets/brand/brand4.png",
        title: "Body Care",
    },
    {
        image: "/assets/brand/brand1.png",
        title: "Facial Cleansers",
    },
    {
        image: "/assets/brand/brand2.png",
        title: "Serums & Moisturizers",
    },
    {
        image: "/assets/brand/brand3.png",
        title: "Sun Protection",
    },
    {
        image: "/assets/brand/brand4.png",
        title: "Body Care",
    },
];

const Serve = () => {
    return (
        <div className="section-y overflow-hidden">
            {/* Header */}
            <div className="mx-auto text-center">
                <FadeIn className="space-y-3">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <span className="flex items-center gap-2 text-xl font-medium text-[#7E4BA4] uppercase">
                            <Image
                                src="/assets/icon/about-icon.svg"
                                alt="About Shajlane"
                                width={24}
                                height={24}
                            />
                            WE SERVE
                        </span>

                        <motion.h1
                            variants={fadeUp}
                            className="text-[2.6rem] sm:text-[3.2rem] lg:text-6xl font-semibold leading-[1.08] tracking-tight text-gray-900"
                        >
                            Beauty Products {" "}
                            <span className="relative inline-block text-6xl font-semibold tracking-tight">
                                <span className="bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)] bg-clip-text text-transparent">
                                    We Offer
                                </span>

                                <motion.svg
                                    viewBox="0 0 500 40"
                                    className="absolute left-0 -bottom-4 w-full"
                                    fill="none"
                                >
                                    <motion.path
                                        d="M10 25 Q250 5 490 25"
                                        stroke="url(#gradient)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{
                                            duration: 1.2,
                                            ease: "easeInOut",
                                            delay: 0.3,
                                        }}
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
                                            <stop offset="0%" stopColor="#7E4BA4" />
                                            <stop offset="100%" stopColor="#301C3E" />
                                        </linearGradient>
                                    </defs>
                                </motion.svg>
                            </span>
                        </motion.h1>
                    </div>
                </FadeIn>
            </div>

            <div className="mt-20 overflow-hidden">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                    className="flex w-max py-2 border-t border-b border-dashed border-[#FFD7FF]"
                >
                    {[...products, ...products].map((item, i) => (
                        <div
                            key={i}
                            className="relative flex flex-col items-center text-center px-8 py-8 bg-[#F9FAFB] border-r border-dashed border-[#FFD7FF] shrink-0 group overflow-hidden cursor-pointer"
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(126,75,164,0.10)_0%,rgba(48,28,62,0.10)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <Image
                                src={item.image}
                                alt={item.title}
                                width={316}
                                height={316}
                                className="relative z-10 object-contain"
                            />

                            <p className="relative z-10 mt-4 text-2xl font-semibold text-[#0D0C1D]">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Serve;