import fs from "node:fs";
import path from "node:path";
import { site } from "@/data/site";
import OrgTimeline from "./OrgTimeline";
import Section from "./SectionHead";

// Foto kegiatan dipakai kalau filenya ada di public/organisasi/; kalau belum, popup menampilkan placeholder.
const has = (f: string) => fs.existsSync(path.join(process.cwd(), "public", "organisasi", f));
const orgs = [...site.organizations]
  .sort((a, b) => b.start.localeCompare(a.start))
  .map((o) => ({ role: o.role, org: o.org, period: o.period, src: has(o.file) ? `/organisasi/${o.file}` : undefined }));

export default function Organizations() {
  return (
    <Section id="organisasi" title="Organisasi">
      <OrgTimeline items={orgs} />
    </Section>
  );
}
