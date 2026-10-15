import { site } from "@/data/site";
import TiltPhoto from "./TiltPhoto";
import Chip from "./Chip";
import EmailButton from "./EmailButton";

const social = "grid h-11 w-11 place-items-center rounded-full border border-white/15 text-xs text-white/80 transition hover:border-accent hover:bg-accent hover:text-surface";

export default function Hero() {
  return (
    <section className="relative flex flex-1 flex-col justify-center px-6 pb-10 pt-28 md:px-12 md:pb-0 lg:px-20">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[70%] w-[55%] rounded-full bg-accent/20 blur-[120px]" />

      <div className="hero-text relative z-10 max-w-xl py-6 xl:max-w-3xl md:py-12">
        <p className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm">
          <span className="dot-live h-2 w-2 rounded-full bg-emerald-400" />
          Lulusan 2026 · Terbuka untuk peluang
        </p>
        <h1 className="text-gradient mt-6 text-5xl font-extrabold leading-[1.05] md:text-7xl xl:text-8xl">{site.firstName}</h1>
        <p className="mt-3 text-2xl md:text-3xl xl:text-4xl [font-family:var(--font-display)]">{site.role}</p>
        <p className="mt-6 max-w-lg text-[15px] leading-7 text-muted">{site.bio}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-surface shadow-[0_8px_30px_-6px_rgba(79,195,232,0.6)] transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Hubungi Saya ↗
          </a>
          <a href="#projects" className="rounded-xl border border-white/15 px-7 py-3.5 text-sm transition hover:border-accent hover:text-accent">
            Lihat Proyek
          </a>
          <ul className="ml-2 flex gap-2">
            <li><a href={site.linkedin} aria-label="LinkedIn" className={social}>in</a></li>
            <li><EmailButton label="Kirim email" className={social}>@</EmailButton></li>
          </ul>
        </div>
      </div>

      <div className="hero-photo relative mt-8 flex justify-center md:absolute md:bottom-0 md:right-6 md:mt-0 lg:right-16">
        <TiltPhoto src={site.photo} alt={`Foto ${site.fullName}`} />
      </div>
      <Chip label="COBIT 2019" mark="C" className="right-[40%] top-[62%] hidden md:flex" rotate={-4} />
      <Chip label="ITIL v4" mark="I" className="right-[10%] top-[34%] hidden md:flex" rotate={3} delay={1} />
      <Chip label="ISO 27001" mark="Is" className="right-[6%] top-[50%] hidden md:flex" rotate={-5} delay={2} />
      <Chip label="GRC" mark="G" className="right-[34%] top-[28%] hidden md:flex" rotate={-6} delay={0.5} />
      <Chip label="BPMN" mark="B" className="right-[3%] top-[70%] hidden md:flex" rotate={4} delay={1.5} />
    </section>
  );
}
