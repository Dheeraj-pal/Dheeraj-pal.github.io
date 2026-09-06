"use client";

import { useEffect, useRef } from "react";
import { COPY } from "@/data";

const TEXT = COPY.brand.marquee;
const REPEATS = 4;

/**
 * Scroll-velocity marquee. Each row drifts at a constant base velocity and is
 * pushed further (or reversed) by how fast the page is scrolling, matching the
 * target's two counter-moving rows.
 */
function Row({ baseVelocity }: { baseVelocity: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = baseVelocity > 0 ? -100 : 0;
    let last = performance.now();
    let lastScroll = window.scrollY;
    let boost = 0;
    let frame = 0;

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;

      const scrolled = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      // Scroll movement adds a decaying push in the row's own direction.
      boost = boost * 0.9 + scrolled * 0.6;

      x += (baseVelocity * dt) + (boost * dt * Math.sign(baseVelocity));
      // Keep x within one full copy so the loop is seamless.
      if (x <= -100) x += 100;
      if (x > 0) x -= 100;

      el.style.transform = `translateX(${x}%)`;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [baseVelocity]);

  return (
    <div className="w-full overflow-hidden whitespace-nowrap select-none">
      <div ref={ref} className="text-secondary inline-block text-6xl font-bold">
        {Array.from({ length: REPEATS }, (_, i) => (
          <span key={i}>{TEXT}</span>
        ))}
      </div>
    </div>
  );
}

export function VelocityMarquee() {
  return (
    <section className="relative w-full select-none">
      <Row baseVelocity={-3} />
      <Row baseVelocity={3} />
    </section>
  );
}
