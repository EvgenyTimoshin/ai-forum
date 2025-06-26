# Internet Source Workflow

## RULE: One source processing session, then write. NO LOOPS.

### Phase 1: Process Sources (Do Once)
1. **List all URLs** provided by user
2. **Mark in checklist**: "Started processing [X] provided sources"
3. **Perform ONE source processing session**:
   - Process each provided URL/source
   - Immediately record each source as: `[URL] - [Brief description] - [How I'll use this]`
   - For each source there lets take the synthesized information from there and quote it directly at each source. Multiple quotes / sections are appropriate, exactly as is in the original.
   - Process all provided sources (no maximum limit since user provided them)
4. **If source access fails**: Write "Source access encountered issues for [URL], proceeding with available sources" in checklist
5. **Mark in checklist**: "Source processing complete - processed [X] sources" 
6. **STOP PROCESSING** - Move to Phase 2

### Phase 2: Plan Content
1. Create content outline based on sources processed
2. Add each major section to `CHECKLIST.md` as:
   ```
   [] Introduction
   [] [Section 1 name]
   [] [Section 2 name]
   [] ...
   [] Sources section
   ```

### Phase 3:
1. Fill out the Sources section first it will be in the same place in the template as is, at the bottom. 
note: We want it for context, You will be basing the content of the information you obtained from the sources with references.

### Phase 4: Write Content
1. For each section in checklist:
   - Write content for that section (you can be creative. Not every sentence has to be referencing the sources)
   - Add sources references in the content itself where appropriate! Link to the sources that were provided.
   - Add to `index.html`
   - Check off in `CHECKLIST.md`
   - Move to next section
2. Add Sources section listing all URLs used
3. Mark "Writing completed" in WORKFLOW_CHECKLIST.md

**CRITICAL**: Never return to Phase 1. No additional source processing allowed. 