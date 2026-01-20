---
name: error-handling-patterns
description: Standardized error handling for Content App. Focus is on UX recovery (Search, Sync).
license: Private
---

# 🚨 Error Handling (Content-First)

> **Philosophy**: "Broken Search = Broken App."
> Content apps must be resilient to Network (Sync) and Logic (Search) failures.

## 🎯 Error Taxonomy

### 1. Data Integrity Errors
*   **JSONParseError**: Malformed LocalStorage or Import file.
    *   *Action*: Reset to safe default, notify user.
*   **ZodValidationError**: MDX Frontmatter invalid.
    *   *Action*: Fail build (for Devs), Fallback title (for Prod).

### 2. Runtime Errors
*   **SearchIndexError**: Fuse.js fails to load.
    *   *Action*: Retry, then show "Search Unavailable".
*   **SyncError**: LocalStorage quota exceeded.
    *   *Action*: Prompt user to "Export & Clear".

---

## 🔧 Typed Result Pattern

```typescript
export type Result<T, E = AppError> = 
  | { success: true; data: T }
  | { success: false; error: E };

export class AppError extends Error {
  constructor(public code: string, message: string) {
    super(message);
    this.name = 'AppError';
  }
}
```

---

## 🎨 UI Recovery

### 1. Error Boundaries
*   **Granularity**: Wrap `QuestionCard`, `SearchBlock`, and `ModuleList` in separate Boundaries.
*   **Why**: If one card crashes, the rest of the app should live.

### 2. User Feedback
*   **Toasts**: `toast.error("Could not save progress")`
*   **Empty States**: "No results found for 'xyz'. Try 'basics'."
