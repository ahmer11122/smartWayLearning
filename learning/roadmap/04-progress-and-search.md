# 📍 Task: Progress & Search Engine
> **Status**: 🔴 TODO
> **Source**: [prd.md#32-progress--gamification-the-hook](file:///home/ahmer/Desktop/smartWay/learning/prd.md#32-progress--gamification-the-hook)
> **Next Task**: [05-polish-and-deployment.md](file:///home/ahmer/Desktop/smartWay/learning/roadmap/05-polish-and-deployment.md)
> **Dependencies**: [03-feature-implementation.md](file:///home/ahmer/Desktop/smartWay/learning/roadmap/03-feature-implementation.md)
> **Context Anchors**:
> - [prd.md](file:///home/ahmer/Desktop/smartWay/learning/prd.md)
> - [.agent/skills/robust-engineering-standards/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/robust-engineering-standards/SKILL.md)
> - [.agent/skills/error-handling-patterns/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/error-handling-patterns/SKILL.md)
> - [.agent/skills/pre-test-writing-standards/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/pre-test-writing-standards/SKILL.md)
## 🎯 Objective
Implement the "Sticky" features: Resilience Progress Tracking (LocalStorage) and "Spotlight" Search (Fuse.js).

## 🧠 Context & Rules
### Persistence (The "Save Game")
*   **Key**: `forex_hub_progress_v1`.
*   **Schema**: Store `completedQuestions` (array of IDs) and `streakDays`.
*   **Safety**: Handle `quotaExceeded` errors.

### Search ("Spotlight")
*   **Engine**: Fuse.js (Client-side).
*   **Scope**: Search in Question Title AND Answer Text (English + Urdu).
*   **UX**: `Cmd+K` trigger + Modal interface.

## 🧪 TDD Strategy
*   [ ] **Red**: `tests/unit/storage.test.ts`.
    *   Test: Saving progress persists to mock LocalStorage.
    *   Test: Corrupted JSON handles gracefully.
*   [ ] **Red**: `tests/unit/search.test.ts`.
    *   Test: "Spread" matches "Bid/Ask Spread".
    *   Test: Urdu query returns correct results.

## 🏗️ Implementation Steps
- [ ] **Storage Engine**:
    - [ ] Create `src/lib/storage.ts` (Typed Wrapper).
    - [ ] Create `useProgress()` hook with Context.
    - [ ] Implement Visual Progress Bar (Top of screen).
- [ ] **Search Engine**:
    - [ ] Index all content at build time (or runtime memo).
    - [ ] Create `SearchModal.tsx` (Backdrop blur).
    - [ ] Implement Keyboard shortcuts.

## ✅ Definition of Done
- [ ] Reloading page keeps progress.
- [ ] Search works offline.
- [ ] Progress Bar animates smoothly.
