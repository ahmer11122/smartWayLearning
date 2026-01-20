---
name: creative-frontend-design
description: Design System for Forex Learning Hub (Clean Educational/Study Mode).
license: Private
---

# 🎨 Forex Learning Hub: Calm Study Design System
> **Philosophy**: "Clean Focus".
> The interface must feel calm, approachable, and distraction-free. Avoid "fintech" darkness. Think Notion meets TypingClub.

## 🛠️ The Stack (Strict)
*   **Framework**: Next.js 14+ (App Router)
*   **Styling**: Tailwind CSS v3.4+
*   **Animation**: Framer Motion (Subtle Physics)
*   **Icons**: Lucide React (Stroke width: 1.5px)
*   **Fonts**: Plus Jakarta Sans (English) + Gulzar (Urdu)

---

## 🎨 Visual Design Language

### 1. Typography & Scale (Fluid)
*   **English**: `font-sans` (**Plus Jakarta Sans**)
    *   *Characteristics*: Geometric, high legibility.
    *   *Line Height*: `1.6` (Relaxed for reading).
*   **Urdu**: `font-urdu` (**Gulzar**)
    *   *Characteristics*: Calligraphic, requires vertical breathing room.
    *   *Line Height*: `2.2` (Crucial for readability).
    *   *Alignment*: Always `text-right` (RTL).
*   **Code**: `font-mono` (**JetBrains Mono**)

### 2. "Calm Study" Color Palette (Light Mode)
*   **Backgrounds** (Warm & Muted):
    *   `bg-APP`: `#FAFAF9` (Stone 50) - Main canvas.
    *   `bg-SURFACE`: `#FFFFFF` (White) - Cards/Modals.
    *   `bg-ELEVATED`: `#F5F5F4` (Stone 100) - Hovers/Tabs.
    *   `bg-MUTED`: `#E7E5E4` (Stone 200) - Dividers/Sections.
*   **Text** (High Contrast but Soft):
    *   `text-PRIMARY`: `#1C1917` (Stone 900) - Main content.
    *   `text-SECONDARY`: `#57534E` (Stone 600) - Metadata/Supporting text.
    *   `text-TERTIARY`: `#A8A29E` (Stone 400) - Subtle hints.
*   **Accents** (Functional):
    *   📘 **Primary**: `#0EA5E9` (Sky 500) - Actions, Links, Progress.
    *   ✅ **Success**: `#22C55E` (Green 500) - Mastery, Completions.
    *   🔮 **Urdu Mode**: `#8B5CF6` (Violet 500) - RTL context indicators.

### 3. Component Styling
*   **The "Clean Card" Recipe**:
    ```css
    .clean-card {
      @apply bg-white border border-stone-200 shadow-sm rounded-xl;
    }
    .clean-card:hover {
      @apply border-sky-500/30 shadow-md;
    }
    ```
*   **Interactions**:
    *   Focus states: `ring-2 ring-sky-500 ring-offset-2`.
    *   Buttons: `active:scale-[0.98]` (Subtle tactile feedback).

---

## 📐 Bilingual Layout Engine

### 1. Desktop (>1024px): "Split Study"
*   **Layout**: `grid-cols-2`
*   **Left Pane**: English Content (Sticky or Independent Scroll).
*   **Right Pane**: Urdu Content (Synced interactions).
*   **Divider**: `border-r border-stone-200` (Subtle separation).

### 2. Mobile (<1024px): "Tabbed Focus"
*   **Navigation**: Sticky Tab Bar at top `[ English | Urdu ]`.
*   **Design**: White/Glassmorphic tab bar with solid text.
*   **Transition**: `AnimatePresence` with `mode="wait"` sliding animation.

---

## ⚡ Interaction Physics (Framer Motion)
**Rule**: "Calm & Predictable". No jarring movements.

### 1. The "Tactile" Config
```javascript
export const SPRING_TACTILE = {
  type: "spring",
  stiffness: 300,
  damping: 30, // Higher damping for less "bounce", more "settle"
  mass: 1
};
```

---

## ♿ Accessibility (A11y)
*   **Contrast**: Text typically Stone 900 on Stone 50 (AAA rating).
*   **Focus**: Always visible focus rings.
*   **Reading width**: Max `720px` (or `prose-lg`) for long-form content to prevent eye strain.
