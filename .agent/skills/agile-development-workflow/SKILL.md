---
name: agile-development-workflow
description: Micro-Spec Strategy adjusted for Solo/Small Team velocity. Focus on TDD and sequential clarity.
license: Private
---

# Agile Workflow: Micro-Specs (Solo Edition)

> **Philosophy**: "Small Context = High Velocity."
> Even as a solo dev, breaking tasks down prevents "Spaghetti Code".

---

## 🚀 The Protocol

### 1. The "Micro-Spec"
Before writing code, create a small markdown plan (`roadmap/01-task.md`).
*   **Why**: Prevents Getting Lost.
*   **Size**: 1-2 hours of work maximum.

### 2. The Cycle
1.  **Draft**: Write `roadmap/xx-feature.md`.
2.  **Move**: Copy to `active.md`.
3.  **Red**: Write failing test (Jest/Vitest).
4.  **Green**: Make it pass.
5.  **Refactor**: Clean up.
6.  **Done**: Mark check in `active.md`, verify `task.md`.

---

## 📋 Micro-Spec Template
```markdown
# 📍 Task: [Title]

## 🎯 Objective
Single sentence goal.

## 🧠 Context
- Rule: Use Gulzar for Urdu.
- Rule: Validate MDX via Zod.

## 🧪 Verification Plan
- [ ] Test 1: ...
- [ ] Test 2: ...
```

---

## 🚫 Solo Dev Anti-Patterns
1.  **"Just one more thing"**: Don't add features not in the Micro-Spec.
2.  **Skipping Tests**: "It's just a UI change." (UI needs consistency tests).
3.  **Mega-Commits**: Commit after every "Green" phase.
