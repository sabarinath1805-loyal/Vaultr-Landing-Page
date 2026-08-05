# Harvey Landing Page Build Notes

## Objective

Create a premium Harvey homepage using the authorized Harvey reference archive, with its editorial scale, dark cinematic atmosphere, navigation structure, responsive behavior, and interaction quality.

## Source audit

- 635 Harvey sitemap routes archived; homepage references include Platform, Solutions, Customers, Security, Resources, and Company.
- Browser-derived system samples: 22 rendered routes, section samples, heading samples, button samples, and responsive captures.
- Core palette: ink, warm ivory, charcoal surfaces, fine borders, and restrained white controls.
- Typography mapping: HarveySerif -> Libre Caslon Display; HarveySans -> DM Sans.
- Reference breakpoints cluster around 640px, 768px, 1025px, 1445px, and 1730px.

## Page architecture

1. Harvey announcement banner and fixed global navigation.
2. Cinematic Practice Made Perfect hero using the authorized captured Harvey hero media.
3. Customer logo strip and legal-work marquee.
4. Harvey product workspace demonstration.
5. Customer perspective carousel.
6. Impact statistics, workflow cards, security story, capability comparison, demo CTA, and footer.

## Interaction and accessibility

- Keyboard-operable carousel and mobile navigation; Escape closes overlays.
- Visible focus states, ARIA labels, live form feedback, and reduced-motion handling.
- IntersectionObserver controls reveals, counters, product typing, and progress fill.
- Local-only demo form submission; no personal data leaves the browser.

## Verification and deployment

- JavaScript syntax checks pass through the project test script.
- Local server returns the homepage successfully.
- GitHub Pages publishes the Harvey experience from the repository root.
- The source Harvey archive remains local and is excluded from deployment.
