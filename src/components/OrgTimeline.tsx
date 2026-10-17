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
      <ol className="relative">
        <span aria-hidden className="absolute bottom-3 left-[7px] top-3 w-px bg-line" />
        {items.map((o) => (
          <li key={o.org + o.period} className="reveal group/item relative pl-10">
            <span aria-hidden className="absolute left-0 top-[1.35rem] h-[15px] w-[15px] rounded-full border-2 border-muted bg-bg transition-all duration-300 group-hover/item:scale-110 group-hover/item:border-accent group-hover/item:bg-accent" />
            <button
              type="button"
              onClick={() => open(o)}
              aria-label={`Lihat foto: ${o.role}, ${o.org}`}
              className="group flex w-full items-start gap-3 rounded-2xl px-4 py-3.5 text-left transition hover:bg-card"
            >
              <span className="flex min-w-0 flex-1 flex-col justify-between gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                <span>
                  <span className="block text-[15px] font-semibold leading-snug">{o.role}</span>
                  <span className="mt-0.5 block text-xs font-light text-muted">{o.org}</span>
                </span>
                <span className="shrink-0 text-xs text-muted">{o.period}</span>
              </span>
              <span aria-hidden className="pt-0.5 text-muted transition group-hover:text-fg">↗</span>
            </button>
          </li>
        ))}
      </ol>

      <dialog ref={dialog} onClick={(e) => e.target === dialog.current && dialog.current?.close()} className="pop m-auto max-h-[92vh] w-[min(92vw,860px)] rounded-2xl bg-card p-3 text-fg ring-1 ring-line">
        {current && (
          <>
            {current.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={current.src} alt={`${current.role}, ${current.org}`} className="max-h-[72vh] w-full rounded-lg object-contain" />
            ) : (
              <div className="grid aspect-[16/10] w-full place-items-center rounded-lg bg-fg/5 text-sm text-muted">Foto kegiatan menyusul</div>
            )}
            <div className="mt-3 flex items-center justify-between gap-6 px-1">
              <div>
                <p className="font-medium">{current.role}</p>
                <p className="text-sm text-muted">{current.org} · {current.period}</p>
              </div>
              <button type="button" onClick={() => dialog.current?.close()} className="shrink-0 rounded-full px-4 py-1.5 text-sm ring-1 ring-line hover:bg-fg/10">Tutup</button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
