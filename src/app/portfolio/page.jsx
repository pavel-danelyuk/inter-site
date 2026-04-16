import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/layout/SectionHeading";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata = {
  title: "Portfolio | Meliora Maison",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-[var(--line)] py-20">
        <PageContainer>
          <SectionHeading
            eyebrow="Portfolio"
            title="A selection of calm, layered, and highly livable interiors."
            description="These concept projects show the studio's approach to proportion, palette, lighting, and styling."
          />
        </PageContainer>
      </section>
      <PortfolioGrid />
    </>
  );
}
