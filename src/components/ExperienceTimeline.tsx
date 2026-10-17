"use client";

import { useState } from "react";

export type Job = { org: string; role: string; period: string; points: string[]; tags: string[] };

/** Linimasa vertikal dengan satu garis menyambung; yang terbaru di atas. Klik untuk membuka detail. */
export default function ExperienceTimeline({ jobs }: { jobs: Job[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ol className="relative">
      <span aria-hidden className="absolute bottom-3 left-[7px] top-3 w-px bg-line" />
      {jobs.map((j, i) => {
        const on = open === i;
        return (
          <li key={j.org} className="reveal relative pb-6 pl-10 last:pb-0">
            <span
              aria-hidden
              className={`absolute left-0 top-[1.35rem] h-[15px] w-[15px] rounded-full border-2 transition-all duration-300 ${
                on ? "scale-110 border-accent bg-accent" : "border-muted bg-bg"
              } ${i === 0 && !on ? "border-accent" : ""}`}
            />
            <div className={`rounded-2xl ring-1 transition-colors duration-300 ${on ? "bg-card ring-line" : "ring-transparent hover:bg-card/60"}`}>
              <button
                type="button"
                aria-expanded={on}
                aria-controls={`exp-${i}`}
                onClick={() => setOpen(on ? null : i)}
                className="flex w-full items-start justify-between gap-4 p-4 text-left sm:p-5"
              >
                <span className="min-w-0">
                  <span className="flex flex-wrap items-center gap-2 text-xs text-muted">
                    {i === 0 && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-0.5 font-medium text-accent">
                        <span className="dot-live h-1.5 w-1.5 rounded-full bg-accent" /> Sedang berjalan
                      </span>
                    )}
                    {j.period}
                  </span>
                  <span className="mt-1.5 block text-base font-semibold leading-snug sm:text-lg">{j.role}</span>
                  <span className="mt-0.5 block text-sm text-accent">{j.org}</span>
                </span>
                <svg
                  className={`mt-2 shrink-0 text-muted transition-transform duration-300 ${on ? "rotate-180" : ""}`}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div id={`exp-${i}`} className={`grid transition-[grid-template-rows] duration-300 ease-out ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="px-4 pb-5 sm:px-5">
                    <ul className="grid gap-3 border-t border-line pt-4">
                      {j.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm font-light leading-6 text-fg/85">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {j.tags.map((t) => (
                        <li key={t} className="rounded-full px-3 py-1 text-[11px] font-medium ring-1 ring-line">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
