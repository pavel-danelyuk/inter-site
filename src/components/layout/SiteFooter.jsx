import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import { navigation, siteConfig } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="bg-[var(--surface-soft)] border-t border-[var(--line)] py-12">
      <PageContainer className="grid gap-10 md:grid-cols-3">
        
        {/* Brand + Logo */}
        <div>
          <Image
            src="/images/logo-footer.png"
            alt="Meliora Maison Interior Design Studio"
            width={517}
            height={545}
            className="w-36 h-auto object-contain"
            priority
          />

          <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Navigation
          </p>

          <div className="mt-4 grid gap-3 text-sm">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:opacity-70">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="mt-4 space-y-4 text-sm text-[var(--muted)]">
            
            {/* Email */}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="flex items-center gap-2 transition hover:opacity-70"
            >
              {/* Email icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <path d="M4 6h16v12H4z" />
                <path d="M4 6l8 6 8-6" />
              </svg>

              {siteConfig.contactEmail}
            </a>

            {/* Location */}
            <div className="flex items-center gap-2">
              {/* Location icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
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
              {/* Instagram icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.2" />
              </svg>

              @MelioraMaisonDesign
            </a>

          </div>
        </div>

      </PageContainer>
    </footer>
  );
}