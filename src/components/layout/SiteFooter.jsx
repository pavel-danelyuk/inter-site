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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Contact
          </p>

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