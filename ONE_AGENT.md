# One-Agent Ultra-Condensed Workflow

You are **the only LLM agent**.  This playbook collapses the entire multi-agent system into **five phases** while **retaining every formatting, styling, citation, and source-handling requirement** of the original instructions.

---

## Mission Summary

Produce a fully-featured blog post (HTML fragments ➜ built HTML ➜ optional Markdown & audio) for the **active project** and update repository meta-files.  Each phase below is atomic—finish all subtasks before moving on.

---

## Phase 0 — Project Bootstrapping *(run only once per project)*

- [ ] **Locate / create** the project directory.
  - Read `blogs.md` for the **Active Project**; create one via the steps below if none exists.
- [ ] **Base setup** (new projects only):
  1. `mkdir NEW_TOPIC/`  
     `cp template.html NEW_TOPIC/index.html` (fix paths)
  2. Add an **In Progress** row to `blogs.md` and flag it as Active.
  3. Write `PROJECT_GOAL.md` with the user's objectives.
- [ ] Draft **`PLAN.md`**: title, intro, numbered section titles, conclusion, glossary placeholder.

---

## Phase 1 — Iterative Section Creation *(research ↔ write in one pass)*

Repeat the loop below **for every heading in `PLAN.md`** (intro, Section 1…N, conclusion):

1. **Just-in-time research**  
   Search the web or use user-provided URLs to collect facts, quotes, and data **for this section only**.
2. **Write section fragment**  
   - Start with the matching template in `section_examples/`.
   - Embed researched content, citations, glossary tooltips, and dark-mode classes.
   - Save as `sections/slugified-title.html` (inner HTML only).
3. **Update sources & glossary**  
   - Append/merge full source details into `sections/sources.html` using the standard list format.
   - Add new glossary definitions in `sections/glossary.html`.
4. **Tick off** the file name in `CHECKLIST.md`.

> 🔄 Continue until **all sections** listed in `PLAN.md` are written and checked.

---

## Phase 2 — Global Polish & Validation

- [ ] Scan every fragment for styling, heading hierarchy, citation format, and dark-mode compatibility.
- [ ] Ensure each glossary term in content has a matching definition card.
- [ ] Confirm each `[X]` citation number exists in `sections/sources.html`.

*(This phase replaces the separate "editor" and "glossary polish" steps.)*

---

## Phase 3 — Build, Export, and Community Layer

1. **Build**: `node build.js PROJECT_FOLDER` ➜ creates `index-built.html`.
2. **(Optional) Markdown**:  
   `npx -y node html-to-markdown.js index-built.html content.md`.
3. **Add comments**:
   - Choose ≈ 6 personas from `AGENT_USERS.md` *(include the conspiracy theorist)*.
   - Insert their comments (and optional Web Digester overview) into `sections/comments.html` using the demo structure.
4. **Rebuild** to include comments: `node build.js PROJECT_FOLDER`.

---

## Phase 4 — Finish & Publish

- [ ] **Audio & accessibility tweaks**: add `no-audio` classes and embed the ElevenLabs widget below the prefix panel in `index-built.html`.
- [ ] **Repository updates**:
  - Mark project **Complete** and clear Active flag in `blogs.md`.
  - Add a new card linking to `PROJECT_FOLDER/index-built.html` at the top of the root `index.html` grid.
- [ ] **Commit artifacts** (`SOURCES.md`, checklists, glossaries, etc.)—do **not** delete them.

---

## PDF Add-On  
If a PDF is requested, run the `AGENT_INSTRUCTIONS/PDF_WORKFLOW.md` after Phase 3 and before Phase 4.

---

## Stop Signal  
After completing Phase 4 (or PDF add-on if used), cease execution.