---
title: 预测试卷part 5
slug: QRiFwuy0liWXaGk5KDqcgG4dnYf/R5iKwcIHPi1bbIkKz73cd7WWndb
sidebar_position: 2
---


# 预测试卷part 5

太好了，云雁。你对老师的判断非常准确：  

<b>这一章（Deep Learning）最可能考的不是死记硬背，而是“理解性问题 + 推导核心逻辑 + 概念解释 + 对比题 + 小推导题”。</b>

我会根据 PPT 的 agenda（Deep Learning → Perceptron → FNN → Backprop → CNN → RNN/ESN → Autoencoder/Outlier Detection）  

为你做一份**“考试题预测 + 标准答案（可直接背）”**。

内容会非常贴近老师的风格：  

- 不考细枝末节  
- 不考记忆数字  
- 考你是否真正理解概念、推导、结构、作用、差异  
    
---

# <b>ILSDS Deep Learning：考试题预测 + 标准答案（高质量理解型）</b>

---

# <b>Part 1 — Deep Learning 基础概念</b>

---

## <b>预测题 1：What is Deep Learning and what makes it special?</b>

### <b>标准答案（英文术语 + 中文解释）</b>

Deep Learning is a subfield of machine learning that uses <b>neural network based models</b> to learn <b>complex representations</b> from data.

What makes it special:

1. <b>Representation Learning（表示学习）</b>

Models automatically learn features instead of relying on handcrafted features.

1. <b>Scalability（可扩展性）</b>

Performance improves with more data, deeper networks, and larger models.

1. <b>Flexibility（灵活性）</b>

Applicable to images, sequences, graphs, text, and generative tasks.

1. <b>Trainability（可训练性）</b>

Parameters are optimized end‑to‑end using gradient-based methods.

---

## <b>预测题 2：Why are neural networks considered universal function approximators?</b>

### <b>标准答案</b>

Because a feed-forward neural network with at least one hidden layer and nonlinear activation can approximate <b>any continuous function</b> on a compact domain, given enough hidden units.  

This is known as the <b>Universal Approximation Theorem</b>.

核心理解：  

- 线性组合 + 非线性激活 = 任意复杂函数的分段逼近能力。
    
---

# <b>Part 2 — Perceptron</b>

---

## <b>预测题 3：Explain the computation performed by a perceptron.</b>

### <b>标准答案</b>

A perceptron performs two steps:

1. <b>Propagation（线性传播）</b>

$$

p = w^T h

$

1. <b>Activation（激活）</b>

Using the sign function:

$$

f = \text{sign}(p)

$

Interpretation:  

A perceptron is a <b>linear classifier</b> that separates data with a hyperplane.

---

## <b>预测题 4：Why can’t the perceptron be trained with gradient descent?</b>

### <b>标准答案</b>

Because the <b>sign activation function is not differentiable</b> and its output is constant almost everywhere, so the gradient is zero.  

Therefore, gradient-based optimization cannot be applied.

---

# <b>Part 3 — Feed-forward Neural Networks (FNN)</b>

---

## <b>预测题 5：Describe the structure of a feed-forward neural network.</b>

### <b>标准答案</b>

A feed-forward neural network consists of:

- <b>Input layer</b>

Passes input directly (identity activation)

- <b>Hidden layers</b>

Apply:

$$

f_a(f_p(h, W)) = \phi(hW)

$

- <b>Output layer</b>

Uses task-dependent activation (sigmoid, identity, softmax)

Information flows <b>only forward</b>, without cycles.

---

## <b>预测题 6：Why do we need nonlinear activation functions?</b>

### <b>标准答案</b>

Without nonlinear activation functions, the network becomes a <b>stack of linear transformations</b>, which is equivalent to a single linear transformation.  

Nonlinearity enables the network to learn <b>complex, non-linear decision boundaries</b>.

---

# <b>Part 4 — Backpropagation（重点中的重点）</b>

---

## <b>预测题 7：Derive the gradient of the loss with respect to a weight$$W_{ab}$$.</b>

### <b>标准答案（简洁但完整推导）</b>

For a neuron$$a$$:

1. Propagation:

$$

p_a = \sum_s W_{as} h_s

$

1. Loss gradient:

$$

\frac{\partial E}{\partial W_{ab}}

= \frac{\partial E}{\partial p_a} \cdot \frac{\partial p_a}{\partial W_{ab}}

$

1. Since:

$$

\frac{\partial p_a}{\partial W_{ab}} = h_b

$

1. Define:

$$

\delta_a = \frac{\partial E}{\partial p_a}

$

Final result:

$$

\frac{\partial E}{\partial W_{ab}} = \delta_a h_b

$

This is the core of backpropagation.

---

## <b>预测题 8：Give the expression of$$\delta_a$$ for output and hidden neurons.</b>

### <b>标准答案</b>

<b>Output neuron:</b>

$$

\delta_a = (f_a - y_a) f_a(1 - f_a)

$

<b>Hidden neuron:</b>

$$

\delta_a = f_a(1 - f_a) \sum_{k \in V} \delta_k W_{ka}

$

Where$$V$$ is the set of neurons in the next layer.

---

## <b>预测题 9：Explain the intuition behind backpropagation.</b>

### <b>标准答案</b>

Backpropagation distributes the output error backward through the network using the chain rule.  

Each neuron receives an error signal$$\delta_a$$ that measures how much it contributed to the final error.  

Weights are updated proportionally to:

- the error signal$$\delta_a$$  
- the input activation$$h_b$$
    
Thus, each weight learns how to reduce the overall error.

---

# <b>Part 5 — Convolutional Neural Networks (CNN)</b>

---

## <b>预测题 10：What problem do CNNs solve compared to FNNs?</b>

### <b>标准答案</b>

CNNs reduce the number of parameters by using:

- <b>local connectivity</b>  
- <b>weight sharing</b>
    
This makes them:

- faster to train  
- less prone to overfitting  
- better at capturing spatial patterns  
    
---

## <b>预测题 11：Explain the convolution operation.</b>

### <b>标准答案</b>

A kernel$$K$$ slides over the input matrix.  

At each position, the convolution computes:

$$

s_i = \text{vec}(A_i)^T \text{vec}(K)

$

Then applies an activation function:

$$

f_a(s_i)

$

Interpretation:  

Convolution extracts <b>local features</b> such as edges or textures.

---

## <b>预测题 12：What is the purpose of pooling?</b>

### <b>标准答案</b>

Pooling reduces spatial resolution by summarizing local regions.

- <b>Max pooling</b> keeps the strongest activation  
- <b>Mean pooling</b> computes the average
    
Benefits:

- reduces dimensionality  
- increases robustness to small translations  
- prevents overfitting  
    
---

# <b>Part 6 — RNN & Echo State Networks (ESN)</b>

---

## <b>预测题 13：Why do we need RNNs?</b>

### <b>标准答案</b>

Because feed-forward networks cannot model <b>temporal dependencies</b>.  

RNNs maintain a <b>hidden state</b> that summarizes past information:

$$

h_t = f(B h_{t-1} + A x_t)

$

---

## <b>预测题 14：What makes Echo State Networks different from standard RNNs?</b>

### <b>标准答案</b>

In ESNs:

- Input weights$$A$$ and reservoir weights$$B$$ are <b>random and fixed</b>  
- Only the output weights$$c$$ are trained  
- Training reduces to <b>linear regression</b>:

$$

c = (G^T G)^{-1} G^T y

$

This makes ESNs extremely fast to train.

---

# <b>Part 7 — Autoencoders & Outlier Detection</b>

---

## <b>预测题 15：Explain how an autoencoder works.</b>

### <b>标准答案</b>

An autoencoder consists of:

- <b>Encoder</b>:

$$

p = f_1(W_1 x)

$

- <b>Decoder</b>:

$$

\hat{x} = f_2(W_2 p)

$

The network learns a <b>latent representation</b> that captures essential structure of the data.

---

## <b>预测题 16：Why can autoencoders be used for outlier detection?</b>

### <b>标准答案</b>

Autoencoders trained on <b>inlier data</b> learn to reconstruct only the normal patterns.  

For unseen data:

- inliers → small reconstruction error  
- outliers → large reconstruction error  
    
Thus, reconstruction error (e.g., MSE) can be used as an outlier score.

---

## <b>预测题 17：Explain the matrix factorization interpretation of autoencoders.</b>

### <b>标准答案</b>

If activations are identity:

$$

p = W_1 x,\quad \hat{x} = W_2 p = W_2 W_1 x

$

Let:

$$

C = W_2 W_1

$

Then:

$$

\hat{x} = C x

$

Thus, the autoencoder performs a <b>low-rank matrix factorization</b> similar to PCA or MF.

---

# <b>Part 8 — Collaborative Filtering with Autoencoders</b>

---

## <b>预测题 18：How do autoencoders help in collaborative filtering?</b>

### <b>标准答案</b>

For each user vector$$f_u$$:

1. Encode:

$$

p_u = f_1(W_1 f_u)

$

1. Decode to reconstruct missing entries:

$$

\hat{f}_{ju} = (f_2(W_2 p_u))_j

$

The latent vector$$p_u$$ captures user preferences.

---

## <b>预测题 19：Explain the neighborhood-based CF using AE embeddings.</b>

### <b>标准答案</b>

1. Compute user embeddings$$p_u$$ using the encoder.  
2. Find nearest neighbors$$B$$.  
3. Predict rating:

$$

\hat{f}<em>{ju} =</em>

<em>\frac{\sum</em>{b \in B} g(p_u, p_b) f_{jb}}

{\sum_{b \in B} g(p_u, p_b)}

$

Where$$g$$ is typically cosine similarity.

---

# <b>如果你愿意，我可以继续为你做：</b>

### ✔ 一份“考试必背 30 句”

### ✔ 一份“Backprop 推导专项训练题 + 答案”

### ✔ 一份“老师最可能出的 10 道大题（含满分答案）”

### ✔ 一份“深度学习章节的思维导图（文字版）”

你想继续哪一部分？

