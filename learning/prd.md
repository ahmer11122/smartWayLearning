# Product Requirements Document (PRD)
## Forex Learning Hub (Premium Bilingual Education)
> **Version**: 2.0 (The "10/10" Standard)
> **Status**: Approved for Implementation

---

## 1. Product Vision & Principles

### 1.1 Vision
To build the **"Duolingo for Forex"** – a premium, bilingual (English/Urdu) learning platform that transforms complex financial trading concepts into bite-sized, interactive, and visually stunning experiences. It replaces boring PDFs with a tactile, "app-like" web interface.

### 1.2 Core Design Principles
1.  **"Premium Fintech" Aesthetic**: Dark mode first, deep ocean blues, glowing accents (Glassmorphism), and high-end typography.
2.  **Bilingual First**: Urdu is not an afterthought. The UI seamlessly adapts between LTR (English) and RTL (Urdu) with a "Split -> Stack" responsive strategy.
3.  **App-Like Feel**: Smooth page transitions, spring-based micro-interactions, and instant responsiveness (no "page reloads").
4.  **Privacy & Offline-First**: No login required (Initially). Progress is saved locally. "It just works."

---

## 2. Technical Stack (Strict)

### 2.1 Core Framework
-   **Next.js 14+ (App Router)**: Mandatory for "Island Architecture" and best-in-class performance.
-   **React 18**: Server Components for content, Client Components for interactivity.
-   **TypeScript (Strict)**: **NO `any` types**. All data flows must be typed (Zod inferred).

### 2.2 Styling & Aesthetics
-   **Tailwind CSS v3.4+**: Utility-first styling.
-   **Framer Motion**: **MANDATORY** for all interactions (Page mounting, accordion expands, staggered list reveals).
-   **Design Tokens**: CSS Variables for colors, spacing, and typography (defined in `globals.css`).
-   **Lucide React**: Iconography (Consistent stroke width `1.5` or `2`).

### 2.3 Learning Engine
-   **MDX (Markdown + JSX)**: The content source of truth. Allows embedding React components (Charts, Quizzes) inside lessons.
-   **Fuse.js**: Client-side fuzzy search integration.
-   **Zod**: Runtime schema validation for all content. **Build fails if content is invalid.**

---

## 3. Detailed Feature Requirements

### 3.1 The "Hero" Learning Interface
The core experience is the **Lesson View**.

#### 3.1.1 The "Card" Component
-   **Resting State**: Glassmorphism (`bg-slate-900/40`), subtle border (`border-white/5`), clear typography.
-   **Hover State**: `scale(1.01)`, border glows `cyan-500/50`, shadow increases.
-   **Active State**:
    -   Smooth spring expansion (`stiffness: 300, damping: 30`).
    -   Answer content reveals with a **staggered fade-in** (text then images).
    -   Visual indicator (Chevron) rotates 180°.

#### 3.1.2 Bilingual Layout Engine
-   **Desktop (>1024px)**: "Split View".
    -   Left Pane: English Content (Fixed or Scrolling).
    -   Right Pane: Urdu Content (Mirrored interactions).
-   **Mobile (<768px)**: "Stacked View" with Tab Switcher.
    -   Sticky Tab Bar: `[ English | Urdu | Split ]`.
    -   Smooth horizontal slide transition between languages.

### 3.2 Progress & Gamification (The "Hook")
We need to make learning addictive.

#### 3.2.1 Progress Tracking
-   **Granular Tracking**: Track progress at the *Question* level, not just *Topic*.
-   **Visual Feedback**:
    -   **ProgressBar**: Top of screen, fills as user scrolls/completes items.
    -   **Confetti**: Trigger `canvas-confetti` when a module is 100% complete.
    -   **"Streak" System**: Track consecutive days visited (stored in LocalStorage).

#### 3.2.2 Persistence (Resilient Storage)
-   **Primary**: `localStorage` with a robust wrapper.
-   **Key**: `forex_hub_progress_v1`.
-   **Schema**:
    ```typescript
    interface UserProgress {
      completedQuestions: string[]; // IDs
      lastVisited: number; // Timestamp
      streakDays: number;
      bookmarks: string[];
    }
    ```
-   **Migration**: Include version checking to prevent data corruption on updates.

### 3.3 Search Experience ("Spotlight" Style)
-   **Activation**: `Cmd+K` (Desktop) or Floating Action Button (Mobile).
-   **UI**: Modal overlay with backdrop blur.
-   **Behavior**:
    -   Auto-focus input.
    -   Live filtering (Debounced 150ms).
    -   **Fuzzy Matching**: Matches English text AND Urdu text (transliteration support if possible).
    -   **Keyboard Nav**: Arrow keys to select, Enter to go.

### 3.4 Image & Media System
-   **Lightbox**: Clicking an image opens it in a full-screen, zoomable lightbox (using `framer-motion` layoutId for seamless transition).
-   **Lazy Loading**: Native `loading="lazy"` + Blur-up placeholders.
-   **Format**: WebP only.

---

## 4. UI/UX "Gold Standards"

### 4.1 Typography (Fluid & Readable)
-   **English**: `Plus Jakarta Sans`. High x-height, geometric but friendly.
-   **Urdu**: `Gulzar`. Optimized for screen reading, legible at small sizes.
-   **Scale**: Use `clamp()` for all font sizes to ensure perfect scaling from Mobile to 4K.

### 4.2 Handling Long Content (The "Read More" Pattern)
-   Steps with >300 words should utilize a "Read More" gradual reveal to prevent wall-of-text fatigue.
-   Urdu text needs **1.8x line-height** compared to English (1.5x) for breathability.

### 4.3 Accessibility (A11y)
-   **Keyboard**: Full tab functionality for all distinct elements.
-   **Screen Readers**: `aria-expanded` attributes on all accordions.
-   **Contrast**: Text-to-background ratio > 4.5:1 (WCAG AA).
-   **Reduced Motion**: Respect `prefers-reduced-motion` media query (disable springs).

---

## 5. Content Engineering (The "Robust" Part)

### 5.1 Directory Structure
```
content/
  ├── 01-basics/
  │     ├── 01-what-is-forex.mdx
  │     ├── 02-market-participants.mdx
  │     └── meta.json (Sort order, Module Title)
  ├── 02-technical-analysis/
  └── assets/ (Optimized Images)
```

### 5.2 Zod Schema (Strict)
```typescript
const LessonSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  duration_minutes: z.number(),
  translation: z.object({
    ur_title: z.string(),
    ur_description: z.string()
  })
});
```

---

## 6. Error Handling & Edge Cases

1.  **Missing Content**: If an MDX file is corrupted, show a "Maintenance Mode" card for that specific lesson instead of crashing the whole app.
2.  **Storage Quota Exceeded**: Handle `localStorage` Full error gracefully (notify user only if critical).
3.  **Image Failures**: Show a stylish "Image Broken" placeholder, not the browser default icon.
4.  **404 State**: A custom, gamified 404 page (e.g., "Lost in the Market? Back to Safety").

---

## 7. Performance Budget

-   **LCP (Largest Contentful Paint)**: < 1.2s
-   **CLS (Cumulative Layout Shift)**: 0.00 (Strictly enforced by image dimensions).
-   **FID (First Input Delay)**: < 100ms.
-   **Bundle Size**: Keep distinct route bundles < 80kb gzipped.

---

## 8. Definition of Done (DoD)

1.  **Visuals**: Matches the "Deep Ocean" premium aesthetic perfectly.
2.  **Code**: Zero ESLint warnings, Zero TypeScript `any` types.
3.  **Tests**: Core utilities (Search, Progress) have Unit Tests.
4.  **Mobile**: Validated on iOS Safari and Android Chrome responsive views.
5.  **A11y**: Lighthouse Accessibility Score of 100.