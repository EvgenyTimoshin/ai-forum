# Agent Task: 4. Write Section

**Objective:** To write the content for a specific section of the blog post, based on the master plan, ensuring it is correctly formatted.

## Your Workflow:

1.  **Identify Your Assigned Section:**
    -   Your task in `HIGH_LEVEL_WORKFLOW_CHECKLIST.md` will be formatted as `4. Write Section: [Section Name]`.
    -   Identify the specific **[Section Name]** you are responsible for (e.g., "Introduction", "The Core of AI", "Conclusion").

2.  **Consult the Plan:**
    -   Open `PLAN.md`.
    -   Navigate to the heading that matches your assigned section name.
    -   Carefully read the key points and the list of `Potential Sources` for your section. These are your primary guide.

2.5 **FINAL RESEARCH**
     -   Perform additional, tightly-focused web searches to answer specific questions or find more data points!!!
    -   **Crucially, if you use any new sources not already in `PLAN.md`, you must add them at this point. Under the relevant section**

3.  **Conduct Final Research, Write & Format:**
    -   Review the provided source articles to gather the necessary information.
    -   Write the content for your section. It must be high-quality, engaging, and well-researched.
    -   Ensure your writing directly addresses the key points outlined in the plan and from the sources/
    -   Write alot, ideally each section should have at LEAST several sources.

    ### Formatting Requirements (Hard Requirement):
    As you write, you MUST adhere to the following formatting standards:

    - **Base template**
        - root/AGENT_INSTRUCTIONS/section_examples/content-section.html is an example of how a section may look

    -   **Text Formatting**:
        -   Use `<strong>` or `<b>` tags to bold key terms, important phrases, or sentences that require emphasis.
        -   Use `<em>` or `<i>` tags for italics.
        -   Use `<blockquote>` for direct quotes from sources.
        -   Ensure headings are structured logically (`<h2>`, `<h3>`, etc.).
        - BEAUTIFUL AND MINIMAL
        
    - **Glossary Terms**:
        -   Identify technical or specialized terms a general audience may not know.
        -   **In the section file**: Wrap the term in a `<span>` for a hover-over tooltip:
            ```html
            <span class="glossary-term relative border-b border-dotted border-slate-400 cursor-help" data-definition="Your concise definition here.">The Term</span>
            ```
        -   **In `sections/glossary.html`**: Add a corresponding definition:
            ```html
            <div class="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                <h4 class="font-semibold text-slate-800 dark:text-slate-200">The Term</h4>
                <p class="text-sm text-slate-600 dark:text-slate-400">Your concise definition here.</p>
            </div>
            ```
        -- IMPORTANT: update the glossary.html with terms that you highlighted
        
    - **Citation**:
        -  Source citations MUST use the proper format: `<a href="#source1" class="no-audio text-blue-600 dark:text-blue-400 hover:underline">[1]</a>`. The number should correspond to the source's position in `sections/sources.html`. 
        - IMPORTANT: update the sources.html file with your citations added for this section!

4.  **Save Your Work:**
    -   Create converting the section name to lowercase and replacing spaces with hyphens (e.g., "Section Title" becomes `section-title.html`).
    -   If it has example content clear all the example shit
    -   Save your new written HTML content into a new file within the `sections/` directory (e.g., `sections/section-title.html`).
    -   Your fragment file must contain ONLY the inner content (no `<html>`, `<head>`, or `<body>` tags).

5.  **Final Step:**
    -   Mark your specific task, `4. Write Section: [Section Name]`, as complete (`[x]`) in `HIGH_LEVEL_WORKFLOW_CHECKLIST.md`.
    -   Make sure its in index.html as a data source reference <section id="section-title" data-src="sections/section-title.html" class="mb-8">