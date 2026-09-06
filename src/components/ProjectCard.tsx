"use client";

import Image from "next/image";
import { useState } from "react";
import { Folder, Globe, Smartphone, Video } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project, ProjectLink } from "@/data";

/** Descriptions are clipped to 70 characters until "Show More" is clicked. */
const TRUNCATE_AT = 70;

function LinkIcon({ link }: { link: ProjectLink }) {
  const className = "w-5 h-5";
  if (link.icon === "folder") return <Folder className={className} />;
  switch (link.type) {
    case "Github":
      return <GithubIcon className={className} />;
    case "Demo":
      return <Video className={className} />;
    case "IOS App":
    case "Android App":
      return <Smartphone className={className} />;
    default:
      return <Globe className={className} />;
  }
}

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const clipped = project.description.length > TRUNCATE_AT;

  return (
    <div className="group h-full">
      <div className="text-card-foreground bg-secondary project-card focus-card flex h-full min-w-[350px] max-w-[400px] flex-col overflow-hidden rounded-lg border border-[#e2c2a8] shadow-xs transition-all group-hover:-translate-y-2 group-hover:shadow-lg">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="bg-muted relative h-[300px] overflow-hidden rounded-md">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                // Card is clamped 350-400px wide; the well is that minus p-6 either side.
                sizes="352px"
                className="object-cover object-center"
              />
            ) : (
              // No screenshot yet - a neutral panel keeps the card's proportions.
              <div className="text-muted-foreground flex h-full w-full items-center justify-center text-sm">
                {project.title}
              </div>
            )}
          </div>
        </div>

        <div className="p-6 pt-0">
          <h1 className="text-xl font-semibold">{project.title}</h1>
          <p className="text-muted-foreground text-sm">
            {expanded || !clipped
              ? project.description
              : project.description.slice(0, TRUNCATE_AT)}
            {clipped && (
              <span
                className="cursor-pointer hover:underline"
                onClick={() => setExpanded((v) => !v)}
              >
                {expanded ? " Show Less" : " ...Show More"}
              </span>
            )}
          </p>
        </div>

        <div className="relative mt-auto flex flex-col items-start gap-2 p-6 pt-0">
          <div className="z-50 flex flex-wrap gap-1">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className="bg-primary text-primary-foreground hover:bg-primary/80 focus:ring-ring inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="z-50 flex flex-row flex-wrap gap-1">
            {project.links.map((link) => (
              <a key={link.type} target="_blank" href={link.href} rel="noreferrer">
                <div className="text-secondary-foreground focus:ring-ring flex items-center gap-2 rounded-sm border border-transparent bg-white px-2 py-1 text-[10px] font-semibold transition-colors hover:bg-white hover:shadow-md focus:ring-2 focus:ring-offset-2 focus:outline-none">
                  <LinkIcon link={link} />
                  {link.type}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
