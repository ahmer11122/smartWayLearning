# 📍 Task: Polish, Optimization & Launch
> **Status**: 🔴 TODO
> **Source**: [prd.md#7-performance-budget](file:///home/ahmer/Desktop/smartWay/learning/prd.md#7-performance-budget)
> **Next Task**: None (Launch)
> **Dependencies**: [04-progress-and-search.md](file:///home/ahmer/Desktop/smartWay/learning/roadmap/04-progress-and-search.md)
> **Context Anchors**:
> - [prd.md](file:///home/ahmer/Desktop/smartWay/learning/prd.md)
> - [.agent/skills/qa-review-checklist/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/qa-review-checklist/SKILL.md)
> - [.agent/skills/performance-and-optimistic-ui/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/performance-and-optimistic-ui/SKILL.md)
> - [.agent/skills/error-handling-patterns/SKILL.md](file:///home/ahmer/Desktop/smartWay/.agent/skills/error-handling-patterns/SKILL.md)
## 🎯 Objective
The "10/10" Finish Line. Ensure 100/100 Lighthouse Scores, perfect SEO tags, and buttery smooth performance before Vercel deployment.

## 🧠 Context & Rules
### Performance Budget
*   **LCP**: < 1.2s.
*   **CLS**: 0.00.
*   **Images**: All images must be WebP and have `width/height`.

### SEO
*   **Meta Tags**: Title, Description, OG Image for every lesson.
*   **Sitemap**: Auto-generated.

## 🧪 Verification Plan
*   [ ] **Manual**: Run Lighthouse in Chrome Incognito.
*   [ ] **Manual**: Test "Offline Mode" (simulate network disconnect).
*   [ ] **Automated**: `pnpm run build` produces no warnings.

## 🏗️ Implementation Steps
- [ ] **SEO**:
    - [ ] Create `app/sitemap.ts`.
    - [ ] Add `generateMetadata` to dynamic routes.
- [ ] **Optimization**:
    - [ ] Audit `next/image` usage.
    - [ ] Verify font subsets.
- [ ] **A11y**:
    - [ ] Audit keyboard tab order.
    - [ ] Verify Screen Reader announcements.
- [ ] **Deployment**:
    - [ ] Configure `vercel.json` (headers, caching).
    - [ ] Push to main.

## ✅ Definition of Done
- [ ] 4x 100 Lighthouse Score.
- [ ] Vercel deployment URL is live.
- [ ] Social share previews work.
