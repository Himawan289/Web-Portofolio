"use client";

import { useRef, useState } from "react";

/** Slider horizontal: geser dengan trackpad, drag mouse, swipe, atau tombol panah. */
export default function HorizontalScroll({ heading, children }: { heading: React.ReactNode; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, x: 0, left: 0, moved: false });
  const [edge, setEdge] = useState({ start: true, end: false });

  function sync() {
    const el = ref.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  }

  function step(dir: 1 | -1) {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 600) + 20), behavior: "smooth" });
  }

  function onDown(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const el = ref.current!;
    drag.current = { active: true, x: e.clientX, left: el.scrollLeft, moved: false };
  }
  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const d = drag.current;
    if (!d.active) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 4) d.moved = true;
    const el = ref.current!;
    el.style.scrollSnapType = "none";
    el.scrollLeft = d.left - dx;
  }
  function onUp() {
    const el = ref.current!;
    drag.current.active = false;
    el.style.scrollSnapType = "";
  }

  const btn =
    "grid h-11 w-11 place-items-center rounded-full border border-white/15 text-lg transition enabled:hover:border-accent enabled:hover:bg-accent enabled:hover:text-surface disabled:opacity-30";

  return (
    <div>
      <div className="mx-auto flex w-full max-w-[1600px] items-end justify-between gap-6 px-6 md:px-12 lg:px-16">
        {heading}
        <div className="hidden gap-3 md:flex">
          <button type="button" aria-label="Sebelumnya" disabled={edge.start} onClick={() => step(-1)} className={btn}>
            ←
          </button>
          <button type="button" aria-label="Berikutnya" disabled={edge.end} onClick={() => step(1)} className={btn}>
            →
          </button>
        </div>
      </div>
      <div
        ref={ref}
        onScroll={sync}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        className="mt-10 flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:none] active:cursor-grabbing rail [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </div>
  );
}
