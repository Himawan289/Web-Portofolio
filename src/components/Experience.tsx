import { site } from "@/data/site";
import ExperienceTimeline from "./ExperienceTimeline";
import Section from "./SectionHead";

export default function Experience() {
  return (
    <>
      <Section id="proyek" title="Proyek">
        <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {site.projects.map((p) => (
            <li key={p.title} className="reveal flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-line">
              <div className="flex-1 p-5">
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted">{p.type}</p>
                <h3 className="mt-2 text-base font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-xs font-light leading-5 text-muted">{p.desc}</p>
                {"metric" in p && p.metric && (
                  <p className="mt-4 flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-accent">{p.metric.value}</span>
                    <span className="text-[11px] leading-4 text-muted">{p.metric.label}</span>
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="pengalaman" title="Pengalaman">
        <ExperienceTimeline jobs={site.experience} />
      </Section>
    </>
  );
}
