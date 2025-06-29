# 5. Build and Wrap Up

This document outlines the final steps for completing a blog post project, including building the modular sections into a final HTML file and performing quality checks.

## Workflow


### 1. Build the Final HTML
- **Goal:** Combine all modular sections into a single deployable HTML file.
- **Action:**
    - Navigate to the project root directory (where `build.js` is located)
    - Run the build command:
      ```bash
      node build.js PROJECT_FOLDER_NAME
      ```
    - **Example:** `node build.js rougelike-research-modular`
    - The script will:
        - Read your `index.html` template
        - Load each section fragment from the `sections/` directory
        - Combine them into `index-built.html`
        - Display success messages for each loaded fragment

### 3. Verify the Build
- **Goal:** Ensure the built HTML is complete and functional.
- **Action:**
    - Check that `index-built.html` was created in your project directory

### 5. Documentation Updates
- **Goal:** Update project documentation to reflect completion.
- **Action:**
    - Mark your project as complete in the main `blogs.md` file if applicable.
    - Remove as active projec in blogs.md

### 6. Add references to the main index.html in root of project
  -  Update the main `index.html` at the root by adding a card for the new blog post at the top of the list, link the built one.
  -  Do not clean up any generated files (`SOURCES.md`, checklists, etc.).



### Build Script Usage Reference

The `build.js` script accepts the following:
- **Input:** Project directory name containing `index.html` and `sections/` folder
- **Output:** `index-built.html` in the same directory
- **Features:** 
    - Automatically loads all fragments based on `data-src` attributes
    - Preserves all HTML structure and CSS classes
    - Provides detailed logging of the build process
    - Gracefully handles missing fragments with warnings

### Deployment Ready
Once the build is complete and verified, your `index-built.html` file is ready for deployment to GitHub Pages or any static hosting service.