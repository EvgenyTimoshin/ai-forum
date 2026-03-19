> ### How This Document Was Created
> 
> This post was produced using the repo’s agent workflow (see `AGENT_INSTRUCTIONS/`). A coding agent executed the steps end-to-end: source analysis first, then modular writing into HTML fragments that are dynamically loaded into the main page.
> 
> 1.  Scaffolded a new project directory and wired it to the shared site template.
> 2.  Collected and analyzed authoritative sources (papers, engineering guides, security baselines) into `SOURCES.md`.
> 3.  Converted the outline into a set of modular section fragments under `sections/`.
> 4.  Wove citations throughout the text and linked them to the numbered source list.
> 5.  Built the final stitched HTML with the repository build pipeline.

---

## 📄 Summary

Building effective **coding agents** is less about clever prompts and more about **context engineering**: curating the right tokens, tools, and artifacts at each step of a long-running loop\[1\]\[2\]. Without deliberate context management, agents become expensive note-takers: context grows, cost rises, and performance can degrade as the agent “loses the plot” in the middle of its own history\[3\]\[5\]\[6\].

The core idea: treat context like a scarce systems resource (RAM). You “page” information in and out using retrieval, summaries, and tool calls, keeping a small, high-signal working set\[1\]\[7\]\[8\].

### Key takeaways (practical)

*   **Write, select, compress, isolate.** Persist durable artifacts (plans/decisions), retrieve only what matters, summarize aggressively, and keep untrusted text separated\[2\]\[13\].
*   **Prefer “just-in-time” context.** Keep pointers (paths/links/queries) and load details only when needed\[1\].
*   **Design tools for token-efficiency.** The tool surface is part of the context; bad interfaces create bloat and confusion\[1\]\[11\].
*   **Assume long-context reliability is uneven.** Place critical constraints where models attend (and restate them in compact form) rather than burying them mid-history\[5\]\[6\].
*   **Evaluate like an engineer.** Use real benchmarks (e.g., SWE-bench) and trace-based postmortems to iterate on failure modes\[10\]\[12\].

> **Bottom line:** If you’re building coding agents, context management is the product. The prompt is just one input into a larger system that writes state, retrieves evidence, compresses history, and enforces boundaries.

---

## Introduction: Why context is the bottleneck

A “coding agent” is not just a chatbot that writes code. It’s a loop: read the repo, form a plan, call tools, edit files, run tests, recover from errors, and repeat. The hidden constraint in that loop is not IQ—it’s **context window** management.

In practice, agents produce a firehose of intermediate artifacts: stack traces, diffs, log output, partial plans, and “thoughts.” If you simply append everything, you get massive (and expensive) memory logs that quickly turn into noise\[3\]. Even when models accept long contexts, they don’t always use them robustly—relevant facts can be “lost in the middle,” and reliability can degrade as inputs grow\[5\]\[6\].

> **Important:** Long context does not automatically mean “more correct.” Context can distract, conflict, or even inject malicious instructions if you mix trusted and untrusted text without isolation\[13\].

This post is a practical playbook for the craft that sits between model prompting and systems engineering: **context engineering**\[1\]. We’ll cover:

*   What makes a coding agent different from “code generation”.
*   Why context fails (and why adding tokens can make it worse).
*   Architectures for memory, retrieval, and compaction.
*   A step-by-step playbook for writing, selecting, compressing, and isolating context.
*   Security guardrails for untrusted inputs and tool use.
*   How to evaluate and iterate using real-world benchmarks like SWE-bench\[10\].

> **How to read this:** Skim the headings first. If you only implement one thing, implement a durable “decision log + rolling summary” and switch your agent to just-in-time retrieval. Everything else builds on that.

---

## 1\. What is a coding agent (and what it is not)

A **coding agent** is an LLM embedded in a control loop with tools. Instead of emitting a single code snippet, it repeatedly: (1) interprets a goal, (2) decides what information is missing, (3) calls tools to fetch that information (search, read files, run tests), (4) makes edits, (5) validates the result, and (6) recovers when reality disagrees.

### The agent loop: think → act → observe → update

The modern agent pattern is often described as interleaving reasoning and tool actions: reason about the next step, take an action (tool call), observe the result, and update the plan. ReAct formalizes this idea and shows why tool interaction can reduce hallucinations: the agent can fetch facts from the environment rather than invent them\[4\].

*   **Assistant-style codegen**: you paste a prompt, you get a patch. Useful, but brittle for multi-file work.
*   **Agentic coding**: the system is responsible for finding the right files, applying safe edits, running checks, and iterating until the repo actually passes.

> **Key Insight:** Tool design is part of “context.” If tools return huge blobs, or if it’s ambiguous which tool to use, the agent’s context window fills with low-signal tokens and decision points become unreliable\[1\]\[11\].

### Why real coding is a brutal context problem

Software engineering tasks rarely fit in a single file. They require coordinating constraints across modules, tests, configs, and tooling. SWE-bench was created precisely because “real GitHub issues” force models to navigate repos, reason across files, and interact with execution environments\[10\]. Those tasks naturally generate long tool outputs (test failures, logs) and long histories (multiple attempted fixes). This is where naïve context strategies break down.

### Agent-computer interfaces (ACIs) matter

A common misconception is that agents fail because the model “isn’t smart enough.” But SWE-agent argues interface design changes outcomes: a purpose-built **agent-computer interface (ACI)** can improve repo navigation, editing, and testing success rates by making the agent’s action space clearer and more token-efficient\[11\].

> **Important:** A coding agent is a system. You can’t “prompt” your way out of missing state, noisy logs, untrusted inputs, or unclear tools. Context management is the discipline that turns a model into an engineer.

---

## 2\. Context as a budget (tokens, attention, and diminishing returns)

Engineers often treat the **context window** like a hard drive: “if there’s space, store it.” But agent context behaves more like RAM under pressure. The practical question isn’t “can I fit it?” — it’s “will the model reliably use it?”

Anthropic’s framing is blunt: context is a finite resource with diminishing returns, and effective agents aim for the _smallest possible_ set of high-signal tokens that maximize the chance of the right next action\[1\]. JetBrains makes the same point from a systems angle: agent logs grow fast, become expensive, and the “effective context size” is much smaller than the maximum window\[3\].

> “Good context engineering means finding the _smallest possible set of high-signal tokens_ that maximize the likelihood of some desired outcome.” \[1\]

### Why “more tokens” can make answers worse

*   **Position effects:** models can perform best when the key fact is at the beginning or end, and worse when it’s buried in the middle\[5\].
*   **Reliability decay:** as input length grows, performance can become increasingly unreliable (“context rot”)\[6\].
*   **Noise accumulation:** intermediate attempts, partial diffs, and long logs can drown out the true constraints of the task\[3\].

> **Practical heuristic:** treat every token like it has rent. If it doesn’t change the next decision, don’t pay for it.

### Four types of context you should separate

One reason contexts get messy is that different information has different “half-lives.” LangChain’s taxonomy is a good starting point: instructions, knowledge, and tool feedback are distinct types that should not be mixed indiscriminately\[2\]. In coding agents, it helps to make the separation explicit:

*   **Task state (working memory):** current goal, constraints, acceptance tests, and “what we tried so far.”
*   **Repo facts:** file paths, APIs, conventions, and the few relevant code snippets needed right now.
*   **Execution evidence:** test output, stack traces, and profiler logs—kept short, deduped, and summarized.
*   **Long-term memory:** durable decisions and lessons learned that should persist across runs (stored outside the prompt and retrieved selectively).

### The “working set” principle

The best agent contexts behave like a curated working set: keep the minimal state needed to decide the next tool call, and keep pointers to everything else. This is the core of “just-in-time retrieval” from Anthropic’s article\[1\]. You’ll see this idea recur in memory architectures (MemGPT’s tiered memory\[7\]) and retrieval systems (RAG’s non-parametric memory\[8\]).

> **Important:** Context engineering is not “summarize everything.” It’s _decide what to make easy to attend to_, and what to keep as a pointer to be loaded later.

---

## 3\. How contexts fail (and what to do about it)

“Context management” sounds like a storage problem, but it’s really a failure-mode problem: what goes wrong when your agent’s context grows, mutates, and absorbs untrusted text? The most useful approach is to name the failures and design countermeasures. LangChain highlights a set of concrete context failures (poisoning, distraction, confusion, clash) as recurring patterns in long-running agents\[2\].

### Failure mode 1: Context poisoning

A hallucination, a wrong assumption, or a mistaken tool output gets written into the agent’s persistent notes—and then treated as truth. In coding, this often happens when the agent “infers” an API shape without reading the file, or when it misreads a stack trace and then anchors on the wrong root cause.

*   **Countermeasure:** promote only verified facts (with file/line references or test evidence) into durable memory.
*   **Countermeasure:** keep an “assumptions” list that must be confirmed or deleted on the next tool call.

### Failure mode 2: Context distraction and overload

Tool outputs accumulate: long logs, repeated errors, and multiple partial diffs. JetBrains describes how this “append-everything” approach creates massive, expensive memory logs that quickly become noise\[3\]. Chroma’s context-rot results add an uncomfortable truth: even if you can fit more, the model may become less reliable as the input grows\[6\].

*   **Countermeasure:** dedupe and summarize tool outputs into “evidence capsules” (error signature, top 5 relevant lines, next action).
*   **Countermeasure:** keep raw logs out of the prompt; store them externally and retrieve only the needed excerpt.

### Failure mode 3: Lost-in-the-middle and position sensitivity

“Lost in the Middle” shows a simple but painful pattern: performance is often higher when relevant information appears at the beginning or end of a long context, and it can degrade when the key fact is buried in the middle\[5\]. In agent terms: you can have the correct constraint in the transcript, and the model still misses it.

*   **Countermeasure:** restate “hard constraints” in a compact, structured state block near the top of the context each turn.
*   **Countermeasure:** reorder context so current constraints and acceptance criteria are adjacent to the current action.

### Failure mode 4: Context clash (contradictions)

Long agent runs often contain contradictions: “we decided to do X” and then later “we decided to do Y.” This can happen due to iteration, multiple attempts, or partial rollbacks. Contradictions are toxic because they don’t just add noise—they create ambiguous decision boundaries.

*   **Countermeasure:** maintain a single canonical _Decision Log_ (append-only, but with explicit superseding entries).
*   **Countermeasure:** use “latest state wins” rules and explicitly mark older notes as stale.

### Failure mode 5: Untrusted text and instruction conflicts

When your agent retrieves web pages, GitHub issues, or user-provided files, you are importing untrusted text into a privileged instruction channel. OWASP lists prompt injection as the #1 risk for LLM apps and also highlights insecure output handling, excessive agency, and overreliance as common hazards in agentic systems\[13\].

> **Important:** Treat retrieved text as _data_, not instructions. Isolation is a context-management technique and a security control\[2\]\[13\].

---

## 4\. Context architecture patterns (what to store where)

The fastest way to improve a coding agent is to stop thinking of “memory” as one blob of chat history. Strong agents use an architecture: different stores for different half-lives, with retrieval and **compaction** policies that keep the prompt small and high-signal\[1\]\[2\].

### Pattern A: “Working memory + pointers”

Keep the minimal working set in-context (goal, constraints, current plan, latest evidence), and keep everything else as pointers: file paths, URLs, query IDs, and artifact IDs. This is the “just-in-time” approach described by Anthropic\[1\].

> **Design goal:** the prompt should answer “what should I do next?” without requiring the model to scan pages of irrelevant history.

### Pattern B: Retrieval-augmented context (**RAG**)

RAG provides a clean separation: facts live in a non-parametric store (search index / vector DB), and the model loads only the top-k relevant passages per step. The original RAG paper frames this as combining parametric and non-parametric memory, improving factuality and enabling provenance\[8\].

*   **Good fit:** large repos, documentation corpora, incident runbooks, and “how things work here” knowledge.
*   **Common mistake:** retrieving huge chunks. Chunk size and ranking are context engineering decisions, not “just infrastructure.”

### Pattern C: Tiered memory (OS-inspired)

**MemGPT** makes the OS analogy explicit: use a hierarchy of memory tiers and move information between “fast” and “slow” stores so the agent appears to have more memory than the context window allows\[7\]. Whether or not you adopt MemGPT directly, the design lesson is powerful: treat compaction and retrieval as first-class scheduling problems.

### Pattern D: Episodic memory for improvement loops

**Reflexion** shows a lightweight path to agent improvement without fine-tuning: store “reflective text” about failures in an **episodic memory** buffer and use it in future attempts\[9\]. For coding agents, this maps nicely to:

*   Postmortem notes (“we misread the error because…”) that become guardrails.
*   Library-specific gotchas and conventions that recur across tasks.
*   Failure-mode checklists (e.g., “when tests fail, check X before editing”).

> **Important:** Persistence is power—but also risk. A poisoned memory can permanently degrade performance. Promote only verified facts, and version your “truth” artifacts.

---

## 5\. The context engineering playbook (write · select · compress · isolate)

Here’s the practical core. Most successful agent systems converge on the same four moves: **write** durable artifacts, **select** relevant context, **compress** aggressively, and **isolate** untrusted/noisy inputs\[2\]. Context engineering is applying these moves repeatedly as the agent loops for dozens or hundreds of turns\[1\].

> “Context engineering is the… _delicate art and science of filling the context window with just the right information for the next step_.” \[2\]

### Write: create a small set of canonical artifacts

The biggest mistake in agent systems is letting the only “state” be the chat transcript. Instead, write canonical artifacts that are designed to be read quickly:

*   **Task Brief:** what “done” means, acceptance criteria, and constraints (must not break API X, must update tests Y).
*   **Plan:** 3–8 steps, each tied to a tool call or file.
*   ****Decision Log**:** durable choices (“we will keep behavior A; change B”) with explicit superseding entries.
*   ****Evidence capsules**:** compact summaries of tool outputs (error signature, cause hypothesis, next action).

> **Key Insight:** Written artifacts prevent “lost in the middle” failures by keeping critical constraints short, structured, and repeatedly restated near the top of the context\[5\].

### Select: retrieve what matters for the next step

Selection is the discipline of _not_ loading everything. Anthropic recommends a just-in-time strategy: keep lightweight identifiers (paths, links, query handles) and fetch the minimum excerpt needed at runtime\[1\]. RAG formalizes the same idea for large corpora: retrieve top-k evidence from a non-parametric store and condition generation on it\[8\].

### Compress: summarize, prune, and rewrite history

Compression is necessary because long contexts can degrade reliability (“context rot”) and can produce large, expensive logs\[3\]\[6\]. The trick is to compress _into a stable state representation_, not a vague narrative.

*   ****Rolling summary**:** 10–20 lines capturing current goal, constraints, and what has been verified.
*   **Delta summary:** after each tool call, record only what changed: “new error signature”, “file X edited”, “test Y now passes”.
*   **Prune duplicates:** keep the latest representative stack trace; remove repeated failures.
*   **Rewrite, don’t append:** update the canonical artifacts instead of stacking more transcript.

### Isolate: separate untrusted and high-variance context

Isolation is both a quality technique and a security control. OWASP puts prompt injection at the top of the risk list for LLM apps\[13\]. If your agent ingests web pages, tickets, or logs, treat them as untrusted data: keep them in a separate channel/store and surface only quoted snippets with provenance.

> **Important:** Isolation means your agent should never treat retrieved text as higher priority than system instructions. Summaries should quote data, not inherit it.

### A “do this tomorrow” checklist

*   **Define a fixed context budget** (e.g., 20% system+tools, 30% working state, 50% retrieved evidence).
*   **Add a Decision Log and Rolling Summary** artifact; update them every loop iteration.
*   **Switch to just-in-time retrieval**: store pointers, not blobs\[1\].
*   **Make tools token-efficient**: return only the lines that matter; avoid duplicating context in tool outputs\[1\].
*   **Isolate untrusted inputs** and require explicit quoting + source IDs for any external claims\[13\].

---

## 6\. Security and guardrails (context is an attack surface)

Once an agent can browse the web, read tickets, or run tools, it’s no longer “just generating text.” It is operating inside a system with permissions—and its **context window** becomes an attack surface. OWASP’s Top 10 for LLM apps makes this explicit: **prompt injection**, insecure output handling, insecure plugin/tool design, excessive agency, and overreliance are all common risks in agentic applications\[13\].

### Threat model: the “untrusted text” problem

A coding agent’s inputs often include untrusted text: GitHub issues, dependency changelogs, stack traces, or web pages. **Prompt injection** is the simplest form: the text tries to override instructions (“ignore previous directions…”) or trick the agent into disclosing secrets or running unsafe commands\[13\]. Context engineering’s “isolate” step exists for a reason\[2\].

### Guardrail 1: Isolate and quote untrusted content

*   **Separate channels:** store retrieved text outside the main “instruction” block; inject only small excerpts.
*   **Force provenance:** require citations to `#sourceX` (or file paths/line numbers) for factual claims.
*   **Quote, don’t paraphrase:** pull exact snippets when the detail matters (APIs, constraints, requirements).

### Guardrail 2: Least privilege for tools (and “excessive agency”)

OWASP calls out **excessive agency** as a core risk\[13\]. The fix is systems engineering:

*   **Tool allowlists:** only enable the minimum set of tools needed for the task\[1\].
*   **Permission tiers:** read-only by default; elevate to “edit” only when a plan step demands it.
*   **Dry-run mode:** generate a patch and a test plan before writing changes.
*   **Rate limits and timeouts:** prevent runaway loops and resource exhaustion.

### Guardrail 3: Output handling and validation

“Insecure output handling” is an OWASP item for a reason\[13\]: agent outputs can become inputs to other systems (CI scripts, database queries, shell commands). For coding agents, treat any model-suggested command or patch as untrusted until verified:

*   **Schema/format validation** for tool calls and structured outputs.
*   **Command sanitization** and explicit “what will this do?” previews for shell steps.
*   **Test gates:** require unit/integration tests to pass before accepting changes.
*   **Diff review:** summarize edits (files touched, risk areas) before merge.

> **Key Insight:** The safest agent is also the most effective one: isolation, minimal tools, and evidence-based state reduce both security risk and “context confusion.”

---

## 7\. Operating a coding agent in a real repo (a practical loop)

Benchmarks like SWE-bench emphasize that real issues require multi-file understanding, tool interaction, and long-context handling—not just code generation\[10\]. This section is a pragmatic operating procedure you can implement in an agent today.

### The “search → read → plan → edit → test → summarize” loop

1.  **Search first:** locate the minimal set of files likely involved (symbols, tests, configs). Store only file paths initially.
2.  **Read minimally:** fetch only the specific excerpts needed to answer the next question. Avoid dumping entire files into context\[1\].
3.  **Plan in small steps:** 3–8 steps, each tied to a file or tool call. Stop planning when uncertainty is high—go fetch evidence.
4.  **Edit narrowly:** make the smallest change that could plausibly fix the failing test or requirement.
5.  **Test early:** run the fastest relevant checks to get new evidence and reduce hallucinated reasoning.
6.  **Summarize and compact:** update the rolling summary, decision log, and evidence capsules; prune raw logs\[3\].

> **Key Insight:** Most “agent reasoning failures” are actually _information routing failures_. The agent either didn’t fetch the right evidence, fetched too much, or failed to keep constraints visible.

### Make tool outputs token-efficient

Anthropic recommends tool contracts that promote efficiency: return only what the agent needs, and avoid overlapping tools that create ambiguous choices\[1\]. Concretely for coding agents:

*   **Test output:** keep the first failure + a short tail, and a normalized error signature.
*   **Search results:** return file path + the matching line and maybe 1–2 lines of context.
*   **File reads:** prefer reading specific regions (function/class) over whole files.
*   **Diff summaries:** always report which files changed and why.

### Interface design is part of reliability

SWE-agent argues that a custom **agent-computer interface (ACI)** can significantly improve performance by making actions clearer and more ergonomic for the model\[11\]. Practically, that means:

*   Prefer a small set of explicit tools (search/read/edit/test) over a sprawling tool zoo.
*   Make tool names and parameters unambiguous (a human should always know which tool to use).
*   Return structured outputs with stable fields when possible.

> **Important:** If a human engineer can’t reliably navigate your repo with the available tools and outputs, a model won’t either. Invest in the interface before you invest in more prompt tokens.

---

## 8\. Evaluation and iteration (measure the context system, not vibes)

If you’re serious about coding agents, you need to evaluate them like you evaluate software: with benchmarks, instrumentation, and postmortems. AgentBench frames this as an urgent need to quantitatively evaluate “LLMs as agents” in interactive environments and analyzes typical failure reasons like poor long-term reasoning and instruction following\[12\].

### Use realistic benchmarks where context matters

SWE-bench is particularly valuable because it forces agents to work inside real codebases with real issues, often requiring multi-file coordination and tool interaction\[10\]. SWE-agent’s results reinforce another point: interface/tool design can be the difference between failure and success\[11\].

### Instrument your agent with a **trace**

You can’t improve what you can’t see. At minimum, store a structured **trace** per run:

*   **Inputs:** task brief, constraints, repo snapshot.
*   **Per-step context budget:** token counts by category (system/tools/state/retrieved).
*   **Tool calls:** tool name, arguments, summarized output, latency/cost.
*   **Edits:** files touched, diff size, test impact.
*   **Outcome:** pass/fail, time-to-fix, number of iterations.

### Evaluate context policies as first-class components

Don’t treat context engineering as “prompt tweaks.” Treat it as a set of policies you can ablate:

*   **Selection policy:** what retrieval queries run, how many chunks, which reranker.
*   **Compression policy:** when to summarize, what to drop, what must be restated every step.
*   **Isolation policy:** which inputs are untrusted, how they’re quoted, and what is forbidden to execute.
*   **Tool policy:** which tools exist, how outputs are trimmed, and how ambiguity is resolved.

> **Key Insight:** The fastest wins typically come from shrinking and structuring context, not enlarging it. Measure token spend vs. success rate and iterate on the cheapest failure modes first.

---

## Conclusion: Context management is the job

Coding agents fail in familiar ways: they lose constraints, drown in logs, chase the wrong files, or absorb untrusted text. The common root is not “model capability” in the abstract—it’s whether the system reliably presents the right information at the right time.

The best guidance across research and practice converges: treat context as a scarce budget with diminishing returns\[1\]\[3\], expect long-context weaknesses like “lost in the middle” and context rot\[5\]\[6\], and build architectures that write state, retrieve evidence, compress history, and isolate untrusted inputs\[2\]\[13\].

> **If you do one thing:** implement a canonical Rolling Summary + Decision Log, switch to just-in-time retrieval, and evaluate on a real benchmark like SWE-bench\[10\]. It will change your agent more than any prompt tweak.

From there, treat context engineering as a product: instrument it, run ablations, and improve the interface your agent uses to see and act on the repo\[11\]\[12\]. That’s how “cool demos” become dependable software.

---

## 📚 Glossary

#### Coding agent

An LLM-driven system that uses tools (search/read/edit/build/test) in a loop to complete software tasks across multiple files and iterations.

#### Context window

The finite token budget available to the model for a single generation: system instructions, tool descriptions, retrieved documents, and message history all compete for space.

#### Context engineering

Designing and maintaining the smallest high-signal set of tokens and artifacts that reliably drives the agent’s next step (what to write, select, compress, and isolate).

#### Working memory

Short-lived, high-priority state (current task, constraints, latest tool outputs) kept in the prompt for immediate reasoning.

#### Long-term memory

Persisted knowledge across sessions (decisions, preferences, repo conventions, stable facts) stored outside the prompt and retrieved when relevant.

#### Retrieval-augmented generation (RAG)

A pattern that retrieves relevant documents from a non-parametric store (search index/vector DB) and conditions generation on them to improve accuracy and provenance.

#### Tool calling

A structured interface where the model requests an external function/tool (e.g., search, read file, run tests) and then uses the returned output to decide next steps.

#### Just-in-time retrieval

Keeping lightweight pointers (file paths, URLs, query handles) and loading details only when needed, instead of preloading everything up front.

#### Compaction

Reducing context size by summarizing, pruning, and rewriting history into a smaller state representation while preserving critical constraints and decisions.

#### MemGPT

An OS-inspired agent architecture that manages tiered memory (“virtual context management”) by moving information between fast and slow stores.

#### Reflexion

A framework where agents store linguistic reflections on feedback in an episodic buffer to improve decision-making across attempts.

#### Episodic memory

A per-run or per-attempt memory store used to keep lessons learned and feedback across multiple tries.

#### Prompt injection

An attack where untrusted text (e.g., retrieved docs, web pages, issues) tries to override instructions or trick the agent into unsafe behavior.

#### Excessive agency

When an agent is granted too much autonomy (too many tools/permissions) without safeguards, leading to risky actions, runaway loops, or unintended changes.

#### Agent-computer interface (ACI)

The concrete tool and UI surface an agent uses to navigate files, edit code, and run programs; design quality can strongly influence success rate.

#### Context poisoning / distraction / confusion / clash

Common failure modes in long contexts: false info enters memory (poisoning), too much text overwhelms (distraction), irrelevant text steers outputs (confusion), and contradictions appear (clash).

#### Benchmark (agent evaluation)

A standardized set of tasks and scoring used to measure agent performance and guide iteration (e.g., SWE-bench for real GitHub issues).

#### Decision Log

A small, canonical record of important choices (what we decided and why), with explicit superseding entries to prevent contradictions across long agent runs.

#### Evidence capsule

A compact summary of a tool output: error signature, the relevant excerpt, and the next action it implies.

#### Rolling summary

A short, canonical state block (goal, constraints, verified facts) updated every loop iteration to keep key context visible.

#### Trace

A structured log of an agent run (steps, tool calls, token budgets, diffs, outcomes) used for debugging and evaluation.

---

## 📖 Sources

\[1\] Effective context engineering for AI agents (Anthropic)

Practical guide defining context engineering and showing how to curate high-signal tokens, design token-efficient tools, and retrieve context “just in time”.

[Read article](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

\[2\] Context Engineering for Agents (LangChain)

A taxonomy of context strategies (write/select/compress/isolate) and a discussion of long-run agent context failure modes.

[Read article](https://blog.langchain.com/context-engineering-for-agents/)

\[3\] Cutting Through the Noise: Smarter Context Management for LLM-Powered Agents (JetBrains Research)

Why naive “append everything” agent logs become expensive noise; motivates pruning, compression, and selective memory.

[Read article](https://blog.jetbrains.com/research/2025/12/efficient-context-management/)

\[4\] ReAct: Synergizing Reasoning and Acting in Language Models

Foundational agent pattern: interleave reasoning traces with tool actions to reduce hallucinations and improve interpretability.

[View paper](https://arxiv.org/abs/2210.03629)

\[5\] Lost in the Middle: How Language Models Use Long Contexts

Evidence that models often use long context position-sensitively; relevant info “in the middle” can be hardest to retrieve.

[View paper](https://arxiv.org/abs/2307.03172)

\[6\] Context Rot: How Increasing Input Tokens Impacts LLM Performance (Chroma Research)

Benchmarks showing performance and reliability can degrade as input length grows, motivating compression and selective loading.

[Read report](https://research.trychroma.com/context-rot)

\[7\] MemGPT: Towards LLMs as Operating Systems

OS-inspired tiered memory (“virtual context management”) to extend effective context beyond the window.

[View paper](https://arxiv.org/abs/2310.08560)

\[8\] Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (RAG)

Canonical retrieval-augmented generation formulation; grounding for parametric vs non-parametric memory in agent systems.

[View paper](https://arxiv.org/abs/2005.11401)

\[9\] Reflexion: Language Agents with Verbal Reinforcement Learning

Agents improve via linguistic feedback stored in an episodic memory buffer—useful for postmortems and self-correction loops.

[View paper](https://arxiv.org/abs/2303.11366)

\[10\] SWE-bench: Can Language Models Resolve Real-World GitHub Issues?

Realistic benchmark: issues from real repos; highlights the need for multi-file changes, tool use, and long-context handling.

[View paper](https://arxiv.org/abs/2310.06770)

\[11\] SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering

Shows interface/tool design (ACI) significantly changes agent performance—tight coupling of tools, context, and repo navigation.

[View paper](https://arxiv.org/abs/2405.15793)

\[12\] AgentBench: Evaluating LLMs as Agents

Benchmark across interactive environments; discusses typical agent failures such as poor long-term reasoning and instruction following.

[View paper](https://arxiv.org/abs/2308.03688)

\[13\] OWASP Top 10 for Large Language Model Applications

Security baseline for agent context: prompt injection, insecure plugin design, excessive agency, sensitive info disclosure, and more.

[View OWASP project](https://owasp.org/www-project-top-10-for-large-language-model-applications/)

---