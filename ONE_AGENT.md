# One-Agent Comprehensive Workflow

You are **the sole LLM agent** responsible for completing the entire blog-post pipeline.  This condensed playbook merges every step found in `AGENTS.md` and the `AGENT_INSTRUCTIONS/` folder into a single, linear checklist while retaining **all formatting, output, styling, source-handling, and citation conventions** of the original multi-agent process.

---

## Your Mission

Create a production-ready blog post (HTML fragments, built HTML, Markdown derivative, community comments, and optional audio) for the **active project** and update all project meta-files.  Follow the steps **in order**; do **not** skip any required sub-steps.  When a task is finished, immediately mark it as complete in the relevant checklist.

---

## High-Level Execution Flow

1. **Locate or Initialise the Project**
   - Read `blogs.md` to find the current **Active Project** directory.
   - If none exists, perform the *Base File Setup* (Step 1a) to create a new project and set it as active.

2. **Understand the Goal**  
   Read `PROJECT_GOAL.md` inside the project folder.  This file is the single source of truth for what you must deliver.

3. **Plan → Research → Write → Polish → Build → Publish**  
   Execute Steps 1 – 9 below.  Each step corresponds to an entire group of the old multi-agent workflow.

---

## Detailed Checklist

### 1 a  Base File Setup  (only if starting a new project)

- [ ] Create `NEW_TOPIC/` directory.
- [ ] Copy `template.html` → `index.html` inside the new folder and fix relative asset paths.
- [ ] Append a new row in `blogs.md` for the project, set **Status** to `In Progress`, and flag it as the **Active Project**.
- [ ] Create an initial `PROJECT_GOAL.md` describing the user's request and high-level objectives.

### 1 b  Create Master Plan

- [ ] Draft `PLAN.md` — a detailed outline (title, intro, N sections, conclusion, glossary, sources placeholders).
- [ ] Generate / update `HIGH_LEVEL_WORKFLOW_CHECKLIST.md` with this condensed single-agent flow and tick the *Create Master Plan* task when done.

### 2  Research & Source Analysis

- [ ] If the user gave URLs, treat them as primary sources. Otherwise, search the web for **3-5 authoritative sources**.
- [ ] Create `WORKFLOW_CHECKLIST.md` with:
  ```markdown
  [] Process & analyse all sources
  [] Compile SOURCES.md
  ```
- [ ] Produce `SOURCES.md` using the exact format from the original `1_RESEARCH.md` (title, purpose, key points, text-fragment links).
- [ ] Mark items complete in `WORKFLOW_CHECKLIST.md`.

### 3  Modular Content Generation

- [ ] Make a `sections/` directory.
- [ ] Draft a `CHECKLIST.md` that lists every fragment file (`prefix-panel.html`, `summary.html`, `introduction.html`, `section-N.html`, `conclusion.html`, `glossary.html`, `sources.html`, `comments.html`).
- [ ] For **each** section:
  1. Start with the corresponding example in `section_examples/`.
  2. Write content that integrates facts from `SOURCES.md`.
  3. Cite every claim with the HTML snippet  
     `<a href="#sourceX" class="no-audio text-blue-600 dark:text-blue-400 hover:underline">[X]</a>`
  4. Use dark-mode-compatible classes; follow all structure, glossary-term, and accessibility guidelines from `2_WRITE_CONTENT.md`.
  5. Save only the inner HTML of the fragment, then tick it off in `CHECKLIST.md`.

### 4  Edit & Glossary Polish

- [ ] Review every fragment, applying formatting, bold/italic emphasis, and adding tooltip spans for glossary terms.
- [ ] Populate `sections/glossary.html` with definitions using the provided card template.
- [ ] Ensure consistency, dark-mode styles, source citation correctness, and heading hierarchy as mandated in `2.5_CONTENT_BLOG_EDITOR.md`.

### 5  Optional – Markdown Export

- [ ] Perform an *interim* build (`node build.js PROJECT_FOLDER`) to generate `index-built.html` for conversion.
- [ ] Run `npx -y node html-to-markdown.js index-built.html content.md` in the project folder.
- [ ] Verify `content.md` for accuracy.

### 6  Add Community Comments

- [ ] Select ~6 personas from `AGENT_USERS.md` (always include the conspiracy theorist).
- [ ] Create `sections/comments.html` using `section_examples/comments.html`.
- [ ] Craft persona-specific comments that reference the article, with proper avatar initials, colors, timestamps, and HTML structure.
- [ ] Optionally add real-world discussion excerpts and a long "Web Digester" comment as described in `3_ADD_COMMENTS.md`.

### 7  Final Build & Verification

- [ ] From repository root, run `node build.js PROJECT_FOLDER` to compile fragments into `index-built.html`.
- [ ] Confirm the file opens correctly and all sections load.

### 8  Post-Process Audio & Accessibility

- [ ] In `index-built.html`, add the `no-audio` class to:
  * Comments, glossary, sources `<section>` tags
  * `.toc-container`, `#readingTimeDisplay`, `.progress-bar`, `#themeToggle`, the audio player container, and `<noscript>`.
- [ ] Insert the ElevenLabs AudioNative widget **directly below the prefix panel**:
  ```html
  <div id="elevenlabs-audionative-widget" data-height="90" data-width="100%" data-frameborder="no" data-scrolling="no" data-publicuserid="740a44dde435c00ed2bffd5e5c72e0d69d298e3870342449acf862893617653f" data-playerurl="https://elevenlabs.io/player/index.html">Loading the <a href="https://elevenlabs.io/text-to-speech" target="_blank" rel="noopener">Elevenlabs Text to Speech</a> AudioNative Player...</div><script src="https://elevenlabs.io/player/audioNativeHelper.js" type="text/javascript"></script>
  ```

### 9  Wrap-Up & Publish

- [ ] Mark the project as **Complete** in `blogs.md` and remove its *Active* flag.
- [ ] Prepend a card for the new post to the root `index.html` grid, linking to `PROJECT_FOLDER/index-built.html`.
- [ ] Commit or save all generated files (`SOURCES.md`, checklists, etc.); do **not** delete them.

---

## PDF Workflow (when required)

If the user asks for a PDF version, follow `AGENT_INSTRUCTIONS/PDF_WORKFLOW.md` **after** completing Step 7 and **before** Step 8.

---

## Stop Signal

After fulfilling **all** applicable items, cease execution.  Another process (human or automated) will handle deployment.