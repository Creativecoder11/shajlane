"use client";

import FadeIn from "@/components/sections/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader, { GradientText, GradientUnderline } from "../ui/SectionHeader";
import { motion, cubicBezier } from "framer-motion";

const faqs = [
  {
    q: "How does Shajlane ensure product quality?",
    a: "Shajlane partners with verified brands and follows strict quality control and compliance standards to guarantee safe, reliable beauty products.",
  },
  {
    q: "How does Shajlane ensure product quality?",
    a: "Shajlane partners with verified brands and follows strict quality control and compliance standards to guarantee safe, reliable beauty products.",
  },
  {
    q: "How does Shajlane ensure product quality?",
    a: "Shajlane partners with verified brands and follows strict quality control and compliance standards to guarantee safe, reliable beauty products.",
  },
  {
    q: "How does Shajlane ensure product quality?",
    a: "Shajlane partners with verified brands and follows strict quality control and compliance standards to guarantee safe, reliable beauty products.",
  },
  {
    q: "How does Shajlane ensure product quality?",
    a: "Shajlane partners with verified brands and follows strict quality control and compliance standards to guarantee safe, reliable beauty products.",
  },
];

export default function Faq() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const fadeSlide = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  return (
    <section className="section-y bg-secondary/20">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.div variants={fadeSlide}>
            <FadeIn className="space-y-3">
              <SectionHeader
                align="center"
                label="FAQ"
                heading={
                  <>
                    Everything You Need To <br className="hidden md:block" />
                    <span className="relative inline-block">
                      <GradientText>Know</GradientText>
                      <GradientUnderline bottom="-2px" mdBottom="-4px" />
                    </span>
                  </>
                }
              />
            </FadeIn>
          </motion.div>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-5 md:mt-10 space-y-6"
        >
          <Accordion type="single" collapsible defaultValue="item-1" className="space-y-5 md:space-y-8">
            {faqs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeSlide}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="relative"
              >

                {/* dashed outer border */}
                <div className="absolute -inset-1 rounded-xl border border-dashed border-[#FFD7FF]" />

                {/* gradient border wrapper */}
                <div
                  className="relative rounded-xl bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)]"
                  style={{ padding: "1px 4px 4px 1px" }}
                >
                  <AccordionItem
                    value={`item-${idx}`}
                    className="font-body relative rounded-xl bg-white px-3 md:px-6 md:py-2"
                  >
                    <AccordionTrigger className="text-[#0D0C1D] text-left text-lg md:text-xl font-semibold cursor-pointer">
                      <span className="flex items-center gap-4">
                        <span>{String(idx + 1).padStart(2, "0")}.</span>
                        {item.q}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="text-base text-[#5B5B68] leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </div>

              </motion.div>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
}