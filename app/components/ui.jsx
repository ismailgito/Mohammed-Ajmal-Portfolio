export function XMarks({ className = "" }) {
  return (
    <div
      aria-hidden
      className={`grid grid-cols-3 gap-x-3 gap-y-1 font-display text-xl leading-none ${className}`}
    >
      {Array.from({ length: 6 }, (_, i) => (
        <span key={i}>x</span>
      ))}
    </div>
  );
}

export function SectionTitle({ script, bold, className = "" }) {
  return (
    <h2 className={`leading-none ${className}`}>
      <span className="font-script text-6xl md:text-7xl">{script}</span>
      {bold && (
        <span className="ml-2 font-display text-4xl uppercase tracking-wide md:text-5xl">
          {bold}
        </span>
      )}
    </h2>
  );
}

export function MacWindow({ url, children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border-[6px] border-white bg-white shadow-[0_18px_40px_rgba(0,0,0,0.3)] ${className}`}
    >
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 flex-1 rounded-full bg-neutral-100 px-4 py-0.5 text-xs font-light text-neutral-500">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

export function Pill({ children }) {
  return (
    <li className="pill cursor-default rounded-full border-2 border-ink px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
      {children}
    </li>
  );
}

export function Brush({ className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute bg-ink ${className}`}
    />
  );
}
