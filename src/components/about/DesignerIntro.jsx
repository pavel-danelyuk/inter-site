import PageContainer from "@/components/layout/PageContainer";

export default function DesignerIntro() {
  return (
    <section className="border-t border-[var(--line)] py-20">
      <PageContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="aspect-square rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,#f5ede5_0%,#d0b7a2_100%)]" />
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Founder / Designer</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Introduce the person behind the studio here.</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              This section is intentionally written as a placeholder so you can later replace it with the real designer story, credentials, and perspective. Keep the copy focused on expertise, approach, and the experience clients can expect.
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
