import { FileText } from "lucide-react";
import { BlurFade } from "@/components/BlurFade";
import { DigitalBall } from "@/components/icons";
import { VelocityMarquee } from "./VelocityMarquee";
import { COPY, DATA } from "@/data";

/**
 * Dark brand statement section: the scroll-velocity marquee, a dashed grid
 * pattern masked to a 600px circle at centre, the brand copy, the animated
 * "Located in ..." globe pill, and a centred resume button.
 */
export function BrandSection() {
  return (
    <div className="bg-secondary-foreground relative flex min-h-[100vh] flex-col py-10 lg:py-20">
      <VelocityMarquee />

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
      >
        <defs>
          <pattern
            id="brand-grid-pattern"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
            x="-1"
            y="-1"
          >
            <path d="M.5 30V.5H30" fill="none" strokeDasharray="4 2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#brand-grid-pattern)" />
      </svg>

      <div className="flex flex-1 items-end justify-between px-10 lg:px-20">
        <div className="w-full sm:max-w-[450px]">
          <div className="-ml-[24px] sm:hidden">
            <button className="cursor-pointer">
              <DigitalBall />
            </button>
          </div>
          <BlurFade>
            <p className="text-secondary text-xl">
              {COPY.brand.statement.map((line) => (
                <span key={line}>
                  {line} <br />
                  <br />
                </span>
              ))}
            </p>
          </BlurFade>
        </div>

        <div className="hidden max-w-[350px] sm:block">
          <BlurFade delay={0.1}>
            <button className="ring-offset-background focus-visible:ring-ring text-primary-foreground flex h-auto w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
              <p className="text-secondary-foreground">Located in {DATA.location} </p>
              <div className="bg-secondary-foreground rounded-full">
                <DigitalBall />
              </div>
            </button>
          </BlurFade>
        </div>
      </div>

      <div className="absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%]">
        <BlurFade delay={0.2}>
          <button className="ring-offset-background focus-visible:ring-ring text-primary-foreground flex h-10 items-center justify-center gap-2 rounded-full bg-white px-6 py-8 text-xl font-medium whitespace-nowrap transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
            <p className="text-secondary-foreground">{COPY.brand.resume}</p>
            <FileText className="text-secondary-foreground h-6 w-6" />
          </button>
        </BlurFade>
      </div>
    </div>
  );
}
