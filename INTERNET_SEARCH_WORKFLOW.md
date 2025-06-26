## Internet Search Workflow

1.  **Identify Topic**: Understand the core topic the user wants a blog post about.


2.  **Create AGENT_CHECKLIST.md** (High-level progress tracking):
    ```
    [] Research & gather 3-5 high-quality sources
    [] Create detailed SOURCES.md with source analysis
    [] Create CHECKLIST.md with content sections
    [] Write all content sections
    [] Review and finalize index.html
    [] Add sources section to index.html
    ```

3.  **Search & Document Sources**:
    - **Create SOURCES.md** this is where detailed research will be documented.
    - IMPORTANT: BEFORE YOU START SEARCHING SAY THE FOLLOWING: "I will now conduct research by searching the web, when im finished I will imediately go to update the SOURCES.md with my findings"
    - Search the web find relevant articles and sources.
    - Fill in Sources.md with detailed analysis of each source:
    ```markdown
    ## Source 1: [Title](URL)
    **Purpose**: Why this source is valuable for the blog post
    **Key Points**:
    - Important fact/statistic with specific details
    - Interesting examples or case studies
    - Relevant quotes or insights
    
    ## Source 2: [Title](URL)
    ... (repeat for each source)
    ```
    - Mark off research completion in WORKFLOW_CHECKLIST.md

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
        - Reference your SOURCES.md for specific facts/examples        - Write condensed, clear content for the blog post
        - Add content to `index.html`
        - **Reference sources in content** using this format:
        ```html
        <a href="#source1" class="text-blue-600 dark:text-blue-400 hover:underline">[1]</a>
        ```
        - Mark the section as done in CHECKLIST.md after EVERY SECTION WRITTEN!

7.  **Finalize**: 
    - Review `index.html` for coherence and formatting