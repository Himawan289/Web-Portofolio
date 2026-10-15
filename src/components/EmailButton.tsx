"use client";

import { site } from "@/data/site";

/** Tombol email tanpa menampilkan alamatnya: mailto dirakit saat diklik. */
export default function EmailButton({ className, children, label = "Email" }: { className?: string; children: React.ReactNode; label?: string }) {
  function open() {
    const { user, host } = site.emailParts;
    window.location.href = `mailto:${user}@${host}`;
  }
  return (
    <button type="button" onClick={open} aria-label={label} className={className}>
      {children}
    </button>
  );
}
