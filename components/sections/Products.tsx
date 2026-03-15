"use client";

import Image from "next/image";
import FadeIn from "./fade-in";
import { motion, cubicBezier } from "framer-motion";
import SectionHeader, { GradientText, GradientUnderline } from "../ui/SectionHeader";

const products = [
    { image: "/assets/brand/brand1.png", title: "Facial Cleansers" },
    { image: "/assets/brand/brand2.png", title: "Serums & Moisturizers" },
    { image: "/assets/brand/brand3.png", title: "Sun Protection" },
    { image: "/assets/brand/brand4.png", title: "Body Care" },
    { image: "/assets/brand/brand1.png", title: "Facial Cleansers" },
    { image: "/assets/brand/brand2.png", title: "Serums & Moisturizers" },
    { image: "/assets/brand/brand3.png", title: "Sun Protection" },
    { image: "/assets/brand/brand4.png", title: "Body Care" },
];

const Products = () => {
    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
    };

    const fadeSlide = {
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1) } },
    };

    return (
        <div className="section-y overflow-hidden">
            {/* Header */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto text-center"
            >
                <motion.div variants={fadeSlide}>
                    <FadeIn className="space-y-3">
                        <SectionHeader
                            align="center"
                            label="WE SERVE"
                            heading={
                                <>
                                    Beauty Products <br />
                                    <span className="relative inline-block">
                                        <GradientText>We Offer</GradientText>
                                        <GradientUnderline bottom="-4px" mdBottom="-12px" />
                                    </span>
                                </>
                            }
                        />
                    </FadeIn>
                </motion.div>
            </motion.div>

            {/* Products Carousel */}
            <div className="mt-10 md:mt-20 overflow-hidden">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                    className="flex w-max py-2 border-t border-b border-dashed border-[#FFD7FF]"
                >
                    {[...products, ...products].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeSlide}
                            className="relative flex flex-col items-center text-center p-4 md:p-8 bg-[#F9FAFB] border-r border-dashed border-[#FFD7FF] shrink-0 group overflow-hidden cursor-pointer"
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(126,75,164,0.10)_0%,rgba(48,28,62,0.10)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <Image
                                src={item.image}
                                alt={item.title}
                                width={316}
                                height={316}
                                className="relative w-48 md:w-80 h-48 md:h-80 z-10 object-contain"
                            />

                            <p className="relative z-10 mt-2 md:mt-4 text-lg md:text-2xl font-semibold text-[#0D0C1D]">
                                {item.title}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Products;