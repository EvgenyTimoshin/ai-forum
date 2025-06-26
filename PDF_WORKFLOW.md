## PDF Conversion Workflow

**Prerequisite**: You are in the directory containing the PDF to be processed.

VERY IMPORTANT: DO ALL OF THE STEPS WITHOUT PAUSE!!!!

All new files created will be alongside the PDF we are working on.

1.  **Check for existing Markdown** - Look for a `.md` file with the same name as the PDF in the same directory.
    -   If markdown exists: Skip to step 2.
    -   If no markdown: Convert PDF to Markdown using the `pdf2md` tool. Example command (run from `pdf2md-master` directory): `node lib/pdf2md-cli.js --inputFolderPath=../<pdf_directory> --outputFolderPath=../<pdf_directory>`. The `.md` file will be created in the same directory as the PDF.

2.  **Check for existing `CHECKLIST.md`** in the PDF directory.
    -   If `CHECKLIST.md` exists: Skip to step 6 and resume from the latest unchecked item.
    -   If no checklist: Continue to step 3.

3.  Beside the PDF in the same directory, create a copy of `template.html` into the PDF directory. Rename this to the PDF name `.html`.

4.  Update the JS and CSS file references in the new HTML file as they are in a different directory.

5.  Create a `CHECKLIST.md` with all of the headings from the Markdown file.

6.  Start reading the Markdown version, section at a time. For each section:
    -   Update the HTML, adding the condensed sections.
    -   Retain the information described in the `README.md` under section "Important Information".
    -   Mark off the completed section in `CHECKLIST.md`.

7.  Once all sections are complete, the workflow is done.

