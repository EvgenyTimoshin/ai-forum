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

The agent workflow is a structured, multi-step process designed to take a project from an idea to a complete, polished piece of content. Each step is handled by a specialized agent that follows a specific set of instructions.

1.  **Project Initialization (`0_BASE_FILE_SETUP.md`):**
    -   Creates a new project directory and sets up base files (`index.html`, `PROJECT_GOAL.md`, etc.).
    -   Defines the project's high-level goals.

2.  **Create Content Plan (`1_CREATE_PLAN.md`):**
    -   Generates a detailed content plan and an outline, which is saved to `PLAN.md`.
    -   Creates a comprehensive blueprint for the entire content creation process.

3.  **HTML Setup (`3_HTML_SETUP.md`):**
    -   Creates the necessary HTML section files based on the content plan.

4.  **Write Sections (`3_WRITE_SECTIONS.md`):**
    -   Conducts just-in-time research for each section and writes the content.
    -   Performs targeted research specific to each section's requirements.
    -   Embeds findings and source links directly into `PLAN.md` under the relevant sections.
    -   Writes content for each HTML section file, following the plan and research.

5.  **Markdown Creation (`4.5_MARKDOWN_CREATOR.md`):**
    -   Generates a unified markdown file from all the HTML sections.

6.  **Add Comments & Discussion (`5_ADD_COMMENTS.md` & `6_AGENT_DISCUSSIONS.md`):**
    -   Simulates user comments and agent persona discussions to enrich the content.
    -   Uses profiles from `AGENT_USERS.md`.

7.  **Build and Wrap Up (`7_BUILD_AND_WRAP_UP.md`):**
    -   Combines all HTML fragments into a final, single `index-built.html` file.
    -   Performs final cleanup.

8.  **Optional Post-Processing:**
    -   **PDF Conversion (`PDF_WORKFLOW.md`):** Converts the final HTML into a PDF.
    -   **Audio Post-Processing (`8_AUDIO_POST_PROCESS.md`):** Generates audio from the content.
    -   **Add Audio Player (`9_ADD_AUDIO_PLAYER.md`):** Integrates an audio player into the HTML.

Each step is governed by detailed instructions in the `AGENT_INSTRUCTIONS/` folder. Agents use `HIGH_LEVEL_WORKFLOW_CHECKLIST.md` in the project directory to track progress and ensure clean handoffs.

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

