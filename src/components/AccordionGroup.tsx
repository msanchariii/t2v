import ClassItem from './ClassItem'
import type { TailwindUtility } from '../data/data'

type AccordionGroupProps = {
  title: string
  items: TailwindUtility[]
  selectedClasses: Set<string>
  expanded: boolean
  onToggleAccordion: () => void
  onToggleClass: (className: string) => void
  onSelectAll: () => void
  onClearGroup: () => void
}

function AccordionGroup({
  title,
  items,
  selectedClasses,
  expanded,
  onToggleAccordion,
  onToggleClass,
  onSelectAll,
  onClearGroup,
}: AccordionGroupProps) {
  const selectedInGroup = items.filter((item) => selectedClasses.has(item.class)).length

  return (
    <section className="rounded-xl border border-slate-300 bg-slate-50/70">
      <button
        type="button"
        onClick={onToggleAccordion}
        className="flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left"
      >
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
          {title}
        </h3>

        {expanded ? (
          <div className="flex items-center gap-3">
            <p className="text-xs text-slate-600">
              {selectedInGroup} selected / {items.length} classes
            </p>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-cyan-700 transition-transform rotate-180">
              v
            </span>
          </div>
        ) : null}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          expanded ? 'max-h-300 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className={`min-h-0 px-4 ${
            expanded ? 'border-t border-slate-200 pb-4 pt-3' : 'border-t-0 pb-0 pt-0'
          }`}
        >
          <div className="mb-3 flex gap-2">
            <button
              type="button"
              onClick={onSelectAll}
              className="rounded-md border border-cyan-300 bg-cyan-50 px-2 py-1 text-xs font-medium text-cyan-900 transition hover:bg-cyan-100"
            >
              Select all
            </button>
            <button
              type="button"
              onClick={onClearGroup}
              className="rounded-md border border-amber-300 bg-amber-50 px-2 py-1 text-xs font-medium text-amber-900 transition hover:bg-amber-100"
            >
              Clear group
            </button>
          </div>
          <div className="space-y-2">
            {items.map((item) => (
              <ClassItem
                key={item.class}
                item={item}
                checked={selectedClasses.has(item.class)}
                onToggle={onToggleClass}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccordionGroup
