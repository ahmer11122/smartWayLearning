# 📍 Task: Content Architecture (MDX & Zod)
> **Status**: 🔴 TODO
> **Source**: [prd.md#phase-2-core-architecture-week-2](file:///home/ahmer/Desktop/smartWay/learning/prd.md#phase-2-core-architecture-week-2)
> **Next Task**: [03-feature-implementation.md](file:///home/ahmer/Desktop/smartWay/learning/roadmap/03-feature-implementation.md)
> **Dependencies**: [01-setup-and-foundation.md](file:///home/ahmer/Desktop/smartWay/learning/roadmap/01-setup-and-foundation.md)
> **Context Anchors**:
> - [.agent/skills/robust-engineering-standards/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/robust-engineering-standards/SKILL.md)
> - [.agent/skills/pre-test-writing-standards/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/pre-test-writing-standards/SKILL.md)
> - [.agent/skills/test-driven-development/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/test-driven-development/SKILL.md)

## 🎯 Objective
Build the "Content Engine" that safely reads, validates, and serves bilingual MDX content. This is the **database** of the application.

## 🧠 Context & Rules
### Data Integrity
*   **Rule**: "Trust No Frontmatter".
*   **Schema**: Zod schema must strictly validate:
    *   `id` (UUID)
    *   `title` (min 5 chars)
    *   `translation` object (Urdu fields)
*   **Failure Mode**: Build **MUST FAIL** if any MDX file is invalid.

### Directory Structure
*   `content/course-01/topic-01.mdx`
*   `content/course-01/topic-02.mdx`

## 🧪 TDD Strategy
*   [ ] **Red**: Create `tests/unit/content-engine.test.ts`.
    *   **Test**: Parse a mock MDX file with missing `id` -> Expect Zod Error.
    *   **Test**: Parse a valid file -> Expect typed `Lesson` object.
    *   **Test**: Sort logic (by `order` field).
*   [ ] **Green**: Implement `src/lib/content.ts` using `gray-matter` or `next-mdx-remote`.
*   [ ] **Refactor**: Optimize FS reads with caching (if needed).

## 🏗️ Implementation Steps
- [ ] **Dependencies**: Install `zod`, `gray-matter` (or `next-mdx-remote/rsc`).
- [ ] **Schema Definition**:
    - [ ] Create `src/lib/schema.ts`.
    - [ ] Define `LessonSchema` and `CourseSchema`.
- [ ] **Content Parser**:
    - [ ] Create `getLesson(slug)` and `getAllLessons()`.
    - [ ] Implement strict `safeParse` logic.
- [ ] **Route Handler**:
    - [ ] Create `app/[course]/[slug]/page.tsx` (Shell only, no UI yet).
    - [ ] Verify it receives props correctly.
- [ ] **AI Content Conversion**:
    - [ ] User provides plain text (English/Urdu).
    - [ ] Agent converts to MDX + Zod structure.
    - [ ] Agent auto-generates `search_metadata` (transliteration).

## ✅ Definition of Done
- [ ] Zod schema catches invalid content.
- [ ] `getAllLessons()` returns strictly typed data.
- [ ] Unit tests pass for the parser.
