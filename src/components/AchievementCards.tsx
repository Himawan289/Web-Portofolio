import fs from "node:fs";
import path from "node:path";
import { site } from "@/data/site";
import CertCard from "./CertCard";

// Foto dipakai kalau filenya ada di public/prestasi/; kalau belum, tampil placeholder.
const has = (f: string) => fs.existsSync(path.join(process.cwd(), "public", "prestasi", f));

export default function AchievementCards() {
  return (
    <ul className="grid gap-6 lg:grid-cols-2">
      {site.achievements.map((a) => (
        <li key={a.file} className="reveal">
          <CertCard featured kind={a.badge} title={a.title} issuer={a.issuer} src={has(a.file) ? `/prestasi/${a.file}` : undefined} />
        </li>
      ))}
    </ul>
  );
}
