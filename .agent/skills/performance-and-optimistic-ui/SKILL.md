---
name: performance-and-optimistic-ui
description: Performance standards for Forex Learning Hub (Next.js 14+).
license: Private
---

# ⚡ Performance & Optimistic UI

> **Golden Rule**: "The UI should feel local, even when it's not."
> Focus on LCP (Largest Contentful Paint) and CLS (Cumulative Layout Shift) for content-heavy pages.

---

## 🏗️ Island Architecture (Next.js 14+)

### 1. Default to Server Components
*   **Rule**: 90% of the app should be Server Components (`.tsx` by default).
*   **Why**: Zero bundle size for huge libraries (like Markdown parsers).
*   **Exceptions (Use Client)**:
    *   Interactive `QuestionCard` (Expanding state).
    *   `SearchBlock` (Input + Results).
    *   `ThemeToggle`.

### 2. Client Boundary Discipline
*   **Bad**: Wrapping the whole `<body>` in a Context Provider.
*   **Good**: Pushing state down to leaf nodes.
    ```tsx
    // ✅ Good: Only the card is client-side
    <ServerPage>
      <ClientQuestionCard />
    </ServerPage>
    ```

---

## 📸 Content Performance

### 1. Zero CLS (Bilingual Fonts)
*   **Challenge**: Urdu fonts (Gulzar) are tall; Loading them late causes massive layout shifts.
*   **Fix**:
    *   Use `next/font` specific loading strategies (`display: swap` allowed ONLY if metrics match).
    *   Preload key fonts.
    *   Define explicit `min-height` for bilingual text blocks to reserve space.

### 2. WebP Mandate
*   **Rule**: ALL images must be WebP.
*   **Lazy Loading**: Default for all images below the fold.
*   **LCP Priority**: The "Hero" image (if any) or first "Question" must have `priority={true}` to preload.

---

## ⚡ Interaction Performance

### 1. Optimistic Updates (LocalStorage)
*   **Progress Tracking**: When user clicks "Mark Complete":
    1.  **Immedately** update UI checkbox (State).
    2.  **Immediately** write to `localStorage` (Sync).
    3.  **No `useEffect` delay**. The checkbox click handler should do both.

### 2. Search Debouncing
*   **Rule**: Typing in search must NOT freeze the UI.
*   **Debounce**: 300ms delay before triggering Fuse.js search.
*   **Web Worker**: If search index > 1000 items, move Fuse.js to a Web Worker (Phase 2).

---

## 📊 Core Web Vitals Targets
*   **LCP (Loading)**: < 1.2s (Static HTML, easy win).
*   **CLS (Stability)**: 0.00 (Critical for reading apps).
*   **FID/INP (Interactive)**: < 100ms.
