import { siteConfig } from "@/data/site";

export default function ContactInfo() {
  return (
    <div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-sm">
      <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
        Studio details
      </p>

      <div className="mt-5 space-y-4 text-sm leading-6 text-[var(--muted)]">

        {/* Email */}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="flex items-center gap-2 transition hover:opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4 opacity-70"
          >
            <path d="M4 6h16v12H4z" />
            <path d="M4 6l8 6 8-6" />
          </svg>

          <span className="text-[var(--foreground)]">
            {siteConfig.contactEmail}
          </span>
        </a>

        {/* Location */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4 opacity-70"
          >
            <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>

          <span>{siteConfig.location}</span>
        </div>

        {/* Instagram */}
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition hover:opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4 opacity-70"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17" cy="7" r="1.2" />
          </svg>

          <span>@MelioraMaisonDesign</span>
        </a>

      </div>
    </div>
  );
}
