type HeaderProps = {
  selectedCount: number;
  copied: boolean;
  copiedMinified: boolean;
  copiedBoilerplate: boolean;
  onCopy: () => void;
  onCopyMinified: () => void;
  onCopyBoilerplate: () => void;
  onClearAll: () => void;
};

function Header({
  selectedCount,
  copied,
  copiedMinified,
  copiedBoilerplate,
  onCopy,
  onCopyMinified,
  onCopyBoilerplate,
  onClearAll,
}: HeaderProps) {
  const openHowToUse = () => {
    const dialog = document.getElementById("how-to-use-dialog");
    if (dialog instanceof HTMLDialogElement) {
      dialog.showModal();
    }
  };

  const closeHowToUse = () => {
    const dialog = document.getElementById("how-to-use-dialog");
    if (dialog instanceof HTMLDialogElement) {
      dialog.close();
    }
  };

  return (
    <>
      <header className="sticky top-0 z-20 rounded-2xl border-b border-slate-300 bg-white/90 px-4 py-3 backdrop-blur md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              Tailwind to CSS Generator
            </h1>
            <p className="text-sm text-slate-600">
              Pick utilities, generate raw CSS instantly. {selectedCount}{" "}
              classes selected.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={openHowToUse}
              className="rounded-md border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-900 transition hover:bg-emerald-100"
            >
              How to Use?
            </button>
            <button
              type="button"
              onClick={onCopyBoilerplate}
              className="rounded-md border border-violet-300 bg-violet-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-violet-900 transition hover:bg-violet-100"
            >
              {copiedBoilerplate
                ? "Boilerplate Copied!"
                : "Copy Boilerplate Code"}
            </button>
            <button
              type="button"
              onClick={onCopy}
              className="rounded-md border border-cyan-300 bg-cyan-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-cyan-900 transition hover:bg-cyan-100"
            >
              {copied ? "Copied!" : "Copy CSS"}
            </button>
            <button
              type="button"
              onClick={onCopyMinified}
              className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:bg-slate-100"
            >
              {copiedMinified ? "Minified Copied!" : "Copy Minified CSS"}
            </button>
            <button
              type="button"
              onClick={onClearAll}
              className="rounded-md border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-900 transition hover:bg-amber-100"
            >
              Clear all
            </button>
          </div>
        </div>
      </header>

      <dialog
        id="how-to-use-dialog"
        className="w-[min(92vw,560px)] rounded-xl border border-slate-300 p-0 text-slate-900 backdrop:bg-slate-950/55"
      >
        <div className="border-b border-slate-200 bg-white px-5 py-3">
          <h2 className="text-base font-semibold tracking-tight">How to Use</h2>
        </div>
        <div className="space-y-3 bg-white px-5 py-4 text-sm leading-6 text-slate-700">
          <p>1. Copy and paste Boilerplate Code into your global CSS file.</p>
          <p>2. Select whichever Tailwind classes are required.</p>
          <p>3. Copy generated CSS, paste it, and use the classes.</p>
        </div>
        <div className="flex justify-end border-t border-slate-200 bg-white px-5 py-3">
          <button
            type="button"
            onClick={closeHowToUse}
            className="rounded-md border border-slate-300 bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:bg-slate-200"
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}

export default Header;
