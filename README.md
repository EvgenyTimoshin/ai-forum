# AI Document Digester

A single-file, self-contained HTML "digest" that transforms any long-form content into clean, readable web pages with interactive features and quality-of-life improvements.

## What We Built

A streamlined HTML application that converts lengthy documents—research papers, articles, reports, opinion pieces, white papers, or any substantial text—into a clean, readable web interface with enhanced user experience features.

## Content Layer

| Part | Purpose |
|------|---------|
| **Prefix panel** | Explains how the document was condensed – what was retained, condensed, or omitted |
| **Summary section** | A succinct overview of the document's main points and key arguments |
| **Organized sections** | Walk the reader through the document's structure with clear headings and logical flow |
| **Glossary** | Defines recurring acronyms, technical terms, or specialized vocabulary |

## UX / UI Features

| Feature | How it works | Why it helps |
|---------|--------------|--------------|
| **Sticky mini-TOC** | Auto-built from every `<h2>`; hidden off-screen with a ☰ tab that slides in on hover. Re-generates whenever you collapse/expand to stay accurate | Quick navigation and section overview |
| **Collapsible sections** | Clicking any `<h2>` folds the section away; state toggles CSS + recalculates TOC and progress. Lets skimmers hide detail they don't need | Customizable reading experience |
| **Reading-progress bar** | 4px accent strip at top (scrollY / (scrollHeight – viewport)); updates after every resize or collapse. Quick visual cue of "how much is left" | Visual progress tracking |
| **Dark-mode toggle** | Round button (🌙 / ☀️) top-right; swaps data-theme attribute. Uses CSS variables so colours flip instantly and preference sticks in localStorage | Eye comfort and user preference |
| **Glossary tooltips** | Under-dotted terms get hover pop-overs (pure CSS) with one-line definitions—keeps main text uncluttered | Contextual help without interruption |
| **Responsive design** | Max-width 70ch for comfortable reading; TOC hides on screens < 900px; everything works offline (no external libs) | Universal accessibility |
| **Highlight callouts & styled elements** | Colored boxes for key points, quotes, warnings; clean table styling for data presentation | Enhanced content hierarchy |

## Tech Stack

- **HTML + Tailwind CSS** — styling via Play CDN
- **Vanilla JS** (< 90 lines) to build the TOC, handle collapses, theme switching, and progress-bar updates

**Tailwind CSS Reference:** [Play CDN Documentation](https://tailwindcss.com/docs/installation/play-cdn)

