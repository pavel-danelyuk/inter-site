import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

export default function Hero() {
  return (
    <section
      className="relative -mt-20 min-h-[100svh] overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-banner.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Image overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

      <PageContainer className="relative z-10 flex min-h-[100svh] items-center pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="text-white">
          <p className="font-(family-name:--font-heading) font-semibold text-5xl leading-[0.98] tracking-[0.08em] text-white md:text-7xl lg:text-[6.25rem]">
            Meliora Maison
          </p>

          <p className="mt-4 text-xs uppercase tracking-[0.32em] text-white/80 md:text-sm">
            Interior Design Studio
          </p>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/85 md:text-lg md:leading-8">
            Thoughtful interiors shaped through colour, lighting, furnishings,
            and full-service design for refined everyday living.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-[var(--primary)] transition hover:bg-white/90"
            >
              Explore Our Work
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-white/50 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}