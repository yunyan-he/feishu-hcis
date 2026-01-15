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
> # $$\operatorname{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)
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

# Optimization

### 一、整体结构与大图景

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

## 二、Optimization：优化的基本概念

### 2.1 Optimization 在学习系统中的地位

# PPT 原话：

> # Optimization is currently the core of learning systems to efficiently build data driven complex models
 A.k.a. programming

# 解释：

- <b>Optimization（优化）</b>现在是构建复杂 data-driven models（数据驱动模型）的核心工具。
- 在很多机器学习/深度学习场景中，“写程序”的本质就是： 
    - 设计一个 objective function（目标函数）
    - 然后通过 optimization 找到最优参数，使模型表现最好。

- 所以老师说 “A.k.a. programming” 是在强调： 

> - 在现代 ML 里，编程很多时候就是在做 optimization。

### 2.2 优化问题的形式化定义

# PPT 中给出的形式：

- 有一个函数
 [ f(s): D \to \mathbb{R} ] 
    - <b>(f)</b>：objective function（目标函数）
    - <b>(D)</b>：feasible set（可行域/可行集合）
    - <b>(s)</b>：solution（解），也可以理解为参数向量、模型参数等

# <b>Optimization 的任务</b>：在可行域 (D) 中找到一个最优解 (s^*)，使得：

- <b>最大化（maximize）</b>： [ f(s^*) \ge f(s_i), \quad \forall s_i \in D ]
- <b>最小化（minimize）</b>： [ f(s^*) \le f(s_i), \quad \forall s_i \in D ]

# 这里 PPT 用了类似的描述：

> # maximize (f): (f(s^*) &gt; f(s_i)) ∀(s_i \in D)
 minimize (f): (f(s^*) \le f(s_i)) ∀(s_i \in D)

# 注意：

- 在机器学习中，<b>更常见的是最小化问题</b>，比如最小化 loss function（损失函数）。
- 但最大化和最小化可以互相转化，比如最大化 (f) 等价于最小化 (-f)。

### 2.3 我们关心什么：最优解 vs 最优值

# PPT 提到：

> # Depending on the setting we might be interested either in (s^*) (the optimal solution) or the minimum error value (f(s^*)) depending on our application

# 解释：

- 有时我们关心的是<b>最优解本身</b> (s^*)，比如： 
    - 最优的模型参数；
    - 最优的决策策略；

- 有时我们更关心的是<b>最优值</b> (f(s^*))，比如： 
    - 最小误差是多少；
    - 最大收益是多少。

# 在机器学习中，两者都重要：

- 训练时我们要找到参数 (s^*)；
- 评估时我们看 (f(s^*))（比如最小 loss 或最大 accuracy）。

---

## 三、Optimization (2)：约束（constraints）

### 3.1 约束的概念

# PPT：

> # Sometimes the optimization setting requires ancillary conditions (a.k.a. constraints)
 Examples include nonnegativity or stochasticity constraints

# 解释：

- 在很多实际问题中，解 (s) 不能随便取，而是要满足一些<b>约束条件（constraints）</b>。
- 常见约束： 
    - <b>nonnegativity constraint（非负约束）</b>：
 [ s \ge 0 ] 即每个分量 (s_i \ge 0)
    - <b>stochasticity constraint（随机性约束）</b>：
 比如 (s) 表示一个概率分布，则需要： [ s_i \ge 0,\quad \sum_i s_i = 1 ]

### 3.2 有约束优化的形式

# PPT 示例：

> # For a given (f: \mathbb{R}^m \to \mathbb{R})
 (s^* = \min f(s)) subject to (shortly s.t.) some constraint on (s) such as (s \ge 0)

# 形式化写法：

# [ \begin{aligned} \min_{s \in \mathbb{R}^m} \quad & f(s) \ \text{s.t.} \quad & s \ge 0 \end{aligned} ]

# 解释：

- “s.t.” 是 “subject to” 的缩写，表示“在满足……约束的条件下”。
- 这就是典型的 <b>constrained optimization（有约束优化）</b>。

# 在机器学习中，约束常见于：

- 参数非负（如某些概率模型）；
- 参数和为 1（概率分布）；
- 正则化可以视为软约束（通过 penalty term）。

---

## 四、Optimization (3)：全局/局部、直接/迭代、可导/不可导

# 这一页 PPT 是一个概念分类页，配了一张函数图像（有多个局部极小值）。主要强调几组对立概念：

### 4.1 Global optimum vs Local optimum

- <b>Global optimum（全局最优）</b>： 
    - 对所有可行解 (s \in D)，(s^*) 的目标值最好： [ f(s^*) \le f(s), \quad \forall s \in D ]

- <b>Local optimum（局部最优）</b>： 
    - 在某个邻域内最优，但不一定是全局最优： [ \exists \text{邻域 } U(s^*), \text{ s.t. } f(s^*) \le f(s), \forall s \in U(s^*) ]

# 图中那条曲线有多个“谷底”，其中最深的是 global minimum，其余是 local minima。

# 在非凸优化（non-convex optimization）中，gradient descent 可能卡在 local minima 或 saddle points。

### 4.2 Direct vs Iterative optimization

- <b>Direct optimization（直接优化）</b>： 
    - 有解析解（closed-form solution），可以一次性算出最优解；
    - 例如线性回归在某些设定下可以用 normal equation 直接求解。

- <b>Iterative optimization（迭代优化）</b>： 
    - 通过迭代更新解：
 [ s_{t+1} = \text{Update}(s_t) ]
    - 典型代表：gradient descent, SGD, SPSA 等。

# 在大规模机器学习中，<b>迭代方法是主流</b>，因为解析解往往不存在或计算代价太大。

### 4.3 Differentiable vs Nondifferentiable objectives

- <b>Differentiable objective（可导目标函数）</b>： 
    - 可以计算 gradient（梯度），适合 gradient-based methods（基于梯度的方法）。

- <b>Nondifferentiable objective（不可导目标函数）</b>： 
    - 比如： 
        - (L_1)-norm（(|x|_1) 在 0 点不可导）；
        - ranking correlations（排序相关性指标）如 Kendall’s tau；
    - 这类目标函数不适合直接用标准 gradient descent，需要其他方法（如 SPSA）。

### 4.4 Constraints 的重要性

# PPT 提到：

> # Constraints play a crucial role
 Iterative optimization techniques

# 意思是：

- 约束会极大影响优化问题的性质和可解性；
- 很多时候需要专门的 constrained optimization methods（如 projected gradient descent, Lagrange multipliers 等）；
- 这里为后面迭代方法（gradient descent, SGD, SPSA）做铺垫。

---

## 五、Gradient Descent（梯度下降）

# 这一页是非常核心的内容之一。

### 5.1 目标：最小化一个可导的 objective function

# PPT 标题：Gradient Descent (for minimizing an objective (f(s)))

# 我们考虑：

# [ \min_{s \in \mathbb{R}^m} f(s) ]

# 假设 (f) 是 differentiable（可微），可以计算 gradient。

### 5.2 算法步骤（标准 Gradient Descent）

# PPT 步骤：

1. <b>Step 1: initialize a solution</b>  
 [ s_0 \in \mathbb{R}^m ]
    - 随机初始化或用某种启发式初始化。

2. <b>Step 2: evaluate the gradient</b>  
 [ g_t \in \mathbb{R}^m \quad \text{s.t.} \quad g_t = \frac{\partial f(s_t)}{\partial s_t} ]
    - 也就是在当前点 (s_t) 计算梯度 (g_t = \nabla f(s_t))。

3. <b>Step 3: update rule</b>  
 [ s_{t+1} \leftarrow s_t - \eta g_t ]
    - PPT 中写的是： 
    > - (s_{t+1} \leftarrow s_t - \lambda g_t)
 这里 (\lambda) 就是 learning rate（学习率），有时记作 (\eta) 或 (\alpha)。
    - 含义：沿着负梯度方向（下降方向）走一步。

4. <b>Step 4: stopping condition</b>
    - 如果停止条件不满足（比如迭代次数未到、梯度还不够小、函数值还在明显下降），回到 Step 2；
    - 否则停止，输出当前 (s_t) 作为近似最优解。

### 5.3 优点与缺点

# PPT：

> # Main advantage: very easy to implement and theoretical benefits for well-behaving objective function (f) and/or feasible set (D)

# 解释：

- <b>优点</b>： 
    - 实现简单；
    - 对于“well-behaving”的目标函数（比如 convex, smooth）和可行域，有很好的理论保证（如收敛到 global minimum）。

> # Main disadvantage: only possible for differentiable (f)

- <b>缺点</b>： 
    - 需要目标函数可导；
    - 对于不可导或黑盒函数（只给你 function value，不给 gradient），就不能直接用。

# 这为后面引出 SPSA 做铺垫。

---

## 六、Convexity：凸性与全局最优

# 这一页是关于 convex functions（凸函数）的性质，以及它们与 gradient descent 收敛的关系。

### 6.1 凸函数的定义

# PPT：

> # (f(\cdot)) is convex if
 [ f(\theta s + (1-\theta) q) \le \theta f(s) + (1-\theta) f(q), \quad \forall \theta \in [0,1] ]

# 解释：

- 对任意两点 (s, q) 以及任意 (\theta \in [0,1])， 
    - (\theta s + (1-\theta) q) 是它们之间线段上的点；
    - 凸性要求：
 [ f(\text{线段上的点}) \le \text{两端点函数值的线性插值} ]

- 几何直观： 
    - 函数图像“在连线之下或重合”，没有“凹下去”的地方。

### 6.2 凸性在机器学习中的重要性

# PPT：

> # Convexity is important in machine learning due to having global minima (for strict convexity there is a unique global minimum)

# 解释：

- 对于 convex function： 
    - <b>任何 local minimum 都是 global minimum</b>；

- 对于 <b>strictly convex（严格凸）</b>： 
    - global minimum 是唯一的。

- 这意味着： 
    - 如果我们用 gradient descent 优化一个 convex objective，就不会被“坏的局部极小值”困住；
    - 只要算法收敛，就收敛到 global minimum。

# 这就是为什么很多经典 ML 模型（如 logistic regression）设计成 convex optimization problem——理论上更好分析、更稳定。

### 6.3 Gradient Descent 在凸函数上的收敛性质

# PPT：

> # Gradient descent converges to a global minimum when applied to convex functions

# 解释：

- 在 convex objective 上，gradient descent 在合适的 learning rate 下可以保证收敛到 global minimum。

# PPT 还提到：

> # Learning rate (\lambda) impacts the evolution of the movement, which can be selected to be a constant or annealing as a function of (t) (e.g. (\lambda_t = \frac{1}{t}))

# 解释：

- <b>Learning rate（学习率）</b> (\lambda) 决定每一步走多大： 
    - 太大：可能震荡甚至发散；
    - 太小：收敛很慢。

- 可以： 
    - 用常数 learning rate；
    - 或者用随时间衰减的 learning rate（annealing），例如： [ \lambda_t = \frac{1}{t} ]

# PPT 还提到：

> # Small enough ensures monotonic decreases s.t. (f(x_t) &gt; f(x_{t+1}))

- 如果 learning rate 足够小，可以保证每一步函数值单调下降： [ f(x_{t+1}) &lt; f(x_t) ]

### 6.4 Strict convexity（严格凸）

# PPT：

> # Strict convexity assured for with
 [ f(\theta s + (1-\theta) q) &lt; \theta f(s) + (1-\theta) f(q), \quad \forall \theta \in (0,1) ]

# 解释：

- 与普通 convex 的区别是：不再是“≤”，而是严格“小于”；
- 结果：global minimum 唯一；
- 对 optimization 来说，这意味着解的唯一性，理论上更干净。

---

## 七、Stochastic Gradient Descent（SGD）

# 这一页是从 deterministic gradient descent 过渡到 stochastic 版本。

### 7.1 为什么需要 SGD

# PPT：

> # SGD considers an approximation of the gradient for more resilient solutions through gradient calculation based on a data sample only

# 解释：

- 在机器学习中，目标函数通常是 empirical risk（经验风险）： [ f(s) = \frac{1}{N} \sum_{i=1}^N \ell(s; z_i) ] 其中 (z_i) 是数据样本。
- 直接计算 full gradient： [ \nabla f(s) = \frac{1}{N} \sum_{i=1}^N \nabla \ell(s; z_i) ] 对大数据集来说非常昂贵。
- <b>SGD（Stochastic Gradient Descent）</b> 用一个或少量样本近似梯度： 
    - 每次只用一个 observation (z) 或一个 mini-batch；
    - 得到一个 noisy 的梯度估计，但计算成本大幅降低；
    - 在实践中反而有更好的泛化性能（某种“噪声正则化”效果）。

### 7.2 SGD 算法步骤（PPT 版本）

# PPT：

1. <b>Step 1: Initialize a solution</b>  
 [ s \in \mathbb{R}^m ]
2. <b>Step 2: For a selected observation (z \in Z) evaluate the gradient</b>  
 [ g \in \mathbb{R}^m \quad \text{s.t.} \quad g = \frac{\partial f(s)}{\partial s} ] 这里更准确地说是：
    - 用单个样本 (z) 计算对应的 loss 的梯度，作为对整体梯度的估计。

3. <b>Step 3: Update</b>  
 [ s \leftarrow s - \lambda g ] PPT 写的是：

> 1. (s_i \leftarrow s_i - \lambda g_i)
 即对每个分量做同样的更新。

1. <b>Step 4: Stopping condition</b>
    - 如果停止条件不满足（迭代次数、收敛标准等），回到 Step 2。

# PPT 还说：

> # We will get back to SGD when we go through training neural networks

- 说明这只是一个预告，后面在 neural networks training 时会详细展开： 
    - mini-batch SGD；
    - momentum, Adam 等变体。

---

## 八、Simultaneous Perturbation Stochastic Approximation（SPSA）

# 这是本节的另一个重点：<b>当目标函数不可导或未知时的优化方法</b>。

### 8.1 为什么需要 SPSA

# PPT：

> # Gradient descent based approaches assume the objective function to be differentiable and actually exist!

# 解释：

- Gradient-based methods（如 GD, SGD）要求： 
    - 目标函数 (f) 可导；
    - 并且我们能计算或近似其梯度。

# 但现实中有很多情况不满足：

> # Numerous real world applications concerning training learning systems yet have settings where either the objective function is not differentiable (e.g. (L_1)-norm, ranking correlations like Kendall's tau ...) or the function is unknown but there exist a noiseless or noisy measure of quality for given solution

# 两类典型场景：

1. <b>Nondifferentiable objective（不可导目标）</b>： 
    - (L_1)-norm：在 0 点不可导；
    - ranking correlations（排序相关性指标）如 Kendall’s tau：本身是基于排序的离散函数，很难求导。

2. <b>Black-box objective（黑盒目标）</b>： 
    - 函数形式未知；
    - 但你可以给一个解 (s)，系统返回一个“质量评价”（可能有噪声）。

# 在这些场景下，<b>SPSA</b> 就派上用场。

### 8.2 SPSA 的核心思想

# PPT：

> # SPSA is a very robust method to perform optimization under these settings by only considering the evaluations of the objective functions
 Ideal for black-box optimization

# 核心思想：

- 不需要显式 gradient；
- 只需要能在不同点上 evaluate objective function（即给你 (f(s)) 或 noisy version）；
- 通过<b>随机扰动（random perturbation）</b>来近似梯度；
- 每次只需要 <b>两次函数评估</b>（不随维度 (m) 增长），这是 SPSA 的关键优势。

---

## 九、SPSA (2)：算法步骤与梯度近似

# 这一页给出了 SPSA 的算法框架和梯度近似公式。

### 9.1 超参数（hyperparameters）

# PPT：

> # Given five hyperparameters (a, c, A, \gamma, \alpha) the sketch of SPSA algorithm for minimizing an objective (f(s)) is in the following:

# 这里的五个超参数：

- (a)：learning rate 的缩放因子；
- (c)：perturbation scaling factor 的缩放因子；
- (A)：控制学习率衰减的平移参数；
- (\gamma)：控制 perturbation 衰减速度；
- (\alpha)：控制 learning rate 衰减速度。

# （下一页会详细解释这些参数的作用。）

### 9.2 SPSA 算法步骤

# PPT 步骤：

1. <b>Step 1: Initialize a solution</b>  
 [ s_1 \in \mathbb{R}^m ]
2. <b>Step 2: Evaluate the gradient approximation for each time step (t)</b>  
 [ g_t \in \mathbb{R}^m \quad \text{s.t.} \quad g_t = \frac{f(s_t + \beta_t \Delta_t) - f(s_t - \beta_t \Delta_t)}{2 \beta_t \Delta_t} ] 这里要注意几点：
    - (\Delta_t) 是一个随机向量（perturbation vector）： 
        - PPT： 
        > - randomly drawing the perturbation vector (\Delta_t) with each entry (\delta_i \sim \text{Rademacher} \ \forall i) - <b>Rademacher distribution</b>：
 [ \delta_i = \begin{cases} +1 & \text{with prob } 0.5 \ -1 & \text{with prob } 0.5 \end{cases} ]
    - (\beta_t) 是 perturbation scaling factor： 
        - PPT： 
        > - set the perturbation scaling factor (\beta_t = \frac{c}{(t+1)^\gamma})
    - 分子：
 [ f(s_t + \beta_t \Delta_t) - f(s_t - \beta_t \Delta_t) ] 是在两个对称扰动点上的函数值差；
    - 分母：
 [ 2 \beta_t \Delta_t ] 是向量，<b>注意 PPT 特别强调</b>： 
    > - Note the vector division in the calculation of the approximate gradient in Step 2 is pairwise. 即： - 对每个维度 (i)： [ g_{t,i} = \frac{f(s_t + \beta_t \Delta_t) - f(s_t - \beta_t \Delta_t)}{2 \beta_t \delta_{t,i}} ] - 这是一个<b>同时扰动所有维度</b>但只用两次函数评估就估计出所有维度梯度的技巧。

3. <b>Step 3: Update rule</b>
4. PPT：

> 1. (s_t \leftarrow s_t - \alpha_t g_t) (i.e. (s_{t,i} \leftarrow s_{t,i} - \alpha_t g_{t,i})) considering
 the learning rate for (t) as (\alpha_t = \frac{a}{(t+1 + A)^\alpha})

1. 解释：
    - 学习率随时间衰减： [ \alpha_t = \frac{a}{(t+1 + A)^\alpha} ]
    - 更新公式： [ s_{t+1} = s_t - \alpha_t g_t ]

2. <b>Step 4: Stopping condition</b>
    - 与前面类似：如果停止条件不满足，回到 Step 2。

### 9.3 SPSA 的关键点总结

- 每次迭代： 
    - 生成一个随机向量 (\Delta_t)，每个分量为 ±1；
    - 在 (s_t + \beta_t \Delta_t) 和 (s_t - \beta_t \Delta_t) 两个点上评估 (f)；
    - 用这两个函数值构造一个近似梯度 (g_t)；
    - 用学习率 (\alpha_t) 更新 (s_t)。

- 优势： 
    - <b>只需要两次函数评估</b>，与维度 (m) 无关；
    - 适合高维、黑盒、不可导、甚至 noisy 的目标函数。

---

## 十、SPSA (3)：超参数与其作用

# 这一页专门解释前面提到的 gain sequences（增益序列）和超参数的含义。

### 10.1 Gain sequences 定义

# PPT：

> # Given the gain values:
 [ \beta_t = \frac{c}{(t+1)^\gamma}, \quad \alpha_t = \frac{a}{(t+1 + A)^\alpha} ]

# 解释：

- (\beta_t)：perturbation scaling factor（扰动尺度）；
- (\alpha_t)：learning rate（学习率）；
- 都是随时间 (t) 衰减的序列。

### 10.2 各个超参数的含义与典型取值

# PPT 对每个参数给了直观解释和常见范围：

1. <b>(c)</b>：

> 1. (c): Weights the impact of the perturbation with 0.1 or 0.005 being common choices
    - 控制扰动的初始尺度；
    - 值越大，扰动越大；
    - 常见取值：0.1 或 0.005。

1. <b>(\gamma)</b>：

> 1. (\gamma): Affects the rate of decay for the perturbation scaling factor and usually selected to be (\gamma \in [0.101, 0.166])
    - 控制 (\beta_t) 的衰减速度；
    - (\gamma) 越大，(\beta_t) 衰减越快；
    - 常见范围：([0.101, 0.166])。

1. <b>(a)</b>：

> 1. (a): Scales the learning rate and ideally selected to be (a \in [0.01, 0.2])
    - 控制学习率的整体尺度；
    - 常见范围：([0.01, 0.2])。

1. <b>(A)</b>：

> 1. (A): A nonnegative constant that plays a role in preventing large jumps in the function space with common approaches setting the value to 10% to the maximum number of iterations
    - 非负常数；
    - 作用：在初期避免 learning rate 过大导致的“跳太远”；
    - 常见做法：设为最大迭代次数的 10%。

1. <b>(\alpha)</b>：

> 1. (\alpha): Affects the rate of decay for the learning rate and usually selected to be (\alpha \in [0.602, 1])
    - 控制 (\alpha_t) 的衰减速度；
    - 常见范围：([0.602, 1])。

### 10.3 直观理解这些超参数

- (\beta_t)（由 (c, \gamma) 决定）： 
    - 决定你在当前点附近“探测”的范围；
    - 初期可以大一点，后期逐渐变小，类似“粗搜→细搜”。

- (\alpha_t)（由 (a, A, \alpha) 决定）： 
    - 决定你每次更新的步长；
    - 初期可以大一点，帮助快速接近较优区域；
    - 后期逐渐减小，帮助稳定收敛。

---

## 十一、整体知识结构小结（按考试视角）

# 最后我给你把这份 PPT 的知识点按“考试/理解重点”再压缩成一个结构化清单，方便你回顾：

1. <b>Optimization 基本概念</b>
    - objective function (f: D \to \mathbb{R})；
    - feasible set (D)；
    - solution (s)；
    - maximize vs minimize；
    - 关心 (s^*) 还是 (f(s^*))。

2. <b>Constraints（约束）</b>
    - nonnegativity：(s \ge 0)；
    - stochasticity：(s_i \ge 0, \sum_i s_i = 1)；
    - 写法：(\min f(s)\ \text{s.t. } \text{constraints on } s)。

3. <b>Optimization 分类</b>
    - global vs local optimum；
    - direct vs iterative optimization；
    - differentiable vs nondifferentiable objectives；
    - constraints 的重要性。

4. <b>Gradient Descent（GD）</b>
    - 目标：最小化可导的 (f(s))；
    - 步骤：初始化 → 计算梯度 → 更新 (s_{t+1} = s_t - \lambda g_t) → 检查停止条件；
    - 优点：简单、在 convex 情况下有理论保证；
    - 缺点：要求 (f) 可导。

5. <b>Convexity（凸性）</b>
    - 定义：
 [ f(\theta s + (1-\theta) q) \le \theta f(s) + (1-\theta) f(q) ]
    - strict convexity：不等号变为“&lt;”，global minimum 唯一；
    - 在 ML 中的重要性：local minimum = global minimum；
    - gradient descent 在 convex 上收敛到 global minimum；
    - learning rate：常数或衰减（如 (\lambda_t = 1/t)），足够小可保证 (f(x_{t+1}) &lt; f(x_t))。

6. <b>Stochastic Gradient Descent（SGD）</b>
    - 用样本近似梯度；
    - 步骤：初始化 → 选一个 observation (z) → 计算基于 (z) 的梯度估计 → 更新 → 重复；
    - 与 neural networks training 强相关（后续会详细讲）。

7. <b>SPSA（Simultaneous Perturbation Stochastic Approximation）</b>
    - 适用于： 
        - 不可导目标（如 (L_1)-norm, Kendall’s tau）；
        - 黑盒目标（函数形式未知，只能 evaluate）；
    - 只用函数值，不需要显式梯度；
    - 每次迭代只需两次函数评估，与维度无关；
    - 算法： 
        - 随机生成 Rademacher 向量 (\Delta_t)；
        - 计算 (f(s_t + \beta_t \Delta_t)) 和 (f(s_t - \beta_t \Delta_t))；
        - 用 pairwise division 构造梯度近似 (g_t)；
        - 用 (\alpha_t) 更新 (s_t)。

8. <b>SPSA 超参数</b>
    - (\beta_t = \frac{c}{(t+1)^\gamma})，(\alpha_t = \frac{a}{(t+1 + A)^\alpha})；
    - (c)：扰动尺度，常用 0.1 或 0.005；
    - (\gamma)：扰动衰减速率，([0.101, 0.166])；
    - (a)：学习率尺度，([0.01, 0.2])；
    - (A)：防止初期步长过大，常设为最大迭代次数的 10%；
    - (\alpha)：学习率衰减速率，([0.602, 1])。

---

# 如果你愿意，下一步我可以帮你把这些内容<b>转成英文考试用的双语术语表</b>（比如“凸函数 convex function”、“全局最优 global optimum”、“随机梯度下降 stochastic gradient descent”等），或者帮你设计几道典型考题（证明题/概念题/算法步骤题）来检验理解。你更想先做哪一块？

# ML

# 下面我给你做一份<b>逐页、成体系的知识梳理</b>，内容和这份 Part-4 PPT 一一对应，不遗漏任何知识点。
 整体用中文解释，但<b>关键术语保留英文</b>（如 supervised learning, logistic regression, cross-entropy loss 等），方便你直接用于英文考试。

---

## 一、Learning Systems（学习系统）

### Learning systems 的定义

# <b>Learning systems：</b>  
 指的是一种<b>自适应系统（adaptive systems）</b>，它会根据数据或与环境的交互，自动调整其内部设置（如 parameters 或 rule sets），以解决一类问题。

- <b>核心特征：</b>
    - <b>不是固定规则（not hardcoded rule-based）</b>
    - 会根据数据/环境反馈<b>更新内部参数或规则</b>
    - 目标是：在某个任务上表现越来越好（performance improvement）

### Learning types（学习类型）

# PPT 提到三种“适应发生的方式”：

- <b>Single adaptation in training phase：</b>
    - 在训练阶段进行一次性学习（offline training），训练完参数就固定了。
    - 典型：传统 supervised learning 模型，训练好后部署，推理时不再更新参数。

- <b>Contextually with conditional inference based on temporary knowledge：</b>
    - 在推理时根据<b>当前上下文（context）</b>和<b>临时知识（temporary knowledge）</b>做条件推理。
    - 模型本身参数可能不变，但推理过程会利用当前环境信息进行调整。

- <b>Continously with new stream of input：</b>
    - 持续学习（continuous learning / online learning），随着新数据流不断更新模型。
    - 典型：online learning、streaming data 场景。

### 与 rule-based systems 的关系

- <b>Hardcoded rule-based systems：</b>
    - 完全依赖人工写死的规则（if-else），不具备自适应能力。

- <b>Hybrid learning approaches：</b>
    - 将 rule-based / knowledge-based systems 与 data-driven learning systems 结合。
    - 目标是处理： 
        - <b>uncertainty（不确定性）</b>
        - <b>high dimensionality（高维度）</b>
        - <b>multimodality（多模态）</b>
    - 这些都是现实世界问题的典型特征。

---

## 二、Learning Paradigms（学习范式）

# PPT 分成两大类：

- <b>Supervision based（按监督方式）</b>
- <b>Process based（按学习过程方式）</b>

---

### Supervision based Learning Paradigms（监督相关范式）

#### (1) Supervised learning（监督学习）

- <b>数据形式：</b>
    - 有 label 的数据点，通常是<b>结构化的 input-output tuples（输入-输出对）</b>。

- <b>目标：</b>
    - 学习一个 mapping：从 input 映射到 output。

- <b>典型任务：</b> classification, regression 等。

#### (2) Semi-supervised learning（半监督学习）

- <b>场景：</b>
    - labeled data 很少（small cardinality）
    - unlabeled data 很多（large cardinality）

- <b>典型流程：</b>
    1. 先用少量高质量标签（<b>gold labels</b>）训练模型；
    2. 再用模型对大量未标注数据进行自动标注（得到 <b>silver labeled data</b>）；
    3. 再用 gold + silver 数据继续训练，提升性能。

#### (3) Unsupervised learning（无监督学习）

- <b>数据：</b> 完全没有 labels。
- <b>目标：</b>
    - 发现数据中的 pattern（模式）
    - 学习 useful representations（有用表示）

- <b>典型任务：</b> clustering, dimensionality reduction, representation learning 等。

#### (4) Self-supervised learning（自监督学习）

- <b>数据：</b> 起始是完全 unlabeled dataset。
- <b>核心思想：</b>
    - 从数据本身自动构造“伪标签”（pseudo labels），用于训练。
    - 例如：mask 一部分输入，让模型预测被 mask 的部分。

- <b>常见用途：</b>
    - <b>Pretraining（预训练）</b>，尤其是当前大规模 language model pretraining 的主流方式。

#### (5) Reinforcement learning（强化学习）

- <b>主体：</b> agent（智能体）
- <b>环境：</b> environment
- <b>过程：</b>
    - agent 选择 action 与环境交互，环境状态改变；
    - 环境给出 reward；
    - agent 的目标是<b>最大化累积 reward</b>。

- <b>策略：</b>
    - 选择 action 的规则叫 <b>policy</b>。

---

### Process based Learning Paradigms（过程相关范式）

#### (1) Active learning（主动学习）

- <b>目标：</b>
    - 在训练过程中<b>有选择地挑选数据点</b>进行标注或训练，以最大化性能提升。

- <b>典型：</b>
    - 模型主动询问“哪些样本最有价值”，例如不确定性最大的样本。

#### (2) Curriculum learning（课程学习）

- <b>核心问题：</b>
    - 训练样本的<b>呈现顺序（order of examples）</b>会影响模型性能。

- <b>思想：</b>
    - 像人类学习一样，从简单到困难组织训练数据，以提高最终性能。

#### (3) Transfer learning（迁移学习）

- <b>流程：</b>
    1. 先在某一组任务上训练模型；
    2. 再将训练好的模型（或其一部分）<b>迁移</b>到新的任务上。

- <b>目的：</b>
    - 利用已有知识解决 novel tasks（新任务），减少新任务所需数据和训练成本。

#### (4) Online learning（在线学习）

- <b>特点：</b>
    - 模型在数据流到来时<b>持续更新</b>，而不是一次性训练完。

- <b>适用场景：</b>
    - 数据分布随时间变化（concept drift）、流式数据等。

---

## 三、Workflow for Building Learning Systems（构建学习系统的工作流）

# PPT 给出一个典型 pipeline：

1. <b>Data Acquisition（数据获取）</b>
    - 从各种来源收集数据：数据库、日志、传感器、网络等。

2. <b>Data Processing（数据处理）</b>
    - 清洗（cleaning）、预处理（preprocessing）、特征工程（feature engineering）、缺失值处理等。

3. <b>Modeling（建模）</b>
    - 选择模型（model choice）、训练（training）、调参（hyperparameter tuning）。

4. <b>Output Utilization（输出利用）</b>
    - 将模型输出用于实际应用：预测、推荐、决策支持等。

---

## 四、Typical Learning Cycle when Modeling（典型学习循环）

# PPT 给出一个循环过程：

1. <b>Observation（观察）</b>
    - 观察数据、环境状态、模型表现。

2. <b>Acting（行动）</b>
    - 模型做出预测或采取行动。

3. <b>Evaluation（评估）</b>
    - 评估行动效果：loss、accuracy、reward 等。

4. <b>Update（更新）</b>
    - 根据评估结果更新模型参数或策略。

5. <b>Consolidation（巩固）</b>
    - 将有效的知识固化下来，形成稳定的模型或策略。

# 这个循环体现了“learning as optimization + feedback”的过程。

---

## 五、The Role of Optimization in Learning Systems（优化的角色）

### 学习 = 优化问题

# 给定训练数据集 ( D_{\text{Train}} )，学习可以形式化为：

# [ W^* = \arg\min_W f(W \mid D_{\text{Train}}) ]

- ( W )：模型参数
- ( f )：objective function（目标函数），例如 loss function

# 同时要求模型在<b>未见数据（unseen datasets）</b>上也有良好表现，例如 test dataset ( D_{\text{Test}} )，这就是 <b>generalization（泛化）</b>。

### 常见优化方法的“配方”

- <b>Small scale datasets + convex objective functions：</b>
    - 用 <b>Gradient Descent（梯度下降）</b>

- <b>Large-scale + convex / nonconvex：</b>
    - 用 <b>Stochastic Gradient Descent（SGD）</b>

- <b>Very large-scale deep learning：</b>
    - 用 <b>Adam / Adagrad</b> 等自适应优化算法

- <b>Small to mid-range + nondifferentiable objectives：</b>
    - 用 <b>Gradient-free (zero order) optimization methods</b>
        - 如 evolutionary algorithms, Nelder–Mead 等。

- <b>Challenges（挑战）：</b>
    - <b>Local minima（局部最小）</b>
    - <b>Differentiation（可导性问题）</b>
    - <b>Hyperparameter tuning（超参数调优）</b>
    - <b>Convergence（收敛）</b>
    - <b>Model bias（模型偏差）</b> 等。

---

## 六、Generalization：Overfitting 与 Underfitting

### Overfitting（过拟合）

# <b>现象：</b>

- 训练集表现非常好（well training performance）
- 验证/测试集表现很差（poor validation/test performance）

# <b>原因：</b>

- 模型复杂度过高，开始“学习噪声和无关模式”（learning noise and irrelevant patterns）。

# <b>应对方法：</b>

- <b>Cross-validation（交叉验证）</b>
- <b>Regularization（正则化）</b>
- <b>调整优化过程：</b>
    - Early stopping（提前停止）
    - Noise injection（噪声注入）等

- <b>Ensemble methods（集成方法）</b>
- <b>Data augmentation（数据增强）：</b>
    - 合成数据（synthetic）
    - 扩展真实观测（extending real observations）

- <b>Simpler architectures（简化模型结构）</b>

### Underfitting（欠拟合）

# <b>现象：</b>

- 训练集和验证/测试集表现都不好（poor training and validation/test performance）

# <b>原因：</b>

- 模型太简单，无法捕捉数据中的有用模式。

# <b>可能的解决：</b>

- <b>增加模型复杂度</b>
- <b>减少过拟合防护措施</b>（如过强的正则化）

---

## 七、Common Tasks in Machine Learning（常见任务）

### Common Tasks (1)

- <b>Classification（分类）：</b>
    - 将数据实体分配到预定义的 class（类别），类别数通常是固定的。
    - 例：predicting customer churn（预测客户流失）。

- <b>Regression（回归）：</b>
    - 预测一个数值（numerical value）。
    - 例：predicting customer spending（预测客户消费金额）。

- <b>Dimensionality Reduction（降维）：</b>
    - 减少特征维度，去除噪声，同时尽量保留数据结构。
    - 例：random projection, matrix factorization 等。

- <b>Clustering（聚类）：</b>
    - 将 unlabeled data 按相似性分组。
    - 例：customer profiling（客户画像）。

- <b>Ranking（排序）：</b>
    - 按相关性对实体排序。
    - 例：movie recommender systems（电影推荐系统）。

### Common Tasks (2)

- <b>Anomaly/Novelty Detection（异常/新颖性检测）：</b>
    - 识别不寻常的模式或实体。
    - 例：detect fraudulent transactions（检测欺诈交易）。

- <b>Association Rule (Affinity) Learning（关联规则学习）：</b>
    - 学习实体之间的关系。
    - 例：customer item preferences（客户商品偏好）。

- <b>Reinforcement Learning（强化学习）：</b>
    - 通过 reward-guided trial-and-error 探索环境，学习决策策略。
    - 例：learning to play a board game（学会下棋）。

- <b>Generative Modeling（生成式建模）：</b>
    - 训练模型生成内容。
    - 例：image generation, text generation。

---

## 八、Linear Classifier（线性分类器）

### 线性分类函数

# 给定输入向量 ( x )，线性分类器定义为：

# [ c(x) = v^T x + v_0 ]

- ( v )：权重向量，决定超平面的方向（orientation）
- ( v_0 )：偏置项，和 ( v ) 一起决定超平面到原点的距离

# <b>二分类：</b>

- 输出类别集合：({C_1, C_2})
- 决策规则： 
    - 若 ( c(x) &gt; 0 )，则 ( x \in C_1 )
    - 若 ( c(x) &lt; 0 )，则 ( x \in C_2 )

### 重写为统一形式

# 可以写成：

# [ c(x) = w^T \tilde{x} ]

- 定义： 
    - ( w^T = ([v_0,] @ v)^T )
    - ( \tilde{x} = ([1,] @ x) )
    - 这里 @ 表示 concatenation（拼接）

# 这样就把 bias ( v_0 ) 合并进 weight 向量 ( w ) 中。

---

## 九、Classification Evaluation Measures（分类评估指标）

### Confusion Matrix（混淆矩阵）

- <b>TP（True Positive）</b>
- <b>FP（False Positive）</b>
- <b>FN（False Negative）</b>
- <b>TN（True Negative）</b>

### 常用指标

- <b>Accuracy：</b>

# [ \text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN} ]

- <b>Recall（也写作 Acc+）：</b>

# [ \text{Recall} = \frac{TP}{TP + FN} ]

- <b>Precision：</b>

# [ \text{Precision} = \frac{TP}{TP + FP} ]

- <b>F(_\kappa) score：</b>

# [ F_\kappa = \frac{(\kappa^2 + 1) \cdot P \cdot R}{\kappa^2 P + R} ]

- <b>Special case：F1 score</b>

# [ F_1 = \frac{2 \cdot P \cdot R}{P + R} ]

---

## 十、Logistic Regression（逻辑回归）

# 这是 PPT 的重点部分之一，我会细致展开。

### 基本思想

- Logistic Regression 是一种<b>probabilistic classification model（概率分类模型）</b>。
- 目标：将 datapoints 映射到 discrete classes（离散类别），通常是二分类。
- 核心：通过 <b>sigmoid function</b> 将线性组合映射到 ([0,1]) 的概率。

### Sigmoid function（S 型函数）

# 定义：

# [ \sigma(s) = \frac{1}{1 + e^{-s}}, \quad s \in \mathbb{R} ]

- 输出范围：(\sigma(s) \in [0,1])
- 性质： 
    - ( s \to +\infty \Rightarrow \sigma(s) \to 1 )
    - ( s \to -\infty \Rightarrow \sigma(s) \to 0 )
    - ( s = 0 \Rightarrow \sigma(0) = 0.5 )

# PPT 中给出 sigmoid 曲线图，横轴是 ( s )，纵轴是 ( \sigma(s) )。

---

### Logistic Regression (2)：数据与概率建模

# 给定：

- 输入数据集：

# [ X = { x_i \in \mathbb{R}^m \mid i = 1, \dots, n } ]

- 标签：

# [ y = { y_i \in {0,1} \mid i = 1, \dots, n } ]

- 使用 sigmoid：

# [ \sigma(s) = \frac{1}{1 + e^{-s}} ]

# <b>模型：</b>

- 对于每个 ( x_i )，定义其属于 class 1 的概率：

# [ p_i = \sigma(w^T x_i), \quad w \in \mathbb{R}^m, ; p_i \in [0,1] ]

- 属于 class 0 的概率：

# [ P(y_i = 0 \mid x_i) = 1 - p_i ]

---

### Logistic Regression (3)：Likelihood（似然）

# 对于每个样本 ( (x_i, y_i) )，其被模型正确描述的概率可以写为：

# [ q_i = (p_i)^{y_i} (1 - p_i)^{1 - y_i} ]

- 若 ( y_i = 1 )，则 ( q_i = p_i )
- 若 ( y_i = 0 )，则 ( q_i = 1 - p_i )
- 所以 ( q_i \in [0,1] )，表示在参数 ( w ) 下，模型对该样本的“解释程度”。

# <b>假设样本独立（independence assumption）：</b>

- 整个数据集的 likelihood：

# [ Q_X = \prod_i q_i ]

---

### Logistic Regression (4)：优化目标

# <b>目标：</b> 找到一个好的 ( w ) 使得 likelihood ( Q_X ) 最大。

- 最大化 ( Q_X ) 等价于： 
    - 最大化 log-likelihood：(\log(Q_X))
    - 或最小化 negative log-likelihood：(-\log(Q_X))

# 因此优化问题可以写为：

# [ w^* = \arg\min_{w \in \mathbb{R}^m} -\log(Q_X) ]

---

### Logistic Regression (5)：推导 cross-entropy loss

# 从：

# [ w^* = \arg\min -\log(Q_X) ]

# 展开：

# [ -\log(Q_X) = -\log\left(\prod_i q_i\right) = -\sum_i \log(q_i) ]

# 代入 ( q_i = p_i^{y_i} (1 - p_i)^{1 - y_i} )：

# [ -\sum_i \log\left(p_i^{y_i} (1 - p_i)^{1 - y_i}\right) = -\sum_i \left( y_i \log(p_i) + (1 - y_i)\log(1 - p_i) \right) ]

# 再代入 ( p_i = \sigma(w^T x_i) )：

# [ -\sum_i \left[ y_i \log(\sigma(w^T x_i)) + (1 - y_i)\log(1 - \sigma(w^T x_i)) \right] ]

# 这就是经典的 <b>cross-entropy loss（交叉熵损失）</b>。

# PPT 明确指出：

> # The expression
 (-\sum_i [y_i \log(\sigma(w^T x_i)) + (1 - y_i)\log(1 - \sigma(w^T x_i))])
 is called the <b>cross-entropy loss</b>.

---

### Logistic Regression (6)：Gradient Descent 回顾

# <b>Gradient Descent（梯度下降）用于最小化目标函数 ( f(s) )：</b>

1. <b>Step 1：</b> 初始化解 ( s \in \mathbb{R}^m )
2. <b>Step 2：</b> 计算梯度 ( g \in \mathbb{R}^m )，其中

# [ g = \frac{\partial f(s)}{\partial s} ]

1. <b>Step 3：</b> 更新：

# [ s \leftarrow s - \eta g ]

# 其中 ( \eta ) 是 learning rate。

1. <b>Step 4：</b> 若未满足停止条件，回到 Step 2。

# 对于 Logistic Regression，我们的目标是：

# [ w^* = \arg\min_w -\log(Q_X) ]

# 所以需要计算：

# [ g = \frac{\partial}{\partial w} \left[ -\sum_i \left( y_i \log(\sigma(w^T x_i)) + (1 - y_i)\log(1 - \sigma(w^T x_i)) \right) \right] ]

---

### Logistic Regression (7)：Gradient 结果

# PPT 给出最终梯度形式：

# [ g = \frac{\partial}{\partial w} \left[ -\sum_i \left( y_i \log(\sigma(w^T x_i)) + (1 - y_i)\log(1 - \sigma(w^T x_i)) \right) \right] = - X^T (y - \sigma(X w)) ]

- 其中： 
    - ( X \in \mathbb{R}^{m \times n} )：特征矩阵（列或行的具体定义视约定而定，这里 PPT 用的是 ( X \in \mathbb{R}^{m \times n} )）
    - ( y \in {0,1}^n )
    - ( \sigma(X w) )：对每个样本的线性组合 ( w^T x_i ) 施加 sigmoid

# 这个梯度形式是 logistic regression 用 gradient descent / SGD 的基础。

---

## 十一、Back to Inference and Retrieval（回到推理与检索）

# 这一部分是一个<b>文本分类 / 信息检索的例子</b>，用 logistic regression 的权重来解释特征重要性和推断。

### 数据示例（短信文本）

# 有 7 条消息（m1–m7），内容大致分为两类：

- m1–m4：关于 money award, winner, cash prize 等
- m5–m7：关于 ringtone, tone, weekly ringtone 等

# 给出的标签是：

# [ [0, 0, 0, 0, 1, 1, 1] ]

# 也就是：

- m1–m4：label = 0
- m5–m7：label = 1

### 已训练好的权重向量 ( w )

# PPT 给出一个具体的 ( w \in \mathbb{R}^{69} )（因为字典大小为 69，外加 bias 维度）：

# [ w = [-0.25, 0.05, -0.04, -0.02, \dots, -0.27] ]

# （完整向量已在 PPT 中列出）

# 这些权重对应于词典中的各个单词（包括一个常数 1 维度）。

### Feature importance and interpretability（特征重要性与可解释性）

# PPT 提取了绝对值大于 0.25 的权重对应的词：

- (are, -0.27)
- (claim, -0.25)
- (ringtone, 0.43)
- (tone, 0.27)
- (you, -0.27)

# 解释：

- 权重绝对值大 → 该词对分类决策影响大。
- 正权重（如 ringtone, tone）→ 倾向于预测为 class 1（这里是 ringtone 类）。
- 负权重（如 are, claim, you）→ 倾向于预测为 class 0（非 ringtone 类）。

# 这体现了 logistic regression 的一个优点：<b>线性模型的可解释性（interpretability）</b>。

---

### Back to Inference and Retrieval (3)：新查询 q1, q2

# 给出两个新的 query：

- <b>q1：</b>

> # "please call our customer service representative on 08001696031 between 10am-9pm as you have won a guaranteed £1000 cash or £5000 prize"

- <b>q2：</b>

> # "get the official england poly ringtone or colour flag on yer mobile for tonights game! text tone or flag to 84199. optout txt eng stop box39822 w111wx £1.50"

# <b>步骤：</b>

1. 使用之前的 dictionary（词典）对 q1, q2 进行 vectorization（向量化），得到：
    - ( q_1 \in \mathbb{R}^{69} )
    - ( q_2 \in \mathbb{R}^{69} )
    - 第一维为 1（bias term）

2. 使用训练好的 ( w ) 计算：

# [ p_1 = \sigma(w^T q_1), \quad p_2 = \sigma(w^T q_2) ]

# PPT 给出的结果：

- ( \sigma(w^T q_1) = 0.26 )
- ( \sigma(w^T q_2) = 0.65 )

# 解释：

- 这两个概率表示“属于 class 1（ringtone 类）”的概率。
- q1：0.26 → 更像非 ringtone 类（class 0）
- q2：0.65 → 更像 ringtone 类（class 1）

# 这展示了 logistic regression 在文本分类 / 信息检索中的实际推理过程。

---

## 总结：这份 PPT 的核心知识结构

1. <b>Learning systems：</b> 自适应系统，通过数据/环境交互调整内部参数。
2. <b>Learning paradigms：</b>
    - 按监督：supervised, semi-supervised, unsupervised, self-supervised, reinforcement learning
    - 按过程：active learning, curriculum learning, transfer learning, online learning

3. <b>Workflow：</b> Data Acquisition → Data Processing → Modeling → Output Utilization
4. <b>Learning cycle：</b> Observation → Acting → Evaluation → Update → Consolidation
5. <b>Optimization：</b> 学习 = 优化目标函数；不同规模/性质用不同优化算法。
6. <b>Generalization：</b> overfitting vs underfitting 及其应对策略。
7. <b>Common tasks：</b> classification, regression, clustering, dimensionality reduction, ranking, anomaly detection, association rule learning, reinforcement learning, generative modeling。
8. <b>Linear classifier：</b> 线性决策边界，二分类，重写为 ( w^T \tilde{x} ) 形式。
9. <b>Evaluation metrics：</b> confusion matrix, accuracy, precision, recall, F1。
10. <b>Logistic Regression：</b>
    - 使用 sigmoid 将线性组合映射为概率；
    - 通过 likelihood / log-likelihood 建立优化目标；
    - 得到 cross-entropy loss；
    - 用 gradient descent 优化，梯度形式为 ( -X^T (y - \sigma(Xw)) )。

11. <b>Text classification example：</b>
    - 用 logistic regression 权重解释词的重要性；
    - 对新 query 计算概率，完成推理。

# 
## Deep Learning

Logistics regression

