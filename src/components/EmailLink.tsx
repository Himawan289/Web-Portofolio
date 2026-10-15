"use client";

import { site } from "@/data/site";

/** Tautan teks ke email tanpa menampilkan alamat: mailto dirakit saat diklik. */
export default function EmailLink({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      href="mailto:"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        const { user, host } = site.emailParts;
        window.location.href = `mailto:${user}@${host}`;
      }}
    >
      {children}
    </a>
  );
}
