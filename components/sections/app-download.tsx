import Container from "@/components/sections/container"
import FadeIn from "@/components/sections/fade-in"
import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"

export default function AppDownload() {
  return (
    <section className="section-y">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-[radial-gradient(circle_at_top_left,oklch(var(--soft-pink)),transparent_55%),radial-gradient(circle_at_bottom_right,oklch(var(--soft-beige)),transparent_55%),linear-gradient(135deg,white,oklch(var(--soft-beige)))] p-8 sm:p-10 lg:p-12 shadow-soft">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-secondary/60 blur-2xl" />
            <div className="grid gap-8 lg:grid-cols-[1.3fr,0.7fr] lg:items-center">
              <div className="space-y-3">
                <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[oklch(var(--gold))]">
                  Download Our App Today!
                </p>
                <h2 className="heading-lg">
                  Manage Orders Anytime Anywhere Easily
                </h2>
                <p className="text-[15px] sm:text-base text-muted-foreground max-w-2xl">
                  Keep procurement and fulfillment moving with on-the-go order
                  management designed for B2B teams.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                <Button
                  variant="outline"
                  className="rounded-full h-11 bg-white/70 hover:bg-white"
                >
                  <Smartphone className="mr-2 h-4 w-4" />
                  App Store (Coming Soon)
                </Button>
                <Button className="rounded-full h-11 shadow-soft">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Play Store (Coming Soon)
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

