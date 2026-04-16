import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/layout/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export default function FeaturedServices() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--card)] py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="Services"
          title="Flexible design services for focused support or full-room transformation."
          description="Every offer is written like a real business service, so you can refine the content later without changing the structure."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-10">
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </PageContainer>
    </section>
  );
}
