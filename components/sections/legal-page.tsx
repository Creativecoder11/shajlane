import Link from "next/link";
import Header from "./header";
import Footer from "./footer";
import Container from "./container";

export type LegalSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type LegalPageProps = {
  title: string;
  updatedAt: string;
  sections: LegalSection[];
};

export default function LegalPage({ title, updatedAt, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 md:pt-40 pb-20 md:pb-28">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="heading-hero">{title}</h1>
              <p className="mt-4 text-muted-foreground text-lg">
                Last updated: {updatedAt}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 lg:gap-16">
              <article className="order-2 lg:order-1 space-y-14">
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-32"
                  >
                    <h2 className="heading-md mb-4 text-foreground flex items-baseline gap-3">
                      <span className="text-violet-700 font-heading font-semibold text-xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </h2>
                    <div className="text-foreground/80 leading-relaxed text-base md:text-lg space-y-4">
                      {section.content}
                    </div>
                  </section>
                ))}
              </article>

              <aside className="order-1 lg:order-2">
                <nav className="lg:sticky lg:top-32 bg-muted/40 rounded-2xl p-6 border border-border/50">
                  <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">
                    On this page
                  </h3>
                  <ul className="space-y-1">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <Link
                          href={`#${section.id}`}
                          className="block text-sm text-muted-foreground hover:text-violet-700 transition-colors py-1"
                        >
                          {section.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
