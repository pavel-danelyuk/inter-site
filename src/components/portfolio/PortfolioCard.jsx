export default function PortfolioCard({ project }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-white shadow-sm">
      <div className={`aspect-[4/3] ${project.imageClass}`} />
      <div className="p-6">
        <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">{project.category}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.description}</p>
      </div>
    </article>
  );
}
