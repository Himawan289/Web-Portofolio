import AchievementCards from "./AchievementCards";

/** Bagian Achievements di beranda. */
export default function AchievementsSection() {
  return (
    <section id="achievements" className="snap-sec mx-auto flex w-full max-w-[1600px] flex-col justify-center px-6 py-12 md:px-12 md:py-14 lg:px-16">
      <p className="reveal text-sm font-medium uppercase tracking-[0.2em] text-amber-300">Achievements</p>
      <h2 className="reveal mt-3 text-4xl font-bold leading-tight md:text-5xl">
        Prestasi & <span className="text-gold">publikasi</span>
      </h2>
      <div className="mt-10">
        <AchievementCards />
      </div>
    </section>
  );
}
