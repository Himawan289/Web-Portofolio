"use client";

import { useRef } from "react";

/** Kartu gambar dengan bilah judul di bawah, klik untuk memperbesar. */
export default function CertCard({ kind, title, issuer, src }: { kind: string; title: string; issuer: string; src?: string; featured?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);

  const bar = (
    <span className="flex items-center justify-between gap-3 bg-card px-4 py-3 text-left">
      <span className="min-w-0">
        <span className="block text-[10px] font-medium uppercase tracking-wider text-muted">{kind} · {issuer}</span>
        <span className="mt-0.5 block text-sm font-semibold leading-snug">{title}</span>
      </span>
      {src && <span aria-hidden className="shrink-0 text-muted transition group-hover:text-fg">↗</span>}
    </span>
  );

  return (
    <article className="overflow-hidden rounded-2xl ring-1 ring-line">
      {src ? (
        <button type="button" onClick={() => dialog.current?.showModal()} aria-label={`Perbesar: ${title}`} className="group block w-full cursor-zoom-in">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={`${title}, ${issuer}`} className="aspect-[16/10] w-full bg-fg/5 object-contain transition duration-500 group-hover:scale-[1.02]" />
          {bar}
        </button>
      ) : (
        <div>
          <div className="grid aspect-[16/10] w-full place-items-center bg-fg/5 text-xs text-muted">Foto menyusul</div>
          {bar}
        </div>
      )}

      {src && (
        <dialog ref={dialog} onClick={(e) => e.target === dialog.current && dialog.current?.close()} className="pop m-auto max-h-[92vh] max-w-[92vw] rounded-2xl bg-card p-3 text-fg ring-1 ring-line">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={`${title}, ${issuer}`} className="max-h-[80vh] max-w-full rounded-lg object-contain" />
          <div className="mt-3 flex items-center justify-between gap-6 px-1">
            <p className="text-sm">{title}</p>
            <button type="button" onClick={() => dialog.current?.close()} className="rounded-full px-4 py-1.5 text-sm ring-1 ring-line hover:bg-fg/10">Tutup</button>
          </div>
        </dialog>
      )}
    </article>
  );
}
