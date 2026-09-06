"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { DATA, NAV_ITEMS } from "@/data";

/**
 * Fixed circular burger button (top right) plus the dark slide-in nav panel.
 * Panel: translateX(calc(100% + 100px)) when closed -> translateX(calc(0% + 0px)) open.
 * Each nav item reveals a 10px white dot 30px to its left, scale(0) -> scale(1) on hover.
 */
export function MenuOverlay() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
        className="fixed right-0 z-[999999999] m-5 flex h-20 w-20 cursor-pointer items-center justify-center rounded-[50%] bg-[rgb(41,41,41)]"
      >
        <div
          className={cn(
            "burger w-full after:top-[-5px] before:top-[5px]",
            open && "burgerActive",
          )}
        />
      </div>

      <div
        className="fixed top-0 right-0 z-[99999999] h-screen w-full bg-[rgb(41,41,41)] text-[white] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] sm:w-auto"
        style={{
          transform: open
            ? "translateX(calc(0% + 0px))"
            : "translateX(calc(100% + 100px))",
        }}
      >
        <div className="box-border flex h-full flex-col justify-between p-[100px] pt-5">
          <div className="mt-20 flex flex-col gap-3 text-[56px]">
            <div className="mb-10 border-b border-solid border-b-[rgb(153,153,153)] text-[11px] text-[rgb(153,153,153)] uppercase">
              <p>{DATA.name}</p>
            </div>
            <div className="flex flex-col gap-6 sm:gap-8">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.href}
                  className="relative flex items-center"
                  onMouseEnter={() => setHovered(item.href)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className="absolute left-[-30px] h-2.5 w-2.5 rounded-[50%] bg-[white] transition-transform duration-200"
                    style={{
                      transform: hovered === item.href ? "scale(1)" : "scale(0)",
                    }}
                  />
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-4xl sm:text-6xl"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
