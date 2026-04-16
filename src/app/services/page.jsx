import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/layout/SectionHeading";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServiceDetailsSection from "@/components/services/ServiceDetailsSection";
import ServiceProcess from "@/components/services/ServiceProcess";

export const metadata = {
  title: "Services | Meliora Maison",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[var(--line)] py-20">
        <PageContainer>
          <SectionHeading
            eyebrow="Services"
            title="Thoughtful interior design support for every stage of your space."
            description="From focused consultations to full-service design, each offer is built to bring clarity, cohesion, and confidence to your home."
          />
        </PageContainer>
      </section>
      <ServicesGrid />
      <ServiceDetailsSection />
      <ServiceProcess />
    </>
  );
}
