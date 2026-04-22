# 🎨 Tailwind to Vanilla CSS (T2V) Generator

**[Click Here to Visit T2V](https://msanchariii.github.io/t2v/)**

A lightweight, frontend-only tool that lets you pick Tailwind utility classes and instantly generate the equivalent CSS.

Designed with an IDE-like interface, this app is perfect for developers who want to:

- Extract only the CSS they need
- Understand how Tailwind utilities map to raw CSS
- Quickly prototype styles without setting up Tailwind

---

## 🚀 Features

- 🧩 Accordion-based class groups (Font, Layout, Spacing, etc.)
- ✅ Checkbox selection for Tailwind utilities
- ⚡ Live CSS generation
- 🖥️ IDE-style output panel (dark theme, monospace)
- 📋 One-click copy to clipboard
- 🧠 Data-driven architecture using `data.ts`

---

## 📁 Project Structure

```
/src
  /components
    Sidebar.tsx
    Accordion.tsx
    ClassItem.tsx
    OutputPanel.tsx
    Header.tsx
  /data
    data.ts
  App.tsx
```

---

## 🧠 How It Works

1. Tailwind utility classes are defined in `data.ts`
2. UI dynamically renders groups and checkboxes
3. Selected classes are stored in state (using a Set)
4. CSS is generated in real-time
5. Output is displayed in a code editor-style panel

---

## 🛠️ Tech Stack

- React (or Angular)
- Tailwind CSS (for styling the app itself)
- TypeScript

---

## 📦 Installation

```bash
# clone the repo
git clone https://github.com/your-username/tailwind-css-generator.git

# go into the project
cd tailwind-css-generator

# install dependencies
npm install

# run the app
npm run dev
```

---

## ✨ Roadmap

Planned improvements:

- 🔍 Search functionality
- 📦 Select all per category
- 🧹 Clear all selections
- 📉 Minified CSS toggle
- 🎯 Syntax highlighting (Prism / Sh
