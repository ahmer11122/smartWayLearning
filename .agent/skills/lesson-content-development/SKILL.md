---
name: lesson-content-development
description: Guidelines for creating premium Forex learning content, covering data structure, aesthetics, and cinematic visuals.
---

# Lesson Content Development

Standardized guidelines for creating premium, high-fidelity Forex learning content for the SmartWay Learning portal.

## 🏗 Content Architecture

### 1. Data Structure
All lesson content is managed within the component's `sections` array. Each section must follow this structure:

```typescript
{
    id: string;          // kebab-case (e.g., 'forex-basics')
    titleEn: string;
    titleUr: string;
    contentEn: string[]; // Questions in English
    contentUr: string[]; // Questions in Urdu (numbered ۱۔ ۲۔)
    answersUr: (string | TableAnswer)[]; // Answers in Urdu
    visualsMap?: Record<number, Visual[]>; // index matches content index
    audioMap?: Record<number, string>;    // index matches content index
}
```

### 2. Multi-line Formatting
For long text or numbered lists in `answersUr`, use the newline character `\n` to separate points. The renderer is configured to split these into distinct lines with `space-y-4` for maximum legibility.

---

## 🎨 Design & Aesthetic Standards

### 1. Typography
- **Urdu**: Use `font-urdu` with `leading-[2.4]` and `tracking-[0.05em]`. This provides the necessary "left-to-right" breathing room for complex ligatures.
- **English/Technical Terms**: Use `font-sans` with `font-bold`.
- **Colors**: Use `text-text-PRIMARY` for headers, `text-text-SECONDARY/80` for answers, and `brand-primary` for emphasis or icons.

### 2. Comparative Tables
When comparing Traditional Business vs Forex:
- **Header**: `bg-brand-primary/10` with bold Urdu labels.
- **Borders**: Subtle `border-border/20` for a clean, non-cluttered look.
- **Trading Terms**: Detect "Buy" (green) and "Sell" (red) automatically in the rendering loop.
- **Space**: Force `min-w-[800px]` to prevent text collapse from left to right.

---

## 📷 Image Generation Guidelines

We avoid generic stock photos. All images must feel **Premium, Cinematic, and High-Tech**.

### Style keywords
Use these keywords in every prompt:
`Premium`, `Cinematic 3D Infographic`, `Holographic`, `Liquid Gold`, `Luxury Financial Atmosphere`, `Glassmorphism`, `Depth of Field`, `8k Resolution`.

### Prompt Templates
- **For Market Concepts**: "A premium, cinematic 3D infographic showing [Concept], holographic data beams, digital currency symbols floating in a high-tech financial atmosphere, professional blue and gold aesthetic."
- **For Comparisons**: "A modern 3D comparison visual showing [X] versus [Y], futuristic towers made of glowing data, sleek glassmorphism labels, cinematic lighting."

### File Naming Convention
- Move images to `/public/assets/visuals/`.
- Use descriptive snake_case names (e.g., `usd_global_dominance.webp`).
- **Required**: Always convert to `.webp` for performance.

---

## 🎙 Audio & Playback
- **Storage**: `/public/assets/audio/lessons/`.
- **Activation**: Map the index in `audioMap`. The UI will automatically render a Play/Stop button.
- **Quality**: Use a "Warm, Steady, and Serious" voice profile (e.g., Sara v3 from ElevenLabs) for a professional educational tone.
