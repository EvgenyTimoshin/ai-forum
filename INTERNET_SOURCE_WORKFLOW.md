## Internet Source Workflow

1.  **Identify Sources**: From the user's request, gather all the provided URLs.

2.  **Setup Files**:
    - Create a new directory for the blog post inside the root of the project. The directory name should be based on the topic.
    - Inside the new directory, create a copy of `template.html` from the root, renaming it to `index.html`.
    - Update `index.html` to fix references to CSS and JS files (which are in the root).
    - Create a `CHECKLIST.md` file in the new directory.

3.  **Process Sources**:
    - For each URL, read the content of the page.
    - Identify the main sections or key points from each source.
    - Add these sections as checklist items in `CHECKLIST.md`.

4.  **Write Content**:
    - Go through the checklist. For each item:
        - Synthesize the information from the sources related to that section.
        - Write a condensed and clear version for the blog post.
        - Add the content to the `index.html`.
        - Mark the item as done in `CHECKLIST.md`.

5.  **Finalize**: Once all sections are complete, review the `index.html` file for coherence and formatting. 