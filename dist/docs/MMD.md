---
title: MMD
slug: QQqNwziPmiYyFBknLftcE8vWnLb
sidebar_position: 7
---


# MMD

# Introduction

# Affinity Mining I

# Affinity Mining II

# Latent Pattern Mining I

# Latent Pattern Mining II

# Neural Networks/Gradient Descent

## Predictive Data Mining

<b>预测性数据挖掘（Predictive Data Mining）</b>是通过在已知数据集上训练模型来揭示未知信息的核心手段。

以下是来源对预测性数据挖掘的定义、任务及实现机制的详细看法：

### 预测性数据挖掘的定义与核心目标

来源指出，预测性数据挖掘的本质是<b>inferring unknown info using models on labeled datasets </b> 利用在<b>标记数据集（Labeled Datasets）</b>上训练的<b>模型</b>来推断<b>未知信息</b>。

- <b>数学形式</b>：以二元分类为例，给定输入数据 $X = {x_i \in \mathbb{R}^m}$ 和标签 $y = {y_i \in {0, 1}}$，目标是找到一个函数 $f(\cdot)$，使得 $y_i = f(x_i)$。
- <b>核心逻辑</b>：通过模型建立输入特征与输出标签之间的映射关系。

> 预测性数据挖掘并不是一定要是监督学习的，
> <b>预测任务也可以由无监督模型完成</b>
> 预测性任务的本质不是“是否有标签”，而是：
> <b>是否对未来或未知数据做出判断或推断</b>

### Common Prediction Type

来源列举了三种最常见的预测任务：

- <b>分类（Classification）</b>：如上述二元分类示例，用于预测离散标签。
- <b>回归（Regression）</b>：用于预测连续数值。
- <b>异常/新颖性检测（Outlier/Novelty Detection）</b>：识别与正常模式不符的数据点。【常用无监督学习 但是依旧属于prediction type】

### Example Applications

来源特别强调了预测性挖掘在媒体监控和应用分析中的实际用途：

- <b>Media Monitoring</b>：检测虚假或被操纵的新闻文章。
- <b>毒性分析（Toxicity Analysis）</b>：在应用程序中检测可疑（欺诈/作弊）用户。
- <b>协同过滤（Collaborative Filtering）</b>：根据用户的整体消费行为<b>预测</b>用户可能喜欢的项目（电影、商品、文章等）并推荐项目(Recommend system)，这被视为预测性挖掘的一种应用。

> CF协同过滤可以是监督式（评分预测）或无监督式（基于相似度的推荐）

## Building Blocks: Perceptrons & Activation

来源材料将<b>感知机（Perceptrons）与激活函数（Activations）</b> 视为构建复杂前馈神经网络（FFNN）的最基础组件（Building Blocks）。这些组件通过模拟生物神经元的逻辑，实现了从简单的线性运算到复杂的非线性映射的转变。

以下是来源对这些核心概念的详细看法：

### Perceptron（Computational Unit）

感知机perceptron被定义为处理输入向量 $h \in \mathbb{R}^{(q+1)}$ 的基本计算单位。根据来源，每个感知机perceptron（或神经元）内部执行两个连续的操作：

- <b>传播（Propagation）</b>：这是perceptron处理的第一步，通过对输入向量 $h$ 和权重向量 $w$ 进行<b>线性组合</b>，计算出传播值 $p = \sum w_s h_s = w^T h$。
- <b>激活（Activation）</b>：将传播值 $p$ 传递给一个激活函数<b>Activation</b>，生成最终的输出（即激活值 $a$）。

### 激活函数Activation：从简单逻辑到Differentiable

激活函数Activation赋予了感知机处理非线性问题的能力。来源讨论了不同类型的激活函数及其在不同场景下的应用：

- <b>符号函数（Sign Function）</b>：在最基础的感知机模型中，激活函数为 $sign(p)$。若 $p < 0$ 则输出 -1，否则输出 1。这种函数具有阶梯状的物理特性，但<b>不可微</b>。
- <b>可微激活函数（Differentiable Activations）</b>：这是使用梯度下降训练网络的关键。 
    - <b>Sigmoid 函数 (</b>$\sigma$<b>)</b>：其形式为 $\sigma(p) = \frac{1}{1+e^{-p}}$。Sigmoid 函数具有非常优秀的数学性质，其导数 $\sigma'(p) = \sigma(p)(1-\sigma(p))$ 可以直接利用函数值计算，这在反向传播中效率极高。

- <b>恒等函数（Identity Function）</b>：在进行<b>regression</b>时，输出层通常使用 $f_a(q) = q$ 作为激活函数。
    - 为什么用恒等函数：因为regression的目的是预测一个实数值，通常是无限制的，而很多激活函数都会把结果映射到一个有限制的区间，所以regression任务的输出层必须保持线性，以允许模型输出任意实数。

## Neural Networks: Feed-Forward(FFNN)

在“Mining Media Data I: Neural Networks & Gradient Descent”的背景下，来源将<b>前馈神经网络（Feed-Forward Neural Networks, FFNN）</b>视为一种<b>受生物启发（Inspired by biology）</b>的强大工具，其核心功能是作为一个<b>函数近似器（Function Approximator）</b>，用于在输入数据 $X$ 和标签 $y$ 之间建立映射 $f(x_i) = y_i$。

以下是来源对 FFNN 的深度探讨：

### FFNN's structure

FFNN 被描述为由多个层组成的链式结构，每一层对数据进行特定的转换：

- <b>输入层（Input Layer）</b>：其功能仅仅是转发输入，不进行复杂的转换（即 $f_a(q) = q$）。
- <b>隐藏层与输出层（Hidden and Output Layers）</b>：这是网络的核心，每个神经元 $b$ 接收来自前一层的输入向量 $h_b$，并拥有自己的权重 $w_b$。
- <b>层级传递</b>：数据从第 0 层（输入层）开始，逐层计算传播值和激活值，直到最后一层（第 $L$ 层）产生网络输出 $\hat{y}_i$。
    
### Neuron Operation

来源强调 FFNN 是由<b>感知机（Perceptrons）</b> 这些简单单元构成的<b>链式组合</b>。每个神经元执行两个关键步骤：

- <b>传播（Propagation）</b>：执行线性组合，计算 $p_b = w_b^T h_b$。这决定了输入信号的加权强度。
- <b>激活（Activation）</b>：通过非线性函数 $f_a(p)$ 处理传播值。<b>Sigmoid 函数</b>（$\sigma$）是隐藏层最常见的选择，因为它具有优良的可微性，方便梯度下降训练。而在执行<b>regression</b>的输出层，通常使用恒等函数（Identity Function）。

在“通用学习循环”中，感知机和激活函数共同完成了<b>前向传播（Forward Pass）</b> 的任务，即根据当前参数计算输出。通过激活函数引入的<b>非线性</b>，使得网络能够作为一种受生物启发的“<b>Function Approximator</b>”，去模拟数据中的复杂关系。

### Compact Line

来源提供了一个<b>紧凑的单行公式</b>，将整个 $L$ 层 FFNN 的运算逻辑概括为嵌套的矩阵乘法与激活映射：

$$\hat{y}_i = f^{(L)}_a(W^{(L)}f^{(L-1)}_a(W^{(L-1)}...W^{(2)}f^{(1)}_a(W^{(1)}x_i)))$$

这表明 FFNN 本质上是一个复杂的复合函数<b>Chain of weighted matrix multiplications and activations</b>，通过调整各层的权重矩阵 $W$，它可以拟合极其复杂的数据模式。

---

<b>比喻理解：</b>

你可以把 FFNN 想象成一条<b>自动加工流水线</b>。原始零件（输入数据）从入口进入，经过多个加工工位（层）。每个工位都有特定的工人（神经元），他们根据操作手册（权重）对零件进行组装和处理。每个工位结束时，零件的形状都会发生非线性变化（激活函数）。最终，流水线末端产出成品（预测值）。

---

## Optimization with Gradient Descent(GD)

在“Mining Media Data I: Neural Networks & Gradient Descent”的背景下，来源将<b>梯度下降（Gradient Descent, GD）</b> 视为一种通用的优化引擎，用于通过迭代调整参数来最小化目标函数minimize objective function（如重构误差或损失函数）。

以下是来源对梯度下降算法及其在不同媒体数据挖掘场景中应用的详细看法：

### Goal and Intuition

梯度下降的根本目标是找到一组参数 $x$，<b>minimize objective function</b>。其核心直觉是：从当前点出发，向着<b>函数下降最快（最陡峭）的方向</b>迈出一小步 steps in steepest downhill direction。

### Update Rules

来源给出了梯度下降的标准更新公式，这是所有后续变体（如 SGD 或投影梯度下降）的基础：

$$\mathbf{x_{new} \leftarrow x_{old} - \eta \cdot \nabla f(x)}$$

- $\nabla f(x)$<b>（梯度）：</b> 指向函数上升最快steepest ascent的方向，因此在公式中取负值以实现下降。
- $\eta$<b>（learning rate）：</b> 决定了每一步跨越的距离（step size）。

### Application of GD

来源展示了梯度下降如何灵活适应不同的任务需求：

- <b>矩阵分解（Matrix Factorization）：</b> 在近似 $X \approx CP^T$ 时，不同于交替最小二乘法（ALS）的一次性求解，梯度下降法通过对误差项$∥X−CP^⊤∥_F^2$的 <b>trace 形式</b>( squared Frobenius norm)$tr((X−CP_⊤)^⊤(X−CP_⊤))$，<b>迭代地“推挤”（Nudge）</b>$C$<b> 和 </b>$P$，使其逐步逼近最优解。
- <b>约束优化（Projected Gradient Descent, PGDAA）：</b> 在原型分析（Archetypal Analysis）中，参数必须满足随机约束（即和为 1）。标准 GD 会违反这一约束，因此来源提出了<b>投影梯度下降</b>：先执行标准更新步，然后将结果<b>映射（Project）回有效的“单纯形”（Simplex）区域</b>。
- <b>神经网络训练（Backpropagation）：</b> 梯度下降结合链式法则，构成了反向传播的核心。它利用误差信号 $\delta$ 来计算损失对每个权重 $w$ 的梯度，从而进行微调,。

---

<b>比喻理解：</b>

梯度下降就像一个<b>在浓雾中下山的登山者</b>。因为浓雾遮蔽了视野，他无法直接看到山底（全局最优解），所以他只能感受脚下土地的坡度（梯度）。他每走一步，都会感知哪个方向下降得最陡，然后向那个方向迈出一小步（学习率）。

## Training Neural Networks: Backpropagation

在“Mining Media Data I: Neural Networks & Gradient Descent”的背景下，来源将<b>反向传播（Backpropagation）</b>视为训练神经网络的核心算法工具<b>。</b>其本质是<b>梯度下降（Gradient Descent）与微积分链式法则（Chain Rule）的结合</b>，旨在通过迭代优化找到使损失函数 $L$ 最小化的权重 $W$。

$L(W)=L(y,\hat y)$ 模型预测 $\hat y$ 与真实值 $y$ 的差距。

隐藏层或输出层神经元的 <b>预激活输入</b> 是：

$$p_b=∑_iw_{bi}a_i+b_b$$

也就是说每个$a_i$ (上一层的输出也就是原输入 也就是上一层经过激活函数的值) 乘以对应权重$w_{bi}$再求和加上偏置就是预激活输入。

我们想知道如果只改变一个权重$w_{bi}$（神经元b和上一层第i个神经元的权重），损失函数 $L$ 会怎么变化。

$\frac{∂L}{∂w_{bi}}=\frac{∂L}{∂p_b}⋅ \frac{∂p_b}{∂w_{bi}}$  

$\frac{∂p_b}{∂w_{bi}}=a_i$(展开$p_b$,只有一项与$w_{bi}$有关)

因此令$\delta_b = \frac{\partial L}{\partial p_b}$  ，则$\frac{∂L}{∂w_{bi}} = \delta_b · a_i$

以下是这些来源对反向传播及其在训练过程中作用的详细看法：

### Error Signal $\delta_b$

反向传播的核心在于为网络中的每个神经元 $b$ 计算一个<b>误差信号 </b>$\delta_b$。

- <b>数学定义</b>：$\delta_b = \frac{\partial L}{\partial p_b}$，其中 $p_b$ 是该神经元的传播值。
- <b>物理含义</b>：它衡量了改变该神经元的传播值对最终总损失产生的<b>影响程度</b>。
    
### Backward Pass(Computing )<b> </b>$\delta_b$

来源详细描述了误差是如何在网络中从右向左“传播”的：

- <b>输出层神经元（Output Neuron）</b>：产生直接误差。计算公式为 $\delta_o = (a_o - y) f'(p_o)$，即将预测输出（就是经过激活函数后的$a_o$）与目标的差值乘以激活函数的导数。如果激活函数是 <b>Sigmoid</b>，其导数可简化为 $a_o(1-a_o)$。

> $a_o$是$p_o$经过激活函数后的值 即$a_o = f(p_o)$(1)，损失函数以MSE为例 ：$L = \frac {1}{2} · (a_o-y)^2$ (2)
> 1. $$δo=\frac{∂L}{∂p_o}=\frac{∂L}{∂a_o}⋅\frac{∂a_o}{∂p}$$
> 2. 根据（2）算出 $\frac{∂L}{∂a_o} = a_o-y$
> 3. 根据（1）算出 $\frac{∂a_o}{∂p} = f'(p_o)$

- <b>隐藏层神经元（Hidden Neuron）</b>：继承来自下一层的误差。神经元 $b$ 的误差由其所有后续层神经元 $k$ 的误差信号 $\delta_k$ 加权总和决定：$\delta_b = f'(p_b) \sum_{k \in \text{next layer}} w_{kb} \delta_k$。

> 隐藏层没有真实标签，它不会直接出现在损失函数里。它影响损失的唯一方式是：<b>通过它连接的下一层神经元 k。</b>
> $$p_b→a_b→p_k→a_k→L$$
> $δb=\frac{∂L}{∂p_b}=∑_k\frac{∂L}{∂p_k}⋅\frac{∂p_k}{∂a_b}⋅\frac{∂a_b}{∂p_b}$ 
> 1. $$\frac{∂L}{∂p_k} =\delta_k$$
> 2. $p_k = \sum_iw_{ki}·a_{i}$ ，所以$\frac{∂p_k}{∂a_b} = w_{kb}$
> 3. $$\frac{∂a_b}{∂p_b} = f'(p_b)$$

### Weight Update Rule

来源指出，更新特定权重 $w_{bj}$（从神经元 $j$ 指向神经元 $b$）需要两个方向的信息：

- <b>来自右侧的信息</b>：当前神经元的误差信号 $\delta_b$。
- <b>来自左侧的信息</b>：前一层神经元的激活值 $h_j$。
- <b>最终梯度与更新</b>：梯度的计算公式为 $\frac{\partial L}{\partial w_{bj}} = \delta_b \cdot h_j$。根据梯度下降规则，权重更新为：$w_{bj} \leftarrow w_{bj} - \eta \delta_b h_j$，其中 $\eta$ 为学习率。
    
### Efficiency优化：Stochastic Gradient Descent（SGD)

由于standard梯度下降需要计算整个数据集的误差，效率较低，因此来源推荐在反向传播中使用<b>随机梯度下降（SGD）</b>。

> $\frac{∂L}{∂w}=\frac{1}{N}∑_{i=1}^N\frac{∂L(i)}{∂w}$ 计算所有的样本的梯度 再平均

- <b>优势</b>：
    1. Faster updates：每次仅选取单个随机样本更新权重，速度更快
    2. Resilient：产生的“noise”有助于算法跳出<b>局部最小值local Minima</b>。
    > SGD 每次只用一个样本更新权重
> 每个样本的梯度方向都不一样
> 所以更新方向带有“随机抖动”

- <b>代价</b>：寻找最小值的路径noise path会变得较为“抖动”（Jittery）。
    
---

<b>比喻理解：</b>

反向传播就像是<b>一家公司内部的责任追溯机制</b>。当最终产品（输出层）出现缺陷（Loss）时，质检员不仅指出产品错了，还会根据管理链条（权重weighs）反向追溯，告诉每个部门（隐藏层）他们对这个错误负有多少责任（$\delta$），以便每个职员（参数）微调自己的工作方式，确保下次产出的产品更接近完美。

如果是<b>标准 GD</b>，他会仔细检查四周所有方向再迈步；而 <b>SGD</b> 就像是他只随机选一个方向观察就立刻迈步——虽然路径会有些弯曲jittery，但他走得更快，且不容易被路上的小坑洼（局部最小值local minima）困住。

## The Universal Learning Loop

在“Mining Media Data I: Neural Networks & Gradient Descent”的背景下，来源将**“通用学习循环”（The Universal Learning Loop）<b>视为现代机器学习算法的</b>核心统一架构**。

无论是在进行矩阵分解（Matrix Factorization）还是训练复杂的神经网络，该循环都被认为是一个恒定不变的四步迭代过程，旨在通过误差驱动的反馈来优化模型参数。以下是来源对该循环各阶段及其在媒体数据挖掘中意义的详细看法：

### Definition：跨算法的统一性

来源明确指出，尽管算法的数学形式可能不同（如因子矩阵或神经元权重），但其<b>核心逻辑是完全相同的</b>。这一循环将数据挖掘任务从静态的公式计算转变为动态的、自我修正的优化过程。

### 循环的四个关键阶段

来源将反向传播置于一个<b>四步走的通用学习循环</b>中，作为连接误差评估与参数更新的关键桥梁：

1. <b>Forward Pass</b>：compute current output
2. <b>Measure error</b>：compare output to reality。
3. <b>Backward Pass/Gradients</b>：计算梯度 ($\nabla$) 或误差信号 ($\delta$)
4. <b>Update</b>：$\theta \leftarrow \theta - \eta \cdot \text{Gradient}$。

根据来源的总结，该通用循环由以下四个步骤构成：

- <b>第一步：Forward Pass</b>
    - <b>定义</b>：根据当前的参数计算当前的输出或近似值。
    - <b>在神经网络中</b>：表现为输入数据经过各层权重和激活函数的链式运算，最终产生预测值 $\hat{y}_i$。
    - <b>在矩阵分解中</b>：表现为计算当前 $C$ 和 $P$ 矩阵的乘积 $CP^T$ 以逼近原始矩阵 $X$。

- <b>第二步：Measure Error</b>
    - <b>定义</b>：将模型的输出与“现实”（真实标签或原始数据）进行比较。
    - <b>衡量指标</b>：来源提到了多种度量方式，包括<b>平方误差（Squared Error）</b>、<b>欧几里得距离（Euclidean distance）以及用于矩阵近似的平方 Frobenius 范数</b>。

- <b>第三步：Backward Pass / Gradients）</b>
    - <b>定义</b>：计算梯度 ($\nabla$) 或误差信号 ($\delta$)，以识别哪些参数导致了误差。
    - <b>机制</b>：在神经网络中，这一步利用<b>链式法则</b>将误差从输出层向后传播，计算每个权重对损失的影响程度。
    - <b>在约束优化中</b>：如原型分析（AA），这一步涉及计算受限特征空间内的梯度方向。

- <b>第四步：更新（Update）</b>
    - <b>定义</b>：根据计算出的梯度稍微调整参数。
    - <b>更新公式</b>：$\theta \leftarrow \theta - \eta \cdot \text{Gradient}$，其中 $\eta$ 是控制步长的<b>学习率</b>。

### 预测性数据挖掘的基石

这一学习循环被视为实现<b>预测性数据挖掘（Predictive Data Mining）</b> 任务（如分类、回归和异常检测）的技术引擎。通过不断运行该循环，模型能够从已标记的媒体数据中提取模式，从而对未知信息进行推断，例如识别虚假新闻或分析社交媒体用户的毒性行为。

---

<b>比喻理解：</b>

你可以把这个“通用学习循环”想象成一个<b>射箭手（模型）在练习射击</b>：

1. <b>前向传播</b>：射手根据当前的姿势和力度将箭射向靶子。
2. <b>衡量误差</b>：观察箭着陆点与红心（现实）之间的距离。
3. <b>反向传播</b>：射手在大脑中回溯刚才的动作，分析是手指松早了还是重心偏了（识别导致误差的参数）。
4. <b>更新</b>：稍微调整站姿或拉弓的力度（利用学习率微调参数），准备下一次射击。

# Outlier/Anomality Analysis

or Novelty Detection/Deviation Detection

## Outlier Concepts（异常点概念）

### 定义：Deviating Observations

- 异常点outlier是<b>偏离整体数据分布或行为模式的观测值</b>。<em>An outlier is an observation which deviates so much from the other observations</em>
- 它们可能是<b>错误 / 噪声</b>（比如传感器坏了）<b>、罕见但真实的事件</b>（比如一次罕见的攻击、一次极端操作）<b>、或新模式 / 新趋势的信号</b>（比如新型欺诈方式、新战术）

### 特征：Rare and Distinct

- <b>Rare（稀有）</b>：在数据中出现频率极低。
- <b>Distinct（显著不同）</b>：在特征空间中与其他点差异明显。

### 应用场景：

- <b>Fraud Detection</b>：识别欺诈交易或行为。
- <b>Intrusion detection: </b>eg:Cybersecurity 监控系统、网络或应用，识别是否有未经授权的访问、攻击或异常行为。
- <b>System Health Monitoring</b>：识别设备故障或性能异常。
- <b>Media/Sports Highlights</b>：自动提取高光片段或关键事件。

---

## Methodology Taxonomy（方法论分类）

这是异常检测的技术路径分类，分为四大类：

<table>
<colgroup>
<col width="182"/>
<col width="144"/>
<col width="395"/>
</colgroup>
<tbody>
<tr><td><p><b>方法类别</b></p></td><td><p><b>代表算法</b></p></td><td><p><b>核心思想</b></p></td></tr>
<tr><td><p>Probabilistic/Statistical</p></td><td><p>Z-Score, Gaussian Mixture Models</p></td><td><p><b>假设数据服从分布</b><em>，偏离均值即异常</em><br/><em>Assume data follows a distribution (e.g., Gaussian)</em></p></td></tr>
<tr><td><p>Proximity/Density Based</p></td><td><p>kNN, LOF</p></td><td><p>异常点远离其他点或周围密度低<br/><em>Assume normal points are close together/ dense</em></p></td></tr>
<tr><td><p>Classification Based</p></td><td><p>One-Class SVM, Isolation Forests</p></td><td><p>学习正常边界，边界外即异常<br/><em>Learn a boundary around normal data</em></p></td></tr>
<tr><td><p>Reconstruction-Based</p></td><td><p>AE, AA</p></td><td><p>重建数据，误差大即异常<br/><em>Assume normal data can be compressed, outliers cannot.</em></p></td></tr>
</tbody>
</table>

### *Probabilistic / Statistical（概率统计方法）

- <b>代表算法：Z-Score</b>
- <b>核心思想：</b>  
假设数据服从某种分布（通常是正态分布），异常点是那些<b>远离均值很多个标准差</b>的点。
- <b>Z-Score 定义：</b>

$$Z=\frac{x−μ}σ$$

- x：样本值
- μ：均值
- σ：标准差
- Z 值越大（或越小），说明这个点越偏离平均水平。
- <b>适用场景：</b>
    - 数据分布稳定、近似正态的场景
    - 快速初筛异常值

- <b>优点：</b> 简单、快速、可解释
- <b>缺点：</b> 对分布假设敏感，无法处理复杂结构或高维数据

### *Proximity / Density（邻近与密度方法）

- <b>代表算法：kNN（k-近邻）</b>
- <b>核心思想：</b>  
异常点往往<b>离其他点很远</b>，或者<b>周围点很少</b>。
- <b>常见方法：</b>
    - 距离型：计算每个点到最近的 k 个邻居的平均距离
    - 密度型：如 LOF（Local Outlier Factor），比较局部密度与邻居密度

- <b>适用场景：</b>
    - 无需分布假设
    - 数据维度不太高时效果好

- <b>优点：</b> 直观、适应性强
- <b>缺点：</b> 高维数据中距离不再可靠；计算复杂度高

### *Classification（分类方法）

- <b>代表算法：One-Class SVM</b>
- <b>核心思想：</b>  
训练一个模型来<b>学习正常数据的边界</b>，然后判断新数据是否落在边界之外。
- <b>One-Class SVM：</b>
    - 只用正常数据训练
    - 找到一个“包裹正常数据”的超平面或边界
    - 新数据如果落在边界外，就判为异常

- <b>适用场景：</b>
    - 正常数据充足，异常数据稀缺
    - 需要模型泛化能力

- <b>优点：</b> 可扩展到高维空间
- <b>缺点：</b> 对参数敏感，训练成本高

### Reconstruction-Based（重构方法）

- <b>代表算法：AE（Autoencoder），AA（Archetypal Analysis）</b>
- <b>核心思想：</b>  
用模型重构输入数据，<b>重构误差大的点可能是异常</b>。
- <b>Autoencoder：</b>
    - 编码器压缩数据 → 解码器重建数据
    - 正常数据能很好重建，异常数据重构误差大

- <b>Archetypal Analysis：</b>
    - 用少数“原型”点表示数据
    - 异常点无法用原型有效表示

- <b>适用场景：</b>
    - 高维数据、图像、序列等复杂结构
    - 深度学习场景

- <b>优点：</b> 表达能力强，适合非线性结构
- <b>缺点：</b> 可解释性差，训练复杂

---

## Reconstruction-Based Detection（重构式检测）

这是异常检测中最具表达力的一类方法.

<b>Tuition:</b><em>Train model to learn </em><b>low-dimensional representation</b><em> of data, then model </em><b>attemps to reconstruct</b><em> the original input from compressed code</em>

<b>Hypothesis: </b>

- <em>normal patterns: frequent/learned well → low reconstruction error</em>
- <em>outlier:rare pattern/noise not captured by latent space→high reconstruction error</em>

核心思想是：

用模型重构输入数据，重构误差大的点可能是异常。

它包含两个主要技术路径：

### Autoencoders (AE)：神经网络式重构

<b>Non-linear compression using Neural Networks. </b>

Autoencoder 就是：把输入压缩成低维 latent，再从 latent 重建输入，通过最小化重建误差来学习“正常模式”。

<img src="/assets/UDJDbnQw0ohxW7xiLTFcOBM2nPg.png" src-width="914" src-height="338" align="center"/>

#### <b>结构拆解：</b>

1. <b>Encoder（编码器）：</b>  
把高维输入$x$压缩成低维潜在表示$h$（latent representation），提取数据的核心特征 <em>learns low dimensional data descriptions</em> 。
    - $p_i^{(1)}=W^{(1)}·x_i+b^{(1)}$   $h=f(p^{(1)})$
        - $W^{(1)}$：编码器的权重
        - $b^{(1)}$：偏置
        - $p^{(1)}$：预激活输入
        - $f$：激活函数（ReLU、sigmoid 等）
        - $h$：latent code（低维表示）

2. <b>Decoder（解码器）：</b>  
从latent $h$重建$\hat x$，尝试“还原”原始输入$x$。
    - $p_i^{(2)}=W^{(2)}h_i+b^{(2)}$ $\hat x=g(p^{(2)}_i)$
        - $W^{(2)}$：解码器的权重
        - $g$：激活函数（ReLU、sigmoid 等）
        - $\hat x$：重建后的输入

3. <b>Error（误差）：</b>  
计算原始输入与重建结果之间的差异，作为异常度量。<em>Train by minimizing reconstruction loss </em>常用指标有 MSE（均方误差）、MAE（平均绝对误差）等。
    - Reconstruction Loss 训练目标 $L=∑_{i=1}^nℓ(x_i,\hat x_i)$
    - 常用损失MSE：$ℓ=\frac{1}{2}∥x_i−\hat x_i∥^2$让重建的$\hat x$尽可能接近原始输入$x$

4. <b>Matrix factorization interpretation 矩阵分解角度</b>(linear activation function)<b>：</b>
    - $$xi≈W^{(2)}(W^{(1)}·x_i)$$
    - $W^{(1)}$ 看成 <b>投影矩阵</b>（把 x 投影到低维 latent）
    - $W^{(2)}$看成 <b>重建矩阵</b>（从 latent 重建 x）
    于是：$x_i≈C·p_i$
    其中：
    - $$C = W^{(2)}$$
    - $p_i = W^{(1)}·x_i$ 

#### 分类

One-class classification 单类分类

训练时只给模型看一种类别的数据（正常类），不提供其他类别。

eg：你只有“数字 4”的样本，没有“0、1、2、3、5、6、7、8、9”的样本

Reconstruction-based decision making 意思是：用重建误差来做分类决策。

<b>适用场景：</b>

- Autoencoder 的核心能力是 学习数据的低维结构，因此特别适合：图像、序列、传感器数据等复杂结构
- 无监督学习（只用正常数据训练）
- 可扩展到变种：LSTM-AE、Variational AE、Convolutional AE 等

### Archetypal Analysis（原型分析）

Archetypal Analysis（原型分析）可以理解为： 不是去找“平均玩家/平均行为”，而是去找<b>极端代表性行为模式（原型）</b>，然后用这些原型来解释其他样本。

#### Offline Phase 先学习“正常行为的模式”

<b>目标：从历史数据中学习 archetypes（极端典型行为），并建立正常行为的分布。</b>

- <b>Step 1: Data Collection</b>（数据收集）收集大量历史数据，这些数据通常代表正常行为。
- <b>Step 2: Feature Engineering</b>（特征工程）把原始数据转成可用于分析的特征，这个步骤的目标是把复杂行为转成可比较的数值向量。
- <b>Step 3: Archetype Analysis</b>（AA 极点分析）AA 会找到一组 <b>archetypes（极端典型行为）</b>：
    - 每个 archetype 是数据空间的“极端点”
    - 所有数据点都可以表示为这些 archetypes 的凸组合
    - $xi≈Z·h_i$  其中：Z：archetypes（矩阵）；$h_i$：每个数据点的系
    AA 的作用是：
    > <b>学习行为的“原型模式”</b>

- <b>Step 4: Distribution of Archetypes</b>（Archetype 分布建模）对所有训练数据的 hi（系数）进行统计：
    - 哪些 archetypes 常见
    - 哪些组合代表正常行为
    - 哪些区域几乎没有数据（潜在异常区域）
    这一步建立了 <b>正常行为的 latent 分布</b>。

<b>本质：</b>  
Offline Phase 是在回答——

> “在历史数据中，存在怎样的一些‘典型打法/典型局势原型’（原型）？”

---

#### Online Phase：Anomaly Detection

<b>目标：实时检测新数据是否偏离正常 archetype 结构。</b>

对每个新数据点 $x_i$：
1. 用 AA 重建它：

$x_i=Z·h_i$ 其中 hi 是通过投影求得的系数。
1. 计算重建误差：$∥x_i−\hat x_i∥^2$
2. 用重建误差作为异常评分（outlier measure）
误差小 → 数据点符合 archetypes → 正常
误差大 → 无法用 archetypes 重建 → 异常

<b>叙事意义：</b>  
 重构误差高的时间段 = 值得被重点讲述的瞬间。

<b>结构拆解：</b>

- <b>Interpretable matrix factorization（可解释矩阵分解）：</b>  
将数据表示为少数 archetypes（原型点）的稀疏线性组合。
- <b>Extreme points basis（极端点构成基底）：</b>  
原型点是数据空间中的“极端代表”，类似于边界点或典型行为。
- <b>Unsupervised approach（无监督方法）：</b>  
不需要标签，仅依赖数据结构本身。

<b>适用场景：</b>

- 需要可解释性（比如行为分析、战术建模）
- 数据维度不太高，结构清晰
- 强调“原型”而非“平均”——适合分析极端行为或策略

### AE vs AA：对比总结

🔁 统一机制：分解 → 重建 → 误差评估

你已经总结得很到位：这些方法本质上都是在做结构建模 + 重建 + 误差判断。

---

## Esports Case Study (LoL)：电竞落地案例

这是我们把理论应用到真实场景的部分，目标是：

### 🎯 Goal: Improved Storytelling（提升赛事叙事）

电竞数据不仅用于战术分析，还可以用于<b>自动生成精彩片段、讲述比赛故事、增强观众体验</b>。异常检测在这里的作用是：

> <b>识别那些“打破常规”的时刻——它们往往就是比赛的转折点或高光时刻。</b>

### 📊 Features（用于建模的关键数据）

这些是你可以用来构建异常检测模型的输入特征：

- <b>Gold and XP（经济与经验）</b>
    - 异常增长可能意味着团战胜利、偷资源、运营成功。

- <b>Building/Nexus kills（建筑/主水晶击破）</b>
    - 通常是比赛结束的标志，但如果发生得突然或非预期，就是异常事件。

- <b>Objective kills（Baron/Dragon 击杀）</b>
    - 这些是战略资源，异常击杀可能意味着偷龙、抢大龙、运营突破。

- <b>Champion/Minion kills（英雄/小兵击杀）</b>
    - 可以用击杀密度、时间窗口内的爆发性变化来检测异常。

这些特征可以作为输入，喂给 AE 或 AA 模型，训练“正常比赛节奏”，然后识别偏离的片段。

### 🧬 Archetypes（行为原型）

这是你用来做“原型建模”的部分，和前面的 Archetypal Analysis 模块呼应。

每个 archetype 表示一种典型的比赛阶段或战术行为：

- <b>Laning（对线期）</b>
    - 正常行为，节奏稳定，击杀少，资源积累为主。

- <b>Baron Power Play（大龙强势期）</b>
    - 击杀、推进、经济暴涨，节奏突然加快。

- <b>Defending Nexus（守家）</b>
    - 高密度防守行为，可能出现极端操作或奇迹翻盘。

- <b>Dragon Fight（小龙团战）</b>
    - 时间集中、位置集中、伤害爆发，异常密度高。

- <b>Sieging（推进）</b>
    - 持续压塔、兵线控制、资源争夺，节奏逐步加快。

这些 archetypes 可以作为 AA 的原型点，训练模型识别“正常行为”，然后检测偏离这些 archetypes 的片段。

#### 🏗️ 系统架构蓝图：异常检测 + 电竞叙事系统

```text
[数据采集模块]
  ↓
[特征工程模块]
  - Gold, XP, Kills, Objectives
  ↓
[行为建模模块]
  - AE: 学习正常节奏
  - AA: 建立行为原型
  ↓
[异常检测模块]
  - 重构误差 / 原型偏离
  ↓
[高光判定模块]
  - 时间窗口聚合
  - 异常密度评分
  ↓
[故事生成模块]
  - 自动生成“高光片段”标签
  - 生成比赛叙事结构
```

# Predictive Data Mining I

<img src="/assets/HCBvbkOXlooMLIxScAdc7bdRn3z.png" src-width="1202" src-height="808" align="center"/>

## Decision Trees（决策树：结构、划分、优势）

### Core Concepts（核心概念）

#### Recursive Partitioning

递归地将数据划分为更纯的子集，直到满足停止条件（如纯度、深度、样本数）。

#### Internal Nodes：Feature Tests

每个内部节点是一个特征测试, 用于决定分支方向。：

- “年龄 &gt; 30？”
- “收入 &lt; 5000？”

#### Leaf Nodes：Predictions

叶子节点输出最终预测：

- 分类标签
- 回归值

### Split Selection（划分选择）

#### Gini Impurity

衡量节点不纯度：

$Gini = 1 - \sum p_i^2$ 其中 $p_i$ 是第 i 类的概率。

#### Impurity Reduction（信息增益Gain）

选择使 impurity 降低最多的特征作为划分依据。

#### Greedy Training

每一步都选择当前最优划分，而不是全局最优。

### Advantages

- <b>Interpretability</b>：可解释性强，每个决策路径都清晰可见。
- <b>Fast Inference</b>：推理速度快，适合实时系统。
- <b>Mixed Feature Support</b>：支持数值+类别特征

## Churn & Retention（流失与留存：目标、应用、示例）

### Objective：Predict User Departure

<b>核心目标：预测用户是否会流失</b>

- 流失定义：如 30 天无活跃
- 建模方式：二分类 流失 vs 留存
- 标签构建：基于行为窗口（如过去 30 天无活跃行为 → 标记为流失）

---

### Applications：LTV, Acquisition, Support

---

### Example：Tutorial Completion vs Sessions

这是一个非常典型的<b>行为特征与留存之间的关系分析</b>：

<b>假设：</b>完成新手教程的用户更可能长期留存

<b>分析方式：</b>

- 分组对比：完成 vs 未完成教程的用户，平均会话数/活跃天数
- 可视化：箱线图、分布图、留存曲线
- 建模：将“是否完成教程”作为一个重要特征输入到流失预测模型中

## Class Imbalance & SMOTE（类别不平衡与 SMOTE）

### Problem: Sparsity and Rarity

<b>典型场景：</b>

- 客户流失预测：流失用户占比可能只有 5%
- 欺诈检测：欺诈交易占比 &lt;1%
- 医疗诊断：罕见病样本极少

### SMOTE Algorithm（合成少数类样本）

SMOTE（Synthetic Minority Over-sampling Technique）是一种<b>数据级别的解决方案</b>，通过合成新样本来平衡类别分布。

#### Synthetic Interpolation

在少数类样本之间插值生成新样本，而不是简单复制。

#### k-Nearest Neighbors

对每个少数类样本，找出其 k 个邻居作为插值参考。

#### Mixed Feature Distances

对混合型特征（数值+类别）需使用特殊距离度量（如 Gower 距离）。

公式简化：

$$x_{new}=x_i+δ⋅(x_j−x_i),δ∈[0,1]$$

其中 xi 是原始少数类样本，xj 是其邻居。

---

### Pitfalls（陷阱）

<b>建议：</b>

- <b>采样顺序：</b>先划分训练/测试集，再对训练集做 SMOTE
- <b>标准化顺序：</b>先标准化，再做 SMOTE（或用 pipeline 保证顺序）
- <b>边界控制：</b>使用 `Borderline-SMOTE` 或 `SMOTE-Tomek` 等变体减少噪声

## Evaluation Metrics（评估指标：混淆矩阵、精确率、召回率、F1、AUC）

### Confusion Matrix

<b>解释：</b>

- <b>TP</b>：模型正确预测为正的样本数量
- <b>FP</b>：模型错误预测为正的负样本数量
- <b>FN</b>：模型错误预测为负的正样本数量
- <b>TN</b>：模型正确预测为负的样本数量

### Accuracy

$Accuracy = \frac{TP + TN}{Total}$ 

- 简单直观,适用于类别分布均衡的场景
- 在类别不平衡时可能误导，比如 95% 的负类 → 模型全预测为负也有 95% 准确率

<b>建议：</b>

- 在报告中标注类别分布，避免误解准确率

---

### Precision & Recall

<table>
<colgroup>
<col width="100"/>
<col width="124"/>
<col width="262"/>
</colgroup>
<tbody>
<tr><td><p><b>指标</b></p></td><td><p><b>公式</b></p></td><td><p><b>解释</b></p></td></tr>
<tr><td><p><b>Precision</b></p></td><td><p>$$\frac{TP}{TP+FP}$$</p></td><td><p>预测为正的样本中，真正为正的比例</p></td></tr>
<tr><td><p><b>Recall</b></p></td><td><p>$$\frac{TP}{TP+FP}$$</p></td><td><p>实际为正的样本中，被正确预测的比例</p></td></tr>
</tbody>
</table>

- <b>Precision 高</b>：误报少（适用于广告点击预测、推荐系统）
- <b>Recall 高</b>：漏报少（适用于疾病检测、欺诈识别）

### F1-Score

$F1 = 2 \cdot \frac{PR}{P + R}$ 

<b>特点：</b>

- 是 Precision 和 Recall 的调和平均
- 在类别不平衡时更稳定，适合综合评估模型表现

---

### AUC / Balanced Accuracy

#### AUC

- ROC 曲线下的面积，衡量模型在不同阈值下的区分能力
- 越接近 1 越好，0.5 表示随机猜测

#### Balanced Accuracy

$$Balanced Accuracy=\frac{1}{2} (\frac{TP}{TP+FN}+\frac{TN}{TN+FP})$$

- 对类别不平衡更友好，避免多数类主导评估结果

# Predictive Data Mining II

