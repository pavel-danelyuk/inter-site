import AboutHero from "@/components/about/AboutHero";
import StudioPhilosophy from "@/components/about/StudioPhilosophy";
import DesignerIntro from "@/components/about/DesignerIntro";

export const metadata = {
  title: "About | Meliora Maison",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StudioPhilosophy />
      <DesignerIntro />
    </>
  );
}
