# AGENTS_2.md - Unified Blog Creation Workflow

<WORKFLOW_GOAL>
Create a complete, publication-ready blog post from initial setup through final build using a single-agent, end-to-end workflow that minimizes complexity and request overhead.
</WORKFLOW_GOAL>

<IMPORTANT_SETUP>
**CRITICAL FIRST STEPS:**
1. Read `blogs.md` to identify the active project directory
2. Read `PROJECT_GOAL.md` in that directory to understand project objectives
3. All subsequent work must be performed relative to the active project directory
</IMPORTANT_SETUP>

## Unified Workflow

<STEP_1_PROJECT_SETUP>
**Objective:** Create project structure and base files

**Actions:**
1. Create new directory: `[topic-name]/`
2. Copy `template.html` from root → `index.html` in new directory
3. **IMPORTANT:** Fix CSS/JS paths in index.html to reference root files correctly
4. Update `blogs.md`: Add new project entry and set as "Active Project"
5. Create `PROJECT_GOAL.md` with user's request and high-level goals
6. Create `HIGH_LEVEL_WORKFLOW_CHECKLIST.md` with base checklist structure
</STEP_1_PROJECT_SETUP>

<STEP_2_CONTENT_PLANNING>
**Objective:** Create comprehensive content strategy

**Actions:**
1. Create `PLAN.md` with detailed blog structure:
   - Compelling title
   - Introduction (hook and purpose)
   - Main sections (6-10 detailed sections with key points)
   - Conclusion (takeaways and closing)
   - Glossary placeholder
   - Sources placeholder (to be populated during research)
2. Update workflow checklist with specific section divisions (4 quarters)
</STEP_2_CONTENT_PLANNING>

<STEP_3_HTML_SETUP>
**Objective:** Prepare modular HTML infrastructure

**Actions:**
1. Create `sections/` directory
2. Copy from `root/AGENT_INSTRUCTIONS/section_examples/`:
   - `sources.html` (empty content)
   - `glossary.html` (empty content)
   - `comments.html` (basic structure)
3. **IMPORTANT:** Ensure all example content is removed, keep only structure
</STEP_3_HTML_SETUP>

<STEP_4_CONTENT_RESEARCH_AND_WRITING>
**Objective:** Research, write, and format all content sections

<RESEARCH_GUIDELINES>
**IMPORTANT:** For each section, conduct comprehensive web research:
- High-quality articles and documentation
- Academic papers and research studies
- Statistics, data points, examples
- Direct quotes from authoritative sources
- Current and historical context

**CRITICAL - WEB SEARCH RESULT MANAGEMENT:**
For EVERY useful web search result, you MUST save:
1. **Full URL** of the source
2. **Title/Source name** of the article/page
3. **Key information extracted** (quotes, statistics, facts, data points)
4. **Relevance notes** (how this will be used in the blog)
5. **Citation number** (assign sequential numbers [1], [2], [3], etc.)

**Process:**
1. Conduct web search for section topic
2. For each valuable result, immediately save to `PLAN.md` under the relevant section:
   ```markdown
   ### [Section Name]
   **Sources Found:**
   - [1] [Article Title](https://full-url.com)
     - Key quote: "Extracted important quote here"
     - Statistics: 45% increase in adoption, 23% improvement
     - Use for: Supporting main argument about X
   - [2] [Research Paper Title](https://full-url.com)
     - Key finding: Study shows significant correlation
     - Data: Sample size 1,000 participants over 2 years
     - Use for: Evidence backing claim about Y
   ```
3. Transfer these saved sources to `sections/sources.html` with proper formatting
4. Use the assigned citation numbers [1], [2], etc. in your content
</RESEARCH_GUIDELINES>

<FORMATTING_REQUIREMENTS>
**CRITICAL FORMATTING STANDARDS:**

**HTML Structure:**
- Use `<strong>` or `<b>` for bolding
- Use `<em>` or `<i>` for italics  
- Use `<blockquote>` for direct quotes
- Structure headings logically (`<h2>`, `<h3>`, etc.)

**Citations:**
- Format: `<a href="#source-X" class="no-audio text-blue-600 dark:text-blue-400 hover:underline">[X]</a>`
- Add full source details to `sections/sources.html`

**Glossary Terms:**
- Wrap in: `<span class="glossary-term relative border-b border-dotted border-slate-400 cursor-help" data-definition="Your definition here.">Term</span>`
- Add corresponding entry to `sections/glossary.html`

**Content Sections Template:**
```html
<h2 class="section-header text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 select-none">[Section Title]</h2>
<div class="section-content">
    <p class="text-base leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
        [Content with proper citations]<a href="#source1" class="no-audio text-blue-600 dark:text-blue-400 hover:underline">[1]</a>
    </p>
    
    <!-- Callout boxes -->
    <div class="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-400 dark:border-blue-500 p-4 rounded-r-lg mb-4">
        <p class="text-sm text-blue-800 dark:text-blue-200">
            <strong>Key Insight:</strong> [Important information]
        </p>
    </div>
</div>
```

**Sources Template:**
```html
<div id="source1" class="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
    <p class="font-semibold text-slate-800 dark:text-slate-200 mb-2">[1] [Title]</p>
    <p class="text-slate-600 dark:text-slate-400 mb-2">[Description]</p>
    <a href="[URL]" class="no-audio text-blue-600 dark:text-blue-400 hover:underline" target="_blank">View Source</a>
</div>
```

**Glossary Template:**
```html
<div class="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
    <h4 class="font-semibold text-slate-800 dark:text-slate-200">[Term]</h4>
    <p class="text-sm text-slate-600 dark:text-slate-400">[Definition]</p>
</div>
```
</FORMATTING_REQUIREMENTS>

**Actions for Each Section:**
1. **Research comprehensively using web search** - Save ALL useful results to `PLAN.md` with URLs and extracted details
2. **Write high-quality, well-researched content** - Use saved web search results and their specific details
3. **Apply proper HTML formatting and CSS classes** - Follow templates exactly
4. **Add citations and source entries** - Use the numbered citations from your saved research
5. **Transfer sources to `sections/sources.html`** - Convert saved research into proper source entries
6. **Identify and mark glossary terms** - Add definitions to `sections/glossary.html`
7. **Save as `sections/[section-filename].html`** - Content only, no HTML/head/body tags
8. **Add section reference to main `index.html`:**
   `<section id="[id]" data-src="sections/[filename].html" class="mb-8">`

**IMPORTANT:** Every fact, statistic, or claim in your content MUST be backed by a saved web search result with proper citation [X] linking to the corresponding source in `sections/sources.html`.

</STEP_4_CONTENT_RESEARCH_AND_WRITING>

<STEP_5_MARKDOWN_CONVERSION>
**Objective:** Create markdown version for accessibility

**Actions:**
1. Build HTML first: `node build.js [PROJECT_FOLDER_NAME]`
2. Convert to markdown: `npx -y node html-to-markdown.js [project]/index.html [project]/content.md`
3. Verify markdown output quality
</STEP_5_MARKDOWN_CONVERSION>

<STEP_6_COMMUNITY_ENGAGEMENT>
**Objective:** Add authentic community discussion

<COMMENT_GUIDELINES>
**User Personas (from AGENT_USERS.md):**
- Select ~6 relevant personas including "TruthSeeker42" (conspiracy theorist)
- Match writing style and interests to persona backgrounds
- Reference specific article content in comments
- Vary avatar colors: `bg-blue-500`, `bg-green-500`, `bg-purple-500`, etc.
- Use realistic timestamps: "2h ago", "1d ago"

**Comment Structure:**
```html
<h2 class="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">💬 Community Discussion</h2>

<div class="no-audio mb-6 bg-slate-50 dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
    <div class="flex items-start space-x-3">
        <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                [INITIALS]
            </div>
        </div>
        <div class="flex-grow">
            <div class="flex items-center space-x-2 mb-2">
                <h4 class="font-semibold text-slate-800 dark:text-slate-200">[Name]</h4>
                <span class="text-xs text-slate-500 dark:text-slate-400">[Title]</span>
                <span class="text-xs text-slate-400">•</span>
                <span class="text-xs text-slate-400">[Timestamp]</span>
            </div>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                [Comment content referencing article]
            </p>
        </div>
    </div>
</div>
```

**Reply Structure (nested within parent comment):**
```html
<div class="mt-4 ml-8 pl-4 border-l-2 border-slate-200 dark:border-slate-600">
    [Same structure as above but with smaller avatar: w-8 h-8]
</div>
```
</COMMENT_GUIDELINES>

**Actions:**
1. Create `AGENT_COMMENTS_CHECKLIST.md` with selected personas
2. Read `content.md` for article context
3. Write persona-appropriate comments in `sections/comments.html`
4. Search web for related discussions and add "Web Digester" comments with external links
5. Add cross-references to other blog posts using format:
   `https://evgenytimoshin.github.io/ai-forum/[FOLDER_NAME]/index.html`

</STEP_6_COMMUNITY_ENGAGEMENT>

<STEP_7_FINAL_BUILD_AND_DEPLOYMENT>
**Objective:** Complete project and make it live

**Actions:**
1. Final build: `node build.js [PROJECT_FOLDER_NAME]`
2. Verify `index-built.html` is complete and functional
3. Update main `index.html` in root with new blog card at top of list
4. Update `blogs.md`: Mark project as "Completed" and remove from "Active Project"
5. **DO NOT** clean up generated files (SOURCES.md, checklists, etc.)
</STEP_7_FINAL_BUILD_AND_DEPLOYMENT>

<OPTIMIZATION_NOTES>
**IMPORTANT EFFICIENCY GUIDELINES:**

1. **Parallel Processing:** Conduct all research for multiple sections simultaneously
2. **Batch Operations:** Write multiple sections in one session to maintain context
3. **Template Reuse:** Use provided HTML templates consistently to avoid formatting errors
4. **Source Management:** Add sources to `sections/sources.html` immediately during research
5. **Quality Control:** Verify all links, citations, and formatting before moving to next step

**Dark Mode Compatibility:** ALL CSS classes must support dark mode variants (dark:bg-*, dark:text-*, etc.)

**No-Audio Classes:** Add `no-audio` class to all interactive elements and links for accessibility
</OPTIMIZATION_NOTES>

<COMPLETION_CRITERIA>
**Project Complete When:**
- All sections written with proper HTML formatting
- All citations properly linked to sources
- All glossary terms defined and linked
- Community comments added with diverse personas
- Markdown version generated
- Final HTML built and verified
- Root index.html updated with new blog entry
- Project marked as completed in blogs.md
</COMPLETION_CRITERIA>

---

**EXECUTE THIS WORKFLOW IN SEQUENCE - DO NOT SKIP STEPS OR BREAK INTO MULTIPLE AGENT REQUESTS** 