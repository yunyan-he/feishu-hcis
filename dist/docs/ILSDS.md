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

<b>目的</b>：<b>从联合分布得到边缘分布 (Convert a joint distribution to a marginal)。</b>

- <b>离散情形</b>：  $p(l) = \sum_m p(l, m)$ 
- <b>连续情形</b>：  $f(x) = \int f(x, y)dy$ 

例子：

$$P(\text{Rain}) = P(\text{Rain, Cloudy}) + P(\text{Rain, not Cloudy})$$

---

### 乘规则 Product Rule

<b>目的</b>：把联合分布分解为条件分布与边缘分布。<b>Decompose a joint distribution</b>

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

<b>方差measures the spread around the mean</b>：$\operatorname{Var}(L)= E[(L - E[L])^2] = E[L^2] - (E[L])^2$  (直接展开平方差公式，利用E(L)是常数和期望的Linearity)

<b>标准差</b>：$\sigma_L = \sqrt{\operatorname{Var}(L)}$ 

<b>平移与缩放性质</b>：$\operatorname{Var}(aL + b) = a^2 \operatorname{Var}(L)$

说明：方差对平移不敏感，对缩放按平方放大。

---

### 协方差 Covariance

它衡量的是：

> measures joint deviation from the expected valuesX 偏离均值的方向与 Y 偏离均值的方向是否一致。

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

它把协方差做了一个“标准化”，让结果不依赖单位、不依赖尺度。normalizes the covariance to the range [−1,1] 

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
- PMF：$p(k) = \theta^k (1-\theta)^{1-k},\quad k \in {0,1}$  【k只能取0或1 用这个公式表示 x=0和1是 概率的通解】
- 矩 (Moments)：$E[K] = \theta,\quad \operatorname{Var}(K) = \theta(1-\theta)$ 
    > $Var(K) = E[K^2]-(E[K])^2, k \in {0,1}$  
> 对于这两个取值 $K^2 = K$ 所以$E(K^2) = E(K) = \theta$

- 例子：$P(\text{win}) = \theta$，$P(\text{loss}) = 1-\theta$。
- 是 <b>Binomial distribution</b> 的基础（n 次独立 Bernoulli 试验）。

---

### Rademacher Distribution

- 表示随机符号 {-1, 1}。
- 记：$R \sim \text{Rademacher}$ 
- PMF： $p(r) = \frac{1}{2},\quad r \in {-1, 1}$  意思是 r不管是-1,1 概率都是0.5
- 矩：$E[R] = 0,\quad \operatorname{Var}(R) = 1$ 
- 与 Bernoulli 的关系：$R = 2B - 1,\quad B \sim \text{Bernoulli}(0.5)$<b> </b>

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

- 是 <b>Central Limit Theorem (CLT)</b> 的核心：在温和条件下，和/平均值趋向于正态分布。<b>Forms the foundation to Central Limit Theorem highlighting that sums/averages tend to normality under mild conditions</b>

---

## 向量与矩阵代数 Vector and Matrix Algebra

### 向量 Vector

- 用<b>粗体小写</b>表示向量，如 ($\mathbf{x}$)。
- 向量可以看作列向量： $\mathbf{a} = [a_1, a_2, \dots, a_n]^T$ 

#### 向量范数 Norm

- 二范数L2 norm/<b>Euclidean norm</b>/length：$|\mathbf{x}| = \sqrt{\mathbf{x}^T \mathbf{x}}$  它就是欧几里得空间里“向量的长度”。

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
- <b>在学习系统与数据科学中用途极广： </b>
    - <b>简化方程</b>
    - <b>挖掘隐藏模式 (hidden patterns)</b>
    - <b>构建推荐系统 (recommender systems)</b>

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

> <b>A word’s meaning is decided by its context.</b>

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

<b>对任意 </b>$\mathbf{X} \in \mathbb{R}^{m \times n}$<b>，存在唯一分解：</b>$\mathbf{X} = \mathbf{U}\mathbf{S}\mathbf{V}^T$<b> </b>

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

> $\hat{\mathbf{U}}$能<b>只转置不逆</b>的关键 ——<b>正交矩阵的转置 = 其逆矩阵</b>，

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

## Learning systems and machine learning 

### <b>引言：学习系统与机器学习</b>

学习系统（Learning Systems）是能够根据数据或环境交互自动调整内部参数的系统。它们的目标是通过适应性机制解决复杂问题。Learning systems: <b>Adaptive systems</b> adjusting their <b>internal settings</b> (such as parameters or rule sets) based on data or interactions with environments to solve set of problems. 

学习类型包括：

- <b>训练阶段的单次适应</b>single adaptation in training phase （如传统监督学习）
- <b>基于上下文的条件推断 </b>contextually with conditional inference based on temporary knowledge（如序列模型）
- <b>持续学习</b>continously with new stream of input （如在线学习）
- <b>处理现实世界的不确定性、高维度、多模态数据</b>
    
现代系统常采用<b>混合式学习方法</b>，结合规则系统rule and knowledge based systems与数据驱动模型data driven learning systems（deal with uncertainty, high dimensionality, multimodality），以应对复杂任务。

---

### <b>学习范式（Learning Paradigms）</b>

学习范式分为两大类：<b>监督方式</b>与<b>过程方式</b>。

#### <b>监督方式（Supervision-based Paradigms）</b>

1. <b>Supervised Learning（监督学习）</b>

- 使用<b>带标签数据</b>训练模型 using labeled datapoints
- 目标：学习输入到输出的映射 objective：learning to map inputs to outputs.
- 典型任务：分类、回归

1. <b>Semi-supervised Learning（半监督学习）</b>

- 少量<b>金标签（gold labels 标注数据）</b> + 大量<b>未标注数据</b>
- 先用金标签训练，再利用模型生成的<b>银标签（silver labels）</b> 继续训练

1. <b>Unsupervised Learning（无监督学习）</b>

- 使用<b>无标签数据</b>
- 目标：发现模式、结构、表示
- 典型任务：pattern identification（比如聚类clusting） learning useful representations （降维是其中一个方法）

1. <b>Self-supervised Learning（自监督学习）</b>

- 从无标签数据中<b>自动构造训练任务 </b>objective： <b>creating labels</b> from dataset automatically
- 常用于预训练（如语言模型）

1. <b>Reinforcement Learning（强化学习）</b>

- Agent 与环境交互，通过奖励学习策略（policy  the strategy to select action is called policy.）
- 目标：最大化长期回报

---

#### <b>过程方式（Process-based Paradigms）</b>

1. <b>Active Learning（主动学习）</b>

- 在训练过程中选择某些数据点，以提高特定任务的性能。
    - 模型主动选择最有价值的数据点进行标注（copilot解释）

1. <b>Curriculum Learning（课程学习）</b>

- 处理示例的呈现顺序order presented examples，以最大化模型在特定任务上的性能。
    - 按难度排序训练样本，提高学习效率

1. <b>Transfer Learning（迁移学习）</b>

- 首先为特定任务集训练模型，然后将（部分）训练好的模型迁移到解决不同的新任务。
    - 将已学知识迁移到新任务

1. <b>Online Learning（在线学习）</b>

- 持续训练模型。
    - 模型持续更新，适应数据流
        
---

### <b>构建学习系统的工作流程</b>

一个完整的学习系统通常包含四个阶段：

1. <b>Data Acquisition（数据获取）</b>
2. <b>Data Processing（数据处理）</b>
3. <b>Modeling（建模）</b>
4. <b>Output Utilization（输出利用）</b>

<img src="/assets/Ax09bfad5oRKjDxzlWfcKXiinvd.png" src-width="558" src-height="452" align="center"/>

---

### <b>学习系统的典型循环（Learning Cycle）</b>

学习过程通常遵循以下循环：

1. <b>Observation（观察）</b>
2. <b>Acting（行动）</b>
3. <b>Evaluation（评估）</b>
4. <b>Update（更新）</b>
5. <b>Consolidation（巩固）</b>

<img src="/assets/C1y8buXIfoSa1kxTcZJcXP5lnnf.png" src-width="672" src-height="150" align="center"/>

---

### <b>优化在学习系统中的作用</b>

给定训练集 $D_{\text{Train}}$，学习过程可视为求解 

<b>the notion of learning boils down to solving an optimization problem </b>直译是 “学习的本质归结为求解一个优化问题”

$w^* = \arg\min_w f(w \mid D_{\text{Train}})$：<b>不返回函数的最小值，而是返回能让函数取到最小值的那个（或那组）自变量</b> W。

并要求模型在未见数据（如 $D_{\text{Test}}$）上具有良好泛化能力。

<b>常见优化方法</b>

<table>
<colgroup>
<col width="234"/>
<col width="200"/>
</colgroup>
<tbody>
<tr><td><p>场景</p></td><td><p>方法</p></td></tr>
<tr><td><p>小规模Small scale datasets、凸优化convex objective functions</p></td><td><p>Gradient Descent</p></td></tr>
<tr><td><p>大规模、凸/非凸<br/>convex and nonconvex objective<br/>functions</p></td><td><p>Stochastic Gradient Descent (SGD)</p></td></tr>
<tr><td><p>超大规模深度学习 Very large-scale deep learning model training</p></td><td><p>Adam / Adagrad</p></td></tr>
<tr><td><p>Small to mid-range dataset/不可微 models with nondifferentiable<br/>objectives</p></td><td><p>零阶优化（Gradient-free）</p></td></tr>
</tbody>
</table>

#### <b>挑战</b>

- 局部最优
- 可微性问题
- 超参数调优 hyperparameter tuning
- 收敛性 convergence
- 模型偏差 model bias
    
---

### <b>泛化能力：过拟合与欠拟合</b>

#### <b>Overfitting（过拟合）</b>

- 训练集表现好，但测试集表现差 well training and poor validation/test performance
- 原因：模型过于复杂，学习到噪声
- increased model <b>complexity</b> leading to learning the <b>noise</b> and <b>irrelevant patterns</b>

<b>解决方法：</b>

- 交叉验证 cross-validation
- 正则化regularization
- adjusting optimization processes (早停early stopping、噪声注入 noise injection）
- 集成学习 building ensemble method
- 数据增强 data augmentation（synthetic or extend real observation）
- 简化模型结构 simpler architectures

#### <b>Underfitting（欠拟合）</b>

- 训练集和测试集都表现差 poor training and validation/test performance
- 原因：模型过于简单 the model is too simple failing to capture useful patterns
    
<b>解决方法：</b>

- 增加模型复杂度 Increasing the model complexity
- reducing certain overfitting measures 减少过拟合措施

---

## Typical tasks 

### <b>常见机器学习任务</b>

#### <b>监督任务</b>

- <b>Classification（分类）</b>
    - Assigning a given <b>data entity</b> to a <b>predefined class</b>, where the number of classes is usually fixed (e.g.predicting customer churn)
    - 将给定的数据实体分配到一个预定义的类别中，其中类别的数量通常是固定的（例如：

- <b>Regression（回归）</b>
    - Assigning a <b>numerical</b> value (e.g. Predicting customer spending).
    - 分配一个数值（例如，预测客户支出）。
    
#### <b>无监督任务</b>

- <b>Clustering（聚类）</b>
    - putting <b>unlabeled</b> data into similar groups (e.g. For customer profiling)
    - 将未标记数据放入相似组（例如用于客户画像）。

- <b>Dimensionality Reduction（降维）</b>
    - reducing data features to <b>remove noise </b>and <b>preserve structure</b> (e.g. random projection, matrix factorization and etc)
    - 减少数据特征以去除噪声并保留结构（例如随机投影、矩阵分解等）。

- <b>Association Rule Learning（关联规则）</b>
    - Learning how certain relationships between entities (e.g. for learning customer item preferences).
    - 学习实体之间的特定关系（例如，用于学习客户物品偏好）。

#### <b>其他任务 </b>

分类方式更灵活，部分属于独立的学习范式，部分则会融合多种学习模式。

- <b>Ranking（排序）</b>
    - ordering entities based on their relevance for specific tasks (e.g. movie recommender systems).
    - 根据特定任务的相关性对实体进行排序（例如电影推荐系统）。

- <b>Anomaly Detection（异常检测）</b>
    - identfiying <b>unusual</b> patterns or entities based on a given dataset (e.g. to detect fraudulant transactions).
    - 基于给定数据集识别异常模式或实体（例如，检测欺诈交易）。

- <b>Reinforcement Learning（强化学习）</b>
    - <b>Reward</b> guided trial-and-error environment exploration to learn to make decisions (e.g. Learning to play a board game).
    - 通过奖励引导的试错环境探索来学习做决策（例如，学习玩棋盘游戏）。

- <b>Generative Modeling（生成建模）</b>
    
---

## Logistic Regression

### <b>线性分类器（Linear Classifier）</b>

线性分类器Linear classification function定义为：

$$c(x) = v^T x + v_0$$

- 若 $c(x) > 0$ → 类别 $C_1$
- 若 $c(x) < 0$ → 类别 $C_2$

可写为：

$$c(x) = w^T \tilde{x}$$

其中：

- $$w^T=([v0,]⊕v)^T$$
- $$\tilde{x} = ([1,]⊕ x)^T$$
    $\oplus$ 表示<b>拼接算子</b>（向量拼接操作）。

<img src="/assets/SQjHbk0KKobypGxhJhwcVuignrd.png" src-width="794" src-height="482" align="center"/>

这里用了距离公式 

---

### <b>分类性能评估指标</b>

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

- <b>Recall = Acc+</b>

$\frac{TP}{TP + FN}$ 真正的true 有多少被预测对了 遗漏少则recall高

- <b>Precision</b>

$\frac{TP}{TP + FP}$ 被预测的true里面多少是true  垃圾邮件过滤 → 更看重 Precision（不能误杀正常邮件）

- <b>F1-score</b>

$$F_1 = \frac{2PR}{P + R}$$

$$F = \frac{(K^2 + 1) · P · R}{K^2P + R}$$

---

### <b>Logistic Regression（逻辑回归）</b>

A very popular probabilistic classification model to map datapoints into discrete

classes

一种非常流行的概率分类模型，用于将数据点映射到离散类别中。

逻辑回归是一个<b>概率二分类模型</b>。

#### <b>Sigmoid 函数</b>

$$\sigma(s) = \frac{1}{1 + e^{-s}}$$

输出范围 $[0,1]$，可解释为概率。

#### <b>模型定义</b>

给定数据：

- $x_i \in \mathbb{R}^m$i from 1-n . n个数据点 每个点m维度
- $y_i \in \{0,1\}$n个输出 一个x对应一个y
    
预测：

$p_i = \sigma(w^T x_i)$ 这是The probability of every $x_i$

belonging to class 1

the probability of $x_i$

belonging to class 0 is $1 − p_i$

#### <b>似然与损失函数</b>

单样本似然：

$q_i = p_i^{y_i} (1 - p_i)^{1 - y_i}$ 意思是 pi是sigmoid函数输出值 是xi类别是1的probability 1-pi是xi属于class 0 的probability。<b>depicts how well </b>yi<b> is described given </b>w<b> (and of course </b>xi<b>)</b>

<b>likelihood</b>：（<b>Assuming independence between the datapoints in X,a quality measure for the representation</b>）

$$Q = \prod_i q_i$$

负对数似然（NLL）：

$$-\log Q = -\sum_i \left[ y_i \log p_i + (1 - y_i)\log(1 - p_i) \right]$$

即<b>交叉熵损失（cross-entropy loss）</b>。

---

### <b>Logistic Regression 的优化：梯度下降</b>

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
    
## [预测试卷part 4](/QRiFwuy0liWXaGk5KDqcgG4dnYf/O1qawgEaMiZ5t4ku4T9czdAynj0)

## 
# Plus Advanced Optimization

下面给你整理一份<b>极其详细、考试可直接使用、按 PPT agenda 组织、英文术语 + 大量中文解释</b>的完整文稿。  

内容覆盖所有知识点，不遗漏，重点难点会特别展开，推导会补充到可考试使用的深度。

## <b>Agenda</b>

1. Loss Landscapes as 2D Surfaces  
2. Improving Gradient Descent: Momentum & Adaptive Learning Rate  
3. Heavy Ball Method  
4. RMSProp  
5. Adam  
6. Simulated Annealing  
    
---

## <b>Loss Landscapes as 2D Surfaces</b>

### <b>核心概念：Loss Landscape（损失地形）</b>

PPT 将优化过程类比为在二维高度图（2D height map）上移动。

#### <b>两类地形：</b>

##### <b>Smooth landscapes（平滑地形）</b>

- 表面光滑、梯度变化平稳  
- 优化路径较可预测  
- 但如果遇到 <b>flat regions（平坦区域）</b>，梯度接近 0，下降速度极慢

→ 典型例子：深度网络中的 plateau、vanishing gradient 区域

##### <b>Rugged landscapes（崎岖地形）</b>

- 含大量 <b>local minima（局部最小值）</b>  
- <b>saddle points（鞍点）</b>  
- <b>plateaus（平台区）</b>  
- 优化容易卡住或震荡
    
#### <b>关键问题：</b>

> <b>How to find the global minimum?</b>
> 非常困难，尤其在高维非凸优化中（deep learning）。

---

## <b>Improving Gradient Descent: Momentum & Adaptive Learning Rate</b>

### <b>Vanilla Gradient Descent 的主要问题</b>

#### <b>Slow in long, narrow valleys（在狭长谷底下降很慢）</b>

- 梯度方向不断左右摆动  
- 沿主方向下降速度慢

### <b>High curvature regions cause oscillations（高曲率区域导致震荡）</b>

- 在陡峭方向 overshoot  
- 在平坦方向又太慢
    
---

### <b>解决方案：</b>

#### <b>Momentum（动量）</b>

- 引入惯性项  
- 累积过去的梯度方向  
- 使下降更稳定、更快

#### <b>Adaptive Learning Rate（自适应学习率）</b>

- 在陡峭方向减小步长  
- 在平坦方向增大步长  
- 提升收敛速度
    
---

### <b>三种改进方法：</b>

1. <b>Heavy Ball Method（动量法）</b> → Momentum  
2. <b>RMSProp</b> → Adaptive learning rate  
3. <b>Adam</b> → Momentum + Adaptive learning rate（现代默认优化器）
    
---

## <b>Heavy Ball Method (Momentum Gradient Descent)</b>

### <b>Vanilla GD 更新：</b>

$$x_{t+1} = x_t - \eta \nabla f(x_t)$$

### <b>Heavy Ball Method 更新：</b>

#### <b>Velocity update（速度更新）</b>

$$v_{t+1} = \beta v_t + (1-\beta)\nabla f(x_t)$$

其中：

- $\beta$ 通常取 <b>0.8–0.99</b>
- $$v_0 = 0$$
    
#### <b>Parameter update（参数更新）</b>

就是真正的梯度变化吗？

$$x_{t+1} = x_t - \eta v_{t+1}$$

---

### <b>Momentum 的数学展开（PPT 给出）</b>

$$v_{t+1} = (1-\beta)(\nabla f(x_t) + \beta \nabla f(x_{t-1}) + \cdots + \beta^{t}\nabla f(x_0))$$

<b>解释：</b>

- 这是 <b>exponential moving average（指数滑动平均）</b>  
- 过去的梯度越久远，权重越小  
- 优化器“记住”过去的方向，使下降更稳定
    
---

### <b>物理类比（PPT 强调）</b>

像一个球在地形中滚动：

- 梯度 = 重力  
- $\beta$ = 摩擦  
- $v_t$ = 速度（动量）  
- 球会积累惯性 → 加速下降
    
---

### <b>Heavy Ball Method 的优势</b><b>（PPT 列表）</b>

#### <b>Faster convergence in flat regions（平坦区更快）</b>

- 梯度小但方向一致  
- 动量累积后加速前进
    
#### <b>Escapes local minima & saddle points（更容易逃离局部极小 & 鞍点）</b>

- 动量帮助“冲出去”
    
#### <b>Reduces oscillations（减少震荡）</b>

- 在高曲率方向震荡减少  
- 在主下降方向加速
    
#### <b>Smooths noisy gradients（平滑随机梯度）</b>

- 对 SGD 特别有效
    
---

## <b>RMSProp (2012)</b>

RMSProp 是一种 <b>adaptive learning rate method（自适应学习率方法）</b>。

### <b>核心思想：</b>

维护 <b>squared gradients（梯度平方）</b> 的指数滑动平均：

$$s_{t+1} = \rho s_t + (1-\rho)(\nabla f(x_t))^2$$

其中：

- $$\rho \approx 0.9$$
    
---

### <b>Adaptive learning rate（自适应学习率）</b>

学习率变为：

$$\frac{\eta}{\sqrt{s_{t+1}} + \epsilon}$$

#### <b>更新：</b>

$$x_{t+1} = x_t - \frac{\eta}{\sqrt{s_{t+1}}+\epsilon}\nabla f(x_t)$$

---

### <b>RMSProp 的动机（PPT）</b>

#### <b>Steep directions → smaller steps（陡峭方向 → 小步长）</b>

- 梯度平方大 → $s_t$ 大 → 学习率变小  
- 避免 overshoot
    
#### <b>Flat directions → larger steps（平坦方向 → 大步长）</b>

- 梯度平方小 → $s_t$ 小 → 学习率变大  
- 加速收敛
    
---

## <b>Adam (2015)</b>

Adam = <b>Momentum + RMSProp</b>

是深度学习默认优化器。

---

### <b>Adam 的两个 moving averages：</b>

#### <b>First moment（动量项）</b>

$$m_{t+1} = \beta_1 m_t + (1-\beta_1)\nabla f(x_t)$$

#### <b>Second moment（平方梯度项）</b>

$$v_{t+1} = \beta_2 v_t + (1-\beta_2)(\nabla f(x_t))^2$$

典型参数：

- $\beta_1 = 0.9$  
- $\beta_2 = 0.999$  
- $$\epsilon = 10^{-8}$$
    
---

### <b>Bias correction（偏差校正）</b>

因为 $m_0 = 0, v_0 = 0$，初期会偏小，因此需要校正：

$$\hat{m}_{t+1} = \frac{m_{t+1}}{1-\beta_1^{t+1}}$$

$$\hat{v}_{t+1} = \frac{v_{t+1}}{1-\beta_2^{t+1}}$$

---

### <b>Adam 更新：</b>

$$x_{t+1} = x_t - \frac{\eta}{\sqrt{\hat{v}_{t+1}} + \epsilon}\hat{m}_{t+1}$$

---

## <b>Adam 的优点（PPT 总结）</b>

- Adaptive（自适应）  
- Robust（鲁棒）  
- Minimal tuning（几乎不用调参）  
- 默认选择（deep learning standard）
    
---

## <b>Simulated Annealing（模拟退火）</b>

### <b>物理类比：Annealing（退火）</b>

- 金属加热 → 原子自由移动  
- 缓慢冷却 → 形成低能量晶体结构  
- 慢冷 → 更接近 global minimum
    
---

### <b>Simulated Annealing 的核心思想</b>

#### <b>Energy function（能量函数）</b>

目标函数 $E(x)$

#### <b>Temperature </b>$T$

- 初始温度高  
- 随时间逐渐降低
    
#### <b>Sampling distribution</b>

$$p(x) \propto e^{-E(x)/T}$$

#### <b>关键特性：</b>

- 允许 uphill moves（上坡移动）  
- 随着温度降低，接受概率下降  
- 最终集中在 global minima 附近
    
---

### <b>算法步骤（PPT 给出）</b>

1. 初始化：  
    - 初始状态 $x_0$  
    - 初始温度 $T_0$
        
2. 重复：
    - 采样候选 $x'$
    - 若 $E(x') < E(x_k)$，接受  
    - 否则以概率$  \exp\left(-\frac{E(x') - E(x_k)}{T_k}\right)$接受

1. 降温：

$$T_{k+1} < T_k$$

---

### <b>Cooling Schedules（降温策略）</b>

#### <b>(1) Exponential（指数）</b>

$$T_{k+1} = \alpha T_k$$

#### <b>(2) Logarithmic（对数）</b>

$$T_k = \frac{T_0}{\log(k+c)}$$

#### <b>(3) Adaptive（自适应）</b>

#### <b>理论保证：</b>

- 若降温足够慢 → 保证收敛到 global minimum
    
---

### <b>Simulated Annealing Example: Traveling Salesman Problem (TSP)</b>

#### <b>State（状态）</b>

一个城市的 tour（循环）

#### <b>Energy function</b>

$$E(T) = \sum_i \|T_i - T_{i+1}\|$$

#### <b>Moves</b>

- 2-opt  
- 3-opt
    
#### <b>SA step</b>

- 若 $\Delta E \le 0$，接受  
- 否则以 $\exp(-\Delta E/T)$ 接受
    
---

### <b>Simulated Annealing 的适用场景</b>

#### <b>适合：</b>

- 极其 rugged 的 loss landscape  
- 离散优化（如 TSP）
    
#### <b>不适合：</b>

- deep learning（太慢，不如 Adam）
    
---

## <b>Minimum Takeaway（PPT 总结）</b>

<table>
<colgroup>
<col width="200"/>
<col width="200"/>
</colgroup>
<tbody>
<tr><td><p>Method</p></td><td><p>Key Idea</p></td></tr>
<tr><td><p>Heavy Ball</p></td><td><p>Gradient descent + momentum</p></td></tr>
<tr><td><p>RMSProp</p></td><td><p>Gradient descent + adaptive learning rate</p></td></tr>
<tr><td><p>Adam</p></td><td><p>Momentum + adaptive learning rate</p></td></tr>
</tbody>
</table>

<b>Be smart, be lazy, just use Adam.</b>

## [预测试卷](/QRiFwuy0liWXaGk5KDqcgG4dnYf/Lilkw2LlGi74XTkpdKQcukGcnFg)

# Plus NLP core

当然可以，云雁。我会按照你的要求，把整份 <b>Introduction to NLP</b> PPT 内容整理成一份 <b>极其详细、考试可直接使用、英文术语 + 大量中文解释、重点难点突出、结构完全按 PPT agenda</b> 的文稿。

内容会做到：

- <b>不遗漏任何知识点</b>
- <b>所有术语用英文</b>
- <b>中文解释深入、清晰、可考试使用</b>
- <b>重点内容（如 embedding、Transformer、RNN/LSTM/GRU、TF-IDF、NLU/NLG）会特别展开</b>
- <b>细枝末节不堆砌，但重要概念会补充背景、推导、例子</b>
    
下面开始正文。

---

## <b>NLP Definition（自然语言处理的定义）</b>

<b>What is NLP?</b>

Natural Language Processing (NLP) 是人工智能（AI）的一个核心分支，目标是让机器能够理解、处理、生成自然语言（human language）。

<b>核心要点：</b>

- <b>Input modalities（输入形式）</b>：text（文本）与 audio（语音）
- <b>Interdisciplinary（跨学科）</b>：computer science、AI、computational linguistics、cognitive science
- <b>Goal（目标）</b>：将非结构化语言数据 → 可计算、可分析、可推理的机器输入
    
<b>中文解释：</b>

NLP 的本质是让机器“读懂”语言。人类语言是模糊的、上下文依赖的、结构复杂的，而机器需要结构化、明确的输入。NLP 就是解决这个鸿沟的技术。

---

## <b>Two Core Components of NLP</b>

NLP 的两大核心组成部分：

### <b> Natural Language Understanding (NLU)</b>

机器对语言的理解能力。

<b>NLU 任务：</b>

- <b>Sentiment analysis（情感分析）</b>
- <b>Named Entity Recognition (NER)（命名实体识别）</b>
- <b>Key phrase extraction（关键短语抽取）</b>
- <b>Intent detection（意图识别）</b>
    
<b>本质：</b>

从文本中提取 meaning（语义）、intent（意图）、entities（实体）、relations（关系）。

---

### <b>Natural Language Generation (NLG)</b>

机器生成自然语言的能力。

<b>NLG 任务：</b>

- Machine translation（机器翻译）
- Text summarization（文本摘要）
- Dialogue generation（对话生成）
- Content creation（内容生成）
    
<b>中文解释：</b>

NLU 是“读懂”，NLG 是“写出来”。现代大模型（如 GPT）就是 NLG 的典型代表。

---

## <b>Natural Language Understanding (NLU)</b>

### <b>NLU 的核心挑战：</b>

- 人类语言 <b>ambiguous（歧义）</b>
- 依赖 <b>context（上下文）</b>
- 机器无法直接理解 raw text → 必须转换成 computable structure
    
### <b>NLU 处理内容：</b>

- Intent recognition（意图识别）
- Entity extraction（实体抽取）
- Sentiment understanding（情感理解）
- Semantic parsing（语义解析）
    
<b>示例：</b>

“Can you book me a table near the window?”

NLU 输出：

- Intent: make a reservation  
- Entity: location = “near the window”  
- Sentiment: neutral  
- Semantic meaning: restaurant booking request  
    
---

## <b>Rule-based NLU</b>

<b>特点：</b>

- 基于 predefined grammar（预定义语法）和 linguistic rules（语言规则）
- 在 <b>受控领域</b>（medical、legal、banking）表现极好
- 可解释性强、错误率低
    
<b>适用场景：</b>

- 医疗文本分类  
- 法律条款识别  
- 银行合规检测  
    
<b>缺点：</b>

- 不适合 open-domain（开放领域）  
- 无法处理语言的复杂性和多样性  
    
---

## <b>Statistical NLU: Conditional Random Fields (CRFs)</b>

CRF 是一种 <b>statistical sequence model（统计序列模型）</b>。

<b>应用：</b>

- POS tagging（词性标注）
- NER（命名实体识别）
    
<b>优势：</b>

- 考虑 <b>label dependencies（标签之间的依赖）</b>
- 比逐词独立预测更准确
    
<b>示例：</b>

“Apple ships phones Friday.”

CRF 会同时考虑上下文，判断：

- Apple → ORGANIZATION  
- phones → PRODUCT  
- Friday → DATE  
    
---

## <b>Natural Language Generation (NLG)</b>

### <b>NLG 的六个步骤（经典 pipeline）：</b>

1. <b>Content Determination</b>

选择要表达的内容

1. <b>Document Structuring</b>

决定内容顺序

1. <b>Aggregation</b>

合并相关信息，避免重复

1. <b>Lexicalization</b>

选择具体词语表达

1. <b>Referring Expression Generation</b>

处理代词（it, they）

1. <b>Linguistic Realization</b>

生成符合语法的句子

---

## <b>Preprocessing Techniques（预处理技术）</b>

预处理是 NLP pipeline 的基础。

---

### <b>Text Normalization（文本规范化）</b>

<b>目的：</b>

将文本转换为统一、标准化形式，使后续算法更稳定。

<b>常见操作：</b>

- lowercasing（转小写）
- removing punctuation（去标点）
- expanding contractions（如 don’t → do not）
- removing special characters
    
---

### <b>Tokenization（分词）</b>

<b>类型：</b>

1. <b>Word Tokenization</b>

“I love Python” → ["I", "love", "Python"]

1. <b>Rule-based Tokenization</b>

基于规则处理标点、大小写等

1. <b>Whitespace Tokenization</b>

按空格切分（简单但粗糙）

1. <b>Dictionary-based Tokenization</b>

适用于中文、日文等无空格语言

1. <b>Subword Tokenization（子词分词）</b>

现代 NLP 模型常用  

如 BPE、WordPiece  

解决 rare words 问题

---

### <b>Stemming（词干提取）</b>

<b>特点：</b>

- 通过去掉后缀得到词干  
- 不保证是合法单词  
- 快速但粗糙
    
<b>例子：</b>

- chocolates → chocolate  
- running → run（可能变成 runn）
    
---

### <b>Lemmatization（词形还原）</b>

<b>特点：</b>

- 基于词典或规则  
- 考虑 POS（词性）  
- 输出合法单词  
- 比 stemming 更准确
    
<b>例子：</b>

- better → good  
- went → go  
- running → run  
    
---

### <b>Stopword Removal（停用词去除）</b>

<b>常见停用词：</b>

the, is, in, and

<b>适用场景：</b>

- text classification  
- sentiment analysis  
- topic modeling  
    
<b>不适用：</b>

- translation  
- summarization  
- grammar checking  
    
因为这些任务需要完整句子结构。

---

### <b>POS Tagging（词性标注）</b>

<b>作用：</b>

- 理解句法结构  
- 辅助 NER、情感分析、翻译等任务  
    
<b>例子：</b>

“The quick brown fox jumps over the lazy dog”

quick → adjective  

fox → noun  

jumps → verb  

---

## <b>Text Representation & Embedding Techniques</b>

文本必须转换为 numerical vectors 才能被模型处理。

---

### <b>Traditional Representations</b>

###### <b>One-Hot Encoding</b>

- 高维稀疏  
- 无语义信息
    
###### <b>Bag of Words (BoW)</b>

- 统计词频  
- 无序、无上下文
    
###### <b>TF-IDF</b>

- 强调 rare but important words  
- 仍然不捕捉语义
    
---

#### <b>8.2 TF-IDF 公式</b>

###### <b>Term Frequency (TF):</b>

\[

TF(w,d) = \frac{\text{count of w in d}}{\text{total words in d}}

\]

###### <b>Inverse Document Frequency (IDF):</b>

\[

IDF(w) = \log\frac{N}{df(w)}

\]

###### <b>TF-IDF = TF × IDF</b>

###### <b>意义：</b>

- 高频但无意义的词 → 权重低  
- 罕见但重要的词 → 权重高  
    
---

### <b>Word Embedding: GloVe</b>

GloVe = Global Vectors

<b>核心思想：</b>

- 基于 <b>global co-occurrence matrix（全局共现矩阵）</b>
- factorization（矩阵分解）得到 dense vectors
- dot product ≈ log(co-occurrence count)
    
<b>优点：</b>

- 捕捉语义关系  
- 例如：king - man + woman ≈ queen  
    
---

## <b>Neural Networks</b>

### <b>Feedforward Neural Networks</b>

<b>结构：</b>

- Input layer  
- Hidden layers  
- Output layer  
    
<b>神经元计算：</b>

$$z = f(Wa + b)$$

---

### <b>Backpropagation（反向传播）</b>

<b>步骤：</b>

1. <b>Forward pass</b>

计算输出

1. <b>Compute loss</b>

$$C = C(a^L, y)$$

1. <b>Backward pass</b>

使用 chain rule 计算梯度

1. <b>Update parameters</b>

$$W = W - \eta \frac{\partial C}{\partial W}$$

---

## <b>Contextual Embeddings（上下文嵌入）</b>

传统 embedding（如 Word2Vec、GloVe）是 <b>static embeddings</b>，无法处理多义词。

深度学习引入 <b>contextual embeddings</b>。

---

### <b>RNN</b>

<b>特点：</b>

- sequential processing  
- hidden state 记忆前文  
- 适合短期依赖  
- 缺点：vanishing gradient（梯度消失）
    
---

### <b>LSTM</b>

<b>特点：</b>

- 使用 gates（forget, input, output）  
- 解决 long-term dependency  
- 更准确但更慢  
    
---

### <b>GRU</b>

<b>特点：</b>

- 比 LSTM 简化  
- 更快  
- 性能接近 LSTM  
    
---

## <b>Transformers</b>

Transformer 解决了 RNN 的所有核心问题。

<b>核心优势：</b>

- parallel processing（并行处理）  
- self-attention 捕捉 long-range dependencies  
- 上下文理解更强  
    
<b>例子：</b>

句子中 “it” 指代 “jacket”  

RNN 可能忘记  

Transformer 不会

---

## <b>Transformer-based Embeddings</b>

<b>代表模型：</b>

- <b>BERT</b>：bidirectional context  
- <b>GPT</b>：generative, conversational  
- <b>T5</b>：text-to-text framework  
    
---

## <b>Transformer Architecture</b>

<b>包含：</b>

- Encoder stack  
- Decoder stack  
    
<b>核心组件：</b>

- Multi-head self-attention  
- Feed-forward network  
- Residual connections  
- LayerNorm  
- Positional encoding  
    
###### <b>Attention 公式：</b>

$$Attention(Q,K,V) = softmax\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

---

## [预测试卷 plus NLP](/QRiFwuy0liWXaGk5KDqcgG4dnYf/INaXwzIW7irXiqklxCacH6wsnyg)

# DeepLearning

## Deep Learning

### Definition & Core Idea

<b>Why Representation Matters:</b>

传统的机器学习往往依赖手工设计的特征（Feature Engineering）。而 Deep Learning 的特殊之处在于，它通过构建多层的 <b>Neural Networks (神经网络)</b>，自动从原始数据中学习出复杂的、分层的特征表示（<b>Representations</b>）。

<b>Deep Learning</b>：  

A subfield of machine learning that focuses on <b>learning complex representations</b> from data <b>using neural network based models</b>.

- <b>Key phrases for exam:</b>
    - <b>representation learning</b>：表示学习  
    - <b>neural network based models</b>：基于神经网络的模型  
    - <b>complex representations</b>：复杂表示  
        
<b>What makes deep learning special?</b>

- <b>Scalable</b>：可以通过增加层数、宽度、数据量来提升能力  
- <b>Flexible</b>：可以适配不同任务（classification, regression, generation, sequence modeling, graph learning, etc.）  
- <b>Trainable</b>：通过 gradient-based optimization（基于梯度的优化）自动学习参数  
- <b>Knowledge encoding via learned representations</b>：通过学习到的表示来编码知识，而不是手工特征工程  
    
### Neural Networks Landscape

PPT 提到的神经网络类型从通用的函数逼近器（Universal Function Approximators）到各类专用网络：

- <b>Feed-Forward Neural Networks (FNN)</b>：前馈神经网络，最基础的结构，用于一般的回归/分类  
- <b>Recurrent Neural Networks (RNN)</b>：处理序列数据（时间序列、文本等）  
- <b>Convolutional Neural Networks (CNN)</b>：处理具有空间结构的数据（图像、网格）  
- <b>Transformers</b>：基于 attention 的架构，广泛用于 NLP、Vision 等  
- <b>Graph Neural Networks (GNN)</b>：处理图结构数据  
    
<b>考试用一句话总结：</b>  

> Deep learning models are universal function approximators that can learn hierarchical representations from data.

---

## Perceptrons

Perceptron 是神经网络的最基本单元（computational unit）。

### Perceptron Structure

输入向量：$h = (h_0, h_1, \dots, h_q) \in \mathbb{R}^{q+1}$

其中：

- $h_0 = 1$：bias term（偏置项）
- 其余$h_1, \dots, h_q$：真实输入特征

权重向量：

$$w = (w_0, w_1, \dots, w_q)$$

一个神经元，它接收一组输入，进行处理，然后输出一个结果。在数学上，我们将其分解为两个步骤 ：

#### Propagation（传播）

神经元接收输入向量 （通常包含一个偏置项 ），并根据权重向量  计算加权和。

$$p = \sum_{s=0}^{q} w_s h_s = w^T h$$

这是一个线性组合（linear combination）。

#### Activation（激活）

计算出的  只是一个线性数值，我们需要通过一个函数来决定神经元是否“被激活”。

经典感知机使用 sign 函数：$f = \text{sign}(p) =
\begin{cases}
1 & p \ge 0 \\
0 & p < 0
\end{cases}$

<b>直观理解：</b>

- Perceptron 就是在做：

$$\text{if } w^T h \ge 0 \Rightarrow \text{class 1, else class 0}$$

- 本质是一个 <b>linear classifier（线性分类器）</b>，决策边界是一个超平面。
- 但这有个大问题：它不可导，无法用于梯度下降训练 。
    
---

## Differentiable Activations（可微激活函数）

为了使用 gradient descent（梯度下降）训练网络，我们需要激活函数是可微的。符号函数在0处不可导，因此现代神经网络通常使用 <b>Sigmoid</b> 或 <b>Tanh</b> 函数 。

### Sigmoid Activation

定义：$f(p) = \sigma(p) = \frac{1}{1 + e^{-p}}$

Sigmoid 函数有一个非常漂亮的导数性质，这在后续推导反向传播时非常关键.

导数：

$$\sigma'(p) = \sigma(p)(1 - \sigma(p))$$

<em>这意味着我们可以仅用函数的值来计算其导数，极大地简化了计算。</em>

<b>推导解释：</b>

1. 设

$$\sigma(p) = \frac{1}{1 + e^{-p}}$$

1. 对$p$求导：

$$\sigma'(p) = \frac{d}{dp} (1 + e^{-p})^{-1}
= -(1 + e^{-p})^{-2} \cdot (-e^{-p})
= \frac{e^{-p}}{(1 + e^{-p})^2}$$

1. 注意到：

$$\sigma(p) = \frac{1}{1 + e^{-p}},\quad 1 - \sigma(p) = \frac{e^{-p}}{1 + e^{-p}}$$

所以：

$$\sigma(p)(1 - \sigma(p)) = \frac{1}{1 + e^{-p}} \cdot \frac{e^{-p}}{1 + e^{-p}}
= \frac{e^{-p}}{(1 + e^{-p})^2}$$

与上式一致。

<b>考试要点：</b>

- 记住：$\sigma'(p) = \sigma(p)(1 - \sigma(p))$
- 这是 backprop 中非常常用的公式。
    
---

## Feed-forward Neural Networks (FNN)

当我们把许多神经元分层连接起来，且信号只向一个方向传播（从输入到输出，没有回路），就构成了 <b>Feed-Forward Neural Networks (前馈神经网络)</b> 。

### Basic Structure

给定数据集：

$$X = \{x_i \in \mathbb{R}^m \mid i = 1, \dots, n\}$$

$$y = \{y_i \in \mathbb{R}^r \mid i = 1, \dots, n\}$$

网络由多层组成：

- Input layer  
- One or more Hidden layers  
- Output layer  
    
每个 neuron 执行：

$$\text{output}_b = f_a(f_p(h_b, W_b))$$

其中：

- $f_p$：propagation function（线性部分）
- $f_a$：activation function（非线性部分）
    
### Typical Choices

- <b>Input layer</b>：只是分发
    - $f_p(h_b, 1) = h_b$（不做线性变换）
    - $f_a(q) = q$（identity activation）
        
- <b>Hidden / Output layers</b>：
    - $$f_p(h_b, W_b) = h_b W_b$$
    - $f_a(q)$可以是：
        - $$\tanh(q)$$
        - $$\sigma(q) = \frac{1}{1 + e^{-q}}$$
        - identity（回归任务）
            
<b>直观理解：</b>

- FNN 就是在做一系列线性变换 + 非线性变换的组合：

$$y = f_L(W_L f_{L-1}(W_{L-1} \dots f_1(W_1 x)))$$

- 通过多层非线性组合，FNN 可以逼近任意连续函数（universal function approximator）。
    
---

## Training Feed-forward Neural Networks

### Objective Function

我们如何让网络学会预测？我们需要定义一个<b>Objective Function (目标函数)</b>

以回归任务为例，使用 Residual Sum of Squares (RSS)：

$$E_{RSS} = \frac{1}{2} \sum_{i=1}^n \|y_i - \hat{y}_i\|^2$$

其中：

- $y_i$：真实标签  
- $\hat{y}_i$：网络输出  
    
### Parameterization

网络参数：

$$w = \{W_1, W_2, \dots, W_L\}$$

有时会将所有权重向量化：

$$s = \text{vec}(W_1) \oplus \text{vec}(W_2) \oplus \dots \oplus \text{vec}(W_L)$$

### Optimization Methods

- <b>Stochastic Approximation</b>（如 SPSA）  
- <b>Gradient Descent</b>（需要计算$\frac{\partial E}{\partial W}$）  
    - 由于网络是多层非线性，梯度计算通过 <b>Backpropagation</b> 完成。
        
---

## Backpropagation Algorithm

这是 PPT 的重点之一，推导要清楚。

### Setup

对单个样本$z_i = (x_i, y_i)$，网络输出$\hat{y}_i$。

误差函数（以平方误差为例）：

$$E_i = \frac{1}{2} \sum_{j=1}^r (y_{ij} - \hat{y}_{ij})^2$$

目标：对每个权重$W_{ab}$计算：

$$\frac{\partial E_i}{\partial W_{ab}}$$

并更新：

$$W_{ab} \leftarrow W_{ab} - \eta \frac{\partial E_i}{\partial W_{ab}}$$

权重更新规则基于 Stochastic Gradient Descent (SGD) 

### Propagation Value of Neuron a

对 neuron a：

$$p_a = \sum_s W_{as} h_s$$

其中：

- $h_s$：来自前一层 neuron s 的输出  
- $W_{as}$：从 s 到 a 的权重  
    
输出：

$$f_a = \phi(p_a)$$

### Gradient Decomposition

利用链式法则：

$$\frac{\partial E_i}{\partial W_{ab}}
= \frac{\partial E_i}{\partial p_a} \cdot \frac{\partial p_a}{\partial W_{ab}}$$

注意：

$$p_a = \sum_s W_{as} h_s \Rightarrow \frac{\partial p_a}{\partial W_{ab}} = h_b$$

因此：

$$\frac{\partial E_i}{\partial W_{ab}} = \delta_a h_b$$

其中：

$\delta_a = \frac{\partial E_i}{\partial p_a}$(Error Term) 

<b>这一步非常关键：</b>  

- 所有复杂性都被压缩进$\delta_a$ 
- 一旦知道每个 neuron 的$\delta_a$，权重梯度就是$\delta_a \cdot h_b$
    
---

### Output Neuron Case

假设 neuron a 是输出层 neuron，对应输出$\hat{y}_{ia} = f_a$，真实标签为$y_{ia}$。

误差：

$$E_i = \frac{1}{2} \sum_j (y_{ij} - \hat{y}_{ij})^2$$

对输出 neuron a：

$$\frac{\partial E_i}{\partial f_a} = f_a - y_{ia}$$

又因为：

$$f_a = \phi(p_a) \Rightarrow \frac{\partial f_a}{\partial p_a} = \phi'(p_a)$$

所以：

$$\delta_a = \frac{\partial E_i}{\partial p_a}
= \frac{\partial E_i}{\partial f_a} \cdot \frac{\partial f_a}{\partial p_a}
= (f_a - y_{ia}) \cdot \phi'(p_a)$$

若使用 sigmoid 激活：

$$\phi(p_a) = f_a,\quad \phi'(p_a) = f_a(1 - f_a)$$

则：

$$\delta_a = (f_a - y_{ia}) f_a (1 - f_a)$$

<b>考试要点：</b>

- 输出层$\delta_a$公式要熟：

$$\delta_a = (f_a - y_{ia}) f_a (1 - f_a)$$

---

### Hidden Neuron Case

如果 $a$是内部神经元，它的误差来源于它所连接的所有下一层神经元（记为集合 $\mathcal{V}$）。我们需要将误差“反向传播”回来 

现在 neuron a 是隐藏层 neuron，它不会直接出现在误差表达式中，而是通过后续 neuron 影响误差。

设从 neuron a 出发的下一层 neuron 集合为：

$$V = \{v_1, v_2, \dots, v_l\}$$

每个$v_k$的 propagation：

$$p_{v_k} = \sum_s W_{v_k s} h_s$$

其中包括来自 a 的连接$W_{v_k a}$。

误差对$p_a$的影响通过所有$p_{v_k}$传递：

$$\delta_a = \frac{\partial E_i}{\partial p_a}
= \sum_k \frac{\partial E_i}{\partial p_{v_k}} \cdot \frac{\partial p_{v_k}}{\partial p_a}$$

注意：

- $\frac{\partial E_i}{\partial p_{v_k}} = \delta_{v_k}$（这是下一层 neuron 的 delta）  
- $p_{v_k} = \sum_s W_{v_k s} h_s$，而$h_a = f_a = \phi(p_a)$

$$\frac{\partial p_{v_k}}{\partial h_a} = W_{v_k a},\quad
\frac{\partial h_a}{\partial p_a} = \phi'(p_a)$$

所以：

$$\frac{\partial p_{v_k}}{\partial p_a}
= \frac{\partial p_{v_k}}{\partial h_a} \cdot \frac{\partial h_a}{\partial p_a}
= W_{v_k a} \cdot \phi'(p_a)$$

代入：$\delta_a = \sum_k \delta_{v_k} W_{v_k a} \phi'(p_a)$

若激活为 sigmoid：

$$\phi'(p_a) = f_a(1 - f_a)$$

则：

$$\delta_a = f_a(1 - f_a) \sum_k \delta_{v_k} W_{v_k a}$$

<b>考试要点：</b>

- 隐藏层 delta 公式：

$$\delta_a = \phi'(p_a) \sum_k \delta_{v_k} W_{v_k a}$$

---

### Final Weight Update Rule

对任意连接$b \to a$的权重$W_{ab}$：

$$\frac{\partial E_i}{\partial W_{ab}} = \delta_a h_b$$

更新：

$$W_{ab} \leftarrow W_{ab} - \eta \delta_a h_b$$

其中：

- 若 a 是输出 neuron：

$$\delta_a = (f_a - y_{ia}) f_a (1 - f_a)$$

- 若 a 是隐藏 neuron：

$$\delta_a = f_a(1 - f_a) \sum_k \delta_{v_k} W_{v_k a}$$

<b>一句话总结：</b>

> Backpropagation computes gradients layer by layer from output to input using local error terms$\delta_a$, and each weight update is proportional to$\delta_a$times the input$h_b$.

---

## Convolutional Neural Networks (CNNs)

虽然不在 agenda 标题里，但 PPT 有一大块内容，考试肯定可能考。

### Motivation

<b>FFNN 的局限性：</b> 参数过多，忽略了空间结构。 

CNN 的优势： 针对图像等具有空间特征（Spatial Features）的数据。通过参数共享 (Parameter Sharing)，CNN 参数更少，训练更快，且抗噪能力更强 。

CNN 是一种 <b>constrained neural network</b>，专门用于学习 <b>spatial features（空间特征）</b>。

优势：

- <b>Less parameters</b>：参数共享（shared weights）  
- <b>Faster to train</b>：参数少，计算更高效  
- <b>Less data required</b>：更不容易过拟合  
- <b>More robust to noise and overfitting</b>

CNN 的核心在于两个操作的交替使用：

### Convolution Operator

输入矩阵（例如图像 patch）：

$$A =
\begin{bmatrix}
a_1 & a_2 & a_3 & a_4 \\
a_5 & a_6 & a_7 & a_8 \\
\vdots & & &
\end{bmatrix}$$

卷积核（kernel matrix）：

$$K =
\begin{bmatrix}
k_1 & k_2 \\
k_3 & k_4
\end{bmatrix}$$

滑动窗口取子块$A_i$，例如$A_1$是左上角$2 \times 2$：

$$A_1 =
\begin{bmatrix}
a_1 & a_2 \\
a_5 & a_6
\end{bmatrix}$$

将其向量化：

$$\text{vec}(A_1),\quad \text{vec}(K)$$

卷积输出（未加激活）：

$$s_i = \text{vec}(A_i)^T \text{vec}(K)$$

加激活：

$$f_a(s_i)$$

<b>直观理解：</b>

- 卷积就是在不同位置上用同一个 kernel 做加权求和，提取局部模式（edges, textures, shapes）。
    
---

### Pooling Operator

Pooling 用于降维和增强不变性。

#### Max Pooling

例如对$2 \times 2$区域：

$$\max\{a_1, a_2, a_5, a_6\}$$

作用：

- 保留最强响应（strongest activation）  
- 对小的平移、噪声不敏感  
    
#### Mean Pooling

$$\text{mean}\{a_1, a_2, a_5, a_6\}$$

作用：

- 平滑特征  
- 降低噪声  
    
### Deep Convolutional Networks

典型结构：

1. Convolution  
2. Activation  引入非线性
3. Pooling  
4. 重复多层  
5. Vectorization（展平）  
6. Fully-connected layer（FNN）  
    
---

## Recurrent Neural Networks (RNNs) & Echo State Networks (ESNs)

<b>FFNN 的局限性：</b> 无法处理序列数据的依赖关系（如时间序列、文本）。 

RNN 的核心： 引入了 System State (系统状态) 这一概念，使得当前的输出不仅取决于当前输入，还取决于之前的状态。

### Why RNN?

Feed-forward networks 不能直接处理序列依赖<b>Handling Sequential Data</b>：

$$y_t = f(x_1, x_2, \dots, x_t)$$

RNN 通过引入 <b>hidden state</b> 来建模时间依赖。

---

### Echo State Networks (ESNs)

ESN 是一种特殊的 RNN，其特点是训练极其简单高效 。

- <b>Reservoir (储备池):</b> 包含输入权重 A 和内部连接权重 B。<b>关键点：A 和 B 是随机初始化且固定的，不需要训练</b> 。
- <b>State Update:</b> $h_t = f^r(B h_{t-1} + A x_t)$ 。
- <b>Readout (读出层):</b> 只有输出权重 C 需要训练。
- <b>Training Solution:</b> 这是一个简单的线性回归问题，有闭式解：
    - $$C = (G^T G)^{-1} G^T y$$
    - 其中 $G$ 是所有时刻状态的矩阵 。

ESN 是一种特殊的 RNN，它的设计哲学非常独特：<b>"Don't train everything."</b>：

- Input weights$A$：随机  
- Reservoir weights$B$：随机  
- Only output weights$c$are trained  

#### ESN Dynamics

给定序列数据：

$$\{(x_1, y_1), (x_2, y_2), \dots, (x_T, y_T)\}$$

状态更新：

$$h_t = f_h(B h_{t-1} + A x_t)$$

输出：

$$\hat{y}_t = f_o(c^T h_t)$$

其中：

- $x_t \in \mathbb{R}^n$：输入  
- $h_t \in \mathbb{R}^k$：reservoir state  
- $A \in \mathbb{R}^{k \times n}$：input weights  
- $B \in \mathbb{R}^{k \times k}$：reservoir weights  
- $c \in \mathbb{R}^k$：output weights  
    
#### Training ESN

若输出激活$f_o(q) = q$（线性），则训练过程：

1. 随机初始化$A, B$ 
2. 对每个时间步计算$h_t$，构造矩阵：

$$G =
\begin{bmatrix}
h_1^T \\
h_2^T \\
\vdots \\
h_T^T
\end{bmatrix}$$

1. 构造标签向量：

$$y =
\begin{bmatrix}
y_1 \\
y_2 \\
\vdots \\
y_T
\end{bmatrix}$$

1. 用线性回归求解：

$$c = (G^T G)^{-1} G^T y$$

<b>关键点：</b>

- ESN 把复杂的时间依赖交给随机的 reservoir  
- 只训练线性 readout，训练非常快  

---

### ESN-based Representation Extraction

给定一组时间序列：

$$D = \{d_1, d_2, \dots, d_u\},\quad d_i = \{x_{i1}, x_{i2}, \dots, x_{iT_i}\}$$

对每个序列$d_i$：

1. 初始化$h_0 = 0$ 
2. 对$t = 1, \dots, T_i$：

$$h_t = f_h(A x_{it} + B h_{t-1})$$

1. 取最终状态：

$$z_i = h_{T_i}$$

1. 用$\{z_i\}$作为固定维度表示，进行：
    - classification  
    - clustering  
    - other downstream tasks  
        
---

## Autoencoders (AE) & Outlier Detection

### Autoencoder Basics

Autoencoder 是一种 <b>neural network model for learning latent patterns</b>。

目标：学习一个低维表示（latent representation），并尽可能重构输入。

给定数据：

$$X = \{x_i \in \mathbb{R}^m \mid i = 1, \dots, n\}$$

单隐层 AE：

- Encoder：

$$p_i = f_1(W_1 x_i)$$

- Decoder：

$$\hat{x}_i = f_2(W_2 p_i)$$

### Matrix Factorization Interpretation

若激活函数都是 identity：

$$f_1(q) = q,\quad f_2(q) = q$$

则：$p_i = W_1 x_i,\quad \hat{x}_i = W_2 p_i = W_2 W_1 x_i$

记：$C = W_2 W_1$

则：$\hat{x}_i = C x_i$

从整体上看：$X \approx C X$

也可以理解为：$X \approx C P,\quad P = W_1 X$

这与 <b>matrix factorization</b>（矩阵分解）非常类似。

---

### Autoencoders for Outlier Detection

这是 PPT agenda 中明确提到的重点。

<b>One-class classification setting/Outlier Detection：</b>

- 用 AE 在单一“正常类”（inlier class）上训练  
- 目标：让 AE 对 inlier 数据重构误差尽可能小  
    
<b>Decision principle：</b>

- 对于 unseen data：
    - 若属于 inlier class → reconstruction error 小  
    - 若是 outlier → reconstruction error 大  
        
常用指标：Mean Square Error (MSE)：

$$\text{MSE}(x, \hat{x}) = \frac{1}{m} \sum_{j=1}^m (x_j - \hat{x}_j)^2$$

<b>决策方式示例：</b>

- 设定阈值$\tau$：
    - 若$\text{MSE}(x, \hat{x}) \le \tau$→ inlier  
    - 若$\text{MSE}(x, \hat{x}) > \tau$→ outlier  
        
PPT 中的图示：

- inlier points 的重构误差集中在较小范围  
- outlier points 的误差明显偏大  
    
---

### Autoencoders for Collaborative Filtering

给定 item-user matrix：

$$F \in \mathbb{R}^{m \times n}$$

#### Model-oriented CF

Matrix Factorization (MF)：

$$F \approx C P^T,\quad f_{ju} \approx c_j^T p_u$$

AE approach：

对 user u 的向量$f_u$：

$$\hat{f}_{ju} = \big(f_2(W_2 f_1(W_1 f_u))\big)_j$$

#### Neighborhood-oriented CF with AE

1. 用 AE 得到 user embedding：

$$p_u = f_1(W_1 f_u)$$

1. 找到与 user u 最相似的 r 个用户，集合为$B$ 
2. 用 similarity-based aggregation 估计 user u 对 item j 的偏好：

$$\hat{f}_{ju} =
\frac{\sum_{b \in B} g_{\text{sim}}(p_u, p_b) f_{jb}}
{\sum_{b \in B} g_{\text{sim}}(p_u, p_b)}$$

常用 similarity：cosine similarity

$$g_{\cos}(a_j, a_b) = \frac{a_j^T a_b}{\|a_j\| \|a_b\|}$$

---

## Word Embeddings: From LSI to GloVe

<b>(词嵌入技术：从 LSI 到 GloVe)</b>

在 NLP 中，我们需要将词语转化为向量。

### The Limitation of LSI/SVD

回顾之前的 <b>LSI (Latent Semantic Indexing)</b>，它基于 SVD 分解 。虽然能捕捉主题相似性，但存在问题 ：

1. 基于 Bag-of-Words，丢失了词序信息。
2. <b>缺乏向量运算能力 (Vector Arithmetic):</b> 例如，我们希望向量空间满足 "King - Man + Woman = Queen"，但 LSI 做不到。
    
### GloVe (Global Vectors)

<b>GloVe</b>  旨在结合统计矩阵分解（如 LSI）和局部上下文窗口（如 Word2Vec）的优点。

The Derivation (核心推导) 

1. <b>Co-occurrence Probabilities:</b> 定义$P_{ij}$  为词 $j$ 出现在词 $i$ 上下文的概率。
2. <b>Ratio of Probabilities:</b> 关注比率 $r = P_{ik} / P_{jk}$ 。这比单纯的概率更能区分词义关联。
3. <b>Modeling:</b> 我们寻找一个函数 ，使得词向量的差能预测这个比率：
    $$g((w_i - w_j)^T \tilde{w}_k) = \frac{P_{ik}}{P_{jk}}$$

4. <b>Enforcing Homomorphism:</b> 为了满足向量加法与概率乘法的转换，假设 $g(x) = e^x$。

这导出了线性关系：

$$w_i^T \tilde{w}_k = \log(P_{ik}) = \log(X_{ik}) - \log(X_i)$$

1. <b>Final Objective:</b> 引入偏置项  吸收常数项，得到目标：
    $$w_i^T \tilde{w}_k + b_i + \tilde{b}_k = \log(X_{ik})$$
    
#### The Weighted Cost Function

为了避免常见的停用词（如 "the", "and"）主导损失函数，GloVe 引入了一个加权项  ：

$$J = \sum_{i,j} a(X_{ij}) (w_i^T \tilde{w}_j + b_i + \tilde{b}_j - \log X_{ij})^2$$

- 权重函数 $a(c)$ 在$c < c_{max}$  时平滑增长，之后截断为 1。这保证了稀有词和高频词都能被合理学习。
    
#### Result

训练后的 GloVe 向量具有惊人的线性子结构（Linear Substructures）。例如，通过计算向量距离，我们可以发现：

$$w_{Rome} + w_{Germany} - w_{Berlin} \approx w_{Italy}$$

这证明了模型不仅学到了共现，还学到了语义类比关系 。

## Agenda 对应小结（按考试视角）

## [part 4](/QRiFwuy0liWXaGk5KDqcgG4dnYf/R5iKwcIHPi1bbIkKz73cd7WWndb)

# Reinforce learning

## The Idea Behind Reinforcement Learning (RL)

> "Imagine playing Pac-Man without knowing the rules, the controls, or the goal." 

### 1.1 Why not Supervised Learning?

在深入 RL 之前，我们先要理解为什么传统的 <b>Supervised Learning (监督学习)</b> 在某些场景下行不通。

- <b>Supervised Learning 的局限性：</b> 监督学习依赖于“标准答案” (Label)。你需要给模型一个数据集，告诉它：“在这个情境下，正确动作是 A” 。
- <b>RL 的现实困境：</b> 在像 Pac-Man 这样的游戏中，或者现实决策中，我们往往无法获得针对所有未知情况的“标准答案数据集” 。当 Pac-Man 遇到一个从未见过的幽灵布局时，它不知道哪一步是绝对“最佳”的，因此没有 Label 可供学习 。

### 1.2 Learning by Trial and Error

既然没有老师手把手教，<b>Reinforcement Learning</b> 采取了另一种策略：<b>试错 (Trial and Error)</b> 。

- <b>Core Mechanism:</b> 核心逻辑是建立“动作”与“结果”之间的联系 (Connection between individual action and later result) 。
- <b>Analogy (Human Learning):</b> 这非常像人类（尤其是儿童）的学习方式 ：
    - <b>Punishment:</b> 如果做了坏事  父母生气  收到负反馈，下次不再做 。
    - <b>Reward:</b> 如果做了好事  得到表扬或糖果  收到正反馈，下次继续做 。

---

## Agent and Environment

为了将上述直觉数学化，我们需要定义 RL 的基本组件。以 Pac-Man 游戏为例：

### 2.1 Definitions

- <b>Agent (智能体):</b> 做决策的主体。在例子中就是 Pac-Man 。
- <b>Environment (环境):</b> 除 Agent 以外的一切事物。包括墙壁、幽灵 (Ghosts)、豆子 (Pellets) 。
- <b>State (s) (状态):</b> 环境在当前时刻的“样子”或“配置”。例如：Pac-Man 的坐标 (5,5)，红鬼的坐标 (5,8) 。
- <b>Action (A) (动作):</b> Agent 可以做出的选择。例如：上下左右移动 。
- <b>Reward (R) (奖励):</b> 环境给出的反馈信号。例如：吃豆子 (+10分)，被鬼吃掉 (-100分) 。

### 2.2 The Agent-Environment Loop (交互循环)

RL 的运作是一个随时间 (t) 推进的循环过程 ：

1. <b>Observation (</b>$s_t$<b>):</b> Agent 观察当前环境状态（如：我在哪，鬼在哪）。
2. <b>Action (</b>$a_t$<b>):</b> 基于观察，Agent 选择一个动作（如：向左走）。
3. <b>State Transition (</b>$s_t \rightarrow s_{t+1}$<b>):</b> 既然动作发生了，环境随之改变（Pac-Man 到了新格子，鬼也移动了）。
4. <b>Reward (</b>$r_t$<b>):</b> 环境根据结果给出一个即时分数（Did I eat a dot?）。

<b>The Ultimate Goal:</b> Agent 的唯一目标是最大化<b>累积奖励的总和 (Sum of Rewards)</b>，而不仅仅是眼前的奖励 。

### 2.3 The Reward Function

<b>Reward Function</b> 是 RL 的灵魂，它定义了<b>我们要什么 (What we want)</b>，而不是<b>怎么做 (How to get there)</b> 。

- 它不仅与动作有关，更与状态有关 。
- <b>Pac-Man 示例：</b>
    - Eat dot: 
    - Eat cherry: 
    - Touch ghost:  (Punishment)
    - Move into wall:  (为了鼓励它不要撞墙或浪费时间) 。

---

## The Math behind RL: Formalizing the World

现在我们将上述概念抽象为数学模型，称为 <b>Markov Decision Process (MDP)</b>。

### 3.1 Markov Decision Process (MDP)

一个 MDP 由元组$(S, A, P, R)$  组成 ：

- S: State Space (所有可能状态的集合)。
- A: Action Space (所有可能动作的集合)。
- R: Reward Function。
- <b>P: Transition Probability (转移概率) </b>$P(s_{t+1} | s_t, a_t)$
    - 这是一个概率分布。它的意思是：如果在状态 $s_t$  采取动作$a_t$ ，跳转到状态 $s_{t+1}$ 的概率是多少？。

<b>The Markov Property (马尔可夫性质):</b>

这是极其重要的假设：“<b>未来只取决于当前状态，而与过去的历史无关</b>” (The future depends only on the current state, not the history) 。

- <i>Interpretation:</i> 只要我知道了现在的$s_t$ （Pac-Man 和鬼现在的位置），我就拥有了预测未来所需的所有信息。我不需要知道 Pac-Man 是一步步怎么走到这里的。
    
### 3.2 Return and Discount Factor

我们之前说过目标是最大化累积奖励。这个累积和称为 <b>Return (</b>$G_t$<b>)</b>。

$$G_t = r_t + r_{t+1} + r_{t+2} + \dots$$

但这有一个问题：游戏可能无限进行下去，总和可能无穷大。因此我们需要引入 <b>Discount Factor (折扣因子</b>$\gamma$<b> )</b>，其中 $\gamma \in [0, 1]$ 。

<b>Corrected Formula:</b>

$$G_t = r_t + \gamma r_{t+1} + \gamma^2 r_{t+2} + \dots$$

- <b>物理意义：</b>  决定了 Agent 有多看重“未来” 。
- $\gamma = 0$: 目光短浅，只在乎眼前的奖励 (Immediate reward) 。
- $\gamma \approx 1$(e.g., 0.99): 高瞻远瞩，愿意为了未来的胜利牺牲现在的分数（例如：为了吃到大樱桃，现在先绕远路）。

### 3.3 Value Functions & Policy

Agent 如何判断局势？它需要三个核心函数 ：

1. <b>State-Value Function (</b>$V(s)$<b>):</b>
    $$V(s) = \mathbb{E}[G | s]$$

<i>解释：</i> 仅仅停留在状态 s 有多好？（即：如果我到了这个位置，预期未来能拿多少总分？）

1. <b>Action-Value Function (</b>$Q(s, a)$<b>):</b>

$$Q(s, a) = \mathbb{E}[G | s, a]$$

<i>解释：</i> 在状态  s下，如果我<b>采取动作</b> a，预期未来能拿多少总分？这直接指导具体的行动选择 。

1. <b>Policy Function (</b>$\pi$<b>):</b>
    $$a_t \sim \pi(\cdot | s_t)$$
    
<i>解释：</i> 策略函数是 Agent 的“大脑”，它是从 State 到 Action 的映射。

- <b>Exploration (探索):</b> 训练初期，Agent 可能会随机乱动，试图发现哪里有高分 。
- <b>Exploitation (利用):</b> 训练后期，Agent 倾向于利用已学到的知识，总是选择 Q 值最高的动作 (Optimal Action) 。

---

## The Bellman Equation

<b>Bellman Equation</b> 是 RL 中最核心的方程，它定义了 Value Function 的递归关系。

$$V(s_t) = \max_{a} [ R(s_t, a_t) + \gamma \sum_{s_{t+1}} P(s_{t+1} | s_t, a_t) V(s_{t+1}) ]$$

### 4.1 Equation Breakdown (详细推导)

让我们把这个复杂的公式拆解开来看 ：

1. $V(s_t)$: 当前状态的价值。
2. $max_a$: 我们假设 Agent 总是足够聪明，会选择那个能带来最大收益的动作 (Optimal Action)。
3. $R(s_t, a_t)$: <b>Immediate Reward</b>。做完动作立刻拿到的奖励。
4. $\gamma$: Discount Factor。
5. $\sum P(\dots) V(s_{t+1})$: <b>Future Value</b>。这是对未来的期望。因为环境可能有随机性（P），我们需要对所有可能的下一个状态$s_{t+1}$ 的价值$$V(s_{t+1})$$  进行加权求和。
    
<b>直观理解：</b> “现在的价值” = “刚才拿到手的钱” + “打折后的未来预期价值”。

### 4.2 Q-Learning Update

基于 Bellman 方程，我们发展出了 <b>Q-Learning</b> 算法。这是一种迭代更新的方法：

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha [ \underbrace{R + \gamma \max Q(s_{t+1}, a_{t+1})}_{\text{Target}} - \underbrace{Q(s_t, a_t)}_{\text{Current}} ]$$

- <b>逻辑：</b> 通过不断的重复，Agent 计算出的 Q 值会越来越接近真实的数学期望。
- <b>DQN (Deep Q-Network):</b> 当状态太多存不下表格时，我们用神经网络 (Neural Network) 来近似拟合这个 Q 函数 。

---

## Beyond Agents: Learning to Think and Reason

RL 的概念如今已经超越了玩游戏的 Agent，成为了训练大语言模型 (LLM) "思考"的关键技术 。

### 5.1 Proximal Policy Optimization (PPO)

这是目前非常流行的算法（OpenAI 常用）。

- <b>Structure:</b> 它使用 <b>Actor-Critic</b> 架构。
- <b>Actor:</b> 控制行为 (Policy)。
- <b>Critic:</b> 评分员，衡量动作好坏 (Value Function) 。
- <b>Core Idea (Clipping):</b> 它的核心是防止模型学得“太快太猛”。如果在一次更新中策略变化太大，可能会导致模型崩溃。因此 PPO 会 <b>Clip (截断)</b> 更新幅度，保证稳定性 。
- <b>Math:</b>
    $$L^{CLIP} = \dots \min( \dots, \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon)\hat{A}_t )$$

这里的 $r_t(\theta)$ 是新旧策略的概率比率。如果不加限制，这个比率可能爆炸。PPO 强制将其限制在 $[1-\epsilon, 1+\epsilon]$  之间 。

### 5.2 Group Relative Policy Optimization (GRPO)

这是 <b>DeepSeek</b> 引入的新技术，旨在优化 PPO 的缺点 。

- <b>Drawback of PPO:</b> PPO 需要训练两个网络 (Actor 和 Critic)，这很占显存和算力 。
- <b>GRPO Solution:</b> <b>移除 Critic 模型</b> 。
- <b>How it works:</b>

1. 对于同一个输入，生成<b>一组 (Group)</b> 多个输出 。
2. 用 Reward Model 给这组输出打分 。
3. 计算 <b>Relative Advantage</b>: 比较这一组里的某个输出和组内平均水平的差距 。

- <i>直觉：</i> 不需要一个绝对的 Critic 告诉我好坏，只要在一组尝试中找出相对最好的那个进行强化即可。
    
### 5.3 RLHF (Reinforcement Learning from Human Feedback)

为什么 LLM 训练需要 RL？

- <b>Problem:</b> 很难定义一个数学公式来衡量“这个摘要写得好不好”。但是，让<b>人类</b>来打分（点赞/点踩）是很容易的 。

- <b>Workflow:</b>

1. 收集人类反馈数据。
2. 训练一个 <b>Reward Model</b> 来模仿人类的打分标准 。
3. 使用这个 Reward Model 配合 PPO 或 GRPO 来训练 LLM 。

---

## Reward Function Exploitation (The Risk)

最后，必须警惕 RL 的一个经典问题：<b>Reward Hacking (奖励利用)</b>。

如果 Reward Function 定义得不够严谨，Agent 会想方设法“作弊”来拿高分，而不是真正完成任务 。

<b>Example: Generating Unit Tests</b> 

我们希望 AI 写出能通过的单元测试代码。

- <b>Attempt 1:</b>
    - <i>Rule:</i> Reward = "Unit test passes".
    - <i>Agent Exploit:</i> 写一个空函数 `def test(): pass`。它运行不报错，Agent 拿到满分，但这毫无意义 。

- <b>Attempt 2:</b>
    - <i>Rule:</i> Reward = "Passes AND has one assert".
    - <i>Agent Exploit:</i> 写 `def test(): assert true`。依然毫无意义，但符合规则 。

- <b>Solution:</b>
    - <i>Rule:</i> Reward = "Calls the function to test AND asserts over return" 。

<b>Lesson:</b> 你得到的正是你所奖励的 (You get what you reward)。必须极其小心地设计奖励函数。

---

## Summary

- <b>Basis:</b> RL 是基于 Agent、Environment、State、Action、Reward 的循环交互 。
- <b>Markov Property:</b> 只有当下是重要的，历史无关紧要 。
- <b>Value Function:</b> 评估状态和动作的长期价值。
- <b>Reusability:</b> 这一套逻辑不仅用于游戏，更是训练现代 LLM (ChatGPT, DeepSeek) 的基石 。

