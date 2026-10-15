export default function Chip({
  label,
  mark,
  className = "",
  rotate = 0,
  delay = 0,
}: {
  label: string;
  mark: string;
  className?: string;
  rotate?: number;
  delay?: number;
}) {
  return (
    <div
      aria-hidden
      className={`float absolute z-10 flex items-center gap-3 rounded-lg bg-chip px-3 py-2 text-xs font-medium text-white shadow-lg shadow-black/30 ${className}`}
      style={{ "--r": `${rotate}deg`, animationDelay: `${delay}s` } as React.CSSProperties}
    >
      <span className="grid h-6 w-6 place-items-center rounded bg-surface text-[10px] font-bold text-accent">{mark}</span>
      {label}
      <span className="ml-3 opacity-80">×</span>
    </div>
  );
}
