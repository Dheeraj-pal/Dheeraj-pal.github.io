import { BrandSection } from "@/components/BrandSection";
import { CrowdSection } from "@/components/CrowdSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FooterSection } from "@/components/FooterSection";
import { HeroSection } from "@/components/HeroSection";
import { MenuOverlay } from "@/components/MenuOverlay";
import { ProjectGridSection } from "@/components/ProjectGridSection";
import { COPY, PROJECTS, WORK } from "@/data";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[100vh] max-w-[1536px] flex-col">
      <MenuOverlay />
      <HeroSection />
      <CrowdSection />
      <ProjectGridSection
        id="works"
        heading={COPY.work.heading}
        subheading={COPY.work.subheading}
        projects={WORK}
      />
      <ExperienceSection />
      <ProjectGridSection
        id="projects"
        heading={COPY.projects.heading}
        subheading={COPY.projects.subheading}
        projects={PROJECTS}
      />
      <BrandSection />
      <FooterSection />
    </main>
  );
}
