import PageContainer from "@/components/layout/PageContainer";

export default function AboutHero() {
  return (
    <section className="border-b border-[var(--line)] py-20">
      <PageContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">About the studio</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              A boutique practice centered on calm, functional, and visually balanced spaces.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
              Meliora Maison is positioned as a refined interior design studio. This page is designed to communicate trust, taste, and a clear point of view instead of reading like a personal blog.
            </p>
          </div>
          <div className="aspect-[4/5] rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,#d8c2b0_0%,#f4ece3_100%)]" />
        </div>
      </PageContainer>
    </section>
  );
}
