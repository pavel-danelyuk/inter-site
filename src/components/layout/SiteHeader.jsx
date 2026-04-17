import Link from "next/link";
import Image from "next/image";
import PageContainer from "./PageContainer";

export default function SiteHeader() {
  return (
    <header className="bg-[var(--primary)] text-white">
      <PageContainer className="flex items-center justify-between py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Meliora Maison"
              width={48}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
              <span className="text-sm tracking-wide">
                Meliora Maison
              </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/services" className="hover:opacity-70">
            Services
          </Link>
          <Link href="/portfolio" className="hover:opacity-70">
            Portfolio
          </Link>
          <Link href="/about" className="hover:opacity-70">
            About
          </Link>
          <Link href="/contact" className="hover:opacity-70">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-black/80 transition"
        >
          Book a Consultation
        </Link>

      </PageContainer>
    </header>
  );
}