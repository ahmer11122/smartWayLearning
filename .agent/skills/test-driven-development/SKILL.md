---
name: test-driven-development
description: Pragmatic TDD for Content Applications. Focus on Logic Integrity over UI Snapshots.
license: Private
---

# 🧪 Pragmatic TDD (Content-First)

> **Philosophy**: "Test what breaks."
> For a content app, broken search is fatal. A pixel-off padding is annoying. Prioritize accordingly.

---

## 🟢 The Strategy: Logic First, UI Second

### 1. Mandatory TDD (Strict Red-Green-Refactor)
Must be used for **Core Logic**:
1.  **Search Engine**: Fuse.js integration, filtering, debouncing.
2.  **Progress Sync**: LocalStorage reading/writing, JSON export/import.
3.  **MDX Parsing**: Zod validation of frontmatter.

### 2. Visual Verification (UI Components)
For pure UI (e.g., `QuestionCard` layout), **manual verification** is acceptable IF:
*   You use Storybook (or a test page).
*   You verify "Deep Ocean" colors and "Gulzar" font rendering manually.

---

## 🛠️ Typical Test Cases (The "Big 3")

### 1. The Search Logic
*   **Case**: "Should return partial matches ('Forex' -> 'What is Forex?')"
*   **Case**: "Should ignore case ('forex' == 'Forex')"
*   **Case**: "Should handle empty results gracefully"

### 2. The Progress State
*   **Case**: "Should toggle ID '123' to true"
*   **Case**: "Should persist to localStorage immediately"
*   **Case**: "Should merge imported JSON with existing progress"

### 3. The Bilingual Layout
*   *(Integration Test via Playwright)*
*   **Case**: "Urdu text should have `line-height: 1.8`"
*   **Case**: "English text should have `line-height: 1.5`"

---

## 🚫 TDD Anti-Patterns for this Project
1.  **Snapshot Testing Everything**: Do not snapshot test every static MDX page. It's brittle.
2.  **Testing Third-Party Libs**: Don't test if `framer-motion` works. Test if *your* trigger fires it.
