import Container from "@/components/sections/container"
import FadeIn from "@/components/sections/fade-in"
import { Award, Percent, Zap, Shield } from "lucide-react"

const benefits = [
  {
    title: "Premium Quality",
    description:
      "Authentic products sourced with quality checks and brand-grade handling standards.",
    Icon: Award,
  },
  {
    title: "Wholesale Advantage",
    description:
      "Competitive B2B pricing and scalable procurement built for growth.",
    Icon: Percent,
  },
  {
    title: "Fast Fulfillment",
    description:
      "Efficient fulfillment workflows designed for predictable replenishment cycles.",
    Icon: Zap,
  },
  {
    title: "Trusted Distribution",
    description:
      "Reliable distribution network supported by operations, tracking, and service.",
    Icon: Shield,
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="section-y bg-secondary/30">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn className="space-y-3">
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[oklch(var(--gold))]">
              Your Trusted Partner in Beauty Supply
            </p>
            <h2 className="heading-lg">
              Why choose us
            </h2>
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, description, Icon }, idx) => (
            <FadeIn key={title} delay={0.04 * idx}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-4 font-heading text-xl tracking-tight">{title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

