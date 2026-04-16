import PageContainer from "@/components/layout/PageContainer";
import { services } from "@/data/services";

export default function ServiceDetailsSection() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--card)] py-20">
      <PageContainer>
        <div className="space-y-12">
          {services.map((service) => (
            <article key={service.id} className="grid gap-6 rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-sm md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">{service.category}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">{service.longDescription}</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">What's included</p>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--muted)] sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li key={item} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
