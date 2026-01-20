---
name: creative-frontend-design
description: Design System for Forex Learning Hub (Premium Bilingual Education).
license: Private
---

# 🎨 Forex Learning Hub: Premium Bilingual Design System
> **Philosophy**: "Educational Premium".
> The interface must feel tactile, expensive, and culturally harmonious (Urdu + English). It should feel like a high-end fintech app, not a classroom.

## 🛠️ The Stack (Strict)
*   **Framework**: Next.js 14+ (App Router)
*   **Styling**: Tailwind CSS v3.4+
*   **Animation**: Framer Motion (Physics-based interactions)
*   **Icons**: Lucide React (Stroke width: 1.5px for elegance)
*   **Fonts**: Plus Jakarta Sans (English) + Gulzar (Urdu)

---

## 🎨 Visual Design Language

### 1. Typography & Scale (Fluid)
Use `clamp()` for all font sizes to ensure perfect scaling across devices.
*   **English**: `font-sans` (**Plus Jakarta Sans**)
    *   *Characteristics*: Geometric, high x-height, approachable.
    *   *Line Height*: `1.5` (Standard).
*   **Urdu**: `font-urdu` (**Gulzar**)
    *   *Characteristics*: Calligraphic, requires more vertical space.
    *   *Line Height*: `1.8` (Crucial for readability).
    *   *Alignment*: Always `text-right` or `text-justify` (RTL).
*   **Code**: `font-mono` (**JetBrains Mono**)

### 2. "Deep Ocean" Color Palette (Dark Mode First)
*   **Backgrounds**:
    *   `bg-APP`: `#020617` (Slate 950) - Safe area background.
    *   `bg-SURFACE`: `#0F172A` (Slate 900) - Cards/Modals.
    *   `bg-ELEVATED`: `#1E293B` (Slate 800) - Hovers/Dropdowns.
*   **Text**:
    *   `text-PRIMARY`: `#F8FAFC` (Slate 50) - High emphasis.
    *   `text-SECONDARY`: `#94A3B8` (Slate 400) - Metadata.
    *   `text-TERTIARY`: `#475569` (Slate 600) - Borders/Dividers.
*   **Accents (Glowing)**:
    *   🌊 **Cyan**: `#06b6d4` (Primary Brand) - Used for borders, active states.
    *   🔮 **Indigo**: `#6366f1` (Secondary) - Used for gradients.
    *   ✅ **Emerald**: `#10b981` (Success) - Progress completion.

### 3. Glassmorphism & Depth
*   **The "Premium Card" Recipe**:
    ```css
    .premium-card {
      @apply bg-slate-900/60 backdrop-blur-xl border border-white/5 shadow-2xl;
    }
    .premium-card:hover {
      @apply border-cyan-500/30 bg-slate-900/80;
      box-shadow: 0 0 30px -10px rgba(6, 182, 212, 0.15); /* Cyan Glow */
    }
    ```

---

## 📐 Bilingual Layout Engine

### 1. Desktop (>1024px): "Split View"
*   **Layout**: `grid-cols-2`
*   **Left Pane**: English Content (Sticky or Independent Scroll).
*   **Right Pane**: Urdu Content (Synced interactions).
*   **divider**: `w-px bg-white/5` down the middle.

### 2. Mobile (<768px): "Stack & Tab"
*   **Navigation**: Sticky Tab Bar at top `[ English | Urdu ]`.
*   **Transition**: `AnimatePresence` with `mode="wait"` for language switching.
*   **Gesture**: Swipe left/right to toggle languages (Optional "delight").

---

## ⚡ Interaction Physics (Framer Motion)
**Rule**: No linear animations. Everything has mass and friction.

### 1. The "Spring" Config
```javascript
export const SPRING_TACTILE = {
  type: "spring",
  stiffness: 300,
  damping: 25,
  mass: 1
};
```

### 2. Micro-Interactions
*   **Buttons**: Scale `0.98` on tap.
*   **Accordions**: Height animation must use `layout` prop for GPU performance.
*   **Stagger**: Lists must reveal items sequentially (`staggerChildren: 0.05`).


---

## 🎮 Gamification & Delight
"Make it pop, but keep it classy."

### 1. The "Success" Moment (Confetti)
*   **Library**: `canvas-confetti` (Lightweight, zero deps).
*   **Config**: Use the "Side Cannons" pattern for lesson completion.
    ```javascript
    const triggerSuccess = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#10b981', '#6366f1'] // Brand Colors
      });
    };
    ```

### 2. Streak & Progress Animations
*   **CountUp**: When numbers change (XP, Streaks), always animate them.
    *   *Rule*: `0` -> `150` should take 1s max.
*   **ProgressBar**: Use `layout` prop in Framer Motion.
    *   *Curve*: `type: "spring", bounce: 0` (Smooth, no overshoot).

---

## ♿ Accessibility (A11y) "Gold Standard"
*   **Contrast**: All text must meet WCAG AA (4.5:1).
*   **Focus Rings**: Custom focus styles (Cyan glow), never default browser outline.
*   **Screen Readers**:
    *   English: `lang="en" dir="ltr"`
    *   Urdu: `lang="ur" dir="rtl"`
*   **Reduced Motion**:
    ```javascript
    const shouldReduceMotion = useReducedMotion();
    const transition = shouldReduceMotion ? { duration: 0 } : SPRING_TACTILE;
    ```
