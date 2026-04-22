"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PageContainer from "./PageContainer";
import Button from "@/components/ui/Button";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [showBrandName, setShowBrandName] = useState(true);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsShrunk(scrollY > 50);

      if (isHomePage) {
        setShowBrandName(scrollY > 200);
      } else {
        setShowBrandName(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-[var(--primary)]/90 text-white backdrop-blur-md transition-all duration-500 ${
        isShrunk ? "shadow-sm" : ""
      }`}
    >
      <PageContainer
        className={`flex items-center justify-between gap-6 transition-all duration-500 ${
          isShrunk ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Meliora Maison"
              width={45}
              height={48}
              className={`object-contain transition-all duration-300 ${
                isShrunk ? "h-8" : "h-10"
              }`}
              style={{ width: "auto" }}
              priority
            />

            <span
              className={`font-(family-name:--font-heading) tracking-[0.06em] transition-all duration-500 ${
                showBrandName
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-1 opacity-0"
              } ${isShrunk ? "text-base" : "text-lg"}`}
            >
              Meliora Maison
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link href="/services" className="transition hover:opacity-70">
            Services
          </Link>
          <Link href="/portfolio" className="transition hover:opacity-70">
            Portfolio
          </Link>
          <Link href="/about" className="transition hover:opacity-70">
            About
          </Link>
          <Link href="/contact" className="transition hover:opacity-70">
            Contact
          </Link>
        </nav>

        <Button
          href="/contact"
          variant="light"
          size={isShrunk ? "sm" : "md"}
        >
          Book a Consultation
        </Button>
      </PageContainer>
    </header>
  );
}