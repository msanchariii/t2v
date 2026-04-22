import { useMemo } from "react";
import type { TailwindUtility } from "../data/data";

const escapeClassName = (className: string) =>
  className.replace(/([^a-zA-Z0-9_-])/g, "\\$1");

const toSelector = (utility: TailwindUtility) => {
  if (utility.selector) {
    return utility.selector;
  }

  return `.${escapeClassName(utility.class)}`;
};

const toCssBlock = (utility: TailwindUtility, minified: boolean) => {
  const selector = toSelector(utility);
  const declarations = utility.css;

  if (minified) {
    const body = declarations
      .map(({ key, value }) => `${key}:${value};`)
      .join("");
    return `${selector}{${body}}`;
  }

  const lines = declarations
    .map(({ key, value }) => `  ${key}: ${value};`)
    .join("\n");

  return `${selector} {\n${lines}\n}`;
};

export const useCssGenerator = (
  selectedClasses: Set<string>,
  classLookup: Map<string, TailwindUtility>,
  minified: boolean,
) => {
  return useMemo(() => {
    const selectedUtilities = Array.from(selectedClasses)
      .map((className) => classLookup.get(className))
      .filter((utility): utility is TailwindUtility => Boolean(utility));

    if (selectedUtilities.length === 0) {
      return minified ? "/* Generated CSS */" : "/* Generated CSS */\n";
    }

    const css = selectedUtilities
      .map((utility) => toCssBlock(utility, minified))
      .join(minified ? "" : "\n\n");

    return minified
      ? `/* Generated CSS */${css}`
      : `/* Generated CSS */\n\n${css}`;
  }, [classLookup, minified, selectedClasses]);
};
