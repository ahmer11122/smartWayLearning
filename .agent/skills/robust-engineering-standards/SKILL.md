---
name: robust-engineering-standards
description: Engineering Standards for Forex Learning Hub (Frontend-First MVP).
license: Private
---

# 🏗️ Robust Engineering Standards (The "10/10" Codebase)
> **Philosophy**: "Type-Safe, Crash-Proof, and Clean."
> We treat the Content Layer (MDX/JSON) as a critical database. It must be strictly validated.

---

## 🛡️ Data Integrity & Validation (Zod)

### 1. Trusted Content Boundary
MDX files are "untamed" input. We must tame them at the build edge.
*   **Rule**: NEVER Access frontmatter properties directly.
*   **Pattern**:
    ```typescript
    // ✅ CORRECT
    const rawData = parseFrontmatter(fileContent);
    const lesson = LessonSchema.parse(rawData); // Throws if invalid
    
    // ❌ WRONG
    const title = data.frontmatter.title; // Unsafe
    ```

### 2. Strict Schema Definition
Define schemas that catch logical errors, not just type errors.
*   **Example**:
    ```typescript
    const LessonSchema = z.object({
      id: z.string().uuid("Lesson ID must be a valid UUID"),
      title: z.string().min(5, "Title too short"),
      difficulty: z.enum(['basic', 'advanced', 'pro']),
      // Ensure translation object keys match strict requirements
      translation: z.object({
        ur_title: z.string().min(1, "Urdu title required")
      })
    });
    ```


### 3. Searchability Schema (The "Findability" Rule)
Fuse.js cannot transliterate Urdu <-> English on the fly. We must bake it into the data.
*   **Rule**: Every content piece MUST have a hidden `search_keywords` field.
*   **Pattern**:
    ```typescript
    const LessonSchema = z.object({
      // ... existing fields
      search_metadata: z.object({
        keywords_en: z.array(z.string()), // e.g. ["change", "currency"]
        keywords_ur: z.array(z.string()), // e.g. ["فاریکس", "کرنسی"]
        transliteration: z.array(z.string()) // e.g. ["forex", "farex"] (roman urdu)
      })
    });
    ```

---

## 🧨 Error Handling Strategy

### 1. The "Graceful Degradation" Rule
The app should NEVER white-screen.
*   **Component Level**: Wrap complex widgets (Charts, Quizzes) in `<ErrorBoundary>`.
*   **Content Level**: If a lesson fails to load, `notFound()` or show a specific "Content Maintenance" component.

### 2. Typed Errors
Stop throwing strings. Throw Objects.
```typescript
class ContentError extends Error {
  constructor(public code: 'FILE_NOT_FOUND' | 'INVALID_SCHEMA', message: string) {
    super(message);
    this.name = 'ContentError';
  }
}
```

---

## 🏛️ Local-First State Architecture

### 1. The "Resilient Storage" Pattern
`localStorage` is volatile. Treat it as a cache, not a vault.
*   **Wrapper**: Create a `StorageService` that handles `try/catch` logic internally.
*   **Versioning**: ALWAYS version your storage keys.
    *   `v1_progress`
    *   `v1_settings`
*   **Hydration**: Handle the dreaded "Hydration Mismatch" by using `useEffect` or `useSyncExternalStore` for reading storage.

---

## 🧪 Testing Standards

### 1. Unit Tests (Vitest)
Test logic, not UI implementation details.
*   **Required**:
    *   `MDX Parser`: Verify it throws on invalid schemas.
    *   `ProgressService`: Verify it calculates % correctly.
    *   `SearchAlgorithm`: Verify fuzzy matching logic (English vs Urdu).

### 2. Integration Tests
Test critical user flows.
*   **Flow**: "User opens lesson -> Expands answer -> Progress updates".

---

## 🧹 Code Quality
*   **No `any`**: The compiler is your friend.
*   **No `console.log` in Prod**: Use a logger utility that strips logs in production.
*   **Components**: Keep components < 200 lines. Abstract logic into hooks (`useLessonProgress`).
