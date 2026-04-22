export type CssDeclaration = {
  key: string;
  value: string | number;
};

export type TailwindUtility = {
  class: string;
  css: CssDeclaration[];
  description?: string;
  selector?: string;
};

export type TailwindMap = Record<string, TailwindUtility[]>;

export const tailwindMap: TailwindMap = {
  Typography: [
    {
      class: "font-thin",
      css: [{ key: "font-weight", value: 100 }],
      description: "Set text weight to thin.",
    },
    {
      class: "font-normal",
      css: [{ key: "font-weight", value: 400 }],
      description: "Set text weight to normal.",
    },
    {
      class: "font-medium",
      css: [{ key: "font-weight", value: 500 }],
      description: "Set text weight to medium.",
    },
    {
      class: "font-bold",
      css: [{ key: "font-weight", value: 700 }],
      description: "Set text weight to bold.",
    },
    {
      class: "text-xs",
      css: [{ key: "font-size", value: "0.75rem" }],
      description: "Set font size to extra small.",
    },
    {
      class: "text-base",
      css: [{ key: "font-size", value: "1rem" }],
      description: "Set font size to base.",
    },
    {
      class: "text-2xl",
      css: [{ key: "font-size", value: "1.5rem" }],
      description: "Set font size to 2xl.",
    },
    {
      class: "text-slate-800",
      css: [{ key: "color", value: "rgb(30 41 59)" }],
      description: "Set text color to slate 800.",
    },
    {
      class: "uppercase",
      css: [{ key: "text-transform", value: "uppercase" }],
      description: "Transform text to uppercase.",
    },
    {
      class: "tracking-wide",
      css: [{ key: "letter-spacing", value: "0.025em" }],
      description: "Add wide letter spacing.",
    },
  ],
  Layout: [
    {
      class: "block",
      css: [{ key: "display", value: "block" }],
      description: "Set display to block.",
    },
    {
      class: "inline-block",
      css: [{ key: "display", value: "inline-block" }],
      description: "Set display to inline-block.",
    },
    {
      class: "flex",
      css: [{ key: "display", value: "flex" }],
      description: "Set display to flex.",
    },
    {
      class: "grid",
      css: [{ key: "display", value: "grid" }],
      description: "Set display to grid.",
    },
    {
      class: "hidden",
      css: [{ key: "display", value: "none" }],
      description: "Hide element.",
    },
    {
      class: "w-full",
      css: [{ key: "width", value: "100%" }],
      description: "Set width to 100%.",
    },
    {
      class: "h-screen",
      css: [{ key: "height", value: "100vh" }],
      description: "Set height to full viewport.",
    },
    {
      class: "overflow-hidden",
      css: [{ key: "overflow", value: "hidden" }],
      description: "Hide overflow.",
    },
  ],
  Flexbox: [
    {
      class: "items-center",
      css: [{ key: "align-items", value: "center" }],
      description: "Center items on cross axis.",
    },
    {
      class: "items-start",
      css: [{ key: "align-items", value: "flex-start" }],
      description: "Align items to start on cross axis.",
    },
    {
      class: "justify-center",
      css: [{ key: "justify-content", value: "center" }],
      description: "Center items on main axis.",
    },
    {
      class: "justify-between",
      css: [{ key: "justify-content", value: "space-between" }],
      description: "Distribute items with space between.",
    },
    {
      class: "gap-2",
      css: [{ key: "gap", value: "0.5rem" }],
      description: "Add 0.5rem gap.",
    },
    {
      class: "gap-4",
      css: [{ key: "gap", value: "1rem" }],
      description: "Add 1rem gap.",
    },
    {
      class: "flex-col",
      css: [{ key: "flex-direction", value: "column" }],
      description: "Stack flex items vertically.",
    },
    {
      class: "flex-wrap",
      css: [{ key: "flex-wrap", value: "wrap" }],
      description: "Allow flex items to wrap.",
    },
  ],
  Spacing: [
    {
      class: "p-2",
      css: [{ key: "padding", value: "0.5rem" }],
      description: "Add 0.5rem padding.",
    },
    {
      class: "p-4",
      css: [{ key: "padding", value: "1rem" }],
      description: "Add 1rem padding.",
    },
    {
      class: "px-6",
      css: [
        { key: "padding-left", value: "1.5rem" },
        { key: "padding-right", value: "1.5rem" },
      ],
      description: "Add horizontal padding of 1.5rem.",
    },
    {
      class: "py-3",
      css: [
        { key: "padding-top", value: "0.75rem" },
        { key: "padding-bottom", value: "0.75rem" },
      ],
      description: "Add vertical padding of 0.75rem.",
    },
    {
      class: "m-2",
      css: [{ key: "margin", value: "0.5rem" }],
      description: "Add 0.5rem margin.",
    },
    {
      class: "mt-4",
      css: [{ key: "margin-top", value: "1rem" }],
      description: "Add 1rem top margin.",
    },
    {
      class: "mx-auto",
      css: [
        { key: "margin-left", value: "auto" },
        { key: "margin-right", value: "auto" },
      ],
      description: "Center element horizontally with auto margins.",
    },
    {
      class: "space-y-2",
      css: [{ key: "--tw-space-y-reverse", value: 0 }],
      description: "Space between children on y-axis (simplified).",
    },
  ],
  Background: [
    {
      class: "bg-white",
      css: [{ key: "background-color", value: "#ffffff" }],
      description: "Set white background.",
    },
    {
      class: "bg-slate-100",
      css: [{ key: "background-color", value: "rgb(241 245 249)" }],
      description: "Set slate 100 background.",
    },
    {
      class: "bg-slate-900",
      css: [{ key: "background-color", value: "rgb(15 23 42)" }],
      description: "Set slate 900 background.",
    },
    {
      class: "bg-emerald-500",
      css: [{ key: "background-color", value: "rgb(16 185 129)" }],
      description: "Set emerald 500 background.",
    },
    {
      class: "bg-transparent",
      css: [{ key: "background-color", value: "transparent" }],
      description: "Set transparent background.",
    },
  ],
  Border: [
    {
      class: "border",
      css: [{ key: "border-width", value: "1px" }],
      description: "Set border width to 1px.",
    },
    {
      class: "border-2",
      css: [{ key: "border-width", value: "2px" }],
      description: "Set border width to 2px.",
    },
    {
      class: "border-slate-300",
      css: [{ key: "border-color", value: "rgb(203 213 225)" }],
      description: "Set border color to slate 300.",
    },
    {
      class: "rounded-md",
      css: [{ key: "border-radius", value: "0.375rem" }],
      description: "Set medium border radius.",
    },
    {
      class: "rounded-xl",
      css: [{ key: "border-radius", value: "0.75rem" }],
      description: "Set extra large border radius.",
    },
    {
      class: "rounded-full",
      css: [{ key: "border-radius", value: "9999px" }],
      description: "Make element fully rounded.",
    },
  ],
  Effects: [
    {
      class: "shadow-sm",
      css: [
        {
          key: "box-shadow",
          value: "0 1px 2px 0 rgb(15 23 42 / 0.05)",
        },
      ],
      description: "Apply small shadow.",
    },
    {
      class: "shadow-md",
      css: [
        {
          key: "box-shadow",
          value:
            "0 4px 6px -1px rgb(15 23 42 / 0.1), 0 2px 4px -2px rgb(15 23 42 / 0.1)",
        },
      ],
      description: "Apply medium shadow.",
    },
    {
      class: "opacity-75",
      css: [{ key: "opacity", value: 0.75 }],
      description: "Set opacity to 75%.",
    },
    {
      class: "cursor-pointer",
      css: [{ key: "cursor", value: "pointer" }],
      description: "Show pointer cursor.",
    },
  ],
  Aspect: [
    {
      class: "aspect-square",
      css: [{ key: "aspect-ratio", value: "1 / 1" }],
    },
    {
      class: "aspect-video",
      css: [{ key: "aspect-ratio", value: "16 / 9" }],
    },
  ],
};
