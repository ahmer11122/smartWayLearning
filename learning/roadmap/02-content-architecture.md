# 📍 Task: Content Architecture (MDX & Zod)
> **Status**: ✅ DONE
> **Source**: [prd.md#phase-2-core-architecture-week-2](file:///home/ahmer/Desktop/smartWay/learning/prd.md#phase-2-core-architecture-week-2)
> **Next Task**: [03-feature-implementation.md](file:///home/ahmer/Desktop/smartWay/learning/roadmap/03-feature-implementation.md)
> **Dependencies**: [01-setup-and-foundation.md](file:///home/ahmer/Desktop/smartWay/learning/roadmap/01-setup-and-foundation.md)
> **Context Anchors**:
> - [.agent/skills/robust-engineering-standards/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/robust-engineering-standards/SKILL.md)
> - [.agent/skills/pre-test-writing-standards/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/pre-test-writing-standards/SKILL.md)
> - [.agent/skills/test-driven-development/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/test-driven-development/SKILL.md)

## 🎯 Objective
Build the "Content Engine" that safely reads, validates, and serves bilingual MDX content. This is the **database** of the application.
for now just there is chapter 1 we add other later /home/ahmer/Desktop/smartWay/learning/content /forex intro.md

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
- [x] **Dependencies**: Install `zod`, `gray-matter` (or `next-mdx-remote/rsc`).
- [x] **Schema Definition**:
    - [x] Create `src/lib/schema.ts`.
    - [x] Define `LessonSchema` and `CourseSchema`.
- [x] **Content Parser**:
    - [x] Create `getLesson(slug)` and `getAllLessons()`.
    - [x] Implement strict `safeParse` logic.
- [x] **Route Handler**:
    - [x] Create `app/[course]/[slug]/page.tsx` (Shell only, no UI yet).
    - [x] Verify it receives props correctly.
- [x] **AI Content Conversion**:
    - [x] User provides plain text (English/Urdu).
    - [x] Agent converts to MDX + Zod structure.
    - [x] Agent auto-generates `search_metadata` (transliteration).

## ✅ Definition of Done
- [x] Zod schema catches invalid content.
- [x] `getAllLessons()` returns strictly typed data.
- [x] Unit tests pass for the parser.
