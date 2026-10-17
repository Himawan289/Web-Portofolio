import fs from "node:fs";
import path from "node:path";
import { site } from "@/data/site";
import CertCard from "./CertCard";
import Section from "./SectionHead";

// Foto dipakai kalau filenya ada di public/<dir>/; kalau belum, tampil placeholder.
const has = (dir: string, f: string) => fs.existsSync(path.join(process.cwd(), "public", dir, f));

export default function Credentials() {
  return (
    <Section id="prestasi" title="Prestasi & Sertifikat">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {site.achievements.map((a) => (
          <li key={a.file} className="reveal">
            <CertCard featured kind={a.badge} title={a.title} issuer={a.issuer} src={has("prestasi", a.file) ? `/prestasi/${a.file}` : undefined} />
          </li>
        ))}
        {site.certificates.map((c) => (
          <li key={c.file} className="reveal">
            <CertCard kind={c.kind} title={c.title} issuer={c.issuer} src={has("sertifikat", c.file) ? `/sertifikat/${c.file}` : undefined} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
