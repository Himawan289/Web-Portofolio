"use client";

import { useRef } from "react";

export default function TiltPhoto({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${x * 10}deg`);
    el.style.setProperty("--rx", `${-y * 6}deg`);
    el.style.setProperty("--tx", `${x * 12}px`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    for (const v of ["--rx", "--ry", "--tx"]) el.style.setProperty(v, "0");
  }

  return (
    <div
      className="h-[420px] w-[340px] [perspective:1000px] md:aspect-[4/5] md:h-[min(78svh,880px)] md:w-auto"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div
        ref={ref}
        className="h-full w-full overflow-hidden transition-transform duration-200 ease-out motion-reduce:transform-none"
        style={{ transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateX(var(--tx,0px))" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="h-auto w-full object-cover object-top" />
      </div>
    </div>
  );
}
