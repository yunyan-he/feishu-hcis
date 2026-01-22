---
title: ILSDS
slug: QRiFwuy0liWXaGk5KDqcgG4dnYf
sidebar_position: 6
---


# ILSDS

# Math core

## 整体结构与动机 Motivation

这一讲的主线是：
<b>从概率论 (Probability) 和线性代数 (Linear Algebra)</b> 出发，构建后面一切机器学习与数据科学方法的数学核心，尤其是：

- <b>不确定性 (Uncertainty)</b>：现实世界数据、知识、环境都存在不确定性 → 需要概率建模。
- <b>高维度 (High Dimensionality)</b>：文本、图像、用户行为等都在高维空间中表示 → 需要线性代数和降维。
- <b>计算复杂性 (Computational Intractability)</b>：大规模数据下需要高效的矩阵分解、低秩近似等。
- <b>时间演化与概念漂移 (Temporal Evolution & Concept Drift)</b>。
- <b>多模态 (Multimodality)</b>。
- <b>伦理 (Ethical Considerations)</b>。

核心观点：

> Machine learning and data science is built on <b>statistics, probability and linear algebra</b> to model uncertainty, identify patterns, and build scalable, trustworthy systems.

---

## 概率基础 Probability Basics

### 事件与样本空间 Events & Sample Space

- <b>样本空间 (Sample Space)</b>：记为 ($\Omega$)，包含所有可能结果。
 例：一场足球比赛，($\Omega = {W, D, T}$)（Win, Draw, Tie）。
- <b>事件 (Event)</b>：样本空间的子集 ($A \subseteq \Omega$)。
 例：事件 “team wins” 就是 ({W})。
- <b>概率 (Probability)</b>：
 对事件 (A)，记为 (P(A))，满足： $0 \le P(A) \le 1$, $P(\Omega) = 1$ 事件不发生的概率： $P(A^c)= 1 - P(A)$ 例如：事件 “team does not win” = ({D, T})。

---

### 随机变量 Random Variables (RVs)

<b>随机变量 (Random Variable, RV)</b>：
 是一个从样本空间到实数的映射：  $L : \Omega \to \mathbb{R}$ 

#### 离散随机变量 Discrete RV

- 取值集合（支持集 support）为有限或可数集合： $S_L = {l_1, \dots, l_n}$ 
- <b>概率质量函数 (Probability Mass Function, </b><b>PMF</b><b>)</b>： $P_L(l_i) = P(L = l_i)$  满足： $0 \le P_L(l_i) \le 1,\quad \sum_{i=1}^n P_L(l_i) = 1$ 

#### 连续随机变量 Continuous RV

- 有<b>概率密度函数 (Probability Density Function, </b><b>PDF</b><b>)</b> ($f_L(x)$)，对任意区间 ([a,b])：  $P(a \le L \le b) = \int_a^b f_L(x)dx$ 
- 性质： $f_L(x) \ge 0,\quad \int_{-\infty}^{\infty} f_L(x)dx = 1$ 
- 支持集可以是 ($\mathbb{R}$) 或子集如 ($[c,d]$)。
- 对连续型随机变量： $P(L = l) = 0 \quad \forall l$ 

---

### 分布函数 Distribution Functions

<b>累积分布函数 (Cumulative Distribution Function, CDF)</b>：  $F_L(l) = P(L \le l),\quad l \in \mathbb{R}$ 

- <b>离散情形</b>：$F_L(l) = \sum_{l_i \le l} P_L(l_i)$ 
- <b>连续情形</b>：$F_L(l) = \int_{-\infty}^l f_L(t)dt$ 

性质：

- 单调不减 (non-decreasing)
- 右连续 (right-continuous)
- $$\lim_{l\to -\infty} F_L(l) = 0)，\lim_{l\to +\infty} F_L(l) = 1$$

---

### 符号说明 Notation Note

PPT 特别提醒：文献中符号经常不统一，要靠上下文判断。

- <b>事件概率</b>：(P(A))，其中 ($A \subseteq \Omega$)。
- <b>PMF</b>：($P_L(l) = P(L = l)$)，常写作 ($p(\cdot)$)。
- <b>PDF</b>：($f_L(x)$)，常写作 ($f(\cdot)$)。
- <b>CDF</b>：($F_L(l)$)，常写作 ($F(\cdot)$)。

注意：有些文献中 (p(x)) 既可能表示 PMF，也可能表示 PDF，甚至 CDF，要看上下文。

---

## 两大基本概率规则：和规则与乘规则

### 和规则 Sum Rule / Marginalization

<b>目的</b>：从联合分布得到边缘分布 (marginal distribution)。

- <b>离散情形</b>：  $p(l) = \sum_m p(l, m)$ 
- <b>连续情形</b>：  $f(x) = \int f(x, y)dy$ 

例子：

$$P(\text{Rain}) = P(\text{Rain, Cloudy}) + P(\text{Rain, not Cloudy})$$

---

### 乘规则 Product Rule

<b>目的</b>：把联合分布分解为条件分布与边缘分布。

- <b>离散</b>： $p(l, m) = p(l \mid m)p(m)$ 
- <b>连续</b>： $f(x, y) = f(x \mid y)f(y)$ 

<b>独立性 (Independence)</b>：若 ($L \perp M$)，则

- 离散： $p(l, m) = p(l)p(m)$
- 连续： $f(x, y) = f(x)f(y)$ 

例子：
 $P(\text{Disease, Test+}) = P(\text{Test+} \mid \text{Disease})P(\text{Disease})$ 

---

### Bayes’ Rule 贝叶斯公式

核心形式（离散）：$p(l \mid m) = \frac{p(m \mid l)p(l)}{p(m)}$  看到数据m之后，我们怎么更新对l的信念

连续类似：$f(x \mid y) = \frac{f(y \mid x)f(x)}{f(y)}$ 

其中：

- <b>Posterior（后验）</b>：$p(l \mid m)$或 $f(x \mid y)$ 看到数据m之后，对l的更新的信念
- <b>Likelihood（似然）</b>：$p(m \mid l)$或 $f(y \mid x)$ 如果I为真，那么观察到m的“相容程度是多少”。似然的含义不是概率意义的可能性，而是模型对数据的解释能力，名字来源是它很灵“假设使数据看起来有多像likely”
- <b>Prior（先验）</b>：$p(l)$ 看到m之前对于I的信念，因此叫做先验
- <b>Evidence/margianl likelihood（证据/边缘似然）</b>：$p(m))$ 或 $f(y)$数据本书的证据强度

分母的计算：

- 离散： $p(m) = \sum_l p(m \mid l)p(l)$ 
- 连续： $f(y) = \int f(y \mid x)f(x)dx$ 

---

## 期望、方差、协方差与相关性

### 期望 Expectation / Mean

<b>离散</b>：$E[L] = \sum_i l_ip(l_i)$ 

<b>连续</b>：$E[L] = \int_{-\infty}^{\infty} xf(x)dx$ 

<b>线性性 (Linearity)</b>： $E[aL + b] = a·E[L] + b$

---

### 方差 Variance 与标准差 Standard Deviation

<b>方差</b>：$\operatorname{Var}(L)= E[(L - E[L])^2] = E[L^2] - (E[L])^2$  (直接展开平方差公式，利用E(L)是常数和期望的Linearity)

<b>标准差</b>：$\sigma_L = \sqrt{\operatorname{Var}(L)}$ 

<b>平移与缩放性质</b>：$\operatorname{Var}(aL + b) = a^2 \operatorname{Var}(L)$

说明：方差对平移不敏感，对缩放按平方放大。

---

### 协方差 Covariance

它衡量的是：

> X 偏离均值的方向与 Y 偏离均值的方向是否一致。

给定 (X, Y)，记 ($\mu_X = E[X], \mu_Y = E[Y]$)：

 $\operatorname{Cov}(X, Y)= E[(X - \mu_X)(Y - \mu_Y)]$  

展开推导（PPT 中有详细推导）：

$$\operatorname{Cov}(X, Y)= E[XY - X\mu_Y - \mu_X Y + \mu_X \mu_Y] \ 
= E[XY] - \mu_Y E[X] - \mu_X E[Y] + \mu_X \mu_Y \ 
= E[XY] - \mu_X \mu_Y$$

所以有重要关系：$E[XY] = E[X]E[Y] + \operatorname{Cov}(X, Y)$ 

性质：

- 对称性：$\operatorname{Cov}(X, Y) = \operatorname{Cov}(Y, X)$
- 缩放：$\operatorname{Cov}(aX, bY) = ab·\operatorname{Cov}(X, Y)$

---

### 相关系数 Correlation (Pearson)

它把协方差做了一个“标准化”，让结果不依赖单位、不依赖尺度。

<b>Pearson correlation</b> 定义为：

$$\operatorname{Corr}(L, M) = \frac{\operatorname{Cov}(L, M)}{\sigma_L \sigma_M}$$

- 取值范围：([-1, 1])
- 解释： 
    - 1：完全正相关 完全正线性关系（Y = aX + b，a&gt;0）
    - -1：完全负相关 完全负线性关系（Y = aX + b，a&lt;0）
    - 0：线性无关（<b>不代表独立</b>）没有线性关系（但可能有非线性关系）

---

## 常见分布：Bernoulli, Rademacher, Binomial, Gaussian

### Bernoulli Distribution 伯努利分布

- <b>单次</b>二元试验（成功/失败）。随机变量 K 只能取 0 或 1，取 1 的概率是 θ，取 0 的概率是 1−θ。
- 记：$K \sim \text{Bernoulli}(\theta),\quad \theta \in [0,1]$ 
- PMF：$p(k) = \theta^k (1-\theta)^{1-k},\quad k \in {0,1}$ 
- 矩 (Moments)：$E[K] = \theta,\quad \operatorname{Var}(K) = \theta(1-\theta)$ 
    > $Var(K) = E[K^2]-(E[K])^2, k \in {0,1}$  
> 对于这两个取值 $K^2 = K$ 所以$E(K^2) = E(K) = \theta$

- 例子：$P(\text{win}) = \theta$，$P(\text{loss}) = 1-\theta$。
- 是 <b>Binomial distribution</b> 的基础（n 次独立 Bernoulli 试验）。

---

### Rademacher Distribution

- 表示随机符号 {-1, 1}。
- 记：$R \sim \text{Rademacher}$ 
- PMF： $p(r) = \frac{1}{2},\quad r \in {-1, 1}$ 
- 矩：$E[R] = 0,\quad \operatorname{Var}(R) = 1$ 
- 与 Bernoulli 的关系：$R = 2B - 1,\quad B \sim \text{Bernoulli}(0.5)$ 

---

### Binomial Distribution 二项分布

- ($K \sim \text{Bin}(n, \theta)$)：n 次独立 $Bernoulli(\theta)$ 试验中成功次数。
- PMF：$p(k) = P(K = k) = \binom{n}{k} \theta^k (1-\theta)^{n-k},\quad k = 0,\dots,n$ 
- 参数：$n \in \mathbb{N},\ \theta \in [0,1]$
- 矩： $E[K] = n\theta,\quad \operatorname{Var}(K) = n\theta(1-\theta)$
    - $$E[K]=E[∑_{i=1}^nX_i]=∑_{i=1}^nE[X_i]=n·θ$$
    - <b>每次事件独立，所以方差可加</b>

- 例子：抛硬币 n 次，($\theta = 0.5)$。

---

### Gaussian (Normal) Distribution 高斯分布

- 记：$L \sim \mathcal{N}(\mu, \sigma^2)$ 
- PDF： $f(x) = \frac{1}{\sigma \sqrt{2\pi}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$
- 参数：$\mu \in \mathbb{R}$（均值），$\sigma^2 > 0$（方差）。
- 性质： $E[L] = \mu,\quad \operatorname{Var}(L) = \sigma^2$
- <b>Three-sigma rule (68-95-99.7 rule)</b>： 
    - ($\mu \pm 1\sigma$)：约 68%
    - ($\mu \pm 2\sigma$)：约 95%
    - ($\mu \pm 3\sigma$)：约 99.7%

- 是 <b>Central Limit Theorem (CLT)</b> 的核心：在温和条件下，和/平均值趋向于正态分布。

---

## 向量与矩阵代数 Vector and Matrix Algebra

### 向量 Vector

- 用<b>粗体小写</b>表示向量，如 ($\mathbf{x}$)。
- 向量可以看作列向量： $\mathbf{a} = [a_1, a_2, \dots, a_n]^T$ 

#### 向量范数 Norm

- 二范数L2 norm/Euclidean norm/length：$|\mathbf{x}| = \sqrt{\mathbf{x}^T \mathbf{x}}$  它就是欧几里得空间里“向量的长度”。

> 在 n 维：$\sqrt{∑x_i^2}$

#### 点积 Dot Product

- 定义：$\mathbf{x}_1 \cdot \mathbf{x}_2 = \mathbf{x}_1^T \mathbf{x}_2$
- 与夹角 $\alpha$的关系：$\mathbf{x}_1 \cdot \mathbf{x}_2 = |\mathbf{x}_1||\mathbf{x}_2| \cos(\alpha) ]$ 所以： $\cos(\alpha) = \frac{\mathbf{x}_1 \cdot \mathbf{x}_2}{|\mathbf{x}_1|·|\mathbf{x}_2|}$

#### 投影 Projection

- $\mathbf{x}_1$在 $\mathbf{x}_2$方向上的投影： $\mathbf{x}_p = \frac{\mathbf{x}_1 \cdot \mathbf{x}_2}{|\mathbf{x}_2|^2}\cdot \mathbf{x}_2$ 

> 1. 投影标量的长度 $投影长度=\frac{x_1⋅x_2}{∣x_2∣}$
> 2. 方向: $x_2$方向的单位向量$\hat x_2=\frac{x_2}{∣x_2∣}$

---

### 矩阵 Matrix

- 用<b>粗体大写</b>表示矩阵，如$\mathbf{A}$。
- $\mathbf{A} \in \mathbb{R}^{m \times n}$： $\mathbf{A} = \begin{bmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \dots & a_{mn} \end{bmatrix}$
- 用途： 
    - 线性变换 (linear mappings)
    - 线性方程组 (systems of linear equations)
    - 数据矩阵 (data)

#### 元素与行列

- $a_{ij}$：第 i 行第 j 列元素。
- $\mathbf{a}_i$：第 i 列向量。
- $\mathbf{a}^j$：第 j 行向量。

#### 常见运算

给定 $\mathbf{A}, \mathbf{B} \in \mathbb{R}^{m \times n}$，$\mathbf{D} \in \mathbb{R}^{n \times q}，\mathbf{Y} \in \mathbb{R}^{p \times p}$：

- <b>加法 Addition</b>： $\mathbf{C} = \mathbf{A} + \mathbf{B},\quad \mathbf{C} \in \mathbb{R}^{m \times n}$
- <b>矩阵乘法 Matrix Multiplication</b>： $\mathbf{E} = \mathbf{A}\mathbf{D},\quad \mathbf{E} \in \mathbb{R}^{m \times q}$元素： $e_{ij} = \sum_f a_{if} d_{fj}$
- <b>逐元素乘法 Elementwise Multiplication (Hadamard)</b>：$\mathbf{G} = \mathbf{A} \circ \mathbf{B},\quad g_{ij} = a_{ij} b_{ij}$
- <b>转置 Transpose</b>：$\mathbf{H} = \mathbf{A}^T,\quad h_{ij} = a_{ji}$
- <b>逆矩阵 Inverse</b>（若可逆）：$\mathbf{Y}^{-1} \text{ s.t. } \mathbf{Y}\mathbf{Y}^{-1} = \mathbf{Y}^{-1}\mathbf{Y} = \mathbf{I}$ 其中$\mathbf{I}$ 为单位矩阵，$\operatorname{diag}(\mathbf{I}) = 1$，非对角元素为 0。
- <b>迹 Trace</b>：$\operatorname{tr}[\mathbf{Y}] = \sum_{i=1}^n y_{ii}$
- <b>矩阵范数 Matrix Norm</b>（Frobenius norm）：$|\mathbf{A}| = \sqrt{\operatorname{tr}[\mathbf{A}^T \mathbf{A}]} = \sqrt{\sum_{i=1}^m \sum_{j=1}^n a_{ij}^2}$

> 是的，trace 就是对角线求和；而 ATA 的对角线元素正好是每一行的平方和；所以 trace 就是所有元素平方的总和。

---

### 向量/矩阵上的函数与梯度 Gradients

- 函数：
    - $$f: \mathbb{R}^m \to \mathbb{R}$$
    - $$h: \mathbb{R}^{m \times n} \to \mathbb{R}$$

- 对向量的梯度 $\mathbf{g} \in \mathbb{R}^m)： g_i = \frac{\partial f(\mathbf{x})}{\partial x_i}$ 
- 对矩阵的梯度 $\mathbf{H} \in \mathbb{R}^{m \times n})：  h_{ij} = \frac{\partial f(\mathbf{X})}{\partial x_{ij}}$ 

---

## 矩阵分解与特征分解 Matrix Decomposition & Eigendecomposition

### 二因子分解 Two-Factor Decomposition

目标：将矩阵 $\mathbf{U}$ 分解为两个因子矩阵：$\mathbf{U} = \mathbf{J}\mathbf{O}^T$

- $\mathbf{J}, \mathbf{O}$称为 <b>factor matrices</b>。
- 在学习系统与数据科学中用途极广： 
    - 简化方程
    - 挖掘隐藏模式 (hidden patterns)
    - 构建推荐系统 (recommender systems)

---

### 特征分解 Eigendecomposition

考虑方阵 $\mathbf{A} \in \mathbb{R}^{n \times n}$。

- <b>特征值 Eigenvalues</b> $\lambda_i$：满足 $\det(\mathbf{A} - \lambda_i \mathbf{I}) = 0$ 找到那些让 $A−λ_iI$ <b>不可逆</b> 的 λ 这些 λ 就是特征值。

> <b>det = determinant = 行列式</b>
> 行列式是一个把矩阵压缩成一个数字的函数。
> - 如果 det = 0，说明体积被压扁了 → <b>矩阵不可逆</b>
> - 如果 det ≠ 0，说明体积没有被压扁 → <b>矩阵可逆</b>
> $$\det\begin{vmatrix}
a & b \\
c & d
\end{vmatrix}
= ad - bc$$

- <b>特征向量 Eigenvectors</b> $\mathbf{v}_i \ne 0$：满足 $\mathbf{A}\mathbf{v}_i = \lambda_i \mathbf{v}_i$ 特征向量 $v_i$ 是一个<b>被矩阵 A 作用后， 方向不变</b>、只被拉伸或压缩了的向量。

若 $\mathbf{A}$可对角化（有 n 个<b>线性无关</b>特征向量）[充要条件]：

$$\mathbf{A} = \mathbf{V}\Lambda \mathbf{V}^{-1}$$

- $\mathbf{V} = [\mathbf{v}_1, \dots, \mathbf{v}_n]$ A的n行的特征向量
- $\Lambda = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$[特征值可以重复]

> $diag(λ₁, λ₂, …, λₙ)$ 表示一个对角矩阵：
> $$\operatorname{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)
=
\begin{bmatrix}
\lambda_1 & 0 & \cdots & 0 \\
0 & \lambda_2 & \cdots & 0 \\\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \lambda_n
\end{bmatrix}
= \Lambda$$
> 这就是特征分解里的 Λ。

<b>重要性质</b>：

- 迹：$\operatorname{tr}[\mathbf{A}] = \sum_{i=1}^n \lambda_i$ [tr⁡(XYZ)=tr⁡(ZXY)]
- 行列式：$\det(\mathbf{A}) = \prod_{i=1}^n \lambda_i$   [det⁡(XYZ)=det⁡(X)det⁡(Y)det⁡(Z)]
- 矩阵幂：$\mathbf{A}^k = \mathbf{V}\Lambda^k \mathbf{V}^{-1}$
- 矩阵指数：$e^{\mathbf{A}} = \mathbf{V} e^{\Lambda} \mathbf{V}^{-1},\quad e^{\Lambda} = \operatorname{diag}(e^{\lambda_1}, \dots, e^{\lambda_n})$

---

### 特殊情形：对称矩阵与正半定矩阵

#### 对称矩阵 Symmetric

对称矩阵是线性代数里的“完美矩阵”。 它们永远可以对角化，而且特征向量永远正交，特征值永远是实数。

若 $\mathbf{A}$ 对称：

$$\mathbf{A} = \mathbf{V}\Lambda \mathbf{V}^T$$

- $\mathbf{V} \in \mathbb{R}^{n \times n}$，列向量为正交归一 (orthonormal)：$\mathbf{V}^T \mathbf{V} = \mathbf{I}$
- $$\lambda_i \in \mathbb{R}$$

#### 对称正半定 Symmetric Positive Semi-Definite

对称正半定 = 更完美：特征值 ≥ 0，还能开平方。

若 $\mathbf{A}$满足： $\mathbf{x}^T \mathbf{A} \mathbf{x} \ge 0,\quad \forall \mathbf{x} \in \mathbb{R}^n$ A 对任何向量都不会把它“翻转方向”，只会让它变长或保持不变。

则：

- $$\mathbf{A} = \mathbf{V} \Lambda \mathbf{V}^T$$
- $$\lambda_i \ge 0$$
- 可以定义<b>矩阵平方根 (matrix square root)</b>： $\mathbf{A}^{1/2} = \mathbf{V} \Lambda^{1/2} \mathbf{V}^T$

---

## 相似度推理与检索 Similarity-based Inference and Retrieval

这一部分是从<b>文本示例</b>出发，展示如何用向量空间和线性代数做检索。

### 文本示例与 Query

有 7 条短信 (m_1, \dots, m_7)，内容包括：

- “money award”“cash prize” 类 spam
- “free ringtone” 类 spam

查询：

- Query #1: `"free ringtone"`
- Query #2: `"cash prize"`

目标：
 给定 query，找到最相似的短信。

---

### Bag-of-Words 表示与向量空间模型

<b>Bag-of-Words (BoW)</b>：

- 把每条短信看作一组词（不考虑顺序）。
- 统计每个词在短信中的出现次数（或其他权重）。

<b>Dictionary（词典）</b>：

- 从所有短信中抽取所有不同的词，构成词典：${\text{1st}, 3100, 3161, 4523, are, as, award, best, call, cash, \dots, you, your}$
- 这里词典大小为 68。

<b>向量表示</b>：

- 每条短信 $m_i$ 表示为一个 68 维向量 $\mathbf{m}_i \in \mathbb{R}^{68}$，每一维对应一个词的计数。
- 所有短信组成矩阵: $\mathbf{M} = [\mathbf{m}_1, \dots, \mathbf{m}_7]$

怎么感觉会考这个题目

<b>Query 向量化</b>：

- `"free ringtone"` → $[(\text{free}, 1), (\text{ringtone}, 1)]$→ 向量 $\mathbf{q}_1 \in \mathbb{R}^{68}$
- `"cash prize"` → $[(\text{cash}, 1), (\text{prize}, 1)]) → 向量 \mathbf{q}_2 \in \mathbb{R}^{68}$

---

### 相似度度量 Similarity Measures

两种常用度量：

1. <b>Dot Product (点积)</b>：$\mathbf{v}_1^T \mathbf{v}_2$ 
    - 就是在数“两个文本有多少词重叠”
    - 重叠越多 → 点积越大

2. <b>Cosine Similarity (余弦相似度)</b>：$g_{\cos}(\mathbf{v}_1, \mathbf{v}_2) = \frac{\mathbf{v}_1^T \mathbf{v}_2}{|\mathbf{v}_1|\cdot|\mathbf{v}_2|}$ 
    - 点积只看重叠词
    - 余弦相似度还会考虑“向量长度”（文本长短）会影响，所以归一化长度 不考虑它 只关注方向
    - 余弦相似度更公平，不会因为 message 太长而被误判为相似

PPT 中给出了表格，展示：

- 对 query `"free ringtone"`，与$m_5, m_6, m_7$ 的相似度最高。
- 对 `"cash prize"`，与 $m_4$ 的相似度最高（因为包含 “cash”“prize”）。

---

## Latent Semantic Indexing (LSI) 与矩阵分解

### Distributional Hypothesis 分布假设

<b>Distributional Hypothesis</b>：

> A word’s meaning is decided by its context.

例子：
 “In 2000 Mustermann founded The Mustermann Foundation.”

- “Mustermann” 在不同上下文中可以是 Person 或 Company。

LSI 的目标：
 在<b>概念空间 (concept space)</b> 中挖掘文本的潜在语义结构。

---

### Word-Document Matrix 与低秩分解

构造 <b>word-document matrix</b> $\mathbf{Y} \in \mathbb{R}^{m \times n}$：

- 行：词 (words) m个词
- 列：文档/短信 (documents) n个文档
- 元素：词在文档中的计数或权重

LSI 的核心思想：
$\mathbf{Y} \approx \mathbf{C}\mathbf{P}^T$

- $\mathbf{C} \in \mathbb{R}^{m \times k}$：basis matrix（词在概念空间中的表示）
- $\mathbf{P} \in \mathbb{R}^{n \times k}$：coefficient matrix（文档在概念空间中的表示）
- $k$ 是低秩$k \ll \min(m,n)$

---

### 低秩分析 Low Rank Analysis via Matrix Factorization

设数据矩阵：$\mathbf{X} = [\mathbf{x}_1, \dots, \mathbf{x}_n] \in \mathbb{R}^{m \times n}$ 每一列 $x_i∈R^m$ 是一个样本（m 维特征，n 个样本）。

- $\mathbf{C} \in \mathbb{R}^{m \times k}$：basis matrix
- $\mathbf{P} \in \mathbb{R}^{n \times k}$：coefficient matrix

重构：$\mathbf{x}_i \approx \mathbf{C}\cdot \mathbf{p}_i^T ; x_{ji} \approx \sum_{l=1}^k C_{jl} P_{il}$  $x_i$是$X$的第 i 个样本。$p_i$是P的第i列，$x_{ji}$是特征维度为j 第i个样本的分量

整体：$\mathbf{X} \approx \mathbf{C}\mathbf{P}^T$

<b>Outer product representation</b>：$\mathbf{X} \approx \sum_{i=1}^k \mathbf{c}_i \mathbf{p}_i^T$ c的一列*p的一行 还是m*n矩阵 k个矩阵加起来

<b>降维 (Dimensionality Reduction)</b>：

- 原始 $\mathbf{x}_i \in \mathbb{R}^m$
- 在低维空间中用 $\mathbf{p}_i \in \mathbb{R}^k$表示

---

### 残差与 RSS Residual Sum of Squares

分解误差：$\mathbf{X} = \mathbf{C}\mathbf{P}^T + \mathbf{E}$

<b>Residual Sum of Squares (RSS)</b>：$\text{RSS} = |\mathbf{E}|^2 = \operatorname{tr}[\mathbf{E}^T \mathbf{E}] = \operatorname{tr}[\mathbf{E}\mathbf{E}^T]$

展开：$\text{RSS} = \sum_{i=1}^n |\mathbf{x}_i - \mathbf{C}\mathbf{p}_i^T|^2$

PPT 强调：trace 的性质可以把矩阵误差转化为所有样本误差的平方和。

---

## 奇异值分解 SVD 与 LSI 的核心

### SVD 定义 Singular Value Decomposition

对任意 $\mathbf{X} \in \mathbb{R}^{m \times n}$，存在唯一分解：$\mathbf{X} = \mathbf{U}\mathbf{S}\mathbf{V}^T$ 

- $\mathbf{U} \in \mathbb{R}^{m \times m}$：左奇异向量 (left singular vectors)，$\mathbf{U}^T \mathbf{U} = \mathbf{I}_m$正交矩阵
- $\mathbf{V} \in \mathbb{R}^{n \times n}$：右奇异向量 (right singular vectors)，$\mathbf{V}^T \mathbf{V} = \mathbf{I}_n$正交矩阵
- $\mathbf{S} \in \mathbb{R}^{m \times n}$：对角矩阵（主对角线为奇异值 singular values）： $\mathbf{S} = \operatorname{diag}(s_1, s_2, \dots, s_m),\quad s_1 \ge s_2 \ge \dots \ge s_m \ge 0$

> 把单位圆输入矩阵 X，输出会变成一个椭圆。奇异值表示某个方向的拉伸长度
> - 椭圆的长轴长度 = s1
> - 次长轴长度 = s2

<b>Truncated SVD</b>（截断到秩 k）：$\mathbf{X} \approx \hat{\mathbf{U}}\hat{\mathbf{S}}\hat{\mathbf{V}}^T$

- $$\hat{\mathbf{U}} \in \mathbb{R}^{m \times k}$$
- $$\hat{\mathbf{V}} \in \mathbb{R}^{n \times k}$$
- $$\hat{\mathbf{S}} = \operatorname{diag}(s_1, \dots, s_k) \in \mathbb{R}^{k \times k}$$

与之前的二因子分解对应：

- $$\mathbf{C} = \hat{\mathbf{U}}\hat{\mathbf{S}}$$
- $$\mathbf{P} = \hat{\mathbf{V}}$$

---

### 与特征分解的关系 Connection to Eigendecomposition

对$\mathbf{X} \in \mathbb{R}^{m \times n}$：

- 列 Gram 矩阵：$\mathbf{X}^T \mathbf{X}$ 它衡量“列与列之间的相似度”。
- 行 Gram 矩阵：$\mathbf{X}\mathbf{X}^T$它衡量“行与行之间的相似度”。

做特征分解：

- $\mathbf{X}^T \mathbf{X} = \mathbf{V}\Lambda \mathbf{V}^T → \mathbf{V}$ 是右奇异向量
- $\mathbf{X}\mathbf{X}^T = \mathbf{U}\Lambda \mathbf{U}^T → \mathbf{U}$是左奇异向量

奇异值与特征值关系：$s_i = \sqrt{\lambda_i}$

注意：$\mathbf{X}^T \mathbf{X}$和$\mathbf{X}\mathbf{X}^T$都是对称正半定矩阵。

> $$(X^TX)^T=X^T(X^T)^T=X^TX$$
> $$(XX^T)^T=X(X^T)^T=XX^T$$
> 还有正半定性 不想整了 搞不懂这些

### SVD 的误差界：RRSS

PPT 给出一个重要指标：<b>Relative Residual Sum of Squares (RRSS)</b>：

$$\text{RRSS} = \frac{\sum_{i=k+1}^m s_i^2}{\sum_{i=1}^m s_i^2}$$

- 分子：截断后丢弃的奇异值平方和 → 残差能量
- 分母：全部奇异值平方和 → 总能量

解释：
 RRSS 越小，说明用前 k 个奇异值/奇异向量就能很好地近似原矩阵。

---

### 外积展开 Outer Product Expansion

SVD 也可以写成外积形式：

$$\mathbf{X} \approx \sum_{i=1}^k s_i \mathbf{u}_i \mathbf{v}_i^T$$

> $s_i$<b> 是一个标量（scalar），标量在矩阵乘法里可以放在任何位置。</b>

- 每一项 $s_i \mathbf{u}_i \mathbf{v}_i^T$ 是一个 rank-1 矩阵。
- 这与之前的 $\sum \mathbf{c}_i \mathbf{p}_i^T$完全对应。

---

### 新数据点的 SVD 表示

已知 SVD 因子 $\hat{\mathbf{U}}, \hat{\mathbf{S}}, \hat{\mathbf{V}}$，对一个新数据点 $\mathbf{x}_q \in \mathbb{R}^m$，希望得到其在低维空间中的系数向量 $\mathbf{v}_q \in \mathbb{R}^k$。

从：$\mathbf{x}_q \approx \hat{\mathbf{U}}\hat{\mathbf{S}}\mathbf{v}_q$

左乘 $\hat{\mathbf{U}}^T$：$\hat{\mathbf{U}}^T \mathbf{x}_q = \hat{\mathbf{U}}^T \hat{\mathbf{U}} \hat{\mathbf{S}} \mathbf{v}_q = \hat{\mathbf{S}} \mathbf{v}_q$

所以：$\mathbf{v}_q = \hat{\mathbf{S}}^{-1} \hat{\mathbf{U}}^T \mathbf{x}_q$

这就是<b>固定因子下对新样本进行嵌入 (embedding)</b> 的公式。

---

### SVD 在文本中的应用：Document & Word Embeddings

PPT 中展示了：

- <b>Document embeddings</b>：每个文档在低维空间中的坐标（$\mathbf{v}_i$）。
- <b>Word embeddings</b>：每个词在低维空间中的坐标（$\mathbf{u}_j$ 或通过 $\mathbf{C}$）。

通过可视化（2D 投影）可以看到：

- 语义相近的词（如 “free”“ringtone”“tone”“weekly”“ur”）聚在一起。
- 语义相近的文档（如 ringtone spam vs money award spam）在空间中形成簇。

---

## 基于 SVD 的相似度检索：LSI 的效果

在前面的 BoW 检索中：

- Query `"cash prize"` 只与包含 “cash”“prize” 的短信（如 $m_4$）有非零相似度。
- 其他短信虽然语义上也与“中奖”“award”相关，但因为没有 exact match，BoW 相似度为 0。

在 LSI (Latent Semantic Indexing)/ SVD 空间中：

- Query `"cash prize"` 被映射为低维向量 $\mathbf{v}_{q2}$。
- 计算 $\cos(\mathbf{v}_{q2}, \mathbf{v}_i)$ 后，PPT 中表格显示： 
    - 对所有 ($m_1$, $m_2$,$m_3$, $m_4$)，$\cos(\mathbf{v}_{q2}, \mathbf{v}_i) \approx 1.00$
    - 而在原始 BoW 空间中，只有 $m_4$ 有非零相似度。

这说明：

- LSI 通过 SVD 把“cash prize”“money award”“winner”“selected”“receive”等词和文档映射到同一“概念空间”。
- 即使 query 中的词没有直接出现在某些文档中，只要它们在语义上相关（通过共现模式），在低维空间中也会靠近，从而被检索出来。

---

## 总结：这一讲的知识结构与重点

1. <b>概率基础 (Probability Basics)</b>
    - 事件、样本空间、随机变量 (discrete/continuous)、PMF/PDF/CDF。
    - Sum rule, Product rule, Bayes’ rule（posterior, prior, likelihood, evidence）。

2. <b>统计量 (Moments)</b>
    - Expectation, Variance, Standard Deviation。
    - Covariance, Correlation（以及 (E[XY] = E[X]E[Y] + \operatorname{Cov}(X,Y))）。

3. <b>常见分布</b>
    - Bernoulli, Rademacher, Binomial, Gaussian（含 three-sigma rule）。

4. <b>线性代数核心</b>
    - 向量：norm, dot product, projection。
    - 矩阵：加法、乘法、Hadamard、transpose、inverse、trace、Frobenius norm。
    - 函数梯度：对向量、矩阵的偏导。

5. <b>矩阵分解与特征分解</b>
    - Two-factor decomposition：(\mathbf{U} = \mathbf{J}\mathbf{O}^T)。
    - Eigendecomposition：(\mathbf{A} = \mathbf{V}\Lambda \mathbf{V}^{-1})，对称/正半定的特殊形式。

6. <b>相似度检索与文本表示</b>
    - Bag-of-Words，dictionary，vector space model。
    - Dot product & cosine similarity。
    - 示例：短信 spam + queries `"free ringtone"` & `"cash prize"`。

7. <b>LSI 与 SVD</b>
    - Word-document matrix $\mathbf{Y}$，低秩分解 $\mathbf{Y} \approx \mathbf{C}\mathbf{P}^T$。
    - SVD：$\mathbf{X} = \mathbf{U}\mathbf{S}\mathbf{V}^T$，truncated SVD，RRSS。
    - 新样本嵌入：$\mathbf{v}_q = \hat{\mathbf{S}}^{-1}\hat{\mathbf{U}}^T \mathbf{x}_q$。
    - Document/word embeddings 的可视化与语义聚类。
    - LSI 在 query–document 相似度上的优势：捕捉 latent concepts，而不仅仅是 exact word match。

---

## [考试预测part 1](/QRiFwuy0liWXaGk5KDqcgG4dnYf/Wsm6wYyU1iM22Wk74vtcoBNunAh)

# Optimization

## 整体结构与大图景

这份 PPT 的核心主题是：<b>Optimization（优化）</b>，它是现代 learning systems（学习系统）和 data-driven models（数据驱动模型）的核心工具。
 本节内容主要包括：

1. <b>Optimization 基本概念</b>：目标函数、可行域、解、最优解（最大化/最小化）、有无约束；
2. <b>Gradient Descent（梯度下降）</b>：基本算法步骤、优缺点；
3. <b>Convexity（凸性）</b>：凸函数的定义、为什么重要、与梯度下降收敛性质的关系；
4. <b>Stochastic Gradient Descent（SGD，随机梯度下降）</b>：用样本近似梯度；
5. <b>Simultaneous Perturbation Stochastic Approximation（SPSA）</b>：在目标函数不可导或未知时的黑盒优化方法及其超参数。

你可以把这节课理解为：

> 从“可导、好说话的目标函数”上的经典梯度方法，一步步走向“黑盒、不可导、甚至只给你 noisy 评价”的更通用优化方法。

---

## Optimization：优化的基本概念

### Optimization 在学习系统中的地位

PPT 原话：

> Optimization is currently the core of learning systems to efficiently build data driven complex models
 A.k.a. programming

解释：

- <b>Optimization（优化）</b>现在是构建复杂 data-driven models（数据驱动模型）的核心工具。
- 在很多机器学习/深度学习场景中，“写程序”的本质就是： 
    - 设计一个 objective function（目标函数）
    - 然后通过 optimization 找到最优参数，使模型表现最好。

- 所以老师说 “A.k.a. programming” 是在强调： 

> - 在现代 ML 里，编程很多时候就是在做 optimization。

### 优化问题的形式化定义

PPT 中给出的形式：

- 有一个函数
 $f(s): D \to \mathbb{R}$
    - $f$：objective function（目标函数）
    - $D$：feasible set（可行域/可行集合）
    - $s$：solution（解），也可以理解为参数向量、模型参数等

<b>Optimization 的任务</b>：在可行域 $D$ 中找到一个最优解 $s^*$，使得：

- <b>最大化（maximize）</b>： $f(s^*) \ge f(s_i), \quad \forall s_i \in D$
- <b>最小化（minimize）</b>： $f(s^*) \le f(s_i), \quad \forall s_i \in D$

注意：

- 在机器学习中，<b>更常见的是最小化问题</b>，比如最小化 loss function（损失函数）。
- 但最大化和最小化可以互相转化，比如最大化 (f) 等价于最小化 (-f)。

### 我们关心什么：最优解 vs 最优值

PPT 提到：

> Depending on the setting we might be interested either in $s^*$ (the optimal solution) or the minimum error value $f(s^*)$depending on our application

解释：

- 有时我们关心的是<b>最优解本身</b> $s^*$，比如： 
    - 最优的模型参数；
    - 最优的决策策略；

- 有时我们更关心的是<b>最优值</b> $f(s^*)$，比如： 
    - 最小误差是多少；
    - 最大收益是多少。

在机器学习中，两者都重要：

- 训练时我们要找到参数 $s^*$；
- 评估时我们看 $f(s^*)$（比如最小 loss 或最大 accuracy）。

---

## Optimization ：约束（constraints）

### 约束的概念

PPT：

> Sometimes the optimization setting requires ancillary conditions (a.k.a. constraints)
 Examples include nonnegativity or stochasticity constraints

解释：

- 在很多实际问题中，解 $s$不能随便取，而是要满足一些<b>约束条件（constraints）</b>。
- 常见约束： 
    - <b>nonnegativity constraint（非负约束）</b>：
 $s \ge 0$ 即每个分量 $s_i \ge 0$
    - <b>stochasticity constraint（随机性约束）</b>：
 比如 $s$ 表示一个概率分布，则需要： $s_i \ge 0,\quad \sum_i s_i = 1$

### 有约束优化的形式

PPT 示例：

> For a given $f: \mathbb{R}^m \to \mathbb{R}$
 $s^* = \min f(s)$ subject to (shortly s.t.) some constraint on $s$ such as $s \ge 0$

形式化写法：

$$\begin{aligned} \min_{s \in \mathbb{R}^m} \quad & f(s) \ \text{s.t.} \quad & s \ge 0 \end{aligned}$$

解释：

- “s.t.” 是 “subject to” 的缩写，表示“在满足……约束的条件下”。
- 这就是典型的 <b>constrained optimization（有约束优化）</b>。

在机器学习中，约束常见于：

- 参数非负（如某些概率模型）；
- 参数和为 1（概率分布）；
- 正则化可以视为软约束（通过 penalty term）。

---

## Optimization：全局/局部、直接/迭代、可导/不可导

这一页 PPT 是一个概念分类页，配了一张函数图像（有多个局部极小值）。主要强调几组对立概念：

### Global optimum vs Local optimum

- <b>Global optimum（全局最优）</b>： 
    - 对所有可行解 $s \in D$，$s^*$ 的目标值最好： $f(s^*) \le f(s), \quad \forall s \in D$

- <b>Local optimum（局部最优）</b>： 
    - 在某个邻域内最优，但不一定是全局最优：  $\exists \text{邻域 } U(s^*), \text{ s.t. } f(s^*) \le f(s), \forall s \in U(s^*)$ 

图中那条曲线有多个“谷底”，其中最深的是 global minimum，其余是 local minima。

在非凸优化（non-convex optimization）中，gradient descent 可能卡在 local minima 或 saddle points。

### Direct vs Iterative optimization

- <b>Direct optimization（直接优化）</b>： 
    - 有解析解（closed-form solution），可以一次性算出最优解；
    - 例如线性回归在某些设定下可以用 normal equation 直接求解。

- <b>Iterative optimization（迭代优化）</b>： 
    - 通过迭代更新解：
 $s_{t+1} = \text{Update}(s_t)$
    - 典型代表：gradient descent, SGD, SPSA 等。

在大规模机器学习中，<b>迭代方法是主流</b>，因为解析解往往不存在或计算代价太大。

### Differentiable vs Nondifferentiable objectives

- <b>Differentiable objective（可导目标函数）</b>： 
    - 可以计算 gradient（梯度），适合 gradient-based methods（基于梯度的方法）。

- <b>Nondifferentiable objective（不可导目标函数）</b>： 
    - 比如： 
        - $L_1-norm$（$|x|_1$ 在 0 点不可导）；
        - ranking correlations（排序相关性指标）如 Kendall’s tau；
    - 这类目标函数不适合直接用标准 gradient descent，需要其他方法（如 SPSA）。

### Constraints 的重要性

PPT 提到：

> Constraints play a crucial role
 Iterative optimization techniques

意思是：

- 约束会极大影响优化问题的性质和可解性；
- 很多时候需要专门的 constrained optimization methods（如 projected gradient descent, Lagrange multipliers 等）；
- 这里为后面迭代方法（gradient descent, SGD, SPSA）做铺垫。

---

## Gradient Descent（梯度下降）

这一页是非常核心的内容之一。

### 目标：最小化一个可导的 objective function

Gradient Descent (for minimizing an objective $f(s)$)

我们考虑：

$$\min_{s \in \mathbb{R}^m} f(s)$$

假设 $f$ 是 differentiable（可微），可以计算 gradient。

### 算法步骤（标准 Gradient Descent）

PPT 步骤：

1. <b>Step 1: initialize a solution</b>  
 $s_0 \in \mathbb{R}^m$
    - 随机初始化或用某种启发式初始化。

2. <b>Step 2: evaluate the gradient</b>  
 $g_t \in \mathbb{R}^m \quad \text{s.t.} \quad g_t = \frac{\partial f(s_t)}{\partial s_t}$
    - 也就是在当前点 $s_t$ 计算梯度 $g_t = \nabla f(s_t)$。

3. <b>Step 3: update rule</b>  
 $s_{t+1} \leftarrow s_t - \eta g_t$
    - PPT 中写的是： 
    > - $s_{t+1} \leftarrow s_t - \lambda g_t$
 这里 $\lambda$就是 learning rate（学习率），有时记作 $\eta$ 或 $\alpha$。
    - 含义：沿着负梯度方向（下降方向）走一步。

4. <b>Step 4: stopping condition</b>
    - 如果停止条件不满足（比如迭代次数未到、梯度还不够小、函数值还在明显下降），回到 Step 2；
    - 否则停止，输出当前 $s_t$ 作为近似最优解。

### 优点与缺点

PPT：

> Main advantage: very easy to implement and theoretical benefits for well-behaving objective function $f$ and/or feasible set $D$

解释：

- <b>优点</b>： 
    - 实现简单；
    - 对于“well-behaving”的目标函数（比如 convex, smooth）和可行域，有很好的理论保证（如收敛到 global minimum）。

> Main disadvantage: only possible for differentiable $f$)

- <b>缺点</b>： 
    - 需要目标函数可导；
    - 对于不可导或黑盒函数（只给你 function value，不给 gradient），就不能直接用。

这为后面引出 SPSA 做铺垫。

---

## Convexity：凸性与全局最优

这一页是关于 convex functions（凸函数）的性质，以及它们与 gradient descent 收敛的关系。

### 凸函数的定义

PPT：

> $f(\cdot)$ is convex if
$f(\theta s + (1-\theta) q) \le \theta f(s) + (1-\theta) f(q), \quad \forall \theta \in [0,1]$

解释：

- 对任意两点 (s, q) 以及任意 $\theta \in [0,1]$， 
    - $\theta s + (1-\theta) q$ 是它们之间线段上的点；
    - 凸性要求：
 $f(\text{线段上的点}) \le \text{两端点函数值的线性插值}$

- 几何直观： 
    - 函数图像“在连线之下或重合”，没有“凹下去”的地方。

### 凸性在机器学习中的重要性

PPT：

> Convexity is important in machine learning due to having global minima (for strict convexity there is a unique global minimum)

解释：

- 对于 convex function： 
    - <b>任何 local minimum 都是 global minimum</b>；

- 对于 <b>strictly convex（严格凸）</b>： 
    - global minimum 是唯一的。

- 这意味着： 
    - 如果我们用 gradient descent 优化一个 convex objective，就不会被“坏的局部极小值”困住；
    - 只要算法收敛，就收敛到 global minimum。

这就是为什么很多经典 ML 模型（如 logistic regression）设计成 convex optimization problem——理论上更好分析、更稳定。

### Gradient Descent 在凸函数上的收敛性质

PPT：

> Gradient descent converges to a global minimum when applied to convex functions

解释：

- 在 convex objective 上，gradient descent 在合适的 learning rate 下可以保证收敛到 global minimum。

PPT 还提到：

> Learning rate $\lambda$ impacts the evolution of the movement, which can be selected to be a constant or annealing as a function of (t) (e.g. $\lambda_t = \frac{1}{t}$)

解释：

- <b>Learning rate（学习率）</b> $\lambda$ 决定每一步走多大： 
    - 太大：可能震荡甚至发散；
    - 太小：收敛很慢。

- 可以： 
    - 用常数 learning rate；
    - 或者用随时间衰减的 learning rate（annealing），例如： $\lambda_t = \frac{1}{t}$

PPT 还提到：

> Small enough ensures monotonic decreases s.t. $f(x_t) > f(x_{t+1})$

- 如果 learning rate 足够小，可以保证每一步函数值单调下降：$f(x_{t+1}) < f(x_t)$

### Strict convexity（严格凸）

PPT：

> Strict convexity assured for with
 $f(\theta s + (1-\theta) q) < \theta f(s) + (1-\theta) f(q), \quad \forall \theta \in (0,1)$

解释：

- 与普通 convex 的区别是：不再是“≤”，而是严格“小于”；
- 结果：global minimum 唯一；
- 对 optimization 来说，这意味着解的唯一性，理论上更干净。

---

## Stochastic Gradient Descent（SGD）

这一页是从 deterministic gradient descent 过渡到 stochastic 版本。

### 为什么需要 SGD

PPT：

> SGD considers an approximation of the gradient for more resilient solutions through gradient calculation based on a data sample only

解释：

- 在机器学习中，目标函数通常是 empirical risk（经验风险）： $f(s) = \frac{1}{N} \sum_{i=1}^N \ell(s; z_i)$ 其中 $z_i$是数据样本。
- 直接计算 full gradient： $\nabla f(s) = \frac{1}{N} \sum_{i=1}^N \nabla \ell(s; z_i)$ 对大数据集来说非常昂贵。
- <b>SGD（Stochastic Gradient Descent）</b> 用一个或少量样本近似梯度： 
    - 每次只用一个 observation (z) 或一个 mini-batch；
    - 得到一个 noisy 的梯度估计，但计算成本大幅降低；
    - 在实践中反而有更好的泛化性能（某种“噪声正则化”效果）。

### SGD 算法步骤（PPT 版本）

PPT：

1. <b>Step 1: Initialize a solution</b>  
 $s \in \mathbb{R}^m$
2. <b>Step 2: For a selected observation </b>$z \in Z$<b>evaluate the gradient</b>  
 $g \in \mathbb{R}^m \quad \text{s.t.} \quad g = \frac{\partial f(s)}{\partial s}$ 这里更准确地说是：
    - 用单个样本 $z$ 计算对应的 loss 的梯度，作为对整体梯度的估计。

3. <b>Step 3: Update</b>  
 $s \leftarrow s - \lambda g$ PPT 写的是：

> 1. $s_i \leftarrow s_i - \lambda g_i$
 即对每个分量做同样的更新。

1. <b>Step 4: Stopping condition</b>
    - 如果停止条件不满足（迭代次数、收敛标准等），回到 Step 2。

PPT 还说：

> We will get back to SGD when we go through training neural networks

- 说明这只是一个预告，后面在 neural networks training 时会详细展开： 
    - mini-batch SGD；
    - momentum, Adam 等变体。

---

## Simultaneous Perturbation Stochastic Approximation（SPSA）

这是本节的另一个重点：<b>当目标函数不可导或未知时的优化方法</b>。

### 为什么需要 SPSA

PPT：

> Gradient descent based approaches assume the objective function to be differentiable and actually exist!

解释：

- Gradient-based methods（如 GD, SGD）要求： 
    - 目标函数 (f) 可导；
    - 并且我们能计算或近似其梯度。

但现实中有很多情况不满足：

> Numerous real world applications concerning training learning systems yet have settings where either the objective function is not differentiable (e.g. (L_1)-norm, ranking correlations like Kendall's tau ...) or the function is unknown but there exist a noiseless or noisy measure of quality for given solution

两类典型场景：

1. <b>Nondifferentiable objective（不可导目标）</b>： 
    - $L_1-norm$：在 0 点不可导；
    - ranking correlations（排序相关性指标）如 Kendall’s tau：本身是基于排序的离散函数，很难求导。

2. <b>Black-box objective（黑盒目标）</b>： 
    - 函数形式未知；
    - 但你可以给一个解 $s$，系统返回一个“质量评价”（可能有噪声）。

在这些场景下，<b>SPSA</b> 就派上用场。

### SPSA 的核心思想

PPT：

> SPSA is a very robust method to perform optimization under these settings by only considering the evaluations of the objective functions
 Ideal for black-box optimization

核心思想：

- 不需要显式 gradient；
- 只需要能在不同点上 evaluate objective function（即给你 (f(s)) 或 noisy version）；
- 通过<b>随机扰动（random perturbation）</b>来近似梯度；
- 每次只需要 <b>两次函数评估</b>（不随维度 (m) 增长），这是 SPSA 的关键优势。

---

## SPSA ：算法步骤与梯度近似

这一页给出了 SPSA 的算法框架和梯度近似公式。

### 超参数（hyperparameters）

PPT：

> Given five hyperparameters ($a, c, A, \gamma, \alpha$) the sketch of SPSA algorithm for minimizing an objective (f(s)) is in the following:

这里的五个超参数：

- $a$：learning rate 的缩放因子；
- $c$：perturbation scaling factor 的缩放因子；
- $A$：控制学习率衰减的平移参数；
- $\gamma$：控制 perturbation 衰减速度；
- $\alpha$：控制 learning rate 衰减速度。

### SPSA 算法步骤

PPT 步骤：

1. <b>Step 1: Initialize a solution</b>  
 $s_1 \in \mathbb{R}^m$
2. <b>Step 2: Evaluate the gradient approximation for each time step (t)</b>  
 $g_t \in \mathbb{R}^m \quad \text{s.t.} \quad g_t = \frac{f(s_t + \beta_t \Delta_t) - f(s_t - \beta_t \Delta_t)}{2 \beta_t \Delta_t}$
    这里要注意几点：
    - $\Delta_t$是一个随机向量（perturbation vector）： 
        - PPT： 
        > - randomly drawing the perturbation vector $\Delta_t$ with each entry $\delta_i \sim \text{Rademacher} \ \forall i$- <b>Rademacher distribution</b>：
 $\delta_i = \begin{cases} +1 & \text{with prob } 0.5 \ -1 & \text{with prob } 0.5 \end{cases}$
    - $\beta_t$ 是 perturbation scaling factor： 
        - PPT： 
        > - set the perturbation scaling factor $\beta_t = \frac{c}{(t+1)^\gamma}$
    - 分子：
 $f(s_t + \beta_t \Delta_t) - f(s_t - \beta_t \Delta_t)$ 是在两个对称扰动点上的函数值差；
    - 分母：
 $2 \beta_t \Delta_t$ 是向量，<b>注意 PPT 特别强调</b>： 
    > - Note the vector division in the calculation of the approximate gradient in Step 2 is pairwise. 即： - 对每个维度 (i)： $g_{t,i} = \frac{f(s_t + \beta_t \Delta_t) - f(s_t - \beta_t \Delta_t)}{2 \beta_t \delta_{t,i}}$ - 这是一个<b>同时扰动所有维度</b>但只用两次函数评估就估计出所有维度梯度的技巧。

3. <b>Step 3: Update rule</b>
    1. PPT：
    > 1. $s_t \leftarrow s_t - \alpha_t g_t) (i.e. (s_{t,i} \leftarrow s_{t,i} - \alpha_t g_{t,i}))$considering
 the learning rate for $t$ as $\alpha_t = \frac{a}{(t+1 + A)^\alpha}$
    1. 解释：
        - 学习率随时间衰减： $\alpha_t = \frac{a}{(t+1 + A)^\alpha}$
        - 更新公式： $s_{t+1} = s_t - \alpha_t g_t$

4. <b>Step 4: Stopping condition</b>
    - 与前面类似：如果停止条件不满足，回到 Step 2。

### SPSA 的关键点总结

- 每次迭代： 
    - 生成一个随机向量 $\Delta_t$，每个分量为 ±1；
    - 在 $s_t + \beta_t \Delta_t$ 和 $s_t - \beta_t \Delta_t$ 两个点上评估 (f)；
    - 用这两个函数值构造一个近似梯度 $g_t$；
    - 用学习率 $\alpha_t$ 更新 $s_t$。

- 优势： 
    - <b>只需要两次函数评估</b>，与维度 $m$ 无关；
    - 适合高维、黑盒、不可导、甚至 noisy 的目标函数。

---

## SPSA (3)：超参数与其作用

这一页专门解释前面提到的 gain sequences（增益序列）和超参数的含义。

### Gain sequences 定义

PPT：

> Given the gain values:
 $\beta_t = \frac{c}{(t+1)^\gamma}, \quad \alpha_t = \frac{a}{(t+1 + A)^\alpha}$

解释：

- $\beta_t$：perturbation scaling factor（扰动尺度）；
- $\alpha_t$：learning rate（学习率）；
- 都是随时间 (t) 衰减的序列。

### 各个超参数的含义与典型取值

PPT 对每个参数给了直观解释和常见范围：

1. $c$：

> 1. $c$: Weights the impact of the perturbation with 0.1 or 0.005 being common choices
    - 控制扰动的初始尺度；
    - 值越大，扰动越大；
    - 常见取值：0.1 或 0.005。

1. $\gamma$：

> 1. $\gamma$: Affects the rate of decay for the perturbation scaling factor and usually selected to be $\gamma \in [0.101, 0.166]$
    - 控制 $\beta_t$ 的衰减速度；
    - $\gamma$ 越大，$\beta_t$ 衰减越快；
    - 常见范围：[0.101, 0.166]。

1. $a$：

> 1. $a$: Scales the learning rate and ideally selected to be (a \in [0.01, 0.2])
    - 控制学习率的整体尺度；
    - 常见范围：[0.01, 0.2]。

1. $A$：

> 1. $A$: A nonnegative constant that plays a role in preventing large jumps in the function space with common approaches setting the value to 10% to the maximum number of iterations
    - 非负常数；
    - 作用：在初期避免 learning rate 过大导致的“跳太远”；
    - 常见做法：设为最大迭代次数的 10%。

1. $\alpha$：

> 1. $\alpha$: Affects the rate of decay for the learning rate and usually selected to be $\alpha \in [0.602, 1]$
    - 控制 $\alpha_t$的衰减速度；
    - 常见范围：[0.602, 1]。

### 直观理解这些超参数

- $\beta_t$（由 $c, \gamma$ 决定）： 
    - 决定你在当前点附近“探测”的范围；
    - 初期可以大一点，后期逐渐变小，类似“粗搜→细搜”。

- $\alpha_t$（由 $a, A, \alpha$ 决定）： 
    - 决定你每次更新的步长；
    - 初期可以大一点，帮助快速接近较优区域；
    - 后期逐渐减小，帮助稳定收敛。

---

## 整体知识结构小结（按考试视角）

最后我给你把这份 PPT 的知识点按“考试/理解重点”再压缩成一个结构化清单，方便你回顾：

1. <b>Optimization 基本概念</b>
    - objective function $f: D \to \mathbb{R}$；
    - feasible set $D$；
    - solution $s$；
    - maximize vs minimize；
    - 关心 $s^*$ 还是 $f(s^*)$。

2. <b>Constraints（约束）</b>
    - nonnegativity：$s \ge 0$；
    - stochasticity：$s_i \ge 0, \sum_i s_i = 1$；
    - 写法：$\min f(s)\ \text{s.t. } \text{constraints on } s$。

3. <b>Optimization 分类</b>
    - global vs local optimum；
    - direct vs iterative optimization；
    - differentiable vs nondifferentiable objectives；
    - constraints 的重要性。

4. <b>Gradient Descent（GD）</b>
    - 目标：最小化可导的 $f(s)$；
    - 步骤：初始化 → 计算梯度 → 更新 $s_{t+1} = s_t - \lambda g_t$ → 检查停止条件；
    - 优点：简单、在 convex 情况下有理论保证；
    - 缺点：要求 (f) 可导。

5. <b>Convexity（凸性）</b>
    - 定义：
 $f(\theta s + (1-\theta) q) \le \theta f(s) + (1-\theta) f(q)$
    - strict convexity：不等号变为“&lt;”，global minimum 唯一；
    - 在 ML 中的重要性：local minimum = global minimum；
    - gradient descent 在 convex 上收敛到 global minimum；
    - learning rate：常数或衰减（如 $\lambda_t = 1/t)$，足够小可保证 $f(x_{t+1}) < f(x_t)$。

6. <b>Stochastic Gradient Descent（SGD）</b>
    - 用样本近似梯度；
    - 步骤：初始化 → 选一个 observation (z) → 计算基于 (z) 的梯度估计 → 更新 → 重复；
    - 与 neural networks training 强相关（后续会详细讲）。

7. <b>SPSA（Simultaneous Perturbation Stochastic Approximation）</b>
    - 适用于： 
        - 不可导目标（如 $L_1$-norm, Kendall’s tau）；
        - 黑盒目标（函数形式未知，只能 evaluate）；
    - 只用函数值，不需要显式梯度；
    - 每次迭代只需两次函数评估，与维度无关；
    - 算法： 
        - 随机生成 Rademacher 向量 $\Delta_t$；
        - 计算 $f(s_t + \beta_t \Delta_t)$ 和 $f(s_t - \beta_t \Delta_t)$；
        - 用 pairwise division 构造梯度近似 $g_t$；
        - 用 $\alpha_t$ 更新$s_t$。

8. <b>SPSA 超参数</b>
    - $\beta_t = \frac{c}{(t+1)^\gamma}$，$\alpha_t = \frac{a}{(t+1 + A)^\alpha}$；
    - $c$：扰动尺度，常用 0.1 或 0.005；
    - $\gamma$：扰动衰减速率，([0.101, 0.166])；
    - $a$：学习率尺度，([0.01, 0.2])；
    - $A$：防止初期步长过大，常设为最大迭代次数的 10%；
    - $\alpha$：学习率衰减速率，([0.602, 1])。

---

如果你愿意，下一步我可以帮你把这些内容<b>转成英文考试用的双语术语表</b>（比如“凸函数 convex function”、“全局最优 global optimum”、“随机梯度下降 stochastic gradient descent”等），或者帮你设计几道典型考题（证明题/概念题/算法步骤题）来检验理解。你更想先做哪一块？

# Machine Learning

## <b>引言：学习系统与机器学习</b>

学习系统（Learning Systems）是能够根据数据或环境交互自动调整内部参数的系统。它们的目标是通过适应性机制解决复杂问题。

学习系统的特点包括：

- <b>训练阶段的单次适应</b>（如传统监督学习）
- <b>基于上下文的条件推断</b>（如序列模型）
- <b>持续学习</b>（如在线学习）
- <b>处理现实世界的不确定性、高维度、多模态数据</b>
    
现代系统常采用<b>混合式学习方法</b>，结合规则系统与数据驱动模型，以应对复杂任务。

---

## <b>学习范式（Learning Paradigms）</b>

学习范式分为两大类：<b>监督方式</b>与<b>过程方式</b>。

### <b>监督方式（Supervision-based Paradigms）</b>

#### <b> Supervised Learning（监督学习）</b>

- 使用<b>带标签数据</b>训练模型
- 目标：学习输入到输出的映射
- 典型任务：分类、回归

#### <b>Semi-supervised Learning（半监督学习）</b>

- 少量<b>金标签（gold labels）</b> + 大量<b>未标注数据</b>
- 先用金标签训练，再利用模型生成的**银标签（silver labels）**继续训练

#### <b>Unsupervised Learning（无监督学习）</b>

- 使用<b>无标签数据</b>
- 目标：发现模式、结构、表示
- 典型任务：聚类、降维

#### <b>Self-supervised Learning（自监督学习）</b>

- 从无标签数据中<b>自动构造训练任务</b>
- 常用于预训练（如语言模型）

#### <b>Reinforcement Learning（强化学习）</b>

- Agent 与环境交互，通过奖励学习策略（policy）
- 目标：最大化长期回报

---

### <b>过程方式（Process-based Paradigms）</b>

#### <b>Active Learning（主动学习）</b>

- 模型主动选择最有价值的数据点进行标注

#### <b>Curriculum Learning（课程学习）</b>

- 按难度排序训练样本，提高学习效率

#### <b>Transfer Learning（迁移学习）</b>

- 将已学知识迁移到新任务

#### <b>Online Learning（在线学习）</b>

- 模型持续更新，适应数据流
    
---

## <b>构建学习系统的工作流程</b>

一个完整的学习系统通常包含四个阶段：

1. <b>Data Acquisition（数据获取）</b>
2. <b>Data Processing（数据处理）</b>
3. <b>Modeling（建模）</b>
4. <b>Output Utilization（输出利用）</b>
    
---

## <b>学习系统的典型循环（Learning Cycle）</b>

学习过程通常遵循以下循环：

1. <b>Observation（观察）</b>
2. <b>Acting（行动）</b>
3. <b>Evaluation（评估）</b>
4. <b>Update（更新）</b>
5. <b>Consolidation（巩固）</b>
    
---

## <b>优化在学习系统中的作用</b>

给定训练集 $D_{\text{Train}}$，学习过程可视为求解：

$$w^* = \arg\min_w f(w \mid D_{\text{Train}})$$

并要求模型在未见数据（如 $D_{\text{Test}}$）上具有良好泛化能力。

### <b>常见优化方法</b>

<table>
<colgroup>
<col width="200"/>
<col width="200"/>
</colgroup>
<tbody>
<tr><td><p>场景</p></td><td><p>方法</p></td></tr>
<tr><td><p>小规模、凸优化</p></td><td><p>Gradient Descent</p></td></tr>
<tr><td><p>大规模、凸/非凸</p></td><td><p>Stochastic Gradient Descent (SGD)</p></td></tr>
<tr><td><p>超大规模深度学习</p></td><td><p>Adam / Adagrad</p></td></tr>
<tr><td><p>不可微目标</p></td><td><p>零阶优化（Gradient-free）</p></td></tr>
</tbody>
</table>

#### <b>挑战</b>

- 局部最优
- 可微性问题
- 超参数调优
- 收敛性
- 模型偏差
    
---

## <b>泛化能力：过拟合与欠拟合</b>

### <b>Overfitting（过拟合）</b>

- 训练集表现好，但测试集表现差
- 原因：模型过于复杂，学习到噪声
    
<b>解决方法：</b>

- 交叉验证
- 正则化
- 早停（early stopping）
- 噪声注入
- 集成学习
- 数据增强
- 简化模型结构
    
### <b>Underfitting（欠拟合）</b>

- 训练集和测试集都表现差
- 原因：模型过于简单
    
<b>解决方法：</b>

- 增加模型复杂度
- 减少正则化
    
---

## <b>常见机器学习任务</b>

### <b>监督任务</b>

- <b>Classification（分类）</b>
- <b>Regression（回归）</b>
    
### <b>无监督任务</b>

- <b>Clustering（聚类）</b>
- <b>Dimensionality Reduction（降维）</b>
    
### <b>其他任务</b>

- <b>Ranking（排序）</b>
- <b>Anomaly Detection（异常检测）</b>
- <b>Association Rule Learning（关联规则）</b>
- <b>Reinforcement Learning（强化学习）</b>
- <b>Generative Modeling（生成建模）</b>
    
---

## <b>线性分类器（Linear Classifier）</b>

线性分类器定义为：

$$c(x) = v^T x + v_0$$

- 若 $c(x) > 0$ → 类别 $C_1$
- 若 $c(x) < 0$ → 类别 $C_2$
    
可写为：

$$c(x) = w^T \tilde{x}$$

其中：

- $$w = [v_0, v]^T$$
- $$\tilde{x} = [1, x]^T$$
    
---

## <b>分类性能评估指标</b>

基于混淆矩阵：

<table>
<colgroup>
<col width="200"/>
<col width="200"/>
<col width="200"/>
</colgroup>
<tbody>
<tr><td></td><td><p>Real True</p></td><td><p>Real False</p></td></tr>
<tr><td><p>Pred True</p></td><td><p>TP</p></td><td><p>FP</p></td></tr>
<tr><td><p>Pred False</p></td><td><p>FN</p></td><td><p>TN</p></td></tr>
</tbody>
</table>

指标：

- <b>Accuracy</b>

$$\frac{TP + TN}{TP + TN + FP + FN}$$

- <b>Recall</b>

$$\frac{TP}{TP + FN}$$

- <b>Precision</b>

$$\frac{TP}{TP + FP}$$

- <b>F1-score</b>

$$F_1 = \frac{2PR}{P + R}$$

---

## <b>Logistic Regression（逻辑回归）</b>

逻辑回归是一个<b>概率二分类模型</b>。

### <b>Sigmoid 函数</b>

$$\sigma(s) = \frac{1}{1 + e^{-s}}$$

输出范围 $[0,1]$，可解释为概率。

### <b>模型定义</b>

给定数据：

- $$x_i \in \mathbb{R}^m$$
- $$y_i \in \{0,1\}$$
    
预测：

$$p_i = \sigma(w^T x_i)$$

### <b>似然与损失函数</b>

单样本似然：

$$q_i = p_i^{y_i} (1 - p_i)^{1 - y_i}$$

整体似然：

$$Q = \prod_i q_i$$

负对数似然（NLL）：

$$-\log Q = -\sum_i \left[ y_i \log p_i + (1 - y_i)\log(1 - p_i) \right]$$

即<b>交叉熵损失（cross-entropy loss）</b>。

---

## <b>Logistic Regression 的优化：梯度下降</b>

目标：

$$w^* = \arg\min_w -\log Q$$

梯度：

$$g = -X (y - \sigma(Xw))$$

更新规则：

$$w \leftarrow w - \eta g$$

---

## <b>文本分类示例：铃声短信识别</b>

给定 7 条短信，标签为：

- 前 4 条：非铃声（0）
- 后 3 条：铃声（1）
    
训练得到权重向量 $w \in \mathbb{R}^{69}$。

### <b>特征重要性</b>

绝对值大于 0.25 的词：

- are (−0.27)
- claim (−0.25)
- ringtone (0.43)
- tone (0.27)
- you (−0.27)
    
### <b>推断示例</b>

对两条新短信 q1、q2 进行向量化后：

- $\sigma(w^T q1) = 0.26$ → 非铃声
- $\sigma(w^T q2) = 0.65$ → 铃声
    
---

## <b>总结</b>

这份讲解文档涵盖了 PPT 中的全部内容，并按照逻辑顺序重新组织为：

1. 学习系统基础  
2. 学习范式  
3. 工作流程与学习循环  
4. 优化与泛化  
5. 常见任务  
6. 线性分类器  
7. 分类评估指标  
8. Logistic Regression 的完整推导  
9. 文本分类案例  
    
[预测试卷part 4](/QRiFwuy0liWXaGk5KDqcgG4dnYf/O1qawgEaMiZ5t4ku4T9czdAynj0)

