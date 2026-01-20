# 📍 Task: Setup & Foundation (Design System)
> **Status**: ✅ DONE
> **Source**: [prd.md#phase-1-setup--foundation-week-1](file:///home/ahmer/Desktop/smartWay/learning/prd.md#phase-1-setup--foundation-week-1)
> **Next Task**: [02-content-architecture.md](file:///home/ahmer/Desktop/smartWay/learning/roadmap/02-content-architecture.md)
> **Dependencies**: None
> **Context Anchors**:
> - [prd.md](file:///home/ahmer/Desktop/smartWay/learning/prd.md)
> - [.agent/skills/creative-frontend-design/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/creative-frontend-design/SKILL.md)
> - [.agent/skills/robust-engineering-standards/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/robust-engineering-standards/SKILL.md)
> - [.agent/skills/agile-development-workflow/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/agile-development-workflow/SKILL.md)
> - [.agent/skills/performance-and-optimistic-ui/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/performance-and-optimistic-ui/SKILL.md)

## 🎯 Objective
Initialize the Next.js project with the "Deep Ocean" design system, configuring strict Tailwind tokens, fluid typography, and the bilingual font stack (Gulzar + Plus Jakarta Sans).

## 🧠 Context & Rules
### Design System (The "Premium" Look)
*   **Colors**: Implement the `bg-APP` (#020617) and `bg-SURFACE` (#0F172A) palette.
*   **Typography**:
    *   **English**: Plus Jakarta Sans (`var(--font-sans)`).
    *   **Urdu**: Gulzar (`var(--font-urdu)`).
    *   **Fluidity**: Use `clamp()` checks for all text sizes.

### Engineering Standards
*   **Strict Mode**: Ensure `tsconfig` is set to strict.
*   **Linting**: Zero tolerance for ESLint warnings.

## 🧪 TDD Strategy
*   [x] **Red**: Create a test component `DesignSystemCheck.spec.tsx`.
    *   Verify `font-urdu` class applies the correct font-family.
    *   Verify `bg-APP` resolves to `#020617`.
    *   Verify `clamp` utilities are present.
*   [x] **Green**: Configure `tailwind.config.ts` and `layout.tsx`.
*   [x] **Refactor**: Abstract tokens into `src/lib/tokens.ts` if needed.

## 🏗️ Implementation Steps
- [x] **Project Init**: Verify Next.js 14+ App Router setup.
- [x] **Dependencies**: Install `lucide-react`, `framer-motion`, `clsx`, `tailwind-merge`.
- [x] **Fonts**:
    - [x] Configure `next/font/google` for "Plus Jakarta Sans" and "Gulzar".
    - [x] Add them as CSS variables in `layout.tsx`.
- [x] **Tailwind Config**:
    - [x] Extend theme with "Deep Ocean" colors.
    - [x] Add `font-sans` and `font-urdu` families.
    - [x] Add fluid spacing/font-size utilities.
- [x] **Global CSS**:
    - [x] Reset CSS for dark mode default.
    - [x] Add scrollbar styling (thin, dark).

## ✅ Definition of Done
- [x] The "Hello World" page looks "Premium" (Dark bg, correct fonts).
- [x] `pnpm run lint` passes.
- [x] Tailwind IntelliSense works with custom tokens.
