import { MoveRight } from "lucide-react";
import { BlurFade } from "@/components/BlurFade";
import { COPY, DATA } from "@/data";

/**
 * Full-viewport hero. Four absolutely-positioned copies of the wireframe
 * background SVG are layered behind the content: two large ones on lg+
 * (offset -25px / +25px, one double-flipped) and two contained ones below lg.
 */
export function HeroSection() {
  return (
    <div
      id="home"
      className="relative flex h-[100vh] flex-col justify-center overflow-hidden px-10 lg:px-20"
    >
      <div className="relative z-50">
        <div className="flex">
          <BlurFade offset={8} className="inline-block">
            <p className="text-base sm:text-lg lg:text-xl">{COPY.hero.greeting}</p>
          </BlurFade>
        </div>
        <div className="flex">
          <BlurFade offset={8} delay={0.1} className="mt-2 mb-4 inline-block lg:mb-20">
            <h1 className="text-4xl font-bold md:text-6xl lg:text-[92px]">
              {COPY.hero.headline} <br />
              <span className="text-muted-foreground">{COPY.hero.headlineMuted}</span>
            </h1>
          </BlurFade>
        </div>
        <div className="flex flex-col-reverse justify-between lg:flex-row lg:items-center">
          <div className="flex">
            <BlurFade offset={8} delay={0.2} className="inline-block">
              <a href={DATA.callHref}>
                <button className="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 group flex h-11 w-[250px] items-center justify-center gap-2 rounded-full px-8 py-8 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 lg:w-[320px] lg:gap-6 lg:py-10">
                  <p className="text-base lg:text-xl">{COPY.hero.cta}</p>
                  <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-3 lg:h-8 lg:w-8" />
                </button>
              </a>
            </BlurFade>
          </div>
          <div className="flex">
            <BlurFade offset={8} delay={0.3} className="inline-block">
              <p className="mb-8 text-sm md:text-base lg:mb-0">
                {COPY.hero.blurb.map((line) => (
                  <span key={line}>
                    {line} <br />
                  </span>
                ))}
              </p>
            </BlurFade>
          </div>
        </div>
      </div>

      <div className="hero-bg-lg absolute top-[-25px] left-0 hidden h-full w-full scale-x-[-1] scale-y-[-1] bg-left bg-cover bg-no-repeat opacity-50 lg:block" />
      <div className="hero-bg-lg absolute top-[25px] left-0 z-0 hidden h-full w-full bg-left bg-cover bg-no-repeat opacity-50 lg:block" />
      <div className="hero-bg absolute top-0 left-0 h-full w-full scale-x-[-1] bg-bottom bg-contain bg-no-repeat opacity-50 lg:hidden" />
      <div className="hero-bg absolute top-0 left-0 h-full w-full scale-y-[-1] bg-bottom bg-contain bg-no-repeat opacity-30 md:hidden" />
    </div>
  );
}
