import PageContainer from "@/components/layout/PageContainer";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { projects } from "@/data/projects";

export default function PortfolioGrid() {
  return (
    <section className="py-20">
      <PageContainer>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
