# TODO - Catalyst UI Fixes

## Completed / In Progress
- [ ] Inspect current implementation for required UI mismatches (hero typography, spacing, opacities, ranking highlight, mobile responsiveness).

## Planned Steps
1. [ ] Fix Hero “CATALYST” font + spacing: update `src/components/Hero.tsx` to match provided Proxz font settings (family/weight/size/letter-spacing/line-height) and correct vertical rhythm.
2. [ ] Fix accreditation section spacing below logos: update `src/components/AboutSection.tsx` (adjust only spacing below logos).
3. [ ] Fix Survey Responses opacity: update `src/components/Surveys.tsx` to match Figma opacity.
4. [ ] Fix decorative background logo opacity (~50%): update `src/components/Section.tsx` and/or section prop values to ensure bg vectors render at correct opacity without altering positions/sizes.
5. [ ] Remove green highlight from last ranking: update `src/components/Rankings.tsx` to apply neutral styling to the last row only.
6. [ ] Review overall section spacing across all sections; adjust only spacing/margins/paddings where inconsistent (without changing desktop layout visually beyond fixes).
7. [ ] Mobile QA: ensure navigation hamburger works, no desktop layout leaks, no horizontal scrolling, no overlaps, responsive typography/images/video.
8. [ ] Desktop QA: verify no unintended visual/color/content changes.

## Verification Checklist
- [ ] No horizontal scrolling
- [ ] No overflowing/overlapping elements
- [ ] Hero typography/spacing matches Figma
- [ ] Accreditation bottom spacing matches Figma
- [ ] Survey responses opacity matches Figma
- [ ] Background decorative logos ~50% opacity
- [ ] Last ranking row neutral (no green)
- [ ] Mobile layout responsive and hamburger nav works

