import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-2 border-t border-line px-6 md:px-10 py-6 text-xs text-muted sm:flex-row">
        <p>© 2026 {site.fullName}</p>
        <a href="#profil" className="hover:text-fg">Kembali ke atas ↑</a>
      </div>
    </footer>
  );
}
