type OutputPanelProps = {
  cssCode: string;
};

function OutputPanel({ cssCode }: OutputPanelProps) {
  const lines = cssCode.split("\n");

  return (
    <section className="flex grow xl:max-w-116 text-wrap h-full overflow-hidden min-h-96 flex-col rounded-2xl border border-slate-300 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
      <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400"></span>
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300"></span>
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
        <p className="ml-3 text-xs uppercase tracking-widest text-slate-500">
          generated.css
        </p>
      </div>

      <div className="flex-1 overflow-auto bg-slate-50 p-4">
        <pre className="text-sm leading-6 text-slate-800">
          {lines.map((line, index) => (
            <div
              key={`${line}-${index}`}
              className="grid grid-cols-[42px_1fr] gap-4"
            >
              <span className="select-none text-right text-slate-400">
                {index + 1}
              </span>
              <code>{line || " "}</code>
            </div>
          ))}
        </pre>
      </div>
    </section>
  );
}

export default OutputPanel;
