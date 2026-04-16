import PageContainer from "@/components/layout/PageContainer";

const process = [
  "Submit your inquiry with a few project details.",
  "Receive a reply to confirm fit, scope, and timing.",
  "Choose the service that best matches your space and goals.",
  "Move into the consultation or full design process with clarity.",
];

export default function ServiceProcess() {
  return (
    <section className="py-20">
      <PageContainer>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Client journey</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">A clear process encourages more inquiries.</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              This block is intentionally simple and practical. It shows visitors that there is a structured way to work with the studio, which helps reduce hesitation.
            </p>
          </div>
          <div className="space-y-4">
            {process.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-[1.5rem] border border-[var(--line)] bg-[var(--card)] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="pt-2 text-sm leading-6 text-[var(--muted)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
