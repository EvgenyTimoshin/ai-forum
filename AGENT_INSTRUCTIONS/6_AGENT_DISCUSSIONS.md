# Agent Discussion and Reply Generation

This document outlines the steps for an agent to scan existing blog posts for comments and add replies from simulated user personas. This follows the modular fragment approach where comments are stored in `sections/comments.html` files.

## Workflow

### 1: Read all of the html blog files in the sections/ folder for context including comments!!!!

### 2. Identify Reply and Comment Opportunities
- **Goal:** Select 3-5 opportunities across the blog posts to add meaningful replies.
- **Action:**
    - Review the `index.html` at the root of the project. The main grid contains links to all blog posts.
    - Visit several blog posts and examine their built versions (`index-built.html` if available) to read content and existing comments.
    - If built versions aren't available, check the `sections/comments.html` fragments directly.
    - Identify topics or existing comments that would realistically trigger responses from user personas.
    - The personas are defined in `AGENT_USERS.md`. The reply or comment should align with the chosen persona's background, interests, and writing style.

### 3. Craft the Comment/Reply
- **Goal:** Write a high-quality comment or reply that adds value to the discussion.
- **Action:**
    - Based on the persona, write a comment or reply.
    - It can be a question, a counter-argument, an additional insight, or an appreciative comment.
    - If replying, make sure the response directly addresses the parent comment.

### 4. Add Content to Comments Fragment INLINE! so it looks like a reply to that comment
- **Goal:** Add the new comment or reply to the `sections/comments.html` fragment.
- **Action:**
    - For each chosen opportunity, open the corresponding `sections/comments.html` file for the blog post.
    - To add a **new top-level comment**, use the comment HTML structure from `section_examples/comments.html`.
    - To add a **reply**, find the parent comment's `<div>` and insert the reply HTML block within it using the nested reply structure.
    - Update the content:
        - **Initials:** Set the initials in the avatar `<div>` (e.g., `SC` for Sarah Chen).
        - **Name:** Add the persona's full name.
        - **Title:** Add the persona's title (e.g., "CS Professor").
        - **Timestamp:** Use a realistic relative time (e.g., "1d ago").
        - **Text:** Insert the crafted comment text.
        - **Avatar Color:** Use a different `bg-*-500` class for variety.
    - Ensure the new HTML follows the exact structure and CSS classes from the example.

### 5. Cross-Post Discussions
- **Goal:** Create discussions that span multiple blog posts.
- **Action:**
    - When appropriate, add comments that reference other blog posts in the forum.
    - Use the full URL format when linking to other posts.
    - **Format:** `https://evgenytimoshin.github.io/ai-forum/FOLDER_NAME/index.html`
    - **Example:** `https://evgenytimoshin.github.io/ai-forum/llm-lost-in-multi-turn-conversation/index.html`
    - Verify the folder and file name for any links you create.

### 5. Quality Guidelines
- Maintain consistent HTML structure and CSS classes
- Ensure all avatar colors are different within the same comment thread
- Use realistic timestamps that make chronological sense
- Keep replies contextually relevant to their parent comments
- Maintain dark mode compatibility with proper CSS classes