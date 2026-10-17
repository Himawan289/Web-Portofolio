"use client";

import { site } from "@/data/site";

const field = "w-full rounded-xl bg-card px-4 py-3 text-sm outline-none ring-1 ring-line transition placeholder:text-muted/60 focus:ring-2 focus:ring-accent";

/** Tanpa server: formulir membuka aplikasi email dengan isi terisi. Alamat dirakit saat dikirim. */
export default function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const { user, host } = site.emailParts;
    const subject = encodeURIComponent(`Halo dari ${f.get("nama")}`);
    const body = encodeURIComponent(`${f.get("pesan")}\n\n— ${f.get("nama")} (${f.get("email")})`);
    window.location.href = `mailto:${user}@${host}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="nama" required autoComplete="name" placeholder="Nama" aria-label="Nama" className={field} />
        <input name="email" type="email" required autoComplete="email" placeholder="Email" aria-label="Email" className={field} />
      </div>
      <textarea name="pesan" required rows={4} placeholder="Pesan" aria-label="Pesan" className={`${field} resize-y`} />
      <button type="submit" className="justify-self-start rounded-full bg-solid px-7 py-3 text-sm font-semibold text-on-solid transition hover:opacity-85">
        Kirim Pesan
      </button>
    </form>
  );
}
