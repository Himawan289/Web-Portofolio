"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About & Summary" },
  { id: "competencies", label: "Competencies" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "certificates", label: "Certificates" },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [seen, setSeen] = useState("home");
  const active = seen;
  const hrefOf = (id: string) => (id === "home" ? "/" : `/#${id}`);

  useEffect(() => {
    if (pathname !== "/") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setSeen(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    // "contact" ikut diamati supaya garis bawah menu tidak tertinggal di Certificates.
    for (const id of [...links.map((l) => l.id), "contact"]) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [pathname]);

  return (
    <>
      <div className="progress fixed inset-x-0 top-0 z-[60] h-0.5 bg-accent" />
      <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2">
        <nav className="flex items-center justify-between gap-2 rounded-full border border-white/10 bg-surface/70 py-2 pl-4 pr-2 sm:gap-4 sm:pl-6 shadow-lg shadow-black/30 backdrop-blur-xl backdrop-saturate-150">
          <Link href="/" className="min-w-0 truncate text-sm font-bold tracking-tight [font-family:var(--font-display)]">
            {site.brand}
          </Link>

          <ul className="hidden items-center gap-6 text-[13px] xl:flex">
            {links.map((l) => (
              <li key={l.id}>
                <Link
                  href={hrefOf(l.id)}
                  aria-current={active === l.id ? "true" : undefined}
                  className={`border-b-2 py-1 transition-colors ${
                    active === l.id ? "border-accent text-accent" : "border-transparent text-white/75 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <details className="group relative xl:hidden">
              <summary className="cursor-pointer list-none rounded-full border border-white/15 px-3.5 py-2 text-xs sm:px-4 sm:text-sm [&::-webkit-details-marker]:hidden">
                Menu
              </summary>
              <ul className="absolute right-0 top-12 w-56 rounded-2xl border border-white/10 bg-surface/95 p-2 shadow-xl backdrop-blur-xl">
                {links.map((l) => (
                  <li key={l.id}>
                    <Link
                      href={hrefOf(l.id)}
                      className={`block rounded-xl px-4 py-2.5 text-sm ${active === l.id ? "bg-accent/15 text-accent" : "hover:bg-white/5"}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <Link
              href="/#contact"
              aria-current={active === "contact" ? "true" : undefined}
              className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium transition sm:px-5 sm:text-sm ${
                active === "contact"
                  ? "bg-white text-surface ring-2 ring-accent"
                  : "bg-accent text-surface hover:brightness-110"
              }`}
            >
              Contact Me <ArrowIcon />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
