# Kristen Hall - Portfolio

Three linked HTML pages for the portfolio assignment:

- [Live site](https://khall0827.github.io/Sonic/)
- [GitHub repository](https://github.com/khall0827/Sonic)
- [Home](index.html)
- [Projects / Work](projects.html)
- [About / Contact](contact.html)

## Site plan

The [wireframe](wireframe.svg) shows the planned layout for all three pages.

- **Color palette:** deep navy, teal, and warm cream.
- **Fonts:** Lora for headings and DM Sans for body text, loaded from Google Fonts.

The shared [stylesheet](homework1.css) is linked from all three pages and applies the site colors, responsive card layouts, navigation, and an 8px-based spacing system.

## Accessibility fixes

- I added a skip-to-main-content link to all three pages so keyboard users can bypass repeated navigation.
- I added a high-contrast visible focus indicator for links, buttons, and form controls.
- I added explicitly associated labels, required-field constraints, and inline announced error messages to the contact form.
- I used a consistent high-contrast text and background palette across the shared page components.
- I checked the text and control color pairs with the WebAIM Contrast Checker; every normal-text combination passes WCAG AA, with a minimum ratio of 6.24:1.
- WAVE reports for [Home](https://wave.webaim.org/report#/https://khall0827.github.io/Sonic/), [Projects](https://wave.webaim.org/report#/https://khall0827.github.io/Sonic/projects.html), and [About / Contact](https://wave.webaim.org/report#/https://khall0827.github.io/Sonic/contact.html) detected no errors before these changes; I will rerun the reports on the published pages after deployment.

## Visual design

- I used **proximity** by grouping each project title and its details inside a distinct project card.
- I used **similarity** through the same navy-and-teal navigation, heading, card, and footer treatments on every page.

The shared palette uses deep navy `#172B4D`, teal `#176866` / `#0D4948`, warm cream `#FFF9ED`, and white `#FFFFFF`; text and control colors are selected for WCAG AA contrast against their backgrounds.
