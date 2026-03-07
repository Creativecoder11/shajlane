"use client"

import Container from "@/components/sections/container"
import FadeIn from "@/components/sections/fade-in"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Do you supply only to large businesses?",
    a: "We serve growing retailers, salons, pharmacies, and online sellers. Our wholesale model supports both single-location and multi-location partners.",
  },
  {
    q: "How do you ensure authenticity?",
    a: "We work with verified suppliers and apply sourcing checks and documentation processes designed for B2B distribution.",
  },
  {
    q: "What categories do you carry?",
    a: "Our catalog includes cleansers, serums & moisturizers, sun protection, body care, and more—curated for professional demand.",
  },
  {
    q: "How does fulfillment work?",
    a: "We coordinate ordering and logistics through technology-driven operations to improve predictability and speed for partners.",
  },
]

export default function Faq() {
  return (
    <section className="section-y bg-secondary/20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn className="space-y-3">
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[oklch(var(--gold))]">
              Everything You Need To Know
            </p>
            <h2 className="heading-lg">
              FAQ
            </h2>
          </FadeIn>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-white p-6 shadow-sm">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((item, idx) => (
              <AccordionItem key={item.q} value={`item-${idx}`}>
                <AccordionTrigger className="text-base">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}

