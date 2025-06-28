# SOURCES.md

## Source 1: [Claude 4 Opus & Sonnet Official Docs](https://www.anthropic.com/news/claude-4)
**Purpose**: Official announcement and technical overview of Claude 4 Opus and Sonnet, including capabilities, pricing, and benchmark results.
**Key Points**:
- Opus 4 is Anthropic's most powerful model, excelling at coding, agentic workflows, and long-horizon tasks.
- Sonnet 4 is a high-performance, cost-effective model for everyday use, with strong coding and reasoning.
- Both models support extended thinking, tool use, and have a 200K context window.
- Opus 4: 72.5% on SWE-bench, 43.2% on Terminal-bench; Sonnet 4: 72.7% on SWE-bench.
- Pricing: Opus 4 ($15/$75 per million tokens input/output), Sonnet 4 ($3/$15).
- [Benchmarks appendix](https://www.anthropic.com/news/claude-4#appendix) details methodology.

## Source 2: [Claude 3.7 Sonnet vs 3.5 Sonnet Analysis](https://medium.com/@bernardloki/claude-3-7-sonnet-vs-claude-3-5-sonnet-whats-new-ae06cf8e4522)
**Purpose**: Independent review comparing Claude 3.7 Sonnet and 3.5 Sonnet, with benchmark results and safety analysis.
**Key Points**:
- 3.7 Sonnet improves on 3.5 in reasoning, coding, and safety.
- 3.7 Sonnet: 78.2% GPQA, 62.3% SWE-bench (no extended thinking), 70.3% (with extended thinking).
- Enhanced "appropriate harmlessness" and reduced unnecessary refusals.
- Training data up to Nov 2024 (3.7), April 2024 (3.5).

## Source 3: [OpenAI GPT-4o System Card (arXiv)](https://arxiv.org/html/2410.21276v1)
**Purpose**: Official technical report for GPT-4o, including architecture, training, safety, and benchmarks.
**Key Points**:
- GPT-4o is a multimodal model (text, audio, image, video) with 128K context window.
- Matches GPT-4 Turbo on text/coding, better on vision/audio, faster and 50% cheaper.
- Benchmarks: 90.2% MMLU, 54.6% SWE-bench, 74.8% MMMU, 48.1% AIME 2024.
- Knowledge cutoff: October 2023.
- Safety, red-teaming, and societal impact discussed in detail.

## Source 4: [OpenAI GPT-4.1 Model Overview](https://docsbot.ai/models/gpt-4-1)
**Purpose**: Model card and benchmark summary for GPT-4.1, including pricing and performance.
**Key Points**:
- 1M token context window, 32,768 output tokens.
- $2.00/$8.00 per million input/output tokens.
- Benchmarks: 54.6% SWE-bench, 90.2% MMLU, 66.3% GPQA, 48.1% AIME 2024.
- Released April 2025, knowledge cutoff June 2024.

## Source 5: [OpenAI o3 and o4-mini Model Cards](https://docsbot.ai/models/compare/o3/o4-mini)
**Purpose**: Detailed comparison of o3 and o4-mini, including context window, pricing, and benchmarks.
**Key Points**:
- o3: 200K context, 100K output, $10/$40 per million tokens, 83.3% GPQA, 91.6% AIME 2024, 69.1% SWE-bench.
- o4-mini: 200K context, $1.16/$4.62 per million tokens, 92.7% AIME 2024, 68.1% SWE-bench.
- o3-mini: 200K context, $1.10/$4.40 per million tokens, 86.9% MMLU, 79.7% GPQA, 97.9% MATH, 86.5% HumanEval.

## Source 6: [Gemini 2.5 Pro Official Docs](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-pro)
**Purpose**: Google's official documentation for Gemini 2.5 Pro, including capabilities, benchmarks, and pricing.
**Key Points**:
- 1M token context, multimodal (text, code, images, audio, video).
- Benchmarks: 86.4% GPQA, 88.0% AIME 2025, 69.0% LiveCodeBench, 59.6% SWE-bench.
- $1.25/$10 per million tokens (input/output).
- Released June 2025, knowledge cutoff January 2025.

## Source 7: [DeepSeek-R1 Model Card (HuggingFace)](https://huggingface.co/deepseek-ai/DeepSeek-R1)
**Purpose**: Official model card and technical report for DeepSeek-R1, an open-source reasoning model.
**Key Points**:
- 128K context, 671B parameters (37B active), open-source MIT license.
- Benchmarks: 90.8% MMLU, 79.8% AIME 2024, 65.9% LiveCodeBench, 49.2% SWE-bench.
- Comparable to OpenAI o1-mini, strong in math, code, and reasoning.
- Released January 2025.

## Source 8: [Grok 3 Technical Review (Helicone)](https://www.helicone.ai/blog/grok-3-benchmark-comparison)
**Purpose**: Technical review and benchmark comparison for Grok 3, xAI's latest model.
**Key Points**:
- 1M context window, real-time knowledge, Deep Search, Big Brain mode.
- Benchmarks: 92.7% MMLU, 89.3% GSM8K, 86.5% HumanEval, 94.2% language tasks.
- $3/$15 per million tokens (input/output).
- Released February 2025.

## Source 9: [Claude 3.5 Sonnet Official Docs](https://www.anthropic.com/news/claude-3-5-sonnet)
**Purpose**: Official announcement and technical overview for Claude 3.5 Sonnet.
**Key Points**:
- 200K context, $3/$15 per million tokens.
- Benchmarks: 64% agentic coding, 78.3% MATH-500, 65% GPQA.
- Released June 2024.

## Source 10: [Model Comparison Tables (LLM-Stats, PromptHub, DocsBot)](https://llm-stats.com/models/gemini-2.5-pro-preview-06-05)
**Purpose**: Aggregated benchmark and pricing tables for all major LLMs, including context, cost, and performance.
**Key Points**:
- Provides side-by-side comparison of context window, pricing, and benchmark scores for all models listed.
- Useful for quick reference and cross-model analysis.

---

# Benchmarks and Methodology

## SWE-bench Verified
- Evaluates software engineering capabilities on real GitHub issues.
- Opus 4: 72.5%, Sonnet 4: 72.7%, GPT-4.1: 54.6%, Gemini 2.5 Pro: 59.6%, o3: 69.1%, o4-mini: 68.1%, DeepSeek-R1: 49.2%, Grok 3: ~70% (varies by source).

## GPQA Diamond
- Graduate-level reasoning, science/math focus.
- Opus 4: 83.3%, Sonnet 4: 79.6%, Gemini 2.5 Pro: 86.4%, o3: 83.3%, o4-mini: 81.4%, Grok 3: 89.3%.

## AIME 2024/2025
- Advanced math competition.
- o3: 91.6% (2024), 88.9% (2025), o4-mini: 92.7%, Gemini 2.5 Pro: 88.0%, DeepSeek-R1: 79.8%, Grok 3: 89.3%.

## MMLU
- Multitask language understanding.
- GPT-4.1: 90.2%, o3-mini: 86.9%, DeepSeek-R1: 90.8%, Grok 3: 92.7%.

## LiveCodeBench
- Coding benchmark.
- Gemini 2.5 Pro: 69.0%, DeepSeek-R1: 65.9%, Grok 3: ~70%.

---

# Additional References
- [Claude 4 System Card](https://simonwillison.net/2025/May/25/claude-4-system-prompt/)
- [Gemini 2.5 Pro Model Card](https://deepmind.google/models/gemini/pro/)
- [Grok 3 Comprehensive Analysis](https://bytebridge.medium.com/grok-3-comprehensive-analysis-ac1c6d2302c4)
- [DeepSeek-R1 Release Notes](https://deep-seek.chat/news/deepseek-r1-0528/) 