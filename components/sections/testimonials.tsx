"use client"

import Container from "@/components/sections/container"
import FadeIn from "@/components/sections/fade-in"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

const testimonials = [
  {
    name: "Ayesha Rahman",
    company: "Jam Beauty",
    body: "Shajlane streamlined our sourcing. The product authenticity and fulfillment reliability are exactly what our B2B operations needed.",
  },
  {
    name: "Mehedi Hasan",
    company: "Jam Beauty",
    body: "Wholesale pricing is competitive and the ordering experience is smooth. Restocks are more predictable across our locations.",
  },
  {
    name: "Nusrat Jahan",
    company: "Jam Beauty",
    body: "Verified suppliers and consistent logistics—our team spends less time chasing inventory and more time growing sales.",
  },
  {
    name: "Tahmid Karim",
    company: "Jam Beauty",
    body: "The catalog is curated, the support is responsive, and the delivery updates keep everyone aligned.",
  },
  {
    name: "Sadia Islam",
    company: "Jam Beauty",
    body: "Professional, fast, and dependable. Shajlane feels like an extension of our procurement team.",
  },
  {
    name: "Rafiul Alam",
    company: "Jam Beauty",
    body: "High-quality assortment and fast fulfillment helped us improve availability and customer experience.",
  },
]

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false)
  const items = useMemo(() => testimonials, [])

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640)
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <section id="testimonials" className="section-y">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn className="space-y-3">
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[oklch(var(--gold))]">
              Trusted By Beauty Industry Professionals
            </p>
            <h2 className="heading-lg">
              Testimonials
            </h2>
          </FadeIn>
        </div>

        {!isMobile ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((t, idx) => (
              <FadeIn key={`${t.name}-${idx}`} delay={0.03 * idx}>
                <Card className="h-full rounded-2xl border-border bg-white shadow-sm hover:shadow-soft transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-base">
                      {t.name}{" "}
                      <span className="text-sm font-normal text-muted-foreground">
                        — {t.company}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground leading-relaxed">
                    {t.body}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="mt-10 overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...items, ...items].map((t, idx) => (
                <div key={`${t.name}-${idx}`} className="min-w-[78%]">
                  <Card className="rounded-2xl border-border bg-white shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-base">
                        {t.name}{" "}
                        <span className="text-sm font-normal text-muted-foreground">
                          — {t.company}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground leading-relaxed">
                      {t.body}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Swipe to explore more
            </p>
          </div>
        )}
      </Container>
    </section>
  )
}

