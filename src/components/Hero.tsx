import Image from "next/image";
import { siDjango, siDocker, siFigma, siLaravel, siNextdotjs, siPostgresql, siPython, siPostman } from "simple-icons";
import { site } from "@/data/site";
import CountUp from "./CountUp";

const logos = [siPython, siDjango, siLaravel, siPostgresql, siNextdotjs, siDocker, siPostman, siFigma];

export default function Hero() {
  const e = site.education;
  return (
    <section id="profil" className="mx-auto w-full max-w-7xl px-6 pb-16 text-center md:px-10">
      {/* Layar penuh: sapaan di tengah-tengah tinggi layar */}
      <div className="flex min-h-svh flex-col items-center justify-center pb-12 pt-24">
        <div className="w-fit rounded-full bg-accent p-[3px]">
          <Image src="/foto-avatar.jpg" alt={`Foto ${site.fullName}`} width={480} height={480} priority className="h-32 w-32 rounded-full object-cover md:h-40 md:w-40" />
        </div>

        <h1 className="mt-8 text-[clamp(2.25rem,1.2rem+3.8vw,4.5rem)] font-bold leading-[1.1] tracking-tight">{site.firstName}</h1>
        <p className="mt-3 text-[clamp(1.05rem,0.8rem+1.2vw,1.9rem)] font-medium leading-snug text-fg/60">{site.role}</p>

        <p className="mx-auto mt-8 max-w-2xl text-sm font-light leading-7 text-muted md:text-base md:leading-8">{site.bio}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#kontak" className="rounded-full bg-solid px-8 py-3.5 text-sm font-semibold text-on-solid transition hover:opacity-85">
            Hubungi Saya
          </a>
          <a href="#kontak" className="rounded-full px-8 py-3.5 text-sm font-semibold ring-1 ring-fg/60 transition hover:bg-fg/10">
            Unduh CV
          </a>
        </div>

        <div className="mt-16 md:mt-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Berpengalaman dengan</p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-9 gap-y-5 text-muted">
            {logos.map((i) => (
              <li key={i.title}>
                <svg viewBox="0 0 24 24" width="28" height="28" role="img" aria-label={i.title} className="transition hover:text-fg">
                  <path d={i.path} fill="currentColor" />
                </svg>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {site.frameworks.map((f) => (
              <li key={f} className="rounded-full px-3.5 py-1.5 text-xs font-medium ring-1 ring-line">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Profil singkat + sorotan */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {site.stats.map((s) => (
          <div key={s.label} className="reveal rounded-2xl bg-card px-5 py-7 ring-1 ring-line">
            <p className="text-3xl font-bold text-accent md:text-4xl">
              <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals} />
            </p>
            <p className="mt-2 text-xs text-muted md:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="reveal mx-auto mt-10 max-w-3xl text-sm font-light leading-7 text-muted md:text-base md:leading-8">
        {e.degree}, {e.school} ({e.period}). {site.about}
      </p>
    </section>
  );
}
