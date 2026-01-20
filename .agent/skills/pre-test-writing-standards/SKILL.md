---
name: pre-test-writing-standards
description: Pre-Implementation Checklist for Content Apps. Focus on bilingual rendering and search logic.
license: Private
---

# ✈️ Pre-Test Writing Standards (Content App)

> **Philosophy**: "If the user can't read it or find it, the app is broken."
> Read this before testing Search, Progress, or Layouts.

---

## 🧠 The 5-Question Checklist

1. [ ] **Is this Bilingual?** (Does it work for Urdu right-to-left AND English left-to-right?)
2. [ ] **Is it Searchable?** (Will Fuse.js index this content?)
3. [ ] **Is it Persistable?** (Will this vanish if I clear LocalStorage?)
4. [ ] **Is it Responsive?** (Does "Stack Mode" work on mobile?)
5. [ ] **Is it Fast?** (Does LCP stay under 1.2s?)

---

## 🎯 Edge Case Taxonomy (Forex Domain)

### 1. Bilingual Typography (CRITICAL)
| Category | Test Cases |
|----------|------------|
| **Vertical Alignment** | Mixed English/Urdu text on same line (`align-items: baseline`) |
| **Line Height** | Urdu text must not be clipped (needs `1.8` line-height) |
| **Font Loading** | Text must be visible (or system font) while Gulzar loads |
| **Direction** | Urdu input must be RTL, English LTR |

### 2. Search Logic
| Category | Test Cases |
|----------|------------|
| **Fuzzy Matching** | "Forex" matches "forex", "Forex", "foreign exchange" |
| **Urdu Search** | "فاریکس" matches "Forex" (if synonym map exists) |
| **Result Highlighting** | Matches are wrapped in `<mark>` tags |
| **Empty Query** | Returns all or suggested topics (not valid empty state) |

### 3. Progress Persistence (LocalStorage)
| Category | Test Cases |
|----------|------------|
| **Quota Exceeded** | What happens if LocalStorage is full? (Notify user) |
| **Corrupt JSON** | Hand-edited LocalStorage values shouldn't crash app |
| **Version Mismatch** | Loading V1 progress into V2 app |

---

## 📝 Naming Conventions
*   `should render urdu text with correct font family`
*   `should rank exact matches higher than fuzzy matches`
*   `should persist progress immediately after click`
