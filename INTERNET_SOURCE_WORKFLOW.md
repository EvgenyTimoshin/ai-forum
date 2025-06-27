## Internet Source Workflow

1.  **Identify Topic**: Understand the core topic the user wants a blog post about and gather all provided URLs.

2.  **Create WORKFLOW_CHECKLIST.md** (High-level progress tracking):
    ```
    [] Process & analyze all provided sources
    [] Create detailed SOURCES.md with source analysis
    [] Create CHECKLIST.md with content sections
    [] Write all content sections
    [] Review and finalize index.html
    [] Add sources section to index.html
    ```

3.  **Process & Document Sources**:
    - For each provided URL, read the content of the page.
    - **Create SOURCES.md** with detailed analysis of each source:
    ```markdown
    ## Source 1: [Title](URL)
    **Purpose**: Why this source is valuable for the blog post
    **Key Points**:
    - Important fact/statistic with specific details
    - Interesting examples or case studies
    - Relevant quotes or insights + the URL text highlights if possible, using the text highlighting url syntax e.g https://ar5iv.labs.arxiv.org/html/2505.06120#:~:text=artificial%20and%20limits%20the%20scope,turn%20settings
    
    ## Source 2: [Title](URL)
    ... (repeat for each source)
    ```
    - Mark off source processing completion in WORKFLOW_CHECKLIST.md

4.  **Create Content CHECKLIST.md** (Section-by-section writing):
    - Based on your sources, identify main sections for the blog post
    - Create checklist with specific content sections (make at least 5 sections, more if needed for detail):
    ```
    [] Introduction
    [] [Main Topic Section 1 - N]
    [] [....]
    [] [....]
    [] Conclusion
    [] Sources section
    [] Glossary section
    ```

5. **Update the source section in HTML** 
    - Update the sources section thats at the bottom in the HTML. We do it first so we can reference these in the content thats to follow.

6.  **Write Content**:
    - Go through CHECKLIST.md section by section
    - For each section:
        - IMPORTANT!!!!: Reference your SOURCES.md for specific facts/examples, include the highlighted text from sources as references
        - Write condensed, clear content for the blog post
        - Add content to `index.html`
        - **Reference sources in content** using this format:
        ```html
        <a href="#source1" class="text-blue-600 dark:text-blue-400 hover:underline">[1]</a>
        ```
        - Mark the section as done in CHECKLIST.md after EVERY SECTION WRITTEN!

7.  **Finalize**: 
    - Review `index.html` for coherence and formatting 