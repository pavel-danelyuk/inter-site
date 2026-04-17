import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

export default function Hero() {
  return (
    <section
      className="relative min-h-[78vh] w-full overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-banner.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/35" />

      <PageContainer className="relative z-10 flex min-h-[78vh] items-center">
        <div className="text-white">
          {/* Company name (BIG) */}
          <p className="font-(family-name:--font-heading) font-semibold text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-[0.03em]">
            Meliora Maison
          </p>

          {/* Subtitle */}
          <p className="mt-4 text-sm uppercase tracking-[0.28em] text-white/80">
            Interior Design Studio
          </p>

          {/* Supporting text */}
          <p className="mt-6 max-w-lg text-base leading-7 text-white/85 md:text-lg">
            Thoughtful interiors designed through colour, lighting, and curated furnishings.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-[var(--primary)] transition hover:bg-white/90"
            >
              Explore Our Work
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-white/60 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}