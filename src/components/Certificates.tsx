import fs from "node:fs";
import path from "node:path";
import { site } from "@/data/site";
import CertCard from "./CertCard";

// Foto dipakai kalau filenya ada di public/sertifikat/; kalau belum, tampil placeholder.
const has = (f: string) => fs.existsSync(path.join(process.cwd(), "public", "sertifikat", f));

export default function Certificates() {
  return (
    <section id="certificates" className="snap-sec mx-auto flex w-full max-w-[1600px] flex-col justify-center px-6 py-12 md:px-12 md:py-14 lg:px-16">
      <p className="reveal text-sm font-medium uppercase tracking-[0.2em] text-accent">Certificates</p>
      <h2 className="reveal mt-3 text-4xl font-bold leading-tight md:text-5xl">
        Sertifikasi <span className="text-gradient">profesional</span>
      </h2>
      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {site.certificates.map((c) => (
          <li key={c.file} className="reveal">
            <CertCard kind={c.kind} title={c.title} issuer={c.issuer} src={has(c.file) ? `/sertifikat/${c.file}` : undefined} />
          </li>
        ))}
      </ul>
    </section>
  );
}
