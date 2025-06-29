# Agent Task: 3. Write Section

**Objective:** To write one-quarter of the content for the blog post, based on the master plan, including conducting targeted research for each section and ensuring all sections are correctly formatted and saved.

## Your Workflow:

1.  **Identify Your Assigned Quarter:**
    -   Your task will be in the format `3. Write Section (Q/4)`, where 'Q' is your assigned quarter (1, 2, 3, or 4).
    -   Identify the quarter number you are responsible for. For example, if your task is `3. Write Section (2/4)`, your quarter is 2.

2.  **Determine Your Sections to Write:**
    -   Open and read `PLAN.md` to get the full list of content sections.
    -   Count the total number of sections listed in the plan (e.g., Introduction, Section 1, Section 2, ..., Conclusion). Let's call this `TotalSections`.
    -   Calculate the number of sections per quarter, rounding up to the nearest whole number (ceiling). In PowerShell, this would be `[math]::Ceiling($TotalSections / 4)`. Let's call this `SectionsPerQuarter`.
    -   Calculate the start and end index for your sections. The first section is index 0.
        -   `StartIndex = (YourQuarter - 1) * SectionsPerQuarter`
        -   `EndIndex = (YourQuarter * SectionsPerQuarter) - 1`
    -   Get the list of section titles from `PLAN.md` that fall within your start and end indices. These are the sections you must write.

3.  **For EACH of your assigned sections, perform the following steps:**

    A. **Consult the Plan:**
        -   In `PLAN.md`, navigate to the heading that matches the current section name.
        -   Carefully read the key points and the list of `Potential Sources`. These are your primary guide.

    B. **Conduct Just-in-Time Research:**
        -   This is the primary research phase for your section. Perform comprehensive, targeted web searches to gather information specifically relevant to your current section.
        -   Research should include:
            -   High-quality articles and documentation
            -   Academic papers and research studies when relevant
            -   Statistics, data points, and examples
            -   Direct quotes from authoritative sources
            -   Current and historical context
        -   **Source Management**: As you find valuable sources, add them to `PLAN.md` under the relevant section heading using this format:
            ```markdown
            - [Title of the Article or Page](https://url.com)
                - Bullet pointed extracted information that we can use
                - Key quotes, statistics, examples, numbers
                - Relevant data points and context
            ```
        -   Focus your research on answering the specific questions and covering the key points outlined in `PLAN.md` for this section.

    C. **Write & Format Content:**
        -   Review all gathered source materials to synthesize the information.
        -   Write high-quality, engaging, and well-researched content for the section.
        -   Ensure your writing directly addresses the key points outlined in `PLAN.md` and incorporates your research findings.
        -   Each section should be well-developed and reference multiple sources to provide comprehensive coverage.

    D. **Adhere to Formatting Requirements (Hard Requirement):**
        As you write, you MUST adhere to the following formatting standards:
        -   **Base Template**: Review `root/AGENT_INSTRUCTIONS/section_examples/content-section.html` for an example of a completed section.
        -   **Text Formatting**:
            -   Use `<strong>` or `<b>` tags for bolding.
            -   Use `<em>` or `<i>` tags for italics.
            -   Use `<blockquote>` for direct quotes.
            -   Ensure headings are structured logically (`<h2>`, `<h3>`, etc.).
        -   **Glossary Terms**:
            -   Identify technical terms.
            -   In the section file, wrap the term in a `<span>` for a tooltip: `<span class="glossary-term relative border-b border-dotted border-slate-400 cursor-help" data-definition="Your concise definition here.">The Term</span>`
            -   In `sections/glossary.html`, add the corresponding definition entry.
        -   **Citation**:
            -   Source citations MUST use the format: `<a href="#source-X" class="no-audio text-blue-600 dark:text-blue-400 hover:underline">[X]</a>`, where X is the source number.
            -   You MUST add the full source details to `sections/sources.html`.

    E. **Save Your Work:**
        -   Convert the section title to a filename (e.g., "A Great Section" becomes `a-great-section.html`).
        -   Create a new file in the `sections/` directory with this name.
        -   Save your written HTML content into this file. The file must ONLY contain the section's inner HTML content (no `<html>`, `<head>`, or `<body>` tags).

4.  **Final Step:**
    -   Add the link to this file in the main index.html file e.g <section id="summary" data-src="sections/sectionTitle.html" class="mb-8">
    -   After writing ALL your assigned sections, go to `HIGH_LEVEL_WORKFLOW_CHECKLIST.md`.
    -   Mark your specific task, e.g., `3. Write Section (2/4)`, as complete (`[x]`).
    -   Your task is now finished.