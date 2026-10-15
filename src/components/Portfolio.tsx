import { site } from "@/data/site";
import SpotCard from "./SpotCard";
import HorizontalScroll from "./HorizontalScroll";

export default function Portfolio() {
  return (
    <section id="projects" className="snap-sec py-12 md:py-14">
      <HorizontalScroll
        heading={
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Projects</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              Proyek <span className="text-gradient">pilihan</span>
            </h2>
            <p className="mt-3 hidden text-sm text-muted md:block">Geser ke samping →</p>
          </div>
        }
      >
        {site.projects.map((p, i) => (
          <SpotCard
            as="article"
            data-card
            key={p.title}
            className="group flex min-h-72 w-[85vw] shrink-0 snap-start flex-col rounded-2xl p-8 md:h-[430px] md:w-[min(78vw,640px)]"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs font-medium text-accent">0{i + 1} · {p.type}</p>
              <span className="text-xl text-white/30 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">↗</span>
            </div>
            <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-snug">{p.title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{p.desc}</p>
            {"metric" in p && p.metric && (
              <div className="mt-auto flex flex-col items-start gap-2 pt-8 sm:flex-row sm:items-end sm:gap-5">
                <span className="text-gradient text-5xl font-extrabold sm:text-6xl [font-family:var(--font-display)]">{p.metric.value}</span>
                <span className="max-w-xs pb-2 text-sm text-white/70">{p.metric.label}</span>
              </div>
            )}
          </SpotCard>
        ))}
      </HorizontalScroll>
    </section>
  );
}
