import fs from "node:fs";
import path from "node:path";
import QRCode from "qrcode";
import { site } from "@/data/site";
import EmailLink from "./EmailLink";

const find = (names: string[]) => names.find((f) => fs.existsSync(path.join(process.cwd(), "public", f)));

/** QR dibuat sinkron saat build dan digambar sebagai SVG (tanpa file gambar). */
function Qr({ value }: { value: string }) {
  const { modules } = QRCode.create(value, { errorCorrectionLevel: "M" });
  const n = modules.size;
  let d = "";
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (modules.get(x, y)) d += `M${x + 2} ${y + 2}h1v1h-1z`;
  return (
    <svg viewBox={`0 0 ${n + 4} ${n + 4}`} width={88} height={88} role="img" aria-label="Kode QR" className="h-[88px] w-[88px] shrink-0 rounded-lg bg-white p-1" shapeRendering="crispEdges">
      <path d={d} fill="#000" />
    </svg>
  );
}

function WindowFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="ml-12 mt-12 overflow-hidden rounded-xl border border-white/10 bg-[#0b1626] shadow-2xl shadow-black/50">
      <div className="flex items-center gap-1.5 border-b border-white/10 py-2.5 pl-12 pr-4">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-2 truncate text-xs text-muted">{title}</span>
      </div>
      <div className="aspect-[4/3]">{children}</div>
    </div>
  );
}

function Panel({
  badge,
  badgeClass,
  windowTitle,
  children,
  qr,
  label,
  caption,
}: {
  badge: React.ReactNode;
  badgeClass: string;
  windowTitle: string;
  children: React.ReactNode;
  qr?: string;
  label: React.ReactNode;
  caption: string;
}) {
  return (
    <div>
      <div className="relative">
        <span className={`absolute left-0 top-0 z-10 grid h-[4.5rem] w-[4.5rem] place-items-center rounded-3xl shadow-2xl shadow-black/50 ${badgeClass}`}>{badge}</span>
        <WindowFrame title={windowTitle}>{children}</WindowFrame>
      </div>
      <div className="mt-6 flex items-center gap-5">
        {qr ? (
          <Qr value={qr} />
        ) : (
          <div className="grid h-[88px] w-[88px] shrink-0 place-items-center rounded-lg border border-dashed border-white/20 text-[10px] text-muted">QR</div>
        )}
        <div>
          <p className="text-2xl font-semibold text-accent">{label}</p>
          <p className="mt-1 text-sm text-muted">{caption}</p>
        </div>
      </div>
    </div>
  );
}

const linkCls = "hover:underline underline-offset-4";
const placeholder = (text: string) => <div className="grid h-full w-full place-items-center p-6 text-center text-sm text-muted">{text}</div>;

export default function ContactBlock() {
  const linkedinShot = find(["linkedin-profil.png", "linkedin-profil.jpg"]);
  const instaShot = find(["instagram-profil.png", "instagram-profil.jpg"]);
  const { user, host } = site.emailParts;

  return (
    <div className="mx-auto w-full max-w-[1600px] px-6 py-24 md:px-12 lg:px-16 lg:py-28">
      <p className="text-sm text-muted">Contact</p>
      <h2 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
        Mari bekerja sama<span className="text-accent">.</span>
      </h2>

      <div className="mt-16 grid gap-20 lg:grid-cols-3 lg:gap-10 xl:gap-14">
        <Panel
          badge={
            <svg width="38" height="38" viewBox="0 0 24 24" fill="#fff" aria-hidden>
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
            </svg>
          }
          badgeClass="bg-[#0A66C2]"
          windowTitle="linkedin.com/in/dimasrespati"
          qr={site.linkedin}
          label={
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={linkCls}>
              LinkedIn ↗
            </a>
          }
          caption="Scan untuk melihat profilku, atau klik tautannya."
        >
          {linkedinShot ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`/${linkedinShot}`} alt="Tampilan profil LinkedIn" className="h-full w-full object-cover object-top" />
          ) : (
            placeholder("Screenshot profil LinkedIn akan ditambahkan")
          )}
        </Panel>

        <Panel
          badge={
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="0.6" fill="#fff" />
            </svg>
          }
          badgeClass="bg-[linear-gradient(45deg,#f9a03c,#e1306c_50%,#833ab4)]"
          windowTitle={site.instagram ? site.instagram.replace(/^https?:\/\//, "") : "instagram.com"}
          qr={site.instagram || undefined}
          label={
            site.instagram ? (
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={linkCls}>
                Instagram ↗
              </a>
            ) : (
              "Instagram"
            )
          }
          caption={site.instagram ? "Scan untuk melihat profilku, atau klik tautannya." : "Akun Instagram akan ditambahkan."}
        >
          {instaShot ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`/${instaShot}`} alt="Tampilan profil Instagram" className="h-full w-full object-cover object-top" />
          ) : (
            placeholder("Screenshot profil Instagram akan ditambahkan")
          )}
        </Panel>

        <Panel
          badge={
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          }
          badgeClass="bg-accent text-surface"
          windowTitle="Pesan baru"
          qr={`mailto:${user}@${host}`}
          label={
            <EmailLink className={linkCls}>
              Email ↗
            </EmailLink>
          }
          caption="Scan untuk menulis pesan, atau klik tautannya."
        >
          <div className="flex h-full flex-col gap-3 py-5 pl-11 pr-5 text-sm">
            <p className="flex gap-3 border-b border-white/10 pb-3">
              <span className="w-14 shrink-0 text-muted">Kepada</span>
              <span className="truncate">{site.fullName}</span>
            </p>
            <p className="flex gap-3 border-b border-white/10 pb-3">
              <span className="w-14 shrink-0 text-muted">Subjek</span>
              <span className="truncate">Halo, saya ingin berdiskusi</span>
            </p>
            <div className="mt-1 space-y-2.5" aria-hidden>
              <div className="h-2 w-11/12 rounded bg-white/10" />
              <div className="h-2 w-10/12 rounded bg-white/10" />
              <div className="h-2 w-7/12 rounded bg-white/10" />
            </div>
          </div>
        </Panel>
      </div>

      <p className="mx-auto mt-20 max-w-2xl text-center text-sm leading-7 text-muted">
        Terbuka untuk peran di Tata Kelola TI, GRC, ITSM, dan Analisis Sistem. Berbasis di Surabaya, Indonesia.
      </p>
    </div>
  );
}
