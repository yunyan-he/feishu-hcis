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

# √Outlier/Anomality Analysis

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

# √Predictive Data Mining I

<img src="/assets/HCBvbkOXlooMLIxScAdc7bdRn3z.png" src-width="1202" src-height="808" align="center"/>

## Decision Trees（决策树：结构、划分、优势）

在“Predictive Data Mining I”的教学语境下，来源将<b>决策树（Decision Trees, DTs）</b> 视为一种基础且强大的“分而治之”（Divide and Conquer）方法，用于通过递归划分特征空间来近似函数关系。

<b>Decision trees are transparent, interpretable predictive models</b>

以下是来源对决策树复习要点的详细看法：

### Core idea & building blocks

<b>Decision trees recursively partition the feature space into regions that are (ideally) homogeneous. </b>

<b>divide and conquer approach to approximate functions</b>

决策树被描述为一种将特征空间<b>feature space</b>递归划分<b>recursively partition</b>为（理想情况下）<b>同质区域（Homogeneous regions）</b> 的结构。分而治之<b>divide and conquer</b>来逼近目标函数<b>approximate functions</b>其基本组成单元包括：

- <b>内部节点（Internal node）：</b> 代表对特定特征及阈值的测试<b>test</b> （例如：$f2\_activeDuration \le 1904.03$）。
- <b>叶子节点（Leaf）：</b> 代表最终的预测结果<b>prediction</b>，可以是<b>类别标签class label</b>（分类）或<b>数值numeric value</b>（回归）。
    
### Advantages

来源强调了决策树在预测性挖掘中的三个主要优点：

- <b>可解释性interpretable rules：</b> 生成的规则易于人类理解。
- <b>推理速度快fast inference：</b> 在预测阶段的计算效率极高。
- <b>处理混合特征works with mixed feature types：</b> 能够同时处理数值型和名义型（类别型）特征。
    
### Greedy & Impurity

决策树的构建training是一个<b>贪婪（Greedy）的过程，其核心在于每一层的分裂选择（Split Selection）</b>：

- <b>目标：</b> 在每个节点选择能实现<b>最佳不纯度减少（ choose the split with the best impurity reduction</b> 的分裂方案。
- <b>衡量指标（基尼不纯度）：</b> 使用 Gini Impurity 来衡量节点的混乱程度。
    - 多分类公式为 $gini(q)=1−∑_{c∈C}p(c∣q)^2$,一个节点 q 中有不同类别的样本, $p(c∣q)$ 是类别 c 在该节点中的比例
    - 二元分类简写为 $1 - p^2 - (1-p)^2$。
    - Gini impurity 越高代表节点越混乱，越混乱, $p=0.5$最混乱

- <b>Impurity reduction （Gain）：</b> 通过父节点不纯度减去左右子节点不纯度的加权总和来计算增益 $\Delta(s)$，算法会选择 $\Delta(s)$ 最大的分裂点。
    - $$Δ(s)=gini(q)−\frac{∣q_L∣}{∣q∣}\cdot gini(q_L)−\frac{∣q_R∣}{∣q∣}\cdot gini(q_R)$$
    - $q$：当前节点
    - $q_L、q_R$：切分后左右子节点
    - $\frac{∣q_L∣}{∣q|}$：左子节点占比
    - $\frac{∣q_R∣}{∣q|}$：右子节点占比
    gain = 原本的混乱度 − 切分后加权平均混乱度
    ### 
### Stopping

为了防止树无限生长，来源列举了四种停止分裂的条件：<b>达到最大深度max depth</b>、<b>样本数低于最小值min samples</b>、<b>无法获得进一步增益no gain,</b>，或者节点已经变为<b>纯净节点（Pure node）</b>。

### Algorithm

决策树就是一个递归函数，它不断：

1）检查是否应该停止

2）如果不停止，就找最好的切分

3）把数据分成左右两份

4）对左右两份继续建树

```text
Procedure BuildTree(Data, Depth):

    if StoppingCondition(Data, Depth) is met then
        return CreateLeafNode(Data)

    best_split ← None
    max_gain ← −∞

    foreach feature f ∈ Features do
        gain ← CalculateInformationGain(Data, f)
        if gain > max_gain then
            max_gain ← gain
            best_split ← f

    Dataleft, Dataright ← Split(Data, best_split)

    Nodeleft ← BuildTree(Dataleft, Depth + 1)
    Noderight ← BuildTree(Dataright, Depth + 1)

    return CreateNode(best_split, Nodeleft, Noderight)
```

### 典型应用案例：流失预测（Churn Prediction）

来源重点利用<b>用户流失预测</b>展示了决策树的实际应用：

- <b>目标：</b> 识别哪些用户会离开（Churn prediction:），哪些会留下（Retention prediction），以便进行预防性干预Preventive actions。
- 首先明确task，what we want to predict 

1. Task: predict Churn/stay
2. Have 2 candidate splits {A, B}

<b>Step 1</b>: calculate parent gini

Using the task paremeter to compute

$$Parent: Churn=6, Stay=4 ⇒ p_1 = 6/10 , p_0 = 4/10$$

$$gini(parent) = 1−  (6/10)^2 −  (4 /10)^2 = 1−0.36−0.16 = 0.48$$

<b>Option 1 split A</b>

A split nodes into 2 class
- A yes: 4 nodes, 1 churn, 3 stay
    - $$gini(Yes) = 1−  (1/4)^ 2 −  (3/4)^ 2 = 0.375$$
- B No: 6 nodes, 5 churn, 1 stay
    - $$gini(Yes) = 1−  (5/6)^ 2 −  (1/6)^ 2 ≈ 0.278$$
- Weighted impurity: $gini(split A) = 4/10 · 0.375+ 6/10 · 0.278 ≈ 0.150+0.167 = 0.317$
- Impurity reduction/gain : $∆A = 0.48−0.317 ≈ 0.163$

<b>Option 2 split B</b> 

B split nodes into 2 class
- A yes: 4 nodes, 1 churn, 3 stay
    - $$gini(Yes) = 1−  (1/4)^ 2 −  (3/4)^ 2 = 0.375$$
- B No: 6 nodes, 5 churn, 1 stay
    - $$gini(Yes) = 1−  (5/6)^ 2 −  (1/6)^ 2 ≈ 0.278$$
- Weighted impurity: $gini(split A) = 4/10 · 0.375+ 6/10 · 0.278 ≈ 0.150+0.167 = 0.317$
- Impurity reduction/gain : $∆A = 0.48−0.317 ≈ 0.163$

- <b>Problem</b>: split A and split B tie.
    Typical tie-breakers: 
    - first feature encountered  遍历特征时遇到的第一个 gain 最大的 split 就被选中
    - smallest threshold 对于数值型特征（例如 Sessions），决策树会尝试不同的切分点，如果同一个特征有多个阈值 gain 相同，会选最小的阈值。
    - additional criteria (e.g., max information gain, min leaf size, etc.)
    
### 相关挑战：稀疏性与罕见性

尽管决策树功能强大，但在处理<b>少数类样本（Minority class）</b> 过少导致的分类偏倚（Biased classification）时存在局限。为此，来源引入了 <b>SMOTE</b> 技术，通过在少数类邻居之间进行插值来生成合成样本，以平衡数据并优化决策边界。

---

<b>比喻理解：</b>

决策树就像是在玩一场<b>“二十个问题”的智力游戏</b> 。模型从最能区分人群的那个问题开始提问（比如“你是否经常登录？”），然后根据你的回答继续追问更细致的问题，直到它能准确地把你归类为“忠实用户”或“即将流失的用户”。每一层提问的目的都是为了让剩下的群体尽可能地“纯净”和“一致”。

---

## Class Imbalance & SMOTE

### Problem: Sparsity and Rarity

Minority class too small ⇒ biased classification   少数类样本太少 ⇒ 分类器偏向多数类

<b>Typical case：</b>

- <b>sparse arrival / usage patterns </b>用户使用产品的频率很低、很不规律。
- <b>predicting long-term retainers vs. churners  </b>预测哪些用户会长期留下（retainers），哪些会流失（churners）。长期留存用户少/流失少
- <b>detecting fraudulent or premium users </b>欺诈用户、付费用户都属于 极少数群体。

<b>Why this is hard</b>

1. Most models optimize the majority class unless we counteract it

大多数机器学习模型会自动偏向“多数类”。

例如：

- 10000 个正常用户
- 10 个欺诈用户

如果模型什么都不做，预测“所有人都是正常用户”，

准确率仍然是 99.9%。

→ 但模型完全没学到如何识别欺诈用户。

这就是 class imbalance（类别不平衡） 的典型问题。

1. Evaluation must match the goal (precision/recall trade-offs)

评估指标必须根据目标来选。

例如：

- 欺诈检测：宁愿多抓错，也不能漏掉（高 recall）
- 高价值用户预测：宁愿少推荐，也不能推荐错（高 precision）

所以不能只看 accuracy（准确率），

必须根据任务选择：precision、recall、F1、ROC-AUC、PR-AUC等等。

### SMOTE 

SMOTE（Synthetic Minority Over-sampling Technique）是一种<b>数据级别的解决方案</b>，通过合成新样本来解决Minority class too small ⇒ biased classification的问题

#### SMOTE Idea

- Do not duplicate minority points (can overfit) 在少数类样本之间插值生成新样本，而不是简单复制。
- Synthetic minority points by interpolating between nearby minority neighbors SMOTE 的做法是：找到某个少数类样本的邻近少数类样本,在它们之间 插值（interpolation）,生成新的、合成的少数类样本
    - 例如: 如果少数类样本 A 和 B 是邻居，SMOTE 会生成：$x_new=A+λ(B−A),λ∈[0,1]$ 这样得到的新点：
        - 不会重复
        - 更自然
        - 更能扩展少数类的分布形状

#### Feature types

1. <b>numeric attributes indexed by V</b>

- 数值型特征
- 用索引集合 V 表示

1. <b>nominal/categorical attributes indexed by B</b>

- 类别型特征
- 用索引集合 B 表示
- 例如：国家、性别、设备类型

#### Data point

数据点与数据集的数学定义：

一个数据点 x 由：

- $∣V∣$ 个数值特征（属于 R）
- $∣B∣$ 个类别特征（属于有限集合 N）

组成：

$$x∈R^{∣V∣}×N^{∣B∣}$$

- 在“数值方向”上有 $∣V∣$ 个维度
- 在“类别方向”上有 $∣B∣$ 个维度

整个数据集：$X={x_1,…,x_n}$

<b>Minority set</b>

少数类样本的索引与集合

- $J$：少数类样本的<b>索引集合 </b>
- $\hat n=∣J∣$：少数类样本<b>数量</b>
- $X_p={x_{J[1]},…,x_{J[\hat n]}}$：所有少数类样本的集合

SMOTE 只在这些少数类样本之间生成新样本。

#### SMOTE Algorithm

<b>Step 1: </b>Choose oversampling amount $\tilde{n}$ and neighbor count $k$

选择要生成的样本数量 $\tilde{n}$ 和邻居数量 k。

<b>Step 2</b>: Repeat $\tilde{n}$times
- Sample a minority point<b> </b>$x_i∈X_p$随机选取一个少数类样本。
- Pick a random minority neighbor<b> </b>$x_{nn}$从它的 k 个最近少数类邻居中随机选一个。
- Generate a synthetic point (numeric part) 生成新的合成样本（数值特征部分）:$x_{synth}[V]=x_i[V]+λ(x_{nn}[V]−x_i[V]),λ∈[0,1]$

<b>Step 3</b> : Train on $X ∪ {x_{synth}}$

#### SMOTE with Mixed Features

当数据同时包含 <b>数值特征（numeric）</b> 和 <b>类别特征（nominal/categorical）</b> 时，SMOTE 需要 a distance accounting for numeric + nominal attributes:

1. 定义一种能同时处理两种特征的距离（用于 kNN）
2. 定义如何生成新的合成样本（numeric + nominal）

要点 ：

- 混合距离 = 数值欧氏距离 + 类别 mismatch × 缩放因子  
- 数值特征用插值生成  
- 类别特征默认继承  

##### Distance for kNN（混合特征的距离定义）

SMOTE 需要用 kNN 找“少数类邻居”。  

但如果数据包含 <b>数值 + 类别</b> 特征，欧氏距离不够用。  

因此需要一个 <b>mixed-type distance（混合型距离）</b>。

1. Numeric difference（数值特征差异）

对两个样本 $x_i, x_j$，数值特征集合为 $V$：

$$u_{ij} = x_i[V] - x_j[V]$$

这是一个向量，表示所有数值特征的差。

1. Nominal mismatch（类别特征差异）

对每个类别特征 $l\in B$：

$$q(b_{il}, b_{jl}) =
\begin{cases}
0 & \text{if } b_{il} = b_{jl} \\
1 & \text{otherwise}
\end{cases}$$

意思是：

- 类别相同 → 差异 0  
- 类别不同 → 差异 1  

这是最常用的“0/1 mismatch”方式。

1. Mixed-type distance（混合距离）

将数值差异与类别差异结合：

$$d_{ij} = \sqrt{
u_{ij}^T u_{ij}
+
c^2 \sum_{l=1}^{|B|} q(b_{il}, b_{jl})
}$$

解释：

- 第一项：数值特征的欧氏距离  
- 第二项：类别特征 mismatch 的加权距离  
- $c$：缩放因子，让类别特征的影响与数值特征处于同一量级  
    
1. Scale factor $c$（缩放因子）

页面给出的合理选择：

$$c \leftarrow \text{median}_{l\in V} \, g(x_p^l)$$

其中：

- $g = std$：标准差  
- $x_p^l$：少数类在第 $l$ 个数值特征上的取值  

意思是：

&gt; <b>对每一个数值特征 </b>l<b>，计算它在少数类样本中的标准差，然后把所有标准差的中位数作为类别特征的缩放因子 </b>c<b>。</b>

这样类别特征不会被低估或高估。

##### Generating Synthetic Points（生成合成样本）

找到邻居后，SMOTE 要生成新的样本。

1. Feature-wise mixing vector（特征级混合向量）

定义一个 mixing vector：

$$h_i = \{h_{ij}\}_{j=1}^{|V|}, \quad h_{ij} \in [0,1]$$

<b>每个数值特征都有一个独立的 mixing 系数</b>。

1. Numeric attributes（数值特征生成）

$$x_{\text{synth}}[V] \leftarrow h_i \odot x_i[V] + (1 - h_i) \odot x_{\text{nn}}[V]$$

解释：

- 对每个数值特征做线性插值  
- $\odot$是逐元素乘法  

这比“统一 λ”更灵活。

1. Nominal attributes（类别特征生成）

默认简单策略：

$$x_{\text{synth}}[B] \leftarrow x_i[B]$$

也就是：

&gt; <b>类别特征直接继承原样本的类别值。</b>

（更高级方法会用多数投票或概率采样，但页面只讲默认方法。）

##### <b>Practical Notes（实践注意事项）</b>

1. Data leakage: apply SMOTE only on training folds (never on test data). 如果你对测试集做 SMOTE，模型就提前“看到了”测试集的分布，结果会让模型表现看起来很好，但完全不真实
2. Scaling: use standardized features before kNN (otherwise one feature dominates distance). SMOTE 需要用 kNN 找邻居，而 kNN 的距离对特征尺度非常敏感。如果一个特征范围很大（如收入 0–100000），一个特征范围很小（如年龄 0–100），距离会完全被大范围特征主导，kNN找的邻居会很偏
3. Noise amplification: if minority contains outliers, SMOTE may create synthetic noise. 所以 SMOTE 前最好清洗噪声。
4. Mixed features: for categorical variables use variants like SMOTE-NC (do not interpolate categories). 
    
### Example

二维玩具示例：数据集

假设我们只有两个数值特征：

- $x_1$  最近 7 天的播放次数  
- $x_2$ 最近 7 天的活跃分钟数  

少数类（Churn = 1）有三个点：

|   |   |   |
|---|---|---|
|点|$$x_1$$|$$x_2$$|
|A|2|2|
|B|3|4|
|C|4|3|

多数类（Stay = 0）有很多点，但为了演示省略。

SMOTE 参数：

- $k = 2$：只在少数类内部找 2 个最近邻  
- 生成 1 个合成点（只是为了演示）

提示：用欧氏距离计算 A、B、C 之间的距离。

SMOTE 步骤:

<b>Step 1: </b>Find minority neighbors of A

计算 A = (2,2) 到 B、C 的距离：

$$d(A,B) = \sqrt{(3-2)^2 + (4-2)^2} = \sqrt{5} \approx 2.24$$

$$d(A,C) = \sqrt{(4-2)^2 + (3-2)^2} = \sqrt{5} \approx 2.24$$

因为 $k=2$，所以 A 的邻居就是：$\{B, C\}$

（距离一样没关系，tie 可以接受）

<b>Step 2: </b>Pick one neighbor

SMOTE 会从邻居中随机选一个。假设选到 B = (3,4)。

<b>Step 3: </b>插值生成新点 Interpolate with random λ

SMOTE 的公式：

$$x_{\text{synth}} = A + \lambda (B - A), \quad \lambda \sim U(0,1)$$

取一个随机的$\lambda = 0.6$。

计算：$B - A = (1,2)$

$$x_{\text{synth}} = (2,2) + 0.6 \cdot (1,2) = (2.6, 3.2)$$

这就是新生成的少数类样本。

<b>Step 4</b>: What SMOTE changes

$$\{(2,2), (3,4), (4,3)\}$$

SMOTE 后：

$$\{(2,2), (3,4), (4,3), (2.6,3.2)\}$$

效果：

> <b>the classifier sees a denser minority region and is less likely to ignore it.少数类区域变得更“密集”，分类器更不容易忽略它。</b>

这就是 SMOTE 的核心作用。

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

For imbalance, AUC / balanced accuracy are often more informative than accuracy  
在类别不平衡的数据中，AUC 和 balanced accuracy 往往比 accuracy 更有意义。

# Predictive Data Mining II

## The myPersonality Project

在“Predictive Data Mining I”的课程背景下，来源材料将<b>myPersonality 项目</b>视为行为科学向大数据时代转型的里程碑式研究。该项目通过将数百万个社交媒体“点赞”与高质量的心理学测试相结合，证明了即使是看似无关的“数字面包屑”也能精准揭示个人的隐性特征。

以下是来源对该项目多维度的看法：

### 1. 数据资产：行为足迹与“金标准”的结合

myPersonality 项目的核心在于其数据集的独特性：

- <b>输入端 (X)</b>：包含了 2007 年至 2012 年间，约 58,000 名美国志愿者在 Facebook 上的 <b>55,814 个唯一页面的点赞记录</b>。
- <b>地面真值 (Y)</b>：不仅包含人口统计学数据（年龄、性别、政治宗教立场），还包含了基于 <b>“大五人格”（OCEAN）模型</b> 的心理测验结果。
- <b>核心价值</b>：来源指出，该研究证明了人格特质在很大程度上（40-60%）具有遗传性。因此，从点赞中推断人格不仅是在预测行为，更是在<b>预测先天的生物学特征</b>。
    
### 2. 方法论：应对高维与稀疏性

在预测性挖掘任务中，myPersonality 项目提供了一个处理<b>极度稀疏数据</b>的经典三步走范式：

1. <b>用户-点赞矩阵</b>：由于点赞页面极多（55k+），模型面临“维度灾难”。如果直接进行回归，会因特征过多而立即导致<b>过度拟合</b>。
2. <b>SVD 降维</b>：利用**奇异值分解（SVD）**将 55,000 个稀疏特征压缩为 <b>100 个稠密的潜在因子</b>（如“科技极客”或“主流流行”等聚合品味）。
3. <b>预测建模</b>：基于这些稠密因子，利用<b>线性回归</b>预测连续数值（如年龄、智商），或利用<b>逻辑回归</b>预测二元特质（如性别、政治立场）。
    
### 3. 预测能力：超越传统的局限

来源展示了该模型惊人的预测准确率：

- <b>二元特质</b>：种族预测准确率（AUC）高达 <b>0.95</b>，性别为 <b>0.93</b>，政治倾向为 <b>0.85</b>。
- <b>心理特质</b>：年龄预测的相关系数达到 <b>0.75</b>。对于“开放性”这一特质，数字足迹的预测效度（r=0.43）已非常接近标准心理调查问卷的重测信度（r≈0.50-0.70）。
- <b>隐私侵蚀曲线</b>：来源强调，预测准确率随观察到的点赞数量增加而提升，甚至<b>单个点赞</b>提供的预测信息也高于随机猜测。
    
### 4. 关键洞察：相关性不等于因果关系

通过“<b>卷曲薯条悖论（Curly Fries Paradox）</b>”，来源深入讨论了预测模型的运作逻辑：

- <b>现象</b>：喜欢“卷曲薯条”页面是高智商（High IQ）的强预测指标。
- <b>逻辑</b>：这并非因为吃薯条能提高智商，而是一个**隐藏的混杂因素（Z）**在起作用：高智商的人通过社交网络相互关联，当这个群体中的某个人首先点赞了该页面，点赞行为便在特定的高智商社交集群中发生了病毒式传播。
- <b>结论</b>：预测模型只需利用**相关性（X ↔ Y）**即可生效，无需理解背后的因果机制（Z）。
    
### 5. 社会与伦理影响：从预测到定向

myPersonality 项目的方法论是一把“双刃剑”，它直接促成了**心理特征微观定向（Psychographic Microtargeting）**的诞生：

- <b>商业与政治操纵</b>：该项目是剑桥分析公司（Cambridge Analytica）的理论基础。通过推断选民的人格（如神经质或开放性），可以定制激发特定情感反应（如恐惧或独立感）的政治广告，从而绕过理性讨论，直接触发情绪反应。
- <b>有效性验证</b>：2017 年的研究证实，将广告语调与用户的性格匹配，可使点击率增加 40%，购买量增加 50%。
    
---

<b>比喻理解：</b>

<b>myPersonality 项目</b>证明了社交媒体就像一个透明的<b>数字沙漏</b>。虽然每一粒沙子（一个点赞）看起来微不足道且随机，但随着时间的推移，它们在沙漏底部堆积出的形状却能精准地反映出你的<b>骨架结构</b>（先天人格）。即使你从未在网上提及过自己的信仰或智商，你的品味偏好也会像生物识别信息一样，将你的内在特征暴露无遗。

## Methodology for Digital Footprints

在“Predictive Data Mining I”的背景下，来源材料对**数字足迹方法论（Methodology for Digital Footprints）**的看法集中于如何将海量、稀疏且隐含的社交媒体数据转化为对人类深层心理特征的精准预测。这种方法论标志着行为科学从依赖显性数据（如问卷）向利用隐性“数字面包屑”的重大转变。

以下是来源中详细描述的三个核心步骤及相关洞察：

### 1. 核心挑战：高维性与稀疏性

数字足迹数据（如 Facebook 点赞）具有极端的<b>高维性（High Dimensionality）和稀疏性（Sparsity）</b>。

- <b>矩阵化表示</b>：数据首先被表示为一个稀疏矩阵 $X \in \{0,1\}^{n \times m}$，其中 $n$ 代表用户（约5.8万），$m$ 代表唯一的点赞页面（约5.5万）。
- <b>过度拟合风险</b>：来源明确警告，如果直接对这 5.5 万个原始特征运行回归模型，模型会因为参数过多而<b>立即产生过度拟合（Overfit immediately）</b>，失去泛化能力。
    
### 2. 三步走方法论流程

为了解决上述问题，来源提出了一套标准化的预测流程：

- <b>第一步：构建用户-点赞矩阵</b>：将用户的行为轨迹转化为二进制向量。
- <b>第二步：奇异值分解（SVD）降维</b>：这是该方法论的关键。通过 SVD 将 5.5 万个稀疏特征压缩为<b>100 个稠密的潜在因子（Latent Factors）</b>。这些因子代表了用户的聚合品味（如“科技极客”或“主流流行”），从而实现了信息的提炼。
- <b>第三步：预测建模</b>：基于这 100 个稠密因子训练监督学习模型：
    - <b>线性回归</b>：用于预测数值型特质（如年龄、智商）。
    - <b>逻辑回归</b>：用于预测二元特质（如性别、政治立场、性取向）。
        
### 3. 预测效度与“隐私侵蚀曲线”

这种方法论表现出极高的准确性。例如，种族预测的 AUC 达到 0.95，性别达到 0.93。来源还提出了**“隐私侵蚀曲线”（Privacy Erosion Curve）<b>的概念：预测准确率随观察到的点赞数量增加而提升；甚至</b>单个点赞**提供的信息也高于随机猜测。

### 4. 逻辑核心：相关性而非因果关系

该方法论的一个重要看法是：预测模型<b>利用相关性（</b>$X \leftrightarrow Y$<b>）运作，而无需理解背后的因果机制（</b>$Z$<b>）</b>。

- <b>卷曲薯条悖论（Curly Fries Paradox）</b>：喜欢“卷曲薯条”是高智商的强预测指标，但这并非因果关系，而是因为该页面在特定的高智商社交网络集群中发生了病毒式传播。
    
### 5. 从预测到“心理微观定向”

这种方法论不仅限于学术研究，它还构成了**心理特征微观定向（Psychographic Microtargeting）**的理论基础。通过推断选民的人格特质（如神经质），可以定制特定的“心理钩子”（Psychological hooks）来触发选民的情绪反应而非理性辩论。

---

<b>比喻理解：</b>

数字足迹的方法论就像是一台<b>高度精密的折射镜</b>。原始的数字足迹（点赞、点击）散乱如杂乱的光线，通过 <b>SVD（折射镜）</b> 的聚焦，这些杂乱的光被汇聚成几束清晰的光谱（潜在因子）。即便你从未直接告诉机器你的身份，这几束光谱最终落下的位置（预测模型）也能精准地揭示出你隐藏在阴影中的真实轮廓。

## Insights and Accuracy

在“Predictive Data Mining I”的背景下，来源材料对**洞察力（Insights）与准确性（Accuracy）**的看法不仅关注数值上的精确度，更深入探讨了这些预测结果背后的科学意义、伦理影响以及预测能力的极限。

以下是来源对这一主题的详细讨论：

### 1. 定量准确性：从二元特质到数值特质

这些来源通过 <b>myPersonality 项目</b>展示了基于“数字足迹”的预测模型所能达到的惊人准确度：

- <b>二元属性（Binary Attributes）</b>：使用 **AUC（ROC 曲线下面积）**作为衡量标准（0.5 为随机猜测，1.0 为完美预测）。模型在预测种族（0.95）、性别（0.93）和性取向（0.88）方面表现出极高的准确性。
- <b>数值与心理特质</b>：使用**相关系数（$r$）**进行衡量。年龄预测的相关性极高（$r=0.75$），而智商（0.39）和外向性（0.40）也表现出显著的相关性。
    
### 2. 准确性的“天花板”与金标准对比

一个关键的洞察是，数字足迹预测的准确性正在逼近传统心理学测验的极限：

- <b>接近问卷信度</b>：对于“开放性”这一人格特质，点赞数据的预测准确率（$r=0.43$）已非常接近标准 20 题人格问卷的重测信度（$r \approx 0.50-0.70$）。
- <b>超越行为预测</b>：来源指出，由于人格特质具有 40-60% 的遗传性，这种预测不仅是在推测行为，实际上是在<b>揭示内在的生物学特征</b>。
    
### 3. “隐私侵蚀曲线”：数据量与准确性的关系

来源提出了**隐私侵蚀曲线（Privacy Erosion Curve）**的概念，讨论了信息获取量对准确性的动态影响：

- <b>累积效应</b>：预测准确性随着观察到的点赞数量增加而稳步提升。
- <b>基线突破</b>：即使是<b>单一的一个点赞</b>，也能提供高于随机水平的信息增益。这表明在数字时代，没有所谓的“无辜数据”。
    
### 4. 深度洞察：相关性与因果关系的剥离

准确性并不等同于对因果机制的理解，这是来源中最重要的洞察之一：

- <b>卷曲薯条悖论（Curly Fries Paradox）</b>：喜欢“卷曲薯条”是高智商的强预测指标，但这并非因果关系。
- <b>机制解析</b>：这种准确性源于<b>潜在的混杂因素（社交网络）</b>。高智商人群在社交图中聚集，导致某些内容（如卷曲薯条页面）在特定高智商集群中病毒式传播。
- <b>模型逻辑</b>：预测模型只需利用相关性（$X \leftrightarrow Y$）即可生效，无需理解背后的深层原因（$Z$）。
    
### 5. 准确性的实践转化：微观定向的效力

高准确性的预测能力直接转化为强大的社会影响力工具：

- <b>心理微观定向（Psychographic Microtargeting）</b>：通过推断用户的人格特质（如神经质），广告商可以定制特定的“心理钩子”来触发情感反应。
- <b>科学验证</b>：2017 年的一项实验证明，将广告语调与用户的性格匹配，可使<b>点击率增加 40%，购买量增加 50%</b>。这证明了即使是简单的线性方法（SVD + 回归），在处理大规模稀疏数据时也具有巨大的说服威力。
    
---

<b>比喻理解：</b>

预测模型的<b>准确性</b>就像是一张<b>高分辨率的照片</b>，它能让你清晰地看到一个人的外貌特征（预测结果）；而模型提供的<b>洞察力</b>则像是这张照片背后的<b>解说词</b>，它告诉你为什么照片里的人在微笑——也许不是因为他快乐（因果），而是因为他在一个大家都在微笑的聚会上（社交集群相关性）。即便解说词不完全准确，那张高分辨率的照片也足以让你在人群中一眼认出他。

## Psychographic Microtargeting

在“Predictive Data Mining I”的背景下，来源将**心理特征微观定向（Psychographic Microtargeting）**视为一种从传统的“人口统计学定向”向基于人工智能的人格预测驱动行为操纵的重大范式转移,。

以下是来源对该主题的详细看法：

### 1. 核心理念：“人口统计学已死”

来源提出，传统的定向方式（如针对特定年龄、性别或居住地的群体）存在严重缺陷，因为具有相同人口统计学特征的人可能拥有完全相反的价值观。

- <b>对比示例</b>：例如奥兹·奥斯本（Ozzy Osbourne）与查尔斯王子（Prince Charles），两人虽然在年龄、性别、国籍和财富等人口统计指标上相似，但其人格特质截然不同。
- <b>新范式</b>：微观定向不再关注“你是谁”，而是关注“你是哪种人”（如高神经质者或高开放性者），并据此提供个性化的信息,。
    
### 2. 技术基础：从数字足迹到生物性状

这种方法论建立在 <b>myPersonality 项目</b>的科学发现之上，即通过 SVD 和回归分析等简单数学方法，可以从稀疏的 Facebook 点赞中推断出个人的<b>大五人格（OCEAN）</b>,,。

- <b>生物学意义</b>：由于人格特质具有 40-60% 的遗传性，这种定向不仅是在预测行为，更是在利用个人的<b>先天生物学特征</b>。
- <b>数据规模</b>：剑桥分析（Cambridge Analytica）声称利用这种方法为每位美国选民建立了包含 4,000-5,000 个数据点的个人档案。
    
### 3. 运作机制：心理钩子（Psychological Hooks）

心理特征微观定向的核心假设是：<b>同一件产品或同一个政治议题，可以用不同的“心理钩子”卖给不同的人</b>。

- <b>案例分析：持枪权（第二修正案）</b>：
    - <b>针对高开放性（High Openness）目标</b>：侧重于“独立”和“自由”等抽象概念，视觉效果通常是日落或独自远行的旅行者。
    - <b>针对高神经质（High Neuroticism）目标</b>：侧重于“威胁”、“恐惧”和“保护家人”，视觉效果则采用阴暗的色调、破碎的窗户或入侵者。

- <b>最终目标</b>：通过这种方式<b>绕过理性辩论</b>，直接触发与选民生物人格一致的情绪反应。
    
### 4. 科学验证与有效性

来源指出，虽然某些公司的宣传可能存在夸大，但其底层科学逻辑已得到验证。

- <b>实验数据</b>：2017 年的一项研究通过针对外向者和内向者投放不同语调的化妆品广告证明，当广告语调与用户性格匹配时，<b>点击率增加了 40%，购买量增加了 50%</b>。
- <b>说服效率</b>：这证明了利用数字足迹推断出的心理特质可以大规模地显著提高说服效率。
    
### 5. 伦理警告与社会影响

来源将这种技术描述为一把<b>双刃剑</b>。

- <b>负面影响</b>：它被用于通过推断神经质或开放性等特征来操纵行为，成为政治操纵的理论基础。
- <b>隐私真相</b>：它揭示了一个严峻的现实——<b>不存在所谓的“无辜数据”</b>，即使是看似无关紧要的点赞或点击，也能暴露个人的性取向、政治倾向或智商等敏感属性。
    
---

<b>比喻理解：</b>

<b>心理特征微观定向</b>就像是为每个人量身定制了一把**“心理钥匙”**。传统的广告像是在大门外喊话，希望有人能听到；而这种定向技术则是先偷偷观察你的门锁结构（人格特质），然后精准地制造出一把能直接插进你心锁的钥匙，在你不自觉的情况下推开你的心门，触发你的情绪和行动。

