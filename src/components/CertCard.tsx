"use client";

import { useRef } from "react";

export default function CertCard({
  kind,
  title,
  issuer,
  src,
  featured = false,
}: {
  kind: string;
  title: string;
  issuer: string;
  src?: string;
  featured?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  const thumb = src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={`${title}, ${issuer}`} className="h-full w-full object-contain p-2" />
  ) : (
    <div className="grid h-full w-full place-items-center border-2 border-dashed border-white/15 p-4 text-center text-xs text-muted">
      Foto {featured ? "prestasi" : kind.toLowerCase()} akan ditambahkan
    </div>
  );

  return (
    <article className={`spot flex h-full flex-col overflow-hidden rounded-2xl ${featured ? "!border-amber-300/30 shadow-2xl shadow-amber-500/10" : ""}`}>
      {src ? (
        <button
          type="button"
          onClick={() => dialog.current?.showModal()}
          aria-label={`Perbesar: ${title}`}
          className={`group relative w-full cursor-zoom-in bg-white/[0.04] ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}
        >
          {thumb}
          <span className="absolute right-3 top-3 rounded-full bg-surface/80 px-3 py-1 text-xs opacity-0 backdrop-blur transition group-hover:opacity-100">
            Perbesar
          </span>
        </button>
      ) : (
        <div className={`w-full ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>{thumb}</div>
      )}
      <div className={featured ? "p-8" : "p-5"}>
        {featured ? (
          <p className="text-gold text-5xl font-extrabold leading-none md:text-6xl [font-family:var(--font-display)]">{kind}</p>
        ) : (
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">{kind}</p>
        )}
        <h3 className={featured ? "mt-4 text-2xl font-semibold leading-snug" : "mt-2 text-base font-semibold leading-snug"}>{title}</h3>
        <p className={featured ? "mt-2 text-muted" : "mt-1 text-sm text-muted"}>{issuer}</p>
      </div>

      {src && (
        <dialog
          ref={dialog}
          onClick={(e) => e.target === dialog.current && dialog.current?.close()}
          className="pop m-auto max-h-[92vh] max-w-[92vw] rounded-2xl border border-white/10 bg-surface p-3 text-foreground"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={`${title}, ${issuer}`} className="max-h-[80vh] max-w-full rounded-lg object-contain" />
          <div className="mt-3 flex items-center justify-between gap-6 px-1">
            <p className="text-sm">{title}</p>
            <button type="button" onClick={() => dialog.current?.close()} className="rounded-full border border-white/15 px-4 py-1.5 text-sm hover:border-accent hover:text-accent">
              Tutup
            </button>
          </div>
        </dialog>
      )}
    </article>
  );
}
