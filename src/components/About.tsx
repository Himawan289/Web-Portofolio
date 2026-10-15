import { site } from "@/data/site";
import SpotCard from "./SpotCard";
import CountUp from "./CountUp";
import TiltPhoto from "./TiltPhoto";

export default function About() {
  return (
    <section id="about" className="snap-sec mx-auto flex w-full max-w-[1600px] flex-col justify-center px-6 py-12 md:px-12 md:py-14 lg:px-16">
      <p className="reveal text-sm font-medium uppercase tracking-[0.2em] text-accent">About & Summary</p>
      <h2 className="reveal mt-3 text-4xl font-bold leading-tight md:text-5xl">
        Ringkasan <span className="text-gradient">profil</span>
      </h2>

      <div className="mt-10 grid items-end gap-10 lg:grid-cols-[360px_1fr] lg:gap-14">
        <div className="reveal mx-auto lg:mx-0">
          <TiltPhoto src={site.photo2} alt={`Foto formal ${site.fullName}`} className="mx-auto h-[290px] w-[280px] md:h-[360px] md:w-[350px]" />
        </div>
        <div className="grid gap-8">
          <div className="reveal">
            <p className="text-[15px] leading-8 text-white/80">{site.about}</p>
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">Soft skills</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {site.softSkills.map((i) => (
                    <li key={i} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">Bahasa</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {site.languages.map((i) => (
                    <li key={i} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {site.stats.map((s) => (
              <SpotCard key={s.label} className="reveal rounded-2xl p-5">
                <p className="text-3xl font-extrabold text-accent [font-family:var(--font-display)]">
                  <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals} />
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </SpotCard>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {site.skills.map((s, i) => (
          <SpotCard key={s.title} className="reveal flex flex-col rounded-2xl p-6">
            <span className="text-sm font-semibold text-accent/70">0{i + 1}</span>
            <h3 className="mt-2 text-lg font-semibold leading-snug">{s.title}</h3>
            <p className="mt-1 text-xs text-accent">{s.tags}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{s.desc}</p>
          </SpotCard>
        ))}
      </div>
    </section>
  );
}
