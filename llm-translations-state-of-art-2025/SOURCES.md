# Sources Analysis: State of the Art in LLM Translations as of 2025

## Primary Academic Sources

### 1. WMT24++: Expanding the Language Coverage of WMT24 to 55 Languages & Dialects
**Source**: arXiv:2502.12404 (February 2025)
**Authors**: Daniel Deutsch, Eleftheria Briakou, et al.
**Key Findings**: 
- Extended WMT24 dataset to cover 55 languages with new human-written references
- LLMs are the best-performing MT systems across all 55 languages
- Covers four domains: literary, news, social, and speech
- Results should be confirmed with human-based evaluation
**Relevance**: Critical for understanding current benchmarking standards and LLM performance across diverse languages

### 2. SSA-COMET: LLMs vs Learned Metrics for African Languages
**Source**: arXiv:2506.04557 (June 2025)
**Authors**: Senyu Li, Jiayi Wang, et al.
**Key Findings**:
- Introduces SSA-MTE dataset with 63,000+ sentence-level annotations for 13 African language pairs
- SSA-COMET models significantly outperform AfriCOMET
- Competitive with Gemini 2.5 Pro, particularly for low-resource languages (Twi, Luo, Yoruba)
- LLMs show promise but specialized models still excel for under-resourced languages
**Relevance**: Demonstrates the ongoing challenges and improvements in low-resource language translation

### 3. Déjà Vu: Multilingual LLM Evaluation through MT Evaluation Lens
**Source**: arXiv:2504.11829 (April 2025)
**Authors**: Julia Kreutzer, Eleftheria Briakou, et al.
**Key Findings**:
- Draws parallels between MT evaluation and multilingual LLM assessment
- Proposes best practices from MT evaluation for mLLM development
- Emphasizes need for transparent reporting standards and reliable evaluations
- Identifies essential components for robust meta-evaluation of mLLMs
**Relevance**: Provides framework for evaluating and improving multilingual LLM capabilities

### 4. Comparative Evaluation of Machine Translation Models Using Social Media Posts
**Source**: ACL Anthology 2025.loresmt-1.1
**Authors**: Shareefa Ahmed Al Amer, Mark G. Lee, Phillip Smith
**Key Findings**:
- Social media informality significantly impacts translation quality
- MarianMT provides closest translations to human for Italian and Spanish (METEOR scores: 0.583, 0.640)
- Google Translate best for Arabic (METEOR score: 0.354)
- 12 percentage point improvement in METEOR scores when translating MSA vs original social media posts
**Relevance**: Highlights challenges of informal text translation and domain-specific performance variations

### 5. AI Language Proficiency Monitor: Tracking LLM Progress
**Source**: arXiv:2507.08538 (July 2025)
**Authors**: David Pomerenke, Jonas Nothnagel, Simon Ostermann
**Key Findings**:
- Comprehensive multilingual benchmark assessing LLM performance across 200 languages
- Focus on low-resource languages with FLORES+, MMLU, GSM8K, TruthfulQA, ARC datasets
- Open-source, auto-updating leaderboard for transparency and progress tracking
- Provides global proficiency mapping and trend analysis
**Relevance**: Essential for understanding current state of multilingual LLM capabilities and progress tracking

## Prompt Engineering and Multilingual Performance

### 6. Cross-Lingual-Thought Prompting for Multilingual Capability
**Source**: arXiv:2305.07004 (May 2023, highly cited)
**Authors**: Haoyang Huang, Tianyi Tang, et al.
**Key Findings**:
- Cross-lingual-thought (XLT) prompting significantly improves multilingual performance
- Over 10 points average improvement in arithmetic reasoning and QA tasks
- Reduces performance gap between average and best performance across languages
- Effective across 27 languages covering high and low-resource scenarios
**Relevance**: Demonstrates practical techniques for improving LLM translation and multilingual reasoning

### 7. Democratizing LLMs for Low-Resource Languages
**Source**: arXiv:2306.11372 (ACL 2024)
**Authors**: Xuan-Phi Nguyen, Sharifah Mahani Aljunied, et al.
**Key Findings**:
- Linguistically-diverse prompts can leverage English-dominant abilities for low-resource languages
- Performance on par with supervised few-shot learning for 13 Indic and 21 African languages
- Fine-tuning 7B model on generated data competitive with 175B model
- Outperforms supervised prompting by up to 3 chrF++ in many low-resource languages
**Relevance**: Shows how to effectively deploy LLMs for under-represented languages

### 8. PolyPrompt: Dynamic Prompt Generation for Multilingual Models
**Source**: arXiv:2502.19756 (February 2025)
**Authors**: Nathan Roll
**Key Findings**:
- Parameter-efficient framework for enhancing multilingual capabilities
- Learns language-specific trigger tokens through gradient-based search
- Accuracy gains of 3.7%-19.9% compared to naive and translation-pipeline baselines
- Tested on ~1 billion parameter models across 15 typologically diverse languages
**Relevance**: Demonstrates cutting-edge approaches to multilingual optimization

## Code-Switching and Mixed Language Processing

### 9. Lost in the Mix: LLM Understanding of Code-Switched Text
**Source**: arXiv:2506.14012 (June 2025)
**Authors**: Amr Mohamed, Yang Zhang, et al.
**Key Findings**:
- Code-switching evaluation of LLM comprehension using CSW variants of benchmarks
- Foreign tokens disrupting English text cause degradation even under linguistic constraints
- Embedding English into other languages often improves comprehension
- Fine-tuning offers more stable path to degradation mitigation than prompting
**Relevance**: Important for real-world multilingual applications where language mixing occurs

### 10. Code-Switching Curriculum Learning for Multilingual Transfer
**Source**: arXiv:2411.02460 (ACL 2025)
**Authors**: Haneul Yoo, Cheonbok Park, et al.
**Key Findings**:
- Progressive training with token-level, sentence-level code-switching, then monolingual corpora
- Significant performance gains compared to monolingual continual pre-training
- Effective for low-resource settings where high-quality monolingual corpora are scarce
- Mitigates spurious correlations between language resources and safety alignment
**Relevance**: Shows how code-switching can improve multilingual transfer learning

## Domain-Specific and Specialized Translation

### 11. LLMs-in-the-loop for Bio-Medical Text Translation
**Source**: arXiv:2407.12126 (July 2024)
**Authors**: Bunyamin Keles, Murat Gunay, Serdar I.Caglar
**Key Findings**:
- Small, specialized models trained on high-quality in-domain data can outperform larger LLMs
- LLMs-in-the-loop methodology with synthetic data generation and agent orchestration
- MarianMT-based models outperform Google Translate, DeepL, and GPT-4-Turbo on medical texts
- Demonstrates importance of domain-specific fine-tuning over general-purpose models
**Relevance**: Shows how specialized approaches can exceed general LLM performance in specific domains

### 12. Baichuan-M1: Medical LLM Capabilities
**Source**: arXiv:2502.12671 (February 2025)
**Authors**: Bingning Wang, Haizhou Zhao, et al.
**Key Findings**:
- Medical-specific LLM trained from scratch rather than continued pre-training
- Trained on 20 trillion tokens with dedicated focus on medical capabilities
- Balances general capabilities (mathematics, coding) with medical expertise
- Open-sourced Baichuan-M1-14B as demonstration model
**Relevance**: Illustrates the development of domain-specific LLMs for specialized translation needs

## Industry Applications and Commercial Deployment

### 13. Intento Analysis: Generative AI for Translation in 2024
**Source**: Medium/Intento Blog
**Authors**: Konstantin Savenkov (CEO Intento)
**Key Findings**:
- LLMs closing quality gap with specialized MT models for general domain translations
- Google's PaLM 2 models showing promising results, ranking highest in general domain
- Traditional MT models still lead in specialized fields (Legal, Healthcare)
- LLMs 20-25x cheaper than traditional MT models but with slower speed
**Relevance**: Provides commercial perspective on LLM vs traditional MT trade-offs

### 14. ChatGPT vs GPT-3 Translation Performance
**Source**: Intento Technical Analysis
**Key Findings**:
- ChatGPT (gpt-3.5-turbo) 10x cheaper than GPT-3 while improving quality
- Reached top tier for English-Spanish translation, matching Google, DeepL, Amazon
- Advanced to second tier for English-German, approaching DeepL's leadership
- Significant improvement in legal and healthcare domains though still behind top engines
**Relevance**: Documents rapid improvement in LLM translation quality and cost-effectiveness

### 15. When GenAI Still Needs Traditional MT
**Source**: Intento Research (February 2024)
**Authors**: Grigory Sapunov (CTO Intento)
**Key Findings**:
- GPT-3.5/4 and Claude excel at multilingual tasks without needing MT intermediation
- For AI21 Jurassic-2, META Llama-2-70b, and Google PaLM-2, MT to English increases accuracy up to 3x
- Using MT enhances weaker models to comparable performance with leading models
- English-first approach reduces critical errors in summarization tasks
**Relevance**: Shows when and why traditional MT still complements LLM capabilities

## Additional Technical Sources

### 16. Language Surgery in Multilingual LLMs
**Source**: arXiv:2506.12450 (June 2025)
**Authors**: Joanito Agili Lopo, Muhammad Ravi Shulthan Habibi, et al.
**Key Findings**:
- Naturally emerging representation alignment in LLM middle layers
- Inference-Time Language Control (ITLC) for precise cross-lingual control
- Strong cross-lingual control while preserving semantic integrity
- Alleviates cross-lingual language confusion problem in large-scale LLMs
**Relevance**: Advanced techniques for controlling and improving multilingual LLM behavior

### 17. Dynamic Learning Strategies for Multilingual Performance
**Source**: arXiv:2305.17740 (COLING 2025)
**Authors**: Somnath Kumar, Vaibhav Balloli, et al.
**Key Findings**:
- Dynamic approach optimizing prompt strategy, embedding model, and LLM per query at runtime
- 10-15% improvements in multilingual performance over pre-trained models
- 4x gains compared to fine-tuned, language-specific models
- Operates efficiently in both offline and online settings
**Relevance**: Shows cutting-edge approaches to runtime optimization for multilingual tasks

## Key Trends and Insights from Analysis

### Technical Advances (2025)
1. **LLM Dominance**: LLMs are now best-performing MT systems across 55+ languages
2. **Specialized Models**: Domain-specific fine-tuning can outperform general large models
3. **Dynamic Optimization**: Runtime adaptation of models and prompts showing significant gains
4. **Code-switching Handling**: Improved techniques for mixed-language content processing

### Quality and Performance
1. **Evaluation Evolution**: Moving beyond BLEU to more sophisticated metrics (COMET, human evaluation)
2. **Domain Variance**: Performance varies significantly across domains (general, medical, legal, social media)
3. **Low-resource Progress**: Significant improvements in under-represented languages
4. **Prompt Engineering**: Cross-lingual and dynamic prompting techniques showing major impact

### Commercial Viability
1. **Cost Reduction**: LLMs now 10-25x cheaper than traditional MT while improving quality
2. **Speed vs Quality**: Trade-offs between faster MT and higher-quality but slower LLMs
3. **Hybrid Approaches**: Combining traditional MT with LLMs for optimal results
4. **Domain Applications**: Specialized models for medical, legal, and technical content

### Challenges Remaining
1. **Evaluation Standards**: Need for consistent, reliable multilingual evaluation frameworks
2. **Data Imbalance**: English dominance in training data still affects multilingual performance
3. **Cultural Adaptation**: Beyond translation to true localization remains challenging
4. **Hallucination Control**: Managing factual accuracy in specialized domains

This comprehensive source analysis provides the foundation for understanding the current state of LLM translations as of 2025, with clear trends toward LLM dominance while highlighting remaining challenges and opportunities for improvement.