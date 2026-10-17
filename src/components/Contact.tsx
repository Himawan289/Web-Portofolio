import fs from "node:fs";
import path from "node:path";
import { site } from "@/data/site";
import ContactForm from "./ContactForm";
import EmailLink from "./EmailLink";

// Taruh PDF di public/cv-dimas-respati.pdf untuk mengaktifkan tombol unduh.
const CV = "cv-dimas-respati.pdf";
const hasCv = fs.existsSync(path.join(process.cwd(), "public", CV));

const icon = "grid h-9 w-9 place-items-center rounded-full ring-1 ring-line transition hover:bg-fg/10";

export default function Contact() {
  return (
    <section id="kontak" className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="reveal text-center">
        <span className="mx-auto block h-0.5 w-8 rounded-full bg-accent" />
        <h2 className="mt-4 text-xl font-semibold uppercase tracking-[0.12em] md:text-2xl">Kontak</h2>
      </div>

      <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <p className="max-w-md text-sm font-light leading-7 text-muted md:text-base md:leading-8">
            Terbuka untuk peluang di bidang tata kelola TI, manajemen risiko, kepatuhan, dan analisis bisnis. Kirim pesan atau unduh CV.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {hasCv ? (
              <a href={`/${CV}`} download className="rounded-full bg-solid px-7 py-3 text-sm font-semibold text-on-solid transition hover:opacity-85">
                Unduh CV
              </a>
            ) : (
              <span className="cursor-not-allowed rounded-full px-7 py-3 text-sm text-muted ring-1 ring-line">CV segera tersedia</span>
            )}
            <EmailLink className={icon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Email">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </EmailLink>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={`${icon} text-xs font-semibold`}>in</a>
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={icon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        <div className="reveal">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
