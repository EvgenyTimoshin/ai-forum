## Source 1: [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
**Purpose**: A highly practical, engineering-focused framing of “context engineering” as the primary work of building reliable agents: token budgeting, context curation, tool design, and “just-in-time” retrieval.

**Key Points**:
- Defines **context engineering** as optimizing “the set of tokens included when sampling” under real model constraints; reframes prompt engineering as a subset of a broader context problem.
- Argues context is a **finite resource with diminishing returns**; adding tokens can reduce focus and increase confusion (“attention budget” framing).
- Describes common agent failure modes from bloated tools and bloated context; recommends minimal viable toolsets and token-efficient tool outputs.
- Advocates “**just in time**” context: keep lightweight identifiers (file paths, links, query handles) and fetch only what’s needed at runtime.
- Emphasizes iterative curation of message history and artifacts as an agent runs for hundreds of turns.

**Notable Quotes / Excerpts**:
- “**Context** refers to the set of tokens included when sampling from a large-language model (LLM). The **engineering** problem at hand is optimizing the utility of those tokens…” (opening section)
- “Good context engineering means finding the **smallest possible set of high-signal tokens** that maximize the likelihood of some desired outcome.” (Anatomy of effective context)

---

## Source 2: [Context Engineering for Agents](https://blog.langchain.com/context-engineering-for-agents/)
**Purpose**: A concrete taxonomy of context-engineering strategies (write/select/compress/isolate) and a practical breakdown of context types (instructions/knowledge/tools) for long-running agents.

**Key Points**:
- “Context engineering” is “the art and science of filling the context window with just the right information at each step.”
- Breaks strategy into actionable buckets: **write** (persist artifacts), **select** (retrieve relevant), **compress** (summarize), **isolate** (separate untrusted/noisy context).
- Highlights long-run problems: exceeding context windows, cost/latency ballooning, and degraded performance.
- Enumerates failure modes (via Breunig): context poisoning/distraction/confusion/clash.

**Notable Quotes / Excerpts**:
- “Agents need context to perform tasks… strategies — **write, select, compress, and isolate** — for context engineering…” (TL;DR)
- Cites Karpathy: “**…delicate art and science of filling the context window with just the right information for the next step.**”

---

## Source 3: [Cutting Through the Noise: Smarter Context Management for LLM-Powered Agents](https://blog.jetbrains.com/research/2025/12/efficient-context-management/)
**Purpose**: Practitioner research perspective on why “append-everything” agent logs become expensive noise, and why effective context is smaller than nominal windows.

**Key Points**:
- Describes how iterative agent logs grow rapidly, driving token costs and risking context-window overflow.
- Argues “effective context size” is much smaller than maximum window; extra tokens become **noise** rather than signal.
- Motivates techniques like summarization, pruning, and selective memory to preserve downstream task performance.

**Notable Quotes / Excerpts**:
- “The agents ‘take notes’ on every generated output, iteratively adding the information to their context; this creates massive – and expensive – memory logs.” (opening)
- “An agent’s effective context size is, in reality, quite small…” (opening)

---

## Source 4: [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629)
**Purpose**: Foundational agent pattern: interleave reasoning traces with tool actions to reduce hallucinations, improve error recovery, and increase interpretability.

**Key Points**:
- Proposes interleaving “reasoning traces” and “task-specific actions,” enabling external information gathering mid-trajectory.
- Reports reduced hallucination/error propagation by interacting with external sources (e.g., Wikipedia API) instead of relying solely on parametric memory.
- Frames a core agent loop: think → act → observe → update plan.

**Notable Quotes / Excerpts**:
- “Generate both reasoning traces and task-specific actions in an interleaved manner…” (abstract)
- “On question answering… ReAct overcomes issues of hallucination and error propagation… by interacting with a simple Wikipedia API…” (abstract)

---

## Source 5: [Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172)
**Purpose**: Empirical evidence that long contexts are not uniformly usable; relevant info in the middle is often hardest to retrieve—critical for “what to keep” decisions.

**Key Points**:
- Shows performance can drop significantly when relevant information is in the **middle** of long context.
- Suggests long-context behavior is position-sensitive even for models marketed as “long-context.”
- Motivates re-ordering, highlighting, indexing, and retrieval over naive appending.

**Notable Quotes / Excerpts**:
- “Performance is often highest when relevant information occurs at the beginning or end… and significantly degrades… in the middle…” (abstract)

---

## Source 6: [Context Rot: How Increasing Input Tokens Impacts LLM Performance](https://research.trychroma.com/context-rot)
**Purpose**: Practical “context rot” framing and benchmarking: as tokens grow, recall/reliability can degrade—reinforces the need for compression and selective loading.

**Key Points**:
- Reports that model performance varies with input length, even on simple tasks; longer input can make outputs **increasingly unreliable**.
- Supports the “attention budget” / diminishing returns view of token stuffing.
- Useful for motivating token budgets, rolling summaries, and retrieval-based architectures.

**Notable Quotes / Excerpts**:
- “Models do not use their context uniformly; instead, their performance grows increasingly unreliable as input length grows.” (executive summary section)

---

## Source 7: [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560)
**Purpose**: A concrete memory architecture for agents: **tiered memory** (fast/slow) and “virtual context management” inspired by OS design.

**Key Points**:
- Introduces “virtual context management” and memory tiers to appear to exceed context windows.
- Targets long documents and multi-session chat with persistent memory and interrupts for control flow.
- Useful conceptual anchor for “working memory vs long-term memory vs external store.”

**Notable Quotes / Excerpts**:
- “We propose virtual context management… inspired from hierarchical memory systems in traditional operating systems…” (abstract)

---

## Source 8: [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (RAG)](https://arxiv.org/abs/2005.11401)
**Purpose**: The canonical retrieval-augmented generation formulation: combine parametric knowledge with non-parametric indexes; provides conceptual grounding for agent retrieval.

**Key Points**:
- Argues models store knowledge in parameters, but precise access/update/provenance are hard; retrieval provides explicit memory + provenance.
- Describes dense retrieval over Wikipedia and generation conditioned on retrieved passages.
- Establishes vocabulary for “parametric vs non-parametric memory.”

**Notable Quotes / Excerpts**:
- “Combine pre-trained parametric and non-parametric memory for language generation.” (abstract)

---

## Source 9: [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366)
**Purpose**: Shows how agents can improve via **linguistic feedback** stored in an episodic memory buffer—relevant for decision logs, postmortems, and self-correction loops.

**Key Points**:
- Learns without weight updates by storing reflections in memory and using them in subsequent attempts.
- Demonstrates improvements across sequential decision-making and coding tasks.
- Motivates storing structured “lessons learned” and feeding them back selectively.

**Notable Quotes / Excerpts**:
- “Maintain their own reflective text in an episodic memory buffer to induce better decision-making…” (abstract)

---

## Source 10: [SWE-bench: Can Language Models Resolve Real-World GitHub Issues?](https://arxiv.org/abs/2310.06770)
**Purpose**: Establishes a realistic benchmark for coding agents; highlights the need for repo navigation, long-context handling, tool use, and cross-file coordination.

**Key Points**:
- Introduces an evaluation of 2,294 real GitHub issues across 12 Python repos.
- Explicitly calls out needs beyond code generation: multi-file reasoning, execution environments, extremely long contexts.
- Provides a “reality check” for agent performance on real-world maintenance work.

**Notable Quotes / Excerpts**:
- “SWE-bench… consisting of **2,294** software engineering problems drawn from real GitHub issues…” (abstract)
- “Resolving issues… requires understanding and coordinating changes across multiple… files… interact with execution environments, process extremely long contexts…” (abstract)

---

## Source 11: [SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering](https://arxiv.org/abs/2405.15793)
**Purpose**: Shows that **interface/tool design** (agent-computer interface) materially changes coding agent performance—ties directly to context management and tool output design.

**Key Points**:
- Positions agents as a new class of “end users” that need purpose-built interfaces, analogous to IDEs for humans.
- Reports improved ability to navigate repos, edit files, and run tests via a custom ACI.
- Reinforces that “context management” isn’t just memory—it’s also *the ergonomics of tool interaction*.

**Notable Quotes / Excerpts**:
- “Interface design affects the performance of language model agents.” (abstract)
- “SWE-agent’s custom agent-computer interface… significantly enhances… navigate entire repositories, and execute tests…” (abstract)

---

## Source 12: [AgentBench: Evaluating LLMs as Agents](https://arxiv.org/abs/2308.03688)
**Purpose**: A broad benchmark for LLM agents in interactive environments; includes analysis of failure causes such as poor long-term reasoning and instruction following.

**Key Points**:
- Multi-environment benchmark aimed at “LLM-as-agent” evaluation.
- Attributes failures to poor long-term reasoning, decision-making, and instruction following—often exacerbated by context bloat/conflict.
- Highlights importance of multi-round alignment and instruction-following for robust agents.

**Notable Quotes / Excerpts**:
- “Urgent need to quantitatively evaluate LLMs as agents on challenging tasks in interactive environments.” (abstract)
- “Poor long-term reasoning, decision-making, and instruction following… main obstacles…” (abstract)

---

## Source 13: [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
**Purpose**: Security baseline for agent context: prompt injection, sensitive data leakage, excessive agency, insecure plugin/tool design—directly informs “isolate and sanitize context.”

**Key Points**:
- Enumerates LLM-specific risks that show up as context-management problems (untrusted text entering context, tool output mishandling, runaway autonomy).
- Especially relevant items for agentic coding systems:
  - **LLM01 Prompt Injection**
  - **LLM06 Sensitive Information Disclosure**
  - **LLM07 Insecure Plugin Design**
  - **LLM08 Excessive Agency**
  - **LLM09 Overreliance**
  - **LLM02 Insecure Output Handling**

**Notable Quotes / Excerpts**:
- The project’s vulnerability list includes: “LLM01: Prompt Injection … LLM08: Excessive Agency … LLM10: Model Theft.” (Top 10 list)

