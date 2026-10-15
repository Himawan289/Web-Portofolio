import { site } from "@/data/site";
import SpotCard from "./SpotCard";

const labels = ["", "Dasar", "Dasar", "Menengah", "Mahir", "Ahli"];

/** Indikator tingkat ala sinyal: lima batang yang makin tinggi. */
function Signal({ level }: { level: number }) {
  return (
    <span className="flex h-6 items-end gap-[3px]" role="img" aria-label={`Tingkat ${level} dari 5, ${labels[level]}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          style={{ "--i": i, height: `${8 + i * 4}px` } as React.CSSProperties}
          className={`sig-bar w-[4px] rounded-[1px] ${i < level ? "bg-accent" : "bg-white/12"}`}
        />
      ))}
    </span>
  );
}

export default function Competencies() {
  return (
    <section id="competencies" className="snap-sec mx-auto flex w-full max-w-[1600px] flex-col justify-center px-6 py-12 md:px-12 md:py-14 lg:px-16">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="reveal text-sm font-medium uppercase tracking-[0.2em] text-accent">Competencies</p>
          <h2 className="reveal mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Keahlian & <span className="text-gradient">tools</span>
          </h2>
        </div>
        <p className="reveal flex items-center gap-3 text-sm text-muted" aria-hidden>
          Dasar
          <span className="flex h-5 items-end gap-[3px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} style={{ height: `${6 + i * 3.5}px` }} className="w-[4px] rounded-[1px] bg-accent" />
            ))}
          </span>
          Ahli
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {site.skillGroups.map((g) => (
          <SpotCard key={g.title} className="reveal rounded-2xl p-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">{g.title}</h3>
            <ul className="mt-3">
              {g.items.map((it) => (
                <li key={it.name} className="flex items-center justify-between gap-4 border-b border-white/[0.06] py-2.5 last:border-0">
                  <span className="text-[15px]">{it.name}</span>
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-muted">{labels[it.level]}</span>
                    <Signal level={it.level} />
                  </span>
                </li>
              ))}
            </ul>
          </SpotCard>
        ))}
      </div>
    </section>
  );
}
