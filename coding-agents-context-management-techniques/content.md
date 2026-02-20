> Built from primary papers, practitioner engineering guidance, and security baselines. Drafted into modular HTML fragments under `sections/` and stitched by the repo’s HTML loader.
>
> Sources include Anthropic, LangChain, JetBrains Research, OWASP, and multiple agent/coding benchmarks and papers.[1][2][3][10][11][13]

---

## Executive Summary

Coding agents live or die on **context management**. As agents run for many steps, their prompts accumulate logs, partial plans, diffs, and tool outputs. This can exceed context windows, increase costs, and—crucially—reduce reliability: models often fail to use long context uniformly, and key constraints can be “lost in the middle.”[3][5][6]

The practical discipline that fixes this is **context engineering**: curating the smallest high-signal working set, writing durable state artifacts, retrieving evidence just in time, compressing history, and isolating untrusted text.[1][2][13]

---

## 1) What is a coding agent (and what it is not)

A **coding agent** is an LLM in a tool-using loop: search, read, edit, run tests, and iterate until the repository passes real checks. This differs from one-shot code generation because success depends on interacting with the environment and recovering from errors.

ReAct provides a canonical pattern for this: interleave reasoning and actions so the agent can fetch external information mid-trajectory and reduce hallucinations.[4]

Benchmarks like SWE-bench show why this is hard: real GitHub issues require multi-file coordination and long-running interactions with execution environments.[10]

---

## 2) Context as a budget (tokens, attention, diminishing returns)

Context is not free storage. It’s a finite budget with diminishing returns.[1] Teams that “append everything” create massive logs that become expensive noise.[3] Longer contexts can also be position-sensitive: performance is often best when relevant information is near the beginning or end, and worse when it is buried in the middle.[5]

Chroma’s “context rot” framing reinforces the same takeaway: reliability can degrade as input length grows, even on simple tasks.[6]

---

## 3) How contexts fail (and what to do about it)

Long-running agent contexts fail in predictable ways:[2]

- **Context poisoning**: false assumptions become “memory.”
- **Distraction/overload**: noisy logs drown out constraints.[3]
- **Lost-in-the-middle**: key facts exist in context but are not retrieved/used.[5]
- **Clash**: contradictions appear across iterations.
- **Injection**: untrusted retrieved text conflicts with instructions—OWASP lists prompt injection as a top risk.[13]

Countermeasures include durable state artifacts (rolling summary + decision log), deduped “evidence capsules,” and strict isolation of untrusted content.[1][2][13]

---

## 4) Context architecture patterns (what to store where)

Strong systems separate memory by half-life:

- **Working memory**: small, high-signal state for next action.
- **External evidence stores**: logs and artifacts kept out of the prompt and fetched by pointer.
- **Retrieval**: RAG-style selection of top-k relevant passages for grounding.[8]
- **Tiered memory**: OS-inspired paging between fast/slow stores (MemGPT).[7]
- **Episodic lessons**: reflective notes used for improvement loops (Reflexion).[9]

---

## 5) The context engineering playbook (write · select · compress · isolate)

The practical recipe:[1][2]

1. **Write** canonical artifacts (task brief, plan, decision log, evidence capsules).
2. **Select** context just in time (pointers first, excerpts later).[1]
3. **Compress** (rolling summaries, delta summaries, pruning duplicates).[3][6]
4. **Isolate** untrusted content (quote + provenance; don’t let retrieved text become instructions).[13]

---

## 6) Security and guardrails (context is an attack surface)

OWASP highlights prompt injection, insecure output handling, insecure plugin design, excessive agency, and overreliance.[13] For coding agents this maps to:

- Least-privilege tools and permission tiers.
- Strict quoting/provenance for external text.
- Output validation and “dry-run” previews for shell actions.
- Test gates + diff summaries before acceptance.

---

## 7) Operating a coding agent in a real repo

SWE-agent emphasizes that interface/tool design materially affects performance: clear, token-efficient tools and repo navigation primitives can significantly improve outcomes.[11]

A practical loop is: search → minimal read → plan → narrow edit → test → summarize/compact.[1][3][10]

---

## 8) Evaluation and iteration

Measure the context system, not vibes:

- Evaluate on realistic tasks (SWE-bench).[10]
- Use agent benchmarks (AgentBench) and analyze failures (reasoning, decision-making, instruction-following).[12]
- Instrument traces: token budget by category, tool-call logs, diff sizes, and time-to-fix.

---

## Conclusion

The prompt is not the product. **Context management is the job**: design memory architecture, retrieval, compaction, and isolation policies; instrument them; and iterate against real benchmarks.[1][2][10][13]

