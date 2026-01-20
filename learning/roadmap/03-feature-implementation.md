# 📍 Task: Core Feature Implementation (Interactions)
> **Status**: 🔴 TODO
> **Source**: [prd.md#31-the-hero-learning-interface](file:///home/ahmer/Desktop/smartWay/learning/prd.md#31-the-hero-learning-interface)
> **Next Task**: [04-progress-and-search.md](file:///home/ahmer/Desktop/smartWay/learning/roadmap/04-progress-and-search.md)
> **Dependencies**: [02-content-architecture.md](file:///home/ahmer/Desktop/smartWay/learning/roadmap/02-content-architecture.md)
> **Context Anchors**:
> - [.agent/skills/creative-frontend-design/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/creative-frontend-design/SKILL.md)
> - [.agent/skills/performance-and-optimistic-ui/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/performance-and-optimistic-ui/SKILL.md)
> - [.agent/skills/agile-development-workflow/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/agile-development-workflow/SKILL.md)

## 🎯 Objective
Implement the "Hero" learning interface: The Expandable Q&A Card and the Responsive Bilingual Layout Engine (Split View -> Stacked Tab).

## 🧠 Context & Rules
### The "Hero" Card
*   **Physics**: Use `stiffness: 300, damping: 30` for opening.
*   **Stagger**: Content inside the card MUST stagger fade-in.
*   **Glassmorphism**: `backdrop-blur-xl` + `border-white/5`.

### Bilingual Layout
*   **Desktop**: Two columns (`grid-cols-2`). Left = English, Right = Urdu.
*   **Mobile**: Sticky Tab Switcher (`[ English | Urdu ]`) + Horizontal Framer Motion slide.
*   **Synch**: Expanding a card in "Split View" should (optionally) expand the counterpart or keep alignment.

## 🧪 TDD Strategy
*   [ ] **Red**: Create `tests/components/QuestionCard.test.tsx`.
    *   Test: Renders title correctly.
    *   Test: Click toggles `aria-expanded`.
    *   Test: Content is hidden by default.
*   [ ] **Green**: Build `QuestionCard.tsx` and `BilingualLayout.tsx`.
*   [ ] **Refactor**: Extract animations to `src/lib/animations.ts`.

## 🏗️ Implementation Steps
- [ ] **Components**:
    - [ ] `src/components/ui/Card.tsx` (Base Glass Card).
    - [ ] `src/components/content/QuestionCard.tsx` (Interactive).
    - [ ] `src/components/layout/BilingualSplit.tsx` (Desktop).
    - [ ] `src/components/layout/LanguageTabs.tsx` (Mobile).
- [ ] **Integration**:
    - [ ] Connect MDX data to `QuestionCard`.
    - [ ] Implement `AnimatePresence` for mobile language switching.

## ✅ Definition of Done
- [ ] Cards have "Spring" physics (not linear).
- [ ] Mobile view switches languages smoothly.
- [ ] All text is readable (Contrast AA).
