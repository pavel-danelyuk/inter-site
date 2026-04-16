import Hero from "@/components/home/Hero";
import IntroStudio from "@/components/home/IntroStudio";
import FeaturedServices from "@/components/home/FeaturedServices";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import DesignProcess from "@/components/home/DesignProcess";
import CTAInquiry from "@/components/home/CTAInquiry";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStudio />
      <FeaturedServices />
      <FeaturedProjects />
      <DesignProcess />
      <CTAInquiry />
    </>
  );
}
