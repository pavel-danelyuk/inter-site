import { siteConfig } from "@/data/site";

export default function ContactInfo() {
  return (
    <div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-sm">
      <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">Studio details</p>
      <div className="mt-5 space-y-4 text-sm leading-6 text-[var(--muted)]">
        <p><span className="font-medium text-[var(--foreground)]">Email:</span> {siteConfig.contactEmail}</p>
        <p><span className="font-medium text-[var(--foreground)]">Location:</span> {siteConfig.location}</p>
        <p><span className="font-medium text-[var(--foreground)]">Instagram:</span> {siteConfig.instagram}</p>
      </div>
    </div>
  );
}
