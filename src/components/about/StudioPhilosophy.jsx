import PageContainer from "@/components/layout/PageContainer";

const pillars = [
  {
    title: "Clarity",
    text: "Good design helps a space feel resolved instead of visually noisy or undecided.",
  },
  {
    title: "Warmth",
    text: "Material, lighting, and tone work together to make a room feel deeply livable.",
  },
  {
    title: "Function",
    text: "A beautiful interior should still support the patterns of daily life with ease.",
  },
];

export default function StudioPhilosophy() {
  return (
    <section className="py-20">
      <PageContainer>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{pillar.text}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
