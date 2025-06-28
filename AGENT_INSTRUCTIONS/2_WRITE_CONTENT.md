## 2. Content Generation

**Goal**: To write the blog post content using a modular approach where each section lives in its own HTML fragment file and is dynamically loaded into the main `index.html`.

### Step 1: Create Directory Structure and Content Checklist

- Create a `sections/` directory in your blog folder to store HTML fragments.
- Based on your `SOURCES.md`, identify the main sections for the blog post.
- Create a `CHECKLIST.md` file with specific content sections:

    ```markdown
    [] Create sections/ directory
    [] prefix-panel.html (how document was created)
    [] summary.html (document summary) 
    [] introduction.html (or section-1.html)
    [] [section-2.html] (Main Topic Section 1)
    [] [section-3.html] (Main Topic Section 2)
    ... N sections
    [] conclusion.html (final section)
    [] glossary.html
    [] sources.html (COMPLETE FIRST)
    [] comments.html (DO NOT COMPLETE FOR ANOTHER AGENT)
    [] Update index.html with section placeholders
    ```

### Step 2: Template Map and Examples

Each section type has a corresponding example in the `section_examples/` directory. Use these as references for structure and styling:

| Section Type | Example File | Description |
|-------------|--------------|-------------|
| Prefix Panel | `section_examples/prefix-panel.html` | Shows how the document was created, methodology |
| Summary | `section_examples/summary.html` | Document overview with glossary terms |
| Content Section | `section_examples/content-section.html` | Main content with headings, lists, callouts |
| Glossary | `section_examples/glossary.html` | Term definitions in grid layout |
| Sources | `section_examples/sources.html` | Reference citations with links |
| Comments | `section_examples/comments.html` | Community discussion format |

Key HTML Components Available:
- Headers (h2, h3)
- Paragraphs with citations
- Unordered and ordered lists
- Callout boxes (blue for insights, amber for warnings)
- Glossary term spans
- Source citations
- Grid layouts
- Dark mode compatible styles

### Step 3: Set Up the Main index.html File

- Use the updated `template.html` as your base for `index.html`.
- The template includes section placeholders with `data-src` attributes that point to fragment files.
- Update the `<title>` and any header content specific to your topic.
- **DO NOT** modify the section placeholders structure - the JavaScript loader depends on this format.


### Step 4: Write Content Fragments

Read the index.html in the blog folder for context

- **Important**: Fragment files contain ONLY the inner content - no `<html>`, `<head>`, or `<body>` tags.
- For each section in your checklist (START WITH SOURCES html):
    1. Create the corresponding `.html` file in the `sections/` directory.
    2. Use the appropriate example from `section_examples/` as a template.
    3. Write condensed, clear, and detailed content using the existing HTML structure patterns.
    4. **Reference `SOURCES.md`** for facts, examples, and quotes.
    5. **Cite your sources** using this format:
        ```html
        <a href="#source1" class="text-blue-600 dark:text-blue-400 hover:underline">[1]</a>
        ```
    6. Use the same CSS classes and structure as the examples for consistency.
    7. Mark the section as done in `CHECKLIST.md` immediately after completing each section

### Step 5: Content Writing Guidelines

1. **Consistency**: Follow the example structures exactly - don't invent new styles.
2. **Dark Mode**: All content must use the dark mode compatible classes.
3. **Citations**: Every fact or claim should have a source citation.
4. **Glossary Terms**: Define important terms using the glossary span format.
5. **Accessibility**: Use semantic HTML and maintain proper heading hierarchy.
6. **Responsiveness**: Test content in both desktop and mobile views.

### Step 6: Quality Checklist

Before marking a section complete, ensure:
- [ ] All source citations are properly linked
- [ ] Glossary terms are properly marked and defined
- [ ] Dark mode styles are included
- [ ] Content follows the example structure
- [ ] No HTML/CSS validation errors
- [ ] All links work correctly