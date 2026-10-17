/** Section terpusat: garis aksen kecil, judul kapital, isi di kolom sempit. */
export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="reveal text-center">
        <span className="mx-auto block h-0.5 w-8 rounded-full bg-accent" />
        <h2 className="mt-4 text-xl font-semibold uppercase tracking-[0.12em] md:text-2xl">{title}</h2>
      </div>
      <div className="mt-10 md:mt-14">{children}</div>
    </section>
  );
}
