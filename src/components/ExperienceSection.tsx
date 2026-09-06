import { BlurFade } from "@/components/BlurFade";
import { ExperienceCard } from "./ExperienceCard";
import { COPY, EXPERIENCES } from "@/data";

/** Dark section listing every role, newest first. */
export function ExperienceSection() {
  return (
    <main
      id="experience"
      className="bg-secondary-foreground relative min-h-[100vh] overflow-hidden px-10 py-10 lg:px-20 lg:py-20"
    >
      <h1 className="text-secondary text-center text-4xl font-bold">
        {COPY.experience.heading}
      </h1>
      <p className="text-muted-foreground mt-2 mb-10 text-center">
        {COPY.experience.subheading}
      </p>
      <div className="focus-group flex flex-col items-center gap-4">
        {EXPERIENCES.map((experience, i) => (
          <BlurFade key={experience.company} delay={i * 0.05}>
            <ExperienceCard experience={experience} index={i} />
          </BlurFade>
        ))}
      </div>
    </main>
  );
}
