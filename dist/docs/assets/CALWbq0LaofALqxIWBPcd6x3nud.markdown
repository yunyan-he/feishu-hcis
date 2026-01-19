# **MMDI 考试冲刺指南：Lecture 1 & 2 (Affinity Mining)**

针对老师“非黑即白”的评分风格，本指南强调**专业术语的精准使用**与**计算步骤的规范化**。

## **🅐 Part A：必考核心概念 (Core Concepts)**

### **Q1. Define support and confidence in association rule mining.**

Standard Answer:  
Support measures how frequently an itemset appears in the transactional database.  
$$\\text{support}(A) \= \\frac{\\\#\\text{transactions containing } A}{n}$$  
**Confidence** measures the empirical conditional probability of the rule

$$A \\rightarrow B$$  
.

$$\\text{confidence}(A \\rightarrow B) \= \\frac{\\text{support}(A \\cup B)}{\\text{support}(A)}$$

### **Q2. What is the "Apriori Principle"? Why is it crucial for scalability?**

Standard Answer:  
The Apriori Principle states that:  
If an itemset is frequent, then all of its non-empty subsets must also be frequent.

Alternatively (Anti-monotone property):

If an itemset is infrequent, all of its supersets must also be infrequent.

**Cruciality:** It allows the algorithm to **prune** (eliminate) a vast number of candidate itemsets without scanning the database, significantly reducing the search space and improving **scalability**.

### **Q3. Explain the difference between Descriptive and Predictive Data Mining.**

**Standard Answer:**

* **Descriptive Data Mining:** Focuses on finding human-interpretable patterns and relationships in data (e.g., Affinity Mining, Clustering).  
* **Predictive Data Mining:** Focuses on using known patterns to predict future or unknown values (e.g., Classification, Regression).

## **🅑 Part B：计算实战题 (Calculation Practice)**

Database Scenario:  
| TID | Items |  
| :--- | :--- |  
| 1 | A, B |  
| 2 | A, C |  
| 3 | B, C |  
| 4 | A, B, C |  
| 5 | A |

### **Q4. Compute the support for each 1-itemset. (Total**

$$n \= 5$$  
)

**Standard Answer:**

* $$\\text{support}(\\{A\\}) \= \\frac{4}{5} \= 0.8$$  
* $$\\text{support}(\\{B\\}) \= \\frac{3}{5} \= 0.6$$  
* $$\\text{support}(\\{C\\}) \= \\frac{3}{5} \= 0.6$$

### **Q5. Assume**

$$S\_{\\min} \= 0.4$$  
. Identify Frequent 2-itemsets (

$$F\_2$$  
).

**Standard Answer:**

* $$\\text{support}(\\{A, B\\}) \= \\frac{2}{5} \= 0.4$$  
  ($$\\ge 0.4$$  
  , Frequent)  
* $$\\text{support}(\\{A, C\\}) \= \\frac{2}{5} \= 0.4$$  
  ($$\\ge 0.4$$  
  , Frequent)  
* $$\\text{support}(\\{B, C\\}) \= \\frac{2}{5} \= 0.4$$  
  ($$\\ge 0.4$$  
  , Frequent)  
  $$F\_2 \= \\{ \\{A,B\\}, \\{A,C\\}, \\{B,C\\} \\}$$

### **Q6. Compute the confidence of rule**

$$B \\rightarrow A$$  
.

Standard Answer:

$$\\text{confidence}(B \\rightarrow A) \= \\frac{\\text{support}(A \\cup B)}{\\text{support}(B)} \= \\frac{0.4}{0.6} \\approx 0.67$$

## **🅒 Part C：Apriori 算法流程 (Algorithm Workflow)**

### **Q7. Using**

$$F\_2 \= \\{ \\{A,B\\}, \\{A,C\\}, \\{B,C\\} \\}$$  
, generate candidate

$$C\_3$$  
and perform the Prune step.

**Standard Answer:**

1. **Join Step:** Combine itemsets in$$F\_2$$  
   to form$$C\_3 \= \\{ \\{A, B, C\\} \\}$$  
   .  
2. **Prune Step:** Check all 2-subsets of$$\\{A, B, C\\}$$  
   :  
   * Subset$$\\{A, B\\} \\in F\_2$$  
     (Frequent)  
   * Subset$$\\{A, C\\} \\in F\_2$$  
     (Frequent)  
   * Subset$$\\{B, C\\} \\in F\_2$$  
     (Frequent)  
3. **Result:** Since all subsets are frequent, we keep$$\\{A, B, C\\}$$  
   in$$C\_3$$  
   .

## **🅓 Part D：强关联规则判断 (Strong Rules)**

### **Q8. Let**

$$S\_{\\min} \= 0.4$$  
and

$$C\_{\\min} \= 0.6$$  
. Is the rule

$$A \\rightarrow B$$  
a "Strong Rule"?

**Standard Answer:**

1. **Check Support:**$$\\text{support}(\\{A, B\\}) \= 0.4$$  
   . Since$$0.4 \\ge S\_{\\min}$$  
   , the itemset is frequent.  
2. **Check Confidence:**$$\\text{confidence}(A \\rightarrow B) \= \\frac{0.4}{0.8} \= 0.5$$  
   .  
3. **Conclusion:** Since$$0.5 \< C\_{\\min}$$  
   , the rule$$A \\rightarrow B$$  
   is **NOT** a strong rule.

## **🅔 考前避坑小贴士 (Tips for "Binary Grading" Style)**

1. **Don't skip steps:** 即使计算很简单，也要写出具体的公式代入过程，如$$\\frac{0.4}{0.8} \= 0.5$$  
   。  
2. **Notation matters:** 集合记得加花括号$$\\{A, B\\}$$  
   ，规则使用箭头$$A \\rightarrow B$$  
   。  
3. **Terminology:** 如果题目问为什么能减少计算，一定要回答 **"Pruning the search space"**。  
4. **Thresholds:** 严格检查是否**大于等于**阈值，刚好等于阈值通常也属于频繁项集。