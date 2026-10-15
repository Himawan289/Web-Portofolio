import { site } from "@/data/site";
import ContactBlock from "./ContactBlock";

export default function Footer() {
  return (
    <footer id="contact" className="snap-sec mt-24 bg-surface">
      <ContactBlock />
      <div className="mx-auto flex w-full max-w-[1600px] flex-col justify-between gap-2 border-t border-white/10 px-6 py-6 text-xs text-muted sm:flex-row md:px-12 lg:px-16">
        <p>© 2026 {site.fullName}</p>
        <a href="#home" className="hover:text-white">
          Kembali ke atas ↑
        </a>
      </div>
    </footer>
  );
}
