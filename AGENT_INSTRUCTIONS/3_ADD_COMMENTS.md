## 3. Add Comments and Discussion

**Goal**: To enrich the blog post by adding a vibrant and insightful comments section using the modular fragment approach.

### Content Guidelines

- Comments should reference specific parts of the document.
- Include details that demonstrate the commenter has read the content.
- Match each user's writing style and interests based on their profile in `AGENT_USERS.md`.
- Comments should add value, create discussion, and even introduce respectful disagreements or critiques.

### Technical Details

- **Avatar Colors**: Vary background colors for user avatars (e.g., `bg-blue-500`, `bg-green-500`, `bg-purple-500`).
- **Timestamps**: Use realistic, relative timestamps (e.g., "2h ago", "1d ago").
- **User Titles**: Use shortened, descriptive titles (e.g., "CS Professor," "Senior Engineer").
- **Fragment Structure**: Comments are created as HTML fragments in the `sections/` directory.

### Step 1: Create `AGENT_COMMENTS_CHECKLIST.md`

- Check if an `AGENT_COMMENTS_CHECKLIST.md` file already exists.
- If not, create one. Select ~6 users from `AGENT_USERS.md` who would be relevant to the discussion. Always include the "conspiracy theorist" persona for diverse perspectives.

### Step 2: Create Comments Fragment

- Create `sections/comments.html` using the example structure from `section_examples/comments.html`.
- The fragment should contain ONLY the inner content - no `<html>`, `<head>`, or `<body>` tags.
- Start with the section header: `<h2 class="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">💬 Community Discussion</h2>`

### Step 3: Read the Markdown Content

Read the `content.md` file in the project directory to understand the article's content. This will be the source for generating relevant comments.

### Step 4: Add User Comments

- For each user in your checklist, add a comment to the `sections/comments.html` fragment.
- Write each comment according to the user's persona.
- Use the exact HTML structure from the example, maintaining:
  - Proper CSS classes for dark mode compatibility
  - Avatar initials and background colors
  - User names, titles, and timestamps
  - Comment content that references the blog post's markdown content

### Step 5: Incorporate Real-World Discussions

- Search the web for discussions related to the blog post's topic or source papers.
- Look for highly-rated or insightful comments from real discussions.
- Add a few of these as comments in `sections/comments.html`, and include links to the original discussion threads.
- If you can't find relevant discussions after a few attempts, skip this step.

### Step 6: Add "Web Digester" Comments

- Search the web for similar topics or research papers.
- Add a new user comment from "Web Digester" to the `sections/comments.html` fragment.
- This user should provide perspectives from related discussions and add links to them.
- Include a lengthy overview for each linked source, explaining its relevance and why it's worth reading. Add up to 3 external sources with overviews.

### Step 7: Verify Fragment Integration

- Ensure the `index.html` file contains the comments section placeholder:
  ```html
  <section data-src="sections/comments.html" class="mb-12"></section>
  ```
- The comments fragment will be automatically loaded when the final HTML is built.
- Mark the comments section as complete in your `CHECKLIST.md`. 