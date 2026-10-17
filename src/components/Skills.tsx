import { siBun, siDjango, siDocker, siFigma, siLaravel, siMysql, siNextdotjs, siPostgresql, siPostman, siPython, siSelenium, type SimpleIcon } from "simple-icons";
import { site } from "@/data/site";
import Section from "./SectionHead";

// Logo hanya untuk tool yang punya logo resmi di simple-icons; dipakai monokrom.
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

const levels = ["", "Dasar", "Menengah", "Mahir"];

function Pill({ name }: { name: string }) {
  const icon = icons[name];
  return (
    <li className="flex items-center gap-2 rounded-full bg-card px-3.5 py-1.5 text-xs ring-1 ring-line">
      {icon && (
        <svg viewBox="0 0 24 24" width="13" height="13" role="img" aria-label={icon.title} className="text-muted">
          <path d={icon.path} fill="currentColor" />
        </svg>
      )}
      {name}
    </li>
  );
}

export default function Skills() {
  return (
    <Section id="skill" title="Skill">
      <p className="reveal text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">Skill unggulan</p>
      <ul className="reveal mt-4 flex flex-wrap justify-center gap-2">
        {site.featuredSkills.map((s) => (
          <li key={s} className="rounded-full bg-solid px-4 py-2 text-xs font-semibold text-on-solid">{s}</li>
        ))}
      </ul>

      <ul className="mt-14 grid gap-x-12 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
        {site.skillGroups.map((g) => (
          <li key={g.title} className="reveal">
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-2">
              <h3 className="text-sm font-semibold">{g.title}</h3>
              <p className="text-xs text-muted">{levels[g.level]}</p>
            </div>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <Pill key={it} name={it} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
