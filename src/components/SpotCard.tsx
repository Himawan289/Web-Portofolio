"use client";

export default function SpotCard({
  children,
  className = "",
  as: Tag = "div",
  "data-card": dataCard,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  "data-card"?: boolean;
}) {
  function onMove(e: React.PointerEvent<HTMLElement>) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  return (
    <Tag className={`spot ${className}`} onPointerMove={onMove} data-card={dataCard || undefined}>
      {children}
    </Tag>
  );
}
