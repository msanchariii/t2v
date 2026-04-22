import AccordionGroup from "./AccordionGroup";
import type { TailwindMap } from "../data/data";

type LeftSideLayoutProps = {
  filteredMap: TailwindMap;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedClasses: Set<string>;
  expandedGroups: Set<string>;
  onToggleAccordion: (group: string) => void;
  onToggleClass: (className: string) => void;
  onSelectAllInGroup: (group: string) => void;
  onClearGroup: (group: string) => void;
};

function LeftSideLayout({
  filteredMap,
  searchTerm,
  onSearchChange,
  selectedClasses,
  expandedGroups,
  onToggleAccordion,
  onToggleClass,
  onSelectAllInGroup,
  onClearGroup,
}: LeftSideLayoutProps) {
  return (
    <aside className="h-full overflow-auto rounded-2xl border border-slate-300 bg-white/95 p-4 shadow-[0_12px_34px_rgba(15,23,42,0.12)] md:p-5">
      <div className="mb-4">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Utility Explorer
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Browse class groups and compose your CSS output.
        </p>
      </div>

      <label className="mb-4 block">
        <span className="mb-1.5 block text-xs uppercase tracking-wider text-slate-600">
          Search classes
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Try: font, bg-, rounded..."
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
        />
      </label>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(filteredMap).map(([group, items]) => (
          <AccordionGroup
            key={group}
            title={group}
            items={items}
            selectedClasses={selectedClasses}
            expanded={expandedGroups.has(group)}
            onToggleAccordion={() => onToggleAccordion(group)}
            onToggleClass={onToggleClass}
            onSelectAll={() => onSelectAllInGroup(group)}
            onClearGroup={() => onClearGroup(group)}
          />
        ))}
      </div>
    </aside>
  );
}

export default LeftSideLayout;
