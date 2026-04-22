import { useMemo, useState } from "react";
import Header from "./components/Header";
import LeftSideLayout from "./components/LeftSideLayout";
import OutputPanel from "./components/OutputPanel";
import {
  tailwindMap,
  type TailwindMap,
  type TailwindUtility,
} from "./data/data";
import { useCssGenerator } from "./hooks/useCssGenerator";

function App() {
  const [selectedClasses, setSelectedClasses] = useState<Set<string>>(
    new Set(),
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [copied, setCopied] = useState(false);
  const [minified, setMinified] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(Object.keys(tailwindMap)),
  );

  const classLookup = useMemo(() => {
    const lookup = new Map<string, TailwindUtility>();

    Object.values(tailwindMap)
      .flat()
      .forEach((item) => {
        lookup.set(item.class, item);
      });

    return lookup;
  }, []);

  const filteredMap = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return tailwindMap;
    }

    const nextMap: TailwindMap = {};

    Object.entries(tailwindMap).forEach(([group, items]) => {
      const filteredItems = items.filter(
        (item) =>
          item.class.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query),
      );

      if (filteredItems.length > 0) {
        nextMap[group] = filteredItems;
      }
    });

    return nextMap;
  }, [searchTerm]);

  const cssCode = useCssGenerator(selectedClasses, classLookup, minified);

  const selectedCount = selectedClasses.size;

  const toggleClass = (className: string) => {
    setSelectedClasses((prev) => {
      const next = new Set(prev);

      if (next.has(className)) {
        next.delete(className);
      } else {
        next.add(className);
      }

      return next;
    });
  };

  const toggleAccordion = (group: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);

      if (next.has(group)) {
        next.delete(group);
      } else {
        next.add(group);
      }

      return next;
    });
  };

  const selectAllInGroup = (group: string) => {
    const groupItems = filteredMap[group] ?? [];

    setSelectedClasses((prev) => {
      const next = new Set(prev);
      groupItems.forEach((item) => next.add(item.class));
      return next;
    });
  };

  const clearGroup = (group: string) => {
    const groupItems = filteredMap[group] ?? [];

    setSelectedClasses((prev) => {
      const next = new Set(prev);
      groupItems.forEach((item) => next.delete(item.class));
      return next;
    });
  };

  const clearAll = () => {
    setSelectedClasses(new Set());
  };

  const copyCss = async () => {
    try {
      await navigator.clipboard.writeText(cssCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1300);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(56,189,248,0.18),transparent_48%),radial-gradient(circle_at_88%_75%,rgba(16,185,129,0.13),transparent_46%),linear-gradient(120deg,rgba(2,6,23,0.96),rgba(15,23,42,0.92))]" />

      <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col px-3 pb-4 pt-3 md:px-5 md:pb-6 md:pt-5">
        <Header
          selectedCount={selectedCount}
          minified={minified}
          copied={copied}
          onCopy={copyCss}
          onClearAll={clearAll}
          onToggleMinified={() => setMinified((prev) => !prev)}
        />

        <section className="mt-4 flex flex-1 gap-4">
          <LeftSideLayout
            filteredMap={filteredMap}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedClasses={selectedClasses}
            expandedGroups={expandedGroups}
            onToggleAccordion={toggleAccordion}
            onToggleClass={toggleClass}
            onSelectAllInGroup={selectAllInGroup}
            onClearGroup={clearGroup}
          />

          <OutputPanel cssCode={cssCode} />
        </section>

        {Object.keys(filteredMap).length === 0 ? (
          <p className="mt-4 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm text-amber-100">
            No classes found for "{searchTerm}". Try a different keyword.
          </p>
        ) : null}
      </div>
    </main>
  );
}

export default App;
