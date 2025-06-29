# Agent Workflow Orchestration

You are one of several specialized agents collaborating to create a blog post. Your mission is to identify and execute the **single next available step** in the workflow.

**Your First Action: Read `blogs.md` to find the active project directory. Once you identify the active directory, read `PROJECT_GOAL.md`!!!! inside it to understand the project's goals.** This file is the source of truth for what the current project is.

---

## Your Task Execution Flow

1.  **Read `blogs.md` in the root directory.** This file contains the active project's directory.
2.  **Identify the active project directory.**
3.  **All subsequent actions should be performed relative to this directory.**
4.  **Read `HIGH_LEVEL_WORKFLOW_CHECKLIST.md`** inside the project directory.
5.  **Find the first unchecked item**. This is your **only** assigned task.
6.  **Execute the task** by following the instructions in the corresponding document listed below.
7.  **Mark your task as complete** in `HIGH_LEVEL_WORKFLOW_CHECKLIST.md` by changing `[]` to `[x]`.
8.  **Stop.** Another agent will handle the next step.

---

## Task-to-Document Mapping

-   **If your task is `0. Base files setup`**:
    -   Follow the instructions in `AGENT_INSTRUCTIONS/0_BASE_FILE_SETUP.md`.

-   **If your task is `1. Create Content Plan`**:
    -   Follow the instructions in `AGENT_INSTRUCTIONS/1_CREATE_PLAN.md`.

-   **If your task is `2. Preliminary Research`**:
    -   Follow the instructions in `AGENT_INSTRUCTIONS/2_PRELIMINARY_RESEARCH.md`.

-   **If your task is `3. HTML SETUP`**:
    -   Follow the instructions in `AGENT_INSTRUCTIONS/3_3_HTML_SETUP.md.md`.

-   **If your task starts with `4. Write Section`**:
    -   Follow the instructions in `AGENT_INSTRUCTIONS/4_WRITE_SECTION.md`.

-   **If your task is `4.5. Content Editor`**:
    -   Follow the instructions in `AGENT_INSTRUCTIONS/2.5_CONTENT_BLOG_EDITOR.md`.

-   **If your task is `4.6. Markdown Creator`**:
    -   Follow the instructions in `AGENT_INSTRUCTIONS/2.6_MARKDOWN_CREATOR.md`.

-   **If your task is `5. Add Comments`**:
    -   Follow the instructions in `AGENT_INSTRUCTIONS/3_ADD_COMMENTS.md`.

-   **If your task is `6. Add Discussion`**:
    -   Follow the instructions in `AGENT_INSTRUCTIONS/4_AGENT_DISCUSSIONS.md`.

-   **If your task is `7. Build and wrap up`**:
     -   Follow the instructions in `AGENT_INSTRUCTIONS/5_BUILD_AND_WRAP_UP.md`.

-   **If your task is `8. Audio post process`**:
     -   Follow the instructions in `AGENT_INSTRUCTIONS/6_AUDIO_POST_PROCESS.md`

-   **If your task is `9. Add audio player`**:
     -   Follow the instructions in `AGENT_INSTRUCTIONS/7_ADD_AUDIO_PLAYER.md`
   

-   **For the PDF Workflow**:
    -   Follow the instructions in `AGENT_INSTRUCTIONS/PDF_WORKFLOW.md`.


For the PDF Workflow:
-   Follow the instructions in `AGENT_INSTRUCTIONS/PDF_WORKFLOW.md`.

**A Note on Specialization:** You are a specialized agent. **Only perform your designated task.** Do not proceed to the next step.

**AT THE END OF YOUR WORKFLOW** Update the high level workflow checklist

AT THE END OF YOUR TASK TO STOP EXECUTING AND EXIT.