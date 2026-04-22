import type { TailwindUtility } from "../data/data";

type ClassItemProps = {
  item: TailwindUtility;
  checked: boolean;
  onToggle: (className: string) => void;
};

function ClassItem({ item, checked, onToggle }: ClassItemProps) {
  return (
    <label className="group flex cursor-pointer items-start gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 transition hover:border-cyan-300 hover:bg-cyan-50/50">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(item.class)}
        className="mt-1 h-4 w-4 rounded border-slate-400 bg-white text-cyan-700 focus:ring-cyan-200"
      />
      <div className="flex-1 overflow-hidden">
        <p className="truncate text-sm text-cyan-900 font-mono">{item.class}</p>
      </div>
    </label>
  );
}

export default ClassItem;
