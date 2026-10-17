"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "profil", label: "Home" },
  { id: "pengalaman", label: "Pengalaman" },
  { id: "skill", label: "Skill" },
  { id: "prestasi", label: "Prestasi" },
  { id: "organisasi", label: "Organisasi" },
  { id: "kontak", label: "Kontak" },
];

export default function Navbar() {
  const [active, setActive] = useState("profil");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const l of links) {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="progress fixed inset-x-0 top-0 z-[60] h-0.5 bg-accent" />
      <header className="fixed inset-x-0 top-0 z-50 bg-nav/90 backdrop-blur-md">
        <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-4 px-6 md:px-10">
          <a href="#profil" className="truncate text-sm font-semibold tracking-tight">
            {site.brand}
          </a>

          <ul className="hidden items-center gap-7 text-xs font-medium md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} aria-current={active === l.id ? "true" : undefined} className={`transition-colors ${active === l.id ? "text-fg" : "text-muted hover:text-fg"}`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-1">
            <ThemeToggle />
            <details className="relative md:hidden">
              <summary className="cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium text-muted">Menu</summary>
              <ul className="absolute right-0 top-11 w-48 rounded-2xl bg-card p-1.5 shadow-xl ring-1 ring-line">
                {links.map((l) => (
                  <li key={l.id}>
                    <a href={`#${l.id}`} className={`block rounded-xl px-3 py-2 text-sm ${active === l.id ? "text-fg" : "text-muted hover:text-fg"}`}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </nav>
      </header>
    </>
  );
}
