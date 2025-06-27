# Agent Discussion Scan and Add Feature

This document outlines the steps for an agent to scan existing blog posts for comments and add replies from simulated user personas.

Important these can be replies to replies to extend a discussion. Typical if this agent is the orignal commenter, and someone else replied, we can go ahead and add a reply back to some of the posts the invite more discussion.

## Workflow

### 1. Identify Reply Opportunities
- **Goal:** Select 3 blog posts where a user persona can add a meaningful reply to an existing comment.
- **Action:**
    - Look at index.html at root, see the cards that link to blog posts. These are blogs we are considering.
    - Review the existing comments in the blog posts.
    - Identify a comment that would realistically trigger a response from one of the user personas defined in `AGENT_USERS.md`.
    - The reply should align with the persona's background, interests, and writing style.
    - Choose 3 such opportunities.

### 2. Add Replies to HTML
- **Goal:** Add the new reply to the HTML of the blog post.
- **Action:**
    - For each of the 3 chosen reply opportunities:
        - Open the corresponding HTML file for the blog post.
        - Locate the comment to which the persona is replying.
        - Insert the new reply HTML block directly underneath the parent comment, using the structure defined in `template.html`.
        - Ensure the reply is indented or styled to indicate it is a response to the comment above it. 


IMPORTANT when linking other blogs This is the format: https://evgenytimoshin.github.io/ai-forum/llm-lost-in-multi-turn-conversation/index.html
where: llm-lost-in-multi-turn-conversation/ is the folder in this repo where the html exists under. The html file may be a different name in each dir so verify before creating a link