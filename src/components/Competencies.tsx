import { siBun, siDjango, siDocker, siFigma, siLaravel, siMysql, siNextdotjs, siPostgresql, siPostman, siPython, siSelenium, type SimpleIcon } from "simple-icons";
import { site } from "@/data/site";

// Logo hanya untuk tool yang punya logo resmi di simple-icons; sisanya tampil sebagai chip teks.
const icons: Record<string, SimpleIcon> = {
  Python: siPython,
  Django: siDjango,
  Laravel: siLaravel,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  Bun: siBun,
  "Next.js": siNextdotjs,
  Docker: siDocker,
  Selenium: siSelenium,
  Postman: siPostman,
  Figma: siFigma,
};

function Chip({ name }: { name: string }) {
  const icon = icons[name];
  return (
    <li
      className={`flex cursor-default items-center gap-2.5 rounded-lg border border-white/12 bg-white/[0.04] py-1.5 text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-white/[0.08] ${
        icon ? "pl-1.5 pr-3.5" : "px-3.5"
      }`}
    >
      {icon && (
        <span className="grid h-7 w-7 place-items-center rounded-md bg-[#f3f0ea]">
          <svg viewBox="0 0 24 24" width="18" height="18" role="img" aria-label={icon.title}>
            <path d={icon.path} fill={`#${icon.hex}`} />
          </svg>
        </span>
      )}
      {name}
    </li>
  );
}

export default function Competencies() {
  return (
    <section id="competencies" className="snap-sec mx-auto flex w-full max-w-[1600px] flex-col justify-center px-6 py-12 md:px-12 md:py-14 lg:px-16">
      <p className="reveal text-sm font-medium uppercase tracking-[0.2em] text-accent">Competencies</p>
      <h2 className="reveal mt-3 text-4xl font-bold leading-tight md:text-5xl">
        Keahlian & <span className="text-gradient">tools</span>
      </h2>

      <ul className="mt-12 border-b border-white/12">
        {site.skillGroups.map((g) => (
          <li key={g.title} className="reveal grid gap-4 border-t border-white/12 py-6 lg:grid-cols-[240px_1fr] lg:gap-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted lg:pt-3">{g.title}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {g.items.map((it) => (
                <Chip key={it} name={it} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
