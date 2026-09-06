/**
 * All site content lives here.
 *
 * WORK, EXPERIENCES and PROJECTS ship as placeholders — replace every entry with
 * your own. Nothing below describes real roles or products; it exists so the
 * layout renders while you fill it in.
 */

export const ASSETS = "/images";

export type LinkType =
  "Website" | "Github" | "Demo" | "IOS App" | "Android App";

export interface ProjectLink {
  type: LinkType;
  href: string;
  /** Overrides the default icon for the type. */
  icon?: "folder";
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  /** Omit until you have a real screenshot; the card renders a neutral panel. */
  image?: string;
}

export interface Experience {
  company: string;
  href: string;
  badges: string[];
  title: string;
  start: string;
  end: string;
  description: string;
  /** Handwritten aside revealed beside the card on hover. Keep it to a sentence. */
  experience: string;
}

export const DATA = {
  name: "Dheeraj Pal",
  location: "Raipur, C.G., India",
  email: "dheeraj.pal19@gmail.com",
  callHref: "https://cal.com/dheeraj-pal/intro-call",
  social: {
    github: "https://github.com/dheeraj-pal",
    linkedin: "https://www.linkedin.com/in/dheerajpal19",
    x: "https://x.com/",
  },
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#works" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/resume.pdf" },
] as const;

/** Copy for each section. Rewrite freely — this is your voice, not a template's. */
export const COPY = {
  hero: {
    greeting: "Hello, I'm Dheeraj!",
    headline: "I build software",
    headlineMuted: "that ships",
    blurb: [
      "I'm a full-stack developer.",
      "I work across web and mobile, from first sketch to production.",
    ],
    cta: "Let's Talk",
  },
  crowd: {
    lineOne: "Good products",
    emphasis: "EARN ATTENTION",
    lineTwo: "before they ask for it",
  },
  work: {
    heading: "Selected Work",
    subheading:
      "A few things I've built, and what I was actually responsible for on each.",
  },
  experience: {
    heading: "Where I've Worked",
    subheading: "The roles that shaped how I build things.",
  },
  projects: {
    heading: "Side Projects",
    subheading: "Things I built because I wanted them to exist.",
  },
  brand: {
    marquee: "Built To Be Used • ",
    statement: [
      "Software earns trust in the small moments — how fast it loads, how it fails, how it explains itself.",
      "That's the part I care about most.",
    ],
    resume: "Checkout my Resume",
  },
  footer: {
    eyebrow: "HAVE SOMETHING TO BUILD?",
    cta: "Let's Work Together",
  },
} as const;

/** TODO: replace with your own work. */
export const WORK: Project[] = [
  {
    title: "Example Client Project",
    description:
      "One or two paragraphs on what this product does, who it was for, what you owned, and what measurably changed once it shipped. Write it in your own voice — the card truncates to 70 characters and expands on click, so the opening line matters most.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    links: [{ type: "Website", href: "https://example.com" }],
    image: `${ASSETS}/work/abcx.png`,
  },
  {
    title: "Another Client Project",
    description:
      "Same shape as above. Mention the constraint you worked under — a deadline, a legacy system, a tiny team — and what you did about it. Concrete beats impressive.",
    technologies: ["React Native", "Node.js"],
    links: [{ type: "Website", href: "https://example.com" }],
    image: `${ASSETS}/work/surplus.png`,
  },
];

/** TODO: replace with your own roles. */
export const EXPERIENCES: Experience[] = [
  {
    company: "Company Name",
    href: "https://example.com",
    badges: ["Next.js", "TypeScript", "PostgreSQL"],
    title: "Your Role",
    start: "Mon YYYY",
    end: "Present",
    description:
      "What the team was building and what you were responsible for. This truncates at 150 characters, so lead with the substance rather than the setup.",
    experience: "The handwritten note that appears beside this card on hover.",
  },
  {
    company: "Earlier Company",
    href: "https://example.com",
    badges: ["React", "Node.js"],
    title: "Your Earlier Role",
    start: "Mon YYYY",
    end: "Mon YYYY",
    description:
      "Same again. Keeping these in reverse-chronological order reads best.",
    experience: "Another short aside — these render in a handwriting typeface.",
  },
  {
    company: "Third Company",
    href: "https://example.com",
    badges: ["React Native", "GraphQL"],
    title: "Your Third Role",
    start: "Mon YYYY",
    end: "Mon YYYY",
    description:
      "The further back you go the shorter these can get — a line on what you shipped is usually enough this far down the list.",
    experience: "Asides are optional; a card without one just skips it.",
  },
  {
    company: "First Company",
    href: "https://example.com",
    badges: ["JavaScript", "Express"],
    title: "Where You Started",
    start: "Mon YYYY",
    end: "Mon YYYY",
    description:
      "Your first role. One sentence on what you learned there tends to land better than a list of responsibilities.",
    experience: "The last card, and the fourth of the four arrow decorations.",
  },
];

/** TODO: replace with your own side projects. */
export const PROJECTS: Project[] = [
  {
    title: "Example Side Project",
    description:
      "What it does and why you built it. Side projects read best when they explain the itch rather than the feature list.",
    technologies: ["Next.js", "TypeScript"],
    links: [
      { type: "Website", href: "https://example.com" },
      { type: "Github", href: "https://github.com/dheeraj-pal" },
    ],
    image: `${ASSETS}/projects/knowledge.png`,
  },
  {
    title: "Another Side Project",
    description: "Add or remove entries freely — the grid wraps at any count.",
    technologies: ["React", "Supabase"],
    links: [{ type: "Github", href: "https://github.com/dheeraj-pal" }],
    image: `${ASSETS}/projects/pitchslapped.png`,
  },
  {
    title: "A Weekend Build",
    description:
      "The one you finished in two days. Say what it solved and how long it took — small and shipped beats big and unfinished.",
    technologies: ["TypeScript", "Vite"],
    links: [{ type: "Github", href: "https://github.com/dheeraj-pal" }],
    image: `${ASSETS}/projects/email-trigger.png`,
  },
  {
    title: "A Tool You Use Daily",
    description:
      "Something built to scratch your own itch. These read well because the motivation is obvious.",
    technologies: ["Node.js", "SQLite"],
    links: [
      { type: "Demo", href: "https://example.com" },
      { type: "Github", href: "https://github.com/dheeraj-pal" },
    ],
    image: `${ASSETS}/projects/smashback.png`,
  },
  {
    title: "An Experiment",
    description:
      "The one that did not go anywhere. Worth listing if you learned something from it — say what that was.",
    technologies: ["Python", "FastAPI"],
    links: [{ type: "Github", href: "https://github.com/dheeraj-pal" }],
    image: `${ASSETS}/projects/zama.png`,
  },
];

/**
 * The crowd in the "EARN ATTENTION" section.
 *
 * people.png is a 2400x1610 sheet — a 10 x 5 grid of 240 x 322 cells, so 50
 * characters. Cast, directions and speeds are randomised on every page load.
 * Characters are mirrored to face their direction of travel.
 */
export const SPRITE = {
  cols: 10,
  rows: 5,
  cellW: 240,
  cellH: 322,
  /** Rendered box, slightly taller than the cell. */
  boxW: 240,
  boxH: 332,
} as const;

export const CROWD_COUNT = 20;

/**
 * The vertical bob. `bottom` swings between -50px and 0, mirrored, so a full
 * up-and-down cycle is twice the 0.8s each way. Duration and easing live in the
 * `bob` keyframes; only the per-walker offset is applied from here.
 */
export const BOB = {
  /** Seconds of offset between one walker's bob and the next. */
  stagger: 0.05,
} as const;

/**
 * The walk. Every figure crosses in the same fixed time, so all 21 move at one
 * speed — and that speed follows the viewport, since a wider screen is a longer
 * crossing in the same 9s. What differs between walkers is only when they set
 * off. The crossing itself (9s, ease-in-out) lives in the `walk` keyframes.
 */
export const WALK = {
  /** Seconds of head start between one walker and the next. */
  stagger: 0.5,
  /** The highlighted walker holds off this long before its first crossing. */
  mainDelay: 2.3,
  /**
   * Seconds shaved off every delay, so the crowd is already part-way into its
   * crossing when the section appears. Without it the first walker spends the
   * slow end of its ease creeping through the 240px it starts off-frame, and
   * the section sits empty for over two seconds. Subtracted from everyone
   * alike, so the spacing between walkers is unchanged — the whole sequence
   * just starts further along. Raise it to fill the frame sooner; keep it under
   * `mainDelay` or the highlighted walker starts mid-frame.
   */
  preroll: 2,
} as const;

/**
 * The highlighted walker — the one that stands out of the crowd. Walks right,
 * is never mirrored, and carries its own baked-in glow.
 *
 * To make it you: replace public/images/me.png with a background-free cut-out
 * of yourself at roughly this size.
 */
export const MAIN_CHAR = { w: 300, h: 350 } as const;
