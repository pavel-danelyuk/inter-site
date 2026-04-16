export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[var(--muted)]">{description}</p> : null}
    </div>
  );
}
