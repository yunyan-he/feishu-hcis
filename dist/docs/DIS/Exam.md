---
title: Exam
slug: KtpqwJBThilgLukXLE6cKJKSn2c/D0mew4MJxiQkaRk5xybcKBlpnvf
sidebar_position: 1
---


# Exam

## 考试题型与内容

- <b>应用型问题为主</b>：预计会有大量的<b>应用类题目</b>，要求你将视频课程中学到的概念应用到具体情境中。
- <b>回忆型问题</b>：也会包含基础知识的考察，例如列举特定理论的阶段（如 David Liddle 和 Jan Borchers 提出的技术生命周期四个阶段）。
- <b>计算与分析题</b>：可能会涉及公式应用，例如使用 <b>Fitts' Law（费茨法则）</b> 来计算并排列到达不同目标的速度 。
- <b>设计流程分析</b>：要求针对具体开发场景（如旅游规划 App）建议合适的原型设计方法（如垂直原型）并给出理由。

### 1. 回忆型问题（Recall Questions）

卷子中大量出现了要求<b>定义、绘图或列举</b>的题目，分值通常在 2-5 分：

- <b>证据</b>：卷子中要求“画出 7 个动作阶段模型 (Seven Stages of Action)”、“描述 Norman 的概念模型”、“列出 Ubicomp（普适计算）设备的种类”等。
- <b>重复率</b>：关于“技术生命周期/黄金分割点 (Sweet Spot)”和“评估技术的优缺点”几乎在每份卷子中都有体现。
- 考察知识点
    - <b>技术生命周期 (Technology Lifecycle)</b>：列出四个阶段（Enthusiast, Professional, Consumer, Baroque）及 Sweet Spot。
    - <b>动作阶段模型 (Seven Stages of Action)</b>：能够绘制该模型并解释执行隔阂（Gulf of Execution）与评估隔阂（Gulf of Evaluation）。
    - <b>Ubicomp 分类</b>：根据尺寸分类设备（Tabs, Pads, Boards）。
    - <b>历史人物：</b> 考察对 HCI 关键人物及其贡献的记忆（如 Vannevar Bush 或 Douglas Engelbart）。
    - <b>可用性定义</b>：根据 ISO 9241-11 描述可用性的三个维度（Effectiveness, Efficiency, Satisfaction）。
    - <b>评估方法论</b>：列举形成性评估（Formative）与总结性评估（Summative）的区别。
    - 模型定义： 解释什么是“Conceptual Model”（概念模型）。

### 2. 计算与分析题

<b>这是必考题型。</b> 三份卷子中每一份都包含了 <b>Fitts' Law（费茨法则）</b> 的计算。

- <b>证据</b>：题目通常会给出一个界面示意图（如按钮 A, B, C），提供公式 ，让你计算移动时间。
- <b>变体</b>：有的题目会要求你根据计算结果对目标的可达性进行排序（Order the buttons），有的会考察 Shannon 版本的公式。
- 考察知识点：
    - 费茨法则 (Fitts' Law)：核心公式：$ID = \log_2(\frac{D}{W} + 1)$ 。
        - 考察点：计算到达不同目标的时间并排序 ；解释参数 $a$ 和 $b$ 的含义。
    - KLM (Keystroke-Level Model)：
        - 考察点：将用户操作序列转化为算子（K, P, H, D, M, R）；根据规则放置心理准备时间 $M$。
        - 给出一系列操作（点击、移动、按键），要求计算总执行时间，重点考察 $M$（心理准备时间）的放置规则。
    - 视觉搜索 (Visual Search)：
        - 考察点：计算在干扰项增加时，搜索特定目标的时间（考察 Linear vs Parallel Search）。理解线性搜索与平行搜索的时间复杂度差异。
    - 希克法则 (Hick's Law)：
        - 核心公式：$T = b \cdot \log_2(n + 1)$。
        - 考察点：计算从 $n$ 个等概率选项中做出选择的时间。

### 3. 设计流程与案例分析题（Design Process/Scenario）

这类题目通常给出一段小故事（Scenario），让你做决策。

- <b>证据</b>：比如“Paulina 开发旅游 App”的案例，或者“Christian 想测试不同颜色文字的阅读速度”，要求识别<b>自变量和因变量</b>。
- <b>评价类</b>：还有让你判断某种评估方式（如在实验室做压力测试）是否合适，并说明理由。
- 考察内容：
    - 原型设计 (Prototyping)：
        - 考察点：区分水平原型（Horizontal）与垂直原型（Vertical）；根据测试目的（如测试功能深度或界面广度）选择合适原型 。
        - 对比低保真（Low-fidelity）和高保真（High-fidelity）原型的优缺点。
    - 实验设计 (User Study Design)：
        - 考察点：识别自变量 (IV) 和因变量 (DV)；判断是组内设计 (Within-groups) 还是组间设计 (Between-groups)。
        - 给出一个对比两种输入法（如 QWERTY vs T9）的实验，要求识别自变量 (IV) 和因变量 (DV)。
    - 定性分析 (Qualitative Analysis)：
        - 考察点：分析用户访谈数据，提取关键词或主题。
    - 用户研究： 
        - 解释为什么在特定场景下观察法（Observation）比访谈法（Interview）更有效。
    - 评估方法： 
        - 询问在设计早期阶段应该使用哪种评估方法（如启发式评估）。

### 4. 综合应用题（General Application & Models）

这类题目的占比确实很大，且形式多样：

1. <b>交互模型 (Interaction Models)</b>：

- <b>STN (State Transition Networks)</b>：为简单界面绘制状态转换图，识别“状态爆炸”问题。
    - 为一个带有“取消”功能的自动售货机绘制状态转换网络 (State Transition Network)。

- <b>Petri Nets</b>：解释其如何解决 STN 无法处理的并行任务问题（如多选）。

1. <b>设计原则 (Design Principles)</b>：

- <b>Norman 的原则</b>：识别界面中的 Affordance（预设用途）、Signifiers（示能信号）、Mapping（映射）和 Constraints（约束）。
    - 给出物理设备的图片（如旧式收音机），让学生指出其中的 Mapping（映射）或 Constraints（约束）问题。

- <b>格式塔心理学 (Gestalt Laws)</b>：指出界面设计中应用了哪些定律（如 Proximity, Similarity, Continuity）。

1. <b>输入技术 (Input Techniques)</b>：

- <b>考察点</b>：对比不同输入设备的自由度（DOF）和控制显示增益（C/D Gain）。

还考察：

- <b>GOMS/KLM</b>：这是卷子中的重头戏。要求将操作翻译成算子（Operators），并根据规则添加或删除 （心理准备时间）。
- <b>模型纠错/对比</b>：例如给出一个错误的“概念模型”示意图让你圈出错误并修正；或者对比 <b>STN（状态转换网络）</b> 和 <b>Petri Nets</b>，问哪种更适合建模“文件多选”或“亚马逊结账流程”。
- <b>设计原则应用</b>：给出具体设备图片（如 Apple Watch、速度表、Discman），要求指出其应用的或违反的<b>格式塔心理学（Gestalt Laws）</b>、<b>预设用途（Affordances）或约束（Constraints）</b>。
    
### 总结与备考建议

这三份卷子证明了考试<b>不是死记硬背</b>。你不仅要记住名词，更要：

1. <b>熟练掌握计算</b>：特别是 Fitts' Law 和 GOMS/KLM 的算子规则。
2. <b>理解模型差异</b>：明确 STN 和 Petri Nets 的适用场景（状态爆炸问题）。
3. <b>灵活套用原则</b>：能用 HCI 的术语（Signifiers, Mappings 等）去分析生活中的实际界面。
    
<b>一句话确认：你的总结非常精准，这就是该课程考试的标准套路。</b> 你需要我针对其中某个具体的计算题（比如 GOMS 或 Fitts' Law）讲解一下解题步骤吗？

