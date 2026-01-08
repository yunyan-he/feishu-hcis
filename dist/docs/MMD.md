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

# Outlier/Anomality Analysis

## Outlier Concepts（异常点概念）

### 定义：Deviating Observations

- 异常点是<b>偏离整体数据分布或行为模式的观测值</b>。
- 它们可能是错误、罕见事件、或新趋势的信号。

### 特征：Rare and Distinct

- <b>Rare（稀有）</b>：在数据中出现频率极低。
- <b>Distinct（显著不同）</b>：在特征空间中与其他点差异明显。

### 应用场景：

- <b>Fraud Detection</b>：识别欺诈交易或行为。
- <b>Cybersecurity</b>：检测入侵、恶意流量、账号盗用。
- <b>System Health Monitoring</b>：识别设备故障或性能异常。
- <b>Media/Sports Highlights</b>：自动提取高光片段或关键事件。

---

## Methodology Taxonomy（方法论分类）

这是异常检测的技术路径分类，分为四大类：

---

## Reconstruction-Based Detection（重构式检测）

这是我们深入学习的重点模块，包含两种方法：

### 🔹 Autoencoder (AE)

- <b>Encoder</b>：压缩数据为低维潜在表示
- <b>Decoder</b>：从潜在表示重建原始数据
- <b>Error</b>：重建误差作为异常度量
- <b>适合</b>：图像、序列、高维数据；表达力强但可解释性弱

### 🔹 Archetypal Analysis (AA)

- <b>原型建模</b>：用少数极端点表示数据结构
- <b>稀疏组合</b>：每个数据点由原型线性组合构成
- <b>异常判定</b>：无法有效表示的点为异常
- <b>适合</b>：行为建模、战术分析、可解释性强

🔁 统一机制：分解 → 重建 → 误差评估

你已经总结得很到位：这些方法本质上都是在做结构建模 + 重建 + 误差判断。

---

## Esports Case Study (LoL)：电竞落地案例

这是我们把理论应用到真实场景的部分，目标是：

#### 🎯 Goal: Improved Storytelling

- 利用异常检测识别比赛中的“高光时刻”或“转折点”，增强叙事性。

#### 📊 Features（输入特征）：

- Gold and XP
- Building/Nexus kills
- Objective kills（Baron/Dragon）
- Champion/Minion kills

#### 🧬 Archetypes（行为原型）：

- Laning（对线期）
- Baron Power Play（大龙强势期）
- Defending Nexus（守家）
- Dragon Fight（小龙团战）
- Sieging（推进）

这些原型可以作为 AA 的 archetypes，也可以作为 AE 的训练标签或聚类参考。

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

## Media Data Recap

（媒体数据回顾：原型分析 + LoL 叙事）

---

### Archetypal Analysis（原型分析）

Archetypal Analysis（原型分析）可以理解为： 不是去找“平均玩家/平均行为”，而是去找<b>极端代表性行为模式（原型）</b>，然后用这些原型来解释其他样本。

#### Offline Phase：Data & Features

<b>目标：构建“原型空间”</b>

- 数据来源： 
    - 游戏日志（LoL）、事件流、时间序列
    - 每分钟经济、经验、击杀、建筑物控制等

- 特征设计： 
    - <b>Gold（经济）</b>：经济差、增长速度
    - <b>XP（经验）</b>：等级差、经验获取节奏
    - <b>Kills（击杀）</b>：单杀、团战击杀、连杀
    - <b>Structures（建筑）</b>：塔、龙、先锋、男爵

- 数据处理： 
    - 标准化
    - 降维（如 PCA）
    - 构建时间片特征向量

<b>本质：</b>  
Offline Phase 是在回答——

> “在历史数据中，存在怎样的一些‘典型打法/典型局势原型’（原型）？”

---

#### Online Phase：Anomaly Detection

<b>目标：在实时或新数据中发现“异常故事点”</b>

有了原型之后，每一局新比赛、每一个时间片，都可以：

- 将新比赛/时间片投影到原型空间
- 计算与最近原型的距离
- 偏离越大 → 越“异常”
- 异常含义： 
    - 突然经济暴涨
    - 团战一波翻盘
    - 奇怪的运营路线
    - 极端激进/极端佛系打法

这些异常就是解说最爱讲的“故事节点”。

---

#### Measure：Reconstruction Loss

原型分析通常会用原型的线性组合来近似重构一个样本：

$$x≈∑_kα_k⋅a_k$$

其中 $ak$ 是原型，$αk$ 是权重。

<b>核心度量：重构误差</b>

$$L=∥x−\hat x∥$$

- <b>L 小</b>：样本“很典型”
- <b>L 大</b>：样本“不正常”，可能是关键事件

<b>叙事意义：</b>  
 重构误差高的时间段 = 值得被重点讲述的瞬间。

### Storytelling in LoL：用数据讲比赛故事

#### Dataset：Oceania Region Matches

- 区域数据量适中
- 包含比赛级、时间级、事件级数据

#### Features：Gold, XP, Kills, Structures

这些特征是“故事的量化语言”：

- Gold：滚雪球、暴富
- XP：等级压制
- Kills：战斗主导权
- Structures：地图控制

#### Archetypes: Laning, Jungling, Team Fights

这里的“Archetypes”可以理解为<b>三类典型局势/阶段原型</b>：

- <b>Laning（对线期）</b>：线权、补刀、抓人
- <b>Jungling（野区节奏）</b>：资源控制、入侵、反野
- <b>Team Fights（团战）</b>：开团方式、技能命中、伤害分布

<b>连接回原型分析：</b>  
 每类阶段都可以学习一组原型 → 用来解释比赛处于哪种“故事模板”。

---

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

