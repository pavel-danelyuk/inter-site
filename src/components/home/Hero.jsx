import PageContainer from "@/components/layout/PageContainer";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="border-b border-[var(--line)] py-20 sm:py-28">
      <PageContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Boutique interior design studio</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Refined interiors shaped by calm palettes, layered light, and thoughtful detail.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              Meliora Maison helps clients create cohesive, elevated spaces through lighting design, colour strategy, furniture styling, and full-service interior design.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/services" size="lg">
                Explore Services
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Start Your Inquiry
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-sm">
            <div className="aspect-[4/5] rounded-[1.5rem] bg-[linear-gradient(160deg,#e8ddd1_0%,#d6c2af_45%,#c0aa96_100%)]" />
            <div className="absolute inset-x-10 bottom-10 rounded-[1.5rem] border border-white/50 bg-white/70 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Studio focus</p>
              <p className="mt-2 text-lg font-medium">Homes that feel balanced, personal, and beautifully resolved.</p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
