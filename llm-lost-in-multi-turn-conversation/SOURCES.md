## Source 1: [LLMs Get Lost In Multi-Turn Conversation](https://ar5iv.labs.arxiv.org/html/2505.06120)
**Purpose**: This is the primary source for the blog post. It's a research paper that details a large-scale study on the performance of Large Language Models (LLMs) in multi-turn conversational settings versus single-turn instructions. The findings are significant and counter-intuitive to the common perception of LLM capabilities.

**Key Points**:
- **Main Finding**: Top open- and closed-weight LLMs exhibit a significant performance drop in multi-turn conversations compared to single-turn scenarios, with an average degradation of 39%. [Link to text](https://ar5iv.labs.arxiv.org/html/2505.06120#:~:text=Our%20experiments%20confirm%20that%20all,39%25%20across%20six%20generation%20tasks)
- **The "Lost in Conversation" Phenomenon**: The paper introduces this term to describe how LLMs, once they take a wrong turn or make an incorrect assumption early in a conversation, fail to recover. They get "lost". [Link to text](https://ar5iv.labs.arxiv.org/html/2505.06120#:~:text=In%20simpler%20terms%2C%20we%20discover,do%20not%20recover)
- **Aptitude vs. Unreliability**: The performance degradation is broken down into two components: a small loss in 'aptitude' (best-case performance) and a significant increase in 'unreliability' (the gap between best- and worst-case performance). This high unreliability is the main problem in multi-turn settings. [Link to text](https://ar5iv.labs.arxiv.org/html/2505.06120#:~:text=decomposes%20the%20performance%20degradation%20into,and%20a%20significant%20increase%20in%20unreliability)
- **Causes of Failure**: LLMs tend to:
    - Make incorrect assumptions to fill in for missing information in underspecified instructions.
    - Prematurely generate final solutions.
    - Overly rely on their own previous, often incorrect, answers.
- **Sharded Simulation Methodology**: To study this, the researchers developed "sharded simulation". They break down a complex, single-turn instruction into smaller pieces ("shards") that are revealed to the LLM one by one over a conversation, simulating a user gradually clarifying their needs.
- **Example of Sharding**: 
    - **Full Instruction**: "What are the names and locations of the stadiums that had concerts that occurred in both 2014 and 2015?"
    - **Shards Revealed Sequentially**: 
        1. "I'm looking for active stadiums"
        2. "the stadiums should have concerts during a period"
        3. "the concerts should have occurred in both 2014 and 2015"
        4. "for the stadiums, returned both the name and location" 
        [Link to text](https://ar5iv.labs.arxiv.org/html/2505.06120#:~:text=Example%201%3A%20Instruction%3A%20What%20are%20the%20names%20and%20locations%20of%20the%20stadiums%20that%20had%20concerts%20that%20occurred%20in%20both%202014%20and%202015%3F)
- **Universal Problem**: This performance drop isn't limited to one or two models. The study tested 15 LLMs, including top performers like GPT-4.1, Gemini 2.5 Pro, and Llama3.1-8B-Instruct, and found the issue to be universal.
- **Call to Action**: The authors call for the industry to shift focus from just improving single-turn aptitude to also prioritizing and evaluating multi-turn reliability. This is crucial for building more practical and helpful AI assistants for all users, especially novices. 