# AI Agent Workflow Playground

This repository is an experimental playground for testing, scaling, and orchestrating agent workflows. It is designed to explore how specialized AI agents can collaborate, follow instructions, and distribute work across complex, multi-step content generation projects.

## Project Purpose

- **Experimentation:** Test and iterate on agent instructions, workflow handoffs, and agent specialization.
- **Scalability:** Explore how agent teams can be scaled and coordinated for larger, more complex tasks.
- **Extensibility:** Easily add new agent types, workflows, and content formats.
- **Research:** Serve as a sandbox for experimenting with different LLMs, agent personas, and workflow strategies.

## How It Works: Modular Agentic Workflows

The core of this project is a modular, checklist-driven workflow system. Each project (e.g., a blog post, PDF digest, or research synthesis) is broken into discrete steps, at some point to be handled automatically and performed by a unique agent. Agents only perform their assigned task, then hand off to the next agent in the workflow.

So far all testing has been done by either manually kicking off the models for each task in cursor (me acting as a human router for tasks). Which works well.

OR

One shotting all of the tasks with the thinking models. One prompt with a goal of the blog post and the rest runs in cursor agent mode until its fully complete.


### Agent Workflow Overview

1. **Project Initialization:**
   - Create a new project directory and set up base files using templates.
   - Define project goals in `PROJECT_GOAL.md`.
2. **Research & Source Analysis:**
   - Gather, analyze, and document sources in `SOURCES.md`.
3. **Content Generation:**
   - Write modular content fragments (HTML) for each section.
   - Use a checklist to track progress and ensure coverage.
4. **Content Editing:**
   - Review and polish each fragment for clarity, consistency, and glossary integration.
5. **Comments & Discussion:**
   - Simulate user comments and agent persona discussions using profiles from `AGENT_USERS.md`.
6. **Build & Wrap Up:**
   - Combine all fragments into a final static HTML file for deployment.
7. **Optional Steps:**
   - PDF conversion, audio post-processing, and audio player integration.

Each step is governed by detailed instructions in the `AGENT_INSTRUCTIONS/` folder. Agents use checklists to ensure strict task boundaries and handoffs.

### Modular Content System

- **Section Fragments:** Each content section (summary, introduction, main topics, glossary, sources, comments) is a separate HTML file, loaded dynamically into the main template.
- **Templates & Examples:** The `AGENT_INSTRUCTIONS/section_examples/` directory provides reference structures for all section types.
- **Build Script:** The `build.js` script assembles all fragments into a single deployable HTML file.

## Types of Experiments

- **Blog Post Generation:** Multi-agent workflows for research, writing, editing, and discussion.
- **PDF Workflows:** Automated conversion and condensation of PDFs into modular HTML digests.
- **Agent Persona Discussions:** Simulated comment sections with diverse, realistic user personas.
- **Workflow Scaling:** Testing how agent teams handle larger or more complex projects.

## UX / UI Features

| Feature | How it works | Why it helps |
|---------|--------------|--------------|
| **Reading-progress bar** | 4px accent strip at top (scrollY / (scrollHeight – viewport)); updates after every resize or collapse. Quick visual cue of "how much is left" | Visual progress tracking |
| **Dark-mode toggle** | Round button (🌙 / ☀️) top-right; swaps data-theme attribute. Uses CSS variables so colours flip instantly and preference sticks in localStorage | Eye comfort and user preference |
| **Glossary tooltips** | Under-dotted terms get hover pop-overs (pure CSS) with one-line definitions—keeps main text uncluttered | Contextual help without interruption |
| **Responsive design** | Max-width 70ch for comfortable reading; TOC hides on screens < 900px; everything works offline (no external libs) | Universal accessibility |
| **AI-Generated Discussion** | Simulates a comment section with personas defined in `AGENT_USERS.md`. The agent also performs a web search to incorporate real-world discussions and related topics via a 'Web Digester' persona. | Enriches the content with diverse perspectives, provides additional context, and surfaces related topics for deeper understanding. |
| **Highlight callouts & styled elements** | Colored boxes for key points, quotes, warnings; clean table styling for data presentation | Enhanced content hierarchy |

## Contributing & Extending

- See `AGENTS.md` and the `AGENT_INSTRUCTIONS/` folder for workflow details and extension guidelines.
- New experiments, agent types, and workflows are welcome—this is a living playground for agentic research.


## Some of my notes on various models.

One-shotting: one prompt -> cursor agent finished all of the steps in the workflow.

- **Gemini 2.5 Pro MAX (1M context):** Has been the most reliable for one-shotting the entire workflow from start to finish, with consistent step-by-step reproduction.
- **Sonnet 4:** Close second, but with a smaller context window and more frequent errors or inconsistencies compared to Gemini 2.5 Pro MAX.
- **Opus 4:** Promising, but prohibitively expensive. Did not perform significantly better than Sonnet 4 or Gemini 2.5 Pro MAX to justify the cost.
- **Sonnet 3.7 & 3.5:** Surprisingly effective at one-shotting workflows, especially given their lower tier. Will probably really good for distributed agent tasks.
- **GPT-4.1:** Very fast and generally good, but results are inconsistent. Shows high potential for use in a multi-agent system.


Further experimentation is needed with splitting tasks among different models. Initial attempts using Gemini CLI were hampered by severe rate limiting; need to retry with the paid version. **TODO**

