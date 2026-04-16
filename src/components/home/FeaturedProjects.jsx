import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/layout/SectionHeading";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected spaces that reflect the studio's visual language."
          description="These sample projects give you a polished starting point for a future portfolio section."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-10">
          <Button href="/portfolio" variant="secondary">
            See Portfolio
          </Button>
        </div>
      </PageContainer>
    </section>
  );
}
