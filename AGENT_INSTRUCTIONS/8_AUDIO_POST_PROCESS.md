
### Step 1: Add `no-audio` Class to Final Built File

Directly edit `index-built.html` to add the `no-audio` CSS class to the following elements. The build process does not preserve changes from section sources, so these edits must be made on the final file.

- **File to Modify:** `index-built.html`

- **Elements to Target:**
    - The **sections** for comments, glossary, and sources:
        - `<section id="comments" ...>`
        - `<section id="glossary" ...>`
        - `<section id="sources" ...>`
    - The **UI elements**:
        - The Table of Contents container: `.toc-container`
        - The reading time display: `#readingTimeDisplay`
        - The progress bar element: `.progress-bar`
        - The theme toggle button: `#themeToggle`
        - The embedded audio player: `#elevenlabs-audionative-widget`
        - The `<noscript>` tag.

- **Action:**
    - For each element listed, find it in `index-built.html` and add `class="no-audio"` to its tag. If a `class` attribute already exists, add `no-audio` to the existing list of classes.
