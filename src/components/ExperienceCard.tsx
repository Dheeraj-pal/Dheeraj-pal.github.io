"use client";

import Image from "next/image";
import { useState } from "react";
import { MoveUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ASSETS, type Experience } from "@/data";

/** Experience descriptions are clipped to 150 characters until expanded. */
const TRUNCATE_AT = 150;

/**
 * A single role. The card body is a "magic card": a 150px radial gradient that
 * follows the cursor and fades in on hover. Decorative arrow, handwritten note
 * and sparkle fade in beside the card, alternating sides by index.
 */
export function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const clipped = experience.description.length > TRUNCATE_AT;
  // Even cards put their decorations on the left, odd cards on the right.
  const left = index % 2 === 0;
  const arrow = `${ASSETS}/arrow${(index % 4) + 1}.svg`;

  return (
    <a className="group relative" href={experience.href}>
      <div
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
        }}
        className="group/magic-card focus-card relative flex size-full max-w-[650px] cursor-pointer overflow-hidden rounded-xl border-none bg-transparent text-black transition-opacity"
      >
        <div className="relative z-10">
          <div className="flex flex-col items-start justify-between gap-4 p-4 md:flex-row lg:p-6">
            <p className="text-muted-foreground mt-[2px] flex-shrink-0 text-left text-sm font-medium">
              {experience.start} - {experience.end}
            </p>
            <div>
              <h1 className="text-secondary flex items-center gap-2 text-left text-lg group-hover:underline">
                {experience.title} • {experience.company}{" "}
                <MoveUpRight className="text-secondary h-4 w-4 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
              </h1>
              <p className="text-muted-foreground mt-2 text-left text-sm font-normal">
                {expanded || !clipped
                  ? experience.description
                  : experience.description.slice(0, TRUNCATE_AT)}
                {clipped && (
                  <span
                    className="cursor-pointer hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      setExpanded((v) => !v);
                    }}
                  >
                    {expanded ? " Show Less" : " ...Show More"}
                  </span>
                )}
              </p>
              <div className="flex-start mt-2 flex flex-wrap gap-1">
                {experience.badges.map((badge) => (
                  <div
                    key={badge}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-ring inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/magic-card:opacity-100"
          style={{
            background: `radial-gradient(150px circle at ${pos.x}px ${pos.y}px, #262626, transparent 100%)`,
          }}
        />
      </div>

      <div
        className={cn(
          "pointer-events-none absolute top-[50%] hidden h-28 w-28 translate-y-[-50%] opacity-0 transition-opacity select-none group-hover:opacity-100 lg:block",
          left ? "right-[100%]" : "left-[100%]",
        )}
      >
        <Image src={arrow} alt="arrow" width={112} height={112} />
      </div>
      <div
        className={cn(
          "pointer-events-none absolute top-[100%] hidden w-[200px] opacity-0 transition-opacity select-none group-hover:opacity-100 lg:block",
          left
            ? "right-[102%] translate-y-[-40%] text-left"
            : "left-[102%] translate-y-[-55%] text-right",
        )}
      >
        <p className="text-secondary font-hand text-sm">{experience.experience}</p>
      </div>
      <div
        className={cn(
          "pointer-events-none absolute top-0 hidden h-28 w-28 opacity-0 transition-opacity select-none group-hover:opacity-100 sm:block",
          left
            ? "left-[92%] translate-y-[-15%] rotate-45"
            : "right-[86%] translate-y-[-55%] -rotate-45",
        )}
      >
        <Image src={`${ASSETS}/shine1.svg`} alt="shine" width={50} height={50} />
      </div>
    </a>
  );
}
