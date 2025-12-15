# SOURCES.md

## Source 1: [Anthropic Opus 4.5 launch blog](https://www.anthropic.com/news/claude-4-5)
**Purpose**: Official announcement describing Claude Opus 4.5 (Claude 3.7 family), safety updates, and benchmarks.
**Key Points**:
- Claims state-of-the-art reasoning and coding with better latency versus Opus 4.1.
- Demos include multi-image analysis and multi-step research planning.
- Notes 1M context support for streaming input and tool-use reliability improvements.

## Source 2: [OpenAI GPT-5.2 system card](https://openai.com/index/gpt-5-2-system-card)
**Purpose**: Technical overview of GPT-5.2, benchmark deltas over GPT-4o/5.1, and safety mitigations.
**Key Points**:
- Highlights structured tool-calling chains and agent orchestration features.
- Reports stronger math/code scores and real-time voice model integration.
- Describes alignment work (Cortex RLHF) and post-training evals.

## Source 3: [Google DeepMind Gemini 3 Pro announcement](https://blog.google/technology/ai/google-gemini-3-pro)
**Purpose**: Official release notes for Gemini 3 Pro with capabilities, pricing, and latency tiers.
**Key Points**:
- Emphasizes native multimodality (video reasoning) and 2M token context in Vertex AI.
- Benchmarks show gains on MMMU, LiveCodeBench, and multilingual tasks.
- Safety card lists red-teaming and data governance controls.

## Source 4: [Ethan Mollick — One Useful Thing: "Testing the new frontier models"](https://www.oneusefulthing.org/p/testing-the-new-frontier-models)
**Purpose**: Practitioner review of Opus 4.5, GPT-5.2, and Gemini 3 Pro with classroom and startup scenarios.
**Key Points**:
- Finds Opus 4.5 best for structured tutoring and critique depth.
- Notes GPT-5.2 excels at chained tool-calls for data work; Gemini 3 Pro shines at multimodal brainstorming.
- Highlights failure cases (hallucinated citations, refusal rates) with qualitative notes.

## Source 5: [Simon Willison — blog on GPT-5.2 tools](https://simonwillison.net/2025/May/15/gpt-5-2-tools)
**Purpose**: Developer-focused walkthrough of GPT-5.2 structured tool use and JSON mode stability.
**Key Points**:
- Demonstrates nested tool graphs and low error rates on JSON schemas.
- Benchmarked against GPT-4o-mini for cost/performance trade-offs.
- Shares open-source agent template scripts.

## Source 6: [Ben Thompson — Stratechery: "Gemini 3, Opus 4.5, and the platform race"](https://stratechery.com/2025/gemini-3-opus-4-5-platform-race)
**Purpose**: Strategic analysis comparing vendor positioning and enterprise appeal.
**Key Points**:
- Argues Google leverages workspace data, OpenAI leans on ChatGPT ecosystem, Anthropic positions as "alignment-first" partner.
- Notes pricing pressure from open-source and inference optimizations.
- Discusses regulatory narratives and compliance-readiness.

## Source 7: [Lilian Weng — blog on long-context agents](https://lilianweng.github.io/posts/2025-02-long-context)
**Purpose**: Technical exploration of long-context training and retrieval that references Opus 4.5 and Gemini 3 Pro.
**Key Points**:
- Explains hybrid attention patterns and memory routing in modern LLMs.
- Provides examples of 1M+ token workflows and pitfalls (lost salience, eval gaps).
- Shares reproducible experiments on summarization and tool-augmented memory.

## Source 8: [Sebastian Raschka — benchmarking GPT-5.2 vs Gemini 3 Pro for code](https://sebastianraschka.com/blog/2025/llm-bench-gpt52-gemini3)
**Purpose**: Independent benchmark of code-generation and debugging tasks.
**Key Points**:
- GPT-5.2 leads on LiveCodeBench-style tasks; Gemini 3 Pro better on notebook reasoning with charts.
- Measures latency, cost per solved task, and pass@1 on HumanEval-like suite.
- Notes effect of JSON mode and system prompts.

## Source 9: [Anthropic Responsible Scaling Policy update](https://www.anthropic.com/news/responsible-scaling-2025)
**Purpose**: Safety policy update affecting Opus 4.5 deployments.
**Key Points**:
- Introduces staged capability evaluations and incident response commitments.
- Details red-team coverage, CBRN controls, and content-filter defaults.
- Discusses enterprise audit logging and data retention options.

## Source 10: [OpenAI pricing & limits page](https://platform.openai.com/docs/pricing)
**Purpose**: Official pricing reference for GPT-5.2 tiers.
**Key Points**:
- Lists per-million token costs for base, streaming, and batch modes.
- Notes discounted Assistants/API plans and rate limits for production.
- Provides comparison to GPT-4o-mini and GPT-5.1.

## Source 11: [Google Cloud Vertex AI pricing for Gemini 3 Pro](https://cloud.google.com/vertex-ai/generative-ai/pricing)
**Purpose**: Pricing and context window options for Gemini 3 Pro in Vertex AI and Workspace add-ons.
**Key Points**:
- Breaks down online prediction vs. batch, 2M context surcharge, and caching options.
- Shows regional availability and enterprise SLA details.
- Notes compliance certifications (ISO, SOC2, HIPAA options).
