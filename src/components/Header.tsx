type HeaderProps = {
  selectedCount: number;
  minified: boolean;
  copied: boolean;
  onCopy: () => void;
  onClearAll: () => void;
  onToggleMinified: () => void;
};

function Header({
  selectedCount,
  minified,
  copied,
  onCopy,
  onClearAll,
  onToggleMinified,
}: HeaderProps) {
  return (
    <header className="sticky rounded-2xl top-0 z-20 border-b border-slate-300 bg-white/90 px-4 py-3 backdrop-blur md:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
            Tailwind to CSS Generator
          </h1>
          <p className="text-sm text-slate-600">
            Pick utilities, generate raw CSS instantly. {selectedCount} classes
            selected.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onToggleMinified}
            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:bg-slate-100"
          >
            {minified ? "Pretty CSS" : "Minified CSS"}
          </button>
          <button
            type="button"
            onClick={onClearAll}
            className="rounded-md border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-900 transition hover:bg-amber-100"
          >
            Clear all
          </button>
          <button
            type="button"
            onClick={onCopy}
            className="rounded-md border border-cyan-300 bg-cyan-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-cyan-900 transition hover:bg-cyan-100"
          >
            {copied ? "Copied!" : "Copy CSS"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
