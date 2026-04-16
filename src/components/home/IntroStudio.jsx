import PageContainer from "@/components/layout/PageContainer";

export default function IntroStudio() {
  return (
    <section className="py-20">
      <PageContainer>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Approach</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Design that feels effortless because it has been carefully considered.</h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-[var(--muted)]">
            <p>
              The studio is built around thoughtful decision-making: colour that supports the mood of a room, lighting that changes how a home is experienced, and furnishings that bring comfort as well as visual clarity.
            </p>
            <p>
              This starter site is structured to convert visitors into inquiries, with clear service pages, a portfolio, and a simple contact flow ready for future integrations.
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
