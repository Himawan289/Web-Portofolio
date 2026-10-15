import fs from "node:fs";
import path from "node:path";
import { site } from "@/data/site";
import SpotCard from "./SpotCard";
import PhotoTilt from "./PhotoTilt";

// Foto dipakai kalau filenya ada di folder public/. Tambahkan public/foto-sidang.jpg untuk mengganti placeholder.
const has = (f: string) => fs.existsSync(path.join(process.cwd(), "public", f));

export default function Education() {
  const e = site.education;
  return (
    <section id="education" className="snap-sec mx-auto flex w-full max-w-[1600px] flex-col justify-center px-6 py-12 md:px-12 md:py-14 lg:px-16">
      <p className="reveal text-sm font-medium uppercase tracking-[0.2em] text-accent">Education</p>
      <h2 className="reveal mt-3 text-4xl font-bold leading-tight md:text-5xl">
        Latar <span className="text-gradient">pendidikan</span>
      </h2>
      <div className="mt-10 grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr_1.2fr]">
        <SpotCard className="reveal rounded-2xl p-8">
          <p className="text-xs text-accent">{e.period}</p>
          <p className="mt-2 text-3xl font-semibold leading-tight">{e.school}</p>
          <p className="mt-2 text-muted">{e.degree}</p>
          <p className="mt-10 text-6xl font-extrabold text-accent [font-family:var(--font-display)]">3,56</p>
          <p className="text-sm text-muted">GPA dari 4,00</p>
        </SpotCard>
        <div className="reveal">
          <PhotoTilt
            src={has("foto-sidang.jpg") ? "/foto-sidang.jpg" : undefined}
            alt="Dimas saat sidang skripsi"
            caption="Sidang Skripsi"
          />
        </div>
        <div className="reveal">
          <PhotoTilt
            src={has("foto-wisuda.jpg") ? "/foto-wisuda.jpg" : undefined}
            alt="Dimas saat wisuda di Universitas Airlangga"
            caption="Wisuda"
            position="55% 40%"
          />
        </div>
      </div>
    </section>
  );
}
