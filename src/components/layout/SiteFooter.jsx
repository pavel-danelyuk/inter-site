import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import { navigation, siteConfig } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] py-12">
      <PageContainer className="grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold uppercase tracking-[0.18em]">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Navigation</p>
          <div className="mt-4 grid gap-3 text-sm">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:opacity-70">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            <p>{siteConfig.contactEmail}</p>
            <p>{siteConfig.location}</p>
            <p>{siteConfig.instagram}</p>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
