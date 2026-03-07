import Container from "@/components/sections/container"
import FadeIn from "@/components/sections/fade-in"
import { Button } from "@/components/ui/button"
import { ShieldCheck, BadgeCheck, ClipboardCheck, Building2 } from "lucide-react"

const features = [
  { title: "Authentic Brands", Icon: ShieldCheck },
  { title: "Verified Suppliers", Icon: BadgeCheck },
  { title: "Quality Assurance", Icon: ClipboardCheck },
  { title: "Trusted Distribution", Icon: Building2 },
]

export default function QualityCompliance() {
  return (
    <section className="section-y bg-[linear-gradient(to_bottom,oklch(var(--soft-beige)),transparent)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn className="space-y-3">
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[oklch(var(--gold))]">
              Excellence In Quality And Compliance
            </p>
            <h2 className="heading-lg">
              Quality you can stand behind
            </h2>
            <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed">
              We prioritize authentic sourcing, verified partners, and consistent
              handling so your customers receive premium products—every time.
            </p>
            <div className="pt-2">
              <Button asChild className="rounded-full px-8 h-11 shadow-soft">
                <a href="#contact">Shop Now</a>
              </Button>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(({ title, Icon }, idx) => (
              <FadeIn key={title} delay={0.04 * idx}>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mt-4 font-heading text-xl tracking-tight">{title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Standards designed for professional B2B distribution.
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

