"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  /** Seconds before the reveal starts once the element scrolls into view. */
  delay?: number;
  /** Blur radius and Y offset of the hidden state, in px. Target uses 8 in the hero, 6 elsewhere. */
  offset?: number;
  inView?: boolean;
}

/**
 * Reveals children with the target site's blur-fade-up entrance:
 * opacity 0 -> 1, blur(Npx) -> 0, translateY(Npx) -> 0.
 *
 * The original uses framer-motion's `whileInView`; this reproduces the same
 * visual result with an IntersectionObserver and a CSS transition so the clone
 * needs no animation dependency.
 */
export function BlurFade({
  children,
  className,
  delay = 0,
  offset = 6,
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      // Matches framer-motion's default `once` viewport trigger (any overlap).
      { rootMargin: "-40px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700 ease-out", className)}
      style={{
        opacity: shown ? 1 : 0,
        filter: shown ? "blur(0px)" : `blur(${offset}px)`,
        transform: shown ? "translateY(0)" : `translateY(${offset}px)`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
