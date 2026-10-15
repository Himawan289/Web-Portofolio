import { site } from "@/data/site";
import fs from "node:fs";
import path from "node:path";
import SpotCard from "./SpotCard";
import OrgTimeline from "./OrgTimeline";

// Foto kegiatan dipakai kalau filenya ada di public/organisasi/; kalau belum, popup menampilkan placeholder.
const has = (f: string) => fs.existsSync(path.join(process.cwd(), "public", "organisasi", f));
const orgs = [...site.organizations]
  .sort((a, b) => a.start.localeCompare(b.start))
  .map((o) => ({ role: o.role, org: o.org, period: o.period, src: has(o.file) ? `/organisasi/${o.file}` : undefined }));

export default function Experience() {
  return (
    <section id="experience" className="snap-sec mx-auto flex w-full max-w-[1600px] flex-col justify-center px-6 py-12 md:px-12 md:py-14 lg:px-16">
      <p className="reveal text-sm font-medium uppercase tracking-[0.2em] text-accent">Experience</p>
      <h2 className="reveal mt-3 text-4xl font-bold leading-tight md:text-5xl">
        Jejak <span className="text-gradient">kerja</span>
      </h2>

      <ol className="mt-10 grid gap-5 lg:grid-cols-3">
        {site.experience.map((e, i) => (
          <li key={e.org} className="reveal">
            <SpotCard className="flex h-full flex-col rounded-2xl p-7">
              <div className="flex items-center justify-between gap-3">
                <p className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">{e.period}</p>
                {i === 0 && <span className="dot-live h-2.5 w-2.5 rounded-full bg-emerald-400" aria-label="Sedang berjalan" />}
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-snug">{e.role}</h3>
              <p className="mt-1 text-sm text-muted">{e.org}</p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-white/75">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </SpotCard>
          </li>
        ))}
      </ol>

      <h3 className="reveal mt-16 text-2xl font-semibold md:text-3xl">
        Organisasi & <span className="text-gradient">kepanitiaan</span>
      </h3>
      <p className="reveal mt-2 text-sm text-muted">Urut dari yang paling awal. Klik untuk melihat dokumentasi kegiatan.</p>
      <OrgTimeline items={orgs} />
    </section>
  );
}
