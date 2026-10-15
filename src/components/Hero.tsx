import { site } from "@/data/site";
import TiltPhoto from "./TiltPhoto";
import Chip from "./Chip";
import EmailButton from "./EmailButton";

const social = "grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-white/15 text-xs text-white/80 transition hover:border-accent hover:bg-accent hover:text-surface";

export default function Hero() {
  return (
    <section className="relative grid flex-1 grid-cols-[1.1fr_1fr] grid-rows-[auto_1fr] px-6 pb-0 pt-24 md:px-12 lg:flex lg:flex-col lg:justify-center lg:px-20 lg:pt-28">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[70%] w-[55%] rounded-full bg-accent/20 blur-[120px]" />

      {/* Di bawah lg wrapper ini "contents": judul selebar layar, lalu bio di kiri dan foto di kanan. */}
      <div className="hero-text contents lg:relative lg:z-10 lg:block lg:max-w-lg lg:py-12 xl:max-w-xl 2xl:max-w-3xl">
        <div className="relative z-10 col-span-2 pt-4 lg:pt-0">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs sm:gap-3 sm:px-4 sm:text-sm">
            <span className="dot-live h-2 w-2 rounded-full bg-emerald-400" />
            Lulusan 2026 · Terbuka untuk peluang
          </p>
          <h1 className="text-gradient mt-5 text-4xl font-extrabold leading-[1.05] sm:mt-6 sm:text-5xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{site.firstName}</h1>
          <p className="mt-2 text-lg sm:mt-3 sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl [font-family:var(--font-display)]">{site.role}</p>
        </div>

        <div className="relative z-10 col-start-1 row-start-2 self-center pb-8 pt-5 sm:pt-6 lg:pb-0">
          <p className="max-w-lg text-[13px] leading-6 text-muted sm:text-[15px] sm:leading-7">{site.bio}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-accent px-5 py-3 text-[13px] font-semibold text-surface shadow-[0_8px_30px_-6px_rgba(79,195,232,0.6)] transition hover:-translate-y-0.5 hover:brightness-110 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Hubungi Saya ↗
            </a>
            <a href="#projects" className="rounded-xl border border-white/15 px-5 py-3 text-[13px] transition hover:border-accent hover:text-accent sm:px-7 sm:py-3.5 sm:text-sm">
              Lihat Proyek
            </a>
            <ul className="flex gap-2">
              <li><a href={site.linkedin} aria-label="LinkedIn" className={social}>in</a></li>
              <li><EmailButton label="Kirim email" className={social}>@</EmailButton></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hero-photo relative col-start-2 row-start-2 self-end justify-self-end lg:absolute lg:bottom-0 lg:right-16 lg:self-auto">
        <TiltPhoto src={site.photo} alt={`Foto ${site.fullName}`} />
      </div>
      <Chip label="COBIT 2019" mark="C" className="right-[40%] top-[62%] hidden xl:flex" rotate={-4} />
      <Chip label="ITIL v4" mark="I" className="right-[10%] top-[34%] hidden xl:flex" rotate={3} delay={1} />
      <Chip label="ISO 27001" mark="Is" className="right-[6%] top-[50%] hidden xl:flex" rotate={-5} delay={2} />
      <Chip label="GRC" mark="G" className="right-[34%] top-[28%] hidden xl:flex" rotate={-6} delay={0.5} />
      <Chip label="BPMN" mark="B" className="right-[3%] top-[70%] hidden xl:flex" rotate={4} delay={1.5} />
    </section>
  );
}
