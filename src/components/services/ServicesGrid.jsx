import PageContainer from "@/components/layout/PageContainer";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="py-20">
      <PageContainer>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
