## STEPS FOR AI AGENT

FIRST Read the README.md alongside this document and understand the assignment.

VERY IMPORTANT: DO ALL OF THE STEPS WITHOUT PAUSE!!!!

All new files created will be alongside the PDF we are working on

1. **Check for existing Markdown** - Look for a .md file with the same name as the PDF in the same directory
   - If markdown exists: Skip to step 2
   - If no markdown: Convert PDF to Markdown using the pdf2md tool, 
   `node lib/pdf2md-cli.js --inputFolderPath=../enhancing-llm-translations-context --outputFolderPath=../enhancing-llm-translations-context`. This needs to run from the pdf2md-master dir. The md file will bse created in the same dir as the pdf.

2. **Check for existing CHECKLIST.md** in the PDF directory
   - If CHECKLIST.md exists: Skip to step 6 and resume from the latest unchecked item
   - If no checklist: Continue to step 4

3. Beside the PDF in the same DIR we want to create a copy of template.html into the PDF dir. Use a copy and rename command into the new dir. Rename this to the pdf name .html

4. Update the JS files and CSS file references in the new html files as they are in a different directory.

5. Create a CHECKLIST.md checklist with all of the headings in the Markdown that we need to cover.

6. Start reading the Markdown version, section at a time. For each section:
    - Update the HTML, adding the condensed sections.
    - Retain the information described in the README.md under section Important Information
    - Mark off the completed section in the CHECKLIST.md

7. Once all sections are complete. Proceed to reading AGENT_COMMENTS_STEPS.md and executing.

