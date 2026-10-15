"use client";

import { useRef } from "react";

/** Bingkai foto dengan efek 3D miring mengikuti kursor. Tanpa `src`, tampil sebagai placeholder. */
export default function PhotoTilt({ src, alt, caption, position = "center 25%", zoom = 1, origin = "50% 50%" }: { src?: string; alt: string; caption: string; position?: string; zoom?: number; origin?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${x * 14}deg`);
    el.style.setProperty("--rx", `${-y * 10}deg`);
    el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div className="[perspective:1100px]" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div
        ref={ref}
        className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-black/40 transition-transform duration-200 ease-out motion-reduce:transform-none"
        style={{ transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))" }}
      >
        {src ? (
          <button type="button" onClick={() => dialog.current?.showModal()} aria-label={`Perbesar foto: ${caption}`} className="block h-full w-full cursor-zoom-in">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="h-full w-full object-cover" style={{ objectPosition: position, transform: `scale(${zoom})`, transformOrigin: origin }} />
          </button>
        ) : (
          <div className="grid h-full w-full place-items-center border-2 border-dashed border-white/15 p-6 text-center text-sm text-muted">
            Foto {caption.toLowerCase()} akan ditambahkan
          </div>
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 [div:hover>&]:opacity-100"
          style={{ background: "radial-gradient(260px circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.16), transparent 60%)" }}
        />
        {src && <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />}
        <p className="pointer-events-none absolute bottom-4 left-5 text-sm font-medium text-white">{caption}</p>
      </div>

      {src && (
        <dialog
          ref={dialog}
          onClick={(e) => e.target === dialog.current && dialog.current?.close()}
          className="pop m-auto max-h-[92vh] max-w-[92vw] rounded-2xl border border-white/10 bg-surface p-3 text-foreground"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="max-h-[80vh] max-w-full rounded-lg object-contain" />
          <div className="mt-3 flex items-center justify-between gap-6 px-1">
            <p className="text-sm">{caption}</p>
            <button type="button" onClick={() => dialog.current?.close()} className="rounded-full border border-white/15 px-4 py-1.5 text-sm hover:border-accent hover:text-accent">
              Tutup
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
}
