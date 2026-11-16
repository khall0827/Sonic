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

- I added a skip-to-main-content link to all three pages so keyboard users can reach page content without tabbing through repeated navigation.
- I added high-contrast visible focus indicators to links, buttons, and form controls so keyboard users can tell which element is currently selected.
- I added associated labels, required-field validation, and announced inline errors to the contact form so everyone, including screen-reader users, can identify fields and understand how to correct mistakes.
- I standardized the shared text and background colors so the same readable palette is used throughout all three pages.
- I checked the text and control color pairs with the WebAIM Contrast Checker; every normal-text combination passes WCAG AA, with a minimum ratio of 6.24:1, so text remains readable against its background.
- WAVE found 0 errors, 0 contrast errors, and 0 alerts on the published [Home](https://wave.webaim.org/report#/https://khall0827.github.io/Sonic/index.html), [Projects](https://wave.webaim.org/report#/https://khall0827.github.io/Sonic/projects.html), and [About / Contact](https://wave.webaim.org/report#/https://khall0827.github.io/Sonic/contact.html) pages after these changes.

## Visual design

- I used **proximity** by grouping each project title and its details inside a distinct project card.
- I used **similarity** through the same navy-and-teal navigation, heading, card, and footer treatments on every page.

The shared palette uses deep navy `#172B4D`, teal `#176866` / `#0D4948`, warm cream `#FFF9ED`, and white `#FFFFFF`; text and control colors are selected for WCAG AA contrast against their backgrounds.
