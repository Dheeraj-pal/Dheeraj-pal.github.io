import { BlurFade } from "@/components/BlurFade";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/data";

interface ProjectGridSectionProps {
  id: string;
  heading: string;
  subheading: string;
  projects: Project[];
}

/**
 * Shared layout for the two card grids: selected work (#works) and side
 * projects (#projects). Same structure, different data.
 */
export function ProjectGridSection({
  id,
  heading,
  subheading,
  projects,
}: ProjectGridSectionProps) {
  return (
    <div
      id={id}
      className="relative flex min-h-[100vh] flex-col justify-center overflow-hidden px-10 py-10 lg:px-20 lg:py-20"
    >
      <h1 className="text-center text-4xl font-bold">{heading}</h1>
      <p className="text-muted-foreground mt-2 mb-8 text-center">{subheading}</p>
      <div className="focus-group flex flex-wrap items-stretch justify-center gap-4 md:gap-6">
        {projects.map((project, i) => (
          <BlurFade key={project.title} delay={i * 0.1}>
            <ProjectCard project={project} />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
