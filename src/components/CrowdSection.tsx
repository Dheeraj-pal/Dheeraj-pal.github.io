"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { BlurFade } from "@/components/BlurFade";
import { BOB, COPY, CROWD_COUNT, MAIN_CHAR, SPRITE, WALK } from "@/data";

interface Walker {
  /** Sprite-sheet offset of this walker's face. */
  x: number;
  y: number;
  /** Direction of travel. Right-walkers are drawn unmirrored. */
  right: boolean;
}

/**
 * Deals a cast from the sheet: every cell shuffled, the first CROWD_COUNT kept.
 * Drawing without replacement is what keeps a load free of duplicate faces.
 */
function drawCast(): Walker[] {
  const cells: Omit<Walker, "right">[] = [];
  for (let row = 0; row < SPRITE.rows; row++) {
    for (let col = 0; col < SPRITE.cols; col++) {
      cells.push({ x: col * SPRITE.cellW, y: row * SPRITE.cellH });
    }
  }
  return cells
    .sort(() => Math.random() - 0.5)
    .slice(0, CROWD_COUNT)
    .map((cell) => ({ ...cell, right: Math.random() < 0.5 }));
}

/**
 * A crowd crosses the section, entering from both edges, with the highlighted
 * walker coming in from the left. Every figure takes the same time to cross, so
 * they share one speed — and it scales with the viewport instead of being fixed
 * in px/s. What differs is only each walker's head start, which threads them
 * into a stream rather than a wall.
 *
 * The crossing eases in and out, so a walker creeps at the edges of the frame
 * and strides through the middle. That is why the crowd reads as many different
 * speeds at any one instant when there is only ever one.
 *
 * Both the crossing and the bob are CSS keyframes, so this runs off the main
 * thread with no rAF loop and no per-frame React state.
 */
export function CrowdSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cast, setCast] = useState<Walker[] | null>(null);

  // Nothing is drawn until the section is on screen, so the frame starts empty
  // and the crowd is seen walking in rather than already mid-stream.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setCast(drawCast());
      },
      { rootMargin: "-40px" },
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-secondary relative h-[100vh] overflow-hidden px-10 lg:px-20"
    >
      <BlurFade>
        <h1 className="mt-20 text-4xl leading-[60px] font-semibold sm:text-[56px] sm:leading-[80px] md:text-[72px] md:leading-[100px] lg:text-[80px] lg:leading-[120px] 2xl:text-[96px] 2xl:leading-[140px]">
          {COPY.crowd.lineOne} <br />
          <span className="font-semibold underline">{COPY.crowd.emphasis}</span>
          <br /> {COPY.crowd.lineTwo}
        </h1>
      </BlurFade>

      <div aria-hidden="true">
        {cast?.map((walker, i) => (
          <div
            key={i}
            className="walk absolute -bottom-16 left-0 z-[100]"
            style={
              {
                // Off-frame is a full box past the edge, so nobody pops into
                // view mid-stride. Left-walkers run the crossing the other way.
                "--walk-from": walker.right ? `${-SPRITE.boxW}px` : "100vw",
                "--walk-to": walker.right ? "100vw" : `${-SPRITE.boxW}px`,
                animationDelay: `${i * WALK.stagger - WALK.preroll}s`,
              } as CSSProperties
            }
          >
            <div
              className="char bob relative h-[332px] w-[240px]"
              style={{
                backgroundPosition: `${walker.x}px ${walker.y}px`,
                // The sheet is drawn facing right, so left-walkers are mirrored.
                scale: walker.right ? "1 1" : "-1 1",
                animationDelay: `${i * BOB.stagger}s`,
              }}
            />
          </div>
        ))}

        {/* The one that stands out, glow baked into the image. Always heads
            right, so it is never mirrored, and it sets off once the crowd has
            had time to build up. */}
        {cast && (
          <div
            className="walk absolute -bottom-2 left-0 z-[150]"
            style={
              {
                "--walk-from": `${-MAIN_CHAR.w}px`,
                "--walk-to": "100vw",
                animationDelay: `${WALK.mainDelay - WALK.preroll}s`,
              } as CSSProperties
            }
          >
            <div className="main-char bob-alt relative h-[350px] w-[300px]" />
          </div>
        )}
      </div>
    </div>
  );
}
