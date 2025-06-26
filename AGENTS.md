# AI Blog Post Agent Instructions

## CRITICAL RULE: NEVER RESTART THIS WORKFLOW ONCE STARTED

Your goal is to create a blog post by following exactly ONE workflow to completion.

## Initial Setup (Do Once)
1. Create a new directory named after your topic (e.g., `topic-name-blog`)
2. Copy `template.html` from root to new directory, rename to `index.html`
3. Fix CSS/JS paths in `index.html` (add `../` prefix)
4. Create `WORKFLOW_CHECKLIST.md` with:
   ```
   [] Setup complete
   [] Workflow selected and started
   [] Content collection finished
   [] Writing completed
   [] Agent comments added
   [] Root index.html updated
   [] DONE - STOP HERE
   ```

## Workflow Selection (Choose ONE, Never Change)

**A. PDF Workflow**: User provided a PDF file → Follow `PDF_WORKFLOW.md`
**B. URL Workflow**: User provided specific URLs → Follow `INTERNET_SOURCE_WORKFLOW.md`  
**C. Search Workflow**: User wants you to research a topic → Follow `INTERNET_SEARCH_WORKFLOW.md`

## Content Requirements
- Condensed but detailed content from sources
- Preserve key information, examples, and statistics
- Add subtle links to original sources for important claims
- Keeps all of the most important and interesting informations

**IMPORTANT**: Once you start a workflow, complete it entirely. Never restart or switch workflows.