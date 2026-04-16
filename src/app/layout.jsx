import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: `${siteConfig.name} | Interior Design Studio`,
  description: siteConfig.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
