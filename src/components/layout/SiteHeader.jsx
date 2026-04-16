import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import { navigation, siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(246,241,235,0.92)] backdrop-blur">
      <PageContainer className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="min-w-fit">
          <div className="text-lg font-semibold tracking-[0.18em] uppercase">{siteConfig.name}</div>
          <div className="text-xs tracking-[0.2em] text-[var(--muted)]">Interior Design Studio</div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href="/contact" size="sm">
          Book a Consultation
        </Button>
      </PageContainer>
    </header>
  );
}
