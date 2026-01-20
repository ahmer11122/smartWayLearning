---
name: qa-review-checklist
description: QA Review Checklist (Forex Learning Hub Edition).
license: Private
---

# 🔍 QA Review Checklist (Forex Learning Hub)

> **Philosophy**: "Does it feel Premium?"
> Beyond code quality, does the UI feel expensive and does the Urdu render correctly?

---

## 📋 The Review Dimensions

### 1. Requirements & Content
- [ ] Requirements from `roadmap/xx.md` met
- [ ] JSON Export/Import works (if applicable)
- [ ] No regression in Progress Saving
- **Rating**: _/10

### 2. Premium Design (CRITICAL)
- [ ] **Typography**: 'Gulzar' used for Urdu, 'Plus Jakarta' for English.
- [ ] **Dual Rhythm**: Urdu lines have breathing room (1.8x).
- [ ] **Colors**: "Deep Ocean" Palette (No generic blacks).
- [ ] **Shadows**: Colored Glows (Blue/Sky), not muddy black.
- [ ] **Animation**: Staggered entrance, spring physics (no linear slides).
- **Rating**: _/10

### 3. Frontend Engineering
- [ ] **Mobile**: Stacked Cards layout works on 375px.
- [ ] **Responsiveness**: Split view -> Tab -> Stack works smoothly.
- [ ] **Glassmorphism**: Backdrop blur used correctly on cards/headers.
- [ ] **Interactivity**: Hover effects (Gradient Borders) present.
- **Rating**: _/10

### 4. Logic & Performance
- [ ] **Search**: Debounced (300ms)? Fuse.js used?
- [ ] **CLS**: No layout shift when fonts load.
- [ ] **Images**: WebP format, explicit dimensions.
- [ ] **State**: LocalStorage writes are immediate (Optimistic).
- **Rating**: _/10

### 5. Code Quality
- [ ] No `any` types.
- [ ] Zod validation for all MDX/JSON inputs.
- [ ] Tests written for core logic (Search, Sync).
- **Rating**: _/10

---

## 🏆 Overall Health
*   **< 7/10**: Do not merge.
*   **7-8**: Acceptable.
*   **9-10**: Exceptional (Premium feel accomplished).
