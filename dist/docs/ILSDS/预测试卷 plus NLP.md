---
title: 预测试卷 plus NLP
slug: QRiFwuy0liWXaGk5KDqcgG4dnYf/INaXwzIW7irXiqklxCacH6wsnyg
sidebar_position: 4
---


# 预测试卷 plus NLP

当然可以，云雁。你对老师的判断非常准确：<b>这一章（Introduction to NLP）一定是“理解型考试”，不会考死记硬背，而是考你是否真正理解 NLP 的核心概念、流程、模型差异、embedding 原理、Transformer 的机制等。</b>

我给你准备一份<b>高质量、覆盖所有核心概念、完全贴合 PPT 内容、考试风格的预测题 + 标准答案</b>。  

题目类型包括：<b>概念解释、对比题、应用题、理解判断题、流程题、模型机制题</b>——这是最符合 ILSDS 风格的。

下面开始。

---

# <b>《Introduction to NLP》考试题预测 + 标准答案（高质量版）</b>

---

# <b>Part 1 — 核心概念理解题（必考）</b>

---

## <b>Q1. Define Natural Language Processing (NLP). What is its main goal?</b>

### <b>Standard Answer</b>

NLP is a branch of Artificial Intelligence that enables machines to understand, interpret, and generate human language.  

Its main goal is to bridge the gap between <b>unstructured human language</b> and <b>structured machine-readable representations</b>, allowing computers to extract insights and perform tasks based on language input.

---

## <b>Q2. What are the two core components of NLP? Explain their difference.</b>

### <b>Standard Answer</b>

1. <b>Natural Language Understanding (NLU)</b>  
    - Focuses on interpreting meaning, intent, semantics, and context.  
    - Tasks: sentiment analysis, NER, intent detection.
        
2. <b>Natural Language Generation (NLG)</b>  
    - Focuses on producing human-like text.  
    - Tasks: machine translation, summarization, dialogue generation.
        
<b>Difference:</b>  

NLU = “reading comprehension”  

NLG = “writing ability”

---

# <b>Part 2 — NLU 深度理解题</b>

---

## <b>Q3. Why is NLU difficult for machines?</b>

### <b>Standard Answer</b>

- Human language is ambiguous  
- Meaning depends on context  
- Machines cannot directly interpret raw text  
- Requires converting text into structured representations  
- Must handle intent, entities, sentiment, and semantic relations simultaneously
    
---

## <b>Q4. Compare rule-based NLU and statistical NLU (CRFs).</b>

### <b>Standard Answer</b>

<table>
<colgroup>
<col width="200"/>
<col width="200"/>
<col width="200"/>
</colgroup>
<tbody>
<tr><td><p>Aspect</p></td><td><p>Rule-based NLU</p></td><td><p>Statistical NLU (CRFs)</p></td></tr>
<tr><td><p>Basis</p></td><td><p>Handcrafted rules</p></td><td><p>Learned from data</p></td></tr>
<tr><td><p>Strength</p></td><td><p>High precision in controlled domains</p></td><td><p>Captures sequence dependencies</p></td></tr>
<tr><td><p>Weakness</p></td><td><p>Poor generalization</p></td><td><p>Needs labeled data</p></td></tr>
<tr><td><p>Use cases</p></td><td><p>Medical/legal/banking</p></td><td><p>POS tagging, NER</p></td></tr>
</tbody>
</table>

---

## <b>Q5. Why do CRFs outperform independent word classification in NER/POS tasks?</b>

### <b>Standard Answer</b>

Because CRFs model <b>dependencies between consecutive labels</b>, ensuring consistent predictions across sequences.  

Example: If “Apple” is labeled ORGANIZATION, the next word is more likely a verb.

---

# <b>Part 3 — NLG 理解题</b>

---

## <b>Q6. List and explain the main stages of the NLG pipeline.</b>

### <b>Standard Answer</b>

1. <b>Content Determination</b> – choose relevant facts  
2. <b>Document Structuring</b> – order information  
3. <b>Aggregation</b> – merge related content  
4. <b>Lexicalization</b> – choose words/phrases  
5. <b>Referring Expression Generation</b> – handle pronouns  
6. <b>Linguistic Realization</b> – apply grammar rules to form sentences
    
---

# <b>Part 4 — Preprocessing Techniques（必考）</b>

---

## <b>Q7. Explain the difference between stemming and lemmatization.</b>

### <b>Standard Answer</b>

- <b>Stemming</b> removes suffixes to obtain a crude root form; may produce non-words; fast but inaccurate.  
- <b>Lemmatization</b> uses vocabulary + POS to obtain the true base form (lemma); slower but accurate.
    
Example:  

- “better” → lemmatization → “good”  
- “running” → stemming → “runn”, lemmatization → “run”
    
---

## <b>Q8. When should stopword removal be avoided? Why?</b>

### <b>Standard Answer</b>

Avoid stopword removal in tasks requiring full sentence structure, such as:

- machine translation  
- summarization  
- grammar checking  
    
Because stopwords contribute to syntactic meaning and sentence coherence.

---

## <b>Q9. What is POS tagging and why is it important?</b>

### <b>Standard Answer</b>

POS tagging assigns grammatical roles (noun, verb, adjective, etc.) to each word.  

It helps models understand sentence structure, disambiguate word meaning, and supports tasks like NER, translation, and sentiment analysis.

---

# <b>Part 5 — Text Representation & Embedding（高频考点）</b>

---

## <b>Q10. Explain TF-IDF and why it is useful.</b>

### <b>Standard Answer</b>

TF-IDF = Term Frequency × Inverse Document Frequency  

- TF measures how often a word appears in a document  
- IDF reduces the weight of common words and increases the weight of rare but informative words  
    
Useful because it highlights important terms and reduces noise from frequent but uninformative words.

---

## <b>Q11. Why are traditional representations (BoW, TF-IDF) limited?</b>

### <b>Standard Answer</b>

- High-dimensional and sparse  
- Ignore word order  
- Cannot capture semantics  
- Cannot handle polysemy (multiple meanings)
    
---

## <b>Q12. What is the core idea behind GloVe embeddings?</b>

### <b>Standard Answer</b>

GloVe uses <b>global word co-occurrence statistics</b> to learn dense vectors.  

The dot product of two word vectors approximates the <b>log of their co-occurrence frequency</b>.  

Words appearing in similar contexts get similar embeddings.

---

# <b>Part 6 — Neural Networks & Backpropagation</b>

---

## <b>Q13. What is the purpose of backpropagation in neural networks?</b>

### <b>Standard Answer</b>

Backpropagation computes gradients of the loss with respect to each parameter using the chain rule, enabling gradient descent to update weights and minimize the loss.

---

## <b>Q14. Describe the three main layers of a feedforward neural network.</b>

### <b>Standard Answer</b>

- <b>Input layer</b>: receives features  
- <b>Hidden layers</b>: perform nonlinear transformations  
- <b>Output layer</b>: produces predictions (class or value)
    
---

# <b>Part 7 — Contextual Embeddings（RNN / LSTM / GRU）</b>

---

## <b>Q15. Why do RNNs struggle with long-term dependencies?</b>

### <b>Standard Answer</b>

Because gradients vanish or explode during backpropagation through time, causing the model to forget information from earlier steps.

---

## <b>Q16. How do LSTMs solve the vanishing gradient problem?</b>

### <b>Standard Answer</b>

LSTMs use <b>gates</b> (input, forget, output) and a <b>memory cell</b> to control information flow, allowing long-term information to persist and preventing gradient decay.

---

## <b>Q17. Compare LSTM and GRU.</b>

### <b>Standard Answer</b>

<table>
<colgroup>
<col width="200"/>
<col width="200"/>
<col width="200"/>
</colgroup>
<tbody>
<tr><td><p>Aspect</p></td><td><p>LSTM</p></td><td><p>GRU</p></td></tr>
<tr><td><p>Gates</p></td><td><p>3 gates</p></td><td><p>2 gates</p></td></tr>
<tr><td><p>Complexity</p></td><td><p>More complex</p></td><td><p>Simpler</p></td></tr>
<tr><td><p>Speed</p></td><td><p>Slower</p></td><td><p>Faster</p></td></tr>
<tr><td><p>Performance</p></td><td><p>Slightly better for long sequences</p></td><td><p>Comparable in most tasks</p></td></tr>
</tbody>
</table>

---

# <b>Part 8 — Transformers（必考重点）</b>

---

## <b>Q18. What problem do Transformers solve that RNNs cannot?</b>

### <b>Standard Answer</b>

Transformers use <b>self-attention</b> to capture long-range dependencies without sequential processing, enabling:

- parallel computation  
- better context understanding  
- no vanishing gradient over long sequences  
    
---

## <b>Q19. Explain the self-attention mechanism.</b>

### <b>Standard Answer</b>

Self-attention computes attention weights using Query (Q), Key (K), and Value (V) matrices:

\[

Attention(Q,K,V) = softmax\left(\frac{QK^T}{\sqrt{d_k}}\right)V

\]

It determines how much each word should attend to every other word in the sequence.

---

## <b>Q20. What are the main components of the Transformer architecture?</b>

### <b>Standard Answer</b>

- Encoder stack  
- Decoder stack  
- Multi-head self-attention  
- Feed-forward networks  
- Residual connections  
- Layer normalization  
- Positional encoding  
    
---

# <b>Part 9 — 应用理解题（老师很可能考）</b>

---

## <b>Q21. Why do modern NLP models prefer contextual embeddings over static embeddings?</b>

### <b>Standard Answer</b>

Because contextual embeddings (e.g., BERT, GPT) generate different vectors for the same word depending on context, solving polysemy and improving semantic understanding.

---

## <b>Q22. Give an example where subword tokenization is necessary.</b>

### <b>Standard Answer</b>

For rare or unseen words such as “unbelievability”, subword tokenization splits it into meaningful units like:

un + believe + ability

This reduces OOV (out-of-vocabulary) issues.

---

# <b>Part 10 — 判断理解题（快速检测是否真正懂了）</b>

---

## <b>Q23. True or False: TF-IDF captures semantic meaning.</b>

<b>Answer:</b> False  

TF-IDF only captures frequency statistics, not semantics.

---

## <b>Q24. True or False: Transformers process sequences in order.</b>

<b>Answer:</b> False  

Transformers process all tokens in parallel using self-attention.

---

## <b>Q25. True or False: Lemmatization always produces valid dictionary words.</b>

<b>Answer:</b> True  

Unlike stemming.

---

