export default function ServiceCard({ service }) {
  return (
    <article className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-sm">
      <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">{service.category}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight">{service.title}</h3>
      <p className="mt-4 text-base leading-7 text-[var(--muted)]">{service.shortDescription}</p>
      <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
        {service.includes.slice(0, 3).map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </article>
  );
}
