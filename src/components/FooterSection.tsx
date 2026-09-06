import { Mail, MoveRight } from "lucide-react";
import { GithubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { COPY, DATA } from "@/data";

/** Closing CTA, social row and copyright, over a flipped wireframe background. */
export function FooterSection() {
  return (
    <main className="bg-secondary relative flex h-[100vh] flex-col items-center justify-center overflow-hidden px-5 lg:px-20">
      <div>
        <p className="text-muted-foreground mb-2 text-center text-base md:text-lg">
          {COPY.footer.eyebrow}
        </p>
        <a
          href={`mailto:${DATA.email}`}
          className="group flex items-center gap-2 text-center text-3xl font-bold hover:underline md:text-6xl"
        >
          {COPY.footer.cta}{" "}
          <MoveRight className="h-8 w-8 transition-all group-hover:translate-x-2 md:h-16 md:w-16" />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 w-full px-10 py-6 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
          <p>
            © {new Date().getFullYear()} {DATA.name}
          </p>
          <div className="flex gap-8">
            <a href={`mailto:${DATA.email}`} aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href={DATA.social.github} aria-label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href={DATA.social.linkedin} aria-label="LinkedIn">
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a href={DATA.social.x} aria-label="X">
              <XIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bg pointer-events-none absolute top-0 left-0 h-full w-full scale-x-[-1] scale-y-[-1] bg-right bg-cover bg-no-repeat opacity-30" />
    </main>
  );
}
