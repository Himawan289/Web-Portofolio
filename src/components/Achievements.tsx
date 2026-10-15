import Link from "next/link";
import AchievementCards from "./AchievementCards";

/** Isi halaman /achievements. */
export default function Achievements() {
  return (
    <main className="mx-auto w-full max-w-[1600px] px-6 pb-8 pt-28 md:px-12 md:pt-32 lg:px-16">
      <Link href="/" className="text-sm text-muted transition hover:text-accent">
        ← Kembali ke beranda
      </Link>
      <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-amber-300">Achievements</p>
      <h1 className="mt-3 text-5xl font-bold leading-tight md:text-6xl">
        Prestasi & <span className="text-gold">publikasi</span>
      </h1>
      <div className="mt-12">
        <AchievementCards />
      </div>
    </main>
  );
}
