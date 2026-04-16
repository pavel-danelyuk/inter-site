import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/layout/SectionHeading";

const steps = [
  {
    title: "Discovery",
    description: "We begin by understanding the room, your goals, and the desired atmosphere.",
  },
  {
    title: "Direction",
    description: "A focused concept takes shape through palette, layout, lighting, and furnishing recommendations.",
  },
  {
    title: "Refinement",
    description: "Selections are edited and aligned until the design feels cohesive and ready to execute.",
  },
  {
    title: "Implementation",
    description: "You receive a clear plan or a fuller design service depending on the scope you chose.",
  },
];

export default function DesignProcess() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--card)] py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="Process"
          title="A simple path from uncertainty to a finished design direction."
          description="This section works well on service sites because it reduces hesitation and explains what happens next."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.description}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
