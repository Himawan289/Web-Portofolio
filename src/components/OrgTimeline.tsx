"use client";

import { useRef, useState } from "react";

export type OrgItem = { role: string; org: string; period: string; src?: string };

export default function OrgTimeline({ items }: { items: OrgItem[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState<OrgItem | null>(null);

  function open(item: OrgItem) {
    setCurrent(item);
    dialog.current?.showModal();
  }

  return (
    <>
      <ol className="mt-10 grid lg:grid-cols-5">
          {items.map((o) => (
            <li
              key={o.org + o.period}
              className="relative pb-8 pl-10 before:absolute before:bottom-0 before:left-[11px] before:top-0 before:w-px before:bg-white/15 last:pb-0 last:before:bottom-auto last:before:h-3 lg:pb-0 lg:pl-0 lg:pt-12 lg:before:bottom-auto lg:before:left-0 lg:before:right-0 lg:before:top-[11px] lg:before:h-px lg:before:w-auto last:lg:before:h-px"
            >
              <button type="button" onClick={() => open(o)} className="group block w-full text-left lg:pr-6" aria-label={`Lihat foto: ${o.role}, ${o.org}`}>
                <span className="absolute left-0 top-0 grid h-6 w-6 place-items-center rounded-full border-2 border-accent bg-surface transition-all duration-300 group-hover:scale-125 group-hover:bg-accent group-focus-visible:scale-125 group-focus-visible:bg-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent transition-colors group-hover:bg-surface" />
                </span>
                <span className="block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/50 group-hover:bg-white/[0.06]">
                  <span className="block text-xs text-accent">{o.period}</span>
                  <span className="mt-2 block text-lg font-semibold leading-snug">{o.role}</span>
                  <span className="mt-1 block text-sm text-muted">{o.org}</span>
                  <span className="mt-4 flex items-center gap-2 text-xs text-white/50 transition-colors group-hover:text-accent">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect x="3" y="6" width="18" height="14" rx="2" />
                      <circle cx="12" cy="13" r="3.5" />
                      <path d="M8 6l1.5-2h5L16 6" />
                    </svg>
                    Lihat foto
                  </span>
                </span>
              </button>
            </li>
          ))}
      </ol>

      <dialog
        ref={dialog}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="pop m-auto max-h-[92vh] w-[min(92vw,860px)] rounded-2xl border border-white/10 bg-surface p-3 text-foreground"
      >
        {current && (
          <>
            {current.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={current.src} alt={`${current.role}, ${current.org}`} className="max-h-[72vh] w-full rounded-lg object-contain" />
            ) : (
              <div className="grid aspect-[16/10] w-full place-items-center rounded-lg border-2 border-dashed border-white/15 text-sm text-muted">
                Foto kegiatan akan ditambahkan
              </div>
            )}
            <div className="mt-3 flex items-center justify-between gap-6 px-1">
              <div>
                <p className="font-medium">{current.role}</p>
                <p className="text-sm text-muted">
                  {current.org} · {current.period}
                </p>
              </div>
              <button type="button" onClick={() => dialog.current?.close()} className="shrink-0 rounded-full border border-white/15 px-4 py-1.5 text-sm hover:border-accent hover:text-accent">
                Tutup
              </button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
